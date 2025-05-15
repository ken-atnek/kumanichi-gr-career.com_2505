/* =======================================
 * HEADER
 * URL: src/components/common/Header.tsx
 * Created: 2025-04-14
 * Last updated: 2025-04-23
 * ======================================= */
'use client';
import styles from '@/styles/components/common/Header.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import imageLogo from '@/assets/images/common/logo.webp';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
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
        !document.getElementById('mobileMenu')?.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <header className={styles.containerHeader}>
      <h1>
        <Image src={imageLogo} alt="西養寺" />
      </h1>
      <nav
        id="mobileMenu"
        className={`${isOpen ? styles['is-open'] : ''} ${
          !isOpen ? styles.closing : ''
        }`}
      >
        <Link href="/" className={styles.itemLink} onClick={closeMenu}>
          ホーム
        </Link>
        <Link
          href="/musubu-tsunagu/"
          className={`${styles.itemLink} ${pathname === '/musubu-tsunagu/' ? styles['is-active'] : ''}`}
          onClick={closeMenu}
        >
          結ぶ・紡ぐ
        </Link>
        <Link
          href="/oteramanabi/"
          className={`${styles.itemLink} ${pathname === '/oteramanabi/' ? styles['is-active'] : ''}`}
          onClick={closeMenu}
        >
          お寺学び
        </Link>
        <Link
          href="/noukotsudo/"
          className={`${styles.itemLink} ${pathname === '/noukotsudo/' ? styles['is-active'] : ''}`}
          onClick={closeMenu}
        >
          納骨堂 無量寿堂
        </Link>
        <Link
          href="/contact/"
          className={`${styles.itemLink} ${pathname === '/contact/' ? styles['is-active'] : ''}`}
          onClick={closeMenu}
        >
          お問い合わせ
        </Link>
      </nav>
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
