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
import styles from '@/styles/digital-career/PageTop.module.scss';
const ContainerQuestions = () => {
  const listData = useMemo(
    () => [
      {
        title: '職種によって、エントリーに必要な資格などはありますか？',
        answer: (
          <>
            <em>ありません！</em>
            必要な資格はとくにありません。また内定が決まってから何か勉強をしてほしいということも特にありません。
          </>
        ),
      },
      {
        title: '面接会場には、車で行っても大丈夫ですか',
        answer: (
          <>
            <em>大丈夫です！</em>
            車で来社いただけます。併設されます無料の来客用駐車場をご利用ください。
          </>
        ),
      },
      {
        title: '入社案内など、資料請求はできますか？',
        answer: (
          <>
            資料請求可能です。エントリーフォームやお電話にてその旨をご連絡ください。
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
