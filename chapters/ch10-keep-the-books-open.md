---
title: "Chapter 10: Keep the Books Open"
short_title: "Keep the Books Open"
label: ch-10-keep-the-books-open
description: "The ledger as a living board: statuses from Intake to Realized, WIP limits, a weekly, monthly and quarterly rhythm, the AI Value Office, kill and park."
tags: [cognition-ledger, ai, business, chapter]
---

# Chapter 10: Keep the Books Open

:::{figure} ../images/ch10-infographic.png
:label: fig-ch10-infographic
:alt: Opening infographic summarising Keep the Books Open
:width: 80%
:align: center

*Starting ten builds and finishing none is the most expensive hobby in corporate AI.*
:::


## The Morning After the First Win

The most dangerous day in any AI program is the day after it works.

At Brightwater Distribution (our fictional distributor, still running on the same numbers), that day came right after the third-quarter review. Marcus Bell, the CFO, had stood in front of the board and said the sentence every CFO wants to say about AI: a quarter of the planned money is already verified on the books, and here is exactly where the rest is. Word travelled. By Friday, Sam Whitfield, the data scientist who builds Brightwater's Skills and agents, had requests from purchasing, from the warehouse, from HR and from the customer service floor. Everyone wanted "one of those." Everyone wanted it this quarter.

Sam did what any generous, talented builder would do. He said yes. Within six weeks he and two contractors had eleven builds open at the same time: a supplier-invoice reader for purchasing, a returns classifier for the warehouse, a job-posting writer for HR, a call-summary tool for service, and seven more. Every one of them was promising. Every one of them was about two-thirds done.

Then Priya Shah, the VP who owns Order-to-Cash, asked a simple question in the Monday meeting. "Which of these is live?"

None. Not one. Three months of work, eleven builds, and the company had exactly the same number of working digital workers as it had in September. Worse, the ledger that had made Marcus look so good in front of the board was quietly going stale. Nobody had updated the Order-to-Cash tickets since the review. Two tools that were already live, the proof-of-delivery bot and the cash application agent, still had no Hour Budget at all, and nobody had noticed, because everybody was busy building.

Here is the uncomfortable lesson. The first win doesn't prove you have a system. It proves you had a project. A project ends. A system keeps the books open: every idea, every build and every freed hour stays visible, moving and accounted for, quarter after quarter, long after the excitement fades.

This chapter is about the system. It's the least glamorous chapter in the book and, for many organizations, the one that decides whether the other nine paid off.

## A Board, Not a Binder

Most companies keep their AI ideas in one of two places: a slide deck or somebody's head. Both are binders. You open them once a quarter, admire the contents and close them again. Nothing moves.

The Cognition Ledger works the other way. It's a board, run like an **issue tracker**: the kind of tool software teams use to follow every piece of work from "someone had an idea" to "it's done," with a status, an owner and a history for each item. You can run it in Jira, Azure DevOps, Trello, Asana, a shared spreadsheet or a whiteboard with sticky notes. The tool doesn't matter. The structure does, and the structure outlives any tool you'll buy.

The structure has five levels, from big to small. At the top sits the **value stream**, like Order-to-Cash (every step from a customer's order to the cash in the bank). Inside it sit the **process steps**, like Disputes or Quoting. Inside each step sit the **use cases**: one ticket for each idea, typed as a Skill (packaged expertise, a written recipe of your best person's know-how), an agent (autonomous cognition, a digital worker for a whole job), plain workflow automation, or keep human. Under each use case hang the **build tasks**, and beside it hang its **Hour Budget lines**, the plan that gives every freed hour a job. If you've used an issue tracker, that's project, epic, issue, sub-task and linked issue. If you haven't, think of a filing cabinet where every drawer is a value stream, every folder a step, and every sheet of paper an idea that has to keep earning its place.

Every ticket carries the same fields, so tickets can be compared: who owns it, what type it is, the nine Sort Score answers, units per week, baseline and new minutes per unit, oversight hours, the base pay of the role, baseline and new error rates, cost per error, run cost, build cost, confidence, effort, and finance's sign-off with a date. That list looks bureaucratic until you notice what it does. It makes a vague idea ("AI could help with returns") into a claim someone can check.

The columns of the board are the statuses, and they follow the six moves you already know: **Intake, Sorted, Sized, Building, Live, Banked, Realized**, with a side lane called **Parked**.

:::{figure} ../images/ch10-ledger-board.png
:label: fig-ch10-ledger-board
:alt: A board with seven status columns from Intake to Realized, a gate rule under each column, a work-in-progress limit on Building, and a Parked lane underneath
:width: 100%
:align: center

Figure 10.1: The gate under each column is the whole trick. A ticket that can't show its evidence stays where it is, however exciting it sounds.
:::

What makes this a ledger and not a to-do list is the rule under each column. Call them **entry rules**: the evidence a ticket must bring before it may move right.

Anyone can put an idea into Intake. That door should be wide open, because the best ideas often come from the person doing the work, not the person managing it. To reach Sorted, the ticket needs all nine Sort Score answers and the business owner's agreement on type. To reach Sized, it needs a baseline measured on at least 20 real units, not a guess from a job description. To enter Building, it needs a draft Hour Budget. That's the gate that overrides all the others, because if nobody can say where the hours will go before you build, they'll leak after you ship. To go Live, the pilot must have measured new minutes per unit and the new error rate on real cases. To reach Banked, the budget owner, the person whose budget line actually changes, signs the Hour Budget. To reach Realized, finance has seen the evidence.

Now look back at Brightwater's eleven half-builds. How many had a draft Hour Budget? Two. The other nine had walked straight from someone's enthusiasm into Sam's calendar, skipping three gates on the way. And the two live tools without an Hour Budget had done the same thing earlier, in the first rush, before anyone enforced the rule. The board didn't fail. Nobody was using it as a board.

**No evidence, no move.** That one rule turns a wish list into a ledger.

## Why Ten Builds Finish Later Than Three

Here is the question that cost Brightwater a quarter. If you have one build team and nine good ideas, should you start all nine now or start three?

Almost every executive's gut says nine. Starting feels like progress. Saying "not yet" to a department head feels like politics. Nine open builds look like a busy, ambitious team. Three look timid.

Let's do the arithmetic, because this is one of those places where the gut is reliably wrong. Say each build needs one month of the team's full effort, and the team can do one month of effort per month. That's it. No other assumptions.

If you start all nine at once, the team splits its effort nine ways. Each build gets a ninth of a month of work every month. So every single build finishes at the end of month nine. For nine months, nothing is live. Nothing frees an hour. Nothing banks a dollar. In the first year, the nine builds are live for three months each: 27 build-months of value.

If you hold yourself to three at a time, the first three finish at the end of month three and start paying. The next three finish at month six. The last three finish at month nine, exactly when the "all at once" plan finished all of them. Same team, same nine builds, same finish date for the last one. But by the end of the year, your builds have been live for 54 build-months. Double.

:::{figure} ../images/ch10-wip-jam.png
:label: fig-ch10-wip-jam
:alt: Two timelines of nine builds; starting all nine at once makes every build finish at month nine for 27 live build-months, while three at a time finishes in waves for 54 live build-months
:width: 100%
:align: center

Figure 10.2: The last build finishes in month nine either way. The difference is when the first one starts paying.
:::

That's the whole reason for a **work-in-progress limit**, usually called a WIP limit: a hard cap on how many items may sit in one column at once. Lean manufacturers learned it on the factory floor. Toyota's kanban system (a card system where a station only starts new work when a card signals that the next station has room) exists to stop inventory piling up between stations, because inventory is money that isn't earning yet. Software teams borrowed the idea decades later and found the same thing. Half-built software, like half-built cars, earns nothing.

Half-built AI is worse, for three reasons. First, every open build keeps its own context alive in someone's head, and switching between eleven contexts is the cognitive waste you met in Chapter 4, now inflicted on your best builders. Second, the measured baselines go stale while the build drags on; the process you sized in March may not be the process you ship into in November. Third, nothing teaches you what you got wrong except shipping. A team that finishes three builds learns three lessons before it starts the next three. A team with eleven in flight learns all eleven lessons at once, in month nine, when it's too late to use them.

So the ledger sets a WIP limit on the Building column, typically three to five per value stream, and the AI Value Office (more on that in a moment) enforces it. When Building is full, a new idea waits in Sized, fully measured and ready. Nothing is lost by waiting there. Everything is lost by squeezing it in.

There's a deeper rule hiding in this arithmetic, and you'll meet it by name in Chapter 12: the amount of work sitting open equals how fast you finish things multiplied by how long each one takes. Hold the finishing rate steady and pile on more open work, and each item must take longer. It isn't a management opinion. It's arithmetic, and it doesn't negotiate.

**Starting ten builds and finishing none is the most expensive hobby in corporate AI.**

Priya put the WIP limit in on a Monday. Sam's eleven builds became three in Building and eight back in Sized, each with a note saying which gate it still owed. Sam was relieved, not insulted. Builders rarely want eleven things open. They say yes because nobody with authority has said no.

## The Rhythm That Keeps It Honest

A board that nobody looks at is a binder with columns. The ledger stays alive through a rhythm: four meetings, each with a clear owner and one job.

**Weekly, thirty minutes.** The value stream owner and the builders stand in front of the board, physical or virtual, and walk it from right to left. Right to left matters: you start with the tickets closest to money, because finishing beats starting. Which tickets moved? Which are stuck, and on what? Is Building over its limit? This meeting is short on purpose. It's a traffic check, not a strategy session.

**Monthly, the leak report.** The executive sponsor gets one page: the hours that are freed but have no lever yet, and the decisions still owed. At Brightwater, the leak stood at 9,401 hours a year after three quarters, worth \$343,614 at loaded cost and banked at nothing, because nothing on the P&L changes for an hour with no job. The leak report names each of those hours by ticket and by owner, so it's not a statistic; it's a to-do list for executives. This is also the meeting where tickets that have stopped moving get a kill or park decision, which we'll come to.

**Quarterly, verification.** Finance verifies the realized lines against evidence, and the dashboard goes to the executive team: theoretical value, projected banked value and realized value, side by side, never added together. This is the meeting where the books open in public.

**Yearly, re-basing.** Budget owners and finance build next year's budgets from realized value. If four inside-sales hires were not made because a quote Skill absorbed the growth, next year's personnel budget starts without them. This is the step most companies skip, and skipping it is how verified savings quietly drift back into the budget the next year. Realized value that never changes next year's budget is a souvenir.

:::{figure} ../images/ch10-rhythm.png
:label: fig-ch10-rhythm
:alt: Four concentric rings for weekly, monthly, quarterly and yearly reviews, each with who attends and what it decides
:width: 100%
:align: center

Figure 10.3: Each ring has a different owner. The rhythm fails at the ring whose owner stops showing up.
:::

A small reveal hides in this rhythm. Most companies think the hard part of AI value is the technology, and they put their best people on the build. But the weekly meeting is where value is protected, the monthly meeting is where it's assigned, and the quarterly and yearly meetings are where it's proven and kept. Three of the four meetings have nothing to do with building. The money is made in the meetings most people want to skip.

## Five Chairs: The AI Value Office

Someone has to own this rhythm across the whole company, not just one value stream. That someone is the **AI Value Office**: a small standing group that runs the Cognition Ledger across every value stream, sets intake and priorities, holds the WIP limits, makes kill and park decisions and brings realized value to the board each quarter.

The word "office" scares people, because it sounds like a new department with a new budget and a new acronym. It shouldn't be. Think of it as five chairs around one table, each filled by someone who already has a job.

The **executive sponsor** chairs it, breaks ties and makes the kill calls that nobody below that level wants to make. At Brightwater that's Dana Ruiz, the CEO, for the first year, until the habit is set. The **finance partner** prices the levers the way finance would and verifies realized value; Marcus Bell named a senior analyst to the chair and kept the signature for himself. The **value stream owners**, like Priya, run their boards weekly and own the Hour Budgets for their streams. The **builder lead**, Sam, builds the Skills and agents and reports real minutes and real error rates, not demo results. And the **people partner** from HR owns the workforce plan, the reskilling and the message to employees, which is the subject of the next chapter. The chairs also line up with the three certification levels of the Cognition Ledger, the AI Value Stream Mapping method: value stream owners work as Certified AI Value Stream Mappers, builders as Certified AI Value Engineers, and the people who run the office as Certified AI Value Officers.

:::{figure} ../images/ch10-value-office.png
:label: fig-ch10-value-office
:alt: Five roles arranged around the ledger: executive sponsor, finance partner, people partner, builder lead and value stream owners, beside a list of what the office is not
:width: 100%
:align: center

Figure 10.4: Notice which chair is missing: no seat for a vendor or a tool. The office buys outcomes, not software.
:::

Just as important is what the office is not. It is not IT's backlog; it decides what is worth building, and IT is one of the people who builds it. It is not a demo lab; pilots answer to the ledger, not to applause. It is not a tool committee; tools change every year, and an office organized around tools will spend its life comparing them. And it is not a big department. A few hours a week from five people is enough for most mid-sized companies, and the moment the office starts hiring its own staff to produce reports about itself, it has become the waste it was set up to find.

One more reveal sits here, and it surprises executives every time. The office's most useful power isn't the power to approve. It's the power to say "not yet" with a reason. Every department head who asked Sam for a build got an answer within a week: your idea is in Intake; here is the gate it needs next; here is who can help it get there. That's a better answer than yes. A yes with no gate behind it is how Sam ended up with eleven half-builds. A "not yet" with a gate behind it is a promise the company can keep.

## The Courage to Kill

Every portfolio has tickets that stop moving. A pilot that saved four minutes instead of twenty. A Skill that the team stopped using after two weeks. An agent waiting on system access that IT will grant "next quarter," every quarter. These tickets don't announce themselves. They just sit in Building or Live, taking up a WIP slot, a builder's attention and a line on every status report, and they never die, because killing a project feels like admitting a mistake.

The ledger gives you three honest outcomes for any stuck ticket, and drift isn't one of them. You **kill** it, you **park** it, or you **keep** it and name what moves it next.

Four questions decide which. Ask them in order.

First: did mapping delete or simplify the step this ticket automates? If the team took Chapter 4 seriously and removed the waste, the automation may have nothing left to do. Kill it, and celebrate. This is the best kill there is, because the work itself is gone. Nobody has to run, review or maintain a step that no longer exists.

Second: will a budget owner sign a draft Hour Budget? If no one will put their name on where the hours go, park the ticket until someone will. Building it anyway is how you manufacture leak.

Third: after two pilot rounds, does it hit its minutes and error targets? If not, kill it, and write down what you learned. A pilot that misses twice usually means the work needed more judgment than the Sort Score suggested, or the inputs were messier than the baseline showed. That lesson is worth more than the build. Put it in the ticket, so the next team that proposes the same idea starts from it.

Fourth: are the data, the system access and a WIP slot ready now? If not, park it with an owner and a date to look again. A parked ticket isn't dead. It's in a waiting room with an appointment.

:::{figure} ../images/ch10-kill-park.png
:label: fig-ch10-kill-park
:alt: A decision tree of four questions leading to kill, park or keep for any ticket that has stopped moving
:width: 100%
:align: center

Figure 10.5: Two of the four exits are kills. A portfolio with no kills in a year isn't disciplined; it's not looking.
:::

Brightwater ran the four questions on Sam's eight paused builds. The job-posting writer for HR failed the first question: when Priya's counterpart in HR mapped the hiring stream, she found that most postings were near-copies of last year's and could be reused with a two-line edit. The step shrank to almost nothing. Kill, and a cheerful one. The call-summary tool failed the second question: nobody in customer service would say where the freed time would go, because the team was already short-staffed and every freed minute would simply absorb the backlog. That's a real answer, by the way, and an honest one, but it needs a named lever (Avoid, absorbing growth without new hires) and an owner, so it was parked until the service director signed one. The supplier-invoice reader passed everything and moved to Building as soon as a slot opened.

Now the two live tools with no Hour Budget. The ledger had flagged them in red for a quarter. The office treated them as tickets that had skipped a gate and sent them back to it: draft an Hour Budget within thirty days or explain why the tool should keep running. The cash application agent's owner had one within a week. The proof-of-delivery bot, the one from Chapter 5 that never needed AI in the first place, turned out to save minutes for a team whose hours went nowhere in particular. It stayed running, because it was cheap, but the office stopped counting its hours as anything but leak until someone gave them a job.

Notice the shift. Killing used to be a confession. In the ledger it's a decision with a record, and the record has value: it tells the next team what not to try, and it tells the board that the office is spending money where the money is. A company that kills nothing isn't succeeding at everything. It's paying, every month, for things it stopped believing in.

**Killing a build is a decision. Letting it drift is a cost nobody signed for.**

## Monday Morning

Pick the tool your teams already use to track work, set up the seven columns plus Parked, and write the entry rule under each one. Put a WIP limit of three to five on Building for each value stream, then count how many builds are actually open today; if the number is above the limit, stop starting until it isn't. Book the four meetings for the year, name the five chairs of your AI Value Office, and run the four kill-or-park questions on every ticket that hasn't moved in a month.

*The value of AI isn't won at launch; it's kept by a board, a rhythm and five people willing to say "not yet" and "stop."*

## Notes

- Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production*, 1988 (English edition).
- David J. Anderson, *Kanban: Successful Evolutionary Change for Your Technology Business*, 2010.
- John D. C. Little, "A Proof for the Queuing Formula: L = λW," *Operations Research*, 1961.
