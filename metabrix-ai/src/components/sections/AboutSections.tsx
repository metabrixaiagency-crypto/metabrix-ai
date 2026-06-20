"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersection";

export const AboutSections = () => {
  const [introRef, introVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [missionRef, missionVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [approachRef, approachVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [whyRef, whyVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [ctaRef, ctaVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <div className="flex flex-col w-full bg-brand-dark">
      {/* 1. Agency Introduction Section */}
      <section
        ref={introRef as React.RefObject<HTMLDivElement>}
        className={`py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          introVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Glow ambient background lights */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full radial-glow opacity-60 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4 text-left">
            <div>
              <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
                About Metabrix AI
              </Badge>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
              Bespoke Web Design & <span className="font-serif italic text-brand-gold font-normal">AI Engineering</span>
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6 text-left text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-light">
            <p>
              Metabrix AI is a boutique digital agency based in Mumbai, India. We specialize in designing and engineering premium Next.js websites that combine visual elegance, fast performance, and practical artificial intelligence integrations.
            </p>
            <p>
              We believe a website should be more than a static digital brochure. Our team works with growing businesses and corporate groups to build platforms that establish authority, optimize operations, and turn visitors into client leads. By refusing off-the-shelf templates, we ensure every asset we deploy is distinct and custom-coded.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Mission Section */}
      <section
        ref={missionRef as React.RefObject<HTMLDivElement>}
        className={`py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          missionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card variant="glass" className="flex flex-col gap-4 text-left">
            <Compass className="h-6 w-6 text-brand-gold" />
            <h3 className="text-xl font-medium text-white tracking-wide">Aesthetic Integrity</h3>
            <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
              We design custom visual identities reflecting authority and credibility. Every user interface is constructed from the ground up to match our clients&apos; specific brand positioning.
            </p>
          </Card>
          <Card variant="glass" className="flex flex-col gap-4 text-left">
            <ShieldCheck className="h-6 w-6 text-brand-gold" />
            <h3 className="text-xl font-medium text-white tracking-wide">Performance First</h3>
            <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
              We build using Next.js to ensure fast page speed, SEO-friendly site structures, and robust security parameters. Clean, lightweight code is central to our engineering standard.
            </p>
          </Card>
          <Card variant="glass" className="flex flex-col gap-4 text-left">
            <Sparkles className="h-6 w-6 text-brand-gold" />
            <h3 className="text-xl font-medium text-white tracking-wide">Practical AI Utility</h3>
            <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
              We integrate operational AI solutions—such as automated client onboarding logic or cognitive search tools—to help streamline backend processes and reduce overhead.
            </p>
          </Card>
        </div>
      </section>

      {/* 3. Our Approach Section */}
      <section
        ref={approachRef as React.RefObject<HTMLDivElement>}
        className={`py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          approachVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Glow ambient background lights */}
        <div className="absolute bottom-10 right-10 w-[250px] h-[250px] rounded-full radial-glow-bronze opacity-20 blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-left max-w-xl">
            <div>
              <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
                Execution Model
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white leading-tight font-sans">
              Our Professional <span className="font-serif italic text-brand-gold font-normal">Approach</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground/80 font-light">
              We utilize a collaborative, phase-based framework to ensure transparency and quality delivery at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <div className="flex flex-col gap-3 p-4 border-l border-brand-gold/30 text-left">
              <span className="text-xs font-semibold font-mono text-brand-gold/50">PHASE 01</span>
              <h4 className="text-base font-semibold text-white tracking-wide">Consultation & Scope</h4>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                We outline your business objectives, study requirements, and map out a clear technical blueprint.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-4 border-l border-brand-gold/30 text-left">
              <span className="text-xs font-semibold font-mono text-brand-gold/50">PHASE 02</span>
              <h4 className="text-base font-semibold text-white tracking-wide">Interface Design</h4>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                Our designer constructs custom page layouts focused on typography hierarchy and clean spacing.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-4 border-l border-brand-gold/30 text-left">
              <span className="text-xs font-semibold font-mono text-brand-gold/50">PHASE 03</span>
              <h4 className="text-base font-semibold text-white tracking-wide">Core Development</h4>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                We code using Next.js and TypeScript, securing fast response speeds and responsive styling support.
              </p>
            </div>
            <div className="flex flex-col gap-3 p-4 border-l border-brand-gold/30 text-left">
              <span className="text-xs font-semibold font-mono text-brand-gold/50">PHASE 04</span>
              <h4 className="text-base font-semibold text-white tracking-wide">Integration & Launch</h4>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                We deploy the operational AI components, run final tests, and host the platform on stable cloud structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Businesses Choose Metabrix AI Section */}
      <section
        ref={whyRef as React.RefObject<HTMLDivElement>}
        className={`py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/5 bg-white/[0.005] transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          whyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6 text-left">
            <div>
              <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
                Value Proposition
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white leading-tight font-sans">
              Designed for <span className="font-serif italic text-brand-gold font-normal">Business Growth</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light max-w-md">
              Businesses collaborate with Metabrix AI because we focus directly on speed, functional design, and conversion layouts that establish online authority and attract customers.
            </p>

            <ul className="flex flex-col gap-4 mt-4 text-xs text-muted-foreground font-light">
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <Star className="h-3 w-3 fill-brand-gold text-brand-gold" />
                </div>
                <span>Bespoke code architectures deliver sub-second initial load speeds.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0">
                  <Users className="h-3 w-3 text-brand-gold" />
                </div>
                <span>Conversion layouts designed to convert digital traffic into client leads.</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Card variant="solid" className="p-6 rounded-2xl flex flex-col justify-center items-start gap-1">
              <span className="text-2xl font-semibold text-brand-gold">100%</span>
              <span className="text-xs text-white font-medium tracking-wide">Bespoke Codebase</span>
              <span className="text-[10px] text-muted-foreground leading-normal font-light">No generic templates or builders.</span>
            </Card>
            <Card variant="solid" className="p-6 rounded-2xl flex flex-col justify-center items-start gap-1">
              <span className="text-2xl font-semibold text-brand-gold">Sub-1s</span>
              <span className="text-xs text-white font-medium tracking-wide">Initial Load Speed</span>
              <span className="text-[10px] text-muted-foreground leading-normal font-light">Next.js performance structures.</span>
            </Card>
            <Card variant="solid" className="p-6 rounded-2xl flex flex-col justify-center items-start gap-1">
              <span className="text-2xl font-semibold text-brand-gold">Practical AI</span>
              <span className="text-xs text-white font-medium tracking-wide">Operational Intake</span>
              <span className="text-[10px] text-muted-foreground leading-normal font-light">Automate support & client query logs.</span>
            </Card>
            <Card variant="solid" className="p-6 rounded-2xl flex flex-col justify-center items-start gap-1">
              <span className="text-2xl font-semibold text-brand-gold">Responsive</span>
              <span className="text-xs text-white font-medium tracking-wide">Mobile Optimization</span>
              <span className="text-[10px] text-muted-foreground leading-normal font-light">Clean interface setups on any layout.</span>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Final CTA Section */}
      <section
        ref={ctaRef as React.RefObject<HTMLDivElement>}
        className={`py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-60 blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 glass p-6 sm:p-14 rounded-3xl border border-brand-gold/15 text-center flex flex-col items-center gap-6 shadow-2xl">
          <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
            Let&apos;s Build
          </Badge>
          
          <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-white leading-tight font-sans">
            Interested in working with <span className="font-serif italic text-brand-gold font-normal">Metabrix AI?</span>
          </h2>
          
          <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-lg font-light">
            Contact our consultation team to map out your site layout objectives, get a project estimate, and start growing your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full justify-center group text-xs tracking-wider uppercase font-semibold">
                Start Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-brand-dark" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full justify-center text-xs tracking-wider uppercase font-semibold">
                Explore Selected Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
