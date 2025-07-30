import React, { useState, useCallback, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  DashboardIcon,
  ChatBubbleIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  PersonIcon,
  ExitIcon,
  BellIcon,
  ActivityLogIcon,
  HeartIcon,
  StarIcon,
  CameraIcon
} from '@radix-ui/react-icons';
import Logo from './Logo';
import { useAuth } from '../hooks/useAuth';
import styles from './LoggedHeader.module.css';

const LoggedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const handleLogout = useCallback(async () => {
    try {
      await logout();
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }, [logout]);

  const isActiveRoute = useCallback((path: string) => {
    return location.pathname === path;
  }, [location.pathname]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Memoizar links para evitar re-renderizações desnecessárias
  const navigationLinks = useMemo(() => [
    { to: '/dashboard', label: 'Dashboard', icon: DashboardIcon },
    { to: '/therapy-chat', label: 'Terapia IA', icon: ChatBubbleIcon },
    { to: '/behavior-analysis', label: 'Análise ML', icon: ActivityLogIcon },
    { to: '/mental-health-dashboard', label: 'Saúde Mental', icon: HeartIcon },
    { to: '/recommendations', label: 'Recomendações', icon: StarIcon },
    { to: '/emotion-detection', label: 'Detecção Emoções', icon: CameraIcon },
  ], []);

  const userFirstName = useMemo(() => {
    return currentUser?.displayName?.split(' ')[0] || 'Usuário';
  }, [currentUser?.displayName]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          {/* Logo */}
          <Link to="/dashboard" className={styles.logo}>
            <Logo size={32} variant="full" color="gradient" />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopMenu}>
            {navigationLinks.map(({ to, label, icon: Icon }) => (
              <Link 
                key={to}
                to={to} 
                className={`${styles.navLink} ${isActiveRoute(to) ? styles.active : ''}`}
              >
                <Icon width={18} height={18} />
                {label}
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className={styles.userSection}>
            <div className={styles.notifications}>
              <BellIcon width={20} height={20} />
              <span className={styles.notificationBadge}>2</span>
            </div>

            <div className={styles.userInfo}>
              {currentUser?.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt="Avatar"
                  className={styles.userAvatar}
                />
              ) : (
                <PersonIcon width={20} height={20} />
              )}
              <span className={styles.userName}>
                {userFirstName}
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

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? <Cross1Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContent}>
              {navigationLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={`${styles.mobileNavLink} ${isActiveRoute(to) ? styles.active : ''}`}
                >
                  <Icon width={20} height={20} />
                  {label}
                </Link>
              ))}

              {/* Mobile User Actions */}
              <div className={styles.mobileUserActions}>
                <div className={styles.mobileUserInfo}>
                  {currentUser?.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt="Avatar"
                      className={styles.mobileUserAvatar}
                    />
                  ) : (
                    <PersonIcon width={24} height={24} />
                  )}
                  <span className={styles.mobileUserName}>
                    {userFirstName}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className={styles.mobileLogoutButton}
                >
                  <ExitIcon width={20} height={20} />
                  Sair
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default LoggedHeader;
