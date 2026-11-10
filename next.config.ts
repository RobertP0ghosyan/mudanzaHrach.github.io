import type { NextConfig } from 'next';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const nextConfig: NextConfig = { poweredByHeader: false, output: 'export', trailingSlash: true, images: { unoptimized: true }, basePath };
export default nextConfig;
