/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    // basePath: "/nextjs-static-pages",

    images :{
        unoptimized: true,
        // formats: ['image/webp','image/avif'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
                
            }
        ]
    }
}

module.exports = nextConfig
