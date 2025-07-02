/* =======================================
 * 株式会社熊日デジタル HEADER
 * URL: src/components/digital-career/common/Header.tsx
 * Created: 2025-04-14
 * Last updated: 2025-06-20
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import Logo from '@/assets/images/digital-career/kumanichi_digital_logo.webp';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  // メニューが開いている間はスクロールを防ぐ
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // 外側をクリックしたらメニューを閉じる
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        !document.getElementById('headerNav')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.scrollY > 150);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Run once on mount in case already scrolled
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.containerHeader} ${isScrolled ? styles.isActive : ''}`}
    >
      <article className={styles.digital}>
        <Link href="/" className={styles.digitalH1}>
          <h1>
            <Image src={Logo} alt="熊日デジタル" />
          </h1>
          <p>株式会社熊日デジタル　キャリア採用専用サイト</p>
        </Link>
        <nav
          id="headerNav"
          className={`${isOpen ? styles['is-open'] : ''} ${
            !isOpen ? styles.closing : ''
          }`}
        >
          <Link
            href="/"
            className={`${styles.itemLink} ${styles.linkTop}`}
            onClick={closeMenu}
          >
            TOP
          </Link>
          <Link
            href="/digital-career/#DigitalContainerNews"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            NEWS
          </Link>
          <Link
            href="/#ContainerAbout"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            about
          </Link>
          <Link
            href="/#ContainerFlow"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            greeting
          </Link>
          <Link
            href="/#ContainerFaq"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            schedule
          </Link>
          <Link
            href="/#ContainerFaq"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            job description
          </Link>
          <Link
            href="/#ContainerContact"
            className={styles.itemLink}
            onClick={closeMenu}
          >
            entry
          </Link>
          <Link href="/" className={styles.itemLink} onClick={closeMenu}>
            総合トップ
          </Link>
        </nav>
      </article>
      <button
        className={`${styles.hamburgerButton} ${
          isOpen ? styles['is-open'] : ''
        }`}
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="メニューを開閉"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
