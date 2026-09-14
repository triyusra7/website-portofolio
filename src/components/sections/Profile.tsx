"use client";

import Image from "next/image";
import { FileText } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
    <section id="profile" className="scroll-mt-24 px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Profile"
            lines={["Hello,", "I'm Tri."]}
            gif={{ src: "/gifs/g3.gif", label: "Profile animation" }}
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-[1.1fr_0.9fr]">
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
                  <FileText size={13} />
                  View CV
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
            <div className="card-surface rounded-3xl p-8 lg:p-10">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-3" />
                <span className="font-pixel text-[0.6rem] uppercase tracking-[0.16em] text-brand">
                  My expertise
                </span>
              </p>
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

    <section className="px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="My experience"
            lines={["Where I've", "designed & grown."]}
            gif={{ src: "/gifs/g4.gif", label: "Experience animation" }}
          />
        </FadeIn>

        <div className="mt-16 space-y-0 lg:mt-24">
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
                    <div className="mt-8 space-y-5 rounded-3xl border border-border bg-card p-6 lg:p-8">
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

    <section className="px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="My skills and design tools"
            lines={["Craft &", "toolkit."]}
            gif={{ src: "/gifs/g5.gif", label: "Skills animation" }}
          />
        </FadeIn>

        <div className="mt-16 space-y-10 lg:mt-24">
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
