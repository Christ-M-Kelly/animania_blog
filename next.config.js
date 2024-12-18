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
  },
};

export default nextConfig;
