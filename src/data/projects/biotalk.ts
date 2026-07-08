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
    "This is my project when I work as an intern in graphic design. This is one of the project that I worked on when I working for one of the local digital agency — live on Instagram at instagram.com/biotalk.id.",
  problem:
    "Biotalk, a natural skincare brand since 2015, needed consistent social media content to communicate their core values — natural ingredients, sensitive skin safety, and affordability — to a broad target market across multiple skin concerns.",
  solution:
    "Designed social media content following Biotalk's brand: a monochromatic palette matched to the tones of Biotalk's existing Instagram feed, ensuring a cohesive look between new and existing posts. Content highlighted specific ingredients, product benefits for sensitive skin, and affordability messaging — targeting users aged 17–40 across socioeconomic levels C to A.",
  outcome:
    "Cohesive brand communication across social media that reinforced Biotalk's natural, skin-safe positioning and connected with their diverse target audience.",
  features: [
    {
      title: "Monochromatic Color Palette",
      description:
        "Colors (#010101, #e4e3eb, #ffffff) adjusted to match the tones of Biotalk's existing Instagram feed — keeping new content cohesive with what came before.",
    },
    {
      title: "Ingredient-Focused Content",
      description:
        "Posts highlighting specific natural ingredients and their skin benefits — educating the audience while reinforcing the brand's transparency value.",
    },
    {
      title: "Sensitive Skin Messaging",
      description:
        "Content specifically addressing sensitive skin concerns, building trust with users who struggle to find safe, effective products.",
    },
    {
      title: "Natural Texture Imagery",
      description:
        "Visual variation through textures and natural elements (flowers, leaves), ample negative space, and images combined with visual shapes — not just graphics.",
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
