import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Reveal } from "@/components/Reveal";
import { Container, SectionHeading, Button } from "@/components/ui";
import { catalog } from "@/data/products";
import { industries } from "@/data/industries";
import {
  DropletIcon,
  ShieldIcon,
  BeakerIcon,
  RecycleIcon,
  TruckIcon,
  LeafIcon,
  ArrowRight,
} from "@/components/Icons";

const features = [
  { Icon: BeakerIcon, title: "Made-to-order chemistry", body: "Formulations tuned to your feed water, system metallurgy and operating regime — not a generic catalogue product." },
  { Icon: ShieldIcon, title: "Asset protection", body: "Anti-scalants and corrosion inhibitors that protect boilers, exchangers and membranes from costly downtime." },
  { Icon: RecycleIcon, title: "Effluent & reuse", body: "Coagulants, flocculants and bio-cultures that bring ETP discharge within norms and enable water reuse." },
  { Icon: DropletIcon, title: "Total water management", body: "One partner across intake, process, cooling, boiler and effluent — balanced as a single water system." },
  { Icon: LeafIcon, title: "Compliance-first", body: "Chemistry and dosing designed to keep you on the right side of pollution-control board norms." },
  { Icon: TruckIcon, title: "Reliable supply", body: "Locally manufactured and dispatched on a wholesale scale to match plant demand schedules." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-line bg-white py-10">
        <Container>
          <p className="mb-7 text-center text-xs font-semibold uppercase tracking-wider text-slate-soft">
            Trusted by pharma, textile and process manufacturers
          </p>
          <ClientsMarquee />
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why Pooja Chemicals"
            title="Engineered chemistry, end-to-end water management"
            intro="We pair deep field experience in effluent and water treatment with made-to-order manufacturing — so every drum is matched to your system, not the other way around."
          />
          <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-2xl border border-line bg-white p-7 shadow-soft transition-colors hover:border-cta/30"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta transition-colors group-hover:bg-cta group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">{body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Solutions by industry"
              title="Chemistry built around your process"
              intro="Decades of experience across water-intensive industries — each with its own contaminants, metallurgy and compliance demands."
            />
            <Button href="/industries" variant="ghost">All industries</Button>
          </div>

          <Reveal stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries#${ind.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-line"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/55 transition-colors duration-300 group-hover:bg-ink/40" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="flex items-center gap-1.5 text-lg font-semibold">
                    {ind.name}
                    <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-1 text-sm text-white/75">{ind.blurb}</p>
                </div>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Product range"
              title="A formulation for every system"
              intro="From cooling towers and boilers to RO and effluent plants — explore the full catalogue of treatment and process chemicals."
            />
            <Button href="/products" variant="ghost">Full catalogue</Button>
          </div>

          <Reveal stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {catalog.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products#${cat.slug}`}
                className="group rounded-2xl border border-line bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-cta/30 hover:shadow-lift"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cta-600">
                  {cat.products.length} products
                </span>
                <h3 className="mt-2 text-lg font-semibold text-navy">{cat.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-soft">{cat.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cta-600">
                  View range
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-white sm:px-14 sm:py-20">
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let&apos;s solve your water problem.
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Tell us about your system and challenges. Our team will recommend the right chemistry
                and dosing — and get a quote to you quickly.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary">Contact Sales</Button>
                <Button href="/products" variant="light">Browse Products</Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
