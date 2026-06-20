import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.96] outline-none focus:ring-2 focus:ring-brand-gold/50 focus:ring-offset-2 focus:ring-offset-brand-dark disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          // Variants
          {
            "bg-brand-gold text-brand-dark shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:bg-brand-gold/90":
              variant === "primary",
            "bg-brand-graphite text-foreground border border-white/5 hover:bg-brand-graphite/60 hover:border-brand-gold/20":
              variant === "secondary",
            "border border-white/10 hover:border-brand-gold/50 text-foreground hover:bg-white/5":
              variant === "outline",
            "text-muted-foreground hover:text-foreground hover:bg-white/5":
              variant === "ghost",
            "glass text-foreground hover:bg-white/10 hover:border-brand-gold/30 hover:shadow-[0_0_15px_rgba(212,175,55,0.08)]":
              variant === "glass",
          },
          // Sizes
          {
            "px-4 py-1.5 text-xs": size === "sm",
            "px-6 py-2.5 text-sm": size === "md",
            "px-8 py-3.5 text-base": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
