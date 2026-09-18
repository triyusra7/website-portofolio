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
    "Brand and social media design for LitUP, an educational student-led organization empowering Indonesian youth to discover their passions (active at instagram.com/litup.id).",
  problem:
    "Many Indonesian youth (ages 17–22) experience uncertainty about their career paths and future studies. LitUP needed an inspiring, approachable visual identity and consistent social media content to genuinely connect with students and make guidance accessible.",
  solution:
    "As Lead Designer, shaped the brand identity: a logo combining fire (passion for learning) and a pen (storytelling and agency), balanced by cheerful yellow (#FFC725) and dependable navy blue (#062057). Created a community-first Instagram and TikTok content system highlighting real student journeys, goal-setting tools, and relatable mentorship stories.",
  outcome:
    "Built a warm, recognizable brand that engaged thousands of high school and university students across Indonesia, helping young people navigate their academic and career choices with confidence.",
  features: [
    {
      title: "Fire + Pen Logo",
      description:
        "A logo combining fire (curiosity and drive) with a pen (self-expression), visually capturing the organization's commitment to youth empowerment.",
    },
    {
      title: "Yellow & Blue Color Palette",
      description:
        "Warm yellow (#FFC725) for youthful optimism paired with deep navy (#062057) for trust and stability, striking an approachable yet grounded balance.",
    },
    {
      title: "Instagram Content System",
      description:
        "A cohesive template framework for educational carousels, student stories, and reflective prompts that keep every post visually distinct and easy to read.",
    },
    {
      title: "TikTok Expansion",
      description:
        "Extended the visual identity to TikTok short-form video, meeting younger students where they spend time with engaging, uplifting micro-lessons.",
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
