# FUVEST corrections

## Current delivery progress

The version near-match rule in the latest instruction supersedes the strict
preflight stop below. All drafts identify V (2025: V1); 2018 and 2024 have one
answer transcription error each, and 2022 V q54 is annulled. The added 2023 V
booklet is now available. Work proceeds per year; historical preflight counts
below describe the state before the corrections.

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

## 2025 — V1 sample for client review

Official sources: `sources_fuvest/2025/2025_PV_f1_V1.pdf` and
`sources_fuvest/2025/2025_GB_f1.pdf` (published 17/11/2024).
The answer key was extracted with `pdftotext -layout` and all four version
columns were compared to the draft in id order before correction.
V1 matches 90/90, V2 16/90, V3 16/90, V4 9/90.

| Measure | Result |
| --- | --- |
| Matched booklet | V1 |
| Answers changed | 0 (already 90/90 equal to V1) |
| Explanations rewritten | 90 |
| Statements changed | 77 |
| Alternative values changed | 377 |
| Questions with tag corrections | 7 (36, 48, 55, 65, 78, 87, 89) |
| Official answer gate after correction | 90 passed, 0 failed |
| Syntax/parse check | Passed |

Restored missing alternatives, reading passages shared by questions 10–11,
27–29, 37–38, 41–42, 65–66 and 73–74, and separated text accidentally carried
across neighboring questions (notably 70–77). Corrected tables, mathematical
symbols, exponents and chemistry notation. Explanations include the reasoning
or calculations supporting the official answer, rather than copying a distractor.

The original import, QuizQuestion[] declaration, variable name, export, question
IDs, exam/year/phase values, property layout, alternative IDs and alternative
types are preserved. Only field values changed. No ENEM type was imposed and
no tsconfig changes were made.

### Validation

Run from the repository root:

```sh
node tools/check_fuvest_2025.mjs
```

The checker parses TypeScript as data, checks syntax, ordered IDs 1–90 and five
nonempty alternatives per question, extracts the official first-page key table,
requires 90 unique answers for every version, and asserts exact agreement with
V1. It does not execute the draft or use its explanations as an answer source.
It is specifically for the 2025 V1 sample; it does not claim to parse other years.

A separate before/after AST audit confirmed preserved declarations, exports,
IDs, property names and alternative types. `git diff --check` passed.
Chromium spot renders of q17, q60, q69 and q76 were visually inspected using
local HTML generated from the corrected values, not the ENEM-only harness.
The two new graph crops loaded correctly; q17's missing map was explicitly
marked pending in that temporary review view. Official PDF pages containing
q7–9, q18–20, q58–60, q68–69 and q73–79 were also rendered/eyeballed.
These are sample checks, not full client-application visual acceptance.

### Figure limitations and questions not fully visually verified

This sample completes the text/answer pass, with remaining figure extraction
explicitly deferred. It is not a complete image delivery. Text and alternative
ordering were checked against the official V1 text; embedded artwork, graph
labels and diagrams still require the asset pass for the questions listed below.
No question's answer is exempt from the 90/90 gate.

The graphical A–E panels for q60 and q69 were cropped directly from official
PDF pages 23 and 26, respectively, at 2× resolution. The original graphical
options are retained in the existing `images` field; text alternatives identify
or describe the corresponding panel without changing their `type: 'text'`.
New committed assets: `fuvest/2025/images/q60_options.png` and
`fuvest/2025/images/q69_options.png`.

The following 36 pre-existing references are unchanged but their files are absent:

| Question | Pending image reference |
| --- | --- |
| 1 | `/fuvest/2025/images/q01_artwork.jpg` |
| 2 | `/fuvest/2025/images/q02_chart.jpg` |
| 3 | `/fuvest/2025/images/q03_charge.jpg` |
| 5 | `/fuvest/2025/images/q05_novel_a.jpg` |
| 5 | `/fuvest/2025/images/q05_novel_b.jpg` |
| 5 | `/fuvest/2025/images/q05_novel_c.jpg` |
| 6 | `/fuvest/2025/images/q06_charge.jpg` |
| 16 | `/fuvest/2025/images/q16_ramp.jpg` |
| 17 | `/fuvest/2025/images/q17_street_map.jpg` |
| 18 | `/fuvest/2025/images/q18_ship_graph.jpg` |
| 19 | `/fuvest/2025/images/q19_compton.jpg` |
| 20 | `/fuvest/2025/images/q20_atomic_models.jpg` |
| 22 | `/fuvest/2025/images/q22_touchscreen.jpg` |
| 22 | `/fuvest/2025/images/q22_optics.jpg` |
| 26 | `/fuvest/2025/images/q26_arctic_map.jpg` |
| 26 | `/fuvest/2025/images/q26_arctic_legend.jpg` |
| 30 | `/fuvest/2025/images/q30_rhino.jpg` |
| 32 | `/fuvest/2025/images/q32_butterfly.jpg` |
| 33 | `/fuvest/2025/images/q33_woodpecker.jpg` |
| 39 | `/fuvest/2025/images/q39_peron.jpg` |
| 44 | `/fuvest/2025/images/q44_calvin.jpg` |
| 47 | `/fuvest/2025/images/q47_fat_map.jpg` |
| 48 | `/fuvest/2025/images/q48_cattle_a.jpg` |
| 48 | `/fuvest/2025/images/q48_cattle_b.jpg` |
| 49 | `/fuvest/2025/images/q49_deforestation.jpg` |
| 51 | `/fuvest/2025/images/q51_heat_island.jpg` |
| 53 | `/fuvest/2025/images/q53_climogram.jpg` |
| 57 | `/fuvest/2025/images/fuvest_2025_q57.jpg` |
| 59 | `/fuvest/2025/images/q59_expansion.jpg` |
| 62 | `/fuvest/2025/images/q62_rollercoaster.jpg` |
| 63 | `/fuvest/2025/images/q63_chemistry.jpg` |
| 67 | `/fuvest/2025/images/q67_stemcell.jpg` |
| 68 | `/fuvest/2025/images/q68_publications.jpg` |
| 71 | `/fuvest/2025/images/q71_antibiotics.jpg` |
| 75 | `/fuvest/2025/images/fuvest_2025_q75.jpg` |
| 79 | `/fuvest/2025/images/q79_roman_map.jpg` |

Additional official figures missing a usable draft reference: q7 (Peanuts strip),
q23 (black-hole image), q24 (street image), q73–74 (shared PET-bottle diagram),
and q78 (classroom cartoon). These require extraction and references in the
subsequent asset pass. The unrelated `q65_pressure.jpg` reference was removed
from q65, which asks about sugarcane fuel cells and has no figure in the official
booklet; the bottle illustration belongs to the shared passage for q73–74.
Missing figures particularly prevent complete visual verification of image-based
questions, even though their official answer and associated explanation have
been checked. Existing refs have not been replaced with fabricated imagery.

### Source checksums (SHA-256)

- `2025_PV_f1_V1.pdf`: `f512449b47ac31abe1ae00d5f88fb14478c7139fa1db137145b7e33cec1b97c8`
- `2025_GB_f1.pdf`: `ddd7f38cc2584298e812f4a7bf083e74be4926ae948f0cb531117a60ec91fd5f`

## Nine-year follow-up — version preflight stopped

No new question values or crops were changed in this follow-up. The requested
strict version gate was checked before correction. Work stopped because 2023's
draft matches V exactly, but the only committed booklet is X. The source
booklet's cover and first question page both explicitly identify X. The draft
matches only 25/90 answers from X, compared with 90/90 from V. Do not use X
question numbers for V crops or silently reorder the draft.

Required source: `sources_fuvest/2023/2023_PV_f1_V.pdf`.
Remote main was checked and still points to `cc353e0`; no newer source commit
was available. No external download or network-policy change was attempted.

| Year | Agreement with V (V1 for 2025) | Other exact match | Required source status | Existing image files / referenced files |
| --- | --- | --- | --- | --- |
| 2017 | 90/90 | None | V present | 0/52 |
| 2018 | 89/90 | None | V present, strict draft version gate unresolved | 0/35 |
| 2019 | 90/90 | None | V present | 0/72 |
| 2020 | 90/90 | None | V present | 0/47 |
| 2021 | 90/90 | None | V present | 0/42 |
| 2022 | 89/90 plus one annulled | None | V present, annulment not represented in draft | 0/77 |
| 2023 | 90/90 | None | **V missing; only X present** | 0/62 |
| 2024 | 89/90 | None | V present, strict draft version gate unresolved | 0/76 |
| 2025 | 90/90 | None | V1 present; text sample unchanged | 2/38 |

These are preflight findings, not claims of corrected years. New answers changed,
explanations rewritten and images produced in this follow-up: **0 for every
year**. Correction/cropping remains outstanding for 2017–2024, and the figure
limitations above remain outstanding for 2025. All nine years have valid syntax
and 90 sequential IDs, but this does not validate their content.

Additional actionable findings:

- 2018 q29: draft D, official V answer B; no version column matches all 90 draft
  letters. This is a one-letter difference from V, not an established exact match.
- 2024 q48: draft C, official V answer D; likewise no exact version match.
- 2022 V q54: retified key is `*` (annulled), draft is B and is not flagged annulled.
  The remaining 89 answers match V. The checker treats an annulment separately
  from A–E answers: it requires `annulled: true`, retaining a type-compatible
  placeholder letter rather than inventing an official answer letter.
- 2019: empty alternatives at q5, q9, q10, q15, q17, q20, q25, q35, q36, q37,
  q41, q47, q58 and q60; q40's alternative IDs are ordered A,D,B,E,C.
- 2022 q61's alternative IDs are ordered A,D,B,E,C. These structure issues must
  be addressed consistently with the client's preserve-structure constraint;
  they were not silently changed during preflight.
- Existing alternative image values sometimes use `{ src, width, height }`
  objects instead of strings. The generalized checker supports both formats.
- 2025 q60/q69 already reference the two existing `.png` crops, whose dimensions
  match their declarations. There is no current PNG/JPG mismatch for those two
  references; the other 36 referenced files remain absent.

### Generalized checks

```sh
node tools/check_fuvest.mjs
node tools/check_fuvest.mjs --answers-only
node tools/check_fuvest.mjs --images-only
node tools/check_fuvest.mjs --year=2025 --answers-only
```

The full check exits nonzero while any year has an unresolved answer/version,
source-booklet, alternative-structure or image gate. It reports every year even
when one has errors. It parses all question files as AST data, parses all five
version columns (four for 2025) from the appropriate official key format, and
requires an exact unique match; it never picks the closest version. The source
booklet must have the matching version filename. Image checks cover question
images and per-alternative images, resolve exact repository-relative paths,
and compare real dimensions against declared dimensions when present. Missing
unreferenced figures still require manual PDF review: a path checker alone
cannot establish visual completeness.

The full image preflight currently reports **2/501 references present, 499
missing** across the nine years. This is an expected failing readiness check,
not a completed image delivery. The isolated 2025 answer check passes. The
original 2025-only checker is retained for compatibility.
