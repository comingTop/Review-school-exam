/**
 * Phase C: merge resolved (content-classified) primaries into the clean-mapped base,
 * validate every topic against the v2 taxonomy, and emit per-file tag JSONs that
 * apply_tags.ts consumes. 'Questões aleatórias' is NOT added here (apply_tags appends it).
 *
 * tsx tools/merge_v2.ts            # build + validate, writes build/final/*.json
 */
import { readFileSync, readdirSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const TAX = JSON.parse(readFileSync('tools/topics_taxonomy_v2.json', 'utf8')).subjects as Record<string, string[]>
const allowed: Record<string, Set<string>> = {}
for (const [s, list] of Object.entries(TAX)) allowed[s] = new Set(list.filter((t) => t !== 'Questões aleatórias'))

// load all resolved/<subj>.json -> map key -> {primary, secondary[]}
const resolved: Record<string, { primary: string; secondary?: string[] }> = {}
let resolvedDir: string[] = []
try { resolvedDir = readdirSync('build/resolved').filter((f) => f.endsWith('.json')) } catch {}
for (const f of resolvedDir) {
  const obj = JSON.parse(readFileSync(join('build/resolved', f), 'utf8'))
  for (const [k, v] of Object.entries(obj as Record<string, any>)) resolved[k] = v
}

rmSync('build/final', { recursive: true, force: true })
mkdirSync('build/final', { recursive: true })

const errors: string[] = []
let unresolved = 0, outOfVocab = 0, total = 0

for (const tf of readdirSync('build/tags_v2').filter((f) => f.endsWith('.json'))) {
  const { _file, tags } = JSON.parse(readFileSync(join('build/tags_v2', tf), 'utf8')) as { _file: string; tags: Record<string, { subject: string[]; topics: string[] }> }
  const final: Record<string, { subject: string[]; topics: string[] }> = {}
  for (const [id, rec] of Object.entries(tags)) {
    total++
    const subj = rec.subject[0]
    let topics = [...rec.topics]
    const r = resolved[`${_file}#${id}`]
    if (r) {
      // content classification overrides the clean map (authoritative)
      const sec = (r.secondary ?? []).filter((s) => s && s !== r.primary)
      topics = [r.primary, ...sec]
    } else if (topics[0]?.startsWith('?')) {
      unresolved++; errors.push(`UNRESOLVED ${_file}#${id} (${topics[0]})`); continue
    }
    // else: no content classification and a clean (non-sentinel) primary -> keep clean map as fallback
    // dedup, primary first
    const seen = new Set<string>(); topics = topics.filter((t) => (t && !seen.has(t)) ? (seen.add(t), true) : false)
    // validate vocab
    for (const t of topics) if (!allowed[subj]?.has(t)) { outOfVocab++; errors.push(`OUTOFVOCAB ${_file}#${id} subj=${subj} topic="${t}"`) }
    final[id] = { subject: [subj], topics }
  }
  writeFileSync(join('build/final', tf), JSON.stringify(final, null, 2))
}

console.log(`questions: ${total}`)
console.log(`unresolved sentinels: ${unresolved}`)
console.log(`out-of-vocab topics: ${outOfVocab}`)
if (errors.length) { console.log('\n-- issues (first 40) --'); errors.slice(0, 40).forEach((e) => console.log('  ' + e)) }
else console.log('\nAll primaries resolved and in-vocabulary.')
