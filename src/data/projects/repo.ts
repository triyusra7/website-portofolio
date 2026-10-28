import type { Project } from "./types";

const wix = "/projects/repo/wix";

export const repo: Project = {
  id: "repo",
  title: "REPO",
  company: "PasarMIKRO",
  projectType: "Full-time",
  category: "Fintech · Credit Feature",
  year: "2021 – 2024",
  cover: "/projects/repo-cover.jpg",
  gradient: "from-green-100 via-background to-card",
  prominence: "featured",
  caseStudyType: "featured",
  problemSummary:
    "Traders holding verified purchase orders lacked fast working capital to buy commodities, while traditional bank loans took weeks to approve.",
  roleSummary:
    "Product Designer — Document Workflow, Assessment Logic, Desktop UI & Specification",
  atAGlance: {
    targetAudience:
      "Agricultural commodity traders & institutional buyers on PasarMIKRO (~1,000 registered, ~600 active platform users)",
    role: "Product Designer (Solo feature designer within squad)",
    team: "1 Product Designer, 4 Developers (2 Full-stack, 2 Backend), 1 Tech Lead, 1 QA",
    timeline: "1 sprint (2 weeks / 10 working days)",
    scope:
      "PO/SO Collateral Submission, Desktop Web UI, Design System Alignment, Developer Handoff",
    status: "Shipped to production on PasarMIKRO Business",
  },
  tags: ["Fintech", "Credit", "B2B", "Web App"],
  summary:
    "A B2B agricultural trade financing (repo) feature designed for PasarMIKRO, enabling traders across a network of ~1,000 registered users (~600 active) to collateralize verified purchase orders and obtain short-term working capital.",
  problem:
    "Traders often held confirmed, high-value purchase orders from large buyers, but lacked cash upfront to purchase the required commodities from smallholders and suppliers. Traditional bank loans were too slow for agricultural harvest cycles. Without fast credit, traders couldn't fulfill orders, damaging business continuity and limiting smallholder sales.",
  solution:
    "Designed the REPO desktop workflow (PasarMIKRO Business) where traders submit PO/SO documents for instant credit assessment. The system supports multi-supplier invoice accumulation, automated collateral verification, buyback clauses where commodity ownership returns to the trader upon settlement, and direct default protection through buyer confirmations.",
  outcome:
    "Traders can now access working capital within days rather than weeks, unlocking larger transaction volumes without working capital constraints. Designed, validated, and deployed into production within a single two-week sprint.",
  walkthrough: {
    title: "Guided Trade Financing Walkthrough",
    subtitle:
      "Four steps showing how agricultural traders collateralize verified purchase orders to unlock short-term liquidity",
    disclaimer:
      "All figures in these mockups reflect sample trade transactions on PasarMIKRO Business.",
    steps: [
      {
        id: "repo-step-1",
        stepNumber: "01",
        title: "Submit verified trade documents",
        description:
          "Traders upload confirmed POs and supplier invoices through a guided step-by-step form. Each field is validated against attached PDFs with multi-supplier invoice accumulation.",
        image: {
          src: "/projects/repo/screen-form.jpg",
          alt: "REPO document submission form on PasarMIKRO Business",
          caption:
            "Document upload: attaching verified buyer POs and supplier invoices as credit collateral.",
          width: 1200,
          height: 750,
        },
      },
      {
        id: "repo-step-2",
        stepNumber: "02",
        title: "Review institutional verification & terms",
        description:
          "Before funds release, traders verify buyer confirmation status, loan tenor, transparent fee deductions, and buyback ownership terms in a dedicated review step.",
        image: {
          src: "/projects/repo/screen-confirm.jpg",
          alt: "Verification and trade terms review modal",
          caption:
            "Verification gate: inspecting fee breakdown, institutional buyer authenticity, and repayment schedule.",
          width: 1200,
          height: 750,
        },
      },
      {
        id: "repo-step-3",
        stepNumber: "03",
        title: "Monitor live Talangin credit line",
        description:
          "Upon approval, funds are disbursed directly to suppliers. Traders monitor their active Talangin credit balance, operational capital, and order fulfillment status.",
        image: {
          src: "/projects/repo/screen-dashboard.jpg",
          alt: "PasarMIKRO Business credit dashboard and transaction status",
          caption:
            "Dashboard overview: tracking active repo credit lines, upcoming due dates, and operational cash flow.",
          width: 1200,
          height: 750,
        },
      },
      {
        id: "repo-step-4",
        stepNumber: "04",
        title: "Settle trade & restore credit limit",
        description:
          "When institutional buyers settle their invoice, commodity title reverts to the trader and their financing limit is immediately restored for subsequent harvest orders.",
        image: {
          src: "/projects/repo/screen-done.jpg",
          alt: "Trade financing completion and credit limit restored notice",
          caption:
            "Settlement completion: automated limit restoration allows traders to immediately finance new orders.",
          width: 1200,
          height: 750,
        },
      },
    ],
  },
  features: [
    {
      title: "Document Submission Flow",
      description:
        "Traders upload PO and invoice documents through a guided step-by-step form. Up to 3 PDF documents can be attached per submission, with each field validated against the uploaded docs.",
      image: "/projects/repo/screen-form.jpg",
    },
    {
      title: "Dashboard & Repo Status",
      description:
        "The desktop dashboard shows Talangin (credit balance), Uang Belanja, and Uang Usaha at a glance, with a full transaction list filterable by Pembelian and Penjual.",
      image: "/projects/repo/screen-dashboard.jpg",
    },
    {
      title: "Approval & Verification",
      description:
        "Before finalizing, traders review all submitted details in a dedicated confirmation step, which helps catch mistakes early and gives PasarMIKRO time to verify PO authenticity before releasing funds.",
      image: "/projects/repo/screen-confirm.jpg",
    },
    {
      title: "Completion & Limit Restore",
      description:
        "Once approved and the cycle completes, traders receive a success confirmation and their repo limit is restored, ready for the next transaction.",
      image: "/projects/repo/screen-done.jpg",
    },
  ],
  flowImage: "/projects/repo/userflow.jpg",
  bannerImages: [
    "/projects/repo/banner-1.png",
    "/projects/repo/banner-2.png",
    "/projects/repo/banner-3.png",
  ],
  resultImage: "/projects/repo/mockup-laptop.png",
  desktopFeatures: true,
  caseStudySections: [
    {
      title: "Let's imagine this...",
      body:
        "Imagine you are an agricultural trader with a confirmed purchase order from an institutional buyer for 1,000 kg of milk powder. Your warehouse holds only 500 kg. You need immediate liquidity to procure the remaining 500 kg from your supplier, but banks require weeks for loan approvals and hard physical collateral.\n\nBy 'repoing' your verified Sales Order (SO) to PasarMIKRO, you unlock an immediate line of credit, buy the stock, fulfill the customer order, and repay the financing upon settlement with an agreed margin.",
      images: [
        {
          label: "PasarMIKRO Business REPO trade context",
          src: `${wix}/cover-96678b.jpg`,
          caption: "Trade liquidity scenario: unlocking instant financing from verified purchase orders.",
        },
      ],
    },
    {
      title: "Problem background",
      body:
        "Traders frequently faced liquidity bottlenecks. While they held verified purchase orders from reputable institutional buyers, they lacked upfront capital to purchase crops from farmers and suppliers. Without fast, reliable credit, profitable deals were lost, threatening business continuity for both traders and smallholders across PasarMIKRO's 1,000 registered users.",
    },
    {
      title: "Goals",
      body:
        "Provide fast, structured credit guaranteed by verified trade documents (PO/SO). Traders restock commodities immediately, fulfill their delivery commitments, and repay the platform upon payment with an agreed margin.",
    },
    {
      title: "Project duration and team",
      body:
        "Delivered in a single two-week development sprint (10 working days) from discovery to production. The cross-functional team consisted of one Product Designer, two Full-stack Developers, two Backend Developers, one Tech Lead, and one QA Engineer.",
    },
    {
      title: "Information requirements",
      images: [
        {
          label: "Collateral document requirement specifications",
          src: `${wix}/1-06d1c5.jpg`,
          caption: "Information requirements: required fields and document validity checks.",
        },
      ],
    },
    {
      title: "Financial logic & workflow",
      body:
        "PasarMIKRO Repo and Loan Structure:\n\n• Documented collateral: Financing is issued against verified purchase orders or inventory stored in partner warehouses, ensuring credit is backed by real underlying commodity demand.\n• Document verification: Traders submit the PO and invoice. PasarMIKRO verifies authenticity with the institutional buyer.\n• Accumulated credit: Traders can accumulate financing across multiple distinct suppliers to fulfill a single large contract.\n• Repayment and limit restoration: As buyers settle invoices, credit lines are automatically restored for future orders.\n• Buyback mechanism: Ownership transfers through PasarMIKRO as a financing conduit and reverts to the trader upon completion.",
      images: [
        {
          label: "REPO trade financing structure and flow diagram",
          src: `${wix}/ilustrasi-a734da.jpg`,
          caption: "Financial architecture: verified trade collateral, institutional approval, and limit restoration.",
        },
      ],
    },
    {
      title: "User flow",
      body:
        "Based on the credit assessment rules, I mapped the complete user flow from document upload and risk review to approval and automated funds release.",
      images: [
        {
          label: "Trader end-to-end user flow diagram",
          src: `${wix}/userflow-cb0bbb.jpg`,
          caption: "End-to-end flow: document submission, verification gate, credit disbursement, and repayment.",
        },
      ],
    },
    {
      title: "Interface Architecture",
      images: [
        {
          label: "Early desktop interface architecture in Figma",
          src: `${wix}/screenshot-2024-11-02-at-09-00-05-782cc1.png`,
          caption: "Desktop architecture for PasarMIKRO Business (PMB).",
        },
      ],
    },
    {
      title: "Design System Implementation",
      body:
        "Using our Figma component library, I designed the desktop web experience for PasarMIKRO Business (PMB). I established clear progress indicators, transparent fee and limit calculations, and detailed specification notes and user stories for developer handoff.",
      images: [
        {
          label: "Component specifications and user stories",
          src: `${wix}/screenshot-2024-11-02-at-08-18-04-9e2d4a.png`,
          caption: "Detailed form specifications and edge-case behaviors for front-end engineers.",
        },
        {
          label: "Multi-file upload interaction specifications",
          src: `${wix}/screenshot-2024-11-02-at-08-18-28-56ec73.png`,
          caption: "Document upload validation states and progress indicators.",
        },
      ],
    },
    {
      title: "Final Design",
      images: [
        {
          label: "Guided PO & Invoice document submission screen",
          src: `${wix}/fill-information-about-repo-974f85.jpg`,
          caption: "Main document submission interface with live limit verification.",
        },
      ],
    },
    {
      title: "Shipped Application Mockups",
      body:
        "The feature launched to production at the end of the sprint, providing working capital to active traders across the platform.",
      images: [
        {
          label: "Document upload and trade details form",
          src: `${wix}/1-b6672a.jpeg`,
          caption: "Step 1: Uploading confirmed PO and supplier invoice documents.",
        },
        {
          label: "Commodity volume and price breakdown",
          src: `${wix}/3-971388.jpeg`,
          caption: "Step 2: Entering commodity volume, unit pricing, and requested financing.",
        },
        {
          label: "Buyer institutional confirmation status",
          src: `${wix}/5-26110a.jpeg`,
          caption: "Step 3: Verification gate with institutional buyer confirmation.",
        },
        {
          label: "Multi-supplier invoice accumulation overview",
          src: `${wix}/7-68dca6.jpeg`,
          caption: "Step 4: Combining multiple invoices under one master contract.",
        },
        {
          label: "Credit risk assessment review step",
          src: `${wix}/9-f48ae6.jpeg`,
          caption: "Review step: checking fee breakdown, tenor, and repayment schedule.",
        },
        {
          label: "Instant financing approval notice",
          src: `${wix}/11-85ace4.jpeg`,
          caption: "Disbursement notice: funds released directly to supplier.",
        },
        {
          label: "Talangin balance and credit limit tracker",
          src: `${wix}/2-7a0c1c.jpeg`,
          caption: "Dashboard tracker: monitoring active loans and remaining credit limit.",
        },
        {
          label: "Active repo orders in PasarMIKRO Business",
          src: `${wix}/4-03b831.jpeg`,
          caption: "Order management: filtering transactions by purchase status and seller.",
        },
        {
          label: "Buyback clause and payment terms",
          src: `${wix}/6-962242.jpeg`,
          caption: "Buyback agreement: automatic title return upon loan settlement.",
        },
        {
          label: "Settlement breakdown and fee transparency",
          src: `${wix}/8-9d72ac.jpeg`,
          caption: "Settlement overview: clear margin calculations with zero hidden fees.",
        },
        {
          label: "Trade document audit log",
          src: `${wix}/10-8f7db9.jpeg`,
          caption: "Audit trail: complete historical record of verified POs and invoices.",
        },
        {
          label: "Completion confirmation and limit restoration",
          src: `${wix}/12-8106f8.jpeg`,
          caption: "Settlement completion: credit limit fully restored for future trades.",
        },
        {
          label: "High-level summary of REPO business impact",
          src: `${wix}/13-3785ba.jpeg`,
          caption: "Executive view: active financing metrics across the trader network.",
        },
      ],
    },
  ],
};
