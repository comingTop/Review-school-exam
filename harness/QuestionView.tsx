import type { QuizQuestion } from './quiz-questions'

export function QuestionView({ q }: { q: QuizQuestion }) {
  const images = Array.isArray(q.images) ? q.images : q.image ? [q.image] : []
  return (
    <div style={{ borderBottom: '2px solid #ddd', padding: '18px 0', maxWidth: 820 }}>
      <div style={{ fontWeight: 700, fontSize: 18 }}>
        Questão {q.displayId ?? q.id}
        {q.language ? ` · ${q.language}` : ''}
        {q.annulled ? ' · ANULADA' : ''}
        <span style={{ fontWeight: 400, color: '#666', fontSize: 14 }}>
          {'  '}[{(q.subject ?? []).join(', ')}] {(q.topics ?? []).join(' / ')}
        </span>
      </div>
      <p style={{ whiteSpace: 'pre-wrap', lineHeight: 1.5 }}>{q.text}</p>
      {images.map((src, i) => (
        <img key={i} src={src} alt={`fig ${i}`} style={{ maxWidth: '100%', border: '1px solid #ccc', margin: '6px 0' }} />
      ))}
      <ol type="A" style={{ listStyleType: 'upper-alpha' }}>
        {(q.alternatives ?? []).map((a) => {
          const isCorrect = a.id === q.correct
          return (
            <li key={a.id} style={{ margin: '6px 0', background: isCorrect ? '#e5ffe5' : undefined, fontWeight: isCorrect ? 700 : 400 }}>
              {a.type === 'image'
                ? <img src={a.value} alt={`alt ${a.id}`} style={{ maxWidth: '100%', border: '1px solid #ccc' }} />
                : <span style={{ whiteSpace: 'pre-wrap' }}>{a.value}</span>}
              {isCorrect ? ' ✓' : ''}
            </li>
          )
        })}
      </ol>
      <details>
        <summary style={{ cursor: 'pointer', color: '#0a5' }}>Resolução ({q.correct})</summary>
        <p style={{ whiteSpace: 'pre-wrap', color: '#333' }}>{q.explanation || '(vazia)'}</p>
      </details>
    </div>
  )
}
