import type { Project } from "./types";

const wix = "/projects/design-system/wix";

export const designSystem: Project = {
  id: "design-system",
  title: "Design System",
  company: "Linkz Asia",
  projectType: "Full-time",
  category: "Design System · Figma",
  year: "2024",
  cover: `${wix}/thumbnail-47e960.jpg`,
  gradient: "from-purple-100 via-background to-card",
  tags: ["Figma", "Material Design", "Components"],
  summary:
    "This is the project that I working on in my company Linkz. The design system is not organized and developers are confused about the previous design system. So it needs it to improve for the component.",
  problem:
    "The previous design system had too many unused components, multiple unorganized colors, inconsistent button styles across the product, and documentation that confused both designers and developers. New features took longer because components were rebuilt from scratch each time.",
  solution:
    "Started fresh — built all components based on actual product needs, following Material Design principles and WCAG 2.0 color accessibility standards. Organized components logically with clear naming, trimmed unused styles, established a limited and intentional color hierarchy, and added documentation within Figma so developers could understand component purpose without separate handoff calls.",
  outcome:
    "Consistent UI across the product, faster design iterations, and clearer developer handoff. Completed in 3 days and adopted across the team.",
  features: [
    {
      title: "Product-Needs-First Components",
      description:
        "Components built only for what the product actually uses — no speculative additions. Every component has a documented purpose.",
    },
    {
      title: "Material Design + WCAG 2.0 Foundation",
      description:
        "Color system follows WCAG 2.0 contrast ratios; component architecture follows Material Design naming and structure for consistency with industry standards.",
    },
    {
      title: "Unified Typography & Colors",
      description:
        "Replaced excessive style options with a clean, purposeful set — one clear hierarchy for text, one color palette with defined roles.",
    },
    {
      title: "In-Figma Documentation",
      description:
        "Usage notes and component purpose documented directly inside Figma — reducing back-and-forth with developers during handoff.",
    },
  ],
  resultImage: `${wix}/colors-3bdb5a.png`,
  caseStudySections: [
    {
      title: "Let's imagine this...",
      body:
        "When working on many pages and many screens, you need to use the same component for all designs to make them look similar to each other, but you don't have a proper and organized design system to do that. As a designer, you need a proper design system to design and developers can follow the design system for the component.",
      images: [{ label: "Thumbnail.jpg", src: `${wix}/thumbnail-47e960.jpg` }],
    },
    {
      title: "Problem backgrounds",
      body:
        "We don't have a proper design system for design and for developers to use. When want to design using the previous design system, we have problems like to many colors to use, have different button style and many more.",
    },
    {
      title: "Goals",
      body: "Create a new design system properly from scratch and adjust with company style.",
    },
    {
      title: "Project duration",
      body: "This project I have 3 days to finish.",
    },
    {
      title: "Information requirements",
      images: [{ label: "Old Thumbnail.jpg", src: `${wix}/old-thumbnail-19c5c2.jpg` }],
    },
    {
      title: "Previous Design system",
      body:
        "We had too many components before that not really using all of them. And the typography too many that not really using it. So because of that, the design has too many styles to use and not recorded properly.",
    },
    {
      title: "Documentation from previous",
      body:
        "This is the documentation of the previous design system. The components are not organized, and it is confusing to use them. So that's why I try to create from scratch with a guide using material design, and WCAG 2.0 for colors.",
      images: [
        {
          label: "Previous documentation",
          src: `${wix}/screenshot-2024-09-04-at-11-39-36-ae4aaa.png`,
        },
      ],
    },
    {
      title: "Design and final results",
      images: [{ label: "colors.png", src: `${wix}/colors-3bdb5a.png` }],
    },
    {
      title: "Create from scratch",
      body:
        "For most of the design system, I create by myself using guidance from material designs google and for the colors, I use guidance from WCAG 2.0. I create all the components based on what the company needs for the product. And I make sure all of the components follow the company guide such as color etc. And these is some of the results that I took screen shots. Thank you",
      images: [
        { label: "buttons.png", src: `${wix}/buttons-13e152.png` },
        { label: "tex field.png", src: `${wix}/tex-field-cb1054.png` },
        { label: "menu side bar.png", src: `${wix}/menu-side-bar-3027b3.png` },
        { label: "status.png", src: `${wix}/status-9e9eff.png` },
        { label: "checkboxes.png", src: `${wix}/checkboxes-ffcbeb.png` },
        { label: "FABs.png", src: `${wix}/fabs-929353.png` },
      ],
    },
  ],
};
