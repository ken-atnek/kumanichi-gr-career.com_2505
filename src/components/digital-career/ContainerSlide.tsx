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
    </section>
  );
};

export default ContainerSlide;
