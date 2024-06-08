/** @type {import('next').NextConfig} **/
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['i.ytimg.com', 'localhost'],
    },
}

module.exports = nextConfig
