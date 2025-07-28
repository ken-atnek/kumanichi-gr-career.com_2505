/* =======================================
 * 熊日メディアコム TOPページ
 * URL:src/app/yusou-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import Link from 'next/link';
import styles from '@/styles/yusou-career/PageTop.module.scss';
import entrySheetStyles from '@/styles/components/ContainerEntrySheet.module.scss';
import ContainerEntrySheet from '@/components/ContainerEntrySheet';

// import BlogList from '@/components/blog/BlogList';
// import { blogData } from '@/data/blogData';

import TopNewsClient from '@/components/blog/TopNewsClient';

import type { Metadata } from 'next';
import { newsList } from '@/data/newsList';
import NewsList from '@/components/NewsList';
import Greeting from '@/assets/images/yusou-career/greeting.webp';
import ConceptTitle from '@/assets/images/yusou-career/concept-title.webp';
import ConceptList01 from '@/assets/images/yusou-career/concept-list01.webp';
import ConceptList02 from '@/assets/images/yusou-career/concept-list02.webp';
import Image from 'next/image';
import ContainerSlide from '@/components/yusou-career/ContainerSlide';
import ContainerAbout from '@/components/yusou-career/ContainerAbout';
import ContainerSchedule from '@/components/yusou-career/ContainerSchedule';
import ContainerBottomSlide from '@/components/yusou-career/ContainerBottomSlide';
import ContainerJobDescription from '@/components/yusou-career/ContainerJobDescription';
// import ExternalLink from '@/components/common/ExternalLink';
import ContainerQuestions from '@/components/yusou-career/ContainerQuestions';
export const generateMetadata = (): Metadata => {
  return {
    title: '熊日メディアコム キャリア採用サイト｜熊本で働く、地域と生きる。',
    description:
      '熊日メディアコムのキャリア採用公式サイト。新聞社からグループ各社まで、多様な職種で中途採用を実施中。熊本の未来を支える仕事に、あなたの経験を活かしませんか？',
  };
};
export default function Home() {
  return (
    <>
      <ContainerSlide />
      <section className={styles.containerNews} id="YusouContainerNews">
        <article>
          <div className={styles.wrapH2}>
            <h2>news</h2>
            <span>新着情報</span>
          </div>
          <NewsList
            items={newsList.filter(
              (item) =>
                item.company === '熊日グループ' ||
                item.company === '熊日メディアコム'
            )}
          />
        </article>
      </section>
      <section className={styles.containerBlog} id="YusouContainerBlog">
        <article>
          {/* <BlogList
            items={blogData
              .filter(
                (item) =>
                  item.category.parent === '熊日グループ' &&
                  (!item.category.child ||
                    item.category.child === '熊日メディアコム')
              )
              .slice(0, 3)}
            isTopPage
          /> */}
          <TopNewsClient isShopId="career@yusou" />
          <Link href="/yusou-career/blog/" className={styles.linkBlog}>
            すべてを見る
          </Link>
        </article>
      </section>
      <section className={styles.containerAbout} id="YusouContainerAbout">
        <article>
          <div className={styles.wrapH2}>
            <h2>ABOUT</h2>
            <span>弊社の特徴</span>
          </div>
          <ContainerAbout />
        </article>
      </section>
      <section className={styles.containerConcept}>
        <article>
          <div className={styles.conceptTitle}>
            <Image src={ConceptTitle} alt="(株)熊日物流販売" />
          </div>
          <h2>熊本県内外の物流を支える物流企業として。</h2>
          <p>
            新聞輸送で培った安全、確実、丁寧、迅速な配送「新聞という情報インフラを途絶えさせない！」という使命のもと、新聞を確実に届ける重要な役割を担ってきました。
            <br />
            　台風や大雪といった自然災害、事故や工事による通行止め等、輸送条件が厳しい中でも休むことなく新聞を配送してきた実績があります。
            <br />
            　熊本地震や令和2年熊本県豪雨にあっても、新聞社のグループ企業ならではのネットワークを駆使して情報収集し、遠回りでも安全な迂回ルートで、確実に届ける配送を実施しました。この使命感は、一般貨物輸送でも同じです。
            <br />
            　依頼主の大事な荷物を「安全・確実・丁寧・迅速」な配送でお届けするという、輸送会社としての1丁目1番地を胸に刻み、日々の業務にあたっています。
          </p>
          <div className={styles.listImage}>
            <Image src={ConceptList01} alt="(株)熊日物流販売01" />
            <Image src={ConceptList02} alt="(株)熊日物流販売02" />
          </div>
        </article>
      </section>
      <section className={styles.containerGreeting} id="YusouContainerGreeting">
        <article>
          <div className={styles.wrapH2}>
            <h2>GREETINGS</h2>
            <span>代表挨拶</span>
          </div>
          <div className={styles.wrapContents}>
            <div className={styles.itemGreeting}>
              <h3>
                人・モノ・情報をつなぎ、
                <br />
                地域に貢献する
              </h3>
              <p>
                私たち熊日メディアコムは、熊本日日新聞社のグループ企業の一員として昭和55年（1980年）に新聞輸送を主な業務としてスタートしました。現在は広告、輸送、新聞販売、物販など事業分野を多角化し、営業部、事業開発部、輸送統括部、販売統括部、総務部の5つの部署で運営をしています。
                <br />
                広告部門では、県内外の広告会社との取引によって、熊本県内一円の新聞折込チラシを取り扱い、またダイレクトメールなどを届けるデリバリー事業も展開しています。輸送部門では熊日本社から各販売センターまでの新聞輸送に加え、食品や機械、書類などを配送する一般貨物業にも携わり、成長業種となっています。新聞販売部門では、熊本市内の約半分の規模で熊本日日新聞他の新聞の販売、配達を行っています。数年前に着手した物販事業は順調に伸びており、ＥCサイト等での事業拡充を図っているところです。
                <br />
                グループ会社の熊日物流販売と緊密に連携、協働し、人・モノ・情報をつなぎ、地域になくてはならない存在であり続けることを目指しています。
              </p>
            </div>
            <figure>
              <Image src={Greeting} alt="代表取締役社長 / 天野　友博" />
              <figcaption>
                <span>代表取締役社長</span> 天野　友博
              </figcaption>
            </figure>
          </div>
        </article>
      </section>
      <section className={styles.containerSchedule} id="YusouContainerSchedule">
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
            src="https://www.youtube.com/embed/wqEAQ10G2A8?loop=0&autoplay=0&fs=1&rel=0"
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
