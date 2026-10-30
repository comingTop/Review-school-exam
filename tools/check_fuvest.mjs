// Run from the repository root: node tools/check_fuvest.mjs [--year=2025]
// Optional: --answers-only or --images-only. Any unresolved gate exits nonzero.
// Read question files as TypeScript AST data; never evaluate their contents.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
import ts from 'typescript';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const args = process.argv.slice(2);
assert.ok(!args.includes('--answers-only') || !args.includes('--images-only'), 'Choose only one gate restriction');
const requested = args.find(a => a.startsWith('--year='))?.slice(7);
assert.ok(!requested || /^(201[7-9]|202[0-5])$/.test(requested), 'Year must be 2017–2025');
const years = requested ? [Number(requested)] : Array.from({ length: 9 }, (_, i) => 2017 + i);
let failures = 0;

function questions(year) {
  const dir = path.join(root, 'fuvest', String(year));
  const files = fs.readdirSync(dir).filter(f => /\.tsx?$/.test(f));
  assert.equal(files.length, 1, `${year}: expected one question file`);
  const filename = path.join(dir, files[0]);
  const sf = ts.createSourceFile(filename, fs.readFileSync(filename, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  assert.equal(sf.parseDiagnostics.length, 0, `${year}: syntax errors`);
  let array;
  function visit(node) {
    if (ts.isVariableDeclaration(node) && node.initializer && ts.isArrayLiteralExpression(node.initializer) && node.initializer.elements.length === 90) {
      assert.ok(!array, 'Ambiguous question arrays');
      array = node.initializer;
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);
  assert.ok(array, `${year}: no 90-question array`);
  function data(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (ts.isArrayLiteralExpression(node)) return node.elements.map(data);
    if (ts.isObjectLiteralExpression(node)) return Object.fromEntries(node.properties.map(p => {
      assert.ok(ts.isPropertyAssignment(p), 'Only literal object properties are supported');
      return [p.name.text ?? p.name.getText(sf), data(p.initializer)];
    }));
    throw Error(`Unsupported data expression: ${node.getText(sf).slice(0, 80)}`);
  }
  const qs = data(array);
  for (const [i, q] of qs.entries()) {
    assert.equal(q.id, i + 1, `${year}: IDs must remain 1–90`);
    assert.match(q.correct, /^[A-E*]$/, `${year} q${q.id}: invalid answer`);
    if (q.alternatives.length !== 5 || q.alternatives.map(a => a.id).join('') !== 'ABCDE') {
      console.log(`${year} q${q.id}: alternative structure FAIL — ${q.alternatives.map(a => a.id).join(',') || 'empty'}`);
      failures++;
    }
  }
  return qs;
}

function officialKeys(year) {
  const dir = path.join(root, 'sources_fuvest', String(year));
  const files = fs.readdirSync(dir).filter(f => /_GB_f1.*\.pdf$/.test(f));
  assert.equal(files.length, 1, `${year}: expected one official key PDF`);
  const text = execFileSync('pdftotext', ['-layout', path.join(dir, files[0]), '-'], { encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 }).split('\f')[0];
  const labels = year === 2025 ? ['V1', 'V2', 'V3', 'V4'] : ['V', 'K', 'Q', 'X', 'Z'];
  const keys = labels.map(version => ({ version, answers: new Map() }));
  function add(v, id, answer) {
    assert.ok(Number.isInteger(id) && id >= 1 && id <= 90 && /^[A-E*]$/.test(answer), 'Unexpected official key cell');
    assert.ok(!keys[v].answers.has(id), 'Duplicate official key cell');
    keys[v].answers.set(id, answer);
  }
  for (const line of text.split('\n')) {
    const cells = line.replace(/(\d+)[‐‑–−-]([A-E*])/g, '$1 $2').trim().split(/\s+/);
    if (year <= 2018) {
      // Correspondence table: answer followed by the five version question IDs.
      if (cells.length !== 12 || !/^[A-E*]$/.test(cells[0])) continue;
      for (let half = 0; half < 2; half++) for (let v = 0; v < 5; v++) add(v, Number(cells[6 * half + v + 1]), cells[6 * half]);
    } else {
      // Direct answer table, two question/answer pairs per version per row.
      if (cells.length !== labels.length * 4 || !/^\d+$/.test(cells[0])) continue;
      for (let v = 0; v < labels.length; v++) for (let half = 0; half < 2; half++) add(v, Number(cells[4 * v + 2 * half]), cells[4 * v + 2 * half + 1]);
    }
  }
  for (const k of keys) assert.equal(k.answers.size, 90, `${year} ${k.version}: incomplete key`);
  return { dir, keys };
}

for (const year of years) {
  try {
    const qs = questions(year);
    console.log(`${year}: syntax and 90 ordered IDs PASS`);
    if (!args.includes('--images-only')) {
      const { dir, keys } = officialKeys(year);
      const matches = keys.map(k => ({ ...k, count: qs.filter(q => k.answers.get(q.id) === q.correct).length }));
      console.log(`${year}: key agreement ${matches.map(k => `${k.version}=${k.count}/90`).join(', ')}`);
      // Preserve each draft's property layout: an official '*' can be stored
      // directly in correct, without adding a new annulled property.
      const exact = matches.filter(k => qs.every(q => k.answers.get(q.id) === '*' ? q.correct === '*' || q.annulled === true : k.answers.get(q.id) === q.correct && !q.annulled));
      if (exact.length !== 1) {
        console.log(`${year}: answer/version gate FAIL — ${exact.length} exact version matches; no nearest-version guess made`);
        for (const k of matches.filter(k => k.count >= 89)) for (const q of qs) {
          if (k.answers.get(q.id) !== q.correct) console.log(`  ${k.version} q${q.id}: draft=${q.correct}, official=${k.answers.get(q.id)}${k.answers.get(q.id) === '*' ? `, annulled=${q.annulled === true}` : ''}`);
        }
        failures++;
      } else {
        const k = exact[0];
        const booklet = fs.readdirSync(dir).find(f => f.endsWith(`_PV_f1_${k.version}.pdf`));
        console.log(`${year}: ${k.version} answer gate PASS (annulments checked separately)`);
        if (!booklet) {
          console.log(`${year}: booklet gate FAIL — need ${year}_PV_f1_${k.version}.pdf; available: ${fs.readdirSync(dir).filter(f => f.includes('_PV_')).join(', ')}`);
          failures++;
        } else console.log(`${year}: matched booklet present: ${booklet}`);
      }
    }
    if (!args.includes('--answers-only')) {
      const refs = [];
      for (const q of qs) {
        for (const im of q.images ?? []) refs.push({ id: q.id, ...(typeof im === 'string' ? { src: im } : im) });
        if (q.image) refs.push({ id: q.id, src: q.image });
        for (const a of q.alternatives) if (a.type === 'image') refs.push({ id: q.id, ...(typeof a.value === 'string' ? { src: a.value } : a.value) });
      }
      let missing = 0, badSize = 0, invalid = 0;
      for (const ref of refs) {
        if (typeof ref.src !== 'string' || !ref.src.startsWith('/')) {
          invalid++;
          console.log(`${year} q${ref.id}: invalid image path ${JSON.stringify(ref.src)}`);
          continue;
        }
        const file = path.resolve(root, '.' + ref.src);
        assert.ok(file.startsWith(root), 'Image path escapes repository');
        if (!fs.existsSync(file)) { missing++; continue; }
        const m = await sharp(file).metadata();
        if (ref.width !== undefined && (ref.width !== m.width || ref.height !== m.height)) {
          badSize++;
          console.log(`${year} q${ref.id}: dimension mismatch ${ref.src}: ${ref.width}×${ref.height} vs ${m.width}×${m.height}`);
        }
      }
      console.log(`${year}: images ${refs.length - missing - invalid}/${refs.length} present, ${missing} missing, ${invalid} invalid paths, ${badSize} dimension mismatches`);
      if (missing || badSize || invalid) failures++;
    }
  } catch (e) { console.error(`${year}: FAIL — ${e.message}`); failures++; }
}
process.exitCode = failures ? 1 : 0;
