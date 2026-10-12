export type AltId = 'A' | 'B' | 'C' | 'D' | 'E'

export interface Alternative {
  id: AltId
  type: 'text' | 'image'
  value: string
}

export interface QuizQuestion {
  id: number
  exam: 'enem'
  year: number
  day: 1 | 2
  text: string
  alternatives: Alternative[]
  correct: AltId
  explanation: string | null
  subject: string[]
  topics: string[]
  language?: 'en' | 'es'
  displayId?: number | string
  annulled?: boolean
  images?: string[] | null
  image?: string | null
}
