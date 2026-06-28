import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-dark border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full radial-glow-gold opacity-30 blur-[100px] pointer-events-none" />
      <div className="absolute top-10 left-1/4 w-[300px] h-[300px] rounded-full radial-glow-bronze opacity-20 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-gold shadow-[0_0_8px_#D4AF37]" />
              <span className="text-lg font-bold tracking-widest text-white">
                METABRIX<span className="text-brand-gold font-normal">.AI</span>
              </span>
            </Link>
            <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-xs uppercase tracking-wider font-light">
              Custom digital design and high-end Web engineering. We shape the digital frontier for forward-thinking premium brands.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase">
              Quick Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className="text-xs tracking-wider uppercase text-muted-foreground hover:text-brand-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  Home
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-brand-gold" />
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-xs tracking-wider uppercase text-muted-foreground hover:text-brand-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  Portfolio
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-brand-gold" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-xs tracking-wider uppercase text-muted-foreground hover:text-brand-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  About
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-brand-gold" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-xs tracking-wider uppercase text-muted-foreground hover:text-brand-gold transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  Contact
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-brand-gold" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase">
              Agency Expertise
            </h3>
            <ul className="flex flex-col gap-3 text-xs tracking-wider uppercase text-muted-foreground/80 font-light">
              <li className="hover:text-white transition-colors">
                Premium Web Design
              </li>
              <li className="hover:text-white transition-colors">
                Next.js Architectures
              </li>
              <li className="hover:text-white transition-colors">
                AI Agent Integrations
              </li>
              <li className="hover:text-white transition-colors">
                Custom Systems
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xs font-semibold tracking-widest text-white uppercase">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Email</span>
                  <a
                    href="mailto:metabrixai.agency@gmail.com"
                    className="text-xs text-white hover:text-brand-gold transition-colors break-all"
                  >
                    metabrixai.agency@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Call</span>
                  <a
                    href="tel:+918169054938"
                    className="text-xs text-white hover:text-brand-gold transition-colors"
                  >
                    +91 8169054938
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4.5 w-4.5 text-brand-gold shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">HQ Location</span>
                  <span className="text-xs text-white uppercase tracking-wider">Mumbai, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60">
            © {currentYear} Metabrix AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-wider text-muted-foreground/60">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
