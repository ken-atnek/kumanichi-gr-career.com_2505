/* =======================================
 * ニュース一覧
 * URL:src/components/NewsList.tsx
 * Created: 2025-06-21
 * Last updated: 2025-06-21
 * ======================================= */

'use client';

import styles from '@/styles/PageNews.module.scss';
import type { NewsItem } from '@/data/newsList';

type Props = {
  items: NewsItem[];
};

export default function NewsList({ items }: Props) {
  if (items.length === 0) return null;

  return (
    <ul className={styles.newsList}>
      {items.map((item) => (
        <li key={item.id}>
          <span className={styles.date}>{item.date}</span>
          <span className={styles.company}>{item.company}</span>
          <span className={styles.title}>{item.title}</span>
        </li>
      ))}
    </ul>
  );
}
