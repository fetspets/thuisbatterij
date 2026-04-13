import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/ga/',
    },
    sitemap: 'https://thuisbatterijbelgie.be/sitemap.xml',
  };
}
