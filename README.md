# 📘 The AI-native Product Builder's Handbook

> A practical, end-to-end guide to modern **product management** — and the craft of the **AI-native Product Builder**: an AI PM who also executes hands-on with AI tooling. 2026 edition.

### 🔗 Read it live → https://m0k0ut.github.io/AI-native_Product-Builder_Handbook/

[![Read online](https://img.shields.io/badge/read-online-5e5ce6.svg)](https://m0k0ut.github.io/AI-native_Product-Builder_Handbook/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Edition](https://img.shields.io/badge/edition-2026-blue.svg)](https://m0k0ut.github.io/AI-native_Product-Builder_Handbook/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

**10 parts · 30 chapters · 2 glossaries** — everything from the fundamentals of the PM role to
building, shipping, evaluating, and governing AI products built on LLMs.

### 📖 [Read it online →](https://m0k0ut.github.io/AI-native_Product-Builder_Handbook/)

A fast, mobile-friendly reader with instant search and a full glossary. Prefer plain text? Read the
[Markdown version](AI-PM-Handbook.md).

---

## Why this handbook

- **Built for AI-native Product Builders.** Most PM books stop at *managing*. This handbook's north
  star is the **AI-native Product Builder** — an AI PM who also executes hands-on with AI tooling —
  with recurring **Builder's Move** callouts showing how to prototype, eval, and ship yourself, not
  just spec it.
- **Two crafts, one resource.** The first half is a complete grounding in classic product
  management; the second half goes deep on AI PM — where products built on probabilistic systems
  change how you discover, build, measure, and ship.
- **Practical, not hand-wavy.** Real frameworks (RICE, JTBD, RAG, evals, guardrails), comparison
  tables, and decision playbooks you can use on Monday morning.
- **Built to last.** Models, prices, and benchmarks change weekly — this focuses on the principles
  and vocabulary that outlive any single model.
- **Free and open.** MIT-licensed. Read it, fork it, share it, build on it.

## What's inside

| Part | Focus | Scope |
| --- | --- | --- |
| **01 · Foundations of Product Management** | What PMs do, the lifecycle, and the core skills | 3 chapters |
| **02 · Core Frameworks & Methodologies** | Strategy, discovery, prioritization, roadmapping, execution, metrics | 6 chapters |
| **03 · Product Management Glossary** | The terminology every PM should know | A–Z |
| **04 · Introduction to AI Product Management** | What AI PM is and why it's a distinct craft | 3 chapters |
| **05 · AI & ML Foundations for PMs** | Types of AI, the ML lifecycle, and data | 3 chapters |
| **06 · Generative AI & LLMs Deep Dive** | Tokens, prompts, RAG, fine-tuning, agents, multimodal | 6 chapters |
| **07 · Building AI Products in Practice** | Lifecycle, build-vs-buy, evals, guardrails, cost | 5 chapters |
| **08 · Responsible AI & Ethics** | Bias, transparency, privacy, regulation | 2 chapters |
| **09 · AI Product Management Glossary** | Modern AI terminology | Agent → Zero-Shot |
| **10 · Career Path & Resources** | Becoming an AI-native Product Builder, books, courses, communities | 2 chapters |

## How to read it

- **New to PM?** Start at Chapter 1 and read in order — each chapter builds on the last.
- **Transitioning into AI?** Skim Parts 1–3, then start seriously from
  [Part 4](AI-PM-Handbook.md#part-4--introduction-to-ai-product-management); spend most time on
  Parts [6](AI-PM-Handbook.md#part-6--generative-ai--llms-deep-dive) and
  [7](AI-PM-Handbook.md#part-7--building-ai-products-in-practice) — the practical AI playbooks, where
  the **Builder's Move** callouts live.
- **Need a quick reference?** Jump to the
  [PM glossary](AI-PM-Handbook.md#part-3--product-management-glossary) or the
  [AI glossary](AI-PM-Handbook.md#part-9--ai-product-management-glossary).

> ⚡ AI moves fast. Specific model names, pricing, and benchmarks will change — the frameworks and
> concepts here are designed to outlast any single model. Focus on the underlying principles.

## Contributing

Found a gap, an error, or something that's gone out of date? **Issues and pull requests are
welcome.** Clear, well-scoped contributions that improve accuracy or add useful examples are
especially appreciated.

**How the project is built**

- [`AI-PM-Handbook.md`](AI-PM-Handbook.md) is the single source of truth — make your content edits there.
- The reader under [`docs/`](docs/) is **generated**: [`scripts/build_site.py`](scripts/build_site.py)
  parses the Markdown into `docs/content.js`. Don't hand-edit `docs/content.js` — it's overwritten on
  every build.
- After editing, rebuild and commit the regenerated `docs/` alongside your Markdown change:

  ```bash
  pip install markdown            # the build's only dependency
  python3 scripts/build_site.py   # regenerates docs/content.js
  ```

**Formatting the parser depends on** (it's strict — a wrong dash silently drops content):

- Parts use `# Part N — Title` and chapters `## Chapter N — Title` — that's an em-dash (`—`), not a
  hyphen. Glossary terms use `- **Term** — definition`.
- If you add, remove, or renumber a chapter, keep the Table of Contents, the **IN THIS PART** list,
  any prose "Chapter N" cross-references, and the chapter-count lines all in sync.

**Using Claude Code?** Two project skills ship in [`.claude/skills/`](.claude/skills/) and automate the
work above:

- **`/new-chapter`** — inserts a chapter in the exact format the parser needs and keeps the Table of
  Contents, the IN THIS PART list, chapter cross-references, and every chapter-count string in sync.
- **`/publish`** — runs the build, previews the site locally, and stages `docs/` for your commit.

## ⭐ Star this repo

If the handbook helps you, consider giving it a star — it helps more product managers find it.

## Built by

**Mohan Koushik Tupakula** — [@m0k0ut](https://github.com/m0k0ut) on GitHub.
Issues, ideas, and pull requests are welcome — see [Contributing](#contributing).

## License

Released under the [MIT License](LICENSE) — free to use, share, and adapt.

## Disclaimer

This handbook is an educational resource and does not constitute legal, financial, career, or other
professional advice. All trademarks are the property of their respective owners; references are for
educational illustration only and do not imply endorsement.
