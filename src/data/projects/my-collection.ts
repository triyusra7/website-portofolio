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
  gradient: "from-rose-100 via-background to-card",
  tags: ["Photography", "Vector", "Book Design"],
  summary:
    "These are my other projects besides UX designer. I love art, design and photography, especially \"human interest\" and Keith Haring's masterpiece. I believe that art can bring joy to people around the world, and I hope my art can bring joy to people as well.",
  problem:
    "Beyond UX and product design, creativity also lives in photography, illustration, and book design — disciplines that bring joy and artistic expression that structured project work doesn't always allow.",
  solution:
    "Built an ongoing personal collection across three disciplines: book design exploring layout and typographic composition; vector illustration inspired by Keith Haring's bold, joyful style; and human interest photography capturing authentic moments and emotional depth in everyday people and scenes.",
  outcome:
    "A living personal portfolio that reflects artistic interests and creative range beyond UX work — available for those interested in collaboration or purchase.",
  features: [
    {
      title: "Book Design",
      description:
        "Layout and typographic compositions exploring the relationship between text, space, and image — bringing editorial thinking to physical and digital book formats.",
    },
    {
      title: "Vector Illustration",
      description:
        "Bold, flat vector work inspired by Keith Haring's joyful aesthetic — using simplified forms and vibrant color to create work that is immediately accessible and expressive.",
    },
    {
      title: "Human Interest Photography",
      description:
        "Documentary-style photography focused on people, emotion, and authentic moments — capturing stories that statistics and design briefs miss.",
    },
    {
      title: "Open for Collaboration",
      description:
        "All pieces in this collection are available for discussion — whether for purchase, exhibition, or collaboration on creative projects.",
    },
  ],
  resultImage: `${wix}/9-b69829.jpg`,
  caseStudySections: [
    {
      title: "My collection",
      body:
        "These are my other projects besides UX designer. I love art, design and photography, especially \"human interest\" and Keith Haring's masterpiece. I believe that art can bring joy to people around the world, and I hope my art can bring joy to people as well. Please enjoy my art and my other design. Let me know if you are interested in something that I created. Thank you!",
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
