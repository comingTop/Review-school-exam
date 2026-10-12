import { expect, test } from 'vitest'
import { checkQuestion } from './rules'

const tax: Record<string, string[]> = {
  geo: ['Urbanização', 'Questões aleatórias'],
  mat: ['Funções', 'Questões aleatórias'],
}

const base: any = {
  id: 1, exam: 'enem', year: 2010, day: 1, text: 'x',
  alternatives: [
    { id: 'A', type: 'text', value: 'a' },
    { id: 'B', type: 'text', value: 'b' },
    { id: 'C', type: 'text', value: 'c' },
    { id: 'D', type: 'text', value: 'd' },
    { id: 'E', type: 'text', value: 'e' },
  ],
  correct: 'A',
  explanation: 'Porque A é a resposta correta.',
  subject: ['geo'],
  topics: ['Urbanização', 'Questões aleatórias'],
}

test('clean question yields no problems', () => {
  expect(checkQuestion(base, tax)).toEqual([])
})
test('flags ch subject', () => {
  expect(checkQuestion({ ...base, subject: ['ch'] }, tax).join()).toMatch(/subject/i)
})
test('flags unknown subject', () => {
  expect(checkQuestion({ ...base, subject: ['xyz'] }, tax).join()).toMatch(/subject/i)
})
test('flags missing Questões aleatórias', () => {
  expect(checkQuestion({ ...base, topics: ['Urbanização'] }, tax).join()).toMatch(/Questões aleatórias/)
})
test('flags Questões aleatórias not last', () => {
  expect(checkQuestion({ ...base, topics: ['Questões aleatórias', 'Urbanização'] }, tax).join()).toMatch(/trailing|last|Questões aleatórias/i)
})
test('flags topic outside subject vocabulary', () => {
  expect(checkQuestion({ ...base, topics: ['História Geral', 'Questões aleatórias'] }, tax).join()).toMatch(/vocabulary|topic/i)
})
test('flags empty explanation', () => {
  expect(checkQuestion({ ...base, explanation: '' }, tax).join()).toMatch(/explanation|resolu/i)
})
test('flags null explanation', () => {
  expect(checkQuestion({ ...base, explanation: null }, tax).join()).toMatch(/explanation|resolu/i)
})
test('flags correct not in A..E', () => {
  expect(checkQuestion({ ...base, correct: 'Z' }, tax).join()).toMatch(/correct/i)
})
test('flags correct not among alternatives', () => {
  const q = { ...base, alternatives: base.alternatives.slice(0, 3), correct: 'E' }
  expect(checkQuestion(q, tax).join()).toMatch(/correct|alternativ/i)
})
test('annulled question is exempt from explanation/correct checks', () => {
  expect(checkQuestion({ ...base, annulled: true, explanation: '' }, tax)).toEqual([])
})
