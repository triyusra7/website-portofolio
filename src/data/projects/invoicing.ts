import type { Project } from "./types";

const wix = "/projects/invoicing/wix";

export const invoicing: Project = {
  id: "invoicing",
  title: "Invoicing & Manage",
  company: "Linkz Asia",
  projectType: "Full-time",
  category: "Product Design · SaaS",
  year: "2024",
  cover: `${wix}/mocokup-linkz-c9d0d1.jpg`,
  gradient: "from-violet-100 via-background to-card",
  tags: ["SaaS", "Tax", "Enterprise"],
  summary:
    "This project is about improving the invoicing feature for order form and managing their inventory.",
  problem:
    "Users creating POs and SOs faced incorrect tax calculations for Indonesia/Malaysia/Singapore, security risks from unrestricted employee access, a manual-only Excel-upload inventory workflow with no direct editing, duplicate data entry from inventory-catalog coupling, and confusing PDF documents with unclear issuer/recipient information.",
  solution:
    "Implemented accurate tax formulas (PPh Gross Up, PPh, PPN Inclusive/Exclusive for ID; separate formulas for MY/SG), a granular roles & permissions system with edit/view-only access per section, dual inventory input (Excel upload + manual in-platform editing), separated catalog from inventory to allow multiple pricing tiers from one product, a \"Payable Amount\" feature for partial upfront payments, and redesigned PDF SO/PO with clear labeling, delivery info, and remarks fields.",
  outcome:
    "Reduced calculation errors, improved security through access control, more flexible inventory management workflow, and clearer document presentation that reduced user confusion.",
  features: [
    {
      title: "Multi-Country Tax Formulas",
      description:
        "Accurate PPh and PPN calculations for Indonesia (4 variants), plus validated formulas for Malaysia and Singapore, significantly reducing tax errors on cross-border transactions.",
    },
    {
      title: "Granular Roles & Permissions",
      description:
        "Owners control which platform sections each team member can access, with edit versus view-only permissions per section, replacing the previous all-or-nothing access model.",
    },
    {
      title: "Flexible Inventory Input",
      description:
        "Users can now upload Excel files OR input and edit inventory directly in the platform, eliminating the need to re-upload entire spreadsheets for single-item changes.",
    },
    {
      title: "Catalog–Inventory Separation",
      description:
        "One inventory item can power multiple catalogs (public pricing and private partner pricing), eliminating the duplicate data entry required by the previous combined system.",
    },
  ],
  resultImage: `${wix}/banner-d0b2d9.png`,
  caseStudySections: [
    {
      title: "Operational Context",
      body:
        "B2B commerce relies on regular restocking of materials and goods through Purchase Orders (POs) and Sales Orders (SOs). In emerging and mid-market supply chains, businesses often manage these critical workflows through manual spreadsheets and unstandardized communications, leading to severe accounting discrepancies, tax miscalculations, and inventory synchronization failures.",
      images: [{ label: "mocokup-linkz.jpg", src: `${wix}/mocokup-linkz-c9d0d1.jpg` }],
    },
    {
      title: "Problem Background",
      body:
        "Our users frequently generate POs and SOs for high-volume transactions across Southeast Asia. Unlike enterprises with dedicated ERP teams, mid-market businesses rely on small operational teams. Manual tax calculation, inflexible inventory uploads, and all-or-nothing access permissions created friction, increased reconciliation overhead, and exposed sensitive financial records.",
    },
    {
      title: "Core Objectives",
      body:
        "1. Automate complex cross-border tax computations (Indonesia, Malaysia, Singapore) directly within order flows.\n2. Implement granular role-based access control (RBAC) to allow secure task delegation.\n3. Decouple inventory records from customer-facing catalogs to enable tiered pricing without duplicate entries.\n4. Standardize PO/SO PDF documentation for legal and audit compliance.",
    },
    {
      title: "Team & Delivery Timeline",
      body:
        "Delivered over a 1-month intensive cycle. Collaborated as lead product designer alongside 4 full-stack developers, 1 lead developer, and the Head of Product.",
    },
    {
      title: "Understanding our users",
      images: [
        {
          label: "User interview",
          src: `${wix}/screenshot-2024-09-05-at-23-47-43-0e3532.png`,
        },
      ],
    },
    {
      title: "User Research & Discovery",
      body:
        "Conducted in-depth interviews with business owners and procurement managers to diagnose friction points across order drafting, tax filing, and stock synchronization.",
    },
    {
      title: "Pain points",
      body:
        "Key operational bottlenecks identified during discovery:\n• Complexity of features: Fragmented workflows made generating POs and SOs tedious and error-prone.\n• Tax calculations: Manual tax entry caused frequent compliance errors under regional tax laws (PPh and PPN).\n• Document editing: Inability to modify customer metadata or track historical price changes.\n• Inventory management: Forcing full Excel re-uploads for single-item adjustments created severe operational friction.\n• Unrestricted access: Employees held full admin visibility, exposing confidential margins and financial reports.",
    },
    {
      title: "Ideation and implementation",
      images: [{ label: "Inventory-(after).jpg", src: `${wix}/inventory-after-c2839a.jpg` }],
    },
    {
      title: "Prioritized Scope & Milestones",
      body:
        "Given the 1-month timeline, we focused on high-impact systemic pillars:\n1. Accurate Tax Engine: Automated calculations for PPh Gross Up, PPh, PPN Inclusive/Exclusive (ID), plus MY and SG tax rules.\n2. Granular Access Control: Permission tiering enabling owners to restrict staff to view-only or section-specific editing.\n3. Decoupled Catalog & Inventory: Allowing single inventory items to feed multiple price catalogs.\n4. Document Standardization: Clarified PDF exports with explicit issuer/recipient roles and delivery remarks.",
    },
    {
      title: "Cross-Border Tax Computation Engine",
      body:
        "Tax regulations across Indonesia, Malaysia, and Singapore differ fundamentally. In Indonesia, withholding taxes (PPh) and value-added taxes (PPN) require specific gross-up and deduction formulas. Drawing on financial accounting principles and regulatory guidelines, I designed an automated calculation engine supporting: PPh Gross Up, PPh Standard, PPN Inclusive, and PPN Exclusive for Indonesia, alongside validated GST/SST calculations for Malaysia and Singapore.",
      images: [
        { label: "PPH-Gross-up-tax.jpg", src: `${wix}/pph-gross-up-tax-4e76ea.jpg` },
        { label: "Tax-PPH.jpg", src: `${wix}/tax-pph-3a869d.jpg` },
        { label: "Malaysia-tax.jpg", src: `${wix}/malaysia-tax-1562a2.jpg` },
        { label: "Tax-PPN-Inclusive.jpg", src: `${wix}/tax-ppn-inclusive-6e81ee.jpg` },
        { label: "Tax-PPN-Exclusive.jpg", src: `${wix}/tax-ppn-exclusive-7c14f9.jpg` },
        { label: "GST.jpg", src: `${wix}/gst-1cb706.jpg` },
      ],
    },
    {
      title: "Granular Roles & Permissions (RBAC)",
      body:
        "Designed an access management framework allowing company owners to invite team members and assign explicit section-level permissions (View vs. Edit) across Inventory, Invoicing, and Financials, eliminating data exposure risks.",
      images: [
        { label: "Business user.jpg", src: `${wix}/business-user-df1a9b.jpg` },
        { label: "Employee.jpg", src: `${wix}/employee-1dd349.jpg` },
      ],
    },
    {
      title: "Improving \"Inventory management\"",
      body:
        "Previously, users had to input all their inventory data into an Excel spreadsheet and then upload it to Linkz. If there were any errors in the inventory, users had to re-upload the entire spreadsheet because they couldn't make direct edits within the platform. This was a significant hurdle. While users wanted to keep Excel uploads for bulk setup, they also needed direct inline editing.\n\nProposed design: I provided users with a clear choice when entering the inventory section: either upload via XLS or input items directly into the platform, accompanied by step-by-step guidance.\n\nFinal design: The shipped version includes an interactive table allowing direct data entry as well as XLS bulk imports. Users can edit any inventory item inline whenever needed, removing the headache of frequent re-uploads.",
      images: [
        { label: "Inventory.jpg (propose)", src: `${wix}/inventory-5f395e.jpg` },
        { label: "Inventory-(after).jpg (final)", src: `${wix}/inventory-after-c2839a.jpg` },
      ],
    },
    {
      title: "Improving \"Catalogue\"",
      body:
        "Previously, the inventory system doubled as a catalog: creating an inventory record automatically created a single public catalog. To offer tiered pricing to special partners, users were forced to re-upload duplicate inventory. To fix this, we decoupled the two concepts so that one inventory item can be referenced across multiple catalogs with different price points.\n\nPrevious design: The inventory and catalog were tightly coupled. Creating private pricing required re-uploading the entire spreadsheet, leading to duplicated effort and data inconsistencies.\n\nFinal design: Inventory and catalogs are now separate modules. Users manage stock in one central inventory, then assemble custom catalogs simply by selecting items and assigning specific price tiers, keeping sales tracking accurate and dependable.",
      images: [
        { label: "Catalogue previous.jpg", src: `${wix}/catalogue-previous-4edbfa.jpg` },
        { label: "Inventory-final.jpg", src: `${wix}/inventory-final-b357e2.jpg` },
      ],
    },
    {
      title: "Improving \"Order form\"",
      body:
        "The order form is the heartbeat of the Linkz platform, used daily by businesses to issue sales orders (SO) and purchase orders (PO). In this cycle, we focused on eliminating calculation inaccuracies and standardizing payment terms.\n\nPrevious design: Earlier versions permitted users to type tax amounts manually as arbitrary numbers or percentages, leading to frequent reconciliation errors and conflicting invoices.\n\nFinal design: I introduced a 'Payable Amount' feature enabling down payments and balance-on-delivery arrangements. This helps sellers secure upfront cash flow and protects both parties against default on larger transactions. Additionally, tax calculations were standardized to validated percentage formulas in line with tax regulations.",
      images: [
        { label: "Previous order form.jpg", src: `${wix}/previous-order-form-9d2d48.jpg` },
        { label: "order-form.jpg", src: `${wix}/order-form-0239d0.jpg` },
      ],
    },
    {
      title: "Improving \"PDF SO and PO\"",
      body:
        "Whenever an order form is finalized, Linkz generates an official PDF Sales Order or Purchase Order for partners. Clear, unambiguous documentation is vital for legal and tax records.\n\nPrevious design: The legacy PDF lacked distinct document indicators, making it hard to tell an SO from a PO at a glance. Furthermore, issuer and recipient roles were ambiguous, and there was no space for delivery notes.\n\nFinal design: The updated PDF format features prominent headers clearly distinguishing Sales Orders from Purchase Orders, explicit company identifiers, and dedicated sections for delivery timelines and custom remarks.",
      images: [
        { label: "PDF lama.jpg", src: `${wix}/pdf-lama-272399.jpg` },
        { label: "sales.jpg", src: `${wix}/sales-99a208.jpg` },
        { label: "purchase.jpg", src: `${wix}/purchase-27a0e4.jpg` },
      ],
    },
    {
      title: "Improving \"Employee\"",
      body:
        "This feature enables business owners to invite their staff onto the Linkz platform under a shared company account with individual credentials, making delegation secure and simple.\n\nPrevious design: Originally, any invited employee received full administrative visibility over the entire platform, creating significant data privacy and operational risks.\n\nFinal design: I designed a granular 'Roles and Permissions' system. Owners can specify view-only or editing rights section by section (such as Invoicing, Inventory, or Financial Reports), ensuring employees have exactly the access they need to do their jobs without exposing sensitive business margins.",
      images: [
        {
          label: "Previous feature employee.jpg",
          src: `${wix}/previous-feature-employee-bb12fd.jpg`,
        },
        { label: "Roles-and-permission.jpg", src: `${wix}/roles-and-permission-d589ea.jpg` },
      ],
    },
    {
      title: "Final results",
      images: [{ label: "banner.png", src: `${wix}/banner-d0b2d9.png` }],
    },
    {
      title: "Production Deliverables & Feature Highlights",
      body:
        "Visual walkthrough of the production modules deployed across Linkz Asia's B2B platform, demonstrating end-to-end alignment from inventory ingestion to standardized PO/SO generation.",
      images: [
        { label: "1.jpg", src: `${wix}/1-6e1da6.jpg` },
        { label: "2.jpg", src: `${wix}/2-2dc322.jpg` },
        { label: "4.jpg", src: `${wix}/4-e1d61b.jpg` },
        { label: "3.jpg", src: `${wix}/3-750495.jpg` },
        { label: "6.jpg", src: `${wix}/6-00e79e.jpg` },
        { label: "5.jpg", src: `${wix}/5-9d3236.jpg` },
        { label: "8.jpg", src: `${wix}/8-12b631.jpg` },
        { label: "7.jpg", src: `${wix}/7-053891.jpg` },
        { label: "9.jpg", src: `${wix}/9-30e2a4.jpg` },
        { label: "10.jpg", src: `${wix}/10-da12cc.jpg` },
        { label: "11.jpg", src: `${wix}/11-389d64.jpg` },
        { label: "12.jpg", src: `${wix}/12-89a908.jpg` },
        { label: "13.jpg", src: `${wix}/13-14c479.jpg` },
        { label: "14.jpg", src: `${wix}/14-d666e4.jpg` },
        { label: "27.jpg", src: `${wix}/27-56a179.jpg` },
        { label: "15.jpg", src: `${wix}/15-7f7ca4.jpg` },
        { label: "16.jpg", src: `${wix}/16-3c679d.jpg` },
        { label: "17.jpg", src: `${wix}/17-454f79.jpg` },
        { label: "18.jpg", src: `${wix}/18-843a3e.jpg` },
        { label: "19.jpg", src: `${wix}/19-20d45b.jpg` },
        { label: "20.jpg", src: `${wix}/20-fbf20a.jpg` },
        { label: "21.jpg", src: `${wix}/21-eba59e.jpg` },
        { label: "22.jpg", src: `${wix}/22-fdcb3e.jpg` },
        { label: "23.jpg", src: `${wix}/23-cf365e.jpg` },
        { label: "24.jpg", src: `${wix}/24-62c658.jpg` },
        { label: "26.jpg", src: `${wix}/26-396cd3.jpg` },
        { label: "25.jpg", src: `${wix}/25-d175dd.jpg` },
      ],
    },
  ],
};
