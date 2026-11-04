# Evidence: Key Insights from User Research

## Research Participants

| Name | Role | Context |
|------|------|---------|
| Louise Jäger | Global Logistics, Novo Nordisk (IT integrations of external warehouses) | Interview, 26 Oct 2026: external warehouses, strategic view |
| Amalie Fischer | Intern, Novo Nordisk | Internship observation: internal warehouse management |
| Anders Kvisgaard Thomsen | Project Manager, Novo Nordisk internal warehouse, Hillerød, Denmark | Interview: internal warehouse, operational view |

## Key Insights

**Core finding:** Shipment tracking in internal pharmaceutical warehouses is still largely manual. Our app's main function is to make this tracking digital, so every step a shipment goes through is recorded, at the source, and becomes visible and measurable.

### 1. Manual Shipment Tracking (core problem)
Warehouse operators need to record each shipment's progress through inbound, storage, sampling and distribution
because supervisors and managers rely on this information to coordinate daily work
but this is currently tracked manually on paper, which is time-consuming and hard to follow.

### 2. Sample Testing
Warehouse operators need to record when each shipment is sampled
because every batch must be tested to comply with pharmaceutical regulations
but this adds a step to an already manual process.

### 3. Issue Resolution
Warehouse employees need to identify and resolve operational issues quickly
because delays in one step hold up the shipments that follow
but issues are not recorded in one place, so stuck processes are found late.

### 4. Efficiency Measurement
Managers need visibility of delays and performance
because they must plan capacity and budgets and understand operational risk
but delays and issues are not recorded consistently, so efficiency cannot be measured.

### 5. Inbound and Outbound Flow
Supervisors need to keep goods moving through the inbound and outbound areas
because overfilled areas slow down the flow of the whole warehouse
but there is no central view of how full these areas are.

### 6. Delivery Planning
Managers need to schedule deliveries at the most efficient times
because poorly timed deliveries create traffic at the docks
but delivery times cannot be planned without quantitative data.

## Implications for the Product

| Insight | Feature |
|---------|---------|
| 1 | **Core feature:** QR scan per shipment to digitally log each step (inbound, storage, sampling, distribution), replacing paper tracking. Operational record only, separate from official batch records |
| 2 | Sampling step logged with time taken and status (awaiting sampling, sample taken) |
| 3 | Issue logging with categories and a flag for shipments waiting too long |
| 4 | Efficiency dashboard: time per step, delays and causes, for capacity and budget planning |
| 5 | Live view of inbound and outbound area fill levels |
| 6 | Delivery and traffic patterns over time to plan delivery slots |
