"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

const HOME_HREF = "#home";
const items = [{ label: "Home", href: HOME_HREF }, ...navLinks] as const;

/** Scroll-spy: the last section whose top has passed 40% of the viewport wins. */
function useActiveSection() {
  const [active, setActive] = useState<string>(HOME_HREF);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.4;
      let current = HOME_HREF;
      for (const { href } of items) {
        const el = document.getElementById(href.slice(1));
        if (el && window.scrollY >= el.offsetTop - offset) current = href;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

export function FloatingNav() {
  const active = useActiveSection();
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      aria-label="Section navigation"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ viewTransitionName: "floating-nav" }}
      className="fixed inset-x-0 bottom-5 z-50 flex justify-center px-4 lg:bottom-7"
    >
      <div className="nav-pill flex max-w-full items-center gap-0.5 rounded-full p-1.5 sm:gap-1">
        {items.map((link) => {
          const isActive = active === link.href;
          // On phones the logo covers Home and the CTA covers Contact, so both
          // slots are given back as room for the remaining links.
          const hideOnMobile = link.href === HOME_HREF || link.href === "#contact";

          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative shrink-0 rounded-full px-3 py-2 text-[0.8125rem] font-medium transition-colors sm:px-5 sm:text-sm ${
                hideOnMobile ? "hidden sm:block" : ""
              } ${isActive ? "text-white" : "text-muted hover:text-foreground"}`}
            >
              {isActive && (
                <motion.span
                  layoutId="nav-pill-active"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-accent"
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          );
        })}

        <a
          href="#contact"
          className="ml-0.5 shrink-0 rounded-full bg-brand px-3.5 py-2 text-[0.8125rem] font-medium text-white transition hover:brightness-110 sm:ml-1 sm:px-5 sm:text-sm"
        >
          Let&apos;s talk
        </a>
      </div>
    </motion.nav>
  );
}
