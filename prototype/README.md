# TrackIt prototype v2

Live demo: https://yiwenliu-png.github.io/ESCP-2627DT-B3/

## Run locally

```bash
cd prototype
npm install
npm run dev
```

Open the local URL and use the bottom navigation. For the phone version, use Chrome DevTools → device toolbar → iPhone or 390 × 844.

## Two-minute presentation demo

1. Operator → Record → select SHP-1042 → choose Sample taken → Save activity.
2. Switch to Monitor → see the shipment, delays, open issues, and inbound congestion.
3. Resolve an open issue.
4. Switch to Dashboard → see activity, delay, issue, 7-day trend, and hourly flow charts.
5. Open SAP → switch on Simulate SAP offline → record an activity → see Not sent → turn offline off → Retry failed events.
6. Use Reset to restore the original fictional data.

The prototype uses fictional shipments only, browser localStorage, no backend, and no external APIs. SAP is simulated and is not a real connection.