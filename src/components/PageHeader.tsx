import { Container } from "./ui";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-line bg-mist pt-32 pb-14 sm:pt-40 sm:pb-20">
      <Container>
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cta-600">
          <span className="h-1.5 w-1.5 rounded-full bg-cta" />
          {eyebrow}
        </span>
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.04em] text-balance text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-soft">{intro}</p>
        )}
      </Container>
    </section>
  );
}
