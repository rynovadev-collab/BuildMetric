import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8">
        <div>
          <div className="text-lg font-extrabold">
            Build<span className="text-teal-700">Metric</span>
          </div>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            Practical UK construction calculators. All figures are estimates,
            not professional specifications.
          </p>
          <p className="mt-4 text-xs text-slate-400">
            Built and operated by{" "}
            <a
              className="underline hover:text-teal-700"
              href="https://rynovadev.co.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              RynovaDev
            </a>
            .{" "}
            <a
              className="underline hover:text-teal-700"
              href="https://rynovadev.co.uk/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              RynovaDev business details &amp; terms
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-3 text-sm text-slate-600 sm:justify-end">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
