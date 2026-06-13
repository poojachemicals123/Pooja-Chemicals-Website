"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { ArrowRight, CloseIcon } from "./Icons";

type Props = {
  products: Product[];
  category: string;
};

export function ProductGrid({ products, category }: Props) {
  const [active, setActive] = useState<Product | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (active && !dialog.open) {
      dialog.showModal();
      document.body.style.overflow = "hidden";
    } else if (!active && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [active]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = () => setActive(null);
    const onClose = () => {
      setActive(null);
      document.body.style.overflow = "";
    };
    dialog.addEventListener("cancel", onCancel);
    dialog.addEventListener("close", onClose);
    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.removeEventListener("close", onClose);
    };
  }, []);

  const onBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) setActive(null);
  };

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.name}>
            <button
              type="button"
              onClick={() => setActive(product)}
              className="group block h-full w-full cursor-pointer overflow-hidden rounded-2xl border border-line bg-white text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-cta/30 hover:shadow-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-cloud">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink">{product.name}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cta-600">
                  View details
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        onClick={onBackdropClick}
        aria-labelledby="product-modal-title"
        className="m-auto w-[min(960px,calc(100vw-1.5rem))] max-h-[calc(100dvh-1.5rem)] overflow-hidden rounded-3xl bg-white p-0 shadow-lift backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
      >
        {active && (
          <div className="grid max-h-[calc(100dvh-1.5rem)] overflow-y-auto md:grid-cols-[0.95fr_1.05fr]">
            <div className="relative aspect-[4/3] bg-cloud md:aspect-auto md:min-h-full">
              <Image
                src={active.image}
                alt={active.name}
                fill
                sizes="(max-width:768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            <div className="relative flex flex-col p-6 sm:p-8">
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:border-cta/40 hover:text-cta-600"
              >
                <CloseIcon className="h-4 w-4" />
              </button>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cta/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cta-600">
                <span className="h-1.5 w-1.5 rounded-full bg-cta" />
                {category}
              </span>

              <h2
                id="product-modal-title"
                className="mt-4 pr-12 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl"
              >
                {active.name}
              </h2>

              {active.description && (
                <p className="mt-4 text-sm leading-relaxed text-slate-soft sm:text-base">
                  {active.description}
                </p>
              )}

              {active.formulation && (
                <div className="mt-5 rounded-2xl border border-line bg-mist p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-soft">
                    Typical formulation
                  </p>
                  <p className="mt-1.5 text-sm font-medium text-ink">{active.formulation}</p>
                </div>
              )}

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                <Link
                  href="/contact"
                  onClick={() => setActive(null)}
                  className="group inline-flex items-center gap-2 rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-cta-600"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-cta/40 hover:text-cta-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
