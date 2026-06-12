"use client";

import { useMemo, useSyncExternalStore } from "react";
import Image from "next/image";
import { catalog } from "@/data/products";

const filters = [{ slug: "all", name: "All products" }, ...catalog.map((c) => ({ slug: c.slug, name: c.name }))];

const allProducts = catalog.flatMap((c) =>
  c.products.map((product) => ({ ...product, category: c.name, slug: c.slug }))
);

const subscribe = (onChange: () => void) => {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
};
const getSnapshot = () => {
  const slug = window.location.hash.slice(1);
  return catalog.some((c) => c.slug === slug) ? slug : "all";
};

export function FilterableProducts() {
  const active = useSyncExternalStore(subscribe, getSnapshot, () => "all");

  const select = (slug: string) => {
    history.replaceState(null, "", slug === "all" ? window.location.pathname : `#${slug}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

  const shown = useMemo(
    () => (active === "all" ? allProducts : allProducts.filter((p) => p.slug === active)),
    [active]
  );

  const activeName = filters.find((f) => f.slug === active)?.name ?? "All products";
  const countLabel =
    active === "all"
      ? `Showing all ${shown.length} products across ${catalog.length} categories`
      : `Showing ${shown.length} product${shown.length === 1 ? "" : "s"} in ${activeName}`;

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-5 mb-10 border-b border-line bg-mist/90 px-5 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:top-20">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => {
            const isActive = active === f.slug;
            return (
              <button
                key={f.slug}
                type="button"
                onClick={() => select(f.slug)}
                aria-pressed={isActive}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cta text-white"
                    : "border border-line bg-white text-slate-soft hover:border-cta/40 hover:text-cta-600"
                }`}
              >
                {f.name}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-sm font-medium text-slate-soft">{countLabel}</p>
      </div>

      <ul key={active} className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {shown.map((product, i) => (
          <li
            key={`${product.slug}-${product.name}`}
            className="animate-img"
            style={{ animationDelay: `${Math.min(i * 35, 400)}ms` }}
          >
            <article className="group h-full overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-cta/30 hover:shadow-lift">
              <div className="relative aspect-4/3 overflow-hidden bg-cloud">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cta-600">
                  {product.category}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-ink">{product.name}</h3>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
