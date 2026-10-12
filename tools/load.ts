import type { QuizQuestion } from '@/lib/quiz-questions'
import { pathToFileURL } from 'node:url'

/** Dynamic-import a prova .tsx module and return its default-exported question array. */
export async function loadProva(absPath: string): Promise<QuizQuestion[]> {
  const url = pathToFileURL(absPath).href
  const mod = await import(/* @vite-ignore */ url)
  const data = mod.default
  if (!Array.isArray(data)) throw new Error(`No default-exported array in ${absPath}`)
  return data as QuizQuestion[]
}
