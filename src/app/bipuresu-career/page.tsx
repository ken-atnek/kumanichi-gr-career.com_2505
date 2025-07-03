/* =======================================
 * 熊日会館 TOPページ
 * URL:src/app/bipuresu-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import Link from 'next/link';
import styles from '@/styles/bipuresu-career/PageTop.module.scss';
import entrySheetStyles from '@/styles/components/ContainerEntrySheet.module.scss';
import ContainerEntrySheet from '@/components/ContainerEntrySheet';
import BlogList from '@/components/blog/BlogList';
import { blogData } from '@/data/blogData';
import type { Metadata } from 'next';
import { newsList } from '@/data/newsList';
import NewsList from '@/components/NewsList';
import ContainerSlide from '@/components/bipuresu-career/ContainerSlide';
import ContainerAbout from '@/components/bipuresu-career/ContainerAbout';
import ContainerSchedule from '@/components/bipuresu-career/ContainerSchedule';
import ContainerBottomSlide from '@/components/bipuresu-career/ContainerBottomSlide';
import ContainerJobDescription from '@/components/bipuresu-career/ContainerJobDescription';
// import ExternalLink from '@/components/common/ExternalLink';
import ContainerQuestions from '@/components/bipuresu-career/ContainerQuestions';
export const generateMetadata = (): Metadata => {
  return {
    title:
      '株式会社サービス開発 キャリア採用サイト｜熊本で働く、地域と生きる。',
    description:
      '株式会社サービス開発のキャリア採用公式サイト。新聞社からグループ各社まで、多様な職種で中途採用を実施中。熊本の未来を支える仕事に、あなたの経験を活かしませんか？',
  };
};
export default function Home() {
  return (
    <>
      <ContainerSlide />
      <section className={styles.containerNews} id="BipuresuContainerNews">
        <article>
          <div className={styles.wrapH2}>
            <h2>news</h2>
            <span>新着情報</span>
          </div>
          <NewsList
            items={newsList.filter(
              (item) =>
                item.company === '熊日グループ' || item.company === '熊日会館'
            )}
          />
        </article>
      </section>
      <section className={styles.containerBlog} id="BipuresuContainerBlog">
        <article>
          <BlogList
            items={blogData
              .filter(
                (item) =>
                  item.category.parent === '熊日グループ' &&
                  (!item.category.child || item.category.child === '熊日会館')
              )
              .slice(0, 3)}
            isTopPage
          />
          <Link href="/sv-career/blog/" className={styles.linkBlog}>
            すべてを見る
          </Link>
        </article>
      </section>
      <section className={styles.containerAbout} id="BipuresuContainerAbout">
        <article>
          <div className={styles.wrapH2}>
            <h2>ABOUT</h2>
            <span>弊社の特徴</span>
            <ContainerAbout />
          </div>
        </article>
      </section>
      <section
        className={styles.containerGreeting}
        id="BipuresuContainerGreeting"
      >
        <article>
          <div className={styles.wrapH2}>
            <h2>GREETINGS</h2>
            <span>代表挨拶</span>
          </div>
          <div className={styles.wrapContents}>
            <div className={styles.itemGreeting}>
              <h3>
                「びぷれす熊日会館」は熊本市の上通町にある熊本日日新聞社発祥の地に建つ複合ビルです。
              </h3>
              <p>
                2002年にオープンし開業22年目を迎えました。ビルに入居する熊本市現代美術館、ホテル日航熊本、鶴屋New-Sをたくさんのお客様にご利用いただいています。私たちの使命はご利用のお客様に安心・安全で楽しい空間を提供し、街の活性化を図ることです。昨今人口減少問題が盛んに語られており熊本も例外ではありません。加えて都市間競争も激しさが増していることはご存じだと思います。それらの問題をクリアしながら街の魅力を高め、皆さんに楽しんでいただける「びぷれす熊日会館」を一緒に作り上げていきませんか。
              </p>
              <div className={styles.name}>
                <span>代表取締役社長</span>
                宮本　和明
              </div>
            </div>
          </div>
        </article>
      </section>
      <section
        className={styles.containerSchedule}
        id="BipuresuContainerSchedule"
      >
        <article>
          <div className={styles.wrapH2}>
            <h2>schedule</h2>
            <span>1日のスケジュール</span>
          </div>
          <ContainerSchedule />
        </article>
      </section>
      <ContainerBottomSlide />
      <ContainerJobDescription />

      <ContainerQuestions />
      <ContainerEntrySheet className={entrySheetStyles.bgRed} />
    </>
  );
}
