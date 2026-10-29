/**
 * Compute "assuntos que mais caem" ranking tables from the question bank,
 * the automated/reproducible version of the client's manual PDF study.
 *
 * For each subject it ranks topics by how often they are the PRIMARY topic
 * (first topic that isn't 'Questões aleatórias'), reporting:
 *   %        share within the subject (shares sum to ~100% per subject)
 *   questões absolute count
 *   anos     number of DISTINCT exam years the topic appeared in
 *
 * Usage:
 *   tsx tools/topic_freq.ts <file.tsx|dir> [more...] [--json out.json] [--min N]
 *   tsx tools/topic_freq.ts provas               # whole ENEM bank
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const RANDOM_TAG = 'Questões aleatórias'

const SUBJECT_NAMES: Record<string, string> = {
  mat: 'Matemática', por: 'Português', lit: 'Literatura', ing: 'Inglês', esp: 'Espanhol',
  his: 'História', geo: 'Geografia', fil: 'Filosofia', soc: 'Sociologia',
  bio: 'Biologia', fis: 'Física', qui: 'Química',
}

type Q = { id: string; year: number | null; subjects: string[]; topics: string[] }

function parseArrayLiteral(s: string): string[] {
  const inner = s.replace(/^\s*\[/, '').replace(/\]\s*,?\s*$/, '')
  const out: string[] = []
  const re = /'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g
  let m: RegExpExecArray | null
  while ((m = re.exec(inner))) out.push((m[1] ?? m[2]).replace(/\\'/g, "'").replace(/\\"/g, '"'))
  return out
}

function parseFile(file: string): Q[] {
  const lines = readFileSync(file, 'utf8').split('\n')
  const qs: Q[] = []
  let cur: Q | null = null
  for (const line of lines) {
    const idM = line.match(/^\s*id:\s*(\d+)\s*,/)
    if (idM) { if (cur) qs.push(cur); cur = { id: idM[1], year: null, subjects: [], topics: [] }; continue }
    if (!cur) continue
    const yM = line.match(/^\s*year:\s*(\d+)\s*,/)
    if (yM) { cur.year = Number(yM[1]); continue }
    const sM = line.match(/^\s*subject:\s*(\[.*\])\s*,\s*$/)
    if (sM) { cur.subjects = parseArrayLiteral(sM[1]); continue }
    const tM = line.match(/^\s*topics:\s*(\[.*\])\s*,\s*$/)
    if (tM) { cur.topics = parseArrayLiteral(tM[1]); continue }
  }
  if (cur) qs.push(cur)
  return qs
}

function collectFiles(paths: string[]): string[] {
  const out: string[] = []
  for (const p of paths) {
    const st = statSync(p)
    if (st.isDirectory()) {
      for (const e of readdirSync(p)) out.push(...collectFiles([join(p, e)]))
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) out.push(p)
  }
  return out
}

function primaryTopic(topics: string[]): string {
  const real = topics.filter((t) => t !== RANDOM_TAG)
  return real.length ? real[0] : '(sem assunto)'
}

function main() {
  const args = process.argv.slice(2)
  const jsonIdx = args.indexOf('--json')
  const jsonOut = jsonIdx >= 0 ? args[jsonIdx + 1] : null
  const minIdx = args.indexOf('--min')
  const min = minIdx >= 0 ? Number(args[minIdx + 1]) : 0
  const paths = args.filter((a, i) => !a.startsWith('--') && !(jsonIdx >= 0 && i === jsonIdx + 1) && !(minIdx >= 0 && i === minIdx + 1))
  const files = collectFiles(paths.length ? paths : ['provas'])

  const qs = files.flatMap(parseFile)
  // subject -> topic -> { count, years:Set }
  const bySubject: Record<string, Map<string, { count: number; years: Set<number> }>> = {}
  const subjectTotals: Record<string, number> = {}
  for (const q of qs) {
    const subj = q.subjects[0] ?? '(sem matéria)'
    const top = primaryTopic(q.topics)
    bySubject[subj] ??= new Map()
    const m = bySubject[subj]
    if (!m.has(top)) m.set(top, { count: 0, years: new Set() })
    const rec = m.get(top)!
    rec.count++
    if (q.year != null) rec.years.add(q.year)
    subjectTotals[subj] = (subjectTotals[subj] ?? 0) + 1
  }

  const report: Record<string, unknown> = {}
  const subjectOrder = Object.keys(bySubject).sort((a, b) => (subjectTotals[b] ?? 0) - (subjectTotals[a] ?? 0))
  console.log(`Banco: ${qs.length} questões · ${files.length} arquivo(s)\n`)
  for (const subj of subjectOrder) {
    const total = subjectTotals[subj]
    const rows = [...bySubject[subj].entries()]
      .map(([topic, r]) => ({ topic, count: r.count, pct: (r.count / total) * 100, anos: r.years.size }))
      .filter((r) => r.count >= min)
      .sort((a, b) => b.count - a.count || b.anos - a.anos)
    const label = SUBJECT_NAMES[subj] ?? subj
    console.log(`${label} (${subj}) — ${total} questões`)
    console.log(`  #  Assunto                                                        %     questões  anos`)
    rows.forEach((r, i) => {
      console.log(
        `  ${String(i + 1).padStart(2)} ${r.topic.padEnd(58).slice(0, 58)} ${(r.pct.toFixed(1) + '%').padStart(6)} ${String(r.count).padStart(8)} ${String(r.anos).padStart(5)}`,
      )
    })
    console.log('')
    report[subj] = { subject: label, total, topics: rows }
  }

  if (jsonOut) { writeFileSync(jsonOut, JSON.stringify(report, null, 2)); console.log(`JSON -> ${jsonOut}`) }
}

main()
