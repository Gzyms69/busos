import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['duckdb-async', 'duckdb', 'better-sqlite3']
};

export default nextConfig;
