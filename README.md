# jayant joshi — portfolio

Dark, motion-heavy single-page portfolio. Vite + React + TypeScript + Tailwind + Framer Motion.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
```

## Add your portrait

The hero expects **`public/portrait.png`**. Until that file exists it shows a
dashed placeholder instead.

The design overlaps the portrait with the headline type, so it needs a
**transparent cutout** — a photo with its original backdrop reads as a floating
box sitting on the letters. `tools/make-portrait.sh` handles that:

```bash
./tools/make-portrait.sh ~/Downloads/my-photo.png
```

Run it with no argument and it picks the newest image in `~/Downloads` or `~/Desktop`.

Background removal uses the macOS Vision subject-lifting model
(`tools/cutout.swift`) — the same engine as **Remove Background** in Preview and
Photos. Runs locally: no network, no Python, no model download. Needs macOS 14+
and the Xcode command line tools.

## Sections

| Section | Source |
|---|---|
| Hero | `src/sections/HeroSection.tsx` |
| Scroll-driven marquee | `src/sections/MarqueeSection.tsx` |
| About | `src/sections/AboutSection.tsx` |
| Expertise | `src/sections/ServicesSection.tsx` |
| Projects (sticky card stack) | `src/sections/ProjectsSection.tsx` |
| More work + contact | `src/sections/ArchiveSection.tsx` |

All copy — bio, expertise, projects, archive — lives in **`src/data/content.ts`**.
Edit that one file to change what the site says.

## Project images are placeholders

`SHOT[]` in `src/data/content.ts` points at stock CloudFront renders. Swap them
for real screenshots of each project — drop files in `public/` and reference
them as `./shot-name.png`.

## Notes

- **Card stacking** uses explicit scroll math rather than `useScroll`, so a
  late-loading image can't leave a stale measurement behind. Each card owns its
  own passive scroll listener and writes only its own motion value.
- **Framer Motion overwrites `transform`**, so Tailwind translate utilities
  (`-translate-x-1/2`) must live on a wrapper *outside* any `FadeIn`, never on
  the same element. See the hero portrait for the pattern.
- `vite.config.ts` sets `base: './'`, so `dist/` works at a domain root and
  under `https://<user>.github.io/<repo>/` without changes.
