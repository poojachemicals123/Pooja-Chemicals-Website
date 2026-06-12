import type { Metadata } from "next";
import { Container, SectionHeading } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { EnquiryForm } from "@/components/EnquiryForm";
import { Reveal } from "@/components/Reveal";
import { BeakerIcon, LeafIcon, ShieldIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Pooja Chemicals — build a career in industrial water-treatment chemistry with a manufacturer that values expertise and diversity.",
};

const perks = [
  { Icon: BeakerIcon, title: "Real technical depth", body: "Work alongside a team with decades of hands-on field experience in water and effluent treatment." },
  { Icon: LeafIcon, title: "Meaningful work", body: "Help industry run cleaner and stay compliant — chemistry that protects assets and the environment." },
  { Icon: ShieldIcon, title: "A culture of trust", body: "We recognise the individual, encourage faith in the organisation and support diversity." },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career in water chemistry"
        intro="We're always interested in talented chemists, sales engineers and operations people. Tell us about yourself and how you'd like to contribute."
      />

      <Container className="py-16 sm:py-24">
        <Reveal stagger className="grid gap-5 sm:grid-cols-3">
          {perks.map(({ Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-line bg-white p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cta/10 text-cta">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-soft">{body}</p>
            </div>
          ))}
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Apply now"
            title="Send us your application"
            intro="Share your background and the role you're interested in. We review every application and reach out when there's a fit."
          />
          <EnquiryForm kind="career" />
        </div>
      </Container>
    </>
  );
}
