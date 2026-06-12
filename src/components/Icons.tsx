import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const MenuIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M4 6h16M4 12h16M4 18h16" /></svg>
);
export const CloseIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const ArrowRight = (p: IconProps) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUp = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
);
export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
);
export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
);
export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
);
export const DropletIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 2.7 6.3 9a8 8 0 1 0 11.4 0Z" /></svg>
);
export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></svg>
);
export const BeakerIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M9 3h6M10 3v6L5 18a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3" /><path d="M7 14h10" /></svg>
);
export const RecycleIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M7 19H4.8a2 2 0 0 1-1.7-3l1.3-2.2M9.3 5.5l1-1.7a2 2 0 0 1 3.4 0L15 6M17 14l1.9 3.3a2 2 0 0 1-1.7 3H14" /><path d="M9 19l-2-3 3.5-1M15 6l2 3-3.5 1M7 13l-2 3" /></svg>
);
export const FactoryIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M2 20h20M4 20V10l5 3V10l5 3V7l5 3v10" /><path d="M9 20v-4h2v4" /></svg>
);
export const LeafIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M11 20A7 7 0 0 1 4 13c0-6 7-9 16-9 0 9-3 16-9 16Z" /><path d="M4 20c4-6 7-8 12-9" /></svg>
);
export const TruckIcon = (p: IconProps) => (
  <svg {...base} {...p}><path d="M2 5h11v11H2zM13 8h4l3 3v5h-7" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></svg>
);

export const FacebookIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.5.7-1.5 1.4v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z" /></svg>
);
export const InstagramIcon = (p: IconProps) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></svg>
);
export const TwitterIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.9 22H3l7-8L2 2h6.1l4.3 5.7L18.2 2Zm-2.1 18h1.6L8 4H6.3l9.8 16Z" /></svg>
);
export const LinkedinIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V21H9z" /></svg>
);
