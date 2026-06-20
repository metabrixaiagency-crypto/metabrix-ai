import React from "react";
import { Metadata } from "next";
import { Send } from "lucide-react";
import { ContactLayout } from "@/components/sections/ContactLayout";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Web Architecture Blueprint",
  description: "Connect with Metabrix AI. Request a free custom website mockup and consultation chat. Reach out via email, phone, or WhatsApp.",
};

export default function ContactPage() {
  return (
    <div className="flex-grow bg-brand-dark flex flex-col pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden text-center flex flex-col items-center">
        {/* Ambient gold glow backdrops */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-80 blur-[130px] pointer-events-none" />

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-brand-gold/25 text-[10px] text-brand-gold uppercase tracking-widest font-semibold">
            <Send className="h-3.5 w-3.5 text-brand-gold" />
            <span>Connect</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-white leading-tight font-sans">
            Connect With Our <span className="font-serif italic text-brand-gold font-normal">Agency</span>
          </h1>

          <p className="text-xs sm:text-sm text-muted-foreground/80 max-w-xl leading-relaxed uppercase tracking-wider font-light">
            We are here to discuss your goals, scope your website architectures, and help you attract more customers.
          </p>
        </div>
      </section>

      {/* Interactive Contact Form & Options layout */}
      <ContactLayout />
    </div>
  );
}
