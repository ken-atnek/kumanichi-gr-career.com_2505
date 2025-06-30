/* =======================================
 * グループ紹介
 * URL: src/components/ContainerGroup.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-16
 * Last updated: 2025-06-30
 * ======================================= */
import { useMemo } from 'react';
import Image from 'next/image';
import GroupImage01 from '@/assets/images/group/group01.webp';
import GroupImage02 from '@/assets/images/group/group02.webp';
import GroupImage03 from '@/assets/images/group/group03.webp';
import GroupImage04 from '@/assets/images/group/group04.webp';
import GroupImage05 from '@/assets/images/group/group05.webp';
import styles from '@/styles/components/ContainerGroup.module.scss';
import Link from 'next/link';

const ContainerGroup = () => {
  const ListData = useMemo(
    () => [
      {
        image: GroupImage01,
        title: '株式会社熊日広告社',
        description:
          '創立50年を迎える熊本最大の総合広告代理店。2023年3月期の売り上げは約60億円を超える。新聞やテレビ、WEBの広告の取り扱いのほか、2019年には熊本県が誘致したラグビーワールドカップや女子ハンドボール世界選手権のファンゾーン運営を手掛けるなどその業務は多岐にわたる。23年4月には熊本市本山町に新社屋を建設。',
        url: '/koh-career/',
        target: 'Group01',
      },
      {
        image: GroupImage02,
        title: '熊日サービス開発株式会社',
        description:
          '1973年設立。熊本市中心部で「カルチャーセンター」の運営を手掛けるほか、熊本日日新聞社が主催している「学童五輪」や「熊日ゴルフトーナメント」等の業務を受託・運営している。また、様々な「本」の出版にも携わるなど様々な事業を展開、熊本の文化発展に貢献している。2023年４月には『熊日総合保険』と合併、各種保険の取り扱いもスタートした。',
        target: 'Group02',
        url: '/sv-career/',
      },
      {
        image: GroupImage03,
        title: '株式会社熊日メディアコム',
        description: (
          <>
            2022年に熊日の折込チラシを取り扱っていた熊日輸送センター、その傘下で新聞輸送や一般貨物を行う熊日物流と、熊本市を中心とした販売店の経営を担っていた熊日都市圏販売の3社を再編・統合し熊日メディアコム、熊日物流販売となった。
            <br />
            既存の業務だけではなく不動産業務や物品販売、小口チラシの制作・折込など熊日グループの届ける力を最大限に生かした業務を手掛ける。
          </>
        ),
        target: 'Group03',
        url: 'https://www.kumanichi-yusou-career.com/',
      },
      {
        image: GroupImage04,
        title: '株式会社熊日会館',
        description:
          '2002年に開業し、熊本の新聞発祥の地でもある「びぷれす熊日会館」の各施設を運営する管理会社。テナントには鶴屋NEW‐Sやホテル日航熊本がある。ビルの空調や防火管理、建物の営繕関係を中心とした業務のほかにびぷれす広場や地下駐車場の運営管理も行う。熊本市中心市街地の活性化や情報発信の拠点としての役割を果たしている。',
        url: '/bipuresu-career/',
        target: 'Group04',
      },
      {
        image: GroupImage05,
        title: '株式会社熊日デジタル',
        description:
          '２０２２年１０月にスタートした熊日グループ初のデジタル専門会社。WEBサイト制作やウェブ広告配信のほか、動画制作・配信を手掛ける、今後ますます高まるデジタル市場で熊本の発展に貢献していく。',
        target: 'Group05',
        url: '/digital-career/',
      },
    ],
    []
  );
  return (
    <ul className={styles.listGroup}>
      {ListData.map((item, index) => (
        <li key={index} id={item.target}>
          <div className={styles.boxImage}>
            <Image src={item.image} alt={item.title} />
          </div>
          <div className={styles.boxDetails}>
            <h3>{item.title}</h3>
            <div className={styles.description}>{item.description}</div>
            <Link href={item.url}>
              <span>採用サイトへ</span>
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContainerGroup;
