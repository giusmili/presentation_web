const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/presentation_web" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  agentRules: false,
};

export default nextConfig;
