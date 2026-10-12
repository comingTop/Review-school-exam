import sharp from 'sharp'
import type { AltId } from '@/lib/quiz-questions'

export interface DriveRef {
  qid: number
  lang?: 'es' | 'en'
  alt?: AltId
  alts?: AltId[]
  part?: 'texto' | 'alternativas'
}

const LETTERS = ['A', 'B', 'C', 'D', 'E'] as const

/** Parse a Drive/extraction image filename into its meaning, or null if unrecognised. */
export function mapDriveName(name: string): DriveRef | null {
  const base = name.replace(/\.[a-z0-9]+$/i, '').toLowerCase()
  const m = base.match(/^questao[_-]?(\d{1,3})(?:[_-](.+))?$/)
  if (!m) return null
  const qid = Number(m[1])
  const rest = m[2]
  const ref: DriveRef = { qid }
  if (!rest) return ref
  if (/espanhol|esp/.test(rest)) ref.lang = 'es'
  else if (/ingles|ing|english/.test(rest)) ref.lang = 'en'
  else if (/^alternativa[_-]([a-e])$/.test(rest)) {
    ref.alt = rest.match(/^alternativa[_-]([a-e])$/)![1].toUpperCase() as AltId
  } else if (/^alternativas[_-]([a-e]+)$/.test(rest)) {
    const letters = rest.match(/^alternativas[_-]([a-e]+)$/)![1].toUpperCase().split('')
    ref.alts = letters as AltId[]
  } else if (/^alternativas?$/.test(rest)) {
    ref.part = 'alternativas'
  } else if (/^texto$/.test(rest)) {
    ref.part = 'texto'
  }
  return ref
}

/** Slice an image into `parts` equal vertical segments (stacked rows), named _A.._E. */
export async function sliceVertical(src: string, parts: number, outPrefix: string): Promise<string[]> {
  const img = sharp(src)
  const meta = await img.metadata()
  const w = meta.width!
  const h = meta.height!
  const seg = Math.floor(h / parts)
  const out: string[] = []
  for (let i = 0; i < parts; i++) {
    const top = i * seg
    const height = i === parts - 1 ? h - top : seg
    const file = `${outPrefix}_${LETTERS[i]}.png`
    await sharp(src).extract({ left: 0, top, width: w, height }).toFile(file)
    out.push(file)
  }
  return out
}

export interface Box { left: number; top: number; width: number; height: number }

/** Crop a rectangular region from an image. */
export async function cropRegion(src: string, box: Box, out: string): Promise<string> {
  await sharp(src).extract(box).toFile(out)
  return out
}
