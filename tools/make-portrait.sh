#!/bin/bash
# Turn any photo into public/portrait.png with the background removed.
#
#   ./tools/make-portrait.sh ~/Downloads/my-photo.png
#
# With no argument, picks the newest image in ~/Downloads or ~/Desktop.
set -euo pipefail

cd "$(dirname "$0")/.."

SRC="${1:-}"
if [ -z "$SRC" ]; then
  SRC=$(ls -t ~/Downloads/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp} \
             ~/Desktop/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp} 2>/dev/null | head -1 || true)
  if [ -z "$SRC" ]; then
    echo "No image given and none found in ~/Downloads or ~/Desktop." >&2
    echo "Usage: ./tools/make-portrait.sh <path-to-image>" >&2
    exit 1
  fi
  echo "Using newest image found: $SRC"
fi

if [ ! -f "$SRC" ]; then
  echo "No such file: $SRC" >&2
  exit 1
fi

# Rebuild the cutout binary only when the source is newer.
if [ ! -x tools/cutout ] || [ tools/cutout.swift -nt tools/cutout ]; then
  echo "Building cutout tool..."
  swiftc -O tools/cutout.swift -o tools/cutout
fi

./tools/cutout "$SRC" public/portrait.png
echo "Done. Reload the dev server to see it."
