/**
 * Replace the `explanation:` field of each question block in a prova .tsx from a reviewed
 * JSON { "<id>": "<explanation text>" }. Handles single-line (`...`, null, '') and multi-line
 * backtick template-literal explanations. Everything else is left byte-identical.
 * Usage: tsx tools/apply_explanations.ts <file.tsx> <expl.json> [--write]
 */
import { readFileSync, writeFileSync } from 'node:fs'

function esc(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
}

function main() {
  const [file, jsonPath] = process.argv.slice(2)
  const write = process.argv.includes('--write')
  const expl: Record<string, string> = JSON.parse(readFileSync(jsonPath, 'utf8'))
  const lines = readFileSync(file, 'utf8').split('\n')
  const out: string[] = []

  let curId: string | null = null
  const applied = new Set<string>()

  for (let i = 0; i < lines.length; i++) {
    const idM = lines[i].match(/^\s*id:\s*(\d+),/)
    if (idM) curId = idM[1]

    const startM = lines[i].match(/^(\s*)explanation:\s*(.*)$/)
    if (startM && curId && expl[curId] != null && !applied.has(curId)) {
      const indent = startM[1]
      const rest = startM[2]
      // Determine where the field ends.
      let endIdx = i
      if (/^`/.test(rest)) {
        // template literal: find the closing backtick line (could be same line)
        const afterOpen = rest.slice(1)
        if (/`\s*,?\s*$/.test(afterOpen)) {
          endIdx = i // single-line backtick
        } else {
          for (let j = i + 1; j < lines.length; j++) {
            if (/`\s*,?\s*$/.test(lines[j])) { endIdx = j; break }
          }
        }
      } else {
        endIdx = i // null, '', or other single-line value
      }
      out.push(`${indent}explanation: \`${esc(expl[curId])}\`,`)
      applied.add(curId)
      i = endIdx
      continue
    }
    out.push(lines[i])
  }

  const missing = Object.keys(expl).filter((id) => !applied.has(id))
  console.log(`explanations provided: ${Object.keys(expl).length}, applied: ${applied.size}`)
  if (missing.length) console.log(`WARN: not applied for ids: ${missing.join(', ')}`)
  if (write) { writeFileSync(file, out.join('\n')); console.log(`WROTE ${file}`) }
  else console.log('(dry run — pass --write to save)')
}

main()
