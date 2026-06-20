"use client";

import React, { useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";
import { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { useIntersectionObserver } from "@/hooks/useIntersection";

const categoryFilters = [
  "All",
  "Business Websites",
  "AI Websites",
  "Landing Pages",
  "SaaS",
];

const projectsData: Project[] = [
  {
    title: "Sterling Corporate Portal",
    category: "Business Websites",
    client: "Sterling Legal Advisory",
    description: "A premium corporate presence representing a high-end advisory firm. Optimized for WCAG accessibility and client intake conversion.",
    fullDescription: "Sterling Legal Advisory commissioned us to design and build their online presence to reflect their position as a leading global legal advisory group. We engineered a bespoke Next.js corporate website featuring custom typography, responsive attorney profiles, and an integrated consultation booking pipeline. The platform adheres to strict accessibility standards and maintains sub-second page loads.",
    metrics: ["100% Core Web Vitals score", "+45% booking conversion rate", "Sub-second initial loads"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Hosting"],
    scope: ["Requirements mapping", "UX design wireframes", "Frontend development", "Search optimization"],
    link: "#",
  },
  {
    title: "Prime Autonomous Support",
    category: "AI Websites",
    client: "Prime Logistical Group",
    description: "An interactive website integrated with a custom cognitive LLM agent to log shipments, retrieve data, and resolve customer FAQs.",
    fullDescription: "Prime Logistical Group required a modern website integrated with cognitive AI to reduce support center overhead. We designed and built a Next.js interface incorporating a custom LLM assistant. The AI agent connects to internal logistical tracking APIs, permitting customers to fetch shipment statuses, update delivery locations, and resolve FAQs dynamically.",
    metrics: ["-38% support email volume", "82% query resolution rate", "Average response < 1.2s"],
    techStack: ["Next.js", "OpenAI SDK", "Vector Database", "Serverless Functions"],
    scope: ["Bespoke interface design", "LLM pipeline engineering", "API gateway connectivity", "Security audit"],
    link: "#",
  },
  {
    title: "Vantage Capital Landing Page",
    category: "Landing Pages",
    client: "Vantage Capital Group",
    description: "A conversion-optimized marketing layout featuring subtle gold highlights, micro-interactions, and secure CRM capture.",
    fullDescription: "Vantage Capital required a high-converting marketing landing page for the launch of their premium venture fund. We engineered a minimal, high-contrast, fully responsive interface optimized for speed and call-to-action visibility. The layout features subtle gold scroll highlights, micro-interactions, and secure connection to CRM APIs.",
    metrics: ["+5.8% conversion benchmark", "100% Page Speed rank", "Average session duration +2m"],
    techStack: ["Next.js", "Tailwind CSS", "HubSpot API", "Framer Transitions"],
    scope: ["Campaign layout wireframing", "Copy alignment", "Integration of CRM endpoints", "Speed optimizations"],
    link: "#",
  },
  {
    title: "Aura Logistics Control Hub",
    category: "SaaS",
    client: "Aura Logistics",
    description: "A custom SaaS command center showing freight tracking data streams, charts, and secure administrative controls.",
    fullDescription: "Aura Logistics needed a scalable web platform to visualize complex freight data streams. We developed a custom SaaS dashboard featuring premium graphite cards, real-time data streaming charts, and an administrative control panel. The system is protected by secure OAuth2 parameters and compiles statically for maximum performance.",
    metrics: ["Visualized 10k data points/sec", "Under 2.5s initial load time", "99.9% uptime validation"],
    techStack: ["Next.js", "TypeScript", "Recharts", "JSON Web Tokens"],
    scope: ["Architecture scoping", "Dashboard styling system", "Data stream aggregation", "Access controls"],
    link: "#",
  },
];

export const PortfolioShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  const openDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-brand-dark transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
          {/* Category Filter Navigation Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/5 pb-8">
            <span className="text-xs text-muted-foreground mr-4 flex items-center gap-1.5 font-mono uppercase tracking-widest hidden sm:inline-flex">
              <Filter className="h-3.5 w-3.5" />
              <span>Filters</span>
            </span>
            {categoryFilters.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-brand-gold text-brand-dark shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    : "bg-white/5 text-muted-foreground border border-white/5 hover:text-white hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid Layout of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[40vh]">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, idx) => (
                <Card
                  key={idx}
                  variant="glass"
                  onClick={() => openDetails(project)}
                  className="flex flex-col gap-6 text-left group cursor-pointer relative overflow-hidden active:scale-[0.99] select-none"
                >
                  {/* Subtle top gold reflection outline */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex justify-between items-start gap-4">
                    <span className="text-[10px] tracking-widest uppercase font-mono text-muted-foreground/80">
                      {project.client}
                    </span>
                    <Badge variant="primary" className="text-[9px] px-2.5 py-0.5 border-brand-gold/20 text-brand-gold">
                      {project.category}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-light tracking-wide text-white group-hover:text-brand-gold transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground/80 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Core metric badge */}
                  <div className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-xl text-left w-fit flex flex-col gap-0.5 mt-2">
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-mono">Highlight Outcome</span>
                    <span className="text-xs font-semibold text-brand-gold tracking-wide">{project.metrics[0]}</span>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground group-hover:text-brand-gold transition-colors duration-300">
                      View Case Study
                    </span>
                    <span className="h-8 w-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground group-hover:text-brand-gold group-hover:border-brand-gold/30 transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-20 text-muted-foreground/60 text-sm uppercase tracking-wider">
                No projects found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
