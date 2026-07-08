import type { Project } from "./types";

const wix = "/projects/litup/wix";

export const litup: Project = {
  id: "litup",
  title: "LitUP Social Media",
  company: "LitUP Indonesia",
  projectType: "Community",
  category: "Social Media · Branding",
  year: "2020 – 2022",
  cover: "/projects/litup-cover.jpg",
  gradient: "from-yellow-100 via-background to-card",
  tags: ["Social Media", "Education", "Branding"],
  summary:
    "This project for our organization is called \"LitUP\". I handle the social media design for posting on our social media platform (Instagram) — live at instagram.com/litup.id.",
  problem:
    "LitUP needed to reach Indonesian students (17–22 years old) who lacked clear direction for their futures. The organization's mission required a strong, relatable visual identity and consistent social media content that students would engage with.",
  solution:
    "As Lead Designer, created the complete brand identity: a logo combining fire (passion for learning) and pen (storytelling, self-expression), a yellow (#FFC725) and blue (#062057) color palette communicating energy and trustworthiness respectively, and a consistent content system for Instagram that expanded to TikTok. Social content focused on student empowerment, goal-setting, and learning inspiration.",
  outcome:
    "Successfully reached the target student audience across platforms, supported students in defining their future direction, and built a recognizable brand identity for the organization over two years.",
  features: [
    {
      title: "Fire + Pen Logo",
      description:
        "Logo combining fire (passion and energy for learning) with a pen (storytelling and self-expression) — visually encoding the organization's mission of student empowerment.",
    },
    {
      title: "Yellow & Blue Color Palette",
      description:
        "Yellow (#FFC725) for cheerfulness and creative energy; Blue (#062057) for stability and trustworthiness. Combined to balance inspiration with reliability.",
    },
    {
      title: "Instagram Content System",
      description:
        "Consistent post structure for educational messages, student testimonials, and motivational content — maintaining brand identity across all posts.",
    },
    {
      title: "TikTok Expansion",
      description:
        "Extended content strategy to TikTok to reach younger students where they spend time — adapting the brand for short-form video without losing visual consistency.",
    },
  ],
  resultImage: `${wix}/litup-4ab5e1.jpg`,
  caseStudySections: [
    {
      title: "Who is LitUP",
      body:
        "LitUP is an organization operating in the field of education. Our vision is to dream of seeing the majority of Indonesian students eagerly embracing school time and learning with enthusiasm throughout the day. Meanwhile, our mission is to ignite the spirit of learning among the nation's children through relevant education.",
      images: [{ label: "litup-cover.jpg", src: `${wix}/litup-cover-084b26.jpg` }],
    },
    {
      title: "What we aim for",
      body:
        "We want to reach students as many as possible based on our mission and vision. And for starters, social media (Instagram in this case) will help us to reach students. Our target market is students in the range of ages 17 - 22 years old, and also still don't have clear goal what they want to in the future.",
    },
    {
      title: "Concept about the brand",
      images: [{ label: "litup-image.jpg", src: `${wix}/litup-image-d220b4.jpg` }],
    },
    {
      title: "Logo concepts",
      body:
        "We want our brand to describe that we have the passion and spirit to make our make our students get a great education, so they can write down their stories when they get that. Based on what we want, we decide to choose two symbols that represent our goal. First is \"Fire\" and then a \"Pen\". Fire is a symbol of passion, and the Pen is a symbol of story. And for the color, we choose Yellow (Hex: #FFC725) and Blue (Hex: #062057). The reason we chose those colors is because yellow represents cheerfulness, creativity, energy, and intelligence in the world of education. And for the blue represents calmness, stability, trustworthiness, and professionalism.",
      images: [
        { label: "Logo sketch", src: `${wix}/logo-sketch-9375b2.png` },
        { label: "LOGO - FInal-06.png", src: `${wix}/logo-final-06-da269b.png` },
      ],
    },
    {
      title: "Social Media concept",
      body:
        "Based on our brand identity, we use those concepts for our social media design, such as colors and shape. Because we want to make them in-line for all our brand concept.",
      images: [{ label: "litup.jpg", src: `${wix}/litup-4ab5e1.jpg` }],
    },
  ],
};
