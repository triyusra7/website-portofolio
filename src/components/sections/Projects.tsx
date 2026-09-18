"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects, site } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

const MotionLink = motion.create(Link);

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** Every card is the same 16:9 block; the covers carry the variety, not the layout. */
function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const src = project.thumbnail ?? project.cover;

  return (
    <MotionLink
      href={`/projects/${project.id}`}
      variants={reduceMotion ? undefined : reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      className="group block"
    >
      <div
        className={`relative aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br ${project.gradient}`}
      >
        {src ? (
          <Image
            src={src}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            priority={priority}
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-8">
            <p className="pixel-heading text-base leading-relaxed md:text-lg">
              {project.title}
            </p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="font-pixel text-[0.6rem] uppercase tracking-[0.16em] text-muted">
            {project.company}
          </p>
          <h3 className="mt-3 text-2xl font-medium tracking-tight transition-colors group-hover:text-brand md:text-[1.75rem]">
            {project.title}
          </h3>
          <p className="mt-2 text-muted">
            {project.category} · {project.year}
          </p>
        </div>
        <ArrowUpRight
          size={22}
          className="mt-1 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2"
        />
      </div>
    </MotionLink>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects work"
          lines={["Selected", "projects."]}
          description={
            <>
              <p>
                Selected case studies from PasarMIKRO, Linkz Asia and independent
                client work, covering fintech, ERP, B2B marketplaces and design systems.
              </p>
              <blockquote className="mt-6 border-l-2 border-accent-2 pl-5 text-lg italic md:text-xl">
                &ldquo;{site.quote}&rdquo;
              </blockquote>
            </>
          }
          gif={{ src: "/gifs/g8.gif", label: "Projects animation" }}
        />

        <div className="mt-20 grid gap-x-14 gap-y-20 lg:mt-28 lg:grid-cols-2 lg:gap-y-24">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={index < 2}
            />
          ))}
        </div>

        {/* Other Work Callout */}
        <div className="card-surface mt-24 rounded-3xl p-8 text-center lg:mt-32 sm:p-10">
          <p className="font-pixel text-[0.65rem] uppercase tracking-[0.16em] text-accent-2">
            Archive &amp; Visual Design
          </p>
          <h3 className="mt-3 text-xl font-medium tracking-tight md:text-2xl">
            Branding, social media &amp; early work
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-muted">
            Seven secondary projects including Lampu Kuning, Wasnack, Hylo, LitUP, Biotalk, and PCC have been archived to keep the main view focused on core product design.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/other-work"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
            >
              Explore Other Work (7 projects)
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <p className="mt-16 text-center text-muted">
          More visuals on{" "}
          <a
            href="https://dribbble.com/trian77"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline underline-offset-4 transition-colors hover:text-accent-2"
          >
            Dribbble
          </a>{" "}
          and{" "}
          <a
            href="https://www.behance.net/trianugerah1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand underline underline-offset-4 transition-colors hover:text-accent-2"
          >
            Behance
          </a>
          .
        </p>
      </div>
    </section>
  );
}
