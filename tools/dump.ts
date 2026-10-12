import { loadProva } from './load.ts'
async function main() {
  const qs = await loadProva(process.argv[2])
  for (const q of qs) {
    const t = (q.text || '').replace(/\s+/g, ' ').slice(0, 85)
    console.log(`${String(q.id).padStart(2)} | ${(q.subject||[]).join(',').padEnd(8)} | ${(q.topics||[]).join(' / ').padEnd(45)} | ${q.correct} | ${t}`)
  }
}
main().catch(e => { console.error(e.message); process.exit(1) })
