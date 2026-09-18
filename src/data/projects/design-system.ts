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
    "A complete overhaul of Linkz Asia's B2B SaaS design system, migrating from an unorganized legacy UI kit to an intentional component library grounded in Material Design principles and WCAG 2.0 accessibility standards.",
  problem:
    "The legacy design system suffered from style drift: dozens of arbitrary color variants, inconsistent button states, redundant components, and zero documentation. This caused friction between design and engineering, bloated front-end CSS, and slowed down feature shipping cycles.",
  solution:
    "Audited the existing SaaS platform to eliminate unused variants, rebuilt the core component library from the ground up in Figma using Material Design component architecture, and established an accessible color token palette compliant with WCAG 2.0 contrast standards. Embedded usage guidelines and state definitions directly within Figma to streamline engineering handoff.",
  outcome:
    "Cut UI delivery time for new modules, established a unified visual language across Linkz Asia's invoicing and inventory products, and enabled engineering to build from verified, tokenized components.",
  features: [
    {
      title: "Product-Needs-First Components",
      description:
        "Components built strictly for what the product actively uses, with zero speculative clutter. Every single component serves a clear, documented purpose.",
    },
    {
      title: "Material Design + WCAG 2.0 Foundation",
      description:
        "Color system follows WCAG 2.0 contrast ratios; component architecture follows Material Design naming and structure for consistency with industry standards.",
    },
    {
      title: "Unified Typography & Colors",
      description:
        "Replaced excessive style choices with a calm, purposeful set: one clear typographic scale and one intentional color palette with defined roles.",
    },
    {
      title: "In-Figma Documentation",
      description:
        "Usage guidelines and component intents are documented right inside Figma, making handoffs enjoyable and cutting down back-and-forth questions with developers.",
    },
  ],
  resultImage: `${wix}/colors-3bdb5a.png`,
  caseStudySections: [
    {
      title: "The Scaling Challenge",
      body:
        "As Linkz Asia expanded its B2B trade features across invoicing, tax calculation, and multi-catalog inventory, UI fragmentation increased. Without a disciplined design system, designers were creating one-off components and engineers had to guess paddings, hover states, and color values.",
      images: [{ label: "Thumbnail.jpg", src: `${wix}/thumbnail-47e960.jpg` }],
    },
    {
      title: "Legacy System Deficiencies",
      body:
        "An audit of the previous Figma library revealed several critical issues:\n1. Uncontrolled color bloat with insufficient contrast against dark backgrounds.\n2. Inconsistent component variants (multiple button radiuses and padding rules for identical actions).\n3. Bloated token hierarchy with dozens of styles never actually used in production code.\n4. Inadequate component documentation, creating constant friction during developer handoffs.",
    },
    {
      title: "Core Objectives",
      body:
        "1. Rationalize component inventory: Keep only components actively utilized or planned in the core product roadmap.\n2. Ensure accessibility: Re-palette primary and functional colors to satisfy WCAG 2.0 AA contrast thresholds.\n3. Standardize architecture: Align token naming and variant properties with Google Material Design conventions for seamless front-end translation.\n4. Deliver rapid turnaround: Execute the audit, tokenization, and initial component build within an intensive 3-day sprint.",
    },
    {
      title: "Timeline & Scope",
      body:
        "Executed across an intensive 3-day sprint as lead product designer, working closely with front-end engineering leads to ensure direct compatibility with their React component library.",
    },
    {
      title: "Legacy System Audit",
      images: [{ label: "Old Thumbnail.jpg", src: `${wix}/old-thumbnail-19c5c2.jpg` }],
    },
    {
      title: "Analyzing Visual Debt",
      body:
        "Documenting the legacy UI kit highlighted the extent of visual debt: undocumented variant states, duplicate form fields, and arbitrary font sizing without a disciplined modular scale. This confirmed the need for a clean reset rather than patch-fixing obsolete components.",
    },
    {
      title: "Previous Documentation State",
      body:
        "Previous component documentation was scattered and lacked clear interaction state guides. To establish a dependable foundation, I referenced Google Material Design architecture for structure and WCAG 2.0 standards for color contrast verification.",
      images: [
        {
          label: "Previous documentation",
          src: `${wix}/screenshot-2024-09-04-at-11-39-36-ae4aaa.png`,
        },
      ],
    },
    {
      title: "Token Architecture: WCAG 2.0 Color System",
      images: [{ label: "colors.png", src: `${wix}/colors-3bdb5a.png` }],
    },
    {
      title: "Component Architecture & Engineering Alignment",
      body:
        "Rebuilt the primary component suite in Figma utilizing auto-layout, nested instances, and explicit variant properties. Every state (default, hover, active, focused, disabled, and loading) was fully specified alongside token references, allowing engineers to build directly without guesswork.",
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
