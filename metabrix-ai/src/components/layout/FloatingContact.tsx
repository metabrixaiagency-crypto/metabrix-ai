"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";

export const FloatingContact = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Delay entrance animation slightly for visual appeal
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-45 flex flex-col gap-3 animate-fade-in pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918169054938"
        target="_blank"
        rel="noreferrer"
        className="h-12 w-12 rounded-full bg-brand-graphite border border-brand-gold/15 text-brand-gold hover:text-brand-dark hover:bg-brand-gold hover:border-brand-gold flex items-center justify-center shadow-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />
        
        {/* Tooltip */}
        <span className="absolute left-14 bg-brand-graphite border border-white/5 text-[10px] uppercase tracking-wider text-white px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md whitespace-nowrap">
          WhatsApp Chat
        </span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+918169054938"
        className="h-12 w-12 rounded-full bg-brand-graphite border border-brand-gold/15 text-brand-gold hover:text-brand-dark hover:bg-brand-gold hover:border-brand-gold flex items-center justify-center shadow-xl hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
        aria-label="Call Metabrix AI"
      >
        <Phone className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" />

        {/* Tooltip */}
        <span className="absolute left-14 bg-brand-graphite border border-white/5 text-[10px] uppercase tracking-wider text-white px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md whitespace-nowrap">
          Direct Call
        </span>
      </a>
    </div>
  );
};
