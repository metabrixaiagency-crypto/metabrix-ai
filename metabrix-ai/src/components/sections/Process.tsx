"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { useIntersectionObserver } from "@/hooks/useIntersection";

const steps = [
  {
    phase: "Phase 01",
    title: "Discovery & Blueprinting",
    subtitle: "Consultation & Scope",
    description: "We align on your business goals, target audience, and site requirements to map out a clear visual and architectural blueprint.",
  },
  {
    phase: "Phase 02",
    title: "Custom Visual Design",
    subtitle: "Interface Layout",
    description: "Designing distinct page mockups focused on clean typography, intuitive user flows, and brand styling tailored to your business.",
  },
  {
    phase: "Phase 03",
    title: "Core Web Engineering",
    subtitle: "Next.js Development",
    description: "Building fast, search-optimized, and fully responsive layouts using Next.js and TypeScript, adhering to accessibility standards.",
  },
  {
    phase: "Phase 04",
    title: "AI Integration & Launch",
    subtitle: "Functionality & Testing",
    description: "Deploying practical AI components (like intelligent lead intake or support modules), running final checks, and launching the site.",
  },
];

export const Process = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-brand-dark border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full radial-glow-bronze opacity-15 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className="flex flex-col gap-4 text-center items-center mb-20">
          <div>
            <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
              Methodology
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
            Our Collaborative <span className="font-serif italic text-brand-gold font-normal">Development Process</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-md uppercase tracking-wider font-light">
            A transparent, structured approach to planning, designing, and launching your digital platform.
          </p>
        </div>

        {/* Stepped Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Desktop timeline line overlay */}
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-brand-gold/5 via-brand-gold/30 to-brand-gold/5 pointer-events-none" />

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-6 text-left relative group">
              {/* Stepper Dot */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="h-10 w-10 rounded-full bg-brand-dark border border-brand-gold/35 group-hover:border-brand-gold flex items-center justify-center text-xs font-semibold text-brand-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.25)] transition-all duration-300">
                  {idx + 1}
                </div>
                <Badge variant="outline" className="text-[9px] tracking-widest text-muted-foreground font-semibold uppercase">
                  {step.phase}
                </Badge>
              </div>

              {/* Step Card Content */}
              <Card variant="glass" className="h-full flex flex-col gap-4 pt-6 mt-2 relative">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-medium">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-medium text-white tracking-wide">{step.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
