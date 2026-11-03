
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BuildMetric",
  description:
    "Learn how BuildMetric handles your privacy, calculator inputs, website analytics and personal information.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Privacy Policy
      </h1>

      <p className="mt-4 text-sm text-slate-500">
        Last updated: 3 November 2026
      </p>

      <p className="mt-8 leading-8 text-slate-600">
        BuildMetric is a free construction calculator website operated
        by RynovaDev. We respect your privacy and aim to collect as
        little personal information as possible. This policy explains
        how information is processed when you use our website.
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            1. Calculator Data
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Our calculators process measurements, quantities and
            estimated costs directly in your browser. We do not
            intentionally collect, transmit or store the values
            entered into our calculators.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            No account or registration is required to use our
            calculators.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            2. Website Analytics
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            We use Vercel Web Analytics to understand how visitors
            use BuildMetric, including page visits, traffic sources
            and popular calculators.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            Vercel Web Analytics is designed to operate without
            tracking cookies and provides aggregated website
            statistics. We do not use analytics to create
            individual advertising profiles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            3. Website Hosting
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            BuildMetric is hosted by Vercel. When you visit our
            website, technical information such as your IP address,
            browser information and request details may be
            processed to deliver the website, maintain security
            and ensure reliable performance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            4. Contact Information
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            If you contact us, we may process your name, email
            address and the information included in your message
            to respond to your enquiry.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            We retain correspondence only for as long as reasonably
            necessary to handle your enquiry or meet applicable
            legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            5. Cookies and Advertising
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            BuildMetric does not currently display third-party
            advertising or use advertising cookies.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            Our current Vercel Web Analytics integration does
            not rely on tracking cookies. If we introduce
            advertising or additional tracking technologies,
            we will update this policy and implement any
            required consent mechanisms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            6. Legal Basis for Processing
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Where personal information is processed, we generally
            rely on our legitimate interests in operating,
            securing and improving BuildMetric and responding
            to enquiries, where those interests are not
            overridden by your rights and freedoms.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            We may also process information where necessary
            to comply with legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            7. Your Data Protection Rights
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Under applicable UK data protection law, you may
            have the right to access, correct, erase or restrict
            the processing of your personal information, and
            to object to certain processing activities.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            You can contact us regarding these rights using
            the details provided below.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            You also have the right to complain to the UK
            Information Commissioner's Office (ICO).
            Visit{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 hover:underline"
            >
              ico.org.uk
            </a>
            {" "}for further information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            8. Third-Party Services
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            We use Vercel for website hosting and analytics.
            These services may process technical information
            outside the United Kingdom, subject to applicable
            data protection safeguards.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            You can read more about Vercel's privacy practices{" "}
            <a
              href="https://vercel.com/legal/privacy-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 hover:underline"
            >
              here
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            9. Business Information and Contact
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            BuildMetric is operated by RynovaDev, an independent
            web development business based in the United Kingdom.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            For business information, contact details and terms,
            please visit{" "}
            <a
              href="https://rynovadev.co.uk/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 hover:underline"
            >
              RynovaDev Business Details & Terms
            </a>.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            You can also visit the{" "}
            <a
              href="https://rynovadev.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 hover:underline"
            >
              RynovaDev homepage
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            10. Changes to This Policy
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            We may update this privacy policy when our website
            features, services or data processing practices
            change. Any updates will be published on this page
            with a revised date.
          </p>
        </section>
      </div>

      <div className="mt-14 border-t border-slate-200 pt-8">
        <Link
          href="/"
          className="font-medium text-teal-700 hover:underline"
        >
          ← Back to BuildMetric
        </Link>
      </div>
    </main>
  );
}
