/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.tsi-senegal.sn',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fdkr6-1.fna.fbcdn.net',
      },
      {
        protocol: 'https',
        hostname: 'portsetcorridors.com',
      },
    ],
  },
};

module.exports = nextConfig;

