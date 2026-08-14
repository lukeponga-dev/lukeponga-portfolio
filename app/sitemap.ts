import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lukeponga.dev";
  const projects = ["copstop", "safe-trade-nz", "nzta-traffic", "pi-hole", "ai-creative", "api-dashboards"];
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...projects.map(slug => ({ url: `${base}/projects/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
