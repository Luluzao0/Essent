import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Settings, TrendingUp, Bell, Sparkles } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import ProfileView from '../components/dashboard/ProfileView';
import AccountSettings from '../components/dashboard/AccountSettings';
import SimpleProgressStats from '../components/dashboard/SimpleProgressStats';
import QuickActions from '../components/dashboard/QuickActions';
import RecentActivity from '../components/dashboard/RecentActivity';
import styles from './Dashboard.module.css';

type TabType = 'overview' | 'profile' | 'settings';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [notificationCount] = useState(3);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { 
      id: 'overview', 
      label: 'Visão Geral', 
      icon: TrendingUp,
      description: 'Resumo das suas atividades'
    },
    { 
      id: 'profile', 
      label: 'Perfil', 
      icon: User,
      description: 'Suas informações pessoais'
    },
    { 
      id: 'settings', 
      label: 'Configurações', 
      icon: Settings,
      description: 'Preferências da conta'
    },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Bom dia';
    if (hour < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const renderTabContent = () => {
    if (isLoading) {
      return (
        <div className={styles.loadingContainer}>
          <div className={styles.skeleton} style={{ height: '200px', borderRadius: '16px' }} />
          <div className={styles.skeleton} style={{ height: '150px', borderRadius: '16px', marginTop: '1rem' }} />
        </div>
      );
    }

    switch (activeTab) {
      case 'overview':
        return (
          <motion.div 
            className={styles.overviewContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.statsGrid}>
              <SimpleProgressStats />
            </div>
            <div className={styles.actionsGrid}>
              <QuickActions />
              <RecentActivity />
            </div>
          </motion.div>
        );
      case 'profile':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProfileView />
          </motion.div>
        );
      case 'settings':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <AccountSettings />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={styles.dashboard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        {/* Header do Dashboard */}
        <motion.div 
          className={styles.dashboardHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.welcomeSection}>
            <div className={styles.userAvatar}>
              <img 
                src={currentUser?.photoURL || '/api/placeholder/90/90'} 
                alt={currentUser?.displayName || 'Usuário'}
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.welcomeText}>
              <h1>
                {getGreeting()}, {currentUser?.displayName?.split(' ')[0] || 'Usuário'}!{' '}
                <Sparkles size={24} style={{ display: 'inline', color: '#fbbf24' }} />
              </h1>
              <p>Bem-vindo de volta ao seu espaço de bem-estar</p>
            </div>
          </div>
          
          <motion.div 
            className={styles.notificationBell}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell size={24} />
            {notificationCount > 0 && (
              <span className={styles.notificationBadge}>{notificationCount}</span>
            )}
          </motion.div>
        </motion.div>

        {/* Navegação por Abas */}
        <motion.div 
          className={styles.tabNavigation}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.activeTab : ''
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              title={tab.description}
            >
              <tab.icon size={20} />
              <span className={styles.tabLabel}>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Conteúdo da Aba Ativa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.tabContent}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Dashboard;
