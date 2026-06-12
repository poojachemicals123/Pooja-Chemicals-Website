import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Container, Button } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { industries } from "@/data/industries";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Water-treatment and process chemistry for aqua culture, textile, pulp & paper, power, sugar and construction industries.",
};

const applications: Record<string, string[]> = {
  "aqua-culture": ["Pond water conditioning", "Probiotics & bio-cultures", "Mineral & oxygen support"],
  textile: ["Sizing & scouring agents", "Peroxide stabilisers", "Effluent treatment chemistry"],
  "pulp-and-paper": ["Retention & drainage aids", "Dry-strength polymers", "Slime-control biocides"],
  "power-plants": ["Boiler internal treatment", "Oxygen scavengers", "Cooling water programmes"],
  "sugar-mills": ["Process antiscalants", "Colour & viscosity control", "High-load ETP chemistry"],
  construction: ["Concrete admixtures", "Ready-mix additives", "Ceramic binders"],
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries We Serve"
        title="Built for water-intensive industry"
        intro="From aqua culture ponds to high-pressure power boilers, we bring formulation expertise tuned to the contaminants and compliance demands of each sector."
      />

      <Container className="py-16 sm:py-24">
        <div className="space-y-16">
          {industries.map((ind, i) => (
            <Reveal
              key={ind.slug}
              id={ind.slug}
              className="grid scroll-mt-28 items-center gap-8 lg:grid-cols-2"
            >
              <div className={`relative aspect-16/10 overflow-hidden rounded-3xl ${i % 2 ? "lg:order-2" : ""}`}>
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cta-600">
                  Industry {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-3xl font-semibold text-navy">{ind.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate-soft">{ind.blurb}</p>
                <ul className="mt-6 space-y-3">
                  {(applications[ind.slug] ?? []).map((app) => (
                    <li key={app} className="flex items-center gap-3 text-sm text-navy">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-cta/10 text-cta">
                        <CheckIcon className="h-4 w-4" />
                      </span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-5 rounded-3xl bg-navy px-8 py-14 text-center text-white sm:py-16">
          <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">
            A different industry? We&apos;ve likely treated its water.
          </h2>
          <p className="max-w-xl text-white/70">
            Talk to our team about your specific process and discharge requirements.
          </p>
          <Button href="/contact" variant="primary">Contact Sales</Button>
        </div>
      </Container>
    </>
  );
}
