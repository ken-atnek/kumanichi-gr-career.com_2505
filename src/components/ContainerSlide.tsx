/* =======================================
 * TOP スライド
 * URL:src/components/ContainerSlide.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-15
 * Last updated: 2025-05-15
 * ======================================= */
'use client';
import { useEffect, useState } from 'react';

import styles from '@/styles/components/ContainerSlide.module.scss';

const slideImages = [
  '/images/slide/slide01.webp',
  '/images/slide/slide02.webp',
  '/images/slide/slide03.webp',
];

const ContainerSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % slideImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className={styles.containerSlide}>
      <div className={styles.blockSlide}>
        {prevIndex !== null && (
          <div
            key={`prev-${prevIndex}`}
            className={`${styles.slideImage} ${styles.isExiting}`}
            style={{ backgroundImage: `url(${slideImages[prevIndex]})` }}
          />
        )}
        {/* <div key={`overlay-${currentIndex}`} className={styles.fixedOverlay} /> */}
        <div
          key={`enterA-${currentIndex}`}
          className={`${styles.slideImage} ${styles.isEnteringA}`}
          style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
        />
        <div
          key={`wrapper-${currentIndex}`}
          className={styles.slideImageWrapper}
        >
          <div
            key={`enterB-${currentIndex}`}
            className={`${styles.slideImage} ${styles.isEnteringB}`}
            style={{ backgroundImage: `url(${slideImages[currentIndex]})` }}
          />
        </div>
      </div>
      <article>
        <h1>
          熊本日日新聞社グループ
          <br />
          キャリアRECRUIT
        </h1>
        <p>あなたのキャリアを熊日グループで。</p>
      </article>
    </section>
  );
};
export default ContainerSlide;
