# TrackIt

**Shipment tracking for internal pharmaceutical warehouses, integrated with SAP.**  
ESCP Digital Transformation 2026/27 · Group B3

> ⚠️ University prototype with **fictional data only**. TrackIt does not replace SAP, a WMS or any regulated record, and is not a validated GxP system. The SAP connection is **simulated** inside the app.

## The problem

In the internal warehouse we studied, shipment progress, sampling and issues are recorded partly on paper. Supervisors cannot quickly see what is stuck, and managers cannot measure efficiency. See [evidence.md](evidence.md).

## What TrackIt does

- **Operators** record a shipment's stage (received → sampling → stored → picked → dispatched) or report an issue in a few taps.
- **Supervisors** see waiting times, delayed shipments and open issues, and resolve issues.
- **Supervisors** also see how full the inbound and outbound areas are (congestion).
- **SAP integration:** shipments come from SAP, and every recorded activity and issue is sent to SAP with a visible sync status (simulated in this prototype).
- **Managers** see time per stage, delays, common issue types, busy dock hours and a 7-day trend.

## Documents

| File | Contents |
|------|----------|
| [evidence.md](evidence.md) | User research and key insights |
| [product.md](product.md) | PRD: Strategy, Scope, Structure, Skeleton |
| [design.md](design.md) | Design system, storyboard, Storybook |
| [architecture.md](architecture.md) | Technology stack and project structure |
| [PROMPTS.md](PROMPTS.md) | How we used agentic coding |

## Run it locally

**You need:** [Node.js](https://nodejs.org) 22 LTS (or 20.19+) and Git.

```bash
git clone https://github.com/yiwenliu-png/ESCP-2627DT-B3.git
cd ESCP-2627DT-B3/frontend
npm install
npm run dev
```

Open **http://localhost:5173**. For the phone layout, open Chrome DevTools → Device toolbar → choose a phone such as **390 × 844**.

**Component Storybook:**

```bash
npm run storybook
```

Opens **http://localhost:6006**. Storybook setup is maintained by the team.

## How to use it (2-minute demo)

1. Role **Operator** → **Record** → **Scan shipment** → tap **Sample taken** → **Save**.
2. Select **SHP-1042** → **Report issue** → *Damaged packaging* → **Submit**.
3. Switch to **Supervisor** → **Monitor**: see delayed shipments and the new open issue.
4. Open **SHP-1042** → add a note → **Mark as resolved**.
5. Open **SAP integration**: switch on *Simulate SAP offline*, record an activity, show **Not sent**, switch offline off and press **Retry**.
6. Switch to **Manager** → **Dashboard**: the numbers have updated.

Use **Reset demo data** in the header menu to start again.

## Live prototype

[Open the TrackIt live prototype](https://yiwenliu-png.github.io/ESCP-2627DT-B3/)

![TrackIt phone prototype](assets/trackit-phone-prototype.png)

### Open it on a phone

1. Open the live prototype link on your phone.
2. Add it to your Home Screen if you want an app-like shortcut.
3. Use the bottom navigation to try Record, Monitor, Dashboard and SAP.
4. Use the fictional shipment **SHP-1042** for the presentation.

## Tech stack

React · TypeScript · Vite · React Router · Recharts · Storybook · Vitest. No backend, no external APIs. Data is stored in the browser's localStorage. See [architecture.md](architecture.md).

## Limitations

Simulated scanning and roles (no login), fictional data, **simulated SAP connection** (no real system), and operational estimates only.

## Team

Team contributions are recorded through the meaningful commit history in this repository.
