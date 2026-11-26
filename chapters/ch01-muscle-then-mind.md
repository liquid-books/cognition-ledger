---
title: "Chapter 1: Muscle, Then Mind"
short_title: "Muscle, Then Mind"
label: ch-01-muscle-then-mind
description: "Factories bolted electric motors where the steam engine stood and waited decades for the gain. We are bolting AI onto the old org chart now."
tags: [cognition-ledger, ai, business, chapter]
---

# Chapter 1: Muscle, Then Mind

:::{figure} ../images/ch01-infographic.png
:label: fig-ch01-infographic
:alt: Opening infographic summarising Muscle, Then Mind
:width: 80%
:align: center

*The engine was never the revolution. The floor plan was.*
:::


Stand in an American machine shop around 1900 and look up.

Running the length of the ceiling is a steel shaft about three inches thick, spinning. Every few feet a pulley is clamped to it, and from every pulley a leather belt drops through the air to a lathe, a drill press, a grinder. The shaft is turned by one enormous engine at the end of the building, and once that engine starts in the morning, the whole web of shafts and belts turns until nightfall, whether fifty machines are working or five. There's oil everywhere, because thousands of drip oilers keep the bearings alive. There's noise everywhere, because belts slap and pulleys whine. And there's a particular kind of fear, because if the engine or the main shaft breaks, every machine in the room stops at once, and stays stopped until it's fixed.

Now a salesman arrives with the most exciting technology of his age: the electric motor. It's cleaner than steam, easier to start, cheaper to run. The owner is convinced. He has the steam engine hauled out and puts a large electric motor in the spot where it stood. He connects the motor to the same shaft. The same belts drop to the same machines, in the same rows, on the same floors.

And then, for a very long time, almost nothing happens to his productivity.

This chapter is about why. It's the most useful story I know for any leader spending money on AI, because we are standing in that machine shop again, and most of us are doing exactly what the owner did.

## The engine in the basement

To see why the motor disappointed, you have to see the factory it was dropped into. For most of the nineteenth century, a factory was a machine for moving power. A single prime mover, first a water wheel and later a steam engine, produced rotation in one place. The building's job was to carry that rotation to every machine. It did that with line shafts, long iron or steel bars hung from the ceiling, connected to smaller countershafts and then by belts to each machine.

That one design decision shaped everything else. Machines had to sit in rows beneath the shafts, because that's where the power was; one historian of the period, Warren Devine, notes that they were arranged parallel to the line shafts "of necessity." Buildings went up instead of out, several storeys tall, because a long shaft wastes power and a tall building keeps the shafts short. Work moved wherever the power layout allowed rather than wherever it made sense. And the waste was enormous. Engineers of the time estimated that simply turning the shafting, before a single part was cut, used anywhere from a third to three quarters of the power the engine produced. The whole system spun all day long, paying for friction, belts and bearings, regardless of how much work was actually being done.

Notice what the factory was organized around. Not the product. Not the flow of materials from raw stock to finished part. It was organized around the engine, because the engine was the scarce, expensive, central thing, and everything else had to be arranged to reach it.

:::{figure} ../images/ch01-line-shaft-cost.png
:label: fig-ch01-line-shaft-cost
:alt: Cutaway of a multi-storey line-shaft factory with one engine driving a ceiling shaft and belts to machines in rows, with callouts on rows under the shaft, tall buildings, shafting using a third to three quarters of the power, and one breakdown stopping every machine
:width: 100%
:align: center

The line-shaft factory was laid out to carry power, not to move work. Its rows, its height, its wasted energy and its single point of failure all came from the engine.
:::

Hold that picture in your head. We'll come back to it, because most offices are built the same way.

## Forty years of disappointment

Thomas Edison's first central power stations opened in the early 1880s. You might expect factories to have electrified in a rush. They didn't. In 1899, electric motors supplied less than 5 percent of the mechanical power in American factories. By 1909 it was a little under a quarter. By 1919 it was just over half, and by 1929 it was about 78 percent.

That's a slow climb, but it's the second fact that matters more. For most of that period, the motors didn't show up in productivity. Productivity here means output per unit of input, how much a factory produces for the labour and capital it uses, and it's the number that tells you whether a technology is making an economy richer or just busier. Through the first decades of electrification, American manufacturing productivity grew at a modest pace. Then, in the 1920s, it surged. The economic historian Paul David measured the jump: productivity growth in manufacturing ran about five percentage points a year faster in the 1920s than in the decade before. Roughly half of that acceleration lined up statistically with the spread of electric motors through the nation's factories. It had taken about four decades from the first central power stations for the payoff to arrive.

:::{figure} ../images/ch01-dynamo-lag.png
:label: fig-ch01-dynamo-lag
:alt: Bar chart of the share of US factory machine power supplied by electric motors, rising from under 5 percent in 1899 to 78 percent in 1929, with a forty-year gap from the first power stations to the 1920s productivity surge
:width: 100%
:align: center

Figure 1.1: Electrification was neither fast nor instantly profitable. The payoff came when the share of electric power passed half and factories began to be rebuilt around it.
:::

David published this finding in 1990 in a short paper with a long shadow: "The Dynamo and the Computer." He wrote it to answer a puzzle that was bothering economists at the time. Three years earlier, the Nobel laureate Robert Solow had written one of the most quoted sentences in economics: "You can see the computer age everywhere but in the productivity statistics." Companies had spent heavily on computers for years, and the numbers hadn't budged. Was the computer a dud?

David's answer was no, and his evidence was the dynamo. Around 1900 you could have said the same thing about electricity: you could see dynamos everywhere but in the productivity statistics. The technology wasn't the problem. The problem was that a general-purpose technology, one that touches every kind of work, pays off only after the work itself has been reorganised around it. That takes years, because the old arrangements are built into buildings, habits, skills and balance sheets. When the reorganisation finally happens, the gains arrive in a rush, and people who gave up early look foolish.

That's the first small surprise in this chapter. The lag wasn't caused by the motor being immature. It was caused by everything around the motor being mature, and stubbornly so.

:::{figure} ../images/ch01-why-the-lag.png
:label: fig-ch01-why-the-lag
:alt: A ready electric motor facing a wall of four blocks labelled buildings, habits, skills and balance sheets, with an arrow breaking through as reorganise the work to reach productivity gain
:width: 100%
:align: center

The motor was not what held productivity back. The old arrangement around it was, and the gain arrived only once the work was reorganised.
:::

## Group drive, unit drive, and the floor plan nobody drew

If the payoff came from reorganisation, what exactly got reorganised? The answer is the most important story in this book, so let's walk through it slowly.

Factories electrified in roughly three steps, and the first two looked like progress while changing very little.

In the first step, owners did what our machine-shop owner did. They pulled out the steam engine and put a big electric motor in its place, still driving the same line shafts. This was cleaner and somewhat cheaper to run, but the shafts still spun all day, the machines still stood in rows beneath them, and a broken shaft still stopped the room. It was the old factory with a new engine.

In the second step, called group drive, the single big motor was replaced by several smaller ones. Each motor turned a shorter section of shafting that powered a group of machines. That cut some of the friction losses and meant one breakdown no longer stopped the entire plant. It was a real improvement. But it was still a shaft-and-belt factory. The machines were still placed where the shafts ran, and the building was still shaped by the need to carry power.

The third step, called unit drive, was different in kind. Each machine got its own electric motor. As early as 1904, one engineer was already calling for "a complete re-design of present machine tools with motor operation alone in view," and over the following decades the motor moved inside the machine itself. Once that happened, the shafts and belts had no reason to exist.

And once the shafts were gone, the factory could be designed for the first time around the work instead of around the power. Machines could stand in the order the product moved through them. Buildings could spread out on one level, because there was no longer any reason to stack floors to keep shafts short. Paul David describes the result as single-storey, linear factory layouts, which allowed far better handling of materials and much more flexibility in where machines went. Overhead space opened up for cranes and light. A failed motor stopped one machine, not a room. Machines could be moved when the product changed. Power was used only when a machine was actually running.

:::{figure} ../images/ch01-group-vs-unit.png
:label: fig-ch01-group-vs-unit
:alt: Two factory floor plans seen from above: on the left one big motor driving a line shaft with belts to machines lined up beneath it, on the right machines each with their own motor arranged in the order work flows
:width: 100%
:align: center

Figure 1.2: Both factories run on electricity. Only the one on the right was redesigned around it, and that's where the 1920s productivity came from.
:::

Here is the reveal, and it's worth reading twice. The electric motor was necessary for the gain, but it wasn't the gain. The gain came from what the motor made possible: a new floor plan, a new flow of materials, a new way of organising work. Factories that put motors where the steam engine stood got a little cheaper. Factories that redrew the floor around the motor got a lot more productive.

**The engine was never the revolution. The floor plan was.**

Why did it take so long? Not because people were stupid. A multistorey mill full of shafting represented an enormous investment, and it still worked. Ripping it out to build a single-storey plant meant writing off capital that hadn't worn out yet. So most owners retrofitted, and retrofitting kept the old layout in place. The full redesign tended to happen when someone built a new plant from scratch, or when an old one finally wore out, and that waits on the slow clock of buildings and depreciation. Engineers and managers also had to learn what the new layout should look like, and that knowledge spread slowly from the factories that tried it first. The same decade that saw Henry Ford's moving assembly line, introduced in 1913, was full of people working out, by trial and error, what a factory could look like when it was designed around flow.

There's a lesson in that for anyone tempted to say "we'll redesign later." Later, it turns out, can be a generation.

:::{figure} ../images/ch01-floor-plan-quote.png
:label: fig-ch01-floor-plan-quote
:alt: Quote card reading The engine was never the revolution. The floor plan was.
:width: 100%
:align: center

Figure 1.3: The one sentence to remember from a century of electric motors.
:::

## Bolting AI where the engine stood

Now walk out of the machine shop and into a modern office. Look up again.

You won't see a line shaft. But you'll see the same design principle at work. The office is organized around a scarce, expensive, central resource, and everything is arranged to reach it. In the factory it was power. In the office it's judgment: the attention of the people who can read a document, understand it and decide what to do. Work is routed to wherever that attention sits. A quote goes to the inside-sales desk. A new account goes to credit. A disputed invoice goes to a specialist. Each desk has its queue, each queue has its backlog, and the org chart is the line shaft that carries work from one queue to the next.

That structure made perfect sense when thinking work could only be done by people. It's built into how companies are organized, how jobs are defined, how departments are budgeted, and how performance is measured. It's as solid as the brick walls of a four-storey mill.

:::{figure} ../images/ch01-factory-to-office.png
:label: fig-ch01-factory-to-office
:alt: Two-column mapping from a 1900 factory to today's office: scarce power to scarce judgment, line shaft to org chart, belts to each machine to handoffs between desks, machines in rows under the shaft to desks with queues and backlogs
:width: 100%
:align: center

The office copies the line-shaft factory. Judgment is the scarce resource, the org chart is the shaft, and every handoff is a belt to the next queue.
:::

AI makes thinking work cheap in the way electricity made rotation cheap. It can now do a large share of the reading, sorting, drafting, matching and checking that used to require a person's attention. So what are most companies doing with it?

Exactly what the machine-shop owner did. They are putting the new engine where the old one stood.

That's what happened at Brightwater Distribution, the fictional industrial supplier you met in the introduction. Dana Ruiz, the CEO, bought AI assistant licences for the 200 people in her offices, and every one of them got a little faster at their piece of the work. Tom Okafor's inside-sales reps drafted emails faster. Lena Ortiz in credit summarised financial statements faster. The collections team wrote reminder letters faster. And the shape of the work didn't change at all. A customer's request for a quote still sat in a shared inbox until someone picked it up. A large discount still waited in Tom's approval queue. A new account still waited for credit. The handoffs between desks, where most of the time actually goes (Chapter 3 will show just how much), were untouched.

:::{figure} ../images/ch01-bolt-on.png
:label: fig-ch01-bolt-on
:alt: Two rows comparing wave one, where AI is added to each department box but queues remain between them and the customer waits days, with wave two, where a continuous stream carried by Skills and agents has human checkpoints and the customer waits hours
:width: 100%
:align: center

Figure 1.4: The top row is group drive with a smarter motor on every desk. The bottom row is unit drive: the work redesigned so it flows, with people placed where decisions matter.
:::

This is the first wave of any general-purpose technology, and it's not a mistake to be in it. You have to buy the motor before you can redesign the floor. The mistake is to think the first wave is the destination, and to judge the technology by what it delivers there. Brightwater's \$1.5 million slide is a first-wave number: the sum of a lot of slightly faster desks. Like the early electric factories, Brightwater got a little cheaper per task and no more productive as a business.

So what's the AI equivalent of unit drive?

It's the two tools this book keeps returning to, used the way unit drive was used rather than the way the big replacement motor was. The first is **packaged expertise**: your best person's know-how, written down once and used by everyone, which today usually takes the form of a Skill. A Skill puts the house way of doing a piece of thinking work right at the point where the work happens, the way unit drive put a motor right inside each machine. The quote no longer has to travel to the one rep who knows the pricing rules, because the rules travel with the Skill. The second is **autonomous cognition**: a digital worker that runs a whole job, which today we call an agent. An agent can pick up a piece of work when it arrives and carry it across systems and steps, which is what removing the belts between machines did. Work no longer has to wait for someone to notice it in an inbox and pass it to the next desk.

But here's the part the electric motor already taught us. A Skill dropped onto the old org chart is a motor bolted to the old shaft. It makes one desk faster. It doesn't remove the queue in front of that desk, the approval behind it, or the handoff after it. The value only arrives when someone redraws the floor: decides which queues can disappear, which approvals can become rules, where people truly need to decide, and how work should flow from request to cash. That redesign is a management act, not a technology purchase.

Every analogy breaks somewhere, and it's worth saying where this one does. A motor never made a decision. It turned when switched on and stopped when switched off. AI does something closer to judgment, which means it can be wrong in ways a motor couldn't, and its errors can travel downstream and compound. That's why the redesigned office isn't simply "AI everywhere." It's AI doing the thinking work it's good at, with people placed at the points where a mistake would be expensive. In the figure above those are the pink checkpoints. The factory analogy tells you to redesign the floor. It doesn't tell you where the people stand. Later chapters do.

:::{figure} ../images/ch01-where-analogy-breaks.png
:label: fig-ch01-where-analogy-breaks
:alt: Comparison of an electric motor, which turns on and off and makes no decisions, with AI, which does work close to judgment, can be wrong and whose errors compound downstream, above a five-step flow where AI does most steps and a person decides at the steps where a mistake would be expensive
:width: 100%
:align: center

Where the motor analogy breaks: AI makes judgment-like calls and can be wrong. The redesigned flow lets AI do the thinking work and puts people at the steps where a mistake would be expensive.
:::

## Three waves

Step back far enough and a pattern appears in every cheap new source of power.

The Industrial Revolution let us outsource muscle. Steam, and then electricity, did the lifting, hauling, pumping and spinning that people and animals had done. That didn't just make old businesses cheaper. Once the work was redesigned around cheap power, it made possible businesses that couldn't have existed before: the modern factory, the railroad, and on the back of the railroad, mass retail serving customers hundreds of miles away. The firms that won were not the ones that bought the most engines. They were the ones that redesigned the work, and then the business model, around cheap muscle.

AI lets us outsource cognition: reading, sorting, drafting, matching, checking, and choosing within limits that we set. The same pattern is already repeating, and it comes in three waves.

The **first wave** buys the tool. Companies buy licences and save minutes. The value is real but small, it's spread thinly across thousands of tasks, and as the next chapter shows, most of it leaks away before it reaches the P&L. This is the big motor where the steam engine stood.

The **second wave** redesigns the work. Companies map how a piece of work flows from request to delivery, remove what's wasteful, and rebuild the flow around cheap cognition: Skills where a person should stay in charge of a task, agents where a whole job can run on its own with checkpoints, plain automation where no thinking is needed at all. The value here is much larger, because it attacks the waiting and the handoffs, not just the typing. This is unit drive and the single-storey floor.

The **third wave** builds new business models. When thinking work costs almost nothing per unit, you can do things that never paid before: price a service by the outcome it delivers rather than the hours it takes, run a ten-person firm that serves a million customers, sell a product that comes with its own analyst built in. This is the railroad and mass retail. Chapter 13 is about this wave, and it's where the largest fortunes of the coming decades will probably be made.

:::{figure} ../images/ch01-three-waves.png
:label: fig-ch01-three-waves
:alt: A staircase of three waves, buy the tool, redesign the work, and new business models, with examples from the age of muscle and the age of mind beneath each, and Brightwater marked at the first wave
:width: 100%
:align: center

Figure 1.5: The same three waves for cheap muscle and cheap thinking. Each wave builds on the one before, and most of the money sits in the second and third.
:::

Here is the second small surprise. The waves aren't optional stages you can skip. You can't build an outcome-priced business on top of a quoting process that takes two days and fails half the time, any more than you could run a railroad on line shafts. Each wave pays for and teaches the next. The first wave gives you the tools and the familiarity. The second wave gives you redesigned streams that run at machine speed. Only then does the third wave become possible.

That's why this book lives mostly between the first and second waves. Brightwater is firmly in the first. It has the motors. It has a \$1.5 million slide. It doesn't have a new floor plan, and it doesn't yet have a way to tell whether any of the money is real. The rest of Part I shows what's in the way, and Part II shows how to get across.

## What the dynamo asks of you

If you take one thing from a century of electric motors, let it be this: the technology was never the bottleneck. Management was.

The engineers knew by the early 1900s that unit drive was better. The motors existed. The economics, for a new plant, were clear. What held factories back was the cost and difficulty of changing everything that had been arranged around the old engine: the buildings, the layouts, the job definitions, the habits, the accounting. That's precisely what holds companies back with AI today. The models are good enough to do a remarkable share of thinking work. What isn't ready, in most companies, is the floor plan.

There's an uncomfortable implication for leaders. If you're waiting for the next model, the next version, the next breakthrough before you start redesigning work, you're the factory owner waiting for a better motor. The motor was fine. In fact, a better motor bolted to the same shaft would have changed nothing important. What changed the factory was a decision, made by someone with authority over the building, to stop arranging work around the old source of power.

The good news is that you don't have to wait for your offices to wear out, the way factory owners waited for their buildings. Rearranging knowledge work doesn't require pouring concrete. A value stream (the full set of steps that turns a customer's request into delivered value and, eventually, cash) can be redesigned in months, not decades. But it won't redesign itself, and buying more licences won't do it for you. Somebody has to draw the new floor plan.

The next two chapters explain what's standing between you and that floor plan. Chapter 2 follows the hours AI saves and shows exactly where they go when nobody decides. Chapter 3 shows you the factory hidden inside your office, and why its biggest waste is time spent waiting rather than time spent working.

Before you turn the page, though, go back to that machine shop for a moment. Picture the owner a decade after he installed his motor, standing under the same spinning shaft, wondering why the salesman's promises never quite came true. He wasn't wrong to buy the motor. He just never asked the question that mattered: now that power can go anywhere, where should the machines go?

The question for you is the same, with one word changed. Now that thinking can go anywhere, where should the work go?

## Monday Morning

Pick one process you own and draw it the way it really runs today: each desk it passes, each queue it waits in, each approval it needs. Then mark every place your AI tools touch it. If every mark sits on a desk and none sits on a queue, you've bolted the motor where the steam engine stood. Circle the longest wait on your drawing; that's where your floor plan starts.

*New technology pays off only when you redesign the work around it, and AI is no exception.*

## Notes

- Paul A. David, "The Dynamo and the Computer: An Historical Perspective on the Modern Productivity Paradox", *American Economic Review* (Papers and Proceedings) 80, no. 2, 1990.
- Warren D. Devine Jr., "From Shafts to Wires: Historical Perspective on Electrification", *Journal of Economic History* 43, no. 2, 1983.
- Robert M. Solow, "We'd Better Watch Out", *New York Times Book Review*, 12 July 1987.
