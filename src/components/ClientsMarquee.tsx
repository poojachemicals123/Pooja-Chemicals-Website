"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { clients } from "@/data/clients";

export function ClientsMarquee() {
  const track = useRef<HTMLDivElement>(null);
  const row = [...clients, ...clients];

  useGSAP(
    () => {
      const el = track.current;
      if (!el) return;
      const loop = gsap.to(el, {
        xPercent: -50,
        ease: "none",
        duration: 24,
        repeat: -1,
      });
      const onEnter = () => loop.timeScale(0.25);
      const onLeave = () => loop.timeScale(1);
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: track }
  );

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div ref={track} className="flex w-max items-center gap-10 py-3 sm:gap-16">
        {row.map((c, i) => (
          <div key={`${c.name}-${i}`} className="flex h-20 w-44 shrink-0 items-center justify-center">
            <Image
              src={c.logo}
              alt={c.name}
              width={180}
              height={80}
              sizes="176px"
              className="max-h-16 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
