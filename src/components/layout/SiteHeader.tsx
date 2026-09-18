"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Minimal top bar: just the wordmark. Section navigation lives in the
 * floating pill at the bottom of the viewport.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <a href="#home" className="flex items-center" aria-label="Back to top">
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

        <p className="hidden text-sm text-muted sm:block">
          Product Designer · Jakarta
        </p>
      </motion.div>
    </header>
  );
}
