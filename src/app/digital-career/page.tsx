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
import { newsList } from '@/data/newsList';
import NewsList from '@/components/NewsList';
import ContainerSlide from '@/components/digital-career/ContainerSlide';
import ContainerAbout from '@/components/digital-career/ContainerAbout';
import Greeting from '@/assets/images/digital-career/greeting.webp';
import Image from 'next/image';
import ContainerSchedule from '@/components/digital-career/ContainerSchedule';
import ContainerBottomSlide from '@/components/digital-career/ContainerBottomSlide';
import ContainerJobDescription from '@/components/digital-career/ContainerJobDescription';
import ExternalLink from '@/components/common/ExternalLink';
import ContainerQuestions from '@/components/digital-career/ContainerQuestions';
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
      <section className={styles.containerNews} id="DigitalContainerNews">
        <article>
          <div className={styles.wrapH2}>
            <h2>news</h2>
            <span>新着情報</span>
          </div>
          <NewsList
            items={newsList.filter(
              (item) =>
                item.company === '熊日グループ' ||
                item.company === '熊日デジタル'
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
                  (!item.category.child ||
                    item.category.child === '熊日デジタル')
              )
              .slice(0, 3)}
            isTopPage
          />
          <Link href="/blog/" className={styles.linkBlog}>
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
            <span>代表挨拶／代表取締役社長　岩下勉</span>
          </div>
          <div className={styles.wrapContents}>
            <p>
              このたび熊日デジタルの社長に就任いたしました岩下勉です。
              <br />
              <br />
              自社名を名乗ると「何をしている会社ですか？」と聞かれることが、まだ少なくありません。熊日デジタルは2022年に誕生した熊本日日新聞社グループの中で最も若い会社ですので、まずは社名だけでも覚えてもらおうと頑張っている最中です。
              <br />
              <br />
              私たちは、「ウェブサイト制作」「映像制作・配信」「ウェブプロモーション」を柱とし、これらをワンストップでもご提供できることを強みとしています。
              <br />
              <br />
              社会やビジネスがめまぐるしく動き、ちょっと先の未来すら見えにくい今の時代。情報があふれ、価値観もどんどん多様化しています。そんな変化の激しい時代だからこそ、アナログかデジタルかを問わず、地域の人と人が互いにしっかりとつながり合う、コミュニケーションの力がいっそう重要になってくると確信しています。
              <br />
              <br />
              熊本の新聞社として80余年培ってきたコンテンツ力と情報への信頼、地域のネットワークを基盤とし、新たにデジタルの創造力を掛け合わせて、ワクワクできる熊本の未来を、皆さまと一緒に描いていきたいと願っています。どうぞお気軽にご相談ください。
            </p>
            <figure>
              <Image src={Greeting} alt="代表取締役社長 / 岩下 勉" />
              <figcaption>代表取締役社長 / 岩下 勉</figcaption>
            </figure>
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
      <ContainerJobDescription />
      <section className={styles.containerMovie}>
        <h2>会社紹介動画</h2>
        <div className={styles.boxHeadMovie}>
          <iframe
            title="熊日デジタル紹介動画"
            src="https://www.youtube.com/embed/oqjbr-D-Vow?loop=0&amp;autoplay=0&amp;fs=1&amp;rel=0"
            allowFullScreen
          ></iframe>
        </div>
        <div className={styles.boxFootMovie}>
          <iframe
            src="https://www.youtube.com/embed/MLCUpvsWMZc?loop=0&amp;autoplay=0&amp;fs=1&amp;rel=0"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/UVLhagKLuTk?loop=0&amp;autoplay=0&amp;fs=1&amp;rel=0"
            allowFullScreen
          ></iframe>
        </div>
        <ExternalLink
          href="https://kumanichi-digital.com"
          className={styles.itemLink}
        >
          <span>映像制作実績は熊日デジタルHPから</span>
        </ExternalLink>
      </section>
      <ContainerQuestions />
      <ContainerEntrySheet className={entrySheetStyles.bgRed} />
    </>
  );
}
