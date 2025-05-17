/* =======================================
 * FAQ
 * URL: src/components/ContainerFaq.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-17
 * Last updated: 2025-05-17
 * ======================================= */
'use client';

import { useMemo } from 'react';
import styles from '@/styles/components//ContainerFaq.module.scss';
import { useState, useRef } from 'react';
const ContainerFaq = () => {
  const listData = useMemo(
    () => [
      {
        title: '希望する職種がないといけませんか？',
        answer:
          '希望する職種がなくともやってみたいという希望だけでも大丈夫です。入社後に必要な育成や教育はしっかりと行います。',
      },
      {
        title: '入社後の待遇は各社によって違いますか？ ',
        answer:
          'はい。入社後の待遇は各社によって異なります。入社後の待遇については、それまでの職歴や経歴を元に採用決定後ご提示いたします。',
      },
      {
        title: '他県への転勤はありますか？',
        answer: 'ありません。',
      },
      {
        title: '福利厚生はどうなっていますか？',
        answer:
          '休暇日数や福利厚生は各社によって違いがございますが、熊日グループとして共通のリフレッシュ休暇等の制度もございます。詳しくは各社のページをご確認ください。',
      },
      {
        title: '第二新卒者も応募できますか？',
        answer:
          '応募可能です。新卒採用は毎年定期的に行なっております。また第二新卒の方は新卒採用時期にも、本サイトの中途・キャリア採用時期でもご応募できます。',
      },
      {
        title: '熊日関連企業グループで、複数社に同時エントリーは可能ですか？',
        answer: (
          <>
            可能です。エントリーシートにその旨をご記載いただき、志望動機だけを変更した履歴書・職務経歴書をそれぞれにお書きいただきご提出ください。
            <br />
            それぞれの希望される社で書類選考を行います。
          </>
        ),
      },
    ],
    []
  );
  return (
    <ul className={styles.listFaq}>
      {listData.map((item, index) => (
        <FaqItem key={index} title={item.title} answer={item.answer} />
      ))}
    </ul>
  );
};
export default ContainerFaq;

// 子コンポーネント
const FaqItem = ({
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
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
          overflow: 'hidden',
        }}
      >
        <p>{answer}</p>
      </div>
    </li>
  );
};
