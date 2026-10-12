/**
 * Rewrite ONLY the `subject:` and `topics:` lines of each question block in a prova .tsx,
 * from a reviewed tags JSON { "<id>": { subject: string[], topics: string[] } }.
 * Everything else in the file is left byte-identical (structure is never changed).
 * 'Questões aleatórias' is force-appended as the trailing topic if missing.
 * Usage: tsx tools/apply_tags.ts <file.tsx> <tags.json> [--write]
 */
import { readFileSync, writeFileSync } from 'node:fs'

const RANDOM_TAG = 'Questões aleatórias'

function serializeArray(items: string[]): string {
  return '[' + items.map((s) => `'${s.replace(/'/g, "\\'")}'`).join(', ') + ']'
}

function main() {
  const [file, tagsPath] = process.argv.slice(2)
  const write = process.argv.includes('--write')
  const tags: Record<string, { subject: string[]; topics: string[] }> = JSON.parse(readFileSync(tagsPath, 'utf8'))
  const lines = readFileSync(file, 'utf8').split('\n')

  let curId: string | null = null
  let changed = 0
  const missing = new Set(Object.keys(tags))
  const touchedSubj = new Set<string>()
  const touchedTop = new Set<string>()

  for (let i = 0; i < lines.length; i++) {
    const idM = lines[i].match(/^\s*id:\s*(\d+),/)
    if (idM) { curId = idM[1]; continue }
    if (!curId || !tags[curId]) continue
    const subjM = lines[i].match(/^(\s*)subject:\s*\[.*\],\s*$/)
    if (subjM && !touchedSubj.has(curId)) {
      lines[i] = `${subjM[1]}subject: ${serializeArray(tags[curId].subject)},`
      touchedSubj.add(curId); changed++; continue
    }
    const topM = lines[i].match(/^(\s*)topics:\s*\[.*\],\s*$/)
    if (topM && !touchedTop.has(curId)) {
      let topics = [...tags[curId].topics]
      topics = topics.filter((t) => t !== RANDOM_TAG)
      topics.push(RANDOM_TAG)
      lines[i] = `${topM[1]}topics: ${serializeArray(topics)},`
      touchedTop.add(curId); changed++
      missing.delete(curId)
    }
  }

  const notApplied = [...missing]
  console.log(`tags for ${Object.keys(tags).length} ids; subject lines: ${touchedSubj.size}, topics lines: ${touchedTop.size}`)
  if (notApplied.length) console.log(`WARN: ids in JSON not matched in file: ${notApplied.join(', ')}`)
  const incompleteSubj = Object.keys(tags).filter((id) => !touchedSubj.has(id))
  if (incompleteSubj.length) console.log(`WARN: subject not applied for ids: ${incompleteSubj.join(', ')}`)

  if (write) { writeFileSync(file, lines.join('\n')); console.log(`WROTE ${file} (${changed} lines changed)`) }
  else console.log(`(dry run — pass --write to save; ${changed} lines would change)`)
}

main()
