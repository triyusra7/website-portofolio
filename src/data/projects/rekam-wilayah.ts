import type { Project } from "./types";

const wix = "/projects/rekam-wilayah/wix";

export const rekamWilayah: Project = {
  id: "rekam-wilayah",
  title: "Rekam Wilayah",
  company: "PasarMIKRO",
  projectType: "Full-time",
  category: "Product Design · Mobile App",
  year: "2021 – 2022",
  cover: "/projects/rekam-wilayah-cover.jpg",
  gradient: "from-emerald-100 via-background to-card",
  tags: ["GPS", "Field Research", "Mobile App"],
  summary:
    "This is the project that I working on in my company PasarMIKRO. This project for users can measure the size of their territory for their business.",
  problem:
    "Partners needed to understand and document the size of their business territory for records and traceability purposes, but had no digital tool to do so. Measuring land area required physically walking it, and existing map apps were too complex for non-technical users.",
  solution:
    "Inspired by sports tracking apps (running/cycling trail features), designed two capture modes: \"Plot\" (user walks the perimeter, GPS traces a polygon that auto-closes) and \"Point\" (pins current location for quick marking). Each recorded area includes commodity data input fields. The polygon auto-closure feature snaps the last point to the first, completing the area without precision GPS knowledge.",
  outcome:
    "Users can now document their territory digitally for business records and commodity traceability. Feature deployed within one sprint and available to all PasarMIKRO users.",
  features: [
    {
      title: "Rekam Aktivitas Entry Point",
      description:
        "The Rekam Wilayah feature is accessible from the Rekam Aktivitas screen — giving field agents a clear entry point to begin documenting their business territory.",
      image: "/projects/rekam-wilayah/screen-1.png",
    },
    {
      title: "Walk-to-Trace (Plot Mode)",
      description:
        "Users tap Mulai and walk their land boundary — GPS records each point in real-time on the map, forming a polygon that auto-closes, calculating the area automatically.",
      image: "/projects/rekam-wilayah/screen-2.png",
    },
    {
      title: "Territory Details & Data Input",
      description:
        "Each recorded area includes timestamp, location name, and commodity data fields — enabling traceability from land plot to transaction.",
      image: "/projects/rekam-wilayah/screen-3.png",
    },
    {
      title: "Area Measurement Completion",
      description:
        "Once the polygon closes, the app displays the calculated area in Ha and km² — giving farmers and traders an official land record for business documentation.",
      image: "/projects/rekam-wilayah/screen-4.png",
    },
  ],
  flowImage: "/projects/rekam-wilayah/userflow.jpg",
  flowProcessImages: ["/projects/rekam-wilayah/research.png"],
  bannerImages: [
    "/projects/rekam-wilayah/banner-1.png",
    "/projects/rekam-wilayah/banner-2.png",
    "/projects/rekam-wilayah/banner-3.png",
  ],
  resultImage: "/projects/rekam-wilayah/mockup-cover.jpg",
  caseStudySections: [
    {
      title: "Let's imagine this...",
      body:
        "You are a trader who seeks to understand the size of their territory and ascertain how it can be measured independently. But you want to know the easy way to measure it.",
      images: [{ label: "mockup-cover.jpg", src: `${wix}/mockup-cover-29f08d.jpg` }],
    },
    {
      title: "Problem backgrounds",
      body:
        "Some of our partners want to know and understand how big is their business area. Because they need to know for documentation too.",
    },
    {
      title: "Goals",
      body:
        "Letting them capture their land by themselves and Pin their specific area. And also giving them some initial information that they need to know.",
    },
    {
      title: "Project duration",
      body:
        "This project has 1 sprint to finish it (2 weeks or 10 days for work hours) to create from design to development and publishing in production. And for the teams, two UI/UX Designers, two Front-end, two Back-end, one Lead Technology, one Project Manager, and one QA.",
    },
    {
      title: "Information requirements",
      images: [{ label: "1.jpg", src: `${wix}/1-4c036e.jpg` }],
    },
    {
      title: "Requirement for the feature",
      body:
        "There are requirements asked by stakeholders and our partners:\nDefining the data set. Every user may have 1-to-many production plot, with: name/label, multiple long-lat (which could be single or a closed graph, also: production capacity, unit, and maybe reference to multiple objects (could be photo, images, etc). And series of validation dates.\nIn the app, make the entry for view+edit available from somewhere in the menu or Edit Profile. The reference part can be omitted.\nShown all fields, all mandatory. For the last two, reference and validation dates, no need. Just a simple editing, except for the long-lat.\nPoint or Plot. Show a choice to add point or plot. A point will only record the current position. Plot, the user will add a point one at a time with walking with the phone, and continue until the next, until the last one. If possible try to make the plot can be closed (snapping, or auto-add the last line).",
    },
    {
      title: "Userflow",
      body:
        "Based on requirements, I and PM create a user flow to make sure our flow is correct and fulfill our goals",
      images: [{ label: "PM Notes (21).png", src: `${wix}/pm-notes-21-7a411d.png` }],
    },
    {
      title: "Doing little research",
      body:
        "From the requirements and user flow above. I start doing a little research. For the research, I did some desk research like how users can plot their land or trace their land, so they know about the size of their land. For the benchmark, I follow sports app. Because usually, sports app have feature for tracking when users want to run, bicycle, or walk. They can track how far they already running. So, I use that logic to implement in this feature. But the different between \"Rekam wilayah\" and feature tracking in sports app is capture their area and users can fill their commodity for the land plot they doing. And also they can just \"Pin\" their land if they don't want to measure their land like in game \"Genshin Impact\" when player want to pin specific area.",
    },
    {
      title: "Start The Design",
      images: [{ label: "2.jpg", src: `${wix}/2-996a63.jpg` }],
    },
    {
      title: "Create design in figma",
      body:
        "Because our team product has a library and design system. So I just use that to create the Hi-Fi for this project. First of all, I create flow for the capture of an area, and I put some \"input field component\" for users can fill their commodity data. For the Pin area is the same field they need to fill. But different between Capture area and Pin area is size of the area. Pin area will fill automatically 0km.",
      images: [
        {
          label: "Plotting-area-(rekam-wilayah).jpg",
          src: `${wix}/plotting-area-rekam-wilayah-81ee03.jpg`,
        },
        {
          label: "Plotting-area-(titik-wilayah).jpg",
          src: `${wix}/plotting-area-titik-wilayah-b11949.jpg`,
        },
      ],
    },
    {
      title: "Final Design",
      images: [{ label: "3.jpg", src: `${wix}/3-eb012c.jpg` }],
    },
    {
      title: "Finally...Mockup app design",
      body:
        "After 1 sprint finish and already deployed to public, finally we can use this feature for our users and partners",
      images: [
        { label: "Layer 23.png", src: `${wix}/layer-23-f76a1a.png` },
        { label: "Layer 24.png", src: `${wix}/layer-24-443017.png` },
        { label: "Layer 25.png", src: `${wix}/layer-25-66d02e.png` },
        { label: "Layer 26.png", src: `${wix}/layer-26-26b654.png` },
        { label: "Layer 27.png", src: `${wix}/layer-27-ce1c4d.png` },
        { label: "Layer 28.png", src: `${wix}/layer-28-4b7675.png` },
        { label: "Layer 30.png", src: `${wix}/layer-30-80abb3.png` },
        {
          label: "Rekam Wilayah demo (GIF)",
          src: `${wix}/adobe-express-2024-01-19-08-54-20-99986d.gif`,
        },
        { label: "Layer 29.png", src: `${wix}/layer-29-d6b332.png` },
      ],
    },
    {
      title: "Coming soon for the next improvement",
    },
  ],
};
