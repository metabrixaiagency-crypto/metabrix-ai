"use client";

import React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Aasim Shaikh"
            className="w-full bg-white/5 border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3 text-sm text-white placeholder-muted-foreground/60 outline-none transition-all duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g. client@company.com"
            className="w-full bg-white/5 border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3 text-sm text-white placeholder-muted-foreground/60 outline-none transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider" htmlFor="subject">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="e.g. Next.js Agency Website Project"
          className="w-full bg-white/5 border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3 text-sm text-white placeholder-muted-foreground/60 outline-none transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider" htmlFor="message">
          Message Details
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describe your design needs, features, or project timeline..."
          className="w-full bg-white/5 border border-white/10 focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/50 rounded-xl px-4 py-3 text-sm text-white placeholder-muted-foreground/60 outline-none transition-all duration-300 resize-none"
        />
      </div>

      <Button variant="primary" className="w-full py-3.5 group shadow-[0_0_15px_rgba(6,182,212,0.2)]">
        Send Message
        <Send className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
      </Button>
    </form>
  );
};
