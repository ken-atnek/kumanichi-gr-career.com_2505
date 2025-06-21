/* =======================================
 * 株式会社熊日デジタル TOPページ
 * URL: src/app/digital-career/page.tsx
 * Created: 2025-05-15
 * Last updated: 2025-06-18
 * ======================================= */
import Link from 'next/link';
import styles from '@/styles/digital-career/PageTop.module.scss';
import entrySheetStyles from '@/styles/components/ContainerEntrySheet.module.scss';
import ContainerEntrySheet from '@/components/ContainerEntrySheet';
import BlogList from '@/components/blog/BlogList';
import { blogData } from '@/data/blogData';
import type { Metadata } from 'next';

import ContainerSlide from '@/components/digital-career/ContainerSlide';
export const generateMetadata = (): Metadata => {
  return {
    title:
      '株式会社熊日デジタル キャリア採用サイト｜熊本で働く、地域と生きる。',
    description:
      '株式会社熊日デジタルのキャリア採用公式サイト。新聞社からグループ各社まで、多様な職種で中途採用を実施中。熊本の未来を支える仕事に、あなたの経験を活かしませんか？',
  };
};
export default function Home() {
  return (
    <>
      <ContainerSlide />
      <section className={styles.containerNews} id="ContainerNews">
        <article>
          <h2>news</h2>
          <BlogList items={blogData.slice(0, 3)} isTopPage />
          <Link href="/blog/" className={styles.linkBlog}>
            すべてを見る
          </Link>
        </article>
      </section>
      <ContainerEntrySheet className={entrySheetStyles.bgRed} />
    </>
  );
}
