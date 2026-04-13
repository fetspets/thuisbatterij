import type { MetadataRoute } from 'next';

const BASE_URL = 'https://thuisbatterijbelgie.be';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/beste-thuisbatterij`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/thuisbatterij-prijs`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/offerte-thuisbatterij`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/is-thuisbatterij-rendabel`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/thuisbatterij-premie`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/thuisbatterij-zonder-zonnepanelen`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tesla-vs-lg-thuisbatterij`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hoeveel-kwh-thuisbatterij`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/thuisbatterij-installatie`,
      lastModified: new Date('2026-04-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
