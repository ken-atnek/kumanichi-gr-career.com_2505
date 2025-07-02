/* =======================================
 * 熊日広告社 スライド
 * URL:src/components/koh-career/ContainerSlide.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-06-27
 * Last updated: 2025-06-27
 * ======================================= */
'use client';

import { useEffect, useState } from 'react';
import styles from '@/styles/koh-career/ContainerSlide.module.scss';

const slideImages = [
  '/images/slide/koh-career/slide01.webp',
  '/images/slide/koh-career/slide02.webp',
  '/images/slide/koh-career/slide03.webp',
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
        className={`${styles.slideImage} ${styles.slideImageNext} ${activeIndex === 1 || activeIndex === 2 ? styles.isZoom : ''}`}
        style={{ backgroundImage: `url(${slideImages[activeIndex]})` }}
      />
      <article>
        <h2>
          くまもとの思いを正しく、
          <br />
          多くの地域の人たちに代弁できる広告会社であり続けたい。
        </h2>
        <p>
          次の新しい時代を見据えながら、持続可能な「ふるさと熊本」の地域社会発展のために、
        </p>
        <p>
          広告業務を通して微力ながらその一翼を担うことを使命と考えています。
        </p>
      </article>
    </section>
  );
};

export default ContainerSlide;
