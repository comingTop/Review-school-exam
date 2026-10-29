# FUVEST corrections

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

## 2017–2024

Not corrected or version-matched in this sample. Work is paused for client review
of 2025, as requested. No changes were made to those question files.
