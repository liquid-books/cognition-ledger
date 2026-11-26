---
title: "Appendix D: The Formulas, Worked Through"
short_title: "The Formulas"
label: app-d-formulas
description: "Every Cognition Ledger formula worked through on the Brightwater numbers."
tags: [cognition-ledger, ai, business, appendix]
---

# Appendix D: The Formulas, Worked Through

:::{figure} ../images/appD-infographic.png
:label: fig-appD-infographic
:alt: Opening infographic summarising The Formulas, Worked Through
:width: 80%
:align: center

*Four numbers, kept side by side and never added together.*
:::


Every formula in this book, in the order you will use it, each worked on the Brightwater Distribution case. Brightwater is fictional: a regional industrial supply distributor with 1,100 employees and \$420 million in revenue, working on its Order-to-Cash value stream. Results are rounded the way the ledger shows them.

You don't need to do any of this by hand. The companion Excel workbook, **the Cognition Ledger workbook, available from DrLee.ai**, carries every formula below with live calculations and the full Brightwater case already entered. It has five working sheets: the Ledger (one row per idea), the Sort Score, the Bank Plan (the Hour Budget lines and realized dollars by quarter), the CFO Dashboard and the Assumptions. Change an assumption once and every sheet follows.

## The House Assumptions

Agree these with finance before anyone quotes a dollar.

| Assumption | Default | Why |
|---|---|---|
| Load factor on base pay | 30% | Benefits, payroll taxes, space and equipment; typical range 25% to 40% |
| Productive hours per person per year | 1,880 | 2,080 paid hours less about 200 for holidays, vacation and sick time |
| Working weeks per year | 47 | Matches 1,880 hours at 40 hours a week |
| Cost of capital | 7% | Treasury's borrowing or hurdle rate; prices the Speed lever |
| Confidence factors | High 0.9, Medium 0.7, Low 0.5 | Used in the priority score |

## Why the Money Vanishes

**Claimed savings = hours saved per person per week × people × working weeks × hourly cost**

4 hours × 200 people = 800 hours a week. × 47 weeks = 37,600 hours a year. × \$40 = **\$1,504,000**, the "\$1.5 million" on the slide. None of it is money until someone decides where the hours go.

## Seeing the Work

**Lead time = touch time + wait time**

**Activity ratio = touch time ÷ lead time**

Brightwater's typical quote gets 35 minutes of work but takes two working days to reach the customer (Chapter 3). Counting an 8-hour working day, lead time is 960 minutes, so the activity ratio is 35 ÷ 960 = **3.6%**. The quote is being worked on less than one minute in twenty-five.

**Rolled %C&A = the %C&A of every step multiplied together**

%C&A (percent complete and accurate) is the share of what a step receives that it can use as is. Brightwater's six mapped steps receive work at 80%, 78%, 70%, 55%, 90% and 82% complete and accurate. 0.80 × 0.78 × 0.70 × 0.55 × 0.90 × 0.82 = **17.7%**. Fewer than one unit in five would get through the whole Order-to-Cash stream without someone correcting, adding or chasing something. (Chapter 3's 42% is the same arithmetic on the quote stream alone: 0.60 × 0.85 × 0.90 × 0.92.)

## Sorting

**Cognition Index = average of C1 to C3. Autonomy Index = average of A1 to A4. Risk Index = average of R1 and R2.**

Dispute triage (OTC-04): Cognition (4 + 5 + 4) ÷ 3 = **4.33**. Autonomy (5 + 4 + 4 + 4) ÷ 4 = **4.25**. Risk (3 + 3) ÷ 2 = **3.0**. Cognition is above 2.0, Risk is below 4.5, Autonomy is 3.0 or higher and Risk is 3.0 or higher, so the result is **Agent + human checkpoint**. Appendix B has the full rule.

## Sizing Time

**Net hours freed per year = ((baseline minutes per unit − new minutes per unit) ÷ 60 × units per week − oversight hours per week) × working weeks**

New minutes include the time a person spends reviewing the AI's output. Oversight hours cover monitoring, exceptions and upkeep.

Quote builder (OTC-01): 660 quotes a week drop from 35 to 15 minutes each, review included, and someone spends 2 hours a week keeping the price file current. (35 − 15) ÷ 60 × 660 = 220 hours, minus 2 = 218 hours a week. × 47 = **10,246 hours a year**.

Dispute triage (OTC-04): 225 disputes a week drop from 45 to 18 minutes, with 8 hours a week of oversight. (45 − 18) ÷ 60 × 225 = 101.25, minus 8 = 93.25 hours a week. × 47 = **4,383 hours a year**.

**Full-time equivalents = net hours freed per year ÷ productive hours per person**

10,246 ÷ 1,880 = **5.45 FTEs** of capacity. The Avoid line in the quote Skill's Hour Budget uses exactly 4 of them: 4 × 1,880 = 7,520 hours.

## Sizing Money

**Loaded hourly rate = annual base pay × (1 + load factor) ÷ productive hours per year**

OTC-01: \$62,000 × 1.30 ÷ 1,880 = **\$42.87 an hour**.

**Theoretical value = net hours freed per year × loaded hourly rate**

OTC-01: 10,246 × \$42.87 = **\$439,270 a year**. This is the size of the opportunity. It is never reported as savings.

## Sizing Quality

**Cost of poor quality (COPQ) avoided = units per year × (baseline error rate − new error rate) × cost per error**

Units per year are units per week × 47.

OTC-04: 225 × 47 = 10,575 disputes a year. Error rate falls from 6% to 2%, a 4-point drop, and each wrong credit costs \$310. 10,575 × 0.04 × \$310 = **\$131,130 a year**.

OTC-01: 660 × 47 = 31,020 quotes a year. Errors fall from 8% to 3%, and each costs \$120 in rework and margin given away. 31,020 × 0.05 × \$120 = **\$186,120 a year**.

If the AI's error rate is higher than the person's, the result is negative, and the ledger shows it.

## Banking

**Avoid or Cut line value = hours assigned × the rate of what you stop paying for**

OTC-01 Avoid: 7,520 × \$42.87 = **\$322,382**.

**Grow line value = hours assigned × gross margin per redeployed hour**

OTC-01 Grow: 2,000 × \$35 = **\$70,000**.

**Speed value = annual revenue ÷ 365 × days of lead time (or DSO) removed × cost of capital**

DSO (days sales outstanding) is the average number of days customers take to pay. OTC-04 closes disputes three days faster, cutting DSO by three days. \$420,000,000 ÷ 365 × 3 = **\$3.45 million of cash freed**, worth \$3,452,055 × 7% = **\$241,644 a year**.

**Projected banked value = the sum of an Hour Budget's lever lines**

OTC-01: \$322,382 + \$70,000 = **\$392,382**. OTC-04: \$85,277 (Cut) + \$75,407 (Avoid) + \$131,130 (Fix) + \$241,644 (Speed) = **\$533,458**, more than its \$175,776 theoretical value, because Fix and Speed don't come from hours.

**Leak = net hours freed − hours assigned to levers. Its P&L value is \$0.**

OTC-01: 10,246 − 7,520 − 2,000 = **726 hours**. For reporting only, the ledger also shows what leaking hours would be worth at loaded cost: 726 × \$42.87 = \$31,125. That figure is a warning light, not money.

## Costs, Payback and Priority

**Net annual banked value = projected banked value − annual run cost**

OTC-01: \$392,382 − \$9,000 = **\$383,382**.

**Payback in months = one-time build cost ÷ (net annual banked value ÷ 12)**

OTC-01: \$15,000 ÷ (\$383,382 ÷ 12) = \$15,000 ÷ \$31,949 = **0.47 months**, under one month.

**Priority score = projected banked value × confidence factor ÷ effort in weeks**

OTC-01: \$392,382 × 0.9 (High) ÷ 4 weeks = **88,286**. The score ranks banked value, not theoretical value, so ideas with no Hour Budget score zero.

## Proving

**Realization rate = realized value ÷ projected banked value**

Brightwater after three quarters: \$288,463 ÷ \$1,292,292 = **22.3%**. For the quote Skill alone: \$161,192 verified ÷ \$392,382 = 41.1%. Below 50% a year after go-live means the Hour Budget isn't being worked.

**Realization gap = theoretical value − realized value**

\$1,214,780 − \$288,463 = **\$926,317**: the promise that hasn't reached the P&L yet.

Brightwater's full dashboard after three quarters:

| Measure | Value |
|---|---|
| Ideas in the ledger | 8 |
| Net hours freed per year | 32,301 |
| Theoretical value | \$1,214,780 |
| Projected banked value | \$1,292,292 |
| Realized and CFO verified | \$288,463 |
| Realization rate | 22.3% |
| Leak | 9,401 hours, worth \$343,614 at loaded cost |
| Cost of poor quality avoided | \$691,370 |

## When Many Workers Run One Stream

**Compounded accuracy = accuracy of step 1 × accuracy of step 2 × ... × accuracy of the last step**

Five steps, each right 95% of the time: 0.95 × 0.95 × 0.95 × 0.95 × 0.95 = **77%**. Nearly one unit in four has an error somewhere. That is why the human checkpoint goes where errors compound.

**Little's law: average work in progress = average arrival rate × average lead time**

Rearranged, lead time = work in progress ÷ arrival rate. A queue that receives 40 items a day and holds 400 open items has an average lead time of 400 ÷ 40 = **10 days**. Halve the queue at the same arrival rate and lead time halves too, which is why a work-in-progress limit speeds things up.
