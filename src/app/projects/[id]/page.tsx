import { ArrowLeft, Calendar, Briefcase, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  const socialImage = project.ogImage ?? project.cover ?? undefined;
  return {
    title: `${project.title} — ${project.company} | Tri Anugerah Yusra`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${project.company}`,
      description: project.summary,
      type: "article",
      images: socialImage ? [socialImage] : undefined,
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title: `${project.title} — ${project.company}`,
      description: project.summary,
      images: socialImage ? [socialImage] : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === id);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const hasCaseStudySections = (project.caseStudySections?.length ?? 0) > 0;
  const isRich = !!(project.flowImage || project.resultImage || hasCaseStudySections);

  return (
    <div className="min-h-screen bg-background">
      {/* Top nav */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
          <span className="text-xs text-muted">
            {currentIndex + 1} / {projects.length}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header
        className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} px-6 py-20 lg:px-10 lg:py-28`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="section-label">{project.company}</p>
          <h1 className="pixel-heading mt-4 text-2xl leading-tight md:text-3xl">
            {project.title}
          </h1>
          <p className="mt-3 text-sm text-foreground/60">{project.category}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed/80">
            {project.summary}
          </p>
        </div>
      </header>

      {/* Cover image */}
      {project.cover && (
        <section
          aria-label={`${project.title} cover image`}
          className="mx-auto max-w-5xl px-6 lg:px-10"
        >
          <div className="relative -mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
            <Image
              src={project.cover}
              alt={`${project.title} cover`}
              width={1200}
              height={600}
              className="w-full object-cover"
              priority
            />
          </div>
        </section>
      )}

      <main className="mx-auto max-w-5xl px-6 py-16 lg:px-10">

        {/* ── RICH LAYOUT (when flow / result images exist) ── */}
        {isRich ? (
          <div className="space-y-20">

            {/* Sidebar meta row */}
            <div className="flex flex-wrap gap-6 border-b border-border pb-10">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted mb-1">Year</p>
                <p className="text-sm">{project.year}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-widest text-muted mb-1">Type</p>
                <p className="text-sm">{project.projectType}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft px-3 py-1 text-[11px] text-accent-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {hasCaseStudySections ? (
              <>
                <section className="space-y-14">
                  {project.caseStudySections?.map((section) => (
                    <div
                      key={section.title}
                      className="grid gap-8 border-b border-border pb-14 last:border-b-0 lg:grid-cols-[260px_1fr]"
                    >
                      <div>
                        <h2 className="pixel-heading text-base leading-relaxed">
                          {section.title}
                        </h2>
                      </div>
                      <div className="min-w-0 space-y-6">
                        {section.body && (
                          <p className="whitespace-pre-line leading-relaxed text-muted">
                            {section.body}
                          </p>
                        )}

                        {/* Numbered items — the titles are the scannable layer */}
                        {section.items && section.items.length > 0 && (
                          <ol className="space-y-7">
                            {section.items.map((listItem, index) => (
                              <li
                                key={listItem.title}
                                className="grid grid-cols-[2rem_1fr] gap-x-3 gap-y-1.5"
                              >
                                <span
                                  aria-hidden
                                  className="pixel-heading pt-0.5 text-[10px] text-accent-2/60"
                                >
                                  {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-medium text-foreground">
                                  {listItem.title}
                                </h3>
                                <p className="col-start-2 leading-relaxed text-muted">
                                  {listItem.body}
                                </p>
                              </li>
                            ))}
                          </ol>
                        )}

                        {section.table && (
                          <figure className="space-y-3">
                            <div className="overflow-x-auto rounded-2xl border border-border bg-card">
                              <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
                                <thead>
                                  <tr className="border-b border-border bg-accent-soft/50">
                                    {section.table.headers.map((header) => (
                                      <th
                                        key={header}
                                        scope="col"
                                        className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-brand"
                                      >
                                        {header}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {section.table.rows.map((row) => (
                                    <tr
                                      key={row.join("|")}
                                      className="border-b border-border last:border-b-0"
                                    >
                                      {row.map((cell, cellIndex) => (
                                        <td
                                          key={`${row[0]}-${cellIndex}`}
                                          className={`px-4 py-3 align-top ${
                                            cellIndex === 0
                                              ? "font-medium text-foreground"
                                              : "text-muted"
                                          }`}
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            {section.table.caption && (
                              <figcaption className="text-sm text-muted">
                                {section.table.caption}
                              </figcaption>
                            )}
                          </figure>
                        )}

                        {section.note && (
                          <p className="border-l-2 border-accent-2/40 pl-4 text-sm leading-relaxed text-muted">
                            {section.note}
                          </p>
                        )}

                        {section.images && section.images.length > 0 && (
                          <div
                            className={`grid ${
                              section.imageColumns === 1 ? "gap-6" : "gap-4"
                            } ${
                              section.imageColumns === 1
                                ? // wide product shots break out of the text column on desktop
                                  "grid-cols-1 lg:-ml-[18.25rem]"
                                : section.images.length === 1
                                  ? "grid-cols-1"
                                  : "sm:grid-cols-2"
                            }`}
                          >
                            {section.images.map((image) => (
                              <figure
                                key={`${section.title}-${image.label}`}
                                className="space-y-2.5"
                              >
                                <div
                                  className={`overflow-hidden rounded-2xl bg-card ${
                                    image.frame === false
                                      ? ""
                                      : "border border-border shadow-sm"
                                  }`}
                                >
                                  {image.src ? (
                                    <Image
                                      src={image.src}
                                      alt={image.label}
                                      width={image.width ?? 1000}
                                      height={image.height ?? 700}
                                      sizes="(max-width: 768px) 100vw, 1000px"
                                      className={
                                        image.width
                                          ? "h-auto w-full"
                                          : "h-full min-h-64 w-full object-contain"
                                      }
                                    />
                                  ) : (
                                    <div className="flex min-h-64 items-center justify-center bg-accent-soft px-6 text-center">
                                      <p className="text-sm text-muted">
                                        Gambar: {image.label}
                                      </p>
                                    </div>
                                  )}
                                </div>
                                {image.caption && (
                                  <figcaption className="text-sm leading-relaxed text-muted">
                                    {image.caption}
                                  </figcaption>
                                )}
                              </figure>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </section>

                <section className="border-t border-border pt-12">
                  {project.resultStats && project.resultStats.length > 0 && (
                    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {project.resultStats.map((stat) => (
                        <div
                          key={stat.label}
                          className="card-surface rounded-2xl p-5"
                        >
                          <p className="pixel-heading text-base">{stat.value}</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="card-surface rounded-2xl p-6">
                    <p className="whitespace-pre-line text-foreground/90 leading-relaxed">
                      <span className="font-medium text-accent-4">Result — </span>
                      {project.outcome}
                    </p>
                  </div>
                  {project.resultNote && (
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {project.resultNote}
                    </p>
                  )}
                  <div className="mt-6 text-center">
                    <Link
                      href="/#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-medium text-white transition hover:brightness-110"
                    >
                      Discuss this project
                    </Link>
                  </div>
                </section>
              </>
            ) : (
              <>
            {/* Overview */}
            <section className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="section-label mb-4">The Problem</h2>
                <p className="leading-relaxed text-muted">{project.problem}</p>
              </div>
              <div>
                <h2 className="section-label mb-4">The Solution</h2>
                <p className="leading-relaxed text-muted">{project.solution}</p>
              </div>
            </section>

            {/* Bridging banner 1 — before flow section */}
            {project.bannerImages?.[0] && (
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.bannerImages[0]}
                  alt="Information requirements"
                  width={1200}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            )}

            {/* Think about the flow */}
            {project.flowImage && (
              <section>
                <h2 className="pixel-heading text-lg mb-8">
                  Think about the flow
                </h2>
                <div className="overflow-hidden rounded-2xl border border-border bg-white">
                  <Image
                    src={project.flowImage}
                    alt="User flow diagram"
                    width={1200}
                    height={600}
                    className="w-full object-contain"
                  />
                </div>
                {/* Process photos */}
                {project.flowProcessImages && project.flowProcessImages.length > 0 && (
                  <div className={`mt-4 grid gap-3 ${project.flowProcessImages.length === 1 ? "grid-cols-1" : "grid-cols-3"}`}>
                    {project.flowProcessImages.map((img, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-xl border border-border"
                      >
                        <Image
                          src={img}
                          alt={`Design process ${i + 1}`}
                          width={400}
                          height={300}
                          className="w-full object-cover aspect-[4/3]"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            )}

            {/* Bridging banner 2 — design section divider (replaces text heading when present) */}
            {project.bannerImages?.[1] ? (
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.bannerImages[1]}
                  alt="Start the Design"
                  width={1200}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            ) : (
              <section className="border-t border-border pt-16 text-center">
                <h2 className="pixel-heading text-xl md:text-2xl">
                  Now it&apos;s time to design!
                </h2>
              </section>
            )}

            {/* Let's take a look — feature showcases */}
            <section>
              <h2 className="pixel-heading text-lg mb-12">
                Let&apos;s take a look
              </h2>
              <div className="space-y-20">
                {project.features.map((feature, i) => (
                  <div
                    key={feature.title}
                    className={`grid items-center gap-10 lg:grid-cols-2 ${
                      i % 2 === 1 ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    {/* Text */}
                    <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                      <h3 className="mb-4 text-xl font-semibold text-brand">
                        {feature.title}
                      </h3>
                      <p className="leading-relaxed text-muted">
                        {feature.description}
                      </p>
                    </div>
                    {/* Image — phone frame for mobile, plain card for desktop */}
                    {feature.image && (
                      project.desktopFeatures ? (
                        <div className={`lg:[direction:ltr] ${i % 2 === 1 ? "lg:justify-start" : "lg:justify-end"}`}>
                          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              width={800}
                              height={500}
                              className="w-full object-cover"
                            />
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`flex justify-center lg:[direction:ltr] ${
                            i % 2 === 1 ? "lg:justify-start" : "lg:justify-end"
                          }`}
                        >
                          <div className="w-56 overflow-hidden rounded-[2rem] border-4 border-border shadow-lg">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              width={390}
                              height={844}
                              className="w-full object-cover"
                            />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Bridging banner 3 — before final result */}
            {project.bannerImages?.[2] && (
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={project.bannerImages[2]}
                  alt="Final Design"
                  width={1200}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            )}

            {/* Finally the result */}
            {project.resultImage && (
              <section className={!project.bannerImages?.[2] ? "border-t border-border pt-16" : ""}>
                {!project.bannerImages?.[2] && (
                  <h2 className="pixel-heading text-lg mb-8">
                    Finally the result for all features
                  </h2>
                )}
                <div className="overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={project.resultImage}
                    alt="Final result mockup"
                    width={1200}
                    height={700}
                    className="w-full object-cover"
                  />
                </div>
              </section>
            )}

            {/* Outcome */}
            <section className="border-t border-border pt-12">
              <div className="card-surface rounded-2xl p-6">
                <p className="text-foreground/90 leading-relaxed">
                  <span className="font-medium text-accent-4">Result — </span>
                  {project.outcome}
                </p>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-medium text-white transition hover:brightness-110"
                >
                  Discuss this project
                </Link>
              </div>
            </section>
              </>
            )}
          </div>
        ) : (

          /* ── SIMPLE LAYOUT (no rich images) ── */
          <div className="grid gap-12 lg:grid-cols-[1fr_240px]">
            <div className="space-y-14">
              <section>
                <h2 className="section-label mb-4">The Problem</h2>
                <p className="leading-relaxed text-muted">{project.problem}</p>
              </section>
              <section>
                <h2 className="section-label mb-4">The Solution</h2>
                <p className="leading-relaxed text-muted">{project.solution}</p>
              </section>
              <section>
                <h2 className="section-label mb-6">Key Features &amp; Decisions</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <div key={feature.title} className="card-surface rounded-2xl p-5">
                      <p className="mb-2 font-medium text-brand">{feature.title}</p>
                      <p className="text-sm leading-relaxed text-muted">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="section-label mb-4">Outcome</h2>
                <div className="card-surface rounded-2xl p-6">
                  <p className="text-foreground/90 leading-relaxed">
                    <span className="font-medium text-accent-4">Result — </span>
                    {project.outcome}
                  </p>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <div className="card-surface rounded-2xl p-6 space-y-6">
                <div className="flex items-start gap-3">
                  <Calendar size={15} className="mt-0.5 shrink-0 text-accent-2" />
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted mb-1">Year</p>
                    <p className="text-sm">{project.year}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Briefcase size={15} className="mt-0.5 shrink-0 text-accent-2" />
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted mb-1">Type</p>
                    <p className="text-sm">{project.projectType}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Tag size={15} className="mt-0.5 shrink-0 text-accent-2" />
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted mb-1">Tags</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] text-accent-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/#contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-medium text-white transition hover:brightness-110"
              >
                Discuss this project
              </Link>
            </aside>
          </div>
        )}

        {/* Prev / Next */}
        <div className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/projects/${prev.id}`}
              className="card-surface group flex flex-col rounded-2xl p-5 transition hover:border-accent-2/40"
            >
              <span className="text-xs text-muted mb-1">← Previous</span>
              <span className="font-medium group-hover:text-accent-2 transition">
                {prev.title}
              </span>
              <span className="text-xs text-muted mt-0.5">{prev.company}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.id}`}
              className="card-surface group flex flex-col rounded-2xl p-5 transition hover:border-accent/40 sm:text-right"
            >
              <span className="text-xs text-muted mb-1">Next →</span>
              <span className="font-medium group-hover:text-accent-2 transition">
                {next.title}
              </span>
              <span className="text-xs text-muted mt-0.5">{next.company}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </main>
    </div>
  );
}
