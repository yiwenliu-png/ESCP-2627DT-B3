Warehouse Flow Tracker — Technology Architecture
1. Technical objective
Warehouse Flow Tracker is a browser-based educational prototype that demonstrates one complete workflow:
An operator records an activity or issue, a supervisor monitors the result, and a manager reviews basic performance data.

The technical architecture is intentionally lightweight. It should be easy to build, test and demonstrate without a backend, external integrations or production infrastructure.

The prototype uses fictional data only and does not connect to SAP, a warehouse management system or any regulated pharmaceutical system.
2. Technology stack
Frontend
- React for reusable user-interface components
- TypeScript for typed data structures and safer code
- Vite for local development and production builds
Styling
- Tailwind CSS for layout, spacing, responsive behaviour and status styles
- A clean dashboard layout for desktop and tablet screens
- Large, clear controls on the operator screen
Icons
Use a lightweight icon library such as Lucide React, if available. Icons should support, not replace, text labels.

Use consistent status colours:
- Blue: normal activity
- Green: completed or resolved
- Amber: waiting or requires attention
- Red: delayed or unresolved issue
Status must always include a text label, not colour alone.
3. Data and storage
- Use fictional warehouse data only.
- Store initial records in a local mock-data file.
- Use React state or Context to share data between screens.
- Use browser localStorage to preserve changes during a demonstration.
- Do not use a database, server or cloud backend for the MVP.
The application should display a visible notice:
Prototype — fictional data only

4. Data model
The prototype uses operational activity data. It does not represent official batch or quality records.
Activity reference
type WorkflowStatus =
  | "Started"
  | "In Progress"
  | "Completed"
  | "Delayed";

type ActivityReference = {
  id: string;
  label: string;
  currentStage: string;
  location: string;
  status: WorkflowStatus;
  lastActivityAt: string;
  issueId?: string;
};
Activity
type ActivityType =
  | "Receiving"
  | "Moving"
  | "Storage"
  | "Picking"
  | "Dispatching"
  | "Quarantine";

type Activity = {
  id: string;
  referenceId: string;
  type: ActivityType;
  recordedAt: string;
  recordedBy: string;
  area: "Inbound" | "Storage" | "Outbound";
  status: WorkflowStatus;
  note?: string;
};
Issue
type IssueType =
  | "Damage"
  | "Missing label"
  | "Temperature concern"
  | "Other";

type Issue = {
  id: string;
  referenceId: string;
  type: IssueType;
  description: string;
  priority: "Low" | "Medium" | "High";
  reportedAt: string;
  followUpNote?: string;
  resolvedAt?: string;
  status: "Open" | "Resolved";
};
Demo role
type UserRole = "Operator" | "Supervisor" | "Manager";
Roles are simulated for the prototype and do not provide real authentication or security.
5. Application structure
src/
  components/
    Layout/
    Navigation/
    PrototypeNotice/
    StatusBadge/
    MetricCard/
    ActivityForm/
    ActivityTable/
    ActivityDetail/
    IssuePanel/
  data/
    mockData.ts
  pages/
    OperatorCapture.tsx
    SupervisorMonitor.tsx
    PerformanceDashboard.tsx
  types/
    warehouse.ts
  utils/
    metrics.ts
    time.ts
    storage.ts
  App.tsx
  main.tsx
Component responsibilities
- Layout: shared application frame and navigation area
- Navigation: links to the three prototype screens
- PrototypeNotice: displays the fictional-data warning
- StatusBadge: consistent status labels and colours
- MetricCard: reusable KPI display
- ActivityForm: records an operational activity or issue
- ActivityTable: displays activities with filtering and status indicators
- ActivityDetail: shows the selected activity and its history
- IssuePanel: displays issue details and the resolution action
- mockData.ts: fictional seed data
- metrics.ts: calculates waiting time, delays and summary metrics
- time.ts: formats timestamps and durations
- storage.ts: loads, saves and resets local prototype state
6. Routing and screens
Use client-side routing if supported by the project setup. The main routes are:
/capture       Operator Activity Capture
/monitor       Supervisor Flow Monitor
/dashboard     Manager Performance Dashboard
The application does not require a login for the prototype.
Demo role behaviour
- Operator: start at /capture
- Supervisor: start at /monitor
- Manager: start at /dashboard
A simple Demo role selector may be included in the header. It is only used to demonstrate different user perspectives.
7. State management
Simple React state is sufficient for the MVP. A global state library is not required.

Shared state should include:
- Activity references
- Activity history
- Issues
- Selected demo role
- Current supervisor filters
The minimum requirement is that a submission on /capture updates /monitor and /dashboard without a page reload.
8. Local storage behaviour
Store the prototype state under:
warehouse-flow-tracker-state
On application start:
1. Check whether saved prototype state exists.
2. Load the saved state if it exists.
3. Otherwise, load the fictional seed data.
Provide a Reset demo data action that restores the original fictional records. This makes the prototype easy to demonstrate repeatedly.

Do not store passwords, personal data, real company information or regulated records.
9. Core business logic
Recording an activity
When the operator submits an activity:
1. Validate the activity reference and activity type.
2. Create a new activity with a unique ID and timestamp.
3. Update the reference’s current stage, location and status.
4. If an issue is reported, create an open issue.
5. Save the updated state to localStorage.
6. Show a confirmation message.
Waiting time
Waiting time is calculated from the most recent activity timestamp to the current time.

Example formats:
- 35 minutes
- 2 hours 10 minutes
- 1 day 4 hours
The fictional seed data should include both normal and delayed activities.
Delay status
Use a configurable threshold for the demonstration, for example four hours. The threshold is only a prototype rule and must not be presented as a pharmaceutical warehouse standard.
Dashboard metrics
Calculate metrics from the current local state:
- Total activities recorded
- Average processing time
- Number of delayed activities
- Number of unresolved issues
- Most common issue type
- Number of completed activities
If there is not enough data for a meaningful calculation, show an empty state instead of inventing a result.
10. Optional AI demonstration
AI is not required for the core MVP. If included, it should be a simulated interface using fictional data rather than a real external AI service.

Possible advisory features:
- Suggest an issue category from a written description
- Group similar fictional issues
- Highlight recurring issue types
AI output must be labelled as advisory and require human confirmation. It must not make quality, compliance or product-release decisions.
11. Error handling and usability
The interface should provide clear feedback when:
- No activity reference has been selected
- No activity type has been selected
- A required issue description is empty
- No records match the selected filters
- No saved prototype data is available
Use inline validation and clear messages. Do not silently discard user actions.

The main target is a desktop or tablet browser. Prioritise readable tables, large operator controls and clear visual warnings.
12. Security, privacy and compliance boundaries
This is an educational prototype and must not process real pharmaceutical data.

The application must:
- Use fictional activity references and product names.
- Avoid personal, patient or company-confidential information.
- Avoid claiming GMP or GDP compliance.
- Avoid claiming regulatory validation.
- Avoid automated quality-release or compliance decisions.
- Clearly display the fictional-data notice.
A real implementation would require review by IT, cybersecurity, Quality Assurance and relevant regulatory stakeholders.
13. Testing checklist
Before demonstrating the prototype, verify this workflow:
1. Select a fictional activity reference.
2. Record a new activity.
3. Confirm that the current status changes.
4. Confirm that the activity appears in the supervisor monitor.
5. Report an issue.
6. Confirm that the issue appears as open.
7. Add a follow-up note.
8. Mark the issue as resolved.
9. Confirm that the unresolved-issue metric updates.
10. Confirm that dashboard metrics update.
11. Refresh the browser and confirm that changes remain through localStorage.
12. Use Reset demo data and confirm that the original fictional data returns.
14. Deployment
The prototype should:
- Run locally with the project’s standard development command.
- Build successfully as a static web application.
- Require no cloud backend or production deployment.
- Use no external APIs for the MVP.
15. Explicit exclusions
Do not add:
- SAP APIs
- WMS APIs
- External databases
- Real barcode or scanner integrations
- Cloud authentication
- Payment functionality
- Real pharmaceutical, patient or company data
- Production security claims
- Regulatory or compliance claims
Build the smallest complete demonstration of the workflow described in product.md and design.md.
