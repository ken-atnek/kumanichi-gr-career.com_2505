/* =======================================
 * FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-04-25
 * Last updated: 2025-04-26
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
            href="/digital-career/#DigitalContainerNews"
            className={styles.itemLink}
          >
            NEWS
          </Link>
          <Link
            href="/digital-career/#DigitalContainerAbout"
            className={styles.itemLink}
          >
            about
          </Link>
          <Link
            href="/digital-career/#DigitalContainerGreeting"
            className={styles.itemLink}
          >
            greeting
          </Link>
          <Link
            href="/digital-career/#DigitalContainerSchedule"
            className={styles.itemLink}
          >
            schedule
          </Link>
          <Link
            href="/digital-career/#DigitalContainerJobDescription"
            className={styles.itemLink}
          >
            job description
          </Link>
          <Link
            href="/digital-career/#ContainerEntrySheet"
            className={styles.itemLink}
          >
            entry
          </Link>
        </nav>
        <div className={styles.copyright}>
          Copyright KUMANICHIDIGITAL. All Rights Reserved.
        </div>
      </article>
    </footer>
  );
};

export default Footer;
