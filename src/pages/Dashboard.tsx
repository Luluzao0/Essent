import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Settings, TrendingUp, Bell } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import ProfileView from '../components/dashboard/ProfileView';
import AccountSettings from '../components/dashboard/AccountSettings';
import ProgressStats from '../components/dashboard/ProgressStats';
import QuickActions from '../components/dashboard/QuickActions';
import RecentActivity from '../components/dashboard/RecentActivity';
import styles from './Dashboard.module.css';

type TabType = 'overview' | 'profile' | 'settings';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: TrendingUp },
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className={styles.overviewContent}>
            <div className={styles.statsGrid}>
              <ProgressStats />
            </div>
            <div className={styles.actionsGrid}>
              <QuickActions />
              <RecentActivity />
            </div>
          </div>
        );
      case 'profile':
        return <ProfileView />;
      case 'settings':
        return <AccountSettings />;
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
        <div className={styles.dashboardHeader}>
          <div className={styles.welcomeSection}>
            <div className={styles.userAvatar}>
              <img 
                src={currentUser?.photoURL || '/api/placeholder/80/80'} 
                alt={currentUser?.displayName || 'Usuário'}
                className={styles.avatarImage}
              />
            </div>
            <div className={styles.welcomeText}>
              <h1>Olá, {currentUser?.displayName?.split(' ')[0] || 'Usuário'}!</h1>
              <p>Bem-vindo de volta ao seu espaço de bem-estar</p>
            </div>
          </div>
          
          <div className={styles.notificationBell}>
            <Bell size={24} />
            <span className={styles.notificationBadge}>3</span>
          </div>
        </div>

        {/* Navegação por Abas */}
        <div className={styles.tabNavigation}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.activeTab : ''
              }`}
            >
              <tab.icon size={20} />
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Conteúdo da Aba Ativa */}
        <motion.div
          key={activeTab}
          className={styles.tabContent}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
