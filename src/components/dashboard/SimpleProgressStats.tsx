import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Target, Award, TrendingUp, Heart, Star } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import styles from './SimpleProgressStats.module.css';

const SimpleProgressStats: React.FC = () => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className={styles.noUser}>
        <p>Faça login para ver suas estatísticas</p>
      </div>
    );
  }

  const statsCards = [
    {
      title: 'Nível Atual',
      value: 1,
      subtitle: '0% para o próximo',
      icon: Star,
      gradient: 'primary',
      progress: 0
    },
    {
      title: 'Sequência Atual',
      value: 0,
      subtitle: '0 dias (recorde)',
      icon: Flame,
      gradient: 'secondary'
    },
    {
      title: 'Metas Ativas',
      value: 0,
      subtitle: '0 concluídas',
      icon: Target,
      gradient: 'success'
    },
    {
      title: 'Melhoria do Humor',
      value: '+0',
      subtitle: 'Pontos em média',
      icon: TrendingUp,
      gradient: 'warning'
    },
    {
      title: 'Experiência Total',
      value: 0,
      subtitle: '0 conquistas',
      icon: Award,
      gradient: 'primary'
    },
    {
      title: 'Bem-estar Geral',
      value: 50,
      subtitle: 'Índice atual',
      icon: Heart,
      gradient: 'info'
    }
  ];

  return (
    <div className={styles.container}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Suas Estatísticas de Bem-estar
      </motion.h2>
      
      <div className={styles.statsGrid}>
        {statsCards.map((card, index) => (
          <motion.div
            key={card.title}
            className={`${styles.statCard} ${styles[card.gradient]}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <card.icon size={24} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.cardValue}>{card.value}</div>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
              </div>
            </div>
            
            {card.progress !== undefined && (
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <motion.div
                    className={styles.progressFill}
                    initial={{ width: 0 }}
                    animate={{ width: `${card.progress}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SimpleProgressStats;
