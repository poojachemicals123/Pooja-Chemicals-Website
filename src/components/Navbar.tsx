"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/data/navigation";
import { catalog } from "@/data/products";
import { company } from "@/data/company";
import { ArrowRight, PhoneIcon } from "./Icons";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 16);
      if (y < 80) setVisible(true);
      else if (y > lastY.current + 6) setVisible(false);
      else if (y < lastY.current - 6) setVisible(true);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out ${
          visible || open ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`transition-colors duration-300 ${
            scrolled && !open
              ? "border-b border-line bg-white/80 backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-20">
            <Link href="/" className="relative z-50 flex items-center gap-3" onClick={() => setOpen(false)}>
              <Image
                src="/img/logo.png"
                alt="Pooja Chemicals"
                width={150}
                height={103}
                priority
                className="h-9 w-auto object-contain lg:h-10"
              />
              <span
                className={`font-display text-base font-bold tracking-tight transition-colors lg:text-lg ${
                  open ? "text-white" : "text-ink"
                }`}
              >
                {company.name}
              </span>
            </Link>

            <ul className="hidden items-center gap-9 lg:flex">
              {nav.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`relative inline-flex items-center py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                        active ? "text-ink" : "text-slate-soft hover:text-ink"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-cta transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>

                    {item.label === "Products" && (
                      <div className="invisible absolute left-1/2 top-full w-xl -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="grid grid-cols-2 gap-1 rounded-2xl border border-line bg-white p-3 shadow-lift">
                          {catalog.map((cat) => (
                            <Link
                              key={cat.slug}
                              href={`/products#${cat.slug}`}
                              className="group/item rounded-xl px-3 py-2.5 transition-colors hover:bg-mist"
                            >
                              <span className="flex items-center justify-between text-sm font-semibold text-navy">
                                {cat.name}
                                <ArrowRight className="h-4 w-4 -translate-x-1 text-cta opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                              </span>
                              <span className="mt-0.5 line-clamp-1 block text-xs text-slate-soft">
                                {cat.summary}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden items-center gap-2 rounded-full bg-cta px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white shadow-soft transition-colors hover:bg-cta-600 lg:inline-flex"
              >
                Contact Sales
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.25 lg:hidden"
              >
                <span
                  className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                    open ? "translate-y-1.75 rotate-45 bg-white" : "bg-ink"
                  }`}
                />
                <span
                  className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                    open ? "opacity-0" : "bg-ink"
                  }`}
                />
                <span
                  className={`h-0.5 w-6 rounded-full transition-all duration-300 ${
                    open ? "-translate-y-1.75 -rotate-45 bg-white" : "bg-ink"
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-navy transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ clipPath: open ? "circle(150% at 100% 0)" : "circle(0% at 100% 0)" }}
      >
        <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-3xl font-semibold transition-all duration-500 ${
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              } ${isActive(item.href) ? "text-cta-300" : "text-white/70"}`}
            >
              {item.label}
              <ArrowRight className="h-6 w-6 text-white/30" />
            </Link>
          ))}
        </nav>
        <div className="px-8 pb-12">
          <a
            href={`tel:${company.phoneHref}`}
            className="flex items-center justify-center gap-2 rounded-full bg-cta px-6 py-4 text-sm font-semibold text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            {company.phone}
          </a>
        </div>
      </div>
    </>
  );
}
