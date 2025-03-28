import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd
    ? "https://cdn.jsdelivr.net/gh/joashhsaoj/Yrksed@static/out/"
    : "",
  /* config options here */
};

export default nextConfig;
