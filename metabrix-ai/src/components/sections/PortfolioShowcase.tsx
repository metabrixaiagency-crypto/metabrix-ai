"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useIntersectionObserver } from "@/hooks/useIntersection";

const nicheProjects = [
  {
    category: "Food & Beverage",
    title: "Cafés & Restaurants",
    description: "Helping local eateries get discovered online and convert visitors into reservations.",
    metric: "+70% increase in reservation and inquiry conversions",
  },
  {
    category: "Beauty & Wellness",
    title: "Salons & Spas",
    description: "Replacing WhatsApp-only bookings with a professional online booking system.",
    metric: "-45% reduction in booking no-shows with online scheduling",
  },
  {
    category: "Healthcare",
    title: "Clinics & Doctors",
    description: "Helping medical practices get found on Google and generate new patient inquiries.",
    metric: "3× increase in new patient inquiry form submissions",
  },
  {
    category: "Real Estate",
    title: "Agents & Builders",
    description: "Building lead-capture websites that convert property browsers into genuine buyers.",
    metric: "+65% more qualified property inquiry leads per month",
  },
  {
    category: "Professional Services",
    title: "CA Firms & Law Offices",
    description: "Replacing outdated online presence with a credibility-first professional website.",
    metric: "2× increase in consultation request form fills",
  },
  {
    category: "Education",
    title: "Coaching & Tutoring",
    description: "Helping tutors and coaching centres showcase results and capture student signups.",
    metric: "+55% increase in demo class and enrollment inquiries",
  },
];

export const PortfolioShowcase = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-brand-dark transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Grid Layout of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[40vh]">
          {nicheProjects.map((project, idx) => (
            <Card
              key={idx}
              variant="glass"
              className="flex flex-col gap-6 text-left group relative overflow-hidden select-none"
            >
              {/* Subtle top gold reflection outline */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-start gap-4">
                <Badge variant="primary" className="text-[9px] px-2.5 py-0.5 border-brand-gold/20 text-brand-gold font-mono uppercase tracking-widest">
                  {project.category}
                </Badge>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-light tracking-wide text-white group-hover:text-brand-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Core metric badge */}
              <div className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-xl text-left w-fit flex flex-col gap-0.5 mt-2">
                <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono">Industry benchmark</span>
                <span className="text-xs font-semibold text-brand-gold tracking-wide">{project.metric}</span>
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">
                  Industry benchmark
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

