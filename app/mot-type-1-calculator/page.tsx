import type { Metadata } from "next";
import { CalculatorPage } from "@/components/calculators/calculator-page";
export const metadata: Metadata = {
  title: "MOT Type 1 Calculator UK | Hardcore, Tonnes & Bags",
  description:
    "Free MOT Type 1 hardcore calculator. Estimate aggregate tonnes, cubic metres, bulk bags and material costs for UK patios and driveways.",
  alternates: { canonical: "/mot-type-1-calculator" },
};
export default function Page() {
  return <CalculatorPage kind="type1" />;
}
