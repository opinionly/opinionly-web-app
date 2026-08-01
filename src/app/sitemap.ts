import type { MetadataRoute } from "next";
import { LEGAL_DOCS } from "@/lib/legal";

const SITE_URL = "https://www.opinionly.io";
const TEAMS_URL = "https://teams.opinionly.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 1,
      url: SITE_URL,
    },
    {
      changeFrequency: "weekly",
      lastModified,
      priority: 0.9,
      url: TEAMS_URL,
    },
    ...LEGAL_DOCS.map((slug) => ({
      changeFrequency: "yearly" as const,
      lastModified,
      priority: 0.3,
      url: `${SITE_URL}/${slug}`,
    })),
  ];
}
