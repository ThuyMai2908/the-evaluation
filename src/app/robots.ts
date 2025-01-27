import { DOMAIN_URL } from "@/config/common";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/me/",
    },
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
  };
}
