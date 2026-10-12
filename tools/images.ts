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

/**
 * Split a stacked bundle image into `parts` segments by cutting at the largest horizontal
 * whitespace gaps (handles uneven segment heights, unlike sliceVertical). Each segment is
 * trimmed of surrounding whitespace. Returns the output paths in top-to-bottom order.
 */
export async function sliceByGaps(src: string, parts: number, outPrefix: string, whiteThresh = 245): Promise<string[]> {
  const img = sharp(src).grayscale()
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
  const w = info.width, h = info.height
  // per-row mean brightness
  const rowMean = new Array<number>(h).fill(0)
  for (let y = 0; y < h; y++) {
    let s = 0
    for (let x = 0; x < w; x++) s += data[y * w + x]
    rowMean[y] = s / w
  }
  // find blank bands (runs of near-white rows)
  const bands: { start: number; end: number }[] = []
  let runStart = -1
  for (let y = 0; y < h; y++) {
    const blank = rowMean[y] >= whiteThresh
    if (blank && runStart < 0) runStart = y
    else if (!blank && runStart >= 0) { bands.push({ start: runStart, end: y - 1 }); runStart = -1 }
  }
  if (runStart >= 0) bands.push({ start: runStart, end: h - 1 })
  // interior bands only (ignore leading/trailing margins)
  const interior = bands.filter((b) => b.start > 2 && b.end < h - 3)
  interior.sort((a, b) => (b.end - b.start) - (a.end - a.start))
  const cuts = interior.slice(0, parts - 1).map((b) => Math.round((b.start + b.end) / 2)).sort((a, b) => a - b)
  const bounds = [0, ...cuts, h]
  const LETTERS = ['A', 'B', 'C', 'D', 'E']
  const out: string[] = []
  for (let i = 0; i < parts; i++) {
    const top = bounds[i], height = bounds[i + 1] - bounds[i]
    const file = `${outPrefix}_${LETTERS[i]}.jpg`
    await sharp(src).extract({ left: 0, top, width: w, height }).jpeg({ quality: 92 }).toFile(file)
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
