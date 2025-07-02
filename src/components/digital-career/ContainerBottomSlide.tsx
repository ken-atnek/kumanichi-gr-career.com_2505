/* =======================================
 * 熊日デジタル ボトムスライド
 * URL:src/components/digital-career/ContainerBottomSlide.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-06-23
 * Last updated: 2025-06-23
 * ======================================= */

import styles from '@/styles/digital-career/PageTop.module.scss';
import Slide01 from '@/assets/images/digital-career/slide/slide01.webp';
import Slide02 from '@/assets/images/digital-career/slide/slide02.webp';
import Slide03 from '@/assets/images/digital-career/slide/slide03.webp';
import Slide04 from '@/assets/images/digital-career/slide/slide04.webp';
import Image from 'next/image';

const ContainerBottomSlide = () => {
  return (
    <section className={styles.containerBottomSlide}>
      <h2>gallery</h2>
      <article className={styles.blockSlide}>
        <div className={styles.slideTrack}>
          {[
            Slide01,
            Slide02,
            Slide03,
            Slide04,
            Slide01,
            Slide02,
            Slide03,
            Slide04,
          ].map((img, index) => (
            <div key={index} className={styles.slideItem}>
              <Image src={img} alt={`スライド画像${index + 1}`} />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default ContainerBottomSlide;
