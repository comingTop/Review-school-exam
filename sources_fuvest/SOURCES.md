# SOURCES — FUVEST official provas & gabaritos (1ª fase)

Source tree for the FUVEST 1ª-fase correction job (vestibular years 2017–2025, 90 objective
questions each). Downloaded 2026-10-27 from FUVEST's own WordPress host
`https://www.fuvest.br/wp-content/uploads/` with plain HTTP GET (no auth, no header spoofing).

The mirror host `acervo.fuvest.br` was unreachable from this environment (connection refused),
so every file here is the `www.fuvest.br` copy.

## Naming

`<year>/<year>_PV_f1_<ver>.pdf` = prova (exam booklet), `<year>/<year>_GB_f1*.pdf` = gabarito
(answer key). FUVEST files are named by **admission year**; the exam itself is sat the previous
year (date shown below). The 1ª fase has **multiple booklet versions** (V/V1–V4, or V/K/Q/X/Z)
that differ only in question ORDER — the gabarito is a correspondence table across all versions.

| Vest. year | Exam date  | Prova file (version) | Gabarito file | Notes |
|-----------|------------|----------------------|---------------|-------|
| 2017 | 27/11/2016 | 2017_PV_f1_V.pdf (V) | 2017_GB_f1.pdf | |
| 2018 | 26/11/2017 | 2018_PV_f1_V.pdf (V) | 2018_GB_f1.pdf | |
| 2019 | 25/11/2018 | 2019_PV_f1_V.pdf (V) | 2019_GB_f1.pdf | prova from generic `Prova-V.pdf` |
| 2020 | 24/11/2019 | 2020_PV_f1_V.pdf (V) | 2020_GB_f1.pdf | |
| 2021 | 10/01/2021 | 2021_PV_f1_V.pdf (V?) | 2021_GB_f1_v2.pdf | COVID-delayed; prova from generic `fuvest_2021_primeira_fase.pdf`; gabarito is the retified v2. **Verify version.** |
| 2022 | 12/12/2021 | 2022_PV_f1_V.pdf (V) | 2022_GB_f1_retif.pdf | gabarito = retified key (one question annulled) |
| 2023 | 04/12/2022 | 2023_PV_f1_X.pdf (**X**) | 2023_GB_f1.pdf | only version X was reachable on www host; **verify code matches X**, else need V |
| 2024 | 19/11/2023 | 2024_PV_f1_V.pdf (V) | 2024_GB_f1.pdf | versions V/K/Z exist |
| 2025 | 17/11/2024 | 2025_PV_f1_V1.pdf (**V1**) | 2025_GB_f1.pdf | ✅ code answers = V1 column, 100% match (version confirmed) |

## Version confirmation status

- **2025 = V1: CONFIRMED** — the 90 `correct` letters in `fuvest/2025/fuvest_2025_f1.tsx` match the
  gabarito's V1 column exactly.
- **All other years: TO CONFIRM** during the correction pilot (same method: compare each code
  file's answer sequence against the gabarito columns to identify the transcribed version; pull a
  different version booklet if the downloaded one doesn't match).
- 2021 and 2023 are the two to watch (2021 prova came from a generic filename; 2023 is version X).

## Checksums

See `/tmp` run or recompute with `sha256sum */*.pdf`. Recorded 2026-10-27.
