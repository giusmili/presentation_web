export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://giusmili.github.io/presentation_web/sitemap.xml",
  };
}
