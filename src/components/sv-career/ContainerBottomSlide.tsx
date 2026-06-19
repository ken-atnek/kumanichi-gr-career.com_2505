/* =======================================
 * 熊日サービス開発 ボトムスライド
 * URL:src/components/sv-career/ContainerBottomSlide.tsx
 * Referenced in: src/app/sv-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
'use client';
import styles from '@/styles/sv-career/PageTop.module.scss';
import Slide01 from '@/assets/images/sv-career/slide/slide01.webp';
import Slide02 from '@/assets/images/sv-career/slide/slide02.webp';
import Slide03 from '@/assets/images/sv-career/260619/sv-floor.jpg';
import Slide04 from '@/assets/images/sv-career/260619/puretta.jpg';
import Slide05 from '@/assets/images/sv-career/260619/hondana.jpg';
import Slide06 from '@/assets/images/sv-career/slide/slide06.webp';
import Slide07 from '@/assets/images/sv-career/260619/dtp.jpg';
import Slide08 from '@/assets/images/sv-career/slide/slide08.webp';
import Slide09 from '@/assets/images/sv-career/slide/slide09.webp';
import Slide10 from '@/assets/images/sv-career/slide/slide10.webp';
import Image from 'next/image';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const ContainerBottomSlide = () => {
  return (
    <section className={styles.containerBottomSlide}>
      <h2>gallery</h2>
      <article className={styles.blockSlide}>
        <Swiper
          className={styles.customSwiper}
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          speed={1000}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {[
            Slide01,
            Slide02,
            Slide03,
            Slide04,
            Slide05,
            Slide06,
            Slide07,
            Slide08,
            Slide09,
            Slide10,
          ].map((img, index) => (
            <SwiperSlide key={index}>
              <div className={styles.slideItem}>
                <Image src={img} alt={`スライド画像${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </section>
  );
};

export default ContainerBottomSlide;
