import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { nav } from "@/data/navigation";
import { catalog } from "@/data/products";
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

const socials = [
  { label: "Facebook", href: company.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: company.social.instagram, Icon: InstagramIcon },
  { label: "Twitter", href: company.social.twitter, Icon: TwitterIcon },
  { label: "LinkedIn", href: company.social.linkedin, Icon: LinkedinIcon },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-navy text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/img/Logo.png"
              alt="Pooja Chemicals"
              width={150}
              height={103}
              className="h-11 w-auto rounded-lg bg-white object-contain p-1"
            />
            <span className="font-display text-lg font-semibold text-white">{company.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A chemical manufacturing company specialising in total water management and industrial
            chemistry, serving Indian industry since {company.establishedYear}.
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-white/80 transition-colors hover:bg-cta hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold text-white">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-cta-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold text-white">Solutions</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {catalog.slice(0, 6).map((cat) => (
              <li key={cat.slug}>
                <Link href={`/products#${cat.slug}`} className="transition-colors hover:text-cta-300">
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <PinIcon className="h-5 w-5 shrink-0 text-cta-300" />
              <span>
                {company.address.line1}, {company.address.line2}, {company.address.city} –{" "}
                {company.address.pincode}, {company.address.state}
              </span>
            </li>
            <li>
              <a href={`tel:${company.phoneHref}`} className="flex items-center gap-3 transition-colors hover:text-cta-300">
                <PhoneIcon className="h-5 w-5 shrink-0 text-cta-300" />
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition-colors hover:text-cta-300">
                <MailIcon className="h-5 w-5 shrink-0 text-cta-300" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs sm:flex-row sm:px-6">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p>
            Designed &amp; developed by{" "}
            <a
              href="https://akport.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/90 transition-colors hover:text-cta-300"
            >
              Abhiraman Kuntimaddi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
