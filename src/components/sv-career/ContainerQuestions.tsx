/* =======================================
 * 熊日デジタル  よくある質問
 * URL:src/components/digital-career/ContainerQuestions.tsx
 * Referenced in: src/app/digital-career/page.tsx
 * Created: 2025-06-24
 * Last updated: 2025-06-24
 * ======================================= */
'use client';

import { useMemo } from 'react';
import { useState, useRef } from 'react';
import styles from '@/styles/sv-career/PageTop.module.scss';
import Link from 'next/link';

const ContainerQuestions = () => {
  const listData = useMemo(
    () => [
      {
        title: '応募から内定までの流れについて教えてください。',
        answer: (
          <>
            <p>
              <Link href="/">こちら</Link>のページからご確認お願いします。
            </p>
            なお、書類は返却いたしません。その後、弊社担当者よりご連絡致します。
          </>
        ),
      },
      {
        title: '現在、就業中です。入社日の調整は可能でしょうか？',
        answer: (
          <>
            もちろん可能です。まずは、ご本人の現在の状況を確認させて頂き、社内で協議致します。特に在職中の方は、現職を円満に退職されることを前提とさせて頂きます。お気軽にご相談ください。
          </>
        ),
      },
      {
        title: 'ホームページに掲載されている以外の募集職種はありますか？',
        answer: (
          <>
            現時点では掲載されている職種のみ募集しております。但し、現在募集している職種の採用が決定した場合はホームページから削除いたします。新たな職種の募集を行う際は、その都度更新いたします。
          </>
        ),
      },
      {
        title: '入社後、試用期間などはありますか？',
        answer: <>入社後半年間の「試用期間」を設けております。</>,
      },
      {
        title: '一度不合格になった後、再度応募することは可能ですか？',
        answer: (
          <>
            現時点では掲載されている職種のみ募集しております。但し、現在募集している職種の採用が決定した場合はホームページから削除いたします。新たな職種の募集を行う際は、その都度更新いたします。
          </>
        ),
      },
      {
        title: '会社訪問は可能ですか？',
        answer: <>可能です。お気軽にご相談ください。</>,
      },
      {
        title: '育児や介護のサポート体制について教えてください。',
        answer: (
          <>
            産前産後休暇や育児・介護休業、勤務時間短縮など、様々な形で社員をサポートする制度があります。
          </>
        ),
      },
      {
        title: '入社後の部署異動などはありますか？',
        answer: (
          <>
            <p>
              総合職として社全体を理解し、将来的には管理職として会社全体を引っ張る存在になって頂くためにも、
              <i>
                各人のスキルや経験を考慮し、人事異動を行う場合がございます。
              </i>
            </p>
          </>
        ),
      },
    ],
    []
  );
  return (
    <section className={styles.containerQuestions}>
      <article>
        <div className={styles.wrapH2}>
          <h2>Q&A</h2>
          <span>よくある質問</span>
        </div>

        <ul className={styles.listQuestions}>
          {listData.map((item, index) => (
            <QuestionsItem
              key={index}
              title={item.title}
              answer={item.answer}
            />
          ))}
        </ul>
      </article>
    </section>
  );
};
export default ContainerQuestions;

// 子コンポーネント
const QuestionsItem = ({
  title,
  answer,
}: {
  title: string;
  answer: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={isOpen ? styles.open : styles.closed}
      >
        {title}
      </button>
      <div
        ref={contentRef}
        className={styles.itemAnswer}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
          overflow: 'hidden',
        }}
      >
        <div>{answer}</div>
      </div>
    </li>
  );
};
