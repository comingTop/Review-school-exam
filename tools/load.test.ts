import { expect, test } from 'vitest'
import { resolve } from 'node:path'
import { loadProva } from './load'

test('loads 2022 d1 as an array of questions with ids 1..N', async () => {
  const qs = await loadProva(resolve(__dirname, '../provas/2022/enem_2022_d1.tsx'))
  expect(Array.isArray(qs)).toBe(true)
  expect(qs.length).toBeGreaterThan(80)
  expect(qs[0].id).toBe(1)
  expect(qs[0].exam).toBe('enem')
})
