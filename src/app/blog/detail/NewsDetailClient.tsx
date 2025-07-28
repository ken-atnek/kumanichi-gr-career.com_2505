'use client';

/* =======================================
 * ニュース詳細ページ（クエリパラメータ使用）
 * URL: /news/detail?id=◯
 * output: 'export' 対応
 * ======================================= */

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// import type { Metadata } from 'next';
// import { blogData } from '@/data/blogData';
// import { notFound } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import styles from '@/styles/PageBlog.module.scss';

type ApiNewsItem = {
  k_id: string | number;
  k_date?: string;
  k_title: string;
  k_body: string;
  k_thumb: string;
  k_category: {
    k_parent: string;
    k_child?: string;
  };
  k_next?: number | string;
  k_back?: number | string;
};

export default function NewsDetailPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const s_id = searchParams.get('s_id');
  const [data, setData] = useState<ApiNewsItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!id || s_id === null) return;
    fetch(`https://demo-kumanichi-gr-career.tuna-pic.co.jp/api/news/?sid=${s_id}&id=${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('記事が見つかりません');
        return res.json();
      })
      .then((item) => setData(item))
      .catch((err) => setError(err.message));
  }, [id, s_id]);
  console.log(data);
  if (!id) return <div className={styles.error}>IDが指定されていません</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!data) return <div className={styles.loading}>読み込み中...</div>;
  return (
    <>
      <Header />
      <main>
        <section className={styles.containerDetailTitle}>
          <article>
            <h2>{data.k_title}</h2>
            <div className={styles.breadcrumb}>
              <Link href="/">HOME</Link>
              <Link href="/blog/">NEWS</Link>
              <p className={styles.head}>{data.k_title}</p>
            </div>
          </article>
        </section>
        <section className={styles.containerDetailContent}>
          <article>
            <Image
              src={data.k_thumb}
              width={1170}
              height={658}
              alt={data.k_title}
              className={styles.thumb}
            />
            <div className={styles.wrapHead}>
              <span className={styles.date}>{data.k_date}</span>
              <span className={styles.category}>
                {data.k_category.k_child ?? data.k_category.k_parent}
              </span>
            </div>
            <div className={styles.articleBody} dangerouslySetInnerHTML={{ __html: data.k_body }} />
          </article>
          <nav className={styles.articleNav}>
            <ul>
              <li>
                {data.k_back != null && (
                  <Link
                    href={`/blog/detail?s_id=${s_id}&id=${data.k_back}`}
                    className={styles.prev}
                  >
                    <span>前の記事へ</span>
                  </Link>
                )}
              </li>
              <li>
                {data.k_next != null && (
                  <Link
                    href={`/blog/detail?s_id=${s_id}&id=${data.k_next}`}
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
