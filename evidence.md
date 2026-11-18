# Evidence: Key Insights from User Research

> **For the team (delete this box before submitting):** Anything in `[square brackets]` must be filled in from your **own interview notes**. Do not let an AI tool write quotes, numbers or findings. Use real names only if the person agreed in writing. Otherwise keep the role-based labels below.

## 1. Research question

In internal pharmaceutical warehouses, **which operational steps are still recorded on paper or in Excel, and why?**

- If paper fills a **gap between existing systems** (checklists, movement notes, issue reports), a lightweight digital tool like TrackIt fits.
- If paper is **required by regulation or validation**, it is harder to replace, and the idea must be adjusted.

## 2. Research participants

We conducted [N] interviews and one internship observation between [date] and [date].

| ID | Role | Organisation (anonymised) | Type of evidence | Date |
|----|------|---------------------------|------------------|------|
| P1 | Global Logistics, IT integration of external warehouses | Large pharmaceutical company | Interview (strategic context, **external** warehouses) | 26 Oct 2026 |
| P2 | Logistics intern (team member) | Large pharmaceutical company | **Own observation** during internship, internal warehouse | [period] |
| P3 | Project manager, internal warehouse | Large pharmaceutical company | Interview (operational view, internal warehouse) | [date] |
| P4 | [e.g. warehouse operator / picker] | [anonymised] | Interview | [date] |
| P5 | [e.g. quality / GMP specialist] | [anonymised] | Interview | [date] |
| P6 | [e.g. other industry: food or cold chain] | [anonymised] | Interview | [date] |

> The brief requires **at least one interview per group member**. Add one row per member.

## 3. Interview notes

Use the same template for every participant.

### P1: Global Logistics (external warehouses)
- **How it works today:** Works on IT integrations for external warehouses. Gave a strategic view, not internal-warehouse detail.
- **Key points:**
  - Compliance ("license to operate") always comes first when prioritising digital projects.
  - Pharma adopts new logistics technology late, after it has been proven elsewhere.
  - Digitalisation changed staff work from coordinating people to fixing errors and doing root-cause analysis.
  - Master-data quality is poor and causes problems.
  - The efficiency benefits of past digitalisation were **not quantified** (her own words: [add exact quote]).
- **Limits:** About external warehouses, so it gives context but does not confirm the internal paper process.
- **Supports:** Insight 4 (efficiency is not measured), positioning (compliance first, complement existing systems).

### P2: Internship observation (internal warehouse)
- **What was observed:** Operators logged movements, checks and problems partly by hand on paper. When a supervisor asked where a shipment was or what was stuck, someone had to search for the answer.
- **What was on paper exactly:** [list the forms or logs]
- **Did the site have a WMS?** [yes / no / partly]
- **Limits:** One person's view, from inside the team, so it needs confirming by other interviews.
- **Supports:** Insights 1, 3

### P3: Project manager, internal warehouse
- **How it works today:** [walk-through from arrival to dispatch]
- **Paper / Excel steps and why:** [ ]
- **Key quotes:** "[ ]"
- **Pain points (with time or cost if given):** [ ]
- **Surprises:** [ ]
- **Supports:** [insight numbers]

### P4–P6: [copy the P3 template]

## 4. Key insights

**Core finding:** [Rewrite after all interviews.] Draft: *In the internal warehouse we studied, shipment progress is tracked partly on paper. As a result, supervisors cannot quickly see where a shipment is or what is stuck, and managers cannot measure efficiency.*

Each insight follows: **who needs what → because → but today**.

| # | Insight | Sources | Strength |
|---|---------|---------|----------|
| 1 | **Manual shipment tracking (core problem).** Operators need to record each shipment's progress through inbound, sampling, storage and distribution, *because* supervisors and managers rely on it to coordinate daily work, *but* it is tracked manually on paper, which is slow and hard to follow. | P2, P3, [ ] | [e.g. 3 of 6 participants] |
| 2 | **Sampling step.** Operators need to record when each shipment is sampled, *because* every batch must be tested to comply with pharmaceutical regulations, *but* this adds another manual step. | [ ] | [ ] |
| 3 | **Issue resolution.** Warehouse staff need to spot and resolve operational issues quickly, *because* a delay in one step holds up the following shipments, *but* issues are not recorded in one place, so stuck processes are found late. | P2, [ ] | [ ] |
| 4 | **Efficiency measurement.** Managers need visibility of delays and performance to plan capacity and budgets, *but* delays and issues are not recorded consistently, so efficiency cannot be measured. | P1 (context), [ ] | [ ] |
| 5 | **Inbound/outbound congestion.** Supervisors need to keep goods moving through inbound and outbound areas, *because* overfilled areas slow the whole warehouse, *but* there is no central view of how full these areas are. | [ ] | [ ] |
| 6 | **Delivery planning.** Managers want to schedule deliveries at efficient times, *because* poorly timed deliveries create traffic at the docks, *but* there is no quantitative data to plan with. | [ ] | [ ] |

### Answer to the research question
[Gap between systems, or regulatory requirement? What did participants say?]

### What contradicted our assumptions
[Be honest. This is a strength, not a weakness. Example: "P5 said sampling records must stay on paper because…, so TrackIt only records *that* a sample was taken, not the result."]

## 5. Implications for the product

| Insight | Feature in `product.md` | Priority |
|---------|------------------------|----------|
| 1 | Record a stage change for a shipment (mock scan or select) | Must |
| 2 | "Awaiting sampling" and "Sample taken" stages, time spent waiting for sampling | Must |
| 3 | Report an issue with a category. Open issues stay visible until resolved. Shipments waiting too long are flagged as delayed. | Must |
| 4 | Dashboard: average time per stage, delays, most common issue types | Must |
| 5 | Inbound and outbound area fill (count of shipments vs fictional capacity) | Must |
| 6 | Arrivals and dispatches by hour of day (from fictional data) | Must |
| 4 | 7-day trend of activities and time per shipment | Must |

| Strategy · P1 | **SAP integration** (simulated in the prototype): import shipments and products from SAP, send recorded activities and issues to SAP | Must |

> **SAP integration** is the team's strategic decision and the core purpose of TrackIt. P1 works on IT integration of warehouses and mentioned poor master-data quality, which supports connecting to SAP rather than creating a separate data island. **Ask your interviewees** whether they would want floor data to go into SAP and what would make them trust it, and add their answers here.

**Not supported by evidence, so excluded:** AI issue classification, quarantine management, notifications.

## 6. Ethics and data
- All participants were told this is a university project and agreed to notes being taken.
- Names, companies and sites are anonymised unless written consent was given.
- No confidential company data, documents or photos are stored in this repository.
