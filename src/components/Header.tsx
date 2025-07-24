import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  ChatBubbleIcon,
  MixIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  MagicWandIcon,
  VideoIcon
} from '@radix-ui/react-icons';
import Logo from './Logo';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <Logo size={32} variant="full" color="gradient" />
        </Link>

        {/* Navigation Container */}
        <div className={styles.navigationContainer}>
          {/* Desktop Menu Items */}
          <div className={styles.desktopMenu}>
            <Link to="/" className={styles.navLink}>
              <HomeIcon width={18} height={18} />
              Início
            </Link>

            <Link to="/quotes" className={styles.navLink}>
              <ChatBubbleIcon width={18} height={18} />
              Frases
            </Link>

            <Link to="/videos" className={styles.navLink}>
              <VideoIcon width={18} height={18} />
              Vídeos
            </Link>

            <Link to="/meditation" className={styles.navLink}>
              <MagicWandIcon width={18} height={18} />
              Meditação
            </Link>

            <Link to="/practices" className={styles.navLink}>
              <MixIcon width={18} height={18} />
              Práticas
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.mobileMenuButton}
          >
            {isMenuOpen ? <Cross1Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuContent}>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              <HomeIcon width={20} height={20} />
              Início
            </Link>

            <Link
              to="/quotes"
              onClick={() => setIsMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              <ChatBubbleIcon width={20} height={20} />
              Frases
            </Link>

            <Link
              to="/videos"
              onClick={() => setIsMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              <VideoIcon width={20} height={20} />
              Vídeos
            </Link>

            <Link
              to="/meditation"
              onClick={() => setIsMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              <MagicWandIcon width={20} height={20} />
              Meditação
            </Link>

            <Link
              to="/practices"
              onClick={() => setIsMenuOpen(false)}
              className={styles.mobileNavLink}
            >
              <MixIcon width={20} height={20} />
              Práticas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
