import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    devIndicators: false,
    env: {
        NEXT_PUBLIC_API_ACCESS_TOKEN: process.env.NEXT_PUBLIC_API_ACCESS_TOKEN,
    },
    turbopack: {
        root: process.cwd(),
    },
};

export default nextConfig;
