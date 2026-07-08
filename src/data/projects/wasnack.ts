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
    "This project was from my course \"coursera\" and Google. And the project was from a real situation in real life that I took. I want to develop my skills and my knowledge of UX.",
  problem:
    "People hate standing in long lines at movie theaters. Sometimes they arrive late and the movie has already started — leaving no time to order snacks. Beyond time pressure, the concession menu behind the counter isn't always visible, text is too small, and older users find the interface confusing.",
  solution:
    "Designed a mobile app allowing users to select their theater, browse the snack menu (with search), choose movie times after reading synopses, select seat and quantity, pay, and receive a shareable receipt — all before arriving. Key iterations from usability testing added movie synopsis on the homepage, a search bar for snacks, quantity + seat selection in-app, and a share receipt feature so friends don't have to wait for the buyer to arrive.",
  outcome:
    "Successfully addressed all identified user problems with an intuitive blue-themed interface. The app design received positive feedback in usability testing, with all critical tasks completed without assistance.",
  features: [
    {
      title: "Pre-Order Before Arrival",
      description:
        "Users select theater, movie, snacks, and seats — completing full checkout before arriving at the theater, so they walk straight to their seat.",
    },
    {
      title: "Movie Synopsis & Showtimes",
      description:
        "Homepage shows movie details with synopsis and available show times, helping users make decisions without needing to visit a separate website.",
    },
    {
      title: "Snack Menu with Search",
      description:
        "Full menu browseable with a search bar — addressing the pain point of menus behind counters being hard to read or navigate quickly.",
    },
    {
      title: "Receipt Sharing",
      description:
        "Shareable receipt lets friends pick up their own items without waiting for the purchaser — improving the group movie experience.",
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
      title: "Time to do research",
      body:
        "I conducted interviews and user journey maps to understand the users that I was designing for and their needs. A primary user group identified through research was working adults who wanted to buy snacks without standing in line too long and getting late for the movie. These users group confirmed initial assumptions about their own experience with buying snacks at movie theater, but research also revealed that time is not the only factor limiting having time to buy, because of getting late or standing in line too long. Other user problems included Interest or challenges that make it difficult to buy snacks directly at movie theater.",
    },
    {
      title: "Pain points",
      body:
        "There are several pain points that I discovered while I was doing interviews with users.\nTime — Sometimes getting late to the movie theater, so don't have enough time to order snacks.\nAccessibility — Platform for ordering snacks are not equipped for diverse backgrounds and for people with disabilities or for older people.\nIA — When want to order snacks, the menu is the screen behind the workers and the text is to small to read and need to always ask the workers to explain the menu. And flow the pick up the snacks is not pleased because they will shout our name for snacks that we already order.",
    },
    {
      title: "Users in general (Persona)",
      body:
        "I create a persona based on research that we have conducted before. This persona represents all users about pain point that users experience themselves.",
      images: [{ label: "persona.png", src: `${wix}/persona-b716bd.png` }],
    },
    {
      title: "So, what is the problem?",
      body:
        "From the persona above, I discovered problem that Christine face it. And I make it into a user story to make it more understand.\nChristine is a Freelance Graphic Designer who needs to buy snacks, because She want to eat inside the movie theater.",
    },
    {
      title: "Let's see the normal journey",
      body:
        "This is mapping how Christine usually buys snacks and a ticket movie at the movie theater. This method will reveal the normal process of how Christine usually do.",
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
      title: "Now...It's time to test it!",
      body:
        "After I prepare all of the pages and make them into prototypes so people can click the page, I talk to users that I interviewed before, because they represent my persona. I use the method called \"Usability Study (moderated)\" to do the testing. This means I do Zoom meetings with them and give them the prototype to do the testing with tasks that I prepared before. After I did a Usability Study with users, I discovered some findings that users feel and experience by themselves through the prototype. And these are the results.\nFinding 1 — Users want synopsis and time in the home page.\nFinding 2 — Users want to menu and search bar to find specific snacks.\nFinding 3 — Users need amount for the items and ability to choose seats.\nFinding 4 — Not every users want to buy ticket and snacks for themselves. If they can buy snacks for other people and can share the receipt, it would be nice because the other people doesn't have to wait the person who buy to them.",
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
