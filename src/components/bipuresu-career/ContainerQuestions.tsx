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
        title: '通勤手段を教えて下さい。',
        answer: (
          <>
            会社は中心市街地にありますので、バスや電車などの公共機関にて出社が可能です。また、社員用駐輪場（自転車・原付自転車用）もあります。
          </>
        ),
      },
      {
        title: '資格などは重要ですか？',
        answer: (
          <>
            電気主任技術者やボイラー技士などをお持ちの方は有利になりますが、資格が無くても、建物設備管理に従事していた方なども含め募集しています。
          </>
        ),
      },
      {
        title: '時間外勤務は毎月どれくらいですか？',
        answer: <>１年を平均して20時間程度の業務を時間外勤務しています。</>,
      },
      {
        title: '設備関係以外の業務はありますか？',
        answer: (
          <>建物管理業務には、一般的な会社のような会計・経理業務もあります。</>
        ),
      },
      {
        title: '制服・ユニフォームはありますか？',
        answer: (
          <>
            ありません。オフィスカジュアル的な洋装で構いません（華美な服装はご遠慮下さい）。クールビズやウォームビズの着用で業務しています。
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
