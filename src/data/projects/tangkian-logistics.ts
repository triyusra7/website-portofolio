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
  resultStats: [
    { value: "100%", label: "of job orders traceable to vessel & bill of lading" },
    { value: "0", label: "duplicate spreadsheets required between dock and finance" },
    { value: "Same-day", label: "invoicing upon vessel discharge completion" },
    { value: "Parent ERP", label: "seamless accounting integration without manual journals" },
  ],
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
