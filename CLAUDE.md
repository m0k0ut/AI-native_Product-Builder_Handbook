# CLAUDE.md

The **AI-native Product Builder's Handbook** — one Markdown handbook compiled into a
static web reader and deployed to GitHub Pages. It's a content pipeline, not an app.

## Build & preview
- `AI-PM-Handbook.md` is the **single source of truth**; everything in `docs/` is generated from it.
- Build: `python3 scripts/build_site.py` → regenerates `docs/content.js`. Needs the `markdown`
  package (`pip install markdown`). On this machine it lives only in `/usr/bin/python3` (the PATH
  `python3` is a conda env without it) — so use `/usr/bin/python3 scripts/build_site.py` here.
- Preview: `python3 scripts/preview_server.py` → http://localhost:4321. Or use the `/publish` skill.
- Build is idempotent (rebuilding an unchanged source yields a byte-identical `content.js`).

## Generated vs. authored (important)
- **`docs/content.js` is GENERATED — never hand-edit it** (a PreToolUse hook blocks it). Edit the
  Markdown and rebuild.
- `docs/index.html`, `app.js`, `styles.css` are hand-authored vanilla JS/CSS (no framework, no build step).
- A PostToolUse hook auto-rebuilds `content.js` whenever `AI-PM-Handbook.md` is edited, so a single
  edit shows BOTH files modified — that's expected.

## Markdown parser contracts (strict — a wrong dash silently drops content)
- Parts `# Part N — Title`, chapters `## Chapter N — Title` — em-dash (—, U+2014), not a hyphen.
- Glossary terms: `- **Term** — definition`.
- Chapters are numbered **globally 1–30**. Adding/renumbering one touches the heading, the TOC entry
  (visible number AND the `#chapter-N--` anchor), the `**IN THIS PART**` lists (global numbers, spanning
  every later Part), prose "Chapter N" cross-refs, and four hardcoded count strings. **Use `/new-chapter`** — it automates all of this.

## Project skills (committed in `.claude/`)
- `/new-chapter` — add a chapter in the exact format, keeping TOC / IN THIS PART / cross-refs / counts in sync.
- `/publish` — build → preview → stage `docs/`.

## Identity & naming (keep consistent)
- Differentiator: **AI-native Product Builder** = an AI PM who also executes hands-on with AI tooling
  (defined in Ch 10 + the AI glossary). "AI PM" appears ~51× as the craft the book teaches — do NOT
  find-replace it; the Builder identity layers on top. `BUILDER'S MOVE` callouts run through Parts 6–7.
- The title/positioning appears in ~7 surfaces (handbook H1+subtitle, `build_site.py` meta, `README`,
  `docs/index.html` title/OG/Twitter/brand, `docs/app.js` `document.title`) plus the raster
  `docs/og.png` (regenerate via `scripts/og_card.html` + headless Chrome). Keep all in sync on a rename.

## Deploy
- GitHub Pages serves from `main` branch `/docs`. Live: https://m0k0ut.github.io/AI-native_Product-Builder_Handbook/
  (the Pages path is case-sensitive). The "Built by Mohan Koushik Tupakula (@m0k0ut)" credit in the
  hero/footer/README is intentional. Keep the original source author's name/PDF out of tracked files.
