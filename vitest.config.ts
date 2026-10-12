import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: { '@/lib/quiz-questions': resolve(__dirname, 'harness/quiz-questions.ts') },
  },
  test: { include: ['tools/**/*.test.ts'] },
})
