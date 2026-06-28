"use client";

import React from "react";
import { ShieldCheck, FastForward, Award, Landmark } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useIntersectionObserver } from "@/hooks/useIntersection";

const highlights = [
  {
    icon: Award,
    number: "01",
    title: "Custom Creative Design",
    description: "Every layout is custom-tailored to represent your business. We avoid generic templates, designing distinct user interfaces that match your brand identity.",
  },
  {
    icon: FastForward,
    number: "02",
    title: "Performance Optimization",
    description: "Fast websites retain visitors. We build using Next.js to ensure speed, search engine readability, and responsive design across all viewports.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "AI Utility Integration",
    description: "Enhance your site with practical AI integrations, from intelligent client inquiry triage to automated booking systems that streamline operations.",
  },
  {
    icon: Landmark,
    number: "04",
    title: "Conversion-Focused layouts",
    description: "We design sections with clear visual hierarchy, guiding users directly to calls-to-action to help you turn digital traffic into customer leads.",
  },
];

export const WhyChooseUs = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-brand-dark border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full radial-glow opacity-60 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left Column - Copy */}
        <div className="flex-1 flex flex-col gap-6 text-left lg:sticky lg:top-32">
          <div>
            <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
              Custom Philosophy
            </Badge>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
            Websites Designed to <span className="font-serif italic text-brand-gold font-normal">Grow Your Business</span>
          </h2>
          
          <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-lg font-light">
            We focus on creating premium digital experiences that drive measurable growth. Our websites are built from the ground up, prioritizing user experience, speed, and clean code to establish your brand&apos;s authority online.
          </p>

          <div className="mt-6 border-l-2 border-brand-gold/40 pl-6 flex flex-col gap-2">
            <span className="text-xs tracking-wider uppercase text-brand-gold font-semibold">Our Standard</span>
            <span className="text-xs text-muted-foreground font-light uppercase tracking-wide">
              No templates. Blistering speeds. High conversions. Fully secure coding parameters.
            </span>
          </div>
        </div>

        {/* Right Column - Cards Grid */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} variant="glass" className="flex flex-col gap-4 text-left p-6 md:p-6 group">
                <div className="flex justify-between items-center">
                  <div className="text-xs font-semibold font-mono text-brand-gold/50 group-hover:text-brand-gold transition-colors duration-300">
                    {item.number}
                  </div>
                  <Icon className="h-4 w-4 text-muted-foreground group-hover:text-brand-gold transition-colors duration-300" />
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <h3 className="text-base font-semibold text-white tracking-wide">{item.title}</h3>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
