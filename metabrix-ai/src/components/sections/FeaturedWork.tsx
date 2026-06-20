"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useIntersectionObserver } from "@/hooks/useIntersection";

const featuredProjects = [
  {
    title: "Vortex Data Intelligence",
    category: "AI Data Platform",
    client: "Vortex Solutions",
    description: "A custom analytics dashboard that aggregates multi-agent LLM query streams, helping business analysts extract actionable customer insights in real-time.",
    features: ["Next.js App Router", "Serverless Database", "Vector Embeddings"],
    metric: "+45% user analysis speed",
  },
  {
    title: "Aura E-Commerce Portal",
    category: "Headless Commerce",
    client: "Aura Apparel",
    description: "A headless commerce interface designed for speed and smooth transitions, built to reduce cart abandonment and increase conversion rates.",
    features: ["Headless CMS", "Stripe API Integration", "Core Web Vitals Optimized"],
    metric: "Sub-0.8s load speed average",
  },
];

export const FeaturedWork = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-brand-dark border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Background glow decorative details */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full radial-glow-gold opacity-15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex-1 flex flex-col gap-4 text-left">
            <div>
              <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
                Selected Works
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
              Recent Case <span className="font-serif italic text-brand-gold font-normal">Studies</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 items-start md:items-end md:mb-1">
            <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-xs uppercase tracking-wider font-light md:text-right">
              A brief preview of platforms we have designed, engineered, and successfully launched.
            </p>
            <Link href="/portfolio">
              <Button variant="outline" size="sm" className="group text-[10px] tracking-widest uppercase font-semibold">
                Explore Full Case Gallery
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-brand-gold" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Selected Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, idx) => (
            <Card key={idx} variant="glass" className="flex flex-col gap-6 text-left group relative overflow-hidden">
              {/* Gold light reflection border background effect on card */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-[10px] text-muted-foreground uppercase tracking-widest font-mono">
                  <span>{project.client}</span>
                  <span className="text-brand-gold">{project.category}</span>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white group-hover:text-brand-gold transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
                {project.description}
              </p>

              {/* Core features tags */}
              <div className="flex flex-wrap gap-2 mt-2">
                {project.features.map((feat, fIdx) => (
                  <span
                    key={fIdx}
                    className="text-[9px] font-mono tracking-wider uppercase bg-white/5 border border-white/5 px-2.5 py-1 rounded text-muted-foreground"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Highlight outcome metric */}
              <div className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-xl text-left w-fit flex flex-col gap-0.5 mt-2 select-none">
                <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono">Highlight Outcome</span>
                <span className="text-xs font-semibold text-brand-gold tracking-wide">{project.metric}</span>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">
                  Case Study
                </span>
                <span className="h-8 w-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground group-hover:text-brand-gold group-hover:border-brand-gold/30 transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
