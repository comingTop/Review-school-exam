/**
 * Phase A of the v2 re-tag: apply the deterministic old->new topic map to every
 * question, and emit a worklist of the questions whose old topic is a COARSE bucket
 * that splits into several v2 topics (these need content classification).
 *
 * Outputs:
 *   build/tags_v2/<year>__<base>.json   per-file tags { id: { subject, topics:[prim,...sec] } }
 *                                        ambiguous primaries written as sentinel "?<subj>::<oldTopic>"
 *   build/ambig/<subject>.json          [{ file, id, year, oldPrimary, oldTopics }]
 *
 * tsx tools/map_v2.ts
 */
import { readFileSync, readdirSync, statSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { join, basename, dirname } from 'node:path'

const RANDOM = 'Questões aleatórias'
const ROOT = 'build'

// old primary topic -> new v2 topic, per subject. Only CLEAN (1:1) maps here.
const CLEAN: Record<string, Record<string, string>> = {
  bio: {
    'Biotecnologia': 'Biotecnologia', 'Botânica': 'Botânica', 'Evolução': 'Evolução',
    'Genética': 'Genética', 'Zoologia': 'Zoologia',
    'Saúde pública & parasitologia (doenças, vetores, prevenção)': 'Microbiologia e doenças',
    'Histologia básica (tecidos – leitura de figura)': 'Embriologia, histologia e reprodução',
    'Biomas do Brasil': 'Ecologia',
  },
  esp: { 'Vocabulário': 'Vocabulário e expressões em contexto', 'Advérbios': 'Gramática em contexto', 'Preposições': 'Gramática em contexto', 'Tempos verbais': 'Gramática em contexto', 'Conectivos': 'Gramática em contexto', 'Pronomes': 'Gramática em contexto' },
  ing: { 'Vocabulário': 'Vocabulário e expressões em contexto', 'Advérbios': 'Gramática em contexto', 'Preposições': 'Gramática em contexto', 'Tempos verbais': 'Gramática em contexto', 'Conectivos': 'Gramática em contexto', 'Pronomes': 'Gramática em contexto' },
  fil: {
    'Estética': 'Estética', 'Ética e moral': 'Ética e moral',
    'Filosofia Antiga (Sócrates, Platão, Aristóteles)': 'Filosofia antiga',
    'Filosofia Contemporânea': 'Filosofia contemporânea',
    'Filosofia Medieval': 'Filosofia medieval',
    'Lógica': 'Filosofia da ciência, linguagem e lógica',
  },
  fis: {
    'Cinemática': 'Cinemática', 'Dinâmica': 'Dinâmica', 'Leis de Newton': 'Dinâmica',
    'Eletrodinâmica': 'Eletrodinâmica', 'Eletromagnetismo/Indução': 'Magnetismo e eletromagnetismo',
    'Física moderna': 'Física moderna', 'Gravitação': 'Gravitação',
    'Hidrodinâmica': 'Hidrostática', 'Hidrostática': 'Hidrostática',
    'Impulso e quantidade de movimento': 'Impulso e quantidade de movimento',
    'Ondulatória': 'Ondulatória e acústica', 'Óptica': 'Óptica', 'Termodinâmica': 'Termodinâmica',
    'Trabalho, energia e potência': 'Trabalho, energia mecânica e potência',
  },
  geo: {
    'Agricultura e pecuária': 'Espaço agrário', 'Cartografia': 'Cartografia',
    'Conflitos internacionais': 'Geopolítica e conflitos internacionais',
    'Demografia': 'População, demografia e migrações', 'Energia e recursos naturais': 'Energia',
    'Geopolítica': 'Geopolítica e conflitos internacionais', 'Globalização': 'Globalização e economia mundial',
    'Meio ambiente e sustentabilidade': 'Questões ambientais', 'Urbanização': 'Espaço urbano e urbanização',
  },
  his: {
    'Brasil Colônia': 'Brasil Colônia', 'Brasil Império': 'Brasil Império',
    'Ditadura Militar no Brasil': 'Ditadura Militar',
    'Escravidão e abolição': 'Escravidão, resistência e abolição',
    'Guerra Fria': 'Guerra Fria e descolonização',
    'Movimentos sociais': 'Cidadania, movimentos sociais e trabalho na história',
    'Primeira e Segunda Guerra Mundial': 'Primeira e Segunda Guerra Mundial e entreguerras',
  },
  lit: { 'Literatura portuguesa': 'Literatura portuguesa' },
  mat: {
    'Análise combinatória': 'Análise combinatória', 'Equações e inequações': 'Equações, inequações e sistemas',
    'Geometria espacial': 'Geometria espacial', 'Geometria plana': 'Geometria plana',
    'Matemática financeira': 'Matemática financeira', 'Matrizes e determinantes': 'Matrizes, determinantes e sistemas lineares',
    'Porcentagem': 'Porcentagem', 'Progressões (PA e PG)': 'Sequências e progressões', 'Trigonometria': 'Trigonometria',
  },
  por: {
    'Figuras de linguagem': 'Figuras de linguagem e recursos expressivos',
    'Funções da linguagem': 'Funções da linguagem', 'Gêneros textuais': 'Gêneros textuais e tipologia',
    'Intertextualidade': 'Intertextualidade', 'Redação (estrutura e argumentação)': 'Argumentação e estratégias persuasivas',
    'Variação linguística': 'Variação linguística',
  },
  qui: { 'Eletroquímica': 'Eletroquímica', 'Química Ambiental': 'Química ambiental' },
  soc: {
    'Cidadania e democracia': 'Estado, poder, cidadania e democracia',
    'Cultura e identidade': 'Cultura, identidade e diversidade',
    'Desigualdade social': 'Desigualdade, estratificação e racismo',
    'Direitos humanos': 'Violência, direitos humanos e controle social',
    'Movimentos sociais': 'Movimentos sociais', 'Trabalho e economia': 'Trabalho e sociedade',
  },
}

// coarse old topics that must be classified from content
const AMBIG: Record<string, Set<string>> = {
  bio: new Set(['Ecologia', 'Fisiologia Humana', 'Citologia']),
  esp: new Set(['Interpretação de texto']),
  ing: new Set(['Interpretação de texto']),
  fil: new Set(['Filosofia Moderna (Descartes, Kant, Hume)', 'Política e Estado', 'Teoria do conhecimento']),
  fis: new Set(['Eletricidade', 'Termologia']),
  geo: new Set(['Geografia física (clima, relevo, hidrografia)', 'Indústria e comércio']),
  his: new Set(['Brasil República', 'História Contemporânea', 'História Geral Antiga e Medieval', 'História Moderna']),
  lit: new Set(['Literatura brasileira', 'Análise de obras', 'Escolas literárias']),
  mat: new Set(['Estatística e probabilidade', 'Funções', 'Razão e proporção']),
  por: new Set(['Interpretação de texto', 'Gramática (sintaxe, morfologia, semântica)']),
  qui: new Set(['Físico-química', 'Química Geral', 'Química Orgânica']),
  soc: new Set(['Sociologia']),
}

function files(p: string): string[] { const s = statSync(p); return s.isDirectory() ? readdirSync(p).flatMap((e) => files(join(p, e))) : (p.endsWith('.tsx') || p.endsWith('.ts') ? [p] : []) }
function arr(s: string) { const inner = s.replace(/^\s*\[/, '').replace(/\]\s*,?\s*$/, ''); const re = /'((?:[^'\\]|\\.)*)'/g; const o: string[] = []; let m; while ((m = re.exec(inner))) o.push(m[1].replace(/\\'/g, "'")); return o }

rmSync(ROOT, { recursive: true, force: true })
mkdirSync(join(ROOT, 'tags_v2'), { recursive: true })
mkdirSync(join(ROOT, 'ambig'), { recursive: true })

const ambigBySubj: Record<string, any[]> = {}
let clean = 0, ambig = 0, droppedSec = 0

function mapTopic(subj: string, t: string): string | null {
  if (CLEAN[subj]?.[t]) return CLEAN[subj][t]
  if (AMBIG[subj]?.has(t)) return `?${subj}::${t}`
  return null // unknown old topic -> handle as ambiguous too
}

for (const f of files('provas')) {
  const lines = readFileSync(f, 'utf8').split('\n')
  const out: Record<string, { subject: string[]; topics: string[] }> = {}
  let id = '', year = 0, subj = ''
  for (const l of lines) {
    const im = l.match(/^\s*id:\s*(\d+)\s*,/); if (im) { id = im[1]; continue }
    const ym = l.match(/^\s*year:\s*(\d+)\s*,/); if (ym) { year = Number(ym[1]); continue }
    const sm = l.match(/^\s*subject:\s*(\[.*\])\s*,\s*$/); if (sm) { subj = arr(sm[1])[0] ?? '?'; continue }
    const tm = l.match(/^\s*topics:\s*(\[.*\])\s*,\s*$/)
    if (tm) {
      const olds = arr(tm[1]).filter((x) => x !== RANDOM)
      const oldPrim = olds[0] ?? ''
      const mappedPrim = oldPrim ? mapTopic(subj, oldPrim) : null
      let prim = mappedPrim ?? `?${subj}::${oldPrim || '(vazio)'}`
      if (mappedPrim && !mappedPrim.startsWith('?')) clean++; else { ambig++
        ;(ambigBySubj[subj] ??= []).push({ key: `${f}#${id}`, file: f, id: Number(id), year, oldPrimary: oldPrim, oldTopics: olds }) }
      // secondaries: map additional old real topics via CLEAN only; drop ambiguous/dup
      const sec: string[] = []
      for (const o of olds.slice(1)) { const mo = CLEAN[subj]?.[o]; if (mo && mo !== prim && !sec.includes(mo)) sec.push(mo); else if (o) droppedSec++ }
      out[id] = { subject: [subj], topics: [prim, ...sec] }
    }
  }
  const tag = `${basename(dirname(f))}__${basename(f).replace(/\.(tsx|ts)$/, '')}`
  writeFileSync(join(ROOT, 'tags_v2', tag + '.json'), JSON.stringify({ _file: f, tags: out }, null, 2))
}

for (const [s, list] of Object.entries(ambigBySubj)) {
  list.sort((a, b) => a.file.localeCompare(b.file) || a.id - b.id)
  writeFileSync(join(ROOT, 'ambig', s + '.json'), JSON.stringify(list, null, 2))
}

console.log(`clean-mapped primaries: ${clean}`)
console.log(`ambiguous primaries (need content): ${ambig}`)
console.log(`secondary topics kept via clean map handled; ambiguous/dup secondaries dropped: ${droppedSec}`)
console.log('\nambiguous by subject:')
for (const [s, l] of Object.entries(ambigBySubj).sort((a, b) => b[1].length - a[1].length)) console.log(`  ${s.padEnd(4)} ${l.length}`)
