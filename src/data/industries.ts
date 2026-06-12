export type Industry = {
  slug: string;
  name: string;
  blurb: string;
  image: string;
};

export const industries: Industry[] = [
  {
    slug: "aqua-culture",
    name: "Aqua Culture",
    blurb:
      "Probiotics, mineral mixes and water conditioners that keep pond ecosystems balanced and yields high.",
    image: "/img/products/aqua-culture.jpg",
  },
  {
    slug: "textile",
    name: "Textile",
    blurb:
      "Sizing, scouring and effluent-treatment chemistry engineered for modern dye houses and processing units.",
    image: "/img/products/textile.jpg",
  },
  {
    slug: "pulp-and-paper",
    name: "Pulp & Paper",
    blurb:
      "Retention aids, dry-strength polymers and biocides that improve runnability and sheet quality.",
    image: "/img/products/strength-polymer.jpg",
  },
  {
    slug: "power-plants",
    name: "Power & Boilers",
    blurb:
      "Oxygen scavengers, anti-scalants and corrosion inhibitors for high-pressure boilers and cooling systems.",
    image: "/img/products/high-pressure-boilers.jpg",
  },
  {
    slug: "sugar-mills",
    name: "Sugar Mills",
    blurb:
      "Process and effluent chemicals tuned for the heavy organic load of cane and beet sugar operations.",
    image: "/img/products/power-plant.jpg",
  },
  {
    slug: "construction",
    name: "Construction & Ceramics",
    blurb:
      "Admixtures, binders and ready-mix additives for construction, tiles and ceramic manufacturing.",
    image: "/img/products/ready-mix.jpg",
  },
];
