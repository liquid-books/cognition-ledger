---
title: "Appendix B: The Sort Score Worksheet"
short_title: "Sort Score Worksheet"
label: app-b-sort-score
description: "The nine-question Sort Score worksheet with its three indexes and decision rule."
tags: [cognition-ledger, ai, business, appendix]
---

# Appendix B: The Sort Score Worksheet

:::{figure} ../images/appB-infographic.png
:label: fig-appB-infographic
:alt: Opening infographic summarising The Sort Score Worksheet
:width: 80%
:align: center

*Nine questions, three indexes, one decision.*
:::


The Sort Score decides what kind of worker should do a piece of thinking work: plain workflow automation, packaged expertise (today, a Skill), autonomous cognition (today, an agent), or a person with AI assisting. It takes about ten minutes per idea. Score it with the business owner in the room, because the owner has to agree the result before the ticket moves on.

## How to Score

Score each of the nine questions from 1 (low) to 5 (high). Use the anchors below; a score of 2 or 4 means "between these two descriptions." Score the work as it will be after you have deleted the waste, not as it is today.

**Cognition: does this need AI at all?**

| # | Question | 1 means | 3 means | 5 means |
|---|---|---|---|---|
| C1 | How much judgment does it need? | Pure rules | Rules plus some interpretation | Expert judgment |
| C2 | How unstructured are the inputs? | Clean fields | A mix of fields and free text | Free text, PDFs, images, calls |
| C3 | How much does each case differ? | Identical every time | A handful of common patterns | Every case is different |

**Autonomy: Skill or agent?**

| # | Question | 1 means | 3 means | 5 means |
|---|---|---|---|---|
| A1 | What starts the work? | A person decides to start it | Sometimes a person, sometimes an event | An event or schedule starts it |
| A2 | How fixed is the path? | Same steps every time | A few branches | Steps depend on what it finds |
| A3 | How many systems does it touch? | One document or chat | Two or three, mostly reading | Four or more systems, taking actions |
| A4 | Must it run unattended? | A person is there anyway | A person checks in now and then | Must run with nobody watching |

**Risk: how much human control?**

| # | Question | 1 means | 3 means | 5 means |
|---|---|---|---|---|
| R1 | What does a wrong output cost? | Trivial | Noticeable rework or an unhappy customer | Severe: customer, ledger, legal |
| R2 | Can it be undone? | Easily | With effort | Not at all |

## The Three Indexes

- **Cognition Index** = average of C1, C2 and C3.
- **Autonomy Index** = average of A1, A2, A3 and A4.
- **Risk Index** = average of R1 and R2.

Brightwater's dispute triage idea (OTC-04) scored C1 = 4, C2 = 5, C3 = 4, so its Cognition Index is (4 + 5 + 4) ÷ 3 = 4.33. Its autonomy scores of 5, 4, 4 and 4 give (5 + 4 + 4 + 4) ÷ 4 = 4.25. Its risk scores of 3 and 3 give 3.0.

## The Decision Rule

Apply these in order and stop at the first that fits. The thresholds can be tuned by your organization; these are the defaults.

1. **Cognition Index below 2.0** → **Workflow automation, no AI needed.** Rules on clean data don't need a model, and adding one adds cost and risk.
2. **Risk Index 4.5 or higher** → **Keep human, AI assists.** AI researches and drafts; a person decides and acts.
3. **Autonomy Index 3.0 or higher** → **Agent.** If Risk is 3.0 or higher, it becomes **Agent + human checkpoint**: a person approves before anything reaches a customer, a ledger or a system of record.
4. **Otherwise** → **Skill.** If Risk is 3.0 or higher, it becomes **Skill + second review** for high-stakes outputs.

:::{figure} ../images/appB-sort-tree.png
:label: fig-appB-sort-tree
:alt: A decision tree with three threshold questions leading to workflow automation, keep human, agent or Skill, with Brightwater examples
:width: 100%
:align: center

Figure B.1: The Sort Score decision rule as a tree, with Brightwater's Order-to-Cash ideas placed where they landed.
:::

## Brightwater's Scores, Worked

| ID | Idea | C1 | C2 | C3 | A1 | A2 | A3 | A4 | R1 | R2 | Cog | Aut | Risk | Result |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| OTC-01 | Quote builder | 3 | 4 | 3 | 1 | 2 | 2 | 1 | 2 | 2 | 3.33 | 1.50 | 2.0 | Skill |
| OTC-02 | PO intake | 2 | 5 | 3 | 5 | 3 | 4 | 5 | 3 | 2 | 3.33 | 4.25 | 2.5 | Agent |
| OTC-03 | Credit memo | 4 | 4 | 3 | 1 | 2 | 3 | 1 | 4 | 3 | 3.67 | 1.75 | 3.5 | Skill + second review |
| OTC-04 | Dispute triage | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 3 | 3 | 4.33 | 4.25 | 3.0 | Agent + human checkpoint |
| OTC-05 | Collections emails | 3 | 3 | 3 | 2 | 2 | 2 | 1 | 2 | 1 | 3.00 | 1.75 | 1.5 | Skill |
| OTC-06 | Proof-of-delivery retrieval | 1 | 2 | 1 | 4 | 1 | 2 | 4 | 2 | 1 | 1.33 | 2.75 | 1.5 | Workflow, no AI needed |
| OTC-07 | Cash application | 3 | 4 | 4 | 5 | 3 | 3 | 5 | 4 | 3 | 3.67 | 4.00 | 3.5 | Agent + human checkpoint |

Two lessons come out of this table every time. The portal bot (OTC-06), the most exciting idea in the room, didn't need AI at all. And the two agents that touch money got human checkpoints, which is a design choice, not a weakness.

## Your Scores

| ID | Idea | C1 | C2 | C3 | A1 | A2 | A3 | A4 | R1 | R2 | Cog | Aut | Risk | Result |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |
| | | | | | | | | | | | | | | |

## Before You Build an Agent: Its Job Description

If you can't fill in every line, it isn't ready to hire.

| Field | What to write | Brightwater OTC-04 |
|---|---|---|
| Goal | The outcome it owns | Every dispute classified, documented and drafted for resolution |
| Trigger | The event that starts it | A dispute logged in accounts receivable, or a customer email tagged as a dispute |
| Tools | Systems it may read and act in | Email, ERP, carrier portal, accounts receivable system |
| Steps it may choose | Where it uses judgment | Which documents to gather, which category applies, credit or denial |
| Human checkpoint | Who approves what, before it takes effect | An analyst approves every drafted credit; the Controller approves credits over \$2,500 |
| Stop conditions | When it halts and hands over | Missing proof of delivery, a customer threat to leave, an amount over its limit |
| Measures | How you'll know it works | Minutes per dispute including review, wrong-credit rate, days to close |

## Rules of Thumb

- **Skills first.** Most first wins are Skills: cheap to build, easy to review, and they teach a company to write down its know-how.
- **Skills feed agents.** A good Skill often becomes one of an agent's tools later.
- **Fixed path before free path.** If an agent's steps can be written as a fixed sequence, build that version first and add free choice only when it pays.
- **Re-score after you delete waste.** Removing a step can drop an idea below the AI line.
