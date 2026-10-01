import { SITE } from "@/lib/eduplay";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE}/main`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/kurikulum`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
