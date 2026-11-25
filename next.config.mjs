/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Radarseq123',
  assetPrefix: '/Radarseq123/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
