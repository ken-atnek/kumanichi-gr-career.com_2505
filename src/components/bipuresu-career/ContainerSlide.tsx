/* =======================================
 * 熊日会館 スライド
 * URL:src/components/bipuresu-career/ContainerSlide.tsx
 * Referenced in: src/app/bipuresu-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import styles from '@/styles/bipuresu-career/ContainerSlide.module.scss';

const slideImages = [
  '/images/slide/bipuresu-career/slide01.webp',
  '/images/slide/bipuresu-career/slide02.webp',
  '/images/slide/bipuresu-career/slide03.webp',
  '/images/slide/bipuresu-career/slide04.webp',
];

const ContainerSlide = () => {
  return (
    <section className={styles.containerSlide}>
      <Swiper
        className={styles.boxSwiper}
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={2000}
        rewind={true}
        allowTouchMove={false}
      >
        {slideImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className={styles.boxSlide}>
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <article>
        <h2>
          新聞社発祥の地で、
          <br />
          中心市街地の活性化のために。
        </h2>
        <p>びぷれす熊日会館の理念である“情報発信、文化の交流拠点”を念頭に、</p>
        <p>
          これからも訪れる皆様に喜んでいただけるように日々の業務に邁進します。
        </p>
      </article>
    </section>
  );
};

export default ContainerSlide;
