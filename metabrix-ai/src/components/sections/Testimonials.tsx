"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersection";

export const Testimonials = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-brand-dark border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Background ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full radial-glow-bronze opacity-15 blur-[90px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center py-8">
        <p className="text-lg sm:text-2xl font-light tracking-tight text-white leading-relaxed font-sans mb-3">
          Client results coming soon &mdash; our first projects are currently in progress.
        </p>
        <p className="text-xs sm:text-sm text-brand-gold uppercase tracking-widest font-mono">
          Case studies will be published here.
        </p>
      </div>
    </section>
  );
};

