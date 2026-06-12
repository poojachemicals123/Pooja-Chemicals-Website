import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";
import { FilterableProducts } from "@/components/FilterableProducts";
import { ArrowRight } from "@/components/Icons";
import { catalog } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Full catalogue of Pooja Chemicals — cooling tower, boiler, RO, ETP, polymers, textile, laundry and specialty treatment chemicals.",
};

const totalProducts = catalog.reduce((n, c) => n + c.products.length, 0);

export default function ProductsPage() {
  return (
    <>
      <section className="border-b border-line bg-mist pt-32 pb-16 sm:pt-44 sm:pb-24">
        <Container>
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cta-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cta" />
            Product Catalogue
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-balance text-ink sm:text-5xl lg:text-6xl">
            Every chemical we make, in one place.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-soft">
            From cooling towers and boilers to RO, effluent and specialty systems, Pooja Chemicals
            manufactures <span className="font-semibold text-ink">{totalProducts} treatment and
            process formulations</span> across {catalog.length} categories — every one made to order
            for your plant, water source and compliance needs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#catalog"
              className="group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-cta-600"
            >
              Browse all products
              <ArrowRight className="h-4 w-4 rotate-90 transition-transform group-hover:translate-y-0.5" />
            </a>
            <Button href="/contact" variant="ghost">Request a formulation</Button>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-soft">
              {catalog.length} categories
            </p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {catalog.map((c) => (
                <li
                  key={c.slug}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink"
                >
                  {c.name}
                  <span className="text-xs font-semibold text-cta-600">{c.products.length}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <div id="catalog" className="scroll-mt-24">
          <FilterableProducts />
        </div>

        <div className="mt-20 rounded-3xl border border-line bg-white p-8 text-center shadow-soft sm:p-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Don&apos;t see your application?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-soft">
            We manufacture made-to-order chemistry for niche systems and contaminants. Share your
            requirement and we&apos;ll formulate the right solution.
          </p>
          <div className="mt-7 flex justify-center">
            <Button href="/contact">Request a formulation</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
