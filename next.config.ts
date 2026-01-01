import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    // Only redirect to presenter-docs in production (Vercel)
    // Use ?redirect=false to bypass and view the blog
    if (process.env.VERCEL) {
      return [
        {
          source: '/',
          destination: '/presenter-docs',
          permanent: false,
          missing: [
            {
              type: 'query',
              key: 'redirect',
            },
          ],
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
