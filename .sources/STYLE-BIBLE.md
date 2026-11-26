# The Cognition Ledger: style bible for every chapter

Book: **The Cognition Ledger: Why AI Saves Time, Not Money, and How Leaders Bank the Difference**, by Dr. Ernesto Lee (DrLee.ai). Approved table of contents: `TOC.md` in this folder. Source framework (the facts, formulas, Brightwater numbers): `/mnt/project-files/vsm-ai-course/cognition-ledger-course/framework/framework-guide.md`, plus `course-sequence.md`, `class-1-bootcamp/*.md` and the Excel ledger `tools/Cognition_Ledger.xlsx` in that course folder.

## What this book is
- A short trade book (about 200 pages) and the author's lead book: a masterclass in print, like a great TED talk stretched to a book. It should do for AI value what the Agile Manifesto did for software: a mindset people adopt and repeat.
- Timeless. Principles over tools. Claude Skills and AI agents are today's examples ("a written recipe of your best person's know-how, today called a Skill"; "a digital worker that runs a whole job, today called an agent"). Never make a chapter depend on a product feature, price or version. Mention Anthropic/Claude only as today's example where useful.
- Readers: CEOs, CFOs, managers, data scientists and business people. Smart adults who have never studied this. Expert depth, never dumbed down. **Define every term before you use it** (VSM, touch time, %C&A, loaded rate, DSO, COPQ, cost of capital, etc.), in a plain clause, then use it.

## How each chapter reads
- 3,500 to 4,200 words. One cohesive narrative, not a listicle.
- Open cold on a scene or story (a "Disney moment": vivid, specific, cinematic, a surprise). No throat-clearing.
- Build to ONE big reveal per chapter, the "hmm, I never thought of that" moment, and give the reader at least two smaller ones along the way.
- Quotable sound bites: short, punchy lines a reader would underline or tweet. The chapter's signature line from the TOC must appear, set as its own one-line paragraph in bold. Two or three more lines worth quoting elsewhere.
- Carry the Brightwater Distribution case (fictional; say so the first time it appears in the book, which is the Introduction or Chapter 1). Use the exact numbers from the framework guide and ledger. Never invent Brightwater numbers that contradict them; you may add small fictional colour (names of people at Brightwater, scenes) as long as it's clearly the case.
- Named Brightwater people (use consistently): **Dana Ruiz**, CEO; **Marcus Bell**, CFO; **Priya Shah**, VP of Order-to-Cash (the value stream owner); **Tom Okafor**, inside-sales manager; **Lena Ortiz**, a senior credit analyst (the "unused judgment" story); **Sam Whitfield**, the data scientist who builds the Skills and agents.
- End every chapter with a short section headed `## Monday Morning` (3 to 5 sentences or a tight list of no more than 5 items): what each reader does next. Then a final single line in italics restating the chapter's core idea.
- Headings: one H1 (`# Chapter N: Title`), H2 for sections (3 to 6 of them, with intriguing titles), no H4. Tables only where they truly beat prose (at most two per chapter). No bullet-heavy pages.

## Voice
- Dr. Lee's voice: conversational, confident, plain-spoken, warm, occasionally funny, never corporate. Short sentences mixed with longer ones. Speak to "you".
- Use analogies the reader can repeat at dinner; say in one honest sentence where each analogy breaks.
- No em dashes or en dashes anywhere. Use commas, colons, parentheses or a new sentence.
- No filler: no "In today's fast-paced world", "It's important to note", "In conclusion", "delve", "landscape", "game-changer", "unlock", "leverage" (as a verb), "robust", "seamless".
- Never name any college or university the author works at. Never mention specific employers or clients of the author.

## Facts
- Real-world history, research and statistics must be true. If you're not sure of a fact, check it with web search, or leave it out. Never invent a quote, a study, a statistic or a company story. Prefer well-established history (Paul David's work on the electric dynamo; Toyota Production System, Taiichi Ohno; Parkinson's law; Little's law; Frederick Taylor; Henry Ford's moving assembly line 1913) and say it plainly.
- Put any source you lean on in a `## Notes` list at the very end of the chapter (after the italic line): author, title, year. Keep it short.
- Every formula from the framework is shown once in plain words, with a worked number.

## File format
- Markdown, saved as `chapters/NN-slug.md` (00 for manifesto, 00b intro, 01 to 13, 14 closing, 15+ appendices).
- Frontmatter:
```
---
title: "Chapter N: Title"
short_title: "Title"
label: ch-NN-slug
---
```
- Escape every dollar sign that comes before a digit as `\$` in body text (MyST reads `$` as math). Example: `\$1.5 million`.

## Diagrams (the author's top ask: lots of them, and each must tell its story on its own)
- No photos, no stock art, no pictures of people. Only diagrams that teach: frameworks, flows, value stream maps, before/after comparisons, funnels, waterfalls, timelines, 2x2s, ledgers, decision trees, quote-cards for the big sound bite.
- **4 to 6 diagrams per chapter** (manifesto 1, introduction 2 to 3). Place each right where the text needs it.
- **Each diagram must stand alone**: someone who sees only that image (on a slide, on LinkedIn) gets the whole point. Every diagram has:
  1. A headline at the top that states the insight, not the topic ("Freed hours leak unless someone gives them a job", not "Hour flow").
  2. Clear labels on every element, real numbers where the book has them.
  3. A one-line takeaway at the bottom in bold.
  4. A small footer bottom-right: `The Cognition Ledger · DrLee.ai`.
- Something people point to: one strong visual idea per diagram, big contrast, generous white space, no clutter. Fewer words, bigger type. Minimum text size 22px at the 1600-wide canvas.
- Build each as a hand-written SVG: `viewBox="0 0 1600 900"` (or 1600x1200 for tall ones), white background rect, `font-family="Mona Sans, Inter, sans-serif"`. Text colour `#0D1117` (headings) and `#333333` (body), muted labels `#5B6470`.
- Palette with meaning, used the same way in every diagram:
  - **Cyan `#61D8FE`** (fills, bars, arrows): AI, machine work, time freed.
  - **Pink `#FF5CAD`** (fills, bars): people, human judgment, human checkpoints.
  - **Indigo `#544AE9`** (fills, and the only colour allowed for coloured TEXT): money, the P&L, banked value.
  - **Light grey `#E9ECEF` / mid grey `#ADB5BD`**: waste, leak, waiting, the old way.
  - **Plum `#1A184C`**: rare emphasis panels (white text on it).
  - Never put cyan or pink text on white (unreadable); put dark text on those fills instead.
- Save as `diagrams/chNN-short-name.svg`, render with `python3 /mnt/project-files/cognition-ledger-book/tools/render.py diagrams/chNN-short-name.svg`, then LOOK at the PNG with the Read tool and fix anything clipped, overlapping, cramped or unclear before moving on. Text must never overflow its box: estimate ~0.55 x font-size px per character and wrap lines yourself with separate `<text>`/`<tspan>` lines.
- Reference it in the chapter as a MyST figure:
```
:::{figure} ../diagrams/chNN-short-name.png
:label: fig-chNN-short-name
:alt: One sentence describing what the diagram shows
:width: 100%
:align: center

Figure N.M: A caption that adds one thing the image doesn't say.
:::
```

## Skills and agents: required, substantive, timeless (author's explicit ask)
- Skills and agents MUST get real coverage, not passing mentions. Frame each as today's form of a lasting idea:
  - **Packaged expertise** (today: a Claude Skill). A folder with a SKILL.md: a short name and description that are always visible, instructions that load only when a task matches, and scripts/templates/reference files that load only when needed (Anthropic calls this progressive disclosure). A person starts it; it does the thinking work the house way; a person reviews. "Your best person's know-how, written down once and used by everyone."
  - **Autonomous cognition** (today: an AI agent). A system where the model directs its own steps and tool use toward a goal, usually started by an event. Anthropic distinguishes workflows (fixed code paths) from agents (model chooses the path); start with the simplest that works. "A digital worker for a whole job."
- Where they live in the book: Ch5 is the definitive explanation of both and how to choose (with the Sort Score); Ch7 shows how to build and pilot each (Skill anatomy, the agent job description, patterns like routing, orchestrator and workers, evaluator and optimizer, human checkpoints); Ch12 shows many of them working as one value stream; Ch13 shows Skills and agents as products you can sell. Other chapters refer to them naturally in examples (Brightwater's quote Skill, PO intake agent, dispute triage agent, cash application agent).
- The timeless move: always tie the tool to the principle so the reader knows what to do when the names change ("whatever we call them in ten years, you will still be choosing between packaged expertise and autonomous cognition").
- The reference diagram showing the house look is `diagrams/ch00-manifesto.svg` / `.png`. Match its look.

## Naming (author's decision, Nov 26)
- The brand stays **The Cognition Ledger**. Its business-language descriptor is **AI Value Stream Mapping** (e.g. "The Cognition Ledger, the AI Value Stream Mapping method"), the way Scrum always comes with "Agile".
- The method's name, where a method name helps: **Cognitive Value Stream Mapping (CVSM)**. Define it once (Introduction or Chapter 3), then use it naturally.
- Certification levels (mention only where certification fits, mainly the closing call to action): **Certified AI Value Stream Mapper**, **Certified AI Value Engineer**, **Certified AI Value Officer**.
