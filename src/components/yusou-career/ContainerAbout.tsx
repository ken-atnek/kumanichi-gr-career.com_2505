/* =======================================
 * 熊日メディアコム 弊社の特徴
 * URL:src/components/yusou-career/ContainerAbout.tsx
 * Referenced in: src/app/yusou-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import Image from 'next/image';
import { useMemo } from 'react';
import styles from '@/styles/yusou-career/PageTop.module.scss';
import ListImage01 from '@/assets/images/yusou-career/about/image01.webp';
import ListImage02 from '@/assets/images/yusou-career/about/image02.webp';
const ContainerAbout = () => {
  const listData = useMemo(
    () => [
      {
        title: '営業部',
        description:
          '営業部では、新聞および「くまにち すぱいす」に折り込まれるチラシの受付や提案を行っています。クライアントのニーズに合わせて日程や折込配布エリア、部数を設定し、できるだけ低コストに抑えながら効率よく効果的な提案を行っています。',
        image: ListImage01,
      },
      {
        title: '事業開発部',
        description:
          '街の発展に道路が必要なように、企業の発展にも収益を運ぶ道が必要です。事業開発部の役目はまさに道づくり。「何もないところから切り開き、新しい道をつくる！」。失敗を恐れずチャレンジする精神が必要な部署です。\n\n物品販売では、デリバリーセンターで販売している商品の企画・管理を行っています。\n新規事業開発では、新しいビジネスチャンスを探し、新規事業の立ち上げを行うために市場や顧客のニーズを分析し、そこから新しいビジネスモデルや商品・サービスのアイデアを考え実現していきます。\nまた、チラシのデザインなど様々な業務を行います。',
        image: ListImage02,
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
            <div>
              {item.description.split('\n').map((line, i) => (
                <p key={i}>
                  {line}
                  <br />
                </p>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContainerAbout;
