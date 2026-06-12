import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { Container } from "@/components/ui";
import { PageHeader } from "@/components/PageHeader";
import { EnquiryForm } from "@/components/EnquiryForm";
import { company } from "@/data/company";
import { PhoneIcon, MailIcon, PinIcon, ArrowRight } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Pooja Chemicals for water-treatment and process chemical enquiries, quotes and technical support.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your water"
        intro="Share your system details and challenge — our team will recommend the right chemistry and get a quote back to you quickly."
      />

      <Container className="py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <ContactCard Icon={PinIcon} title="Visit us">
              {company.address.line1}, {company.address.line2},<br />
              {company.address.city} – {company.address.pincode}, {company.address.state},{" "}
              {company.address.country}
            </ContactCard>
            <a href={`tel:${company.phoneHref}`} className="block">
              <ContactCard Icon={PhoneIcon} title="Call us" interactive>
                {company.phone}
              </ContactCard>
            </a>
            <a href={`mailto:${company.email}`} className="block">
              <ContactCard Icon={MailIcon} title="Email us" interactive>
                {company.email}
              </ContactCard>
            </a>

            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-line shadow-soft transition-colors hover:border-cta/40"
            >
              <div className="flex h-44 items-center justify-center bg-ink">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-cta text-white shadow-lift transition-transform duration-300 group-hover:-translate-y-1">
                  <PinIcon className="h-8 w-8" />
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 bg-white p-5">
                <div>
                  <p className="text-sm font-semibold text-navy">Find us on the map</p>
                  <p className="mt-0.5 text-sm text-slate-soft">
                    {company.address.city} – {company.address.pincode}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cta px-4 py-2 text-sm font-semibold text-white transition-colors group-hover:bg-cta-600">
                  Directions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </div>

          <EnquiryForm kind="enquiry" />
        </div>
      </Container>
    </>
  );
}

function ContactCard({
  Icon,
  title,
  children,
  interactive = false,
}: {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  children: React.ReactNode;
  interactive?: boolean;
}) {
  return (
    <div
      className={`flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-colors ${
        interactive ? "hover:border-cta/40" : ""
      }`}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cta/10 text-cta">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-navy">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-soft">{children}</p>
      </div>
    </div>
  );
}
