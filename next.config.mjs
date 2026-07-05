const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: isProd ? "/Portifolio2.0" : "",
  assetPrefix: isProd ? "/Portifolio2.0/" : "",

  compiler: {
    removeConsole: isProd,
  },
};

export default nextConfig;