import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA).
  distDir: "./dist", // Changes the build output directory to `./dist/`.
};

export default nextConfig;
