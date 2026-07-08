import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Menetapkan root folder proyek saat ini untuk menghindari warning multi-lockfile
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
