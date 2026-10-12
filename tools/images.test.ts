import { expect, test } from 'vitest'
import sharp from 'sharp'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { mapDriveName, sliceVertical, cropRegion } from './images'

test('mapDriveName parses the Drive conventions', () => {
  expect(mapDriveName('questao_07.png')).toEqual({ qid: 7 })
  expect(mapDriveName('questao_101.png')).toEqual({ qid: 101 })
  expect(mapDriveName('questao_001_espanhol.png')).toEqual({ qid: 1, lang: 'es' })
  expect(mapDriveName('questao_03_ingles.png')).toEqual({ qid: 3, lang: 'en' })
  expect(mapDriveName('questao_103_alternativa_a.png')).toEqual({ qid: 103, alt: 'A' })
  expect(mapDriveName('questao_103_alternativas_bcde.png')).toEqual({ qid: 103, alts: ['B', 'C', 'D', 'E'] })
  expect(mapDriveName('questao_106_alternativas.png')).toEqual({ qid: 106, part: 'alternativas' })
  expect(mapDriveName('questao_106_texto.png')).toEqual({ qid: 106, part: 'texto' })
  expect(mapDriveName('random.png')).toBeNull()
})

test('sliceVertical cuts an image into equal stacked parts', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'img-'))
  const src = join(dir, 'col.png')
  await sharp({ create: { width: 100, height: 500, channels: 3, background: '#fff' } }).png().toFile(src)
  const parts = await sliceVertical(src, 5, join(dir, 'q1'))
  expect(parts).toHaveLength(5)
  const m = await sharp(parts[0]).metadata()
  expect(m.width).toBe(100)
  expect(m.height).toBe(100)
})

test('cropRegion extracts a box', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'img-'))
  const src = join(dir, 'big.png')
  await sharp({ create: { width: 200, height: 200, channels: 3, background: '#000' } }).png().toFile(src)
  const out = await cropRegion(src, { left: 10, top: 10, width: 50, height: 40 }, join(dir, 'crop.png'))
  const m = await sharp(out).metadata()
  expect(m.width).toBe(50)
  expect(m.height).toBe(40)
})
