/* =======================================
 * ブログページ
 * URL: src/app/blog/page.tsx
 * Created: 2025-06-18
 * Last updated: 2025-06-20
 * ======================================= */
// import BlogList from '@/components/blog/BlogList';
// import { blogData } from '@/data/blogData';

import NewsClient from '@/components/blog/NewsClient';

import styles from '@/styles/PageBlog.module.scss';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import type { Metadata } from 'next';
import Link from 'next/link';
export const generateMetadata = (): Metadata => {
  return {
    title: 'お知らせ一覧｜熊本日日新聞グループ キャリア採用サイト',
    description:
      '熊本日日新聞グループ キャリア採用サイトのお知らせ一覧です。採用情報や各社の最新情報を掲載しています。',
    alternates: {
      canonical: '/blog/',
    },
  };
};
export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.containerTitle}>
          <article>
            <h1>news</h1>
            <div className={styles.breadcrumb}>
              <Link href="/" className={styles.itemLink}>
                HOME
              </Link>
              <span>news</span>
            </div>
          </article>
        </section>
        <section className={styles.containerBlogList}>
          <article>
            {/* <BlogList items={blogData} isTopPage={false} /> */}
            <NewsClient isShopId="" />
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
