"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/portfolio";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1));

    const getActiveSection = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById("home");

      // If we're still within the hero section, reset active nav
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        if (scrollY < heroBottom - window.innerHeight * 0.4) {
          return "";
        }
      }

      // Find which nav section the viewport is currently in
      // Go in reverse so the last matching section wins (most visible)
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - window.innerHeight * 0.4;
          if (scrollY >= top) {
            current = `#${id}`;
          }
        }
      }
      return current;
    };

    const onScroll = () => {
      setActiveSection(getActiveSection());
    };

    // Set on mount too
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <a href="#home" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Tri Anugerah Yusra"
            width={120}
            height={52}
            unoptimized
            priority
            className="h-12 w-auto md:h-14"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-3 py-1.5 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-brand text-white"
                    : "text-muted hover:text-brand"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="rounded-full bg-brand px-6 py-2.5 text-base font-medium text-white transition hover:brightness-110"
          >
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/30 text-brand transition hover:bg-brand hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border bg-background/95 px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                {(() => {
                  const isActive = activeSection === link.href;

                  return (
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-full px-4 py-2 text-lg font-medium transition-colors ${
                        isActive ? "bg-brand text-white" : "text-foreground"
                      }`}
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      {link.label}
                    </a>
                  );
                })()}
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
