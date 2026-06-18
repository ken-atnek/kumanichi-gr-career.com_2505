/* =======================================
 * 熊日グループキャリア採用 Layout
 * URL:src/app/layout.tsx
 * Created: 2025-05-15
 * Last updated: 2025-05-15
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';
import { isRealProduction } from '@/lib/env';

const siteName = '熊本日日新聞グループ キャリア採用サイト';
const siteDescription =
  '熊本日日新聞グループのキャリア採用公式サイト。新聞社からグループ各社まで、多様な職種で中途採用を実施中。熊本の未来を支える仕事に、あなたの経験を活かしませんか？';
const defaultOgImage = '/images/slide/slide01.webp';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE || 'https://kumanichi-gr-career.com'
    )
  : undefined;

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      title: siteName,
      description: siteDescription,
      siteName,
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: '熊日グループキャリア採用のOGP画像',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteName,
      description: siteDescription,
      images: [defaultOgImage],
    },
  }),
  robots: isRealProduction ? 'index, follow' : 'noindex, nofollow',
  icons: [
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon.ico',
      media: '(prefers-color-scheme: dark)',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
