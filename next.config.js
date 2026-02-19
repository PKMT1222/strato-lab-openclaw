/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/youtube-proxy',
        destination: 'https://www.googleapis.com/youtube/v3/',
      },
    ]
  },
}

module.exports = nextConfig