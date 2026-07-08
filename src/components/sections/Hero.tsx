"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient relative flex min-h-screen flex-col justify-center px-6 pt-32 pb-20 lg:px-10"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-6"
          >
            Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="pixel-heading max-w-3xl text-[clamp(1.2rem,3vw,2rem)]"
          >
            Hello! I&apos;m{" "}
            <span className="inline-block rounded-md bg-accent-2 px-2 py-0.5 text-white">
              {site.nickname}
            </span>
            , UX Designer, Product Designer &amp; Graphic Designer who{" "}
            <span className="inline-block rounded-md bg-accent-3 px-2 py-0.5 text-white">
              bridges
            </span>{" "}
            people with design and bring{" "}
            <span className="inline-block rounded-md bg-accent-4 px-2 py-0.5 text-white">
              happiness
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-5 text-base text-muted"
          >
            {site.location} · Open to new opportunities
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-full bg-brand px-7 py-3.5 text-sm font-medium text-white transition hover:brightness-110"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-brand/30 px-7 py-3.5 text-sm font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="pointer-events-none justify-self-start lg:justify-self-end"
        >
          <div className="relative h-44 w-44 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72">
            <Image
              src="/gifs/giphy.gif"
              alt=""
              fill
              unoptimized
              sizes="(max-width: 768px) 176px, 288px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
