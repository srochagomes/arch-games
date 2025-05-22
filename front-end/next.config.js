/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5446',
        pathname: '/uploads/**',
      },
    ],
    domains: ['localhost'],
    unoptimized: true,
  },
}

module.exports = nextConfig 