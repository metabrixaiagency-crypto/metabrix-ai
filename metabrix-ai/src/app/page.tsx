import React from "react";
import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Process } from "@/components/sections/Process";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "AI-Powered Websites Built to Grow Your Business",
  description: "Custom digital design and Next.js engineering for premium brands. We create fast, custom websites with practical AI integrations to generate more leads.",
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Section */}
      <Services />

      {/* 3. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 4. Process Section */}
      <Process />

      {/* 5. Featured Work Preview Section */}
      <FeaturedWork />

      {/* 6. Testimonials Section */}
      <Testimonials />

      {/* 7. Final CTA Section */}
      <FinalCTA />
    </>
  );
}
