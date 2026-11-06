# TrackIt Architecture

## 1. Architecture overview

TrackIt is a prototype for improving operational visibility in internal pharmaceutical warehouses. It helps warehouse staff record operational events, lets supervisors monitor delays and issues, and gives managers a basic view of efficiency indicators.

TrackIt is an operational monitoring layer. It does not replace SAP, WMS, ERP, QMS, serialization, inventory, official batch records, product release, or quarantine decisions.

The architecture is deliberately divided into:

1. **Prototype architecture** — the scope of the current workshop and clickable demonstration.
2. **Future production architecture** — capabilities that would require further requirements, security, quality, privacy, integration, and validation review.

## 2. Prototype architecture

~~~
flowchart TB
    subgraph Users[Prototype users]
        Operator[Warehouse operator]
        Supervisor[Warehouse supervisor]
        Manager[Warehouse manager]
    end

    subgraph Prototype[TrackIt prototype]
        UI[Responsive mobile-first interface]
        Roles[Role-based workspaces]
        Actions[Activity recording and issue reporting]
        Flow[Warehouse flow and delay view]
        KPIs[Basic efficiency indicators]
        Data[(Synthetic warehouse data)]
    end

    Operator --> UI
    Supervisor --> UI
    Manager --> UI
    UI --> Roles
    Roles --> Actions
    Roles --> Flow
    Roles --> KPIs
    Actions --> Data
    Flow --> Data
    KPIs --> Data
~~~

### Prototype scope

The prototype should demonstrate one simple end-to-end workflow:

~~~
flowchart LR
    Record[Operator records activity] --> Monitor[Supervisor sees status and delays]
    Monitor --> Analyse[Manager reviews basic performance data]
~~~

The prototype includes:

- Role switching for operator, supervisor, and manager.
- Mobile-first responsive layout.
- Activity recording using a fictional package or shipment reference.
- Simulated QR scanning or manual identifier entry.
- Basic activity history and status display.
- Issue reporting with fictional issue categories.
- Supervisor view of waiting activities and open issues.
- Manager view of basic time-per-step, delay, and trend indicators.
- Fictional notifications and synthetic warehouse data.
- Clear success and error states.

The prototype does not include:

- SAP, WMS, ERP, or QMS integration.
- Real QR scanning or production package data.
- Formal authentication or enterprise single sign-on.
- Complex permissions or production-grade audit trails.
- Inventory management, serialization, or official batch records.
- Product release, quarantine removal, or quality decisions.
- AI predictions or automated capacity recommendations.
- Offline synchronization or conflict resolution.

## 3. Prototype screens and responsibilities

| Workspace | Main screens | Responsibility |
|---|---|---|
| Operator | Overview, Record Activity, Report Issue | Record an operational event or report a problem quickly |
| Supervisor | Warehouse Flow, Exceptions Queue | Monitor progress, identify delays, and review open issues |
| Manager | Analytics, KPI Trends | Review basic operational performance and recurring delays |

The operator flow should be the primary demonstration:

1. Select **Record Activity**.
2. Choose an activity such as receiving, storage, picking, or dispatch.
3. Scan or enter a fictional package/shipment reference.
4. Confirm the activity.
5. Show a clear saved or error state.
6. Make the event visible in the supervisor and manager views.

## 4. Data model for the prototype

~~~
erDiagram
    USER ||--o{ ACTIVITY_EVENT : records
    PACKAGE_REFERENCE ||--o{ ACTIVITY_EVENT : relates_to
    USER ||--o{ ISSUE : reports
    ACTIVITY_EVENT ||--o{ ISSUE : may_have

    USER {
        string user_id PK
        string role
        string display_name
    }
    PACKAGE_REFERENCE {
        string reference_id PK
        string operational_status
        string current_area
    }
    ACTIVITY_EVENT {
        string event_id PK
        string reference_id FK
        string activity_type
        string status
        datetime recorded_at
        string recorded_by FK
    }
    ISSUE {
        string issue_id PK
        string category
        string description
        string status
        string reported_by FK
    }
~~~

All records in the prototype must be fictional. The prototype should show timestamps, activity status, and user role for demonstration purposes, but these records must not be presented as validated pharmaceutical records.

## 5. Prototype component structure

~~~
flowchart TB
    UI[Mobile-first UI]
    State[Prototype state / mock API]
    Seed[Synthetic data]
    OperatorView[Operator workspace]
    SupervisorView[Supervisor workspace]
    ManagerView[Manager workspace]

    UI --> OperatorView
    UI --> SupervisorView
    UI --> ManagerView
    OperatorView --> State
    SupervisorView --> State
    ManagerView --> State
    State --> Seed
~~~

Recommended implementation boundaries:

- **UI layer:** navigation, role selector, forms, cards, tables, status labels, feedback messages.
- **Prototype state layer:** activity creation, issue creation, filtering, status updates, and mock notifications.
- **Synthetic data layer:** fictional users, package/shipment references, activities, issues, delays, and KPI values.

The prototype may use a local mock API or in-memory state. It does not need a database, message broker, integration adapter, or production identity provider.

## 6. Important terminology and safety boundaries

- A QR code or identifier is used to find or reference a package/shipment; it is not proof of authenticity, release, or quality status.
- TrackIt records an **operational observation**. It does not create or modify an authoritative batch, inventory, serialization, or quality record.
- “Quarantine” may appear only as a fictional status or issue category in the prototype. TrackIt must not remove a hold or approve release.
- KPI values are operational estimates based on prototype data, not validated system-of-record metrics.
- The problem statement should remain appropriately cautious: warehouse teams **may** lose time or visibility when activities and issues are recorded manually or across disconnected systems. This requires confirmation through additional interviews.

## 7. Future production architecture

The following architecture is not part of the workshop prototype. It describes the capabilities that would need to be assessed before any controlled operational deployment.

~~~
flowchart TB
    Client[Approved web or mobile clients]
    Gateway[API gateway / backend-for-frontend]
    Auth[Enterprise identity and RBAC]
    Services[Workflow, movement, issue, KPI, and notification services]
    Data[(Operational database and audit trail)]
    Events[(Event and integration queue)]
    Adapters[Approved integration adapters]
    Systems[WMS / ERP / QMS / notification systems]

    Client --> Gateway
    Gateway --> Auth
    Gateway --> Services
    Services --> Data
    Services --> Events
    Events --> Adapters
    Adapters <--> Systems
~~~

Potential future capabilities include:

- Enterprise authentication, MFA, server-side RBAC, and zone-based authorization.
- Approved read/write interface specifications for WMS, ERP, and QMS.
- Idempotency and duplicate-scan protection.
- Retry, reconciliation, dead-letter handling, and interface monitoring.
- Append-only, tamper-evident audit trails.
- Controlled notification routing and escalation.
- KPI read models, metric definitions, freshness indicators, and export approval.
- Encryption, secrets management, vulnerability management, backups, and recovery testing.
- Privacy controls, retention rules, data residency, and access reviews.
- Risk assessment and validation planning according to intended use.

## 8. Production-readiness decisions

Before extending the prototype, the team must validate:

- Which activities are genuinely still recorded on paper and why.
- Whether the problem is confirmed by operators, supervisors, and quality stakeholders.
- Whether TrackIt needs read-only or command-capable integration with existing systems.
- Which identifiers and operational data may be stored.
- Whether any proposed workflow affects GxP-regulated processes.
- The required permissions, retention, audit, export, and notification rules.
- Whether offline capture is necessary and how conflicts would be handled.

## 9. Recommended delivery sequence

### Phase 1 — Workshop prototype

Build the three role workspaces with synthetic data and one complete record → monitor → analyse journey.

### Phase 2 — Evidence and usability refinement

Conduct additional interviews, verify the paper-based workflow, remove unsupported features, and test whether users understand the prototype.

### Phase 3 — Production-readiness assessment

Define formal requirements, conduct security/privacy/quality risk assessments, specify approved integrations, determine validation scope, and design operational support and recovery procedures.

## 10. Architecture conclusion

For the current project, TrackIt should be presented as a focused operational visibility prototype rather than a warehouse digitalisation platform. Its architecture should stay small, demonstrable, and based on synthetic data. The production architecture should remain documented as a future direction, not as functionality that the prototype already provides.

