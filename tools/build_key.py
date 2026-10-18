#!/usr/bin/env python3
"""Build an official answer key JSON from clean two-column INEP Azul gabarito TEXT files
(as produced by pdftotext -layout). Handles the língua-estrangeira rows that carry two
letters (Inglês, Espanhol) and the two-column D1 (CH/CN) and D2 (LC/MT) layouts.

Usage: python3 -I tools/build_key.py <gb_d1.txt> <gb_d2.txt> <out.json> [lang_lo lang_hi]
  lang range defaults to 91 95 (the língua-estrangeira questions in D2).
Verify the result with tools/check_gabarito.ts before trusting it.
"""
import re, json, sys

def singles(path, lo, hi):
    k = {}
    for line in open(path, encoding="utf8"):
        for m in re.finditer(r"(\d{1,3})\s+([A-E])\b", line):
            q = int(m.group(1))
            if lo <= q <= hi:
                k[str(q)] = m.group(2)
    return k

def main():
    gb1, gb2, out = sys.argv[1], sys.argv[2], sys.argv[3]
    llo = int(sys.argv[4]) if len(sys.argv) > 4 else 91
    lhi = int(sys.argv[5]) if len(sys.argv) > 5 else 95
    d1 = singles(gb1, 1, 90)
    d2 = {}
    lang = {"en": {}, "es": {}}
    lang_re = re.compile(rf"\s*({llo if llo>=10 else '0'+str(llo)}|9[1-5]|1[0-7][0-9]|180)")  # not used; keep simple below
    for line in open(gb2, encoding="utf8"):
        m = re.match(r"\s*(\d{1,3})\s+([A-E])\s+([A-E])\b", line)
        if m and llo <= int(m.group(1)) <= lhi:
            q = m.group(1)
            lang["en"][q] = m.group(2)
            lang["es"][q] = m.group(3)
            d2[q] = m.group(3)  # default single = espanhol (language override handles en)
        for mm in re.finditer(r"(\d{1,3})\s+([A-E])\b", line):
            q = int(mm.group(1))
            if 96 <= q <= 180:
                d2[str(q)] = mm.group(2)
    missing1 = [q for q in range(1, 91) if str(q) not in d1]
    missing2 = [q for q in range(91, 181) if str(q) not in d2]
    key = {
        "_source": f"INEP Caderno Azul clean table; d1 ids 1-90, d2 ids 91-180; língua {llo}-{lhi} ing/esp.",
        "d1": d1, "d2": d2, "d2_lang": lang,
    }
    json.dump(key, open(out, "w"), ensure_ascii=False, indent=1)
    print(f"d1={len(d1)} d2={len(d2)} lang_en={len(lang['en'])} lang_es={len(lang['es'])}")
    if missing1: print("MISSING d1:", missing1)
    if missing2: print("MISSING d2:", missing2)

if __name__ == "__main__":
    main()
