import type { QuizQuestion } from '@/lib/quiz-questions'

const ALT_IDS = ['A', 'B', 'C', 'D', 'E'] as const
const RANDOM_TAG = 'Questões aleatórias'

export type Taxonomy = Record<string, string[]>

/** Pure content/schema checks for one question. Returns human-readable problems (empty = clean). */
export function checkQuestion(q: QuizQuestion, taxonomy: Taxonomy): string[] {
  const problems: string[] = []
  const where = `q${q.id}`

  // --- subject ---
  if (!Array.isArray(q.subject) || q.subject.length === 0) {
    problems.push(`${where}: subject is empty`)
  } else {
    for (const s of q.subject) {
      if (!(s in taxonomy)) problems.push(`${where}: subject '${s}' is not a canonical subject`)
    }
  }

  // --- topics ---
  if (!Array.isArray(q.topics) || q.topics.length === 0) {
    problems.push(`${where}: topics is empty`)
  } else {
    if (!q.topics.includes(RANDOM_TAG)) {
      problems.push(`${where}: topics missing required '${RANDOM_TAG}'`)
    } else if (q.topics[q.topics.length - 1] !== RANDOM_TAG) {
      problems.push(`${where}: '${RANDOM_TAG}' must be the last (trailing) topic`)
    }
    // allowed topics = union of the question's subjects' vocabularies
    const allowed = new Set<string>([RANDOM_TAG])
    for (const s of q.subject ?? []) for (const t of taxonomy[s] ?? []) allowed.add(t)
    for (const t of q.topics) {
      if (!allowed.has(t)) problems.push(`${where}: topic '${t}' outside subject vocabulary`)
    }
  }

  // --- alternatives ---
  const altIds = Array.isArray(q.alternatives) ? q.alternatives.map((a) => a.id) : []
  const expected = ALT_IDS.slice(0, altIds.length)
  if (altIds.length < 2) {
    problems.push(`${where}: fewer than 2 alternatives`)
  } else if (altIds.join('') !== expected.join('')) {
    problems.push(`${where}: alternative ids ${altIds.join('')} are not a prefix of A..E`)
  }

  // --- correct & explanation (annulled questions are exempt) ---
  if (q.annulled === true) return problems

  if (!q.correct || !(ALT_IDS as readonly string[]).includes(q.correct)) {
    problems.push(`${where}: correct '${q.correct}' not in A..E`)
  } else if (!altIds.includes(q.correct)) {
    problems.push(`${where}: correct '${q.correct}' is not among the alternatives`)
  }

  if (q.explanation == null || String(q.explanation).trim() === '') {
    problems.push(`${where}: explanation (resolução) is empty`)
  }

  return problems
}

/** Whole-prova checks: per-question + id continuity. */
export function checkProva(qs: QuizQuestion[], taxonomy: Taxonomy): string[] {
  const problems: string[] = []
  qs.forEach((q) => problems.push(...checkQuestion(q, taxonomy)))
  // id continuity (ids should be unique)
  const ids = qs.map((q) => q.id)
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
  if (dupes.length) problems.push(`duplicate ids: ${[...new Set(dupes)].join(', ')}`)
  return problems
}
