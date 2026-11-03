"use client";
import { useState } from "react";
import { estimateAggregate, estimateScreed } from "@/lib/calculations";
import { Calculator, Info } from "lucide-react";

type Kind = "type1" | "screed" | "subbase";
const money = (n: number) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
  }).format(n);
const num = (n: number, d = 2) =>
  new Intl.NumberFormat("en-GB", { maximumFractionDigits: d }).format(n);
export function Estimator({ kind }: { kind: Kind }) {
  const screed = kind === "screed";
  const [length, setLength] = useState("6"),
    [width, setWidth] = useState("4"),
    [depth, setDepth] = useState(screed ? "50" : "100");
  const [density, setDensity] = useState(screed ? "2.1" : "2.0"),
    [waste, setWaste] = useState("10");
  const [bagKg, setBagKg] = useState(screed ? "25" : "850"),
    [price, setPrice] = useState(screed ? "7.50" : "45");
  const [unit, setUnit] = useState<"m" | "ft">("m");
  const v = (s: string) => Number(s);
  const factor = unit === "ft" ? 0.3048 : 1;
  let result: ReturnType<typeof estimateAggregate> | null = null;
  try {
    result = screed
      ? estimateScreed(
          v(length) * factor,
          v(width) * factor,
          v(depth),
          v(density),
          v(waste),
          v(bagKg),
          v(price),
        )
      : estimateAggregate(
          v(length) * factor,
          v(width) * factor,
          v(depth),
          v(density),
          v(waste),
          v(bagKg),
          v(price),
        );
  } catch {}
  const field = (
    name: string,
    value: string,
    set: (s: string) => void,
    unitLabel: string,
    step = "any",
  ) => (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {name} <span className="font-normal text-slate-400">({unitLabel})</span>
      </span>
      <input
        type="number"
        min="0"
        step={step}
        value={value}
        onChange={(e) => set(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
      />
    </label>
  );
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_50px_rgba(15,23,42,0.06)]">
      <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-5 sm:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-teal-100 p-2.5 text-teal-800">
            <Calculator size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-950">
              Enter your measurements
            </h2>
            <p className="text-sm text-slate-500">
              Results update automatically as you type
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-600">
            Measurement units
          </span>
          <div className="rounded-xl bg-slate-100 p-1">
            <button
              onClick={() => setUnit("m")}
              className={
                "rounded-lg px-4 py-2 text-sm font-semibold " +
                (unit === "m"
                  ? "bg-white shadow text-slate-900"
                  : "text-slate-500")
              }
            >
              Metres
            </button>
            <button
              onClick={() => setUnit("ft")}
              className={
                "rounded-lg px-4 py-2 text-sm font-semibold " +
                (unit === "ft"
                  ? "bg-white shadow text-slate-900"
                  : "text-slate-500")
              }
            >
              Feet
            </button>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {field("Length", length, setLength, unit)}
          {field("Width", width, setWidth, unit)}
          {field("Compacted depth", depth, setDepth, "mm")}
          {field("Material density", density, setDensity, "tonnes/m³")}
          {field("Allowance", waste, setWaste, "%")}
          {field("Bag weight", bagKg, setBagKg, "kg")}
          {field(
            screed ? "Estimated price per bag" : "Estimated price per tonne",
            price,
            setPrice,
            screed ? "£/bag" : "£/tonne",
          )}
        </div>
        <div className="mt-7 rounded-2xl bg-[#103d39] p-6 text-white">
          <div className="text-xs font-bold uppercase tracking-[0.16em] text-teal-200">
            Your estimate
          </div>
          {result ? (
            <>
              <div className="mt-3 text-4xl font-bold tracking-tight">
                {num(result.tonnes)}{" "}
                <span className="text-xl font-medium text-teal-100">
                  tonnes
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/20 pt-5 sm:grid-cols-4">
                <div>
                  <div className="text-xs text-teal-100">Area</div>
                  <div className="mt-1 text-lg font-semibold">
                    {num(result.area)} m²
                  </div>
                </div>
                <div>
                  <div className="text-xs text-teal-100">Compacted volume</div>
                  <div className="mt-1 text-lg font-semibold">
                    {num(result.volume)} m³
                  </div>
                </div>
                <div>
                  <div className="text-xs text-teal-100">Bags needed</div>
                  <div className="mt-1 text-lg font-semibold">
                    {num(result.bags, 0)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-teal-100">Material estimate</div>
                  <div className="mt-1 text-lg font-semibold">
                    {money(result.cost)}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p className="mt-4 text-sm text-red-100">
              Enter valid positive measurements to see your estimate.
            </p>
          )}
        </div>
        <div className="mt-4 flex gap-2 text-xs leading-5 text-slate-500">
          <Info size={17} className="mt-0.5 shrink-0" />
          <p>
            Planning estimate only. Density, compaction, packaging and supplier
            pricing vary. Confirm quantities and specification with your
            supplier or contractor before ordering. The allowance is applied to
            the estimated mass; it is not a measured compaction factor.
          </p>
        </div>
      </div>
    </section>
  );
}
