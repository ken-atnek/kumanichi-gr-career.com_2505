/* =======================================
 * BLOG list
 * URL: src/components/BlockBlogList.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-16
 * Last updated: 2025-05-16
 * ======================================= */

import styles from '@/styles/components/BlockBlogList.module.scss';
import { blogList } from '@/data/blogListData';
import Link from 'next/link';
import Image from 'next/image';
type Props = {
  limit?: number;
};
const BlockBlogList = ({ limit }: Props) => {
  const displayList = limit ? blogList.slice(0, limit) : blogList;

  return (
    <nav className={styles.blockBlogList}>
      {displayList.map((item) => (
        <Link
          href={`/blog/${item.slug}`}
          className={`${styles.blogItem} blog-item`}
          key={item.slug}
        >
          <div className={styles.imageWrapper}>
            <Image src={item.image} alt={item.title} fill />
          </div>
          <div className={styles.boxContents}>
            <span className={styles.head}>news</span>
            <h3>{item.title}</h3>
            <hr />
            <div className={styles.category}>{item.category}</div>
          </div>
        </Link>
      ))}
    </nav>
  );
};
export default BlockBlogList;
