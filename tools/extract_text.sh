#!/usr/bin/env bash
# Extract a UTF-8, layout-preserving text version of an INEP PDF.
set -euo pipefail
in="$1"; out="$2"
pdftotext -layout -enc UTF-8 "$in" "$out"
