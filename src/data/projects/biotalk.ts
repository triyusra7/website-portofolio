import type { Project } from "./types";

const wix = "/projects/biotalk/wix";

export const biotalk: Project = {
  id: "biotalk",
  title: "Biotalk Social Media",
  company: "Agency",
  projectType: "Freelance / Internship",
  category: "Social Media · Branding",
  year: "2020",
  cover: "/projects/biotalk-cover.jpg",
  gradient: "from-stone-100 via-background to-card",
  tags: ["Social Media", "Skincare", "Branding"],
  summary:
    "Brand and social media visual design for Biotalk, an artisanal natural skincare brand crafted for sensitive skin (active on Instagram at instagram.com/biotalk.id).",
  problem:
    "Biotalk needed consistent, educational social media content to communicate its core philosophy: gentle natural ingredients, sensitive skin safety, and honest pricing across diverse skin types.",
  solution:
    "Designed social media editorial content honoring Biotalk's calm aesthetic: a soft monochromatic palette matched to existing tones, ingredient breakdowns, and sensitive skin care routines crafted for customers across diverse lifestyles.",
  outcome:
    "Established a serene, trustworthy social media presence that reinforced Biotalk's reputation for gentle, effective natural skincare.",
  features: [
    {
      title: "Monochromatic Color Palette",
      description:
        "Soft neutral tones (#010101, #e4e3eb, #ffffff) matching Biotalk's organic aesthetic, keeping new visual stories harmoniously connected with existing posts.",
    },
    {
      title: "Ingredient-Focused Content",
      description:
        "Educational posts spotlighting clean botanical ingredients and their benefits, empowering customers with transparent knowledge.",
    },
    {
      title: "Sensitive Skin Messaging",
      description:
        "Thoughtful routines specifically addressing sensitive skin concerns, building empathy and trust with customers who struggle to find safe solutions.",
    },
    {
      title: "Natural Texture Imagery",
      description:
        "Tactile botanical imagery, generous breathing space, and clean typography that celebrate authentic, healthy skin.",
    },
  ],
  resultImage: `${wix}/biotalk-f29c3d.jpg`,
  caseStudySections: [
    {
      title: "Who is Biotalk",
      body:
        "Biotalk is a local Indonesian brand that focuses on personal care products such as skincare and body care. Since 2015, Biotalk has been offering natural-based products to assist individuals with sensitive skin in finding solutions to care for their skin according to its type and needs.",
      images: [{ label: "biotalk-cover.jpg", src: `${wix}/biotalk-cover-36c403.jpg` }],
    },
    {
      title: "What our target market",
      body:
        "We want to focus on people who have issues with their skin and we offer a solution for their problems in one brand. For our target market we want to aim are: 1. 17-40 years old that have skin issues 2. SES C-A because our products are still affordable for most customers with powerful impact. 3. Who loved natural products. Because we believe with natural ingredients people can get the best result without worrying about damaging their skin.",
    },
    {
      title: "Concept about the brand",
      images: [{ label: "biotalk-image.jpg", src: `${wix}/biotalk-image-830884.jpg` }],
    },
    {
      title: "Color Palette",
      body:
        "The colors used are monochromatic, adjusted to match the color tones of the photos and feeds on Biotalk's Instagram account. This ensures a cohesive look between the new and existing feeds.\n#010101 · #e4e3eb · #ffffff",
    },
    {
      title: "Typography style",
      body:
        "For typography style, we use two types of typography. For Header, we use \"Gorgeous Serif Font Regular\", and for the Body copy, we use \"Lato\".",
      images: [
        {
          label: "Typography 1",
          src: `${wix}/screenshot-2024-02-09-at-20-18-19-91192b.png`,
        },
        {
          label: "Typography 2",
          src: `${wix}/0e435c-4fa34747ff5f4b02a82cf3b8269fcf57-mv2-4fa347.png`,
        },
      ],
    },
    {
      title: "Social Media concept",
      body:
        "We don't always rely on graphics to create variation. To enhance our visual appearance, we use images in the form of textures with certain guidelines, including:\n1. Incorporating natural elements for specific products as needed, such as flowers and leaves.\n2. Utilizing images with ample negative space, avoiding overly cluttered visuals.\n3. Combining images with visual shapes.",
      images: [{ label: "biotalk.jpg", src: `${wix}/biotalk-f29c3d.jpg` }],
    },
  ],
};
