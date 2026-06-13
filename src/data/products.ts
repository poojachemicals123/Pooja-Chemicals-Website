export type Product = {
  name: string;
  image: string;
  description?: string;
  formulation?: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  products: Product[];
};

type Extras = { description?: string; formulation?: string };

const p = (name: string, image: string, extras: Extras = {}): Product => ({
  name,
  image: `/img/products/${image}`,
  ...extras,
});

export const catalog: ProductCategory[] = [
  {
    slug: "cooling-tower",
    name: "Cooling Tower Treatment",
    summary:
      "Keep heat-exchange surfaces clean and protected across open and closed recirculating systems.",
    image: "/img/products/cooling-towers.jpg",
    products: [
      p("Anti-Scalants", "cooling-towers.jpg", {
        description:
          "Threshold inhibitors that prevent calcium carbonate, sulphate and silica scale on fills, tubes and exchangers — keeping heat-transfer efficiency high across hard-water makeup conditions.",
        formulation: "Phosphonate / polyacrylate blend, liquid",
      }),
      p("Corrosion Inhibitors", "corrosion.jpg", {
        description:
          "Filming and passivating chemistry that protects mild steel, copper and yellow-metal alloys from oxygen pitting and galvanic corrosion in open recirculating loops.",
        formulation: "Phosphonate + azole based, liquid",
      }),
      p("Oxidizing Biocides", "biocide.jpg", {
        description:
          "Fast-acting biocides for shock dosing — control planktonic bacteria, algae and biofilm in cooling water without long-term residual.",
        formulation: "Stabilised chlorine / bromine donors",
      }),
      p("Non-Oxidizing Biocides", "microbased.jpg", {
        description:
          "Quaternary and isothiazolinone-based biocides for sessile bacteria and stubborn biofilm — alternated with oxidisers to avoid resistance.",
        formulation: "Isothiazolinone / quat blend, liquid",
      }),
    ],
  },
  {
    slug: "boiler-power",
    name: "Boiler & Power Plant",
    summary:
      "Internal treatment chemistry for high-pressure boilers, condensate lines and power generation.",
    image: "/img/products/high-pressure-boilers.jpg",
    products: [
      p("Oxygen Scavengers", "oxygen-scavengers.jpg", {
        description:
          "Catalysed scavengers that strip dissolved oxygen from feedwater — protecting economisers, drums and steam lines from pitting corrosion.",
        formulation: "Hydrazine-free, catalysed DEHA / carbohydrazide",
      }),
      p("High-Pressure Boiler Chemicals", "high-pressure-boilers.jpg", {
        description:
          "Internal treatment chemistry for high-pressure utility boilers — scale control, condensate protection and pH conditioning in one programme.",
        formulation: "Phosphate + neutralising amine blend",
      }),
      p("pH Boosters", "PH-boosters.jpg", {
        description:
          "Alkalising agents that hold boiler-water and condensate pH in the safe corrosion window across varying load and makeup.",
        formulation: "Morpholine / cyclohexylamine, liquid",
      }),
      p("Power Plant Chemicals", "power-plant.jpg", {
        description:
          "Custom chemistry programmes for thermal and biomass power plants — covering boiler internal treatment, condensate polishing and cooling tower side.",
      }),
    ],
  },
  {
    slug: "ro-membrane",
    name: "RO & Membrane",
    summary:
      "Anti-scalants, cleaners and dechlorination chemistry that extend membrane life and flux.",
    image: "/img/products/membrane.jpg",
    products: [
      p("RO Anti-Scalants", "ro-chemi.jpg", {
        description:
          "Threshold-inhibitor formulations that hold sparingly-soluble salts in supersaturation — extending membrane life and stretching CIP intervals.",
        formulation: "Phosphonate / polymer blend, liquid",
      }),
      p("Membrane Cleaners", "membrane.jpg", {
        description:
          "Alkaline and acidic CIP chemistry that lifts organic foulants, biofilm and mineral scale from RO/UF/NF membranes without damaging the active layer.",
        formulation: "High-pH alkaline + low-pH acidic pair",
      }),
      p("Descaling Chemicals", "descaling-chemicals.jpg", {
        description:
          "Acid-inhibited descalers for exchanger tubes, condensers and process equipment — dissolve calcium and iron scale while protecting base metal.",
        formulation: "Inhibited HCl / sulphamic acid blends",
      }),
      p("Acids for Descaling", "acids-for-descaling.jpg", {
        description:
          "Bulk commercial-grade inhibited acids for heavy-duty descaling of large process equipment.",
        formulation: "HCl / sulphamic / citric acid, technical grade",
      }),
    ],
  },
  {
    slug: "etp-water",
    name: "ETP & Water Treatment",
    summary:
      "Coagulants, flocculants and clarifiers for effluent treatment plants and raw-water clarification.",
    image: "/img/products/floculants.jpg",
    products: [
      p("Coagulants", "cogulants.jpg", {
        description:
          "Inorganic and organic coagulants that neutralise colloidal charge — clarifying raw water and primary-treated effluent ahead of flocculation.",
        formulation: "Poly Aluminium Chloride (PAC) / Ferric / PolyDADMAC",
      }),
      p("Flocculants", "floculants.jpg", {
        description:
          "High-molecular-weight polymers that bridge destabilised particles into settleable flocs — for clarifiers, lamellas and dewatering centrifuges.",
        formulation: "Anionic / cationic / non-ionic polyacrylamide",
      }),
      p("Alum", "alum.jpg", {
        description:
          "Aluminium sulphate for traditional raw-water clarification and phosphate removal in municipal and industrial treatment plants.",
        formulation: "Aluminium sulphate, 17% Al₂O₃ (lump / liquid)",
      }),
      p("Sludge Dewatering Polymers", "sludge.jpg", {
        description:
          "Cationic flocculants tuned for belt presses, centrifuges and filter presses — drier cake, lower polymer dose, less haul-away.",
        formulation: "High-charge cationic polyacrylamide",
      }),
      p("Bacterial Culture", "bacterial-culture.jpg", {
        description:
          "Selected microbial consortia that seed and stabilise aerobic and anaerobic ETP biology — fast start-up, BOD/COD knockdown, odour control.",
        formulation: "Lyophilised bacterial blend, dry / liquid",
      }),
      p("Antifoam", "anit-foam.jpg", {
        description:
          "Silicone and organic defoamers that knock down process foam in aeration tanks, scrubbers and cooling loops without surface fouling.",
        formulation: "Silicone emulsion / polyether based",
      }),
    ],
  },
  {
    slug: "polymers",
    name: "Polymers & Dispersants",
    summary:
      "Coagulant and dispersant polymers including silica dispersants and dry-strength resins.",
    image: "/img/products/polymer.jpg",
    products: [
      p("Polymers", "polymer.jpg", {
        description:
          "General-purpose anionic, cationic and non-ionic polyacrylamide grades for clarification, thickening and dewatering applications.",
        formulation: "Polyacrylamide range, dry / emulsion",
      }),
      p("Strength Polymers", "strength-polymer.jpg", {
        description:
          "Dry-strength resins that improve burst, tensile and bonding strength in paper manufacturing — without loading additional fibre.",
        formulation: "Glyoxalated polyacrylamide (GPAM)",
      }),
      p("Dispersants", "dispersant.jpg", {
        description:
          "Low-MW polymers that keep silica, iron and hardness particulates suspended — preventing deposition in cooling and boiler systems.",
        formulation: "Polyacrylate / polymaleate, liquid",
      }),
      p("Bio-Dispersants", "biodisperants.jpg", {
        description:
          "Surfactant-based dispersants that penetrate biofilm and lift it from heat-transfer surfaces — pairs with oxidising biocides for synergy.",
        formulation: "Non-ionic surfactant blend, liquid",
      }),
    ],
  },
  {
    slug: "textile",
    name: "Textile Chemicals",
    summary:
      "Processing and effluent chemistry built for dye houses, finishing units and fabric care.",
    image: "/img/products/textile.jpg",
    products: [
      p("Textile Process Chemicals", "textile.jpg", {
        description:
          "Sizing, scouring, bleaching auxiliaries and dyeing levellers tuned for cotton, polyester and blend processing lines.",
      }),
      p("Textile Effluent Treatment", "textile-effluent.jpg", {
        description:
          "Decolourisation and COD-reduction chemistry built for high-organic dye-house effluent — gets discharge within board norms.",
        formulation: "Decolourant + coagulant + flocculant system",
      }),
      p("Peroxide Stabilizers", "peroxide -stabilizer.jpg", {
        description:
          "Silicate-free stabilisers that hold hydrogen peroxide activity through high-temperature scour and bleach steps — cleaner whites, no fabric damage.",
        formulation: "Organic chelant blend, liquid",
      }),
      p("Hydrogen Peroxide", "hydrogen-peroxide.png", {
        description:
          "Industrial-grade hydrogen peroxide for textile bleaching, pulp brightening and water-treatment disinfection.",
        formulation: "H₂O₂, 50% w/w technical grade",
      }),
    ],
  },
  {
    slug: "laundry",
    name: "Laundry Chemicals",
    summary:
      "Detergents, softeners and bleaching chemistry for industrial and institutional laundries.",
    image: "/img/products/detergent.jpg",
    products: [
      p("Laundry Detergents", "detergent.jpg", {
        description:
          "Heavy-duty alkaline built detergents engineered for industrial washer-extractors — strong soil removal, controlled foam, easy rinsing.",
      }),
      p("Fabric Softeners", "fabric-soft.jpg", {
        description:
          "Cationic softeners that leave linen smooth, low-static and pleasantly fragranced after high-temperature institutional wash cycles.",
        formulation: "Esterquat-based cationic softener",
      }),
      p("Laundry Chemicals", "laundry.jpg", {
        description:
          "Complete programme — pre-soak, main wash, sour, softener and starch — designed as one matched system for commercial laundries.",
      }),
      p("Bleach", "bleach.png", {
        description:
          "Oxygen and chlorine bleach grades for whitening and disinfection across institutional laundry, healthcare and hospitality.",
        formulation: "Sodium hypochlorite / sodium percarbonate",
      }),
      p("High Grade Detergent Powder", "detergent.jpg", {
        description:
          "Premium spray-dried powder formulation — high active matter, optical brighteners, stable performance across hard-water conditions.",
      }),
      p("Liquid Detergent", "liquid-detergent.webp", {
        description:
          "Concentrated liquid detergent for front-loaders and industrial machines — fully soluble, leaves no residue, dose-controllable.",
      })
    ],
  },
  {
    slug: "specialty",
    name: "Specialty & Others",
    summary:
      "Aqua culture, ceramic, construction and hardness-control chemistry for niche applications.",
    image: "/img/products/ceramic.jpg",
    products: [
      p("Aqua Culture Range", "aqua-culture.jpg", {
        description:
          "Pond probiotics, mineral mixes and water conditioners that stabilise pH, dissolved oxygen and microbial balance for shrimp and fish farms.",
      }),
      p("Ceramic Chemicals", "ceramic.jpg", {
        description:
          "Body and glaze additives — deflocculants, binders and rheology modifiers — tuned for tile, sanitaryware and tableware production.",
      }),
      p("Ready-Mix Additives", "ready-mix.jpg", {
        description:
          "Superplasticisers, retarders and water-reducers that improve workability and strength in ready-mix and precast concrete.",
        formulation: "PCE / SNF based admixtures",
      }),
      p("Hardness Control", "hardness.jpg", {
        description:
          "Sequestrants and softening chemistry that bind calcium and magnesium — protecting downstream process equipment from scaling.",
      }),
      p("EDTA", "edta.jpg", {
        description:
          "Industrial-grade EDTA chelant for textile, detergent and water-treatment applications where strong metal-ion sequestration is required.",
        formulation: "EDTA acid / disodium / tetrasodium salt",
      }),
      p("Zeolite", "zeolite.jpg", {
        description:
          "Synthetic zeolite for water softening, detergent building and ion-exchange applications — high cation-exchange capacity, low cost.",
        formulation: "Sodium aluminosilicate (Zeolite A / 4A)",
      }),
    ],
  },
  {
    slug: "automobile-chemicals",
    name: "Automobile Chemicals",
    summary:
  "Specialty automotive chemicals and vehicle-care solutions designed for cleaning, protection, maintenance and enhanced performance of automobiles.",
    image: "/img/products/automobile-industry.jpg",
    products: [
      p("Dashboard Polish", "dashboard-polish.jpg", {
        description:
          "Silicone-based dashboard polish that restores rich gloss to vinyl, leatherette and plastic trim — UV protection, non-greasy finish.",
      }),
      p("Tyre Polish", "tyre-polish.jpg", {
        description:
          "Long-lasting tyre dressing that revives sidewall blackness, repels dust and protects rubber from cracking.",
      })
    ]
  }
];