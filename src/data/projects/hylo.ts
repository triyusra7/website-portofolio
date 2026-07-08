import type { Project } from "./types";

const wix = "/projects/hylo/wix";

export const hylo: Project = {
  id: "hylo",
  title: "Hylo Social Media",
  company: "Freelance",
  projectType: "Freelance",
  category: "Social Media · Graphic Design",
  year: "2024",
  cover: "/projects/hylo-cover.jpg",
  gradient: "from-orange-100 via-background to-card",
  tags: ["Social Media", "Interior Design", "Branding"],
  summary:
    "This is my project when I work as a freelance graphic designer. This project is about construction and interior design for building — live on Instagram at instagram.com/hylo.id.",
  problem:
    "Hylo needed a compelling social media presence to attract clients for interior design projects. Their target market (age 30–50, SES B-A) expects a premium, professional visual experience that communicates quality and expertise.",
  solution:
    "Developed a video-first content strategy using Hylo's established brand colors (#EF9A52 warm orange, #231F20 dark charcoal, #ffffff white) and Work Sans typography. Content focused on before/after transformations, design process documentation, material showcases, and completed project walkthroughs — leveraging video for higher engagement and stronger demonstration of design quality.",
  outcome:
    "Cohesive, premium social media presence that communicates Hylo's expertise to their target market through engaging video content and consistent brand application.",
  features: [
    {
      title: "Video-First Content Strategy",
      description:
        "Prioritized video over static images to show design transformations in motion — more engaging for target audience and better at demonstrating the quality of interior work.",
    },
    {
      title: "Brand Color Adherence",
      description:
        "All content strictly follows the pre-established palette (#EF9A52, #231F20, #ffffff), ensuring instant brand recognition across every post.",
    },
    {
      title: "Before & After Transformations",
      description:
        "Side-by-side reveals of spaces before and after Hylo's work — one of the most effective content formats for showcasing interior design value.",
    },
    {
      title: "Work Sans Typography",
      description:
        "Professional, modern sans-serif with an extensive typeface family — applied consistently across all content types for a polished, unified look.",
    },
  ],
  resultImage: `${wix}/hylo-c80f4b.jpg`,
  caseStudySections: [
    {
      title: "Who is Hylo",
      body:
        "Hylo is a company engaged in interior design for buildings, including homes, offices, and more. With experience and professionalism in this field, Hylo has become one of the best interior design companies in Indonesia.",
      images: [{ label: "hylo-cover.jpg", src: `${wix}/hylo-cover-09823a.jpg` }],
    },
    {
      title: "What our target market",
      body:
        "We want to focus on making interior design for buildings more aesthetic and great. So for those reasons, our target market is people who have passion and of course, have buildings. And other target markets are: 1. Age 30-50 years old 2. SES B-A",
    },
    {
      title: "Concept about the brand",
      images: [{ label: "hylo-image.jpg", src: `${wix}/hylo-image-e32021.jpg` }],
    },
    {
      title: "Color Palette",
      body:
        "Because the color for the owner has already been chosen, So I just followed it to make the design for social media.\n#EF9A52 · #231F20 · #ffffff",
    },
    {
      title: "Typography style",
      body:
        "For typography style, I use \"work sans\" typography, because sans serif typography is more common to use and this typography has a lot of family typefaces to choose.",
      images: [{ label: "typo.jpg", src: `${wix}/typo-12696a.jpg` }],
    },
    {
      title: "Social Media concept",
      body:
        "This brand is about interior design, so I have to make more stand-out about interior design for the post-design social media while using the color palette of this brand. Also, I use more videos for this design on social media because sometimes people can get excited when watching videos.",
      images: [{ label: "hylo.jpg", src: `${wix}/hylo-c80f4b.jpg` }],
    },
  ],
};
