import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kumanichi-gr-career.com",
  description: "熊日グループ採用サイトの引き継ぎ用プロジェクト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
