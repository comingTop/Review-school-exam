import { expect, test } from 'vitest'
import { execFileSync } from 'node:child_process'
import { resolve } from 'node:path'
import { readFileSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { parseGabarito, detectColorFromHeader, detectColor } from './gabarito'

const ROOT = resolve(__dirname, '..')

function gbText(pdf: string): string {
  const dir = mkdtempSync(join(tmpdir(), 'gb-'))
  const out = join(dir, 'gb.txt')
  execFileSync('bash', [join(ROOT, 'tools/extract_text.sh'), join(ROOT, pdf), out])
  return readFileSync(out, 'utf8')
}

test('detects color from header', () => {
  expect(detectColorFromHeader('   Gabarito 2022\n   Azul\n')).toBe('Azul')
  expect(detectColorFromHeader('Gabarito\nAmarelo')).toBe('Amarelo')
})

test('parses the real 2022 D1 Azul gabarito', () => {
  const g = parseGabarito(gbText('enem v/2022/2022_GB_impresso_D1_CD1.pdf'))
  expect(g.color).toBe('Azul')
  // language row q1: inglês D / espanhol E
  expect(g.languages[1]).toEqual({ ing: 'D', esp: 'E' })
  // single-answer spot checks from the printed key
  expect(g.answers[6]).toBe('E')
  expect(g.answers[46]).toBe('D')
  expect(g.answers[90]).toBe('A')
  // coverage: should have answers for q6..q90 at least
  const have = Object.keys(g.answers).map(Number)
  expect(Math.max(...have)).toBeGreaterThanOrEqual(90)
})

test('detectColor picks the better-matching key', () => {
  const coded = [
    { id: 1, correct: 'A' as const },
    { id: 2, correct: 'B' as const },
    { id: 3, correct: 'C' as const },
  ]
  const keys = {
    Azul: { 1: 'A' as const, 2: 'B' as const, 3: 'C' as const },
    Rosa: { 1: 'E' as const, 2: 'E' as const, 3: 'E' as const },
  }
  expect(detectColor(coded, keys).color).toBe('Azul')
})
