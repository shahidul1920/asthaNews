/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/astha-news/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
