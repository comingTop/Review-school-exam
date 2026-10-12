import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { existsSync, createReadStream } from 'node:fs'

const ROOT = resolve(__dirname, '..')

// Map the app's image paths (/enem/<year>/images/<file>) to our local images_out/<year>/<file>,
// with a fallback to the raw Drive extraction under "enem v/<year>/{imagens,imagens_questoes}".
function imageServer(): Plugin {
  const tryDirs = (year: string, file: string) => [
    resolve(ROOT, 'images_out', year, file),
    resolve(ROOT, 'enem v', year, 'imagens', file),
    resolve(ROOT, 'enem v', year, 'imagens_questoes', file),
  ]
  return {
    name: 'enem-image-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const m = req.url?.match(/^\/enem\/(\d{4})\/images\/(.+?)(?:\?.*)?$/)
        if (!m) return next()
        const [, year, file] = m
        const hit = tryDirs(year, decodeURIComponent(file)).find(existsSync)
        if (!hit) { res.statusCode = 404; return res.end('image not found') }
        const ext = hit.split('.').pop()!.toLowerCase()
        res.setHeader('Content-Type', ext === 'png' ? 'image/png' : 'image/jpeg')
        createReadStream(hit).pipe(res)
      })
    },
  }
}

export default defineConfig({
  root: __dirname,
  plugins: [react(), imageServer()],
  resolve: {
    alias: { '@/lib/quiz-questions': resolve(__dirname, 'quiz-questions.ts') },
  },
  server: { fs: { allow: [ROOT] } },
})
