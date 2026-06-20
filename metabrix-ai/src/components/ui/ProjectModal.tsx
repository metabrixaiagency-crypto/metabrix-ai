"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { Project } from "@/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md animate-fade-in"
    >
      {/* Click outside backdrop container */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-premium rounded-3xl border border-brand-gold/15 shadow-2xl p-5 sm:p-10 text-left flex flex-col gap-6 sm:gap-8 relative z-10 animate-scale-up scrollbar-thin">
        {/* Close trigger button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 h-8 w-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-muted-foreground hover:text-brand-gold hover:border-brand-gold/25 transition-all duration-300 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Block */}
        <div className="flex flex-col gap-3 pr-8">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-widest uppercase font-mono text-muted-foreground/80">
              {project.client}
            </span>
            <Badge variant="primary" className="text-[9px] px-2.5 py-0.5 border-brand-gold/20 text-brand-gold">
              {project.category}
            </Badge>
          </div>
          <h2 id="modal-title" className="text-2xl sm:text-4xl font-light tracking-wide text-white leading-tight">
            {project.title}
          </h2>
        </div>

        {/* Detailed Copy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Description */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                Project Overview
              </h4>
              <p className="text-sm text-muted-foreground/90 leading-relaxed font-light whitespace-pre-line">
                {project.fullDescription}
              </p>
            </div>

            {/* Scope Lists */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                Project Scope
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground/90 font-light">
                {project.scope.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Metrics & Tech lists */}
          <div className="flex flex-col gap-6 md:col-span-1 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 pl-0 md:pl-8">
            {/* Key Metrics */}
            <div className="flex flex-col gap-4">
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                Outcomes
              </h4>
              <div className="flex flex-col gap-3">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/5 px-4 py-2.5 rounded-xl text-left flex flex-col gap-0.5">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Metric</span>
                    <span className="text-sm font-semibold text-brand-gold tracking-wide">{metric}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs uppercase tracking-wider text-white font-semibold">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] font-mono tracking-wider bg-brand-dark border border-white/5 text-muted-foreground px-2 py-0.5 rounded uppercase"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center w-full">
          <span className="text-[10px] tracking-widest uppercase font-mono text-muted-foreground/60">
            METABRIX AI • CASE STUDIES
          </span>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center sm:justify-end">
            <Button variant="ghost" size="sm" onClick={onClose} className="w-full sm:w-auto text-xs tracking-wider uppercase">
              Close Details
            </Button>
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="sm" className="w-full justify-center group text-xs tracking-wider uppercase font-semibold">
                  Visit Live Site
                  <ExternalLink className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
