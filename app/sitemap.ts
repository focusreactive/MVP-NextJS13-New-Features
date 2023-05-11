import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://nextjs13-mvp.vercel.app',
      lastModified: new Date(),
    },
    {
      url: 'https://nextjs13-mvp.vercel.app/layout',
      lastModified: new Date(),
    },
    {
      url: 'https://nextjs13-mvp.vercel.app/metadata',
      lastModified: new Date(),
    },
    {
      url: 'https://nextjs13-mvp.vercel.app/overview',
      lastModified: new Date(),
    },
    {
      url: 'https://nextjs13-mvp.vercel.app/static',
      lastModified: new Date(),
    },
  ];
}
