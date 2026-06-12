import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { company } from "@/data/company";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://poojachemicals.in"),
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s · ${company.name}`,
  },
  description:
    "Pooja Chemicals manufactures and supplies industrial water-treatment chemicals — cooling tower, boiler, RO, ETP, textile and specialty chemistry — for industry across India.",
  keywords: [
    "water treatment chemicals",
    "cooling tower chemicals",
    "boiler chemicals",
    "RO antiscalant",
    "ETP chemicals",
    "industrial chemicals Hyderabad",
    company.name,
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    title: `${company.name} — ${company.tagline}`,
    description:
      "Industrial water-treatment and process chemicals engineered for cooling towers, boilers, RO, ETP and more.",
    siteName: company.name,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
