import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export const Badge = ({ children, className, variant = "primary", ...props }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase",
        {
          "bg-brand-gold-muted/10 text-brand-gold border border-brand-gold/20 shadow-[0_0_10px_rgba(212,175,55,0.05)]":
            variant === "primary",
          "bg-white/5 text-foreground border border-white/10": variant === "secondary",
          "border border-white/10 text-muted-foreground hover:text-white transition-colors duration-200":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
