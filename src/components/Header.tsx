import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  ChatBubbleIcon,
  MixIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  MagicWandIcon,
  VideoIcon,
  RocketIcon,
  PersonIcon,
  ExitIcon,
  DashboardIcon
} from '@radix-ui/react-icons';
import Logo from './Logo';
import LoginModal from './LoginModal';
import { useAuth } from '../hooks/useAuth';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <>
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
              {currentUser ? (
                <>
                  <Link to="/dashboard" className={styles.navLink}>
                    <DashboardIcon width={18} height={18} />
                    Dashboard
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
                </>
              ) : (
                <>
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
                  <Link to="/ai-tech" className={styles.navLink}>
                    <RocketIcon width={18} height={18} />
                    AI&Tech
                  </Link>
                </>
              )}

              {/* User Authentication */}
              {currentUser ? (
                <div className={styles.userSection}>
                  <div className={styles.userInfo}>
                    {currentUser.photoURL ? (
                      <img
                        src={currentUser.photoURL}
                        alt="Avatar"
                        className={styles.userAvatar}
                      />
                    ) : (
                      <PersonIcon width={20} height={20} />
                    )}
                    <span className={styles.userName}>
                      {currentUser.displayName?.split(' ')[0] || 'Usuário'}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className={styles.logoutButton}
                  >
                    <ExitIcon width={16} height={16} />
                    Sair
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className={styles.loginButton}
                >
                  <PersonIcon width={16} height={16} />
                  Entrar
                </button>
              )}
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
              {currentUser ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className={styles.mobileNavLink}
                  >
                    <DashboardIcon width={20} height={20} />
                    Dashboard
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
                </>
              ) : (
                <>
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
                  <Link
                    to="/ai-tech"
                    onClick={() => setIsMenuOpen(false)}
                    className={styles.mobileNavLink}
                  >
                    <RocketIcon width={20} height={20} />
                    AI&Tech
                  </Link>
                </>
              )}

              {/* Mobile Auth */}
              {currentUser ? (
                <div className={styles.mobileUserSection}>
                  <div className={styles.mobileUserInfo}>
                    {currentUser.photoURL ? (
                      <img
                        src={currentUser.photoURL}
                        alt="Avatar"
                        className={styles.mobileUserAvatar}
                      />
                    ) : (
                      <PersonIcon width={24} height={24} />
                    )}
                    <span className={styles.mobileUserName}>
                      {currentUser.displayName?.split(' ')[0] || 'Usuário'}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className={styles.mobileNavLink}
                  >
                    <ExitIcon width={20} height={20} />
                    Sair
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className={`${styles.mobileNavLink} ${styles.mobileLoginButton}`}
                >
                  <PersonIcon width={20} height={20} />
                  Entrar
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;
