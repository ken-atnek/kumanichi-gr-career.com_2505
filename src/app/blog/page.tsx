/* =======================================
 * BLOG 一覧
 * URL: src/app/blog/page.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-16
 * Last updated: 2025-05-16
 * ======================================= */
import styles from '@/styles/blogList.module.scss';
import BlockBlogList from '@/components/BlockBlogList';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <section className={styles.containerBlogList}>
        <article className={styles.blockHead}>
          <h2>news</h2>
          <div className={styles.h2Sidebar}>
            <Link href="/" className={styles.itemLink}>
              HOME
            </Link>
            <span>NEWS</span>
          </div>
        </article>
        <article className={styles.blockDetails}>
          <BlockBlogList />
        </article>
      </section>
    </>
  );
}
