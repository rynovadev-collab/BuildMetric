import Link from "next/link";
export function AdSlot({
  placement = "sidebar",
}: {
  placement?: "sidebar" | "inline";
}) {
  return (
    <aside
      aria-label="Advertising opportunity"
      className="ad-slot rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center"
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
        Advertising
      </div>
      <div className="mt-6 flex justify-center">
        <div className="rounded-2xl bg-teal-50 p-4 text-3xl">✦</div>
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">
        Reach people planning their next project
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-500">
        Relevant suppliers and trade businesses can enquire about sponsored
        placements.
      </p>
      <Link
        href="/advertise"
        className="mt-5 inline-flex rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-800"
      >
        Advertise with us →
      </Link>
      <div className="mt-5 text-xs text-slate-400">
        {placement === "sidebar" ? "Sidebar placement" : "Sponsored placement"}{" "}
        · availability on request
      </div>
    </aside>
  );
}
