# FUVEST corrections — 2017–2025

All nine years have been checked against their matched official first-phase
booklets and answer keys. There are **810/810 matching key entries**, including
2022 V q54's official annulment, and **586/586 image references resolve**
with zero missing files, invalid paths or dimension mismatches. All nine files
pass TypeScript syntax parsing. This is a data-file review; the repository's
ENEM-only type check does not validate the FUVEST schema.

**All shared figures are now wired:** 2023 q7–8 (shared Armandinho strip) and
2024 q4–5 (shared Guerrilla Girls / Tate advertisement) previously had no `images`
property; the located crops are now attached to each of the four questions
(`fuvest_2023_q07_1.jpg`, `fuvest_2024_q04_1.jpg`), consistent with the `images`
field already used throughout each file. No crop remains unlocatable or deferred.

| Year | Version | Answers changed | Stems changed | Alternative values changed | Explanations rewritten | Crops | Existing image refs present | Deferred attachment |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 2017 | V | 0 | 80 | 210 | 90 | 57 | 62/62 | None |
| 2018 | V | 1: q29 D→B | 88 | 249 | 90 | 35 | 37/37 | None |
| 2019 | V | 0 | 88 | 295 | 90 | 72 | 80/80 | None |
| 2020 | V | 0 | 79 | 230 | 90 | 99 | 65/65 | None |
| 2021 | V | 0 | 88 | 289 | 90 | 96 | 59/59 | None |
| 2022 | V | 1: q54 B→* (annulled) | 89 | 271 | 90 | 92 | 96/96 | None |
| 2023 | V | 0 | 90 | 268 | 90 | 63 | 63/63 | None |
| 2024 | V | 1: q48 C→D | 90 | 320 | 90 | 77 | 77/77 | None |
| 2025 | V1 | 0 | 77 | 377 | 90 | 46 | 47/47 | None |

Text counts compare each completed year against its incoming draft; 2025 includes
the text work already delivered in `cc353e0`. Crops include some original raster
strips retained alongside full option panels. Shared figures and per-alternative
images explain why reference counts differ from distinct crop counts. Each
`fuvest/<year>/images/SOURCES.json` records source pages and PDF crop rectangles.

The near-match version rule in the latest instruction resolves 2018 and 2024:
each draft uniquely matched V at 89/90 before correction. Other years matched
V exactly apart from the 2022 annulment; 2025 matched V1. All available key
columns were compared, including the full 2024 V/K/Q/X/Z set.

### 2017 — completed text and images

- Version V: 90/90 original answers agree; 0 answer letters changed.
- 80 stems, 210 alternative values and all 90 explanations corrected/rewritten.
- 57 official raster figure/diagram crops produced; shared figures give 62
  references, all 62 present with matching real dimensions. No figure deferred.
- Corrected misplaced images, including Picasso (q1, formerly attached to q3),
  the optics experiment (q65, formerly attached to q10), and several science
  diagrams. Existing applicable filenames are retained even where their old
  question numbers were misleading; references now follow the official content.
  The obsolete q10 figure reference was removed; its figure is saved at the
  existing q65 path. Missing figures with no suitable old reference received
  additional source filenames. Crop rectangles/page provenance are recorded in
  `fuvest/2017/images/SOURCES.json`.
- Restored shared reading passages, the complete Drummond poem, source tables,
  and mathematical/chemical notation. Fixed substantive draft errors including
  q16 forest comparison, q25 ethics, q55 autotrophy, q57 relative velocity, q58
  vector direction and q66 water mass (1.30 g).
- Gates: `node tools/check_fuvest.mjs --year=2017`: syntax, 90/90 V answers,
  matched booklet, 62/62 images, zero missing/dimension errors. Separate AST
  audit confirms preserved imports/declarations/exports, property layout, IDs,
  year/phase and alternative IDs/types. `git diff --check` passes.
- Official source pages and a figure contact sheet (q1,14,17,31,37,46,49,57,58,
  62,65,70,72,78,81,84) were rendered and visually inspected.


### 2018 — completed text and images

- Version V identified by the unique 89/90 near-match permitted in the latest
  instructions; next-best version X matched only 24/90. Corrected q29 D→B.
  Final official-key agreement is 90/90.
- 88 stems, 249 alternative values and all 90 explanations changed. Many draft
  questions had the right letter attached to neighboring questions' content;
  restored official order by changing values while preserving IDs and all
  declarations/exports/property layouts/alternative IDs/types.
- Restored the correct physics graphs, chemical structures, melatonin sequence,
  mathematical functions/polynomial, biology items, and shared reading passages.
  Corrected the negative fermentation enthalpy (−70 kJ/mol) and aligned tags to
  restored content at the shifted question positions.
- 35 official crops produced; shared photo references yield 37/37 images present,
  zero missing, zero dimension mismatches. Crop/page provenance is in
  `fuvest/2018/images/SOURCES.json`. The misplaced q31 image reference was
  removed; the corresponding figure remains with its official question.
- Image-option panels are kept as exact official graphics in `images`; the
  original text-type alternatives identify their lettered panel. Printed tables
  were transcribed row by row, rather than flattened by PDF text order.
- `node tools/check_fuvest.mjs --year=2018` passes syntax, V answer and image gates.
  A separate AST audit passes structure/metadata preservation; `git diff --check`
  passes. Rendered PDF pages and a contact sheet for q1,2,5,14,19,20,21,22,25,26,
  29,33,39,57,60,86 were visually inspected. Nothing deferred for this year.

### 2019 — completed text and images

- Version V: 90/90 original answers match; no answer letter changes.
- 88 stems, 295 alternative values and all 90 explanations corrected/rewritten.
  Restored the 14 empty alternative arrays with official A–E choices. Reordered
  q40's existing alternative entries into A–E without changing any existing ID
  or type. Imports, declarations, exports, top-level property layouts and all
  question IDs/year/phase values remain unchanged.
- Restored heavily truncated stems, shared text and the two poems for q68–69;
  reconstructed formula notation and source tables. Graphic alternatives are
  preserved as exact complete official panels, with existing image-typed value
  objects and their original file paths retained and dimensions corrected.
- 72 crops produced; 80 question/alternative image references all resolve with
  matching dimensions, zero missing. `fuvest/2019/images/SOURCES.json` records
  crop pages and rectangles. Shared passage photos are correctly linked to
  q73–75 and q76–79. No figures deferred.
- `node tools/check_fuvest.mjs --year=2019` passes syntax, ordered IDs, V 90/90,
  source availability and image checks. AST audit confirms unchanged metadata
  and every pre-existing alternative ID/type, with only missing official choices
  populated. `git diff --check` passes.
- Official pages and contact-sheet samples q1,3,9,12,18,35,39,40,41,44,49,56,57,
  73,76,89 were rendered and visually checked, including the multi-column panels.

### 2020 — completed text and images

- Version V: 90/90 original answers match; no answer letters changed.
- 79 stems, 230 alternative values and all 90 explanations corrected/rewritten.
  Restored mathematical notation, the original order of the Drummond poem,
  full graphic alternatives and row-by-row source tables. Preserved imports,
  declarations, exports, property layouts, question metadata and alternative IDs/types.
- 99 official crops produced (including original raster strips and complete
  option panels); 65 current image references, all present with exact dimensions.
  Added the vector-based pH table and internet map, which native image extraction
  alone omitted. Existing applicable filenames retained; crop/page coordinates
  recorded in `fuvest/2020/images/SOURCES.json`. No figures deferred.
- Syntax, V 90/90 answer agreement, source availability and image gates pass
  using `node tools/check_fuvest.mjs --year=2020`; separate AST preservation audit
  and `git diff --check` pass. Official page renderings and a contact sheet for
  q1,4,5,8,10,12,16,24,51,52,75,77,84,85,89,90 were visually inspected.

### 2021 — completed text and images

- Version V: 90/90 original answers agree; no answer letters changed.
- 88 stems, 289 alternative values and all 90 explanations corrected/rewritten.
  Restored source passages, formula inequalities/fractions, full table rows and
  shared English/literature texts. In particular q4, q10 and q11 previously had
  corrupted or duplicated mathematical choices despite the correct answer letter.
- The source uses Type3 bitmap fonts with unreadable character codes. Recovery
  combined page OCR, glyph correspondence and the existing Portuguese vocabulary;
  formulas, tables and graphical choices were checked against rendered pages.
  No recovered PDF or temporary OCR files are included in the repository.
- 96 crop manifest entries, including complete option panels and the source
  tables in q42; all 59 current image references exist with real dimensions.
  Shared HMF structures are attached to both q83 and q84. Original q51/q88
  filenames are retained for the matching figures and option panels. No images deferred.
- `node tools/check_fuvest.mjs --year=2021` passes syntax, V 90/90 answers,
  source availability and image/dimension gates. Separate AST audit preserves
  imports, declarations, exports, layouts, IDs, types and question metadata;
  `git diff --check` passes. Official pages and a contact sheet covering
  q1,2,4,9,18,28,29,42,47,51,53,62,83,86,88,89 were visually inspected.

### 2022 — completed text and images

- Version V: 89 original letters agree plus q54 annulled in the official rectified
  key. Set q54 `correct` from B to the official `*`; 90/90 entries now agree.
  Preserved the existing property layout by storing the annulment in `correct`,
  without introducing a new flag. The shared checker now accepts `*` only when
  it matches an annulment in the official column. No answer is invented for q54.
- 89 stems, 271 alternative values and all 90 explanations corrected/rewritten.
  Restored the three Machado texts for q20–22, table rows, mathematical fractions,
  chemistry notation and full shared reading passages. q70–71 retain the source's
  printed enthalpy values and solve Hess's law in the stated per-mol-O₂ units.
- 92 source crops produced, including all 30 image-typed alternatives; shared
  figures give 96/96 references present, with zero missing/dimension mismatches.
  Moved generic `/images/` values into `fuvest/2022/images/`, retaining basenames.
  q61's existing alternative IDs/types are preserved and their entries ordered A–E.
  Page and crop coordinates are in `fuvest/2022/images/SOURCES.json`.
- `node tools/check_fuvest.mjs --year=2022` passes syntax, V answer/annulment,
  booklet and image gates. Separate AST structure/metadata audit and
  `git diff --check` pass. Official pages, a figure contact sheet and all 30
  alternative crops were visually inspected. Nothing deferred for this year.

### 2023 — completed text and crop assets; two attachment limitations

- Version V is confirmed against the full V/K/Q/X/Z set: 90/90 V entries,
  next best X 25/90. No answer letters changed.
- 90 stems, 268 alternative values and all 90 explanations corrected/rewritten.
  Restored the shared passages, mathematical functions and fractions, q78's
  force ratio, q85's ranking formula and source table semantics.
- 62 crop assets produced, including all 15 image-typed alternatives. All 61
  references actually present in the TypeScript resolve with exact dimensions.
  Full q14 ion crops include the brackets and charges outside the embedded raster.
  Crop/page provenance is in `fuvest/2023/images/SOURCES.json`.
- **q7–8 attachment limitation:** the shared Armandinho strip was located and
  cropped confidently to `fuvest/2023/images/q07_source_1.jpg`, but neither
  existing question object has an `images` property. The hard rule to preserve
  property layout prevents adding that field. The asset is delivered; these two
  questions remain pending attachment under the client-confirmed constraint.
  No figure was guessed or substituted. All existing references are complete.
- `node tools/check_fuvest.mjs --year=2023` passes syntax, V 90/90, booklet and
  existing-reference image gates. The separate AST audit preserves all existing
  layouts, metadata and alternative IDs/types; `git diff --check` passes.
  Official pages, a contact sheet (q1,7,9,12,13,15,18,23,27,35,49,54,58,63,78,88)
  and the q14 charge-bearing crop were visually inspected.

### 2024 — completed text and crop assets; two attachment limitations

- Full V/K/Q/X/Z comparison identifies V by the unique 89/90 near-match
  (next best Z 22/90). Corrected q48 C→D; final V agreement is 90/90.
  The worked solution constructs the official answer of 60 packages.
- 90 stems, 320 alternative values and all 90 explanations corrected/rewritten.
  Restored the opening poem for q1–2, formulas, source table rows and all graphic
  options. q59's actual fractions are 5/6, 1, 6/5, 13/5 and 18/5; its solution
  gives b = 3/5 and k = 2, hence the official 13/5 in D.
- 76 crops produced, including all 20 image-typed alternatives. All 75 existing
  references resolve with actual dimensions and no missing/invalid files.
  The q26 panels spanning both columns retain their A–E correspondence.
  Crop provenance is in `fuvest/2024/images/SOURCES.json`.
- **q4–5 attachment limitation:** the shared Guerrilla Girls advertisement is
  cropped and delivered as `fuvest/2024/images/q04_source_1.jpg`; neither existing
  question object has an `images` property. As in 2023 q7–8, adding that field
  would violate the explicit property-layout constraint. The asset is present
  but attachment is deferred under the client-confirmed structure constraint.
- Syntax, V 90/90 answers, booklet and existing-image gates pass with
  `node tools/check_fuvest.mjs --year=2024`; the AST preservation audit and
  `git diff --check` pass. Official pages and a contact sheet for
  q3,4,7,13,18,21,27,31,35,48,49,55,57,59,63,73 were visually inspected.

### 2025 — completed text and images

- Version V1: 90/90 answers, with other columns V2 16/90, V3 16/90, V4 9/90.
  The text correction in `cc353e0` changed 77 stems, 377 alternative values,
  all 90 explanations and seven question tags; no answer letters changed.
- This follow-up changes only the existing `images` values: no further stems,
  alternatives, answers, explanations or metadata are changed.
- 46 official source crops give 47/47 references present, including q5's three
  separate pages/panels, the Arctic map and legend, chemistry illustrations,
  the PET-bottle diagram shared by q73–74, and artwork in q86. Added figures
  absent from the original references at q7,23,24,40,72,73–74,78,86.
- q60 and q69 are complete official option-grid crops saved as real PNG files
  at the existing `.png` paths. Their declared sizes match the actual crops;
  there is no JPG/PNG extension mismatch.
- Preserved all question/property/alternative layouts and metadata. Syntax,
  V1 90/90 and image gates pass. Source pages and a contact sheet spanning
  q1,5,7,16,20,23,26,40,48,60,63,69,72,73,78,86 were visually inspected.
  No image or attachment is deferred for this year.

## Verification and review limits

Run from the repository root:

```sh
node tools/check_fuvest.mjs
node tools/check_fuvest.mjs --answers-only
node tools/check_fuvest.mjs --images-only
node tools/check_fuvest.mjs --year=2025
```

The generalized checker parses TypeScript as static AST data, checks syntax,
90 ordered IDs and A–E alternative entries, extracts every official version
column using `pdftotext -layout`, and requires one exact matched version plus
its source booklet. It accepts an asterisk only against an official annulled
entry; q54 in 2022 stores `correct: '*'` without inventing an official letter
or adding a new property. The original 2025-only checker remains available.

Image checks include question arrays and per-alternative values, supporting
both string paths and `{ src, width, height }` values. They require exact files
and compare dimensions when declared. A successful path check alone cannot
prove every source figure was attached: the four absent-property cases above
are explicitly disclosed and excluded from the existing-reference count.

Separate before/after AST audits confirmed preserved imports, declarations,
exports, top-level property layouts, question IDs/year/phase/day and all existing
alternative IDs/types. Originally empty 2019 alternative arrays were populated;
existing misordered alternative objects were sorted without changing their IDs
or types. No ENEM type or tsconfig restructuring was introduced.

The PDFs were handled as data: temporary extraction/OCR/crop scripts were kept
outside the source directories and repository, PDF paths were arguments, and
Python PDF/image work used `python3 -I`. No external PDF downloads or network
policy change was used. All content was checked against in-repository sources.

Visual checks used rendered official pages and crop contact sheets; the earlier
2025 sample also had local Chromium question renders. Full integration into the
client application remains part of client acceptance review.
