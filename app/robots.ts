import type { MetadataRoute } from 'next';

export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://nextjs13-mvp.vercel.app/sitemap.xml',
  };
}
