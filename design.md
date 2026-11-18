# TrackIt: Design System, Storyboard and Storybook

The interface should feel **calm, clear and operational**: easy to use with gloves on a warehouse floor, and never alarmist. Every status uses **text + icon + colour**, never colour alone.

> Our own palette. Do not use any real company's logo, name or brand colours.

---

## 1. Design tokens

Define these once as CSS variables in `src/styles/tokens.css` and use **only** these values in components.

### 1.1 Colour

| Token | Hex | Use |
|-------|-----|-----|
| `--color-navy` | `#14213D` | Header, headings, main text |
| `--color-primary` | `#2952C7` | Primary buttons, links, selected tab |
| `--color-primary-soft` | `#E6EEFC` | Selected chip / tile background |
| `--color-teal` | `#0B7A6E` | Completed, resolved, success text |
| `--color-mint` | `#E3F4EF` | Success background |
| `--color-amber` | `#9A5B00` | Waiting / delayed text |
| `--color-amber-soft` | `#FDF1DC` | Waiting / delayed background |
| `--color-coral` | `#B03A4E` | Open issue / error text |
| `--color-coral-soft` | `#FBE8EB` | Open issue / error background |
| `--color-grey-600` | `#5B6575` | Secondary text |
| `--color-grey-200` | `#DDE2EA` | Borders, dividers |
| `--color-grey-50` | `#F4F6F9` | Page background |
| `--color-white` | `#FFFFFF` | Cards, forms |

All text/background pairs above meet WCAG AA (≥ 4.5 : 1). No bright red anywhere.

### 1.2 Status mapping (use everywhere)

| Status | Text colour / background | Icon (lucide-react) | Label |
|--------|-------------------------|---------------------|-------|
| In progress (any stage) | primary / primary-soft | `Circle` | stage name, e.g. "Stored" |
| Dispatched / Resolved | teal / mint | `CheckCircle2` | "Dispatched", "Resolved" |
| Delayed | amber / amber-soft | `Clock` | "Delayed 5 h 10 min" |
| Open issue | coral / coral-soft | `AlertTriangle` | "Open issue" |

**SAP sync status**

| Sync status | Text colour / background | Icon | Label |
|-------------|-------------------------|------|-------|
| Pending | grey-600 / grey-50 | `Loader2` (spins, unless reduced motion) | "Sending to SAP…" |
| Sent | teal / mint | `CloudCheck` (or `Check`) | "Sent to SAP" |
| Failed | coral / coral-soft | `CloudOff` | "Not sent – retry" |

### 1.3 Typography
- **Font:** Inter, self-hosted via the `@fontsource/inter` npm package (no external font service). Fallback: `system-ui, sans-serif`.

| Token | Size / line-height | Weight | Use |
|-------|-------------------|--------|-----|
| `--text-h1` | 24 / 32 px | 700 | Screen titles |
| `--text-h2` | 18 / 26 px | 600 | Section titles, card titles |
| `--text-body` | 16 / 24 px | 400 | Default (never smaller on inputs) |
| `--text-small` | 14 / 20 px | 400 | Secondary info, timestamps |
| `--text-metric` | 32 / 40 px | 700 | Dashboard numbers |

Use tabular numbers (`font-variant-numeric: tabular-nums`) for times and metrics.

### 1.4 Spacing, shape, elevation
- **Spacing scale (4 px base):** 4 · 8 · 12 · 16 · 24 · 32 · 48. Page padding 16 px on mobile and 32 px on desktop.
- **Radius:** 8 px (buttons, inputs, badges) · 12 px (cards, tiles) · 999 px (chips)
- **Shadow:** cards `0 1px 3px rgba(20,33,61,.08)`. No heavy shadows.
- **Touch targets:** at least **48 × 48 px**. Main action buttons are 56 px tall.
- **Focus ring:** 3 px outline in `--color-primary` with a 2 px offset, on every interactive element

---

## 2. Layout

| Breakpoint | Layout |
|------------|--------|
| 360–767 px (**primary target**) | Single column · compact header · **bottom navigation** (3 tabs, 64 px high) · content has 80 px bottom padding so nothing is hidden |
| 768–1023 px | Two-column card grid · bottom nav stays |
| ≥ 1024 px | **Left sidebar** navigation · Monitor list becomes a table · Dashboard charts side by side · content max-width 1200 px |

---

## 3. Components

Each component lists the **states that must exist in Storybook**.

| Component | Purpose | States / variants |
|-----------|---------|-------------------|
| **Button** | Actions | primary · secondary · ghost · *each:* default, hover, focus, disabled, loading · size `md` (48 px) and `lg` (56 px, full width) |
| **StageTile** | Choose a stage on Record | default · suggested (highlighted border + "Next" tag) · selected · disabled |
| **StatusBadge** | Show status | in progress · dispatched · resolved · delayed · open issue |
| **ShipmentCard** | One shipment in a list | normal · delayed · open issue · delayed + open issue · dispatched |
| **ShipmentPicker** | Search/select + scan button | empty · typing with results · unknown reference error · selected |
| **IssueForm** | Report an issue | empty · category chosen · "Other" without description (error) · submitting · submitted |
| **IssueCard** | Issue in the detail view | open (with Resolve button) · resolving (note field) · resolved |
| **MetricCard** | Number on Monitor/Dashboard | default · highlighted (e.g. delays > 0) · empty (no data) |
| **AreaFill** | Inbound/Outbound capacity | low (< 60 %) · high (60–89 %) · nearly full (≥ 90 %, amber + label) |
| **BarChart** | Time per stage, issues by category, arrivals/dispatches by hour | with data · empty |
| **TrendChart** | 7-day trend on Dashboard | with data · single day · empty |
| **FilterChips** | Filters on Monitor | none active · some active · "Clear filters" |
| **HistoryTimeline** | Shipment events | several events · single event |
| **RoleSwitcher** | Simulated role choice | operator · supervisor · manager selected |
| **NavBar** | Bottom nav / sidebar | each tab active · mobile and desktop variant |
| **Toast** | Feedback | success · warning · error |
| **EmptyState** | Nothing to show | with action button · without |
| **ConfirmDialog** | Warnings (skip stage, duplicate) | open |
| **SyncBadge** | SAP sync status on events | pending · sent · failed (with Retry) |
| **SapConnectionCard** | Status of the simulated SAP | connected · offline · importing |
| **OutboxList** | Events sent to SAP | all sent · some failed · empty |

### Wording rules
- Short and specific: "Activity recorded for SHP-1042", not "Success!"
- Errors explain what to do next and don't blame the user: "Choose a stage before saving."
- Never say "approved", "released" or "compliant".

---

## 4. Storyboard: the main journey

| Frame | Who / where | What they see and do | Feedback |
|-------|-------------|---------------------|----------|
| 1 | Operator · **Record** | Empty record screen, big **Scan shipment** button | — |
| 2 | Operator · Record | Taps Scan → card "SHP-1042 · Product A · Awaiting sampling · waiting 2 h". The "Sample taken" tile is marked *Next*. | Toast "Scanned SHP-1042" |
| 3 | Operator · Record | Taps **Sample taken** → **Save** | Green toast "Activity recorded for SHP-1042". The card updates its stage. Sync badge: *Sending to SAP…* → *Sent to SAP*. |
| 4 | Operator · Record | Selects SHP-1045 → **Report issue** → "Damaged packaging" + note → Submit | Toast "Issue reported – the supervisor can see it on Monitor" |
| 5 | Supervisor · **Monitor** | Summary: 2 delayed, 2 open issues. Inbound area "Nearly full 11/12" (amber). SHP-1045 shows a coral "Open issue" badge, SHP-1041 an amber "Delayed 6 h" badge. | — |
| 6 | Supervisor · Shipment detail | Opens SHP-1045 → timeline + issue card → writes a note → **Mark as resolved** | Teal "Resolved" badge. Open issues 2 → 1. |
| 6b | Supervisor · **SAP integration** | Switches on *Simulate SAP offline*, records an activity → it shows *Not sent – retry*. Switches back on → **Retry** | Badge turns *Sent to SAP*. Sync summary updates. |
| 7 | Manager · **Dashboard** | Metric cards, time-per-stage chart, issue chart with "Damaged packaging", arrivals/dispatches by hour, 7-day trend | Insight: "Awaiting sampling has the longest average wait." |

(Optional: add a hand-drawn or screenshot sketch for each frame in `docs/storyboard/`.)

---

## 5. Storybook

The prototype includes **Storybook**, a catalogue that shows each component on its own in all the states listed in section 3.

- Run with `npm run storybook` (see `architecture.md`)
- One file per component: `src/components/Button/Button.stories.tsx`, etc.
- One story per state, named after the state (e.g. `Primary`, `Disabled`, `Loading`)
- Stories use the same tokens and fictional data as the app
- A "Design tokens" page shows the colours, type scale and spacing

---

## 6. Accessibility checklist
- [ ] Contrast ≥ 4.5 : 1 for text (palette checked)
- [ ] Status never shown by colour alone
- [ ] Visible focus on every control, and full keyboard use on desktop
- [ ] Every icon-only button has an `aria-label`
- [ ] Form errors are linked to their field (`aria-describedby`) and announced
- [ ] Toasts use `role="status"`
- [ ] Respect `prefers-reduced-motion`
- [ ] Touch targets ≥ 48 px
