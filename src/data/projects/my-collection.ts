import type { Project } from "./types";

const wix = "/projects/my-collection/wix";

export const myCollection: Project = {
  id: "my-collection",
  title: "My Collection",
  company: "Personal",
  projectType: "Personal",
  category: "Photography · Vector · Book Design",
  year: "2021 – Now",
  cover: "/projects/collection-cover.jpg",
  thumbnail: "/projects/collection-card.jpg",
  gradient: "from-rose-100 via-background to-card",
  tags: ["Photography", "Vector", "Book Design"],
  summary:
    "A personal creative playground outside product design. I have a deep love for visual arts, photography, and illustrative storytelling, especially human interest subjects and the vibrant spirit of Keith Haring. I believe art has an innate ability to bring warmth and joy to people everywhere, and I hope these personal creations share that feeling with you.",
  problem:
    "Beyond digital product design, creativity thrives through photography, illustration, and book layout, creative disciplines that nurture the imagination and offer artistic expression that structured project roadmaps rarely accommodate.",
  solution:
    "Curated a living personal archive across three creative mediums: book design exploring editorial rhythm and typography, vector illustration inspired by Keith Haring's playful energy, and documentary-style photography capturing genuine emotions in everyday scenes.",
  outcome:
    "A personal creative sanctuary that showcases visual versatility and a passion for craft outside software interfaces, open for print inquiries, exhibition showcases, or creative partnerships.",
  features: [
    {
      title: "Book Design",
      description:
        "Thoughtful layout and typography compositions exploring the dialogue between text, negative space, and imagery, bringing editorial craftsmanship to both physical and digital formats.",
    },
    {
      title: "Vector Illustration",
      description:
        "Bold, expressive vector illustrations inspired by Keith Haring's uplifting aesthetic, using simplified shapes and vibrant palettes to evoke immediate joy and connection.",
    },
    {
      title: "Human Interest Photography",
      description:
        "Documentary-style frames focused on everyday people, quiet emotions, and honest moments, preserving stories that data sheets and design briefs inevitably miss.",
    },
    {
      title: "Open for Collaboration",
      description:
        "All pieces in this collection are warmly open for conversation, whether you are interested in prints, gallery showcases, or exploring unique creative collaborations.",
    },
  ],
  resultImage: `${wix}/9-b69829.jpg`,
  caseStudySections: [
    {
      title: "My collection",
      body:
        "A collection of passion projects created alongside my design career. I have always been deeply drawn to visual arts, street photography, and Keith Haring's uplifting artistic voice. To me, art is about sharing joy and honest human connection with people around the world. Please take your time exploring these pieces, and feel free to reach out if any of them resonate with you!",
      images: [{ label: "9.jpg", src: `${wix}/9-b69829.jpg` }],
    },
    {
      title: "Book Design",
      images: [
        { label: "7.jpg", src: `${wix}/7-add249.jpg` },
        { label: "8.jpg", src: `${wix}/8-0662f4.jpg` },
      ],
    },
    {
      title: "Vector Design",
      images: [
        { label: "COBA-1.jpg", src: `${wix}/coba-1-a134d9.jpg` },
        { label: "radio.jpg", src: `${wix}/radio-c1bcdb.jpg` },
        { label: "mobil.png", src: `${wix}/mobil-7d9a28.png` },
      ],
    },
    {
      title: "Take a Picture",
      images: [
        { label: "12.jpg", src: `${wix}/12-9bd488.jpg` },
        { label: "10.jpg", src: `${wix}/10-9f25f5.jpg` },
        { label: "11.jpg", src: `${wix}/11-22145d.jpg` },
        { label: "13.jpg", src: `${wix}/13-33b123.jpg` },
      ],
    },
  ],
};
