/* =======================================
 * 熊日サービス開発 スライド
 * URL:src/components/sv-career/ContainerSlide.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
'use client';
import { useEffect, useState } from 'react';
import styles from '@/styles/sv-career/ContainerSlide.module.scss';

const slideImages = [
  '/images/slide/sv-career/slide01.webp',
  '/images/slide/sv-career/slide02.webp',
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
        <h2>地域の皆様に「発見！」を。</h2>
        <p>各種イベント開催、カルチャーセンター運営、</p>
        <p>出版、印刷物制作など、幅広い業務で地域に貢献します</p>
      </article>
    </section>
  );
};

export default ContainerSlide;
