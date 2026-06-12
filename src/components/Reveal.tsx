"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: boolean;
  id?: string;
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  y = 28,
  stagger = false,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const targets = stagger
        ? (Array.from(root.children) as HTMLElement[])
        : [root];

      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.1 : 0,
        scrollTrigger: {
          trigger: root,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} id={id} className={className}>
      {children}
    </Tag>
  );
}
