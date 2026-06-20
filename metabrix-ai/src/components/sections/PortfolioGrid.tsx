import React from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const PortfolioGrid = () => {
  const projects = [
    {
      title: "Vortex Analytics",
      category: "SaaS Platform",
      description: "High-performance web architecture integrating LLM analytics engines.",
    },
    {
      title: "Aura Luxury",
      category: "E-Commerce",
      description: "Immersive 3D/headless commerce experience optimized for modern devices.",
    },
  ];

  return (
    <div className="w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((proj, idx) => (
        <Card key={idx} variant="glass" className="text-left flex flex-col gap-4">
          <div>
            <Badge variant="primary">{proj.category}</Badge>
          </div>
          <h3 className="text-xl font-semibold text-white">{proj.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {proj.description}
          </p>
        </Card>
      ))}
    </div>
  );
};
