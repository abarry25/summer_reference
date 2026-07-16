# Founder Wayfinder — README
### Harvard Innovation Labs · Foundation Document for Program Adaptation
*Prepared for staff extending the Wayfinder framework to the Health Care + Life Sciences (HCLS) cohort*

---

## 1. Why This Exists

The Wayfinder didn't start as a quiz. It started as a question staff kept answering informally, over and over, in hallway conversations:

> **"Where do I begin?"**

Every semester, founders arrived with different stages, goals, and time budgets, and the quality of their first step depended on which staff member they happened to run into. That had three costs:

- **It didn't scale.** Every good starting-point conversation required a human to have it live.
- **It wasn't equitable.** A founder's start was correlated with how well they could navigate the institution — not with the strength of their idea.
- **It hid program gaps.** Without a structured routing model, there was no systematic way to see which founders had *no* clear path, which meant no way to design programs to fill that gap.

The founding design move was to **make the implicit intake conversation explicit, structured, and reproducible** — not to build a quiz for its own sake. The quiz is the artifact; the *model of how staff think about founders* is the actual product.

This distinction matters for anyone adapting this for a new cohort (like HCLS): **don't start by copying the quiz. Start by writing down how your team currently makes the routing decision informally, the same way the original project did.**

---

## 2. The Core Logic Model

### 2.1 Five Inputs, Two Dimensions

The system asks about five variables, but they don't all carry equal weight:

| Variable | Role |
|---|---|
| Stage | Combines with Goal + Time → **Persona** |
| Goal | Combines with Stage + Time → **Persona** |
| Time commitment | Combines with Stage + Goal → **Persona** |
| Sector | **Modifies** what appears inside a persona, but never changes the persona itself |
| Format preference | Filters delivery mode (in-person vs. virtual/async) |

This is the single most important architectural decision in the whole system: **persona and sector are two separate dimensions.** Persona answers "who is this founder and what do they need right now." Sector answers "what flavor of content should they see." Conflating the two is exactly what later gap analysis flagged as a problem (see §5).

### 2.2 Personas (v1 build)

| Persona | Who they are |
|---|---|
| 🌱 Explorer / 💡 Curious Builder | Has an idea, figuring out if it's real |
| 🧪 Validator / 🔍 Validation Sprinter | Testing a specific problem with real customers |
| 🏗 Sprint Builder | Ready to commit, wants intensity and structure |
| 🚀 Growth Founder / 📈 Traction Builder | Has traction, focused on fundraising and acceleration |
| 💚 Impact Founder / 🌍 Mission-Driven Founder | Building for social, climate, or life-sciences impact |
| 🤝 Community First / Connector Founder | Limited bandwidth, not ready for a structured program |

Two personas are triggered by **hard overrides** rather than the scoring model: selecting a Social Impact sector always routes to Impact Founder; selecting light time commitment always routes to Community First. This reflects an operational insight — for these two groups, the other inputs don't meaningfully change the recommendation.

**Rules fire top to bottom, first match wins.** Order encodes priority: e.g., a full-time Life Sciences founder gets Mission-Driven, not Traction Builder, because the sector check runs first.

### 2.3 The Three-Layer Results Architecture

Every founder who completes the quiz gets exactly three things, no more:

1. **Next 3 Moves** (most important) — a lookup table answering "for this persona, in this sector, at this step number, what should they do?" Sector-specific rows override a general fallback, which overrides universal rows. This is how a Life Sci founder can get a different Step 1 than a General founder while sharing Steps 2–3.
2. **Programs / Events** — filtered by persona + sector tags, sorted by format preference. Every event carries a tag array (a subscription list), so adding a new event is just adding an object with the right tags — no logic changes required.
3. **Office Hours** — filtered by persona, giving every founder a human touchpoint appropriate to their stage.

**Deliberate constraint:** no full program directory. Max 4 events, 3 steps, a handful of office hours. The goal is a *starting point*, not a catalog — this is a UX decision worth preserving in any adaptation.

### 2.4 The V2 Refinement: Membership-First, Do-Now-Only

A later iteration of the logic added two important gates *before* any persona/fit logic runs:

- **Eligibility + Membership Gate:** if someone is a current student but membership isn't active, the tool doesn't recommend programs at all — it recommends activating membership first, plus one immediate engagement option. Fit-based routing is deferred until that's resolved.
- **Availability Gate ("do-now" rule):** anything closed, past, or ended does not appear, and the tool never says "check back next term." Every program/event needs enough metadata (`event_datetime`, `apply_open`/`apply_close`, `status_override`, etc.) to be truthfully evaluated as available *right now*.

This gate ordering — **eligibility → availability → selection tolerance → sector bias → base fit routing → modifiers** — is the more mature version of the logic and is the one worth building forward from, rather than the original five-persona decision tree.

### 2.5 Substitution Rules (So "Do Now" Never Dead-Ends)

If a recommended primary action isn't currently available, the system substitutes in a fixed order: same goal in a different format → evergreen fallback (membership resources, Primer, perks) → one guaranteed community touchpoint so the founder never gets a dead end. Any adaptation should preserve this — it's what keeps the tool honest under real-world scheduling gaps.

---

## 3. The Four Program UX Flows

Beneath the quiz sits the actual *operational* member journey — how a founder physically moves through a program once matched. Four parallel flows currently exist, and they share a common shape:

**Intake → Application → Review (1 or 2 rounds) → Decision → [Accepted path] or [Feedback loop back to intake]**

| Flow | Shape | Distinguishing feature |
|---|---|---|
| **Primer UX** | Induction → Apply → 2 rounds of curated content/interview/artifact review → Resolution | Fully async, self-paced; lowest-commitment on-ramp |
| **Sprint UX** | Sign-up → Interview → content/interview/artifact review → Change of Mind checkpoint → second review round → Final Discussion | Adds a live workshop requirement and a mid-flow reconsideration point |
| **Incubation UX** | Application → Eligibility check → Ready/Not Ready gate → Interview stage (3 parallel review lenses) → Accepted → Onboarding/First Advisor Meeting → **Growth track** (community, membership, funding access) | Most complex; the only flow with a defined **Growth** sub-stage after acceptance, and a "Not Ready" branch that loops back through feedback rather than just rejecting |
| **SIFF UX** | Same shape as Incubation but simpler — no Growth sub-stage; ends at "Programmatic Opportunity" and "Community Access" | Fellowship-style; single accepted-outcome branch |

Common structural elements across all four:
- A **feedback loop** exists on the "Not Ready" branch in every flow — rejection isn't a dead end, it routes back to intake with something to act on.
- Content/interview/artifact review is consistently a **3-part parallel evaluation** (not a single reviewer, not sequential).
- Only Incubation defines what happens *after* acceptance (Growth stage). The other three flows stop at "accepted" — worth flagging as a gap if you're designing a post-acceptance journey for HCLS founders.

**For your HCLS cohort:** decide early which of these four shapes your program most resembles. A cohort-based, higher-touch HCLS accelerator likely maps to the **Incubation** shape (it's the only one with a Growth stage — useful for cohorts with follow-on funding/partnership needs). A lighter HCLS on-ramp for pre-traction founders maps to **Primer**.

---

## 4. Ideal Impacts — What This Is Actually For

It's worth separating the impacts by audience, because "founder wayfinding" is really three different value propositions stacked on top of each other.

### For the founder
- Replaces a lucky/unlucky hallway conversation with a **consistent, 2-minute, equitable first step**.
- Never a dead end: the substitution and gate logic guarantee something actionable, even when the "ideal" program isn't running this week.
- Gets a *specific* action (a date, a link, a next step) instead of a category ("look into workshops").

### For advising staff
- Converts a repeated, unscalable 1:1 conversation into infrastructure. Staff time shifts from *routing* founders to *building and maintaining* the routing logic and content.
- Two-file architecture (**logic** vs. **content**) means a non-technical staff member can update a whole semester's worth of programs, dates, and links without touching the decision logic.
- The "Active flag" / semester-swappable link table pattern means old semesters' data isn't destroyed — it's just hidden — preserving a historical record for exactly the kind of milestone/outcome analysis your team already does in the Objectives + Milestones tracker.

### For the institution / program design
- **The Gap Map.** Because personas and sectors form a matrix, you can literally see which persona × sector combinations have *no* programming — a question that was previously answered by intuition, not evidence. The original gap map already surfaced:
  - No Climate-specific programming at any stage
  - No Social Impact programming at Explore/Test stage (SIFF only serves finalists)
  - No Life Sci- or Climate-specific Propel-stage program
  - Thin Deep Tech Explore-stage path
- This turns "are we building the right programs?" into a systematic, repeatable question rather than a hallway impression — and it's the single most reusable output of the whole project, independent of the quiz UI itself.

---

## 5. Known Gaps in the v1 Model (Read Before You Adapt)

An internal audit compared the quiz's 5 personas against the team's fuller 10-persona framework and found real gaps — several directly relevant to a Health Care + Life Sciences build-out:

| Team persona | Quiz coverage | Issue |
|---|---|---|
| Health Care + Life Sci Visionary | Merged into 🌍 Mission-Driven Founder | **Not distinct from Climate/Social Impact** — different mentors, funders, regulatory realities, and language get flattened into one bucket |
| Deep Tech Pioneer | Missing entirely | No question captures long R&D cycles, IP posture, or technical co-founder search |
| Subject Matter Expert (domain expert transitioning into founding) | Missing entirely | No question captures founder *background* — relevant for HCLS, where many founders are clinicians/scientists first |
| The Remote Worker | Missing entirely | No distinction between in-person and remote-first founders |
| Full Time Founder vs. Traction Builder | Partially conflated | Time commitment isn't separated from venture stage — a full-time Idea-stage founder and a part-time Traction-stage founder get treated too similarly |

**This is directly actionable for your HCLS build.** The recommended fix from the original audit — and the right starting point for your cohort — is to **split the sector question** into distinct tracks (Social Impact · Life Sciences · Climate · Deep Tech · General) rather than lumping them under one "Mission-Driven" persona, and to **add a background/expertise question** (Technical / Domain Expert / Clinical / Business / Mixed) since HCLS ventures disproportionately start with a domain expert (MD, PhD, researcher) rather than a "generalist founder."

---

## 6. Adapting the Foundation for the HCLS Cohort

You're not starting from zero — there's already a live signal in the current operational data that HCLS is being treated as its own track. An existing workshop ("System Dynamics for Health Care and Life Sciences Founders") is already tagged to an audience called **"HCLS Incubation Track,"** distinct from general Founder Fundamentals audiences. That tag is a foothold — build the persona and routing logic around it rather than inventing a parallel structure.

### 6.1 Give HCLS its own persona, not a sub-case of Mission-Driven

Per §5, don't reuse 🌍 Mission-Driven Founder as-is. Define a distinct **HCLS Founder** persona with its own hard-override trigger (sector = Health Care/Life Sciences), the same way Impact Founder and Community First get hard overrides today. This preserves the two-dimensional model (persona × sector) instead of re-flattening it.

### 6.2 Add HCLS-specific inputs

Based on the gaps identified and the nature of HCLS ventures, consider adding:

- **Regulatory pathway awareness** — Not yet applicable / FDA-regulated / Clinical validation needed / Reimbursement-dependent. This is the single biggest way an HCLS venture's "next 3 moves" differ from a general SaaS venture.
- **Founder background** — Clinical/Domain Expert · Technical/Scientific · Business · Mixed team. Domain experts often need startup-mechanics support first; technical/scientific founders often need commercialization support first.
- **IP / research stage** — None yet / Provisional filed / Licensed from lab / Sponsored research. This maps directly to fields your team is *already* tracking in the Objectives + Milestones sheet (IP status, prototype/MVP status, active users, paying customers) — reuse those categories rather than inventing new ones, so intake data and outcome data stay comparable.

### 6.3 Reuse the three-layer results structure as-is

The Next-3-Moves / Programs / Office-Hours structure doesn't need to change shape — only content. Populate the HCLS-specific rows with things like the System Dynamics workshop, HCLS-specific office hours (if/when they exist), and relevant accelerator info sessions, using the same sector-row-overrides-fallback lookup pattern already built for Life Sci/Climate.

### 6.4 Pick a UX flow shape deliberately

Using §3: if the HCLS cohort is a defined, higher-touch program with onboarding and follow-on growth support (funding access, partnerships, community), model it on the **Incubation** flow, since it's the only shape with a post-acceptance Growth stage. If it's a lighter-weight on-ramp for pre-traction clinical/scientific founders, model it on **Primer**.

### 6.5 Borrow the outcome-measurement discipline already proposed for the Primer/Sprint pilots

The existing "Fit Check" plan (collect intake data cheaply at registration — school, stage, prior customer conversations, confidence 1–5; follow up one week later on whether the founder acted on their recommended next step; capture advisor qualitative signal) is directly transferable to HCLS. Given how much longer HCLS venture cycles run, the "did they act on it" follow-up may need to ask about a *regulatory or research milestone* rather than a generic "next action," but the two-question, one-week-later structure holds.

---

## 7. Roadmap: From Static Content Files to Knowledge-Wiki-Sourced Ecosystem Data

The current system is intentionally simple — two files, no backend, no database. That simplicity is a feature for a single-semester quiz. It becomes a constraint once you want the tool to surface a living ecosystem of resources, activities, and funding opportunities that staff shouldn't have to hand-curate forever. Here's a phased way to grow into that without breaking the architecture that makes the current tool maintainable.

### Phase 0 — Formalize what's already structured (no new infrastructure)
The Google Sheets database (Links / Events / Office Hours / Steps tabs) is already the human-editable layer. Before adding any scraping, make sure HCLS content lives in this same structure with the same required fields (`program_id`, `type`, availability fields, fit tags) defined in the V2 catalog spec. This is the schema any future automated source needs to write into — get it right manually first.

### Phase 1 — Wiki-as-source-of-truth, human-curated
Stand up a lightweight internal knowledge wiki (Notion, Confluence, or a simple structured markdown repo) organized by the same fit-tag taxonomy already in use: `stage_fit[]`, `goal_tags[]`, `lane_tags[]`, `time_ask`. Staff (including HCLS advisors/EIRs) add resources, funding opportunities, and ecosystem activities as wiki pages with those tags in frontmatter. This is still manual curation — the win is that it's now structured and taggable, not scraping yet.

### Phase 2 — Scheduled scraping into the wiki, not directly into the tool
Point scrapers at known ecosystem sources — HCLS-relevant funding databases (e.g., NIH SBIR/STTR listings, foundation grant boards), accelerator/fellowship application calendars, relevant conference/CFP pages — and have them populate **draft wiki pages**, not live quiz content. A human reviews and tags each scraped item before it becomes visible. This preserves the "do-now" truthfulness rule (§2.4): nothing enters the routing catalog without a verified availability window and status.

Practically, this looks like:
- A scraper/agent job that checks a fixed list of sources on a schedule (e.g., weekly for events, monthly for funding calls, since HCLS funding cycles are slower than general program cycles).
- Output written as structured wiki entries carrying the same fields as the catalog spec (`event_datetime`/`apply_open`/`apply_close`/`status_override`, plus `lane_tags` including `hcls`).
- A staff review queue (mirroring the "COPY REVIEW" / "READY FOR OPS REVIEW" workflow already visible in your Programming tracker) before anything is marked `active: true`.

### Phase 3 — Wiki → Catalog sync
Once Phase 2 is stable, build a simple sync step that pulls only `active` + reviewed wiki entries into the Events/Steps/Links catalog the quiz actually reads from — keeping the wiki as the messy, wide ecosystem index and the catalog as the narrow, trusted, "do-now" surface the founder sees. This preserves the core design principle from the original build: **logic stays stable, content stays swappable, and now content has an upstream, ecosystem-wide source instead of only manual entry.**

### Phase 4 — Gap Map v2
With a wider, tagged ecosystem index behind the tool, the Gap Map (§4) becomes far more powerful: instead of only showing gaps in *your* programming, you can show gaps between founder need and the *entire visible ecosystem* — e.g., "no HCLS-specific funding opportunity currently open for Explore-stage founders," sourced automatically rather than noticed anecdotally. This is the natural long-term payoff of investing in the wiki layer, and it directly extends the "systematic instead of intuitive" value proposition that made the original Gap Map useful.

**A caution worth stating plainly:** scraping introduces exactly the failure mode the "do-now" rule was designed to prevent — stale or wrong availability data. Any scraped source needs a clear expiration/re-verification rule (e.g., auto-expire draft entries older than N days without human confirmation) so the tool never recommends something that's quietly closed.

---

## 8. Quick-Reference: What to Touch vs. What to Leave Alone

| Layer | File / Location (original build) | Change often? |
|---|---|---|
| Questions & answer options | HTML section | Yes — especially for HCLS-specific inputs (§6.2) |
| Persona definitions & copy | `PERSONAS` object, JS | Yes — add a distinct HCLS persona |
| Persona routing rules | `getPersona()`, JS | Yes — add HCLS hard-override, keep first-match-wins order |
| Next-3-Moves logic | `getSteps()`, JS | Yes — add HCLS-tagged rows |
| Program-matching logic | `getPrograms()`, JS | Yes — add HCLS-tagged programs |
| Links, events, office hours, step content | `ilab-data.js` / Google Sheet | Every semester — this is the file/sheet meant to be edited constantly |
| Core scoring/rendering engine | `founder_xp_generator.html` core logic | Rarely — only if the program *model itself* changes, not the content |
| `data-val` codes | Must match exactly between HTML and JS | Never rename without updating both places |

---

## 9. Open Questions to Resolve Before Building

Carried forward from the original design review, still unresolved and directly relevant to an HCLS adaptation:

1. Should HCLS sector selection **override** persona (like Impact Founder does today), or should it **combine** with stage/goal/time through the scoring model? Given how much regulatory/IP status changes the right next step, an override may be more honest than a blended score.
2. What happens when signals conflict — e.g., a full-time HCLS founder who is still at Idea stage? Full-time commitment shouldn't automatically imply Traction-level readiness.
3. Should there be a "not quite ready" message for certain combinations (e.g., very early clinical/research-stage founder with heavy time commitment but no IP/prototype yet), rather than forcing them into an existing persona?
4. Who owns re-verifying availability for scraped/wiki-sourced HCLS content, and on what cadence, before Phase 3 above goes live?

---

*This document synthesizes the original Founder Wayfinder case study, the V1 product spec, the V2 (membership-first, do-now-only) logic model, the persona gap analysis, the quiz-editing guide, and current program-tracking data, as the foundation for extending the system to a Health Care + Life Sciences cohort and toward ecosystem-wide, wiki-sourced content.*
