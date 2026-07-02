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
  { id:"adam_jackson", name:"Adam  Jackson", role:"Partner", org:"Bosch Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/3Oh9TNhmYmdXRTwBLHnD0w/KMn1P8icvxKfbZjH8r8DStUOcGdOLMdI8xZ2ONN4sJm4auxHv0G9kDX8pzqprbYHAYJGpZl10v1w0MHTkWtDlwv1AvbEF5eh8hyGmvmkWBKwXNwHnioi6wdzYPwhVFNt_Wb9krO470vvX5BO3PtfJc00ToHK6k3a4h186aIC29k/J95qN14lIMs1FFWU1W4-O-LQx0k4hJLGFlG1_-OqqqI", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Adam%20%20Jackson",
    canHelp:"Capital raising\nPitch Decks\nBusiness Model\nFounders issue ",
    tags:["propeller","general"] },
  { id:"andrew_mclaughlin", name:"Andrew McLaughlin", role:"Chief Operating Officer", org:"SandboxAQ",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/fIFKFlZyNhZxXoUziUaesg/WdOWARdesyjyRmSDjQq31gqkD937T6wg8cToagEu2QYUJvbt5Q99SfgqpBWFC-lu4RpuiNxfQ0Yi8Cg4TaElqHvdzhyA0o1Hq_WP-VY21qPXPBSjwcsQUaHrY7CJoOogvR1jfqwUfPypVZ6ZMQNt63iG_E0BPjNB1A1BSZI1x2o/7Y1ledbkWI0KcE7e9GoDGcRMFnPYgRVOS80hUjNwUVw", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Andrew%20McLaughlin",
    canHelp:"* Fundraising\n* Pitch decks\n* Deep tech & deep science startups\n* Product-market fit\n* Policy & regulation",
    tags:["builder","propeller","lifesci","deeptech","general"] },
  { id:"coppelia_marincovic", name:"Coppelia Marincovic", role:"Partner", org:"Syensqo Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/sS4whRIIP0IvBOZuyzka7w/s03oo-Pv5Y_uUiTyDRgysCnb7cLrWk-3JE8Ja0kwnG-OHagNJv-HBbTj1F7vpmPtMDeKpklrMGw2ultwStRN1lYLgi0mLHuBlnMK336g0CxCDKPZ3gBp4N_eikCVVasmMN9pPkO7FQD-pbSX7wIMlyMCrjBQDWifTp_m5mN8Qlc/9Y6xdNAoeSu192uLMTAQ0eeK8TrDzegFfLf32Lx0euw", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Coppelia%20Marincovic",
    canHelp:"- Capital raising\n- Pitch decks\n- Business model",
    tags:["propeller","climate","socialimpact","general"] },
  { id:"david_boghossian", name:"David Boghossian", role:"Founder", org:"PowerSteering Software",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/uhYPFV-P-oOhV9716MRXMg/0hjY3fP_n0GqIG86hPyPwSC-d8rI1JztQkKch1Xi8u9CMZipKdcC8SbhOczHSOK-o-FcfHcYhwzPpAlLuU5U-l4-_uSxndW2EFkzcILNnDCsnAVWC8RiDSPE7vZ5mat7yfMhCid112fa9yhqKx7QJnOnIDuO8QSrQtmt-yglXwg/NZ_MvhAHL4f7ysM_mXL-_2EUykB9c0lt57DEd0ejzjo", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=David%20Boghossian",
    canHelp:"B2B enterprise software and services\nProduct idea to MVP\nFinding early customers, partners and funders\nEarly Scaling and Go to Market strategy\n\n",
    tags:["explorer","builder"] },
  { id:"doll_avant", name:"Doll Avant", role:"", org:"",
    photo:"", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Doll%20Avant",
    canHelp:"",
    tags:[] },
  { id:"ed_barbera", name:"Ed Barbera", role:"", org:"",
    photo:"", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Ed%20Barbera",
    canHelp:"",
    tags:[] },
  { id:"farouk_meralli", name:"Farouk Meralli", role:"CEO", org:"SwipeRx",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Gfh1xTqrNqHHvbcaivsW_g/C5wMfLFo1qL-lZy-VInLxREZb_fJeEI3VJ9pIir2rdgCipIdfJhHoAkBK_vOPqxu9GX18wVClHnvB2zCck1i4O0AXbY-ENfl-4cirxESzh-Tj8KNBvwf7WYNDFsyIlw8cjMI8F8V9W5AkRSJ2CV0B_ODh7Q7iPpD7BlC_QBMvbatWsVSDJ57ou3N1vzvOaPL/-xM1YMCVaNZfddOyBAhhdpBic5YH6a3RUvJTunXZhL0", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Farouk%20Meralli",
    canHelp:"Capital raising (equity, debt, grants), pitch deck creation and feedback, business model ideation, go to market strategies, identification of key metrics",
    tags:["explorer","propeller","lifesci","socialimpact","general"] },
  { id:"furqan_nazeeri", name:"Furqan Nazeeri", role:"CEO", org:"Studion, Inc.",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/gN-4pmdlUFHrcoViezaN4g/6YNK5KamtkU9LYrCJtWP21wrgbCvAarjpOO2tCQ9j4Nu1WNoUlipcW_pWzGQloDHiQv08QZfIrAWKvJcNNtPmVfQDrNWnUcg0_HZaspzaexRCo30tiZiJq19kwlykkyqGTaqEeDta4R3dYKvN-Ss3w4FDH7RUd33tobwmu5vwI0tte0lRG3-8h5fKVUzZ6yy/kXwA67a2KbUwJC7RLJo2VSeABhkqhD06LhoNFJyO1Uc", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Furqan%20Nazeeri",
    canHelp:"* Rich vs. king: should you raise capital and own a slice of the pie, or bootstrap and own the whole thing?\n* Building and scaling technology-enabled services businesses, including offshore/global del",
    tags:["builder","lifesci","general"] },
  { id:"gene_dorff", name:"Gene Dorff", role:"", org:"",
    photo:"", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Gene%20Dorff",
    canHelp:"",
    tags:[] },
  { id:"harry_archerman", name:"Harry Archerman", role:"Founder & CEO", org:"Archerman Capital",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/27B32S1FKFKh5fhESkPRfg/elV03RbmJqkJuoSCZG3bVqvr2I1e1pHyrBdjM0Ag7zsynDxbEhRQxlUla6Hir8T7WCJh_-8TM4A8aGB-s2wcZnje7eQdT5FG3yN0B-nHjtNdZO3kAxc9m1YABNq44KL6nZtUdmsorknfDj5rWxZ2DRL2IZEF5gNhhyvl05q4ycM/p_-_wXbu2ztRy6CbN0_t1d6KIPmqc1uDz8Q-slCOIx8", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Harry%20Archerman%20",
    canHelp:"- Business plan, Pivot from frustration \n- PMF, key metrics LTV, CAC, GDR, NDR\n- Career and life advice",
    tags:["deeptech","general"] },
  { id:"henry_pelish", name:"Henry Pelish", role:"Chief Scientific Officer", org:"Nuvalent",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/35y-LGbWjD4rVjH5VFe8tw/zCEujW9_AdOZLRpW-R59mcgknE_bBIdLGMBA5T2aX7jEghRuJ6Q9XYCKpkMj6uR6NeRjrJUUJauYMU-uy2nr07aayc_rM_Lon1GTV5xykrD7rlHCeAEWYwa-jZY9ySlclgejwTVy05IGxtCo-aA8DwFP6SlYgYFhWe8wznNRWBM/Xh3Wl3E2XD-YbZR4EKGzi0J6wdN2ClGssTGZqJA6878", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Henry%20Pelish",
    canHelp:"I can help with Life Sciences concepts, data, company creation and growth.",
    tags:["lifesci"] },
  { id:"jb_michel", name:"JB Michel", role:"Founder", org:"General Biology AI",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/x7IzaKtof8PUQZIaTB5NaA/7uEMkEchpxg2lmL5PGeqyHdv2GkqX1esF0Hsba7Z0v3X58liB_pbNO_tFLYawFoCjoCfUNpN0UopUZTF0y5-nfWNTnpTofLDWCOnyuIowpqISVzhBoTH8C8V6PX41m-0TGBdb_cqE88njqO1OqrXwqnRW0XaEc0gBdXHwB0h-l6UWVWUODRHZqiuAEcmanzq/QxjzMDbGcWy2W-ZTo8cgENAH-R-8v99FUc9EiI0gVzc", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=JB%20Michel%20",
    canHelp:"- Early stage company building\n- Pitch decks\n- Storytelling\n- Hiring\n- Fundraising",
    tags:["explorer","builder","propeller","lifesci"] },
  { id:"jean_jacques_degroof", name:"Jean-Jacques  Degroof", role:"President of the Board", org:"Degroof-Van Massenhove Foundation",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Ef5iqk1FRx8ucrvLSQEstw/N1IH1TrWIPNzTJJDHPm2qxcp8v0vAe_1UMXJy5DdaTAjZwtcI6AVXJ_eKuJXAfWrassVqrBwmvOOGBojueIlHPmZLwFqHwBswaHgO1Nr1gaQNP7Fy-zCHpecV3jLSkOeoUS-_h5MrOc3IzNcRYKfqPKOQf-SWiMwBkvM1ZzcEUQy6tTSgAjmpJ9HTa7Zybhv/nSsNcivG72Cfp_QvSa1-YyzjSOx3gKLaeqS6do5UeE0", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Jean-Jacques%20%20Degroof",
    canHelp:"Customer discovery, value proposition. beachhead market.",
    tags:["validator","general"] },
  { id:"jeff_bartel", name:"Jeff Bartel", role:"Chairman and Managing Director", org:"Hamptons Group, LLC",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/FYQzGXCh1kSUjt4gabT_xw/NuVnpSZZMSPBmr_Bchtk2vz-iBKk-Q58m9L77iHL4yblTiwuR3HVB_CcvShueiN_u5dSaXl-UvAaUk9yBWY5mHo9MiUVeC01-G6SA16t3RLmsYeMQen0J_PDvTDHTmTJgkPGqlYGdzSlQhxNZhGr2QewMwUwY8t8XoPqlDimop-KLzYKIMnT3DY5u1XPWPo6v9Cab7kVV48O35ssYzQS4A/40y5kR0US2EtHJD6knh3EYHtntWMqiyulRmndA268kA", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Jeff%20Bartel",
    canHelp:"Venture Strategy & Growth: Advising founders on business model design, go-to-market strategy, scaling pathways, and aligning mission with market opportunities.\n\nCapital Raising & Investor Readiness: G",
    tags:["builder","propeller","impact","community","general"] },
  { id:"jeronimo_beccar", name:"Jeronimo  Beccar", role:"CEO & Co-Founder", org:"hyka.io",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/q3jLCq6UcmBRSGcnVWFEwQ/8JP5c9-Bkc92MQUe5CvT6MQfJq6ao8bPcxFd0W8fK9XcAI-HVazPkq_gLNOffa8iSSB4VmXoii_TzhLwQH2AvSryAigONV3OMfZO-1wzwmng-j_5v34uCP6yXNgP9eUtb5dQVQVxolqeVeXw1zvUFnhWWAYqRWmHviPzllNMFUOSZi3HLxF-IRPAdcveMnu-/3HerB_zz_NszIorHc-EZ25xXiE34T4iDUAbvzkbSs70", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Jeronimo%20%20Beccar",
    canHelp:"Task Prioritization: what needs focus now vs. what can wait.\nDesigning tests and experiments: to prove (or disprove) demand.\nStakeholder mapping: who cares or gets impacted by what you're building. \nT",
    tags:["builder","lifesci","general"] },
  { id:"jon_bronson", name:"Jon Bronson", role:"Managing Partner", org:"J2 Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/QT24FSEwQ0qSkGWSmbPu5A/lb93LgEzKKTOktZTsZQclqJesdBMPmNgNPJNCsPT11ztoiY8aQKqJ-hYt8ym5OPv2pGN1KEDYVPYnvLe3lq6R8uSamNsLSd6SeZCEl8-m9lAddxVOEBklH4dft5GFFGYhkO5DZOV5ownQWDw9x8r1a-koBn_XBTmfe0yJRXPCnYcf13IwLQEwaAaMIddLHRS/nIl1RCa-TSVGlOnwccCejC8k9W6T530bp_O2cJvM9UU", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Jon%20Bronson",
    canHelp:"'- Capital raising\n- Non-dilutive (government) capital\n- Validating product-market fit",
    tags:["builder","propeller","lifesci","general"] },
  { id:"julie_brill", name:"Julie Brill", role:"Founder/CEO", org:"Brill Strategies LLC",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/RV_cyIuTvPopmm3cKEYmGg/eTmCiWlLZeJ3Q__JnGDIhSpevsEMDoqJBFJBzXPalVgAPvYpwXUqGEuIKBOz2D6AYGxUuKwSE5HZEtqKqDGVezMEKKza8n72ApJDhZB4Kly2DpJYO3wUA-VLRzLigPHZsTMfOALvE2PfRjRvwduFIeo2imNf1t1Gyl1nFQKW14s/dyVfzQAsN3BPg5NdQjdmiEEGRE6Q47A0I97u69IupSs", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Julie%20Brill",
    canHelp:"•\tB2B customer needs and priorities\n•\tRegulatory landscape \n•\tBusiness model ideation",
    tags:["explorer","deeptech","general"] },
  { id:"kannan_thiruvengadam", name:"Kannan Thiruvengadam", role:"Executive Director", org:"Eastie Farm",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/N5NordUc5jsoBtXA__A7PQ/M9mREdJj-iX2K0KBgPLnGhsEmYjYzhy9l2yShBid_EHxsBRKRHrFl0r9RhGVnvaRkZ5434wWeb5-ovZ-yx0lz-_-o-xYCsulCBKW7c_hTPFoFskKLjizd0sNED5jn8HSES625UO6Gs_14JK0HQxcQTNSK6CLZORz3ArLDi-KGOQ/ZWE3Jg-60ezGkUlUJYezF9rDdgLIDJnQhi2ZRx-Eqwk", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Kannan%20Thiruvengadam",
    canHelp:"Getting over starting trouble\nPitch deck\nStory-telling",
    tags:["propeller","lifesci","socialimpact"] },
  { id:"kevin_kelly", name:"Kevin Kelly", role:"CEO and Managing Member", org:"Civano Advisory Services, LLC",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/MG39ZSTy90U74W7VFLl-6A/asxpmP7EVUh1RPjpAUWwgQIP-8vE-94X3P1DFkRA_4Sdwiwj8RRiaYYtbx26GCgltqmIFLPjGPQeDWe9Wkqq_DeqZWg7zV95UnrnH4OgoDB36qNn7jF0u2Iyqhbwi5-qmMWPKm0xjZ5jzR96rpRmAsh39yeq81zBoq9qc4_QgZ4/FbtfZNf-gsqvMHGGwoF57NmeLf3Bs6TBV5AlsReQzMQ", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Kevin%20Kelly",
    canHelp:"I can help with Branding, Business Ideation and Management, and Wellness Resort Development, Operations and Programming",
    tags:["explorer","lifesci","socialimpact"] },
  { id:"kim_wagner", name:"Kim Wagner", role:"Managing Partner", org:"TBGD Partners",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/9-MlVkmMqx_zfaEE-ynsCQ/uZbyuFvxsARyClJa6QS0y62TDnBHNjnZXEbvECK-ZQiD0vFYjmtpX1pm7EGSa5A_tAqxv8ydY3Qw0zjUSGRY77TBGbwv_AlM77COIXrfUndOirxcY60ZxQVMSSi8qQUMTq4VAf4Hz2pXYIOlU1fnqDvV7LKEK0L_D0yFS3UsUBQ/npxFyIvaaKQpmL-XS0HyBR-tktusPWLXfwtnuielvWw", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Kim%20Wagner",
    canHelp:"-Product Development/Innovation\n-Operations\n-Business Model\n-Pitch Decks\n-Strategy",
    tags:["builder","propeller","general"] },
  { id:"leif_jentoft", name:"Leif Jentoft", role:"Cofounder and Former CSO", org:"RightHand Robotics",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/NBA5DmnL4FBsujKnjz74Mw/LWwu5T7f9rNIcsSgUgBdtr6509Airspmvw1VMO-qKSp_6euNGPQtk68eNwhpkm9MQ55I5M9-0-tiv0_QiobfE2HmygGSXafuDXS_Q7esQTF-UT45chAgvOSVWpd1BdCPSVV6nF2UiPoZPGrmwCp54g/1Q6cNYfwfAEgyzQebNspJaGOjWXeMJY_32f0t1pVYAg", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Leif%20Jentoft",
    canHelp:"* Early Customers\n* Go-to-Market Design\n* Pitch Decks\n* Scaling under Practical Operational Constraints",
    tags:["propeller","deeptech","general"] },
  { id:"mariya_filipova", name:"Mariya Filipova", role:"MANAGING DIRECTOR", org:"4100DX",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Tv-Ph8RxHSW4-pzvajG4dg/CH8v0J47AQUvN19DCdX3OyfMN647wL5FwN8wQ48bzGgN80JKEPLFf72zCM4PRwcG8qHX0TL0c4BIMmXEIeMRktYFp3VWFN2RE71Pm1tKTGbH8eZQFeug4t57YnJbfjGiYXwQzSQI3MKcHOc-FkQmOUkkXtT4GjeBotdHzgarxwugOHbO_wAnmGKX56NU4mXA/P8ca7OwAHAaPQ9pv_yxUN9J8cojRJV1ICwdFrKUA2Ro", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Mariya%20Filipova",
    canHelp:"healthcare value prop, fundraising, business model, medical dental integration. ",
    tags:["propeller","lifesci","general"] },
  { id:"moka_lantum", name:"Moka  Lantum", role:"CEO", org:"CheckUps",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/TzYzCpfWT7O2xOD4vB726g/oqskjde45pwwelPBtiMZPI8hhYhDJqxx0MdeCBN6Xc-fIqaeJkLbZp05lzYJGVSz_yis1a7oVVJVJYzWlHf531zwzBDS84RB-9dUJcD1OI0z-nwXpAFyNzgKMEZ7JylHwHa76OdoxVopOqTHMd560P9CixjKIpoGhY-7hZ4bkp0/mRlqJdRTk3JCu2LlHkvi1c4drxFfGwvelXMAGm-N8xU", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Moka%20%20Lantum%20",
    canHelp:"Business model ideation",
    tags:["explorer","lifesci","general"] },
  { id:"nicole_black", name:"Nicole Black", role:"Program Director", org:"MedTech Innovator",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/AZaPiy4oO7L1VEtpstczwA/0Y6cvk7LGSmTtBeetKBisfk4y63ODIv_XOvXOsA3nb6NheSgCWItqpVOUfK948a6wGaiI5_UwHUSb8DS9YVRGS2VgciRFxr5oO-ENhhDVg1rB0GSOgXR6HxUtOMKB6sU7A3uUwZxvje1KQD5qhHrMpHk1zCi5mnPPon1TnN8vKU/yrUpVpa9sQEPJcoYZQvdmfeTzqKGgmKbWZp3T0vnGOE", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Nicole%20Black",
    canHelp:"- Pitch decks\n- Value proposition\n- Customer research\n- Funding types\n- Team dynamics\n- Physical incubator spaces\n- Key Opinion Leader / professional society engagement",
    tags:["propeller","lifesci","general"] },
  { id:"peggy_hansen", name:"Peggy Hansen", role:"GM Contract Development & Mfg, SVP Quality, Regulatory and Clinical Affairs", org:"Regenity Biosciences",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/42JNWOMdxYPvTt6aSpGrGA/sotp-Ck5zE2G2V_xMTNsV-tjgOGsNmgNAZ5DrDMLKz016DsK4QOWsizMrZpHq1yNU0B9ax4FW5U3rAsyyZhIiQCqLHBHUqg_Om-6BP9tv9snAg4OM5-whMPYg-XwFMS0NtLFL4ek6gZI-lNChD5E0tS_aMmyOvijibYINbG4zB8/XTXAAuVRtJMSrD7eFORaDB0m_Cos4PfkYwOXccv6Yqk", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Peggy%20Hansen",
    canHelp:"- Pitch decks\n- Business model ideation\n- Product development process, preclinical studies\n- Regulatory pathways, submissions and FDA interactions\n- Quality management systems and GMP manufacturing",
    tags:["explorer","builder","propeller","impact","lifesci","general"] },
  { id:"rebecca_weintraub", name:"Rebecca Weintraub", role:"", org:"",
    photo:"", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Rebecca%20Weintraub",
    canHelp:"",
    tags:[] },
  { id:"shalen_de_silva", name:"Shalen De Silva", role:"Managing Partner", org:"Slayer Consulting",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/48T2K74DIcEWI9ESHbcLmA/_rIP3-VN4BYScJ7vBgb1sArzkbeG17bU9-EBwDXRvIP_eoywL_WAOpWHvsFU5EYytpOR2fXuCUiMvdJ3SYqXP9pIYQBSO-YZv-_PRPnH7yApgLMtGwm6q__hYcyaWRxqUcHyuf23ctD32aqUw6VI2rYc5UdptAN-qUYrKL1osxB6btbFXnHTYoRlSw8eWe6SmaGnik-IvfQIMGrZbOpaOptmp40vS8svZJ1fjLOsc2k/OomRQDUxu-2lSccCsTG5h05TZirxdI48UZThvi5frpw", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Shalen%20De%20Silva",
    canHelp:"Fundraising, pitch decks, business model ideation, go-to-market strategy, validation with specialization in government funded healthcare (Medicaid, Medicare Advantage, and value based care)",
    tags:["explorer","validator","propeller","lifesci","general"] },
  { id:"shikha_anand", name:"Shikha Anand", role:"Chief Medical Officer", org:"Casana",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/DqYszr7yphNJZ7nfYkNC-A/zLuxWLaeYV3jgoGaHZCmIIHJ34hDCkKFpOJDxL8ymstWDfhSaYP0Wn1AyfpxUfEr08XF7pdzTthbYhYAbxRsMfEDveguRRHENZL2nwp4VaRlZFORYaRyoUaLfWbptZhR0UHY5r5CDA8NcRUIOKkfWnYIdNXitZuq3CrVMtP3oTE/Cpufj-46JqjoVhJ1DdGGU7vsfPRzl2riSR-OGgCRAqQ", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Shikha%20Anand",
    canHelp:"I can help with:\n   - Healthcare go to market \n   - Data and analytics\n   - Clinical operations and workflows",
    tags:["lifesci","socialimpact"] },
  { id:"vanessa_wilkins", name:"Vanessa Wilkins", role:"Venture Partner and Social Impact Advisor ", org:"Future School Lab",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/cBxtTZvtvfEl9VDNBmByrQ/F0MWS6Bj6E-m6ynEWvqzCHh-67h1TgGN-6oR-MNvUaaYz3xFnOC4KgZmugyGZBMO-saU4EVeqXwgTkepcgaj6B7vrnYFlVpOLGKYbXyFGwiDWbYLzM-Jw-fOcfd89bsvmt6Zq3ZwIIY14P01Yeqn2XG886Vhb6vuPo-0axNsN8HTkINoNttyNBx6xgKEvGZe/N1fbhT9NSORM1LiL0bVJ7A_n-vcetCJa6EpQvpnf9_I", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Vanessa%20Wilkins",
    canHelp:"•\tBusiness Model Ideation (nonprofit, for profit and everything in between)\n•\tPitch Decks\n•\tPurpose-Driven Ventures\n•\tTeam Building\n•\tFundraising ",
    tags:["explorer","builder","propeller","impact","socialimpact"] },
  { id:"will_hunter", name:"Will Hunter", role:"Co-Founder", org:"Building Better Cities Collaborative",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/2Sf3ewFBDTlNPIvFKgAKlw/qx_2Uix4e58I6oHNq02ou0AlYTYneIcurf4BtF7RjieL3cKHZtn0XXspoZy1TyBcPtf_q9pXpJOND1FJDxBCrSaZR3hF1xR1QCpXabQJ1S87P2AzHRQ_hCg0RDGSeb_xu2RE2yopDNYtL9eTxyJ3bOfkdKmDHgQSVdnRHgEN4ZRhltTsXkFRO0-ZnmnlUjYy/qxGlyI7xKKLkOlLbbHox_QoF3c9vQnKljXh85C9y3b8", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Will%20Hunter",
    canHelp:"Pitch deck development and storytelling\nDesign and brand building\nVenture ideation and strategy\nUrban innovation and real estate insight",
    tags:["explorer","builder","propeller","socialimpact","general"] },
  { id:"annie_garofalo", name:"Annie Garofalo", role:"Co-Founder Relationship Expert", org:"Confidante",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/qvkb6ZUYgBefC7bO0wHvbQ/Lr4bHaOJ1IfECDXHVwlIp_LLN2Mdts8qhltXiP3wFxUC7ws9MksUiO5zhrYJykvg-yFbA8UhnmuQ4Mowf-PQfYqc03wAY7XtjTXpjJ4T5jKbf4MVmbUwMzyjXEednwp5U73COHdIIcPhiYtlyzs8j8WRDlY_fgkI35X09FhKjhLMUPGo8Zd3_BaBdX3VA4Bs/Tf6mdCGs3Ou0pO6OEvCVfYZh3JZeOx9H6iUpOO_-t1k", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Annie%20Garofalo",
    canHelp:"- Co-Founder Dynamics / Building a Healthy Founding Team\n- Co-Founder Search\n- Partnership Agreements\n- Shared Decision Making\n- Roles and Responsibilities",
    tags:["builder","general"] },
  { id:"baker_library_leslie_burmeiste", name:"Baker Library - Leslie Burmeister", role:"Manager, Research & Development, Curriculum & Learning Services", org:"Baker Library, Harvard Business School",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/IavzWP-CPhWZQOH19frAbA/4N_bMdWNTWIkx2iaaNORBdtkxIXwVS5CoY1IXHIutUxyr142g5pZqJbMiGbsHeisdv_StmMwmyEv6Nfh5x0vDOnDCMl-ICsyeD3h3n2jReA5oaS25l8hcqK7b92MlLrtlkpbSVvaduTVPFPBD7TYEszGYweW25_JdWWRpwEQJ2o/8VTw0Bx6PJtS9g-D-4Trt19D2ZGtHquIK4wy8p1j93U", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Baker%20Library%20-%20Leslie%20Burmeister",
    canHelp:"Research an industry, company or market\nScan the current environment that you'll be entering\nIdentify competitors, collaborators, customers\nIdentify potential funders",
    tags:["lifesci","socialimpact","general"] },
  { id:"dan_lilly", name:"Dan Lilly", role:"SBIR Specialist", org:"Massachusetts Small Business Development Center",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/vx95TInNrMi5U4C3XGql_Q/STU3jDkv8eei50k9IRKLWMClgsyDPv9cAGLJf7Z5dCJAKg0XsudYKHeCDuEGzeGUw8dtV6i-oBVYb8wNUQA746wqRWFwcuguZFxZdbb5QWcZRs9N70G_Cpczgcj4qfN4KXIIJ2xkVt7OikcVarLuOsMkPxbqKkDV66IhFmYMLEM/54AEWz0u1UeC8dHdH2rmv9fY3O-5z6Wdb-GLhQrBarI", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Dan%20Lilly",
    canHelp:"SBIR\nPitch Decks",
    tags:["propeller","general"] },
  { id:"david_garcia_lou", name:"David Garcia-Lou", role:"Co-founder & CEO", org:"Amigdala Boston",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/c9jgkmBeWAOG5zkmu5XeAg/IBGwjoR_7gYjkxOg_Rn_Uj9-W_ibcPiZtrHwkeMgS_DPZvhuTaXMUDnCZ11H6EY7hCczVEfHlRczqIWgneSTIF7RaC03PylfXedZHFn4PCaPxSaVa8dTEElzu_MFklaAj_ir8mtPKcj2VdAvQXe9NWbZRnND-6FeJg0qrq2TkA0/aSU8Nt5aAgDn806_MHynH3QVjBjRoh9xJzoDc_bDURY", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=David%20Garcia-Lou",
    canHelp:"Medical device development and regulatory pathways\nDigital health business models and strategy\nGo-to-market strategy for healthcare \nPublic health value assessment",
    tags:["lifesci"] },
  { id:"joe_faris", name:"Joe Faris", role:"Founder/CPA", org:"Accountalent",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/YgTUCyXtBuEKFdTXwKDBsg/f-TdEtz-CrGwIlUwQEvFBgF5if2-snXTzlH_heFn8ZN1-e4-HahYi4T6ck66R2nVl5HuzybZF-1phoUPkEinjxyckRPWNOPQelgKCE2f9Wn_v9JSQnzBxTtQKbjVB_XcmYJrXOKVRyqEkKSCYKonE8ysXmMB-etabIVrCuWxa_A/lPHbSbVbfqbiikFG4R18-vgSQF1X5KYemG0Y9YTZX_c", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Joe%20Faris",
    canHelp:"Startup tax issues\nForeign founders tax/immigration coordination\n83(b) Elections\nEquity compensation",
    tags:["general"] },
  { id:"kns_accounting_sebastian_malat", name:"KNS Accounting - Sebastian Malatos", role:"Partner", org:"Cherry Bekaert",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/sRf02d67Jg6sPPt3OyP4-A/6J-lWKnU-kXBrsxe2sE2MW0kHhZ58InZXML3Xmi1xW5RWDDBSFJg4s4EEWudWmjxTle9KixGANvDs2_ZO3Dowz2Jy9PBR70YaIXY7UDmvx2XsjEwRF7x-05rHBuR91psakN4Iy8QF7VsXLQnnMQY2Q/mpBRh3XCVYLmx7F3H1o72FNiGw9qJ6xoARoQBNOBnpw", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=KNS%20Accounting%20-%20Sebastian%20Malatos",
    canHelp:"Accounting, taxes, start-ups, new ventures",
    tags:["general"] },
  { id:"melih_arat", name:"Melih Arat", role:"Founder Coach", org:"UC Berkeley",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/XsCj-QMShDkJqw9skZg-1g/I5H4w42tDxscAFzLyeP3CJgq6095cwnctvi8KPIRFkTpdgzfd5XKw3QSUKERmSKu-szSfeThyAr-Pc95PaX5lKtgYHwpKx41h2d8QKGv6fxu5Y1yKPGyFSL7xzm7Zi5pjReyEbwPG9ICf-3WQ1eVmLX9EXoWSI9U6TjHtJZV1Bs/wFcI-TWiboNrmpQBQHVohFUUFClx56Y-zvC0hldw74M", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Melih%20Arat",
    canHelp:"'- Turning early ideas into structured, testable business models\n- Customer discovery and validation (problem–solution fit, real user insights)\n- Clarifying value proposition, positioning, and go-to-m",
    tags:["explorer","validator","propeller","general"] },
  { id:"mitch_goldstein", name:"Mitch Goldstein", role:"Former Chief Financial Officer", org:"Commonwealth Fusion Systems",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/25pfoh_KrgSWlK3C8O5u9g/riCPzh59gBhhhsBNzQ94VnSjxRR4JHP_ZXa5iOkFc6_Jtrj4pJJTLwiDCLhgYiq49j9eRjDbPaKqf4x1st5yzN7c7YRPps95353HEevWhfJT1ublY7nWGvjKdg9frpG9QTFPzhk9SyXYraNhnKckXfKemWQPceDrWkZyopfTKAk/cJfJinnjqZHzeShKqaVKQ8tJaxsvp8AK2s3WxEbKyzM", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Mitch%20Goldstein",
    canHelp:">  Making your value proposition clear, setting priorities to achieve it, which turns into a solid business plan and budget, with clarity on how to execute the plan for how/when those priorities will ",
    tags:["builder","climate","socialimpact","general"] },
  { id:"ohad_bolotin", name:"Ohad Bolotin", role:"SVP, Products & Strategic Partnerships ", org:"Wix.com",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/ceeOC3yPcRoYNNGfo018tg/RWWnIL1HMqiXpeZ80_89C0aqmGAcGBy9VW76ekanOk69UeyA-efoRXWHCjJh0qaej90AsauNXCXS9GM1m9x_QjOz8I2JcTbwa-w3xIvbKtksIUXdbWxPSIm8lYwj8kZGdHo3dkmbg1hWXGoXeoEmU0-btBey67Rxk6EECVROrKZtY2uqvy9S4M49Mn22IlkU/cHbdav-D9e92DCHvLYKuMPeCkoGz4XQ3sj_POmg81fU", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Ohad%20Bolotin",
    canHelp:"Product development\nGo to market strategies\nBusiness model ideation\nOnline presence\nDigital Marketing\nStrategic partnerships",
    tags:["explorer","builder","general"] },
  { id:"scott_smedresman", name:"Scott Smedresman", role:"Partner, Co-Chair Global Technology Group", org:"Brown Rudnick LLP",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/1TH_VXOGLiQVFWjf9YPr2A/Rq0AuFrO8neCRC3PnhNoWoUYiCWvtD1obWtiteJzkvMb3O9LXK8reBDqLGG7b0UWx1PTD_Y8hUZMRVltGcrh6yASeUskbkr-KgchnIqV3tdDh-S8d06RGQIMby8x2zUyB21Vd7nopqIird5cLK3uy2NRjBfG2qgKISwy6A4c1iFFjK0Hs7e8Zylxj9BcQgyN/EpsOaKX3hpKietSVG8gCsCKa_YWPKs6xLasa4r-ZUBQ", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Scott%20Smedresman",
    canHelp:"Early stage legal fundamentals\nFounder equity matters\nEmployee and advisor equity\nCapital raising (SAFEs, Seed and Series A, etc...)\nM&A and liquidity",
    tags:["explorer","propeller","lifesci","general"] },
  { id:"sophie_alcorn", name:"Sophie Alcorn", role:"Founder/CEO", org:"Alcorn Immigration Law",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/FdgScp-OSdf2wWnNAdICDg/UUTcs3kALtGB9_wXpmIIBRYdVCEGOldzOykb08ER5n0Uf9oogq9bgUWgh2tQt36eVPyvTOyHf8XdDpHo3I8QFuQtpGc7MDQiY-Geqwvm_g3t6Y0GfANUlZXV-xyJfhZ8aCFCynRdZitN9Zzsv86tbWPdbmPFFITjY_wk4JyIoUflgomrRCrwbTxoL2uyw3C_Gu5CCd2PhemgAzmR8DRU5g/j1KtpApDdTtr-NnbVL4lC68E5SreRwxpjGuQUcUCTQQ", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Sophie%20Alcorn",
    canHelp:"Immigration Strategy for Founders, Founder-Focused Visa Options, Startup Structuring for Visa Compliance, being a bridge to other resources, and serving as a trusted listener.",
    tags:["general"] },
  { id:"stephen_hou", name:"Stephen Hou", role:"Vice President & Chief Operating Officer", org:"American Patent Agency PC",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/7moRUCBhqWrgethNT3D0Hw/dMLomgoT_qyIijZnvwg3476xfN3TzVUBf5q_Db9vROXMxhVsKgTs9RI6Kp3PmgwCXK68a99e1nfNuMQqlqyEsE_ikIXdzS8hDRMCXlwEnjtWvwnB5os6oySDlKjHgyr3jNaXZiBzyMOYUHgVoMD4SpznPbDNEpr7drLxvCPQiJU/dQGUpBrDov0JQn1o5ElVdJSjy2H5qd6cLcK5kyX_KqM", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Stephen%20Hou",
    canHelp:"* Advising on patentability of invention and patent strategy\n* Drafting and filing US and PCT patent applications\n* Coordinating non-US patent application filings",
    tags:["general"] },
  { id:"stephen_scaringe", name:"Stephen Scaringe", role:"Former Founder", org:"Dharmacon (Acquired by Fisher Scientific)",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/EJPa4o24vcKC6cYpN8CqHQ/YOiGekWSiYibEWk5Tnq9LeVXXdqA6TUBrxEQXoRTUGbDafj5YEdAFuNnJAnKbF1womqzhxXk4Jr4pLNA7sJUsAEG_8fhVIm5lv3EeW_Dm3G2ymXabYnjruv9i-RZnCnUHHdDXQnqZKUknuRyK7UPoUhqIkdVjSr77jhjp-ZxpYI_LWpVcXWY-Qyn74L677mt/BCaAWGb4--4EyNOeVuq4SFigJqhPZ8mvagFtmYiM1HA", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Stephen%20Scaringe",
    canHelp:"•  Interpersonal dynamics\n•  Strategic thinking\n•  Problem solving\n•  Decision making",
    tags:["lifesci","general"] },
  { id:"greenberg_traurig_chinh_pham", name:"Greenberg Traurig - Chinh Pham", role:"Shareholder", org:"Greenberg Traurig, LLP",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/44mF6mV1XXrhNb8Jt26YQg/wB7TGvzSrUAxdicNXtiLG5HOlitB65iXy9BuahJ4MNweRTXQH3MIC-8tiQPOzx9w11htFxfagG_t3TFO9QVpF0CJmxWZJDfm6Re6DPzYQW_QGPea99wGsfR0S9tR5MyOJlHtRiLwEgPmqMX2EOui43NrDrkgR0XvWxYQar1S5Zw/-XVV_5nkKmqWARSkCi7pVNjTmpno8UNx4ToFneeksRM", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Greenberg%20Traurig%20-%20Chinh%20Pham",
    canHelp:"Legal insight, pitch decks, IP strategies, patent protection",
    tags:["propeller","lifesci","general"] },
  { id:"gunderson_dettmer", name:"Gunderson Dettmer", role:"Legal Associate ", org:"Gunderson Dettmer ",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/5aknYtsHcTFs52OlICMvMQ/MbDcq6paSffqvvAsVrkDNpvLJ7zs8axIFTGYCGOaLPJC5E90B6TqOTUjEKTV3S_b_OdxZzquj0w6q7etBa9ghOz_paJeDQS5lv6Ph3RsA4a16tTHPjhumb4HZr48KSA99_YoLFuiyssom_Pvlm2kJC3pHJhbX7HMvIDWo-EZU2s/zGXOEYgtpzJr2imOtUxy41AUw4lGcI2P2XOZvZYHy2s", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Gunderson%20Dettmer",
    canHelp:"- Corporate\n - Funds\n - Tech ",
    tags:["lifesci"] },
  { id:"tani_chen", name:"Tani Chen", role:"Shareholder", org:"Wolf Greenfield",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/ve8mEyC5nIHy_5P8o_E1qA/fBabd-HDsV1tfSvUtu90cWURFjEZ-10denGpG2UJwL0SXVhna44XN0hPL5JcN2A4WYxrHz08NLGk5UXXYFLmluBQ3iClmUXm0jToZCdrhi1hm0tnvusqM8AZ_m-n5DotoPLogqZYBDBI_tYWvkZObp06w15pyYlu26AeqO8zki0/GpP5n3Dr2SCRcXPWg2bjI3TiLYfhLs_XPwtizf4dA5U", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Tani%20Chen",
    canHelp:"- Information about patents and intellectual property\n- common questions on pitch decks from investors relating to these\n- identifying business value",
    tags:["propeller","lifesci"] },
  { id:"transactional_law_clinics", name:"Transactional Law Clinics", role:"Director", org:"Harvard Transactional Law Clinics",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/LMAT82mXHwJcEqYILrzV4Q/zeGtafo_dpcyt5F6EX12c2yt-f-jvvt2nVYE70DjCWgB82xXjByZd6Ld1YaVplvz9gUvt3RYgTQk6f-z9jkVZfM9AZJS1JFqERwwvFk0uFI9dksPV2ihodRSxCs32c0QHrYk8DBqvTbgr0X_bxyy8oal0ElvM_JvuNl2WOIbfWY/4QWWTLkC8CeQPM-3Ob57q6ublvOi-p5WC_KXck7CEz0", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Transactional%20Law%20Clinics",
    canHelp:"Legal questions related to general business, corporate, intellectual property, community economic development, non-profit, entertainment, and other transactional legal areas. Please note that we do no",
    tags:["community","socialimpact","general"] },
  { id:"wilmerhale_avery_reaves", name:"WilmerHale - Avery Reaves", role:"Partner", org:"WilmerHale",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/_oq4YDfozt87_erY45nTfQ/bshQ4addSIDYXov7spfdPGJcKazYaADlndCjPnxsXQCzf_dnufCv5p1VRAMlCESAh3W1EMa_XFe6FXvRXGeEnYZrwGHvmWkg0gKs3HCz0zEW3krbCyVN0gy4OvNJE2sC7CeQap7v6JZFHkL7Fo7unhOUjTEZGy8NnFl70bKSNfNwzpaCB3YKyCy_lmZb1ksH/qvUnPXYoAMFF_OJ3TbWYhHUYK0aVRLqbaWMc5Au_Z0g", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=WilmerHale%20-%20Avery%20Reaves",
    canHelp:"Legal issues startups face including matters related to incorporation, founders and employment law, fundraising, equity compensation, and corporate governance.",
    tags:["propeller","lifesci","general"] },
  { id:"wilmerhale_thomas_ward", name:"WilmerHale - Thomas Ward", role:"Partner", org:"WilmerHale",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/6kinLBHB2P4eobcaLqAZbg/Psxn49fgFRjS0ad3ZPGzrWP9mdhAF0rW8ZSdWhNaLtKY77HhF3HutnEXW8opECbj24Q9UEXvvKkiZJzJTgH3ooGKS0uPIn8xCUBxoNv4MPU3eYgo-ntGsq0NydkmBMiSp2CQ2xLSp6FO0AeLFI2hOnhkZc9e3YYdYTkwrJ51EmY/_ySpK2_1FUCzkdPRqqYUTodu8iCXIdsIoaotzzdwLWE", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=WilmerHale%20-%20Thomas%20Ward",
    canHelp:"-- Business formation\n-- Capital raising\n-- Equity compensation",
    tags:["propeller","general"] },
  { id:"andy_knott", name:"Andy Knott", role:"Member", org:"HBS Angels of Boston",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/7F9mJIdCAIt9o_rc0NQxUg/Beh_6AilJAVWbkmVHuafRQnb2qRUER7zYO2G3m3UBLtZtft5nhhsYTLNaCVmsyb11-u6bHT_-WJNOzxYjrMa1urzJC8TdliVwaflumqiacjgB6ENc7zECvuAld7J7-Jzor0JGIxvb1_jlRBSVX72bsDiZPYzxPzm-6HPYqDVihc/IH8sZp2f9D5rbQDRnNIGLs6R0Ip9ZS-wNJenItz-7lY", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Andy%20Knott",
    canHelp:"Pitch decks\nBusiness model ideation\nCapital Raising (pre-seed and seed)",
    tags:["explorer","propeller","general"] },
  { id:"annie_ryu", name:"Annie Ryu", role:"CEO & Founder", org:"jack & annie's / The Jackfruit Company",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/S-DjKob0mmg4y7aHiPjvAg/GU2Z-1W7Jgsp_HTdzm3Ij6ztl-KB3lvg_uN0F3g2uQbifiD0QMW_zbKT-fG5ilL_WpRksDB24q_P8x9NaqTMBkG3fQxgonYCNSenW0upWr70H6JQI3uXyhYgS06n5g-WJi-LeFDQGHM4w_uGpYy_8_KpJ-PngncGKioPXFvXsqY/ZHE4EQ6SwJdUmUGrVL0z2fvAnZQxLfXe6D9g401imNY", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Annie%20Ryu",
    canHelp:"Strategy & business plan development\nBrand development\nGo-to-market strategy\nGrowth / sales acceleration\nCapital raising",
    tags:["propeller","climate","socialimpact","general"] },
  { id:"drake_pusey", name:"Drake Pusey", role:"Founder & Principal Strategist", org:"Volition Project",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/KjkD1DhiC4P8-1iC4IjnxQ/VoqZ0JD4qDrSJJF1QwaRObnJ89tFcMcg5Cek7eHeyh42Z875Y0R7Q6FMdGAD9TgQn_R6F3mOkts9zinDb1InH2--eUvUvbhjEsL0B_sqhXFzkgnJ9KlxsEvPswSBf642oR5_fZkfdCOMd51plkqxOW1QkzFn_Uxu4KT-5FBHQ1E/eREw6mhEbuQCidOKkdzj5fia9T5ZUn315d7DJJAs3Wc", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Drake%20Pusey",
    canHelp:"'- Brand strategy (purpose, positioning, differentiation, architecture, etc.) \n- Storytelling (audiences, focal points, value propositions, getting your story straight)\n- Offering development (product",
    tags:["builder","socialimpact","general"] },
  { id:"emily_halpern", name:"Emily Halpern", role:"Founder", org:"Id Est Consulting & Board Advising",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/iOdJPuPplofRSDs-hmlWpQ/0HjCtjEfcw1O8tKkr0BpuQhcIe4Nv2TuO7z-s7Sdqt5sp2h3uCj4Zkw8zJjcNZzN740r0UG3wn5xyOBmDS22R3sH24lHtA0btgPlsKYGEG5UkaHPcRk-7nX0j36ZPAn1vib3LHUHMvLILJSHVJ5aSAO5v_3Zs4W44KkrTdUb2mM/SXXGrFj8A5Lwet-mjwyW0Z3tvNWdgkLsBGAO-4F4zwY", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Emily%20Halpern",
    canHelp:"I can help with pitch decks, customer and market validation, performance metric measurement and communication, business model ideation, sales and marketing strategy, spend, and tactics.",
    tags:["explorer","validator","propeller","general"] },
  { id:"ilonna_rimm", name:"Ilonna Rimm", role:"CEO and Founder ", org:"Rimm Healthcare Capital Advisory LLC ",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/DQediZcf03Oh6h3YkKhJYA/2wpr_Sdi02SXv9_6YW-jyU2SSer3-urDxhzCHekRVojIKMqvcBnqDcPuJYWK-v4i8_ivtDM0KnrIaT6SjZWfOoY5QNecfenZg0RuP43sNy-xhqXmltOk8yHbKOUNZnHzgN4xEIkC9G96Tlo3sx02FVWL20GtymlQRESyrPxIeh3NfCrsWoshgZVE_7YrWpiP/Fm6lUSz9r65DZep13a5hrbJRWO2-a6c0KImZEloKKs0", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Ilonna%20Rimm",
    canHelp:"•\tCapital raising\n•\tPitch decks\n•\tValuation\n•\tInvestor insights and connections\n•\tScientific and clinical knowledge ",
    tags:["propeller","lifesci"] },
  { id:"jeremy_blitz_jones", name:"Jeremy Blitz-Jones", role:"Principal Leadership Coach", org:"Peak Leadership Institute",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/v93wjajyIB8hGKRWFftIWg/rsots_MkNsUUKLHoBLxaGaBhlGkqf5AMsS2zr-wW8lMM81HMcLpaYG_95NsM5qBQ0YWaBq2duJITivtQ6RCArq_YdhpjhDojgcHn-ekMEL81DKGzNjFEIIvJ3a5HfniHABCbsULfHmAbHPxgAYPc0ggLzfOXHRjNOzgRn0Qal28/oATY2kGj-aUPYQgFTMZwmzqEJa6yRwTkGgsPmu00kJk", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Jeremy%20Blitz-Jones",
    canHelp:"•\tstrategy\n•\tbuilding teams\n•\ted tech product development\n•\thuman centered design\n•\tleadership development\n•\tstress management and resilience",
    tags:["builder","socialimpact","general"] },
  { id:"john_reichenbach", name:"John Reichenbach", role:"Founder", org:"HBS Angels of Boston",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/a6PKTl15lcftdtNxmoWutQ/2Ln5sXl2sT8eaFpUApHsoTNeFV5HlJB3r1LUBYN0QH8HoSCojRqN8zHw1nKmSMkUiODWhcNNxF23wkIfBaLRc6hE52LUs1BSLaPy4dSbNOzwSA2WDU3eN4CcvRSz-BO-RidF05xT1sMNvf5mcVOgqa0rjdevSI_WFbGUQbUATPo/wM1YfU3lNcdmftB1J3Li8KJhrzgjTm22k0S-_MUReD0", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=John%20Reichenbach",
    canHelp:"Pain Point\nPitch Decks\nBusiness Model Essence",
    tags:["propeller","lifesci","general"] },
  { id:"john_williams", name:"John Williams", role:"Chairman & CEO", org:"Williams, Blanchet & Associates ",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/GbVQP7StJh7Dj1sZu3O0Eg/wGP2Ge4A44EfkJq_FcLjMs0BfJSEMzCRgSmsMFYI1cPD7Q3a2_iWtCgu09iTzVxIO0vdTFG845nhTf8RBqG5ilpCzNScQBxX80hEdQqh5MMn9NsknZR0VAuxzEhXyjL5APP-rYp7qtLKk3QtP3KNSZXG_tsgt348qK1BENe-WcE/mHDlvNwMnsIHeL9frM6UHw7SwwaJhLwJI3PaOBCFERM", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=John%20Williams",
    canHelp:" I can help with:\n- Strategy\n- Marketing Mix\n- Pitch Deck Critique\n- Business Model Ideation",
    tags:["explorer","propeller","socialimpact","general"] },
  { id:"ray_lee", name:"Ray Lee", role:"CEO, Founder", org:"Resix Robotics",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Ulm819vOlWQZBHL846fKrQ/DbgEwoMf4e5VJgVX4PuuST_HkBWvVqJ97zdiiSS0lIP6xv9mvC7r7P4FS0EF5xW6xGwMfmU51nMbez2h7AEV8y_UtKp9ZGIiO8k12PIf-iMKv7LiKOoLBIaeHmXEwY_toQgvSRzFTBmnBXiQCKYhnw/7KIsOCB0ilNWoWw3Yk2XAlGGcEOEEo24bjhWCSdFuWY", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Ray%20Lee",
    canHelp:"Turning Great Engineering into Successful Products\n Bridge the gap between innovation and market success through product strategy, customer focus, and disciplined execution.\nStorytelling, Positioning,",
    tags:["builder","propeller","deeptech"] },
  { id:"shamez_kanji", name:"Shamez Kanji", role:"Former Founder and VC Investor", org:"Fidelity / Capital One",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/uzdorL6zuo99U-nc81Nm9w/pWiCsx--yous1QjXqVzUp4ugJoEWJzwsesU5tbNj28WgfJam1KobtuhUQFQJhwYdVHfcq01g8oqFDSXSM2l2uDzqiz49iBZd97ZKenrsLxxhM987v5M_NpwNMjgY8npER1V0V9nUyyCAAzL7kgpDOxmKJNocIdqsX77xB4iCt5s/lNqt89rcli09m9tGtV5wPXpCsEdHGsEcNa6OFuZFjF4", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Shamez%20Kanji",
    canHelp:"Business model ideation\nPitch deck review\nBusiness development strategies\nFundraising strategy",
    tags:["explorer","propeller"] },
  { id:"stephanie_sylvestre", name:"Stephanie Sylvestre", role:"co-founder/CEO", org:"Avatar Buddy",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/CkvAtzw7BaE6rE8AfZE8bg/5wVoBhcCCzq3itU3P5eovboSaLGE5szn24dsQDhUleeekNzVTJ2TYNuaMUNGsFnIfQmoSXoc6eozqOOyi91NNyTZ4Y9EfK21DtLWVMsXfJx9UpEiWJsY4cfHj1JUaSCCGyPDaMlv9qkTeNQSAq7URDAXqXx2JvTi2Z2-BjaZYmqEm5IwoM9wBuUPU0-UQXSu/xyRKFo4e605885Ml7AfHDZDuUPxQYwwBfoWzvccKcyA", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Stephanie%20Sylvestre",
    canHelp:"I can help with navigating running a startup\nI can provide technical advice and guidance\nI can help with understanding AI and its impact on the world",
    tags:["socialimpact","general"] },
  { id:"tem_lawal", name:"Tem Lawal", role:"Founding Partner & CEO", org:"Ellum Leadership Advisors",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/JC19fWN0Pn9CWmzdoFLOVg/j0wzfk72Gx4I9ZKfYMHjwWwSLGQXdpZGj0sORX9Tby8bX1TEx7KhqeJrN0Gyba3RZLSsDkfUFQug7d0LinUsxCtyOEmlaqMR3oUET96RAPnx0nB0zb7GVc7j5BA7IaeCgwxQ1Kox-YtdNaYyCLM15W2G3qWqi1sE76zoeozMAE4/Lv6V6Q4MAqjE6eDLHcL8JjpbzhVgJsdU_JTDiDD3jUE", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Tem%20Lawal",
    canHelp:"Identifying Your Entrepreneurial Strengths & Founder Identity\nAssessing Co-Founder Compatibility\nAssembling Your Early Team\nOptimizing Team Performance & Culture\nNavigating Co-Founder & Team Dynamics\n",
    tags:["lifesci","general"] },
  { id:"aatish_patel", name:"Aatish Patel", role:"Head of Operations", org:"XCHARGE",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/G4jrZ8nr4u1XPt4YzMlUew/3f9yGtOT1BgApMKWlHVTZYwso5XBhV3U9UucLnBrn9gv80F6jSGsOFbGW71IsMfpmjYQlhVxQEDBfX4LrbudpBVny8kqZt7ZK-Dgl_t9j1VVifwB2vRVz1DVroF499VFaiI8QXJ7SIL1t899gh6uBOGvWjRt9WS4fxvz0vf0pq4/b1PLoGgoYKE6Skj4oaIadCFji6wMmBk9BD4rtvyh3Go", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Aatish%20Patel",
    canHelp:"- Strategy\n- Sales\n- Founder Connections\n- Scale Up",
    tags:["climate","general"] },
  { id:"alex_bondar", name:"Alex Bondar", role:"Partner", org:"Acre Venture Partners",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/IgRdX4-aTd-yCZLAB9sObg/6brcLlEVjb3Nh5Wv2KyxuKn-RTLyrWgJZKkSosglf_kXVdBEygwidQXTHrJ_Sm086D77iJ3itDoKEE18AsIjyoab36xS5lDRbj3efA0HrwxrN5ILFvmVW9_ODzJ6DlgtS5wowFs17EhWv0KEY9OklEAa7p27v5VRViO9Dq7JcAM/13A1YOF3_830hrYL4qIo2YVC3FOJ_ZNc9fynClwDQpc", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Alex%20Bondar",
    canHelp:"All elements of early stage startups other than specific technical knowledge",
    tags:["explorer","general"] },
  { id:"alexa_barry", name:"Alexa Barry", role:"Assistant Director Student Programs", org:"Harvard Innovation Labs",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/pMmDvz1RFD29oWkc1qP30A/fynmTTcfHdiAp2yiC4K_Ey6LhOgAl6gXWcE-SjO9cVBNPGzQ6yOBV9QkAd0_0LlXhklJ9Jabf7526tg4v23vH9oCPCDy_ZFaDkAtoQfvl-vN0DiWzXkMjf0JT3n5WV9ymrgaVYBfaq0I7sFYb3uuLg/VNlnO-q_UWVp5_07pr3goqHyTFAKyLq9SYL4G2DNG4g", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Alexa%20Barry",
    canHelp:"- UX/UI",
    tags:["climate","socialimpact","general"] },
  { id:"alexander_helling", name:"Alexander Helling", role:"CEO & Co-Founder", org:"Baseload Capita",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/og4b9RurxIK_aRuX6_C5yw/uMpm2KLT6N7cefYoXXWiweafN0KGg6FjGb76mmcy7PNmHh4edyxVfMepwAR4xkoTK1wHt5IYo1BuRg-zujvp_7dAmg-b9xKY-_SBTmDZ2HeNdZxVWYKLFi-6mIa9riae9LQ2mQ91RlmM8leCmvN17YhZ4sAveN9yiqgl-6rbS3k/yeCDqj7_gCOTVyXwas-xo8Rk7J4sGbV69MSpfctPtw8", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Alexander%20Helling",
    canHelp:"- Strategy\n- Financing",
    tags:["climate","socialimpact"] },
  { id:"alexander_landi", name:"Alexander Landi", role:"Fellow", org:"Harvard Advanced Leadership Initiative",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/_an_keOkhRKhSjuFA1MjWg/QVA6duHNkcqTRQZ97jVAAIPlqVCzxyGbGXFlD4_K0L_jEt6hGTd5Jy63E2z-Yrc-Ogeveao8Md4d1quf1GDeubdeoQ2-z9NoR3ErVrVD5yS7G_uFqJ1BWjLxXgFe_uM-TrNJKowk95D1wfVq8DzjhQxe-7JTUzZdz5wZmrxrRvc/iFNwUKNKKccOj2eNZkIDzkXsD0NoG9CaEhUdsdpuf9o", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Alexander%20Landi",
    canHelp:"- B2B Sales\n- Strategy\n- Climate Networks",
    tags:["community","climate","general"] },
  { id:"ann_davlin", name:"Ann Davlin", role:"CEO", org:"Cleantech Leaders Roundtable",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/qwGQmQRc6GYJMh2NtPhuSA/BQxi1S_ktcwczTkh3XnSWQHJnDLMJf_8X0_sicnvzoeuRQTKpJlh-8V3PeH2CTLCilE6AJMSshMPIxWt_KNQ81bBITAZc1mycTJhBlO7dYOxlxMJgvIndHaEoowCWNESjvKUctMjMW0_pJ3VTL2B8OqjydPOvH-RBwc-Ap0IceU/Il0OHswfD9ac2FZQrsJjCPrE7cFjagc4ta9Hh46typY", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Ann%20Davlin",
    canHelp:"- Climate Networks\n- Founder Connections\n- Financing\n- Talent",
    tags:["community","climate","socialimpact"] },
  { id:"bev_ho", name:"Bev Ho", role:"Head of Strategy, Sustainability, and Global Partnerships", org:"The Next Practice",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/9dF5AwXz9v4dpEbt-s-Jag/iPITyjsNzMshzBssI6r2PFUOHTDorETZ7Mb0IY7MevMibbG4h1-fV51Oo96RcgBz--_Gaa9UNZe3Ux49sWQJ4B6bmq2dPig5iA9sRTht6cLB09zi-pqwyrQ6GZk70EeoCbOXEh31mZ4J_eVzGEiYUSF5acMHWJLGoabdJX8FKlo9bGzRRYYo2axtGMbjTuPr/FnOWbI6Qvc0NyadxyoIhKxFAJuKyM8brEhDuklBlhvM", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Bev%20Ho",
    canHelp:"-  Marketing",
    tags:["climate","socialimpact","general"] },
  { id:"chase_rowan", name:"Chase Rowan", role:"Partner + Fractional CFO ", org:"TFP360",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Iq5OWkZRx1GinwsbnGTvRw/OViZwmI12rQYPDGuHajI15si369ob3Knjt1UQxZIY6Y89LsXl522IxTS8vVh_KEx3_gfft4MjmzjFAA92pbaUyMSocXc_Wng9038NkOVoCJW2xPUQzkLBQdtkDyfwoIi39bLlYpN-OFy3NTI90pPPA/-D2CZTt8LRj--xyAGPGg-3QPk6tV7nNJu5Owl_lcgas", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Chase%20Rowan",
    canHelp:"- Financing\n- Strategy",
    tags:["climate","general"] },
  { id:"chris_tolles", name:"Chris Tolles", role:"CEO", org:"Yard Stick PBC",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/9sJUJznt9evTsJxQ5FCLmQ/HlTqJjAodCcOWNEdv2JBAAwE-lLy2PoDX6mDnZHPkI9I46Kacl4uQq3kp8L0XFix-peYNRyGtMfsXf5E41GDYPo8xmvgLUfPD3mavVgi4Qm4M4-kDd295VvwjJDSnTebCxNrSBAgK3tTtHB592l14WQG_CG5MymGD-VnT-6ZklI/bOjBRSwCKaErcM2kcbmv8Cq5mcJx51jas8i9Kf8kTqY", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Chris%20Tolles",
    canHelp:"- The 0 to 1 CEO\n    - General commercial founding responsibilities\n    - Fundraises\n- Sector expertise on: Climate solutions for Food, Ag, Land, Water\n- Voluntary Carbon Markets\n- Science commerciali",
    tags:["propeller","climate"] },
  { id:"david_schwartz", name:"David Schwartz", role:"Principal", org:"Oropendola Technology and Innovation",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/H3tiAChV-ZBDg5GdHv_6yQ/1yKmo2VbOKhOoj1f7g289kCEaejjM_5MxPnkd3rSn1sZWKEymg0sZ1J12SdduJegISr1BK7RZXjHwnV_Llidfw7HZtWO5jKz6uY7aJom9C8Ofa8zN4PHDTEHzXtLYwwaNbt6hRC7nY7InFxWABDlDIRom_UeUdbhA40h05zRfpo/bRXKCK6Zp_MKMVQcKiqMmDvFRdU5mXDR9VQFZ4F3nLw", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=David%20Schwartz",
    canHelp:"- Strategy\n- B2B Strategy\n- Commercializing",
    tags:["climate","general"] },
  { id:"deepak_bhandary", name:"Deepak Bhandary", role:"Vice President", org:"SE Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/zyj9tCLf20aFcqWywVym7Q/kF-XMUWbemLP9AOGrQJDwZr3ifWSoDxUOoQx5EKiHhEqP3SxoG54XINyunSfVgsbGGfMqwgQOG4_vfgs6p8X8xmcMs058rnJiEIQXln-_AEAFGxTOTVBniVof0o4BTQ9MoEB6-2h3pvzCy0sy9g9gATW57INfTrsCB0HtH8PhGo/rDT8LSLbouLiIPDeYrPEt8mJ8evPFKb9ZBOq-b-VJq4", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Deepak%20Bhandary%20",
    canHelp:"- Funding\n- Demand Validation\n",
    tags:["validator","climate","general"] },
  { id:"francis_slingsby", name:"Francis Slingsby", role:"COO", org:"OpenMinds",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/qq8Li5xZ7SNdiAWIIblu1w/vt7kbzdqdvwOosBpFMzvKp32q5v_belTV_Y-1kF4hwer8D-vF6wtnDFGc-cGG9YX_BIiUprdj6sC4UY3GohET78m-Cv-8FMy48QZuwZ_9lqLATYz0-MpSB-Q4XOx1WjYbtla2dBN_x0zuQbkE8-bw2twrjbOh-xo8nAL5fChP4s/hXb2Yx3CcfMH9t3DqwkLJ97e9Yl4muZsCZygAKBuDy0", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Francis%20Slingsby",
    canHelp:"- Strategy\n- B2B Strategy\n- Entrepreneurship ecosystem",
    tags:["climate","general"] },
  { id:"gabe_sheets_polling", name:"Gabe Sheets-Polling", role:"Head of Data and Technology", org:"Little Leaf Farms",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Pc3gsV1Qqf7Bgr-eIgPiJQ/MYZ7Xi_u8DYS7MEyDMXMhI7-r4v1oE3-Fb4qe31hgRCqAuimGPhUhDOGID_MsPcf0mhmvGjSEWLbD_K3EWxXamloXFEy3F8Y3MSGMXE8kaOB9xsd1-Pf9xv1OxCRJ59FuY5vTxdlrAB1yGGhboht9b4iXNskW1aFFBNOh2E6KRc/9dE0Z7bdMLIqrBOyYIXYopRdvytVRQDr5lHkjrkporw", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Gabe%20Sheets-Polling",
    canHelp:"- Sales\n- Tech\n- Demand Validation\n- Strategy\n- Scale Up\n- Commercializing\n- Financing",
    tags:["validator","climate","general"] },
  { id:"gregg_mastoras", name:"Gregg Mastoras", role:"Managing Director", org:"Harvard Business School Executive Education",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Ty38Eu3cxDeOVl1tn8svMw/ixM9GXloPtINk-ddRHUOWwvg8m8yclfgfeNbdplcpJ-rVgPW649L_CVuHEfefwAZT0OL7f40i-0FuoSFNA5sdb0Q-sdDkyBFogbBR1t0YV5rMGhGjGXmXVX94bSNG7RNXX15kNLl0y_Ze48BzsH_QHIyMwEQgZqnaKQHBxi3ECg/-PKNz8XbqeJtIiv768FelU27F5j2dek700Oz3AZQ8Eo", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Gregg%20Mastoras",
    canHelp:"- Sales\n- B2C Strategy\n- B2B Strategy",
    tags:["climate","general"] },
  { id:"hannah_sommers_thaler", name:"Hannah Sommers Thaler", role:"Senior Product Manager", org:"World Resources Institute",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/6nfcSNzMPWfk1HiursVlZQ/TKzSXMqZhHP2iXjncWF8qLdBNiRySD7vXXk83zmTFA44-Mgx2lkMs1f1kLGYVcPB2C3qeYP9qaYgVzbtSfFu2JDCXKBdVFcSqHcEJvhAwfhByqc05FCIiJG0w0vUwesYpKHZDmO0XwAot9_Z1FYb8IXOzvd8Qc2ajVtfAapt8uk/ts1s-mwG2jGjx9_deoM4LSU2gQnSMbajRHGwVfczNXk", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Hannah%20Sommers%20Thaler",
    canHelp:"- Strategy",
    tags:["climate","socialimpact"] },
  { id:"hyuk_jeen_suh", name:"Hyuk-Jeen Suh", role:"Venture Capitalist", org:"SkyRiver Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/05G_AGv7x6idwsj78qrJhQ/XRbeJlD0PotC45fw09fdYaBRzjgBiykZFZQ1K8XgTxYa2vslv3WjAKwwg-qpIJzoniSGOia90cDovszeA-XmjsL_jv2yhgJg5hvCXNLgzsNTnaBgOMzcK5A3b7AqGWhKjuTa15X1L4zcyVxX0M4M7y7Zr3mnci73cEtXm2V7mK0/rM0WEJCBvQsiEItkE9NxwHVNiXIHMojpEh3t662jRuQ", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Hyuk-Jeen%20Suh",
    canHelp:"- Pitching\n- Strategy\n- Climate Networks",
    tags:["community","climate","general"] },
  { id:"illai_gescheit", name:"Illai Gescheit", role:"Lecturer + Investor", org:"London Business School",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/LgiSj73gj5weUGFwmqUZ6g/DCQBI7Odi506s-NwHxYHoKoF0pjEy8NcqsIvgmeFr-hPOZwe13GO13WcSF9tW7bRnC-depcPIJIClMqrD06SfrGDiohCaxElEZke6D_ZfdImlaJSTl-cBJi-I-eQObyB3H-G4_08Lbsuu1iWoC2DqA/_bHHVeXjVI0qpwLBzdL6Ai6f2KNo_l2XTJF6WpPiz9o", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Illai%20Gescheit",
    canHelp:"- Funding Rounds\n- Investing\n- Corporate Partnerships\n- Macro Climate Trends",
    tags:["climate","socialimpact"] },
  { id:"liz_purchia", name:"Liz Purchia", role:"Managing Director, Strategic Communications", org:"Sustainable Cities Fund",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/F1RXIWAsp83Rt4BW7ydBSw/yVQLYGvTSAv80sPQbpq4W_4ayouHyLK5zYa4tdMGbGquBkG2ZRLCYbybcO26QKC-tEgIJBiS6XcdHFtwqYBmQlbVolIIbXIEAvxHRYYrvE34AW4QEa1PRnyd6Xq_wk_jg8EKzTmLFsVEyIw1I7hFtuNBDWV4a9VLOu_4sHyNiDw/d9L9q0-RHxCKSBwOg21jNstH5Pv7epGllBpvUda5iYA", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Liz%20Purchia",
    canHelp:"- Public Relations\n- Climate Networks\n- Branding",
    tags:["community","climate","socialimpact"] },
  { id:"lori_collins", name:"Lori Collins", role:"Fellow", org:"Harvard Advanced Leadership Initiative",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/rpjw4r02w_cQOONqkuDtoA/5hNdCwOVQvEhMM9rH6rFEe0VDnvg_cgYMX9BxmnO7LUSrp4Kc4okwnu1WVJ2xuIJQGziSYN0TV0vaVfro3wpbZx_Q-p1XE8wON7jaMtcy_Q8uwp6ODOxnclPjmGHHtpXz6-owJOtchS26Ogj7Rrzpg/Kk-5AJA7zikZSb_nW-JDZYX55ClJdz-tJJfHeF_S9ss", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Lori%20Collins",
    canHelp:"- Resilience Solutions\n- Market Driven Solutions\n- Investing",
    tags:["climate","socialimpact"] },
  { id:"matthew_ciardiello", name:"Matthew Ciardiello", role:"Founder & CEO ", org:"Anexus CFO",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/duMggl_F03TR3WEtA93RdA/umoSawHM4oFQ74tU-jf4XlKpc9GDPC9owl0_fvV2EOiJKFazoo4y85QGKQADbawimIObHIv1Hq9R6Zz7eipqwJb-xubpDYJZJeEhNdwjVAtZpIJf4YDo5ZGMr9uU7qmkecxGwn0UJZcAcMi2lMV-9oQEjLdN71HyjnwsuTJOYu85w-0gtv8cLy1SrMpnldDM/720N99kk6wEv5c83WdR3WvJSYIrwjjbzwk_mdHQhCaQ", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Matthew%20Ciardiello",
    canHelp:"- Social Enterprises\n- Non-profit Structuring",
    tags:["climate","socialimpact"] },
  { id:"oladeji_tiamiyu", name:"Oladeji Tiamiyu", role:"Law Professor", org:"University of Denver",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/RXJN_bw-p4-aawmlVtWutw/NdF72eTviBmroaHOAMUNs9383LiW4oeYy-xNB_e2Lf_coJxbcSWDPTAOiQzqxwayhVTsQDj3XWUf1S2sxETm7I7FFF1KNlSgeD6j15Z4wHnySBWLVjCkgwyugU0FId4tbsWniBKFJFSEEIK8T4WWKw/icgCDuEB6FoVGPA6O9Ev_jRS1kse9ejSPpUu-5CCQsk", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Oladeji%20Tiamiyu",
    canHelp:"- Negotiation\n- Conflict management\n- Managing complex team dynamics",
    tags:["socialimpact"] },
  { id:"patrick_sieb", name:"Patrick Sieb", role:"Managing Partner", org:"Climate Tech Partners",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/MoBYPzrWZppI4O_gQ0u73w/z_u5yb_h9q0zUJLejGd-JdvdgMawyvqvZo7mZg3EshxQfl9Ydwv7KlylfImfPUviUQ_g2zr6n5E_ork3t9CaO47hGpQc7p7S_paFvpRO-ozZpj0jz6g-ygasAWB7cLimCeOaMWAWWr3RMHrmIDzIrK6eFcij0AlMCzsyuGNK66U/6rb5_IAYe8F94BUpCUv2uUDq-DogS_WqoGuHkpnjfYs", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Patrick%20Sieb",
    canHelp:"- Pitching\n- Climate Networks\n- Financing",
    tags:["community","climate","socialimpact"] },
  { id:"rob_shelton", name:"Rob Shelton", role:"Principal", org:"Scale Conundrum",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/uDp5Rr-KB08vV8D_38GUXw/Jya8sD3djZ2ljvVH1IrulwOfPqYCllqhDcSjJenVZ_DWchn3lmhBPCuKMg0r_Po25erCFuZwldofRJiq-beMVwJVu62Ynk14KH9TPVvdc3J19MLLA9FNh3-i1CYrnJ7ggZXulnlfXp7Fhb2zl-fYYnfB9ejiK3EgL-D6FF2aUhY/uM25w7dwArwwFPVSd_ji6ODGxSanmyyvi_AR2fZL7W4", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Rob%20Shelton",
    canHelp:"- Scale Up\n- Coaching\n- Climate Networks",
    tags:["community","climate","socialimpact"] },
  { id:"shanti_hubbard", name:"Shanti Hubbard", role:"Law Partner", org:"Chan Hubbard",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/bJ39gGCMAr5qrl3hv4eNSQ/1zDyCVhXhu01jK-lCpM6RK3pERcHpuWMwagcwzPWVRiIzQUNou9Lm47oSlK3sDEixtdlO1euXRDnm6OjyG5rtaJIckj1DaPQYi8W1KAWUh62Z8wQ6JEneZdVH55uEyLw5LqQXyssZ0R4OpvxkERXzMmU1P1icLRy8_pH3RANABE/kIhKLJnVI3qny9LXLZie_Cm7YP9BK1G2VvvlfBFyb3w", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Shanti%20Hubbard%20",
    canHelp:"- Legal Advice",
    tags:["climate","socialimpact"] },
  { id:"yoel_goodman", name:"Yoel Goodman", role:"Private Equity Investment Manager", org:"Menora Mivtachim Group ",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/hf9O37IA0iegR2zuFNnUWg/LeNFXRLfRnG2vGawg3PgEbp93j3la4GXpa0L7frsVGbjuOkzDpiWpQJYEshbJ31OrWT9nKxX88OG25NKW7RKjwCUxWonndu2sg3WvYZIMavWkM6Uv5cPOao7mPrbKzOMEPbzu5DMKXeyOv3O_-SLpQ/icfN9a-q26Ty0kvigwu8JH9dEAacyf9ZBXRV_RBbzOM", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrVrPk2PziQeeVRN/tblrKf04LqWmTv37v?filter_Expert=Yoel%20Goodman",
    canHelp:"- Strategy\n- Funding\n- Entrepreneurship ecosystem",
    tags:["climate","general"] },
  { id:"eileen_rudden", name:"Eileen Rudden", role:"Founder", org:"Sankaty Growth Partners",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/5mxF5MRLzRdmo_JLno4AWQ/mJuGaImr21ue3uBOhpz_FE6wAaTTSRmnzcwEF5xQXMoNXTDJzpCePNTBr0aMpqVCVJcfZBpbW8KomISMu4WYXDOijXegNhxdLVNI3NlKht9v7kgVc8D44GwNXnrxmSKV33lbVnWcRMuKwOSy645A2JED7gaDJwPysGX0qB8dtKI/dim1OMsMtm6pAwSh5xlkKQx6vXLqUtSJwpzRsP46GAo", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Eileen%20Rudden",
    canHelp:"Review of Pitch Decks\nCapital Raising\nIndustry Connections",
    tags:["propeller","socialimpact","general"] },
  { id:"kim_fay_boucher", name:"Kim Fay Boucher", role:"Harvard ALI Social Impact Fellow/Former MIT Senior Lecturer of Entrepreneurship", org:"MIT Martin Trust Center for Entrepreneurship",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/TdMdvzoszdnJTIkdtq3Gqg/rdQhCpD4SkUqsNE0B0-VZCWPsy69AfV0h75pUuznDgtvmVBRitewaMLkyYYq3CpvldE7w3BuCDwOADET3Ec6QG69DJCH_HWKtdwAljqr6KNkOoaHE2sTuL2jGhztFMTgIiWXlqKltY8u5EtP-xVh_g/mmEgIxw-eW7QBwzfQJLnKSh94S0m3XcJewmD3J4J2iU", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Kim%20Fay%20Boucher",
    canHelp:"business model ideation, value proposition development, go-to-market plan, pitch deck development",
    tags:["explorer","propeller","socialimpact","general"] },
  { id:"john_conley", name:"John Conley", role:"Director and Investor", org:"Launchpad Venture Group",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/w8wB7poodjQMnRU4iry40A/2SujFjnlhZRUXD0naVK1s6QVwIOk_nwqMqDSFMoperj-5PBiY4DKQ6gWwA82iCmchb7vYks5dYwkB0DupK-NwBxjTMXXH-OMDj1R6Zz02sigDeW3oXu-5Ji1et3SiceWve8DlScUYuu3z1DYQ10YGL_WEJNjalzpJGdx2jN5bsk/wSnCnPxvofmZX6dIrSpvkYN0sxy7VZCvQYH63cc9cck", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=John%20Conley",
    canHelp:"Strategy, pitch decks, capital raising, business model, licensing and partnerships",
    tags:["propeller","lifesci","socialimpact"] },
  { id:"masaru_sakamoto", name:"Masaru Sakamoto", role:"Partner", org:"BGB",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/grsEfwiN2-uEOALJn5rjpg/PIAurl18R7bmeT-UNxv30kDvZC4NHNsFdOmPhSEY2zHzgFk3VSzXnRWMFl53yjYo5YYMTO3OGEk-AT17STtAFx3ScDc7JLXrG-8AZnT87TWcImUuTzbGy7F7CXf0pgDLZlpWBM3_f7TyyWxI3muCjLZJqm39BAOrtK5tC7Uh8bM/HtWnQh-2_waENjRlfGALvZGzOkGWyrAT8NtFmBoOGRQ", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Masaru%20Sakamoto",
    canHelp:"Pitch decks",
    tags:["propeller","general"] },
  { id:"raleigh_werner", name:"Raleigh Werner", role:"Principal", org:"Presidio Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/_DPtZD4wE9yqnm59gLDdYg/gj-L-qhkG9I60tq2hTj8oWKEHuzwjhoB9t3zh2dNgmvjaXhdk8uWVtQRz2JpnkB_4SkYOr00ZhwEjD-u5sJjcAQfCv_DIuMsdmnYDwMU_YGsMTXFXe5zJgQuP08Lu8BB4mPFVuspzn7iAX-qzapfnyv1sMDTV-syN8L-BmaSJWQ/BkqZsTvPpXUZcFn_dwi1qqZomDbcIE5n7tFTvwp7PIE", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Raleigh%20Werner",
    canHelp:"* Capital raising\n* Pitch decks\n* Business models\n* Financials ",
    tags:["propeller","general"] },
  { id:"yoav_koren", name:"Yoav Koren", role:"Vice President", org:"Team8",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/_pDbdG7hH_CNhsIjvk1wwA/YYgMh2LSowvj4jSHPJiXTT1jEYrb4HTyXYlwFGzSteu2muABSRlscc0zHb-0JVV3wFxJYfDG8VsXVuJiGjbYUqCcHv7lsxhNjp5Ajb6OrB7oEZa7_zWaLrLgt3Rs3_JJUzZ85mWTYH6zxJ-eGgi6-JhDYuAZImjCKqrp0jqUP0I/lLpMhnPvdnCuK--1_1IKl7m7h9DQQse-k_mv3wOxQfo", bookingUrl:"https://airtable.com/app5pdf5nPDsS8Snr/shrsPMrk6yA5XIH0U/tblsRhzSpiewnPyPA?filter_Expert=Yoav%20Koren",
    canHelp:"- Supporting ideation and early-stage problem discovery\n\n- Go-to-market strategy and early positioning\n\n- Securing initial design partners and early commercial traction\n\n- Scaling through marketing st",
    tags:["explorer","propeller","general"] },
  { id:"jon_staff", name:"Jon Staff", role:"Founder", org:"Getaway (now Postcard Cabins)",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/-smzw1Aso5X4EOXVHv4LAA/uTda61MwMS7thkOYLey8iMmFK01-IBOuJQwKX7KTezHgn2O8TK2R2pkpW-Um-Cp2CcrR5qSI6Xc_BmXGVDK8HqReIBxHriI5qj_qsmBHQ-hGzbmcWL3I6b-U-tOVPf6txFBKwd1PxXyUhWqzj1WKrrOVcELsrNZSPoRgWuuXgfWW02a0D8t-RvAZLhiMm6Vu/Md81QY3ALuIsooXUOAyKyWhs3ri5Diqv0pnL2SPX3Kg", bookingUrl:"https://go.oncehub.com/JonStaff",
    canHelp:"'- Multi-unit brick-and-mortar business planning\n- IRL Operations\n- Consumer brand development\n- Zero-to-one (getting to first revenue) and one-to-two (creating a sustainable business) company buildin",
    tags:["builder"] },
  { id:"amy_villeneuve", name:"Amy Villeneuve", role:"Former COO & President ", org:"Kiva Systems (acquired by Amazon Robotics)",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/KhMYrbHsQ17EDnf8lla6pQ/rJfefqKuCzprpn2CdGxU2KphXI0uI_PrPfxSTkoFoAE-3Eskr6yBQ3uAXdhtuBym86X3AD7kODBQo1PfYw_izVBBaHIBv8KChPPSZgRtMyhd4GDQahxZ_XhfQpeyGjfoutJVBlAbPqk71Nwi0aYz-wfi7e6rTP3sMZWSTJYes5E/zH7d17Obp4HWvI7kCT-GKsxsBDuR3DugXvzv4SihakI", bookingUrl:"https://go.oncehub.com/AmyVilleneuve",
    canHelp:"Why Book Time with Amy?\n\nAmy offers practical guidance on:\n\nDefining strategy, vision, and go-to-market execution\n\nStructuring boards, org design, and executive teams\n\nFundraising and scaling operatio",
    tags:["explorer","propeller","deeptech"] },
  { id:"andrzej_baraniak", name:"Andrzej Baraniak", role:"Founder & CRO", org:"Albert",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/j4HL3tlZ645ZDXWzRhrJwg/i4ARopnLHmZiwVUmG-9eCVRkmj_w82ZZYJRg0sUZPNlC8vE9XrE44zPIQSM9ULl9jvFVkLkWMqgx913IjKCoa_iTnHR75CWh8RCyM5qkD8lmX4hF21qrhvL12dW4h2CCjYD7ES57v7xFlweZqwz-MM2GwIdk0irhM7DuneHXYq0/KUTC5KJg7RvENyNs3oHOgMe3DestcY-81YSVLw7RnRw", bookingUrl:"https://go.oncehub.com/AndrzejBaraniak1",
    canHelp:"Why Book Time with Andrzej?\n\nAndrzej offers practical guidance on:\n\nBuilding in the financial technology industry\n\nDesigning go-to-market strategy\n\nScaling B2C business models\n\nDriving retail customer",
    tags:["builder"] },
  { id:"avni_patel_thompson", name:"Avni Patel Thompson", role:"Founder & CEO", org:"The Commons Company",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/qXeggxO7zWRuHKsrkZeHoA/PJGksf6k8iy9WaYV4Rsk2cFvkWU189omXQFIqGP_eH9ElcfiTCYFLNDZKG-BlXZM1GOhyVFAED1wmCHGvlwDmSI4XiuFY_kPgn3X0d_mBkYthuxPo78WlEAKJIFo7D2_k11RVg9GA59oXldwizqemub8EnskhvvxhClvQsDt-AE/5-9HlVVTqZLmWeHA6svFUHsaq9w9h54uQ8p97Qv3lSY", bookingUrl:"https://go.oncehub.com/AvniPatelThompson1",
    canHelp:"Why Book Time with Avni?\n\nAvni offers practical guidance on:\n\nDefining early product-market fit in highly personal and emotional markets\n\nEngineering lightweight AI features with high adoption in real",
    tags:["builder","impact"] },
  { id:"carissa_bryce_christensen", name:"Carissa Bryce Christensen", role:"Founder & CEO", org:"BryceTech",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/w7LJRMXIiidRp-PXFeuhEw/eao71hYEJ6V_narZTGx_jwQz3pWIBI_FUYNm_KNQumxM3Wn-LH8MEXJz1jC8-M4SP6W_ZRUtTtUauHyBz30mDkiunjl4Jqtx0V98YEv-nqrJjut6SAkyne55vNmRdQmqSK9y1n_SgPv_eRj8Uo-PbOGT95X7nqfmF2f7NxLKT6j6mIjzldf1elSh3JyRDzJp/yYlWl8eg0clRC6ot7_YBo6SUHid0JDPim6IEFZyKNo8", bookingUrl:"https://go.oncehub.com/CarissaBryceChristensen",
    canHelp:"Why Book Time with Carissa?\n\nCarissa offers practical guidance on:\n\nDriving high-stakes, analytics-driven strategy and forecasting\n\nNavigating government contracting and agency engagement\n\nStructuring",
    tags:["propeller","impact"] },
  { id:"carlos_reines", name:"Carlos Reines", role:"RubiconMD", org:"Co-Founder & Former President",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/7YBeutlSY45zQjX_jlehog/WclE8DLcxefzVpLnqOuMvjfAce2s2mVO_uAohbusrfAh9EvoYbYtHgE_TSIQfeToeTLmeuXz2zJABnOGbqcds2Ho79d_bmIs7TFeduBcBpG7NsEtQAhpDRbtnUh4yznVw7yY7Cb-eJcWnNZl8--JiLgvrnjRLaStfnnQqOnPQleiU5tCoP7oMI78QLYu6itTT_OKGMpv4K0pDqKe1-jDOw/rXETn9qZUWkbaE3bQUexgQaJPWvw60AqVMTGEDdXkIc", bookingUrl:"https://go.oncehub.com/CarlosReines3",
    canHelp:"Why Book Time with Carlos?\nDesigning and launching impactful B2B digital health products\nFundraising and building investor-ready business models\nStructuring co-founder dynamics and team growth\nCreatin",
    tags:["builder","propeller","lifesci"] },
  { id:"carolyn_childers", name:"Carolyn Childers", role:"Co-Founder & Former CEO", org:"Chief",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/6F7KYsqPI0K5bRXgMb7eWA/HYHnREppSh2NvrtNIkV38OpScLxacK8ZcF4XPNK8ITRNw38nfVndaztl_fl3NnKU6DSbGJ72IFwltxtr5wWGKLntBQfSjm_1qpgClwuebz7xBRXAmDaTg4A9YkqeNKNq3iLurF8rmBP1MENpuVrwmBT2HqDnKSsUJ4sU9iikB7n329_dWnnu9tbVHkLvPn2S/7F2LJBy8SQY041TZvuSisCCcqbYHUaAyaCTYV3a3YOM", bookingUrl:"https://go.oncehub.com/CarolynChilders",
    canHelp:"Why Book Time with Carolyn Childers?\n\nCarolyn offers practical guidance on:\n\nFundraising and refining go-to-market strategy\n\nBuilding and scaling teams and culture\n\nDesigning mission-driven, inclusive",
    tags:["validator","builder","propeller","impact"] },
  { id:"eric_boutin", name:"Eric Boutin", role:"Founder", org:"Harvard Street Advising",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/dpNLy6PeKEMDSdL-pElnMA/rFrm3OszNXFCkxi9gvwYW1XXT40FlRcmQtT82RgSwdmcos6XYSFruzLzxTtLq3UlW_fo-EH7QIVXJSgiU1XZ_ovHk3e_BgnFqCX1-FccmJGW36s28ozZK6G2kyvkFu7v9Gadqd6lr5HDDrGGBjZXL1OQwxgOf0uaSXJgYNV1fCE/WoBwl_j_tBCouPHRFTcRrJkxAC2xnGWPC4JmsmuLjwA", bookingUrl:"https://go.oncehub.com/EricBoutin",
    canHelp:"Why Book Time with Eric?\n\nEric offers practical guidance on:\n\nFundraising and capital strategy — navigating Seed through Series B, pitching to VCs and strategics, and structuring the right deal\n\nGo-to",
    tags:["validator","builder","propeller","lifesci"] },
  { id:"gil_addo", name:"Gil Addo", role:"Senior Vice President", org:"CVS Health (via Oak Street Health’s acquisition of RubiconMD)",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/B459fJJXlEcLzIkP-CF1Eg/68URKZGQdRXMIGH8hQusAIbC351OfOwUQgcnrlqzXLSHW5fF-IqAhGfPxWFZi3lfR6EuzbVoT5WInsFKABi6053hrjkptdovnm40ZxavU45TmDW1TiUtBbr2NC4jwQLGSbEE9rw2YkzWZqJw23EFjbzS9atb7ajAR75Q_2oxkTc/O-IP842Aez4YGIMCf0iFF1q9bMgCbfCAETNywYVFw4A", bookingUrl:"https://go.oncehub.com/GilAddo",
    canHelp:"Why Book Time with Gil Addo?\n\nGil offers practical guidance on:\n\nBuilding or scaling B2B health tech and SaaS ventures\n\nRaising early or growth-stage funding\n\nNavigating co-founder and executive team ",
    tags:["builder","lifesci"] },
  { id:"jos_vicente_aguerrevere", name:"José Vicente Aguerrevere", role:"Co-Founder & CEO ", org:"Takeoff Technologies",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/9Jt1um69b3Ak0oiDUwx1zA/P9Yjj3UWhAUs70Nj7imJONEhp4CDBGdgPWYJx9WlHG34c8x0UzDHkQ4DmgN96bCfckOPmYD5MNgdEYw0rIZJdCvoD50fKm8hSAKsHlipdNl_ObDxsHSGCFleVXFt5NKjpIkB5bo7T6ar6ohLW2Lc3pIZcD8VoNrVRxam7s0QsV0/RMqqR4ST-9iYS2BEOCnNLxpb-qdXKR2Sgko_UxH5OPY", bookingUrl:"https://go.oncehub.com/JosVicenteAguerrevere",
    canHelp:"Why Book Time with José?\n\nJosé offers practical guidance on:\n\nBuilding in robotics across hardware and software\n\nDriving innovation in grocery retail and marketplaces\n\nSolving logistics and supply cha",
    tags:["builder"] },
  { id:"joshua_yguado", name:"Joshua Yguado", role:"Founder & CEO", org:"Jam City",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/XS5HXlclAgR4NzbkwTjgBQ/iD2nV1qtgpwoST4NCHQ_4MofHBSA7F-RfFQfDudEPMVD1EhqHxAlRlnBH6eKXNgbU9rZoYDOizA3tP_PE-hkM7zuN_7_nkjllmk3CTKJVA_NOKcLU6VCBSbEaTMRoRf25R2Veksa193aH1DLmnq8hPPxEf9QIxXuehSqAGejxaQ/rSQaLOkgO3vsGd2gVKPsVxJs-A7Q78BxG3kcJ46K2FE", bookingUrl:"https://go.oncehub.com/JoshuaYguado",
    canHelp:"Why Book Time with Josh?\n\nJosh offers practical guidance on:\n\nStructuring and scaling creative teams across geographies\n\nLaunching MVPs and monetizing through IP, branding, and partnerships\n\nFundraisi",
    tags:["builder","propeller"] },
  { id:"kenneth_salas", name:"Kenneth Salas", role:"Co-Founder & CEO", org:"nuDesk",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/eWSK6_PBtbpmjPZJGlFivQ/Ycp3xB9r2D-GvGQyGtnBC6TKF-TIL8HcNp4WzMe3tgLmumkJwIUtciw4XAoMeoeXfgeMs_RZ1FZWRNYIeaDx0ipvjlAgqKKw5FeyWQaL9au7uLH4yj_3i6V7bBgnHUnUqKQ_CgfqSpHacgGNITnrCLYqgNXJfrJHhnVA9yU-mco/T5uXnHtgsUuYlwuDOUEm-ySQeoxMN5u7uC0eHxRzY7E", bookingUrl:"https://go.oncehub.com/KennethSalas2",
    canHelp:"Why Book Time with Kenny?\n\nKenny offers practical guidance on:\n\nScaling sales, growth operations, and go-to-market strategy\n\nDesigning and testing MVPs for fintech or AI-driven products\n\nBuilding earl",
    tags:["builder","propeller","deeptech"] },
  { id:"maria_mcclay", name:"Maria McClay", role:"Founder & CEO", org:"9 COMMONS",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/pR2MyrIWucarl_WAOkb-8A/KG7j_yEuoDNuqt9JMycLFdM_6O1zFdSQaH3n0haEipAIH7bFIBvvJUgtHt4AIKCCuUNasiWmAqoorElOUwrRkDulpQOP_J3CQsQaBhabRaHY9InaXvedoVvqvKJidRlaATojH1RQLlblQ-pedzrvNTFKh_vmuBoNLMvCCRuGnC4/2Ech2FEVvh_tf-tSJR-0HoNuZGmxPwvTlPayZEou3j0", bookingUrl:"https://go.oncehub.com/MariaMcClay",
    canHelp:"Why Book Time with Maria?\n\nMaria offers practical guidance on:\n\nScaling consumer and lifestyle brands\n\nDriving digital innovation and AI in retail\n\nFundraising and crafting investor-ready pitches\n\nExp",
    tags:["builder","propeller"] },
  { id:"nadia_boujarwah", name:"Nadia Boujarwah", role:"Co-Founder & Former CEO ", org:"Dia & Co.",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/GsINQSx83ihY5Id0usjsyg/W8yvWwOOn3gmLmGiJy5Yqj5UburPX0Q_2GYGe7cjorxHEDPSdLMYdu-UiZp0BUNoT3JMIe_rWWOrgKjbiRf9UvvQ9mOcEWvKBFEoBe-g8RVWGIzwJlPEPCmdVhQDBSitZeToTsou_2OMG8W5h5u5z_EFyyWA2T1XbZhEIcKFO9k/EIz176fkeNt-gq28UabqQVJTmzxg5erfi1FEkFTIeJE", bookingUrl:"https://go.oncehub.com/VNadiaBoujarwah",
    canHelp:"Why Book Time with Nadia?\nLaunching or scaling consumer brands and e-commerce platforms\nFundraising and pitching to top-tier VCs\nNavigating co-founder or executive team dynamics\nBuilding organizationa",
    tags:["builder","propeller"] },
  { id:"rana_el_kaliouby_ph_d", name:"Rana el Kaliouby, Ph.D.", role:"Co-Founder ", org:"Affectiva (acquired by Smart Eye)",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/d3GPaPhw3SyeL_4ucGUYTQ/NxHpwz601PQjq8iOUP7xOpNE8s316MHGqiZVGk4zI16pxN8B8Dgmik-v-Vt0aeWA7ZCuATGiYXZmNc06Y4LAvNNxbfRiz5P3-UdhOrl0YZPZkI51_CgLXIjN53r1O6nLsJJ7WBZ0UdiGKSS8Ytvk1j9YiHku_Q6icc1JKW1D_Yw/56F6xZDo34ffUlQzHSTPqaA1VD2jnj_VcEaVqFbP2xs", bookingUrl:"https://go.oncehub.com/RanaelKalioubyPhD",
    canHelp:"Why Book Time with Rana?\n\nRana offers practical guidance on:\n\nBuilding an AI-first company\n\nSpinning out of academia and protecting IP\n\nStrategizing on fundraising, investor relations, and board dynam",
    tags:["builder","propeller","deeptech"] },
  { id:"shara_ticku", name:"Shara Ticku", role:"Founder & CEO", org:"C16 Biosciences",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Uq1eaojda0SvZzJU_UJ-0w/SBY_2zIv-ieB8WLA0mZLZhZvbMSUFjyvhyZ1YvBDoySWLO39WXXMITsivwW7gmY4rH4kU1neslqS2xq_cMq7CfoN6Wg5lPxrBuGR8K0bqWoNPedJb1K2XsPn4mx1J1WWFgqeDd4pPP7CRRfVR7D9jOs5KIIoTVU4tPFtK3eyknM/_9b3F9qz97ds-IuR-XGwWfkIMA1_lM-RhISWOWvknHU", bookingUrl:"https://go.oncehub.com/SharaTicku1",
    canHelp:"Why Book Time with Shara?\n\nShara offers practical guidance on:\n\nLeading high-performance teams to commercialize deep-science products\n\nRaising capital for breakthrough climate-tech and CPG innovation\n",
    tags:["builder","impact","climate"] },
  { id:"shirish_nimgaonkar", name:"Shirish Nimgaonkar", role:"Founder and CEO", org:"eBlissAI",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/L21eR-O1-88KBSunXqqlVA/T74madl63sok7zxJXBYbYnMpILDDKgguBe5dMbFAGMwlA0N6oogZDZa4GRvFnFmAiBgdN_31HEpgM9GoYRmFQ3jywLFbXfyGrVwrPy7GtnpWBZZMBypy9wjRfOUHIvhRkGGgn_X2YTE2ICBEnwD4eA/gkjmYwYcGwIx2jHjjUYGSff3kpgXxv3_R3KFbAVqY7A", bookingUrl:"https://go.oncehub.com/ShirishNimgaonkar3",
    canHelp:"Why Book Time with Shirish?\n\nShirish offers practical guidance on:\n\nDefining strategy and building founder teams in complex sectors\n\nDesigning MVPs and go-to-market for B2B SaaS and AI products and so",
    tags:["builder","deeptech"] },
  { id:"alice_brooks", name:"Alice Brooks", role:"Partner", org:"Khosla Ventures ",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/X231tCbf4PLyG7Uv7FIxCw/FTFzsxYu0f8B_dvP-K-HBi-z8hpy2SE7I82ByUZQwHIqNT4Kq90RUdi-y1LxYOUFV1dbMwrVTkyRik354CfrFa5XjnQGmv27sAs27TvAzuln2-U1gS_nFQPRH3KdAac6o2WmfgSqEe2vNVDrhA0o40IeiWR0xM5BJotu3D13qyQ/vBbfzAXXCGmvgNvmbv_0r32f0j4MtRIw3tNY9wqXne4", bookingUrl:"https://go.oncehub.com/AliceBrooks",
    canHelp:"Why Book Time with Alice Brooks?\n\nAlice offers practical guidance on:\n\nPrototyping and developing hardware and deep tech products\n\nFundraising and sharpening your pitch to investors\n\nBuilding and scal",
    tags:["validator","builder","propeller"] },
  { id:"brittany_davis_wilson", name:"Brittany Davis Wilson", role:"General Partner", org:"Backstage Capital",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/IAVJYV02gOIrbEiuxK-sxA/tnAC0QKmEUNvquMRPFuKApnP2OOiDKHTU0vJ61pf1xPt1-yy_aaCuwLr4i2VlLS5n5YnfYWv3f1fK5JQwkPT3fSwGnnbolG_6drjMEk2b3s1KAQnPIQUiBeQB0hYZAVwQ4J7khQRfSGvPCIx0ohWAC-VEVgGthJqy5PUShyr2IE/jQrWFxSDVZVUmawspMzRMcaVTmf20TpL6ntg2_I8EFc", bookingUrl:"https://go.oncehub.com/BrittanyDavis1",
    canHelp:"Why Book Time with Brittany Davis Wilson?\n\nBrittany offers practical guidance on:\n\nBrainstorming and refining early-stage ideas\n\nSharpening fundraising strategies and pitch decks\n\nPracticing and stren",
    tags:["explorer","propeller"] },
  { id:"dawn_dobras", name:"Dawn Dobras", role:"Founding GP", org:"Capital F",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/LSNs8ye2N8TqDbvRhVCDXQ/5huQiwhR4U2hnUnqrjgHbUnCqp0bqJxZai7N5nzq6CDUJfjdVImreERPjZIdA8r1-2E0pv_47zOgVDdFNkToij-h-7BTmUdzwt2XW1AMXQLGJ67_3Ha7w0VIm7xrXfzpBwwaqE_hoVLk0vcw45TPa3gBV9lPp7HqIUI0JsSYFc4/W8MefAb9pGNii7Nf_jbj-R-cnxBvO8IdYpUfZ98OzCQ", bookingUrl:"https://go.oncehub.com/DawnDobras1",
    canHelp:"Why Book Time with Dawn?\n\nDawn offers practical guidance on:\n\nBuilding and scaling consumer brands, beauty, and e-commerce ventures\n\nFundraising with a focus on diverse cap tables\n\nDriving customer ac",
    tags:["builder","propeller","impact"] },
  { id:"jackie_shoback", name:"Jackie Shoback", role:"Co-Founder & Managing Director", org:"1414 Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/lLBbcyrBVuhUXrE7Mj6B8Q/0OReitFjpBk5qa_FXOr83Fq5JwVQ4MruSnv6vCduiEQELBcHLwiHnL9W5Qkrgc_jl3s1BgIfxLkhiSrKRaE5LSAfjOj-0lPvbt7UTsZIkFjOPjDGmvPm7L6svVHPN8rZu26jP7xRobWCsKM4h-B-6ZvncPmsasRmM87icgjtBw4/tRtm3c84zPjh190eI3HeUBUvEcMedJVreKOeuG56cfU", bookingUrl:"https://go.oncehub.com/JackieShoback",
    canHelp:"Why Book Time with Jackie Shoback?\n\nJackie offers practical guidance on:\n\nBuilding and executing go-to-market strategies\n\nTapping her network for fundraising connections\n\nScaling teams, operations, an",
    tags:["builder","propeller","community"] },
  { id:"jennifer_neundorfer", name:"Jennifer Neundorfer", role:"Co-Founder, Managing Partner", org:"January Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/xG8ZWCZsgBK3e3OS8YNCQw/_q1nyktAP31xU_kBGriJzhFuekydppO_QIclG6tHEYliFpM0-LknIlNT3RwxPZ1nCmFvbkDwEiUyfEFKTKzZSOioAa2H8zI-4qy8GNqDD3K7qUESUf1-rNHbyqGOU5000TrX2z0JK61P4tUGxlJqDvK7d-inMQ6_-UP5LQ7InywwEafjc9P3nFMpcU9nDZ_W/UeQurvRo62nnlxXDbfiD-8y-cCQGy9vVMbjp7TgzYGk", bookingUrl:"https://go.oncehub.com/JenniferNeundorfer",
    canHelp:"Why Book Time with Jennifer Neundorfer?\n\nJennifer offers practical guidance on:\n\nBuilding early go-to-market and business development strategies\n\nFundraising and refining pre-seed pitches (pre-product",
    tags:["validator","builder","propeller"] },
  { id:"juan_luis_leungli", name:"Juan Luis Leungli", role:"Co-Founder & GP", org:"Tectonic Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/NdH6X9cT9k4IEtCwfPtgDA/vIMBqUJ1olYYKXA9hVYUwmCaQrKqm6DuNB8G03649OtAp6FtwkSH3AniSr3SRllZMeTIkdufeGgVu7hA1ud1R9eOO3vdnQKMW4r8S5idISrIGsgFDHo3Yp68RAyQxDFst3Fl6J48mV5WXXLsdKPnig/QdZrMR8eqc-bje1j4XJcZnl958Lb2K5wKT8rk1YL7nY", bookingUrl:"https://go.oncehub.com/JuanLuisLeungli",
    canHelp:"Why Book Time with Juan Luis Leungli?\n\nJuan offers practical guidance on:\n\nFundraising for pre-seed or seed rounds\n\nBuilding and validating B2B business models\n\nDeveloping and testing MVPs in enterpri",
    tags:["builder","propeller"] },
  { id:"kanu_gulati", name:"Kanu Gulati", role:"Partner", org:"Khosla Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/8Vaxr51TsG3bPDPRgEDU8w/JkJObc29TrjpGZ2aq_Jbx40Y2gJyf3UNe93oyNyxl68Umt3DhKFrFVrprQY1a-8lFmLzPMUeSnm3YRe2PcpSMH5jWr_vcjH7go75CedPhOQ-__3qz6On8DR_4QgXI7SVQD1P4SwV46HjEmepKJ4EGdXx71CBxTwaxfzzrNiLSSk/pp4bVP4Q6_7KEfbeo9xYs5CNATTS5FJfc7ibwPcKKHc", bookingUrl:"https://go.oncehub.com/KanuGulati",
    canHelp:"Why Book Time with Kanu?\n\nKanu offers practical guidance on:\n\nDesigning and scaling enterprise applications that integrate AI effectively\n\nLeveraging robotics and autonomous systems for real-world bus",
    tags:[] },
  { id:"lisa_lewin", name:"Lisa Lewin", role:"Senior Advisor", org:"Primary Venture Partners",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/ePIqjXJwjIqVCQOX5iuPhg/eQDycKmYebQKGqZNW-P9SEjrkLjKVlAW4KZ3md2BxnMgdhLHrdJQmNLOH8K1I1SgBPV7rsN5hny-BDi1hzWEALjtISVGsZ6DXiAB2y4o5CZwtEfHPD1A6sa0oVkrdx7VHOANB03IDCKswNiBfW7qw9Iqv12pD5MsNWDq9z0hbyzajMvPl_RnT9nlCz8dT1wd/QGP6RGdSXaz9cyik0fSBesZevSW6fqEkj19Is3SLTyU", bookingUrl:"https://go.oncehub.com/LisaLewin",
    canHelp:"Why Book Time with Lisa?\n\nLisa offers practical guidance on:\n\nNavigating game-changing pivots\n\nBuilding teams and culture that scale\n\nSharpening your pitch for investors\n\nLeading growth with purpose a",
    tags:["builder","propeller"] },
  { id:"payal_divakaran", name:"Payal Divakaran", role:"Partner", org:".406 Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/4iMyhq1NE4RM0azutPBERA/PK7nsYZVZr7p9czta9MDnUCdN_drpBdul0RBQgg-IoZbvjgP4h6-z1IP3x71boqH5cZ3hp-Xgg2nlr2LVrV_lndrmgWjmgX744KmataDl7ae1SHuRD-FIA4fnIJju30SkjlT_fH1EAtpB1rFgqGdCKOqrqHrnHKbQ9eLebB5EhxJ0PfnkRUU4S0_0QfYbKl7/zU6Ok6jNuOf2bpbD4L9_qXOYCrJDOtb7yge4se8_h6Q", bookingUrl:"https://go.oncehub.com/PayalDivakaran",
    canHelp:"Why Book Time with Payal?\n\nPayal offers practical guidance on:\n\nFinding product–market fit for healthcare tech ventures\n\nFundraising for enterprise healthcare startups\n\nBuilding and refining go-to-mar",
    tags:["builder","propeller"] },
  { id:"richard_dulude", name:"Richard Dulude", role:"Co-Founder & GP", org:"Underscore VC",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/HIq8vlFQ9kk_GEQtXaXIwA/dOw3tDWWPV8ivarDaccXHXwrwYnkxLKADZ6c4JZloPSuzo3UbknJrn1AQ3K4IO1IJOhVhZ36Zssg5HLRHenpS9ylaI9tgunITwepQZ3MxM5urpd_uPpr6beHsBQunRGf4XMm8cizh-NUysx6o4InR_cY5mSB_8tqnBsBgyKkmxo/_wt9XAgI8zoSdRhIy9oq8OESfWPdf-L1j4JBD-HqNvM", bookingUrl:"https://go.oncehub.com/RichardDulude3",
    canHelp:"Why Book Time with Richard Dulude?\n\nRichard offers practical guidance on:\n\nSharpening your pitch deck and fundraising strategy\n\nGaining candid VC perspective on early-stage growth\n\nBuilding in AI, B2B",
    tags:["builder","propeller"] },
  { id:"rick_grinnell", name:"Rick Grinnell", role:"Managing Partner", org:"Glasswing Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/3KHYYc5VD-drsg2XQwchFA/6xypFZwFKYXR4Su0pqoAIsPWy6irp7Jos5sir-F6DAttMafwExC-skBPPb6hRt0qexiMXhm0Jri1oG8hfZWsrT7gZMMEGfDzZ39EXjS109yhrJlTyGwdZDl_jmhIYiaUygML36Ba-rUkWbxFoGhfrOkHMGFrtWLOQfe7XEQhYE4/LR3TD0_WJfmrzAHN7REif0ZBifCLOCikv3ppUYasEok", bookingUrl:"https://go.oncehub.com/RickGrinnell",
    canHelp:"Why Book Time with Rick Grinnell?\n\nRick offers practical guidance on:\n\nFundraising for early-stage technology startups\n\nRefining go-to-market strategy in AI or cybersecurity\n\nSharpening business plans",
    tags:["propeller"] },
  { id:"rob_go", name:"Rob Go", role:"Partner", org:"NextView",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/srcgxbbrr54BXX0vhYOmUw/GSxSV9g9rjkmlz1M3Qm1IoSzNKNY_a1DuswkyrIOiDJz4TVopazYqa3XAXkuxPaSbT8ZRze328EUDMf5jhhZ62RJ00SuNVKsueEcRvaPa52JiMa1xdMbFarhJeypj1gVj5GIeBEvdBLG1uiTmqLXVNJgFDSYM92NUYUywLfGmLluhZPzvxA6Nh4nGwzoiz6Z/-PBGJc9gl93ro6n4fzI0kJMlgjQVLrSB7HFRvVBmREk", bookingUrl:"https://go.oncehub.com/RobGo",
    canHelp:"Why Book Time with Rob Go?\n\nRob offers practical guidance on:\n\nFundraising at the pre-seed and seed stage\n\nTesting early product and market fit for software-based businesses\n\nRefining ideation and mar",
    tags:["explorer","builder","propeller"] },
  { id:"sarah_hodges", name:"Sarah Hodges", role:"Managing Partner", org:"Pillar VC",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/NtzThMzwjjrpbS2YoF-jsw/gpcDNqBB5SxqTIkUvl0VVWxSz9sEQUDLLqEuoDBsPlug2DOFLlWRiAkCnK_R7TVJNm8NZ_wvMoVmBceuqfntViLbhPTklpPSmYM0gzbXka5vbWwDil856_17WB_dAFdUjvzQjGQDUcwtosC3qlDA_0UgTRqe9Rja22a3c3TelJk/z9b-soki-d9_eI89XanSolmhl6Ld2kTARjKHa29BWOA", bookingUrl:"https://go.oncehub.com/SarahHodges",
    canHelp:"Why Book Time with Sarah?\n\nSarah offers practical guidance on:\n\nFundraising for B2B or B2B2C startups in enterprise, deep tech, bio, or AI\n\nBuilding and scaling high-performing startup teams\n\nExplorin",
    tags:["builder","propeller"] },
  { id:"tasneem_dohadwala", name:"Tasneem Dohadwala", role:"Founding Partner", org:"Excelestar Ventures",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/i4ycRybavQx8Lq8dMsDNJw/BZN2gGt_4iIniYH3cf5yAS99CmfiNwYfSytR35Dy3HhLGiwUJHs0851zSKuAPOJxIBss_AnPoILLriisxV49DVgYBPiXHbMIEylL9GmMAC1emJA_JMS15BQJKwYd8fyXmEzuUhgw_xBRTMvVXd5zBjKqnC0D7YcXMimW1Mj7JtLw5k97UJraTmnnakc1YA0n/plZxZtY4JNJSr326PaYBru4udUamnVwfob5Ps_zyRKs", bookingUrl:"https://go.oncehub.com/TasneemDohadwala3",
    canHelp:"Why Book Time with Tasneem Dohadwala?\n\nTasneem offers practical guidance on:\n\nFundraising in healthcare, medtech, and deep tech\n\nRefining pitch decks and investor readiness\n\nBuilding and scaling go-to",
    tags:["builder","propeller","impact"] },
  { id:"tina_bou_saba", name:"Tina Bou-Saba", role:"Founder and Managing Partner", org:"CXT Investments",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/s7lyX0IBRZIC4yCor2AnMw/cYWK3lDVWyzZTMhKCJ7nMYk-arrKRw1zs3J9FR05AmgdLqWWZGS8-pALLyypnBMxoMpFKwnXP-81X6N7OCvEDwRUlG_pPKQcIuOtVtqwHaTQIycFv2Bmx0Y3GlcMhNlYPsC1aKdRpv_rqUPkW3RNEvN47m9Rsb6r0PCwML7ud2_lHlsahXyQL4bJuzc-XFcy/iVXyDKxr1ioEilToCQ22uyYWFua6x6lMQe9ZCcXgxxc", bookingUrl:"https://go.oncehub.com/TinaBou-Saba",
    canHelp:"Why Book Time with Tina?\n\nTina offers practical guidance on:\n\nFundraising for consumer brands or technology\n\nCrafting commercial and omnichannel strategies\n\nBuilding teams, culture, and early operatio",
    tags:["builder","propeller"] },
  { id:"wendy_lim", name:"Wendy Lim", role:"General Partner", org:"Burst Capital",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/KCWdNP6ru-25-rW2DEHLKA/6hSXhoghq8nGF1CBDnoqFZbMYBpwrlInTKv3kieqB7fep-_shfuFff4V2j2MIbs5SvVGZrQuLB4Sy1LhFrN4CkdvI1yWVzW8wxUrdPfTRYv40TM5Y93P6wTLif1_LRZ7XODQXVizrLwxhkCCoFBzZYySFrl1AruGwfyFi-f9lg8/D35j4XTI8OeoYPjL9Dmc_BHQQ76WFlqf2el3H5RnoFc", bookingUrl:"https://go.oncehub.com/WendyLim",
    canHelp:"Why Book Time with Wendy?\n\nWendy offers practical guidance on:\n\nBuilding or scaling in marketplaces, SaaS/AI, or consumer tech\n\nDesigning and executing go-to-market strategies\n\nFundraising and refinin",
    tags:["builder","propeller"] },
  { id:"alexander_civetta", name:"Alexander Civetta", role:"Member", org:"Mintz",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/Bpv8A5t41ghl0_P_dRh3Qg/-kInNb0XVwGDQIjVybx6zT4jFIfTOq6XWiBBX_9ZWojjvKn9KORdk39fdjzsrakagqUTnz99hXS1fqRIZL0y9hAckU8ONeEbwXRVsdluXdrq27QbVrZjJ_-CoO2cofBHlMuE9dry0ap84jXUyuRQYPpEz7NLoR8V7Rb2eKG7jPU/eC_WvcsbfdyC8VgC3vOirkWk5hPFa6SkdWSScpEanu0", bookingUrl:"https://go.oncehub.com/AlexCivetta",
    canHelp:"Anything that touches legal matters, from starting a company to raising capital; out-licensing IP and collaborating with strategic partners; hiring employees and dealing with immigration issues.",
    tags:[] },
  { id:"jeff_goldman", name:"Jeff Goldman", role:"Founder", org:"Goldman & Partners Immigration Law LLP",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/148K9YE3cqmtSJ8MtrP-eg/aye1WUXilSNKbz7p4MBeSs2E864Ne_B8l4RuruX12raGKw4e7-p9KdhoCd-ufYJh1KDAgOnxbfEUwN8_i3iF2EVyAkmWapvYK2lraj7tHFQuUDLTSzrs4TMLRKOLRznZPIhBJyBOsIHnxjrINPuqLeOa7qAbczEniS4Re4TKD1g/MqAFpQ8TGvTS3PGukSePwRygsbY-OFF2Szp1Or11oZg", bookingUrl:"https://go.oncehub.com/JeffGoldman3",
    canHelp:"Developing short term and long term immigration strategies for founders and key employees.",
    tags:[] },
  { id:"larissa_bifano", name:"Larissa Bifano", role:"Partner", org:"DLA Piper LLP ",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/HwM8qb_YfGq0lwBNC-ThuA/Mkx3s9NJenKTMFBJIFDmHLUidSAh9wST654Creqlh1cOUdZ-bwzSESMNA6yTAndZ_OfFtoHl72cxmajCUX3GZwoZ8i4DU4KlAXOneiflrciNHpgJ_FjL19TKMdGrbxkcrkk0kktsZk9ouKbTGzglFxc9m8cNRvLLVUtiyDeqGRs/hzWVatxo7qjFDf37My_glORJfDeuTKcForr3dGbaodA", bookingUrl:"https://go.oncehub.com/LarissaBifano1 ",
    canHelp:"",
    tags:[] },
  { id:"matthew_reardon", name:"Matthew Reardon", role:"Partner", org:"Goodwin",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/DgsGxqA6AyebwadlA99Xow/apDJPQuuNzeyQtOScPVh9a4_CagI0I32YBNcoGuhCPK0Qj0cT8f9WpxcQNkBr0Iymflv3ogOH-6iOHDCfOCyrnOrotQYpGtEgIxXO8DHruITS7vnHHRUb87mSPEHogdbOstHspGDzG3cPlCGDISHcnN4U4-J9hkYcaH4T0QX8JPgt73PWDTtiY7qz_4lr8HS/IDxFBxO02QRQ3QXYSgyutV2DEYodQKi3m3k_RrW1A-U", bookingUrl:"https://go.oncehub.com/MattReardon2",
    canHelp:"Matt can advise founders on matters related to company formation, founder equity, employee incentive equity, fundraising, M&A, and corporate governance. Founders with questions regarding other legal t",
    tags:["propeller"] },
  { id:"steven_cagnetta", name:"Steven Cagnetta", role:"Co-Founder and Principal", org:"Company Counsel, LLC",
    photo:"https://v5.airtableusercontent.com/v3/u/54/54/1782777600000/NIl-4hpIvd84iD4lISHETA/orOwb2cY50GK5Heybgx9ThblP04MGfENtT9vyQLDNw1n4_1372_fGvGopqODLIZw692u6_-TCylimU9oVWTpbmK1V7zoM3n0lXZlDG4Pn1NPg7oKllg6YxetxOBYv28uuTzCDW-bwqR063pQVSsBG1xOVKiserL0ps5fYHei4H2snWiBHgtGPY3w8zqdV7z1/096xfxkiFY8BIvpC-dPk_Xe__CVQohjyTUx_QrPZgmg", bookingUrl:"https://go.oncehub.com/SteveCagnetta",
    canHelp:"Startup matters, founder issues, intellectual property questions, equity and debt financing and strategies, deal structuring, general corporate questions, Boards of Directors questions",
    tags:[] }
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

// ── PERSONA SCORING (single source of truth) ────────────────────────
// Used by founder_xp_generator.html (the founder-facing quiz) AND
// the_bot.html (the staff Routing Desk) — both call this exact
// function so a staff member and a founder giving the same answers
// always land on the same persona. Do not duplicate this logic
// elsewhere; if the scoring model changes, it only needs to change
// here.
function calcPersonaFromAnswers(answers) {
  const { stage, goal, time, sector } = answers;

  // Hard overrides first
  if (sector === 'socialimpact') return 'impact';
  if (time === 'light')          return 'community';

  const s = { explorer:0, validator:0, builder:0, propeller:0 };

  if (stage === 'explore') { s.explorer  += 5; }
  if (stage === 'test')    { s.validator += 3; s.builder   += 2; }
  if (stage === 'propel')  { s.propeller += 5; s.builder   += 1; }

  if (goal === 'feedback')   { s.explorer  += 2; s.validator += 3; }
  if (goal === 'milestones') { s.validator += 1; s.builder   += 3; }
  if (goal === 'community')  { s.explorer  += 2; s.validator += 1; }
  if (goal === 'funding')    { s.propeller += 3; s.builder   += 1; }

  if (time === 'moderate') { s.validator += 2; s.explorer  += 1; }
  if (time === 'heavy')    { s.builder   += 3; s.propeller += 1; }

  return Object.entries(s).sort((a,b) => b[1]-a[1])[0][0];
}
