import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { otherProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Other Work & Archive | Tri Anugerah Yusra",
  description:
    "Secondary projects covering branding, social media marketing, visual identities, and student work by Tri Anugerah Yusra.",
};

export default function OtherWorkPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to core portfolio
          </Link>
          <span className="text-xs text-muted">
            Archive · {otherProjects.length} projects
          </span>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="border-b border-border bg-gradient-to-b from-accent-soft/30 to-background px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="section-label">Archive &amp; Explorations</p>
          <h1 className="pixel-heading mt-4 text-2xl md:text-4xl">
            Other Work &amp; Visual Design
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            These seven projects cover social media design, branding, and early
            studies from 2020–2024. While my primary focus today is on product
            design for complex logic (accounting, ERP, fintech), this archive
            preserves my graphic foundation and design trajectory.
          </p>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
          {otherProjects.map((project) => {
            const src = project.thumbnail ?? project.cover;
            return (
              <article key={project.id} className="group flex flex-col">
                <Link
                  href={`/projects/${project.id}`}
                  className="block overflow-hidden rounded-2xl"
                >
                  <div
                    className={`relative aspect-[16/9] overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
                  >
                    {src ? (
                      <Image
                        src={src}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center p-6">
                        <p className="pixel-heading text-sm text-center">
                          {project.title}
                        </p>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                  </div>
                </Link>

                <div className="mt-5 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-pixel text-[0.6rem] uppercase tracking-[0.16em] text-muted">
                        {project.company}
                      </p>
                      <span className="text-xs text-muted">{project.year}</span>
                    </div>

                    <h2 className="mt-2 text-xl font-medium tracking-tight transition-colors group-hover:text-brand">
                      <Link href={`/projects/${project.id}`}>
                        {project.title}
                      </Link>
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent-2">
                      {project.category}
                    </span>

                    <Link
                      href={`/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-brand transition hover:text-accent-2"
                    >
                      View Case Study
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* External links */}
        <div className="card-surface mt-20 rounded-3xl p-8 text-center sm:p-10">
          <h3 className="text-lg font-medium">Looking for more visual experiments?</h3>
          <p className="mt-2 text-sm text-muted">
            You can also find my graphic designs, posters, and vector illustrations on external profiles.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.behance.net/trianugerah1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-5 py-2.5 text-xs font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white"
            >
              Behance Portfolio
              <ArrowUpRight size={13} />
            </a>
            <a
              href="https://dribbble.com/trian77"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand/30 px-5 py-2.5 text-xs font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white"
            >
              Dribbble Shots
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
