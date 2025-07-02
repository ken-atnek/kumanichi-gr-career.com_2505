/* =======================================
 * 熊日会館 弊社の特徴
 * URL:src/components/bipuresu-career/ContainerAbout.tsx
 * Referenced in: src/app/bipuresu-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import Image from 'next/image';
import { useMemo } from 'react';
import styles from '@/styles/bipuresu-career/PageTop.module.scss';
import ListImage01 from '@/assets/images/bipuresu-career/about/image01.webp';
import ListImage02 from '@/assets/images/bipuresu-career/about/image02.webp';
import ListImage03 from '@/assets/images/bipuresu-career/about/image03.webp';
const ContainerAbout = () => {
  const listData = useMemo(
    () => [
      {
        title: 'びぷれす熊日会館　建物の維持管理運営業務',
        description:
          '熊本日日新聞社発祥の地に建つ、びぷれす熊日会館。この建物維持管理運営業務を行っています。\n建物内には、ホテル・商業・美術館・武道館・カルチャーセンター等が入居しており、利用者にとっての安心・安全と快適空間の創出を目的として建物全体の維持管理運営業務を行なっています。\nまた、建物地下２階部分にある「びぷれす熊日会館駐車場」の管理運営業務も行っています。\n〔館内施設〕\nホテル日航熊本/ Ｎｅｗ-Ｓ（鶴屋百貨店）/ 熊本市現代美術館/ 一般財団法人熊本公徳会 武道場/ 熊日生涯学習プラザ/ 熊日プレイガイド びぷれす店/ びぷれすイノベーションスタジオ（コワーキングスペース）/ びぷれすPlat（レンタルスペース）',
        image: ListImage01,
      },
      {
        title: 'びぷれす熊日会館「びぷれす広場」管理運営業務',
        description:
          '上通の入り口（通町筋側）の角地に設けられた半屋外スペースの管理運営業務を行っています。展示会、音楽イベントのほか、県内各地の物産販売なども開催でき、中心市街地の道行く人々がそのまま立ち寄れるスペースです。イベントが開催されていない時は休憩スペースとして市民の憩いの場となっています。',
        image: ListImage02,
      },
      {
        title: 'びぷれす熊日会館「びぷれすPlat」レンタルスペース管理運営業務',
        description:
          'びぷれす熊日会館地下1階の商業エリア内にあるレンタルスペースの管理運営業務を行っています。\n絵画・写真などの展示ギャラリーとして、告知イベント・商品販売、手作り商品などの展示スペースとして活用いただけるスペースです。',
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
