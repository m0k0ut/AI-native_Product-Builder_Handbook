---
name: publish
description: Build the handbook into docs/, optionally preview it locally, and stage the regenerated site for commit. Use after editing AI-PM-Handbook.md when you are ready to publish the changes.
disable-model-invocation: true
---

# /publish — build, preview, and stage the handbook site

Run these in order. Stop and report if any step fails.

## 1. Build the site
The `markdown` library exists only in `/usr/bin/python3` on this machine (the PATH `python3` is an
Anaconda env without it), so call that interpreter explicitly:

```bash
/usr/bin/python3 scripts/build_site.py
```

Expect output like `parts=10 pages=33 order=32 search=426`. If it errors, the cause is almost always a
malformed heading or glossary line in `AI-PM-Handbook.md` — the parser needs `## Chapter N — Title`
with an **em-dash**, and glossary bullets as `- **Term** — definition`. Fix the source and re-run.
Never edit `docs/content.js` directly; it is generated (a hook blocks it).

## 2. Show what changed
```bash
git status --porcelain
git --no-pager diff --stat -- AI-PM-Handbook.md docs/
```
Normally only `docs/content.js` changes (plus the source, if you edited it). A large `content.js`
diff is expected — it is minified generated JSON.

## 3. Preview (offer this; skip if the user declines)
Serve `docs/` and spot-check the reader before publishing:
```bash
python3 scripts/preview_server.py    # serves docs/ at http://localhost:4321 — run in the background
```
Then use the browser/preview MCP (Claude Preview or Claude-in-Chrome) to open
`http://localhost:4321` and check: the hero stats line, one chapter page, the search box, and a
glossary. **Stop the server** when done.

## 4. Stage
Once the diff looks right:
```bash
git add AI-PM-Handbook.md docs/
```

## 5. Propose a commit — do not auto-commit or push
Show the staged summary and propose a concise commit message that describes the *content* change
(e.g. "Clarify the RAG chapter's chunking section"), not "rebuild site". Let the user confirm before
committing, and never push without an explicit request. Project rule: keep author/PDF references out
of every file.
