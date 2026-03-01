/** @type {import('next').NextConfig} */
const nextConfig = {
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
