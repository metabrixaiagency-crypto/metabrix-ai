import React from "react";
import { Card } from "@/components/ui/Card";

export const AboutContent = () => {
  const stats = [
    { label: "Runtime Speed", value: "99.9%" },
    { label: "Projects Launched", value: "40+" },
    { label: "Average Page Rank", value: "5x" },
    { label: "AI Agent Support", value: "24/7" },
  ];

  return (
    <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <Card key={idx} variant="glass" className="p-6 rounded-2xl flex flex-col justify-center items-center">
          <div className="text-3xl font-extrabold text-white">{stat.value}</div>
          <div className="text-xs text-muted-foreground mt-1 text-center">{stat.label}</div>
        </Card>
      ))}
    </div>
  );
};
