/**
 * Emit per-subject (chunked) classification worklists for the FULL v2 re-tag.
 * Every question is classified by content; the old topic travels as a hint only.
 * Keys already present in build/resolved/*.json (e.g. the Math pilot) are excluded.
 *
 * tsx tools/worklist_v2.ts
 */
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const RANDOM = 'Questões aleatórias'
const CHUNK = 230 // max questions per worklist file

function files(p: string): string[] { const s = statSync(p); return s.isDirectory() ? readdirSync(p).flatMap((e) => files(join(p, e))) : (p.endsWith('.tsx') || p.endsWith('.ts') ? [p] : []) }
function arr(s: string) { const inner = s.replace(/^\s*\[/, '').replace(/\]\s*,?\s*$/, ''); const re = /'((?:[^'\\]|\\.)*)'/g; const o: string[] = []; let m; while ((m = re.exec(inner))) o.push(m[1].replace(/\\'/g, "'")); return o }

const done = new Set<string>()
if (existsSync('build/resolved')) for (const f of readdirSync('build/resolved').filter((x) => x.endsWith('.json'))) {
  const o = JSON.parse(readFileSync(join('build/resolved', f), 'utf8')); for (const k of Object.keys(o)) done.add(k)
}

const bySubj: Record<string, any[]> = {}
for (const f of files('provas')) {
  const lines = readFileSync(f, 'utf8').split('\n')
  let id = '', year = 0, subj = ''
  for (const l of lines) {
    const im = l.match(/^\s*id:\s*(\d+)\s*,/); if (im) { id = im[1]; continue }
    const ym = l.match(/^\s*year:\s*(\d+)\s*,/); if (ym) { year = Number(ym[1]); continue }
    const sm = l.match(/^\s*subject:\s*(\[.*\])\s*,\s*$/); if (sm) { subj = arr(sm[1])[0] ?? '?'; continue }
    const tm = l.match(/^\s*topics:\s*(\[.*\])\s*,\s*$/)
    if (tm) {
      const key = `${f}#${id}`
      if (done.has(key)) continue
      const olds = arr(tm[1]).filter((x) => x !== RANDOM)
      ;(bySubj[subj] ??= []).push({ key, file: f, id: Number(id), year, subject: subj, oldTopics: olds })
    }
  }
}

rmSync('build/work', { recursive: true, force: true }); mkdirSync('build/work', { recursive: true })
const summary: string[] = []
for (const [s, list] of Object.entries(bySubj)) {
  list.sort((a, b) => a.file.localeCompare(b.file) || a.id - b.id)
  if (list.length <= CHUNK) { writeFileSync(join('build/work', `${s}.json`), JSON.stringify(list, null, 2)); summary.push(`${s}: ${list.length} -> ${s}.json`) }
  else {
    const n = Math.ceil(list.length / CHUNK)
    for (let i = 0; i < n; i++) { const part = list.slice(i * CHUNK, (i + 1) * CHUNK); writeFileSync(join('build/work', `${s}_${i + 1}.json`), JSON.stringify(part, null, 2)) }
    summary.push(`${s}: ${list.length} -> ${n} chunks (${s}_1..${s}_${n})`)
  }
}
console.log(`excluded (already resolved): ${done.size}`)
console.log('worklists:')
summary.sort().forEach((x) => console.log('  ' + x))
