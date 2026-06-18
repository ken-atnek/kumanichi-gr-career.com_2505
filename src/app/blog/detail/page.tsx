/* =======================================
 * ブログ詳細ページ
 * URL: src/app/blog/detail?id=◯
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import type { Metadata } from 'next';
import { Suspense } from 'react';
import NewsDetailClient from '@/app/blog/detail/NewsDetailClient';

export const generateMetadata = (): Metadata => {
  return {
    title: 'お知らせ詳細｜熊本日日新聞グループ キャリア採用サイト',
    description:
      '熊本日日新聞グループ キャリア採用サイトのお知らせ詳細ページです。',
    robots: 'noindex, nofollow',
  };
};

export default function BlogDetailPageWrapper() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <NewsDetailClient />
    </Suspense>
  );
}
