import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/api-docs',
        destination: 'https://api.ssrinnovationlab.com/api/browse/',
        permanent: true,
      },
      {
        source: '/developer',
        destination: 'https://api.ssrinnovationlab.com/api/browse/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
