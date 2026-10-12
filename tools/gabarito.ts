import type { AltId } from '@/lib/quiz-questions'

export type Color = 'Azul' | 'Amarelo' | 'Branco' | 'Rosa'
const COLORS: Color[] = ['Azul', 'Amarelo', 'Branco', 'Rosa']

export interface Gabarito {
  color: Color | null
  /** questao number -> answer (single-answer questions). */
  answers: Record<number, AltId>
  /** language questions that have two keys: { questao: { ing, esp } }. */
  languages: Record<number, { ing?: AltId; esp?: AltId }>
}

export function detectColorFromHeader(txt: string): Color | null {
  const head = txt.slice(0, 400)
  for (const c of COLORS) if (new RegExp(`\\b${c}\\b`, 'i').test(head)) return c
  return null
}

/**
 * Parse an INEP gabarito's -layout text into a question->answer map.
 * Handles the modern two-block layout and the language double-answer rows
 * (q1-5 with INGLÊS + ESPANHOL columns, e.g. "1  D  E").
 */
export function parseGabarito(txt: string): Gabarito {
  const answers: Record<number, AltId> = {}
  const languages: Record<number, { ing?: AltId; esp?: AltId }> = {}

  for (const rawLine of txt.split('\n')) {
    const line = rawLine.replace(/\t/g, ' ')
    // Language double-answer: number followed by exactly two letters (ing then esp).
    const lang = line.match(/^\s*(\d{1,3})\s+([A-E])\s+([A-E])\b/)
    if (lang) {
      const q = Number(lang[1])
      languages[q] = { ing: lang[2] as AltId, esp: lang[3] as AltId }
      // default answer = espanhol (PT-BR ENEM default is Spanish-track in these files, but
      // callers should pick the track; store esp as the fallback single answer too).
      answers[q] = lang[3] as AltId
    }
    // Collect every "<number> <letter>" pair on the line (covers left + right blocks).
    const re = /(\d{1,3})\s+([A-E])(?![A-E])/g
    let m: RegExpExecArray | null
    while ((m = re.exec(line))) {
      const q = Number(m[1])
      if (q >= 1 && q <= 180 && !(q in languages)) answers[q] = m[2] as AltId
    }
  }

  return { color: detectColorFromHeader(txt), answers, languages }
}

/**
 * Hint: pick the color whose key best matches the file's current answers.
 * Only a sanity hint — the official key for the matched caderno is authoritative.
 */
export function detectColor(
  coded: { id: number; correct: AltId }[],
  keyByColor: Record<string, Record<number, AltId>>,
): { color: string; matchRate: number } {
  let best = { color: '', matchRate: -1 }
  for (const [color, key] of Object.entries(keyByColor)) {
    let hits = 0
    let total = 0
    for (const q of coded) {
      if (key[q.id] != null) {
        total++
        if (key[q.id] === q.correct) hits++
      }
    }
    const rate = total ? hits / total : 0
    if (rate > best.matchRate) best = { color, matchRate: rate }
  }
  return best
}
