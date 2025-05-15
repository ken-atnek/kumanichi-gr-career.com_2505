/* =======================================
 * TOP スライド
 * URL:src/components/ContainerSlide.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-05-15
 * Last updated: 2025-05-15
 * ======================================= */
import styles from '@/styles/components/ContainerSlide.module.scss';

const ContainerSlide = () => {
  return (
    <section className={styles.containerSlide}>
      <div className={styles.blockSlide}></div>
      <article></article>
    </section>
  );
};
export default ContainerSlide;
