import type { Metadata } from "next";
export const metadata: Metadata = { title: "About BuildMetric" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-4xl font-extrabold">About BuildMetric</h1>
      <p className="mt-6 leading-8 text-slate-600">
        BuildMetric provides free, straightforward calculators to help UK
        homeowners, DIY enthusiasts and tradespeople plan material quantities.
        Calculations are indicative, and material properties and site
        requirements should be verified before ordering.
      </p>
      <p className="mt-5 leading-8 text-slate-600">
        Developed by RynovaDev.
      </p>
    </main>
  );
}
