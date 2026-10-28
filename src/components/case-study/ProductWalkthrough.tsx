"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Workflow } from "lucide-react";
import type { Walkthrough } from "@/data/projects/types";
import { ExpandableImage } from "@/components/ui/ImageLightbox";

export function ProductWalkthrough({
  walkthrough,
}: {
  walkthrough: Walkthrough;
}) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const steps = walkthrough.steps;
  const currentStep = steps[activeStepIndex] ?? steps[0];

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  if (!steps || steps.length === 0) return null;

  return (
    <section
      id="walkthrough"
      aria-label="Workflow walkthrough"
      className="scroll-mt-24 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8 lg:p-10"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/70 pb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-soft text-brand">
              <Workflow size={13} className="text-accent-2" />
            </span>
            <p className="font-pixel text-[0.62rem] uppercase tracking-[0.16em] text-accent-2">
              Interactive Scenario
            </p>
          </div>
          <h2 className="pixel-heading mt-2 text-lg sm:text-xl md:text-2xl">
            {walkthrough.title}
          </h2>
          {walkthrough.subtitle && (
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">
              {walkthrough.subtitle}
            </p>
          )}
        </div>

        {/* Step Indicator & Controls */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-muted">
            Step <strong className="text-foreground">{activeStepIndex + 1}</strong> of {steps.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeStepIndex === 0}
              aria-label="Previous step"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeStepIndex === steps.length - 1}
              aria-label="Next step"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Main 2-column showcase */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-10 items-start">
        {/* Left: Step navigation tabs */}
        <div
          role="tablist"
          aria-label="Walkthrough steps"
          className="flex flex-col gap-3"
        >
          {steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                role="tab"
                id={`tab-${step.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${step.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveStepIndex(idx)}
                className={`group flex items-start gap-4 rounded-2xl p-4 text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand text-white shadow-md ring-1 ring-brand"
                    : "border border-border/70 bg-background/60 hover:border-brand/40 hover:bg-card"
                }`}
              >
                <span
                  aria-hidden
                  className={`font-pixel text-[11px] font-bold tracking-wider pt-0.5 ${
                    isActive ? "text-accent-2" : "text-muted group-hover:text-foreground"
                  }`}
                >
                  {step.stepNumber}
                </span>

                <div className="min-w-0 flex-1">
                  <h3
                    className={`text-sm font-semibold tracking-tight ${
                      isActive ? "text-white" : "text-foreground group-hover:text-brand"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1.5 text-xs leading-relaxed ${
                      isActive ? "text-white/85" : "text-muted"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Screen presentation with window frame */}
        <div
          role="tabpanel"
          id={`panel-${currentStep.id}`}
          aria-labelledby={`tab-${currentStep.id}`}
          className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-inner"
        >
          {/* Mockup Top Window Bar */}
          <div className="flex items-center justify-between border-b border-border/70 bg-card px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80 inline-block" />
              <span className="ml-2 font-pixel text-[10px] text-muted">
                Step {currentStep.stepNumber}: {currentStep.title}
              </span>
            </div>
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[10px] font-medium text-brand">
              Click to expand
            </span>
          </div>

          {/* Screenshot */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/5">
            <ExpandableImage
              src={currentStep.image.src}
              alt={currentStep.image.alt}
              caption={currentStep.image.caption}
              width={currentStep.image.width ?? 3360}
              height={currentStep.image.height ?? 2000}
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Caption */}
          <div className="border-t border-border/70 bg-card p-4">
            <p className="text-xs leading-relaxed text-muted">
              <strong className="font-semibold text-foreground">Observe: </strong>
              {currentStep.image.caption}
            </p>
          </div>
        </div>
      </div>

      {/* Optional disclaimer */}
      {walkthrough.disclaimer && (
        <p className="mt-6 text-center text-xs text-muted/70 italic">
          * {walkthrough.disclaimer}
        </p>
      )}
    </section>
  );
}
