import type { Project } from "./types";

const wix = "/projects/pcc/wix";

export const pcc: Project = {
  id: "pcc",
  title: "PCC Branding",
  company: "IDS (School Project)",
  projectType: "School Project",
  category: "Branding · Packaging",
  year: "2021",
  cover: "/projects/pcc-cover.jpg",
  gradient: "from-gray-100 via-background to-card",
  tags: ["Branding", "Typography", "Packaging"],
  summary:
    "A creative branding and packaging design project developed at the International Design School, exploring the boundary of typography-only visual identity.",
  problem:
    "The creative challenge: develop a complete brand identity for an energy-boosting chocolate called PCC using ONLY typography as the visual element (no illustrations, no icons, and no decorative imagery) while keeping the product modern and commercially appealing.",
  solution:
    "Designed a hexagonal logotype constructed entirely through custom letterforms. Developed minimalist packaging using repeating typographic characters to evoke circuit-board precision, appealing to tech-native young adults who appreciate clean, bold design.",
  outcome:
    "Delivered a comprehensive identity package (logo mark, typography hierarchy, and packaging mockups) demonstrating how strict creative constraints can produce striking, memorable branding.",
  features: [
    {
      title: "Typography-Only Constraint",
      description:
        "Every visual element, including the logotype and packaging patterns, was crafted purely from typefaces and glyphs without illustrations.",
    },
    {
      title: "Hexagonal Logotype",
      description:
        "Letterforms arranged into a balanced hexagon, giving the identity an immediate structural and forward-looking presence.",
    },
    {
      title: "Circuit Board Packaging",
      description:
        "Minimalist packaging featuring typographic line patterns, referencing precision through geometric repetition.",
    },
    {
      title: "Youthful Appeal",
      description:
        "Visual language tailored for young adults and students who value speed, simplicity, and a fresh modern aesthetic over traditional chocolate branding.",
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
        "PCC is a conceptual power-boosting chocolate crafted for active, busy days. The creative challenge came from the brief itself: build the entire brand using ONLY typography without illustrations or photos, while remaining appealing to tech-savvy young adults who value speed and simplicity.",
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
