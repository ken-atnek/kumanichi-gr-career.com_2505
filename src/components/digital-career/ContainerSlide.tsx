/* =======================================
 * 熊日デジタル スライド
 * URL:src/components/digital-career/ContainerSlide.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-15
 * Last updated: 2025-05-15
 * ======================================= */
'use client';
import { useEffect, useState } from 'react';
import styles from '@/styles/digital-career/ContainerSlide.module.scss';

const slideImages = [
  '/images/slide/digital-career/slide01.webp',
  '/images/slide/digital-career/slide02.webp',
];

const ContainerSlide = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstImage((prev) => !prev);
    }, 8000); // 8秒ごとに切り替え
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.containerSlide}>
      <div
        className={`${styles.slideImage} ${isFirstImage ? styles.Image01Active : styles.ImageInactive}`}
        style={{
          backgroundImage: `url(${slideImages[0]})`,
        }}
      />
      <div
        className={`${styles.slideImage} ${!isFirstImage ? styles.Image02Active : styles.ImageInactive}`}
        style={{
          backgroundImage: `url(${slideImages[1]})`,
        }}
      />
      <article>
        <h2>デジタルで、地域の未来を描く。</h2>
        <p>熊本日日新聞社が掲げる「地域主義」を新会社でも念頭に置き</p>
        <p>多様なデジタルサービスを通じて地域が豊かになるお手伝いを。</p>
      </article>
    </section>
  );
};

export default ContainerSlide;
