/* =======================================
 * 熊日グループキャリア採用 Layout
 * URL:src/app/koh-career/layout.tsx
 * Created: 2025-06-26
 * Last updated: 2025-06-26
 * ======================================= */

import Header from '@/components/koh-career/common/Header';
import Footer from '@/components/koh-career/common/Footer';

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
