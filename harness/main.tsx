import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { QuizQuestion } from './quiz-questions'
import { QuestionView } from './QuestionView'

// All provas, lazily importable. Keys look like '../provas/2022/enem_2022_d1.tsx'.
const modules = import.meta.glob('../provas/**/*.tsx')

function pickKey(file: string | null): string | null {
  if (!file) return Object.keys(modules)[0] ?? null
  const norm = file.replace(/^\.?\/?/, '')
  return Object.keys(modules).find((k) => k.endsWith(norm.replace(/^provas\//, 'provas/')) || k.endsWith('/' + norm)) ?? null
}

function App() {
  const params = new URLSearchParams(location.search)
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null)
  const [key, setKey] = useState<string | null>(pickKey(params.get('file')))
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!key || !modules[key]) { setError(`file not found: ${params.get('file')}`); return }
    modules[key]().then((m: any) => setQuestions(m.default as QuizQuestion[])).catch((e) => setError(String(e)))
  }, [key])

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', padding: 20 }}>
      <div style={{ marginBottom: 16 }}>
        <label>Prova: </label>
        <select value={key ?? ''} onChange={(e) => { setKey(e.target.value); setQuestions(null) }}>
          {Object.keys(modules).sort().map((k) => (
            <option key={k} value={k}>{k.replace('../provas/', '')}</option>
          ))}
        </select>
        {questions ? <span style={{ marginLeft: 12, color: '#666' }}>{questions.length} questões</span> : null}
      </div>
      {error ? <pre style={{ color: 'red' }}>{error}</pre> : null}
      {questions?.map((q, i) => <div id={`q${q.id}`} key={i}><QuestionView q={q} /></div>)}
    </div>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
