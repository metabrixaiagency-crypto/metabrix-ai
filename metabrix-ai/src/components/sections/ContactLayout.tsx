"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Phone, Send, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { useIntersectionObserver } from "@/hooks/useIntersection";

export const ContactLayout = () => {
  const [optionsRef, optionsVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [formRef, formVisible] = useIntersectionObserver({ threshold: 0.05 });
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission validation
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        businessName: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <div className="flex flex-col w-full bg-brand-dark">
      {/* 1. Contact Options Section (3 Interactive Cards) */}
      <section
        ref={optionsRef as React.RefObject<HTMLDivElement>}
        className={`py-12 px-4 sm:px-6 md:px-12 relative overflow-hidden transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          optionsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Email */}
          <Card variant="glass" className="flex flex-col gap-6 text-left group">
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-300">
                <Mail className="h-5 w-5" />
              </div>
              <Badge variant="outline" className="text-[9px] tracking-widest text-muted-foreground">
                Email Us
              </Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white tracking-wide">Write to our Desk</h3>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                For detailed project proposals, blueprints, or RFPs.
              </p>
              <span className="text-xs text-white font-medium font-mono mt-1 select-all">
                metabrixai.agency@gmail.com
              </span>
            </div>
            <div className="mt-auto pt-4 border-t border-white/5">
              <a href="mailto:metabrixai.agency@gmail.com" className="w-full">
                <Button variant="glass" size="sm" className="w-full group/btn text-[10px] tracking-widest uppercase font-semibold">
                  Open Email Client
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform text-brand-gold" />
                </Button>
              </a>
            </div>
          </Card>

          {/* Card 2: WhatsApp */}
          <Card variant="glass" className="flex flex-col gap-6 text-left group">
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-300">
                <MessageSquare className="h-5 w-5" />
              </div>
              <Badge variant="outline" className="text-[9px] tracking-widest text-muted-foreground">
                WhatsApp
              </Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white tracking-wide">Instant Message Chat</h3>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                Speak directly with an engineer for quick questions or feedback.
              </p>
              <span className="text-xs text-white font-medium font-mono mt-1">
                +91 8169054938
              </span>
            </div>
            <div className="mt-auto pt-4 border-t border-white/5">
              <a href="https://wa.me/918169054938" target="_blank" rel="noreferrer" className="w-full">
                <Button variant="glass" size="sm" className="w-full group/btn text-[10px] tracking-widest uppercase font-semibold">
                  Chat on WhatsApp
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform text-brand-gold" />
                </Button>
              </a>
            </div>
          </Card>

          {/* Card 3: Phone */}
          <Card variant="glass" className="flex flex-col gap-6 text-left group">
            <div className="flex justify-between items-start">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold/10 group-hover:border-brand-gold/30 transition-all duration-300">
                <Phone className="h-5 w-5" />
              </div>
              <Badge variant="outline" className="text-[9px] tracking-widest text-muted-foreground">
                Call Us
              </Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-white tracking-wide">Direct Line Call</h3>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                Discuss timeline variables and service scoping immediately.
              </p>
              <span className="text-xs text-white font-medium font-mono mt-1">
                +91 8169054938
              </span>
            </div>
            <div className="mt-auto pt-4 border-t border-white/5">
              <a href="tel:+918169054938" className="w-full">
                <Button variant="glass" size="sm" className="w-full group/btn text-[10px] tracking-widest uppercase font-semibold">
                  Call Phone Dialer
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform text-brand-gold" />
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section
        ref={formRef as React.RefObject<HTMLDivElement>}
        className={`py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden border-t border-white/5 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Glow ambient background lights */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full radial-glow opacity-80 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Trust / Blueprint lifecycle information */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left select-none lg:sticky lg:top-32">
            <div className="flex flex-col gap-4">
              <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1 w-fit">
                Client Blueprint
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
                What Happens <span className="font-serif italic text-brand-gold font-normal">Next?</span>
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
                We utilize a highly structured, transparent scoping pipeline. Fill out the request form to start your project consultation lifecycle.
              </p>
            </div>

            {/* Lifecycle Steps */}
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-xs font-semibold text-brand-gold shrink-0">
                  1
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-white tracking-wide">Discovery & Triage</h4>
                  <p className="text-xs text-muted-foreground/75 leading-relaxed font-light">
                    Our team reviews your details and responds within 12 hours to schedule a 15-minute scoping call.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-xs font-semibold text-brand-gold shrink-0">
                  2
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-white tracking-wide">Technical Blueprint</h4>
                  <p className="text-xs text-muted-foreground/75 leading-relaxed font-light">
                    We deliver a custom architecture roadmap, design mockups, and layout blueprints tailored for your business.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-8 w-8 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-xs font-semibold text-brand-gold shrink-0">
                  3
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-sm font-semibold text-white tracking-wide">Fixed Price Delivery</h4>
                  <p className="text-xs text-muted-foreground/75 leading-relaxed font-light">
                    Receive a comprehensive, fixed price schedule with defined milestones, detailed code standards, and clear launch timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intake Form */}
          <div className="lg:col-span-7 w-full glass p-5 sm:p-12 rounded-3xl border border-brand-gold/15 shadow-2xl">
            <div className="flex flex-col items-center gap-4 text-center mb-10 sm:items-start sm:text-left">
              <div>
                <Badge variant="primary" className="border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[9px] tracking-widest px-3 py-1">
                  Project Intake
                </Badge>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight font-sans">
                Request an Architecture <span className="font-serif italic text-brand-gold font-normal">Blueprint</span>
              </h3>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light uppercase tracking-wider">
                Outline your goals below and we will contact you shortly with estimates.
              </p>
            </div>

            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Grid Layout Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-[10px] font-semibold uppercase text-muted-foreground/80 tracking-wider" htmlFor="name">
                    Full Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aasim Shaikh"
                    className="w-full bg-brand-dark/50 border border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-muted-foreground/50 outline-none transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-[10px] font-semibold uppercase text-muted-foreground/80 tracking-wider" htmlFor="businessName">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Metabrix AI"
                    className="w-full bg-brand-dark/50 border border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-muted-foreground/50 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-[10px] font-semibold uppercase text-muted-foreground/80 tracking-wider" htmlFor="email">
                    Email Address <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. client@company.com"
                    className="w-full bg-brand-dark/50 border border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-muted-foreground/50 outline-none transition-all duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-[10px] font-semibold uppercase text-muted-foreground/80 tracking-wider" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 8169054938"
                    className="w-full bg-brand-dark/50 border border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-muted-foreground/50 outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label className="text-[10px] font-semibold uppercase text-muted-foreground/80 tracking-wider" htmlFor="projectType">
                  Project Type <span className="text-brand-gold">*</span>
                </label>
                <select
                  id="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/95 border border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-muted-foreground/50 outline-none transition-all duration-300 cursor-pointer"
                >
                  <option value="" disabled>Select project type...</option>
                  <option value="business-website">Business Website</option>
                  <option value="ai-website">AI Powered Website</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="saas">SaaS Platform</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label className="text-[10px] font-semibold uppercase text-muted-foreground/80 tracking-wider" htmlFor="message">
                  Message Details <span className="text-brand-gold">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your design needs, features, or project timeline..."
                  className="w-full bg-brand-dark/50 border border-white/10 focus:border-brand-gold/50 focus:ring-1 focus:ring-brand-gold/50 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-muted-foreground/50 outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submission Alerts */}
              {isSubmitted && (
                <div className="bg-brand-gold/10 border border-brand-gold/20 p-4 rounded-xl text-left flex items-start gap-3 text-brand-gold animate-fade-in">
                  <Sparkles className="h-4 w-4 shrink-0 mt-0.5" />
                  <div className="text-xs leading-normal">
                    <span className="font-semibold block uppercase tracking-wider mb-0.5">Message Sent</span>
                    Thank you! Our engineering team will review your scope and follow up within 12 hours.
                  </div>
                </div>
              )}

              <Button variant="primary" type="submit" className="w-full py-4 group shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                Submit Request
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform text-brand-dark" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
