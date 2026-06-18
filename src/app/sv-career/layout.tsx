/* =======================================
 * 熊日サービス開発キャリア採用 Layout
 * URL:src/app/sv-career/layout.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */

import Header from '@/components/sv-career/common/Header';
import Footer from '@/components/sv-career/common/Footer';

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
