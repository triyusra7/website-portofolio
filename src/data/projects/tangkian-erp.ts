import type { Project } from "./types";

const base = "/projects/tangkian-erp";

/** Every product screenshot was captured at 2× (3360×2000). */
const SHOT = { width: 3360, height: 2000 } as const;

const DISCLAIMER =
  "All figures in these screenshots are sample data prepared for this case study. The client's actual financial data is not shown.";

export const tangkianErp: Project = {
  id: "tangkian-erp",
  title: "Tangkian ERP",
  company: "Freelance (Group of three companies)",
  projectType: "Freelance",
  category: "Accounting ERP · Multi-entity consolidation",
  year: "2026",
  cover: `${base}/hero-erp-3-entities.jpg`,
  ogImage: `${base}/og-erp-3-entities.jpg`,
  thumbnail: `${base}/thumb-erp-3-entities.jpg`,
  gradient: "from-blue-100 via-background to-card",
  tags: ["ERP", "Accounting", "Web App"],
  summary:
    "A web-based accounting system that runs three businesses (cement distribution, port logistics, and a coffee shop) inside one unified program, creating every journal entry automatically from source documents and generating consolidated group reports on demand.",
  problem:
    "Recording one transaction meant typing the same number into the profit and loss, the balance sheet and the supporting ledgers. Consolidation was rebuilt by hand in a spreadsheet at every month end, and ratios like ROE or ROA did not exist in the system at all.",
  solution:
    "The document is the input and the journal is the natural by-product: staff simply record an invoice or purchase order, and the system creates the double entry. One login provides three dedicated entity workspaces, each with only the operational modules its business needs, all running on a shared accounting core where consolidated reports and Key Stats seamlessly read from all three.",
  outcome:
    "The three companies now run smoothly on one program. Invoices and purchase orders generate their own journals, allowing finance staff to record a document once instead of keying the same figures across multiple screens. The consolidated report (including profit and loss, balance sheet, and each entity's revenue contribution) is now a page the owner opens directly at any time, replacing the old routine of assembling spreadsheets at month-end. Key Stats puts ROE, ROA, ROIC, margins, free cash flow, and turnover days in one clear view, calculated directly from the same ledger entries.\n\nDelivered in 1 month and 15 days by two people.",
  resultStats: [
    { value: "3", label: "entities in one program" },
    { value: "0", label: "journals typed by hand for a normal sale or purchase" },
    { value: "4 clicks", label: "from login to a consolidated group report" },
    { value: "45 days", label: "discovery to delivery" },
  ],
  prominence: "lead",
  caseStudyType: "featured",
  problemSummary:
    "Recording one transaction required triple entry across ledgers, while month-end group consolidation took a full week of manual spreadsheet assembly.",
  roleSummary:
    "Lead Product Designer — Discovery, Accounting Logic, IA, UI Design & Strategic Delivery",
  atAGlance: {
    targetAudience:
      "Business owner & multi-company finance operators managing cement distribution, port logistics, and a coffee shop",
    role: "Lead Product Designer & Strategic Consultant",
    team: "2 people (Tri Anugerah Yusra: Discovery, IA, UI; Muhammad Jihad Robbani: Full-stack Development)",
    timeline: "1 month 15 days (45 days) — Discovery to Delivery",
    scope:
      "Discovery, Accounting Rules Mapping, IA, Desktop UI, Design System, Handover",
    status: "Shipped to production across 3 companies (sample data shown)",
  },
  walkthrough: {
    title: "Guided Product Walkthrough",
    subtitle:
      "Four core steps demonstrating how everyday commercial documents flow into verified multi-entity financial statements",
    disclaimer: DISCLAIMER,
    steps: [
      {
        id: "switch-context",
        stepNumber: "01",
        title: "Switch the business context",
        description:
          "One login provides dedicated workspaces for each of the three businesses. Switching companies swaps the operational tools in the sidebar while keeping the accounting core, table patterns, and mental model identical.",
        image: {
          src: `${base}/02-c1-dashboard.webp`,
          alt: "PT. Tangkian Lintas Anugerah cement distribution dashboard",
          caption:
            "Entity workspace: operational modules adapt per business while sharing one unified accounting core.",
          width: 3360,
          height: 2000,
        },
      },
      {
        id: "record-document",
        stepNumber: "02",
        title: "Record the source document",
        description:
          "Staff record commercial documents rather than ledger debits. The sales invoice form verifies customer credit limits and calculates DPP and VAT backwards from tax-inclusive prices in real time.",
        image: {
          src: `${base}/07-c1-invoice-form.webp`,
          alt: "Sales invoice form with live credit limit validation and VAT calculation",
          caption:
            "Sales invoice form: DPP and VAT are computed backwards with live credit limit verification before saving.",
          width: 3360,
          height: 2000,
        },
      },
      {
        id: "review-automatic-entry",
        stepNumber: "03",
        title: "Review the automatic entry",
        description:
          "Every saved invoice or PO posts its own double entry to the general ledger. System-generated rows carry an 'Otomatis' badge, distinguishing them from manual accounting adjustments during audit.",
        image: {
          src: `${base}/05-c1-journal-list.webp`,
          alt: "Journal entries ledger with Otomatis badge on system-written rows",
          caption:
            "Journal ledger: system-posted lines carry an 'Otomatis' badge, eliminating manual journal typing for routine trade.",
          width: 3360,
          height: 2000,
        },
      },
      {
        id: "read-group-performance",
        stepNumber: "04",
        title: "Read group performance",
        description:
          "The owner opens the consolidated report directly at any time. Per-entity revenue, profit share, balance sheets, and key performance ratios like ROE and ROA are derived live from ledger entries in just four clicks.",
        image: {
          src: `${base}/03c-consolidation-entities.webp`,
          alt: "Group consolidation summary showing side-by-side performance of all three entities",
          caption:
            "Group consolidation summary: each entity's contribution and elimination columns rendered live from source ledgers.",
          width: 3360,
          height: 2000,
        },
      },
    ],
  },
  keyDecisions: [
    {
      title: "Show the accounting consequence before committing",
      problem:
        "In legacy accounting systems, staff entered figures blindly and only discovered ledger discrepancies weeks later when the balance sheet failed to balance.",
      decision:
        "The sales invoice form shows credit limits, remaining limits, DPP, and VAT live as items are typed, validating the transaction before posting.",
      reasoning:
        "Turning documents into interactive guardrails eliminates post-posting journal corrections and prevents unauthorized credit extensions at the point of sale.",
      outcome:
        "Zero manual journal adjustments needed for routine commercial sales.",
      image: {
        label: "Sales invoice form showing live credit and tax calculation",
        src: `${base}/07-c1-invoice-form.webp`,
        caption:
          "The sales invoice form validates consequences live before saving.",
        ...SHOT,
      },
    },
    {
      title: "Mark system-generated entries with 'Otomatis'",
      problem:
        "Auditors and finance staff couldn't distinguish which ledger lines were posted from verified commercial documents versus manual adjustments.",
      decision:
        "Every system-posted double entry carries an explicit 'Otomatis' badge in the journal list, while manual adjustments remain unbadged.",
      reasoning:
        "Maintains audit clarity and builds trust in automated bookkeeping while preserving the flexibility for accountants to make manual closing adjustments.",
      outcome:
        "Audit trails are immediately transparent without running complex database queries.",
      image: {
        label: "Journal entries list with Otomatis badges",
        src: `${base}/05-c1-journal-list.webp`,
        caption:
          "The journal ledger clearly highlights system-generated lines with an 'Otomatis' badge.",
        ...SHOT,
      },
    },
    {
      title: "Adapt the sidebar, not the mental model",
      problem:
        "Three completely different businesses (cement distribution, port logistics, coffee shop) had to run on a single shared accounting core without feeling fragmented.",
      decision:
        "Switching entities swaps the operational modules and master data in the sidebar, but keeps the header, layout, table patterns, and financial reports identical.",
      reasoning:
        "Eliminates cognitive friction for administrative and finance personnel who manage books across multiple businesses on the same afternoon.",
      outcome:
        "Finance staff moved between entities with zero retraining or workflow confusion.",
      image: {
        label: "Entity workspace dashboard with tailored sidebar",
        src: `${base}/02-c1-dashboard.webp`,
        caption:
          "Consistent operational layout with business-specific modules in the sidebar.",
        ...SHOT,
      },
    },
    {
      title: "Key Stats with explicit formula printing",
      problem:
        "The business owner lacked financial software confidence and had to rely on a desk calculator for critical ratios like ROE, ROA, or ROIC.",
      decision:
        "Key Stats organizes executive metrics into 4 blocks (achievement, profitability, return & efficiency, growth) with the exact accounting formula printed directly beneath each value.",
      reasoning:
        "Printing 'ROE: Laba Bersih / Ekuitas' demystifies the metric and gives executive leadership genuine confidence in what they are reading.",
      outcome:
        "The owner reviews group return on capital independently without waiting for accountant briefings.",
      image: {
        label: "Key Stats dashboard with printed formulas",
        src: `${base}/04-key-stats.webp`,
        caption:
          "Key Stats dashboard showing every ratio with its explicit formula printed beneath.",
        ...SHOT,
      },
    },
  ],
  desktopFeatures: true,
  features: [],
  caseStudySections: [
    {
      title: "Let's imagine this...",
      body:
        "It is the first week of May. One owner manages three distinct businesses: a cement distributor, a port stevedoring and haulage company, and a coffee shop. He wants one straightforward answer: which of them made money last month, and which one is quietly eating cash?\n\nTo get it, someone had to open the legacy system for each company, read the numbers off the screen, and piece together a consolidated report in a spreadsheet by hand. Every transaction behind those numbers was already typed more than once: once into the profit and loss, once into the balance sheet, and once more wherever else it belonged. Key performance ratios like ROE or ROA were nowhere in the system; they had to be calculated on a desk calculator, if anyone found the time.\n\nThe answer would arrive a week later, and even then, nobody felt completely sure it was right.",
    },
    {
      title: "Problem backgrounds",
      body:
        "I spent the first week sitting alongside the people who actually use the system every day: the finance staff recording routine entries, and the owner who relies on the final numbers. Five recurring themes emerged in our conversations.",
      items: [
        {
          title: "Journals are typed by hand, more than once.",
          body: "Recording one transaction meant entering it into the profit and loss, then the balance sheet, then the supporting ledgers. The same number, keyed three times, by a human, at the end of a long day.",
        },
        {
          title: "The old interface works against the person using it.",
          body: "Dense screens, unlabelled fields, no indication of what a form will do once it is saved. Staff learned it by memorising sequences rather than by reading it.",
        },
        {
          title: "Nothing stops a wrong entry.",
          body: "Because the journal was the input, a typo in an account code or a reversed debit and credit went straight into the reports. Errors were found weeks later, when the balance sheet refused to balance.",
        },
        {
          title: "The owner's view is assembled by hand.",
          body: "There was no report that answered \"how is the group doing\". Someone had to export three companies' figures and merge them into a spreadsheet at every month end.",
        },
        {
          title: "No ratios, anywhere.",
          body: "ROE, ROA, ROIC, margins, receivable days, and inventory days: none of these existed in the old software. The owner was forced to make critical business decisions relying only on top-line revenue and current bank balances.",
        },
      ],
    },
    {
      title: "Goals",
      body:
        "The brief from the client was \"make it modern\". What they actually needed was narrower than that, so I wrote the goals down and got them agreed before any screen was designed.",
      items: [
        {
          title: "Make the document the input, and the journal the by-product.",
          body: "Staff record an invoice or a purchase order. The system writes the double entry. Nobody types a journal to record a sale.",
        },
        {
          title: "Give every company the modules its business actually has, without splitting the program.",
          body: "One login, one program, three workspaces: a cement distributor needs warehouses and delivery orders, a stevedoring company needs job orders and subcontractors, and a coffee shop needs an intuitive menu.",
        },
        {
          title: "Make the consolidated report a page, not a project.",
          body: "Pick a month, read the group's profit and loss, balance sheet, and per-entity contribution. No exporting, no merging.",
        },
        {
          title: "Put the ratios the owner needs on a screen he can open himself.",
          body: "ROE, ROA, ROIC, margins, free cash flow, receivable days, and inventory days: calculated directly from the same journals, without relying on separate spreadsheets.",
        },
      ],
    },
    {
      title: "Project duration and teams",
      body:
        "The project ran for 1 month and 15 days, from initial client discovery to a working system in their hands. We were a lean team of two.\n\nI led the project: I ran discovery sessions with the team, translated intricate accounting rules into clear product structure, designed the information architecture and every screen, and served as the client's strategic advisor throughout delivery, including those honest moments when you have to guide a client away from what they thought they wanted toward what truly solves their problem.\n\nMuhammad Jihad Robbani built the system.\n\nWorking in such a close pair meant design choices met technical reality immediately. If a flow couldn't be built reliably in the time we had, it wasn't a good flow, and I iterated several screens on the spot to keep the experience clean and feasible.",
      table: {
        headers: ["Phase", "Length", "What happened"],
        rows: [
          ["Discovery & requirements", "~1 week", "Sessions with finance staff and the owner; audit of the old system; chart of accounts per entity"],
          ["IA, flows & UI design", "~2.5 weeks", "Architecture, journal rules, screen design, review loops with the client"],
          ["Build, correction & handover", "~2.5 weeks", "Implementation, data checks against the client's own figures, training"],
        ],
      },
    },
    {
      title: "Information requirements",
      body:
        "Before drawing anything, I had to understand what the system truly needed to know, because accounting logic is completely unforgiving. Three core decisions shaped everything that followed.\n\nEach entity keeps its own books. Separate chart of accounts, separate master data, separate documents, and separate journals. The consolidation reads from all three and never merges them into one tangled set of books. That is what keeps the group report legally accurate rather than just a rough estimate.\n\nEvery posted document must name its accounts. An invoice knows it debits receivables and credits revenue and output VAT. A purchase order knows it debits goods-in-transit and credits payables. Those rules had to be written down clearly per document type and entity before building anything (detailed in the journal rules table below).\n\nReports are derived live, never stored. Profit and loss, balance sheet, cash flow, key stats, and consolidated summaries are all computed from the journals the moment you open them. There is no second place where numbers can drift or fall out of sync.",
      table: {
        headers: ["Document", "Entity", "Debit", "Credit"],
        rows: [
          ["Sales invoice", "All three", "Piutang Usaha (01-007)", "Penjualan (04-001) + PPN Keluaran (02-003)"],
          ["Cash sale", "Arobi", "Kas / Bank (01-001 / 01-002)", "Pendapatan Penjualan (04-001)"],
          ["Delivery order (Surat Jalan)", "Cement", "HPP (05-001)", "Persediaan (01-005)"],
          ["Purchase order", "All three", "Pembelian Dalam Perjalanan (01-006)", "Hutang Usaha (02-001) or Kas / Bank"],
          ["Goods receipt", "Cement, Arobi", "Persediaan (01-005)", "Pembelian Dalam Perjalanan (01-006)"],
          ["PBM / Dooring invoice", "Logistics", "Piutang Usaha (01-007)", "Pendapatan Dooring (04-010) / Pendapatan PBM (04-011) + PPN Keluaran"],
          ["Customer payment", "All three", "Kas / Bank", "Piutang Usaha (01-007)"],
          ["Vendor payment", "All three", "Hutang Usaha (02-001)", "Kas / Bank"],
        ],
        caption: "Every rule in this table is a line of code the user never has to think about.",
      },
    },
    {
      title: "Information architecture",
      body:
        "The hardest structural question was how three very different businesses could share one software system without feeling like three disjointed apps.\n\nThe solution was to organize the navigation into three clean layers. Access and the entity switcher sit at the top. The middle layer is tailored to each business: each company sees only the operational tools it actually needs. Underneath, every company shares an identical, robust accounting core: journal, general ledger, trial balance, profit and loss, balance sheet, cash flow, and key stats. Group consolidation sits comfortably on top of all three, reading their data automatically.\n\nThat thoughtful split is why the coffee shop's sidebar is delightfully short while the cement company's is comprehensive, yet the owner still gets one clear overview at the end.",
      imageColumns: 1,
      images: [
        {
          label:
            "Information architecture diagram: login and entity switcher above three entity workspaces, a shared accounting core below, and the consolidation layer at the bottom",
          src: `${base}/ia-information-architecture.svg`,
          caption:
            "Information architecture: one login, three entity workspaces, one shared accounting core, and an automatic consolidation layer on top.",
          frame: false,
          width: 1600,
          height: 1100,
        },
      ],
    },
    {
      title: "Userflow",
      body:
        "Three core flows shaped the entire product. I mapped them out before designing any screens, which is why the resulting interface ended up so calm and uncluttered.\n\nThe first flow eliminates manual double entry: when staff complete and post a sales invoice, the journal entry writes itself. The journal view still exists for adjustments when an accountant needs it, but everyday sales never require manual ledger entries.\n\nThe second flow brings the same simplicity to purchasing across four stages: purchase order, goods receipt, vendor bill, and payment. Each step posts its own verified entry, ensuring payable balances and physical stock values remain perfectly aligned with the general ledger.\n\nThe third flow is designed specifically for the owner: log in, open the consolidated report, select a month, and review the three tabs. A task that once took a full week of manual spreadsheet assembly now takes just four clicks.",
      imageColumns: 1,
      images: [
        {
          label:
            "User flow: selecting a customer, entering items, checking totals, posting the invoice, and the automatic journal that results",
          src: `${base}/userflow-invoice-to-journal.svg`,
          caption:
            "Sales invoice: automatic journal. The operator never opens the journal screen.",
          frame: false,
          width: 1720,
          height: 760,
        },
        {
          label:
            "User flow: purchase order, goods receipt, vendor bill and payment, each posting its own journal entry",
          src: `${base}/userflow-po-to-payable.svg`,
          caption: "Purchasing, across three documents and four automatic entries.",
          frame: false,
          width: 1720,
          height: 620,
        },
        {
          label:
            "User flow: the owner logs in, opens the consolidated report, reads three tabs, opens key stats, and exports",
          src: `${base}/userflow-owner-consolidation.svg`,
          caption: "The owner's path: four clicks to a group-level answer.",
          frame: false,
          width: 1720,
          height: 620,
        },
      ],
    },
    {
      title: "Design decisions",
      body: "Four decisions did most of the work.",
      items: [
        {
          title: "Show the accounting consequence before the user commits.",
          body: "The invoice form shows the customer's credit limit, outstanding receivable and remaining limit the moment a customer is selected, and DPP, VAT and grand total update live as items are typed. The person posting the document can see what it will do before they do it.",
        },
        {
          title: "Mark what the system wrote.",
          body: "Every automatic entry carries an \"Otomatis\" badge in the journal list. Staff can tell at a glance which lines came from a verified document and which were entered manually, which saves tremendous time during audits or corrections.",
        },
        {
          title: "Change the sidebar, not the app, when you change company.",
          body: "Switching entity swaps the module list, the chart of accounts, the master data and the branding, but keeps the layout, the table patterns and the report screens identical. Staff who work across two companies do not relearn anything.",
        },
        {
          title: "Give the owner a screen he does not need help to read.",
          body: "Key Stats presents an executive summary organized into four clean blocks (achievement, profitability, return and efficiency, and growth) with the exact formula printed beneath each number. Having 'ROE: Laba Bersih / Ekuitas' right beneath the metric gives the owner genuine confidence in what he's reading without having to ask for explanations.",
        },
      ],
    },
    {
      title: "Final design",
      body: "Every screen below is the shipped product.",
      note: DISCLAIMER,
      imageColumns: 1,
      images: [
        {
          label: "Group summary screen showing the three entities side by side with their share of group revenue and profit",
          src: `${base}/03c-consolidation-entities.webp`,
          caption:
            "Group summary: each entity's revenue, net profit, assets and equity side by side, with its share of group revenue and profit.",
          ...SHOT,
        },
        {
          label: "Consolidated profit and loss for April 2026 with an elimination column",
          src: `${base}/03-consolidation.webp`,
          caption:
            "Consolidated profit and loss for April 2026. The elimination column is reserved for inter-company transactions.",
          ...SHOT,
        },
        {
          label: "Consolidated balance sheet across the three entities",
          src: `${base}/03b-consolidation-balance.webp`,
          caption: "Consolidated balance sheet across the three entities.",
          ...SHOT,
        },
        {
          label: "Key Stats screen with every ratio grouped into four blocks, each printing its formula",
          src: `${base}/04-key-stats.webp`,
          caption: "Key Stats. Every ratio the owner asked for, on one page, with its formula printed underneath.",
          ...SHOT,
        },
        {
          label: "Sales invoice form showing customer credit limit, remaining limit, and live DPP and VAT totals",
          src: `${base}/07-c1-invoice-form.webp`,
          caption:
            "The sales invoice. Credit limit and remaining limit appear as soon as a customer is chosen; VAT and DPP are calculated backwards from a VAT-inclusive price.",
          ...SHOT,
        },
        {
          label: "Journal list with an Otomatis badge on every entry written by the system",
          src: `${base}/05-c1-journal-list.webp`,
          caption: "The journal list. The \"Otomatis\" badge marks every entry the system wrote from a document.",
          ...SHOT,
        },
        {
          label: "Cement distribution dashboard with sales, receivables ageing, stock per warehouse and recent postings",
          src: `${base}/02-c1-dashboard.webp`,
          caption:
            "PT. Tangkian Lintas Anugerah (cement distribution): sales, receivables ageing, stock per warehouse, and recent postings.",
          ...SHOT,
        },
        {
          label: "Port logistics dashboard using the same layout with a different sidebar",
          src: `${base}/20-c2-dashboard.webp`,
          caption:
            "PT. Tangkian Samudera Logistik (port logistics): the same layout tailored with dedicated operational modules in the sidebar.",
          ...SHOT,
        },
        {
          label: "Job order list keyed to bill of lading, vessel and voyage",
          src: `${base}/21-c2-jobs.webp`,
          caption:
            "Job orders linked to bill of lading, vessel, and voyage: the operational foundation from which logistics invoices are generated.",
          ...SHOT,
        },
        {
          label: "Coffee shop dashboard with the shortest sidebar of the three entities",
          src: `${base}/30-c3-dashboard.webp`,
          caption: "Arobi (coffee shop): the most compact entity of the three, reflected in its focused, minimal sidebar.",
          ...SHOT,
        },
        {
          label: "Profit and loss report computed from the journals",
          src: `${base}/10-c1-income-statement.webp`,
          caption: "Profit and loss, computed from the journals rather than typed.",
          ...SHOT,
        },
        {
          label: "Balance sheet for the same period and the same source data",
          src: `${base}/11-c1-balance-sheet.webp`,
          caption: "Balance sheet for the same period and the same source data.",
          ...SHOT,
        },
        {
          label: "Login screen shared by all three companies",
          src: `${base}/01-login.webp`,
          caption: "One login for all three companies; the menus a user sees are set per role and per entity.",
          ...SHOT,
        },
      ],
    },
    {
      title: "Beyond the first system",
      body:
        "The client partnered with us twice more after this initial release. I went on to design two additional dedicated systems for them, expanding both their cement distribution and port logistics operations beyond what a general accounting core could cover. In total: one client, four companies, and three specialized systems designed over six months.\n\nCollaborating with the same client across multiple platforms deepened my understanding of their daily workflow. Lessons learned in the first release informed the next two, allowing us to build upon proven patterns rather than reinventing from scratch.\n\nFor the port logistics operation (handling vessel berthing, voyages, bills of lading, and stevedoring job orders), you can explore the dedicated case study: [Tangkian Port Logistics](/projects/tangkian-logistics).",
    },
  ],
};
