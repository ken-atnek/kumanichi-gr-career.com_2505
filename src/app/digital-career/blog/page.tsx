/* =======================================
 * 熊日デジタルブログページ
 * URL: src/app/digital-career/blog/page.tsx
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
    title: '熊日グルー株式会社熊日デジタル キャリア採用サイト',
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
                (!item.category.child || item.category.child === '熊日デジタル')
            )}
            isTopPage={false}
          />
        </article>
      </section>
    </>
  );
}
