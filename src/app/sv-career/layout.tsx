/* =======================================
 * 熊日サービス開発キャリア採用 Layout
 * URL:src/app/sv-career/layout.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */

import type { Metadata } from 'next';
import '@/styles/globals.scss';

import Header from '@/components/sv-career/common/Header';
import Footer from '@/components/sv-career/common/Footer';

// 実際の本番環境かどうかを判定
const isRealProduction = process.env.NEXT_PUBLIC_IS_REAL_PROD === 'true';

// 本番のみ metadataBase を設定
const metadataBase = isRealProduction
  ? new URL(
      process.env.NEXT_PUBLIC_METADATA_BASE ||
        'https://kumanichi-gr-career.com/'
    )
  : undefined;

export const metadata: Metadata = {
  ...(isRealProduction && {
    metadataBase,
    openGraph: {
      url: metadataBase?.toString(),
      type: 'website',
      images: [
        {
          url: './images/ogp.jpg',
          width: 1200,
          height: 630,
          alt: '熊日グループキャリア採用のOGP画像',
        },
      ],
    },
  }),
  title: ' 熊日グループキャリア採用',
  description: isRealProduction ? '熊日グループキャリア採用。' : undefined,
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
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
