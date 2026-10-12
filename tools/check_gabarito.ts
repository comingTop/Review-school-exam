import { loadProva } from './load.ts'
import { readFileSync } from 'node:fs'
async function main() {
  const [file, keyPath, day] = process.argv.slice(2)
  const key = JSON.parse(readFileSync(keyPath, 'utf8'))
  const official = key[day]
  const langKey = key[day + '_lang']
  const qs = await loadProva(file)
  let mism = 0
  for (const q of qs) {
    let exp = official[String(q.id)]
    if (langKey && q.language && langKey[q.language] && langKey[q.language][String(q.id)]) exp = langKey[q.language][String(q.id)]
    if (q.annulled) continue
    if (exp && q.correct !== exp) { mism++; console.log(`q${q.id}${q.language?'('+q.language+')':''}: file=${q.correct} official=${exp}`) }
  }
  console.log(`\n${mism} mismatch(es) of ${qs.length} questions`)
}
main().catch(e=>{console.error(e.message);process.exit(1)})
