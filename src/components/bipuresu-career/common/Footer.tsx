/* =======================================
 * 熊日会館 FOOTER
 * URL: src/components/bipuresu-career/common/Footer.tsx
 * Created: 2025-06-30
 * Last updated: 2025-07-02
 * ======================================= */
import styles from '@/styles/components/common/Footer.module.scss';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <article>
        <nav>
          <Link href="/" className={`${styles.itemLink} ${styles.linkTop}`}>
            TOP
          </Link>
          <Link
            href="/bipuresu-career/#BipuresuContainerNews"
            className={styles.itemLink}
          >
            NEWS
          </Link>
          <Link
            href="/bipuresu-career/#BipuresuContainerAbout"
            className={styles.itemLink}
          >
            about
          </Link>
          <Link
            href="/bipuresu-career/#BipuresuContainerGreeting"
            className={styles.itemLink}
          >
            greeting
          </Link>
          <Link
            href="/bipuresu-career/#BipuresuContainerSchedule"
            className={styles.itemLink}
          >
            schedule
          </Link>
          <Link
            href="/bipuresu-career/#BipuresuContainerJobDescription"
            className={styles.itemLink}
          >
            job description
          </Link>
          <Link
            href="/bipuresu-career/#ContainerEntrySheet"
            className={styles.itemLink}
          >
            entry
          </Link>
        </nav>
        <div className={styles.copyright}>
          Copyright KUMANICHI KAIKAN All Rights Reserved.
        </div>
      </article>
    </footer>
  );
};

export default Footer;
