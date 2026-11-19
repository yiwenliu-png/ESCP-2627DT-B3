import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type Stage = "Received" | "Awaiting sampling" | "Sample taken" | "Stored" | "Picked" | "Dispatched";
type Tab = "Record" | "Monitor" | "Dashboard" | "SAP";
type Shipment = { id: string; product: string; stage: Stage; area: string; age: number; issue?: string; resolved?: boolean; sync: "sent" | "sending" | "failed"; events: number };
const stages: Stage[] = ["Received", "Awaiting sampling", "Sample taken", "Stored", "Picked", "Dispatched"];
const seed: Shipment[] = [
  ["1040","Product A · vials · 2–8°C","Received","Inbound",1,2],["1041","Product B · cartons","Awaiting sampling","Inbound",6,3],["1042","Product C · vials · 2–8°C","Awaiting sampling","Inbound",2,3],["1043","Product D · syringes","Sample taken","Storage",1,4],["1044","Product E · packs","Stored","Storage",3,5],["1045","Product F · vials","Picked","Outbound",1,6],["1046","Product G · cartons","Dispatched","Outbound",0,7],["1047","Product H · vials","Received","Inbound",1,2]
].map(([id, product, stage, area, age, events]) => ({ id: "SHP-" + id, product, stage: stage as Stage, area, age: Number(age), events: Number(events), sync: "sent" }));

function App() {
  const [data, setData] = useState<Shipment[]>(() => JSON.parse(localStorage.getItem("trackit-v2") || "null") || seed);
  const [tab, setTab] = useState<Tab>("Record");
  const [role, setRole] = useState("Operator");
  const [selected, setSelected] = useState("SHP-1042");
  const [stage, setStage] = useState<Stage>("Sample taken");
  const [offline, setOffline] = useState(false);
  const [message, setMessage] = useState("");
  const [query, setQuery] = useState("");
  useEffect(() => localStorage.setItem("trackit-v2", JSON.stringify(data)), [data]);
  const current = data.find(x => x.id === selected) || data[0];
  const flash = (m: string) => { setMessage(m); setTimeout(() => setMessage(""), 2500); };
  const setWorkspace = (r: string) => { setRole(r); setTab(r === "Operator" ? "Record" : r === "Supervisor" ? "Monitor" : "Dashboard"); };
  const save = () => {
    if (current.stage === stage) return flash("This shipment is already at that stage.");
    setData(xs => xs.map(x => x.id === selected ? { ...x, stage, age: 0, events: x.events + 1, sync: offline ? "failed" : "sending" } : x));
    flash(offline ? "Saved locally · Not sent to SAP" : "Activity recorded · Sending to SAP…");
    if (!offline) setTimeout(() => setData(xs => xs.map(x => x.id === selected ? { ...x, sync: "sent" } : x)), 1000);
  };
  const report = () => { setData(xs => xs.map(x => x.id === selected ? { ...x, issue: "Damaged packaging", resolved: false } : x)); flash("Issue reported · visible on Monitor"); };
  const reset = () => { setData(seed); flash("Demo data reset"); };
  return <div className="app">
    <header><b className="brand">◉ TrackIt<small>Warehouse visibility</small></b><span className="pill">Prototype · fictional data</span><select value={role} onChange={e => setWorkspace(e.target.value)}><option>Operator</option><option>Supervisor</option><option>Manager</option></select><button onClick={reset}>Reset</button></header>
    <main>{message && <div className="toast">{message}</div>}
      {tab === "Record" && <Record data={data} selected={selected} setSelected={setSelected} current={current} stage={stage} setStage={setStage} save={save} report={report} />}
      {tab === "Monitor" && <Monitor data={data} query={query} setQuery={setQuery} resolve={(id: string) => { setData(xs => xs.map(x => x.id === id ? { ...x, resolved: true } : x)); flash("Issue resolved"); }} />}
      {tab === "Dashboard" && <Dashboard data={data} />}
      {tab === "SAP" && <SAP data={data} offline={offline} setOffline={setOffline} retry={() => { setData(xs => xs.map(x => x.sync === "failed" ? { ...x, sync: "sent" } : x)); flash("Retry complete · Sent to SAP"); }} />}
    </main>
    <nav>{(["Record", "Monitor", "Dashboard", "SAP"] as Tab[]).map(x => <button className={tab === x ? "active" : ""} onClick={() => setTab(x)} key={x}>{x}</button>)}</nav><footer>Simulated SAP · no real connection · operational estimates only</footer>
  </div>;
}
function Record(p: any) { return <><h1>Record activity</h1><p>Operator workspace · capture the next step for a fictional shipment.</p><section className="card"><label>Shipment<select value={p.selected} onChange={e => p.setSelected(e.target.value)}>{p.data.map((x: Shipment) => <option key={x.id}>{x.id}</option>)}</select></label><div className="shipment"><b>{p.current.id}</b><span>{p.current.product}</span><em>{p.current.stage} · waiting {p.current.age} h</em></div><button className="secondary" onClick={() => p.setSelected("SHP-1042")}>▣ Simulate scan shipment</button><h3>Choose next stage</h3><div className="stages">{stages.map((x, i) => <button disabled={i < stages.indexOf(p.current.stage) || x === p.current.stage} className={x === p.stage ? "chosen" : ""} onClick={() => p.setStage(x)} key={x}>{x}{i === stages.indexOf(p.current.stage) + 1 && <small>Next</small>}</button>)}</div><button className="primary" onClick={p.save}>Save activity</button><button className="secondary issue" onClick={p.report}>Report damaged packaging</button></section></>; }
function Metric({ n, t }: any) { return <div className="metric"><strong>{n}</strong><span>{t}</span></div>; }
function Monitor({ data, query, setQuery, resolve }: any) { const inbound = data.filter((x: Shipment) => x.area === "Inbound").length; const list = data.filter((x: Shipment) => x.id.includes(query.toUpperCase())); return <><h1>Monitor shipments</h1><p>Supervisor workspace · delays, issues, and congestion.</p><div className="metrics"><Metric n={data.filter((x: Shipment) => x.age > 4).length} t="Delayed" /><Metric n={data.filter((x: Shipment) => x.issue && !x.resolved).length} t="Open issues" /><Metric n={inbound + "/12"} t="Inbound fill" /></div><section className="card"><b>Inbound congestion</b><div className="fill"><i style={{ width: inbound / 12 * 100 + "%" }} /></div><small>{inbound}/12 · Nearly full</small></section><input className="search" placeholder="Search shipment reference" value={query} onChange={e => setQuery(e.target.value)} /><section className="card">{list.map((x: Shipment) => <div className="row" key={x.id}><div><b>{x.id}</b><span>{x.product}</span><small>{x.stage} · waiting {x.age} h</small></div><div>{x.age > 4 && <label className="warn">Delayed</label>}{x.issue && !x.resolved && <label className="coral">Open issue</label>}<small>{x.sync === "sent" ? "✓ Sent to SAP" : x.sync === "failed" ? "! Not sent" : "… Sending"}</small></div>{x.issue && !x.resolved && <button onClick={() => resolve(x.id)}>Resolve</button>}</div>)}</section></>; }
function Dashboard({ data }: any) { return <><h1>Operations dashboard</h1><p>Manager workspace · synthetic operational estimates.</p><div className="metrics"><Metric n={data.reduce((a: number, x: Shipment) => a + x.events, 0)} t="Activities today" /><Metric n={data.filter((x: Shipment) => x.age > 4).length} t="Delayed" /><Metric n={data.filter((x: Shipment) => x.issue && !x.resolved).length} t="Open issues" /></div><div className="charts"><section className="card"><b>7-day activity trend</b><div className="bars">{[42, 55, 49, 72, 64, 82, 70].map((v, i) => <i style={{ height: v + "%" }} key={i} />)}</div></section><section className="card"><b>Arrivals vs dispatches by hour</b><div className="hours">{[38, 62, 48, 84, 58, 30].map((v, i) => <i style={{ height: v + "%" }} key={i} />)}</div></section></div><div className="insight">Insight: Awaiting sampling has the longest average wait. Rule-based prototype insight, not AI.</div></>; }
function SAP({ data, offline, setOffline, retry }: any) { return <><h1>Simulated SAP</h1><p>This prototype models the future integration without external APIs.</p><section className="card"><h3>{offline ? "○ SAP offline" : "● SAP connected"}</h3><label><input type="checkbox" checked={offline} onChange={e => setOffline(e.target.checked)} /> Simulate SAP offline</label><div className="metrics"><Metric n={data.length} t="Imported" /><Metric n={data.filter((x: Shipment) => x.sync === "sent").length} t="Sent" /><Metric n={data.filter((x: Shipment) => x.sync === "failed").length} t="Failed" /></div><button className="secondary" onClick={retry}>Retry failed events</button><p>Flow: Sending → Sent, or Not sent → Retry.</p></section></>; }
createRoot(document.getElementById("root")!).render(<App />);
