---
name: new-chapter
description: Add a new chapter to AI-PM-Handbook.md in the exact format the build parser requires, keeping the Table of Contents, the IN THIS PART list, prose chapter cross-references, and every chapter-count string in sync. Use whenever a chapter is added to the handbook.
---

# /new-chapter — add a handbook chapter without breaking the build

Adding a chapter touches several places at once. `scripts/build_site.py` parses by exact patterns and
does **not** validate counts or cross-references, so anything you miss fails *silently* (stale counts,
wrong "see Chapter N" pointers). Work the whole checklist.

## Resolve first
- **Title** of the new chapter.
- **Target Part** (1–10) and **position** within it.
- **New global chapter number N**. Chapters are numbered globally 1→30 across the whole book,
  independent of Part.
  - New last chapter (after the current Chapter 30) → N = 31, **no renumber**. Easiest case.
  - Anywhere earlier → a **mid-book insert**: every existing chapter numbered ≥ N shifts up by one.
    High-touch — do step A carefully.

## Format contract (match exactly)
- Heading: `## Chapter N — Title` with an **em-dash `—` (U+2014)** and single spaces around it. A
  hyphen `-` or en-dash `–` breaks parsing.
- Body: an intro paragraph, then `### Section Title` subheadings (these become the in-page nav in the
  reader), optionally with bullet/numbered lists. Match the voice and depth of neighbouring chapters.

## Steps

### A. (Mid-book insert only) Renumber chapters ≥ N — BEFORE inserting
A chapter's global number lives in **four** places. Working from the **highest** number downward
(30 → N) so numbers never collide, bump every chapter K ≥ N to K+1 in all four:
1. **Heading** — `## Chapter K — …`  (find: `grep -n '^## Chapter' AI-PM-Handbook.md`).
2. **Table of Contents** — the visible number *and the anchor*, which embeds the number:
   `[Chapter K — …](#chapter-K--…)` → `[Chapter K+1 — …](#chapter-(K+1)--…)`
   (find: `grep -n '^[[:space:]]*- \[Chapter' AI-PM-Handbook.md`).
3. **`**IN THIS PART**` entries** — each Part lists its chapters as `K. Title` using **global**
   chapter numbers (e.g. Part 10's block is `29.`/`30.`, not `1.`/`2.`). *Every* Part from the
   insertion point onward has entries ≥ N to bump. Find them under each `**IN THIS PART**` marker —
   not by blind grep, because in-chapter numbered lists look identical (`^[0-9]+\. `).
4. **Prose cross-references** — body text cites chapters in plain text ("frameworks from Chapter 6",
   "Covered in detail in Chapter 24"). Find with:
   ```bash
   grep -nE 'Chapters?[[:space:]]+[0-9]' AI-PM-Handbook.md | grep -vE '## Chapter|- \[Chapter'
   ```
   and bump each reference to a chapter ≥ N. Watch for **plural / range** forms the simple pattern
   still makes you read carefully — "Chapters 24–26", "Chapters 6 and 7" — and bump each number in
   them. (Prose carries no `#chapter-N` links — only the TOC has anchors — so plain text is the only
   prose form.)

### B. Insert the chapter
Put `## Chapter N — Title` and its body after the preceding chapter and before the next `## Chapter`
(or the next `# Part`).

### C. Update the target Part's front matter
- Add the new chapter to that Part's **`**IN THIS PART**`** list as `N. Title` (global chapter
  number — step A already bumped the entries that came after it).
- Fix the Part-intro count prose, spelled out in words just under the `# Part` heading: e.g. "Two
  chapters on…" → "Three chapters on…".

### D. Add the Table of Contents line
Under the Part's TOC entry, add it indented two spaces:
`  - [Chapter N — Title](#chapter-n--slug)`
**Anchor slug** (GitHub style): lowercase the heading text, drop punctuation (the em-dash, `&`, `()`,
`?`, `:`, `.`), turn spaces into hyphens. A dropped separator that had spaces on both sides becomes a
**double** hyphen — e.g. `Chapter 8 — Execution & Delivery` → `#chapter-8--execution--delivery`,
`Chapter 18 — Retrieval-Augmented Generation (RAG)` → `#chapter-18--retrieval-augmented-generation-rag`.

### E. Bump the chapter-count strings — the build will NOT do this
Raise the total in all four, plus the affected Part's count in the README table:
- `AI-PM-Handbook.md` (~line 5): `… · 30 Chapters · …`
- `scripts/build_site.py` (`stats=`, ~line 50): `"… · 30 Chapters · …"`
- `README.md` hero line: `… · 30 chapters · …`
- `README.md` "What's inside" table: the affected Part's `N chapters` cell.

### F. Rebuild and verify
```bash
/usr/bin/python3 scripts/build_site.py
```
- Confirm the new totals print, e.g. `parts=10 pages=34 …` (pages = chapters + 2 glossaries + about).
  A clean parse proves the heading format is valid and the chapter was picked up.
- **Counts and cross-refs are not build-checked** — verify them by hand/grep:
  ```bash
  grep -nE '[0-9]+ [Cc]hapters' AI-PM-Handbook.md README.md scripts/build_site.py   # all should read the new total / per-part count
  grep -nE 'Chapters?[[:space:]]+[0-9]' AI-PM-Handbook.md | grep -vE '## Chapter|- \[Chapter'   # prose refs point where you intend
  ```
- Optionally run `/publish` to preview the new chapter in the reader's navigation.
