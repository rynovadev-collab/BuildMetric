import Link from "next/link";
import { ArrowLeft, CheckCircle2, Info } from "lucide-react";
import { Estimator } from "@/components/calculators/estimator";
type Kind = "type1" | "screed" | "subbase";
const details = {
  type1: {
    name: "MOT Type 1 Calculator",
    eyebrow: "AGGREGATES & GROUNDWORKS",
    intro:
      "Estimate how much MOT Type 1 hardcore you need for a patio, driveway or path. Calculate volume, tonnes, bulk bags and indicative material costs.",
    explain:
      "MOT Type 1 is a graded crushed aggregate commonly used as a compacted sub-base. Enter the finished compacted layer depth, not the loose delivery depth.",
    steps: [
      "Measure the length and width of the area.",
      "Choose your intended compacted sub-base depth.",
      "Adjust density and wastage using supplier guidance.",
      "Check bag quantities and confirm delivery requirements.",
    ],
    faqs: [
      [
        "How many tonnes of MOT Type 1 do I need?",
        "Multiply area in square metres by compacted depth in metres and the assumed density in tonnes per cubic metre. Add an allowance if needed.",
      ],
      [
        "What density should I use?",
        "2.0 tonnes per cubic metre is an illustrative starting point, not a universal material specification. Ask your aggregate supplier for the correct conversion.",
      ],
      [
        "Is MOT Type 1 the same as hardcore?",
        "Hardcore is a broad term for sub-base material; MOT Type 1 is a particular graded aggregate specification. They are not always interchangeable.",
      ],
    ],
  },
  screed: {
    name: "Screed Calculator",
    eyebrow: "FLOORING & SCREED",
    intro:
      "Calculate the volume, approximate weight and bag quantities for a floor screed project, with an editable cost estimate.",
    explain:
      "Screed materials differ widely. The calculator estimates geometric volume and converts it using your chosen density; bag coverage and mix requirements must be checked against the actual product.",
    steps: [
      "Measure the floor area.",
      "Enter the intended screed thickness in millimetres.",
      "Set the density and bag weight from the product information.",
      "Compare the estimated bag count and cost with supplier guidance.",
    ],
    faqs: [
      [
        "How do I calculate screed volume?",
        "Multiply floor area (m²) by thickness in metres. For example, 20 m² at 50 mm gives 1.0 m³ before allowances.",
      ],
      [
        "How many 25 kg bags of screed will I need?",
        "Bag quantities depend on product yield and density. This estimator uses your chosen density and rounds up to whole bags; product coverage is authoritative.",
      ],
      [
        "Can I use this for liquid screed?",
        "It can estimate geometric volume, but liquid screed has different material specifications, densities and delivery requirements. Confirm with your supplier.",
      ],
    ],
  },
  subbase: {
    name: "Sub-base Calculator",
    eyebrow: "PAVING & GROUNDWORKS",
    intro:
      "Plan sub-base materials for paving, patios and paths. Estimate aggregate volume, tonnage, bag quantities and indicative cost.",
    explain:
      "A suitable sub-base depends on ground conditions, loading, drainage and construction design. This tool calculates material quantities, not the structural suitability of your chosen depth.",
    steps: [
      "Measure your proposed paved area.",
      "Enter the specified compacted sub-base depth.",
      "Choose density based on the material you intend to use.",
      "Review tonnes and bags, then verify with your supplier.",
    ],
    faqs: [
      [
        "How do I calculate sub-base materials?",
        "Area multiplied by compacted depth gives cubic metres. Multiply by the material density to estimate tonnes.",
      ],
      [
        "What depth of sub-base do I need?",
        "Depth depends on intended use, soil and site conditions. Follow relevant design guidance or advice from a qualified contractor rather than relying on a generic default.",
      ],
      [
        "Does this account for compaction?",
        "The input depth is the intended compacted depth. The calculator does not predict loose-to-compacted settlement; confirm delivery quantities with your supplier.",
      ],
    ],
  },
};
export function CalculatorPage({ kind }: { kind: Kind }) {
  const d = details[kind];
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-teal-700"
      >
        <ArrowLeft size={16} /> All calculators
      </Link>
      <div className="mt-10 max-w-3xl">
        <div className="text-xs font-extrabold uppercase tracking-[0.18em] text-teal-700">
          {d.eyebrow}
        </div>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          {d.name}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{d.intro}</p>
      </div>
      <div className="mt-10 max-w-4xl">
        <div>
          <Estimator kind={kind} />
          <section className="mt-12 space-y-5">
            <h2 className="text-2xl font-extrabold">
              How this calculator works
            </h2>
            <p className="leading-7 text-slate-600">{d.explain}</p>
            <ol className="space-y-3">
              {d.steps.map((step, i) => (
                <li className="flex gap-3 text-slate-600" key={step}>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-800">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-extrabold">
              Frequently asked questions
            </h2>
            <div className="mt-5 space-y-3">
              {d.faqs.map(([q, a]) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-900">
                    {q}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{a}</p>
                </details>
              ))}
            </div>
          </section>
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            <div className="mb-1 flex items-center gap-2 font-bold">
              <Info size={18} /> Important planning note
            </div>
            Calculations are indicative and do not replace a site survey,
            supplier specifications or professional construction advice. Verify
            density, depth, wastage and material suitability before ordering.
          </div>
        </div>
      </div>
    </main>
  );
}
