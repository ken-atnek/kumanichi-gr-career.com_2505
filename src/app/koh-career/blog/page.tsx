/* =======================================
 * 熊日広告社 ブログページ
 * URL:src/app/koh-career/blog/page.tsx
 * Created: 2025-06-27
 * Last updated: 2025-06-27
 * ======================================= */
import BlogList from '@/components/blog/BlogList';
import { blogData } from '@/data/blogData';
import styles from '@/styles/PageBlog.module.scss';
import type { Metadata } from 'next';
import Link from 'next/link';
export const generateMetadata = (): Metadata => {
  return {
    title: '熊日グループ株式会社熊日広告社 キャリア採用サイト',
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
                (!item.category.child || item.category.child === '熊日広告社')
            )}
            isTopPage={false}
          />
        </article>
      </section>
    </>
  );
}
