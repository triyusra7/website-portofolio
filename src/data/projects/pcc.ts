import type { Project } from "./types";

const wix = "/projects/pcc/wix";

export const pcc: Project = {
  id: "pcc",
  title: "PCC Branding",
  company: "IDS — School Project",
  projectType: "School Project",
  category: "Branding · Packaging",
  year: "2021",
  cover: "/projects/pcc-cover.jpg",
  gradient: "from-gray-100 via-background to-card",
  tags: ["Branding", "Typography", "Packaging"],
  summary:
    "This project was from my design school \"International Design School\". This is a group project with my friend. For this project, we must use only \"typography\" to make the brand.",
  problem:
    "The design challenge: create a complete brand for a power-boosting chocolate called \"PCC\" using ONLY typography as the design element — no illustrations, no icons, no decorative imagery. The brand needed to feel scientific and futuristic while remaining commercial.",
  solution:
    "Designed a hexagonal logotype (the hexagon already carries futuristic connotations in people's minds) built purely from typography. Packaging followed a minimalist approach with circuit board patterns and heavy typographic treatment, targeting teenagers and young adults (17–25, SES B-A) who grew up with technology and value simplicity and speed. The brand tagline emphasized power and energy for an active day.",
  outcome:
    "A complete brand identity — logo concepts, packaging mockups, and product applications — delivered within 2 weeks. Successfully communicated a futuristic, science-inspired chocolate brand using only typographic design elements.",
  features: [
    {
      title: "Typography-Only Constraint",
      description:
        "Every visual element — including the logo mark and packaging graphics — was built from typefaces and typographic forms, with zero use of illustrations or icons.",
    },
    {
      title: "Hexagonal Logotype",
      description:
        "The hexagon shape (associated with science, structure, and futurism) formed through letterforms — giving the logotype instant tech-forward recognition.",
    },
    {
      title: "Circuit Board Packaging",
      description:
        "Minimalist packaging featuring circuit board line patterns — referencing technology and precision through geometric repetition rather than literal imagery.",
    },
    {
      title: "Target Market Alignment",
      description:
        "Design system oriented toward 17–25 year olds who grew up with technology — valuing speed, simplicity, and a modern aesthetic over traditional chocolate branding.",
    },
  ],
  resultImage: `${wix}/4-9c76cc.jpg`,
  caseStudySections: [
    {
      title: "Let's imagine this...",
      body:
        "You want a snack that makes you strong enough to face your day. And you found a brand that sells chocolate. But this is not just regular, because this chocolate has \"power\" to make your day really great and active.",
      images: [{ label: "3.jpg", src: `${wix}/3-b86c91.jpg` }],
    },
    {
      title: "Problem backgrounds",
      body:
        "PCC is a chocolate with \"power\" — a snack that makes you strong enough to face your day. The challenge came from the brief itself: we had to build the whole brand using ONLY typography, with no illustrations or decorative imagery allowed. On top of that constraint, the brand needed to communicate a scientific, futuristic look while still appealing to our target market — young people with tight schedules who love chocolate and want everything simple and fast.",
    },
    {
      title: "Target market and team",
      body:
        "1. Age: 17 - 25 years old 2. Ses: B-A 3. Behavior: Love chocolate and have a tight schedule 4. Team: Tri and Kiki",
    },
    {
      title: "Concept about the brand",
      images: [{ label: "7-07.jpg", src: `${wix}/7-07-c051db.jpg` }],
    },
    {
      title: "Logo concepts",
      body:
        "For the logo, we drew some concepts based on our product, which is the logo must show a science, a futuristic look, and must use just a typography logo or \"logotype\". These are logo concepts that we create.",
      images: [{ label: "logo-buat.jpg", src: `${wix}/logo-buat-c3ae49.jpg` }],
    },
    {
      title: "Packaging concept",
      body:
        "Because the target market is teenagers and young people that have been with technology from their childhood and love simplicity and want everything to be fast we made the packaging design to be minimalistic with circuit board patterns but heavy on the typography and the logo used hexagonal that already has a futuristic image in people's mind.",
      images: [
        {
          label: "Packaging sketch",
          src: `${wix}/whatsapp-image-2020-02-27-at-17-15-44-5d842a.jpeg`,
        },
        {
          label: "Packaging concept",
          src: `${wix}/screenshot-2024-01-19-at-00-03-43-0e89ce.png`,
        },
      ],
    },
    {
      title: "Final results",
      body:
        "After we create and iterate again and again all the product. Finally this is the results that took us 2 weeks to finish all of them.",
      images: [
        { label: "Screenshot (501).png", src: `${wix}/screenshot-501-81c3e9.png` },
        { label: "Screenshot (502).png", src: `${wix}/screenshot-502-9e946f.png` },
        { label: "4.jpg", src: `${wix}/4-9c76cc.jpg` },
        { label: "12.jpg", src: `${wix}/12-012fd2.jpg` },
      ],
    },
  ],
};
