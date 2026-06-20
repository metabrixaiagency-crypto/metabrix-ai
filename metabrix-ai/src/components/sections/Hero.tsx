import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Smartphone, Search, Target, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export const Hero = () => {
  return (
    <div className="relative py-20 md:py-32 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col justify-center min-h-[95vh] w-full">
      {/* Background Depth Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      {/* Top spotlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_75%)] pointer-events-none" />
      {/* Left side ambient glow */}
      <div className="absolute top-1/4 left-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.05),transparent_60%)] blur-[120px] pointer-events-none animate-pulse duration-[10s]" />
      {/* Right side luxury ambient glow */}
      <div className="absolute top-1/3 right-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(176,141,87,0.09),transparent_60%)] blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-center lg:text-left">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-7 max-w-2xl mx-auto lg:mx-0">
            {/* Subtle Luxury Tag */}
            <div>
              <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 py-1.5 px-4 rounded-full flex items-center gap-2 tracking-widest text-[10px] text-brand-gold">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold animate-pulse" />
                <span>Bespoke Digital Design & Dev</span>
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] xl:text-[3.15rem] font-light tracking-tight text-white leading-[1.2] font-sans">
              AI-Powered Websites <br className="hidden md:inline" />
              <span className="font-serif italic text-brand-gold font-normal">Built to Grow</span> Your Business
            </h1>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground/90 max-w-lg lg:max-w-xl leading-relaxed font-light">
              We design and develop premium websites that combine modern design, performance, and AI-powered functionality to help businesses attract more customers and generate more leads.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-6 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full justify-center group text-xs tracking-wider uppercase font-semibold bg-gradient-to-r from-[#D4AF37] via-[#DFBA4E] to-[#B08D57] hover:from-[#E8C86B] hover:to-[#C5A028] text-brand-dark border border-brand-gold/30 hover:border-brand-gold/50 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                >
                  Grow Your Business
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform text-brand-dark duration-300" />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-center text-xs tracking-wider uppercase font-semibold border border-brand-gold/20 bg-brand-dark/30 backdrop-blur-md hover:border-brand-gold/60 hover:bg-brand-gold/[0.04] text-white hover:shadow-[0_0_20px_rgba(212,175,55,0.06)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Visual Element */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center mt-12 lg:mt-0">
            {/* Ambient gold glow behind the mockups */}
            <div className="absolute w-[400px] h-[400px] rounded-full radial-glow opacity-80 blur-[90px] pointer-events-none" />

            {/* Desktop Mock Browser */}
            <div className="w-full max-w-[460px] bg-[#111215]/90 backdrop-blur-md border border-brand-gold/15 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative animate-float-gentle overflow-hidden z-10">
              
              {/* Browser Header Bar */}
              <div className="flex items-center gap-1.5 mb-4 border-b border-brand-gold/5 pb-3">
                {/* Gold Styled Mac Dots */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]/20" />
                <div className="flex-1 mx-4 bg-brand-dark/60 border border-brand-gold/5 rounded-md px-3 py-0.5 text-[9px] text-muted-foreground/60 flex items-center justify-between">
                  <span className="truncate">metabrix.ai/portfolio/aurum-estate</span>
                </div>
              </div>

              {/* Inner Website Canvas Mockup (Luxury Client Site) */}
              <div className="w-full rounded-xl bg-gradient-to-br from-[#16171A] to-[#0D0D0F] border border-brand-gold/5 p-4 flex flex-col gap-4 min-h-[260px] relative overflow-hidden">
                
                {/* Grid Overlay for premium feel */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                {/* Mock Website Nav */}
                <div className="flex justify-between items-center relative z-10 pb-2 border-b border-white/5">
                  <span className="text-[10px] tracking-[0.2em] font-serif font-light text-brand-gold">A U R U M</span>
                  <div className="flex gap-2">
                    <div className="w-6 h-1 rounded-full bg-white/10" />
                    <div className="w-8 h-1 rounded-full bg-white/10" />
                    <div className="w-5 h-1 rounded-full bg-brand-gold/30" />
                  </div>
                </div>

                {/* Mock Website Hero */}
                <div className="flex flex-col gap-2 relative z-10 mt-1">
                  <span className="text-[7px] uppercase tracking-widest text-[#B08D57]">Exquisite Living</span>
                  <h3 className="font-serif text-base sm:text-lg text-white font-light leading-snug">
                    Bespoke Residences <br />
                    <span className="italic text-brand-gold">Designed for the Few</span>
                  </h3>
                </div>

                {/* Mock Client UI Showcase Grid */}
                <div className="grid grid-cols-12 gap-3 mt-1 relative z-10">
                  {/* Left content block */}
                  <div className="col-span-7 flex flex-col gap-2">
                    <div className="w-full h-1.5 rounded bg-white/5" />
                    <div className="w-5/6 h-1.5 rounded bg-white/5" />
                    <div className="w-2/3 h-1.5 rounded bg-white/5" />
                    
                    {/* Embedded interactive stat bar */}
                    <div className="mt-2 bg-brand-dark/80 border border-brand-gold/10 rounded-lg p-2 flex items-center justify-between">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[7px] text-muted-foreground uppercase tracking-widest">Growth Rate</span>
                        <span className="text-[10px] font-semibold text-white">+340%</span>
                      </div>
                      <div className="text-[7px] text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded font-medium">Active</div>
                    </div>
                  </div>

                  {/* Right visual placeholder block */}
                  <div className="col-span-5 relative h-20 rounded-lg overflow-hidden border border-brand-gold/10 bg-brand-dark/50">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-gold/5 to-brand-gold/15" />
                    {/* Geometric grid mesh visual */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-10 h-10 opacity-30 text-brand-gold" viewBox="0 0 100 100">
                        <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="currentColor" strokeWidth="1" />
                        <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Overlapping Mobile Mockup */}
            <div className="absolute -bottom-6 -right-2 lg:-right-4 w-[160px] h-[260px] bg-[#0D0D0F] border-2 border-brand-gold/20 rounded-[24px] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-20 animate-float-drift overflow-hidden">
              
              {/* Speaker Notch */}
              <div className="w-12 h-3.5 bg-brand-dark border-b border-brand-gold/5 absolute top-0 left-1/2 -translate-x-1/2 rounded-b-xl flex items-center justify-center gap-1">
                <div className="w-5 h-0.5 rounded-full bg-white/10" />
                <div className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
              </div>

              {/* Mobile Screen Container */}
              <div className="w-full h-full rounded-[16px] bg-gradient-to-b from-[#111215] to-[#0D0D0F] border border-brand-gold/5 pt-4 px-2 flex flex-col gap-3 overflow-hidden">
                
                {/* Mobile Header */}
                <div className="flex justify-between items-center pb-1.5 border-b border-white/5">
                  <span className="text-[7px] tracking-[0.15em] font-serif font-light text-brand-gold">AURUM</span>
                  <div className="w-3 h-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                    <div className="w-1.5 h-0.5 bg-brand-gold" />
                  </div>
                </div>

                {/* Mobile Content Stack */}
                <div className="flex flex-col gap-2 mt-1">
                  <div className="h-10 w-full rounded-md border border-brand-gold/10 bg-brand-dark/40 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-gold/5 to-brand-gold/10" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-25 text-brand-gold scale-75">
                      <svg className="w-10 h-10" viewBox="0 0 100 100">
                        <polygon points="50,10 90,50 50,90 10,50" fill="none" stroke="currentColor" strokeWidth="1" />
                      </svg>
                    </div>
                  </div>
                  
                  <span className="text-[8px] font-serif italic text-white/90">Designed for the Few</span>
                  
                  <div className="flex flex-col gap-1">
                    <div className="w-full h-1 rounded bg-white/10" />
                    <div className="w-11/12 h-1 rounded bg-white/10" />
                    <div className="w-4/5 h-1 rounded bg-white/10" />
                  </div>
                </div>

                {/* Mobile Responsive Pass Badge */}
                <div className="mt-auto mb-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-lg p-1.5 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                  <span className="text-[7px] tracking-wide text-brand-gold uppercase font-medium">Responsive View</span>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Trusted By Businesses Bar */}
        <div className="mt-24 lg:mt-32 w-full border-t border-brand-gold/10 pt-10">
          <p className="text-[10px] uppercase tracking-[0.25em] text-brand-gold/70 text-center mb-8 font-semibold">
            Trusted By Businesses
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 max-w-5xl mx-auto px-4">
            
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-brand-graphite/40 backdrop-blur-sm border border-brand-gold/10 justify-center group hover:border-brand-gold/30 hover:bg-brand-gold/[0.02] hover:shadow-[0_4px_20px_rgba(212,175,55,0.04)] hover:-translate-y-0.5 transition-all duration-300">
              <Zap className="h-4.5 w-4.5 text-brand-gold/80 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">Fast Delivery</span>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-brand-graphite/40 backdrop-blur-sm border border-brand-gold/10 justify-center group hover:border-brand-gold/30 hover:bg-brand-gold/[0.02] hover:shadow-[0_4px_20px_rgba(212,175,55,0.04)] hover:-translate-y-0.5 transition-all duration-300">
              <Smartphone className="h-4.5 w-4.5 text-brand-gold/80 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">Mobile Responsive</span>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-brand-graphite/40 backdrop-blur-sm border border-brand-gold/10 justify-center group hover:border-brand-gold/30 hover:bg-brand-gold/[0.02] hover:shadow-[0_4px_20px_rgba(212,175,55,0.04)] hover:-translate-y-0.5 transition-all duration-300">
              <Search className="h-4.5 w-4.5 text-brand-gold/80 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">SEO Optimized</span>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-brand-graphite/40 backdrop-blur-sm border border-brand-gold/10 justify-center group hover:border-brand-gold/30 hover:bg-brand-gold/[0.02] hover:shadow-[0_4px_20px_rgba(212,175,55,0.04)] hover:-translate-y-0.5 transition-all duration-300">
              <Cpu className="h-4.5 w-4.5 text-brand-gold/80 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">AI Powered</span>
            </div>

            <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-brand-graphite/40 backdrop-blur-sm border border-brand-gold/10 justify-center group hover:border-brand-gold/30 hover:bg-brand-gold/[0.02] hover:shadow-[0_4px_20px_rgba(212,175,55,0.04)] hover:-translate-y-0.5 transition-all duration-300 col-span-2 md:col-span-1">
              <Target className="h-4.5 w-4.5 text-brand-gold/80 group-hover:text-brand-gold group-hover:scale-110 transition-all duration-300" />
              <span className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">Conversion Focused</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

