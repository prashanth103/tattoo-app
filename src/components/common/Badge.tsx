import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-border bg-background/90 backdrop-blur-sm px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase text-text-secondary font-body rounded-full ${className}`}
    >
      {children}
    </span>
  );
}
