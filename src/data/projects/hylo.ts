import type { Project } from "./types";

const wix = "/projects/hylo/wix";

export const hylo: Project = {
  id: "hylo",
  title: "Hylo Social Media",
  company: "Freelance",
  projectType: "Freelance",
  category: "Social Media · Visual Identity",
  year: "2024",
  cover: "/projects/hylo-cover.jpg",
  gradient: "from-orange-100 via-background to-card",
  tags: ["Social Media", "Interior Design", "Branding"],
  summary:
    "Brand identity and social media design for Hylo, an interior architecture and construction studio (active on Instagram at instagram.com/hylo.id).",
  problem:
    "Hylo needed a compelling social media presence to attract clients for interior design projects. Their target audience expects a warm, polished visual experience that communicates craftsmanship and reliability.",
  solution:
    "Developed a video-first content strategy using Hylo's established brand colors (#EF9A52 warm orange, #231F20 dark charcoal, #ffffff white) and Work Sans typography. Content focused on before/after transformations, design process documentation, material showcases, and completed project walkthroughs, using video formats to drive engagement and demonstrate the tactile quality of interior craft.",
  outcome:
    "Established an engaging, cohesive social media presence that communicates Hylo's architectural expertise through relatable video content and disciplined brand application.",
  features: [
    {
      title: "Video-First Content Strategy",
      description:
        "Prioritized video over static photography to showcase spatial transformations in motion, connecting more emotionally with potential clients.",
    },
    {
      title: "Brand Color Adherence",
      description:
        "All content strictly follows the pre-established palette (#EF9A52, #231F20, #ffffff), ensuring instant brand recognition across every post.",
    },
    {
      title: "Before & After Transformations",
      description:
        "Side-by-side reveals of spaces before and after Hylo's work, providing undeniable visual proof of their spatial expertise.",
    },
    {
      title: "Work Sans Typography",
      description:
        "A clean, modern sans-serif typeface applied consistently across all media to maintain an elegant, welcoming tone.",
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
