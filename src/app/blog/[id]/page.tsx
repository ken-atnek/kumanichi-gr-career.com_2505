/* =======================================
 * ブログ詳細ページ
 * URL: src/app/blog/[id]/page.tsx
 * Created: 2025-06-14
 * Last updated: 2025-06-14
 * ======================================= */
import type { Metadata } from 'next';
import { blogData } from '@/data/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import styles from '@/styles/PageBlog.module.scss';
type Props = {
  params: Promise<{ id: string }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = blogData.find((item) => item.id === id);
  if (!article) return {};

  return {
    title: `${article.title} |熊日グループキャリア採用`,
  };
}
export default async function BlogDetailPage({ params }: Props) {
  const { id } = await params;
  const article = blogData.find((item) => item.id === id);

  if (!article) return notFound();

  const currentIndex = blogData.findIndex((item) => item.id === id);
  const prevArticle = blogData[currentIndex - 1] ?? null;
  const nextArticle = blogData[currentIndex + 1] ?? null;

  return (
    <>
      <Header />
      <main>
        <section className={styles.containerDetailTitle}>
          <article>
            <h2>{article.title}</h2>
            <div className={styles.breadcrumb}>
              <Link href="/">HOME</Link>
              <Link href="/blog/">NEWS</Link>
              <p className={styles.head}>{article.title}</p>
            </div>
          </article>
        </section>
        <section className={styles.containerDetailContent}>
          <article>
            <Image
              src={article.thumb}
              alt={article.title}
              className={styles.thumb}
            />
            <div className={styles.wrapHead}>
              <span className={styles.date}>{article.date}</span>
              <span className={styles.category}>
                {article.category.child ?? article.category.parent}
              </span>
            </div>
            <div className={styles.articleBody}>{article.body.content}</div>
          </article>
          <nav className={styles.articleNav}>
            <ul>
              <li>
                {prevArticle && (
                  <Link
                    href={`/blog/${prevArticle.id}`}
                    className={styles.prev}
                  >
                    <span>前の記事へ</span>
                  </Link>
                )}
              </li>
              <li>
                {nextArticle && (
                  <Link
                    href={`/blog/${nextArticle.id}`}
                    className={styles.next}
                  >
                    <span>次の記事へ</span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return blogData.map((item) => ({ id: item.id }));
}
