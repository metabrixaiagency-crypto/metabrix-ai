import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "glass" | "solid";
}

export const Card = ({ children, className, variant = "glass", ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl transition-all duration-300",
        {
          "glass-card p-5 sm:p-6 md:p-8": variant === "glass",
          "bg-brand-graphite border border-white/5 p-5 sm:p-6 md:p-8": variant === "solid",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
