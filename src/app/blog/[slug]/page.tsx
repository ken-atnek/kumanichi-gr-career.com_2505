/* =======================================
 * BLOG 記事
 * URL: src/app/blog/[slug]/page.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-16
 * Last updated: 2025-05-16
 * ======================================= */
import { blogList } from '@/data/blogListData';
import Link from 'next/link';
import styles from '@/styles/components/ContainerBlogDetail.module.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const BlogDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const currentIndex = blogList.findIndex((item) => item.slug === slug);
  const post = blogList[currentIndex];

  if (!post) return notFound();

  const prevPost = blogList[currentIndex - 1];
  const nextPost = blogList[currentIndex + 1];

  return (
    <section className={styles.containerBlogDetail}>
      <article className={styles.blockHead}>
        <h2>{post.title}</h2>
        <div className={styles.h2Sidebar}>
          <Link href="/" className={styles.itemLink}>
            HOME
          </Link>
          <Link href="/blog/" className={styles.itemLink}>
            NEWS
          </Link>
          <span>{post.title}</span>
        </div>
      </article>
      <article className={styles.blockDetails}>
        <div className={styles.itemImage}>
          <Image src={post.image} alt={post.title} />
        </div>
        <div className={styles.wrapHead}>
          <span className={styles.itemDate}>{post.date}</span>
          <span className={styles.itemHead}>news</span>
        </div>
        <hr />
        <div className={styles.itemContent}>{post.content}</div>
        <div className={styles.itemCategory}>{post.category}</div>
        <hr />
        <nav className={styles.navPageLink}>
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className={styles.itemLink}>
              ← {prevPost.title}
            </Link>
          ) : (
            <div />
          )}
          {nextPost ? (
            <Link href={`/blog/${nextPost.slug}`} className={styles.itemLink}>
              {nextPost.title} →
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </section>
  );
};

export default BlogDetailPage;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return await Promise.resolve(
    blogList.map((post) => ({
      slug: post.slug,
    }))
  );
}
