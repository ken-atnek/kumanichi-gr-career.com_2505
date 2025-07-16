/* =======================================
 * 熊日広告社 FOOTER
 * URL: src/components/koh-career/common/Footer.tsx
 * Created: 2025-06-26
 * Last updated: 2025-06-26
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
            href="/koh-career/#KohContainerNews"
            className={styles.itemLink}
          >
            NEWS
          </Link>
          <Link
            href="/koh-career/#KohContainerAbout"
            className={styles.itemLink}
          >
            about
          </Link>
          <Link
            href="/koh-career/#KohContainerGreeting"
            className={styles.itemLink}
          >
            greeting
          </Link>
          <Link
            href="/koh-career/#KohContainerSchedule"
            className={styles.itemLink}
          >
            schedule
          </Link>
          <Link
            href="/koh-career/#KohContainerJobDescription"
            className={styles.itemLink}
          >
            job description
          </Link>
          <Link
            href="/koh-career/#ContainerEntrySheet"
            className={styles.itemLink}
          >
            entry
          </Link>
        </nav>
        <div className={styles.copyright}>
          Copyright KUMANICHI KOUKOKUSHA All Rights Reserved.
        </div>
      </article>
    </footer>
  );
};

export default Footer;
