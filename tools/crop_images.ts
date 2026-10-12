/**
 * Crop figures from a prova PDF into images_out/<year>/enem_<year>_d<day>_q<id>.jpg,
 * using the box mapping from map_images.ts. Boxes are in pdftohtml xml coords (page width
 * from the xml); we render each page with pdftoppm and scale boxes to the render resolution.
 * For a question with multiple boxes, the union bounding box is cropped (keeps composite figures whole).
 *
 * Usage: tsx tools/crop_images.ts <prova.pdf> <prova.xml> <mapping.json> <year> <day> [dpi]
 */
import { execFileSync } from 'node:child_process'
import { readFileSync, mkdtempSync, mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import sharp from 'sharp'

interface Box { page: number; top: number; left: number; width: number; height: number }

async function main() {
  const [pdf, xmlPath, mapPath, year, day, dpiS] = process.argv.slice(2)
  const dpi = Number(dpiS ?? 200)
  const ROOT = resolve(new URL('..', import.meta.url).pathname)
  const outDir = join(ROOT, 'images_out', year)
  mkdirSync(outDir, { recursive: true })

  const xml = readFileSync(xmlPath, 'utf8')
  const xmlPageW = Number(xml.match(/<page number="1"[^>]*width="(\d+)"/)?.[1] ?? 892)
  const mapping: Record<string, Box[]> = JSON.parse(readFileSync(mapPath, 'utf8'))

  const tmp = mkdtempSync(join(tmpdir(), 'crop-'))
  execFileSync('pdftoppm', ['-r', String(dpi), '-png', pdf, join(tmp, 'p')])
  const pad = (n: number) => String(n).padStart(2, '0')

  const PAD = 6 // px padding around the figure
  const results: string[] = []
  for (const [id, boxes] of Object.entries(mapping)) {
    // group boxes by page; crop the union per page; if multiple pages, suffix _p
    const byPage = new Map<number, Box[]>()
    for (const b of boxes) (byPage.get(b.page) ?? byPage.set(b.page, []).get(b.page)!).push(b)
    let partIdx = 0
    for (const [page, bs] of byPage) {
      const pageImg = join(tmp, `p-${pad(page)}.png`)
      const meta = await sharp(pageImg).metadata()
      const scale = meta.width! / xmlPageW
      const left = Math.max(0, Math.min(...bs.map((b) => b.left)) * scale - PAD)
      const top = Math.max(0, Math.min(...bs.map((b) => b.top)) * scale - PAD)
      const right = Math.min(meta.width!, Math.max(...bs.map((b) => (b.left + b.width))) * scale + PAD)
      const bottom = Math.min(meta.height!, Math.max(...bs.map((b) => (b.top + b.height))) * scale + PAD)
      const suffix = byPage.size > 1 ? `_p${++partIdx}` : ''
      const outFile = join(outDir, `enem_${year}_d${day}_q${id}${suffix}.jpg`)
      await sharp(pageImg)
        .extract({ left: Math.round(left), top: Math.round(top), width: Math.round(right - left), height: Math.round(bottom - top) })
        .jpeg({ quality: 92 })
        .toFile(outFile)
      results.push(`q${id}${suffix}: ${Math.round(right - left)}x${Math.round(bottom - top)}`)
    }
  }
  console.log(results.join('\n'))
  console.log(`\n${results.length} crops -> ${outDir}`)
}

main().catch((e) => { console.error(e); process.exit(1) })
