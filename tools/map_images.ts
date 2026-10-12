/**
 * Map embedded figures in an INEP prova to question ids, using pdftohtml -xml geometry.
 * Produces a JSON mapping { "<id>": [ {page, top, left, width, height} ... ] } of figure boxes,
 * by assigning each image to the nearest preceding anchor ("Questão N" or "Figura para as
 * questões X e Y") in the same page column. Small images (icons/formula bits) are filtered out.
 *
 * Usage: tsx tools/map_images.ts <prova.xml> [minW] [minH] > mapping.json
 * Generate the xml first with:  pdftohtml -xml -stdout prova.pdf > prova.xml
 */
import { readFileSync } from 'node:fs'

interface Box { page: number; top: number; left: number; width: number; height: number }
interface Anchor { page: number; top: number; left: number; ids: number[] }

function parseFiguraAnchor(txt: string): number[] | null {
  // "Figura para as questões 5 e 6" / "Figuras para as questões 70 e 71" / "... 5 a 8"
  const m = txt.match(/Figuras?\s+para\s+as\s+quest(?:ão|ões)\s+(.+)/i)
  if (!m) return null
  const nums = (m[1].match(/\d+/g) || []).map(Number)
  if (nums.length === 2 && /\ba\b/.test(m[1]) && nums[1] > nums[0] + 1) {
    const range: number[] = []
    for (let n = nums[0]; n <= nums[1]; n++) range.push(n)
    return range
  }
  return nums
}

function main() {
  const [xmlPath, minWs, minHs] = process.argv.slice(2)
  const minW = Number(minWs ?? 90)
  const minH = Number(minHs ?? 55)
  const xml = readFileSync(xmlPath, 'utf8')

  // page width to decide column split
  const pageW = Number(xml.match(/<page number="1"[^>]*width="(\d+)"/)?.[1] ?? 892)
  const mid = pageW / 2

  const anchors: Anchor[] = []
  const boxes: Box[] = []
  let curPage = 0
  for (const line of xml.split('\n')) {
    const pm = line.match(/<page number="(\d+)"/)
    if (pm) { curPage = Number(pm[1]); continue }
    const tm = line.match(/<text top="(\d+)" left="(\d+)"[^>]*>(.*?)<\/text>/)
    if (tm) {
      const txt = tm[3].replace(/<[^>]+>/g, '').trim()
      const qm = txt.match(/^Quest(?:ão|ao)\s+(\d+)\b/i)
      if (qm) anchors.push({ page: curPage, top: Number(tm[1]), left: Number(tm[2]), ids: [Number(qm[1])] })
      else {
        const fig = parseFiguraAnchor(txt)
        if (fig && fig.length) anchors.push({ page: curPage, top: Number(tm[1]), left: Number(tm[2]), ids: fig })
      }
      continue
    }
    const im = line.match(/<image top="(\d+)" left="(\d+)" width="(\d+)" height="(\d+)"/)
    if (im) {
      const b = { page: curPage, top: Number(im[1]), left: Number(im[2]), width: Number(im[3]), height: Number(im[4]) }
      if (b.width >= minW && b.height >= minH) boxes.push(b)
    }
  }

  const mapping: Record<string, Box[]> = {}
  for (const b of boxes) {
    const col = b.left < mid ? 'L' : 'R'
    // nearest preceding anchor on same page, same column, top <= image top (allow small slack)
    const cands = anchors.filter((a) => a.page === b.page && (a.left < mid ? 'L' : 'R') === col && a.top <= b.top + 20)
    cands.sort((x, y) => y.top - x.top)
    const a = cands[0] ?? anchors.filter((a) => a.page === b.page).sort((x, y) => Math.abs(x.top - b.top) - Math.abs(y.top - b.top))[0]
    if (!a) continue
    for (const id of a.ids) (mapping[id] ??= []).push(b)
  }

  console.log(JSON.stringify(mapping, null, 1))
}

main()
