import MiniCssExtractPlugin from "mini-css-extract-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@fortawesome/fontawesome-free"],
  webpack: (config) => {
    config.plugins.push(new MiniCssExtractPlugin());
    return config;
  },
  images: {
    domains: ["xw8oikocbczvr6wo.public.blob.vercel-storage.com"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
