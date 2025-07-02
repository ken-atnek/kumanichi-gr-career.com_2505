/* =======================================
 * FLOW
 * URL: src/components/ContainerFlow.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-17
 * Last updated: 2025-05-17
 * ======================================= */
import { useMemo } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/ContainerFlow.module.scss';
import ListImage01 from '@/assets/images/flow/list01.webp';
import ListImage02 from '@/assets/images/flow/list02.webp';
import ListImage03 from '@/assets/images/flow/list03.webp';
import ListImage04 from '@/assets/images/flow/list04.webp';

const ContainerFlow = () => {
  const listData = useMemo(
    () => [
      {
        number: '01',
        title: '書類選考',
        description: '本WEBサイトから履歴書・職務経歴書をダウンロード&応募',
        image: ListImage01,
      },
      {
        number: '02',
        title: '適性検査・作文',
        description: '適性検査、作文のほかWEB試験を実施する場合あり',
        image: ListImage02,
      },
      {
        number: '03',
        title: '面接',
        description: '面接を複数回実施',
        image: ListImage03,
      },
      {
        number: '04',
        title: '内定',
        description: '具体的な入社時期や雇用条件（勤務体系・給与）などを確認',
        image: ListImage04,
      },
    ],
    []
  );
  return (
    <ul className={styles.listFlow}>
      {listData.map((item, index) => (
        <li key={index}>
          <div className={styles.wrapHead}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
          </div>
          <div className={styles.itemDescription}>{item.description}</div>
          <div className={styles.wrapImage}>
            <Image src={item.image} alt={item.title} />
          </div>
        </li>
      ))}
    </ul>
  );
};
export default ContainerFlow;
