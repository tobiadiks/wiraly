// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
 const nextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/saasery/image/upload/**',
      },
    ],
  },
  
}

module.exports = nextConfig