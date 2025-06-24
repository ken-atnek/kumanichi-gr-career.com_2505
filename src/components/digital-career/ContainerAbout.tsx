/* =======================================
 * 熊日デジタル 弊社の特徴
 * URL:ssrc/components/digital-career/ContainerAbout.tsx
 * Referenced in: src/app/digital-career/page.tsx
 * Created: 2025-06-23
 * Last updated: 2025-06-23
 * ======================================= */
import Image from 'next/image';
import { useMemo } from 'react';
import styles from '@/styles/digital-career/PageTop.module.scss';
import ListImage01 from '@/assets/images/digital-career/about/image01.webp';
import ListImage02 from '@/assets/images/digital-career/about/image02.webp';
import ListImage03 from '@/assets/images/digital-career/about/image03.webp';
const ContainerAbout = () => {
  const listData = useMemo(
    () => [
      {
        title: 'ウェブサイト制作',
        description:
          'ウェブでの情報摂取が一般化した現代において、ホームページは企業やサービスの顔ともいうべきものであり、現在のPRマーケティングにおいて必須なものとなっています。クライアントの強み・課題・ニーズをを明確にし、マーケティング活動の最適化を可能とするホームページをご提案・制作します。',
        image: ListImage01,
      },
      {
        title: '映像制作・配信',
        description:
          'デジタル✕創造力。これまで行政機関や企業、病院、大学、イベントなどのプロモーション映像・テレビ番組・CM等を制作を担った実績を持つプロのクリエイターチームが在籍。その他にも、ウェブでのライブ配信やウェブPR動画の制作実績の蓄積もあります。クライアントのニーズをしっかりお伺いした上で、用途や目的に最適な映像・配信で信頼されるコンテンツを制作いたします。',
        image: ListImage02,
      },
      {
        title: 'ウェブプロモーション',
        description:
          'ウェブプロモーションにおいては手段が多様化しています。「どんなキーワードを」「何の媒体で」「どれくらい」といったように、ウェブPRでは媒体選択と配信設計が特に重要になります。ウェブPRに関わる設計～運用はもちろん、配信後のフィードバックに至るまでをクライアント目線で行い、広告効果と次につながる可能性を最大化します。',
        image: ListImage03,
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
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ContainerAbout;
