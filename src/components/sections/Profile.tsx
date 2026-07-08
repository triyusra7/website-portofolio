"use client";

import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionGif } from "@/components/ui/SectionGif";
import {
  aboutParagraphs,
  expertise,
  experience,
  files,
  skillSummary,
  skills,
  socialLinks,
} from "@/data/portfolio";

const skillCategories = ["Design Tools", "Skills", "Development", "AI Tools", "Project Management"] as const;

export function Profile() {
  return (
  <>
    <section id="profile" className="scroll-mt-24 border-t border-border px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_160px] lg:items-start">
          <FadeIn>
            <p className="section-label">Profile</p>
            <h2 className="pixel-heading mt-4 text-xl md:text-2xl">
              Hello, I&apos;m Tri
            </h2>
          </FadeIn>
          <SectionGif src="/gifs/g3.gif" label="Profile animation" />
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              {/* Profile photo */}
              <div className="shrink-0">
                <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-border sm:h-44 sm:w-44">
                  <Image
                    src="/profil.jpg"
                    alt="Tri Anugerah Yusra"
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-cover"
                    priority
                  />
                </div>
                <a
                  href={files.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-xs font-medium text-white transition hover:brightness-110"
                >
                  <Download size={13} />
                  Download CV
                </a>
                <a
                  href={files.portfolioPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-brand/30 px-4 py-2.5 text-xs font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <FileText size={13} />
                  Portfolio PDF
                </a>
                <a
                  href={socialLinks.find((l) => l.label === "LinkedIn")?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-brand/30 px-4 py-2.5 text-xs font-medium text-brand transition hover:border-brand hover:bg-brand hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn Profile
                </a>
              </div>

              {/* Bio */}
              <div className="space-y-5 text-base leading-relaxed text-muted">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="card-surface rounded-2xl p-8">
              <h3 className="text-sm font-medium tracking-wide text-accent-2 uppercase">
                My Expertise
              </h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent-2/20 bg-accent-soft px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-muted">
                {skillSummary}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    <section className="border-t border-border px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_160px] lg:items-start">
          <FadeIn>
            <p className="section-label">My Experience</p>
            <h2 className="pixel-heading mt-4 text-xl md:text-2xl">
              Where I&apos;ve designed &amp; grown
            </h2>
          </FadeIn>
          <SectionGif src="/gifs/g4.gif" label="Experience animation" />
        </div>

        <div className="mt-16 space-y-0">
          {experience.map((job, index) => (
            <FadeIn key={job.company + job.period} delay={index * 0.06}>
              <article className="grid gap-6 border-t border-border py-10 md:grid-cols-[200px_1fr]">
                <div>
                  <p className="text-sm font-medium text-accent-2">{job.period}</p>
                  <p className="mt-2 font-medium">{job.role}</p>
                  <p className="text-sm text-muted">{job.company}</p>
                  <p className="mt-1 text-xs text-muted">{job.location}</p>
                </div>
                <div>
                  <ul className="space-y-3 text-sm leading-relaxed text-muted">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {"projects" in job && (
                    <div className="mt-8 space-y-5 rounded-2xl border border-border bg-card p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-accent-2">
                        Projects
                      </p>
                      {job.projects.map((project) => (
                        <div key={project.label}>
                          <p className="text-sm font-medium">{project.label}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    <section className="border-t border-border px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_160px] lg:items-start">
          <FadeIn>
            <p className="section-label">My Skills and Design tools</p>
            <h2 className="pixel-heading mt-4 text-xl md:text-2xl">
              Craft &amp; toolkit
            </h2>
          </FadeIn>
          <SectionGif src="/gifs/g5.gif" label="Skills animation" />
        </div>

        <div className="mt-12 space-y-10">
          {skillCategories.map((category) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;
            return (
              <FadeIn key={category}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill.name}
                      className="card-surface rounded-full px-4 py-2 text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  </>
  );
}
