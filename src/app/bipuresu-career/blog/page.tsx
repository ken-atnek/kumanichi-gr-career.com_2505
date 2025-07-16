/* =======================================
 * 熊日会館 ブログページ
 * URL: src/app/bipuresu-career/blog/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-07-07
 * ======================================= */
import BlogList from '@/components/blog/BlogList';
import { blogData } from '@/data/blogData';
import styles from '@/styles/PageBlog.module.scss';
import type { Metadata } from 'next';
import Link from 'next/link';
export const generateMetadata = (): Metadata => {
  return {
    title: '株式会社熊日会館 キャリア採用サイト',
    description: '',
  };
};
export default function BlogPage() {
  return (
    <>
      <section className={styles.containerTitle}>
        <article>
          <h2>news</h2>
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
          <BlogList
            items={blogData.filter(
              (item) =>
                item.category.parent === '熊日グループ' &&
                (!item.category.child || item.category.child === '熊日会館')
            )}
            isTopPage={false}
          />
        </article>
      </section>
    </>
  );
}
