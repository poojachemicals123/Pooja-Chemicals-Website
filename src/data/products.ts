export type Product = { name: string; image: string };

export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  products: Product[];
};

const p = (name: string, image: string): Product => ({
  name,
  image: `/img/products/${image}`,
});

export const catalog: ProductCategory[] = [
  {
    slug: "cooling-tower",
    name: "Cooling Tower Treatment",
    summary:
      "Keep heat-exchange surfaces clean and protected across open and closed recirculating systems.",
    image: "/img/products/cooling-towers.jpg",
    products: [
      p("Anti-Scalants", "cooling-towers.jpg"),
      p("Corrosion Inhibitors", "corrosion.jpg"),
      p("Oxidizing Biocides", "biocide.jpg"),
      p("Non-Oxidizing Biocides", "microbased.jpg"),
    ],
  },
  {
    slug: "boiler-power",
    name: "Boiler & Power Plant",
    summary:
      "Internal treatment chemistry for high-pressure boilers, condensate lines and power generation.",
    image: "/img/products/high-pressure-boilers.jpg",
    products: [
      p("Oxygen Scavengers", "oxygen-scavengers.jpg"),
      p("High-Pressure Boiler Chemicals", "high-pressure-boilers.jpg"),
      p("pH Boosters", "PH-boosters.jpg"),
      p("Power Plant Chemicals", "power-plant.jpg"),
    ],
  },
  {
    slug: "ro-membrane",
    name: "RO & Membrane",
    summary:
      "Anti-scalants, cleaners and dechlorination chemistry that extend membrane life and flux.",
    image: "/img/products/membrane.jpg",
    products: [
      p("RO Anti-Scalants", "ro-chemi.jpg"),
      p("Membrane Cleaners", "membrane.jpg"),
      p("Descaling Chemicals", "descaling-chemicals.jpg"),
      p("Acids for Descaling", "acids-for-descaling.jpg"),
    ],
  },
  {
    slug: "etp-water",
    name: "ETP & Water Treatment",
    summary:
      "Coagulants, flocculants and clarifiers for effluent treatment plants and raw-water clarification.",
    image: "/img/products/floculants.jpg",
    products: [
      p("Coagulants", "cogulants.jpg"),
      p("Flocculants", "floculants.jpg"),
      p("Alum", "alum.jpg"),
      p("Sludge Dewatering Polymers", "sludge.jpg"),
      p("Bacterial Culture", "bacterial-culture.jpg"),
      p("Antifoam", "anit-foam.jpg"),
    ],
  },
  {
    slug: "polymers",
    name: "Polymers & Dispersants",
    summary:
      "Coagulant and dispersant polymers including silica dispersants and dry-strength resins.",
    image: "/img/products/polymer.jpg",
    products: [
      p("Polymers", "polymer.jpg"),
      p("Strength Polymers", "strength-polymer.jpg"),
      p("Dispersants", "dispersant.jpg"),
      p("Bio-Dispersants", "biodisperants.jpg"),
    ],
  },
  {
    slug: "textile",
    name: "Textile Chemicals",
    summary:
      "Processing and effluent chemistry built for dye houses, finishing units and fabric care.",
    image: "/img/products/textile.jpg",
    products: [
      p("Textile Process Chemicals", "textile.jpg"),
      p("Textile Effluent Treatment", "textile-effluent.jpg"),
      p("Peroxide Stabilizers", "peroxide -stabilizer.jpg"),
      p("Hydrogen Peroxide", "hydrogen-peroxide.png"),
    ],
  },
  {
    slug: "laundry",
    name: "Laundry Chemicals",
    summary:
      "Detergents, softeners and bleaching chemistry for industrial and institutional laundries.",
    image: "/img/products/detergent.jpg",
    products: [
      p("Laundry Detergents", "detergent.jpg"),
      p("Fabric Softeners", "fabric-soft.jpg"),
      p("Laundry Chemicals", "laundry.jpg"),
      p("Bleach", "bleach.png"),
      p("High Grade Detergent Powder", "detergent.jpg"),
      p("Liquid Detergent", "liquid-detergent.webp")
    ],
  },
  {
    slug: "specialty",
    name: "Specialty & Others",
    summary:
      "Aqua culture, ceramic, construction and hardness-control chemistry for niche applications.",
    image: "/img/products/ceramic.jpg",
    products: [
      p("Aqua Culture Range", "aqua-culture.jpg"),
      p("Ceramic Chemicals", "ceramic.jpg"),
      p("Ready-Mix Additives", "ready-mix.jpg"),
      p("Hardness Control", "hardness.jpg"),
      p("EDTA", "edta.jpg"),
      p("Zeolite", "zeolite.jpg"),
    ],
  },
  {
    slug: "automobile-chemicals",
    name: "Automobile Chemicals",
    summary:
  "Specialty automotive chemicals and vehicle-care solutions designed for cleaning, protection, maintenance and enhanced performance of automobiles.",
    image: "/img/products/automobile-industry.jpg",
    products: [
      p("Dashboard Polish", "dashboard-polish.jpg")
    ]
  }
];
