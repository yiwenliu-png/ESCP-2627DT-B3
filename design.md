Track It Design
1. Purpose
Track It is a mobile-first warehouse operations application for pharmaceutical warehouse teams.
It helps employees:
Record daily warehouse activities
Track package movements
Monitor workflow progress
Report operational issues
Identify delays and bottlenecks
Review efficiency and capacity indicators
Track It complements existing WMS, ERP, QMS, and validated systems. It does not replace regulated inventory, quality, batch-release, or serialization systems.
2. Target Users
Warehouse Operator
Uses the application during daily warehouse work.
Main needs:
View assigned tasks
Scan packages
Record movements
Report problems
Receive task and issue notifications
Warehouse Supervisor
Coordinates the warehouse team and resolves operational problems.
Main needs:
Monitor live activity
Identify delays and congestion
Assign and reassign tasks
Manage exceptions
Notify the team
Warehouse Manager
Reviews performance and supports planning decisions.
Main needs:
View operational KPIs
Compare warehouse areas
Identify recurring bottlenecks
Review capacity
Track improvement actions
3. Main Screens
Operator Screens
My Tasks
Scan Package
Package Details
Record Activity
Record Movement
Report Issue
My Notifications
Supervisor Screens
Shift Overview
Live Activity Board
Exceptions Queue
Task Assignment
Package Lookup
Team Notifications
Manager Screens
Operations Dashboard
KPI Trends
Bottleneck Analysis
Capacity Planning
Improvement Actions
Management Notifications
4. Navigation
The mobile prototype uses four main bottom-navigation options:
Overview
Record Activity
Warehouse Flow
Analytics
The active role determines which content is displayed.
A role selector allows users to switch between:
Operator
Supervisor
Manager
A back button allows users to return to the previous screen.
5. Core User Flows
Recording an Activity
The user selects Record Activity.
The user chooses an activity, such as receiving, picking, or dispatch.
The user scans or enters the package identifier.
The user confirms the activity.
Track It displays a success or error message.
The activity appears in the relevant activity list.
Reporting an Issue
The user selects Report Issue.
The user chooses an issue type.
The user adds a short description.
The issue is assigned to the appropriate supervisor or process.
The issue appears in the Exceptions Queue.
Supervising Warehouse Flow
The supervisor opens Warehouse Flow.
The supervisor reviews active work and delayed tasks.
The supervisor filters the activity by area or status.
The supervisor assigns an owner or escalates an issue.
The issue status is updated until resolution.
Reviewing Performance
The manager opens Analytics.
The manager reviews throughput, processing time, capacity, and issue resolution.
The manager compares areas or time periods.
The manager identifies potential bottlenecks.
The manager records improvement actions.
6. Visual Design
The interface should feel clean, calm, modern, and operational.
Colour Palette
Navy: navigation, headings, and main structure
Cobalt blue: primary actions and selected states
Teal: progress, completion, and supportive status
Mint: positive backgrounds and completed activity areas
Muted pink: warnings and attention states
Coral: stronger issue emphasis
Pale grey: page backgrounds and neutral areas
Medium grey: secondary text and borders
White: cards, forms, and content surfaces
Colour should never be the only way to communicate status. Statuses should also use labels and icons.
7. Components
The main interface components are:
Bottom navigation
Role selector
Back button
Primary action buttons
Secondary buttons
Summary cards
Activity rows
Status labels
Progress bars
Notification cards
Issue cards
Modal forms
Empty states
Error messages
Buttons and scan controls should be large enough for use on a warehouse floor.
8. Mobile Layout
The primary design target is a phone screen approximately 360–430 pixels wide.
The mobile layout should include:
Single-column content
Large touch targets
Clearly visible bottom navigation
Compact header
Stacked dashboard cards
Short labels
Easy access to the main action
Enough bottom spacing so navigation does not cover content
The design should also work on tablets and desktop screens by expanding cards into wider layouts.
9. Interaction and Feedback
Every action should clearly communicate what happened.
Success Feedback
Examples:
Activity recorded
Movement saved
Issue submitted
Team notified
Error Feedback
Errors should:
Explain the problem
Avoid blaming the user
Provide a next step
Never suggest that an action succeeded if it was not saved
Examples:
Package identifier not recognised
This movement is not permitted
The activity could not be saved
The issue requires supervisor review
10. Accessibility
The design should:
Use readable contrast
Provide visible focus states
Include text labels alongside icons
Support keyboard navigation where relevant
Use accessible control names
Avoid colour-only status indicators
Provide clear error messages
Use large touch targets
Support screen readers
Avoid unnecessary motion
11. Data and Compliance Boundaries
The prototype uses fictional warehouse data only.
Track It must not:
Approve product release
Remove quarantine or quality holds
Modify regulated inventory records
Replace official batch traceability
Create authoritative package records automatically
Hide required quality or security notifications
Suggest that a QR code proves product authenticity or release status
Operational information should remain separate from regulated records.
12. Prototype Scope
The first prototype should demonstrate:
Operator, Supervisor, and Manager workspaces
Role switching
Mobile phone layout
Bottom navigation
Back navigation
Recording an activity
Reporting an issue
Supervisor monitoring
Manager KPI cards
Capacity and bottleneck information
Fictional notifications
Responsive behaviour
The prototype does not include live SAP, WMS, ERP, QMS, authentication, real QR scanning, or production data.
13. Design Success Criteria
The design is successful if:
An operator can record an activity without assistance.
A supervisor can quickly identify a delayed task.
A manager can understand the main KPIs at a glance.
Users can move between screens easily.
The back button behaves predictably.
The bottom navigation remains visible and usable.
Statuses are understandable without relying on colour.
The difference between operational monitoring and regulated systems is clear.


