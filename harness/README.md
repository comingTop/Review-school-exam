# Verification harness

Two layers verify each corrected prova:

## 1. Scripted gate (from repo root)
```bash
npm run typecheck                                  # all 34 .tsx typecheck vs the stub
npm run validate -- provas/2010/enem_2010_d1.tsx   # one file, full problem list
npm run validate                                   # all 34, summary; add --images to also check image files
npm test                                           # tool unit tests
```
A file passes the scripted gate when `validate` reports **0 problems** and `typecheck` passes.

## 2. Visual gate (this folder)
```bash
cd harness && npm run dev        # serves http://localhost:5173
```
Open `http://localhost:5173/?file=provas/<year>/enem_<year>_d<n>.tsx` (or use the dropdown).
Image paths like `/enem/<year>/images/<file>` resolve to `images_out/<year>/` first, then fall
back to the raw Drive extraction under `enem v/<year>/{imagens,imagens_questoes}`.

Screenshot each question with the chrome-devtools MCP (`new_page` → `take_screenshot`) and confirm:
- image crops legible and complete (not cut off mid-figure);
- per-alternative images aligned to the right letter;
- the ✓-highlighted `correct` alternative matches the official gabarito;
- text renders with correct accents.

A file passes the visual gate when every question renders correctly with no broken/missing/mis-cropped images.
