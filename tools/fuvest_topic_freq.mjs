// Compute "assuntos que mais caem" ranking tables for the FUVEST bank.
// AST-based (handles multi-line topics; never evaluates the file).
//   node tools/fuvest_topic_freq.mjs [--md out.md] [--min N]
// Ranks, per subject, topics by how often they are the PRIMARY topic
// (first topic that isn't 'Questões aleatórias'), with % share, question
// count and number of distinct exam years.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const RANDOM_TAG = 'Questões aleatórias';
const SUBJECT_NAMES = {
  mat: 'Matemática', por: 'Português', lit: 'Literatura', ing: 'Inglês', esp: 'Espanhol',
  his: 'História', geo: 'Geografia', fil: 'Filosofia', soc: 'Sociologia',
  bio: 'Biologia', fis: 'Física', qui: 'Química',
};
const args = process.argv.slice(2);
const mdOut = args.includes('--md') ? args[args.indexOf('--md') + 1] : null;
const min = args.includes('--min') ? Number(args[args.indexOf('--min') + 1]) : 1;
const root = path.resolve(path.join(path.dirname(new URL(import.meta.url).pathname), '..'));
const years = Array.from({ length: 9 }, (_, i) => 2017 + i);

function strArray(init) {
  if (!init || !ts.isArrayLiteralExpression(init)) return [];
  return init.elements.filter(ts.isStringLiteralLike).map(e => e.text);
}
function parseFile(file) {
  const sf = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const out = [];
  (function visit(n) {
    if (ts.isObjectLiteralExpression(n)) {
      const get = k => n.properties.find(p => p.name && p.name.getText() === k);
      const id = get('id');
      if (id && id.initializer && /^\d+$/.test(id.initializer.getText())) {
        const subjects = strArray(get('subject')?.initializer).concat(strArray(get('subjects')?.initializer));
        const topics = strArray(get('topics')?.initializer);
        const year = get('year')?.initializer?.getText();
        out.push({ subjects, topics, year: year ? Number(year) : null });
      }
    }
    ts.forEachChild(n, visit);
  })(sf);
  return out;
}

const bank = [];
for (const y of years) {
  const dir = path.join(root, 'fuvest', String(y));
  const file = fs.readdirSync(dir).find(f => /\.tsx?$/.test(f));
  for (const q of parseFile(path.join(dir, file))) bank.push(q);
}

const bySubject = new Map();
for (const q of bank) {
  const subj = q.subjects[0] || '???';
  const primary = q.topics.find(t => t && t !== RANDOM_TAG) || '(sem assunto específico)';
  if (!bySubject.has(subj)) bySubject.set(subj, new Map());
  const tm = bySubject.get(subj);
  if (!tm.has(primary)) tm.set(primary, { count: 0, years: new Set() });
  const e = tm.get(primary);
  e.count++; if (q.year) e.years.add(q.year);
}

const lines = [];
const P = s => { lines.push(s); };
P(`# FUVEST 1ª fase — assuntos que mais caem (2017–2025)`);
P('');
P(`Ranking por disciplina dos temas que mais aparecem na 1ª fase da FUVEST, com base`);
P(`nas ${bank.length} questões dos 9 anos corrigidos. Para cada tema: participação (%)`);
P(`dentro da disciplina, nº de questões e em quantos dos 9 anos ele apareceu.`);
P('');
const subjOrder = [...bySubject.entries()].sort((a, b) =>
  [...b[1].values()].reduce((s, e) => s + e.count, 0) - [...a[1].values()].reduce((s, e) => s + e.count, 0));
for (const [subj, tm] of subjOrder) {
  const total = [...tm.values()].reduce((s, e) => s + e.count, 0);
  P(`## ${SUBJECT_NAMES[subj] || subj} (${subj}) — ${total} questões`);
  P('');
  P(`| # | Assunto | % | questões | anos |`);
  P(`|---:|---|---:|---:|---:|`);
  const ranked = [...tm.entries()].sort((a, b) => b[1].count - a[1].count).filter(([, e]) => e.count >= min);
  ranked.forEach(([topic, e], i) => {
    P(`| ${i + 1} | ${topic} | ${(100 * e.count / total).toFixed(1)}% | ${e.count} | ${e.years.size} |`);
  });
  P('');
}
const md = lines.join('\n');
if (mdOut) { fs.writeFileSync(mdOut, md); console.error('wrote', mdOut); }
else console.log(md);
