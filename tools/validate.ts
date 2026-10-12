import { readdirSync, existsSync, statSync, readFileSync } from 'node:fs'
import { resolve, join } from 'node:path'
import { loadProva } from './load.ts'
import { checkProva, type Taxonomy } from './rules.ts'

const ROOT = new URL('..', import.meta.url).pathname
const PROVAS = join(ROOT, 'provas')
const IMAGES_OUT = join(ROOT, 'images_out')

function loadTaxonomy(): Taxonomy {
  const raw = JSON.parse(readFileSync(join(ROOT, 'tools/topics_taxonomy.json'), 'utf8'))
  return raw.subjects as Taxonomy
}

function allProvaFiles(): string[] {
  const out: string[] = []
  for (const year of readdirSync(PROVAS)) {
    const dir = join(PROVAS, year)
    if (!statSync(dir).isDirectory()) continue
    for (const f of readdirSync(dir)) if (f.endsWith('.tsx')) out.push(join(dir, f))
  }
  return out.sort()
}

/** Check every image reference in the file resolves to a real file under images_out/<year>. */
function checkImages(qs: any[], year: string): string[] {
  const problems: string[] = []
  const dir = join(IMAGES_OUT, year)
  const refOf = (p: string) => p.split('/').pop()! // basename the app path
  const exists = (name: string) => existsSync(join(dir, name))
  for (const q of qs) {
    const refs: string[] = []
    if (Array.isArray(q.images)) refs.push(...q.images)
    if (typeof q.image === 'string') refs.push(q.image)
    for (const a of q.alternatives ?? []) if (a.type === 'image') refs.push(a.value)
    for (const r of refs) {
      const name = refOf(r)
      if (!exists(name)) problems.push(`q${q.id}: image file missing: ${name}`)
    }
  }
  return problems
}

async function main() {
  const args = process.argv.slice(2)
  const withImages = args.includes('--images')
  const explicit = args.filter((a) => !a.startsWith('--'))
  const files = explicit.length ? explicit.map((f) => resolve(process.cwd(), f)) : allProvaFiles()
  const taxonomy = loadTaxonomy()

  let total = 0
  const lines: string[] = []
  for (const file of files) {
    const year = file.match(/enem_(\d{4})_/)?.[1] ?? '????'
    const qs = await loadProva(file)
    const problems = checkProva(qs, taxonomy)
    if (withImages) problems.push(...checkImages(qs as any[], year))
    total += problems.length
    const rel = file.replace(ROOT, '')
    lines.push(`${rel}: ${problems.length} problem(s)` + (problems.length && explicit.length ? '\n  - ' + problems.slice(0, 1000).join('\n  - ') : ''))
  }
  console.log(lines.join('\n'))
  console.log(`\nTOTAL: ${total} problem(s) across ${files.length} file(s)`)
  process.exit(total === 0 ? 0 : 1)
}

main().catch((e) => { console.error(e); process.exit(2) })
