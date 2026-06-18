/* =======================================
 * 熊日グループキャリア採用 Layout
 * URL:src/app/digital-career/layout.tsx
 * Created: 2025-05-15
 * Last updated: 2025-05-15
 * ======================================= */

import Header from '@/components/digital-career/common/Header';
import Footer from '@/components/digital-career/common/Footer';

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
