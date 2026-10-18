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

def two_letter_lang(path, llo, lhi):
    """Parse a GB text where língua rows carry two letters (Inglês, Espanhol)."""
    lang = {"en": {}, "es": {}}
    singles_all = {}
    for line in open(path, encoding="utf8"):
        m = re.match(r"\s*(\d{1,3})\s+([A-E])\s+([A-E])\b", line)
        if m and llo <= int(m.group(1)) <= lhi:
            q = m.group(1)
            lang["en"][q] = m.group(2)
            lang["es"][q] = m.group(3)
            singles_all[q] = m.group(3)  # default = espanhol
        for mm in re.finditer(r"(\d{1,3})\s+([A-E])\b", line):
            singles_all[str(int(mm.group(1)))] = mm.group(2)  # may be overwritten by língua default below
    # ensure língua defaults (espanhol) win for the lang range
    for q in lang["es"]:
        singles_all[q] = lang["es"][q]
    return singles_all, lang

def main():
    gb1, gb2, out = sys.argv[1], sys.argv[2], sys.argv[3]
    modern = "--modern" in sys.argv
    args = [a for a in sys.argv if not a.startswith("--")]
    if modern:
        # 2017+: D1 = LC(1-45, língua 1-5) + CH(46-90); D2 = CN(91-135)+MT(136-180), no língua.
        llo, lhi = (int(args[4]), int(args[5])) if len(args) > 5 else (1, 5)
        all1, d1lang = two_letter_lang(gb1, llo, lhi)
        d1 = {k: v for k, v in all1.items() if 1 <= int(k) <= 90}
        d2 = singles(gb2, 91, 180)
        key = {"_source": f"INEP Azul MODERN (2017+); d1 LC+CH ids 1-90 (língua {llo}-{lhi}), d2 CN+MT 91-180.",
               "d1": d1, "d2": d2, "d1_lang": d1lang}
        miss1 = [q for q in range(1, 91) if str(q) not in d1]
        miss2 = [q for q in range(91, 181) if str(q) not in d2]
        json.dump(key, open(out, "w"), ensure_ascii=False, indent=1)
        print(f"MODERN d1={len(d1)} d2={len(d2)} d1_lang_en={len(d1lang['en'])} es={len(d1lang['es'])}")
        if miss1: print("MISSING d1:", miss1)
        if miss2: print("MISSING d2:", miss2)
        return
    llo = int(args[4]) if len(args) > 4 else 91
    lhi = int(args[5]) if len(args) > 5 else 95
    d1 = singles(gb1, 1, 90)
    all2, lang = two_letter_lang(gb2, llo, lhi)
    d2 = {k: v for k, v in all2.items() if 91 <= int(k) <= 180}
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
