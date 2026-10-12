import { loadProva } from './load.ts'
import { readFileSync } from 'node:fs'
async function main() {
  const [file, keyPath, day] = process.argv.slice(2)
  const key = JSON.parse(readFileSync(keyPath, 'utf8'))
  const official = key[day]
  const langKey = key[day + '_lang']
  const qs = await loadProva(file)
  let mism = 0
  let checked = 0
  for (const q of qs) {
    const lookup = String(q.displayId ?? q.id) // language variants carry displayId of the real question
    let exp = official[lookup]
    if (langKey && q.language && langKey[q.language] && langKey[q.language][lookup]) exp = langKey[q.language][lookup]
    if (q.annulled) continue
    if (!exp) { console.log(`q${q.id}: WARN no official answer found (lookup ${lookup})`); continue }
    checked++
    if (q.correct !== exp) { mism++; console.log(`q${q.id}${q.language?'('+q.language+')':''}: file=${q.correct} official=${exp}`) }
  }
  console.log(`\n${mism} mismatch(es); ${checked}/${qs.length} questions actually checked`)
}
main().catch(e=>{console.error(e.message);process.exit(1)})
