"use client";

import React from "react";
import { Laptop, Cpu, Layers, RefreshCw, Settings, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersection";

const services = [
  {
    icon: Laptop,
    title: "Business Websites",
    description: "Professional web presence engineered to establish authority, present services clearly, and build client trust. Optimized for security and modern user experience.",
    badge: "Corporate",
  },
  {
    icon: Cpu,
    title: "AI Powered Websites",
    description: "Next-generation platforms featuring autonomous customer support assistants, custom database lookup agents, and cognitive workspace integrations.",
    badge: "Intelligence",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    description: "High-conversion marketing layouts designed for campaign performance, product launches, and rapid lead capture with clean spacing.",
    badge: "Marketing",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Transform outdated websites into fast, modern Next.js environments that reflect your current brand trajectory and increase performance metrics.",
    badge: "Optimization",
  },
  {
    icon: Settings,
    title: "SaaS Platforms",
    description: "Custom scalable cloud dashboards with premium dashboard styling, database connections, and secure administrative control interfaces.",
    badge: "Product",
  },
];

export const Services = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-brand-dark border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Background glow decorative details */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full radial-glow-bronze opacity-20 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex-1 flex flex-col gap-4 text-left">
            <div>
              <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
                Our Capabilities
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
              Bespoke Services for <span className="font-serif italic text-brand-gold font-normal">Modern Platforms</span>
            </h2>
          </div>
          <p className="flex-1 text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-md uppercase tracking-wider font-light md:mb-1">
            We build high-performance websites that combine modern design, speed, and AI-powered functionality to help you grow your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card key={idx} variant="glass" className="flex flex-col gap-6 text-left group">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-[9px] tracking-widest text-muted-foreground group-hover:border-brand-gold/30 group-hover:text-brand-gold transition-colors duration-300">
                    {service.badge}
                  </Badge>
                </div>
                
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-medium text-white tracking-wide">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-end">
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-brand-gold transition-colors duration-300">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
