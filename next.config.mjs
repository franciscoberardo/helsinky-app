/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      console.log('Development mode: HMR enabled');
    }
    return config;
  },
};

export default nextConfig;
