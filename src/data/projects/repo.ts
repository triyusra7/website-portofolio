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
  tags: ["Fintech", "Credit", "B2B", "Web App"],
  summary:
    "A B2B agricultural trade financing (repo) feature designed for PasarMIKRO, enabling traders across a network of ~1,000 registered users (~600 active) to collateralize verified purchase orders and obtain short-term working capital.",
  problem:
    "Traders often held confirmed, high-value purchase orders from large buyers, but lacked cash upfront to purchase the required commodities from smallholders and suppliers. Traditional bank loans were too slow for agricultural harvest cycles. Without fast credit, traders couldn't fulfill orders, damaging business continuity and limiting smallholder sales.",
  solution:
    "Designed the REPO desktop workflow (PasarMIKRO Business) where traders submit PO/SO documents for instant credit assessment. The system supports multi-supplier invoice accumulation, automated collateral verification, buyback clauses where commodity ownership returns to the trader upon settlement, and direct default protection through buyer confirmations.",
  outcome:
    "Traders can now access working capital within days rather than weeks, unlocking larger transaction volumes without working capital constraints. Designed, validated, and deployed into production within a single two-week sprint.",
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
      images: [{ label: "cover.jpg", src: `${wix}/cover-96678b.jpg` }],
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
      images: [{ label: "1.jpg", src: `${wix}/1-06d1c5.jpg` }],
    },
    {
      title: "Financial logic & workflow",
      body:
        "PasarMIKRO Repo and Loan Structure:\n\n• Documented collateral: Financing is issued against verified purchase orders or inventory stored in partner warehouses, ensuring credit is backed by real underlying commodity demand.\n• Document verification: Traders submit the PO and invoice. PasarMIKRO verifies authenticity with the institutional buyer.\n• Accumulated credit: Traders can accumulate financing across multiple distinct suppliers to fulfill a single large contract.\n• Repayment and limit restoration: As buyers settle invoices, credit lines are automatically restored for future orders.\n• Buyback mechanism: Ownership transfers through PasarMIKRO as a financing conduit and reverts to the trader upon completion.",
      images: [{ label: "ilustrasi.jpg", src: `${wix}/ilustrasi-a734da.jpg` }],
    },
    {
      title: "User flow",
      body:
        "Based on the credit assessment rules, I mapped the complete user flow from document upload and risk review to approval and automated funds release.",
      images: [{ label: "userflow.jpg", src: `${wix}/userflow-cb0bbb.jpg` }],
    },
    {
      title: "Interface Architecture",
      images: [
        {
          label: "Start the design",
          src: `${wix}/screenshot-2024-11-02-at-09-00-05-782cc1.png`,
        },
      ],
    },
    {
      title: "Design System Implementation",
      body:
        "Using our Figma component library, I designed the desktop web experience for PasarMIKRO Business (PMB). I established clear progress indicators, transparent fee and limit calculations, and detailed specification notes and user stories for developer handoff.",
      images: [
        {
          label: "Design example 1",
          src: `${wix}/screenshot-2024-11-02-at-08-18-04-9e2d4a.png`,
        },
        {
          label: "Design example 2",
          src: `${wix}/screenshot-2024-11-02-at-08-18-28-56ec73.png`,
        },
      ],
    },
    {
      title: "Final Design",
      images: [
        {
          label: "Fill information about repo.jpg",
          src: `${wix}/fill-information-about-repo-974f85.jpg`,
        },
      ],
    },
    {
      title: "Shipped Application Mockups",
      body:
        "The feature launched to production at the end of the sprint, providing working capital to active traders across the platform.",
      images: [
        { label: "1.jpeg", src: `${wix}/1-b6672a.jpeg` },
        { label: "3.jpeg", src: `${wix}/3-971388.jpeg` },
        { label: "5.jpeg", src: `${wix}/5-26110a.jpeg` },
        { label: "7.jpeg", src: `${wix}/7-68dca6.jpeg` },
        { label: "9.jpeg", src: `${wix}/9-f48ae6.jpeg` },
        { label: "11.jpeg", src: `${wix}/11-85ace4.jpeg` },
        { label: "2.jpeg", src: `${wix}/2-7a0c1c.jpeg` },
        { label: "4.jpeg", src: `${wix}/4-03b831.jpeg` },
        { label: "6.jpeg", src: `${wix}/6-962242.jpeg` },
        { label: "8.jpeg", src: `${wix}/8-9d72ac.jpeg` },
        { label: "10.jpeg", src: `${wix}/10-8f7db9.jpeg` },
        { label: "12.jpeg", src: `${wix}/12-8106f8.jpeg` },
        { label: "13.jpeg", src: `${wix}/13-3785ba.jpeg` },
      ],
    },
  ],
};
