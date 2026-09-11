/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/RebaFlix.apk',
        destination: '/rebaflix.apk',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
