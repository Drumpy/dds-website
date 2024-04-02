/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/r/:path*",
        destination: "https://r.acme.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
