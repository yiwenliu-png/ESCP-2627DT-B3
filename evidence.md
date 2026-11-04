# Evidence: Key Insights from User Research

## Sources

| ID | Source | Role | Context |
|----|--------|------|---------|
| S1 | Interview: Louise Jäger, 26 Oct 2026 | Global Logistics, Novo Nordisk (IT integrations of external warehouses) | External warehouses, strategic view |
| S2 | Internship observation (team member) | Former intern, internal pharma warehouse | Internal warehouse, first-hand |
| S3 | Interview: Amalie Fischer | Intern, Novo Nordisk; observes internal warehouse management | Internal warehouse, first-hand |

## Key Insights

### 1. Recording is manual
**Warehouse operators**
want to log batch movements, checks and problems
**because** every step must be traceable for compliance,
**but** logging is partly done on paper, which is slow and hard to track.
*Sources: S2, S3*

### 2. Finding status takes a search
**Warehouse supervisors**
want to know where a batch is and what is stuck
**because** they need to resolve issues before they delay deliveries,
**but** nothing is recorded digitally, so someone has to search for the answer.
*Source: S2*

### 3. Efficiency is not measured
**Warehouse managers**
want to measure warehouse efficiency
**because** they need it for capacity planning and budgeting,
**but** no data is captured at the source, and even at corporate level the efficiency benefits of digitalisation were not quantified.
*Sources: S1, S2, S3*

### 4. Inbound and outbound areas overfill
**Warehouse managers**
want to schedule deliveries when the warehouse can absorb them
**because** overfilled inbound and outbound areas block the flow of goods,
**but** there is no quantitative data showing when peaks and traffic occur.
*Source: S3*

### 5. Staff now fix errors instead of coordinating people
**Logistics staff**
want to find and fix the root cause of errors
**because** digitalisation shifted their work from coordinating people to resolving errors,
**but** poor master data quality keeps creating new problems.
*Source: S1*

### 6. Compliance comes first, and adoption comes late
**Logistics decision-makers**
want to prioritise digital projects
**because** compliance is their "license to operate",
**but** pharma adopts new logistics technology only after it is proven.
*Source: S1*

## Implications for the Product

| Insight | Feature |
|---------|---------|
| 1 | Floor capture: tap or scan to log arrival, storage, picking, quarantine and problems |
| 2 | Live view: batch location, items waiting too long, open issues |
| 3, 4 | Efficiency dashboard: time per step, top causes of delay, area fill levels and trends |
| 5 | Issue log with cause categories to support root-cause analysis |
| 6 | Runs as a layer next to SAP and the WMS; no serial numbers or official batch records |

## Evidence Gaps

- Insights 2 and 4 rest on one source each and need confirmation.
- The internal-warehouse view comes from two interns. A supervisor or operator has not been interviewed yet.
- Louise's interview covers external warehouses, so it supports the context but not the internal workflow.
