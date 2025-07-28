/* =======================================
 * ブログ記事一覧
 * URL: src/components/blog/BlogList.tsx
 * Created: 2025-06-03
 * Last updated: 2025-06-03
 * ======================================= */
import React from 'react';
import { BlogItem } from '@/types/blog';
import styles from '@/styles/PageBlog.module.scss';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  items: BlogItem[];
  isTopPage?: boolean;
  showBody?: boolean;
};

const BlogList = ({ items, isTopPage }: Props) => {
  return (
    <ul className={styles.blogList}>
      {items.map((item) => (
        <li
          key={item.id}
          className={`${styles.blogItem} ${isTopPage ? styles.isTopPage : ''}`}
        >
          <Link href={`/blog/detail?s_id=${item.s_id}&id=${item.id}`} className={styles.itemLink}></Link>
          <Image
            src={item.thumb}
            width={373}
            height={210}
            alt={item.title}
            className={styles.thumbnail}
          />
          <div className={styles.wrapContents}>
            <p className={styles.head}>news</p>
            <h3>{item.title}</h3>
            <hr />
            <span className={styles.category}>
              {item.category.child ?? item.category.parent}
            </span>
            <div className={styles.itemDate}>{item.date}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
