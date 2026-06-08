# The AI-native Product Builder's Handbook

**The 2026 Edition** — *A practical guide to modern product management — and the craft of the AI-native Product Builder.*

**10 Parts · 30 Chapters · 2 Glossaries**, spanning classic Product Management and modern
AI Product Management — building toward one north star: the **AI-native Product Builder**, an AI
Product Manager who also executes hands-on with AI tooling (defined in Chapter 10).

Built by [Mohan Koushik Tupakula](https://github.com/m0k0ut) · @m0k0ut.

---

## Disclaimer

This handbook is an educational and informational resource. It reflects practical
perspective on product management and AI product management, alongside widely-used
frameworks attributed to their originators where known. Nothing here constitutes legal,
financial, career, or other professional advice — consult a qualified professional before
making material decisions.

The AI field moves quickly. Specific models, prices, benchmarks, and providers referenced
may change between writing and reading; always verify current details against primary
sources. The frameworks and concepts are designed to outlast any specific product.

All product, company, and service names and trademarks referenced are the property of
their respective owners. References are made for educational illustration only and do not
imply endorsement, sponsorship, or affiliation.

---

## How to use this handbook

This handbook is designed for anyone learning product management — from beginners curious about the role, to working PMs transitioning into AI-powered products, to those aiming to become **AI-native Product Builders**: AI Product Managers who also execute hands-on with AI tooling. It serves two purposes at once: a teaching guide you can read end-to-end, and a reference you return to whenever you encounter an unfamiliar term.

The first half builds your foundation in traditional PM — the role, the frameworks, the vocabulary. The second half goes deep into AI Product Management: how products built on probabilistic systems differ, how to think about data and models, how to ship LLM-powered features, how to evaluate AI quality, and how to navigate the ethics and regulation landscape. Throughout the practical chapters, **BUILDER'S MOVE** callouts show how an AI-native Product Builder would get hands-on — executing with AI tooling rather than stopping at the spec.

**THREE WAYS TO READ THIS**

- **As a beginner.** Start at Chapter 1 and read in order. Each chapter builds on the last. Don't worry if you don't grasp everything on the first pass.
- **As a transitioning PM.** Skim Parts 1–3, then start seriously from Part 4. Spend most time on Parts 6 and 7 — the practical AI playbooks.
- **As a reference.** Use the Table of Contents and the two glossaries (Parts 3 and 9) to jump to specific terms or topics.

**A NOTE ON THE PACE OF CHANGE**

AI is evolving fast. Specific model names, pricing, and benchmarks will change. The frameworks and concepts in this handbook are designed to outlast any specific model — focus on understanding the underlying principles and you'll adapt as the field evolves.

---

## Table of Contents

- [Part 1 — Foundations of Product Management](#part-1--foundations-of-product-management)
  - [Chapter 1 — What is Product Management?](#chapter-1--what-is-product-management)
  - [Chapter 2 — The Product Management Lifecycle](#chapter-2--the-product-management-lifecycle)
  - [Chapter 3 — Core PM Skills](#chapter-3--core-pm-skills)
- [Part 2 — Core Frameworks & Methodologies](#part-2--core-frameworks--methodologies)
  - [Chapter 4 — Product Strategy](#chapter-4--product-strategy)
  - [Chapter 5 — Product Discovery](#chapter-5--product-discovery)
  - [Chapter 6 — Prioritization Frameworks](#chapter-6--prioritization-frameworks)
  - [Chapter 7 — Roadmapping](#chapter-7--roadmapping)
  - [Chapter 8 — Execution & Delivery](#chapter-8--execution--delivery)
  - [Chapter 9 — Metrics & Measurement](#chapter-9--metrics--measurement)
- [Part 3 — Product Management Glossary](#part-3--product-management-glossary)
- [Part 4 — Introduction to AI Product Management](#part-4--introduction-to-ai-product-management)
  - [Chapter 10 — What is AI Product Management?](#chapter-10--what-is-ai-product-management)
  - [Chapter 11 — How AI PM Differs from Traditional PM](#chapter-11--how-ai-pm-differs-from-traditional-pm)
  - [Chapter 12 — The AI PM Mindset](#chapter-12--the-ai-pm-mindset)
- [Part 5 — AI & ML Foundations for PMs](#part-5--ai--ml-foundations-for-pms)
  - [Chapter 13 — Types of AI & Machine Learning](#chapter-13--types-of-ai--machine-learning)
  - [Chapter 14 — The Machine Learning Lifecycle](#chapter-14--the-machine-learning-lifecycle)
  - [Chapter 15 — Data — The Fuel of AI Products](#chapter-15--data--the-fuel-of-ai-products)
- [Part 6 — Generative AI & LLMs Deep Dive](#part-6--generative-ai--llms-deep-dive)
  - [Chapter 16 — How Large Language Models Work](#chapter-16--how-large-language-models-work)
  - [Chapter 17 — Prompt Engineering for PMs](#chapter-17--prompt-engineering-for-pms)
  - [Chapter 18 — Retrieval-Augmented Generation (RAG)](#chapter-18--retrieval-augmented-generation-rag)
  - [Chapter 19 — Fine-Tuning & Model Customization](#chapter-19--fine-tuning--model-customization)
  - [Chapter 20 — AI Agents & Tool Use](#chapter-20--ai-agents--tool-use)
  - [Chapter 21 — Multimodal AI](#chapter-21--multimodal-ai)
- [Part 7 — Building AI Products in Practice](#part-7--building-ai-products-in-practice)
  - [Chapter 22 — The AI Product Lifecycle](#chapter-22--the-ai-product-lifecycle)
  - [Chapter 23 — Build vs Buy Decisions](#chapter-23--build-vs-buy-decisions)
  - [Chapter 24 — Evaluations (Evals) — The PM's Best Friend](#chapter-24--evaluations-evals--the-pms-best-friend)
  - [Chapter 25 — Guardrails & Safety](#chapter-25--guardrails--safety)
  - [Chapter 26 — Cost, Latency & Performance](#chapter-26--cost-latency--performance)
- [Part 8 — Responsible AI & Ethics](#part-8--responsible-ai--ethics)
  - [Chapter 27 — Bias, Fairness & Transparency](#chapter-27--bias-fairness--transparency)
  - [Chapter 28 — Privacy, IP & Regulation](#chapter-28--privacy-ip--regulation)
- [Part 9 — AI Product Management Glossary](#part-9--ai-product-management-glossary)
- [Part 10 — Career Path & Resources](#part-10--career-path--resources)
  - [Chapter 29 — Becoming an AI-native Product Builder](#chapter-29--becoming-an-ai-native-product-builder)
  - [Chapter 30 — Learning Resources](#chapter-30--learning-resources)

---

# Part 1 — Foundations of Product Management

The bedrock of the craft

Three chapters covering the role, the lifecycle, and the foundational skills every product manager needs to operate effectively.

Before you can manage an AI product, you have to manage a product. The fundamentals don't change — only the inputs do.

**IN THIS PART**

1. What is Product Management?
2. The Product Management Lifecycle
3. Core PM Skills

## Chapter 1 — What is Product Management?

Product Management is the discipline of deciding what to build, why to build it, and ensuring it gets built well. A Product Manager (PM) sits at the intersection of three worlds: the user (what they need and want), the business (what makes commercial sense), and technology (what is feasible to build). The PM's job is to find the overlap among these three and ship products that succeed in it.

Despite the popular phrase, a PM is not the "CEO of the product." PMs typically have no direct authority over engineers, designers, or anyone else on the team. Instead, the role is one of influence: a PM gathers information, builds conviction about the right path forward, and aligns the team around that path through clear communication and trust.

A useful mental model is the PM Trinity — three lenses every product decision needs to pass through. Great PMs hold tension between all three without collapsing toward any single one.

- **Desirability** — Do users actually want this? Is the problem real, frequent, and painful enough that someone will change their behavior to use the solution?
- **Viability** — Does this make business sense? Does it support the company's strategy, generate revenue or retention, and justify its cost over time?
- **Feasibility** — Can we actually build this — within our time, talent, and technology constraints — at a quality bar users will accept?

### What does a PM actually do day-to-day?

On any given day, a PM might be running user interviews, writing a product requirements document (PRD), reviewing analytics dashboards, sitting in a design review, unblocking an engineer, presenting a roadmap to leadership, replying to support tickets, looking at competitor releases, or coordinating a launch with marketing. The work spans strategy and tactics, deep thinking and rapid execution.

A more structured way to think about the role is in terms of the four jobs a PM does on repeat:

- **Discover:** Understand the user, the market, and the problem space. Find what is worth building.
- **Define:** Translate problems into a clear, prioritized set of solutions. Write specs, set scope.
- **Deliver:** Work with design, engineering, and other functions to ship the product to users.
- **Measure:** Track outcomes, learn from what worked and what didn't, feed insights back into discovery.

### Types of Product Managers

Not all PMs do the same work. The role specializes by what you're building, who you're building for, and what stage the company is at. Some common types you will encounter:

- **Consumer PM:** Works on products used by everyday people — social apps, e-commerce, entertainment, fintech apps. Emphasis on UX, growth loops, and behavioral psychology.
- **B2B / Enterprise PM:** Builds products sold to businesses. Longer sales cycles, more complex stakeholders, heavier focus on integrations, admin tooling, and security.
- **Technical PM (TPM):** Deep technical work — APIs, developer tools, infrastructure. Often required to read code and understand systems architecture.
- **Platform PM:** Builds internal capabilities (auth, payments, data) that other teams build on top of. Customers are internal.
- **Growth PM:** Focuses on acquisition, activation, retention, and monetization metrics. Heavy on experimentation and data.
- **Data PM:** Builds data products — pipelines, analytics tools, dashboards, ML platforms. Strong overlap with AI PM.
- **AI / ML PM:** Specializes in AI-powered features and products. The focus of the second half of this handbook.

### The skills that separate good PMs from great ones

Junior PMs often think the job is about features and roadmaps. Senior PMs know it is about judgment and trade-offs. Three skills consistently distinguish great PMs:

1. Clarity of thought — the ability to take messy ambiguity (vague feedback, conflicting data, competing opinions) and produce a clear, defensible point of view about what to do next.
2. Customer empathy — going beyond what users say to understand what they actually need. The best PMs can articulate user problems better than users themselves can.
3. Outcome orientation — caring more about the impact of what you ship than the volume of what you ship. Great PMs would rather kill three features to make one feature succeed.

## Chapter 2 — The Product Management Lifecycle

Every product, feature, or improvement passes through a recognizable lifecycle. Understanding this cycle helps you know where you are, what to focus on, and what questions to ask. The exact terminology varies by company, but the underlying stages are universal.

### Stage 1 — Discovery

Discovery is about answering: should we build this at all? Before any code is written, the PM works to validate that there is a real problem worth solving, that the solution will actually help, and that the bet is worth making. Discovery activities include user interviews, surveys, competitor analysis, market sizing, and rapid prototyping.

The biggest mistake new PMs make is skipping discovery. They jump from "someone mentioned this idea" straight to "let's build it." Discovery is the difference between shipping features no one uses and shipping features that move the business.

### Stage 2 — Definition

Once you have decided to build, you must define exactly what you are building. This is where requirements documents, user stories, success criteria, and scope get written down. The PM works with design and engineering leads to size the problem, identify trade-offs, and lock the plan to a level where the team can execute.

A good definition is specific enough that engineers and designers don't have to guess, but flexible enough that they can use their expertise. The classic PRD (Product Requirements Document) captures: the problem, the user, the proposed solution, success metrics, scope (what is in, what is out), and key trade- offs.

### Stage 3 — Design

Designers translate the definition into a tangible user experience. The PM partners with the designer — not by dictating UI choices, but by ensuring the designs solve the right problem, meet success criteria, and remain feasible. Design reviews, prototyping, and usability testing all happen in this stage.

### Stage 4 — Development (Build)

Engineers turn designs into working software. The PM's job in this phase shifts to unblocking, clarifying scope, and managing trade-offs as reality intrudes on the plan. Inevitably, something turns out to be harder than expected, a dependency slips, or a new constraint emerges. The PM helps the team decide what to cut, defer, or change.

### Stage 5 — Launch

Launch is the moment the product reaches users. Depending on risk, this can be a quiet rollout to a small percentage of users (canary release), an A/B test, a private beta, or a full public launch with marketing support. The PM coordinates with marketing, sales, support, and operations to ensure everyone is ready.

### Stage 6 — Iterate

Shipping is not the end — it's the start of learning. The PM monitors metrics, gathers user feedback, identifies issues, and decides what to improve. Most successful products are not the result of one brilliant launch; they are the result of many iterations on a decent initial release.

### Stage 7 — Sunset (sometimes)

Not every product or feature succeeds. Knowing when to deprecate, sunset, or kill a product is a sign of PM maturity. Keeping zombie features around is a tax on the entire team.

**THE REALITY OF THE LIFECYCLE**

In practice, these stages overlap heavily. A PM might be discovering for one initiative, defining for a second, supporting development of a third, and analyzing post-launch data for a fourth — all in the same week. The lifecycle is a mental model, not a strict sequence.

## Chapter 3 — Core PM Skills

Product management is one of the broadest roles in tech. The skill set spans hard analytical skills, soft interpersonal skills, and a constantly evolving understanding of technology and markets. Below are the skills that show up in nearly every PM role, regardless of company or domain.

### Strategic thinking

The ability to zoom out from the immediate task and ask: where is this taking us? Strategic PMs can connect a small feature decision to the broader product vision and company goals. They can articulate why one direction beats another over a multi-year horizon, not just a quarter.

### Customer empathy and user research

PMs spend significant time talking to customers — through formal interviews, support tickets, sales calls, surveys, and ride-alongs. The skill is not just listening, but interpreting: distinguishing surface-level complaints from underlying needs, separating loud voices from representative ones.

### Data fluency

A modern PM must be comfortable looking at data. This does not mean being a data scientist, but it does mean being able to write basic SQL, read a funnel chart, design an A/B test, and challenge a claim with the right metric. Data fluency is now a baseline, not a differentiator.

### Technical literacy

You do not need to code as a PM, but you must understand enough technology to have credible conversations with engineers, evaluate trade-offs, and avoid asking for things that are impossible (or trivial) when you didn't realize. The bar gets higher in AI PM — you need to understand model behavior, latency, costs, and how data flows through ML systems.

### Communication

The single most leveraged skill in product management. PMs spend their day translating: translating user pain into engineering requirements, translating engineering constraints into business trade-offs, translating product strategy into something the entire company can rally around. Strong written communication (specs, memos, updates) matters even more than verbal.

### Prioritization and judgment

There is always more to build than time allows. Great PMs develop reliable judgment about what to do now, what to defer, and what to ignore. This is partly framework-based (we'll cover prioritization frameworks in Chapter 6) and partly experiential — pattern matching from past decisions.

### Influence without authority

You don't manage anyone, but you have to get a cross-functional team aligned and moving in one direction. This requires building trust over time, listening before you push, and earning the right to lead through your work product, not your title.

### Execution and follow-through

Strategy is cheap; execution is rare. The PMs who get promoted are the ones who reliably turn plans into shipped products. They follow up, they unblock, they sweat the details, and they keep promises.

**WHAT TO DEVELOP FIRST**

If you are just starting out, prioritize three things: writing clearly, talking to users, and getting hands-on with data. These compound across your entire career. Frameworks come and go; these three skills only get more valuable with practice.

**FURTHER READING**

### Sources, originators, and where to go deeper.

The frameworks and ideas discussed in this part build on a wider body of work by the people listed below. If a section here matched something you wanted to study more deeply, start with these.

**Inspired: How to Create Tech Products Customers Love —** Marty Cagan The standard text on the role of the modern product manager. Read once, return to often.

**Empowered: Ordinary People, Extraordinary Products —** Marty Cagan & Chris Jones How product leaders build the conditions for great PMs to do their best work.

**Cracking the PM Interview —** Gayle Laakmann McDowell & Jackie Bavaro Comprehensive guide to PM interviews — still the most widely-used reference.

**The Lean Product Playbook —** Dan Olsen A practical, step-by-step guide to product-market fit.

**Decode and Conquer —** Lewis C. Lin Frameworks for answering common PM interview questions.

**High Output Management —** Andrew S. Grove Not PM-specific, but the canonical text on managing knowledge work.

# Part 2 — Core Frameworks & Methodologies

The mental models PMs use every day

Six chapters on the mental models and methodologies that turn product instinct into repeatable practice.

Frameworks are not rules to follow blindly. They are mental shortcuts that help you think more clearly under pressure.

**IN THIS PART**

4. Product Strategy
5. Product Discovery
6. Prioritization Frameworks
7. Roadmapping
8. Execution & Delivery
9. Metrics & Measurement

## Chapter 4 — Product Strategy

Strategy is the set of choices a product team makes about where to play and how to win. Without strategy, a team becomes reactive — building whatever the loudest stakeholder or newest competitor asks for. With strategy, every decision becomes easier because there is a north star to test it against.

### Vision, Mission, Strategy, and Tactics

These four words get used interchangeably, but they are different. Understanding the hierarchy is foundational:

- **Vision:** The long-term picture of the world you want to create. Inspirational, often 5–10 years out. Example: "A world where every doctor has an AI co-pilot in every consultation."
- **Mission:** Your company's purpose — what you do, for whom, and why. More grounded than vision. Example: "We build AI tools that save physicians 2 hours of admin work every day."
- **Strategy:** The set of choices about how you will achieve the mission. Where you'll focus, what you'll ignore, what bets you'll make. Strategy is most useful when it says "no" to something credible.
- **Tactics:** The specific actions you take quarter-to-quarter, sprint-to-sprint, to execute the strategy.

### The North Star Metric

A North Star Metric (NSM) is the single number that best captures the value your product delivers to customers. It is not a vanity metric (like total users) — it is a measure of the value customers actually receive. Good North Star Metrics: "Nights booked" (Airbnb), "Messages sent" (Slack), "Hours watched" (YouTube). When the NSM goes up, the business should grow.

As a PM, picking and tracking the NSM is one of the highest-leverage things you can do. It turns ambiguous strategy into measurable progress, and it gives every team something concrete to align around.

### OKRs — Objectives and Key Results

OKRs are a goal-setting framework popularized by Andy Grove at Intel and adopted famously by Google. An Objective is a qualitative, ambitious goal. Key Results are 2–5 quantitative measures of whether you achieved the objective.

Example:

- **Objective:** Make our onboarding world-class.
- **KR1:** Increase activation rate from 35% to 55%.
- **KR2:** Reduce time-to-first-value from 8 minutes to under 3 minutes.
- **KR3:** Achieve NPS of 50+ from users in their first week. OKRs work best when key results measure outcomes, not output. "Ship feature X" is a task, not a KR. "Increase metric Y by Z%" is a real KR — it forces the team to figure out which features will actually move the metric.

**STRATEGY IN ONE SENTENCE**

A simple test: can you state your product strategy in one sentence that a new hire can understand? If not, your strategy might be a list of priorities — not a strategy.

## Chapter 5 — Product Discovery

Product discovery is the practice of figuring out what to build. Roughly half of features shipped by software teams fail to deliver any value to users or the business — discovery is the discipline that lowers that failure rate. Done well, discovery happens continuously, not just at the start of a project.

### Continuous Discovery

Teresa Torres popularized the idea of Continuous Discovery — making customer research a weekly habit, not a once-a-quarter ceremony. The core idea: every week, a product trio (PM, designer, engineer) talks to at least one customer, surfaces opportunities, and updates their thinking. Over time, the team builds a deep, current understanding of users — far better than any annual research report.

### Jobs to be Done (JTBD)

JTBD reframes the customer not as a demographic but as someone trying to make progress in their life. Instead of asking "who is our user?", you ask "what job is the user hiring our product to do?"

Clayton Christensen's classic example: people don't buy a quarter-inch drill bit because they want a quarter-inch drill bit. They want a quarter-inch hole. And actually, they want a picture hanging on the wall. And actually, they want to feel proud of their living room. The deeper you go, the more competing solutions you find — and the more clearly you see what your product really has to do.

### User Personas

Personas are fictional characters who represent your different user types. They typically include demographics, goals, frustrations, and behaviors. Used well, personas anchor product conversations: "Would Maya, our Marketing Manager persona, actually use this?" Used poorly, they become outdated cardboard cutouts no one reads.

### Opportunity Solution Tree

A visual framework, also from Teresa Torres, for connecting your desired outcome to specific solutions. The tree starts with the outcome at the top (e.g., "increase weekly active users"), branches into opportunities (specific user needs or pain points), branches again into solutions (ideas to address those needs), and ends with experiments (the tests you'll run). The tree forces you to consider multiple opportunities and multiple solutions, instead of jumping to the first idea.

### User research methods

The PM's research toolkit includes:

- **1:1 interviews:** Qualitative depth. Best for understanding why users do what they do.
- **Surveys:** Quantitative breadth. Best for confirming hypotheses at scale, not for generating them.
- **Usability tests:** Watching users try to complete tasks with your product. Reveals friction you can't see in analytics.
- **Diary studies:** Users record their experiences over days or weeks. Good for understanding context and patterns over time.
- **Analytics analysis:** What people actually do (vs. what they say they do). Best paired with qualitative methods.
- **Customer support logs and sales call recordings:** Free, abundant signal that PMs often overlook.

## Chapter 6 — Prioritization Frameworks

PMs always have more ideas than capacity. Prioritization frameworks give you a structured way to compare options and explain your reasoning to stakeholders. None of them give you the "right" answer — they give you a defensible, transparent process for making trade-offs.

### RICE

RICE scores each initiative on four factors:

- **Reach:** How many users will this affect in a given period?
- **Impact:** How much will it move the metric for each user? (Usually a scale like 0.25 / 0.5 / 1 / 2 / 3)
- **Confidence:** How confident are we in the above estimates? (Expressed as a percentage)
- **Effort:** Total person-months of work required. Score = (Reach × Impact × Confidence) / Effort. Higher = higher priority. RICE is most useful when comparing many similar-sized initiatives. It is less useful for comparing radically different bets.

### MoSCoW

MoSCoW divides initiatives into Must have, Should have, Could have, and Won't have (this time). Simple, fast, and especially useful for scoping a single release. The discipline of marking things "won't have" is what makes it valuable — it forces explicit trade-offs.

### Kano Model

The Kano Model classifies features by how they relate to customer satisfaction:

- **Basic (must-haves):** Their absence causes dissatisfaction; their presence is expected. Login security, for example.
- **Performance:** More is better. Speed, capacity, accuracy. Customers notice improvements.
- **Delighters:** Unexpected pleasures that create loyalty. The reverse-image-search button on a shopping app.
- **Indifferent:** Features users don't notice or care about.
- **Reverse:** Features that actively hurt satisfaction. Delighters tend to become Performance over time, and Performance becomes Basic. Today's wow-feature is tomorrow's table stakes.

### Value vs. Effort (a.k.a. 2x2 matrix)

The simplest framework, and often the most useful. Plot each initiative on a 2x2: value to the user / business on one axis, effort to build on the other. Quick wins (high value, low effort) go first. Big bets (high value, high effort) get planned carefully. Time sinks (low value, high effort) get cut. Fillers (low value, low effort) get done if there's time.

### ICE

A lighter-weight cousin of RICE: Impact × Confidence × Ease (or Effort, inverted). Three factors instead of four. Often used for growth experiments where speed matters more than precision.

### Weighted Scoring

When you have multiple criteria (revenue impact, strategic fit, user delight, technical risk), assign weights to each, score each initiative on each criterion, and compute a weighted total. Good for high-stakes decisions where many stakeholders need to see the reasoning. Bad for everyday prioritization — it's too heavy.

### How they compare at a glance

| Framework | What It Weighs | Best For | Watch Out For |
| --- | --- | --- | --- |
| **RICE** | Reach × Impact × Confidence ÷ Effort | Comparing many similar-sized initiatives | False precision; bad for radically different bets |
| **ICE** | Impact × Confidence × Ease | Growth experiments; quick triage | Subjective scoring; speed over rigor |
| **MoSCoW** | Must / Should / Could / Won't | Scoping a single release | Most things drift into "Must" without discipline |
| **Weighted Scoring** | Custom criteria × custom weights | High-stakes, multi-stakeholder calls | Time-heavy; rewards spreadsheet skill over judgment |
- **Weighted Scoring**
- Custom criteria × custom weights
- High-stakes, multi- stakeholder calls
- Time-heavy; rewards spreadsheet skill over judgment

**THE MOST IMPORTANT THING ABOUT PRIORITIZATION**

Frameworks help you think, but they don't make decisions for you. Strong PMs use frameworks to surface trade-offs, then layer judgment, strategic context, and customer empathy on top. Never let a spreadsheet be the only argument.

## Chapter 7 — Roadmapping

A roadmap is a communication artifact. It tells your team, your stakeholders, and your customers what you plan to focus on and roughly when. Roadmaps fail when they are treated as commitments to specific dates rather than declarations of intent.

### Types of roadmaps

- **Timeline roadmap:** Features mapped against months or quarters. Looks precise but creates accountability for dates that are usually guesses. Common in B2B sales contexts where customers ask for commitments.
- **Now / Next / Later:** Three buckets: what we're doing now, what's coming next, what's on the horizon. Reduces date anxiety and reflects reality (further-out work is more uncertain).
- **Theme-based roadmap:** Organized around problem areas ("Onboarding," "Mobile reliability," "AI features") rather than specific features. Gives the team room to find the best solutions within each theme.
- **Outcome-based roadmap:** Organized around outcomes ("Increase activation 20%," "Reduce churn 5%") rather than features. Most aligned with strong product practice. Hardest to sell to outside stakeholders who want feature commitments.

### How to build a roadmap

1. Start with strategy: what outcomes are we trying to achieve this year?
2. Identify the biggest opportunities and threats (from discovery, data, and competitive analysis).
3. Generate initiatives that could address each.
4. Prioritize using one of the frameworks from Chapter 6.
5. Group, sequence, and communicate based on your roadmap type.
6. Revisit quarterly. A roadmap is a living document.

**WHAT STAKEHOLDERS REALLY WANT**

When a sales leader asks "when will feature X ship?", they often actually want to know "can I promise this to a customer?" When a designer asks, they often want to know "when should I start designing it?" Roadmaps land better when you understand the question behind the question.

## Chapter 8 — Execution & Delivery

Once you have decided what to build, you have to actually build it. PMs typically work within one of several execution methodologies — Agile and its variants dominate, but the specific flavor matters less than the team's discipline in using it.

### Agile

Agile is less a process and more a philosophy, captured in the 2001 Agile Manifesto: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, responding to change over following a plan. Most modern software teams claim to be Agile; the quality of practice varies wildly.

### Scrum

Scrum is the most common Agile implementation. Work is organized into time-boxed sprints (typically 2 weeks). Each sprint follows a standard rhythm:

- **Sprint planning:** Team selects work for the upcoming sprint.
- **Daily standups:** 15-minute sync on progress and blockers.
- **Sprint review (demo):** Team shows what they built to stakeholders.
- **Sprint retrospective:** Team reflects on how to work better next time. Common Scrum roles: Product Owner (often the PM in smaller orgs), Scrum Master, and the Development Team.

### Kanban

Kanban focuses on continuous flow rather than fixed-length sprints. Work moves through columns (To Do → In Progress → Review → Done) on a board, with explicit limits on how much work can be in each column at once (WIP limits). Kanban suits ongoing support and maintenance work, where flexibility matters more than predictability.

### User stories, epics, and tasks

- **User story:** A small unit of work expressed from the user's perspective. Format: "As a [user], I want to [action] so that [outcome]."
- **Epic:** A larger body of work that spans multiple stories or sprints. Often represents a feature or theme.
- **Task:** A specific to-do, usually owned by one engineer.

### Definition of Done (DoD)

A checklist of what "done" actually means. Common items: code reviewed and merged, tests written and passing, documentation updated, accessibility checked, analytics events implemented, deployed to production behind a feature flag. A clear DoD prevents the rework that comes from "done but not really done."

### Estimation

Engineering estimates are often inaccurate, and PMs new to the role tend to take them too literally. Common practices include story points (relative sizing, often using Fibonacci numbers: 1, 2, 3, 5, 8, 13), t- shirt sizes (S/M/L/XL), and #NoEstimates (skipping point estimation entirely and tracking throughput instead). The goal isn't precision; it's calibration — knowing roughly how much work you can ship per sprint.

### Release strategies

- **Big bang release:** Ship to everyone at once. High risk but high marketing impact.
- **Phased rollout:** Ship to 1% of users, then 5%, then 25%, then 100%. Catches problems before they affect everyone.
- **Feature flags:** Code is in production but only "flipped on" for specific users or cohorts. Allows decoupling deploy from release.
- **Beta / Early Access:** Release to a small, opted-in group first.
- **A/B test:** Two versions run in parallel; pick the winner based on data.

## Chapter 9 — Metrics & Measurement

Metrics turn opinions into evidence. The PMs who win arguments — and ship the right things — are the ones who can point to data. But not all metrics are useful, and many metrics are actively misleading.

### Output vs Outcome vs Impact

- **Output:** What you shipped. Features, releases, lines of code.
- **Outcome:** How user behavior changed because of what you shipped.
- **Impact:** How the business changed because of the outcome. Junior teams celebrate output. Senior teams care about outcomes. Mature teams trace outcomes through to impact. "We shipped 12 features last quarter" is output. "Activation went from 35% to 50%" is outcome. "Annual revenue grew $8M because of higher activation" is impact.

### Leading vs Lagging Indicators

- **Lagging indicators:** Outcomes you ultimately care about, but that take time to move. Revenue, churn, NPS, retention.
- **Leading indicators:** Earlier signals that predict the lagging ones. If your lagging indicator is retention, a leading indicator might be week-2 engagement. PMs should track both.

### The AARRR (Pirate) Funnel

Dave McClure's framework for SaaS / consumer products:

- **Acquisition:** How do people find you?
- **Activation:** Do they have a great first experience?
- **Retention:** Do they come back?
- **Revenue:** Do they pay you?
- **Referral:** Do they tell others?

### HEART Framework

Google's user-centric metrics framework: Happiness, Engagement, Adoption, Retention, Task success. Particularly useful for product features where pure business metrics don't capture quality.

### A/B Testing

An A/B test (or split test) shows two variants — A (control) and B (treatment) — to comparable user groups and measures which performs better against a defined metric. Done right, A/B testing is the closest most

PMs get to a controlled scientific experiment. Done wrong, it's an excuse to ship whatever you wanted to ship anyway.

Key A/B testing concepts every PM should know:

- **Hypothesis:** A specific, testable claim. "Changing the CTA copy from 'Sign up' to 'Get started free' will increase signup rate."
- **Statistical significance:** The probability that the difference you observed is real, not random. Conventional threshold: 95% confidence.
- **Sample size and power:** You need enough users to detect a real effect. Tiny experiments often produce noise mistaken for signal.
- **Novelty effect:** Users may react to anything new before settling into normal behavior. Run tests long enough to see steady state.
- **Peeking:** Looking at results before the test is complete inflates false-positive rates. Decide your end date in advance.

### Cohort Analysis

Group users by when they joined (or some other shared characteristic) and watch their behavior over time. Cohort analysis reveals whether your product is genuinely getting better — newer cohorts should retain better than older ones if you're improving things.

### NPS, CSAT, and other satisfaction metrics

- **NPS (Net Promoter Score):** "How likely are you to recommend this to a friend?" on a 0–10 scale. Score = % Promoters (9–10) − % Detractors (0–6). A widely-used but often misused metric.
- **CSAT (Customer Satisfaction Score):** Direct satisfaction rating, often after a specific interaction.
- **CES (Customer Effort Score):** How easy was it to get something done? Strongly correlated with retention.

**THE METRIC TRAP**

Whatever you measure, you'll optimize. Choose carefully. A team measured on "daily active users" will find ways to drive DAU even if those tactics hurt long-term retention. Always pair your headline metric with guardrail metrics that catch when you're winning the battle but losing the war.

**FURTHER READING**

### Sources, originators, and where to go deeper.

The frameworks and ideas discussed in this part build on a wider body of work by the people listed below. If a section here matched something you wanted to study more deeply, start with these.

**The Lean Startup —** Eric Ries The Build–Measure–Learn loop and the foundations of validated learning.

**Continuous Discovery Habits —** Teresa Torres The Opportunity Solution Tree and the practice of weekly customer touchpoints.

**Escaping the Build Trap —** Melissa Perri How outcomes-orientation beats output-orientation, and how to build the organisation for it.

**Outcomes Over Output —** Josh Seiden A short, sharp argument for measuring what users actually do, not what teams ship.

**Shape Up —** Ryan Singer (Basecamp) A different model of product development — six-week cycles, appetite over estimates, and shaping over backlogs.

**The Mom Test —** Rob Fitzpatrick How to talk to customers without getting misled by polite lies.

**Measure What Matters —** John Doerr On OKRs and outcome-driven goal-setting.

# Part 3 — Product Management Glossary

The terminology every PM should know

An alphabetical reference of the terms product managers encounter daily.

If you can't define the words being used in a meeting, you can't push back on the ideas. Master the vocabulary.

This glossary is intentionally broad. Some terms below appear in nearly every PM job description; others you'll only encounter in specific contexts. Skim it once end-to-end, then return whenever you hit a term you're unsure of. AI-specific terminology has its own dedicated glossary in Part 9.

### A

- **A/B Test** — An experiment that compares two versions of something (a webpage, feature, or flow) by randomly showing each to comparable user groups, then measuring which performs better against a defined metric. Also called a split test.
- **AARRR (Pirate Metrics)** — Dave McClure's funnel framework: Acquisition, Activation, Retention, Revenue, Referral. A standard way to think about user lifecycle.
- **Acquisition** — The process and metrics of attracting new users — paid ads, SEO, content marketing, referrals, and so on.
- **Activation** — The point at which a new user gets meaningful value from the product for the first time (the "aha moment"). Often measured as a specific action: sending the first message, completing the first booking, inviting a teammate.
- **Agile** — A software development philosophy emphasizing iterative delivery, customer collaboration, and responsiveness to change. Defined in the 2001 Agile Manifesto.
- **Alpha** — An early version of a product released to a very small, often internal, group for testing.
- **ARR (Annual Recurring Revenue)** — The annualized value of a subscription business's recurring revenue. Key SaaS metric.
- **ARPU (Average Revenue Per User)** — Revenue divided by number of users. Often segmented by paying vs. all users.

### B

- **Backlog** — The prioritized list of work the team has not yet done. Product backlog (all known opportunities) vs. sprint backlog (committed for the current sprint).
- **Beta** — A release stage after alpha — a wider but still limited group tests the product before general availability.
- **Bug** — A defect — software behaving differently from how it was intended to.
- **Burn-down chart** — A chart that shows remaining work against time within a sprint. Used in Scrum to track progress.
- **Build-Measure-Learn** — The core loop from Eric Ries's Lean Startup: build a minimum experiment, measure results, learn what to do next.
- **Business Model Canvas** — A one-page visual template for capturing a business model: value proposition, customer segments, channels, revenue streams, cost structure, and so on.

### C

- **CAC (Customer Acquisition Cost)** — Total marketing and sales spend divided by number of customers acquired in that period.
- **Canary Release** — Releasing a new version to a small percentage of users first to detect issues before a full rollout. Named after canaries in coal mines.
- **Churn** — The rate at which customers stop using the product or cancel their subscription, usually expressed monthly or annually.
- **CLV / LTV (Customer Lifetime Value)** — The total revenue a business expects from a single customer over their entire relationship.
- **Cohort** — A group of users who share a common starting point — typically the week or month they signed up.
- **Continuous Discovery** — Teresa Torres's practice of weekly customer touchpoints to keep product decisions grounded in real user reality.
- **Continuous Deployment** — Engineering practice of automatically deploying every code change that passes tests, often many times per day.
- **Conversion Rate** — The percentage of users who complete a desired action (sign up, purchase, click) out of the total who had the opportunity.
- **Cross-functional team** — A team composed of all the disciplines needed to ship a product — typically PM, design, engineering, and often data, marketing, or research.
- **CSAT (Customer Satisfaction)** — A short survey asking customers to rate their satisfaction, often after a specific interaction.

### D

- **DAU / WAU / MAU** — Daily, Weekly, and Monthly Active Users. Standard engagement metrics. DAU/MAU ratio is a rough measure of habit-forming products (above 50% is excellent).
- **Definition of Done** — The team's agreed checklist of what counts as a fully completed piece of work.
- **Definition of Ready** — The criteria a backlog item must meet before the team is willing to pull it into a sprint.
- **Discovery** — The phase of product work focused on figuring out what to build — research, validation, problem definition.
- **Double Diamond** — A design framework with four phases: Discover, Define, Develop, Deliver. The first diamond is about understanding the problem; the second about creating the solution.

### E

- **Epic** — A large body of product work, often spanning multiple sprints, that can be broken into smaller user stories.
- **Experiment** — Any structured test designed to validate or invalidate a hypothesis. Can be an A/B test, fake door test, prototype test, and more.

### F

- **Feature Flag** — A piece of configuration that turns a feature on or off without redeploying code. Allows shipping code to production but releasing features selectively.
- **Feedback Loop** — Any system by which user signal (data, interviews, support tickets) flows back to the product team to inform decisions.
- **Fishbone Diagram** — A root-cause analysis tool that maps potential causes of a problem along a fishbone- like structure.
- **FOMO (Fear of Missing Out)** — Common reason teams build features that don't fit the strategy — "competitor X has it, so we need it too." A signal to slow down and rethink.
- **Funnel** — A sequence of steps users go through (e.g., visit → signup → activation → purchase). Funnel analysis identifies where users drop off.

### G

- **Gantt Chart** — A timeline-based project chart showing tasks, durations, and dependencies. Common in waterfall projects, less so in pure Agile.
- **Go-to-Market (GTM)** — The plan for how a product reaches its market: pricing, positioning, channels, sales motion, launch sequence.
- **Growth Loop** — A self-reinforcing system where the output of one user's behavior becomes the input that attracts more users. Stronger than a funnel.
- **Guardrail Metric** — A metric you watch to make sure optimizing your primary metric doesn't break something else. If activation goes up but retention crashes, your guardrail caught a problem.

### H

- **HEART Framework** — Google's user-experience metric framework: Happiness, Engagement, Adoption, Retention, Task success.
- **Hypothesis** — A specific, testable belief about cause and effect. Good hypotheses state the change, the expected outcome, and the metric.

### I

- **ICE Score** — A lightweight prioritization framework scoring initiatives by Impact, Confidence, and Ease.
- **Iteration** — One cycle of build-measure-learn. The fundamental rhythm of modern product development.

### J

- **JTBD (Jobs To Be Done)** — A framework that views customers as people trying to make progress in their lives — "hiring" products to do specific jobs for them.

### K

- **Kanban** — A flow-based agile method using a board with columns and WIP (work-in-progress) limits.
- **Kano Model** — A framework that classifies features as basic needs, performance attributes, delighters, indifferent, or reverse — useful for prioritization.
- **KPI (Key Performance Indicator)** — The few critical metrics that indicate whether a product or business is succeeding.

### L

- **Lean Startup** — Eric Ries's methodology emphasizing rapid experimentation, validated learning, and minimum viable products.
- **Lookback (Retrospective)** — A team meeting to reflect on what went well, what didn't, and what to change.

### M

- **MAU** — Monthly Active Users — users who took a meaningful action in the last 30 days.
- **MoSCoW** — A prioritization framework: Must have, Should have, Could have, Won't have (this time).
- **MVP (Minimum Viable Product)** — The smallest version of a product that can deliver enough value to test a core hypothesis with real users. Often misunderstood as a low-quality launch; really it's a high- learning launch.

### N

- **North Star Metric (NSM)** — The single metric that best captures the core value your product delivers to customers.
- **NPS (Net Promoter Score)** — A satisfaction metric: % of users scoring 9–10 minus % scoring 0–6 on "How likely are you to recommend us?"

### O

- **OKR (Objective and Key Result)** — A goal-setting framework: one ambitious objective plus 2–5 measurable key results.
- **Opportunity Solution Tree** — A tree-shaped visual mapping outcomes to opportunities to solutions to experiments.
- **Output vs Outcome** — Output is what you ship. Outcome is the change in user behavior that results. Mature teams measure outcomes.

### P

- **Persona** — A fictional user archetype based on research, used to keep product conversations grounded in specific users.
- **Pivot** — A deliberate change in product strategy or direction based on what you've learned. Different from giving up — a pivot keeps something (the vision, the team) while changing something else (the audience, the product).
- **Platform** — A product whose value comes from enabling others to build, sell, or connect on top of it.
- **PLG (Product-Led Growth)** — A go-to-market strategy where the product itself drives acquisition, conversion, and expansion — instead of a sales team. Slack and Figma are canonical examples.
- **PMF (Product-Market Fit)** — The point where a product is so well-matched to its market that growth becomes self-sustaining. Famously described by Marc Andreessen as "when you can feel it."
- **PoC (Proof of Concept)** — A small implementation to demonstrate that an idea is technically feasible. Not meant for production use.
- **PRD (Product Requirements Document)** — A written specification of what is being built, why, for whom, and how success will be measured.
- **PRFAQ (Press Release / FAQ)** — Amazon's working-backward technique: writing the launch announcement and FAQ first, before building, to force clarity about user value.
- **Prototype** — An early, often clickable mock-up used to test ideas before building real software.

### Q

- **Qualitative vs Quantitative** — Qualitative data is descriptive (interview quotes, observations). Quantitative is numeric (rates, counts). Strong PMs use both — qualitative tells you why, quantitative tells you how often.

### R

- **Retention** — The rate at which users keep using the product over time. The single most important metric for most products.
- **Retrospective** — A regular team meeting to reflect and improve. Often called a retro.
- **RICE** — A prioritization framework: Reach × Impact × Confidence ÷ Effort.
- **Roadmap** — A communication artifact describing planned product work over a horizon.

### S

- **SaaS (Software as a Service)** — Software delivered via subscription over the internet rather than installed locally.
- **Scope Creep** — The gradual expansion of project requirements beyond what was agreed.
- **Scrum** — A specific Agile framework with sprints, daily standups, reviews, and retros.
- **Spike** — A time-boxed exploration to answer a technical or product question before committing to building.
- **Sprint** — A fixed-length iteration (commonly 2 weeks) in which a team commits to a defined scope of work.
- **Stakeholder** — Anyone with an interest in the product — leadership, sales, marketing, support, engineering, design, customers.
- **Story Points** — A relative estimate of effort for a user story. Often uses Fibonacci numbers (1, 2, 3, 5, 8, 13).
- **SWOT** — A strategic analysis: Strengths, Weaknesses, Opportunities, Threats.

### T

- **TAM / SAM / SOM** — Total Addressable Market, Serviceable Available Market, Serviceable Obtainable Market. A telescoping view of market size from theoretical max to realistic share.
- **Tech Debt** — Shortcuts taken in code or architecture that will cost more to fix later. Some tech debt is intentional and rational; some is accidental and dangerous.
- **Telemetry** — Data collected from a product about how it's being used and how it's performing.
- **Time to Value (TTV)** — How long it takes a new user to experience the product's core value. Shorter is almost always better.

### U

- **UAT (User Acceptance Testing)** — Testing performed by end users or business stakeholders to confirm the product meets their needs before release.
- **Usability Testing** — Watching users attempt tasks with the product to find friction and confusion.
- **User Journey** — The sequence of steps and emotions a user experiences across a product or service. Often mapped visually.
- **User Story** — A small unit of work expressed from the user's perspective: "As a [user], I want to [action] so that [outcome]."

### V

- **Validated Learning** — Lean Startup term: insight gained from running an experiment that confirms or disconfirms a hypothesis.
- **Value Proposition** — A clear statement of why a customer should choose your product — what value it delivers, to whom, and why it's different from alternatives.
- **Vanity Metric** — A metric that looks good but doesn't help you make decisions or predict outcomes. Total registered users is often a vanity metric; weekly active users usually isn't.

### W

- **Waterfall** — A traditional sequential development methodology: gather all requirements, then design, then build, then test, then release. Largely supplanted by Agile in software, but still relevant in some hardware and regulated industries.
- **WIP Limit** — Work-In-Progress limit. A cap on how many items can be in a given state simultaneously, to keep flow smooth and prevent thrash.

**X/Y/Z**

- **XFN** — Shorthand for "cross-functional."
- **YAGNI (You Aren't Gonna Need It)** — Engineering principle: don't build features or abstractions until they're actually needed.
- **Zero-to-One vs One-to-N** — Peter Thiel's distinction. Zero-to-one is creating something genuinely new. One-to-N is scaling, replicating, or improving on something that already exists. Different products and different PMs lean into different sides of this.

# Part 4 — Introduction to AI Product Management

The discipline that's reshaping the PM craft

Three chapters on what AI Product Management is, how it differs from traditional PM, and the mindset shift it demands.

AI Product Management is product management for systems that learn, generate, and surprise. The fundamentals still apply — but the assumptions don't.

**IN THIS PART**

10. What is AI Product Management?
11. How AI PM Differs from Traditional PM
12. The AI PM Mindset

## Chapter 10 — What is AI Product Management?

AI Product Management is the practice of building products in which artificial intelligence — typically machine learning models, and increasingly large language models — is core to the user value being delivered. It is not a separate profession from product management; it is product management applied to a particular kind of system.

The shift to AI doesn't change the PM's first principles. You still need to understand users, choose problems wisely, work cross-functionally, ship value, and measure outcomes. What changes is the nature of the system you're building. Traditional software is deterministic: given the same input, it produces the same output. AI systems are probabilistic: the same input may produce different outputs, sometimes brilliant, sometimes wrong, often in surprising ways.

That probabilistic nature changes everything downstream. It changes how you scope features (because you can't fully specify behavior in advance), how you evaluate quality (because there's no single right answer), how you communicate to users (because the model will fail in unexpected ways), and how you measure success (because the right metric is rarely accuracy alone).

**AI PM IN ONE SENTENCE**

An AI PM is responsible for shipping intelligent systems that users actually want to use, can reasonably trust, and produce business value — while navigating the fact that the system itself will keep changing and surprising you.

**FROM AI PM TO AI-NATIVE PRODUCT BUILDER**

This handbook teaches the craft of the **AI-native Product Manager** — the modern AI PM who thinks natively in probabilistic systems, evals, and model trade-offs (used interchangeably with "AI PM" throughout). But it aims one step further, at the identity this era increasingly rewards: the **AI-native Product Builder**.

> **AI-native Product Builder = AI-native Product Manager + high execution leverage from AI tooling.**

An AI-native Product Builder goes the extra mile in execution — using AI tooling to prototype, build, and ship, not just to define and manage. They write the eval harness themselves, stand up the RAG prototype over a weekend, and wire the agent by hand, because in the AI era the distance from idea to working artifact has collapsed. That execution leverage — turning judgment into shipped artifacts — is the differentiator this handbook is built to give you.

### The four flavors of AI products

AI shows up in products in several distinct shapes. Understanding which kind of AI product you're building matters because the playbook differs.

- **AI-embedded features:** AI quietly powers a feature inside a traditional product — fraud detection in a banking app, spam filtering in email, recommended products on an e-commerce site. The user may not even know AI is involved.
- **AI-augmented products:** AI is a visible feature alongside others — "summarize this email," "smart reply," "draft this with AI." Users opt into AI moments inside an otherwise traditional workflow.
- **AI-native products:** The entire product would not exist without AI. ChatGPT, Midjourney, Perplexity, Cursor, voice assistants. AI is the product.
- **AI platform products:** Tools that let other developers build AI products — APIs, MLOps platforms, vector databases, agent frameworks. The customers are builders, not end users.

### Why AI PM is suddenly so prominent

AI has existed in products for decades — recommendation engines on Netflix and Amazon, ranking algorithms on Google, fraud models at PayPal. What changed around 2022 with the public release of capable large language models was the scope and visibility of AI's role. Suddenly, a much wider set of products could be reimagined with AI at the core, and a much wider set of PMs had to learn the discipline.

Three forces in particular are driving the moment:

1. Capability: Foundation models can perform tasks (writing, summarizing, coding, image generation, reasoning) that previously required custom-built ML systems and large datasets.
2. Accessibility: API-first model providers and open-source models put AI in reach of any product team. You no longer need a PhD-staffed research lab to ship intelligent features.
3. User expectation: Users now expect AI to be part of modern products. The bar for what "good software" feels like is shifting in real time.

## Chapter 11 — How AI PM Differs from Traditional PM

If you are a strong traditional PM moving into AI, most of your existing skills transfer. But several things change in ways that catch newcomers off guard. The honest list:

**1. You can't fully specify the product**

In traditional software, the PRD describes what happens for every input. A signup form is either valid or invalid; the system responds the same way every time. In AI products, you cannot enumerate every possible input or fully define every output. You can describe intent, set behaviors, and define constraints — but the model will always surprise you. The PRD shifts from a behavioral specification to a quality, capability, and constraint specification.

**2. Quality is multi-dimensional and slippery**

"Did it work?" is no longer a yes/no question. An AI feature might be accurate but slow, helpful but verbose, factually correct but tonally off, technically right but ethically uncomfortable. AI PMs invest heavily in evaluation — designing rubrics, running tests, looking at samples — because automated success metrics alone won't capture quality.

**3. Data is a first-class concern**

In traditional PM, data is mostly an analytics concern after launch. In AI PM, the training data, fine-tuning data, evaluation data, and live user data are part of the product itself. "Where does the data come from? Is it clean? Is it labeled? Can we use it legally? Does it represent the users we care about?" — these become PM questions, not just data team questions.

**4. The cost curve looks different**

Traditional software is cheap per use. AI features can be expensive — every model call costs real money and takes real time. PMs have to think about token costs, latency, caching, and per-call economics that simply don't exist in CRUD apps. A free feature for users may be a substantial cost line for the company.

**5. Failure modes are weirder**

Traditional bugs are repeatable. AI failures are often subtle, intermittent, and embarrassing. The model invents a citation, gives different answers to the same question on different days, confidently states something false (hallucinates), or refuses to answer something perfectly reasonable. Designing for graceful failure becomes a core PM skill.

**6. The roadmap moves under your feet**

Foundation models keep getting better. A capability that requires a complex workaround today may be a one-line prompt change in six months — or, conversely, what works today may break when the underlying model is updated. AI PMs build roadmaps with explicit assumptions about model capability evolution.

**7. You collaborate with new disciplines**

AI PMs work closely with ML engineers, data scientists, applied researchers, and increasingly prompt engineers and AI safety folks. The language and rhythms of ML teams differ from traditional engineering teams — research is often non-linear, results vary across runs, and "done" is fuzzier.

**THE REALITY CHECK**

AI PM is not harder than traditional PM in some grand sense — it's just different. The PMs who struggle are usually the ones treating AI features like deterministic features. The PMs who thrive are the ones who learn the new mental models and let go of false certainty.

## Chapter 12 — The AI PM Mindset

Beyond skills, AI PM rewards a particular way of thinking. The best AI PMs share a set of mental habits that show up across hiring loops, design reviews, and shipping decisions.

### Probabilistic thinking

Stop expecting deterministic answers. A model that's right 95% of the time is doing extremely well — and is wrong one out of every twenty times. Internalize this. Every AI PM decision involves trade-offs in distributions, not in single right answers.

### Evals over opinions

In a discussion about whether the AI is good enough, the team member with the evaluation results wins. Build the discipline of writing down test cases, running them systematically, and reviewing results — not just for launch decisions but for every prompt change, model swap, and feature update.

### Skepticism without paralysis

AI products are easy to demo and hard to ship reliably. A wow moment in a meeting often hides edge cases that would be unacceptable in production. The best AI PMs are immediately skeptical of demos, ask "how often does it work?", and probe failure modes — but they don't let that skepticism stop them from shipping. Iteration beats perfection.

### First principles thinking about user value

It's tempting to add AI to everything. Resist. The first question is always: what user problem are we solving, and is AI the right tool? A good rule of thumb: if you can describe the user value without using the word "AI," you probably have a real product. If you can't, you might just be feature-chasing the news cycle.

### Patience for non-determinism in reviews and demos

Engineers, designers, and stakeholders will sometimes see the AI fail during a demo and panic. AI PMs learn to calibrate expectations — "yes, that's expected behavior at the current quality bar; here's our plan to improve it" — without losing trust in the team's progress.

### Comfort with abstraction layers

AI products are stacks: a foundation model at the bottom, prompts and orchestration above, application logic above that, UI on top. Strong AI PMs move fluently between layers — knowing when a problem belongs to the prompt, when to the application logic, when to the UI, and when to the underlying model itself.

### Ethical awareness as a default

AI products fail in ethically loaded ways: biased outputs, privacy leaks, misinformation, displacement. AI PMs don't outsource ethics to a separate "responsible AI team"; they integrate ethical thinking into product decisions from day one. Part 8 of this handbook covers this in depth.

### Build it yourself when you can

The AI-native Product Builder doesn't wait for an engineer to test an idea. When the distance from idea to working artifact is an afternoon with an AI IDE, an API key, and a notebook, build the throwaway version yourself — the prompt, the eval harness, the RAG prototype, the small agent. Hands-on contact with the real system produces judgment no spec or demo can. This is the habit that turns an AI-native Product Manager into an AI-native Product *Builder*.

**A USEFUL DAILY QUESTION**

Every day, ask yourself: "What did I learn about my model's actual behavior today?" If the answer is "nothing," you probably weren't close enough to the system. Great AI PMs are constantly looking at outputs, reading samples, and probing failure modes.

**FURTHER READING**

### Sources, originators, and where to go deeper.

The frameworks and ideas discussed in this part build on a wider body of work by the people listed below. If a section here matched something you wanted to study more deeply, start with these.

**Prediction Machines —** Ajay Agrawal, Joshua Gans & Avi Goldfarb The clearest framing of AI as cheap prediction — and what that does to product strategy.

**AI-First Companies —** Ash Fontana How AI-native companies operate differently from software companies that bolt AI on.

**The Alignment Problem —** Brian Christian A readable history of the gap between what we want AI to do and what it actually does.

**Lenny's Newsletter —** Lenny Rachitsky A reliable weekly newsletter with PM-focused interviews and deep dives, including AI PM coverage.

# Part 5 — AI & ML Foundations for PMs

What you must understand under the hood

Three chapters covering the AI and ML basics every PM needs to make informed product decisions.

You don't need to train a model. You do need to understand what your engineers are talking about — and to challenge them when something doesn't smell right.

**IN THIS PART**

13. Types of AI & Machine Learning
14. The Machine Learning Lifecycle
15. Data — The Fuel of AI Products

## Chapter 13 — Types of AI & Machine Learning

Before diving into how to build AI products, you need a clear mental map of what "AI" actually means. The term is used loosely. Drawing real distinctions between types of AI helps you talk to engineers credibly and make better product decisions.

### The umbrella terms

- **Artificial Intelligence (AI):** The broad field of building machines that can perform tasks typically requiring human intelligence. AI is the parent category that contains everything else below.
- **Machine Learning (ML):** A subset of AI where systems learn patterns from data rather than being explicitly programmed. Most modern "AI" is ML.
- **Deep Learning (DL):** A subset of ML that uses neural networks with many layers. Powers most state-of-the-art systems today, including image recognition, speech, and language.
- **Generative AI (GenAI):** AI systems that create new content — text, images, audio, video, code — rather than just classifying or predicting. Large language models, image generators, and music generators all fall here.

### Narrow AI vs. AGI

Almost all AI in production today is narrow AI — designed to do one specific thing well (translate text, recommend products, detect fraud). Artificial General Intelligence (AGI) refers to hypothetical AI that matches human ability across virtually all cognitive tasks. AGI does not exist today; whether we are close to it is one of the field's most contested questions. As a PM, you build with narrow AI.

### The four main learning paradigms

How does an ML model actually learn? Four main approaches:

### Supervised Learning

The model learns from labeled examples. Show it 100,000 emails labeled "spam" or "not spam" and it learns to classify new emails. Show it photos labeled with the animal in them, and it learns to identify animals. Supervised learning powers most classification and prediction systems in production. Its main constraint is the need for labeled data, which can be expensive to produce.

### Unsupervised Learning

The model finds patterns in unlabeled data on its own. Common applications: clustering users into segments, finding anomalies, dimensionality reduction. You're not telling the model what to look for; you're asking it to find structure that's already there.

### Reinforcement Learning (RL)

The model learns by trial and error in an environment, receiving rewards for good actions and penalties for bad ones. RL is how AI systems master games (chess, Go, video games), and is increasingly important in robotics and in fine-tuning large language models (the "RLHF" in training modern chatbots stands for Reinforcement Learning from Human Feedback).

### Self-Supervised Learning

The model learns from unlabeled data by predicting parts of the data from other parts. "Given this sentence with one word hidden, predict the missing word." This is the foundational technique behind modern large language models — it lets them learn from massive amounts of text without anyone labeling it. Self-supervised pretraining is one of the most important ideas in modern AI.

### Common model types you'll encounter

- **Classification models:** Predict which category an input belongs to (spam/not-spam, fraud/legit, dog/cat).
- **Regression models:** Predict a continuous number (house price, expected revenue, ETA).
- **Clustering models:** Group similar items together without labels (customer segmentation).
- **Recommendation systems:** Predict what a user will like (what to watch, buy, read). Often a combination of collaborative filtering and content-based methods.
- **Computer vision models:** Process images and video — detection, segmentation, recognition, generation.
- **Natural Language Processing (NLP) models:** Process text — classification, extraction, summarization, generation, translation.
- **Speech models:** Convert speech to text (ASR), text to speech (TTS), or both.
- **Large Language Models (LLMs):** Massive neural networks trained on huge text corpora, capable of a remarkable range of language tasks. Covered in depth in Part 6.
- **Diffusion models:** Generate images, video, and audio by progressively denoising random noise. Power tools like Stable Diffusion, Midjourney, DALL·E.

**PM TIP ON MODEL TYPES**

You don't need to know the math behind any of these. But when an engineer says "we're using a transformer-based classifier with a small fine-tuned head," you should be able to translate: "that's a small custom model built on top of a big pretrained one, designed to classify inputs into categories." Vocabulary unlocks conversation.

## Chapter 14 — The Machine Learning Lifecycle

Just as products have a lifecycle, ML systems have their own end-to-end lifecycle. Understanding it helps you know what your team is doing, what could go wrong, and where to push for quality.

### Stage 1 — Problem framing

Before any data or modeling, the team needs a crisp answer to: what are we predicting, for whom, and why? Many AI projects fail at this stage. The PM's role is to translate a business or user goal into an ML problem the team can actually solve. "Reduce churn" is a goal, not an ML problem. "Predict which users are likely to cancel in the next 30 days, so we can show them a retention offer" is an ML problem.

### Stage 2 — Data collection

The model can only learn from data you actually have. The team must source the right data: historical examples, user signals, content libraries, third-party datasets. Data quality, coverage, and legality are PM- level concerns.

### Stage 3 — Data preparation and labeling

Raw data is rarely usable as-is. Engineers clean it (remove duplicates, fix errors, handle missing values), transform it, and — for supervised learning — label it. Labeling is often the most expensive part of building a custom ML system. Decisions made here affect everything that follows.

### Stage 4 — Feature engineering

Features are the inputs the model uses to make predictions. "How recently did the user log in?" "How many friends do they have?" "What's the average session length?" Each feature is engineered from raw data. Good features often matter more than fancy algorithms; smart feature engineering can take an average model and make it great.

### Stage 5 — Model training

The team chooses a model architecture, splits data into training/validation/test sets, and runs the actual training process. Training can take minutes (small models) to weeks (large foundation models).

### Stage 6 — Evaluation

Before deploying, the team tests the model against held-out data and against business-relevant metrics. Common ML metrics: accuracy, precision, recall, F1, AUC, mean squared error. As a PM, push beyond these — what does the model actually do for users? When it's wrong, how wrong is it? Are some user segments served worse than others?

### Stage 7 — Deployment

The model goes into production where real users hit it. This involves significant engineering: serving infrastructure, latency optimization, monitoring, and rollback mechanisms. Deployment isn't a single moment; it's often a gradual rollout (a canary, then a percentage rollout, then full launch).

### Stage 8 — Monitoring

Once live, the model's behavior must be watched continuously. Two things go wrong over time: the world changes (user behavior shifts, content distributions change), and the model's predictions drift accordingly. Monitoring catches drift, performance degradation, and emerging failure modes.

### Stage 9 — Retraining

Most production ML systems are retrained periodically — weekly, monthly, or in response to detected drift. Retraining is a mini-version of stages 2–7, often automated as a pipeline. Some teams retrain continuously; others retrain only when needed.

### The lifecycle at a glance

1. **Problem framing** — Translate the business goal into a crisp ML problem someone could actually predict.
2. **Data collection** — Source the right examples — historical data, user signals, third-party sets. Quality and legality both matter.
3. **Data prep and labeling** — Clean, transform, and label. Often the most expensive part of building a custom ML system.
4. **Feature engineering** — Construct the inputs the model will use. Good features beat fancy algorithms.
5. **Model training** — Pick an architecture, split data, run training. Minutes to weeks depending on scale.
6. **Evaluation** — Test against held-out data and business metrics. Push beyond accuracy — ask what users feel.
7. **Deployment** — Serve in production with monitoring, latency budgets, and rollback paths.
8. **Monitoring and retraining** — Watch for drift, performance dips, and new failure modes. Retrain on a cadence that matches how fast your world changes.

**THE FULL PICTURE**

When non-ML people imagine "AI development," they imagine stage 5 (model training). Experienced ML teams know stages 2, 3, and 8 are often where projects succeed or fail. Data quality and ongoing monitoring matter more than the cleverness of the algorithm.

## Chapter 15 — Data — The Fuel of AI Products

Andrew Ng has long argued that practitioners should be "data-centric, not model-centric" — meaning improvements in data quality almost always produce more gain than tweaks to model architecture. As an AI PM, treat data as a first-class part of your product, not an engineering implementation detail.

### Types of data in an ML system

- **Training data:** The examples the model learns from. The biggest, most influential dataset.
- **Validation data:** Held out during training to tune model choices and detect overfitting.
- **Test data:** Held out completely, used only once to estimate true model performance.
- **Production / live data:** What users actually send to your model after launch. Often differs from training data in subtle but important ways.
- **Eval data:** A separate, often hand-curated set of cases used to evaluate the deployed system. Covered in detail in Chapter 24.

### Data quality dimensions

"Quality" sounds vague. Break it into concrete dimensions you can actually inspect and improve:

- **Accuracy:** Are the labels and values correct?
- **Completeness:** Are there missing fields, dropped records, or unrepresented segments?
- **Consistency:** Are the same things labeled the same way across the dataset?
- **Timeliness:** Does the data reflect the current world, or is it stale?
- **Coverage:** Does the data span the full range of cases your model will see in production? Especially: does it represent the user populations you care about?
- **Bias:** Does the data over- or under-represent groups, contexts, or outcomes in ways that will distort the model? Covered in depth in Part 8.

### Labeling — where AI products actually get built

For supervised systems, labeling is often the single most important investment. Decisions here cascade into model quality. PMs help by:

- Writing clear labeling guidelines — labelers should be able to follow them without ambiguity.
- Designing labeling tasks that are bite-sized, repeatable, and quality-checkable.
- Setting up inter-annotator agreement checks — multiple labelers should agree most of the time. Disagreements reveal unclear cases.
- Investing in active learning — letting the model tell you which examples it's most unsure about, and labeling those first.
- Treating labelers as collaborators, not assembly-line workers. They often surface insights that improve the product itself.

### Synthetic data

Increasingly, teams generate training data with other AI systems — using a large model to create realistic examples for a smaller, specialized model. Synthetic data can dramatically reduce labeling costs, but it carries risks: models trained on synthetic data can inherit and amplify the biases of the generating model. PMs should ask: where did this data really come from, and what biases might be baked in?

### Data drift and concept drift

- **Data drift:** The distribution of inputs changes over time. Users start asking different questions, uploading different kinds of files, behaving differently.
- **Concept drift:** The relationship between inputs and the right answer changes. The same input may now require a different output — for example, what counts as "spam" evolves as spammers adapt. Both are reasons the model that worked great at launch can quietly degrade. Monitoring for drift is essential. Retraining cadence is partly a function of how fast your world drifts.

### Privacy, consent, and provenance

Where did your training data come from? Did users consent to it being used this way? Are you obligated to honor deletion requests? Do you have rights to the third-party datasets you trained on? These questions used to live with legal and compliance. They now sit on PMs' desks too, especially as regulators around the world write new rules on AI training data. The cheapest time to address data provenance is before you build, not after a complaint.

**THE DATA PM MINDSET**

Before you ship an AI feature, ask three data questions: Where did the training data come from, and do we have the right to use it? Does it represent the users we're shipping to? How will we know when it gets stale?

**FURTHER READING**

### Sources, originators, and where to go deeper.

The frameworks and ideas discussed in this part build on a wider body of work by the people listed below. If a section here matched something you wanted to study more deeply, start with these.

**Designing Machine Learning Systems —** Chip Huyen The strongest single text on building production ML systems from a product and engineering lens.

**The Hundred-Page Machine Learning Book —** Andriy Burkov A concise, mathematical-but-readable overview of how ML actually works.

**Machine Learning Yearning —** Andrew Ng A free book on diagnosing what is wrong with an ML project and what to do about it.

**Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow —** Aurélien Géron Project-based, code-along introduction for PMs who want to build a working intuition.

# Part 6 — Generative AI & LLMs Deep Dive

The technology powering today's AI products

Six chapters on the inner workings of large language models, prompting, RAG, fine-tuning, agents, and multimodal systems.

Large language models are the printing press of the AI era. The PMs who understand them will design the future of software.

**IN THIS PART**

16. How Large Language Models Work
17. Prompt Engineering for PMs
18. Retrieval-Augmented Generation
19. Fine-Tuning & Model Customization
20. AI Agents & Tool Use
21. Multimodal AI

## Chapter 16 — How Large Language Models Work

Large Language Models (LLMs) are the engines behind ChatGPT, Claude, Gemini, and most of today's generative AI products. As an AI PM, you don't need to be able to build one, but you do need to understand them well enough to design products around their strengths and around their (substantial) limitations.

### The one-paragraph explanation

An LLM is a very large neural network trained on enormous amounts of text from the internet, books, and other sources. During training, it learns to predict the next chunk of text given what came before. After training on hundreds of billions of words, the model gets remarkably good at this — and as a side effect, it becomes capable of summarizing, writing, reasoning, answering questions, translating, and coding. Everything an LLM does, at its core, is next-token prediction. The magic is what "good prediction" requires.

### Tokens

LLMs don't see words — they see tokens. A token is a chunk of text (often a word, part of a word, or a punctuation mark). The English word "running" might be one token; the word "antidisestablishmentarianism" might be five. Tokens matter because they are the unit of cost (API pricing is typically per million tokens) and the unit of capacity (models have a maximum number of tokens they can handle at once). As a rough rule, 1,000 tokens ≈ 750 English words.

### Context window

The context window is the maximum amount of text (in tokens) the model can consider in a single interaction. Early LLMs had context windows of 2,000–4,000 tokens. Modern models routinely have 100,000–1,000,000+. The context window is shared between input (what you send) and output (what the model generates). PM implications:

- Bigger context windows let you stuff more information into prompts — entire documents, long histories, full codebases.
- But cost scales with tokens. A million-token prompt is expensive, every single time.
- And quality is not uniform across the context — models often handle the beginning and end better than the middle. Knowing where to place crucial information matters.

### Foundation models

A foundation model is a large model trained on broad data that can be adapted to many downstream tasks. GPT-4, Claude, Gemini, Llama, Mistral — these are all foundation models. Most AI products are built by calling foundation models via API, not by training models from scratch. This is one of the biggest shifts in AI product development: the heavy lifting has been done; the PM's job is figuring out how to use it well.

### Parameters and model size

Model size is often described in parameters — the internal numbers the model has learned. A small model might have 1 billion parameters; a large one 70 billion or more. Bigger isn't always better: bigger models tend to be more capable but slower and more expensive. Most production AI features use the smallest model that meets the quality bar, not the biggest available.

### Temperature and other generation knobs

LLM APIs expose parameters that control output style:

- **Temperature:** Controls randomness. Low temperature (0–0.3) produces consistent, predictable outputs. High temperature (0.7–1.0+) produces more varied, creative outputs. For factual tasks, lower; for brainstorming, higher.
- **Top-p (nucleus sampling):** Controls how many possible next tokens the model considers. Lower values produce more focused outputs.
- **Max tokens:** Caps how long the response can be.
- **Stop sequences:** Text that, when generated, makes the model stop.

### System prompts vs user prompts

Most LLM APIs distinguish between system prompts (instructions that set the model's persona, role, and constraints) and user prompts (the user's actual input). The system prompt is your most powerful design tool — it's where you encode behavior, tone, safety rules, and capabilities. PMs spend more time on system prompts than almost any other artifact.

### Inference vs Training

- **Training:** Building the model in the first place. Expensive, slow, infrequent.
- **Inference:** Running the trained model to generate outputs. Happens every time a user sends a query. The cost and latency of inference is what shows up in your product's economics.

### Open vs closed models

- **Closed models:** Proprietary, served only via API by the company that built them (OpenAI, Anthropic, Google). Easy to use, no infrastructure burden, but you don't own the model and you're subject to the provider's pricing, policies, and changes.
- **Open models:** Model weights are publicly available (Llama, Mistral, DeepSeek, Qwen). Can be self- hosted, fine-tuned freely, and run on your own infrastructure. More flexibility, but more operational burden. Many production AI products use a mix — closed models for high-quality general tasks, open models for high-volume, cost-sensitive specialized tasks.

**THE PM MENTAL MODEL OF AN LLM**

Think of an LLM as an incredibly well-read, fast, eager intern. It has read more than any human ever could. It can produce confident output on any topic. It has no real-world experience, no memory of your specific situation, occasionally makes things up, and works best when you give it clear instructions and good context. Your job is to be the manager who gives it the right context and checks the work.

## Chapter 17 — Prompt Engineering for PMs

Prompt engineering is the practice of crafting the inputs you send to an LLM to get reliably high-quality outputs. It is part craft, part science, and increasingly part of every AI PM's toolkit. You don't need to be the team's best prompt engineer, but you should be able to read a prompt and have an opinion on it.

### The anatomy of a strong prompt

A reliable prompt typically contains some or all of these elements:

- **Role / persona:** Tell the model who it is. "You are a careful financial analyst..." or "You are a friendly cooking assistant who keeps replies short."
- **Task:** What you want it to do. Specific is better than vague.
- **Context:** Background information the model needs but can't be expected to know.
- **Examples (few-shot):** 1–5 worked examples of input-output pairs in the format you want.
- **Constraints:** What it must do or avoid. Length limits, formats, forbidden topics.
- **Output format:** How the answer should be structured. JSON, markdown, plain text, specific headings.
- **Edge case handling:** What to do when the input is unclear, off-topic, or unsafe.

### Prompting techniques you'll hear about

### Zero-shot prompting

Just ask. "Translate this paragraph to Spanish." No examples, no context — relying on the model's general capability. Works well for common tasks; less well for unusual or domain-specific ones.

### Few-shot prompting

Provide 2–5 worked examples before the actual task. This anchors the model to the format and style you want. Especially useful when the desired output is unusual or when the model's default style needs nudging.

### Chain-of-thought (CoT) prompting

Asking the model to "think step by step" before giving a final answer. This dramatically improves performance on reasoning tasks (math, multi-step logic, complex analysis). Modern "reasoning" models do this implicitly; older models benefit from being told explicitly.

### Tree-of-thought and self-consistency

Advanced techniques where the model generates multiple reasoning paths and picks the most consistent answer. More expensive (multiple model calls) but more reliable on hard problems.

### ReAct (Reasoning + Acting)

A prompting pattern where the model interleaves reasoning steps with actions (like calling tools or APIs). Foundational for AI agents.

### Prompt chaining

Breaking a complex task into multiple smaller LLM calls, where the output of one becomes input to the next. "First extract the key entities. Then for each entity, look up its definition. Then synthesize a summary." Often more reliable than asking the model to do everything at once.

### Common prompt failure modes

- Underspecified instructions — model guesses at intent and guesses wrong.
- Conflicting instructions — "be concise" and "include all details" in the same prompt.
- Format drift — model occasionally ignores the output format you specified.
- Instruction hijacking — user inputs that override the system prompt (prompt injection).
- Over-prompting — long, complex prompts that confuse the model. Sometimes shorter prompts work better.

**PROMPT ITERATION IS PRODUCT ITERATION**

Treat prompts like product code. Version them, test them, write them in the eval set, and review changes with care. A one-line change to a prompt can shift the entire product's behavior — for better or worse.

**BUILDER'S MOVE**

Don't hand a prompt spec to someone else and wait. Open the model's playground or an AI IDE (Cursor, a notebook, the raw API) and iterate on the real prompt yourself — change one variable at a time, keep the versions that win, and hold a few adversarial inputs on hand. An hour of hands-on prompting teaches you more about the model's edges than a week of reading about prompt patterns.

## Chapter 18 — Retrieval-Augmented Generation (RAG)

RAG is one of the most important patterns in modern AI products. The idea is simple: instead of relying on the model's training data alone, you fetch relevant information from a knowledge source at query time and stuff it into the prompt. The model then generates an answer grounded in that retrieved context.

### Why RAG matters

LLMs have three structural limitations RAG addresses:

1. Knowledge cutoff: Models only know what was in their training data, which has a fixed date. They don't know about events, products, or documents that came after.
2. No private knowledge: A general-purpose model knows nothing about your company's specific docs, your user's specific data, or your industry's specific jargon.
3. Hallucinations: When models don't know something, they often invent plausible-sounding answers. RAG reduces this by giving the model real facts to draw from. RAG is how most useful AI assistants — customer-support bots, internal knowledge search, document Q&A, AI coding tools — actually work.

### How RAG works (the simplified flow)

Six steps, repeated on every query:

1. **User asks a question** — A natural-language query enters the system.
2. **Embed the question** — The query is converted into an embedding — a numerical vector that captures its meaning.
3. **Retrieve relevant chunks** — The embedding is used to search a vector database for the most semantically similar document chunks.
4. **Augment the prompt** — The top retrieved chunks are inserted into the prompt as context, alongside the original question.
5. **Generate the answer** — The LLM produces a response grounded in both the question and the retrieved context.
6. **Cite the sources** — Ideally, the answer references the source documents so users can verify and follow up.

### Key RAG concepts

### Embeddings

An embedding is a list of numbers (often hundreds or thousands long) that represents the semantic meaning of a piece of text. Texts with similar meanings end up close together in this numerical space. Embeddings are how you do semantic search — finding documents that are about the same topic even if they don't share keywords.

### Vector database

A specialized database designed to store embeddings and efficiently find the nearest neighbors to a query embedding. Popular vector DBs: Pinecone, Weaviate, Chroma, Qdrant, plus vector capabilities in Postgres (pgvector) and Elasticsearch. Choice of vector DB is mostly an engineering call; the PM's job is to be clear on the use case requirements (latency, scale, freshness).

### Chunking

Long documents don't fit into the context window all at once, and even if they did, retrieval works better on smaller pieces. So documents are split into chunks (often a few hundred tokens each). Chunking strategy matters a lot for quality: too small and chunks lose context; too large and retrieval becomes noisy.

### Retrieval strategies

- **Semantic search:** Match by meaning (using embeddings).
- **Keyword search:** Match by exact terms (using techniques like BM25).
- **Hybrid search:** Combine both. Often the best in production.
- **Re-ranking:** After initial retrieval, run a more expensive model to reorder top results by relevance.

### Grounding and citation

A well-designed RAG system makes the model cite the documents it used. This lets users verify answers and builds trust. It also gives you a debug surface: when answers are wrong, you can see whether the retrieval failed (wrong documents fetched) or the generation failed (right documents, wrong answer).

### When RAG isn't the right tool

RAG is excellent for factual Q&A and document grounding. It's less useful when:

- The model already knows the answer well (general knowledge tasks).
- The task is generative rather than factual (creative writing, brainstorming).
- The knowledge base is too small to be worth retrieving from.
- You need behavior changes (tone, style, format) rather than knowledge — for that, prompting or fine-tuning is usually better.

**PM CHECKLIST FOR RAG PRODUCTS**

When does retrieval fail? What does the model do when the right document isn't found? How fresh is the index? Can users see the sources? What happens when sources contradict each other? These are the questions that separate a demo from a real product.

**BUILDER'S MOVE**

Stand up a throwaway RAG prototype over a corpus you actually know — a folder of your own docs, a wiki export — using an off-the-shelf framework and a vector store you can spin up in an afternoon. Feel where retrieval breaks (chunking, embedding choice, the long tail of queries) with your own hands before you write a single requirement. The failure modes you discover yourself are the ones you'll design around well.

## Chapter 19 — Fine-Tuning & Model Customization

Fine-tuning is the process of taking a pretrained foundation model and continuing its training on a smaller, more specific dataset — to teach it your task, your style, your domain. For most products, fine-tuning is the third or fourth thing you try, not the first. Understand it well enough to know when to reach for it.

### The spectrum of model customization

From least to most invasive:

1. Prompt engineering — change what you send to the model.
2. Few-shot prompting — add examples to the prompt.
3. RAG — retrieve relevant knowledge at query time.
4. Fine-tuning — change the model's weights.
5. Pretraining a custom model — build from scratch (almost never the right choice for product teams). A useful rule of thumb: try options 1–3 first. They're cheaper, faster to iterate on, and easier to roll back. Move to fine-tuning when you've hit clear ceilings with prompting and retrieval.

### Types of fine-tuning

### Supervised Fine-Tuning (SFT)

You provide thousands of input-output examples in your desired format and style. The model learns to mimic that style. SFT is best when you need consistent format, tone, or domain behavior that prompting alone can't achieve.

### Reinforcement Learning from Human Feedback (RLHF)

Humans rate model outputs as better or worse, and the model is trained to produce outputs humans prefer. This is how modern chat models (including the model writing these words) are turned from raw next-token predictors into helpful assistants. Expensive and complex; usually done at the foundation model level, not by product teams.

### Direct Preference Optimization (DPO)

A newer, simpler alternative to RLHF that achieves similar results with less machinery. Increasingly common.

### LoRA and PEFT (Parameter-Efficient Fine-Tuning)

Techniques that fine-tune only a small subset of model parameters instead of the whole model. Much cheaper, faster, and the resulting "adapter" weights are small enough to swap in and out. Most production fine-tuning uses PEFT methods these days.

### Fine-tuning vs. RAG — when to use which

- **Use RAG when:** The user needs answers grounded in specific, current, verifiable information.
- **Use fine-tuning when:** You need to change the model's behavior, tone, structure, or skill — not just its knowledge.
- **Use both when:** You need a model that has specialized behavior and access to current knowledge. (Common in production.)

### Costs and risks of fine-tuning

- It takes engineering effort to set up and maintain.
- It requires high-quality training data — bad data produces a bad model, no matter the technique.
- It can degrade general capabilities (catastrophic forgetting) — the model may get better at your task and worse at everything else.
- It locks you to a specific base model. If a better foundation model comes out, you have to redo the fine-tuning.
- It creates an asset you have to govern — the fine-tuned model contains traces of your training data, which raises privacy and IP considerations.

**THE PM FINE-TUNING QUESTION**

Before approving a fine-tuning project, ask: "Have we exhausted prompt engineering and RAG? Are we sure this problem is about behavior, not knowledge? Do we have enough high-quality training data? Are we ready to maintain this asset as the foundation models keep improving?" If any answer is no, slow down.

## Chapter 20 — AI Agents & Tool Use

AI agents are LLM-based systems that don't just generate text — they take actions in the world. They plan multi-step tasks, call tools (APIs, databases, code interpreters, the web), observe results, and iterate. Agents are arguably the most important product frontier in AI right now, and also the most likely to disappoint if mismanaged.

### What makes something an agent?

Different people use "agent" differently. A useful working definition: an agent is a system where the LLM decides what to do next based on what just happened. Compare:

- **Workflow / pipeline:** Fixed steps decided by the engineer. Predictable, controllable, easier to test.
- **Agent:** Steps decided by the model at runtime. More flexible, less predictable, harder to evaluate. Most real-world AI "agent" products are actually hybrids — agentic in some parts, deterministic in others. The PM's job is choosing which parts to give the model autonomy over and which to keep on rails.

### Tool use (function calling)

LLMs become much more useful when they can call tools — functions, APIs, databases, search, calculators, code execution, anything. The model is given a list of available tools (each with a name, description, and parameters), and during its response can choose to invoke a tool, receive the result, and continue. This is the foundation of agentic behavior. Modern model APIs have native support for tool calls.

### Common agent patterns

- **ReAct loop:** Model alternates between reasoning (what should I do?) and acting (calling a tool). Loop continues until done.
- **Plan-and-execute:** Model plans the full sequence of steps first, then executes them. More predictable but less adaptive.
- **Multi-agent systems:** Multiple specialized agents collaborate — a planner, a researcher, a writer, a critic. Powerful but complex to debug.
- **Human-in-the-loop:** The agent pauses at key decision points for human approval. Often the right pattern for high-stakes actions like sending emails, making purchases, or modifying files.

### Memory

Agents often need to remember things across turns or sessions. Memory comes in several flavors:

- Short-term: the current context window. Cheap, fast, limited.
- Long-term: stored summaries or facts in a database, retrieved as needed (often a form of RAG).
- Episodic: full transcripts of past interactions.
- Semantic: distilled knowledge learned over time.

### Why agents are hard

- Errors compound. If each step is 90% reliable, a 10-step chain is only 35% reliable.
- Costs add up. Each step is a model call. Long chains can rack up significant token costs.
- Latency stacks. Agentic responses can take many seconds to minutes.
- Debugging is messy. When something goes wrong on step 7, you need clear traces to see what each step decided and why.
- Trust is fragile. One bad action by an agent (deleting the wrong file, sending the wrong email) can destroy user trust in seconds.

**PM PRINCIPLES FOR AGENTS**

Start narrow. Make the smallest agent that adds real value. Constrain the action space — fewer tools, smaller scope. Insist on observability — you must be able to see every step. Add human checkpoints for irreversible actions. Treat agents as a long-term capability investment, not a quarter-end demo.

**BUILDER'S MOVE**

Wire a small agent yourself: one task you do every week, two or three tools, a real framework. Watch it loop, stall, and call the wrong tool — and you'll write guardrails and scope limits from lived experience instead of theory. An AI-native Product Builder earns their intuition for what agents can and can't do reliably by shipping one, even a janky one.

## Chapter 21 — Multimodal AI

"Multimodal" means handling more than one type of data — text, image, audio, video, code. Where early LLMs were text-only, modern models can natively process and generate across modalities. This unlocks an entire new category of product.

### What multimodal models can do

- Look at an image and describe it, answer questions about it, or extract structured information from it (vision-language).
- Listen to audio and transcribe, summarize, or classify it.
- Generate images from text descriptions (text-to-image) — DALL·E, Midjourney, Stable Diffusion.
- Generate audio from text (text-to-speech) — increasingly indistinguishable from human voices.
- Generate video from text or images (text-to-video).
- Process documents that mix text, tables, charts, and images — important for contracts, invoices, medical records, slide decks.

### Vision-language models (VLMs)

VLMs combine image understanding with language. You can paste a screenshot and ask "what's wrong with this UI?" or upload a photo of a fridge and ask "what can I cook?" The current frontier models from major providers are all natively multimodal.

### Speech AI

- **ASR (Automatic Speech Recognition):** Speech-to-text. Used in voice assistants, transcription products, accessibility tools.
- **TTS (Text-to-Speech):** Text-to-speech. Realistic voice generation for narration, voice assistants, language learning.
- **Voice cloning:** Generating speech in a specific person's voice. Powerful and ethically loaded — covered in Part 8.

### Diffusion models for images

Most modern image generators are based on diffusion models. The technique: start with random noise, progressively "denoise" it guided by a text prompt, until a coherent image emerges. Diffusion produces remarkable results and is highly controllable through prompting, image inputs, and tuning. Many image- based AI products use a foundation diffusion model from a provider like Stability AI, Midjourney, or OpenAI.

### Multimodal PM considerations

- Outputs are harder to evaluate. "Is this generated image good?" is more subjective than "is this generated answer correct?"
- Latency and cost are higher than text — images and audio take longer and cost more per generation.
- Failure modes are different. Image models can hallucinate hands with seven fingers. Voice models can produce wrong words confidently. Plan for visible failures, not just silent ones.
- IP and rights questions are sharper. Generating an image "in the style of" a living artist is a different conversation than summarizing a document.
- Storage and bandwidth matter more — multimodal data is large.

**THE MULTIMODAL MOMENT**

If your product is text-only and your competitors aren't, the gap may be closing fast. Conversely, multimodal capability for its own sake is rarely a winning product. Always tie modality choices to genuine user value — does it actually help your user accomplish their goal better, or just look more impressive in a demo?

**FURTHER READING**

### Sources, originators, and where to go deeper.

The frameworks and ideas discussed in this part build on a wider body of work by the people listed below. If a section here matched something you wanted to study more deeply, start with these.

**Attention Is All You Need —** Vaswani et al., 2017 The original Transformer paper. Skim the abstract and figures; the architecture diagrams are worth knowing on sight.

**Language Models are Few-Shot Learners —** Brown et al., 2020 The GPT-3 paper. Where emergent in-context learning entered mainstream PM vocabulary.

**Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks —** Lewis et al., 2020 The original RAG paper.

**Chain-of-Thought Prompting Elicits Reasoning in Large Language Models —** Wei et al., 2022 Why prompting models to "think step by step" works — and where it stops working.

**Hands-On Large Language Models —** Jay Alammar & Maarten Grootendorst A practitioner-friendly walk-through of how modern LLMs are built and used.

**Constitutional AI: Harmlessness from AI Feedback —** Bai et al., 2022 Anthropic's approach to model alignment via written principles.

# Part 7 — Building AI Products in Practice

The PM's playbook for shipping AI features

Five chapters on the practical playbook for shipping AI features — from lifecycle to evals to cost and latency.

AI products are never finished. They get better, drift, surprise, and improve again. The PM's job is to ship something genuinely useful — and then keep it useful.

**IN THIS PART**

22. The AI Product Lifecycle
23. Build vs Buy Decisions
24. Evaluations — The PM's Best Friend
25. Guardrails & Safety
26. Cost, Latency & Performance

## Chapter 22 — The AI Product Lifecycle

Traditional products ship in stages: idea, validation, build, launch, iterate. AI products follow a similar arc but with additional considerations at every stage. Use this as a checklist when you're starting a new AI initiative.

### Stage 1 — Problem framing

Start with the user problem, not the technology. Three diagnostic questions:

- **Is AI actually the right tool?** If a rule-based system, a search bar, or a well-designed form would solve the problem, choose that. AI introduces costs, risks, and unpredictability — earn them through user value.
- **What does "good enough" look like?** Define the quality bar before you build. An AI that's right 70% of the time may be wonderful for brainstorming and unacceptable for medical advice.
- **What happens when the AI fails?** If failure is silent and high-stakes, you need much higher quality. If failure is visible and low-stakes, you can ship sooner and iterate.

### Stage 2 — Feasibility assessment

Build a quick, scrappy prototype to test whether the AI can do the task at all. This isn't the MVP — it's a feasibility test. Try the cheapest option first (a smart prompt on a hosted foundation model), see how it performs, then decide whether to invest more.

### Stage 3 — Proof of Concept (POC)

Once feasibility is confirmed, build something that demonstrates the core value with realistic inputs. The POC isn't production-ready, but it should be good enough to test with friendly users and answer: "if this worked at 80% quality, would users care?"

### Stage 4 — Building the eval set

Before scaling the POC into a product, invest in your evaluation infrastructure. What does "working" mean? How will you measure it consistently as you iterate? This is the single most-skipped step in AI product development, and the single most predictive of long-term success. Chapter 24 is dedicated to this.

### Stage 5 — MVP

The smallest version of the feature that delivers real value to real users. AI MVPs benefit from being scoped tighter than traditional MVPs — narrow user, narrow task, clear failure mode handling. "AI assistant" is a hard MVP. "AI assistant that drafts thank-you notes for our top customers" is a shippable MVP.

### Stage 6 — Limited rollout

Ship to a small fraction of users first — often opt-in or invited. Observe both quantitative metrics (engagement, completion, retention) and qualitative signal (user feedback, support tickets, sample outputs). Use this stage to find edge cases the team didn't anticipate.

### Stage 7 — General availability and iteration

Open to all users with confidence in quality, cost, and safety. Set up ongoing monitoring: model behavior, user behavior, costs, and emerging failures. AI products are never "done" — there's always a prompt improvement, a model upgrade, a new failure pattern. Resource the team for ongoing improvement, not just new features.

**THE HARDEST PART OF AI PRODUCTS**

The leap from impressive demo to reliable product is the steepest part of the curve. Many AI products die in this gap because teams underestimate how much engineering, evaluation, and operational work it takes to handle the long tail of real user inputs. Budget for it.

## Chapter 23 — Build vs Buy Decisions

For nearly every AI feature, there's a make-or-buy decision: do we use a hosted foundation model from a provider, use an open-source model and host it ourselves, fine-tune an existing model, or build something custom from scratch? This is one of the most important strategic decisions an AI PM helps drive.

### The four main options at a glance

| Option | Time to Ship | Cost Model | Best For |
| --- | --- | --- | --- |
| **Hosted API** | Fastest | Per token | Most early products and general-purpose features |
| **Self-hosted open** | Medium | Fixed (GPU-hour) | High volume, regulated data, specialized domains |
| **Fine-tune a model** | Slower | Training + serving | When prompting and RAG have hit a ceiling |
| **Train from scratch** | Months to years | Tens of millions+ | Foundation model labs only — almost never for product teams |

### Each option in detail

### Option 1: Use a hosted foundation model via API

Examples: OpenAI's GPT models, Anthropic's Claude, Google's Gemini, Cohere, Mistral's API. You send a prompt, get a response, pay per token.

- **Pros:** Fastest to ship, no infrastructure to manage, automatic upgrades as the provider improves the model, top-tier quality on general tasks.
- **Cons:** Ongoing per-token cost, vendor lock-in, less control, data leaves your environment unless you use enterprise tiers, model behavior can change without notice.
- **Best for:** Most early-stage AI products, anything where general-purpose capability is sufficient, products where speed-to-market matters more than unit economics at scale.

### Option 2: Self-host an open-source model

Examples: Llama, Mistral, Qwen, DeepSeek, and others. You run the model on your own infrastructure (cloud GPUs or on-prem).

- **Pros:** Data stays in your environment, costs become fixed (or per-GPU-hour) rather than per- token, full control over model and prompt, no surprise upstream changes.
- **Cons:** Real infrastructure burden, requires ML and ops expertise, generally lower quality than the latest closed models on most tasks (though the gap is narrowing fast).
- **Best for:** High-volume use cases where API costs would dominate, regulated industries with strict data residency, specialized domains where fine-tuning matters more than peak general capability.

### Option 3: Fine-tune a base model

Take an open or closed model and customize it on your data. Can be combined with options 1 or 2.

- **Pros:** Specialized behavior, smaller models can match larger ones on your specific tasks, can be a moat over time.
- **Cons:** Training data quality is everything, fine-tunes become liabilities (you have to update them when base models change), ongoing maintenance.
- **Best for:** Cases where prompting and RAG have clearly hit a ceiling, where you have high-quality training data, and where the task is stable enough to justify investment.

### Option 4: Train from scratch

Build your own foundation model. Almost never the right choice for product teams — costs hundreds of millions, requires top research talent, and the base model field moves so fast that what you train today will be eclipsed in months.

- **Best for:** Foundational AI companies themselves, or extremely specialized domains where no general model can do the job. For everyone else, don't.

### How to actually decide

A pragmatic sequencing for most product teams:

1. Start with a top-tier hosted API. Get the user experience right first.
2. Once you have traction, instrument costs and quality carefully.
3. If costs become unsustainable at scale, evaluate self-hosting an open model for your highest- volume calls.
4. If quality plateaus and you've squeezed prompting and RAG, consider fine-tuning.
5. Reassess every 6 months. The frontier moves fast; today's right answer may not be tomorrow's.

### When to lean each way

**Lean toward Buy (hosted API) when:**

- You're still figuring out the product or the user experience.
- Volume is moderate and per-token cost is acceptable.
- You need top-tier quality on general-purpose tasks.
- Your team has no in-house ML or GPU-ops expertise.
- Speed to market is the deciding factor.

**Lean toward Build (self-host or fine-tune) when:**

- Per-token costs would dominate your unit economics at scale.
- Data residency, privacy, or regulation forces it on-prem.
- You have a stable, narrow task where a smaller fine-tuned model wins.
- You have high-quality proprietary data that gives you a real moat.
- Your team has the ML / infra capability to actually operate it.

**PM RED FLAGS IN BUILD-VS-BUY DEBATES**

Watch out for: "We need to own the model" without a clear cost or quality justification. "Open source is free" — it's not, you pay in engineering time and GPUs. "We need to fine-tune" before the team has even tried serious prompt engineering. "We need to train our own" almost ever.

**BUILDER'S MOVE**

Before the build-vs-buy meeting, spend a day building the thinnest real version against an API. A working prototype converts an abstract debate into concrete readings — actual cost per call, latency, and quality on your own data — and an AI-native Product Builder brings that evidence to the table instead of a slide full of assumptions.

## Chapter 24 — Evaluations (Evals) — The PM's Best Friend

If there is one practice that separates good AI products from forgettable ones, it is evaluation. Evals are the systematic measurement of how well your AI system performs. Without them, every change is a vibe check; with them, you can iterate with confidence, compare options, and catch regressions before users do.

### Why evals matter for PMs

In traditional software, tests check whether code behaves as written. In AI software, evals check whether the system produces good outputs — a much harder, fuzzier problem. As the PM, evals are your superpower:

- They turn subjective debates ("is this prompt better?") into objective decisions.
- They catch regressions when the model is upgraded, the prompt changes, or new features are added.
- They make trade-offs visible — improvements in one dimension may degrade another.
- They let you set quality bars for launch decisions.
- They give you a defensible answer to "how good is it?"

### The components of an eval setup

### The eval set (golden dataset)

A curated set of representative inputs your system needs to handle. Build this carefully:

- Cover the main use cases users will actually hit.
- Include edge cases, hard cases, and known failure modes.
- Include cases for each user segment you care about, to catch fairness issues.
- Include adversarial cases — what users might say to test or trick the system.
- Keep growing it as you encounter new real-world examples.

### The metrics

What you measure depends on the task. Common patterns:

- **Exact match:** Did the output equal the expected answer? Works for narrow factual tasks.
- **Reference-based:** How similar is the output to a reference (BLEU, ROUGE, semantic similarity)? Used for translation, summarization.
- **Rubric-based:** Score the output against a multi-dimensional rubric — helpfulness, accuracy, tone, safety, format compliance. Human or LLM judges score outputs against the rubric.
- **Task completion:** For agents, did the system actually accomplish the task? Often the most product-relevant metric.
- **Safety / refusal correctness:** Did the system correctly refuse harmful requests and correctly answer benign ones?

### The judges

- **Human evaluators:** Gold standard, especially for nuanced quality dimensions. Expensive, slow, but irreplaceable for important launches and subjective tasks.
- **LLM-as-judge:** Using another LLM to evaluate outputs against a rubric. Scales much better than human evaluation. Has its own biases — LLM judges often prefer longer answers, can be inconsistent — so validate against human judgment regularly.
- **Programmatic checks:** Automated rules — "does the output contain the user's name?", "is it valid JSON?", "does it stay under 200 words?". Cheap and reliable for things they can measure.

### Types of evals you'll set up

- **Smoke tests:** A small set run on every change, fast and cheap. Catches obvious breakage.
- **Regression evals:** Larger set run before major releases, ensures you haven't broken what was working.
- **Capability evals:** Probes specific skills the product depends on — multi-step reasoning, format compliance, factual accuracy.
- **Safety evals:** Adversarial inputs that test guardrails. Run continuously.
- **A/B evals in production:** Live experiments comparing prompt or model variants on real users.

**THE EVAL DISCIPLINE**

Most teams under-invest in evals because they're tedious to build and the benefits are invisible. The teams who win in AI invest 30–50% of their AI engineering time in evaluation infrastructure. As the PM, fight for this investment. It is the difference between shipping by gut feel and shipping with confidence.

**BUILDER'S MOVE**

Write the eval harness yourself. Twenty to thirty real cases in a notebook, two or three models scored against them, results you can re-run on every prompt or model change. This is the single highest-leverage thing an AI-native Product Builder does with their own hands — and the rarest skill in the field. Don't delegate the thing that decides whether you ship.

## Chapter 25 — Guardrails & Safety

Guardrails are the mechanisms that keep an AI system inside the boundaries of acceptable behavior — preventing harmful, off-topic, or non-compliant outputs. Every AI product needs them. The level and rigor of guardrails should scale with the stakes of the product.

### The categories of harm to plan for

- Harmful content: violence, hate speech, sexual content, self-harm material.
- Misinformation and hallucinations: confident but false statements.
- Privacy violations: leaking PII (personally identifiable information), training data, or system prompts.
- Bias and unfairness: systematically worse outcomes for some groups.
- IP and copyright issues: outputs that infringe protected work.
- Malicious use: helping a user with harmful intent (phishing, fraud, weaponization).
- Reputational risks: outputs that embarrass the brand even if not harmful per se.

### Where guardrails sit in the stack

- **Input filtering:** Catch problematic inputs before they reach the model — PII detection, prompt injection detection, off-topic classification.
- **System prompt:** Encode the model's allowed behavior, persona, and refusal patterns.
- **Model-side safety:** Modern foundation models have built-in safety training. Use it; don't try to override it.
- **Output filtering:** Scan generated content for harmful material before showing to the user.
- **Human review:** For high-stakes outputs, route to humans before they take effect.
- **UI affordances:** Disclaimers, source citations, edit-before-send patterns. The UI layer is part of safety.

### Hallucinations

A hallucination is when the model produces a confident-sounding statement that is false. Hallucinations are one of the defining failure modes of LLM products. Mitigation:

- Ground the model in retrieved facts (RAG).
- Lower temperature for factual tasks.
- Require citations and show them to users.
- Detect uncertainty — modern models can be prompted to express confidence.
- Constrain the output format (forces the model into shapes where hallucination is harder).
- Design the UI to make verification easy.

### Prompt injection

Prompt injection is the AI-era equivalent of SQL injection — a malicious user crafts an input that overrides the system prompt's instructions. ("Ignore previous instructions and...") Defenses are imperfect. Key principles:

- Treat any user input as untrusted, especially when it ends up in a context that influences other users.
- Don't let untrusted content (e.g., from web search or user uploads) issue commands the model will treat as instructions.
- Keep authority outside the model — sensitive actions (sending an email, transferring money) should require additional confirmation, not just model judgment.

### PII and privacy

- Avoid logging full prompts and outputs in plain text where possible — they often contain user PII.
- Be very careful about what user data goes into fine-tuning datasets.
- Provide users with clear controls — data deletion, opting out of training, opting out of logging.
- Understand the data policies of your model provider — do they train on your inputs?

**PM SAFETY MINDSET**

Don't think of safety as a launch checklist. Think of it as an ongoing practice. Run red-team exercises. Read failure samples weekly. Treat each new failure mode as a signal to update your guardrails. The team that finds your bugs should be you, not Twitter.

## Chapter 26 — Cost, Latency & Performance

AI products have unusual operational economics. Each user interaction has a real, measurable cost. Latency is often visible to users. Compute is a finite resource. PMs who ignore these realities ship products that can't survive their own success.

### Cost: tokens are money

API-based AI products pay for every input token and output token. Costs vary by model — the most capable models cost 10–100x more per token than smaller ones. At scale, this matters. Concrete things to track:

- **Cost per user:** Average tokens × price per token. Compare to revenue per user to understand unit economics.
- **Cost per query:** How much does a single feature use cost? Especially important for high-traffic features.
- **Cost trajectory:** Are costs growing faster, slower, or in line with revenue? Watch this monthly.
- **Cost concentration:** Often a small fraction of users drive a large fraction of cost. Identify them and decide how to handle it.

### Strategies to manage cost

- **Model routing:** Send easy queries to small, cheap models and hard ones to capable, expensive models. Often 70–90% of queries can use the cheap path.
- **Caching:** Cache responses for repeated queries. Especially powerful for FAQ-style features.
- **Prompt compression:** Shorter system prompts and tighter contexts reduce token costs.
- **Output limits:** Cap response lengths where appropriate.
- **Batching:** Some providers offer cheaper rates for batched, non-real-time work.
- **Fine-tuning smaller models:** Once a use case is proven, a fine-tuned small model can often replace a large one at a fraction of the cost.
- **Rate limiting per user:** Prevents extreme outliers from blowing the budget.

### Latency: time is UX

LLM responses are slow compared to traditional software. A complex generation can take seconds, sometimes minutes. Three latencies matter:

- **Time-to-first-token (TTFT):** How long before the user sees anything. Streaming responses make this the most important latency metric.
- **Total response time:** How long until the full output arrives.
- **Agent latency:** For multi-step agents, total time can balloon. Each step adds delay.

### Strategies to manage latency

- **Streaming:** Send tokens as soon as they're generated. Makes 5-second responses feel like 0.5- second ones.
- **Smaller models for latency-sensitive paths:** Trade some quality for speed where appropriate.
- **Parallel calls:** If you have multiple independent LLM calls, run them in parallel, not in sequence.
- **Progressive disclosure:** Show partial results, then refine. Users will tolerate longer waits if they see something happening.
- **Optimistic UI:** Let the user move on while the AI works in the background.

### Reliability and degradation

Model APIs go down. Models get deprecated. New versions behave differently. Plan for it:

- Build fallback paths — if model A fails, can you route to model B?
- Pin model versions when possible to avoid silent behavior shifts.
- Monitor for sudden behavior changes after model updates.
- Have graceful degradation — when the AI can't respond, what does the user see?

**THE UNIT ECONOMICS MOMENT**

Most AI products are launched without clear unit economics. That's fine for the first 100 users. It becomes a crisis at 100,000. As PM, ask the cost question early and often — not because it's the only thing that matters, but because not asking is the fastest way to build a feature you can't afford to scale.

**FURTHER READING**

### Sources, originators, and where to go deeper.

The frameworks and ideas discussed in this part build on a wider body of work by the people listed below. If a section here matched something you wanted to study more deeply, start with these.

**AI Engineering —** Chip Huyen A 2025 follow-up to "Designing ML Systems" focused on LLM and foundation-model products.

**Building LLMs for Production —** Louis-François Bouchard & Louie Peters A practitioner overview of the build patterns covered in this part — evals, guardrails, cost, latency.

**The Generative AI Handbook —** Maxime Labonne A free, actively-maintained reference covering open-source LLMs, fine-tuning, and serving.

**One Useful Thing —** Ethan Mollick A weekly newsletter on practical generative-AI use cases — the closest thing to a "PM newsroom" for this space.

# Part 8 — Responsible AI & Ethics

What every AI PM must take seriously

Two chapters on the responsibilities that come with shipping AI products — fairness, transparency, privacy, and regulation.

Responsible AI isn't a separate workstream. It's a property of the product, just like performance or usability. PMs own it.

**IN THIS PART**

27. Bias, Fairness & Transparency
28. Privacy, IP & Regulation

## Chapter 27 — Bias, Fairness & Transparency

AI systems reflect the data they were trained on, and that data reflects the world — including its inequalities and prejudices. When we ship AI products at scale, we encode those patterns into decisions that affect millions of people. Responsible AI is the practice of building systems that minimize harm, treat users fairly, and remain understandable enough that mistakes can be caught and corrected.

### Sources of bias in AI systems

- **Training data bias:** The data over-represents some groups and under-represents others. A facial recognition system trained mostly on lighter-skinned faces will work worse on darker-skinned ones.
- **Historical bias:** Even balanced data captures historical discrimination. A model trained on past hiring decisions learns past hiring patterns — including the biased ones.
- **Measurement bias:** The way the target variable is measured doesn't capture what we really care about. Using "arrests" as a proxy for "crimes" embeds the bias of who gets arrested, not just who commits crimes.
- **Aggregation bias:** A single model treats heterogeneous groups as if they were the same, performing poorly on subgroups.
- **Deployment bias:** A model designed for one purpose is used for another, drifting from its original intent.

### Fairness — and why it's hard

There is no single agreed-upon definition of fairness in AI. Different formal definitions are mutually incompatible — you can't satisfy all of them simultaneously. PMs need to engage with this honestly. Some common fairness criteria:

- **Demographic parity:** The model's positive predictions are distributed equally across groups.
- **Equal opportunity:** Among people who deserved a positive outcome, the rate of getting one is equal across groups.
- **Equalized odds:** Both true positive and false positive rates are equal across groups.
- **Individual fairness:** Similar individuals receive similar predictions. Pick the definitions that fit your product's context, document why, and measure against them.

### Transparency and explainability

Users (and regulators) increasingly expect to understand how AI systems make decisions. Levels of transparency a product can offer:

- Disclosure that AI is being used at all.
- High-level explanation of how decisions are made.
- Per-decision explanations of why this answer was produced.
- Source citations for factual answers.
- Underlying data and model documentation for technical audiences.
- Independent audit access for external evaluation. Modern LLMs are not fully explainable in a deep technical sense — we can describe what they do, but not exactly why each output emerged. Be honest about this rather than oversell explainability.

### Accountability

When the AI gets it wrong, who is responsible? Strong AI PMs make sure this question has an answer before the wrong-going happens. Mechanisms:

- Clear ownership of model behavior within the team.
- Logged decisions that can be reviewed after the fact.
- User-accessible appeal mechanisms — "I think this was wrong, what now?"
- A documented escalation path for serious issues.
- Public communication channels for users to report problems.

### The PM's role in fairness

Fairness is not the responsibility of a separate Responsible AI team — it's a product property the PM owns. Concrete things to do:

1. Identify the user populations your product affects. Be explicit, not abstract.
2. Build evaluations that measure performance per population, not just in aggregate.
3. Set fairness criteria before launch, not after a complaint.
4. Talk to affected users directly, especially those most likely to be harmed.
5. Bring diverse perspectives into the team — including in roles that influence the product, not just in advisory positions.

**A REALITY CHECK**

Most AI fairness failures are not malicious. They are the result of teams not thinking carefully about who will be affected and how. The cure is mostly process and attention, not heroic technical work. The PM who consistently asks "who gets hurt if this is wrong?" prevents most fairness failures.

## Chapter 28 — Privacy, IP & Regulation

Beyond fairness, three external pressures shape what AI PMs can and can't ship: privacy regulation, intellectual property law, and emerging AI-specific regulation. The landscape is moving fast. PMs don't need to be lawyers, but they need to know what to watch for.

### Privacy and personal data

Most jurisdictions have privacy regulations governing how personal data can be collected, processed, and stored. Key principles you'll encounter:

- **Consent:** Users should know and agree to how their data is used.
- **Purpose limitation:** Data collected for one purpose shouldn't be quietly used for another.
- **Data minimization:** Collect only what you need.
- **Right to deletion:** Users should be able to have their data removed.
- **Right to access and portability:** Users should be able to see and export their data.

### AI-specific privacy questions

- Did users consent to their data being used for training AI models?
- If a user requests deletion, can you actually remove their influence from a trained model? (Generally, no — which is why training data choices matter so much upfront.)
- Does your AI provider train on your inputs by default? Many enterprise tiers offer no-training guarantees; consumer tiers often don't.
- Are PII or confidential business data flowing into prompts in ways the user didn't expect?

### Intellectual property

Two big IP questions hang over AI products:

- **Training data IP:** Many foundation models were trained on copyrighted content. Whether this is fair use is the subject of active litigation around the world. As a PM building on top of foundation models, you generally rely on the model provider's terms — but the legal ground may shift.
- **Generated content IP:** Who owns the output of an AI system? In most jurisdictions, purely AI- generated content isn't copyrightable, while AI-assisted human work usually is. Generated images can also resemble copyrighted characters or styles in ways that raise infringement risk.

### AI regulation — the global picture

Several major regulatory frameworks are in motion. The PM job is to know roughly what each requires and to flag any product feature that might trigger scrutiny.

### EU AI Act

The most comprehensive AI regulation to date. It takes a risk-based approach, categorizing AI systems into unacceptable risk (banned), high risk (heavy compliance requirements), limited risk (transparency obligations), and minimal risk (largely unregulated). High-risk categories include uses in employment, education, credit, law enforcement, and critical infrastructure. PMs working in these areas should consult with legal early.

### United States

The US has a patchwork of federal and state activity rather than a single comprehensive law. The federal approach has emphasized voluntary commitments and agency-level guidance, while states like California and Colorado have begun passing their own AI laws — particularly around algorithmic decision-making in consequential domains and transparency for AI-generated content.

### Industry-specific regulation

- **Healthcare:** HIPAA in the US, plus FDA medical device rules for diagnostic or clinical-decision- support AI.
- **Finance:** Fair lending rules, model risk management requirements, sectoral guidance from banking regulators.
- **Employment:** Increasing regulation of AI in hiring decisions (New York City's local law is an early example).
- **Education:** FERPA in the US, plus growing rules on AI in K–12 and higher education.

### Disclosure and labeling

A growing expectation — and increasingly a legal requirement — is that AI-generated content be labeled as such. This includes deepfakes, AI-written text in certain contexts, and AI-generated decisions affecting people. Many platforms also require disclosure of AI use. Design your product with disclosure in mind from the start.

### The deepfake and voice cloning problem

Generative AI has made it cheap to create convincing fake images, audio, and video of real people. This creates serious risks: fraud, harassment, disinformation, electoral manipulation. PMs building generative products should treat consent and likeness rights as core safety considerations, not afterthoughts. Provenance tools (watermarks, content credentials) help but are not foolproof.

**THE PM COMPLIANCE POSTURE**

You are not a lawyer, but you are the person who knows what the product actually does. Get to know your legal and compliance teams early. Bring them in during design, not at launch. The cost of building a feature wrong is much higher than the cost of an extra consultation.

### Building a culture of responsibility

Responsible AI isn't a binder of policies; it's a set of habits across the team. The habits that matter most:

- Reviewing real model outputs (especially failures) regularly, together.
- Running pre-mortems on new features: "how might this be misused?"
- Welcoming concerns from engineers, designers, support, and operations — not just from a designated ethics function.
- Building product surfaces that let users push back — corrections, reporting, opt-outs.
- Documenting decisions: why we shipped this, what trade-offs we accepted, what we'd revisit.

If you build powerful systems, you owe powerful care.

**FURTHER READING**

### Sources, originators, and where to go deeper.

The frameworks and ideas discussed in this part build on a wider body of work by the people listed below. If a section here matched something you wanted to study more deeply, start with these.

**Weapons of Math Destruction —** Cathy O'Neil A foundational text on how data-driven systems concentrate harm against the people they affect most.

**Algorithms of Oppression —** Safiya Umoja Noble On how search and recommendation systems encode and amplify bias.

**Atlas of AI —** Kate Crawford A sweeping look at the physical, political, and economic systems that AI is built on.

**The Ethical Algorithm —** Michael Kearns & Aaron Roth On embedding values like fairness and privacy directly into algorithms.

**AI Snake Oil —** Arvind Narayanan & Sayash Kapoor A useful counterweight to AI hype, especially in high-stakes domains.

**NIST AI Risk Management Framework —** US National Institute of Standards and Technology A widely-cited reference for AI risk governance in commercial settings.

# Part 9 — AI Product Management Glossary

The vocabulary of modern AI products

A focused reference of modern AI and LLM terminology — from Agent to Zero-Shot.

Half of being an effective AI PM is knowing what your engineers and researchers are actually talking about. The other half is asking the questions they haven't thought of yet.

This glossary covers the language of modern AI — from foundational ML concepts to the specific jargon of generative AI, LLMs, and agentic systems. Some terms overlap with general ML; others are specific to the post-2022 generative AI era. When in doubt, look it up here, then ask your team to explain how it applies in your specific context.

### A

- **Activation Function** — A mathematical function inside a neural network that decides how much signal passes from one layer to the next. Common examples: ReLU, sigmoid, tanh, GELU. Mostly an engineering detail but useful to recognize.
- **Agent** — An AI system that can take actions in an environment to accomplish goals — typically by calling tools, executing code, or making API calls based on its reasoning. The defining shift from chatbots: agents do things, not just say things.
- **Agentic Workflow** — A multi-step process where an LLM plans, acts, observes results, and iterates — as opposed to a single prompt-and-response. Examples: research assistants that browse and synthesize, coding agents that write and test, deep research tools.
- **AGI (Artificial General Intelligence)** — A hypothetical AI system with human-level cognitive abilities across virtually all domains. Distinct from narrow AI, which is specialized. Definitions vary widely and the term is contested.
- **AI-native Product Builder** — An AI-native Product Manager who goes the extra mile in execution, using AI tooling to prototype, build, and ship — not just to define and manage. In formula form: AI-native Product Builder = AI-native Product Manager + high execution leverage from AI tooling. The aspirational identity this handbook is built around.
- **AI-native Product Manager** — The modern AI Product Manager this handbook teaches: one who thinks natively in probabilistic systems, evals, and model trade-offs rather than treating AI as a bolt-on. Used interchangeably with "AI PM" here; add hands-on execution with AI tooling and you get an AI-native Product Builder.
- **Alignment** — The field and practice of making AI systems behave in accordance with human values and intentions. Includes technical alignment (does the model do what we asked?) and broader questions (whose values?).
- **Attention** — The mechanism in transformer models that lets the network weigh which tokens in the input matter most for predicting the next token. The conceptual breakthrough behind modern LLMs ("Attention Is All You Need," 2017).

### B

- **Backpropagation** — The algorithm neural networks use to learn — propagating prediction errors backward through the network to update weights. The mathematical engine of nearly all modern deep learning.
- **Batch Inference** — Processing many inputs together in one model call rather than one at a time. Cheaper per request but introduces latency, since you must wait for the batch to fill.
- **Benchmark** — A standardized test used to compare model performance. Examples: MMLU (general knowledge), HumanEval (coding), GSM8K (math), HellaSwag (commonsense). Useful but easily gamed — always look at task-specific evals too.
- **Bias (in ML)** — Two distinct meanings. (1) Statistical bias: systematic error in predictions. (2) Fairness bias: unfair behavior toward certain groups, often inherited from training data.

### C

- **Catastrophic Forgetting** — When fine-tuning or continued training causes a model to lose capabilities it previously had. A core challenge in continual learning.
- **Chain-of-Thought (CoT)** — Prompting a model to show its reasoning step by step before answering. Often improves accuracy on complex tasks. "Let's think step by step" is the canonical trigger phrase.
- **Chunking** — Splitting documents into smaller pieces before storing them in a vector database for retrieval. Chunk size, overlap, and boundary strategy all affect RAG quality more than most teams realize.
- **Classifier** — A model that assigns inputs to discrete categories (spam vs. not spam, dog vs. cat). One of the oldest and most useful ML patterns.
- **Closed-Source Model** — A model whose weights are not publicly available. You access it via API only. Examples include GPT-class models from OpenAI and Claude from Anthropic.
- **Compute** — The processing power (typically GPU hours) used to train or run a model. Often the dominant cost in AI products.
- **Confabulation** — Another word for hallucination — when a model invents plausible-sounding but false information. Some researchers prefer this term because it's closer to the human cognitive phenomenon.
- **Context Window** — The maximum number of tokens a model can consider at once — including the prompt, conversation history, retrieved documents, and the response. Context windows have grown from ~2K tokens to over 1M in recent years.

### D

- **Data Augmentation** — Synthetically expanding a training dataset — rotating images, paraphrasing text, etc. — to improve model robustness.
- **Data Drift** — When the statistical properties of real-world data shift over time, causing model performance to degrade. A model trained on 2022 search queries may underperform on 2026 queries.
- **Deep Learning** — Machine learning using neural networks with many layers. Dominant approach for vision, language, and most modern AI.
- **Diffusion Model** — A generative model that learns to reverse a noising process — starting from random noise and gradually denoising into an image, video, or audio. The architecture behind most modern image generators.
- **Distillation** — Training a smaller, cheaper model to mimic the behavior of a larger one. Common technique for making frontier capabilities usable in latency- or cost-constrained environments.

### E

- **Embedding** — A numerical representation of text, images, or other data as a high-dimensional vector, such that similar things have similar vectors. The foundation of semantic search and RAG.
- **Embedding Model** — A model specifically designed to produce embeddings (rather than generate text). Often smaller and cheaper than full LLMs.
- **Emergence** — Capabilities that appear in larger models but were absent in smaller ones — sometimes seemingly without explicit training for them. The existence and nature of emergence is debated.
- **Eval (Evaluation)** — A test or test suite measuring model performance on a specific task. In AI PM, building good evals is often more valuable than tweaking prompts — they're the unit tests of AI products.
- **Explainability** — The ability to understand why a model produced a particular output. Distinct from interpretability (understanding how the model works internally).

### F

- **Few-Shot Learning** — Including a small number of examples in the prompt to teach the model the task. Surprisingly effective for many use cases. Compare to zero-shot (no examples) and many-shot (dozens or hundreds).
- **Fine-Tuning** — Further training a pre-trained model on a smaller, task-specific dataset to specialize it. Approaches include full fine-tuning, LoRA, and PEFT methods.
- **Foundation Model** — A large, general-purpose model trained on broad data that can be adapted to many downstream tasks. GPT, Claude, Gemini, and Llama are foundation models.
- **Frontier Model** — The current state-of-the-art models — typically the largest, most capable systems from leading AI labs. The frontier moves every few months.

### G

- **GAN (Generative Adversarial Network)** — An older generative model architecture where two networks compete: one generates fakes, another tries to detect them. Mostly superseded by diffusion and transformer-based approaches for new applications.
- **Generative AI (GenAI)** — AI systems that produce new content — text, images, audio, video, code — rather than just classifying or predicting. The dominant paradigm of the current AI wave.
- **GPU (Graphics Processing Unit)** — The hardware most AI training and inference runs on, because GPUs are very good at the parallel math (matrix multiplication) that neural networks need. Nvidia dominates this market.
- **Grounding** — Connecting a model's responses to verifiable sources, usually via retrieval. A model that quotes from a retrieved document is grounded; one inventing facts is not.
- **Guardrails** — Safety mechanisms layered around a model — content filters, prompt validators, output classifiers, refusal patterns — to prevent harmful or off-policy behavior.

### H

- **Hallucination** — When a model generates plausible-sounding content that is factually wrong or fabricated. Reducing hallucination is one of the central engineering challenges in AI products.
- **Hugging Face** — A platform and ecosystem hosting open-source models, datasets, and tools. The de facto GitHub of the open AI community.
- **Human-in-the-Loop (HITL)** — A system design where humans review, correct, or approve AI outputs at key decision points. The right answer for most high-stakes AI products.
- **Hyperparameter** — Configuration settings of a model that aren't learned from data — learning rate, batch size, number of layers, temperature at inference. Tuned through experimentation.

### I

- **In-Context Learning** — The ability of LLMs to learn from examples provided in the prompt at inference time, without updating weights. Few-shot prompting is the most common form.
- **Inference** — Running a trained model on new inputs to produce outputs. Distinct from training. Inference is what users pay for and what cost optimization usually targets.
- **Instruction Tuning** — Fine-tuning a base model on examples of instructions and desired responses to make it follow user requests rather than just predicting next tokens.
- **Interpretability** — The science of understanding how models work internally — what features they detect, how concepts are represented, why specific decisions get made. An active and rapidly evolving research area.

### J

- **Jailbreak** — A prompt or technique that bypasses a model's safety guardrails to make it produce content it was trained to refuse. A persistent cat-and-mouse problem.
- **JSON Mode** — An API feature that constrains a model's output to valid JSON, often conforming to a provided schema. Critical for production AI workflows that need structured outputs.

### K

- **Knowledge Cutoff** — The date after which a model's training data ends. The model has no native knowledge of events afterward unless given via retrieval or search.
- **Knowledge Distillation** — See Distillation.

### L

- **Latency** — The time from sending a request to receiving a response. In AI products, perceived latency matters enormously — streaming tokens can make a slow generation feel fast.
- **LLM (Large Language Model)** — A neural network trained on massive amounts of text to predict the next token. Modern LLMs use the transformer architecture and have billions to trillions of parameters.
- **LoRA (Low-Rank Adaptation)** — A popular parameter-efficient fine-tuning method that trains a small number of additional weights rather than updating the whole model. Cheap, fast, and surprisingly effective.
- **Loss Function** — The mathematical function a model tries to minimize during training. The choice of loss function shapes what the model learns.

### M

- **Memory (Agent Memory)** — Mechanisms that let an agent retain information across interactions or turns — short-term (in-context), long-term (vector storage of past conversations), or episodic (specific event recall).
- **MLOps** — The discipline of operating ML systems in production — data pipelines, model versioning, deployment, monitoring, retraining. The ops counterpart to DevOps for AI.
- **MCP (Model Context Protocol)** — An open protocol for connecting AI models to tools and data sources in a standardized way. Increasingly common as the wiring layer for agentic systems.
- **Mixture of Experts (MoE)** — A model architecture where only a subset of the network activates for any given input, allowing very large total parameter counts with manageable inference costs. Used in several frontier models.
- **Modality** — The type of data a model handles — text, image, audio, video, etc. A unimodal model handles one; a multimodal model handles several.
- **Multimodal** — Able to process or produce more than one type of data. Modern frontier models are typically multimodal across text, image, and audio at minimum.

### N

- **Neural Network** — A model loosely inspired by biological neurons — layers of simple units whose connections have learned weights. The foundation of essentially all modern AI.
- **NLP (Natural Language Processing)** — The field of getting computers to work with human language. Largely subsumed by LLMs in the 2020s, though classical NLP techniques still matter for specific tasks.

### O

- **Open-Source Model** — A model whose weights are publicly available, sometimes under permissive licenses. Llama, Mistral, and Qwen are well-known examples. Terms vary — "open weights" is more precise than "open source."
- **Overfitting** — When a model learns the training data too specifically and fails to generalize. The classic failure mode of supervised learning.

### P

- **Parameters** — The learned weights of a model. Often used as a rough proxy for capability and cost — a 70B parameter model is bigger than a 7B one. Less meaningful when comparing across architectures.
- **PEFT (Parameter-Efficient Fine-Tuning)** — A family of methods (including LoRA) that fine-tune only a small fraction of model parameters, dramatically reducing compute and storage costs.
- **Perplexity** — A metric measuring how surprised a model is by text. Lower perplexity means better language modeling. Also the name of a popular AI search product.
- **Pre-training** — The initial, very expensive training of a foundation model on a large general dataset. Usually followed by fine-tuning or RLHF for specific use cases.
- **Prompt** — The input given to a language model. The art of writing effective prompts is prompt engineering.
- **Prompt Engineering** — The practice of crafting prompts to get reliable, high-quality outputs from a model. Includes role-setting, examples, formatting instructions, and chain-of-thought triggers.
- **Prompt Injection** — An attack where malicious input causes a model to ignore its original instructions and follow attacker instructions instead. The OWASP #1 vulnerability for LLM applications.

### Q

- **Quantization** — Reducing the precision of model weights (e.g., from 16-bit to 4-bit) to shrink memory footprint and speed up inference, usually with small accuracy trade-offs.

### R

- **RAG (Retrieval-Augmented Generation)** — Combining a language model with a retrieval system: when a user asks something, relevant documents are fetched and inserted into the prompt before generation. The default architecture for grounding models on private data.
- **Reasoning Model** — An LLM specifically trained or prompted to do extended chain-of-thought reasoning before producing a final answer. Examples include OpenAI's o-series and DeepSeek R1. Trades latency for accuracy on hard problems.
- **Recall** — (1) In ML metrics, the fraction of true positives correctly identified. (2) In RAG, whether the right document was retrieved at all.
- **Reinforcement Learning (RL)** — Learning by trial and error with rewards. The technique behind game- playing AI like AlphaGo and a key component of modern LLM post-training.
- **RLHF (Reinforcement Learning from Human Feedback)** — A training technique where humans rank model outputs, and the model is updated to produce more highly-ranked responses. The dominant approach to making LLMs helpful, harmless, and honest.
- **Robustness** — How well a model handles inputs that are unusual, adversarial, or different from training data.

### S

- **SFT (Supervised Fine-Tuning)** — Fine-tuning a model on labeled input-output pairs. Typically the first step of post-training, before preference-based methods like RLHF.
- **Semantic Search** — Search based on meaning rather than keywords, typically powered by embeddings. The technical underpinning of most modern RAG systems.
- **Streaming** — Returning a model's tokens as they're generated rather than waiting for the full response. Critical UX pattern — turns a slow generation into a fast-feeling one.
- **System Prompt** — Special instructions given to a model that shape its behavior across an entire conversation — its role, constraints, tone, and policies. Distinct from user messages.

### T

- **Temperature** — A parameter at inference time controlling output randomness. Temperature 0 is deterministic; higher values produce more varied (and creative, or unhinged) outputs.
- **Tensor** — A multi-dimensional array. The fundamental data structure of deep learning. (Hence: TensorFlow, PyTorch tensors.)
- **Test-Time Compute** — Spending more compute at inference — through extended reasoning, multiple samples, or search over candidate outputs — to improve quality. A major axis of scaling in 2024 onward.
- **Token** — The unit of text a language model processes. Roughly four characters or three-quarters of a word in English. You pay per token, your context window is measured in tokens, and your latency depends on tokens generated.
- **Tool Use** — When a model calls external functions or APIs — searching the web, running code, querying a database — as part of producing an answer. The mechanic that turns LLMs into agents.
- **Top-k / Top-p Sampling** — Strategies for choosing the next token from the model's probability distribution. Top-k picks from the k most likely tokens; top-p (nucleus sampling) picks from the smallest set whose cumulative probability exceeds p.
- **Training Data** — The corpus a model learns from. Quality, diversity, and licensing of training data shape everything downstream.
- **Transformer** — The neural network architecture introduced in 2017 that underlies essentially all modern LLMs. Built around self-attention. The T in GPT.

### U

- **Unsupervised Learning** — Learning patterns from unlabeled data. Pre-training of LLMs is largely unsupervised — they learn from raw text without labels.

### V

- **Vector Database** — A database optimized for storing and querying embeddings. Examples include Pinecone, Weaviate, Qdrant, Milvus, and pgvector (Postgres extension). The storage layer of most RAG systems.
- **Vision-Language Model (VLM)** — A multimodal model that handles both images and text together. Can answer questions about images, generate captions, read documents, etc.

### W

- **Weights** — The learned numerical values inside a neural network that determine its behavior. "Open- weight model" means the weights are downloadable.
- **Window (Context Window)** — See Context Window.

### Z

- **Zero-Shot** — Asking a model to perform a task with no examples in the prompt — relying entirely on its pre-trained knowledge. The opposite of few-shot.

**HOW TO USE THIS GLOSSARY**

Don't try to memorize. Scan it once, then return whenever you hit an unfamiliar term in a paper, podcast, or planning meeting. The vocabulary settles in through use. If a term you encountered isn't here, that's a signal it's either very new or very niche — both worth a deeper look.

# Part 10 — Career Path & Resources

From learning to landing the role

Two chapters on becoming an AI PM, and the books, courses, and communities that will sharpen the craft over time.

The best AI PMs in five years will be the ones who started building today — not the ones who waited to feel ready.

**IN THIS PART**

29. Becoming an AI-native Product Builder
30. Learning Resources

## Chapter 29 — Becoming an AI-native Product Builder

If you've read this far, you have a stronger conceptual foundation than most people calling themselves AI PMs on LinkedIn. But knowing the vocabulary isn't the same as doing the work — and the destination isn't just the AI PM title, it's becoming an **AI-native Product Builder** who executes with AI tooling, not just talks about it. This chapter is about closing that gap — turning understanding into the kind of demonstrated, hands-on capability that gets you hired.

### Paths into AI Product Management

There is no single path. The people doing this job today came from at least five different backgrounds, and each route brings different strengths and gaps.

### From traditional Product Management

The most common path. You already know discovery, prioritization, roadmapping, and stakeholder management — the hard parts of being a PM. What you need is the AI literacy: how models actually work, what they can and can't do, what evaluation looks like, what failure modes you should worry about. This handbook is largely written for you.

Your biggest risk is staying surface-level. The PMs who succeed don't just learn the jargon; they get hands- on enough to develop intuition for what's hard, what's easy, and what's a hallucinated capability claim from a vendor.

### From engineering or data science

You have the technical depth that traditional PMs are racing to acquire. What you need is the product muscle: talking to users without leading them, prioritizing without false precision, communicating with stakeholders who don't speak in tensors. Read the PM half of this handbook carefully, then practice the work — not just consume content about it.

Your biggest risk is over-indexing on what's technically interesting versus what users actually need.

### From research

If you've been doing ML research or in a research-adjacent role, you understand models more deeply than most. The shift to PM is about scope and incentive: from "can this work" to "should we build this, for whom, and what does success look like." The leap is real but very learnable.

### From design

Designers moving into AI PM bring something genuinely scarce: a feel for the human side of probabilistic interfaces. AI products break design conventions — outputs are non-deterministic, latency varies, errors are different from traditional bugs. If you can think about how to design around those realities, you have a serious edge.

### From founder or operator roles

If you've shipped product before — even as a founder, COO, or operator without the PM title — you already know most of what matters. Frame your experience in PM language and double down on the AI- specific concepts.

### Skills to build, in order

1. Build a working mental model of how LLMs and modern ML systems work. Not at the math level — at the "I can predict roughly how this will fail" level.
2. Get hands-on. Build something. A RAG app over your notes. A small evaluation harness. A multi- step agent for a workflow you do every week. The act of building changes how you think.
3. Learn to write and ship good evals. This is the rarest and most valuable AI PM skill — and it's almost entirely absent from generic PM training.
4. Develop product judgment for probabilistic systems: when to use AI at all, when to keep humans in the loop, how to handle the long tail of failures.
5. Sharpen the classic PM fundamentals: discovery, prioritization, roadmapping, metrics, communication. These don't go away. They get more important.
6. Build a working understanding of cost, latency, and infrastructure. You don't need to deploy models, but you need to be able to estimate whether a feature is feasible at your scale and price point.
7. Learn the responsible AI landscape — bias, privacy, regulation. Increasingly part of the day-to-day, not a separate function.

### Portfolio projects that get you taken seriously

If you don't yet have AI PM experience, build artifacts that show you've done the work. A few that consistently land:

- **A working RAG application** Pick a corpus you care about (your blog archive, a hobby community's documentation, a public dataset). Build a retrieval system, evaluate it, write up what you learned about chunking, embedding choice, and failure modes. The write-up matters as much as the demo.
- **An eval harness for a real task** Pick a task an LLM should be able to do (summarizing meeting notes, classifying support tickets, extracting structured data from documents). Build twenty or thirty test cases, run three or four models against them, score the results, and publish a comparison. This single project demonstrates the AI PM mindset better than anything else.
- **A teardown of a public AI product** Pick a product (a coding assistant, a search tool, an AI feature inside a SaaS app), use it for a week, and write a teardown: what's it trying to do, where does it succeed, where does it fail, what would you change, what evals would you build? Show your reasoning.
- **A small agent for your own workflow** Build a multi-step agent that does something genuinely useful for you — research, drafting, data extraction. Document the iteration. What broke? What did you change? What's the failure mode you couldn't fully solve?
- **A teaching artifact** Write a deeply researched essay or thread explaining an AI concept to a non- technical audience. Teaching forces clarity, and quality writing is one of the most reliable career levers in this field.

### Interview preparation

AI PM interviews vary widely. Many companies still use general PM interview formats with AI awareness layered on top. Others have specific AI rounds. Common question shapes:

- Product sense: "Design an AI feature for [company's main product]." Your answer should include who it's for, what specific problem it solves, why AI is the right approach (or whether it actually is), what failure modes you'd expect, and how you'd measure success.
- Technical depth: "Explain how a transformer works," or "When would you use RAG versus fine- tuning?" You don't need to lecture at PhD depth — you need to show you understand the trade- offs.
- Evaluation: "How would you evaluate a customer support AI?" This is where a lot of candidates fall apart. Strong answers cover: what tasks the system needs to handle, what good looks like for each, how you'd build a test set, what metrics matter beyond accuracy (latency, cost, escalation rate, customer satisfaction), and how you'd handle the long tail.
- Strategy: "Should we build our own model or use an API?" There's no right answer — interviewers want to hear you reason about cost, control, latency, data sensitivity, differentiation, and team capability.
- Behavioral: standard PM questions about prioritization, stakeholder conflict, hard decisions. AI doesn't change these much.

### Demonstrating capability without a job title

The chicken-and-egg problem of breaking into AI PM is real — but more surmountable than it looks. The field is new enough that nobody has ten years of experience. What you need to demonstrate is judgment and capability, not a specific line on a resume.

The fastest credibility-builders, in roughly this order: ship something real (even if small) and write about it; publish thoughtful teardowns; contribute to open-source AI projects, even just in documentation or evals; speak at meetups or write threads that get traction; build a small audience around AI PM topics. None of these require permission.

**A NOTE ON THE IMPOSTER FEELING**

The field moves fast enough that everyone — including people who look like authorities — is partly making it up as they go. The people who feel most qualified are usually the ones who've been doing it the shortest time. If you understand the material in this handbook and you're actively building, you are not behind. Start writing, shipping, and talking publicly about what you're learning.

## Chapter 30 — Learning Resources

This is a curated, opinionated list — not an exhaustive one. The goal is to point you at signal, not to overwhelm you. Read a few of these well, build alongside them, and you'll be ahead of 95% of people who claim to follow this space.

### Foundational PM books

- **Inspired, by Marty Cagan** The most influential modern PM book. Defines what good product organizations look like and what empowered product teams actually do.
- **Empowered, by Marty Cagan and Chris Jones** The follow-up to Inspired, focused on product leadership and team coaching.
- **Continuous Discovery Habits, by Teresa Torres** The best book on modern customer discovery practice. Genuinely changes how teams operate, not just how they think.
- **The Lean Startup, by Eric Ries** The book that popularized build-measure-learn and MVP thinking. Some of it has aged unevenly, but the core ideas remain foundational.
- **Hooked, by Nir Eyal** On building habit-forming products. Useful framework even if you don't agree with every application.
- **Cracking the PM Interview, by Gayle McDowell and Jackie Bavaro** Practical, comprehensive interview prep. Slightly dated but still the standard reference.
- **Escaping the Build Trap, by Melissa Perri** On the difference between outputs and outcomes. Short, sharp, and useful.

### Foundational AI and ML books

- **AI Engineering, by Chip Huyen** The most current and practical guide to building production AI systems. If you read one technical book on this list, make it this one.
- **Designing Machine Learning Systems, by Chip Huyen** The pre-LLM-era companion. Still highly relevant for the systems and MLOps side of the work.
- **The Hundred-Page Machine Learning Book, by Andriy Burkov** Compact, conceptually clean introduction to classical ML. Good background reading.
- **Build a Large Language Model (From Scratch), by Sebastian Raschka** A code-along book that walks through building an LLM from the ground up. The fastest way to develop real intuition about how LLMs work.
- **Hands-On Large Language Models, by Jay Alammar and Maarten Grootendorst** Practical, well- illustrated guide to working with LLMs. Strong on visualization and intuition.

### Online courses worth your time

- **Anthropic Academy and AI Fluency** Free, well-structured introductions to working with Claude and AI more broadly.
- **DeepLearning.AI short courses** Andrew Ng's series of free, focused courses on RAG, agents, evals, prompt engineering, and more. High signal-to-noise.
- **Hugging Face NLP and LLM courses** Free, hands-on, code-first. Excellent for developing real working knowledge.
- **Fast.ai** Jeremy Howard's practical deep learning courses. More technical than most PMs need, but transformative if you want depth.
- **Reforge** Paid programs aimed at working PMs. Strong on product strategy, growth, and increasingly on AI.

### Newsletters and blogs

- **Lenny's Newsletter** The most-read PM newsletter. Broad coverage with frequent AI PM material.
- **Import AI, by Jack Clark** Weekly survey of significant AI developments. Excellent way to keep pace with the field without drowning.
- **The Batch, from DeepLearning.AI** Andrew Ng's weekly AI roundup. Accessible and well-curated.
- **Latent Space** Podcast and newsletter focused on the practical engineering of AI products.
- **One Useful Thing, by Ethan Mollick** Thoughtful, well-written exploration of what current AI can actually do. Especially good on workplace and education applications.
- **Stratechery, by Ben Thompson** Strategic and business-context analysis of tech, including AI. Not technical, but invaluable for thinking about AI products in their broader context.
- **Simon Willison's blog** Practical, hands-on, frequently updated. One of the best places to see what's actually possible with current tools.

### Podcasts

- **Lenny's Podcast** Long-form interviews with leading PMs and product leaders.
- **Latent Space** Builder-focused AI conversations.
- **Dwarkesh Podcast** In-depth interviews with AI researchers and thinkers. Especially good for the bigger-picture conversations.
- **Practical AI** Approachable weekly show on AI applications and tools.
- **No Priors** Conversations with founders and researchers at the frontier.

### Communities

- **Product Hunt and Hacker News** For staying current on what's shipping.
- **r/MachineLearning and r/LocalLLaMA** Active subreddits with strong technical signal.
- **Hugging Face forums and Discord** Where a lot of open-source AI conversation happens.
- **Local meetups** AI PM meetups are emerging in most major tech hubs. In-person community accelerates learning faster than almost anything else.
- **LinkedIn** Genuinely useful for AI PM content right now, if you curate aggressively and ignore the noise.

### Papers worth reading (even as a PM)

You don't need to read papers regularly, but a small number have shaped the field enough that reading them — or strong summaries of them — pays off:

- "Attention Is All You Need" (Vaswani et al., 2017) — the transformer paper.
- "Language Models are Few-Shot Learners" (Brown et al., 2020) — the GPT-3 paper that demonstrated emergent in-context learning.
- "Training language models to follow instructions with human feedback" (Ouyang et al., 2022) — the InstructGPT / RLHF paper.
- "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (Lewis et al., 2020) — the original RAG paper.
- "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models" (Wei et al., 2022).
- "Constitutional AI" (Bai et al., 2022) — Anthropic's approach to alignment. Read them with a guide if needed — many strong walkthroughs exist on YouTube and as blog posts. The point isn't to understand every equation. It's to know what the foundational ideas were and where they came from.

### How to stay current without losing your mind

This field generates more content per week than anyone can responsibly consume. The PMs who thrive long-term don't try. Instead:

1. Pick two or three high-signal sources and read them well. Skim everything else.
2. Build, don't just read. Most learning happens in your hands, not your eyes.
3. Trust slow conclusions over fast ones. If something looks revolutionary in week one, check back in month three.
4. Ignore demos until you've used the product. Demos are the marketing department's job. Yours is to know what actually works.
5. Spend more time on fundamentals than on news. The headlines change weekly; the fundamentals don't.

**A FINAL THOUGHT ON RESOURCES**

No book or course will make you an AI PM. They'll give you scaffolding — which is genuinely useful — but the actual transformation happens when you build things, talk to users, ship in production, and notice what works. Use the resources to accelerate that loop. Don't let them substitute for it.

**FURTHER READING**

### Sources, originators, and where to go deeper.

The frameworks and ideas discussed in this part build on a wider body of work by the people listed below. If a section here matched something you wanted to study more deeply, start with these.

**Working Backwards —** Colin Bryar & Bill Carr Amazon's PR/FAQ method and the institutional habits that shaped one of the most disciplined product cultures in the world.

**The Hard Thing About Hard Things —** Ben Horowitz Not PM-specific, but essential reading on operating under genuine uncertainty.

**Crossing the Chasm —** Geoffrey A. Moore On the difference between early-adopter traction and mainstream-market success.

**Latent Space podcast —** Swyx & Alessio Interview-driven podcast covering AI engineering and AI product work in detail.

**Lenny's Podcast and Newsletter —** Lenny Rachitsky Consistently the highest-signal interview source on modern product management.

**Mind the Product —** Mind the Product community Conferences, articles, and a long-running global PM community.

**One Useful Thing —** Ethan Mollick Pragmatic, frequently-updated writing on what GenAI is actually useful for in practice.

### A Closing Note

— closing thoughts —

If you've made it to this page, thank you. Genuinely. Writing this handbook took a different kind of effort than I expected when I started, and the only reason any of it is worth doing is because someone — you — chose to read it.

A few things I want you to take with you.

First: the gap between people who talk about AI products and people who build them is enormous, and it keeps widening. If you take only one thing from this handbook, take this: build something. Anything. A scrappy weekend prototype, a personal RAG over your notes, a small eval harness for a task you care about. The fastest way to become an AI PM is to start doing the work, in public, with whatever access and tools you have. The credentials follow.

Second: this field rewards both speed and depth, in a way that feels contradictory but isn't. Speed in shipping, learning, and iterating. Depth in understanding what's actually happening underneath. The PMs who only chase speed end up shallow; the ones who only chase depth never ship. Hold both, and you'll outpace almost everyone.

Third: be careful what voices you let into your head. There's a lot of confident certainty in this space — about which model is best, which architecture wins, what's about to happen next, who's behind and who's ahead. Most of it is wrong, and the people most certain are usually the ones with the least to lose by being wrong. Read widely, hold strong opinions loosely, and trust your own hands more than anyone's predictions.

Fourth: the responsible AI parts of this handbook aren't a chore. They're not the boring section you skim past so you can get back to the fun stuff. The PMs who take fairness, privacy, and safety seriously are going to build the products that matter and last. The ones who don't are going to spend the next decade cleaning up messes.

Finally: this handbook will be out of date. Some of it already is, by the time you're reading it. That's not a flaw of the document — it's the nature of the field. Use it as a foundation, not a destination. The vocabulary, the frameworks, the ways of thinking — those last longer than any specific model or product or company will.

Go build things. Talk to users. Write about what you learn. Be wrong in public. Help other people learn. That's the path.

Good luck. I hope your products are useful, your evals are honest, and your work makes the world a little better than you found it.

**A FINAL NOTE**

### Thank you.

For making it to this page. For taking the work seriously. For showing up to learn instead of pretending you already know.

The product managers who shape the next decade of AI aren't the loudest, the most credentialed, or the most certain. They're the ones who keep showing up — building, shipping, listening, iterating, and staying honest about what they don't yet know.

Stay curious. Hold strong opinions loosely. Build more than you talk. Be wrong in public. Help others learn.

### The craft is yours now.

### Go make something worth shipping.
