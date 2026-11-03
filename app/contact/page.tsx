import type { Metadata } from "next";
export const metadata: Metadata = { title: "Contact" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-4xl font-extrabold">Contact</h1>
      <p className="mt-5 leading-8 text-slate-600">
        For calculator feedback or general enquiries, email{" "}
        <a
          className="font-semibold text-teal-700 underline"
          href="mailto:rynovadev@gmail.com"
        >
          rynovadev@gmail.com
        </a>
        .
      </p>
      
    </main>
  );
}
