/* =======================================
 * エントリーシート
 * URL: src/components/ContainerEntrySheet.tsx
 * Referenced in: src/app/page.tsx
 * Created: 2025-06-20
 * Last updated: 2025-06-20
 * ======================================= */
import ExternalLink from '@/components/common/ExternalLink';
import styles from '@/styles/components/ContainerEntrySheet.module.scss';

const ContainerEntrySheet = ({ className = '' }: { className?: string }) => {
  return (
    <section className={`${styles.containerEntrySheet} ${className}`}>
      <p>〔エントリー書類はこちらから〕</p>
      <ExternalLink
        href="/data/resume2023.xlsx"
        data-download-mode="DownloadLinks"
        className={styles.linkDl}
      >
        <span>履歴書・職務経歴書ダウンロード</span>
      </ExternalLink>
    </section>
  );
};

export default ContainerEntrySheet;
