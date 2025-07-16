/* =======================================
 * 熊日サービス開発  募集要項
 * URLsrc/components/sv-career/ContainerJobDescription.tsx
 * Referenced in: src/app/sv-career/page.tsx
 * Created: 2025-06-30
 * Last updated: 2025-06-30
 * ======================================= */
import styles from '@/styles/sv-career/PageTop.module.scss';
import ExternalLink from '@/components/common/ExternalLink';

const ContainerJobDescription = () => {
  return (
    <section className={styles.containerJobDescription}>
      <article>
        <div className={styles.wrapH2}>
          <h2>JOB DESCRIPTION</h2>
          <span>募集要項</span>
        </div>
        <div className={styles.notice}>現在は募集を停止しております</div>

        <div
          className={styles.boxJobDescription}
          id="SvContainerJobDescription"
        >
          <dl>
            <dt>職種</dt>
            <dd>
              <em>総合職</em>
            </dd>
          </dl>
          <dl>
            <dt>配属先候補名（部署名）</dt>
            <dd>
              <em>セミナー・企画事業グループ</em>
              <span>・求める能力・経験</span>
              <p>
                カルチャーセンターで開催する講座の新規企画／立案に興味がある方。また、各種イベントは、熊本日日新聞社をはじめ社外スタッフと一緒に業務に携わることが多い職種ですので、好奇心旺盛な方をお待ちしています。社会人経験10年以上の方、大歓迎。
              </p>
              <em>DTP部</em>
              <span>・求める能力・経験</span>
              <p>
                主に熊本日日新聞の特集紙面や生活情報誌などの組版データ作成に携わっていただきますので、デザインやDTPの経験がある方をお待ちしています。社会人経験10年以上の方、大歓迎。
              </p>
              <em>出版グループ</em>
              <span>・求める能力・経験</span>
              <p>
                各種打ち合わせ、予算管理、スケジューリング、編集／校正作業など出版に関わる業務全般に携わって頂きます。一般企業や個人の方からの取材、デザイナー／印刷会社との打ち合わせなどが多いためコミュニケーションが取れる方をお待ちしています。
                編集経験10年以上の方、大歓迎。
              </p>
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
                <li>
                  <h3>諸手当</h3>

                  <span>
                    ・通勤手当（通勤方法、通勤距離に応じて支給）上限21,000円
                  </span>
                  <span>
                    ・食事手当（就業場所により相違有、2,500円～3,000円）
                  </span>
                  <span>・残業手当</span>
                </li>
                <li>
                  <span>▪︎昇給＝年１回（４月）</span>
                  <span>▪︎賞与＝年２回（６月・12月）</span>
                  <span>▪︎年間休日数＝104日</span>
                </li>

                <li>
                  <h3>▪︎その他休暇</h3>
                  <span>・年次有給休暇</span>
                  <span>・永年勤続休暇</span>
                  <span>・特別有給休暇（慶弔・リフレッシュ・年末年始）</span>
                  <span>・産前産後休業</span>
                  <span>・育児休業</span>
                  <span>・介護休業</span>
                  <span>・育児休暇など</span>
                </li>
                <li>
                  <h3>▪︎各種社会保険</h3>
                </li>
                <li>
                  <h3>▪︎その他</h3>
                  <span>・財形貯蓄</span>
                  <span>・退職金制度</span>
                  <span>・企業年金</span>
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>その他</dt>
            <dd>
              <p>
                その他、詳しくは熊日サービス開発コーポレートサイトをご覧ください。熊日デジタルコーポレートサイト▼
                <br />
                <ExternalLink
                  href="https://www.kumanichi-sv.co.jp/"
                  className={styles.itemLink}
                >
                  https://www.kumanichi-sv.co.jp/
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
