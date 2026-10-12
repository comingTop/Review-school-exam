# ENEM Exam-Code Correction — Design Spec

**Date:** 2026-10-12
**Client:** Marcos C. (freelance; identity used in client chat: "Hendra K.")
**Escrow:** USD 263.75 paid, released only at 100% correctness.

## 1. Goal
For each of the **34 `.tsx` files** (ENEM 2009–2025, day 1 + day 2; 2,780 questions total) make the coded version faithfully represent the official INEP exam. Correct content only; **never change code structure** — each file must remain a `QuizQuestion[]` module that drops into Marcos's app unchanged.

## 2. What gets corrected (per question)
1. **Enunciado (`text`)** — faithful to the official prova; fix accents/encoding, broken extraction.
2. **Alternatives** — correct content, correct order, no shifted/garbage entries (e.g. "Rascunho", page numbers, redação lines).
3. **Gabarito (`correct`)** — matches the official INEP answer key for the caderno color the file follows.
4. **`subject`** — one of the 12 canonical subjects (see §4). No `'ch'`.
5. **`topics`** — chosen from the fixed per-subject vocabulary (`tools/topics_taxonomy.json`), with **`'Questões aleatórias'` always present as the trailing tag in every question** (client requirement — not a placeholder to remove).
6. **Resolução (`explanation`)** — **full worked solution**, verified against the official answer; write the 660 empty ones and verify existing ones.
7. **Images** — correct crop, legible, per-alternative where the question needs it (model pattern: 2022 d2 q106), named to the code's convention so the app keeps working.

## 3. Canonical schema & invariants
`QuizQuestion` (derived from raw files): `id:number, exam:'enem', year:number, day:1|2, text:string, alternatives:{id:'A'..'E', type:'text'|'image', value:string}[], correct:'A'..'E', subject:string[], topics:string[]`, optional `language`, optional `images:string[]`.
- Build a stub `harness/quiz-questions.ts` so files typecheck locally.
- Keep `images?: string[]` (omit when none); do **not** introduce the `image: null` variant that slipped into the delivered 2010-d1 draft — reconcile that file to the canonical shape.

## 4. Subject/topic taxonomy (client-supplied)
Subjects: `mat, por, lit, ing, esp, his, geo, fil, bio, fis, qui, soc`. Allowed topics per subject are fixed — see `tools/topics_taxonomy.json`. Rules:
- Assign the real subject + best-matching topic(s) from that subject's list.
- Always append `'Questões aleatórias'`.
- Reassign all 44 `subject:['ch']` questions to a real subject.
- **Open item:** whether literature questions should be subject `lit` or stay `por` with a literature topic (existing files only ever use `por`). Confirm with Marcos at the pilot checkpoint.

## 5. Source of truth (INEP, fetched online where missing)
Official provas + gabaritos. Local `enem v/` (= Marcos's Google Drive) has: provas only 2014–2025, gabaritos only 2020–2025, images incomplete, **2010 empty**. Must fetch from INEP online: provas 2009–2013, gabaritos 2009–2019, all of 2010. Everything learned fresh from INEP online, not from memory.
- **Caderno color:** ENEM prints 4 colors (azul/amarelo/branco/rosa) with the same questions in different order and a per-color key. Detect each file's color by matching its question order to a color's gabarito before checking `correct`.

## 6. Correction pipeline (ordered phases, per prova)
extract PDF→clean text → align coded↔official by id → fix text/alternatives → set gabarito (detected color) → fix subject/topics → write/verify resolução → images (§7) → verify (§8) → changelog (§9).

## 7. Image subsystem
- Map Drive position-named files (`questao_NN[...]`) → question `id`; reconcile overlapping `imagens/` vs `imagens_questoes/`.
- Rename to code convention `enem_<year>_d<n>_q<id>[_<ALT>].{jpg|png}`; output to `images_out/<year>/`.
- For per-alternative questions, slice/relabel into `_A.._E` and set each alternative `type:'image'`.
- Re-crop from the official PDF when a Drive crop is wrong/missing; 2010 fully from PDF.

## 8. Verification (full)
- **Scripted:** TS typecheck vs stub; schema validator; checks for leftover `ch`, topics outside vocabulary, missing trailing `'Questões aleatórias'`, empty `explanation`, id continuity, `correct ∈ {A..E}`, image files exist for every image ref, no orphan images.
- **Visual:** local React/Vite renderer; screenshot each question via chrome-devtools MCP; verify image crop/legibility and per-alternative layout ("imagem cortada do jeito certo").

## 9. Orchestration & deliverables
Tooling first → **2010 d1+d2 pilot** end-to-end → **checkpoint with operator** (quality, changelog format, caderno handling, lit/por decision) → remaining 32 in reviewed batches via subagents, each gated by §8 before commit.
Deliverables: 34 corrected `.tsx`; per-prova changelog `reports/<year>/enem_<year>_d<n>.md` (what was wrong → what changed, mirroring the chat summaries); renamed/cropped image set in Marcos's naming; the reusable tooling + harness.

## 10. Follow-on
UERJ 1st-phase provas (~10, 60q each, ~USD 25/prova) — separate proposal after ENEM is accepted. Not in this scope.
