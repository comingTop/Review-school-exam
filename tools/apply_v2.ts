/**
 * Apply the v2 content classifications to the prova .tsx files.
 * Walks each file BLOCK BY BLOCK in order and keys each question by
 * `${file}#${id}#${subject}` — which is unique even in the 16 files where
 * Espanhol and Inglês share numeric ids (91–95 or 1–5).
 *
 * Rewrites ONLY the `topics:` line of each block: [primary, ...secondary, 'Questões aleatórias'].
 * Leaves `subject:` and everything else byte-identical. Validates every topic
 * against tools/topics_taxonomy_v2.json before writing.
 *
 * tsx tools/apply_v2.ts           # dry run (coverage + vocab report, no writes)
 * tsx tools/apply_v2.ts --write   # write the files
 */
import { readFileSync, readdirSync, writeFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

const RANDOM = 'Questões aleatórias'
const write = process.argv.includes('--write')

const TAX = JSON.parse(readFileSync('tools/topics_taxonomy_v2.json', 'utf8')).subjects as Record<string, string[]>
const allowed: Record<string, Set<string>> = {}
for (const [s, list] of Object.entries(TAX)) allowed[s] = new Set(list)

// load + re-key resolved by subject (from filename), producing file#id#subject
const resolved: Record<string, { primary: string; secondary?: string[] }> = {}
for (const f of readdirSync('build/resolved').filter((x) => x.endsWith('.json'))) {
  const subj = f.replace(/\.json$/, '').replace(/_(rest|\d+)$/, '')
  const o = JSON.parse(readFileSync(join('build/resolved', f), 'utf8')) as Record<string, any>
  for (const [k, v] of Object.entries(o)) resolved[`${k}#${subj}`] = v
}

function files(p: string): string[] { const s = statSync(p); return s.isDirectory() ? readdirSync(p).flatMap((e) => files(join(p, e))) : (p.endsWith('.tsx') ? [p] : []) }
function ser(items: string[]) { return '[' + items.map((s) => `'${s.replace(/'/g, "\\'")}'`).join(', ') + ']' }

let applied = 0, missing = 0, bad = 0
const problems: string[] = []

for (const f of files('provas')) {
  const lines = readFileSync(f, 'utf8').split('\n')
  let id = '', subj = ''
  for (let i = 0; i < lines.length; i++) {
    const im = lines[i].match(/^\s*id:\s*(\d+)\s*,/); if (im) { id = im[1]; subj = ''; continue }
    const sm = lines[i].match(/^\s*subject:\s*\['([a-z]+)'\]\s*,\s*$/); if (sm) { subj = sm[1]; continue }
    const tm = lines[i].match(/^(\s*)topics:\s*\[.*\]\s*,\s*$/)
    if (tm) {
      const rec = resolved[`${f}#${id}#${subj}`]
      if (!rec) { missing++; problems.push(`MISSING ${f}#${id}#${subj}`); continue }
      let topics = [rec.primary, ...(rec.secondary ?? [])].filter((t) => t && t !== RANDOM)
      const seen = new Set<string>(); topics = topics.filter((t) => seen.has(t) ? false : (seen.add(t), true))
      for (const t of topics) if (!allowed[subj]?.has(t)) { bad++; problems.push(`BADVOCAB ${f}#${id}#${subj} "${t}"`) }
      topics.push(RANDOM)
      lines[i] = `${tm[1]}topics: ${ser(topics)},`
      applied++
    }
  }
  if (write) writeFileSync(f, lines.join('\n'))
}

console.log(`${write ? 'WROTE' : 'DRY RUN'} — topics applied: ${applied}, missing: ${missing}, bad-vocab: ${bad}`)
if (problems.length) { console.log('-- problems (first 40) --'); problems.slice(0, 40).forEach((p) => console.log('  ' + p)) }
else console.log('All blocks matched a classification and all topics are in-vocabulary.')
