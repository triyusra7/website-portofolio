import type { Project } from "./types";

const wix = "/projects/wasnack/wix";

export const wasnack: Project = {
  id: "wasnack",
  title: "Wasnack",
  company: "Google & Coursera",
  projectType: "Course Project",
  category: "UX Design · Mobile App",
  year: "2022",
  cover: "/projects/wasnack-cover.jpg",
  gradient: "from-blue-100 via-background to-card",
  tags: ["Mobile App", "UX Research", "Food & Beverage"],
  summary:
    "A mobile concept app designed during the Google UX Design Certificate, exploring how to eliminate concession line friction at movie theaters through seamless advance ordering.",
  problem:
    "Moviegoers often face a frustrating dilemma: queue for concessions and risk missing the start of the movie, or rush straight to their seats empty-handed. Distant, small-print menu boards behind busy counters only add to the rush.",
  solution:
    "Designed a friendly mobile experience where moviegoers can browse showtimes, pick seats, order snacks with search and dietary filters, and share a digital pickup receipt, all before arriving at the cinema.",
  outcome:
    "Validated through moderated usability testing, confirming that advance ordering and receipt sharing significantly reduced arrival anxiety and streamlined group cinema trips.",
  features: [
    {
      title: "Pre-Order Before Arrival",
      description:
        "Select your theater, movie, snacks, and seats in advance, so you can walk straight to your screen without waiting in line.",
    },
    {
      title: "Movie Synopsis & Showtimes",
      description:
        "Clear overviews and showtimes right on the homepage help visitors make quick, confident decisions with friends.",
    },
    {
      title: "Snack Menu with Search",
      description:
        "Browse the full concession menu with a handy search bar, replacing the stress of squinting at distant counter boards.",
    },
    {
      title: "Receipt Sharing",
      description:
        "Shareable digital receipts let any friend in the group collect the snacks, making movie outings smooth and relaxed for everyone.",
    },
  ],
  resultImage: `${wix}/home-1c0343.jpg`,
  caseStudySections: [
    {
      title: "Let's imagine this...",
      body:
        "You want to watch a movie at the movie theater, and you realize that also you want to order snacks but you have no time to order at the movie theater because the movie that you want to watch is at 20:00 and you're haven't ordered the ticket yet because you want to order when you arrive at the movie theater. And the best part is the distance between your location and the movie theater took 25 minutes to drive. And when arrive there, you hate to stand in line because you just want to watch the movie while eating snacks that you want to buy there and enjoy the movie while you still can. So how can you watch the movie while eating snacks, but the time is still clock?",
      images: [{ label: "wasnack-1.jpg", src: `${wix}/wasnack-1-17f89c.jpg` }],
    },
    {
      title: "Problem backgrounds",
      body:
        "From this situation, I conducted a little research to find out what's the biggest problems, and I realized there were a few problems that I found.\nPeople hate to stand in line for a long time just to order snacks and tickets.\nSometimes people arrive late for the movie and want to order snacks and tickets but don't have time because the movie has already played.",
    },
    {
      title: "Goals",
      body:
        "Letting and giving people ability to order first before they came to a movie theater and skip an order at movie theater, and also saving time.",
    },
    {
      title: "Understanding The Users",
      images: [{ label: "sketch_edited.jpg", src: `${wix}/sketch-edited-75f0a7.jpg` }],
    },
    {
      title: "User Research & Discovery",
      body:
        "I conducted interviews with regular moviegoers to understand how they plan theater visits and handle concession ordering. A key group consisted of working adults and students who often arrive right before showtimes. Research confirmed that line anxiety, unclear distant menus, and coordinating food for groups were major pain points.",
    },
    {
      title: "Pain points",
      body:
        "Key challenges identified during conversations:\n• Time constraints: Arriving close to showtime creates anxiety between ordering food or catching the beginning of the movie.\n• Accessibility: Distant menu boards with tiny typography are hard to read, especially in dim theater lobbies.\n• Order coordination: One person typically ends up carrying all items while friends wait at the auditorium doors.",
    },
    {
      title: "User Persona",
      body:
        "Created Christine, a persona embodying busy urban professionals who value their leisure time and want an effortless, stress-free movie outing.",
      images: [{ label: "persona.png", src: `${wix}/persona-b716bd.png` }],
    },
    {
      title: "Core User Story",
      body:
        "As a busy moviegoer, Christine wants to pre-order her tickets and cinema snacks on her phone so that she can walk directly to her seat without standing in crowded queues.",
    },
    {
      title: "Journey Mapping",
      body:
        "Mapped the traditional moviegoer journey to highlight where delays and frustrations peak during in-person counter ordering.",
      images: [{ label: "Group 2608956.png", src: `${wix}/group-2608956-9cb1a6.png` }],
    },
    {
      title: "Start The Design",
      images: [{ label: "sketch-2.jpg", src: `${wix}/sketch-2-5f62b3.jpg` }],
    },
    {
      title: "Initial idea with sketching",
      body:
        "I initiated the problem-solving process by conceptualizing an app. Beginning with hand-drawn sketches and paper wireframes, I appreciated the ease of translating ideas onto paper without concerning myself with the UI. The process of drafting iterations on paper ensured that elements in the digital wireframe effectively addressed user pain points. Notably, I prioritized a shortcut on the home screen for a quick movie theater selection and streamlined the process from selection to choosing snacks for a seamless user experience.",
      images: [
        { label: "wireframe-01.jpg", src: `${wix}/wireframe-01-02a794.jpg` },
        { label: "wireframe-02.jpg", src: `${wix}/wireframe-02-2c7d9b.jpg` },
        { label: "wireframe-03.jpg", src: `${wix}/wireframe-03-2db43a.jpg` },
        { label: "wireframe-04.jpg", src: `${wix}/wireframe-04-c4e6ea.jpg` },
        { label: "wireframe-05.jpg", src: `${wix}/wireframe-05-254486.jpg` },
        { label: "wireframe-06.jpg", src: `${wix}/wireframe-06-6c706b.jpg` },
      ],
    },
    {
      title: "Put sketches on to Figma",
      body:
        "After I finished all my paper sketching, I took photos all of it and placed them into Figma to make it more digitalized, so I could start designing using Figma based on my sketch before. As the initial design phase continued, I made sure to base screen designs base on research and what user need most and first.\nEasy pick the movie and snacks from movie theater. User will allow to pick any snacks they want while buy ticket for the movie. One package in one page and one app.",
      images: [
        { label: "1.png", src: `${wix}/1-388e95.png` },
        { label: "2.png", src: `${wix}/2-4e2e69.png` },
      ],
    },
    {
      title: "Full version of all sketches in Figma",
      body:
        "These are full pages process, from home until order ticket and snack and pay. Here we can see how the app operates. I use \"Low-Fidelity\" to describe the process. And then I create a \"Prototype\" so it will be clickable when we want to test it.",
      images: [{ label: "Screenshot (455).png", src: `${wix}/screenshot-455-f50a46.png` }],
    },
    {
      title: "Usability Testing & Feedback",
      body:
        "Conducted moderated usability sessions via Zoom with five participants to test the clickable prototype. Key user insights:\n• Insight 1: Users wanted synopses and showtimes immediately on the landing screen.\n• Insight 2: A quick search bar was essential to filter specific snacks and combo deals.\n• Insight 3: Intuitive seat selection and quantity adjustments needed to be visible in the main flow.\n• Insight 4: Participants loved the idea of a shareable receipt so friends could pick up snacks independently.",
    },
    {
      title: "Refining The Design",
      images: [{ label: "sketch-3.jpg", src: `${wix}/sketch-3-9b3007.jpg` }],
    },
    {
      title: "\"Before\" and \"After\" Usability Study",
      body:
        "From findings that I get from the Usability Study, I iterate my design process and make it more usable for users. And these are the results.\nBecause users want to find specific snacks, so there is a \"search bar\" to allow users type and find any specific snacks.\nThere is a \"share button\" for user can share the receipt to other people.",
      images: [
        { label: "11.png", src: `${wix}/11-9282fc.png` },
        { label: "22.png", src: `${wix}/22-b4c53b.png` },
      ],
    },
    {
      title: "Decide design styles for the app",
      body:
        "Because I want to make the look of the app more engaging and can fit our persona. I use the primary color blue because the definition that makes the color blue is often described as security, calm, order, and peace. It fits the app because the user needs to trust the product so that they can feel safe and relaxed when using it. For the typeface itself, I using \"Poppins\" which Wasnack will be dedicated to loyal customers for all tickets and food that are sold are always the best but at an affordable price and also always served with smiles and humility from us.",
      images: [
        { label: "Group 2608994.png", src: `${wix}/group-2608994-14e7a1.png` },
        { label: "TYPEFACE.png", src: `${wix}/typeface-2210ba.png` },
      ],
    },
    {
      title: "Finally...Mockup app design",
      body:
        "After all the processes that I do from finding out what is exactly the biggest problem for users to thinking and creating the product that helps users to buy snacks and tickets for the movie at the movie theater. And these are the results.",
      images: [
        { label: "home.jpg", src: `${wix}/home-1c0343.jpg` },
        { label: "search.jpg", src: `${wix}/search-cea2f6.jpg` },
        { label: "movie-awal.jpg", src: `${wix}/movie-awal-4e264c.jpg` },
        { label: "menu.jpg", src: `${wix}/menu-4bf63a.jpg` },
        { label: "seat-1.jpg", src: `${wix}/seat-1-38e37d.jpg` },
        { label: "seat-2.jpg", src: `${wix}/seat-2-d00073.jpg` },
        { label: "ticket-selected.jpg", src: `${wix}/ticket-selected-b25095.jpg` },
        { label: "Wasnack demo (GIF)", src: `${wix}/gif-wasnack-final-118b23.gif` },
        { label: "snacks.jpg", src: `${wix}/snacks-0f8edd.jpg` },
        { label: "snacks-selected.jpg", src: `${wix}/snacks-selected-c8cc5a.jpg` },
        { label: "preview.jpg", src: `${wix}/preview-6e5898.jpg` },
        { label: "pay.jpg", src: `${wix}/pay-226839.jpg` },
        { label: "e-shopping.jpg", src: `${wix}/e-shopping-5e5f7a.jpg` },
        { label: "e-shopping-2.jpg", src: `${wix}/e-shopping-2-5cd622.jpg` },
      ],
    },
  ],
};
