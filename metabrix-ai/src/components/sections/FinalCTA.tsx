"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useIntersectionObserver } from "@/hooks/useIntersection";

export const FinalCTA = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className={`py-28 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-brand-dark border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Centered Gold Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full radial-glow opacity-80 blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 glass-premium p-6 sm:p-16 rounded-3xl border border-brand-gold/15 text-center flex flex-col items-center gap-8 shadow-2xl">
        {/* Subtle Accent Tag */}
        <div>
          <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
            Let&apos;s Connect
          </Badge>
        </div>

        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
          Ready to grow your business with a <span className="font-serif italic text-brand-gold font-normal">premium website?</span>
        </h2>

        <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed max-w-xl font-light">
          Connect with our team to discuss your goals, get an architecture blueprint, and explore how we can help you attract more customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full justify-center group text-xs tracking-wider uppercase font-semibold">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-brand-dark" />
            </Button>
          </Link>
          <Link href="tel:+918169054938" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full justify-center text-xs tracking-wider uppercase font-semibold">
              Call Direct Desk
            </Button>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-2 text-[10px] text-muted-foreground/60 uppercase tracking-widest font-light mt-2">
          <Sparkles className="h-3 w-3 text-brand-gold" />
          <span>Replied in less than 12 hours</span>
        </div>
      </div>
    </section>
  );
};
