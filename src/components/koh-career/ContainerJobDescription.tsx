/* =======================================
 * 熊日広告社  募集要項
 * URL:src/components/koh-career/ContainerJobDescription.tsx
 * Referenced in: src/app/koh-career/page.tsx
 * Created: 2025-06-24
 * Last updated: 2025-06-24
 * ======================================= */
import styles from '@/styles/koh-career/PageTop.module.scss';
import ExternalLink from '@/components/common/ExternalLink';

const ContainerJobDescription = () => {
  return (
    <section
      className={styles.containerJobDescription}
      id="KohContainerJobDescription"
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
              <em>総合職</em>
            </dd>
          </dl>
          <dl>
            <dt>配属先候補名（部署名）</dt>
            <dd>
              <em>営業部</em>
            </dd>
          </dl>
          <dl>
            <dt>給与</dt>
            <dd>年齢や経験を考慮し当社規定により決定します</dd>
          </dl>
          <dl>
            <dt>求める能力・経験</dt>
            <dd>
              <em>業界未経験でもOK</em>
              <span>①オペレーション能力</span>
              <span>②リスク管理能力</span>
              <span>③分析・仮説思考能力</span>
              <span>④戦略立案能力</span>
              <span>⑤コミュニケーション能力</span>
            </dd>
          </dl>
          <dl>
            <dt>福利厚生・各種制度</dt>
            <dd>
              <em>年間休日数：１０４日間</em>
              <ul>
                <li>
                  <h3>休日休暇</h3>
                  <span>・毎月日曜、祝日＋３日</span>
                  <span>・有給休暇</span>
                  <span>・夏季休暇（連続４日）</span>
                  <span>・リフレッシュ特別有給休暇（連続９日）</span>
                  <span>・年末・年始特別有給休暇</span>
                  <span>・永年勤続休暇</span>
                </li>

                <li>
                  <h3>待遇・福利厚生</h3>
                  <span>・健康保険</span>
                  <span>・労災保険</span>
                  <span>・雇用保険</span>
                  <span>・厚生年金</span>
                  <span>・企業年金</span>
                  <span>・財形貯蓄制度</span>
                  <span>・産休・育児休暇</span>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>その他</dt>
            <dd>
              <p>
                その他、詳しくは熊日広告社コーポレートサイトをご覧ください。
                <br />
                熊日広告社コーポレートサイト▼
                <br />
                <ExternalLink
                  href="https://kumakou.jp"
                  className={styles.itemLink}
                >
                  https://kumakou.jp/
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
