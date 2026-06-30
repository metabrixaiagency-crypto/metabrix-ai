import React from "react";
import { Metadata } from "next";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Metabrix AI",
  description: "Thank you for reaching out to Metabrix AI. We will get back to you within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="flex-grow bg-brand-dark flex flex-col justify-center items-center py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden min-h-[70vh] animate-fade-in">
      {/* Ambient gold glow backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full radial-glow opacity-80 blur-[130px] pointer-events-none" />

      <div className="max-w-xl mx-auto flex flex-col items-center text-center gap-6 relative z-10">
        <div className="h-12 w-12 rounded-full bg-brand-gold/10 border border-brand-gold/25 flex items-center justify-center text-brand-gold">
          <CheckCircle className="h-6 w-6" />
        </div>

        <h1 className="text-3xl sm:text-5xl font-light tracking-tight text-white leading-tight font-sans">
          Thank You for <span className="font-serif italic text-brand-gold font-normal">Reaching Out</span>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed max-w-md font-light">
          We&apos;ll get back to you within 24 hours.
        </p>

        <div className="mt-4">
          <Link href="/">
            <Button variant="primary" className="group text-xs tracking-wider uppercase font-semibold">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
