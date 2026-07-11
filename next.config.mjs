/** @type {import('next').NextConfig} */

// Detecta se o build está sendo executado pelo GitHub Actions
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },


  basePath: isGitHubPages ? "/Portifolio2.0" : "",
  assetPrefix: isGitHubPages ? "/Portifolio2.0/" : "",

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;