---
title: "Chapter 5: Sort: The Most Exciting Idea in the Room Doesn't Need AI"
short_title: "Sort"
label: ch-05-sort
description: "Plain automation, packaged expertise (a Skill), a digital worker (an agent) or keep it human: the Sort Score and the decision rule."
tags: [cognition-ledger, ai, business, chapter]
---

# Chapter 5: Sort: The Most Exciting Idea in the Room Doesn't Need AI

:::{figure} ../images/ch05-infographic.png
:label: fig-ch05-infographic
:alt: Opening infographic summarising Sort: The Most Exciting Idea in the Room Doesn't Need AI
:width: 80%
:align: center

*Use the simplest thing that works, then earn your way to autonomy.*
:::


The idea that won the room arrived on a single slide.

Brightwater's Order-to-Cash team had gathered eight ideas from the map you saw in the last chapter, and they were working through them one at a time in the big conference room. Most got polite nods. Then a supervisor from the dispute desk stood up with the one everybody would remember. Every night, she said, an AI agent would log in to each carrier's website, find the proof of delivery for every shipment in dispute, download it and file it against the right case. No more analysts clicking through six portals each morning. The documents would simply be there when people arrived.

The room loved it. It ran by itself, overnight, across several outside systems, and it removed a chore everyone hated. Somebody said it was exactly what agents were for. Tom Okafor, who runs inside sales, asked whether it could start in the first sprint.

Then Priya Shah asked the team to score it, the same way they had scored everything else. Nine questions, one to five each. It took about four minutes.

The portal bot scored 1.33 out of 5 on the questions that measure whether work needs thinking. The carrier sites showed the same screens in the same order every time. The shipment numbers were clean fields in the system. There was no judgment anywhere in the job: log in, search, download, file. It needed to run on a schedule and by itself, yes. But running by itself isn't the same as thinking. What the team had described with such excitement was a scheduled script, the kind of automation companies have built for decades. Adding an AI model to it would have added cost, unpredictability and something new to monitor, and bought nothing.

The idea survived. It just stopped being an AI idea. Brightwater built it as plain automation, and the dispute analysts got their documents in the morning anyway.

This chapter is about those four minutes. Sort is the second stage of the method, and its job is simple to say and hard to do: for each idea that survived the map, decide what kind of tool it deserves, if any.

## Four answers, not two

When most executives think about AI at work, they picture two options: do it with AI, or don't. The real choice has four answers, and they stack like the rungs of a ladder.

:::{figure} ../images/ch05-ladder.png
:label: fig-ch05-ladder
:alt: A ladder of three rungs, from workflow automation to packaged expertise to autonomous cognition, with a separate box for keeping a human in charge with AI assisting
:width: 100%
:align: center

Figure 5.1: Each rung adds capability and adds cost, risk and things to watch. The rung beside the ladder isn't lower; it's for work where the stakes call for a person.
:::

The bottom rung is **workflow automation**: fixed rules applied to clean data, with no model involved. Scheduled scripts, system integrations, a rule in the ERP that routes an order. It's the oldest kind of automation and still the cheapest, most predictable and easiest to audit.

The middle rung is **packaged expertise**: your best person's know-how, written down once so an AI model can apply it the house way, whenever someone asks. Today the most common form is a Skill. A person starts it, the model does the thinking work, and a person reviews the result.

The top rung is **autonomous cognition**: a system that picks up a whole job when something happens, decides its own steps, moves across systems and either finishes or hands a prepared decision to a person. Today we call that an agent.

And beside the ladder sits a fourth answer, **keep human, AI assists**, for work where a wrong output would be severe or impossible to undo. The model researches and drafts; a person decides and acts.

A kitchen helps make the ladder concrete. Workflow automation is the oven timer: it does one thing, on a schedule, with no thought at all. Packaged expertise is the restaurant's recipe binder, handed to a capable cook who pulls the right page when an order comes in and cooks it the way the head chef would. Autonomous cognition is a line cook who runs a whole station during service, deciding what to fire next as tickets arrive. And keep human is the head chef tasting every plate for the critic's table. The analogy breaks in one important place: a line cook learns from every shift, while today's agents mostly don't carry lessons from one run to the next unless someone builds that in. The judgment you see on Tuesday is the judgment you designed, not the judgment it picked up on Monday.

The words "Skill" and "agent" are today's names for the middle and top rungs. Whatever we call them in ten years, the two ideas underneath will still be there, because they describe two different ways of putting thinking to work: packaged so a person can reach for it, or set loose to act on its own. The rest of this chapter explains both properly, then gives you the nine questions that decide between them.

## Packaged expertise: what a Skill really is

Anthropic, the company behind the Claude models, describes Agent Skills as "modular capabilities" that extend what the model can do. Each Skill, in its words, "packages instructions, metadata, and optional resources (scripts, templates) that Claude uses automatically when relevant." Other AI platforms have their own versions of the same idea. The details below are Anthropic's, because they're published and clear, but the principle travels.

Physically, a Skill is just a folder. At its heart is a single text file called SKILL.md. The top of that file carries two required pieces of information: a **name**, and a **description** that says what the Skill does and when to use it. Below that sits the body: plain-language instructions, written the way you'd brief a capable new hire. Alongside the file, the folder can hold anything else the work needs: reference documents, a template, a short script that checks a calculation.

Brightwater's first Skill was the quote builder, OTC-01. Its folder held four things. The SKILL.md file described how Tom's best quoters built a quote: which price file to use for which customer tier, when a volume break applies, which items need a lead-time warning, how to phrase the cover note. A second file held the pricing rules in detail. A third was the house quote template. And a small script checked the margin on every line before the draft went to a person.

What makes Skills clever is a design Anthropic calls **progressive disclosure**: the model reads only as much of a Skill as the work in front of it needs.

:::{figure} ../images/ch05-progressive-disclosure.png
:label: fig-ch05-progressive-disclosure
:alt: The quote-builder Skill folder beside three layers: the name and description always loaded, the instructions loaded when a request matches, and the files and scripts loaded only when used
:width: 100%
:align: center

Figure 5.2: A Skill is mostly invisible until the moment it's useful. That's why an organization can keep many of them ready at once.
:::

It works in three layers. At the first layer, the model always knows the name and description of every installed Skill, a few lines each, so it can recognize when one applies. At the second, when a request matches a description ("build a quote for this customer email"), the model reads the SKILL.md instructions. At the third, it opens the pricing rules, the template or the script only when a step actually calls for them. And when it runs a script, only the script's result comes back to the model, not the code itself.

Progressive disclosure is like a good reference librarian, who knows the title of every book in the building, pulls the right one when you ask, and opens it to the right chapter only when you need it. Where the analogy breaks: a librarian judges which book to pull, while a Skill's description has to be written well enough for the model to match it. A vague description is a book with no title on the spine.

Why does this matter to an executive? Because a Skill is the cheapest, most reviewable way to put AI to work on thinking tasks, and because it forces you to write down how your best people actually work. Anthropic sums up the value in four words: "Create once, use automatically." When Tom's best quoter retires, her method doesn't leave with her. It's in the folder.

One caution belongs here, and it's Anthropic's own. Use Skills only from trusted sources. A Skill can include code and can direct the model to use tools, so a malicious one is a security risk, not just a bad document. Treat a Skill from outside your organization the way you'd treat software from an unknown vendor: someone qualified reads it before it's installed.

## Autonomous cognition: what an agent really is

The word "agent" has been stretched to cover almost anything with AI in it. Anthropic's engineering guidance, "Building Effective Agents", draws the one line that matters for executives. **Workflows**, in its words, "are systems where LLMs and tools are orchestrated through predefined code paths." **Agents** "are systems where LLMs dynamically direct their own processes and tool usage." Anthropic calls both "agentic systems." The difference is who decides the steps. In a workflow, an engineer wrote the steps in advance and the model fills in the thinking at each one. In an agent, the model decides what to do next based on what it finds.

That guidance comes with advice that should be framed and hung in every AI steering committee: find "the simplest solution possible," and only increase complexity when needed. The reason is plain economics. Agentic systems, Anthropic notes, "often trade latency and cost for better task performance." An agent takes more steps, makes more model calls and takes longer than a fixed path. And because each step builds on the last, a mistake early on can carry through every step after it; the guidance warns of "the potential for compounding errors." A fixed path fails in predictable places. An agent can fail in creative ones.

:::{figure} ../images/ch05-workflow-vs-agent.png
:label: fig-ch05-workflow-vs-agent
:alt: A workflow drawn as four fixed steps in a line, written in advance by an engineer, beside an agent drawn as a model in the middle choosing among several tools, with the note that it takes more steps, costs more and errors can compound
:width: 100%
:align: center

In a workflow an engineer fixes the steps in advance; in an agent the model chooses them as it goes. That freedom costs steps, money and the risk of compounding errors.
:::

So when is an agent worth it? When the work is open-ended, "where it's difficult or impossible to predict the required number of steps," and when success can be checked. Anthropic names customer support and coding as good fits, and notes that code is verifiable through automated tests. In both, the agent can tell whether it succeeded, and so can you.

:::{figure} ../images/ch05-skill-vs-agent.png
:label: fig-ch05-skill-vs-agent
:alt: A comparison of packaged expertise and autonomous cognition across what starts it, what it works on, who chooses the steps, how it's reviewed, and what to think of it as
:width: 100%
:align: center

Figure 5.3: The deepest difference is the first row. A person reaches for a Skill; an event wakes an agent.
:::

At Brightwater, the clearest agent was purchase order intake, OTC-02. Customers sent 1,800 purchase orders a week, by email, as PDFs and spreadsheets and the occasional photo of a printed form. Nobody decided to start the work; an email arriving started it. The agent read the order, matched each line to Brightwater's part numbers, checked prices against the customer's contract, created the sales order in the ERP and flagged anything it couldn't resolve. It touched email, the customer file, the price file and the ERP, and it had to run whether or not anyone was watching. That's a different animal from the quote builder, which waits for Tom's team to ask for it.

An agent also needs a job description before anyone builds it. If you can't write down its trigger, the tools and systems it may touch, the conditions under which it stops, and the point where a person approves, it isn't ready. Anthropic's guidance describes the same guardrails: agents that "pause for human feedback at checkpoints," and stopping conditions such as a maximum number of attempts, so a confused agent doesn't loop forever.

Many people assume a checkpoint means the agent isn't good enough yet. At Brightwater, the dispute triage and cash application agents both got one: a person approves before a credit memo is issued or a payment is posted. The agent does the gathering, matching and drafting, which is most of the time; a person spends a minute approving what lands on a customer's account or in the books. You keep most of the speed and put control exactly where a mistake would hurt.

**A checkpoint on an agent that touches money isn't a crutch. It's the design.**

## Nine questions that end the argument

Every team has the same argument. Someone wants to build an agent; someone else thinks a simpler tool would do; a third person wonders whether it needs AI at all. Without a shared method, the loudest voice or the most senior title wins. The Sort Score replaces the argument with nine questions, each answered from 1 (low) to 5 (high), in three groups.

The first group asks whether the work needs AI at all. This is the **Cognition** group. C1: how much judgment does it need, from pure rules (1) to expert judgment (5)? C2: how unstructured are the inputs, from clean fields (1) to free text, PDFs, images and calls (5)? C3: how much does each case differ, from identical every time (1) to every case different (5)?

The second group decides between a Skill and an agent. This is the **Autonomy** group. A1: what starts the work, a person deciding to (1) or an event or schedule (5)? A2: how fixed is the path, the same steps every time (1) or steps that depend on what it finds (5)? A3: how many systems does it touch, one document or chat (1) or four or more systems where it takes actions (5)? A4: must it run unattended, with a person there anyway (1) or with nobody watching (5)?

The third group decides how much human control to keep. This is the **Risk** group. R1: what does a wrong output cost, from trivial (1) to severe, affecting a customer, the ledger or a legal position (5)? R2: can it be undone, easily (1) or not at all (5)?

:::{figure} ../images/ch05-nine-questions.png
:label: fig-ch05-nine-questions
:alt: Three panels of questions each scored 1 to 5: Cognition with judgment, unstructured inputs and case variety; Autonomy with what starts it, how fixed the path, systems touched and runs unattended; Risk with cost of a wrong output and can it be undone; each group's average becomes its index
:width: 100%
:align: center

The Sort Score's nine questions in their three groups. Cognition asks whether the work needs AI, Autonomy chooses between a Skill and an agent, and Risk sets how much human control to keep.
:::

Each group's average becomes an index. In plain words: add up the scores in a group and divide by how many questions it has. Take Brightwater's dispute triage idea, OTC-04, which would gather the invoice, purchase order and proof of delivery for each dispute, classify it and draft a resolution. Its cognition answers were 4, 5 and 4, so its Cognition Index is 13 divided by 3, or 4.33. Its autonomy answers were 5, 4, 4 and 4, so its Autonomy Index is 17 divided by 4, or 4.25. Its risk answers were 3 and 3, so its Risk Index is 3.0.

Then the indexes go through a decision rule, applied in a fixed order. The order is the whole point.

:::{figure} ../images/ch05-sort-tree.png
:label: fig-ch05-sort-tree
:alt: A decision tree with three gates in order: cognition below 2.0 leads to workflow automation, risk of 4.5 or more leads to keep human, autonomy of 3.0 or more leads to an agent, and otherwise a Skill, with Brightwater's ideas at each exit
:width: 100%
:align: center

Figure 5.4: The first gate catches ideas that don't need AI before anyone debates how much autonomy to give them.
:::

**First**, if the Cognition Index is below 2.0, the answer is workflow automation, with no AI needed. Rules on clean data don't need a model, and adding one adds cost and risk. **Second**, if the Risk Index is 4.5 or higher, the answer is keep human, with AI assisting: the model researches and drafts, a person decides and acts. **Third**, if the Autonomy Index is 3.0 or higher, the answer is an agent, and if its Risk Index is 3.0 or higher, an agent with a human checkpoint before anything reaches a customer, a ledger or a system of record. **Otherwise**, the answer is a Skill, and if its Risk Index is 3.0 or higher, a Skill with a second review for high-stakes outputs.

Run OTC-04 through it. Cognition of 4.33 passes the first gate. Risk of 3.0 is well below 4.5, so it passes the second. Autonomy of 4.25 clears 3.0, so it's an agent, and because Risk is 3.0, it gets a human checkpoint. Argument over.

The thresholds aren't sacred. They sit on the Assumptions sheet of the ledger, the spreadsheet that carries every number in this method, so an organization with a stricter appetite for risk can lower the keep-human line or raise the agent line. What matters is that everyone uses the same lines, and that they're written down before the scoring starts rather than adjusted afterwards to rescue a favorite idea.

Here is how all eight of Brightwater's ideas came out.

| ID | Idea | C1 | C2 | C3 | A1 | A2 | A3 | A4 | R1 | R2 | Cognition | Autonomy | Risk | Result |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| OTC-01 | Quote builder | 3 | 4 | 3 | 1 | 2 | 2 | 1 | 2 | 2 | 3.33 | 1.50 | 2.0 | Skill |
| OTC-02 | Purchase order intake | 2 | 5 | 3 | 5 | 3 | 4 | 5 | 3 | 2 | 3.33 | 4.25 | 2.5 | Agent |
| OTC-03 | Credit memo, new accounts | 4 | 4 | 3 | 1 | 2 | 3 | 1 | 4 | 3 | 3.67 | 1.75 | 3.5 | Skill + second review |
| OTC-04 | Dispute triage | 4 | 5 | 4 | 5 | 4 | 4 | 4 | 3 | 3 | 4.33 | 4.25 | 3.0 | Agent + human checkpoint |
| OTC-05 | Collections emails | 3 | 3 | 3 | 2 | 2 | 2 | 1 | 2 | 1 | 3.00 | 1.75 | 1.5 | Skill |
| OTC-06 | Proof-of-delivery portal bot | 1 | 2 | 1 | 4 | 1 | 2 | 4 | 2 | 1 | 1.33 | 2.75 | 1.5 | Workflow, no AI needed |
| OTC-07 | Cash application | 3 | 4 | 4 | 5 | 3 | 3 | 5 | 4 | 3 | 3.67 | 4.00 | 3.5 | Agent + human checkpoint |
| OTC-08 | Onboarding packet | | | | | | | | | | | | | Not scored; still at intake |

Read the table the way you'd read a balance sheet, looking for the surprises.

The first is the one this chapter opened with. The portal bot, OTC-06, scored 4 on what starts it and 4 on running unattended, higher on those two questions than the quote builder. It had more autonomy than half the AI ideas on the list. But its cognition was 1.33, and the first gate caught it. The most exciting idea in the room didn't need AI.

:::{figure} ../images/ch05-brightwater-plot.png
:label: fig-ch05-brightwater-plot
:alt: A chart of Brightwater's seven scored ideas plotted by cognition across and autonomy up, with Skills at lower right, agents at upper right, the portal bot alone at the left, and rings marking higher risk
:width: 100%
:align: center

Figure 5.5: The portal bot sits on the wrong side of the cognition line. Autonomy can make an idea feel like AI; only cognition makes it need AI.
:::

The second surprise is that the credit memo, OTC-03, came out as a Skill, not an agent, despite being one of the most consequential pieces of work in the stream. Its Risk Index was 3.5, the joint highest on the list. But nothing about the work called for autonomy: a person decides when a new account needs a credit review, and the analyst is there anyway. The answer was packaged expertise with a second review. The Skill drafts the memo the house way; Lena Ortiz, Brightwater's senior credit analyst, makes the call, and a second person reviews the large ones.

The third surprise is what didn't happen. None of Brightwater's seven scored ideas landed in keep human. Nobody's risk reached 4.5. That's typical of a first pass through an operational value stream, where the work is consequential but correctable: a wrong quote can be revised, a wrong collections email can be followed up. Keep human earns its place in other kinds of work, such as legal positions, medical decisions and irreversible payments. It's on the ladder so that when such work comes up, the method has an honest answer ready.

And the fourth is the shape of the list: three Skills, three agents and one idea that needed no AI. Agents get the headlines; Skills did as much of the work.

## Skills first, agents later

Brightwater built the Skills first. The quote builder went live before any agent did, then the collections email Skill, then the credit memo Skill. The reasons are worth spelling out, because they apply almost everywhere.

Skills are cheaper to build and run, and easy to review, because a person sees every output. They fail gently: a bad draft is caught at review, not found in the ledger a month later. And they teach the organization a skill it will need for everything that follows, which is how to write down its know-how clearly enough for a machine to follow it.

That last point is where Skills and agents meet.

:::{figure} ../images/ch05-skills-feed-agents.png
:label: fig-ch05-skills-feed-agents
:alt: Today a person starts the quote Skill and reviews the draft; later an order agent triggered by an email calls the same quote Skill as one of its tools, with a human checkpoint before anything posts
:width: 100%
:align: center

Figure 5.6: Nothing written into a Skill is wasted when you move up the ladder. The know-how moves with you.
:::

A good Skill often becomes one of an agent's tools later. Brightwater's quote Skill is a person's tool today: someone on Tom's team starts it, reads the draft and sends it. But a year from now, an order agent that reads every incoming customer email might need to build a quote as one step of a longer job. It won't need a new quoting method. It will reach for the same Skill, with the same pricing rules, template and margin check that the team has been refining for a year. The know-how written down for people becomes a part an agent can pick up.

That's why Skills first is not a timid strategy. It's the fastest path to agents that work. An organization that has written down twenty Skills has twenty tested, reviewed, refined pieces of expertise ready for its first agents to use. An organization that skipped straight to agents has an agent improvising its way through work nobody ever wrote down.

:::{figure} ../images/ch05-skills-first.png
:label: fig-ch05-skills-first
:alt: A path through Brightwater's three Skills, the quote builder, collections email and credit memo, leading to agents later, beside four benefits of building Skills first: cheaper to build and run, a person sees every output, fails gently at review, and teaches the team to write down its know-how
:width: 100%
:align: center

Brightwater built its three Skills before any agent. Each one was cheap, reviewed and safe to get wrong, and together they taught the team to write down its know-how.
:::

Which brings us to the line that sums up this stage of the method.

**Use the simplest thing that works, then earn your way to autonomy.**

Earn is the important word. An idea climbs the ladder when its scores demand it, not when the demo impresses. A Skill becomes part of an agent when the Skill has proved itself and the work around it calls for autonomy, not because agents are the fashion this quarter. And an agent loses its checkpoint, if it ever does, only after months of evidence that its outputs don't need one.

Does this discipline make teams slow? Brightwater found the opposite. The sort took minutes per idea, the portal bot shipped in days, and the first Skills reached people's hands within weeks, building the trust and measured baselines the agents later needed. Choosing the simplest thing isn't choosing the smallest ambition. It's choosing the order in which ambition gets paid for.

Today's vocabulary will change, and the products will look different. The nine questions won't, because they ask about the work, not the product: whether it needs thinking, whether it must act alone, and what happens when it's wrong.

## Monday Morning

Take the ideas that survived your map and score each one on the nine questions, with the people who do the work in the room. Run every idea through the decision rule in order, and say out loud which ones don't need AI at all. Pick one Skill as your first build, and have your best practitioner write down how they do the work before anyone touches a model. For every agent on the list, write its job description: trigger, tools, stopping conditions and the point where a person approves. Install no Skill from outside the organization until someone qualified has read it.

*Ask whether the work needs thinking before you ask how much freedom to give it.*

## Notes

- Anthropic, "Agent Skills" overview documentation (2025).
- Anthropic, "Building Effective Agents" (2024).
