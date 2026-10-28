import { ArrowLeft, ArrowUpRight, Calendar, Briefcase, Tag, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import type { Metadata } from "next";
import {
  ImageLightboxProvider,
  ExpandableImage,
} from "@/components/ui/ImageLightbox";
import { ProductWalkthrough } from "@/components/case-study/ProductWalkthrough";
import { ProjectAtAGlance } from "@/components/case-study/ProjectAtAGlance";
import { KeyDecisionsSection } from "@/components/case-study/KeyDecisionsSection";

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
    title: `${project.title} · ${project.company} | Tri Anugerah Yusra`,
    description: project.problemSummary ?? project.summary,
    openGraph: {
      title: `${project.title} · ${project.company}`,
      description: project.problemSummary ?? project.summary,
      type: "article",
      images: socialImage ? [socialImage] : undefined,
    },
    twitter: {
      card: socialImage ? "summary_large_image" : "summary",
      title: `${project.title} · ${project.company}`,
      description: project.problemSummary ?? project.summary,
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
  const isRich = !!(
    project.walkthrough ||
    project.keyDecisions ||
    project.flowImage ||
    project.resultImage ||
    hasCaseStudySections
  );

  return (
    <ImageLightboxProvider>
      <div className="min-h-screen bg-background">
        {/* Top nav */}
        <nav className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link
              href="/#projects"
              className="flex items-center gap-2 text-sm font-medium text-muted transition hover:text-foreground"
            >
              <ArrowLeft size={16} />
              <span>Back to portfolio</span>
            </Link>

            <div className="flex items-center gap-4">
              <span className="font-pixel text-[11px] text-muted">
                {currentIndex + 1} / {projects.length}
              </span>
              <Link
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
              >
                <span>Discuss project</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <header
          className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} px-6 py-16 lg:px-10 lg:py-24`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.04),transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="section-label">{project.company}</span>
              <span className="text-muted/40">·</span>
              <span className="text-xs font-medium text-muted">{project.year}</span>
            </div>

            <h1 className="pixel-heading mt-4 text-2xl leading-tight sm:text-3xl md:text-4xl">
              {project.title}
            </h1>

            <p className="mt-3 text-sm font-medium text-accent-2">
              {project.category}
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/85">
              {project.summary}
            </p>
          </div>
        </header>

        {/* Early Visual Result (Main Product Screen) */}
        {project.cover && (
          <section
            aria-label={`${project.title} early visual showcase`}
            className="mx-auto max-w-5xl px-6 lg:px-10"
          >
            <div className="relative -mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <ExpandableImage
                src={project.cover}
                alt={`${project.title} key interface`}
                caption={`${project.title}: Shipped interface`}
                width={1200}
                height={650}
                className="w-full object-cover"
                priority
              />
            </div>
          </section>
        )}

        <main className="mx-auto max-w-5xl px-6 py-14 lg:px-10 lg:py-20">
          {/* ── RICH LAYOUT ── */}
          {isRich ? (
            <div className="space-y-16 lg:space-y-20">
              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-8">
                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted mb-1">
                      Year
                    </p>
                    <p className="text-sm font-medium">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted mb-1">
                      Type
                    </p>
                    <p className="text-sm font-medium">{project.projectType}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-soft px-3 py-1 text-[11px] font-medium text-accent-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* At a Glance (CASE-02) */}
              <ProjectAtAGlance
                atAGlance={project.atAGlance}
                problemSummary={project.problemSummary ?? project.problem}
              />

              {/* Guided Product Walkthrough (DEMO-01 / Pilot on Tangkian ERP) */}
              {project.walkthrough && (
                <ProductWalkthrough walkthrough={project.walkthrough} />
              )}

              {/* Key Decisions Block (CASE-04) */}
              {project.keyDecisions && project.keyDecisions.length > 0 && (
                <KeyDecisionsSection decisions={project.keyDecisions} />
              )}

              {/* Case Study Deep-dive Sections (Architecture, Flows, Research, Tables) */}
              {hasCaseStudySections && (
                <section className="space-y-14">
                  {project.caseStudySections
                    ?.filter((section) =>
                      // Skip raw 'Design decisions' if structured keyDecisions already rendered above
                      project.keyDecisions && project.keyDecisions.length > 0
                        ? section.title !== "Design decisions"
                        : true
                    )
                    .map((section) => (
                      <div
                        key={section.title}
                        className="grid gap-8 border-b border-border pb-14 last:border-b-0 lg:grid-cols-[240px_1fr]"
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

                          {/* Numbered items */}
                          {section.items && section.items.length > 0 && (
                            <ol className="space-y-6">
                              {section.items.map((listItem, index) => (
                                <li
                                  key={listItem.title}
                                  className="grid grid-cols-[2rem_1fr] gap-x-3 gap-y-1"
                                >
                                  <span
                                    aria-hidden
                                    className="pixel-heading pt-0.5 text-[10px] text-accent-2/70"
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

                          {/* Data tables */}
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
                                <figcaption className="text-xs text-muted">
                                  {section.table.caption}
                                </figcaption>
                              )}
                            </figure>
                          )}

                          {section.note && (
                            <p className="border-l-2 border-accent-2/40 pl-4 text-xs leading-relaxed text-muted">
                              {section.note}
                            </p>
                          )}

                          {/* Images / Diagrams with Lightbox zoom */}
                          {section.images && section.images.length > 0 && (
                            <div
                              className={`grid ${
                                section.imageColumns === 1 ? "gap-6" : "gap-4"
                              } ${
                                section.imageColumns === 1
                                  ? "grid-cols-1"
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
                                      <ExpandableImage
                                        src={image.src}
                                        alt={image.label}
                                        caption={image.caption ?? image.label}
                                        width={image.width ?? 1200}
                                        height={image.height ?? 800}
                                        sizes="(max-width: 768px) 100vw, 1000px"
                                        containerClassName={
                                          image.width
                                            ? "w-full"
                                            : "h-full min-h-64 w-full"
                                        }
                                        className={
                                          image.width
                                            ? "h-auto w-full"
                                            : "h-full min-h-64 w-full object-contain"
                                        }
                                      />
                                    ) : (
                                      <div className="flex min-h-64 items-center justify-center bg-accent-soft px-6 text-center">
                                        <p className="text-sm text-muted">
                                          {image.label}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                  {image.caption && (
                                    <figcaption className="text-xs leading-relaxed text-muted">
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
              )}

              {/* Legacy Flow and Features (for projects relying on feature showcases) */}
              {!hasCaseStudySections && (
                <>
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

                  {/* Flow Image */}
                  {project.flowImage && (
                    <section>
                      <h2 className="pixel-heading text-lg mb-8">
                        Process &amp; User Flow
                      </h2>
                      <div className="overflow-hidden rounded-2xl border border-border bg-white">
                        <ExpandableImage
                          src={project.flowImage}
                          alt="User flow diagram"
                          caption="User flow diagram"
                          width={1200}
                          height={600}
                          className="w-full object-contain"
                        />
                      </div>
                    </section>
                  )}

                  {/* Feature showcases */}
                  {project.features && project.features.length > 0 && (
                    <section>
                      <h2 className="pixel-heading text-lg mb-12">
                        Key Features &amp; User Tasks
                      </h2>
                      <div className="space-y-16">
                        {project.features.map((feature, i) => (
                          <div
                            key={feature.title}
                            className={`grid items-center gap-10 lg:grid-cols-2 ${
                              i % 2 === 1 ? "lg:[direction:rtl]" : ""
                            }`}
                          >
                            <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                              <h3 className="mb-3 text-xl font-semibold text-brand">
                                {feature.title}
                              </h3>
                              <p className="leading-relaxed text-muted">
                                {feature.description}
                              </p>
                            </div>
                            {feature.image && (
                              <div className={`overflow-hidden rounded-xl border border-border shadow-sm lg:[direction:ltr]`}>
                                <ExpandableImage
                                  src={feature.image}
                                  alt={feature.title}
                                  caption={feature.title}
                                  width={800}
                                  height={500}
                                  className="w-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </>
              )}

              {/* Outcome & Impact Section (CASE-08) */}
              <section className="border-t border-border pt-12">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles size={16} className="text-accent-4" />
                  <p className="font-pixel text-[0.62rem] uppercase tracking-[0.16em] text-accent-4">
                    Outcome &amp; Realized Capabilities
                  </p>
                </div>

                {project.resultStats && project.resultStats.length > 0 && (
                  <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {project.resultStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="card-surface rounded-2xl p-5"
                      >
                        <p className="pixel-heading text-base text-brand">{stat.value}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="card-surface rounded-2xl p-6 sm:p-8">
                  <p className="whitespace-pre-line text-foreground/90 leading-relaxed">
                    <span className="font-semibold text-accent-4">Deliverables &amp; Results: </span>
                    {project.outcome}
                  </p>
                </div>

                {project.resultNote && (
                  <p className="mt-4 text-xs leading-relaxed text-muted/70 italic">
                    * {project.resultNote}
                  </p>
                )}

                <div className="mt-8 text-center">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
                  >
                    <span>Discuss this project</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </section>
            </div>
          ) : (
            /* ── SIMPLE LAYOUT (for visual & archive projects) ── */
            <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
              <div className="space-y-12">
                {/* At a glance */}
                {project.atAGlance && (
                  <ProjectAtAGlance
                    atAGlance={project.atAGlance}
                    problemSummary={project.problemSummary ?? project.problem}
                  />
                )}

                <section>
                  <h2 className="section-label mb-3">The Brief &amp; Problem</h2>
                  <p className="leading-relaxed text-muted">{project.problem}</p>
                </section>

                <section>
                  <h2 className="section-label mb-3">The Approach &amp; Solution</h2>
                  <p className="leading-relaxed text-muted">{project.solution}</p>
                </section>

                {project.features && project.features.length > 0 && (
                  <section>
                    <h2 className="section-label mb-6">Key Focus Areas</h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <div key={feature.title} className="card-surface rounded-2xl p-5">
                          <p className="mb-2 font-medium text-brand">{feature.title}</p>
                          <p className="text-xs leading-relaxed text-muted">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section>
                  <h2 className="section-label mb-3">Outcome &amp; Reflection</h2>
                  <div className="card-surface rounded-2xl p-6">
                    <p className="text-foreground/90 leading-relaxed text-sm">
                      <span className="font-semibold text-accent-4">Result: </span>
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
                      <p className="text-[11px] uppercase tracking-widest text-muted mb-1">
                        Year
                      </p>
                      <p className="text-sm font-medium">{project.year}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase size={15} className="mt-0.5 shrink-0 text-accent-2" />
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-muted mb-1">
                        Type
                      </p>
                      <p className="text-sm font-medium">{project.projectType}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Tag size={15} className="mt-0.5 shrink-0 text-accent-2" />
                    <div>
                      <p className="text-[11px] uppercase tracking-widest text-muted mb-1">
                        Tags
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent-2"
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
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 text-sm font-medium text-white shadow-sm transition hover:brightness-110 active:scale-[0.98]"
                >
                  <span>Discuss this project</span>
                  <ArrowUpRight size={15} />
                </Link>
              </aside>
            </div>
          )}

          {/* Prev / Next Project Navigation */}
          <div className="mt-20 grid gap-4 border-t border-border pt-10 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/projects/${prev.id}`}
                className="card-surface group flex flex-col rounded-2xl p-5 transition hover:border-brand/40"
              >
                <span className="text-xs font-medium text-muted mb-1">← Previous Project</span>
                <span className="font-medium text-foreground group-hover:text-brand transition">
                  {prev.title}
                </span>
                <span className="text-xs text-muted mt-0.5">{prev.company} · {prev.category}</span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/projects/${next.id}`}
                className="card-surface group flex flex-col rounded-2xl p-5 transition hover:border-brand/40 sm:text-right"
              >
                <span className="text-xs font-medium text-muted mb-1">Next Project →</span>
                <span className="font-medium text-foreground group-hover:text-brand transition">
                  {next.title}
                </span>
                <span className="text-xs text-muted mt-0.5">{next.company} · {next.category}</span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </main>
      </div>
    </ImageLightboxProvider>
  );
}
