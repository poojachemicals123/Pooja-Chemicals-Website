import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading, Button } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { company } from "@/data/company";
import { stats } from "@/data/stats";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pooja Chemicals is a Hyderabad-based chemical manufacturer specialising in total water management and effluent treatment, led by CEO Partha Sarathi.",
};

const expertise = [
  "Aqua Culture",
  "Textile",
  "Pulp & Paper",
  "Sugar Mills",
  "Biomass Power Plants",
  "Heavy Industry — power & public sector",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Total water management expertise"
        intro={`A chemical manufacturing company based in ${company.address.city}, ${company.address.state}, serving Indian industry since ${company.establishedYear}.`}
      />

      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image src="/img/products/etp-plant.jpg" alt="Aerial view of an effluent treatment plant" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-navy/10" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Who we are" title="Chemistry led by hands-on expertise" />
            <p className="mt-5 text-base leading-relaxed text-slate-soft">
              Pooja Chemicals brings decades of technical and commercial field experience in total
              water management — including effluent water treatment. That depth shapes everything we
              make: chemistry matched to real systems, not sold from a shelf.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-soft">
              We carry deep experience in chemicals and polymers for water-intensive industries, and
              we stay in constant research for new and advanced applications across industrial and
              institutional markets.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {expertise.map((e) => (
                <li key={e} className="flex items-center gap-2.5 text-sm font-medium text-navy">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cta/10 text-cta">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal stagger className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-white p-7 text-center shadow-soft">
              <p className="font-display text-4xl font-semibold text-cta">{s.value}</p>
              <p className="mt-2 text-sm text-slate-soft">{s.label}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-3xl border border-line bg-white p-8 shadow-soft sm:p-10">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cta-600">Our Mission</span>
            <p className="mt-4 text-lg leading-relaxed text-navy">
              To give our customers the chemicals they need to operate successfully — delivered with
              unprecedented quality, dependable maintenance and versatility. We aim to produce and
              sell high-quality chemical products that meet our customers&apos; exact requirements,
              while growing our supply lines responsibly.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-navy p-8 text-white shadow-soft sm:p-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-cta-300">Our Vision</span>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              To be the most admired organisation, industry leader and preferred employer in our
              sector — building a work culture that encourages faith in the organisation, recognises
              the individual and supports diversity.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center gap-5 text-center">
          <SectionHeading
            align="center"
            eyebrow="Work with us"
            title="Partner with a manufacturer that knows your water"
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/products">Explore Products</Button>
            <Button href="/contact" variant="ghost">Contact Sales</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
