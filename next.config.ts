import type { NextConfig } from "next";

/* GitHub Pages project sites live under /repo-name; user sites (user.github.io) use root. */
const basePath = process.env.BASE_PATH?.trim() || undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
