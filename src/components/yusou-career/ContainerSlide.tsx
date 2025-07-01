/* =======================================
 * 熊日メディアコム スライド
 * URL:src/components/yusou-career/ContainerSlide.tsx
 * Referenced in: src/app/yusou-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/yusou-career/ContainerSlide.module.scss';

const slideImages = [
  '/images/slide/yusou-career/slide01.webp',
  '/images/slide/yusou-career/slide02.webp',
  '/images/slide/yusou-career/slide03.webp',
];

const ContainerSlide = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(slideImages.length - 1);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % slideImages.length);
      setAnimationKey((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className={styles.containerSlide}>
      <div
        key={`prev-${animationKey}`}
        className={`${styles.slideImage} ${styles.slideImagePrev}`}
        style={{ backgroundImage: `url(${slideImages[prevIndex]})` }}
      />
      <div
        key={`next-${animationKey}`}
        className={`${styles.slideImage} ${styles.slideImageNext}`}
        style={{ backgroundImage: `url(${slideImages[activeIndex]})` }}
      />
      <article>
        <h2>あなたに届けたい情報がある。</h2>
        <p>
          熊日メディアコムは、熊本県内に情報や商品を届ける地域密着型の会社です
        </p>
      </article>
    </section>
  );
};

export default ContainerSlide;
