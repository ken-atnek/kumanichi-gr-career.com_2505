/* =======================================
 * 熊日広告社 弊社の特徴
 * URL:src/components/koh-career/ContainerAbout.tsx
 * Referenced in: src/app/digital-career/page.tsx
 * Created: 2025-06-27
 * Last updated: 2025-06-27
 * ======================================= */
import Image from 'next/image';
import { useMemo } from 'react';
import styles from '@/styles/koh-career/PageTop.module.scss';
import ListImage01 from '@/assets/images/koh-career/about/image01.webp';
import ListImage02 from '@/assets/images/koh-career/about/image02.webp';
import ListImage03 from '@/assets/images/koh-career/about/image03.webp';
const ContainerAbout = () => {
  const listData = useMemo(
    () => [
      {
        title: '営業部',
        description: (
          <>
            営業部は、広告を出すクライアントと媒体社(新聞社・TV局・WEB会社等を繋ぐ、架け橋の役割になる仕事をします。
            <br />
            具体的には、実際にクライアントに会ってコミュニケーションをとり、広告出稿するまで、一貫して業務に携わる、マネジメントのような業務です。
          </>
        ),
        image: ListImage01,
      },
      {
        title: '企画制作部',
        description: (
          <>
            企画制作部は、営業部が持ってきたクライアントの話を、具体的に形にしていくのが主な仕事です。
            <br />
            クライアントに対して一番効果的な広告を考え、スケジュールや企画書、CMの案等作り上げます。
          </>
        ),
        image: ListImage02,
      },
      {
        title: 'くまもと共創プロジェクト室',
        description: (
          <>
            地域や社会、自治体の抱える課題に対し、広告会社ならではの知見とコネクション、クリエイティビティを駆使し、よりよい課題解決のお手伝いをする。大きく変わりゆく熊本の発展に貢献できる部署です。
            <br />
            <br />
            ※その他、媒体部、デジタルマーケティング室、折込部、住宅事業推進室のセクションもあります。
          </>
        ),
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
