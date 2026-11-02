import type { MetadataRoute } from "next";
import { siteUrl, calculators } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", ...calculators.map((c) => "/" + c.slug)].map((p) => ({
    url: siteUrl + p,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
