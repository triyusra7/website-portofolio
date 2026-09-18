import type { Project } from "./types";

const wix = "/projects/lampu-kuning/wix";

export const lampuKuning: Project = {
  id: "lampu-kuning",
  title: "Lampu Kuning",
  company: "IDS (Studio Production)",
  projectType: "School Project",
  category: "Web Design · WordPress",
  year: "2020",
  cover: "/projects/lampukukning-cover.jpg",
  gradient: "from-yellow-100 via-background to-card",
  tags: ["Web Design", "WordPress", "Collaborative"],
  summary:
    "An interactive virtual exhibition website created during COVID-19 to showcase creative graduation projects from Digital Design, Animation, and Film students at the International Design School.",
  problem:
    "COVID-19 lockdowns cancelled our scheduled cinema screening and physical showcase. Our team of 9 students across three disciplines needed a digital venue to present a short film, interactive games, and creative design work to the public.",
  solution:
    "As Website Director, led the technical implementation on WordPress with interactive multimedia. Designed an intuitive five-section experience (Homepage, Short Film, Game, Talkshow, and Gallery) featuring scroll-triggered audio narration to guide visitors like an exhibition docent.",
  outcome:
    "Successfully brought three creative disciplines together into a memorable interactive showcase hosted on the International Design School platform, demonstrating adaptability under tight lockdown constraints.",
  features: [
    {
      title: "Interactive Gallery with Audio",
      description:
        "Scroll-triggered audio narration guides visitors through the gallery, creating an immersive exhibition atmosphere in an online space.",
    },
    {
      title: "Traffic Light Brand Identity",
      description:
        "Visual identity inspired by traffic lights and crossroads, reflecting the emotional dilemma theme of the graduating class.",
    },
    {
      title: "5-Section Sitemap",
      description:
        "Thoughtfully structured navigation (Homepage, Short Film, Game, Talkshow, and Gallery) giving each creative team its own spotlight.",
    },
    {
      title: "WordPress + Interactive Sliders",
      description:
        "Engineered with accessible CMS workflows to allow student filmmakers and animators to upload and curate their own media effortlessly.",
    },
  ],
  resultImage: `${wix}/2-7e6223.jpg`,
  caseStudySections: [
    {
      title: "Let's imagine about this...",
      body:
        "Usually, when studio production comes at the end of the term, all three majors will make a project that will highlight all majors. And decide we will make a movie for the main results and will play at the cinema. But Covid-19 attacks the world and your activity will be limited and the movie automatically can't be shown at the cinema.",
      images: [{ label: "LOGO LK BLACK.png", src: `${wix}/logo-lk-black-1ab0ff.png` }],
    },
    {
      title: "Problem backgrounds",
      body:
        "During Covid-19, all activities will be limited. But the project must go on. All majors still make a short movie as a main project and the short movie will be handled by team film, and then team animation will create mini-games alongside the short movie. For the team design will be handled how our short movie and mini-games can be played and watched by all people.",
    },
    {
      title: "Goals",
      body:
        "We decided we would make a website to provide our short movie and our games could be enjoyed by people. The website that is created must be interactive and easy to use so that users can use it more easily and can be comfortable on the website that we created.",
    },
    {
      title: "Brainstorm with all team",
      images: [{ label: "Screenshot-(503).jpg", src: `${wix}/screenshot-503-8c6665.jpg` }],
    },
    {
      title: "Discuss about our theme",
      body:
        "Due to the prevailing COVID-19 situation at that time, everything had to be done under limited conditions, and most activities were conducted online. Our project faced a crossroads where not taking action would result in a negative impact on our final grade, but taking action would come with numerous challenges. It was a dilemma for all of us, especially the film team, as they had to shoot their short film amidst the restrictions. Hence, we chose the theme \"Dilema\" because it resonated with our situation at that time. As for the design team's project, we named it \"Lampu Kuning,\" symbolizing the intersection between choices or pausing on the road. This name perfectly aligned with the theme we collectively embraced.",
    },
    {
      title: "Our marks",
      body:
        "As a team design, we must create our branding. So people can know about us and what about the project. Because our project is called \"Lampu Kuning\", so we must create a brand based on that. We create our logo using a line shape and form like a ball. Our inspiration from cartoons, when characters feel dizzy or something like that, will pop up at the top of their head like a ball. That's why we took inspiration from that and we created three balls with different colors based on traffic lights (Red, Green, and Yellow). And after that, our website should look like that too.",
      images: [{ label: "LOGO LK WHITE.png", src: `${wix}/logo-lk-white-2dd73b.png` }],
    },
    {
      title: "Our team design",
      body:
        "There are nine members in our team.\n1. Rizky Vireza as Producer and team lead\n2. Aulia Fransisca as Art Director\n3. Adi Suryo Pramono as Head of Publication\n4. Tri Anugerah Yusra (Myself) as Website Director\n5. Adisya Al Zahra as Publication Designer\n6. Jabal Satya Witjaksono as Publication\n7. Widya Lani Wijaya as Web Designer\n8. Faldi Calvin as Web Designer\n9. Galih Anugrah as Social Media / Public Relations\n\nMy job as Web director is to make sure that our website runs smoothly and find out how to make an interactive website, and also what tools we can use for our website. For our website I use WordPress, and for the plugin, I use Slider Revolution because it's easy to use and just drag and drop. And for the WordPress, because I am quite familiar with WordPress, so I can operate it.",
    },
    {
      title: "Our sitemap for website",
      body:
        "Before we jump to create the website, we must decide our website flow and how we map it. We want to focus on making our website simple and easy to use with some interactive design to increase the experience for our users. For our menu, just five menus (Homepage, Film Pendek, Game, Talkshow, Galeri), for the front page, we show all the main content like a mini movie and game, but just the trailer and if users want to play or watch they need to move to another page. The \"Galeri\", will be about the IDS itself and all teams.",
      images: [{ label: "sitemap.jpg", src: `${wix}/sitemap-7f58d1.jpg` }],
    },
    {
      title: "Start The Design",
      images: [{ label: "Screenshot-(504).jpg", src: `${wix}/screenshot-504-b96315.jpg` }],
    },
    {
      title: "Initial idea with sketching",
      body:
        "We sketch some pages for the interface that we want, and we focus on the front page first because it is crucial to attract users to stay on our website. And for the \"Galeri,\" we want to make it more interactive, so we put voice notes while users scroll the page. This experience we took from the tour guide. While we see and watch objects that they tell us, they will explain too about that, and this experience is interesting because users can be guided on our website.",
      images: [
        {
          label: "Sketch 1",
          src: `${wix}/whatsapp-image-2020-12-30-at-21-14-06-15c1ff.jpeg`,
        },
        {
          label: "Sketch 2",
          src: `${wix}/whatsapp-image-2020-12-30-at-20-52-15-297a35.jpeg`,
        },
        {
          label: "Sketch 3",
          src: `${wix}/whatsapp-image-2020-12-04-at-15-10-32-9855c2.jpeg`,
        },
        { label: "WITHOUT-2.jpg", src: `${wix}/without-2-ff1034.jpg` },
        { label: "WITH-RUNNING-TEXT-2.jpg", src: `${wix}/with-running-text-2-dc175b.jpg` },
      ],
    },
    {
      title: "Idea for other page",
      body: "For other pages, we sketch and find benchmarks to make more interesting.",
      images: [
        {
          label: "Page sketch 1",
          src: `${wix}/whatsapp-image-2020-12-04-at-14-36-52-e6dfbf.jpeg`,
        },
        {
          label: "Page sketch 2",
          src: `${wix}/whatsapp-image-2020-12-04-at-14-37-48-e43512.jpeg`,
        },
        {
          label: "Page sketch 3",
          src: `${wix}/whatsapp-image-2020-12-04-at-14-38-35-ad342c.jpeg`,
        },
        {
          label: "Page sketch 4",
          src: `${wix}/whatsapp-image-2020-12-04-at-14-39-07-fb1447.jpeg`,
        },
      ],
    },
    {
      title: "Our Trivia",
      images: [{ label: "Untitled-1.jpg", src: `${wix}/untitled-1-b741f3.jpg` }],
    },
    {
      title: "Our activity during work process",
      body:
        "While we doing our work, one of our members of the team took a couple of photos. And this is an activity during our process that I enjoy.",
      images: [
        { label: "1.jpg", src: `${wix}/1-cd6f05.jpg` },
        { label: "2.jpg", src: `${wix}/2-3a83d5.jpg` },
        { label: "3.jpg", src: `${wix}/3-eae876.jpg` },
        { label: "IMG_2498.jpg", src: `${wix}/img-2498-2c101b.jpg` },
        { label: "IMG_2509.jpg", src: `${wix}/img-2509-adadab.jpg` },
        { label: "IMG_2525.jpg", src: `${wix}/img-2525-7edae8.jpg` },
        { label: "IMG_2649.jpg", src: `${wix}/img-2649-d6d697.jpg` },
        { label: "IMG_2516_1.jpg", src: `${wix}/img-2516-1-10161c.jpg` },
      ],
    },
    {
      title: "Final result for our project",
      images: [{ label: "Final result", src: `${wix}/2-7e6223.jpg` }],
    },
    {
      title: "Finally...Publish!!!",
      body:
        "While this project was being created, a lot of things happened. But in the end, we managed to complete everything, and it was posted on the International Design School's official website. These represent a few of our creations. Thank you, and have fun playing the game and viewing the short film. This is the link for our project \"Studio production: Lampu Kuning\"",
      images: [
        {
          label: "POSTER-FILM-FIX-ALHAMDULILLAH.jpg",
          src: `${wix}/poster-film-fix-alhamdulillah-780d6e.jpg`,
        },
        { label: "Poster-Clio.jpg", src: `${wix}/poster-clio-951540.jpg` },
      ],
    },
  ],
};
