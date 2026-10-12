# Per-prova correction runbook (proven on 2010)

Self-contained recipe to correct one `provas/<year>/enem_<year>_d<n>.tsx` to the delivery standard.
Run from repo root. Tools are `npx tsx tools/<name>.ts`. **Never change code structure** — only content.

## 0. Know the format
- **2009–2016 (old):** D1 = Ciências Humanas (1–45) + Ciências da Natureza (46–90); D2 = Linguagens (91–135) + Matemática (136–180). D2 file ids are 91–180; English variants get ids 181+ with `displayId` = the real number.
- **2017+ (new):** D1 = Linguagens + Ciências Humanas; D2 = Ciências da Natureza + Matemática. (Verify the exact split per year/file by dumping it.)
- Subjects per section: CH→geo/his/fil/soc, CN→bio/fis/qui, LC→por/lit/ing/esp, MT→mat. Literature → `lit`. No `ch`.

## 1. Inspect current state
```bash
npx tsx tools/dump.ts "$PWD/provas/<year>/enem_<year>_d<n>.tsx" | less   # id|subject|topics|correct|text
npm run validate -- provas/<year>/enem_<year>_d<n>.tsx                    # baseline problems
```

## 2. Source + answer key
- Prova + gabarito PDFs are in `sources/<year>/` (see `sources/SOURCES.md`). Render pages:
  `pdftoppm -r 150 -png sources/<year>/<year>_GB_D<n>_AZUL.pdf <scratch>/gb/p` (and the PV for figures at -r 200).
- **Official key** → `data/<year>/gabarito_oficial.json` keyed by the file's ids (use `displayId` numbering for language variants). If the gabarito is a clean table, `tools/gabarito.ts` parses it; if it is a marked booklet (e.g. 2010), read the circled answers (a subagent reading the rendered pages is reliable). Spot-check ≥10 answers before trusting.
- Verify: `npx tsx tools/check_gabarito.ts "$PWD/provas/.../file.tsx" "$PWD/data/<year>/gabarito_oficial.json" d<n>` → fix any mismatch in `correct` by editing that question (keep structure).

## 3. Tags + full worked solutions
Produce (directly, or via section subagents reading the rendered prova pages + `tools/topics_taxonomy.json` + the key):
- `data/<year>/tags_*.json`: `{ "<id>": { "subject": ["x"], "topics": ["T1","T2"] } }` — topics VERBATIM from the subject's taxonomy list, NO 'Questões aleatórias' (appended automatically).
- `data/<year>/expl_*.json`: `{ "<id>": "<resolução em português>" }` — full worked solution justifying the OFFICIAL answer (math: show the calculation; others: concept + why distractors fail). **Paraphrase source texts, don't quote long passages** (avoids output content-filter blocks).
Apply:
```bash
npx tsx tools/apply_tags.ts provas/<y>/<file>.tsx data/<y>/tags.json --write
npx tsx tools/apply_explanations.ts provas/<y>/<file>.tsx data/<y>/expl.json --write
```

## 4. Images → images_out/<year>/ named enem_<year>_d<n>_q<id>[_<ALT>].{jpg|png}
```bash
cd <scratch> && pdftohtml -xml -stdout "$PWD/sources/<y>/<y>_PV_D<n>_AZUL.pdf" > pv.xml   # geometry
npx tsx tools/map_images.ts <scratch>/pv.xml > <scratch>/imgmap.json                      # figure->question
npx tsx tools/crop_images.ts sources/<y>/<y>_PV_D<n>_AZUL.pdf <scratch>/pv.xml <scratch>/imgmap.json <y> <n> 200
```
- Per-alternative questions (refs `_A.._E`): slice the bundled crop with `images.ts::sliceByGaps`, then convert alternatives to `type:'image'` with `tools/apply_alt_images.ts` + a `{ "<id>": "/enem/<y>/images/enem_<y>_d<n>_q<id>" }` spec.
- Vector figures/tables the mapper misses: crop from the 200-dpi page render with `tools/crop_px.ts <page.png> <left> <top> <w> <h> <out>` (view the page, pick the box, verify the crop, iterate). Page→question location: parse "Questão N" anchors from pv.xml.
- Check coverage: `npm run validate -- provas/<y>/<file>.tsx --images` → 0 "image file missing".

## 5. Gates (all must pass before commit)
```bash
npm run validate -- provas/<y>/<file>.tsx --images   # 0 problems
npx tsc --noEmit                                     # 0 errors
npx tsx tools/check_gabarito.ts ... d<n>             # 0 mismatches, all checked
```
Visual QA: `cd harness && npm run dev`; open `?file=provas/<y>/<file>.tsx`; screenshot (chrome-devtools MCP) a sample incl. image questions — confirm crops legible, per-alternative aligned, ✓ answer matches the key.

## 6. Changelog + commit
Write `reports/<year>/enem_<year>_d<n>.md` (what was wrong → what changed; call out gabarito corrections, tag fixes, resolução additions, image notes). Commit as `comingtop <comingtop01@gmail.com>`, no AI attribution:
```bash
git add provas/<y>/<file>.tsx data/<y>/ reports/<y>/ && git commit -m "fix(<y>-d<n>): ..."
```
(images_out is gitignored; provenance is in reports + SOURCES.)
