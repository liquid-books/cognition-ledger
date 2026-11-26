---
title: "Chapter 6: Size: The Three Numbers Every Automation Owes You"
short_title: "Size"
label: ch-06-size
description: "Time, money and quality, measured on real units: baselines, loaded rate, theoretical value, build and run cost, payback and cost of poor quality."
tags: [cognition-ledger, ai, business, chapter]
---

# Chapter 6: Size: The Three Numbers Every Automation Owes You

:::{figure} ../images/ch06-infographic.png
:label: fig-ch06-infographic
:alt: Opening infographic summarising Size: The Three Numbers Every Automation Owes You
:width: 80%
:align: center

*Theoretical value is a promise, not a payment.*
:::


Sam Whitfield spent most of a Tuesday sitting behind people with a stopwatch, and he was not popular for it.

The quote builder had just come out of the sort as a Skill, and Priya Shah wanted to know how much it was worth before anyone built it. So she asked Tom Okafor's team the obvious question: how long does a quote take? The answers came back quickly and confidently. Fifteen minutes. Twenty, tops. One rep said ten for the easy ones, which was most of them.

A week earlier, a vendor had shown the same team a demo in which an AI tool produced a finished quote in under two minutes. Put the two numbers together and the business case wrote itself: twenty minutes down to two, ninety percent faster, call it a revolution.

Priya didn't put the two numbers together. She asked Sam to time real quotes instead, start to finish, at the reps' desks, with nothing chosen in advance. Twenty-four quotes later, the median was **35 minutes**.

Nobody had been lying. The reps remembered the quotes that went smoothly and forgot the ones where they hunted through three price files, rang the warehouse about a lead time, chased a missing part number by email and then got interrupted twice. The stopwatch remembered all of it.

Then Sam ran a pilot of the actual Skill on twenty more real quotes, and timed those too, including the minutes a rep spent reading and correcting each draft before it went to the customer. The vendor's two minutes was the time the machine took to write. The time a quote took, with a person checking it properly, was **15 minutes**.

So both of the confident numbers were wrong, in opposite directions. The guess understated the work before. The demo overstated the gain after. The real saving, 20 minutes a quote, was less dramatic than the slide and far larger than the guess, and it was the only one of the three that would survive a meeting with Marcus Bell, Brightwater's CFO.

This chapter is about Size, the third stage of the method. Its job is to give every surviving idea the same three numbers, measured the same way, so that ideas can be compared honestly and a CFO can believe them.

## The stopwatch beats the survey

Before any formula, a rule: **baselines come from timing real units, at least 20 of them, never from estimates.** A unit is one of whatever the step produces: one quote, one order, one dispute.

Why so strict? Because people are reliably bad at estimating how long their own work takes, and the errors aren't random. In 1979, the psychologists Daniel Kahneman and Amos Tversky gave a name to one of the most stubborn patterns: the **planning fallacy**, our habit of predicting how long a task will take from the best case we imagine rather than from how long similar tasks have actually taken. We picture the smooth version. Reality includes the interruptions.

Survey a team about its work and you get the planning fallacy in reverse: everyone describes the smooth quote. Ask a vendor about its tool and you get the same bias pointed the other way: the demo shows the smooth draft, not the review, the correction or the exception.

Timing real units corrects both. Twenty is a practical minimum, not a statistical law. It's enough to catch the ugly cases, the handwritten order and the dispute with three invoices tangled together, which a sample of five usually misses. Brightwater timed 24 quotes for the baseline and 20 in the pilot. Use the median (the middle value when you line them up) rather than the average, so that one quote that took two hours because the rep went to lunch halfway through doesn't distort the number.

Here's an analogy, with its limit. Sizing on estimates is like pricing a house renovation from the homeowner's memory of how long the last one took. A stopwatch is the builder's survey. Where the analogy breaks: a house survey is done once, and a baseline should be redone whenever the process changes, because a number timed before you deleted three steps describes a process that no longer exists.

While you hold the stopwatch, record two other things for each unit. Note when the request arrived as well as when work started, because the gap is waiting, and waiting is lead time. And follow each unit downstream for a few weeks to see whether anyone had to correct it, because that's your baseline error rate. One sitting behind the reps gives you all three.

With a real baseline in hand, every idea owes you three numbers: time, money and quality.

:::{figure} ../images/ch06-three-numbers.png
:label: fig-ch06-three-numbers
:alt: Three panels for the quote builder: time, 10,246 net hours freed a year; money, 439,270 dollars of theoretical value; quality, errors falling from 8 percent to 3 percent, worth 186,120 dollars
:width: 100%
:align: center

Figure 6.1: The same three numbers for every idea, sized the same way, is what turns a pile of business cases into a portfolio you can rank.
:::

## Number one: time

Chapter 2 ran this arithmetic once, quickly. Here it is slowly, because every number after it depends on it.

In plain words: take the minutes saved on each unit, turn them into hours, multiply by how many units you handle a week, subtract the hours someone now spends looking after the new tool, and multiply by the number of working weeks in a year. As a formula:

> **Net hours freed per year = ((baseline minutes per unit − new minutes per unit) ÷ 60 × units per week − oversight hours per week) × working weeks**

Now with Brightwater's quote builder. The baseline was 35 minutes. The new time was 15 minutes. The team builds 660 quotes a week. Someone spends 2 hours a week keeping the price file the Skill reads up to date. Brightwater counts 47 working weeks in a year.

Thirty-five minus fifteen is 20 minutes saved per quote. Twenty divided by 60, times 660 quotes, is 220 hours a week. Take off the 2 hours of price-file upkeep and you have 218 hours a week. Times 47 weeks: **10,246 hours a year.**

:::{figure} ../images/ch06-time-bridge.png
:label: fig-ch06-time-bridge
:alt: Bars comparing 35 minutes per quote before with 15 minutes after, AI draft plus review, then a chain of steps from 220 hours a week to 218 after upkeep, times 47 weeks, to 10,246 hours a year
:width: 100%
:align: center

Figure 6.2: Two honest subtractions sit inside this number: the review time inside the 15 minutes, and the upkeep taken off every week.
:::

Two details in that calculation are where most business cases go wrong, and both are deliberate.

The first is that **the new minutes include review.** The Skill drafts the quote in moments. A rep then reads it, checks the prices that look odd, fixes the cover note and sends it. The 15 minutes is all of that, timed. If you use the machine's time alone, you'll claim savings the team never sees, and the first person to notice will be the CFO.

The second is the **oversight hours.** Every AI tool needs looking after: someone updates the reference files, watches for drift, handles exceptions and fixes what breaks. Brightwater's quote Skill needs 2 hours a week. Its dispute triage agent, which runs unattended across several systems, needs 8. Leave oversight out and the number grows, right up until someone in finance asks who maintains the thing.

**Leave out the review or the upkeep and the number grows, until the CFO checks.**

The same formula sized the dispute triage agent, OTC-04. Analysts handled 225 disputes a week at 45 minutes each. With the agent gathering the invoice, purchase order and proof of delivery and drafting the resolution, an analyst's time per dispute, approval included, fell to 18 minutes. Twenty-seven minutes saved, divided by 60, times 225, is 101.25 hours a week. Take off 8 hours of oversight and you have 93.25. Times 47: about **4,383 hours a year**, less than half the quote builder's figure.

Time has a second face, and it's easy to miss: **lead time**, the elapsed time from request to done. Touch time is how long people work on a unit; lead time is how long the customer waits. Before the Skill, a quote request sat a day and a half in the queue. Afterwards, with each quote taking less than half as long, the queue cleared, and most quotes went out the same day. That speed doesn't show up in net hours at all. But a customer who gets a price the same day is more likely to order, and a dispute closed three days sooner is cash in the bank three days sooner. Record lead time alongside hours. Chapter 8 shows how to price it.

## Number two: money

Hours become money through a rate, and the rate is where well-meaning people make the second most common mistake in AI business cases.

Finance prices an hour of someone's time at the **loaded hourly rate**. In plain words: take annual base pay, add the cost of benefits, payroll taxes and overhead (the "load"), and divide by the hours a person is actually available to work in a year.

> **Loaded hourly rate = annual base pay × (1 + load factor) ÷ productive hours per year**

Brightwater uses a load factor of 30% and 1,880 productive hours: 2,080 paid hours a year, less about 200 for holidays, vacation and sick time. An inside-sales rep earns \$62,000. So \$62,000 times 1.30, divided by 1,880, is **\$42.87 an hour.**

The common mistake is to divide base pay by 2,080 and stop. That gives \$62,000 ÷ 2,080 = \$29.81, which understates what an hour really costs by about 30%. It's a conservative error, and conservative errors feel safe, but they aren't. A team that prices its hours too low will rank its ideas wrongly and leave good ones unfunded. The opposite error, a rate inflated with overheads the company would pay anyway, is just as common in vendor cases. The cure for both is the same: agree the load factor and the productive hours with finance, once, write them on the Assumptions sheet of the ledger, and use them everywhere.

Multiply hours by the rate and you get **theoretical value**. For the quote builder: 10,246 hours times \$42.87 is **\$439,270 a year.**

That's a big, precise number, and it's exactly the number that has caused every disappointment this book has described. It isn't savings. Nobody stops paying anything because a quote takes 15 minutes instead of 35. The reps still draw their salaries. The \$439,270 measures the size of the opportunity: what those hours would be worth if the company decided to do something with them.

**Theoretical value is a promise, not a payment.**

:::{figure} ../images/ch06-promise.png
:label: fig-ch06-promise
:alt: The 439,270 dollar theoretical value with its loaded-rate arithmetic, a list of what it is not (savings, a budget cut, on the P&L) struck through, and the five things that turn it into money: a destination, a P&L line, a budget owner, a date and CFO verification
:width: 100%
:align: center

Figure 6.3: Every word on the right is something a person has to decide or do. None of them happens because a tool went live.
:::

A promise becomes a payment only when it gets a destination: a specific line of the P&L, a budget owner who signs for it, a date by which finance will look for it, and finance's verification that it happened. That's the work of Chapter 8, the Hour Budget. For sizing, you need to know only that the projected banked value, the part of the promise with a plan behind it, is usually smaller than the theoretical value, and is the number that counts. For the quote builder, Brightwater's plan banked **\$392,382**, mostly from four inside-sales hires that no longer had to be made. For the dispute agent, it was **\$533,458**, which is larger than its \$175,776 of theoretical value, because two of its levers, fewer wrong credits and faster cash, don't come from hours at all.

Every idea also carries two costs. The **one-time build cost** covers design, build, testing and pilot. The **annual run cost** covers usage, monitoring and support, year after year. Brightwater's quote Skill cost \$15,000 to build and \$9,000 a year to run. The dispute agent cost \$85,000 to build and \$42,000 a year to run, the difference between a folder of instructions a person reviews and an agent that acts across several systems unattended.

From those come two more numbers. **Net annual banked value** is projected banked value minus run cost: \$392,382 − \$9,000 = \$383,382 for the quote builder, and \$533,458 − \$42,000 = \$491,458 for the dispute agent. **Payback** is how many months of net banked value it takes to repay the build cost. In plain words: divide net banked value by 12 to get a month's worth, then divide the build cost by that. For the quote builder, \$383,382 ÷ 12 is \$31,949 a month, and \$15,000 ÷ \$31,949 is **0.47 months**, about two weeks. For the dispute agent, \$491,458 ÷ 12 is \$40,955 a month, and \$85,000 ÷ \$40,955 is **2.08 months.**

Both are excellent. But notice which way the gap runs. The bigger, more impressive build takes more than four times as long to pay back. Hold that thought.

## Number three: quality

The third number is the one most AI business cases forget, and it's often the largest.

The rule for measuring quality is simple and unforgiving: **measure it where the work lands, not where it's done.** A quote isn't correct because the rep thought it looked fine; it's correct if it didn't need revising after it reached the customer. An order isn't right because it went into the system cleanly; it's right if nothing downstream had to fix it. Chapter 4 showed why: errors made in one step show up as disputes, credits and rework in another, weeks later.

Two measures matter. The **error rate** is the share of units that need correcting downstream, recorded before and after. And **%C&A**, the share of a step's output the next step can use as is, tells you whether the improvement shows up for the people downstream, and how it moves the rolled %C&A of the whole stream.

Then you price it. Joseph Juran, one of the founders of modern quality management, made the case in his *Quality Control Handbook* in 1951 that errors have a cost a company can measure and should; Philip Crosby later argued, in a book whose title became a slogan, *Quality Is Free* (1979), that preventing errors costs less than paying for them. The ledger follows their lead with the **cost of poor quality (COPQ) avoided**. In plain words: take the units you handle in a year, multiply by how much the error rate fell, and multiply by what one error costs to find and fix, including credits, write-offs, penalties and rework time.

> **COPQ avoided = units per year × (baseline error rate − new error rate) × cost per error**

For the quote builder: 660 quotes a week times 47 weeks is 31,020 quotes a year. The share needing revision fell from 8% to 3%, a drop of 5 percentage points. Each revision costs about \$120 to sort out. So 31,020 × 0.05 × \$120 is **\$186,120 a year.**

For the dispute agent: 225 disputes a week times 47 is 10,575 disputes a year. The share resolved with the wrong credit fell from 6% to 2%, four points. Each wrong credit costs about \$310. So 10,575 × 0.04 × \$310 is **\$131,130 a year.**

Sizing a number isn't banking it. The dispute agent's Hour Budget banks its \$131,130 as fewer wrong credits; the quote builder's first plan banked only hours, so its quality gain is sized and still waiting for a destination. Either way, you can't decide what to bank until you've sized it.

Here's the reveal that makes quality the most honest of the three numbers. It **cuts both ways.**

:::{figure} ../images/ch06-quality-both-ways.png
:label: fig-ch06-quality-both-ways
:alt: Two outcomes for the dispute agent: errors falling from 6 percent to 2 percent, worth plus 131,130 dollars, and a hypothetical where errors rise to 8 percent, worth minus 65,565 dollars
:width: 100%
:align: center

Figure 6.4: The ledger records the minus sign as faithfully as the plus. That's what makes the plus believable.
:::

Imagine the dispute agent had been faster but sloppier, and its wrong-credit rate had risen from 6% to 8% instead of falling. Same formula: 10,575 × (0.06 − 0.08) × \$310 is **minus \$65,565 a year.** The hours would still look wonderful. The money they're worth would be partly eaten by errors that landed on customers' accounts and in Brightwater's books. A time saving that ignores quality can describe a process that's getting worse.

**A faster process that makes more mistakes can cost more than it saves.**

This is why the pilot in the next chapter measures error rates, not just minutes, and why a pilot is allowed to say no.

## The bigger prize ranks lower

Now you have three numbers for every idea, and a problem. Brightwater had seven sized ideas and enough people to build two or three at a time. Which goes first?

The instinct in most organizations is to start with the biggest number. At Brightwater, that was the dispute triage agent: \$533,458 of projected banked value, the largest in the portfolio, and a showcase agent besides. The quote builder's \$392,382 looked modest beside it.

The ledger ranks them differently. In plain words: take the projected banked value, discount it by how confident you are in it, and divide by how many weeks of effort it takes to build.

> **Priority score = projected banked value × confidence factor ÷ effort in weeks**

Confidence is High (0.9) when the baseline was timed and something similar already works, Medium (0.7) when the baseline was sampled, and Low (0.5) when it's still an estimate. Notice that the score uses banked value, not theoretical value. An idea with nothing planned for its hours ranks at zero, however large its promise.

The quote builder had a timed baseline and a measured pilot, so its confidence was High. It would take 4 weeks. So \$392,382 × 0.9 ÷ 4 = **88,286.**

The dispute agent's baseline was sampled rather than fully timed, and nothing like it was running yet, so its confidence was Medium. It would take 12 weeks. So \$533,458 × 0.7 ÷ 12 = **31,118.**

:::{figure} ../images/ch06-priority.png
:label: fig-ch06-priority
:alt: The dispute agent with the larger banked value ranked second at 31,118, and the quote Skill with the smaller banked value ranked first at 88,286, with confidence, effort and payback for each
:width: 100%
:align: center

Figure 6.5: Less money, but surer and a third of the effort. Money you can bank soon and believe in ranks above the biggest slide.
:::

The smaller prize ranks almost three times higher. That isn't a quirk of the formula; it's the point of it. The quote builder's money is more certain, arrives sooner, and frees the team to build the next thing in a month instead of a quarter. And by going first, it pays for the dispute agent's build cost before the agent is finished.

The rest of Brightwater's list fell into place the same way. The collections email Skill scored 27,000 and the purchase order intake agent 24,535. The credit memo Skill scored 7,896: real value, but mostly unbanked so far. And two ideas scored zero. The portal bot and the cash application agent had been sized, but nobody had yet decided what their freed hours would do, so they had no projected banked value to rank. A zero isn't a verdict on the idea. It's a message to its owner: finish the plan, and the idea will rank.

That's the quiet discipline of sizing. A portfolio ranked by theoretical value rewards the biggest promises. A portfolio ranked by banked value, confidence and effort rewards the ideas most likely to put money on the P&L soon, and it gives every idea owner the same way to move up the list: measure better, plan the hours, build smaller.

## Monday Morning

Pick your top idea from the sort and time at least 20 real units of the current work before anyone builds anything, ugly cases included. When you pilot, time the new work with review included, and write down the weekly oversight hours someone will spend looking after it. Agree the load factor and productive hours with finance once, and use them for every idea. Count errors where the work lands, before and after, and put the cost of poor quality next to the hours, minus sign and all. Then rank your ideas by priority score, not by the biggest number on the slide.

*Size every idea the same way, from real units, and rank by what you can bank, not by what you can promise.*

## Notes

- Daniel Kahneman and Amos Tversky, "Intuitive Prediction: Biases and Corrective Procedures," *TIMS Studies in Management Science* (1979), on the planning fallacy.
- Joseph M. Juran, *Quality Control Handbook* (1951), on the cost of poor quality.
- Philip B. Crosby, *Quality Is Free* (1979).
