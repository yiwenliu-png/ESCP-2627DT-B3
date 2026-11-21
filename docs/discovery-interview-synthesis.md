# Simulated discovery interview synthesis

> **Method note:** This is a reconstructed, assumption-led discovery exercise. The scenarios below are plausible interview outcomes used to explain the product rationale; they are not transcripts or evidence from completed interviews.

## Starting question

Could a lightweight operational layer help an internal pharmaceutical warehouse track shipment progress, surface blocked work, and reduce manual recording without replacing SAP or a validated WMS?

To explore that question, we modelled four likely stakeholder conversations: an operator, a supervisor, an operations manager, and a quality/SAP coordinator.

---

## Interview 1 — Warehouse operator

### Context

The operator handles receiving, sampling handoffs, storage moves, picking, and dispatch preparation. The work is physical and time-sensitive, and the operator may move between several areas during a shift.

### What the operator described

- A shipment arrives with paperwork that is checked against the physical load.
- Arrival, sampling, or handoff information is written on a paper checklist or local form.
- The shipment is moved to the next area, while the status is communicated verbally or through a board.
- System updates may happen later, after the immediate task is complete.
- Damage, missing information, or a quality hold is usually reported to a supervisor, sometimes with a note added to the paperwork.
- During busy periods, recording is postponed and reconstructed from memory.

### Problem indicated

The operational event happens in one place, but the official or visible status may be updated somewhere else later. This creates duplicate work and makes it difficult for the next person to know what has actually happened.

### Need implied

The operator needs a very fast way to identify a shipment, record the next stage, and report an exception without interrupting the physical workflow.

### Product implication

TrackIt should prioritise:

- Shipment lookup by scan or short identifier.
- One-tap stage recording.
- Structured issue types with optional notes.
- Immediate confirmation that the event was saved.
- Clear handling of offline or failed synchronisation.
- Large, simple controls suitable for a warehouse environment.

---

## Interview 2 — Warehouse supervisor

### Context

The supervisor coordinates inbound and outbound flow, resolves exceptions, supports shift handovers, and decides where attention or staffing is needed.

### What the supervisor described

- Status is checked across paper forms, spreadsheets, system screens, messages, and conversations with operators.
- A shipment is often treated as delayed only after someone asks about it or a handover reveals that it has not moved.
- The supervisor keeps a separate list of blocked items and follows up with quality, transport, planning, or the warehouse team.
- Issue ownership is not always obvious, and the latest update may be buried in a message or handover note.
- Congestion is estimated by walking the floor and judging how full the areas appear.

### Problem indicated

The supervisor lacks a single, trusted view of what is waiting, how long it has been waiting, why it is blocked, and who owns the next action.

### Need implied

The supervisor needs shared operational visibility, consistent delay rules, and a clear way to assign and resolve issues.

### Product implication

TrackIt should provide:

- A monitor view grouped by current stage, age, area, and priority.
- Clear waiting, delayed, and blocked states.
- Configurable delay thresholds.
- Issue ownership, notes, and resolution history.
- Shift-handover context.
- Inbound and outbound capacity indicators with understandable definitions.

---

## Interview 3 — Operations manager

### Context

The manager is responsible for throughput, service levels, capacity planning, and process improvement.

### What the manager described

- Weekly or monthly reporting is assembled from SAP exports, spreadsheets, supervisor lists, and manual explanations.
- Status names and timestamps are not always consistent.
- Issue categories are counted manually and may not explain the underlying bottleneck.
- A summary number can show that performance changed, but not where time was lost.
- Managers ask supervisors to verify whether the figures reflect the real operation.

### Problem indicated

The manager receives information too late and with too little context to make confident decisions about staffing, capacity, or process changes.

### Need implied

The manager needs trusted operational metrics that connect directly to events: time per stage, queue age, delay causes, issue trends, and workload over time.

### Product implication

TrackIt should provide:

- Stage-duration and delay metrics.
- Issue and bottleneck trends.
- Busy-period and area-capacity views.
- Drill-down from a metric to the underlying shipment or activity.
- Clear data-quality and synchronisation indicators.
- A visible distinction between operational insight and validated regulated reporting.

---

## Interview 4 — Quality or SAP coordinator

### Context

This stakeholder protects the boundary between operational convenience and the official system of record. They care about traceability, permissions, corrections, and system handoffs.

### What the coordinator described

- SAP or a WMS remains the authoritative source for important records.
- Operational updates may be recorded first on paper or in local tools, then transferred later.
- Mismatches between physical status, paper evidence, and system status require manual reconciliation.
- A new tool could create risk if users cannot tell whether an event is saved locally, sent to SAP, or accepted by SAP.
- Corrections, audit history, and quality holds need controlled handling.

### Problem indicated

The warehouse needs better operational visibility, but a new interface must not create an unclear second system of record or imply compliance that it does not provide.

### Need implied

The solution needs explicit system boundaries, traceability, role permissions, and visible synchronisation state.

### Product implication

TrackIt should include:

- Pending, sent, failed, and retrying sync states.
- Event history with timestamps and user roles.
- Controlled correction and resolution flows.
- Role-based permissions.
- Reconciliation views for mismatches.
- Clear messaging that TrackIt complements SAP and is not a validated GxP record.

---

## Common pattern across the conversations

The scenarios point to one connected problem:

1. Warehouse work moves physically through several stages.
2. The status of that work is recorded in multiple places, often with paper or informal communication.
3. Supervisors discover delays and issues through follow-up rather than through a shared live view.
4. Managers receive delayed, manually consolidated information.
5. SAP remains important, but operational visibility is not the same as replacing the system of record.

The opportunity is therefore not to build another full warehouse-management system. It is to create a focused operational layer that captures events quickly, makes waiting work visible, and passes information back to the existing system boundary.

---

## How the findings led to TrackIt

| Simulated finding | User need | TrackIt response | Why it belongs in the product |
|---|---|---|---|
| Operators record stages on paper or later in another system | Fast, low-effort event capture | Record a shipment stage in a few taps | Reduces duplicate recording and gives the next person current status |
| Exceptions are communicated verbally or in scattered notes | Structured issue reporting | Report an issue with type, note, owner, and status | Makes problems visible and follow-up manageable |
| Supervisors chase updates to find blocked work | Shared operational view | Monitor waiting, delayed, and blocked shipments | Helps supervisors act before delays become invisible |
| Congestion is judged informally | Area and workload visibility | Show inbound/outbound area capacity | Supports staffing and flow decisions |
| Managers manually combine reports | Consistent operational metrics | Dashboard with time per stage, delays, issues, and trends | Turns events into decision support |
| SAP handoffs are unclear | Traceable synchronisation | Show sync status and retry state | Improves trust without claiming to replace SAP |
| Quality boundaries matter | Controlled permissions and history | Role-based flows and event history | Prevents an operational prototype from being mistaken for a validated record |

---

## Why we created the app

We created TrackIt because the same operational gap appears at three levels:

- **On the floor:** people need to record what happened quickly.
- **In supervision:** people need to see what is waiting, blocked, or overdue.
- **In management:** people need reliable operational patterns, not manually assembled explanations.

A focused app can connect these needs without attempting to replace SAP, a WMS, or regulated documentation. The product concept is intentionally narrow:

- Capture the event close to where it happens.
- Make the current state visible to the people who act on it.
- Turn captured events into useful operational insight.
- Keep the source-system boundary and synchronisation status explicit.

This reasoning explains the four main parts of the prototype:

1. **Operator Record:** capture a shipment stage or issue in a few taps.
2. **Supervisor Monitor:** see waiting shipments, delays, open issues, and area capacity.
3. **Manager Dashboard:** see time per stage, issue patterns, busy periods, and trends.
4. **SAP Integration view:** show that operational events have a visible path toward the existing system of record.

---

## Needs the product must meet

### Must-have

- Fast shipment identification.
- Minimal-step stage recording.
- Structured issue reporting.
- Shared status visibility.
- Clear ownership and resolution state.
- Visible sync status.
- Role-appropriate views.
- An explicit boundary between TrackIt and SAP/WMS.

### Should-have

- Configurable delay thresholds.
- Offline queue and retry behaviour.
- Area-capacity indicators.
- Shift-handover summary.
- Drill-down from metrics to shipment events.
- Data-quality warnings.
- Configurable issue categories and required fields.

### Needs further validation

- Exact fields required at each warehouse stage.
- Device, scanner, and connectivity constraints.
- Real delay thresholds and escalation rules.
- SAP/WMS ownership of each event.
- Quality, audit, retention, and approval requirements.
- The metrics managers actually use to make decisions.
- Whether operators would adopt a second interface.

---

## Remaining gap

These scenarios explain why TrackIt is a plausible product concept, but they do not prove that the problem exists at a specific warehouse or that the proposed workflow will be adopted. The next evidence to collect would be:

- One real shipment walkthrough.
- One anonymised paper or spreadsheet example.
- Three recent delayed or blocked shipments.
- One recurring management report.
- A confirmation of the system-of-record and quality boundaries.

Until that evidence is available, the conclusions should be treated as product hypotheses rather than measured outcomes.
