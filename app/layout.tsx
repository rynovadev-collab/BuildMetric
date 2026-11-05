import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteName, siteUrl } from "@/lib/site";
import { Analytics } from "@vercel/analytics/next"
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BuildMetric | Free UK Construction Calculators",
    template: "%s | BuildMetric",
  },
  description:
    "Free UK construction calculators for MOT Type 1, screed and sub-base quantities, bags and estimated costs.",
    applicationName: "BuildMetric",
    openGraph: {
      siteName: "BuildMetric",
      type: "website",
    },
  robots: { index: true, follow: true },
  verification:{
    google: "NkqaVkDVX43AZqfXJBGh8-gfCzOc5b2-kCGfJzmMx-8"
  },
  icons:{
    icon: "icon.webp"
  }
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen bg-[#f7f9f8] font-sans text-slate-900 antialiased">
        <SiteHeader />
        {children}
        <Analytics/>
        <SiteFooter />
      </body>
    </html>
  );
}
 