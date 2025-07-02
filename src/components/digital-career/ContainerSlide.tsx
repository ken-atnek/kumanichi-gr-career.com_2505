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
        <h2>デジタルで、地域の未来を描く。</h2>
        <p>熊本日日新聞社が掲げる「地域主義」を新会社でも念頭に置き</p>
        <p>多様なデジタルサービスを通じて地域が豊かになるお手伝いを。</p>
      </article>
    </section>
  );
};

export default ContainerSlide;
