import React from "react";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import type { KeyDecision } from "@/data/projects/types";
import { ExpandableImage } from "@/components/ui/ImageLightbox";

export function KeyDecisionsSection({
  decisions,
}: {
  decisions: readonly KeyDecision[];
}) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <section
      id="key-decisions"
      aria-label="Key Design Decisions and Evidence"
      className="space-y-12"
    >
      <div className="border-b border-border/70 pb-4">
        <p className="font-pixel text-[0.62rem] uppercase tracking-[0.16em] text-accent-2">
          Problem → Decision → Evidence
        </p>
        <h2 className="pixel-heading mt-2 text-xl sm:text-2xl">
          Key Decisions &amp; Architectural Choices
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
          How complex business constraints and accounting rules were translated into intentional user interface decisions.
        </p>
      </div>

      <div className="space-y-12">
        {decisions.map((decision, index) => (
          <article
            key={decision.title}
            className="card-surface overflow-hidden rounded-3xl p-6 sm:p-8 lg:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="font-pixel text-xs text-accent-2">
                0{index + 1}
              </span>
              <h3 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                {decision.title}
              </h3>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10 items-start">
              {/* Problem, Decision, Reasoning */}
              <div className="space-y-6">
                {/* The Problem */}
                <div className="rounded-2xl border border-red-200/50 bg-red-50/30 p-4">
                  <div className="flex items-center gap-2 text-red-700">
                    <AlertCircle size={15} className="shrink-0" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider">
                      The Problem
                    </h4>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                    {decision.problem}
                  </p>
                </div>

                {/* The Decision */}
                <div className="rounded-2xl border border-brand/20 bg-accent-soft/30 p-4">
                  <div className="flex items-center gap-2 text-brand">
                    <Lightbulb size={15} className="shrink-0 text-accent-2" />
                    <h4 className="text-xs font-semibold uppercase tracking-wider">
                      Design Decision
                    </h4>
                  </div>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">
                    {decision.decision}
                  </p>
                </div>

                {/* Reasoning & Trade-offs */}
                <div className="border-l-2 border-accent-2/60 pl-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Trade-offs &amp; Rationale
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {decision.reasoning}
                  </p>
                </div>

                {/* Outcome / Boundary */}
                {decision.outcome && (
                  <div className="flex items-start gap-2 pt-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-4" />
                    <p className="text-xs font-medium leading-relaxed text-foreground/90">
                      <strong className="text-accent-4">Outcome: </strong>
                      {decision.outcome}
                    </p>
                  </div>
                )}
              </div>

              {/* Visual Evidence */}
              {decision.image && decision.image.src && (
                <div className="space-y-3">
                  <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <ExpandableImage
                      src={decision.image.src}
                      alt={decision.image.label}
                      caption={decision.image.caption ?? decision.image.label}
                      width={decision.image.width ?? 1200}
                      height={decision.image.height ?? 800}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="w-full object-cover"
                    />
                  </div>
                  {decision.image.caption && (
                    <p className="text-xs leading-relaxed text-muted">
                      {decision.image.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
