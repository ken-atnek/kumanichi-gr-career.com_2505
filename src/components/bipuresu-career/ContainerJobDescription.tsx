/* =======================================
 * 熊日会館  募集要項
 * URLsrc/components/bipuresu-career/ContainerJobDescription.tsx
 * Referenced in: src/app/bipuresu-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import styles from '@/styles/bipuresu-career/PageTop.module.scss';
import ExternalLink from '@/components/common/ExternalLink';

const ContainerJobDescription = () => {
  return (
    <section
      className={styles.containerJobDescription}
      id="BipuresuContainerJobDescription"
    >
      <article>
        <div className={styles.wrapH2}>
          <h2>JOB DESCRIPTION</h2>
          <span>募集要項</span>
        </div>

        <div className={styles.boxJobDescription}>
          <dl>
            <dt>職種</dt>
            <dd>
              <em>総合職（技術系）</em>
            </dd>
          </dl>
          <dl>
            <dt>求める能力・経験</dt>
            <dd>
              <em>ビル保守管理業務経験者(優遇)</em>
            </dd>
          </dl>
          <dl>
            <dt>配属先候補名（部署名）</dt>
            <dd>
              <em>業務部</em>
            </dd>
          </dl>
          <dl>
            <dt>給与</dt>
            <dd>年齢や経験を考慮し当社規定により決定します</dd>
          </dl>

          <dl>
            <dt>福利厚生・各種制度</dt>
            <dd>
              <ul>
                <li>・交通費</li>
                <li>・退職金制度</li>
                <li>・社会保険</li>
                <li>・夏季休暇</li>
                <li>・リフレッシュ休暇</li>
                <li>・介護・育児休暇</li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>その他</dt>
            <dd>
              <p>
                その他、熊日会館の詳細情報については、こちらをご覧ください。
                <br />
                びぷれす熊日会館▼
                <br />
                <ExternalLink
                  href="https://bipuresu.jp/"
                  className={styles.itemLink}
                >
                  https://bipuresu.jp/
                </ExternalLink>
              </p>
            </dd>
          </dl>
          <dl>
            <dt>エントリー方法・採用フロー</dt>
            <dd>
              <p>
                エントリーはこちらのHPより履歴書・職務経歴書をダウンロードしていただき必要事項をご記入の上、
                <br />
                熊本日日新聞社関連企業部採用担当
                <ExternalLink href="mailto:gr_saiyou@kumanichi.co.jp">
                  gr_saiyou@kumanichi.co.jp
                </ExternalLink>
                までお送りください。
              </p>

              <small>
                ※書類選考を通過された方のみ、2週間以内にご連絡を差し上げます。
              </small>

              <small>
                ※ご応募いただいた書類はご返却できませんのでご了承願います。
              </small>
            </dd>
          </dl>
        </div>
      </article>
    </section>
  );
};

export default ContainerJobDescription;
