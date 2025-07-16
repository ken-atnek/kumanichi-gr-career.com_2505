/* =======================================
 * 熊日サービス開発  FOOTER
 * URL: src/components/sv-career/common/Footer.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
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
          <Link href="/sv-career/#SvContainerNews" className={styles.itemLink}>
            NEWS
          </Link>
          <Link href="/sv-career/#SvContainerAbout" className={styles.itemLink}>
            about
          </Link>
          <Link
            href="/sv-career/#SvContainerGreeting"
            className={styles.itemLink}
          >
            greeting
          </Link>
          <Link
            href="/sv-career/#SvContainerSchedule"
            className={styles.itemLink}
          >
            schedule
          </Link>
          <Link
            href="/sv-career/#SvContainerJobDescription"
            className={styles.itemLink}
          >
            job description
          </Link>
          {/* <Link href="/sv-career/#ContainerContact" className={styles.itemLink}>
            entry
          </Link> */}
        </nav>
        <div className={styles.copyright}>
          Copyright KUMANICHI SERVICE KAIHATSU All Rights Reserved.
        </div>
      </article>
    </footer>
  );
};

export default Footer;
