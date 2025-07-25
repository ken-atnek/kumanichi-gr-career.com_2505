'use client';
/* =======================================
 * ニュースデータ取得コンポーネント
 * 動的にAPIからデータを取得して NewsList に渡す
 * URL: src/components/news/NewsClient.tsx
 * Created: 2025-06-28
 * ======================================= */
import { useEffect, useState,useCallback } from 'react';
import { fetchNews } from '@/lib/fetchNewsApi';
import { BlogItem } from '@/types/blog';
import BlogList from '@/components/blog/BlogList';
import styles from '@/styles/PageNews.module.scss';

type Props = {
  isShopId?: string | null;
};

//APIから取得するデータの件数
const PER_PAGE = 30;
//ブログ一覧を表示するコンポーネント
export default function NewsClient({ isShopId }: Props) {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fetchData = useCallback(
    async (page: number) => {
      const offset = page * PER_PAGE;
      try {
        const { news, total } = await fetchNews(isShopId ?? '', PER_PAGE, offset);
        setItems(news);
        setTotal(total);
      } catch (err) {
        console.error('API取得失敗:', err);
        setError('ニュースデータの取得に失敗しました');
      }
    },
    [isShopId]
  );
  useEffect(() => {
    fetchData(page);
  }, [fetchData, page]);
  // エラーハンドリング
  if (error) return <p>{error}</p>;
  if (!items.length) return <p>読み込み中...</p>;
  //最終ページの判定
  const isLastPage = (page + 1) * PER_PAGE >= total;
  return (
    <>
      <BlogList items={items} isTopPage={false} />
      {/* ページャーが必要なときだけ表示 */}
      {(page > 0 || !isLastPage) && (
        <div className={styles.wrapPager}>
          {/* Backボタンは1ページ目では表示しない */}
          {page > 0 && (
            <button
              className={styles.prev}
              type="button"
              onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            >
              Back
            </button>
          )}
          {/* Nextボタンは最終ページで非表示 */}
          {!isLastPage && (
            <button
              className={styles.next}
              type="button"
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          )}
        </div>
      )}
    </>
  );
}
