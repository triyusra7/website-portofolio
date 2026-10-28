"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects, otherProjects, site } from "@/data/portfolio";
import type { Project } from "@/data/portfolio";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/** 01 LEAD PROJECT: Full-width heroic card showcasing Tangkian ERP */
function LeadProjectCard({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const src = project.thumbnail ?? project.cover;

  return (
    <motion.article
      variants={reduceMotion ? undefined : reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      className="card-surface group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-xl sm:p-8 lg:p-10"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
        {/* Visual Showcase (approx 58% on desktop) */}
        <Link
          href={`/projects/${project.id}`}
          className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-slate-100 ring-1 ring-black/5"
          aria-label={`View case study: ${project.title}`}
        >
          {src && (
            <Image
              src={src}
              alt={`${project.title} - Consolidated multi-entity accounting dashboard`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

          {/* Lead badge */}
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-brand/90 px-3.5 py-1 text-[11px] font-medium tracking-wide text-white shadow-lg backdrop-blur-md">
            <span className="font-pixel text-[9px] text-accent-2">★</span>
            <span>LEAD CASE STUDY</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 drop-shadow">
            <span className="font-medium">Multi-Entity Group Consolidation</span>
            <span className="hidden sm:inline">Accounting Core &amp; Operations</span>
          </div>
        </Link>

        {/* Narrative & Context */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-pixel text-[0.6rem] uppercase tracking-[0.16em] text-brand">
                {project.company}
              </span>
              <span className="text-muted/60">·</span>
              <span className="text-xs text-muted">{project.year}</span>
            </div>

            <h3 className="mt-3 text-2xl font-medium tracking-tight text-foreground transition-colors group-hover:text-brand sm:text-3xl lg:text-[2rem] lg:leading-tight">
              <Link href={`/projects/${project.id}`}>
                {project.title}
              </Link>
            </h3>

            <p className="mt-2 text-sm font-medium text-accent-2">
              {project.category}
            </p>

            {/* One-sentence problem summary */}
            <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
              {project.problemSummary ?? project.problem}
            </p>

            {/* Role & Team */}
            <div className="mt-5 rounded-2xl border border-border/80 bg-background/60 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Role &amp; Contribution
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {project.roleSummary ?? "Lead Product Designer — Discovery, IA, UI & Strategic Delivery"}
              </p>
            </div>

            {/* Quick Outcome Stats */}
            {project.resultStats && project.resultStats.length > 0 && (
              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                {project.resultStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/60 bg-card p-2.5 text-center"
                  >
                    <p className="pixel-heading text-xs text-brand sm:text-sm">{stat.value}</p>
                    <p className="mt-1 text-[11px] leading-tight text-muted line-clamp-2">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
            >
              <span>View case study</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href={`/projects/${project.id}#walkthrough`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition hover:border-brand/40 hover:bg-accent-soft/30 active:scale-[0.98]"
            >
              <Workflow size={15} className="text-accent-2" />
              <span>See the workflow</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/** 02 & 03 FEATURED COMPANION PROJECTS: 2-column cards (REPO & Marketplace) */
function FeaturedProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const src = project.thumbnail ?? project.cover;

  return (
    <motion.article
      variants={reduceMotion ? undefined : reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      className="card-surface group flex flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:border-brand/40 hover:shadow-lg sm:p-7"
    >
      <div>
        <Link
          href={`/projects/${project.id}`}
          className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-black/5"
          aria-label={`View case study: ${project.title}`}
        >
          {src && (
            <Image
              src={src}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-50 transition-opacity group-hover:opacity-30" />

          <div className="absolute left-3.5 top-3.5 rounded-full border border-white/20 bg-card/85 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-brand backdrop-blur-md">
            Featured
          </div>
        </Link>

        <div className="mt-6">
          <div className="flex items-center justify-between gap-4">
            <p className="font-pixel text-[0.6rem] uppercase tracking-[0.16em] text-muted">
              {project.company}
            </p>
            <span className="text-xs text-muted">{project.year}</span>
          </div>

          <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-brand sm:text-2xl">
            <Link href={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </h3>

          <p className="mt-1 text-xs font-medium text-accent-2">
            {project.category}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
            {project.problemSummary ?? project.problem}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/80 pt-4">
        <span className="text-xs font-medium text-muted line-clamp-1">
          {project.roleSummary?.split("—")[0]?.trim() ?? "Product Designer"}
        </span>

        <div className="flex flex-wrap items-center gap-2">
          {project.walkthrough && (
            <Link
              href={`/projects/${project.id}#walkthrough`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-brand/40 hover:bg-accent-soft/30 hover:text-brand active:scale-[0.98]"
            >
              <Workflow size={13} className="text-accent-2" />
              <span>See the workflow</span>
            </Link>
          )}

          <Link
            href={`/projects/${project.id}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
          >
            <span>View case study</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/** 04, 05, 06 CORE SUPPORTING PROJECTS: Sleek horizontal rows */
function CoreProjectRow({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion();
  const src = project.thumbnail ?? project.cover;

  return (
    <motion.article
      variants={reduceMotion ? undefined : reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      className="card-surface group overflow-hidden rounded-3xl p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-md sm:p-6"
    >
      <div className="grid gap-6 sm:grid-cols-[220px_1fr] md:grid-cols-[260px_1fr] items-center">
        {/* Preview image */}
        <Link
          href={`/projects/${project.id}`}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-black/5"
          aria-label={`View case study: ${project.title}`}
        >
          {src ? (
            <Image
              src={src}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, 260px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center p-4">
              <span className="font-pixel text-xs text-muted">{project.title}</span>
            </div>
          )}
        </Link>

        {/* Narrative & links */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-pixel text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                {project.company}
              </span>
              <span className="text-xs text-muted">{project.year}</span>
            </div>

            <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-brand">
              <Link href={`/projects/${project.id}`}>
                {project.title}
              </Link>
            </h3>

            <p className="mt-1 text-xs font-medium text-accent-2">
              {project.category}
            </p>

            <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
              {project.problemSummary ?? project.problem}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3">
            <span className="text-xs text-muted">
              Role: <strong className="font-medium text-foreground">{project.roleSummary?.split("—")[0]?.trim() ?? "Product Designer"}</strong>
            </span>

            <div className="flex flex-wrap items-center gap-2">
              {project.walkthrough && (
                <Link
                  href={`/projects/${project.id}#walkthrough`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-brand/40 hover:bg-accent-soft/30 hover:text-brand active:scale-[0.98]"
                >
                  <Workflow size={13} className="text-accent-2" />
                  <span>See the workflow</span>
                </Link>
              )}

              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
              >
                <span>View case study</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const leadProject = featuredProjects[0];
  const companionProjects = featuredProjects.slice(1, 3);
  const coreProjects = featuredProjects.slice(3, 6);

  // Take 3 preview images from otherProjects for the archive callout strip
  const archivePreviews = otherProjects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Concise Header */}
        <SectionHeading
          eyebrow="Portfolio Showcase"
          lines={["Selected", "projects."]}
          description={
            <>
              <p>
                Product design case studies covering multi-company accounting ERP,
                fintech credit features, agricultural B2B trading, and design systems.
              </p>
              <blockquote className="mt-4 border-l-2 border-accent-2 pl-4 text-base italic text-foreground/80 md:text-lg">
                &ldquo;{site.quote}&rdquo;
              </blockquote>
            </>
          }
          gif={{ src: "/gifs/g8.gif", label: "Projects animation" }}
        />

        {/* Level 1: Lead Project (Tangkian ERP) */}
        <div className="mt-12 lg:mt-16">
          {leadProject && <LeadProjectCard project={leadProject} />}
        </div>

        {/* Level 2: Two Featured Companion Projects (REPO & Marketplace) */}
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {companionProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>

        {/* Level 3: Three Core Projects in Rows */}
        <div className="mt-8 space-y-6">
          <div className="flex items-center justify-between px-1">
            <h4 className="font-pixel text-[0.65rem] uppercase tracking-[0.16em] text-muted">
              Core Systems &amp; Product Features
            </h4>
            <span className="text-xs text-muted">3 case studies</span>
          </div>

          {coreProjects.map((project) => (
            <CoreProjectRow key={project.id} project={project} />
          ))}
        </div>

        {/* Archive & Visual Design Callout with 3 Thumbnail Previews */}
        <div className="card-surface mt-16 rounded-3xl p-8 text-center sm:p-10 lg:mt-24">
          <p className="font-pixel text-[0.65rem] uppercase tracking-[0.16em] text-accent-2">
            Archive &amp; Visual Design
          </p>
          <h3 className="mt-2 text-xl font-medium tracking-tight text-foreground md:text-2xl">
            Branding, social media &amp; early explorations
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted">
            Seven secondary projects including Lampu Kuning, Wasnack, Hylo, LitUP, Biotalk, and PCC have been organized in the archive to preserve graphic foundations while keeping this showcase focused on core product logic.
          </p>

          {/* 3 Preview Strip */}
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4">
            {archivePreviews.map((p) => {
              const src = p.thumbnail ?? p.cover;
              return (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-slate-100 shadow-sm transition hover:border-brand/40"
                  title={p.title}
                >
                  {src && (
                    <Image
                      src={src}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 30vw, 200px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-1.5 left-1.5 right-1.5 truncate rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                    {p.title}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/other-work"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
            >
              <span>Explore Other Work ({otherProjects.length} projects)</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* External links */}
        <p className="mt-14 text-center text-sm text-muted">
          More visuals on{" "}
          <a
            href="https://dribbble.com/trian77"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline underline-offset-4 transition-colors hover:text-accent-2"
          >
            Dribbble
          </a>{" "}
          and{" "}
          <a
            href="https://www.behance.net/trianugerah1"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline underline-offset-4 transition-colors hover:text-accent-2"
          >
            Behance
          </a>
          .
        </p>
      </div>
    </section>
  );
}
