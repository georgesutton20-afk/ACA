import type { NextConfig } from "next";

// For GitHub Pages we produce a fully static export. The site is served from
// https://<user>.github.io/<repo>/, so assets must be prefixed with the repo
// name via basePath. The deploy workflow sets NEXT_PUBLIC_BASE_PATH=/<repo>.
// Locally / on Vercel the var is unset, so basePath is "" and nothing changes.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
