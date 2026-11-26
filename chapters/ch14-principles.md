---
title: "Closing: The Ten Principles of the Cognition Ledger"
short_title: "The Ten Principles"
label: ch-14-principles
description: "The ten rules of the Cognition Ledger as principles, then the first 90 days for the CEO, CFO, manager and data scientist."
tags: [cognition-ledger, ai, business, chapter]
---

# Closing: The Ten Principles of the Cognition Ledger

:::{figure} ../images/ch14-infographic.png
:label: fig-ch14-infographic
:alt: Opening infographic summarising The Ten Principles of the Cognition Ledger
:width: 80%
:align: center

*Every principle is a decision with a name on it.*
:::


## The Question Everyone Asks Dana

The call came on a Thursday afternoon, the way these calls always do. A chief executive Dana Ruiz knew from an industry board, who ran a distributor about twice Brightwater's size, had heard the story secondhand: a mid-sized industrial supplier in the Southeast had put real, verified AI money on its P&L while everyone else was still showing slides.

He skipped the small talk. "Which tool are you using?"

Dana laughed, because it was the third time that month someone had asked. Then she told him the truth, and the truth disappointed him. The model Sam Whitfield had built the quote Skill on had been replaced by a newer version since go-live. The dispute triage agent had been rebuilt once on a different setup. If the caller copied Brightwater's tools, he would be copying something that had already changed twice.

"So what do I copy?"

She walked down the hall to Priya Shah's team room, where one sheet of paper had been taped next to the ledger board for most of a year. Ten sentences. No product names. No vendor logos. She took a photo and sent it to him.

That sheet is this chapter: the ten principles of the Cognition Ledger, the AI Value Stream Mapping method.

Here is what struck Dana when she hung up. The most portable thing Brightwater had built was the least technical thing in the building. The tools aged in months. The ten sentences hadn't aged at all. Every one of them is about a decision, a measurement or a signature, and those are the parts of a company that don't get a new version every spring.

**The tools will change every year. The ten principles won't.**

:::{figure} ../images/ch14-tools-change.png
:label: fig-ch14-tools-change
:alt: Today's tool names sit in dashed, swappable boxes above four lasting kinds of work and six questions that never change
:width: 100%
:align: center

Figure 14.1: The names on the top row are the ones that will look dated in a decade. The bottom row is what you will still be asking.
:::

## Ten Rules, Recast as Principles

The ten started life as rules in a workbook. A rule tells you what to do. A principle tells you why, so you can apply it to a tool nobody has invented yet. That is the test each of these has to pass: would it still be true if every AI product on the market today disappeared and something stranger replaced it? Each one below comes with the trap it exists to prevent, because most principles are scar tissue. Somebody fell into the trap first.

:::{figure} ../images/ch14-ten-principles.png
:label: fig-ch14-ten-principles
:alt: A poster of the ten principles of the Cognition Ledger, each tagged with the move it guards
:width: 100%
:align: center

Figure 14.2: The ten principles on one sheet, the same sheet that hung on the wall at Brightwater. Each is tagged with the move it guards.
:::

**1. Decisions turn time into money.**

AI frees time. It does not free money. Money moves only when someone decides what the freed hours will do and something changes on the books: a contract ends, a planned hire isn't made, a lapsed customer gets a call they wouldn't have got. The trap this prevents is the one from the first pages of this book. Two hundred people each "save" four hours a week, the slide says \$1.5 million, and next year's payroll, headcount and overtime look exactly the same. Parkinson's law, the old observation that work expands to fill the time available, quietly collects the difference. Every other principle on the list serves this one. A saved hour with no destination is worth zero, and choosing the destination is a management act, not a technical one.

**2. See the work before you speed it.**

A value stream map is the lean drawing that follows one unit of work, one quote or one order, from the customer's request to delivery and payment. It shows where the time actually goes, and in offices the answer is almost always the same: the work isn't slow, it's waiting. Touch time, the minutes someone actively works on a unit, is a sliver of lead time, the elapsed time from request to done. Mapping first prevents two traps. The first is automating the typing when the real prize was the queue. The second is automating waste: a report nobody reads, a third review nobody needs. Delete pure waste, simplify what is necessary, and only then automate what is left. A beautifully automated report nobody reads is still waste. It's just cheaper waste.

:::{figure} ../images/ch14-waiting-not-slow.png
:label: fig-ch14-waiting-not-slow
:alt: A lead time bar that is mostly waiting with thin slivers of touch time, above three steps: delete pure waste, simplify what is necessary, automate what is left
:width: 100%
:align: center

In office work the time goes to waiting, not working. Map it, delete and simplify first, and automate only what is left.
:::

**3. Earn your way to autonomy.**

There are four lasting answers to the question "who should do this work?" Plain rules-based automation, for clean inputs and fixed steps. Packaged expertise: your best person's know-how written down once so everyone can use it, with a person starting it and a person checking the result. Today we call that a Skill. Autonomous cognition: a digital worker that picks up a whole job when something happens, chooses its own steps inside limits and hands a prepared decision to a person. Today we call that an agent. And a person, with AI assisting. The principle is to use the simplest one that works and climb only when the climb pays for itself. The trap is falling for the most exciting idea in the room; Brightwater's portal bot didn't need AI at all. Skills usually come first because they are cheap, easy to review and teach a company to write down what it knows, and good Skills later become the tools an agent uses. Whatever we call them in ten years, you will still be choosing among these four.

**4. Measure the work, not the memory.**

Ask people how long a task takes and you get the memory of the task: the bad day, the easy day, the job description. Time it on real units, at least 20 of them, and you get the task. Brightwater timed 24 real quotes and found the median was 35 minutes, and every dollar that followed was built on that number. The trap is a baseline nobody can defend. When the chief financial officer asks how you know it was 35 minutes, "we timed 24 of them" ends the conversation. "The team felt it was about 40" starts a longer one, and you will lose it. Twenty isn't a magic statistical threshold. It's the smallest number that makes a sceptic stop arguing about the baseline and start arguing about the plan, which is the argument you want.

**5. The reviewer's minutes count.**

The reviewer's minutes are part of the machine. When AI drafts and a person checks, the checking is part of the new process. So is the time someone spends watching the system, handling its exceptions and keeping its reference files current. Brightwater's quote Skill took quotes from 35 minutes to 15, and the 15 includes the review. Someone also spends 2 hours a week keeping the price file the Skill reads up to date, and that comes off the top. Leave those out and your hours look bigger for exactly one meeting: the one before finance checks them. The trap is demo math, the speed of the machine reported as the speed of the process. Count the human in the loop and the number shrinks a little and becomes believable a lot. Believable beats big every time a budget is on the line.

:::{figure} ../images/ch14-reviewer-minutes.png
:label: fig-ch14-reviewer-minutes
:alt: Two bars for one quote, 35 minutes before and 15 minutes after with the review included, plus 2 hours a week of price file upkeep that comes off the top
:width: 100%
:align: center

The quote Skill's 15 minutes include the person checking the draft, and the weekly upkeep of the price file is subtracted too. That is what makes the number survive finance.
:::

**6. A possibility is not a payment.**

Theoretical value is hours freed times the loaded hourly rate, which is what an hour of a person's time costs the company once benefits and overhead are added to pay. It measures the size of the opportunity, and it is never reported as savings. Brightwater's quote Skill freed 10,246 hours a year at \$42.87 an hour: \$439,270 of theoretical value. Not one dollar of that reached the P&L because of the arithmetic. The trap is the slide that adds up theoretical value across forty pilots and calls it the AI program's return. A board believes that slide once. When the money doesn't arrive, it stops believing anything you say about AI, including the true parts. Theoretical value is a promise, not a payment.

**7. Every hour gets a job, or a red flag.**

Each freed hour goes to one of six levers. Cut: stop paying for something, such as overtime or a contractor. Avoid: absorb growth or attrition without a hire the plan called for. Grow: move the hours to work that earns revenue. Fix: fewer errors, credits and write-offs. Speed: shorter lead time that brings cash in sooner. Invest: a funded strategic project with its own business case. Each lever lands on a named P&L line with a named budget owner and a date. Anything left over is Leak, valued at \$0 and reported every quarter until someone decides. Brightwater's quote Skill sent 7,520 hours to Avoid and 2,000 to Grow, and showed 726 hours of Leak in red. The trap is the invisible leak: hours that drift into longer meetings and nicer slides while everyone assumes someone else has a plan. Showing the leak isn't an admission of failure. It's the to-do list.

:::{figure} ../images/ch14-hours-get-jobs.png
:label: fig-ch14-hours-get-jobs
:alt: A stacked bar of the quote Skill's freed hours: 7,520 to Avoid, 2,000 to Grow and 726 shown in red as Leak, above tiles for the six levers Cut, Avoid, Grow, Fix, Speed and Invest
:width: 100%
:align: center

Every freed hour is assigned to one of six levers. Whatever is left is Leak, valued at zero and shown in red until someone decides.
:::

**8. Whoever's budget moves signs first.**

The Hour Budget is the plan that gives every freed hour a destination. It is signed by the budget owner whose line will change, and it is signed before anyone builds. Not by the project team, not by the vendor, not by the most enthusiastic sponsor. The trap is the build that ships beautifully and then waits for a decision nobody will make: the hires still in the plan, the contractor quietly renewed, the freed hours already absorbed by the time anyone looks. Brightwater's two red flags were exactly this, a proof-of-delivery bot and a cash application agent with no Hour Budget at all. A signature before the build turns a technology project into a management commitment, which is what it was all along. Decide where the hours go before you build, or they'll leak after you ship.

**9. Finance holds the pen.**

Only value that the chief financial officer, or a finance partner the CFO names, has checked against evidence counts as realized. Each lever has its own standard of proof: a canceled contract for Cut, a requisition removed from the approved plan for Avoid, a control group for Grow, an error log for Fix, a days sales outstanding report for Speed. (Days sales outstanding, or DSO, is the average number of days it takes customers to pay.) No evidence, no verification. The trap is self-certification, the project team marking its own homework. It feels efficient and it quietly destroys credibility. After three quarters Brightwater had \$288,463 verified, 22.3% of its projected banked value. That sounds small until you notice it's the only AI number in the building nobody can argue with. The only savings number is the one the CFO will sign.

**10. Three numbers, side by side, always.**

Every quarter, theoretical value, projected banked value and realized value are shown together and never added together. Theoretical is the opportunity. Projected banked is the plan, value with a lever, a P&L line, an owner and a date. Realized is the proof. The gaps between them are management signals: the realization rate (realized divided by projected banked) tells you whether the Hour Budgets are being worked, and the realization gap (theoretical minus realized) tells you how much promise hasn't reached the P&L yet. The trap is reporting only the flattering number, or blending all three into one big figure. Brightwater's dashboard showed \$1,214,780 theoretical, \$1,292,292 projected banked and \$288,463 realized. The plan is bigger than the opportunity because Fix and Speed bank value that doesn't come from hours at all. A board that sees all three numbers learns to trust all three.

:::{figure} ../images/ch14-three-numbers.png
:label: fig-ch14-three-numbers
:alt: Three bars side by side: 1,214,780 dollars theoretical, 1,292,292 dollars projected banked and 288,463 dollars realized, a realization rate of 22.3 percent
:width: 100%
:align: center

Brightwater's three numbers after three quarters, shown together and never added. The gaps between them are the management signals.
:::

## What the Ten Have in Common

Read the list again and count the technologies it names. There are none. Now count the verbs that belong to people: decide, see, measure, count, sign, verify, report. These aren't principles about AI. They're principles about managing freed capacity, and freed capacity is a problem as old as the first machine that did a person's work faster than the person.

That is why they last. Economic historian Paul David pointed out that electric motors spread through American factories for roughly four decades before the big productivity gains showed up in the 1920s. Owners first bolted a big motor where the steam engine had stood and kept the old floor plan, belts and shafts and all. The gains came when a later generation redesigned the floor around small motors on each machine. What the early adopters lacked wasn't a better motor. It was a new floor plan, and rules for working it. These ten are the floor plan rules for cheap cognition, and Cognitive Value Stream Mapping (CVSM), the method of mapping the thinking work in a value stream and following every freed hour to the P&L, is how you draw the floor plan itself.

There's a second pattern hiding in the list, and once you see it you can't unsee it. Apart from the first, which sits over everything, the principles run in the order a single idea travels through the ledger. Principle 2 guards Map. Principle 3 guards Sort. Principles 4, 5 and 6 guard Size and Ship. Principles 7 and 8 guard Bank. Principles 9 and 10 guard Prove. A ticket walks through them one after another, the way a part walks down a line. If you only remember the six moves, you can rebuild all ten principles from them.

## Your First 90 Days

Principles are only worth the Monday they change. Here's what the first quarter looks like when four people in a company decide to work this way: one value stream, one quarter, and one line on the ledger that finance has verified by day 90. One line sounds modest. It isn't. It is the first AI number your company will have that nobody can argue with, and it changes the tone of every conversation after it.

:::{figure} ../images/ch14-90-days.png
:label: fig-ch14-90-days
:alt: A grid showing what the CEO, CFO, value stream manager and data scientist each do in days 1 to 30, 31 to 60 and 61 to 90
:width: 100%
:align: center

Figure 14.3: Each role's work feeds the next column. The data scientist's pilot numbers are what the manager takes to the budget owner, and the signed budget is what the CFO verifies.
:::

**If you are the CEO.** In the first month, pick one value stream where the pain is already visible and already costs money. At Brightwater it was Order-to-Cash: customers took 52 days on average to pay, disputes sat for 12 days, and sales had asked for four new hires to keep up with growth. Name the value stream owner and a finance partner, and then say one sentence out loud to your leadership team: nothing gets built without a draft Hour Budget. In the second month, have the conversation most AI programs avoid. Tell people early what the freed hours are for (absorbing growth, ending contractor spend, more time with customers) before they guess. In the third month, put the three numbers in front of your board, Leak included. From then on, ask the same question at every AI update: "Where did the hours go, and who signed?"

**If you are the CFO.** In the first month, set the house numbers before anyone quotes a dollar: the load factor for benefits and overhead (the framework's default is 30%), productive hours per person (1,880), working weeks (47) and the cost of capital, which is what money costs the company to borrow or the return it expects on it (Brightwater uses 7%). In the second month, publish the evidence standard for each lever and name the person who will verify ledger lines each quarter. Insist that baselines use the same months a year earlier, so seasonality can't flatter anyone. In the third month, hold the first verification review and mark each proven line verified, with a date. Expect a low realization rate in the first quarters and say so in advance. A low honest number is a better start than a high one you will have to walk back.

:::{figure} ../images/ch14-cfo-house-numbers.png
:label: fig-ch14-cfo-house-numbers
:alt: Four tiles of house numbers the CFO sets in the first month: a 30 percent load factor, 1,880 productive hours per person, 47 working weeks and a 7 percent cost of capital
:width: 100%
:align: center

The CFO's first-month job: fix the house numbers every value case will use, before anyone quotes a dollar.
:::

**If you are a manager who owns a value stream.** In the first month, write a one-page charter that includes what the team may not change, then walk the work with the people who do it and map five to fifteen steps. Time real units. Find one waste you can delete before anyone automates anything, and delete it. In the second month, time at least 20 real units for your top three ideas, score them with the Sort Score, and sit down with each budget owner to draft and sign an Hour Budget. Write the two sentences you will say to the people whose work changes. In the third month, run the ledger board weekly with a work-in-progress limit (no more than three to five items in Building at once) and send the leak report to your executive sponsor monthly.

**If you are a data scientist.** You're the person most likely to be asked to build the exciting thing, and also the person best placed to say "that one doesn't need AI" and be believed. In the first month, sit with your best expert and write their know-how down as a first piece of packaged expertise: today, a Skill with a clear name and description, short instructions, and reference files that load only when the task needs them. Pilot it with five users. In the second month, measure the new minutes per unit on 20 real cases, review time included, along with the new error rate, and replace every estimate in the ledger with pilot data. In the third month, write the job description for your first agent: goal, trigger, tools, the steps it may choose, the human checkpoint, the stop conditions and how it will be measured. Build the fixed-path version first if it does the job, and decline to start any build that has no draft Hour Budget. Saying no to that is the most valuable code review you will ever do.

:::{figure} ../images/ch14-agent-job-description.png
:label: fig-ch14-agent-job-description
:alt: A one-page agent job description with seven fields: goal, trigger, tools, steps it may choose, human checkpoint, stop conditions and how it is measured, beside two rules about building the fixed path first and requiring an Hour Budget
:width: 100%
:align: center

The data scientist's third-month deliverable: an agent defined like a new hire, with limits and a measure, and no build without a draft Hour Budget.
:::

## The Floor Plan, Not the Engine

This book began with a factory. Steam and then electricity took the muscle out of work: the lifting, hauling and spinning that people and animals had done. The firms that won weren't the ones that bought the most engines. They were the ones that redesigned the floor and then, in time, built businesses that couldn't have existed before: the railroad, the department store, mass retail.

We're at the same moment with the mind. Reading, sorting, drafting, matching and checking are becoming cheap, and the first wave is doing what the first wave always does: buying licences, saving minutes, and wondering where the money went. Some companies will spend a decade bolting a brilliant new engine onto an old floor plan. Others will redesign the work, bank the hours, and then build the companies that can only exist now.

The difference between them won't be the tools. Everybody will have the tools. It will be whether anyone in the building held to four simple preferences: banked hours over saved hours, redesigned work over automated tasks, verified value over projected value, decisions over tools. The things on the right have value. The things on the left are what turn up on the P&L.

Somewhere in your company this week, someone will save an hour with a machine that thinks. You can let that hour drift into a longer email thread and a slightly nicer slide. Or you can give it a job, write the job down, get the right person to sign it, and let finance tell you, a quarter from now, that it arrived. One hour at a time, that's how the second wave gets built. Not by the engine. By the floor plan, and by the leaders who decide to draw it.

If you want to be one of those leaders, and to have the skill recognized, DrLee.ai offers the method as a path in three levels. A **Certified AI Value Stream Mapper** can map a value stream's thinking work and sort and size the ideas in it. A **Certified AI Value Engineer** can build, pilot and bank Skills and agents against a signed Hour Budget. A **Certified AI Value Officer** can run the ledger across a company and stand behind the numbers in front of a board. Start where your role is today. The principles are the same at every level; only the size of the floor changes.

## Monday Morning

- Print the ten principles and put them next to wherever your AI work is tracked.
- Pick one value stream and one budget owner, and book the Hour Budget meeting this week.
- At your next AI update, ask one question: "Where did the hours go, and who signed?"
- Find your first Leak, give it a number, and show it in red.

*AI gives you the hours; only your decisions give you the money.*

## Notes

- Paul A. David, "The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox," *American Economic Review*, 1990.
- C. Northcote Parkinson, "Parkinson's Law," *The Economist*, 1955.
- Kent Beck and others, *Manifesto for Agile Software Development*, 2001.
- Anthropic, "Building Effective Agents," 2024.
- Anthropic, "Agent Skills" overview documentation, 2025.
