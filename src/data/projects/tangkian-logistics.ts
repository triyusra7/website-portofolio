import type { Project } from "./types";

const base = "/projects/tangkian-erp";

export const tangkianLogistics: Project = {
  id: "tangkian-logistics",
  title: "Tangkian Port Logistics",
  company: "PT. Tangkian Samudera Logistik",
  projectType: "Freelance",
  category: "Port Logistics & Stevedoring · Operations System",
  year: "2026",
  cover: `${base}/20-c2-dashboard.webp`,
  thumbnail: `${base}/20-c2-dashboard.webp`,
  gradient: "from-teal-100 via-background to-card",
  tags: ["Logistics", "Maritime", "Enterprise SaaS", "Web App"],
  summary:
    "The operational companion to Tangkian ERP: managing vessels, bills of lading, stevedoring job orders, and subcontracted haulage across port operations.",
  problem:
    "Port stevedoring and haulage cannot run on a standard inventory or retail workflow. Operational reality at the dock revolves around vessels, voyage numbers, bills of lading, and shifting subcontracted equipment. Dispatchers were relying on manual clipboards and text messages to verify which cargo had been cleared, leading to billing delays and unbilled demurrage.",
  solution:
    "Designed a dedicated operational workflow centered around maritime units: Vessel Registry, Voyage Tracking, and Job Orders (PBM and Dooring). Every job order links directly to its bill of lading and manifest. Completed operations feed directly into logistics invoicing, seamlessly posting revenues to the group's shared accounting core.",
  outcome:
    "Dock operations, vessel dispatch, and subcontractor manifests are managed in one unified operational system. Invoices generate directly from verified manifests, eliminating billing lag and manual spreadsheet reconciliations.\n\nShipped as the second dedicated program in the Tangkian corporate group series.",
  prominence: "standard",
  caseStudyType: "standard",
  problemSummary:
    "Dock stevedoring and haulage required tracking vessels, bills of lading, and subcontractors, while manual tally sheets caused 2-week billing delays.",
  roleSummary:
    "Lead Product Designer — Maritime Units IA, Job Order Tracking & Integrated Billing",
  atAGlance: {
    targetAudience:
      "Port dispatchers, quay tally clerks, and logistics finance personnel at PT. Tangkian Samudera Logistik",
    role: "Lead Product Designer & System Architect",
    team: "Tri Anugerah Yusra (Design & Architecture), Muhammad Jihad Robbani (Engineering)",
    timeline: "Shipped as follow-up specialized system in the Tangkian series",
    scope:
      "Vessel Registry, Voyage Tracking, PBM & Dooring Job Orders, Integrated Group Billing",
    status: "Shipped to production (companion to Tangkian ERP)",
  },
  walkthrough: {
    title: "Guided Port Logistics Workflow",
    subtitle:
      "Four steps demonstrating how dock dispatchers track vessels, assign stevedoring job orders, and generate billing directly to the parent ERP ledger",
    disclaimer:
      "All vessel names and voyage manifests shown are demonstration operational data.",
    steps: [
      {
        id: "log-step-1",
        stepNumber: "01",
        title: "Quay & fleet operational dashboard",
        description:
          "Dispatchers track active vessel berthings, monthly job orders, and stevedoring progress directly from the quay-side overview.",
        image: {
          src: `${base}/20-c2-dashboard.webp`,
          alt: "PT. Tangkian Samudera Logistik operational overview dashboard",
          caption:
            "Operational dashboard: live tracking of vessel arrivals, cargo discharge, and logistics revenue.",
          width: 3360,
          height: 2000,
        },
      },
      {
        id: "log-step-2",
        stepNumber: "02",
        title: "Issue stevedoring job orders (SPK)",
        description:
          "Staff create job orders directly linked to the vessel voyage and customer BL, setting equipment and subcontractor allocations before discharge begins.",
        image: {
          src: `${base}/21-c2-jobs.webp`,
          alt: "Job orders registry keyed to bill of lading and voyage",
          caption:
            "Job order management: linking stevedoring tasks directly to incoming vessel manifests.",
          width: 3360,
          height: 2000,
        },
      },
      {
        id: "log-step-3",
        stepNumber: "03",
        title: "Automated logistics billing",
        description:
          "Upon discharge completion, verified tally sheets aggregate into draft invoices that post directly to the shared group accounting ledger under logistics revenue.",
        image: {
          src: `${base}/22-c2-invoices.png`,
          alt: "Automated Dooring and PBM invoicing screen",
          caption:
            "Logistics invoicing: automated billing generation from verified manifests without duplicate spreadsheets.",
          width: 3360,
          height: 2000,
        },
      },
      {
        id: "log-step-4",
        stepNumber: "04",
        title: "Operational performance reporting",
        description:
          "Logistics leadership reviews cargo tonnage, demurrage, and subcontractor haulage expenses by voyage to maintain dock margins.",
        image: {
          src: `${base}/23-c2-report.png`,
          alt: "Voyage performance and subcontracted haulage report",
          caption:
            "Voyage reporting: breakdown of cargo discharge tonnage, operational costs, and profitability.",
          width: 3360,
          height: 2000,
        },
      },
    ],
  },
  desktopFeatures: true,
  features: [],
  caseStudySections: [
    {
      title: "Context & Parent System",
      body:
        "This system is the operational child of Tangkian ERP. While the financial structure and chart of accounts are handled by the group core, PT. Tangkian Samudera Logistik required deep operational workflows tailored to stevedoring (PBM), port haulage, and vessel handling that standard ERP tools could not accommodate.\n\nDecisions made in the parent program set the technical and UX constraints: familiar typography, consistent navigation structures, and automatic journal posting from operational billing.",
    },
    {
      title: "The operational problem at the dock",
      body:
        "Logistics revenue is generated at the quay, not in an office. Three distinct challenges defined the operational workflow:",
      items: [
        {
          title: "Vessel and voyage hierarchy",
          body: "A customer doesn't just order a service; cargo is delivered by a specific vessel on a specific voyage. Every bill of lading (BL) belongs to that voyage, and operational costs (berthing, pilotage, cranes) must be tracked against it.",
        },
        {
          title: "Disjointed subcontracting",
          body: "Haulage and stevedoring frequently require external dump trucks and crane operators. Tracking which subcontractor handled which job order was previously documented on physical paper notes.",
        },
        {
          title: "Delayed billing cycles",
          body: "Because manifests and discharge confirmations were collected manually, finance waited up to two weeks after a vessel departed before issuing the PBM or Dooring invoice.",
        },
      ],
    },
    {
      title: "Core Operational Workflows",
      body:
        "I organized the operational module into three primary layers: Fleet & Vessel Registry, Job Orders (Surat Perintah Kerja), and Operations Invoicing.",
      items: [
        {
          title: "Job orders keyed to vessel and Bill of Lading",
          body: "Staff create job orders directly tied to the incoming vessel, voyage code, and customer BL. Quantity, cargo type (cement clinker, bulk commodities), and designated destination are established before equipment moves.",
        },
        {
          title: "Real-time dispatch and manifest tracking",
          body: "Dispatchers record truck tallies and tonnage in real time. Discrepancies between the bill of lading and actual discharged weight are flagged immediately at the weighbridge.",
        },
        {
          title: "Automated logistics billing",
          body: "When discharge completes, the system compiles the verified job orders into a draft invoice. Once confirmed, the invoice posts directly to the shared group ledger under logistics revenue accounts.",
        },
      ],
    },
    {
      title: "Shipped Operational Interface",
      body: "Screens from the delivered port logistics application.",
      imageColumns: 1,
      images: [
        {
          label: "Logistics company operational dashboard",
          src: `${base}/20-c2-dashboard.webp`,
          caption: "PT. Tangkian Samudera Logistik: operational dashboard displaying active vessels, monthly job orders, and logistics revenue.",
          width: 3360,
          height: 2000,
        },
        {
          label: "Job order list keyed to bill of lading and vessel",
          src: `${base}/21-c2-jobs.webp`,
          caption: "Job orders list: each order is keyed to a vessel, voyage, customer, and cargo manifest.",
          width: 3360,
          height: 2000,
        },
        {
          label: "Logistics invoicing generated from verified job orders",
          src: `${base}/22-c2-invoices.png`,
          caption: "Dooring and PBM invoicing screen: automatically aggregates billable job orders into an official tax-compliant billing document.",
          width: 3360,
          height: 2000,
        },
        {
          label: "Operational reports per vessel and period",
          src: `${base}/23-c2-report.png`,
          caption: "Operational performance report by voyage, cargo volume, and subcontracted haulage costs.",
          width: 3360,
          height: 2000,
        },
        {
          label: "Subcontractor and vendor management",
          src: `${base}/25-c2-vendors.png`,
          caption: "Subcontractor registry: managing equipment providers, payment terms, and vendor balances.",
          width: 3360,
          height: 2000,
        },
      ],
    },
  ],
};
