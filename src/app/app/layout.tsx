/* =======================================
 * 西養寺 Layout
 * URL:src/app/layout.tsx
 * Created: 2025-05-08
 * Last updated: 2025-05-08
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE || 'https://kumamoto-saiyouji.jp/'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      title: ' 西養寺',
      description:
        '西養寺は1584年に熊本・荒尾で開基以来、御仏の心と共に地域のよりどころとして存在してきました。日常の暮らしや結婚式や葬儀などの人生の節目においても仏様のお教えに沿った形でお手伝いも行っております。',
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: './images/ogp.jpg',
          width: 1200,
          height: 630,
          alt: '亀の甲温泉のOGP画像',
        },
      ],
    },
  }),
  title: ' 西養寺',
  description: isRealProduction
    ? '西養寺は1584年に熊本・荒尾で開基以来、御仏の心と共に地域のよりどころとして存在してきました。日常の暮らしや結婚式や葬儀などの人生の節目においても仏様のお教えに沿った形でお手伝いも行っております。。'
    : undefined,
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
          name="robots"
          content={isRealProduction ? 'index, follow' : 'noindex, nofollow'}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
