
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | BuildMetric",
  description:
    "Read the terms of use for BuildMetric's free UK construction calculators.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
        Terms of Use
      </h1>

      <p className="mt-4 text-sm text-slate-500">
        Last updated: 3 November 2026
      </p>

      <p className="mt-8 leading-8 text-slate-600">
        Welcome to BuildMetric. By using this website, you agree
        to the following terms. Please read them before using
        our calculators.
      </p>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            1. About BuildMetric
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            BuildMetric provides free online construction
            calculators designed to help homeowners, DIY
            enthusiasts and tradespeople estimate material
            quantities and costs.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            BuildMetric is developed and operated by{" "}
            <a
              href="https://rynovadev.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 hover:underline"
            >
              RynovaDev
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            2. Calculator Accuracy
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Our calculators provide indicative estimates based
            on the measurements, material properties and other
            information entered by users.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            Actual material requirements may vary depending
            on ground conditions, compaction, product density,
            wastage, installation methods and manufacturer
            specifications.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            We make reasonable efforts to provide useful and
            accurate calculations, but we cannot guarantee
            that every estimate will be suitable for a
            particular project.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            3. Responsibility for Material Orders
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Before purchasing materials or beginning
            construction work, you should verify quantities,
            product specifications and installation requirements
            with your supplier or a suitably qualified
            professional.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            BuildMetric does not provide structural engineering,
            surveying or professional construction advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            4. Free Website Access
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Our calculators are currently provided free of
            charge without registration.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            We may update, improve, temporarily suspend or
            discontinue website features where reasonably
            necessary. We do not guarantee uninterrupted
            availability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            5. Acceptable Use
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            You may use our calculators for personal or
            commercial project planning.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            You must not attempt to interfere with the
            operation or security of the website, introduce
            malicious software or misuse our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            6. Intellectual Property
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Unless otherwise stated, original website content,
            branding, design and software are owned by
            RynovaDev or used with appropriate permission.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            You may use the calculator results for your own
            projects, but you must not reproduce substantial
            portions of our website content or branding
            without permission, except where permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            7. Limitation of Liability
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            BuildMetric is provided for general informational
            and planning purposes.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            To the extent permitted by law, we are not
            responsible for losses resulting from reliance
            on inaccurate inputs, estimated quantities or
            assumptions that are unsuitable for a particular
            project.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            Nothing in these terms excludes or limits liability
            that cannot lawfully be excluded or restricted,
            including liability for death or personal injury
            caused by negligence, or fraud.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            8. External Websites
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            BuildMetric may contain links to third-party
            websites. We are not responsible for their
            content, availability or privacy practices.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            9. Privacy
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Information about how we process personal data
            is available in our{" "}
            <Link
              href="/privacy"
              className="font-medium text-teal-700 hover:underline"
            >
              Privacy Policy
            </Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            10. Governing Law
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            These terms are governed by the laws of England
            and Wales, subject to any mandatory legal rights
            that apply to users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            11. Changes to These Terms
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            We may update these terms to reflect changes
            to our website, services or applicable law.
            Updated terms will be published on this page
            with a revised date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900">
            12. Contact and Business Information
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            BuildMetric is operated by RynovaDev.
          </p>

          <p className="mt-3 leading-8 text-slate-600">
            For operator information, business contact
            details and further terms, visit{" "}
            <a
              href="https://rynovadev.co.uk/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-teal-700 hover:underline"
            >
              RynovaDev Business Details & Terms
            </a>.
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
