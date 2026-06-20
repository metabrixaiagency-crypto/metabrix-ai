"use client";

import React from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useIntersectionObserver } from "@/hooks/useIntersection";

const clientTestimonials = [
  {
    name: "Julian Vance",
    role: "Founder & Director",
    company: "Aura Apparel",
    quote: "Working with Metabrix AI completely elevated our digital presence. They translated our brand requirements into a high-performance headless commerce app that has significantly increased our conversion rate.",
  },
  {
    name: "Dr. Sterling",
    role: "Chief Technology Officer",
    company: "Vortex Solutions",
    quote: "Their Next.js and TypeScript architectures are exceptionally robust and clean. The custom AI functionality they integrated helps us triage customer requests and saves our support desk hours every week.",
  },
  {
    name: "Elena Rostova",
    role: "Managing Partner",
    company: "Vesper Partners",
    quote: "Metabrix AI delivered exactly what they promised: a fast, secure website designed to capture leads, and a highly structured, transparent communication process throughout the build.",
  },
];

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
      <div className="absolute top-10 left-10 w-[250px] h-[250px] rounded-full radial-glow-bronze opacity-20 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center items-center mb-16">
          <div>
            <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
              Client Feedback
            </Badge>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
            Client Success & <span className="font-serif italic text-brand-gold font-normal">Endorsements</span>
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-md uppercase tracking-wider font-light">
            Read comments from business founders and technology leaders who commissioned our agency.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((item, idx) => (
            <Card key={idx} variant="glass" className="flex flex-col gap-6 text-left p-8 group">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, sIdx) => (
                  <Star key={sIdx} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold shadow-[0_0_8px_#D4AF37]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed italic font-serif flex-grow">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {/* Client Info */}
              <div className="pt-6 border-t border-white/5 flex flex-col gap-1">
                <cite className="not-italic text-sm font-semibold text-white tracking-wide">
                  {item.name}
                </cite>
                <span className="text-[10px] text-brand-gold uppercase tracking-wider font-mono">
                  {item.role}, {item.company}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
