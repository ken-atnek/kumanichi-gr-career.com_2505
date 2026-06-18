import type { MetadataRoute } from 'next';
import { isRealProduction } from '@/lib/env';

export const dynamic = 'force-static';

const metadataBase =
  process.env.NEXT_PUBLIC_METADATA_BASE || 'https://kumanichi-gr-career.com';
const buildAbsoluteUrl = (path: string) => new URL(path, metadataBase).toString();

const staticRoutes = [
  '/',
  '/blog/',
  '/bipuresu-career/',
  '/bipuresu-career/blog/',
  '/digital-career/',
  '/digital-career/blog/',
  '/koh-career/',
  '/koh-career/blog/',
  '/sv-career/',
  '/sv-career/blog/',
  '/yusou-career/',
  '/yusou-career/blog/',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction) {
    return [];
  }

  return staticRoutes.map((path) => ({
    url: buildAbsoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path.endsWith('/blog/') ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.endsWith('/blog/') ? 0.7 : 0.8,
  }));
}
