/* =======================================
 * 熊日サービス開発 弊社の特徴
 * URL:src/components/sv-career/ContainerAbout.tsx
 * Referenced in: src/app/digital-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import Image from 'next/image';
import { useMemo } from 'react';
import styles from '@/styles/sv-career/PageTop.module.scss';
import ListImage01 from '@/assets/images/sv-career/260619/seminar.jpg';
import ListImage02 from '@/assets/images/sv-career/about/image02.webp';
import ListImage03 from '@/assets/images/sv-career/260619/hoken.jpg';
import ListImage04 from '@/assets/images/sv-career/260619/shuppan.jpg';
const ContainerAbout = () => {
  const listData = useMemo(
    () => [
      {
        title: 'セミナー・企画事業部<br />（熊日事業センター・ぷれった熊日）',
        description:
          '熊日事業センターは、熊本日日新聞社と連携し「熊日学童五輪」や「郡市対抗熊日駅伝」などの事業を運営しています。ぷれった熊日では、熊本市中心部でカルチャーセンターを運営し、絵画教室や俳句、子ども向けのプログラミングやそろばん教室など年間約200の講座を開催しています。また各種講演会の開催などさまざまなイベントも行っています。',
        image: ListImage01,
      },
      {
        title: 'DTP部',
        description:
          '熊本日日新聞の特集紙面や生活情報紙などの組版データを制作しています。そのほか、新聞掲載写真の焼き増しや紙面コピーの販売、企業や個人から受注する名刺・チラシ・封筒・看板などの印刷物や自社で企画したポストカードを制作・販売しています。',
        image: ListImage02,
      },
      {
        title: '保険部',
        description:
          '顧客に対して保険商品の提案・販売を行います。顧客のニーズやリスクを分析し、最適な保険プランをご提案、契約の手続きや更新・変更、保険金の請求手続きなどのフォローアップも行います。さらに保険の基礎知識や最新の保険商品情報、保険市場の動向などを提供し、顧客が保険について正しい知識を持ち納得した上で保険に加入できるようサポートします。',
        image: ListImage03,
      },
      {
        title: '出版部',
        description:
          '熊本日日新聞社が蓄積した膨大な資料をまとめて発行する『熊日の本』では、熊本で起きたさまざまな出来事を「写真集」や「記録誌」として残していきます。また、一般企業の『記念誌』や『社史』、個人からの依頼による『自叙伝』『歌集・句集』『写真集』など、さまざまなジャンルの『本』を編集から印刷・販売まで一貫してお手伝いします。',
        image: ListImage04,
      },
    ],
    []
  );

  return (
    <ul className={styles.listAbout}>
      {listData.map((item, index) => (
        <li key={index}>
          <div className={styles.wrapImage}>
            <Image src={item.image} alt={item.title} />
          </div>
          <div className={styles.wrapContents}>
            <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContainerAbout;
