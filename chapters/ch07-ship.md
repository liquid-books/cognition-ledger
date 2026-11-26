---
title: "Chapter 7: Ship: Hire Your Digital Worker Like an Employee"
short_title: "Ship"
label: ch-07-ship
description: "Write the agent's job description, pilot on twenty real cases, measure new minutes and error rates, and start with the simplest pattern that works."
tags: [cognition-ledger, ai, business, chapter]
---

# Chapter 7: Ship: Hire Your Digital Worker Like an Employee

:::{figure} ../images/ch07-infographic.png
:label: fig-ch07-infographic
:alt: Opening infographic summarising Ship: Hire Your Digital Worker Like an Employee
:width: 80%
:align: center

*If you can't write its job description, it isn't ready to hire.*
:::


The demo went perfectly, which was the problem.

Sam Whitfield, Brightwater's data scientist, had the dispute triage agent on the big screen in the third-floor conference room. A customer's email came in, angry and a little ungrammatical, about a short shipment. The agent read it, pulled the invoice and the purchase order from the ERP (the enterprise resource planning system, the company's system of record for orders and invoices), fetched the carrier's proof of delivery, and noticed that the signed delivery receipt showed 40 cartons, not the 48 on the invoice. It labeled the dispute "quantity", drafted a credit memo for the eight missing cartons, and wrote a polite note to the customer. Ninety seconds, start to finish. Somebody at the back of the room clapped.

Priya Shah, the VP of Order-to-Cash, waited for the applause to fade. "Lovely," Priya said. "Now a different email. It's Saturday night. A customer writes that they've changed banks and asks us to send their refund to the new account. What does it do?"

Sam started to answer, then stopped. The honest answer was that nobody knew. The agent had a goal, a set of tools and a real talent for reading paperwork. What it didn't have was any instruction for the one email that every accounts receivable team learns to fear, because "please pay us at our new bank" is one of the oldest frauds in the book.

"We would never hire a person like this," Priya said. "Nobody gets keys to the building until someone has written down what the job is, what they're allowed to touch, and who they call when something smells wrong. Write that down for this thing, and then we'll talk."

That afternoon is the whole chapter in miniature, and the fourth of the six stages of Cognitive Value Stream Mapping (CVSM): Ship. Building the clever part is no longer the hard part. The hard part is the grown-up paperwork that makes it safe to switch on: the recipe, the job description, the pilot, the guardrails. This is the builder's chapter, written for the Sams who will make the Skills (packaged expertise) and agents (autonomous cognition) that Chapter 5 taught you to choose between. Executives should read it too, because almost every design choice in it is a business decision in technical clothes.

## The Recipe Card in the Kitchen Drawer

Start with packaged expertise, because most first wins are Skills and because writing one teaches an organization something it badly needs to learn: how to get know-how out of people's heads and onto paper.

Picture a well-run restaurant kitchen. On a shelf sits a row of recipe cards, every title readable at a glance. When an order for eggs Benedict comes in, the cook pulls the hollandaise card and follows it. Only if the card says "use the immersion blender" does anyone open the drawer for the blender. Nobody reads every recipe before every order.

Today's Skill works exactly that way, and Anthropic, which designed the format, calls the idea progressive disclosure: the model sees a little, all the time, and loads more only when the task calls for it. A Skill is a folder. At its center is a file called SKILL.md, and at the top of that file sit two short fields, a name and a description. Those two lines are the recipe-card titles on the shelf. They're always visible, so the model knows every Skill that exists without paying to read any of them. Below them sit the instructions, the recipe itself, which load only when a request matches the description. And beside the file sit resources: reference files, templates and scripts, the blender in the drawer, which load only when the instructions reach for them. When the model runs one of those scripts, only the script's answer comes back into its working memory, not the code. That's why an organization can install dozens of Skills without slowing anything down.

Here is the analogy's honest limit: a cook remembers last night's service, and a Skill does not. It reads its card fresh every time, which is a weakness when you want it to learn and a strength when you want it to behave the same way on Monday as it did on Friday.

:::{figure} ../images/ch07-skill-anatomy.png
:label: fig-ch07-skill-anatomy
:alt: A three-layer diagram of a Skill folder: name and description always visible, instructions loaded when a task matches, and reference files and scripts loaded only when needed, using Brightwater's quote builder as the example
:width: 100%
:align: center

Figure 7.1: The description is the only part the model always sees, so it does the work of a job ad: if it doesn't say when to call the Skill, the Skill never gets called.
:::

Brightwater's quote builder (OTC-01 in its ledger) is a folder with four things in it: SKILL.md, a price file, a page of discount rules and a quote template. The heart of the SKILL.md is short enough to read aloud in a meeting, which is exactly what Sam did:

```
---
name: brightwater-quote-builder
description: Drafts a customer price quote from a quote request email,
  using the current price file and discount rules. Use when an inside
  sales rep pastes or forwards a quote request and asks for a quote.
---
Steps
1. Read the request. Pull out the customer, account number, each item,
   quantity, ship-to location and requested delivery date.
2. Match every item to the price file. If a description matches more
   than one part, list the candidates and ask the rep to choose.
3. Apply the customer's discount tier from the discount rules.
4. Check margin. If any line falls below the 18% floor, mark it
   "Manager approval needed" and apply no further discount.
5. Fill in the quote template with lines, totals, freight terms and a
   30-day validity date.
6. List anything you couldn't match or weren't sure of at the top.

Rules
- Never invent a part number or a price.
- Never send the quote. The rep reviews and sends it.
```

Notice what's in there. The description says both what the Skill does and when to use it, because the description is what the model matches a request against. Step 2 tells the model what to do when it isn't sure, which is the step most homemade prompts forget. Step 4 is a business rule that used to live in one sales manager's head. Step 6 is the most important line in the file, and we'll come back to it. And the two rules at the bottom draw the line between drafting and acting: the Skill does the thinking work, the person keeps the decision.

### Getting the house way onto paper

That 18% margin floor didn't come from a policy manual. Sam found it by sitting next to the rep everyone on Tom Okafor's inside-sales team forwards the hard quotes to, and asking one question over and over: "Why did you do that?"

Why did you call the customer instead of guessing which valve they meant? Because two valves share a description and one costs three times the other. Why did you stop discounting there? Because below 18% the branch manager gets a call from finance. Every answer became a line in the Skill.

**Most companies don't have a process. They have a person.**

The method is old and it works: watch the best person do real work, ask why at every pause, write the answer as an instruction, then have the best person read the instructions and tell you what's wrong. Two or three rounds usually get you there. Lean practitioners call the result standard work, the current best way to do a job, written down so it can be taught and then improved. A Skill is standard work that a machine can follow.

:::{figure} ../images/ch07-ask-why-loop.png
:label: fig-ch07-ask-why-loop
:alt: A four-step loop for capturing know-how: watch the best person do real work, ask why at every pause, write each answer as an instruction, and have the best person correct it, repeated two or three rounds to produce standard work a machine can follow
:width: 100%
:align: center

The method for getting the house way onto paper: watch, ask why, write it down, and let the best person correct it, for two or three rounds.
:::

One more design point, because it will matter more every year. A Skill can tell the model to run code, so a Skill from a stranger deserves the suspicion you'd give any software from a stranger. Anthropic's own guidance is to use Skills only from sources you trust, and to read every file in a Skill before you install it. Treat your Skill library like your codebase: owned, reviewed and versioned.

## Writing the Job Description

Now the other kind of digital worker. An agent, in Anthropic's definition, is a system where the model directs its own steps and its own use of tools to reach a goal. Usually an event starts it, not a person: an email arrives, an invoice ages past 60 days, a dispute is logged. It moves across systems, decides what to look at next and either finishes the job or hands a prepared decision to a person.

That freedom is the whole point, and it's also the whole risk. So before Sam wrote another line of code, Priya asked for a one-page job description, the same seven fields you'd want for a new hire.

| Field | Brightwater's dispute triage agent (OTC-04) |
|---|---|
| Goal | Every new invoice dispute has its facts gathered, a category and a drafted resolution within 4 working hours |
| Trigger | A dispute is logged in the AR system, or a customer email is tagged as a dispute |
| Tools | Read invoices and POs in the ERP; read proof of delivery from the carrier portal; read the customer's email thread; draft notes and credit memos in the AR system, but not post them |
| Steps it may choose | Which documents to pull, which category applies (price, quantity, damage, not received, duplicate), what resolution to draft |
| Human checkpoint | An AR analyst approves every credit before it posts. Credits over \$2,500 also need the Controller |
| Stop conditions | Missing documents after two retrieval attempts; customer threatens legal action; dispute over \$25,000; any sign of fraud, such as changed bank details. In each case it hands the case to a person with a summary |
| Measures | Minutes per dispute, error rate on drafted credits, dispute lead time, DSO |

Read the card the way an auditor would and three choices jump out. They're what make the agent safe to hire.

The first is a single phrase in the Tools row: *draft but not post*. The agent can write a credit memo; it cannot put one on the books. Lean thinkers have a name for this kind of design. Shigeo Shingo, one of the engineers behind the Toyota Production System, called it poka-yoke, mistake-proofing: shape the process so the wrong action is physically hard to take, instead of relying on people to be careful. Anthropic's engineers report doing the same thing with their own agents' tools, changing a tool's design so a whole class of errors simply couldn't happen. An agent that has no "post" button cannot post a fraudulent credit, however convincing the email.

**Give an agent the keys to the job, not the keys to the building.**

The second is the human checkpoint, placed exactly where the work leaves the agent's hands and touches money: the ledger. Everything before that point (reading, fetching, sorting, drafting) is the agent's. The decision that moves money stays with a person, and the bigger the money, the more senior the person.

The third is the stop conditions. Two retrieval attempts and then it stops, so it can't spin forever on a missing document (Anthropic recommends exactly this kind of cap). A legal threat. A dispute over \$25,000. And Priya's Saturday-night email: any sign that bank details have changed. When it stops, it hands a person a summary of what it found, so the human starts from the agent's research rather than from zero.

:::{figure} ../images/ch07-job-description.png
:label: fig-ch07-job-description
:alt: An employee-style job description card for Brightwater's dispute triage agent showing goal, trigger, tools, steps it may choose, the human checkpoint, stop conditions and measures
:width: 100%
:align: center

Figure 7.2: The pink rows are where people stay in charge. A job description without them describes a liability, not a worker.
:::

Here's the test Priya used, and it's the one you should use. Hand the card to someone who has never seen the agent and ask them three questions: What starts it? What can't it touch? When does it stop and call a person? If they can't answer from the card, the card isn't finished, and neither is the agent.

**If you can't write its job description, it isn't ready to hire.**

## Five Shapes Before You Need a Worker

Here is a small surprise that saves companies a fortune: most of what gets pitched in boardrooms as "an agent" isn't one, and shouldn't be.

Anthropic's guidance on building these systems draws one line that every executive should know. **Workflows** are systems where the model and its tools follow paths written in advance. **Agents** are systems where the model chooses its own path. Both are useful. But workflows are cheaper, faster, easier to test and easier to explain to an auditor, so Anthropic's advice is blunt: find the simplest thing that works, and add autonomy only when it pays for itself. Agents trade cost and speed for flexibility, and their errors can compound from step to step.

Anthropic describes a handful of shapes that cover a surprising amount of real work. Each has an analogy from the physical world, and each shows up at Brightwater.

**Prompt chaining** is an assembly line with inspection stations. The task is broken into steps done in order, and a check between steps catches problems before they travel. The quote builder is a chain: extract the request, match the parts, price them, check margin, fill the template. If matching fails, the chain stops at the inspection station instead of pricing a guess.

**Routing** is the mailroom. A first step reads each item and sends it to the right specialist. Brightwater's disputes come in five kinds (price, quantity, damage, not received, duplicate), and a "quantity" dispute needs a proof of delivery while a "price" dispute needs the contract. Route first, and each specialist path can be simple.

**Parallel work** is a team splitting a job, and it comes in two flavours. In sectioning, different pieces run at the same time: one step pulls the invoice while another pulls the purchase order and a third pulls the proof of delivery. In voting, the same question is asked several times or from several angles and the answers are compared, the way three reviewers are harder to fool than one. A cash application match that three independent checks agree on can be trusted more than one that a single check produced.

**Orchestrator and workers** is a general contractor. The orchestrator looks at the job, decides which subtasks it needs (and these differ from job to job), hands them out and assembles the results. This is the shape where real autonomy begins.

**Evaluator and optimizer** is a writer and an editor. One step drafts, another critiques against clear criteria, and the draft goes round again until it passes. Brightwater's collections emails fit this shape: a draft, then a check against tone rules and the customer's aging bucket, then a revision.

:::{figure} ../images/ch07-five-patterns.png
:label: fig-ch07-five-patterns
:alt: Five small flow sketches for prompt chaining, routing, parallel work, orchestrator and workers, and evaluator and optimizer, each with a Brightwater example, arranged on a ladder from most predictable to most autonomous
:width: 100%
:align: center

Figure 7.3: Climb this ladder one rung at a time. Each step up buys flexibility and costs predictability.
:::

So when does a true agent earn its keep? When you genuinely can't write the steps in advance, because they depend on what the work turns out to contain, and when success is clear enough to check. Dispute triage qualifies: one dispute needs two documents and another needs five, one is settled by a delivery receipt and another by a contract clause, and nobody can draw that as a fixed flowchart. But notice that even inside the dispute agent you'll find a router, a parallel fetch and a drafting step. Agents are usually built out of these shapes, not instead of them.

That's why Brightwater's portfolio looks the way it does. The quote builder is a Skill, and in a year it will likely be a tool an order agent calls. Skills feed agents. The proof-of-delivery bot (OTC-06) needed no AI at all. Only work that truly changes shape case by case got a digital worker of its own.

:::{figure} ../images/ch07-workflow-or-agent.png
:label: fig-ch07-workflow-or-agent
:alt: A decision flow asking whether the steps can be written in advance, leading to a workflow such as the quote builder if yes, and, if no and success is clear enough to check, to an agent such as dispute triage
:width: 100%
:align: center

Two questions decide between a workflow and an agent: can the steps be written in advance, and is success clear enough to check?
:::

## Twenty Real Cases

A demo proves that something can work. A pilot proves how well it works on the mess you actually have: the difference between a test drive on an empty track and a month of school runs.

The Cognition Ledger's gate for this stage is simple: you may not call a build finished until you've measured its new minutes per unit and its new error rate on real work. Here's the protocol Brightwater used, and it fits on an index card.

Pull at least 20 real units from last month's actual queue, not the vendor's sample set. Deliberately include the ugly ones: the handwritten purchase order, the customer who describes parts by nickname, the dispute with three invoices tangled together. Time each one end to end with the same stopwatch you used for the baseline in Chapter 6, from the moment the work arrives to the moment a person is satisfied it's right. Then follow each unit downstream and count errors where the work lands, not where it was done: a quote counts as an error if it had to be revised after it went to the customer.

For the quote builder, 24 hand-made quotes had been timed for the baseline at 35 minutes each, with 8% revised after sending. In the pilot, 20 real quote requests went through the Skill. They averaged 15 minutes each, and only 3% needed revision. Requests that used to reach the customer a day or two later now reached them the same day.

:::{figure} ../images/ch07-pilot-loop.png
:label: fig-ch07-pilot-loop
:alt: A loop from measured baseline to build to a pilot on 20 real units to measurement of new minutes and error rate, ending in a ship, fix or park decision, with the quote builder's results of 35 to 15 minutes and 8% to 3% errors
:width: 100%
:align: center

Figure 7.4: A pilot isn't a celebration. It's the measurement that replaces the estimate in the ledger, and sometimes it says no.
:::

Now look closely at that 15, because it holds the chapter's biggest surprise.

The Skill itself drafts a quote in well under two minutes. So where did the other thirteen go? Into the rep reading the draft, checking the flagged lines, confirming the odd part, and deciding to send. The machine's minutes were never the constraint. The human's minutes were.

**You aren't building an AI. You're building a review.**

:::{figure} ../images/ch07-review-minutes.png
:label: fig-ch07-review-minutes
:alt: Bar comparison showing the old quote at 35 minutes of human work and the new quote at 15 minutes, of which only a sliver is the machine drafting and the rest is the rep's review
:width: 100%
:align: center

Figure 7.5: Every minute in the new bar is a minute the Skill's design can shorten or lengthen. Flag the doubts and the review gets faster.
:::

This changes how you build. The fastest way to cut new minutes is rarely a smarter model. It's a draft that's easy to trust. That's why step 6 of the quote Skill (list everything you weren't sure of at the top) matters more than any other line: it sends the rep straight to the three lines that need eyes. Show where each number came from, and put the exceptions first. Speed is the machine's gift; trust is yours to design.

It's also why the ledger insists that new minutes include review time, and that oversight hours (maintaining the price file, watching the agent, handling its exceptions) come out of the hours freed: 2 hours a week for the quote builder, 8 for the dispute agent. Leave those out and your numbers look wonderful until finance asks to see them.

Agents get one extra safety step. Before the dispute agent touched a live case, it ran in what builders call shadow mode: for two weeks it drafted resolutions on real disputes that nobody acted on, while the analysts worked the same disputes the old way, and Sam compared the two case by case. Anthropic's guidance says the same in plainer words: test agents extensively in a sandbox, a safe copy of the world, before they act in the real one. On the pilot disputes, minutes per dispute fell from 45 to 18, approval included, and the share of wrong credits fell from 6% to 2%.

:::{figure} ../images/ch07-shadow-mode.png
:label: fig-ch07-shadow-mode
:alt: Two parallel lanes over two weeks of real disputes, the agent drafting resolutions nobody acts on and analysts working the same disputes the old way, merging into a case-by-case comparison with minutes per dispute falling from 45 to 18 and wrong credits from 6% to 2%
:width: 100%
:align: center

In shadow mode the agent works real cases in parallel with the people, and nothing it drafts is acted on until the comparison has been made.
:::

Every pilot ends in one of three decisions. **Ship**: the numbers hold, so the measured figures replace the estimates in the ledger. **Fix**: the idea is right but the build isn't, so change the instructions or the tools and pilot again. **Park**: the measured gain is too small, or the error rate came out higher than the person's. That last outcome isn't a failure of the method. It's the method working. A pilot that can't say no isn't a pilot; it's a launch party.

One more gate belongs to the next chapter but bites in this one: nothing enters Building without a draft Hour Budget, the plan for where every freed hour will go. Sam couldn't start the dispute agent until the Controller had sketched what would happen to the analysts' time. Chapter 8 shows why that's the most valuable rule in the book.

## Guardrails Are Part of the Job

New employees get a probation period: limited system access, a manager who checks their work, a spending limit and a rule about which decisions need a second signature. Nobody takes this as an insult. It's how trust gets built at a pace the organization can survive.

Digital workers need the same, for a sharper reason. That's where the hiring analogy breaks, and it breaks in a way that matters. When a new analyst makes a mistake, you talk it through and they rarely make it again. When an agent makes a mistake, it will make the identical mistake on every similar case tonight, tomorrow night and every night after, until someone changes its instructions or its tools. A person's error is an incident. A machine's error is a policy.

:::{figure} ../images/ch07-incident-vs-policy.png
:label: fig-ch07-incident-vs-policy
:alt: Two panels comparing a person's error, which is talked through and rarely repeated, with an agent's error, which repeats on every similar case every night until someone changes its instructions or tools
:width: 100%
:align: center

A person learns from a mistake; an agent repeats it on every similar case until its instructions or tools change, which is why guardrails belong in the design.
:::

So Brightwater wrote its guardrails into the design. Each agent got the narrowest access that does the job: read where it must read, draft where it must draft, and act on a system of record only behind a person's approval. Each got thresholds, so larger amounts climb to more senior approvers, and stop conditions, so it stops rather than guesses. Each got a human checkpoint before anything reaches a customer, a ledger or a system of record, because that's where an error stops being cheap. And each one shows its work. Anthropic lists transparency, making the agent's plan and steps visible, as one of its three core principles for building agents, alongside simplicity and careful design of the tools the agent uses. At Brightwater that meant every drafted credit carried a short note of which documents the agent read and why it chose the category it did, so the analyst could check the reasoning, not just the answer.

Finally, every Skill and agent got an owner, a named person who watches its measures, reviews its exceptions and changes its instructions. That person's time is the oversight time in the ledger. Unowned automation doesn't stay neutral; it drifts as prices, customers and the world it was built for move on.

**Guardrails aren't a sign you distrust the agent. They're the reason you can.**

Nothing in this chapter depends on a particular product. Ten years from now the tools will be faster, cheaper and called something else. But you will still be choosing between packaged expertise (the house way, written down, started and checked by a person) and autonomous cognition (a worker for a whole job, started by an event and stopped by its limits). You will still need the recipe and the job description. You will still pilot on real cases and count the review. And you will still put the human where a mistake turns into money.

## Monday Morning

- **Builders:** pick the next use case on your ledger and write its card first, either the SKILL.md description and rules or the seven-field job description, before you write any code.
- **Managers:** pull 20 real units from last month's queue, including the ugly ones, and book the time to run them through the pilot with a stopwatch.
- **Executives:** ask your team the three card questions about any agent already running: what starts it, what can't it touch, when does it stop and call a person.
- **Everyone:** count review and oversight minutes in every number you report, and treat a pilot that says "park" as money saved.

*A digital worker is ready to ship when its recipe or job description is written, its pilot is measured on real work, and a person stands where its mistakes would cost money.*

## Notes

- Anthropic (Erik Schluntz and Barry Zhang), "Building Effective Agents," 2024.
- Anthropic, "Agent Skills" overview, Claude developer documentation.
- Shigeo Shingo, *Zero Quality Control: Source Inspection and the Poka-yoke System*, 1986.
- Mike Rother and John Shook, *Learning to See*, 1999 (on standard work and mapping the current state).
