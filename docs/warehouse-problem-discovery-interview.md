# Warehouse problem-discovery interview

**Status:** Planned  
**Purpose:** Validate whether warehouse teams have a real, costly problem around shipment progress, sampling, storage, picking, dispatch, issue handling, and SAP handoffs—and learn what is still done manually or on paper.

## Interview setup

- **Length:** 30–40 minutes
- **Participants:** Warehouse operators, supervisors, planners, quality staff, or managers
- **Approach:** Ask about a recent real shipment or incident wherever possible. Capture anonymised evidence; do not record regulated or personal data.
- **Interviewer stance:** Stay neutral. Do not lead with TrackIt or assume that digitisation is the answer.

## Opening

> We are learning how warehouse work happens today. I’m interested in the actual steps, tools, handoffs, and workarounds—not in testing you or your team. There are no right answers. May I take anonymised notes?

## 1. Role and context

1. What is your role in the warehouse process?
2. Which parts of receiving, sampling, storage, picking, or dispatch do you handle?
3. How often do you perform these activities, and what makes a day unusually busy?

## 2. Walk through the current process

4. Please walk me through the last shipment you handled, from arrival to its next handoff.
5. At each step, what information do you need, where do you get it, and where do you record it?
6. Who needs to know when a shipment changes stage, is waiting, or has an issue?
7. What happens when the normal process does not apply—for example, damaged packaging, missing information, a quality hold, or a delayed pickup?
8. How do you know what is currently waiting, blocked, or overdue?

## 3. Manual work and paper

9. Which steps are still done on paper, whiteboards, spreadsheets, chat, or other informal tools?
10. What do you copy or re-enter from one system or document into another?
11. How often are records incomplete, duplicated, misplaced, or entered later from memory?
12. What is the most time-consuming administrative task in a normal shift?
13. What do you wish you could see immediately but currently have to ask someone to find?
14. If the paper form, spreadsheet, scanner, or system is unavailable, what is the workaround?

For each manual step, capture:

| Step | Artifact/tool | Who performs it | Frequency | Approx. effort | Consequence if missed |
|---|---|---|---|---|---|

## 4. Pain points and impact

15. What is the most frustrating part of the current process?
16. When does that problem occur, and how often?
17. What is the impact: waiting time, rework, missed handoffs, errors, compliance risk, customer impact, or management effort?
18. Tell me about the last time this caused a delay or required rework.
19. How do supervisors currently find and resolve open issues?
20. How do managers measure throughput, delays, workload, or congestion today?

Ask for concrete examples rather than ratings alone:

- “What happened the last time?”
- “How did you notice?”
- “Who had to intervene?”
- “What did it cost in time or effort?”
- “What was the final workaround?”

## 5. Systems, constraints, and adoption

21. Which systems are involved, especially SAP or a WMS?
22. Which system is the source of truth, and where do people keep unofficial status information?
23. What would make a digital workflow difficult to use on the warehouse floor?
24. What device, connectivity, scanning, permissions, language, or accessibility constraints matter?
25. What must be auditable or retained, and what must never be changed without approval?
26. Who would need to trust or approve a new workflow before it could be used?

## 6. Prioritisation

27. If one part of the process could be improved first, which would you choose and why?
28. Which is more valuable: faster recording, better visibility of waiting work, easier issue follow-up, capacity visibility, or reporting?
29. What would make a solution clearly successful after one month?
30. What would make you stop using it?

## Closing explanation of TrackIt

Only after the current process and pain points have been explored:

> We are prototyping **TrackIt**, a lightweight shipment-tracking layer for internal pharmaceutical warehouses. Operators can record a shipment stage or report an issue in a few taps. Supervisors can see waiting or delayed shipments, open issues, and inbound/outbound area capacity. Managers can see operational trends. The prototype also shows a simulated SAP sync; it is not a replacement for SAP or a validated WMS/GxP record.

Then ask:

31. Which, if any, of these capabilities would solve a problem you described?
32. What would be missing for it to fit your real workflow?
33. Which feature would you use first, and which would you not use?
34. What would need to be integrated, configurable, or approved?
35. What is the smallest useful version you would be willing to try?
36. Based on what we discussed, would this solve a real problem for your team? Why or why not?

## Evidence capture template

Use one entry per observation or example:

- **Participant role:**  
- **Context / recent example:**  
- **Current workflow:**  
- **Manual or paper step:**  
- **Pain point:**  
- **Observed impact:**  
- **Existing workaround:**  
- **Relevant TrackIt capability:**  
- **Missing feature or constraint:**  
- **Anonymised quote or close paraphrase:**  
- **Confidence:** High / Medium / Low  
- **Follow-up needed:**  

## Synthesis rubric

After the interview, classify the result:

- **Problem validated:** Repeated or costly current behaviour is supported by a recent concrete example.
- **TrackIt fit:** The problem maps to stage recording, issue follow-up, operational visibility, capacity visibility, or reporting.
- **Feature needed:** The participant identifies a required workflow, integration, permission, offline, audit, or device capability not covered by the prototype.
- **No fit / defer:** The problem is infrequent, already solved, outside TrackIt’s scope, or would require replacing a system of record.

Keep findings anonymised and link each conclusion to interview evidence before updating `evidence.md`. Do not present prototype values as measured real-world outcomes.
