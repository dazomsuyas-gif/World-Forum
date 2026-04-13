/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        typedRoutes: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
    },
    transpilePackages: ['three'],
};

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
});

module.exports = withPWA(nextConfig);

