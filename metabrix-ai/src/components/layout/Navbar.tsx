"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile navigation on route change
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Handle transparent to glass transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b",
        isScrolled
          ? "glass py-4 shadow-lg border-white/5"
          : "bg-transparent py-6 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-gold"></span>
          </span>
          <span className="text-lg font-bold tracking-widest text-white group-hover:text-brand-gold transition-colors duration-300">
            METABRIX<span className="text-brand-gold font-normal">.AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-xs font-semibold tracking-wider uppercase transition-colors duration-300 py-1.5",
                  isActive
                    ? "text-brand-gold"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-brand-gold rounded-full shadow-[0_0_8px_#D4AF37]"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button variant="glass" size="sm" className="group text-xs tracking-wider uppercase font-semibold">
              Get a free website plan
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-brand-gold" />
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-brand-gold focus:outline-none p-1.5 rounded-lg border border-white/5 bg-white/5 transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer (Glassmorphic) */}
      <div
        aria-hidden={!isOpen}
        className={cn(
          "fixed inset-0 top-[65px] z-40 bg-brand-dark/98 backdrop-blur-2xl md:hidden border-t border-white/5 transition-all duration-500 ease-in-out flex flex-col justify-between px-6 py-10",
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xl font-medium tracking-wide uppercase transition-all duration-300 flex items-center justify-between group",
                  isActive ? "text-brand-gold pl-2" : "text-muted-foreground hover:text-white"
                )}
              >
                <span>{link.label}</span>
                <span
                  className={cn(
                    "h-[1px] flex-grow mx-4 bg-white/5 group-hover:bg-brand-gold/25 transition-colors duration-300",
                    isActive && "bg-brand-gold/20"
                  )}
                />
                <ArrowUpRight
                  className={cn(
                    "h-4 w-4 text-white/30 group-hover:text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300",
                    isActive && "text-brand-gold"
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-6">
          <Link href="/contact" className="w-full">
            <Button variant="primary" className="w-full justify-center group text-sm tracking-wider uppercase font-semibold py-3">
              Get a free website plan
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-brand-dark" />
            </Button>
          </Link>
          <div className="text-center text-xs tracking-widest uppercase text-muted-foreground/60">
            © 2026 Metabrix AI. Professional Web Design.
          </div>
        </div>
      </div>
    </header>
  );
};
