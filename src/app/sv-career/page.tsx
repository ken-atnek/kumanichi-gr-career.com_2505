/* =======================================
 * 熊日サービス開発 TOPページ
 * URL:src/app/sv-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import Link from 'next/link';
import styles from '@/styles/sv-career/PageTop.module.scss';
// import entrySheetStyles from '@/styles/components/ContainerEntrySheet.module.scss';
// import ContainerEntrySheet from '@/components/ContainerEntrySheet';
import BlogList from '@/components/blog/BlogList';
import { blogData } from '@/data/blogData';
import type { Metadata } from 'next';
import { newsList } from '@/data/newsList';
import NewsList from '@/components/NewsList';
import ContainerSlide from '@/components/sv-career/ContainerSlide';
import ContainerAbout from '@/components/sv-career/ContainerAbout';
import Greeting from '@/assets/images/sv-career/greeting.webp';
import Image from 'next/image';
import ContainerSchedule from '@/components/sv-career/ContainerSchedule';
import ContainerBottomSlide from '@/components/sv-career/ContainerBottomSlide';
import ContainerJobDescription from '@/components/sv-career/ContainerJobDescription';
// import ExternalLink from '@/components/common/ExternalLink';
import ContainerQuestions from '@/components/sv-career/ContainerQuestions';
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
      <section className={styles.containerNews} id="SvContainerNews">
        <article>
          <div className={styles.wrapH2}>
            <h2>news</h2>
            <span>新着情報</span>
          </div>
          <NewsList
            items={newsList.filter(
              (item) =>
                item.company === '熊日グループ' ||
                item.company === '熊日サービス開発'
            )}
          />
        </article>
      </section>
      <section className={styles.containerBlog} id="SvContainerBlog">
        <article>
          <BlogList
            items={blogData
              .filter(
                (item) =>
                  item.category.parent === '熊日グループ' &&
                  (!item.category.child ||
                    item.category.child === '熊日サービス開発')
              )
              .slice(0, 3)}
            isTopPage
          />
          <Link href="/sv-career/blog/" className={styles.linkBlog}>
            すべてを見る
          </Link>
        </article>
      </section>
      <section className={styles.containerAbout} id="SvContainerAbout">
        <article>
          <div className={styles.wrapH2}>
            <h2>ABOUT</h2>
            <span>弊社の特徴</span>
            <ContainerAbout />
          </div>
        </article>
      </section>
      <section className={styles.containerGreeting} id="SvContainerGreeting">
        <article>
          <div className={styles.wrapH2}>
            <h2>GREETINGS</h2>
            <span>代表挨拶</span>
          </div>
          <div className={styles.wrapContents}>
            <div className={styles.itemGreeting}>
              <h3>
                熊本の文化の発展の
                <br />
                一翼を担う魅力をともに。
              </h3>
              <p>
                私たち熊日サービス開発は、熊本日日新聞社のグループ企業の一員として昭和48年（1973年）に創立。出版、セミナー、DTP、保険の4部門を中心に、現在約80名が働いています。熊日グループの中でも、特に幅広く多様な事業を展開していますが、近年は熊本市中央公民館や熊本県民交流館パレアの指定管理に参入するなど、事業領域の拡大にも積極的に取り組んでいます。コロナ禍を経験して、私たちのライフスタイルも大きく様変わりしつつありますが、さまざまな活動を通して熊本の文化の発展の一翼を担うという創業以来の方針は今後も変わりません。これまで積み上げてきた経験とスキルを活かしながら、職種にこだわらず様々な業務にチャレンジする意欲とバイタリティに溢れる仲間を求めます！
              </p>
            </div>
            <figure>
              <Image src={Greeting} alt="代表取締役社長 / 緒方　宏則" />
              <figcaption>
                <span>代表取締役社長</span> 緒方　宏則
              </figcaption>
            </figure>
          </div>
        </article>
      </section>
      <section className={styles.containerSchedule} id="SvContainerSchedule">
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
            title="熊日サービス開発紹介動画"
            src="https://www.youtube.com/embed/IMBtkRpcMYE?loop=0&amp;autoplay=0&amp;fs=1&amp;rel=0"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <ContainerJobDescription />

      <ContainerQuestions />
      {/* <ContainerEntrySheet className={entrySheetStyles.bgRed} /> */}
    </>
  );
}
