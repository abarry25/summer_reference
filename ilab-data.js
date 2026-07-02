// ════════════════════════════════════════════════════════════════
// ilab-data.js — i-lab Program Finder · Content Data
// Harvard Innovation Labs · Last updated: July 2, 2026
// Edit at: /summer_reference/data-editor.html
// ════════════════════════════════════════════════════════════════

const LINKS = {
  OOH_SIGNUP:                "#",
  PRIMER_SUBSCRIBE:          "#",
  SPRINT_SIGNUP:             "#",
  SYSTEM_DYNAMICS_SIGNUP:    "#",
  VIBE_CODING_SIGNUP:        "#",
  HACKATHON_SIGNUP:          "#",
  MVP_FEEDBACK:              "#",
  AI_AGENTS_SIGNUP:          "#",
  AI_PR_SIGNUP:              "#",
  TECHSTARS_SIGNUP:          "#",
  YC_SIGNUP:                 "#",
  INVESTOR_PREP:             "#",
  SIFF_APPLICATION:          "#",
  FOUNDER_JOINER:            "#",
  FOUNDER_CIRCLE_INPERSON:   "#",
  FOUNDER_CIRCLE_VIRTUAL:    "#",
  LAUNCH_PARTY:              "#",
  MEMBER_APPRECIATION:       "#",
  TALK_BYERS:                "#",
  TALK_ELLIOTT:              "#",
};

const EVENTS = [
  { id:"tacos", active:true, name:"Member Appreciation: Tacos & Thanks",
    con:"Community", cbg:"#FFC7C8", ctx:"#711213",
    date:"Jun 16", time:"", format:"INPERSON",
    tags:["explorer","validator","builder","propeller","impact","community"], desc:"Celebrate with the i-lab community over tacos and ice cream from local food trucks.",
    link:"" },
  { id:"techstars", active:true, name:"Accelerator Info Session: Techstars",
    con:"Venture Growth", cbg:"#cbcafa", ctx:"#232262",
    date:"Jun 23", time:"12:00 PM", format:"INPERSON",
    tags:["builder","propeller"], desc:"Steve Bernard from Techstars on what they look for in founders.",
    link:"" },
  { id:"sprint", active:true, name:"Customer Discovery Sprint",
    con:"Founder Fundamentals", cbg:"#C1F4A8", ctx:"#27500A",
    date:"Jun 23–Jul 9", time:"", format:"HYBRID",
    tags:["validator","builder"], desc:"3-session series: Kickoff, Check-in, Final Showcase. Full commitment required.",
    link:"" },
  { id:"launch", active:true, name:"Summer Launch Party at Felipe's",
    con:"Community", cbg:"#FFC7C8", ctx:"#711213",
    date:"Jun 24", time:"6:00 PM", format:"INPERSON",
    tags:["explorer","validator","builder","propeller","impact","community"], desc:"Connect with student and alumni founders over margaritas and tacos.",
    link:"" },
  { id:"byers", active:true, name:"Founder Talk: Allison Byers",
    con:"Venture Growth", cbg:"#cbcafa", ctx:"#232262",
    date:"Jul 7", time:"12:00 PM", format:"INPERSON",
    tags:["validator","builder","propeller","impact"], desc:"Fundraising strategy, resilience, and navigating uncertainty as a founder.",
    link:"" }
];

// ── EXPERT ADVISORS ───────────────────────────────────────────────
// Shown in results pages — up to 3 per founder, matched by tags.
// Re-import from advisor CSV each semester to refresh photo URLs.
const EXPERTS = [

];

// ── OFFICE HOURS ──────────────────────────────────────────────────
// sectorTags: ['all'] shows for every sector within a matching persona.
// stepLinks: optional — promotes this office hour to the top of the
// grid whenever the founder is seeing that exact persona/sector/step.
const OHS = [
  { id:"ideas_ooh", active:true, name:"Group Office Hours: Ideas Into Impact",
    con:"Founder Fundamentals", cbg:"#C1F4A8", ctx:"#27500A",
    sched:"Jun 22", fmt:"Drop-in · Remote", format:"REMOTE",
    cta:"Sign up", tags:["explorer","community"],
    sectorTags:["all"],
    stepLinks:[{"persona":"explorer","sector":"all","step":3}],
    desc:"For students actively working through an idea. Facilitated by Becca Xiong.",
    link:"" },
  { id:"cd_ooh", active:true, name:"Group Office Hours: Customer Discovery",
    con:"Founder Fundamentals", cbg:"#C1F4A8", ctx:"#27500A",
    sched:"Jun 29 + Jul 24", fmt:"Drop-in · Remote", format:"REMOTE",
    cta:"Sign up", tags:["explorer","validator","builder","impact"],
    sectorTags:["all"],
    stepLinks:[{"persona":"validator","sector":"all","step":2},{"persona":"impact","sector":"all","step":3}],
    desc:"Bring interviews to discuss, assumptions to test, or patterns you can't make sense of yet.",
    link:"" },
  { id:"dropin", active:true, name:"Staff Drop-In & General Advising",
    con:"Membership", cbg:"#FFC7C8", ctx:"#711213",
    sched:"Ongoing", fmt:"Drop-in · In-Person", format:"INPERSON",
    cta:"Drop in — no registration needed", tags:["explorer","validator","builder","propeller","impact","community"],
    sectorTags:["all"],
    stepLinks:[],
    desc:"Come with any question — which program fits, how to apply, or what to prioritize.",
    link:"" },
  { id:"siff_c", active:true, name:"SIFF Pitch Coaching",
    con:"SIFF", cbg:"#cee5f7", ctx:"#2a5a80",
    sched:"By appointment", fmt:"1:1 · Virtual or In-Person", format:"HYBRID",
    cta:"Book a session", tags:["impact"],
    sectorTags:["all"],
    stepLinks:[{"persona":"impact","sector":"all","step":1}],
    desc:"Personalized pitch coaching for SIFF participants and applicants.",
    link:"" }
];

const STEPS_DATA = {

  community: [
    { sector:"all", step:1, u:true, fmt:"INPERSON", link:'#', ll:"Start here →", a:"Complete your i-lab Membership intake", d:"Unlocks everything — coworking, Slack, events, and the weekly newsletter. Takes five minutes." },
    { sector:"all", step:2, u:false, fmt:"INPERSON", link:LINKS.FOUNDER_CIRCLE_INPERSON, ll:"Register →", a:"Come to Founder Circles this summer", d:"In-person (Jul 8) and virtual (Jul 9). Bring a challenge, get peer input. No prep needed." },
    { sector:"all", step:3, u:false, fmt:"INPERSON", link:LINKS.LAUNCH_PARTY, ll:"Register →", a:"Join the Summer Launch Party at Felipe's (Jun 24)", d:"Margaritas and tacos with founders from across Harvard. The easiest way to meet people." },
  ],

  impact: [
    { sector:"all", step:1, u:true, fmt:"HYBRID", link:LINKS.SIFF_APPLICATION, ll:"Learn more + apply →", a:"Apply to the SIFF Fund", d:"A competitive program for 6 teams with months of coaching and real funding." },
    { sector:"all", step:2, u:true, fmt:"INPERSON", link:LINKS.TALK_BYERS, ll:"Register →", a:"Register: Founder Talk — Allison Byers (Jul 7)", d:"Practical fundraising strategy and lessons from building a mission-driven company." },
    { sector:"all", step:3, u:false, fmt:"REMOTE", link:LINKS.OOH_SIGNUP, ll:"Sign up →", a:"Drop into Customer Discovery Office Hours", d:"Jun 29 + Jul 24 — especially useful if you're still testing your impact model." },
  ],

  explorer: [
    { sector:"all", step:1, u:true, fmt:"INPERSON", link:'#', ll:"Start here →", a:"Complete your i-lab Membership intake", d:"Unlocks everything — coworking, Slack, events, and the weekly newsletter. Takes five minutes." },
    { sector:"deeptech", step:2, u:true, fmt:"INPERSON", link:LINKS.HACKATHON_SIGNUP, ll:"Register →", a:"Register for the B2C Hackathon (Jul 14 + 16)", d:"Use AI to move from concept to testable idea, then return with real user feedback." },
    { sector:"default", step:2, u:true, fmt:"REMOTE", link:LINKS.PRIMER_SUBSCRIBE, ll:"Sign up →", a:"Sign up for the Customer Discovery Primer", d:"A self-paced email journey — proven discovery frameworks, no cohort or commitment required." },
    { sector:"all", step:3, u:false, fmt:"REMOTE", link:LINKS.OOH_SIGNUP, ll:"Sign up →", a:"Drop into Group Office Hours: Ideas Into Impact (Jun 22)", d:"Bring your idea, your questions, or just show up." },
  ],

  validator: [
    { sector:"lifesci", step:1, u:true, fmt:"INPERSON", link:LINKS.SYSTEM_DYNAMICS_SIGNUP, ll:"Register →", a:"Register: System Dynamics for HC + Life Sciences (Jun 25)", d:"Map feedback loops, stakeholder dynamics, and commercialization realities." },
    { sector:"default", step:1, u:true, fmt:"REMOTE", link:LINKS.PRIMER_SUBSCRIBE, ll:"Sign up →", a:"Sign up for the Customer Discovery Primer", d:"A self-paced email journey — proven customer discovery frameworks on your own schedule." },
    { sector:"all", step:2, u:true, fmt:"REMOTE", link:LINKS.OOH_SIGNUP, ll:"Sign up →", a:"Join Customer Discovery Office Hours (Jun 29 + Jul 24)", d:"Bring interviews to discuss, assumptions to test, or patterns you can't make sense of yet." },
    { sector:"all", step:3, u:false, fmt:"INPERSON", link:LINKS.MVP_FEEDBACK, ll:"Register →", a:"Register for MVP Feedback Session (Jul 22)", d:"Bring a prototype, product, or landing page for real-time structured feedback." },
  ],

  builder: [
    { sector:"lifesci", step:1, u:true, fmt:"INPERSON", link:LINKS.SYSTEM_DYNAMICS_SIGNUP, ll:"Register →", a:"Register: System Dynamics for HC + Life Sciences (Jun 25)", d:"Essential context on feedback loops and commercialization for HC/LS founders." },
    { sector:"deeptech", step:1, u:true, fmt:"INPERSON", link:LINKS.VIBE_CODING_SIGNUP, ll:"Register →", a:"Register: Vibe Coding Workshop (Jul 15)", d:"Hands-on product iteration for founders actively building." },
    { sector:"default", step:1, u:true, fmt:"HYBRID", link:LINKS.SPRINT_SIGNUP, ll:"Register →", a:"Commit to the Customer Discovery Sprint (Jun 23 – Jul 9)", d:"Multi-session series: Kickoff, Check-in, Final Showcase. The highest-intensity discovery program we offer." },
    { sector:"lifesci", step:2, u:true, fmt:"HYBRID", link:LINKS.SPRINT_SIGNUP, ll:"Register →", a:"Commit to the Customer Discovery Sprint (Jun 23 – Jul 9)", d:"Multi-session series: Kickoff, Check-in, Final Showcase. Full commitment required." },
    { sector:"deeptech", step:2, u:true, fmt:"HYBRID", link:LINKS.SPRINT_SIGNUP, ll:"Register →", a:"Commit to the Customer Discovery Sprint (Jun 23 – Jul 9)", d:"Multi-session series: Kickoff, Check-in, Final Showcase. Full commitment required." },
    { sector:"all", step:3, u:false, fmt:"INPERSON", link:LINKS.MVP_FEEDBACK, ll:"Register →", a:"Register for MVP Feedback Session (Jul 22)", d:"Bring what you've built for structured, real-time peer feedback from fellow founders." },
  ],

  propeller: [
    { sector:"all", step:1, u:true, fmt:"INPERSON", link:LINKS.TECHSTARS_SIGNUP, ll:"Register →", a:"Register: Accelerator Info Session — Techstars (Jun 23)", d:"Steve Bernard on what Techstars looks for in founders." },
    { sector:"all", step:2, u:true, fmt:"INPERSON", link:LINKS.YC_SIGNUP, ll:"Register →", a:"Register: Accelerator Info Session — Y Combinator (Jul 15)", d:"YC Partner Ankit Gupta + a panel of YC founders. Open Q&A and networking over lunch." },
    { sector:"all", step:3, u:false, fmt:"INPERSON", link:LINKS.TALK_BYERS, ll:"Register →", a:"Attend Founder Talk: Allison Byers (Jul 7)", d:"Fundraising strategy, investor relations, and practical lessons from a founder who's built her own path." },
  ]

};

// ── PERSONAS ───────────────────────────────────────────────────────
// Persona card copy and colors. Edit at: /summer_reference/data-editor.html
const PERSONAS = {

  community: {
    name:"Community First", emoji:"🤝",
    hl:"Connect, stay curious, and come back when you're ready.",
    desc:"Right now, the best use of the i-lab isn't a program — it's the community. Show up to events, meet founders building interesting things, and stay in the loop. When you're ready to commit more time, come back and retake this quiz — the programs will be here.",
    ac:"#711213", bb:"#FFC7C8", bt:"#711213",
    stack:[{n:"Membership",l:"Your foundation",bg:"#FFC7C8",tx:"#711213"}, {n:"Community Events",l:"Start here",bg:"#FFC7C8",tx:"#711213"}, {n:"Drop-in Hours",l:"When you're ready",bg:"#C1F4A8",tx:"#27500A"}]
  },

  impact: {
    name:"Impact Founder", emoji:"💚",
    hl:"Your mission deserves the right funding pathway.",
    desc:"SIFF was built for exactly this. Personalized pitch coaching, design support, and a real funding competition make it the most direct path to capital for social impact ventures at the i-lab. Apply early, show up to every coaching session, and pair it with the broader community to stay grounded.",
    ac:"#4A90C4", bb:"#cee5f7", bt:"#2a5a80",
    stack:[{n:"Membership",l:"Your foundation",bg:"#FFC7C8",tx:"#711213"}, {n:"SIFF",l:"Your flagship",bg:"#cee5f7",tx:"#2a5a80"}, {n:"Community Events",l:"Your people",bg:"#FFC7C8",tx:"#711213"}]
  },

  explorer: {
    name:"Explorer", emoji:"🌱",
    hl:"Start with curiosity. Build toward clarity.",
    desc:"You're in the most important stage — figuring out whether your idea is worth pursuing before investing months of effort. The right programs will get you real customer feedback fast, build foundational skills, and connect you with peers navigating the exact same questions this summer.",
    ac:"#84A873", bb:"#C1F4A8", bt:"#27500A",
    stack:[{n:"Membership",l:"Your foundation",bg:"#FFC7C8",tx:"#711213"}, {n:"Founder Fundamentals",l:"Your track",bg:"#C1F4A8",tx:"#27500A"}, {n:"Community Events",l:"Your people",bg:"#FFC7C8",tx:"#711213"}]
  },

  validator: {
    name:"Validator", emoji:"🧪",
    hl:"Real answers from real customers — fast.",
    desc:"You have a specific problem you're solving and you need to know if customers actually care. The Customer Discovery path — Primer, Office Hours, and sector-specific workshops — gives you structured ways to test your assumptions and iterate quickly before committing to a full build.",
    ac:"#f29138", bb:"#f7e4d0", bt:"#993C1D",
    stack:[{n:"Membership",l:"Your foundation",bg:"#FFC7C8",tx:"#711213"}, {n:"Customer Discovery",l:"Your track",bg:"#C1F4A8",tx:"#27500A"}, {n:"MVP Feedback",l:"Your milestone",bg:"#f7e4d0",tx:"#993C1D"}]
  },

  builder: {
    name:"Sprint Builder", emoji:"🏗️",
    hl:"Intensity, structure, and real momentum.",
    desc:"You're ready to commit. The Customer Discovery Sprint — paired with sector-specific workshops and regular MVP feedback — gives you a high-accountability container for this summer. Show up for all of it, do the work between sessions, and you'll leave with validated insights and a clear next step.",
    ac:"#232262", bb:"#cbcafa", bt:"#232262",
    stack:[{n:"Membership",l:"Your foundation",bg:"#FFC7C8",tx:"#711213"}, {n:"Discovery Sprint",l:"Your core",bg:"#C1F4A8",tx:"#27500A"}, {n:"Sector Workshops",l:"Your edge",bg:"#cbcafa",tx:"#232262"}]
  },

  propeller: {
    name:"Growth Founder", emoji:"🚀",
    hl:"Build momentum. Get in front of the right people.",
    desc:"You have proof points and now it's about growth — fundraising, accelerator pipelines, and getting on the right people's radar. The Accelerator Info Sessions with Techstars and Y Combinator are your most urgent actions, alongside the Founder Talks and workshops that will sharpen your positioning.",
    ac:"#7482E8", bb:"#EEEDFE", bt:"#3C3489",
    stack:[{n:"Membership",l:"Your foundation",bg:"#FFC7C8",tx:"#711213"}, {n:"Accelerator Pipeline",l:"Your track",bg:"#EEEDFE",tx:"#3C3489"}, {n:"Venture Growth",l:"Your edge",bg:"#cbcafa",tx:"#232262"}]
  }

};

// ── RESOLVERS ─────────────────────────────────────────────────────
function getSteps(persona) {
  const sector = window._QUIZ_SECTOR || 'general';
  const rows = STEPS_DATA[persona] || [];
  const resolved = [];
  [...new Set(rows.map(r=>r.step))].sort().forEach(n => {
    const candidates = rows.filter(r=>r.step===n);
    const chosen = candidates.find(r=>r.sector===sector)
                || candidates.find(r=>r.sector==='default')
                || candidates.find(r=>r.sector==='all');
    if (chosen) resolved.push(chosen);
  });
  return resolved.slice(0,3);
}

function getEvents(persona, sector, userFormat) {
  const FMT_MAP = {remote:'REMOTE',hybrid:'HYBRID',inperson:'INPERSON'};
  const prefFmt = FMT_MAP[userFormat] || 'HYBRID';
  const seen = new Set(); const all = [];
  EVENTS.filter(e=>e.active).forEach(e => {
    if (!seen.has(e.id) && e.tags.includes(sector)) { seen.add(e.id); all.push(e); }
  });
  EVENTS.filter(e=>e.active).forEach(e => {
    if (!seen.has(e.id) && e.tags.includes(persona)) { seen.add(e.id); all.push(e); }
  });
  all.sort((a,b) => { const r=f=>f===prefFmt?0:f==='HYBRID'?1:2; return r(a.format)-r(b.format); });
  return all.slice(0,4);
}

function getExperts(persona, sector) {
  const seen = new Set(); const all = [];
  EXPERTS.forEach(e => {
    if (!seen.has(e.id) && e.tags.includes(sector)) { seen.add(e.id); all.push(e); }
  });
  EXPERTS.forEach(e => {
    if (!seen.has(e.id) && e.tags.includes(persona)) { seen.add(e.id); all.push(e); }
  });
  return all.slice(0,3);
}

// getOHs(persona, sector, resolvedSteps) — sector-aware, with
// step-linked office hours promoted to the top of the results.
function getOHs(persona, sector, resolvedSteps) {
  sector = sector || 'general';
  resolvedSteps = resolvedSteps || [];
  var activeStepKeys = resolvedSteps.map(function(s){ return s.sector + ':' + s.step; });

  var matches = OHS.filter(function(o) {
    if (!o.active) return false;
    if (o.tags.indexOf(persona) === -1) return false;
    var sectorTags = o.sectorTags || ['all'];
    return sectorTags.indexOf('all') !== -1 || sectorTags.indexOf(sector) !== -1;
  });

  matches.sort(function(a, b) {
    function linked(o) {
      return (o.stepLinks || []).some(function(link) {
        return link.persona === persona && activeStepKeys.indexOf(link.sector + ':' + link.step) !== -1;
      }) ? 1 : 0;
    }
    return linked(b) - linked(a);
  });

  return matches.slice(0, 4);
}
