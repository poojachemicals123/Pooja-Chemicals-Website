"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { company } from "@/data/company";
import { stats } from "@/data/stats";
import { ArrowRight, PhoneIcon } from "./Icons";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".hero-eyebrow", { y: 16, opacity: 0, duration: 0.6 })
        .from(".hero-headline", { y: 28, opacity: 0, duration: 0.9 }, "-=0.2")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .from(".hero-stat", { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.3")
        .from(".hero-panel", { scale: 0.9, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.9")
        .from(".hero-accent", { scale: 0.6, opacity: 0, duration: 0.7, ease: "back.out(1.6)" }, "-=0.6")
        .from(".hero-card", { y: 24, opacity: 0, duration: 0.6 }, "-=0.4");
    },
    { scope: root }
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-mist pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="hero-eyebrow inline-flex items-center gap-2 rounded-full border border-cta/30 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-cta-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cta" />
            Industrial Water Treatment · Since {company.establishedYear}
          </span>

          <h1 className="hero-headline mt-6 font-display text-5xl font-extrabold leading-none tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl">
            The chemistry behind cleaner{" "}
            <span className="relative inline-block text-cta">
              water.
              <span className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-cta" />
            </span>
          </h1>

          <p className="hero-sub mt-7 max-w-md text-lg leading-relaxed text-slate-soft">
            {company.name} formulates cooling tower, boiler, RO and effluent chemicals — engineered
            to keep your plant running clean, efficient and compliant.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="hero-cta group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-cta-600"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`tel:${company.phoneHref}`}
              className="hero-cta inline-flex items-center gap-2 rounded-full border border-cta/30 px-6 py-3.5 text-sm font-semibold text-cta-600 transition-colors hover:border-cta hover:bg-cta/5"
            >
              <PhoneIcon className="h-4 w-4" />
              Talk to Sales
            </a>
          </div>

          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label} className="hero-stat">
                <dt className="font-display text-4xl font-extrabold tracking-tight text-cta">{s.value}</dt>
                <dd className="mt-1 text-sm text-slate-soft">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="hero-panel relative overflow-hidden rounded-4xl ring-1 ring-ink/5 shadow-lift">
            <div className="relative aspect-4/5">
              <Image
                src="/img/products/water-tret-chemi.jpg"
                alt="Aerial view of an industrial water treatment plant"
                fill
                priority
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="hero-card absolute -bottom-6 -left-4 w-52 rounded-2xl bg-white p-5 shadow-lift ring-1 ring-ink/5 sm:-left-8">
            <p className="font-display text-3xl font-extrabold text-ink">{stats[3].value}</p>
            <p className="mt-1 text-sm text-slate-soft">{stats[3].label}</p>
            <div className="mt-3 h-1 w-12 rounded-full bg-cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
