"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionGif } from "@/components/ui/SectionGif";
import { projects, site } from "@/data/portfolio";

const MotionLink = motion.create(Link);

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-border px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_160px] lg:items-start">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-label">Projects work</p>
              <h2 className="pixel-heading mt-4 text-xl md:text-2xl">
                Selected projects
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                {projects.length} case studies from PasarMIKRO, Linkz Asia,
                freelance work, school projects, and community design.
              </p>
            </div>
            <blockquote className="max-w-sm border-l-2 border-accent-2 pl-5 font-[family-name:var(--font-display)] text-lg italic text-muted md:text-xl">
              &ldquo;{site.quote}&rdquo;
            </blockquote>
          </div>
          <SectionGif src="/gifs/g8.gif" label="Projects animation" />
        </div>

        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <MotionLink
              key={project.id}
              href={`/projects/${project.id}`}
              variants={reduceMotion ? undefined : item}
              whileHover={reduceMotion ? undefined : { y: -4 }}
              className={`card-surface group flex flex-col overflow-hidden rounded-2xl ${
                index === 0 ? "sm:col-span-2 lg:row-span-1" : ""
              }`}
            >
              {/* Cover image or gradient header */}
              {project.cover ? (
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "min-h-[220px]" : "min-h-[160px]"
                  }`}
                >
                  <Image
                    src={project.cover}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[10px] font-medium tracking-[0.2em] text-white/80 uppercase">
                      {project.company}
                    </p>
                    <h3 className={`pixel-heading mt-1 !text-white ${
                      index === 0 ? "text-lg" : "text-sm"
                    }`}>
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70">{project.category}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="absolute top-4 right-4 text-white/60 transition group-hover:text-white"
                  />
                </div>
              ) : (
                <div
                  className={`relative flex items-end bg-gradient-to-br p-5 ${project.gradient} ${
                    index === 0 ? "min-h-[200px]" : "min-h-[140px]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.04),transparent_60%)]" />
                  <div className="relative">
                    <p className="text-[10px] font-medium tracking-[0.2em] text-accent-2 uppercase">
                      {project.company}
                    </p>
                    <h3 className={`pixel-heading mt-1 ${
                      index === 0 ? "text-lg" : "text-sm"
                    }`}>
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-foreground/70">{project.category}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="absolute top-4 right-4 text-foreground/40 transition group-hover:text-accent-2"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <p className="mt-4 text-sm text-foreground/85">
                  <span className="font-medium text-accent-4">Result — </span>
                  {project.outcome}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MotionLink>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted">
          More visuals on{" "}
          <a
            href="https://dribbble.com/trian77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-2 underline-offset-4 hover:underline"
          >
            Dribbble
          </a>
          {" "}and{" "}
          <a
            href="https://www.behance.net/trianugerah1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-2 underline-offset-4 hover:underline"
          >
            Behance
          </a>
          .
        </p>
      </div>
    </section>
  );
}
