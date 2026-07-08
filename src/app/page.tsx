import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Profile } from "@/components/sections/Profile";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden />
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <Profile />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
