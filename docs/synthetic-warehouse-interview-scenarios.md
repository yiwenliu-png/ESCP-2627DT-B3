# Synthetic warehouse interview scenarios

> **Important:** These are fictional, assumption-based scenarios created for product planning. They are **not real interviews, quotes, or validated user research**. Use them to define hypotheses and gaps to validate later; do not cite them as evidence in presentations or reports.

## Purpose

Create realistic planning hypotheses for TrackIt when actual interviews are not yet available. Each scenario describes a likely role, current workflow, manual work, pain points, unmet needs, and the product implications worth testing.

## Summary

| Scenario | Role | Core hypothesis | Likely TrackIt fit | Biggest validation gap |
|---|---|---|---|---|
| A | Warehouse operator | Status updates and issue reporting are split across paper, memory, and informal communication | Record activity; issue reporting | Whether operators can use a shared device or scanner on the floor |
| B | Warehouse supervisor | Delays and blocked shipments are discovered through repeated calls and manual lists | Monitor; waiting-time visibility | Whether delay thresholds and escalation rules match reality |
| C | Operations manager | Performance reporting requires manual consolidation and cannot explain bottlenecks | Dashboard; trend reporting | Which metrics are trusted and how they are calculated |
| D | Quality / SAP coordinator | SAP is the system of record, but operational updates are delayed or duplicated | SAP sync status; audit trail | Actual integration, validation, and GxP requirements |

---

## Scenario A — Warehouse operator

**Profile:** Fictional receiving and dispatch operator with several years of warehouse experience.

### Assumed current workflow

- Receives a shipment and checks paperwork against the physical load.
- Records arrival or sampling information on a paper form or local checklist.
- Moves the shipment to the next area and tells a colleague or supervisor verbally.
- Updates another system later, when workload allows.
- Reports damage, missing information, or a hold verbally and may add a note to the paperwork.

### Assumed manual or paper work

- Writing the same shipment identifier and status in more than one place.
- Searching for the correct paper form.
- Reconstructing the order of events at the end of a busy shift.
- Calling or walking to a supervisor to report exceptions.
- Checking a whiteboard or asking colleagues to find the next task.

### Hypothetical pain points

- Recording is easy to postpone when the dock is busy.
- The next person may not know whether sampling, storage, or another handoff is complete.
- Issue details can be incomplete when reported verbally.
- Re-entering information feels like administrative work with little immediate benefit.

### Hypothetical unmet needs

- A very fast status update that works with minimal typing.
- Shipment lookup by scan or short identifier.
- A standard issue form with photos or selectable issue types, if permitted.
- A clear confirmation that the update was saved and sent to the source system.
- Offline or poor-connectivity handling with a visible retry state.

### TrackIt hypothesis

TrackIt could reduce duplicate recording and make stage changes or issues visible immediately, provided the workflow is faster than the current workaround and does not create a second system of record.

### Features to test

- Scan or quick-select shipment.
- One-tap stage updates.
- Structured issue types plus optional notes.
- Offline queue and retry status.
- Large controls, gloves-friendly interaction, and minimal navigation.
- Clear ownership of the next action.

### Open validation questions

- Are personal devices, shared terminals, scanners, or tablets permitted?
- What information must be captured at each stage?
- Can operators attach photos, and where may those images be stored?
- What happens when the device, network, or SAP is unavailable?
- Would a second status entry be accepted, or must TrackIt write back to an existing system?

---

## Scenario B — Warehouse supervisor

**Profile:** Fictional supervisor responsible for inbound/outbound flow, exceptions, and daily staffing.

### Assumed current workflow

- Checks paper forms, spreadsheets, system screens, and messages to understand status.
- Walks the floor or calls operators when a shipment appears late.
- Maintains a manual list of blocked items and follows up with quality, transport, or planning.
- Escalates issues during shift handovers, often using notes from memory.

### Assumed manual or paper work

- Reconciliating several lists to identify what is waiting.
- Calculating how long a shipment has been in a stage.
- Copying issue details into a handover note.
- Estimating area congestion by visual inspection.
- Chasing updates from multiple people.

### Hypothetical pain points

- There is no single, trusted view of waiting or delayed work.
- A delay may be noticed only after someone asks about it.
- Open issues lack a clear owner or next step.
- Shift handovers lose context.
- Staffing decisions are based on intuition because timestamps are incomplete.

### Hypothetical unmet needs

- A live queue grouped by status, age, priority, and area.
- Clear rules for what counts as delayed or blocked.
- Issue ownership, notes, and resolution history.
- A handover view that explains what changed during the shift.
- Area-fill or workload indicators that support staffing decisions.

### TrackIt hypothesis

TrackIt could help supervisors act earlier by turning scattered status updates into a shared operational view, provided the timestamps and status definitions are trusted.

### Features to test

- Monitor view for waiting, delayed, and blocked shipments.
- Configurable delay thresholds.
- Issue owner, due date, notes, and resolution state.
- Filters by area, shipment type, or priority.
- Shift-handover summary.
- Congestion indicators with an explanation of how they are calculated.

### Open validation questions

- Which delay thresholds are operationally meaningful?
- Who is allowed to change or resolve an issue?
- Are statuses standardized across sites and shifts?
- What must be visible to quality or management but hidden from operators?
- Does the supervisor need alerts, or is a dashboard enough?

---

## Scenario C — Operations manager

**Profile:** Fictional manager accountable for throughput, service levels, capacity, and improvement decisions.

### Assumed current workflow

- Requests reports from supervisors or exports data from several systems.
- Combines spreadsheets to estimate time per stage, delays, and issue frequency.
- Reviews trends after the fact, often without confidence in data completeness.
- Uses meetings to explain exceptions that are not visible in the reports.

### Assumed manual or paper work

- Merging reports from SAP, spreadsheets, and local lists.
- Cleaning inconsistent status names and timestamps.
- Manually counting issues or categorizing root causes.
- Creating weekly charts and slide updates.
- Asking supervisors to verify whether numbers reflect reality.

### Hypothetical pain points

- Metrics are delayed and difficult to compare across periods.
- A high-level number does not explain where time was lost.
- Paper or late entries make performance appear better or worse than it was.
- There is limited evidence for staffing, layout, or process changes.

### Hypothetical unmet needs

- Trusted stage timestamps and a common status model.
- Time per stage, queue age, issue trends, and workload by hour.
- Drill-down from a metric to the underlying shipment or event.
- Exportable reports with clear data limitations.
- A way to distinguish operational estimates from validated records.

### TrackIt hypothesis

TrackIt could provide useful operational visibility without replacing SAP, but only if managers trust the definitions, data completeness, and relationship between TrackIt events and the source system.

### Features to test

- Dashboard with stage duration, delays, issues, and seven-day trends.
- Drill-down from metrics to shipments and events.
- Filters by area, shift, date, and issue type.
- Export or shareable summary.
- Data-quality indicators showing missing or unsynced events.
- Explicit separation between prototype estimates and regulated reporting.

### Open validation questions

- Which metrics drive actual decisions?
- What is the accepted definition of throughput, delay, and completion?
- How much historical data is needed?
- Are dashboards used daily, weekly, or only for reviews?
- What reporting or audit requirements prevent use of prototype-level data?

---

## Scenario D — Quality / SAP coordinator

**Profile:** Fictional coordinator responsible for system handoffs, data quality, or quality-related release steps.

### Assumed current workflow

- Receives or checks information from warehouse staff and SAP.
- Resolves mismatches between physical status, paper records, and system status.
- Follows up on failed or incomplete entries.
- Ensures that quality holds, sampling, and release-related actions are documented correctly.

### Assumed manual or paper work

- Comparing shipment identifiers and status across systems.
- Reviewing paper evidence when a digital timestamp is missing.
- Chasing corrections and documenting why a record changed.
- Tracking synchronization failures or delayed updates.
- Maintaining exception lists for audit or review.

### Hypothetical pain points

- A fast operational tool could create risk if it is not aligned with the validated system.
- Users may not know whether a status is saved locally, sent to SAP, or accepted by SAP.
- Corrections and audit history may be unclear.
- “Offline” behavior may conflict with release or quality rules.

### Hypothetical unmet needs

- Explicit sync state: pending, sent, failed, and retrying.
- Immutable event history or controlled corrections.
- Role-based permissions and approval boundaries.
- Traceability from an operational event to the source-system record.
- Clear indication that TrackIt is an operational layer, not the validated record.

### TrackIt hypothesis

TrackIt may be useful as an operational visibility layer, but adoption depends on integration boundaries, auditability, validation strategy, and clear ownership of the official record.

### Features to test

- Visible SAP synchronization status.
- Retry and exception queue.
- Event history with timestamps and user role.
- Permission model for recording, editing, resolving, and approving.
- Exportable reconciliation view.
- Warnings that prevent users from treating prototype data as regulated evidence.

### Open validation questions

- Is SAP the only system of record, or is a WMS also authoritative?
- Which events require validated capture?
- Are corrections allowed, and who approves them?
- What retention, audit, and electronic-signature rules apply?
- Can any operational data be stored outside validated systems?

---

## Cross-scenario needs to investigate

These needs appear across the scenarios but remain hypotheses:

1. **Fast capture:** Status updates must be faster than paper or verbal workarounds.
2. **Shared visibility:** Operators and supervisors need the same current status.
3. **Issue ownership:** An issue needs an owner, next step, and resolution history.
4. **Reliable timestamps:** Time-in-stage metrics require trustworthy event times.
5. **System boundaries:** TrackIt must complement, not silently replace, SAP or a WMS.
6. **Offline behaviour:** Users need to know what was saved locally and what reached the source system.
7. **Permission and audit:** Different roles may need different recording, editing, and approval rights.
8. **Operational fit:** Devices, gloves, connectivity, language, noise, and movement matter.
9. **Data quality:** Managers need to see when conclusions are based on incomplete data.
10. **Adoption value:** Each role needs an immediate benefit, not only a benefit for management.

## Gap-to-fill matrix

| Gap to fill | Why it matters | Evidence still needed | Candidate requirement |
|---|---|---|---|
| Actual paper forms and fields | Prevents designing a faster workflow that omits required information | Observe or obtain an anonymised form | Configure required fields by stage |
| Real delay definitions | Avoids misleading “late” flags | Compare threshold rules across shifts or sites | Configurable thresholds |
| Source-of-truth boundaries | Prevents duplicate or conflicting records | Map SAP/WMS/quality ownership | Explicit integration and record ownership |
| Device and connectivity conditions | Determines whether floor use is practical | Observe work area and permitted devices | Mobile, shared-terminal, or scanner workflow |
| Issue categories and escalation | Determines whether structured reporting helps | Review recent issue types and handovers | Configurable issue taxonomy and ownership |
| Audit and validation constraints | Determines what can be stored or changed | Confirm quality and IT requirements | Role permissions, history, sync states |
| Manager decisions and metrics | Prevents building unused dashboards | Identify recurring decisions and reports | Decision-oriented dashboard |
| Adoption and training burden | Determines whether the workflow will survive busy shifts | Test with representative tasks | Minimal steps, feedback, and training aids |

## Suggested product decisions from the hypotheses

Treat these as planning decisions, not validated findings:

- Prioritise the operator’s fastest path: identify shipment → select stage → save.
- Make supervisor visibility and issue ownership first-class features.
- Keep the system-of-record boundary visible in the UI.
- Show sync and data-quality states instead of implying certainty.
- Make delay thresholds, issue types, and required fields configurable.
- Do not claim compliance, time savings, or operational outcomes until real evidence exists.

## Minimum validation plan when time becomes available

Run short, targeted checks rather than presenting these scenarios as completed research:

1. Observe one recent shipment walkthrough with an operator.
2. Collect one anonymised paper or spreadsheet example.
3. Ask a supervisor to identify three recent delayed or blocked shipments.
4. Ask a manager to show one recurring report and the decision it supports.
5. Ask a quality or SAP owner to mark which events may be stored outside the system of record.
6. Test the TrackIt prototype against one real workflow and record missing steps.

Record the result in `evidence.md` as **validated**, **contradicted**, or **still unknown**.
