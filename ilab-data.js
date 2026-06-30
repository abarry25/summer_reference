// ════════════════════════════════════════════════════════════════
// ilab-data.js — i-lab Program Finder · Content Data
// Harvard Innovation Labs
// ════════════════════════════════════════════════════════════════
//
// THIS IS THE ONLY FILE YOU UPDATE EACH SEMESTER.
// The quiz logic in founder_xp_generator.html reads from this file.
// You should never need to edit founder_xp_generator.html for content.
//
// HOW TO UPDATE:
//   1. Edit your Google Sheet (the comfortable editing interface)
//   2. Come back here and update the relevant section below
//   3. Save and push to GitHub — changes go live immediately
//
// SECTIONS IN THIS FILE:
//   1. LINKS      — all program signup URLs
//   2. EVENTS     — right column of results ("Also for you")
//   3. OHS        — office hours grid at bottom of results
//   4. STEPS      — left column of results ("Start right here")
//   5. PERSONAS   — persona card copy and colors
//
// ════════════════════════════════════════════════════════════════


// ── SECTION 1: LINKS ─────────────────────────────────────────────
// Replace each '#' with the real URL for that program.
// Key names must not change — they are referenced throughout.
// ─────────────────────────────────────────────────────────────────

const LINKS = {
  OOH_SIGNUP:              '#',   // Customer Discovery Office Hours signup
  PRIMER_SUBSCRIBE:        '#',   // Customer Discovery Primer — subscribe landing page
  SPRINT_SIGNUP:           '#',   // Customer Discovery Sprint
  SYSTEM_DYNAMICS_SIGNUP:  '#',   // System Dynamics for Health Care + Life Sciences
  VIBE_CODING_SIGNUP:      '#',   // Vibe Coding Workshop
  HACKATHON_SIGNUP:        '#',   // B2C Hackathon: Concept to Testing with AI (Pt 1 + 2)
  MVP_FEEDBACK:            '#',   // MVP Feedback Session
  AI_AGENTS_SIGNUP:        '#',   // AI Agents to Run Your B2C Business
  AI_PR_SIGNUP:            '#',   // How to Use AI for PR (and How Not To)
  TECHSTARS_SIGNUP:        '#',   // Accelerator Info Session: Techstars
  YC_SIGNUP:               '#',   // Accelerator Info Session: Y Combinator
  INVESTOR_PREP:           '#',   // Investor Prep (update when ready — currently TBD)
  SIFF_APPLICATION:        '#',   // SIFF Fund application + info page
  FOUNDER_JOINER:          '#',   // Founder/Joiner Connections: Pizza + Pitch
  FOUNDER_CIRCLE_INPERSON: '#',   // Founder Circle: Pizza + Problem-Solving
  FOUNDER_CIRCLE_VIRTUAL:  '#',   // Virtual Founder Circle
  LAUNCH_PARTY:            '#',   // Summer Launch Party at Felipe's
  MEMBER_APPRECIATION:     '#',   // Member Appreciation: Tacos & Thanks
  TALK_BYERS:              '#',   // Founder Talk: Allison Byers
  TALK_ELLIOTT:            '#',   // Founder Talk: Brian Elliott + Murph VanderVelde
};


// ── SECTION 2: EVENTS ────────────────────────────────────────────
// These appear in the right column ("Also for you") of results.
//
// FIELDS:
//   id       — unique identifier, lowercase, no spaces
//   name     — display name
//   con      — category label (e.g. "Community", "Founder Fundamentals")
//   cbg/ctx  — category badge background / text color
//   date     — display string (e.g. "Jun 23" or "Jun 23–Jul 9")
//   time     — display string or empty string ''
//   format   — must be exactly: 'REMOTE', 'INPERSON', or 'HYBRID'
//   tags     — array of strings. Persona tags surface this for that persona.
//              Sector tags surface this first for that sector.
//              Options: 'explorer' 'validator' 'builder' 'propeller' 'impact'
//                       'community' 'lifesci' 'deeptech' 'climate' 'socialimpact'
//   desc     — short description shown on the event card
//   active   — true = shown, false = hidden (keeps your data without deleting)
// ─────────────────────────────────────────────────────────────────

const EVENTS = [
  {
    id:'tacos', active:true,
    name:"Member Appreciation: Tacos & Thanks",
    con:'Community', cbg:'#FFC7C8', ctx:'#711213',
    date:'Jun 16', time:'', format:'INPERSON',
    tags:['community','explorer','validator','builder','propeller','impact'],
    desc:'Celebrate with the i-lab community over tacos and ice cream from local food trucks. Open to all summer members.'
  },
  {
    id:'ideas_ooh', active:true,
    name:"Group Office Hours: Ideas Into Impact",
    con:'Founder Fundamentals', cbg:'#C1F4A8', ctx:'#27500A',
    date:'Jun 22', time:'12:00 PM', format:'REMOTE',
    tags:['explorer','community'],
    desc:'Drop-in office hours for students actively working through an idea. Facilitated by Becca Xiong with peer support.'
  },
  {
    id:'techstars', active:true,
    name:"Accelerator Info Session: Techstars",
    con:'Venture Growth', cbg:'#cbcafa', ctx:'#232262',
    date:'Jun 23', time:'12:00 PM', format:'INPERSON',
    tags:['propeller','builder'],
    desc:'Steve Bernard from Techstars on what they look for in founders and what you gain from participating.'
  },
  {
    id:'sprint', active:true,
    name:"Customer Discovery Sprint",
    con:'Founder Fundamentals', cbg:'#C1F4A8', ctx:'#27500A',
    date:'Jun 23–Jul 9', time:'', format:'HYBRID',
    tags:['validator','builder'],
    desc:'3-session series: Kickoff (in-person), Check-in (virtual), Final Showcase (virtual). Full commitment required.'
  },
  {
    id:'launch', active:true,
    name:"Summer Launch Party at Felipe's",
    con:'Community', cbg:'#FFC7C8', ctx:'#711213',
    date:'Jun 24', time:'6:00 PM', format:'INPERSON',
    tags:['community','explorer','validator','builder','propeller','impact'],
    desc:"Connect with student and alumni founders over margaritas and tacos. Meet entrepreneurs from across Harvard."
  },
  {
    id:'sysdy', active:true,
    name:"System Dynamics for HC + Life Sciences",
    con:'Founder Fundamentals', cbg:'#C1F4A8', ctx:'#27500A',
    date:'Jun 25', time:'12:00 PM', format:'INPERSON',
    tags:['lifesci'],
    desc:'Map feedback loops, stakeholder dynamics, and commercialization realities specific to your sector. Led by Mark Fagan, HKS.'
  },
  {
    id:'siff_ev', active:true,
    name:"SIFF Fund",
    con:'SIFF', cbg:'#cee5f7', ctx:'#2a5a80',
    date:'Apps open', time:'', format:'HYBRID',
    tags:['impact','socialimpact'],
    desc:'A competitive program for 6 social impact teams — months of personalized coaching, design support, and real funding.'
  },
  {
    id:'cd_ooh', active:true,
    name:"Group Office Hours: Customer Discovery",
    con:'Founder Fundamentals', cbg:'#C1F4A8', ctx:'#27500A',
    date:'Jun 29 + Jul 24', time:'12:00 PM', format:'REMOTE',
    tags:['validator','builder','explorer','impact'],
    desc:"For students conducting interviews, validating assumptions, or making sense of what they're learning. Facilitated by Becca Xiong."
  },
  {
    id:'f_joiner', active:true,
    name:"Founder/Joiner Connections: Pizza + Pitch",
    con:'Community', cbg:'#FFC7C8', ctx:'#711213',
    date:'Jul 2 + Jul 28', time:'6:00 PM', format:'INPERSON',
    tags:['explorer','validator','community'],
    desc:"Pitch what you're building, share what you need, and connect with potential co-founders and collaborators."
  },
  {
    id:'byers', active:true,
    name:"Founder Talk: Allison Byers",
    con:'Venture Growth', cbg:'#cbcafa', ctx:'#232262',
    date:'Jul 7', time:'12:00 PM', format:'INPERSON',
    tags:['propeller','impact','builder','validator'],
    desc:"Author of Fundraising for the Rest of Us on fundraising strategy, resilience, and navigating uncertainty as a founder."
  },
  {
    id:'f_circle', active:true,
    name:"Founder Circle: Pizza + Problem-Solving",
    con:'Community', cbg:'#FFC7C8', ctx:'#711213',
    date:'Jul 8', time:'12:00 PM', format:'INPERSON',
    tags:['community','validator','builder','explorer'],
    desc:'Peer problem-solving over pizza. Bring your biggest startup challenge — leave with new perspectives.'
  },
  {
    id:'vf_circle', active:true,
    name:"Virtual Founder Circle",
    con:'Community', cbg:'#FFC7C8', ctx:'#711213',
    date:'Jul 9', time:'12:00 PM', format:'REMOTE',
    tags:['community','validator','explorer','impact'],
    desc:"Same peer problem-solving energy — on Zoom. Small-group breakouts for founders at any stage."
  },
  {
    id:'hackathon', active:true,
    name:"B2C Hackathon: Concept to Testing with AI",
    con:'Founder Fundamentals', cbg:'#C1F4A8', ctx:'#27500A',
    date:'Jul 14 + 16', time:'9:00 AM', format:'INPERSON',
    tags:['explorer','deeptech'],
    desc:'Use AI to move from concept to testable idea, then return with real user feedback. Both sessions required.'
  },
  {
    id:'yc', active:true,
    name:"Accelerator Info Session: Y Combinator",
    con:'Venture Growth', cbg:'#cbcafa', ctx:'#232262',
    date:'Jul 15', time:'12:00 PM', format:'INPERSON',
    tags:['propeller','builder'],
    desc:"YC Partner Ankit Gupta + a panel of YC founders on what they look for, fundraising, and scaling. Open Q&A."
  },
  {
    id:'vibe', active:true,
    name:"Vibe Coding Workshop",
    con:'Founder Fundamentals', cbg:'#C1F4A8', ctx:'#27500A',
    date:'Jul 15', time:'12:00 PM', format:'INPERSON',
    tags:['builder','deeptech'],
    desc:'Hands-on product iteration workshop for founders actively building early-stage products.'
  },
  {
    id:'ai_agents', active:true,
    name:"AI Agents to Run Your B2C Business",
    con:'Venture Growth', cbg:'#cbcafa', ctx:'#232262',
    date:'Jul 15', time:'12:00 PM', format:'INPERSON',
    tags:['propeller','deeptech'],
    desc:'Explore how AI agents can run and automate core parts of your B2C venture. For founders with early traction.'
  },
  {
    id:'ai_pr', active:true,
    name:"AI for PR (and How Not To)",
    con:'Venture Growth', cbg:'#cbcafa', ctx:'#232262',
    date:'Jul 22', time:'12:00 PM', format:'REMOTE',
    tags:['propeller','builder'],
    desc:'Build your communications strategy using AI tools — while keeping strategy and authentic storytelling human.'
  },
  {
    id:'mvp', active:true,
    name:"MVP Feedback Session",
    con:'Venture Growth', cbg:'#cbcafa', ctx:'#232262',
    date:'Jul 22', time:'12:00 PM', format:'INPERSON',
    tags:['validator','builder'],
    desc:"Bring a product, prototype, or landing page. Get structured, real-time peer feedback on what you've built."
  },
  {
    id:'elliott', active:true,
    name:"Founder Talk: Brian Elliott + Murph VanderVelde",
    con:'Venture Growth', cbg:'#cbcafa', ctx:'#232262',
    date:'Jul 23', time:'12:00 PM', format:'INPERSON',
    tags:['propeller','builder','deeptech'],
    desc:"Inside Blitzy — one of Boston's fastest-growing AI companies. Lessons on identifying opportunity, building with AI, and scaling fast."
  },
];


// ── SECTION 3: OFFICE HOURS ───────────────────────────────────────
// These appear in the bottom grid ("Office hours for you").
//
// FIELDS:
//   tags       — persona tags, same options as Events. Controls which
//                persona sees this OH at all.
//   sectorTags — array of sector tags. Use ['all'] to show for every
//                sector within a matching persona, or list specific
//                sectors: 'lifesci' 'deeptech' 'climate' 'socialimpact'.
//                Mirrors the sector-tag pattern used for Expert advisors.
//   stepLinks  — OPTIONAL array. Ties this office hour to one or more
//                specific rows in STEPS_DATA so it's promoted to the
//                top of the grid whenever that exact step is shown to
//                the founder. Each entry is { persona, sector, step }
//                and must match a STEPS_DATA row exactly (same persona
//                key, same sector key — 'all'/'default'/specific — and
//                same step number). Leave as [] if this office hour
//                isn't tied to a specific step; it will still show
//                based on tags/sectorTags alone, just without the boost.
//   format     — 'REMOTE', 'INPERSON', or 'HYBRID'
//   cta        — the link button label (e.g. 'Sign up', 'Drop in', 'Book a session')
//   active     — true/false
// ─────────────────────────────────────────────────────────────────

const OHS = [
  {
    id:'ideas_ooh', active:true,
    name:'Group Office Hours: Ideas Into Impact',
    con:'Founder Fundamentals', cbg:'#C1F4A8', ctx:'#27500A',
    sched:'Jun 22', fmt:'Drop-in · Remote', format:'REMOTE',
    cta:'Sign up',
    tags:['explorer','community'],
    sectorTags:['all'],
    stepLinks:[
      { persona:'explorer', sector:'all', step:3 }
    ],
    desc:'For students actively working through an idea. Works well after starting the Discovery Primer. Facilitated by Becca Xiong.'
  },
  {
    id:'cd_ooh', active:true,
    name:'Group Office Hours: Customer Discovery',
    con:'Founder Fundamentals', cbg:'#C1F4A8', ctx:'#27500A',
    sched:'Jun 29 + Jul 24', fmt:'Drop-in · Remote', format:'REMOTE',
    cta:'Sign up',
    tags:['validator','builder','explorer','impact'],
    sectorTags:['all'],
    stepLinks:[
      { persona:'validator', sector:'all', step:2 },
      { persona:'impact',    sector:'all', step:3 }
    ],
    desc:"Bring interviews to discuss, assumptions to test, or patterns you can't make sense of yet. Facilitated by Becca Xiong."
  },
  {
    id:'dropin', active:true,
    name:'Staff Drop-In & General Advising',
    con:'Membership', cbg:'#FFC7C8', ctx:'#711213',
    sched:'Ongoing', fmt:'Drop-in · In-Person', format:'INPERSON',
    cta:'Drop in — no registration needed',
    tags:['explorer','validator','builder','propeller','impact','community'],
    sectorTags:['all'],
    stepLinks:[],
    desc:'Come with any question — which program fits, how to apply, or what to prioritize this summer.'
  },
  {
    id:'siff_c', active:true,
    name:'SIFF Pitch Coaching',
    con:'SIFF', cbg:'#cee5f7', ctx:'#2a5a80',
    sched:'By appointment', fmt:'1:1 · Virtual or In-Person', format:'HYBRID',
    cta:'Book a session',
    tags:['impact'],
    sectorTags:['all'],
    stepLinks:[
      { persona:'impact', sector:'all', step:1 }
    ],
    desc:'Personalized pitch coaching for SIFF participants and applicants. Work directly with the SIFF team.'
  },
];


// ── SECTION 4: STEPS ─────────────────────────────────────────────
// These appear in the left column ("Start right here") of results.
//
// STRUCTURE:
//   Steps are grouped by persona, then by sector.
//   Use 'all'     → always show this step for this persona, any sector
//   Use 'default' → show this step when no sector-specific row exists
//   Use 'lifesci', 'deeptech', etc. → show only for that sector
//
// FIELDS:
//   a        — action title (bold line)
//   d        — description (smaller grey text below)
//   u        — urgent: true = red step number, false = black
//   fmt      — 'REMOTE', 'INPERSON', or 'HYBRID' (shows as format badge)
//   link     — use LINKS.KEY_NAME to reference the Links section above
//   ll       — link label (e.g. 'Register →')
//
// STEP PRIORITY:
//   If step 2 has both a 'deeptech' row and a 'default' row,
//   a Deep Tech founder sees the 'deeptech' row.
//   Everyone else sees the 'default' row.
// ─────────────────────────────────────────────────────────────────

const STEPS_DATA = {

  community: [
    { sector:'all', step:1, u:true,  fmt:'INPERSON', link:'#',                         ll:'Start here →', a:'Complete your i-lab Membership intake',            d:'Unlocks everything — coworking, Slack, events, and the weekly newsletter. Takes five minutes.' },
    { sector:'all', step:2, u:false, fmt:'INPERSON', link:LINKS.FOUNDER_CIRCLE_INPERSON,ll:'Register →',   a:'Come to Founder Circles this summer',               d:'In-person (Jul 8) and virtual (Jul 9). Bring a challenge, get peer input. No prep needed.' },
    { sector:'all', step:3, u:false, fmt:'INPERSON', link:LINKS.LAUNCH_PARTY,           ll:'Register →',   a:"Join the Summer Launch Party at Felipe's (Jun 24)", d:"Margaritas and tacos with founders from across Harvard. The easiest way to meet people." },
  ],

  impact: [
    { sector:'all', step:1, u:true,  fmt:'HYBRID',   link:LINKS.SIFF_APPLICATION, ll:'Learn more + apply →', a:'Apply to the SIFF Fund',                          d:'A competitive program for 6 teams with months of coaching and real funding. Talk to the SIFF team to learn about eligibility and start your application.' },
    { sector:'all', step:2, u:true,  fmt:'INPERSON', link:LINKS.TALK_BYERS,       ll:'Register →',          a:'Register: Founder Talk — Allison Byers (Jul 7)',   d:"Practical fundraising strategy and lessons from building a mission-driven company. Open Q&A over lunch." },
    { sector:'all', step:3, u:false, fmt:'REMOTE',   link:LINKS.OOH_SIGNUP,       ll:'Sign up →',           a:'Drop into Customer Discovery Office Hours',        d:"Jun 29 + Jul 24 — especially useful if you're still testing your impact model and validating who benefits most." },
  ],

  explorer: [
    { sector:'all',     step:1, u:true,  fmt:'INPERSON', link:'#',                    ll:'Start here →', a:'Complete your i-lab Membership intake',                     d:'Unlocks everything — coworking, Slack, events, and the weekly newsletter. Takes five minutes.' },
    { sector:'deeptech',step:2, u:true,  fmt:'INPERSON', link:LINKS.HACKATHON_SIGNUP, ll:'Register →',   a:'Register for the B2C Hackathon (Jul 14 + 16)',               d:'Use AI to move from concept to testable idea, then return with real user feedback. Both sessions required.' },
    { sector:'default', step:2, u:true,  fmt:'REMOTE',   link:LINKS.PRIMER_SUBSCRIBE, ll:'Sign up →',    a:'Sign up for the Customer Discovery Primer',                  d:'A self-paced email journey you can start today — proven discovery frameworks, no cohort or commitment required.' },
    { sector:'all',     step:3, u:false, fmt:'REMOTE',   link:LINKS.OOH_SIGNUP,       ll:'Sign up →',    a:'Drop into Group Office Hours: Ideas Into Impact (Jun 22)',   d:'Bring your idea, your questions, or just show up. Facilitated by Becca Xiong with peer support built in.' },
  ],

  validator: [
    { sector:'lifesci', step:1, u:true,  fmt:'INPERSON', link:LINKS.SYSTEM_DYNAMICS_SIGNUP, ll:'Register →', a:'Register: System Dynamics for HC + Life Sciences (Jun 25)', d:'Map feedback loops, stakeholder dynamics, and commercialization realities specific to your sector. Led by Mark Fagan, HKS.' },
    { sector:'default', step:1, u:true,  fmt:'REMOTE',   link:LINKS.PRIMER_SUBSCRIBE,        ll:'Sign up →',  a:'Sign up for the Customer Discovery Primer',                 d:"A self-paced email journey — proven customer discovery frameworks on your own schedule. Sign up and we'll take it from there." },
    { sector:'all',     step:2, u:true,  fmt:'REMOTE',   link:LINKS.OOH_SIGNUP,               ll:'Sign up →',  a:'Join Customer Discovery Office Hours (Jun 29 + Jul 24)',   d:"Bring interviews to discuss, assumptions to test, or patterns you can't make sense of yet." },
    { sector:'all',     step:3, u:false, fmt:'INPERSON', link:LINKS.MVP_FEEDBACK,              ll:'Register →', a:'Register for MVP Feedback Session (Jul 22)',                d:'Bring a prototype, product, or landing page for real-time structured feedback from fellow founders.' },
  ],

  builder: [
    { sector:'lifesci', step:1, u:true,  fmt:'INPERSON', link:LINKS.SYSTEM_DYNAMICS_SIGNUP,    ll:'Register →', a:'Register: System Dynamics for HC + Life Sciences (Jun 25)',    d:'Essential context on feedback loops, stakeholder dynamics, and commercialization for HC/LS founders. Led by Mark Fagan, HKS.' },
    { sector:'deeptech',step:1, u:true,  fmt:'INPERSON', link:LINKS.VIBE_CODING_SIGNUP,         ll:'Register →', a:'Register: Vibe Coding Workshop (Jul 15)',                       d:'Hands-on product iteration for founders actively building. Pair with the Sprint for the strongest combination this summer.' },
    { sector:'default', step:1, u:true,  fmt:'HYBRID',   link:LINKS.SPRINT_SIGNUP,               ll:'Register →', a:'Commit to the Customer Discovery Sprint (Jun 23 – Jul 9)',    d:'Multi-session series: Kickoff (in-person), Check-in (virtual), Final Showcase (virtual). The highest-intensity discovery program we offer.' },
    { sector:'lifesci', step:2, u:true,  fmt:'HYBRID',   link:LINKS.SPRINT_SIGNUP,               ll:'Register →', a:'Commit to the Customer Discovery Sprint (Jun 23 – Jul 9)',    d:'Multi-session series: Kickoff, Check-in, Final Showcase. Full commitment required.' },
    { sector:'deeptech',step:2, u:true,  fmt:'HYBRID',   link:LINKS.SPRINT_SIGNUP,               ll:'Register →', a:'Commit to the Customer Discovery Sprint (Jun 23 – Jul 9)',    d:'Multi-session series: Kickoff, Check-in, Final Showcase. Full commitment required.' },
    { sector:'all',     step:3, u:false, fmt:'INPERSON', link:LINKS.MVP_FEEDBACK,                 ll:'Register →', a:'Register for MVP Feedback Session (Jul 22)',                   d:"Bring what you've built by then for structured, real-time peer feedback from fellow founders." },
  ],

  propeller: [
    { sector:'all', step:1, u:true,  fmt:'INPERSON', link:LINKS.TECHSTARS_SIGNUP, ll:'Register →', a:'Register: Accelerator Info Session — Techstars (Jun 23)',    d:"Steve Bernard on what Techstars looks for in founders, what you gain from the program, and how to position your application." },
    { sector:'all', step:2, u:true,  fmt:'INPERSON', link:LINKS.YC_SIGNUP,        ll:'Register →', a:'Register: Accelerator Info Session — Y Combinator (Jul 15)', d:"YC Partner Ankit Gupta + a panel of YC founders. Open Q&A and networking over lunch." },
    { sector:'all', step:3, u:false, fmt:'INPERSON', link:LINKS.TALK_BYERS,       ll:'Register →', a:'Attend Founder Talk: Allison Byers (Jul 7)',                  d:"Fundraising strategy, investor relations, and practical lessons from a founder who's built her own path." },
  ],

};


// ── SECTION 5: PERSONAS ───────────────────────────────────────────
// Persona card copy and colors.
// The scoring logic that routes someone to a persona lives in
// founder_xp_generator.html and rarely changes.
// Update text here freely — it won't affect routing.
// ─────────────────────────────────────────────────────────────────

const PERSONAS = {
  explorer: {
    name:'Explorer', emoji:'🌱',
    hl:'Start with curiosity. Build toward clarity.',
    desc:"You're in the most important stage — figuring out whether your idea is worth pursuing before investing months of effort. The right programs will get you real customer feedback fast, build foundational skills, and connect you with peers navigating the exact same questions this summer.",
    ac:'#84A873', bb:'#C1F4A8', bt:'#27500A',
    stack:[
      {n:'Membership',          l:'Your foundation', bg:'#FFC7C8', tx:'#711213'},
      {n:'Founder Fundamentals',l:'Your track',      bg:'#C1F4A8', tx:'#27500A'},
      {n:'Community Events',    l:'Your people',     bg:'#FFC7C8', tx:'#711213'},
    ]
  },
  validator: {
    name:'Validator', emoji:'🧪',
    hl:'Real answers from real customers — fast.',
    desc:"You have a specific problem you're solving and you need to know if customers actually care. The Customer Discovery path — Primer, Office Hours, and sector-specific workshops — gives you structured ways to test your assumptions and iterate quickly before committing to a full build.",
    ac:'#f29138', bb:'#f7e4d0', bt:'#993C1D',
    stack:[
      {n:'Membership',       l:'Your foundation', bg:'#FFC7C8', tx:'#711213'},
      {n:'Customer Discovery',l:'Your track',     bg:'#C1F4A8', tx:'#27500A'},
      {n:'MVP Feedback',     l:'Your milestone',  bg:'#f7e4d0', tx:'#993C1D'},
    ]
  },
  builder: {
    name:'Sprint Builder', emoji:'🏗️',
    hl:'Intensity, structure, and real momentum.',
    desc:"You're ready to commit. The Customer Discovery Sprint — paired with sector-specific workshops and regular MVP feedback — gives you a high-accountability container for this summer. Show up for all of it, do the work between sessions, and you'll leave with validated insights and a clear next step.",
    ac:'#232262', bb:'#cbcafa', bt:'#232262',
    stack:[
      {n:'Membership',     l:'Your foundation', bg:'#FFC7C8', tx:'#711213'},
      {n:'Discovery Sprint',l:'Your core',      bg:'#C1F4A8', tx:'#27500A'},
      {n:'Sector Workshops',l:'Your edge',      bg:'#cbcafa', tx:'#232262'},
    ]
  },
  propeller: {
    name:'Growth Founder', emoji:'🚀',
    hl:"Build momentum. Get in front of the right people.",
    desc:"You have proof points and now it's about growth — fundraising, accelerator pipelines, and getting on the right people's radar. The Accelerator Info Sessions with Techstars and Y Combinator are your most urgent actions, alongside the Founder Talks and workshops that will sharpen your positioning.",
    ac:'#7482E8', bb:'#EEEDFE', bt:'#3C3489',
    stack:[
      {n:'Membership',          l:'Your foundation', bg:'#FFC7C8', tx:'#711213'},
      {n:'Accelerator Pipeline',l:'Your track',      bg:'#EEEDFE', tx:'#3C3489'},
      {n:'Venture Growth',      l:'Your edge',       bg:'#cbcafa', tx:'#232262'},
    ]
  },
  impact: {
    name:'Impact Founder', emoji:'💚',
    hl:"Your mission deserves the right funding pathway.",
    desc:"SIFF was built for exactly this. Personalized pitch coaching, design support, and a real funding competition make it the most direct path to capital for social impact ventures at the i-lab. Apply early, show up to every coaching session, and pair it with the broader community to stay grounded.",
    ac:'#4A90C4', bb:'#cee5f7', bt:'#2a5a80',
    stack:[
      {n:'Membership',     l:'Your foundation', bg:'#FFC7C8', tx:'#711213'},
      {n:'SIFF',           l:'Your flagship',   bg:'#cee5f7', tx:'#2a5a80'},
      {n:'Community Events',l:'Your people',    bg:'#FFC7C8', tx:'#711213'},
    ]
  },
  community: {
    name:'Community First', emoji:'🤝',
    hl:"Connect, stay curious, and come back when you're ready.",
    desc:"Right now, the best use of the i-lab isn't a program — it's the community. Show up to events, meet founders building interesting things, and stay in the loop. When you're ready to commit more time, come back and retake this quiz — the programs will be here.",
    ac:'#711213', bb:'#FFC7C8', bt:'#711213',
    stack:[
      {n:'Membership',     l:'Your foundation',   bg:'#FFC7C8', tx:'#711213'},
      {n:'Community Events',l:'Start here',       bg:'#FFC7C8', tx:'#711213'},
      {n:'Drop-in Hours',  l:"When you're ready", bg:'#C1F4A8', tx:'#27500A'},
    ]
  }
};


// ── STEP RESOLVER ─────────────────────────────────────────────────
// This function reads STEPS_DATA and builds the 3 steps for a result page.
// It handles the sector priority logic (specific > default > all).
// You do not need to edit this function — edit STEPS_DATA above.
// ─────────────────────────────────────────────────────────────────

function getSteps(persona) {
  const sector = window._QUIZ_SECTOR || 'general';
  const rows   = STEPS_DATA[persona] || [];

  const resolved = [];
  const stepNums = [...new Set(rows.map(r => r.step))].sort();

  stepNums.forEach(n => {
    const candidates = rows.filter(r => r.step === n);
    const specific   = candidates.find(r => r.sector === sector);
    const def        = candidates.find(r => r.sector === 'default');
    const all        = candidates.find(r => r.sector === 'all');
    const chosen     = specific || def || all;
    if (chosen) resolved.push(chosen);
  });

  return resolved.slice(0, 3);
}


// ── EVENT + OH RESOLVERS ──────────────────────────────────────────
// Read from EVENTS and OHS above. Edit the data, not these functions.
// ─────────────────────────────────────────────────────────────────

function getEvents(persona, sector, userFormat) {
  const FMT_MAP = { remote:'REMOTE', hybrid:'HYBRID', inperson:'INPERSON' };
  const prefFmt = FMT_MAP[userFormat] || 'HYBRID';
  const seen    = new Set();
  const all     = [];

  EVENTS.filter(e => e.active).forEach(e => {
    if (!seen.has(e.id) && e.tags.includes(sector)) { seen.add(e.id); all.push(e); }
  });
  EVENTS.filter(e => e.active).forEach(e => {
    if (!seen.has(e.id) && e.tags.includes(persona)) { seen.add(e.id); all.push(e); }
  });

  all.sort((a, b) => {
    const rank = f => f === prefFmt ? 0 : f === 'HYBRID' ? 1 : 2;
    return rank(a.format) - rank(b.format);
  });

  return all.slice(0, 4);
}

function getOHs(persona, sector, resolvedSteps) {
  sector = sector || 'general';
  resolvedSteps = resolvedSteps || [];

  // Build a quick lookup of which {sector, step} combos this founder is
  // actually seeing right now, so we can match against stepLinks below.
  const activeStepKeys = resolvedSteps.map(s => `${s.sector}:${s.step}`);

  const matches = OHS.filter(o => {
    if (!o.active) return false;
    if (!o.tags.includes(persona)) return false;
    const sectorTags = o.sectorTags || ['all'];
    return sectorTags.includes('all') || sectorTags.includes(sector);
  });

  // Step-linked office hours float to the top — they're the most
  // specific, relevant match for the exact path this founder is on.
  matches.sort((a, b) => {
    const linked = o => (o.stepLinks || []).some(link =>
      link.persona === persona && activeStepKeys.includes(`${link.sector}:${link.step}`)
    ) ? 1 : 0;
    return linked(b) - linked(a);
  });

  return matches.slice(0, 4);
}
