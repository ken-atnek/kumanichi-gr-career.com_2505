/* =======================================
 * 熊日デジタル  募集要項
 * URL:src/components/digital-career/ContainerJobDescription.tsx
 * Referenced in: src/app/digital-career/page.tsx
 * Created: 2025-06-24
 * Last updated: 2025-07-02
 * ======================================= */
import styles from '@/styles/digital-career/PageTop.module.scss';
import ExternalLink from '@/components/common/ExternalLink';

const ContainerJobDescription = () => {
  return (
    <section
      className={styles.containerJobDescription}
      id="DigitalContainerJobDescription"
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
              <em>職種（１）映像クリエイター職</em>
              <p>
                企業のプロモーション映像や行政機関による観光PR動画、テレビ番組・CM、ウェブ広告用動画など、多様な分野の映像コンテンツを制作する業務です。イベントや講演会のライブ配信なども行います。ディレクションから撮影・編集まで、映像制作全般を担っていただきます。
              </p>
              <em>職種（２）ビジネス職</em>
              <p>
                映像・ホームページ・広告配信など当社が取り扱っている業務全般のコンサルティング営業を行っていただきます。
              </p>
            </dd>
          </dl>
          <dl>
            <dt>給与</dt>
            <dd>年齢や経験を考慮し当社規定により決定します</dd>
          </dl>
          <dl>
            <dt>求める能力・経験</dt>
            <dd>
              熊日デジタルは県内企業のWEBマーケティング支援が得意な会社です。WEBサイト構築スキル/WEB広告データの分析スキル/コミュニケーション力/マーケティング全般の知識/などが求められます。経験者はもちろん、未経験でも実務を通して学ぶことでスキルアップすることができます。
            </dd>
          </dl>
          <dl>
            <dt>福利厚生・各種制度</dt>
            <dd>
              <em>年間休日数：１０４日間</em>
              <ul>
                <li>
                  <h3>休日休暇</h3>
                  <span>・毎月日曜、祝日＋３７日</span>
                  <span>・有給休暇</span>
                  <span>・夏季休暇（連続４日）</span>
                  <span>・リフレッシュ特別有給休暇（連続９日）</span>
                  <span>・年末</span>
                  <span>・年始特別有給休暇</span>
                  <span>・慶弔休暇・永年勤続休暇</span>
                </li>
                <li>
                  <h3>諸手当</h3>
                  <span>・通勤手当</span>
                  <span>・食事手当</span>
                  <span>・残業手当 ※固定残業制度あり</span>
                </li>
                <li>
                  <h3>待遇・福利厚生・社内制度</h3>
                  <span>・健康保険</span>
                  <span>・労災保険</span>
                  <span>・雇用保険</span>
                  <span>・厚生年金</span>
                  <span>・産休</span>
                  <span>・育児休業</span>
                  <span>・退職金制度</span>
                  <span>・資格取得支援制度</span>
                  <span>・服装はスーツなどではなくビジネスカジュアル</span>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>その他</dt>
            <dd>
              <p>
                その他、詳しくは熊日デジタルコーポレートサイトをご覧ください。熊日デジタルコーポレートサイト▼
                <br />
                <ExternalLink
                  href="https://kumanichi-digital.com"
                  className={styles.itemLink}
                >
                  https://kumanichi-digital.com/
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
