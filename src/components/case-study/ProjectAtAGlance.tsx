import React from "react";
import { Users, UserCheck, Clock, Layers, ShieldCheck, HelpCircle } from "lucide-react";
import type { ProjectAtAGlance as AtAGlanceType } from "@/data/projects/types";

export function ProjectAtAGlance({
  atAGlance,
  problemSummary,
}: {
  atAGlance?: AtAGlanceType;
  problemSummary?: string;
}) {
  if (!atAGlance && !problemSummary) return null;

  return (
    <section
      aria-label="Project at a glance overview"
      className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8 lg:p-10"
    >
      <div className="flex items-center gap-2 border-b border-border/70 pb-4">
        <p className="font-pixel text-[0.62rem] uppercase tracking-[0.18em] text-brand">
          At a Glance
        </p>
        <span className="text-muted/40">·</span>
        <span className="text-xs text-muted">Executive &amp; Recruiter Summary</span>
      </div>

      {problemSummary && (
        <div className="mt-5 border-l-2 border-accent-2 pl-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            The Core Challenge
          </p>
          <p className="mt-1 text-base font-medium leading-relaxed text-foreground">
            {problemSummary}
          </p>
        </div>
      )}

      {atAGlance && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {atAGlance.targetAudience && (
            <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-brand">
                <Users size={16} className="text-accent-2 shrink-0" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Target Audience
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {atAGlance.targetAudience}
              </p>
            </div>
          )}

          {atAGlance.role && (
            <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-brand">
                <UserCheck size={16} className="text-accent-2 shrink-0" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Tri&apos;s Role
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90 font-medium">
                {atAGlance.role}
              </p>
            </div>
          )}

          {atAGlance.team && (
            <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-brand">
                <HelpCircle size={16} className="text-accent-2 shrink-0" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Team Composition
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {atAGlance.team}
              </p>
            </div>
          )}

          {atAGlance.timeline && (
            <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-brand">
                <Clock size={16} className="text-accent-2 shrink-0" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Timeline &amp; Duration
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {atAGlance.timeline}
              </p>
            </div>
          )}

          {atAGlance.scope && (
            <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-brand">
                <Layers size={16} className="text-accent-2 shrink-0" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Scope of Work
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {atAGlance.scope}
              </p>
            </div>
          )}

          {atAGlance.status && (
            <div className="rounded-2xl border border-border/60 bg-background/50 p-4">
              <div className="flex items-center gap-2 text-brand">
                <ShieldCheck size={16} className="text-accent-4 shrink-0" />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Project Status
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                {atAGlance.status}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
