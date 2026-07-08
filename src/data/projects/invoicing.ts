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
        "Accurate PPh and PPN calculations for Indonesia (4 variants), plus separate validated formulas for Malaysia and Singapore — reducing tax errors on cross-border transactions.",
    },
    {
      title: "Granular Roles & Permissions",
      description:
        "Owners control which platform sections each employee can access, with edit vs. view-only permission per section — replacing the previous all-or-nothing access model.",
    },
    {
      title: "Flexible Inventory Input",
      description:
        "Users can now upload Excel files OR input/edit inventory directly in the platform, eliminating the need to re-upload entire spreadsheets for single-item changes.",
    },
    {
      title: "Catalog–Inventory Separation",
      description:
        "One inventory item can power multiple catalogs (public pricing, private partner pricing) — eliminating the duplicate data entry required by the previous combined system.",
    },
  ],
  resultImage: `${wix}/banner-d0b2d9.png`,
  caseStudySections: [
    {
      title: "Let's imagine this...",
      body:
        "Your business needs raw materials to produce goods to sell to customers, so you need to restock them regularly. Traditionally, you create a purchase order (PO) and send it to your suppliers via email or as a physical copy. You believe there must be a better way to create and track POs when ordering from suppliers.",
      images: [{ label: "mocokup-linkz.jpg", src: `${wix}/mocokup-linkz-c9d0d1.jpg` }],
    },
    {
      title: "Problem backgrounds",
      body:
        "Our users frequently create and send POs and SOs for their business transactions, often involving large quantities of goods and services. While larger companies have dedicated teams for this, startups often handle these tasks manually. This process is time-consuming and requires understanding complex calculations like taxes. Users also need a way to track their sales, purchases, and overall revenue.",
    },
    {
      title: "Goals",
      body:
        "We aim to simplify the process of creating POs and SOs by automating calculations, such as total amounts and taxes. We also want to provide a multi-user platform with customizable access levels. Lastly, the platform should offer robust tracking capabilities for sales, purchases, and revenue.",
    },
    {
      title: "Project duration and teams",
      body:
        "The total duration for this project to be finished is one month. And for the teams, one UI/UX Designer, four Full-stack Developers, one Lead developer, and one Head of product.",
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
      title: "Get to know our users",
      body:
        "I conducted user interviews to gather feedback on our product. Despite a limited sample size, the insights gained from these interviews will guide our product development efforts.",
    },
    {
      title: "Pain points",
      body:
        "These are some pain points that users mention when we do interviews with them:\nComplexity of features: Users find the system overly complex, especially for tasks like creating purchase orders (POs) and sales orders (SOs).\nTax calculations: There are issues with tax calculations, including incorrect application of taxes to POs and difficulties in editing tax information.\nDocument editing: Users face challenges when editing documents, such as being unable to edit customer names or track price changes.\nCustomization: Users want more customization options, such as the ability to set discounts and taxes automatically, and to have more control over the layout and content of documents.\nUser interface: The user interface is considered cluttered and confusing, making it difficult to navigate and complete tasks.\nData entry: Users find the data entry process to be time-consuming and inefficient, particularly for large quantities of data.\nSearch functionality: The search function is limited and does not allow for advanced searches based on specific criteria.\nInventory management: Users have difficulties managing inventory, especially when dealing with large quantities and multiple suppliers.\nOrder management: Users find the order management process to be cumbersome, with too many steps and limited visibility into order status.\nCommunication: Users prefer to use WhatsApp for communication rather than email and would like more options for customizing communication preferences.\nSystem features: Users have requested additional features, such as the ability to create custom reports, track order history, and manage multiple currencies.",
    },
    {
      title: "Ideation and implementation",
      images: [{ label: "Inventory-(after).jpg", src: `${wix}/inventory-after-c2839a.jpg` }],
    },
    {
      title: "Focus on improving",
      body:
        "Because we just have limited time, so we need to focusing on what the most feature that we can improve first. And then we can plan for the next improvement. This is that we want to focus on for the first stage:\nAccurate formula implementation: Ensuring that all calculations, including taxes and totals, are accurate and consistent.\nGranular access control: Implementing a robust access control system that allows owners to onboard employees and assign specific permissions based on their roles and responsibilities.\nInventory and catalog management: Enhancing the inventory and catalog management features to provide a more comprehensive and user-friendly experience.\nDocument generation: Improving the generation of invoices, sales orders (SOs), and purchase orders (POs) to ensure clarity and completeness of information.\nPartner experience: Enhancing the overall partner experience by streamlining the transaction process and providing a more intuitive interface.",
    },
    {
      title: "Improving \"Tax formula\"",
      body:
        "The tax calculations for Indonesia, Malaysia, and Singapore are currently inaccurate. Indonesian tax calculations, in particular, differ significantly from those in Malaysia and Singapore, requiring a more specific formula. To address this, I have consulted with my colleagues and father, who have a deeper understanding of Indonesian tax regulations. For Malaysian and Singaporean tax calculations, I have incorporated feedback from our stakeholders. The following is the result of our formula development: Indonesia Tax Formula (PPh Gross Up, PPh, PPN Inclusive, PPN Exclusive), Malaysia Tax Formula, and Singapore Tax Formula.",
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
      title: "Improving \"Roles and permission\"",
      body:
        "Our users often have employees whom they onboard to handle and delegate tasks. This new feature aims to empower owners by granting them the authority to assign specific roles and permissions to each employee. And this is the concept and design.",
      images: [
        { label: "Business user.jpg", src: `${wix}/business-user-df1a9b.jpg` },
        { label: "Employee.jpg", src: `${wix}/employee-1dd349.jpg` },
      ],
    },
    {
      title: "Improving \"Inventory management\"",
      body:
        "Previously, users had to input all their inventory data into an Excel spreadsheet and then upload it to Linkz. If there were any errors in the inventory, users had to re-upload the entire spreadsheet as they couldn't make direct edits within the platform. This was a significant hurdle for users as it was inconvenient. Users expressed a desire to continue uploading inventory via Excel format but also wanted the ability to input and edit inventory data directly within the platform, eliminating the need for frequent re-uploads. Therefore, I proposed a design that addressed this issue, and it has been approved. In this design, users can still manually upload Excel files or input data directly into the platform. However, we encourage users to input data directly within the platform.\n\nPropose design — In the proposed design, I aimed to provide users with a choice upon their initial access to the inventory section in Linkz. They can either choose to upload their inventory via XLS format or input the data manually directly within the platform. Additionally, I've included clear instructions to guide users through the subsequent steps.\n\nFinal design — For the final version, we maintained the previous design with an improvement: a default table is now included to allow users to input their inventory directly or upload it in XLS format. Additionally, users can directly edit inventory items within the platform if needed.",
      images: [
        { label: "Inventory.jpg (propose)", src: `${wix}/inventory-5f395e.jpg` },
        { label: "Inventory-(after).jpg (final)", src: `${wix}/inventory-after-c2839a.jpg` },
      ],
    },
    {
      title: "Improving \"Catalogue\"",
      body:
        "Previously, the inventory system also functioned as a catalog, meaning that creating an inventory automatically generated a catalog. To offer both public and private catalogs with different pricing, users had to create two separate inventories. To improve this process, we've separated the inventory and catalog functions. Now, a single inventory can be used to create multiple catalogs, eliminating the need for duplicate data entry. This allows sellers to create private catalogs with special pricing for specific partners or create public catalogs with standard pricing for all customers.\n\nPrevious design — In the old design, the inventory and catalog were combined into a single system. If a user wanted to create a private catalog, they had to re-upload the catalog data. This made the system difficult to use because users wanted to be able to select items from their existing inventory when creating a new catalog.\n\nFinal design — The new design divides the inventory and catalog functions into two separate modules. Users can now independently manage their inventory by uploading or creating new items. Once an inventory is established, users can effortlessly generate catalogs by selecting items from their inventory. This decoupling not only simplifies the catalog creation process but also enhances data integrity and accuracy, leading to more effective sales tracking and management.",
      images: [
        { label: "Catalogue previous.jpg", src: `${wix}/catalogue-previous-4edbfa.jpg` },
        { label: "Inventory-final.jpg", src: `${wix}/inventory-final-b357e2.jpg` },
      ],
    },
    {
      title: "Improving \"Order form\"",
      body:
        "The order form is the core feature of our platform, as it is used by Linkz users to create sales orders (SO) and purchase orders (PO). Every order form created incurs a credit charge, which can be purchased by users. Credits serve as the \"currency\" for using the order form feature. Due to time constraints and the absence of a \"Sprint\" development cycle during the initial release, improvements to the order form were limited. Consequently, we focused on refining only a few key elements.\n\nPrevious design — The attached images depict the previous versions of our order forms. These older iterations suffered from several deficiencies, most notably the imprecise calculation engine and the requirement for manual tax input. Users were able to enter tax values as either fixed amounts or percentages, leading to inconsistencies and potential errors. Given the critical nature of tax calculations in financial transactions, these shortcomings necessitated significant improvements in the new system.\n\nFinal design — In this new improvement, I've added a feature called \"Payable Amount\" which allows users to pay a down payment and the remaining balance upon receiving the goods. This feature is designed to enable sellers to receive a partial payment upfront, thereby facilitating the completion of transactions. This is particularly useful for large orders, as it helps to mitigate the risk of fraud. Additionally, I've standardized the tax calculation to use percentages, aligning with standard tax practices. The remaining functionalities remain unchanged.",
      images: [
        { label: "Previous order form.jpg", src: `${wix}/previous-order-form-9d2d48.jpg` },
        { label: "order-form.jpg", src: `${wix}/order-form-0239d0.jpg` },
      ],
    },
    {
      title: "Improving \"PDF SO and PO\"",
      body:
        "When users create an order form, they will receive a PDF for either a Sales Order (SO) or a Purchase Order (PO), depending on the type of order they create. This PDF serves as official documentation that can be shared with their business partners. However, some users have expressed confusion regarding certain details included in the PDF.\n\nPrevious design — These are examples of previous sales order (SO) or purchase order (PO) invoices. However, it is unclear whether these are SOs or POs due to the lack of specific indicators. Additionally, the names listed do not clearly indicate the issuer or recipient of the order. If users could add additional notes in a \"Remarks\" field while creating the order form, it would provide more context for their business partners. Unfortunately, this feature is not currently available, leading to confusion among many Linkz users.\n\nFinal design — This is the newly improved PDF version. The information is now clearer, with explicit indicators of whether it is a Sales Order (SO) or a Purchase Order (PO). The issuer and recipient are also clearly identified in the title. Additionally, information such as \"delivery info\" and \"remarks\" that was previously omitted is now included.",
      images: [
        { label: "PDF lama.jpg", src: `${wix}/pdf-lama-272399.jpg` },
        { label: "sales.jpg", src: `${wix}/sales-99a208.jpg` },
        { label: "purchase.jpg", src: `${wix}/purchase-27a0e4.jpg` },
      ],
    },
    {
      title: "Improving \"Employee\"",
      body:
        "This feature allows owners to onboard their employees onto the Linkz platform under the same company account but with individual logins. The purpose is to enable owners to delegate tasks to their employees.\n\nPrevious design — Previously, this feature exclusively granted owners the authority to onboard their employees onto the Linkz platform. Upon onboarding, employees were assigned roles such as \"Business Admin\" or \"Business User\". Even the owner themselves assumed the role of \"Business Admin\". Furthermore, once onboarded, employees had unrestricted access to the entire platform. This posed a significant security risk as there were no access controls to limit employee activities.\n\nFinal design — For this improvement, I've added a \"Roles and Permissions\" feature. In simpler terms, owners can now control which parts of the platform their employees can access and what actions they can perform. Employees can either have edit or view-only permissions. Additionally, only the owner can manage these roles and permissions.",
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
      title: "Finally the result for all features",
      body:
        "Enclosed are screenshots captured directly from the platform, providing visual representations of the project's final deliverables. These images have been included to offer a clear and comprehensive understanding of the implemented features and functionalities. Thank you for your attention.",
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
