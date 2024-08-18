/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    trailingSlash: true,
    async rewrites() {
        return [
            {
                source: "/menumagic/:path*/",
                destination: 'http://localhost:3000/:path*/'
            }
        ]
    }
}

export default nextConfig;
