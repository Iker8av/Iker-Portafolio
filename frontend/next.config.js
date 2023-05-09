/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "i.imgur.com",
        },
      ],
    },
  },
};

module.exports = nextConfig;
