import type { Project } from "./types";

const wix = "/projects/repo/wix";

export const repo: Project = {
  id: "repo",
  title: "REPO",
  company: "PasarMIKRO",
  projectType: "Full-time",
  category: "Fintech · Credit Feature",
  year: "2021 – 2022",
  cover: "/projects/repo-cover.jpg",
  gradient: "from-green-100 via-background to-card",
  tags: ["Fintech", "Credit", "B2B"],
  summary:
    "This is the project that I am working on in my company, PasarMIKRO. This project is for users to repo their documents like PO or SO to PasarMIKRO and get the credit to buy commodities they need.",
  problem:
    "Traders often had large confirmed orders from end buyers, but lacked cash upfront to purchase the required commodities from suppliers. Without quick access to credit, they couldn't fulfill orders — threatening business continuity and limiting growth.",
  solution:
    "Designed the REPO flow where traders submit PO/SO documents to PasarMIKRO for credit approval. The system supports accumulated repo from multiple suppliers, a buyback clause where ownership transfers back to the trader, and a PO verification process with built-in default protection. The desktop-first design (PasarMIKRO Business) included clear document upload steps, repo status tracking, and a reimbursement flow.",
  outcome:
    "Traders can now access credit efficiently to fulfill larger orders without cash flow constraints. Feature was designed, developed, and deployed within one sprint (2 weeks).",
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
        "Before finalizing, traders review all submitted details in a confirmation step — reducing errors and giving PasarMIKRO time to verify PO authenticity before releasing funds.",
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
        "You are a trader, and you want to do the transaction with your end buyer. Let's say your trader needs milk for 1.000kg. You said to your end buyer you could do that, but in your warehouse, you just have 500kg of milk. So you need to restock your milk before sell again to your end buyer. But you don't have enough money to buy milk from your supplier. So you \"Repo\" your SO (Sales Order) from transactions between you and your end buyer before that. And you Repo to PasarMIKRO and PasarMIKRO will give you credit to you, so you can buy milk from your supplier for 500kg, and after you purchase those you have 1.000kg milk. And then you sell it to your end buyer.",
      images: [{ label: "cover.jpg", src: `${wix}/cover-96678b.jpg` }],
    },
    {
      title: "Problem backgrounds",
      body:
        "Our partners (Traders) usually have big transactions with their end buyers. But to fulfill their needs, traders need money to buy supply to restock their commodity to sell again to their end buyer. They need quick money to buy from their supplier to restock their commodity, but sometimes, they can't get the money or credit to buy and restock their commodity.",
    },
    {
      title: "Goals",
      body:
        "They can get access to our credit with something that our partners can use to guarantee, so they can get the credit fast, restock their commodity, sell to their end buyer, and pay us back again with a margin.",
    },
    {
      title: "Project duration and teams",
      body:
        "This project has one sprint to finish it (2 weeks or 10 days for work hours) to create from design to development and publishing in production. And for the teams, one UI/UX Designer, two full-stack developers, two Back-end, one Lead Technology, and one QA.",
    },
    {
      title: "Information requirements",
      images: [{ label: "1.jpg", src: `${wix}/1-06d1c5.jpg` }],
    },
    {
      title: "Information about the feature",
      body:
        "PasarMIKRO Repo and Loan Workflow\n\nCommodity Purchase Requirement: To initiate a repo or new loan version, traders must have already purchased the commodity. The commodity serves as collateral or a basis for the repo.\nRepo Process Based on Inventory: Repo issuance is determined by existing inventory, validating that the commodity has been bought and stored. This ensures the repo is backed by tangible assets.\nTransaction and Documentation: Traders must submit a Purchase Order (PO) and invoice as part of the repo requirement. This provides proof of an established sale agreement between two parties.\nDirect Purchase Model: Transactions can be made directly on the platform, following a purchase order or sale agreement to facilitate repo.\nAccumulated Repo Across Suppliers: Traders can accumulate repo credits from multiple suppliers, each with varying repo amounts, giving flexibility in financing.\nRepo Funding and Reimbursement: Full repo financing is required for commodity purchases, with the option to reimburse funds later, restoring repo limits.\nInventory-Based Reimbursement: After storing inventory, traders can receive reimbursements based on commodity value within their holdings.\nRepo Limits and Usage: Repo availability might have daily or cumulative limits to ensure sustainable resource allocation.\n\nTrader Repo Conditions and Management\n\nInitial PO Verification: Traders present a PO from their end buyer, which PasarMIKRO reviews for authenticity. If approved, the PO serves as a guarantee, allowing PasarMIKRO to extend a loan to the trader.\nCredit Terms and Default Contingency: While traders receive funds based on the PO, PasarMIKRO also contacts the end buyer to inform them of the transaction. In case of default, PasarMIKRO reserves the right to collect payment directly from the end buyer.\nQuick Turnaround on Sales: The platform is designed for fast transactions—commodities are bought and sold swiftly to maintain liquidity and cash flow.\n\nRepo and Transactional Features\n\nDedicated Repo Function: The system includes a designated button for \"repo\" or \"auto repo,\" where traders list commodities as collateral for a repo loan.\nCommodity Input and Documentation: Users enter commodity details and upload inventory documentation, ensuring the repo aligns with verified stock levels.\n\nClient (Trader) Purchase and Re-Sale Model\n\nTrading Framework: Traders sell commodities to PasarMIKRO per the PO amount, though PasarMIKRO might not purchase the entire PO quantity.\nBuyback Clause: Commodities sold to PasarMIKRO can later be repurchased at a higher price within a specified timeframe, transferring ownership back to the trader.\nEnd Buyer Flow: The final ownership moves from PasarMIKRO to the end buyer, often through the trader, completing the repo cycle.",
      images: [{ label: "ilustrasi.jpg", src: `${wix}/ilustrasi-a734da.jpg` }],
    },
    {
      title: "Userflow",
      body:
        "Based on the information above and the illustration about how they do transactions and how we put feature Repo, I made the user flow to make it easy to see the process.",
      images: [{ label: "userflow.jpg", src: `${wix}/userflow-cb0bbb.jpg` }],
    },
    {
      title: "Start The Design",
      images: [
        {
          label: "Start the design",
          src: `${wix}/screenshot-2024-11-02-at-09-00-05-782cc1.png`,
        },
      ],
    },
    {
      title: "Create design in figma",
      body:
        "Because our team product has a library and design system. So, I just used that to create the Hi-Fi for this project. This is a website project because the user will use desktop view to use this feature, and we call it PasarMikro Business (PMB). First, I started to create the design based on the information above. I make sure the process is still the same. And then, I put notes into my design so the developer can know about the design and the function. I use the User story to define the process more easily and to developer can understand the flow too. These are examples for the designs.",
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
      title: "Finally...Mockup app design",
      body:
        "After 1 sprint finish and already deployed to public, finally we can use this feature for our users and partners",
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
