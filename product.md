Product Requirements Document
1. Strategy
1.1 Product Concept
Working Name: Flow Tracker

Flow Tracker is a digital application designed to help internal pharmaceutical warehouse teams monitor operational workflows, record operational activities and analyse warehouse efficiency.

The application aims to improve operational visibility while respecting the pharmaceutical industry's strict requirements for product safety, data integrity and regulatory compliance.

The application focuses on three main functions:
1. Operational Activity Recording: Allow warehouse operators to quickly record workflow progress and operational issues that are not already captured by regulated systems.
2. Warehouse Flow Monitoring: Provide supervisors with a centralised overview of warehouse activities, delays, congestion and unresolved issues.
3. Efficiency and Capacity Analysis: Help managers measure operational performance, identify bottlenecks and improve capacity planning using quantitative indicators.
Product positioning:
- Complement existing enterprise systems such as SAP and Warehouse Management Systems (WMS).
- Focus on operational efficiency rather than official pharmaceutical batch traceability.
- Avoid duplicating or modifying regulated quality and inventory records.
- Support secure, reliable and controlled access to operational information.
- Use operational data to support continuous improvement and decision-making.
The application is intended as an additional operational monitoring layer, not as a replacement for existing validated pharmaceutical systems.
1.2 Problem Statement
Pharmaceutical warehouses operate in a highly regulated environment where product quality, traceability, data integrity and patient safety are essential.

However, some internal warehouses still rely on paper-based documentation for certain operational activities, even when other warehouse processes are already digitalised.

This can create several potential operational challenges.

1. Manual and time-consuming processes
- Employees may need to complete handwritten operational records.
- Information may need to be transferred manually into other documents or systems.
- Retrieving historical information can require additional administrative effort.
2. Limited operational visibility
- Supervisors may lack a centralised view of ongoing warehouse activities.
- Identifying delays or unresolved operational issues may require contacting several employees.
- Information about warehouse congestion may not be immediately available.
3. Difficulties measuring warehouse efficiency
- Paper-based information is difficult to aggregate into measurable performance indicators.
- Managers may struggle to analyse how long operational steps take.
- Recurring bottlenecks may remain difficult to quantify.
4. Warehouse congestion and capacity planning
- Inbound and outbound areas may experience periods of overcrowding.
- Poor visibility into workflow timing can complicate the scheduling of deliveries and dispatches.
- Limited operational data may make resource allocation and budgeting more difficult.
5. Pharmaceutical regulatory constraints
- Certain records must comply with Good Manufacturing Practice (GMP) and Good Distribution Practice (GDP) requirements. GXP requirements
- Digital solutions may require formal validation depending on their intended use.
- Operational information must be handled securely and with appropriate access restrictions.
- Product quality and safety must take priority over efficiency improvements.
Core Problem:

Internal pharmaceutical warehouses may lack easily accessible, structured operational data to monitor and optimise daily workflows, particularly where activities are still documented manually.

This can limit efficiency analysis and capacity planning, while strict regulatory requirements make digital transformation more complex.

Research status: These are preliminary problems identified through internship observations and industry context. Their frequency, causes and operational impact require further validation through interviews.
1.3 Target Users
Primary Users — Warehouse Operators

Warehouse operators are responsible for the physical handling and movement of goods within internal warehouses. Day-to-day 

Responsibilities:
- Receiving and storing goods.
- Picking and preparing goods for dispatch.
- Recording operational activities.
- Reporting damaged goods, missing labels or other issues through approved procedures.
Main needs:
- Fast and straightforward documentation.
- Minimal additional administrative work.
- Clear instructions and accessible operational information.
- Reliable reporting of workflow issues.
Secondary Users — Warehouse Supervisors 

Warehouse supervisors coordinate daily warehouse activities and ensure operational processes run efficiently. (mid-term)

Responsibilities:
- Monitoring warehouse workflows.
- Coordinating employees and operational tasks.
- Identifying delays and bottlenecks.
- Managing workload and operational priorities.
- Escalating issues to the appropriate teams.
Main needs:
- Centralised visibility into ongoing activities.
- Quick identification of delays and congestion.
- Clear information about unresolved operational issues.
- Better coordination of inbound and outbound flows.
Additional Users — Warehouse Managers

Warehouse managers oversee warehouse performance, operational resources and capacity planning. (long-term)

Responsibilities:
- Evaluating warehouse productivity.
- Planning warehouse capacity and resources.
- Identifying opportunities for process improvement.
- Supporting budgeting and operational decisions.
- Ensuring that efficiency objectives remain compatible with regulatory requirements.
Main needs:
- Quantitative performance indicators.
- Reliable data about workflow duration and bottlenecks.
- Historical trends for efficiency analysis.
- Better information for resource and capacity planning.
1.4 User Personas
The following personas represent hypothetical users and will be refined through interviews.
Persona 1 — Warehouse Operator
Profile:
- Works directly on the warehouse floor.
- Handles incoming goods, storage, picking and dispatch.
- Uses existing warehouse systems alongside possible paper-based procedures.
Goals:
- Complete operational tasks efficiently.
- Record activities quickly and accurately.
- Avoid unnecessary administrative work.
- Follow required safety and quality procedures.
Potential pain points:
- Repetitive manual documentation.
- Time spent searching for operational information.
- Difficulty communicating workflow problems.
- Additional steps when information must be recorded in multiple places.
What the user needs:

A simple and reliable digital interface that makes it easier to record operational progress and report issues without interfering with mandatory pharmaceutical documentation.
Persona 2 — Warehouse Supervisor
Profile:
- Coordinates daily warehouse operations.
- Supervises employees and workflow progress.
- Responds to delays and operational problems.
Goals:
- Maintain smooth inbound and outbound flows.
- Identify bottlenecks before they create major disruptions.
- Improve coordination between warehouse areas.
- Ensure operational activities follow approved procedures.
Potential pain points:
- Limited visibility into activities across warehouse areas.
- Time spent collecting information from different employees.
- Difficulty identifying recurring causes of delays.
- Unexpected congestion in receiving or dispatch areas.
What the user needs:

A centralised dashboard showing operational progress, delays, congestion and unresolved issues, with appropriate escalation to existing quality procedures when necessary.
Persona 3 — Warehouse Manager
Profile:
- Responsible for warehouse performance and operational planning.
- Oversees resources, capacity and process improvement.
- Works with logistics, IT and quality teams.
Goals:
- Improve warehouse efficiency.
- Optimise capacity and resource utilisation.
- Reduce unnecessary operational costs.
- Support decisions using reliable performance data.
- Maintain compliance with pharmaceutical requirements.
Potential pain points:
- Lack of measurable operational performance data.
- Difficulty comparing efficiency across different periods.
- Limited understanding of recurring bottlenecks.
- Challenges forecasting warehouse capacity requirements.
- Difficulty evaluating the financial impact of inefficiencies.
What the user needs:

An efficiency dashboard that transforms operational information into meaningful KPIs for capacity planning, process improvement and budgeting.
1.5 Stakeholders
The application involves several stakeholders because pharmaceutical warehouse operations require coordination between logistics, quality, technology and management.
Stakeholder	Role / Interest
Warehouse Operators	Record operational activities and report workflow issues.
Warehouse Supervisors	Monitor daily operations, identify bottlenecks and coordinate responses.
Warehouse Managers	Analyse efficiency, optimise capacity and allocate resources.
Quality Assurance / GMP Compliance	Assess regulatory requirements, data integrity and the impact on quality processes.
IT Department	Evaluate system compatibility, technical feasibility and maintenance.
Cybersecurity / Data Protection	Ensure appropriate information security, access controls and protection of sensitive data.
Supply Chain & Logistics	Coordinate inbound/outbound flows and delivery planning.
Senior Management	Evaluate business value, costs, operational improvements and investment priorities.


Key stakeholder priority:

Quality Assurance and IT must be involved before any real-world implementation to determine whether the application's intended use creates additional validation, security or compliance requirements.
1.6 User Needs
Warehouse Operators
- Simple and fast digital activity recording.
- Reduced repetitive administrative work.
- Clear operational instructions.
- Easy reporting of workflow issues.
- Tools that do not interfere with mandatory quality procedures.
Warehouse Supervisors
- Centralised visibility into warehouse workflows.
- Timely information about delays and congestion.
- Easy identification of unresolved issues.
- Better coordination of warehouse resources.
- Reliable information for operational decisions.
Warehouse Managers
- Quantitative operational performance data.
- Measurable processing times and bottlenecks.
- Better warehouse capacity planning.
- Historical efficiency trends.
- Information supporting resource allocation and budgeting.
Quality and IT Stakeholders
- Appropriate protection of operational information.
- Reliable data handling and access controls.
- Compatibility with existing systems.
- No unauthorised changes to regulated records.
- Clear separation between operational monitoring and official quality decisions.
1.7 Product Objectives
Our application aims to achieve six main objectives.

1. Simplify Operational Documentation
- Reduce reliance on manual paper-based operational records where appropriate.
- Make non-regulated activity recording faster and easier.
- Reduce unnecessary administrative effort.
2. Improve Warehouse Visibility
- Provide a centralised overview of operational workflows.
- Make activity progress and delays easier to monitor.
- Improve coordination between warehouse teams.
3. Support Efficiency Measurement
- Transform operational records into measurable performance indicators.
- Track time spent at different workflow stages.
- Identify recurring causes of operational delays.
- Enable comparisons of warehouse performance over time.
4. Improve Capacity and Flow Planning
- Identify congestion in inbound and outbound areas.
- Monitor operational workload and capacity utilisation.
- Support better scheduling of deliveries and dispatches.
- Provide quantitative information for resource planning.
5. Improve Issue Identification
- Make unresolved operational issues more visible.
- Help supervisors identify bottlenecks quickly.
- Support timely escalation through existing approved procedures.
- Reduce the risk of operational issues being overlooked.
6. Support Secure and Compliant Digitalisation
- Respect pharmaceutical product quality requirements.
- Protect operational information through appropriate security controls.
- Preserve the integrity of official regulated records.
- Complement existing validated systems rather than replacing them.
1.8 Business Goals
Main Business Goal:

Improve operational efficiency and capacity planning in internal pharmaceutical warehouses by making workflow information easier to record, access and analyse, without compromising regulatory compliance or product safety.

Potential Business Benefits

Operational Efficiency
- Reduce time spent on manual administrative tasks.
- Improve access to operational information.
- Identify and address recurring workflow inefficiencies.
Capacity Optimisation
- Improve visibility into warehouse space utilisation.
- Reduce avoidable congestion in inbound and outbound areas.
- Support more effective delivery scheduling.
Cost and Resource Management
- Support more efficient allocation of employees and resources.
- Provide data for budgeting and capacity decisions.
- Identify potential sources of unnecessary operational costs.
Data-Driven Decision-Making
- Establish measurable warehouse performance indicators.
- Analyse operational trends over time.
- Support continuous process improvement.
Compliance and Risk Management
- Maintain separation from official quality and batch records.
- Support controlled access to operational information.
- Ensure efficiency improvements do not bypass mandatory pharmaceutical procedures.
Important: These are expected benefits, not demonstrated outcomes. Their practical and financial value must be validated through user research and testing.
1.9 Value Proposition
Flow Tracker helps internal pharmaceutical warehouses improve operational efficiency by turning manual workflow information into accessible, measurable and actionable data, while preserving product safety, data protection and regulatory compliance.

Value for Operators
- Easier operational documentation.
- Less administrative work.
- Simpler issue reporting.
Value for Supervisors
- Better visibility into warehouse workflows.
- Faster identification of delays.
- Improved operational coordination.
Value for Managers
- Measurable performance indicators.
- Better capacity and resource planning.
- More informed operational and budgeting decisions.
Value for Pharmaceutical Organisations
- Potential efficiency improvements.
- Better use of operational information.
- Digital transformation designed around existing regulatory requirements.
1.10 Key Constraints
1. Pharmaceutical Regulatory Compliance
- Respect applicable GMP and GDP requirements. GXP requirements in general
- Do not replace official regulated batch, inventory or quality records.
- Do not authorise product release or change quarantine decisions.
- Ensure that any real deployment is assessed for applicable computerised-system validation requirements.
- Maintain approved pharmaceutical operating procedures.
2. Data Integrity and Traceability
- Operational information must be accurate and reliable.
- Users should only be able to access or modify information according to their responsibilities.
- Any production audit-trail requirements must be assessed based on the application's intended use.
- The application must not create conflicting versions of official regulated information.
3. Data Protection and Cybersecurity
- Restrict access to authorised users.
- Protect confidential operational and business information.
- Apply appropriate authentication and role-based permissions in a real deployment.
- Minimise personal data collection and comply with applicable data protection requirements, including GDPR where relevant.
- Assess cybersecurity risks before connecting to company systems.
4. Compatibility with Existing Systems
- Complement SAP and existing Warehouse Management Systems.
- Avoid duplicating established batch traceability functions.
- Avoid modifying regulated master data.
- Any future system integration would require appropriate technical, quality and security review.
- Benefits and collaborates with SAP and MasterData, all info from flow tracker enters directly in there
5. Prototype Limitations
- Use fictional warehouse data only.
- No real company data or confidential information.
- No external APIs or live SAP/WMS integration.
- Demonstrate operational workflows rather than regulated product management.
- The prototype is a university demonstration, not a validated pharmaceutical application.
1.11 Success Criteria
Success should/could be evaluated through user validation and the prototype's ability to demonstrate the intended value.

1. User Validation
- Interviews confirm meaningful difficulties with manual operational processes.
- Operators consider the proposed recording workflow practical.
- Supervisors identify value in improved operational visibility.
- Managers consider the proposed efficiency indicators useful.
2. Operational Efficiency
- Demonstrate how digital records could reduce information retrieval steps.
- Make workflow delays easier to identify.
- Show how processing times can be measured.
- Illustrate how operational data can support efficiency analysis.
3. Capacity Planning
- Demonstrate how warehouse congestion can be identified.
- Display information about inbound and outbound activity.
- Show how historical workflow data could support planning decisions.
4. Usability
- Simple and intuitive activity recording.
- Clear workflow status information.
- Easy navigation between operator, supervisor and manager views.
- Minimal unnecessary user interactions.
5. Compliance and Security
- No real or confidential pharmaceutical data used in the prototype.
- No modification of official regulated records.
- Clear separation between operational monitoring and quality decisions.
- Identification of security and validation requirements for potential real-world implementation.
6. Prototype Success
- Demonstrate an operator recording an operational activity.
- Show the activity appearing in the supervisor's monitoring view.
- Display a delay or bottleneck using fictional data.
- Generate basic efficiency indicators for the manager's dashboard.
- Demonstrate the value of digital operational information without connecting to existing regulated systems.
1.12 Strategic Positioning
The application addresses a potential gap between existing pharmaceutical warehouse systems and the practical information needed to monitor day-to-day operational efficiency.

What the application aims to do:
- Digitalise suitable manual operational workflows.
- Improve visibility into warehouse activity.
- Identify congestion and bottlenecks.
- Measure operational performance.
- Support capacity planning and resource allocation.
What the application does not aim to do:
- Replace SAP or an existing WMS.
- Replace official batch traceability systems.
- Manage pharmaceutical product release decisions.
- Replace mandatory GMP/GDP documentation.
- Modify regulated inventory or quality records.
Overall Strategic Direction:

Develop a lightweight operational monitoring tool that helps pharmaceutical warehouses become more efficient and data-driven while maintaining strict boundaries around product safety, data integrity and regulatory compliance.

All personas, operational pain points and expected benefits remain preliminary until validated through additional interviews.
