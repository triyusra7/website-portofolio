export const site = {
  name: "Tri Anugerah Yusra",
  nickname: "Tri",
  title: "Product Designer",
  tagline: "I design software where the hard part is the logic underneath, not the screen on top.",
  location: "Central of Jakarta, Indonesia",
  relocationNote: "Based in Jakarta, open to relocation. Available for remote contract work worldwide, and open to roles with visa sponsorship in Finland, the Netherlands, Germany and Australia.",
  whatsapp: "+62 85280459492",
  whatsappUrl: "https://wa.me/6285280459492",
  quote: "Find your happiness and success at the same time",
  copyright: "Tri Anugerah Yusra",
} as const;

export const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Profile", href: "#profile" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tri-anugerah-yusra-14a204115/",
  },
  { label: "Dribbble", href: "https://dribbble.com/trian77" },
  { label: "Behance", href: "https://www.behance.net/trianugerah1" },
] as const;

export const files = {
  resume: "/Tri%20Anugerah%20Yusra%20-%20Product%20Designer%20Resume.pdf",
  portfolioPdf: "/portfolio.pdf",
} as const;

export const roles = [
  "Product Designer",
] as const;

export type {
  Feature,
  CaseStudyImage,
  CaseStudyListItem,
  CaseStudyTable,
  CaseStudyStat,
  CaseStudySection,
  Project,
} from "./projects";
export { projects, featuredProjects, otherProjects } from "./projects";

export const expertise = [
  "Product Design",
  "UI/UX Design",
  "Design Systems",
  "UX Research",
  "Information Architecture",
  "Accounting & ERP",
  "Fintech",
  "Wireframing",
  "Prototyping",
  "AI Tools",
] as const;

export const aboutParagraphs = [
  "Hi, I'm Tri Anugerah Yusra. I design software where the hard part is the logic underneath, not the screen on top: accounting systems, digital wallets, inventory tools and B2B marketplaces.",
  "My first degree was in accounting, so when a product involves journals, balances or cash flow, I already understand what the numbers are supposed to do before anyone explains it to me. That has shaped most of the work on this site.",
  "I spent almost three years as the only designer at PasarMIKRO, an agritech platform used by around a thousand traders and smallholder farmers in Indonesia, where I did the field research myself and sat with users who were not confident with smartphones. Since then I have worked independently on ERP, HRIS and logistics products.",
  "I work closely with engineers, write my own HTML and CSS when it helps, and I would rather sit with a user in the field than guess what they need.",
  "In my spare time I enjoy badminton and football, art (especially Keith Haring), singing, and staying sharp through reading.",
] as const;

export const experience = [
  {
    period: "August 2024 – Now",
    role: "Product Designer",
    company: "Freelance",
    location: "Jakarta – Indonesia",
    highlights: [
      "Redesigned the user interface and streamlined end-to-end flows for an HRIS platform, improving usability and consistency across mobile and web.",
      "Designed the \"Angkot Cargo\" feature for a logistics client, enabling customers to ship parcels via public minivans that follow predefined routes, expanding delivery options and improving accessibility.",
      "Created a comprehensive ERP solution, integrating finance for journal entries, COA, and the result will be reports about Profit and Loss, Ledger, Financial Position (Balance Sheet), and Cash Flow (Indirect). Also included HRIS modules for streamlined operations.",
      "Delivered a new brand identity for a logistics company by creating the logo, business cards, letterhead, brand guidelines manual, and employee ID cards.",
    ],
  },
  {
    period: "June 2024 – August 2024",
    role: "Product Designer",
    company: "Linkz Asia",
    location: "Jakarta – Indonesia",
    highlights: [
      "Developed a Design System in Figma to serve as a component library for developers, ensuring adherence to Material Design guidelines.",
      "Collaborated with stakeholders and developers to create various projects, ensuring they are user-friendly and meet the needs of end-users.",
      "Developed the \"Inventory\" project, enabling users to manually input data directly into the Linkz application, which previously only allowed xls. file uploads.",
      "Implemented calculations and formulas in the \"Order Form\" for accurate tax and discount computation, allowing real-time visibility of the final amounts upon input.",
      "Conducted direct interviews with active users to gather feedback, holding online sessions where the application was demonstrated and user input was collected.",
      "Used Figma to create high-fidelity mockups, collaborating closely with cross-functional teams to brainstorm solutions and improve user experience.",
      "Developed a project that enables company owners to track their employees' activities during work hours.",
      "Created tickets and managed Jira as a tool for handing off tasks to developers, providing detailed explanations of the work to be done.",
    ],
  },
  {
    period: "August 2021 – June 2024",
    role: "Product Designer",
    company: "PasarMIKRO",
    location: "Jakarta – Indonesia",
    highlights: [
      "Sole designer leading product design across mobile and web for an agritech platform serving ~1,000 registered traders and smallholder farmers (~600 active).",
      "Collaborated directly with developers and stakeholders to design and deliver projects, actively engaging in discussions about flow and design to ensure alignment.",
      "Conducted comprehensive desk research and field research, including site visits and direct conversations with users, to gather valid data. Listened to user feedback, identified pain points, and worked on solving their problems based on real-world experiences.",
      "Managed the entire design process from concept to delivery, including assisting in platform testing to ensure that the design was accurately implemented.",
      "Conducted user testing using moderated methods to obtain more reliable data and insights, refining the product based on these findings.",
      "Designed intuitive user flows and mockups in Figma, ensuring a user-friendly navigation experience.",
      "Used Figma to create high-fidelity mockups, collaborating closely with cross-functional teams to brainstorm solutions and improve user experience.",
      "Played a key role in branding and website development, maintaining consistency across platforms.",
      "Aligned design decisions with the company's business goals, contributing to the product's strategic direction.",
      "Managed Jira ticketing and provided detailed design specifications for seamless implementation.",
    ],
    projects: [
      {
        label: "Project 1: Area Tracking (Rekam Wilayah)",
        description:
          "The \"Area Tracking\" project addresses users' need to measure and record the size of their business area, including the type of business and commodities grown. The solution involves a \"tracing steps\" feature, where users walk or drive around their area to map it directly. This project allows users to get accurate measurements of their business land, which can also be used for traceability purposes when selling products. As a result, users who have not measured their business areas are now able to use this tool to manage their records effectively.",
      },
      {
        label: "Project 2: Marketplace",
        description:
          "The \"Marketplace\" project focuses on enhancing the B2B agricultural marketplace experience. Serving around 1,000 registered traders and farmers, this project provides each user with their own store to display commodities and a \"success\" indicator that shows transaction history as a trust signal. Users can save partner stores for quick access and use the marketplace directly or via WhatsApp, allowing transactions without app installation for new partners.",
      },
      {
        label: "Project 3: Wallet 2 (Business Wallet)",
        description:
          "The \"Wallet 2\" project solves users' challenges in managing sales and purchase funds in a single wallet by introducing a dedicated \"Business Wallet\" for storing sales proceeds, adopted by almost every active user on the platform. This separation allows users to clearly see their earnings and easily transfer or withdraw their funds.",
      },
      {
        label: "Project 4: Financial Report (Cash Flow Record)",
        description:
          "The \"Financial Report\" project was redesigned into a \"Cash Flow Record\" to offer users a clearer overview of their transaction history and financial activities on PasarMIKRO. The updated design uses bar charts for better visualization and allows users to manually input sales and other expenses. This change led to a significant increase in user engagement with the cash flow records.",
      },
    ],
  },
  {
    period: "February 2021 – May 2021",
    role: "Graphic Designer Intern",
    company: "Sinarmas Land",
    location: "Tangerang – Indonesia",
    highlights: [
      "Edited and shot videos for the e-learning section, collaborating with senior designers.",
      "Created posters and certificates for the e-learning section, and assisted in UI design for the website.",
      "Proposed a minimalist design approach for the website, ensuring a simple and effective user flow.",
    ],
  },
  {
    period: "October 2020 – July 2022",
    role: "Lead Designer",
    company: "LitUp Indonesia (Community)",
    location: "Bandung – Indonesia",
    highlights: [
      "Lead media team and created structure and flow for the social media content to reach people in social media.",
      "Proposed content for social media for marketing.",
      "Managed social media and created projects for impactful to society because we focused on education and helped students reach their goal in their lives. Focused on Instagram and TikTok to reach as many people as possible.",
    ],
  },
] as const;

export const skills = [
  { name: "Figma", category: "Design Tools" },
  { name: "Whimsical", category: "Design Tools" },
  { name: "Adobe Illustrator", category: "Design Tools" },
  { name: "Adobe Photoshop", category: "Design Tools" },
  { name: "Adobe After Effects", category: "Design Tools" },
  { name: "Adobe Premiere Pro", category: "Design Tools" },
  { name: "Adobe InDesign", category: "Design Tools" },
  { name: "Adobe Lightroom", category: "Design Tools" },
  { name: "Maze", category: "Design Tools" },
  { name: "Dbeaver", category: "Design Tools" },
  { name: "Mixpanel", category: "Design Tools" },
  { name: "Canva", category: "Design Tools" },
  { name: "Affinity Designer", category: "Design Tools" },
  { name: "Affinity Photo", category: "Design Tools" },
  { name: "Affinity Publisher", category: "Design Tools" },
  { name: "Capcut", category: "Design Tools" },
  { name: "Product Design", category: "Skills" },
  { name: "UI/UX Design", category: "Skills" },
  { name: "Design System", category: "Skills" },
  { name: "UX Research", category: "Skills" },
  { name: "Wireframing", category: "Skills" },
  { name: "Prototyping", category: "Skills" },
  { name: "Interaction Design", category: "Skills" },
  { name: "Information Architecture", category: "Skills" },
  { name: "User Interviews", category: "Skills" },
  { name: "B2B SaaS Design", category: "Skills" },
  { name: "Marketplace Design", category: "Skills" },
  { name: "Fintech & Accounting", category: "Skills" },
  { name: "ERP Systems", category: "Skills" },
  { name: "Logistics", category: "Skills" },
  { name: "PRD & BRD", category: "Skills" },
  { name: "CSS", category: "Development" },
  { name: "HTML", category: "Development" },
  { name: "Slicing Design", category: "Development" },
  { name: "Claude", category: "AI Tools" },
  { name: "Claude Code", category: "AI Tools" },
  { name: "Codex", category: "AI Tools" },
  { name: "Gemini", category: "AI Tools" },
  { name: "Google Stitch", category: "AI Tools" },
  { name: "Google AI Studio", category: "AI Tools" },
  { name: "NotebookLM", category: "AI Tools" },
  { name: "KlingsAI", category: "AI Tools" },
  { name: "Seedance", category: "AI Tools" },
  { name: "OpenClaw", category: "AI Tools" },
  { name: "Notion AI", category: "AI Tools" },
  { name: "Microsoft Copilot", category: "AI Tools" },
  { name: "n8n", category: "AI Tools" },
  { name: "Jira", category: "Project Management" },
  { name: "Notion", category: "Project Management" },
  { name: "Trello", category: "Project Management" },
  { name: "Scrum", category: "Project Management" },
  { name: "Agile", category: "Project Management" },
  { name: "Airtable", category: "Project Management" },
  { name: "Google Documents", category: "Project Management" },
] as const;

export const skillSummary =
  "Product Design, UX Research, Design Systems, Information Architecture, and Prototyping across Fintech, Accounting/ERP, and B2B platforms, using Figma, Maze, Whimsical, Mixpanel, and AI tooling (Claude, Gemini, Google AI Studio).";

