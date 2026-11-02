export const siteName = "BuildMetric";
// Change this before launch to your real domain. Avoid publishing example.com canonical URLs.
export const siteUrl = "https://buildmetric-coral.vercel.app";
export const calculators = [
  {
    slug: "mot-type-1-calculator",
    name: "MOT Type 1 Calculator",
    tag: "Aggregates",
    desc: "Estimate Type 1 sub-base volume, tonnes, bulk bags and material costs.",
    icon: "layers",
  },
  {
    slug: "screed-calculator",
    name: "Screed Calculator",
    tag: "Flooring",
    desc: "Calculate floor screed volume, estimated bag counts and material costs.",
    icon: "ruler",
  },
  {
    slug: "sub-base-calculator",
    name: "Sub-base Calculator",
    tag: "Groundworks",
    desc: "Estimate sub-base requirements for patios, paths and driveways.",
    icon: "shovel",
  },
] as const;
