/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_PUBLIC_API_URL: process.env.REACT_APP_API_URL,
      NEXT_PUBLIC_SITE_URL: process.env.REACT_APP_SITE_URL,
    },
};

export default nextConfig;
