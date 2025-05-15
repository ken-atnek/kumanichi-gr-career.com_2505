/* =======================================
 * FOOTER
 * URL: src/components/common/Footer.tsx
 * Created: 2025-04-25
 * Last updated: 2025-04-26
 * ======================================= */
import styles from '@/styles/components/common/Footer.module.scss';
import imageLogo from '@/assets/images/common/logo.webp';
import logoMatsushita from '@/assets/images/common/logo-matsushita.webp';
import logoHonganji from '@/assets/images/common/logo-honganji.webp';
import logoAizono from '@/assets/images/common/logo-aizono.webp';
import logoOchiai from '@/assets/images/common/logo-ochiai.webp';
import imageLogoMinori from '@/assets/images/common/logo-minori.webp';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className={styles.containerFooter}>
      <section className={styles.blockMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24009.143530074227!2d130.43801254225792!3d32.99799274731627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f4.1!3m3!1m2!1s0x35404fe2bd696a71%3A0x8199fbead98240f7!2z6KW_6aSK5a-677yI5rWE5Zyf55yf5a6X5pys6aGY5a-65rS-77yJ!5e0!3m2!1sja!2sjp!4v1746700953788!5m2!1sja!2sjp"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <section className={styles.blockLink}>
        <nav>
          <a href="https://www.matusita.net/" target="_blank">
            <Image src={logoMatsushita} alt="松下仏壇店" />
          </a>
          <a href="https://www.hongwanji.or.jp/" target="_blank">
            <Image src={logoHonganji} alt="本願寺派" />
          </a>
          <a href="#">
            <Image src={logoAizono} alt="あいぞの" />
          </a>
          <a href="https://www.ochiai-web.co.jp/" target="_blank">
            <Image src={logoOchiai} alt="落合葬儀社" />
          </a>
        </nav>
      </section>
      <section className={styles.blockBottom}>
        <article>
          <nav>
            <Link href="/" className={styles.itemLink}>
              ホーム
            </Link>
            <Link href="/musubu-tsunagu/" className={styles.itemLink}>
              結ぶ・紡ぐ
            </Link>
            <Link href="/oteramanabi/" className={styles.itemLink}>
              お寺選び
            </Link>
            <Link href="/noukotsudo/" className={styles.itemLink}>
              納骨堂 無量寿堂
            </Link>
            <Link href="/contact/" className={styles.itemLink}>
              お問い合わせ
            </Link>
          </nav>
          <div className={styles.boxFoot}>
            <a href="#">
              <Image src={imageLogo} alt="西養寺" />
            </a>
            <a href="https://www.ans.co.jp/n/honideminori/" target="_blank">
              <Image src={imageLogoMinori} alt="本井手みのり保育園" />
            </a>
            <div className={styles.shopInfo}>
              <address>
                <span>〒864-0012</span>熊本県荒尾市本井手1753
              </address>
              <a href="tel:0968660850">TEL. (0968)66-0850</a>
            </div>
          </div>
          <div className={styles.copyright}>
            Copyright saiyouji. All Rights Reserved.
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
