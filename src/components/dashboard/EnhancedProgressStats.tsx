import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Target, Award, TrendingUp, Heart, Star } from 'lucide-react';
import { useUserProgress, useMeditationSessions, useWellnessGoals } from '../../hooks/useFirestore';
import { useAuth } from '../../hooks/useAuth';
import styles from './EnhancedProgressStats.module.css';

const EnhancedProgressStats: React.FC = () => {
  const { currentUser } = useAuth();
  const { progress, loading: progressLoading } = useUserProgress();
  const { stats, loading: statsLoading } = useMeditationSessions();
  const { goals, loading: goalsLoading } = useWellnessGoals();

  if (!currentUser) {
    return (
      <div className={styles.noUser}>
        <p>Faça login para ver suas estatísticas</p>
      </div>
    );
  }

  if (progressLoading || statsLoading || goalsLoading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Carregando suas estatísticas...</p>
      </div>
    );
  }

  const progressPercentage = progress ? Math.min((progress.experience % 1000) / 10, 100) : 0;
  const activeGoals = goals.filter(goal => !goal.isCompleted);
  const completedGoals = goals.filter(goal => goal.isCompleted);

  const statsCards = [
    {
      title: 'Nível Atual',
      value: progress?.level || 1,
      subtitle: `${progressPercentage.toFixed(0)}% para o próximo`,
      icon: Star,
      gradient: 'primary',
      progress: progressPercentage
    },
    {
      title: 'Sequência Atual',
      value: progress?.currentStreak || 0,
      subtitle: `${progress?.longestStreak || 0} dias (recorde)`,
      icon: Flame,
      gradient: 'secondary'
    },
    {
      title: 'Minutos Meditados',
      value: progress?.meditationMinutes || 0,
      subtitle: `${stats?.totalSessions || 0} sessões`,
      icon: Heart,
      gradient: 'accent'
    },
    {
      title: 'Metas Ativas',
      value: activeGoals.length,
      subtitle: `${completedGoals.length} concluídas`,
      icon: Target,
      gradient: 'success'
    },
    {
      title: 'Melhoria do Humor',
      value: stats?.avgMoodImprovement ? `+${stats.avgMoodImprovement.toFixed(1)}` : '0',
      subtitle: 'Pontos em média',
      icon: TrendingUp,
      gradient: 'warning'
    },
    {
      title: 'Experiência Total',
      value: progress?.experience || 0,
      subtitle: `${progress?.badges?.length || 0} conquistas`,
      icon: Award,
      gradient: 'primary'
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
            whileTap={{ scale: 0.98 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconContainer}>
                <card.icon size={24} className={styles.icon} />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.cardValue}>
                  {typeof card.value === 'number' && card.value > 1000 
                    ? `${(card.value / 1000).toFixed(1)}k` 
                    : card.value}
                </div>
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
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>
            )}
            
            <div className={styles.cardGlow} />
          </motion.div>
        ))}
      </div>

      {/* Seção de conquistas recentes */}
      {progress?.badges && progress.badges.length > 0 && (
        <motion.div
          className={styles.achievementsSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className={styles.achievementsTitle}>Conquistas Recentes</h3>
          <div className={styles.badgesContainer}>
            {progress.badges.slice(-3).map((badge, index) => (
              <motion.div
                key={badge}
                className={styles.badge}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <Award size={20} />
                <span>{badge}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EnhancedProgressStats;
