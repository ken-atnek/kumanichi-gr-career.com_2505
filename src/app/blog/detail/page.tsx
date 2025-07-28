/* =======================================
 * ブログ詳細ページ
 * URL: src/app/blog/detail?id=◯
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import { Suspense } from 'react';
import NewsDetailClient from '@/app/blog/detail/NewsDetailClient';

export default function BlogDetailPageWrapper() {
  return (
    <Suspense fallback={<div>読み込み中...</div>}>
      <NewsDetailClient />
    </Suspense>
  );
}