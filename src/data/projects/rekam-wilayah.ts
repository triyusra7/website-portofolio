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
    "A mobile field mapping tool built for PasarMIKRO's agricultural supply chain platform (~1,000 registered traders and smallholders). Designed walk-to-trace GPS boundary recording and point pinning to give rural users accurate land measurement and commodity traceability without complex GIS tools.",
  problem:
    "PasarMIKRO partners and field agents needed to record and verify farm boundaries for formal trade documentation, loan underwriting, and commodity traceability. Existing GIS and mapping tools were too complex for non-technical rural users operating in low-connectivity environments, while manual estimations led to disputes and inaccurate harvest projections.",
  solution:
    "Designed a lightweight, two-mode capture system optimized for low-end mobile devices and field conditions: 'Plot' mode allows users to walk their perimeter while GPS traces coordinates into an auto-closing polygon that calculates acreage in real time; 'Point' mode allows quick geopinning of specific collection sites. Structured input forms attach commodity data directly to each perimeter record, bridging physical land plots to marketplace transaction records.",
  outcome:
    "Shipped within a single 2-week sprint and rolled out across PasarMIKRO's active user base (~600 active traders and smallholders). Enabled instant, verifiable land documentation directly from field walks, establishing the groundwork for commodity traceability and verified transaction data.",
  features: [
    {
      title: "Rekam Aktivitas Entry Point",
      description:
        "The Rekam Wilayah feature is accessible from the Rekam Aktivitas screen, giving field agents a clear entry point to begin documenting their business territory.",
      image: "/projects/rekam-wilayah/screen-1.png",
    },
    {
      title: "Walk-to-Trace (Plot Mode)",
      description:
        "Users tap Mulai and walk their land boundary while GPS records each point in real-time on the map, forming an auto-closing polygon that calculates the area automatically.",
      image: "/projects/rekam-wilayah/screen-2.png",
    },
    {
      title: "Territory Details & Data Input",
      description:
        "Each recorded area captures timestamps, location names, and commodity details, creating genuine traceability from the physical plot to the final transaction.",
      image: "/projects/rekam-wilayah/screen-3.png",
    },
    {
      title: "Area Measurement Completion",
      description:
        "Once the polygon closes, the app clearly displays the calculated area in Ha and km², giving farmers and traders an official land record for business documentation.",
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
      title: "Context & Field Challenge",
      body:
        "In rural Indonesian agriculture, trade documentation and credit assessment require knowing farm plot sizes. However, smallholders and local collectors rarely hold formal surveyed land titles. When field agents visit farms, they need an accessible method to document boundaries independently and link those physical plots to harvest records.",
      images: [{ label: "mockup-cover.jpg", src: `${wix}/mockup-cover-29f08d.jpg` }],
    },
    {
      title: "Problem Background",
      body:
        "Without digital boundary records, commodity yield estimates relied on rough guesswork. Existing GIS and mapping software was entirely unsuited for field workers in rural areas: high battery drain, confusing polygon editing nodes, and steep learning curves. We needed a tool intuitive enough for a first-time smartphone user walking a farm perimeter in rural conditions.",
    },
    {
      title: "Core Objectives",
      body:
        "1. Empower field agents and farmers to map land boundaries independently by simply walking the perimeter.\n2. Support single-point geolocation pinning for quick collection depot logging.\n3. Capture commodity yield and category data alongside spatial boundaries in one seamless flow.\n4. Design and ship the end-to-end experience within a tight 2-week sprint cycle.",
    },
    {
      title: "Team & Timeline",
      body:
        "Delivered in one 2-week sprint from requirements discovery to production release. Worked alongside another UI/UX designer, 2 front-end engineers, 2 back-end engineers, a tech lead, a QA engineer, and a dedicated product manager.",
    },
    {
      title: "Information Requirements",
      images: [{ label: "1.jpg", src: `${wix}/1-4c036e.jpg` }],
    },
    {
      title: "Feature Specifications",
      body:
        "Stakeholder and field requirements specified: Every user may register multiple production plots with unique labels, an array of latitude-longitude coordinates (either a single point or a closed polygon), commodity capacity, unit of measurement, and validation timestamps. The interface had to present two straightforward options: 'Plot' (walk the perimeter to capture continuous GPS points that snap shut upon completion) and 'Point' (single-tap coordinate logging for static collection depots).",
    },
    {
      title: "User Flow Mapping",
      body:
        "Together with the product manager, I mapped an end-to-end user flow prioritizing minimal taps: select capture mode → trigger GPS recording → live perimeter walk visualization → auto-closure confirmation → commodity metadata input → persistent save to user profile.",
      images: [{ label: "PM Notes (21).png", src: `${wix}/pm-notes-21-7a411d.png` }],
    },
    {
      title: "Interaction Logic: Consumer Trail Tracking Applied to Agri-Tech",
      body:
        "Rather than adopting complex GIS interfaces like ArcGIS or QGIS, I drew interaction patterns from consumer fitness apps that simplify GPS path recording to a single 'Start / Walk / Stop' paradigm. I adapted this logic for agricultural mapping: users press 'Mulai' (Start), walk the farm edge, and an auto-closure algorithm snaps the final waypoint back to the origin, calculating hectares (Ha) and square kilometers automatically. For collection depots where perimeter walking is unnecessary, a single 'Point' pin mode captures coordinates with zero configuration.",
    },
    {
      title: "Interface Architecture",
      images: [{ label: "2.jpg", src: `${wix}/2-996a63.jpg` }],
    },
    {
      title: "Component Reusability & Form Design",
      body:
        "Leveraging PasarMIKRO's mobile design system, I built high-fidelity screens ensuring high contrast in direct sunlight and prominent touch targets suitable for outdoor field use. Commodity input fields follow standard bottom-sheet patterns, ensuring the map remains visually anchored while data is entered.",
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
      title: "Final UI",
      images: [{ label: "3.jpg", src: `${wix}/3-eb012c.jpg` }],
    },
    {
      title: "Production Release & Field Impact",
      body:
        "Deployed to production and adopted across PasarMIKRO's network of ~1,000 registered traders and smallholders (~600 active). Field agents documented hundreds of hectares during initial harvest cycles, establishing verifiable origin data for transactions on PasarMIKRO's platform.",
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
      title: "Future Iterations & Offline Resilience",
      body:
        "Subsequent roadmap considerations identified during field observation included offline vector tile caching for deep rural areas with intermittent cellular coverage, manual vertex adjustment handles to correct GPS drift, and multi-polygon grouping for cooperative farm clusters.",
    },
  ],
};
