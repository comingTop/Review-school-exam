# ENEM Exam-Code Correction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build reusable tooling + a verification harness, then correct all 34 ENEM `.tsx` files so each faithfully matches the official INEP exam, starting with a fully-verified 2010 pilot.

**Architecture:** Node/TypeScript tooling parses each `.tsx` by importing it through a path alias to a local stub `QuizQuestion` type. A validator enforces schema + client rules; a Vite/React renderer plus chrome-devtools screenshots give visual QA. The 2010 pilot proves the end-to-end recipe; the remaining 32 provas are produced by batched subagents following the same documented recipe, each gated by the validator + visual QA before commit.

**Tech Stack:** Node ≥20, TypeScript, `tsx` (run/import TS), Vitest (tool unit tests), poppler-utils (`pdftotext`, `pdftoppm`, `pdfimages`), `sharp` (image crop/slice), Vite + React 18 (renderer), chrome-devtools MCP (screenshots).

**Spec:** `docs/superpowers/specs/2026-10-12-enem-correction-design.md`

## Global Constraints

- **Never change code structure.** Output stays `import { QuizQuestion } from '@/lib/quiz-questions';` … `const ENEM_<Y>_D<N>: QuizQuestion[] = [ … ]; export default ENEM_<Y>_D<N>;`. Only question *content* changes.
- **Preserve all existing optional fields** per question: `language`, `displayId`, `annulled`, `images`. Do not drop them.
- **`'Questões aleatórias'` is the permanent trailing entry in every question's `topics`.** Never remove it.
- **`topics` values must come from the subject's list in `tools/topics_taxonomy.json`.** No free-text topics.
- **Subjects** are exactly: `mat, por, lit, ing, esp, his, geo, fil, bio, fis, qui, soc`. No `'ch'`.
- **`correct`** is verified against the official INEP key for the caderno color the file follows; `annulled: true` questions keep `annulled` and are exempt from the gabarito check.
- **Images** output to `images_out/<year>/` named `enem_<year>_d<n>_q<id>[_<ALT>].{jpg|png}`, matching the path each `.tsx` references.
- **Source material** is fetched fresh online from INEP where missing; do not rely on memory for exam content or answer keys.
- Commits authored as `comingtop <comingtop01@gmail.com>`, no AI attribution lines.

---

## Phase 0 — Tooling & Harness

### Task 1: Node/TS project scaffold for tooling

**Files:**
- Create: `package.json`, `tsconfig.json`, `vitest.config.ts`
- Create: `tools/.gitkeep`

**Interfaces:**
- Produces: a `tsconfig.json` with path alias `@/lib/quiz-questions` → `harness/quiz-questions.ts`; npm scripts `test`, `typecheck`, `validate`.

- [ ] **Step 1:** Create `package.json`:

```json
{
  "name": "enem-correction-tools",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "vitest run",
    "typecheck": "tsc --noEmit",
    "validate": "tsx tools/validate.ts"
  },
  "devDependencies": {
    "typescript": "5.6.3",
    "tsx": "4.19.1",
    "vitest": "2.1.2",
    "sharp": "0.33.5",
    "@types/node": "20.16.11"
  }
}
```

- [ ] **Step 2:** Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": { "@/lib/quiz-questions": ["harness/quiz-questions.ts"] }
  },
  "include": ["provas/**/*.tsx", "tools/**/*.ts", "harness/**/*.ts"]
}
```

- [ ] **Step 3:** Create `vitest.config.ts`:

```ts
import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'
export default defineConfig({
  resolve: { alias: { '@/lib/quiz-questions': resolve(__dirname, 'harness/quiz-questions.ts') } },
  test: { include: ['tools/**/*.test.ts'] },
})
```

- [ ] **Step 4:** Run `npm install`. Expected: installs without error.
- [ ] **Step 5:** Commit: `git add package.json tsconfig.json vitest.config.ts tools/.gitkeep && git commit -m "chore: tooling scaffold"`

### Task 2: Stub `QuizQuestion` type

**Files:**
- Create: `harness/quiz-questions.ts`
- Test: via Task 3 (typecheck of all 34 files is this task's real test)

**Interfaces:**
- Produces: `export interface QuizQuestion { … }` and `export type Alternative`.

- [ ] **Step 1:** Create `harness/quiz-questions.ts`:

```ts
export type AltId = 'A' | 'B' | 'C' | 'D' | 'E'
export interface Alternative {
  id: AltId
  type: 'text' | 'image'
  value: string
}
export interface QuizQuestion {
  id: number
  exam: 'enem'
  year: number
  day: 1 | 2
  text: string
  alternatives: Alternative[]
  correct: AltId
  subject: string[]
  topics: string[]
  language?: 'en' | 'es'
  displayId?: number | string
  annulled?: boolean
  images?: string[]
  image?: string | null
}
```

- [ ] **Step 2:** Run `npm run typecheck`. Expected: PASS (all 34 `.tsx` typecheck against the stub). If a file reveals a field/type not covered, widen the stub minimally and note it.
- [ ] **Step 3:** Commit: `git add harness/quiz-questions.ts tsconfig.json && git commit -m "feat: stub QuizQuestion type for local typecheck"`

### Task 3: Loader — import a prova `.tsx` as data

**Files:**
- Create: `tools/load.ts`
- Test: `tools/load.test.ts`

**Interfaces:**
- Produces: `export async function loadProva(absPath: string): Promise<QuizQuestion[]>` — dynamic-imports the module and returns its default export.

- [ ] **Step 1: Write the failing test** `tools/load.test.ts`:

```ts
import { expect, test } from 'vitest'
import { resolve } from 'node:path'
import { loadProva } from './load'

test('loads 2022 d1 as an array of questions with ids 1..N', async () => {
  const qs = await loadProva(resolve(__dirname, '../provas/2022/enem_2022_d1.tsx'))
  expect(Array.isArray(qs)).toBe(true)
  expect(qs.length).toBeGreaterThan(80)
  expect(qs[0].id).toBe(1)
  expect(qs[0].exam).toBe('enem')
})
```

- [ ] **Step 2:** Run `npx vitest run tools/load.test.ts`. Expected: FAIL (`loadProva` not defined).
- [ ] **Step 3: Implement** `tools/load.ts`:

```ts
import type { QuizQuestion } from '@/lib/quiz-questions'
export async function loadProva(absPath: string): Promise<QuizQuestion[]> {
  const mod = await import(/* @vite-ignore */ absPath + `?t=${Date.now()}`)
  const data = mod.default
  if (!Array.isArray(data)) throw new Error(`No default-exported array in ${absPath}`)
  return data as QuizQuestion[]
}
```

- [ ] **Step 4:** Run the test. Expected: PASS.
- [ ] **Step 5:** Commit.

### Task 4: Validator — schema + client rules

**Files:**
- Create: `tools/validate.ts` (CLI: validates one file or all of `provas/`)
- Create: `tools/rules.ts` (pure functions)
- Test: `tools/rules.test.ts`

**Interfaces:**
- Consumes: `loadProva` (Task 3), `tools/topics_taxonomy.json`.
- Produces: `export function checkQuestion(q: QuizQuestion, taxonomy: Record<string,string[]>): string[]` returning a list of human-readable problems (empty = clean); `export function checkProva(qs: QuizQuestion[], taxonomy): string[]`.

- [ ] **Step 1: Write failing tests** `tools/rules.test.ts` covering each rule:

```ts
import { expect, test } from 'vitest'
import { checkQuestion } from './rules'
const tax = { geo: ['Urbanização', 'Questões aleatórias'], mat: ['Funções', 'Questões aleatórias'] }
const base = { id: 1, exam: 'enem', year: 2010, day: 1, text: 'x',
  alternatives: [{id:'A',type:'text',value:'a'},{id:'B',type:'text',value:'b'}],
  correct: 'A', subject: ['geo'], topics: ['Urbanização', 'Questões aleatórias'] } as any

test('clean question yields no problems', () => {
  expect(checkQuestion(base, tax)).toEqual([])
})
test('flags ch subject', () => {
  expect(checkQuestion({ ...base, subject: ['ch'] }, tax).join()).toMatch(/subject/)
})
test('flags missing Questões aleatórias', () => {
  expect(checkQuestion({ ...base, topics: ['Urbanização'] }, tax).join()).toMatch(/Questões aleatórias/)
})
test('flags topic outside subject vocabulary', () => {
  expect(checkQuestion({ ...base, topics: ['História Geral', 'Questões aleatórias'] }, tax).join()).toMatch(/vocabulary|topic/i)
})
test('flags empty explanation', () => {
  expect(checkQuestion({ ...base, explanation: '' }, tax).join()).toMatch(/explanation/)
})
test('flags correct not in A..E', () => {
  expect(checkQuestion({ ...base, correct: 'Z' }, tax).join()).toMatch(/correct/)
})
test('annulled question is exempt from explanation/correct checks', () => {
  expect(checkQuestion({ ...base, annulled: true, correct: 'A', explanation: '' }, tax)).toEqual([])
})
```

- [ ] **Step 2:** Run `npx vitest run tools/rules.test.ts`. Expected: FAIL.
- [ ] **Step 3: Implement** `tools/rules.ts` so every test passes. Rules enforced:
  - `subject` non-empty, every value ∈ taxonomy keys (so `'ch'` fails).
  - every `topics` value ∈ union of allowed topics for the question's subjects; last element must be `'Questões aleatórias'`; the tag must be present.
  - `correct` ∈ `A..E`; alternatives ids are a prefix of `A..E` with matching `correct`.
  - non-annulled: `explanation` non-empty (trim), `correct` present.
  - annulled: skip explanation + correct checks.
  - every image referenced in `images`/`image`/image-type alternatives has a real file in `images_out/<year>/` (checked in `checkProva` with fs).
- [ ] **Step 4:** Run tests. Expected: PASS.
- [ ] **Step 5: Implement CLI** `tools/validate.ts`: loads one path (arg) or every `provas/**/*.tsx`, prints per-file problem counts, exits non-zero if any. Run `npm run validate` and record the **baseline report** (how many problems each of the 34 files currently has) into `reports/_baseline.md`.
- [ ] **Step 6:** Commit tools + baseline.

### Task 5: PDF → clean text extractor

**Files:**
- Create: `tools/extract_text.sh` (wrapper around `pdftotext -layout`)
- Create: `tools/extract_text.test.ts` (runs it on a known source PDF, asserts accented text present)

**Interfaces:**
- Produces: `sources/<year>/<name>.txt` with UTF-8, accents intact.

- [ ] **Step 1:** Write `tools/extract_text.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail
in="$1"; out="$2"
pdftotext -layout -enc UTF-8 "$in" "$out"
```

- [ ] **Step 2:** Test on `enem v/2022/2022_PV_impresso_D1_CD1.pdf`: run the script, then assert the output file contains an accented ENEM word (e.g. `grep -q "função\|questão\|índice"`). Expected: present. If `pdftotext` missing, `sudo apt-get install -y poppler-utils` (document in task).
- [ ] **Step 3:** Commit.

### Task 6: Gabarito (answer-key) parser + caderno-color detector

**Files:**
- Create: `tools/gabarito.ts`
- Test: `tools/gabarito.test.ts`

**Interfaces:**
- Produces: `export function parseGabarito(txt: string): Record<string, Record<number, AltId>>` → `{ [cor]: { [questao]: 'A'..'E' } }`; `export function detectColor(coded: {id:number,correct:AltId}[], keys: Record<string,Record<number,AltId>>): {color:string, matchRate:number}` picks the color whose key best matches the file's current answers (used only as a *hint*; the official key is authoritative).

- [ ] **Step 1:** Write failing test with a small synthetic gabarito text fixture (azul: 1-A 2-B…; amarelo: 1-C…) asserting `parseGabarito` returns the right map and `detectColor` picks the higher-matching color.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Implement parser (regex over the layout text) + detector (count matches per color, return best).
- [ ] **Step 4:** Run. Expected: PASS.
- [ ] **Step 5:** Commit.

### Task 7: Image mapper + slicer

**Files:**
- Create: `tools/images.ts`
- Test: `tools/images.test.ts`

**Interfaces:**
- Consumes: `sharp`.
- Produces: `export async function sliceVertical(src: string, parts: number, outPrefix: string): Promise<string[]>` (equal vertical slices, for stacked alternative blocks); `export async function cropRegion(src: string, box: {left:number,top:number,width:number,height:number}, out: string): Promise<string>`; `export function mapDriveName(driveName: string): {qid:number, alt?:AltId, lang?:'es'|'en'} | null` (parses `questao_NN`, `questao_NNN_espanhol`, `questao_NN_alternativa_a`, `questao_NN_alternativas_bcde`, `questao_NN_texto`).

- [ ] **Step 1:** Write failing tests: `mapDriveName('questao_103_alternativa_a.png')` → `{qid:103, alt:'A'}`; `mapDriveName('questao_001_espanhol.png')` → `{qid:1, lang:'es'}`; `sliceVertical` on a 100×500 test png with `parts=5` yields 5 files each ~100×100.
- [ ] **Step 2:** Run. Expected: FAIL.
- [ ] **Step 3:** Implement with `sharp` metadata + extract.
- [ ] **Step 4:** Run. Expected: PASS.
- [ ] **Step 5:** Commit.

### Task 8: Visual renderer + screenshot QA

**Files:**
- Create: `harness/index.html`, `harness/main.tsx`, `harness/vite.config.ts`, `harness/QuestionView.tsx`
- Create: `harness/README.md` (how to run + screenshot)

**Interfaces:**
- Produces: a dev server that renders a prova chosen by `?file=provas/2010/enem_2010_d1.tsx`; `QuestionView` renders text, images (resolved from `images_out/`), and alternatives (text or image). Screenshots taken via chrome-devtools MCP (`new_page` → navigate to the dev-server URL → `take_screenshot` per question anchor).

- [ ] **Step 1:** Scaffold Vite React app in `harness/`; alias `@/lib/quiz-questions` → `./quiz-questions.ts`; serve `images_out/` and `enem v/` statically.
- [ ] **Step 2:** Implement `QuestionView.tsx`: shows `displayId ?? id`, `text`, each image, alternatives (image alternatives as `<img>`), highlights `correct`, shows `explanation`, `subject`, `topics`; marks `annulled`.
- [ ] **Step 3:** Run `npm --prefix harness run dev`; open with chrome-devtools MCP; take a full-page screenshot of 2022 d1 (already-good file) as a smoke test. Expected: questions render, images load.
- [ ] **Step 4:** Write `harness/README.md` documenting the screenshot-QA loop.
- [ ] **Step 5:** Commit.

---

## Phase 1 — Source acquisition  ✅ DONE (2026-10-12)

**Outcome:** `sources/` is a complete tree — 17 years × 4 files (prova + gabarito, both days), all **Azul**, all with valid text layers (no OCR needed). Manifest with URLs + sha256 at `sources/SOURCES.md`. Corrected finding: **only 2010 was genuinely missing** (downloaded from the USP `fep.if.usp.br` mirror of the official INEP booklets); every other year already existed under `enem v/` (some gabaritos were just misnamed).

**Two caveats for the pilot/production:**
- **2010 gabarito is a marked booklet** (correct answers circled in green), NOT a parseable answer table. `tools/gabarito.ts` cannot extract 2010 — read 2010 answers **visually** (render gabarito pages / inspect) instead. All other years have clean tables the parser handles.
- **2009 gabaritos are combined all-caderno sheets** (ALLCAD) — use the Azul column.

### Task 9: Acquire all official INEP provas + gabaritos  ✅

**Files:**
- Create: `sources/SOURCES.md` (table: year, day, prova URL, gabarito URL, caderno color archived, sha256)
- Populate: `sources/<year>/*.pdf` for every missing item.

**Interfaces:**
- Produces: for all 17 years × 2 days, a prova PDF and a gabarito PDF (or a gabarito table) under `sources/<year>/`.

- [ ] **Step 1:** Copy existing PDFs from `enem v/<year>/` into `sources/<year>/`.
- [ ] **Step 2:** Use WebSearch/WebFetch to find INEP's official downloads (provas e gabaritos: INEP "Provas e Gabaritos" archive) for the gaps: **provas 2009–2013**, **gabaritos 2009–2019**, **all of 2010 (both)**. Record each source URL + sha256 in `SOURCES.md`. Prefer official `download.inep.gov.br` / `gov.br/inep` links.
- [ ] **Step 3:** Verify each PDF opens and `pdftotext` yields real text (run Task 5 script). For any prova with no text layer, note it needs OCR (`tesseract`, `-l por`) in a follow-up.
- [ ] **Step 4:** Commit PDFs (if large, keep under `sources/` — repo is local-only) + `SOURCES.md`.

---

## Phase 2 — 2010 pilot (proves the recipe)

> The pilot produces two fully-correct files and the repeatable recipe. 2010 is the worst-broken (scrambled alternatives, wrong gabarito, no images) and must be rebuilt from the INEP PDF.

### Task 10: Correct `enem_2010_d1.tsx` end-to-end

**Files:**
- Modify: `provas/2010/enem_2010_d1.tsx`
- Create: `images_out/2010/…`
- Create: `reports/2010/enem_2010_d1.md`

- [ ] **Step 1:** Extract the official 2010 D1 prova text (Task 5) and parse the gabarito (Task 6); detect/record the caderno color.
- [ ] **Step 2:** For each question id 1..N: align to the official question; fix `text` (accents, full enunciado), fix `alternatives` (content + order, remove "Rascunho"/page-number/redação garbage); set `correct` from the official key; set `subject` + `topics` from the taxonomy (+ trailing `'Questões aleatórias'`); write a **full worked `explanation`** verified against the key (web-verify genuinely hard items). Preserve `displayId`/`annulled`/`language`.
- [ ] **Step 3:** Produce images: for each figure/graphic, crop from the 2010 PDF (rasterize page with `pdftoppm -r 200`, crop with Task 7) → `images_out/2010/enem_2010_d1_q<id>.jpg`; per-alternative questions sliced to `_A.._E` and alternatives set to `type:'image'`. Ensure each `images`/image-alt reference has a matching file.
- [ ] **Step 4: Gate — scripted:** `npm run validate -- provas/2010/enem_2010_d1.tsx`. Expected: **0 problems**. `npm run typecheck`. Expected: PASS.
- [ ] **Step 5: Gate — visual:** render in the harness; screenshot every question; confirm image crops legible, per-alternative images aligned, `correct` highlighted matches the official key. Fix anything off and re-run Step 4.
- [ ] **Step 6:** Write `reports/2010/enem_2010_d1.md`: per-question list of what was wrong → what changed (gabarito corrections called out explicitly), mirroring the chat-summary style.
- [ ] **Step 7:** Commit: `git add -A && git commit -m "fix(2010-d1): correct enunciados, gabarito, topics, explanations, images"`

### Task 11: Correct `enem_2010_d2.tsx` end-to-end

**Files:** Modify `provas/2010/enem_2010_d2.tsx`; create `images_out/2010/…`; create `reports/2010/enem_2010_d2.md`.

- [ ] **Step 1–7:** Identical recipe to Task 10, for 2010 D2 (math/natural sciences day — explanations lean on worked calculations). Same two gates (validate 0 problems + typecheck PASS; visual QA). Commit.

### Task 12: Pilot checkpoint with operator

- [ ] **Step 1:** Summarize the 2010 results (both reports, sample screenshots, the baseline-vs-after validator numbers).
- [ ] **Step 2:** Confirm with the operator: changelog format, explanation depth, image quality, **lit-vs-por decision**, and caderno-color handling. Record decisions in the spec. Do not scale until approved.

---

## Phase 3 — Production (remaining 32 provas)

### Task 13: Per-prova production runbook

**Files:** Create `docs/superpowers/plans/PROVA_RUNBOOK.md`.

- [ ] **Step 1:** Write the exact per-prova recipe (the Task 10 steps generalized) as a self-contained runbook a fresh subagent can follow for any `provas/<year>/enem_<year>_d<n>.tsx`, including the two gates and the report template. No placeholders — include the commands.
- [ ] **Step 2:** Commit.

### Task 14: Batched correction of the remaining 32

> Dispatch via superpowers:subagent-driven-development, one prova per subagent, following the runbook. Process in year batches; **gate each file on `validate` = 0 problems + typecheck PASS + visual QA before its commit**; operator reviews each batch before the next.

- [ ] For each of the 32 remaining files (2009, 2011–2025 × d1/d2): subagent runs the runbook → produces corrected `.tsx` + images + `reports/<year>/…md` → both gates pass → commit. Checkbox per file:
  - [ ] 2009 d1  - [ ] 2009 d2
  - [ ] 2011 d1  - [ ] 2011 d2
  - [ ] 2012 d1  - [ ] 2012 d2
  - [ ] 2013 d1  - [ ] 2013 d2
  - [ ] 2014 d1  - [ ] 2014 d2
  - [ ] 2015 d1  - [ ] 2015 d2
  - [ ] 2016 d1  - [ ] 2016 d2
  - [ ] 2017 d1  - [ ] 2017 d2
  - [ ] 2018 d1  - [ ] 2018 d2
  - [ ] 2019 d1  - [ ] 2019 d2
  - [ ] 2020 d1  - [ ] 2020 d2
  - [ ] 2021 d1  - [ ] 2021 d2
  - [ ] 2022 d1  - [ ] 2022 d2
  - [ ] 2023 d1  - [ ] 2023 d2
  - [ ] 2024 d1  - [ ] 2024 d2
  - [ ] 2025 d1  - [ ] 2025 d2

### Task 15: Final full-project verification + packaging

- [ ] **Step 1:** `npm run validate` over all 34 → **0 problems**; `npm run typecheck` PASS.
- [ ] **Step 2:** Visual QA spot-check across years; confirm every image reference resolves and no orphan images.
- [ ] **Step 3:** Package deliverables: 34 corrected `.tsx` in their year folders + `images_out/` in Marcos's naming + `reports/` changelogs. Produce `reports/SUMMARY.md`.
- [ ] **Step 4:** Commit; present to operator for client hand-off.

---

## Self-Review notes
- Spec coverage: text/alternatives/gabarito/subject/topics/resolução/images each map to Task 10 steps + validator rules (Task 4) + visual QA (Task 8). Source gaps → Task 9. Caderno color → Task 6. Taxonomy → Task 4 + `topics_taxonomy.json`. Annulled/displayId/language preservation → Global Constraints + stub (Task 2) + validator.
- Open item carried to checkpoint (Task 12): `lit` vs `por` for literature questions.
