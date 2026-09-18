"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { createAnimatable, utils } from "animejs";
import RotatingText from "@/components/ui/RotatingText";
import { site } from "@/data/portfolio";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !targetRef.current) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) return;

    let animTarget: ReturnType<typeof createAnimatable> | null = null;
    let animBadge: ReturnType<typeof createAnimatable> | null = null;

    try {
      animTarget = createAnimatable(targetRef.current, {
        x: 450,
        y: 450,
        rotate: 450,
        ease: "out(3)",
      });

      if (badgeRef.current) {
        animBadge = createAnimatable(badgeRef.current, {
          x: 550,
          y: 550,
          rotate: 550,
          ease: "out(3)",
        });
      }
    } catch (err) {
      console.warn("Anime.js animatable init failed:", err);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const bounds = sectionRef.current.getBoundingClientRect();
      const hw = bounds.width / 2;
      const hh = bounds.height / 2;
      const rawX = (e.clientX - bounds.left - hw) / hw;
      const rawY = (e.clientY - bounds.top - hh) / hh;

      const clampedX = utils.clamp(rawX, -1, 1);
      const clampedY = utils.clamp(rawY, -1, 1);

      animTarget?.x(clampedX * 36);
      animTarget?.y(clampedY * 36);
      animTarget?.rotate(clampedX * 5);

      if (animBadge) {
        // Counter-parallax for rich 2.5D depth
        animBadge.x(clampedX * -20);
        animBadge.y(clampedY * -20);
        animBadge.rotate(clampedX * -4);
      }
    };

    const onMouseLeave = () => {
      animTarget?.x(0);
      animTarget?.y(0);
      animTarget?.rotate(0);

      if (animBadge) {
        animBadge.x(0);
        animBadge.y(0);
        animBadge.rotate(0);
      }
    };

    const sec = sectionRef.current;
    sec.addEventListener("mousemove", onMouseMove);
    sec.addEventListener("mouseleave", onMouseLeave);

    return () => {
      sec.removeEventListener("mousemove", onMouseMove);
      sec.removeEventListener("mouseleave", onMouseLeave);
      try {
        animTarget?.revert();
        animBadge?.revert();
      } catch {}
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-gradient relative flex min-h-screen flex-col justify-center px-6 pt-36 pb-32 lg:px-10"
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
            className="pixel-heading max-w-3xl text-[clamp(1.25rem,3.2vw,2.25rem)]"
          >
            Hello! I&apos;m{" "}
            <RotatingText
              texts={["Tri", "Anugerah", "Yusra"]}
              mainClassName="inline-flex px-2 py-0.5 bg-accent-2 text-white overflow-hidden rounded-md align-baseline whitespace-nowrap"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2200}
              splitBy="characters"
              auto
              loop
            />
            , Product Designer &amp; Graphic Designer who{" "}
            <RotatingText
              texts={["bridges", "connects", "empowers", "shapes"]}
              mainClassName="inline-flex px-2 py-0.5 bg-accent-3 text-white overflow-hidden rounded-md align-baseline whitespace-nowrap"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2600}
              splitBy="characters"
              auto
              loop
            />{" "}
            people with design and bring{" "}
            <RotatingText
              texts={["happiness", "delight", "solutions", "impact"]}
              mainClassName="inline-flex px-2 py-0.5 bg-accent-4 text-white overflow-hidden rounded-md align-baseline whitespace-nowrap"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
              splitBy="characters"
              auto
              loop
            />
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
          className="relative justify-self-start lg:justify-self-end"
        >
          <div ref={targetRef} className="relative will-change-transform">
            <div className="relative h-44 w-44 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72">
              <Image
                src="/gifs/giphy.gif"
                alt=""
                fill
                unoptimized
                sizes="(max-width: 768px) 176px, 288px"
                className="object-contain select-none drop-shadow-sm"
                draggable={false}
              />
            </div>

            {/* Floating retro companion badge with Anime.js counter-parallax */}
            <div
              ref={badgeRef}
              className="card-surface absolute -bottom-2 right-2 flex items-center gap-2 rounded-full border border-border px-3 py-1 shadow-sm select-none will-change-transform"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-4 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-4" />
              </span>
              <span className="font-pixel text-[9px] text-brand">
                ACTIVE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
