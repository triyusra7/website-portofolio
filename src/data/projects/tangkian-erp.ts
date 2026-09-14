import type { Project } from "./types";

const base = "/projects/tangkian-erp";

/** Every product screenshot was captured at 2× — 3360×2000. */
const SHOT = { width: 3360, height: 2000 } as const;

const DISCLAIMER =
  "All figures in these screenshots are sample data prepared for this case study. The client's actual financial data is not shown.";

export const tangkianErp: Project = {
  id: "tangkian-erp",
  title: "Tangkian ERP",
  company: "Freelance — group of three companies",
  projectType: "Freelance",
  category: "Accounting ERP · Multi-entity consolidation",
  year: "2026",
  cover: `${base}/hero-erp-3-entities.jpg`,
  ogImage: `${base}/og-erp-3-entities.jpg`,
  thumbnail: `${base}/thumb-erp-3-entities.jpg`,
  gradient: "from-blue-100 via-background to-card",
  tags: ["ERP", "Accounting", "Web App"],
  summary:
    "A web-based accounting system that runs three companies — cement distribution, port logistics, and a coffee shop — inside one program, writes every journal entry automatically from the source document, and produces a consolidated group report on demand.",
  problem:
    "Recording one transaction meant typing the same number into the profit and loss, the balance sheet and the supporting ledgers. Consolidation was rebuilt by hand in a spreadsheet at every month end, and ratios like ROE or ROA did not exist in the system at all.",
  solution:
    "The document is the input and the journal is the by-product: staff record an invoice or a purchase order, and the system writes the double entry. One login gives three entity workspaces — each with only the operational modules its business has — over an identical accounting core, with the consolidated report and Key Stats reading all three.",
  outcome:
    "The three companies now run on one program. Invoices and purchase orders write their own journals, so the finance staff record a document once instead of keying the same figure into three places. The consolidated report — profit and loss, balance sheet, and each entity's contribution to group revenue and profit — is a page the owner opens himself, for any month, instead of a spreadsheet someone assembles at month end. Key Stats puts ROE, ROA, ROIC, margins, free cash flow and turnover days on the same screen, calculated from the same journals as everything else.\n\nDelivered in 1 month and 15 days, by two people.",
  resultStats: [
    { value: "3", label: "entities in one program" },
    { value: "0", label: "journals typed by hand for a normal sale or purchase" },
    { value: "4 clicks", label: "from login to a consolidated group report" },
    { value: "45 days", label: "discovery to delivery" },
  ],
  resultNote: DISCLAIMER,
  desktopFeatures: true,
  features: [],
  caseStudySections: [
    {
      title: "Let's imagine this...",
      body:
        "It is the first week of May. One owner holds three businesses: a cement distributor, a port stevedoring and haulage company, and a coffee shop. He wants one answer — which of them made money last month, and which one is quietly eating cash?\n\nTo get it, someone has to open the old system for each company, read the numbers off the screen, and rebuild a consolidated report in a spreadsheet by hand. Every transaction behind those numbers was already typed more than once: once into the profit and loss, once into the balance sheet, once more wherever else it belonged. Ratios like ROE or ROA are not in the system at all — they get calculated on a calculator, if anyone bothers.\n\nThe answer arrives a week later. Nobody is completely sure it is right.",
    },
    {
      title: "Problem backgrounds",
      body:
        "I spent the first week sitting with the people who actually use the system — the finance staff who input every day, and the owner who only ever looks at the result. Five problems came up in every conversation.",
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
          body: "ROE, ROA, ROIC, margins, receivable days, inventory days — none of it existed in the system. The owner was making decisions on revenue and bank balance alone.",
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
          body: "One login, one program, three workspaces — a cement distributor needs warehouses and delivery orders; a stevedoring company needs job orders and subcontractors; a coffee shop needs a menu.",
        },
        {
          title: "Make the consolidated report a page, not a project.",
          body: "Pick a month, read the group's profit and loss, balance sheet, and per-entity contribution. No exporting, no merging.",
        },
        {
          title: "Put the ratios the owner needs on a screen he can open himself.",
          body: "ROE, ROA, ROIC, margins, free cash flow, receivable and inventory days — calculated from the same journals, not from a separate spreadsheet.",
        },
      ],
    },
    {
      title: "Project duration and teams",
      body:
        "The project ran for 1 month and 15 days, from client discovery to a working system in the client's hands. We were two people.\n\nI led the project: I ran the discovery sessions with the client, translated accounting requirements into a product structure, designed the information architecture, user flows and every screen, and stayed on as the client's consultant through delivery — including the part where you have to tell a client that the thing they asked for is not the thing they need.\n\nMuhammad Jihad Robbani built it.\n\nWorking in a pair this small meant design decisions had to survive contact with implementation immediately. A flow that could not be built in the time we had was not a good flow, and I redrew several of them for that reason.",
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
        "Before drawing anything I had to settle what the system needed to know, because accounting is unforgiving about this. Three decisions shaped everything after.\n\nEach entity keeps its own books. Separate chart of accounts, separate master data, separate documents, separate journals. The consolidation reads all three — it never merges them into one set of books. That is what makes the group report correct rather than just a sum.\n\nEvery posted document must name its accounts. An invoice knows it debits receivables and credits revenue and output VAT. A purchase order knows it debits goods-in-transit and credits payables. Those rules had to be written down, per document type, per entity, before anything was built — see the journal rules table below.\n\nReports are derived, never stored. Profit and loss, balance sheet, cash flow, key stats and the consolidated report are all computed from the journals at the moment you open them. There is no second place where a number can be wrong.",
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
        "The hardest structural question was how three different businesses share one program without turning into three disconnected apps.\n\nThe answer was to split the navigation into three layers. Access and the entity switcher sit above everything. The middle layer is the part that differs — each entity gets only the operational modules its business has. Underneath, every entity runs an identical accounting core: journal, general ledger, trial balance, profit and loss, balance sheet, cash flow, key stats. Group reporting sits on top of all three and reads them.\n\nThat split is why the coffee shop's sidebar is short and the cement company's is long, and why the owner still gets one number at the end.",
      imageColumns: 1,
      images: [
        {
          label:
            "Information architecture diagram: login and entity switcher above three entity workspaces, a shared accounting core below, and the consolidation layer at the bottom",
          src: `${base}/ia-information-architecture.svg`,
          caption:
            "Information architecture — one login, three entity workspaces, one shared accounting core, one consolidation layer on top.",
          frame: false,
          width: 1600,
          height: 1100,
        },
      ],
    },
    {
      title: "Userflow",
      body:
        "Three flows carried the whole product. I drew them before any screen, and they are the reason the interface ended up as small as it did.\n\nThe first is the one that removed the double entry: a staff member fills in a sales invoice and posts it, and the journal writes itself. The journal screen still exists — an accountant needs it for adjustments — but nobody has to open it to record a sale.\n\nThe second does the same thing for purchasing, across three documents: purchase order, goods receipt, vendor bill, payment. Each one posts its own entry, so the payable balance and the stock value can never drift apart from the ledger.\n\nThe third is the owner's flow, and it is short on purpose. Log in, open the consolidated report, pick a month, read three tabs. What used to take a week now takes four clicks.",
      imageColumns: 1,
      images: [
        {
          label:
            "User flow: selecting a customer, entering items, checking totals, posting the invoice, and the automatic journal that results",
          src: `${base}/userflow-invoice-to-journal.svg`,
          caption: "Sales invoice → automatic journal. The operator never opens the journal screen.",
          frame: false,
          width: 1600,
          height: 900,
        },
        {
          label:
            "User flow: purchase order, goods receipt, vendor bill and payment, each posting its own journal entry",
          src: `${base}/userflow-po-to-payable.svg`,
          caption: "Purchasing, across three documents and four automatic entries.",
          frame: false,
          width: 1600,
          height: 900,
        },
        {
          label:
            "User flow: the owner logs in, opens the consolidated report, reads three tabs, opens key stats, and exports",
          src: `${base}/userflow-owner-consolidation.svg`,
          caption: "The owner's flow. Four clicks to a group-level answer.",
          frame: false,
          width: 1600,
          height: 900,
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
          body: "Every automatic entry carries an \"Otomatis\" badge in the journal list. Staff can tell at a glance which lines came from a document and which were typed by a human — which matters enormously when something needs correcting.",
        },
        {
          title: "Change the sidebar, not the app, when you change company.",
          body: "Switching entity swaps the module list, the chart of accounts, the master data and the branding, but keeps the layout, the table patterns and the report screens identical. Staff who work across two companies do not relearn anything.",
        },
        {
          title: "Give the owner a screen he does not need help to read.",
          body: "Key Stats is one page, grouped into four blocks — achievement, profitability, return and efficiency, growth — with the formula printed under every figure. \"ROE — Laba Bersih / Ekuitas\" sitting under the number is the difference between a report he trusts and one he asks someone else about.",
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
            "PT. Tangkian Lintas Anugerah — cement distribution. Sales, receivables ageing, stock per warehouse, and recent postings.",
          ...SHOT,
        },
        {
          label: "Port logistics dashboard using the same layout with a different sidebar",
          src: `${base}/20-c2-dashboard.webp`,
          caption:
            "PT. Tangkian Samudera Logistik — port logistics. The same layout, a different set of modules in the sidebar.",
          ...SHOT,
        },
        {
          label: "Job order list keyed to bill of lading, vessel and voyage",
          src: `${base}/21-c2-jobs.webp`,
          caption:
            "Job orders keyed to bill of lading, vessel and voyage — the operational record a logistics invoice is built from.",
          ...SHOT,
        },
        {
          label: "Coffee shop dashboard with the shortest sidebar of the three entities",
          src: `${base}/30-c3-dashboard.webp`,
          caption: "Arobi — coffee shop. The smallest of the three, and the sidebar shows it.",
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
  ],
};
