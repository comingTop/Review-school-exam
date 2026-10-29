// Usage: node tools/check_fuvest_2025.mjs [draft.tsx] [official-key.pdf]
// Parse source as data; never execute a question file or PDF content.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import ts from 'typescript';

const file = process.argv[2] ?? 'fuvest/2025/fuvest_2025_f1.tsx';
const key = process.argv[3] ?? 'sources_fuvest/2025/2025_GB_f1.pdf';
const source = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
assert.equal(source.parseDiagnostics.length, 0, 'TypeScript syntax errors');
let questions;
function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(source) === 'fuvest_2025_f1') questions = node.initializer;
  ts.forEachChild(node, visit);
}
visit(source);
assert.ok(questions && ts.isArrayLiteralExpression(questions), 'Question array missing');
assert.equal(questions.elements.length, 90);
function property(node, name) {
  return node.properties.find(p => p.name?.getText(source) === name)?.initializer;
}
const answers = questions.elements.map((q, i) => {
  assert.equal(Number(property(q, 'id')?.text), i + 1, 'IDs must remain 1–90 in order');
  const alternatives = property(q, 'alternatives');
  assert.equal(alternatives.elements.length, 5);
  for (const [j, a] of alternatives.elements.entries()) {
    assert.equal(property(a, 'id')?.text, 'ABCDE'[j]);
    assert.ok(property(a, 'value')?.text?.trim(), `q${i + 1}: empty alternative`);
  }
  assert.ok(property(q, 'explanation')?.text?.trim(), `q${i + 1}: missing explanation`);
  return property(q, 'correct')?.text;
});
const text = execFileSync('pdftotext', ['-layout', key, '-'], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
const versions = Array.from({ length: 4 }, () => new Map());
for (const line of text.split('\f')[0].split('\n')) {
  const cells = line.trim().split(/\s+/);
  if (cells.length !== 16 || !/^\d+$/.test(cells[0])) continue;
  for (let v = 0; v < 4; v++) {
    for (let half = 0; half < 2; half++) {
      const offset = 4 * v + 2 * half;
      const id = Number(cells[offset]);
      const answer = cells[offset + 1];
      assert.ok(id >= 1 && id <= 90 && /^[A-E]$/.test(answer), 'Unexpected official table cell');
      assert.ok(!versions[v].has(id), 'Duplicate official key row');
      versions[v].set(id, answer);
    }
  }
}
for (const [v, official] of versions.entries()) {
  assert.equal(official.size, 90, `Incomplete V${v + 1} table`);
  const passed = answers.filter((a, i) => a === official.get(i + 1)).length;
  console.log(`2025 V${v + 1}: ${passed}/90 match, ${90 - passed} mismatch`);
}
const errors = answers.flatMap((a, i) => a === versions[0].get(i + 1) ? [] : [`q${i + 1}: ${a} != ${versions[0].get(i + 1)}`]);
assert.deepEqual(errors, [], 'V1 answer gate failed');
console.log('2025 V1: PASS — 90 answers; syntax, IDs and five alternatives checked.');
