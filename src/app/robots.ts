import type { MetadataRoute } from 'next';
import { isRealProduction } from '@/lib/env';

export const dynamic = 'force-static';

const metadataBase =
  process.env.NEXT_PUBLIC_METADATA_BASE || 'https://kumanichi-gr-career.com';
const buildAbsoluteUrl = (path: string) => new URL(path, metadataBase).toString();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isRealProduction
      ? {
          userAgent: '*',
          allow: '/',
        }
      : {
          userAgent: '*',
          disallow: '/',
        },
    ...(isRealProduction && {
      sitemap: buildAbsoluteUrl('/sitemap.xml'),
    }),
  };
}
