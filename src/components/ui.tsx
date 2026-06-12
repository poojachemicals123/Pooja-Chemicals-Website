import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./Icons";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cta-600">
      <span className="h-1.5 w-1.5 rounded-full bg-cta" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-ink sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-slate-soft">{intro}</p>}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  icon?: boolean;
};

export function Button({ href, children, variant = "primary", icon = true }: ButtonProps) {
  const styles = {
    primary: "bg-cta text-white hover:bg-cta-600 shadow-soft",
    ghost: "border border-cta/30 text-cta-600 hover:border-cta hover:bg-cta/5",
    light: "bg-white/10 text-white ring-1 ring-inset ring-white/20 hover:bg-white/20",
  }[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${styles}`}
    >
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}
