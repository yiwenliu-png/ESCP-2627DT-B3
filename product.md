# TrackIt: Product Requirements Document

**TrackIt** is a mobile-first web prototype that connects the pharmaceutical warehouse floor with **SAP**. Warehouse teams record what happens to shipments during the day, see what is stuck and measure how long each step takes, and this information is exchanged with SAP so warehouse operations become part of the company's integrated IT landscape.

> **Prototype status:** university prototype using fictional data only. It is not a validated GxP system and does not replace SAP, a WMS or any regulated record. **The SAP connection is simulated inside the app**, because the brief allows no APIs and no real data.

---

## 1. Strategy

> This section is the team's agreed Strategy. If any other document disagrees with it, this section wins.

### 1.1 Product concept

**Working name:** TrackIt

TrackIt is a digital application designed to help internal pharmaceutical warehouse teams monitor operational workflows, record operational activities and analyse warehouse efficiency.

The application aims to improve operational visibility while respecting the pharmaceutical industry's strict requirements for product safety, data integrity and regulatory compliance.

The application focuses on three main functions:

1. **Operational activity recording:** allow warehouse operators to quickly record workflow progress and operational issues that are not already captured by regulated systems.
2. **Warehouse flow monitoring:** provide supervisors with a centralised overview of warehouse activities, delays, congestion and unresolved issues.
3. **Efficiency and capacity analysis:** help managers measure operational performance, identify bottlenecks and improve capacity planning using quantitative indicators.

**SAP integration is the reason TrackIt exists.** TrackIt is the IT integration layer between the warehouse floor and SAP:
- **From SAP to TrackIt:** shipment references, product master data and expected deliveries come from SAP, so operators select instead of typing, and both systems use the same references.
- **From TrackIt to SAP:** every activity and issue recorded on the floor is sent to SAP with its timestamp, so warehouse progress becomes visible in SAP without manual re-entry from paper.
- SAP remains the **system of record**. TrackIt captures the operational events that are currently on paper and feeds them into SAP.

**Product positioning:**
- **Connect to** and complement existing enterprise systems such as SAP and Warehouse Management Systems (WMS).
- Focus on operational efficiency rather than official pharmaceutical batch traceability.
- Avoid duplicating or modifying regulated quality and inventory records.
- Support secure, reliable and controlled access to operational information.
- Use operational data to support continuous improvement and decision-making.

The application is intended as an additional operational monitoring layer, not as a replacement for existing validated pharmaceutical systems.

### 1.2 Problem statement

Pharmaceutical warehouses operate in a highly regulated environment where product quality, traceability, data integrity and patient safety are essential. However, some internal warehouses still rely on paper-based documentation for certain operational activities, even when other warehouse processes are already digitalised. This can create several potential operational challenges.

1. **Manual and time-consuming processes**
   - Employees may need to complete handwritten operational records.
   - Information may need to be transferred manually into other documents or systems.
   - Retrieving historical information can require additional administrative effort.
2. **Limited operational visibility**
   - Supervisors may lack a centralised view of ongoing warehouse activities.
   - Identifying delays or unresolved operational issues may require contacting several employees.
   - Information about warehouse congestion may not be immediately available.
3. **Difficulties measuring warehouse efficiency**
   - Paper-based information is difficult to aggregate into measurable performance indicators.
   - Managers may struggle to analyse how long operational steps take.
   - Recurring bottlenecks may remain difficult to quantify.
4. **Warehouse congestion and capacity planning**
   - Inbound and outbound areas may experience periods of overcrowding.
   - Poor visibility into workflow timing can complicate the scheduling of deliveries and dispatches.
   - Limited operational data may make resource allocation and budgeting more difficult.
5. **Pharmaceutical regulatory constraints**
   - Certain records must comply with Good Manufacturing Practice (GMP) and Good Distribution Practice (GDP) requirements (GxP requirements in general).
   - Digital solutions may require formal validation depending on their intended use.
   - Operational information must be handled securely and with appropriate access restrictions.
   - Product quality and safety must take priority over efficiency improvements.

**Core problem:** Internal pharmaceutical warehouses may lack easily accessible, structured operational data to monitor and optimise daily workflows, particularly where activities are still documented manually. This can limit efficiency analysis and capacity planning, while strict regulatory requirements make digital transformation more complex.

*Research status: these are preliminary problems identified through internship observations and industry context. Their frequency, causes and operational impact require further validation through interviews (see `evidence.md`).*

### 1.3 Target users

**Primary users: warehouse operators.** They are responsible for the physical handling and movement of goods within internal warehouses.
- *Responsibilities:* receiving and storing goods · picking and preparing goods for dispatch · recording operational activities · reporting damaged goods, missing labels or other issues through approved procedures.
- *Main needs:* fast and straightforward documentation · minimal additional administrative work · clear instructions and accessible operational information · reliable reporting of workflow issues.

**Secondary users: warehouse supervisors (mid-term).** They coordinate daily warehouse activities and ensure operational processes run efficiently.
- *Responsibilities:* monitoring warehouse workflows · coordinating employees and operational tasks · identifying delays and bottlenecks · managing workload and operational priorities · escalating issues to the appropriate teams.
- *Main needs:* centralised visibility into ongoing activities · quick identification of delays and congestion · clear information about unresolved operational issues · better coordination of inbound and outbound flows.

**Additional users: warehouse managers (long-term).** They oversee warehouse performance, operational resources and capacity planning.
- *Responsibilities:* evaluating warehouse productivity · planning warehouse capacity and resources · identifying opportunities for process improvement · supporting budgeting and operational decisions · ensuring that efficiency objectives remain compatible with regulatory requirements.
- *Main needs:* quantitative performance indicators · reliable data about workflow duration and bottlenecks · historical trends for efficiency analysis · better information for resource and capacity planning.

### 1.4 User personas

*These personas represent hypothetical users and will be refined through interviews.*

| | Warehouse operator | Warehouse supervisor | Warehouse manager |
|---|---|---|---|
| **Profile** | Works directly on the warehouse floor. Handles incoming goods, storage, picking and dispatch. Uses existing warehouse systems alongside possible paper-based procedures. | Coordinates daily warehouse operations. Supervises employees and workflow progress. Responds to delays and operational problems. | Responsible for warehouse performance and operational planning. Oversees resources, capacity and process improvement. Works with logistics, IT and quality teams. |
| **Goals** | Complete tasks efficiently · record activities quickly and accurately · avoid unnecessary administrative work · follow required safety and quality procedures | Maintain smooth inbound and outbound flows · identify bottlenecks before they create major disruptions · improve coordination between warehouse areas · ensure activities follow approved procedures | Improve warehouse efficiency · optimise capacity and resource utilisation · reduce unnecessary operational costs · support decisions with reliable performance data · maintain compliance |
| **Pain points** | Repetitive manual documentation · time spent searching for information · difficulty communicating workflow problems · recording information in multiple places | Limited visibility across warehouse areas · time spent collecting information from employees · difficulty identifying recurring causes of delays · unexpected congestion in receiving or dispatch areas | Lack of measurable performance data · difficulty comparing periods · limited understanding of recurring bottlenecks · challenges forecasting capacity · difficulty evaluating the financial impact of inefficiencies |
| **What they need** | A simple and reliable digital interface that makes it easier to record operational progress and report issues without interfering with mandatory pharmaceutical documentation | A centralised dashboard showing operational progress, delays, congestion and unresolved issues, with escalation to existing quality procedures when necessary | An efficiency dashboard that transforms operational information into meaningful KPIs for capacity planning, process improvement and budgeting |

### 1.5 Stakeholders

| Stakeholder | Role / interest |
|---|---|
| Warehouse operators | Record operational activities and report workflow issues |
| Warehouse supervisors | Monitor daily operations, identify bottlenecks and coordinate responses |
| Warehouse managers | Analyse efficiency, optimise capacity and allocate resources |
| Quality Assurance / GMP compliance | Assess regulatory requirements, data integrity and the impact on quality processes |
| IT department | Evaluate system compatibility, technical feasibility and maintenance |
| Cybersecurity / data protection | Ensure appropriate information security, access controls and protection of sensitive data |
| Supply chain & logistics | Coordinate inbound/outbound flows and delivery planning |
| Senior management | Evaluate business value, costs, operational improvements and investment priorities |

**Key stakeholder priority:** Quality Assurance and IT must be involved before any real-world implementation to determine whether the application's intended use creates additional validation, security or compliance requirements.

### 1.6 User needs

- **Operators:** simple and fast digital activity recording · reduced repetitive administrative work · clear operational instructions · easy reporting of workflow issues · tools that do not interfere with mandatory quality procedures.
- **Supervisors:** centralised visibility into warehouse workflows · timely information about delays and congestion · easy identification of unresolved issues · better coordination of warehouse resources · reliable information for operational decisions.
- **Managers:** quantitative operational performance data · measurable processing times and bottlenecks · better warehouse capacity planning · historical efficiency trends · information supporting resource allocation and budgeting.
- **Quality and IT stakeholders:** appropriate protection of operational information · reliable data handling and access controls · compatibility with existing systems · no unauthorised changes to regulated records · clear separation between operational monitoring and official quality decisions.

### 1.7 Product objectives

1. **Simplify operational documentation:** reduce reliance on manual paper-based operational records where appropriate · make non-regulated activity recording faster and easier · reduce unnecessary administrative effort.
2. **Improve warehouse visibility:** provide a centralised overview of operational workflows · make activity progress and delays easier to monitor · improve coordination between warehouse teams.
3. **Support efficiency measurement:** transform operational records into measurable performance indicators · track time spent at different workflow stages · identify recurring causes of operational delays · enable comparisons of warehouse performance over time.
4. **Improve capacity and flow planning:** identify congestion in inbound and outbound areas · monitor operational workload and capacity utilisation · support better scheduling of deliveries and dispatches · provide quantitative information for resource planning.
5. **Improve issue identification:** make unresolved operational issues more visible · help supervisors identify bottlenecks quickly · support timely escalation through existing approved procedures · reduce the risk of operational issues being overlooked.
6. **Support secure and compliant digitalisation:** respect pharmaceutical product quality requirements · protect operational information through appropriate security controls · preserve the integrity of official regulated records · complement existing validated systems rather than replacing them.

### 1.8 Business goals

**Main business goal:** improve operational efficiency and capacity planning in internal pharmaceutical warehouses by making workflow information easier to record, access and analyse, without compromising regulatory compliance or product safety.

**Potential business benefits**
- **Operational efficiency:** reduce time spent on manual administrative tasks · improve access to operational information · identify and address recurring workflow inefficiencies.
- **Capacity optimisation:** improve visibility into warehouse space utilisation · reduce avoidable congestion in inbound and outbound areas · support more effective delivery scheduling.
- **Cost and resource management:** support more efficient allocation of employees and resources · provide data for budgeting and capacity decisions · identify potential sources of unnecessary operational costs.
- **Data-driven decision-making:** establish measurable warehouse performance indicators · analyse operational trends over time · support continuous process improvement.
- **Compliance and risk management:** maintain separation from official quality and batch records · support controlled access to operational information · ensure efficiency improvements do not bypass mandatory pharmaceutical procedures.

*Important: these are expected benefits, not demonstrated outcomes. Their practical and financial value must be validated through user research and testing.*

### 1.9 Value proposition

> **TrackIt helps internal pharmaceutical warehouses improve operational efficiency by turning manual workflow information into accessible, measurable and actionable data, while preserving product safety, data protection and regulatory compliance.**

- **For operators:** easier operational documentation · less administrative work · simpler issue reporting.
- **For supervisors:** better visibility into warehouse workflows · faster identification of delays · improved operational coordination.
- **For managers:** measurable performance indicators · better capacity and resource planning · more informed operational and budgeting decisions.
- **For pharmaceutical organisations:** potential efficiency improvements · better use of operational information · digital transformation designed around existing regulatory requirements.

### 1.10 Key constraints

1. **Pharmaceutical regulatory compliance:** respect applicable GMP and GDP (GxP) requirements · do not replace official regulated batch, inventory or quality records · do not authorise product release or change quarantine decisions · ensure that any real deployment is assessed for applicable computerised-system validation requirements · maintain approved pharmaceutical operating procedures.
2. **Data integrity and traceability:** operational information must be accurate and reliable · users should only be able to access or modify information according to their responsibilities · any production audit-trail requirements must be assessed based on the application's intended use · the application must not create conflicting versions of official regulated information.
3. **Data protection and cybersecurity:** restrict access to authorised users · protect confidential operational and business information · apply appropriate authentication and role-based permissions in a real deployment · minimise personal data collection and comply with applicable data-protection requirements, including GDPR where relevant · assess cybersecurity risks before connecting to company systems.
4. **Integration with SAP and existing systems:** TrackIt is connected to SAP in both directions: it reads master data (shipment references, products, expected deliveries) from SAP and sends its recorded activities and issues to SAP, so the information enters SAP directly · SAP stays the system of record. Any change to regulated inventory, batch or quality records goes through SAP's own validated processes, never around them · avoid duplicating established batch traceability functions · avoid modifying regulated master data · a real connection requires approved interfaces and technical, quality, security and validation review.
5. **Prototype limitations:** use fictional warehouse data only · no real company data or confidential information · no external APIs: the **SAP connection is simulated** inside the prototype with fictional SAP data · demonstrate operational workflows rather than regulated product management · the prototype is a university demonstration, not a validated pharmaceutical application.

### 1.11 Success criteria

Success should be evaluated through user validation and the prototype's ability to demonstrate the intended value.

1. **User validation:** interviews confirm meaningful difficulties with manual operational processes · operators consider the proposed recording workflow practical · supervisors identify value in improved operational visibility · managers consider the proposed efficiency indicators useful.
2. **Operational efficiency:** demonstrate how digital records could reduce information-retrieval steps · make workflow delays easier to identify · show how processing times can be measured · illustrate how operational data can support efficiency analysis.
3. **Capacity planning:** demonstrate how warehouse congestion can be identified · display information about inbound and outbound activity · show how historical workflow data could support planning decisions.
4. **Usability:** simple and intuitive activity recording · clear workflow status information · easy navigation between operator, supervisor and manager views · minimal unnecessary user interactions.
5. **Compliance and security:** no real or confidential pharmaceutical data used in the prototype · no modification of official regulated records · clear separation between operational monitoring and quality decisions · identification of security and validation requirements for potential real-world implementation.
6. **Prototype success:** demonstrate an operator recording an operational activity · show the activity appearing in the supervisor's monitoring view · display a delay or bottleneck using fictional data · generate basic efficiency indicators for the manager's dashboard · **demonstrate the SAP integration (simulated): data imported from SAP, events sent to SAP, and a clear status when sending fails** · demonstrate this without connecting to real regulated systems.

### 1.12 Strategic positioning

The application addresses a potential gap between existing pharmaceutical warehouse systems and the practical information needed to monitor day-to-day operational efficiency.

| What the application aims to do | What the application does not aim to do |
|---|---|
| **Connect warehouse operations with SAP** | Replace SAP or an existing WMS |
| Digitalise suitable manual operational workflows | Bypass SAP's validated processes |
| Improve visibility into warehouse activity | Replace official batch traceability systems |
| Identify congestion and bottlenecks | Manage pharmaceutical product release decisions |
| Measure operational performance | Replace mandatory GMP/GDP documentation |
| Support capacity planning and resource allocation | Modify regulated inventory or quality records |

**Overall strategic direction:** develop a lightweight operational monitoring tool that helps pharmaceutical warehouses become more efficient and data-driven while maintaining strict boundaries around product safety, data integrity and regulatory compliance.

*All personas, operational pain points and expected benefits remain preliminary until validated through additional interviews.*

---

## 2. Scope

### 2.1 MVP features

| # | Feature | Description | Evidence insight · Strategy objective (1.7) | Priority |
|---|---------|-------------|----------|----------|
| F1 | **Select or mock-scan a shipment** | Pick from a list or search, or press "Scan" (simulated: picks a shipment and shows "Scanned SHP-1042"). Manual entry of a reference is validated. | 1 | Must |
| F2 | **Record a stage change** | Choose the next stage: Received, Awaiting sampling, Sample taken, Stored, Picked, Dispatched. Time and role are added automatically. | 1, 2 | Must |
| F3 | **Report an issue** | Category (Damaged packaging, Missing/unreadable label, Temperature concern, Documentation mismatch, Other), plus a short description (required for "Other"). | 3 | Must |
| F4 | **Monitor shipments** | List with stage, last activity, waiting time, delayed flag, open-issue flag. Filters: stage, delayed only, issues only. Search by reference. | 1, 3 | Must |
| F5 | **Shipment detail** | Current stage, waiting time, full activity history, issues | 1, 3 | Must |
| F6 | **Resolve an issue** | Supervisor adds a short follow-up note and marks the issue resolved. It leaves the open-issue list. | 3 | Must |
| F7 | **Performance dashboard** | Average time per stage, number of delayed shipments, open issues, activities today, most common issue type, short text insights | 4 · Obj. 3 | Must |
| F8 | **Area fill (congestion)** | Inbound and Outbound: number of shipments in the area vs fictional capacity (e.g. 9 / 12), flagged when nearly full | 5 · Obj. 4 | Must |
| F9 | **Arrivals and dispatches by hour** | Bar chart of "Received" and "Dispatched" events by hour of day, to support delivery and dispatch scheduling | 6 · Obj. 4 | Must |
| F11 | **Trend over time** | Line or bar chart of activities and average time per shipment per day for the last 7 days, so periods can be compared | 4 · Obj. 3 | Must |
| F12 | **SAP integration (simulated)** | Shipments and products are **imported from a simulated SAP**. Every recorded activity and issue gets a sync status: *Sending to SAP… → Sent to SAP* or *Not sent – retry*. An **SAP integration** page shows last import, sent / pending / failed counts and a "Simulate SAP offline" switch for the demo. | Strategy (core purpose) · P1 context | Must |
| F10 | **Reset demo data** | Restores the original fictional data | — (demo) | Must |

### 2.2 Content requirements (fictional seed data)
At least **8 shipments** (references `SHP-1040`–`SHP-1047`, fictional product names such as "Product A – vials, 2–8 °C"), showing:
- a recently received shipment
- a shipment awaiting sampling for a long time (delayed)
- a normally progressing shipment
- a shipment with an open issue
- a shipment with a resolved issue
- a dispatched (completed) shipment
- enough Inbound and Outbound shipments that one area looks nearly full

Plus **7 days** of history events, so the dashboard can show trends and compare periods.

### 2.3 Out of scope (future ideas)
- A **live** connection to a real SAP, WMS, ERP or QMS system (simulated instead, see F12)
- Real QR or barcode scanning hardware or camera
- Login, passwords, real permissions (roles are **simulated** by a switcher)
- **AI issue classification**: not supported by evidence and would need an API
- Quarantine, release or any quality decision
- Notifications, task assignment, shift handover, exports
- Serial numbers, official batch records, inventory quantities
- Real company, employee or patient data

---

## 3. Structure

### 3.1 Main user journey (the demo story)
1. **Operator** opens **Record**, taps **Scan** (simulated) → sees `SHP-1042`, current stage "Awaiting sampling".
2. Taps **Sample taken** → **Save** → green confirmation "Activity recorded for SHP-1042". The history shows *Sending to SAP…* and a moment later *Sent to SAP (simulated)*.
3. Notices damaged packaging on `SHP-1045` → **Report issue** → selects "Damaged packaging", adds a note → **Submit**.
4. Switches role to **Supervisor** → **Monitor** shows `SHP-1045` with an "Open issue" badge, `SHP-1041` as "Delayed", and the Inbound area as "Nearly full".
5. Opens `SHP-1045` → reads the history → writes a follow-up note → **Mark as resolved**. Opens **SAP integration**, switches on *Simulate SAP offline*, records one more activity: it shows *Not sent – retry*. Switches SAP back on → **Retry** → *Sent to SAP*.
6. Switches to **Manager** → **Dashboard**: open issues went down by one, activities today went up, "Damaged packaging" appears in the issue chart. The 7-day trend and arrivals/dispatches by hour show when the docks are busiest.

### 3.2 Navigation
- **Header:** TrackIt logo text · role switcher (Operator / Supervisor / Manager) · "Prototype – fictional data" tag
- **Bottom navigation (mobile)** or **left sidebar (≥ 1024 px):** `Record` · `Monitor` · `Dashboard`
- Switching role jumps to that role's home tab (Operator → Record, Supervisor → Monitor, Manager → Dashboard). All tabs stay reachable from every role.
- Shipment detail opens as its own view with a **Back** button.

### 3.3 Stage and status logic
- Stages, in order: `Received → Awaiting sampling → Sample taken → Stored → Picked → Dispatched`.
- A shipment has exactly **one current stage** (its latest recorded stage).
- The Record screen **suggests** the next stage. Skipping a stage or going backwards shows a warning ("This skips 'Stored'. Save anyway?"), not a block.
- **Waiting time** = now − time of the last activity.
- **Delayed** = waiting time > **4 hours** and stage ≠ Dispatched. The threshold is shown on screen ("Delayed after 4 h").
- **Open issue** = any issue on the shipment with status `open`. Issues do not change the stage.
- Every save adds an event to history: shipment, stage or issue, time, role.

### 3.4 Errors and edge cases
| Situation | Behaviour |
|-----------|-----------|
| Save without choosing a shipment or stage | Inline message next to the missing field. Save button stays enabled. |
| Unknown reference typed | "No shipment SHP-9999 in the demo data. Check the reference or choose from the list." |
| Same stage recorded twice | Warning: "SHP-1042 is already 'Stored'. Record again?" |
| Issue category "Other" with empty description | "Please describe the issue." |
| Shipment already dispatched | Recording is disabled, with an explanation |
| Filters return nothing | Empty state: "No shipments match these filters" + "Clear filters" |
| No data for dashboard | Empty state, never fake numbers |

A success message only appears **after** the data is saved.

### 3.5 SAP integration logic (simulated)
- On first load, TrackIt **imports** shipments, products and expected deliveries from the mock SAP data. Each shipment shows the source "SAP".
- Every new activity, issue and issue resolution gets a **sync status**: `pending` → `sent` (after a short simulated delay of about 1 second) or `failed` if *Simulate SAP offline* is on.
- **Never show "Sent to SAP" before it has happened.** Failed items stay visible with a **Retry** button. *Retry all* is on the SAP integration page.
- A shipment reference that does not exist in the SAP data cannot be recorded ("Not found in SAP").
- The SAP integration page is labelled **"Simulated SAP – no real connection"**.

---

## 4. Skeleton

### 4.1 Screen 1: Record (operator)
Top to bottom:
1. Title **Record activity**
2. **Scan shipment** (large primary button) · or search/select field
3. **Shipment card:** reference, product, current stage badge, waiting time
4. **Stage buttons:** large tiles in a 2-column grid. The suggested next stage is highlighted.
5. **Report issue** (secondary button) → opens issue form: category chips + description + Submit
6. **Save** (primary, full width)
7. Toast confirmation · sync badge (Sending to SAP… / Sent to SAP / Not sent – retry) · link "View history"

### 4.2 Screen 2: Monitor (supervisor)
1. Title **Warehouse monitor** · "Delayed after 4 h" note
2. **Summary cards:** In progress · Delayed · Open issues · Activities today · **SAP sync** (e.g. "12 sent · 1 failed", tap to open the SAP integration page)
3. **Area fill (congestion):** Inbound 9/12 · Outbound 4/10 with progress bars
4. **Filter chips:** stage · Delayed only · Issues only · search
5. **Shipment list** (cards on mobile, table on desktop): reference, product, stage, last activity, waiting time, flags
6. Tap a shipment → **Shipment detail**: stage, waiting time, history timeline, issues with **Mark as resolved** (requires a short follow-up note)

### 4.3 Screen 3: Dashboard (manager)
1. Title **Performance dashboard** · period selector: Today / Last 7 days
2. **Metric cards:** Avg. time per shipment (received → dispatched) · Delayed shipments · Open issues · Activities in period
3. **Bar chart:** average hours spent in each stage
4. **Bar chart:** issues by category
5. **Bar chart:** arrivals and dispatches by hour (delivery/dispatch planning)
6. **Trend chart:** activities and average time per shipment per day, last 7 days
7. **Insights panel:** 2–3 sentences generated by simple rules from the data, e.g. "Awaiting sampling has the longest average wait (5.2 h)."
8. Footnote: "Operational estimates from fictional data. Not validated metrics."

### 4.4 SAP integration page (supervisor and manager, from the header menu or the SAP sync card)
1. Title **SAP integration** · tag "Simulated SAP – no real connection"
2. **Connection card:** status (Connected / Offline) · last master-data import time · number of shipments and products imported
3. **Sync summary:** sent · pending · failed
4. **Outbox list:** each event sent to SAP, with shipment, type, time and sync badge · **Retry** on failed items · **Retry all**
5. **Demo control:** switch "Simulate SAP offline"

### 4.5 Shared elements
Header with role switcher, prototype tag and menu (SAP integration · Reset demo data) · bottom nav/sidebar · status badges (text + icon + colour) · sync badges · toasts · empty states.

---

## 5. Build instructions for the AI coding tool
Build the smallest version that makes the journey in 3.1 work end-to-end. Follow `design.md` for look and components and `architecture.md` for technology. Use only fictional data from the seed file. Don't add features from "Out of scope". If something here is unclear or contradicts another document, **ask before coding**.
