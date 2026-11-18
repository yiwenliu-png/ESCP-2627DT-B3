# TrackIt

**Shipment tracking for internal pharmaceutical warehouses, integrated with SAP.**
ESCP Digital Transformation 2026/27 · Group B[n]: [member names]

> ⚠️ University prototype with **fictional data only**. TrackIt does not replace SAP, a WMS or any regulated record, and is not a validated GxP system. The SAP connection is **simulated** inside the app.

## The problem
In the internal warehouse we studied, shipment progress, sampling and issues are recorded partly on paper. Supervisors can't quickly see what is stuck, and managers can't measure efficiency. See [`evidence.md`](evidence.md).

## What TrackIt does
- **Operators** record a shipment's stage (received → sampling → stored → picked → dispatched) or report an issue in a few taps.
- **Supervisors** see waiting times, delayed shipments and open issues, and resolve issues.
- **Supervisors** also see how full the inbound and outbound areas are (congestion).
- **SAP integration:** shipments come from SAP, and every recorded activity and issue is sent to SAP with a visible sync status (simulated in this prototype).
- **Managers** see time per stage, delays, the most common issue types, busy hours at the docks and a 7-day trend.

## Documents
| File | Contents |
|------|----------|
| [`evidence.md`](evidence.md) | User research and key insights |
| [`product.md`](product.md) | PRD: Strategy, Scope, Structure, Skeleton |
| [`design.md`](design.md) | Design system, storyboard, Storybook |
| [`architecture.md`](architecture.md) | Technology stack and project structure |
| [`PROMPTS.md`](PROMPTS.md) | How we used agentic coding |

## Run it locally
**You need:** [Node.js](https://nodejs.org) 22 LTS (or 20.19+) and Git.

```bash
git clone https://github.com/[org-or-user]/ESCP-2627DT-B[n].git
cd ESCP-2627DT-B[n]
npm install
npm run dev
```
Open **http://localhost:5173**. For the phone layout: Chrome → right-click → Inspect → device toolbar → choose a phone.

**Component Storybook:**
```bash
npm run storybook
```
Opens **http://localhost:6006**.

[Optional: Live demo at https://...github.io/...]

## How to use it (2-minute demo)
1. Role **Operator** → **Record** → **Scan shipment** → tap **Sample taken** → **Save**.
2. Select **SHP-1045** → **Report issue** → *Damaged packaging* → **Submit**.
3. Switch to **Supervisor** → **Monitor**: see delayed shipments and the new open issue.
4. Open **SHP-1045** → add a note → **Mark as resolved**.
5. Menu → **SAP integration**: see what was sent to SAP. Switch on *Simulate SAP offline*, record an activity, then switch it back on and press **Retry**.
6. Switch to **Manager** → **Dashboard**: the numbers have updated.

Use **Reset demo data** (header menu) to start again.

## Tech stack
React · TypeScript · Vite · React Router · Recharts · Storybook · Vitest. No backend, no external APIs. Data is stored in the browser's localStorage. See [`architecture.md`](architecture.md).

## Limitations
Simulated scanning and roles (no login), fictional data, **simulated SAP connection** (no real system), KPIs are operational estimates only.

## Team
| Name | Main contribution |
|------|-------------------|
| [ ] | [ ] |
