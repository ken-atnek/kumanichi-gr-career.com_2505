/* =======================================
 * 株式会社熊日広告社 TOPページ
 * URL: src/app/koh-career/page.tsx
 * Created: 2025-06-26
 * Last updated: 2025-06-26
 * ======================================= */
import Link from 'next/link';
import styles from '@/styles/koh-career/PageTop.module.scss';
import entrySheetStyles from '@/styles/components/ContainerEntrySheet.module.scss';
import ContainerEntrySheet from '@/components/ContainerEntrySheet';
import BlogList from '@/components/blog/BlogList';
import { blogData } from '@/data/blogData';
import type { Metadata } from 'next';
import { newsList } from '@/data/newsList';
import NewsList from '@/components/NewsList';
import ContainerSlide from '@/components/koh-career/ContainerSlide';
import ContainerAbout from '@/components/koh-career/ContainerAbout';
import ContainerSchedule from '@/components/koh-career/ContainerSchedule';
import ContainerBottomSlide from '@/components/koh-career/ContainerBottomSlide';
import ContainerJobDescription from '@/components/koh-career/ContainerJobDescription';
import ContainerQuestions from '@/components/koh-career/ContainerQuestions';
export const generateMetadata = (): Metadata => {
  return {
    title: '株式会社熊日広告社 キャリア採用サイト｜熊本で働く、地域と生きる。',
    description:
      '株式会社熊日広告社のキャリア採用公式サイト。新聞社からグループ各社まで、多様な職種で中途採用を実施中。熊本の未来を支える仕事に、あなたの経験を活かしませんか？',
  };
};
export default function Home() {
  return (
    <>
      <ContainerSlide />
      <section className={styles.containerNews} id="DigitalContainerNews">
        <article>
          <div className={styles.wrapH2}>
            <h2>news</h2>
            <span>新着情報</span>
          </div>
          <NewsList
            items={newsList.filter(
              (item) =>
                item.company === '熊日グループ' || item.company === '熊日広告社'
            )}
          />
        </article>
      </section>
      <section className={styles.containerBlog} id="DigitalContainerBlog">
        <article>
          <BlogList
            items={blogData
              .filter(
                (item) =>
                  item.category.parent === '熊日グループ' &&
                  (!item.category.child || item.category.child === '熊日広告社')
              )
              .slice(0, 3)}
            isTopPage
          />
          <Link href="/koh-career/blog/" className={styles.linkBlog}>
            すべてを見る
          </Link>
        </article>
      </section>
      <section className={styles.containerAbout} id="DigitalContainerAbout">
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
        id="DigitalContainerGreeting"
      >
        <article>
          <div className={styles.wrapH2}>
            <h2>GREETINGS</h2>
            <span>代表挨拶</span>
          </div>
          <div className={styles.wrapContents}>
            <p>
              熊日広告社は新聞をはじめとして、電波、WEB、折込など様々な媒体の広告営業を行っています。その活動範囲はイベントの企画運営、地域や企業が抱える課題の解決、地域を共創していくための提案など多岐に渡っています。デジタル社会が進み、価値観の多様化や変化のスピードが加速している中、広告主と生活者をつなぐ私たちの役割はますます大切になっています。広告を通じて人と人がつながり、人と地域がつながり、地域の活力につながります。
              <br />
              「地域に信頼され、地域とともに成長する熊日広告社」
              <br />
              「組織力、行動力を発揮し、躍動する熊日広告社」
              <br />
              「時代の変化に対応し、価値を創造する熊日広告社」
              <br />
              を目指し、私たちはこれからも挑戦し続けます。
            </p>

            <div className={styles.name}>
              <span>代表取締役社長</span>
              深松　真也
            </div>
          </div>
        </article>
      </section>
      <section
        className={styles.containerSchedule}
        id="DigitalContainerSchedule"
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
      <section className={styles.containerMovie}>
        <h2>会社紹介動画</h2>
        <div className={styles.boxHeadMovie}>
          <iframe
            title="熊日デジタル紹介動画"
            src="https://www.youtube.com/embed/JioiM11f66Q?loop=0&amp;autoplay=0&amp;fs=1&amp;rel=0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <ContainerJobDescription />

      <ContainerQuestions />
      <ContainerEntrySheet className={entrySheetStyles.bgRed} />
    </>
  );
}
