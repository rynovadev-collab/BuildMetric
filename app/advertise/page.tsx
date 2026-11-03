import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Target, BarChart3, Handshake } from "lucide-react";
export const metadata: Metadata = {
  title: "Advertise with BuildMetric",
  description:
    "Enquire about relevant sponsored placements alongside UK construction and materials calculators.",
  alternates: { canonical: "/advertise" },
};
export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
      <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-teal-700">
        Advertising opportunities
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
        Reach people planning their next project.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        BuildMetric provides practical construction calculators for DIY
        enthusiasts and trade professionals. We're inviting relevant suppliers
        and service providers to enquire about future sponsorship opportunities.
      </p>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {[
          [
            Target,
            "Relevant context",
            "Promote materials and services alongside the calculations visitors are using.",
          ],
          [
            BarChart3,
            "Transparent reporting",
            "Discuss placements and performance reporting when traffic data is available.",
          ],
          [
            Handshake,
            "Flexible partnerships",
            "Enquire about sidebar sponsorships, category partnerships and relevant referrals.",
          ],
        ].map(([Icon, title, desc], i) => {
          const I = [Target, BarChart3, Handshake][i];
          return (
            <div
              key={title as string}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <I className="text-teal-700" />
              <h2 className="mt-5 font-bold">{title as string}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {desc as string}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-12 rounded-3xl bg-[#103d39] p-8 text-white sm:p-10">
        <Mail size={28} className="text-teal-200" />
        <h2 className="mt-5 text-2xl font-extrabold">
          Interested in advertising?
        </h2>
        <p className="mt-3 text-teal-50/80">
          Tell us your business, the products or services you offer and the
          calculators you'd like to sponsor. Rates and availability are provided
          on enquiry; no audience figures are promised before verified reporting
          exists.
        </p>
        <a
          href="mailto:rynovadev@gmail.com?subject=BuildMetric%20advertising%20enquiry"
          className="mt-7 inline-flex rounded-xl bg-[#c3f4a6] px-6 py-3 font-bold text-[#103d39]"
        >
          Email an enquiry →
        </a>
      </div>
    </main>
  );
}
