import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Play, Award, MessageCircle, Calendar } from 'lucide-react';
import styles from './RecentActivity.module.css';

const RecentActivity: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'meditation',
      icon: Play,
      title: 'Meditação Mindfulness',
      description: 'Sessão de 15 minutos concluída',
      time: '2 horas atrás',
      duration: '15 min',
      color: '#667eea',
      badge: '🧘‍♀️'
    },
    {
      id: 2,
      type: 'achievement',
      icon: Award,
      title: 'Conquista Desbloqueada',
      description: 'Sequência de 7 dias alcançada!',
      time: '1 dia atrás',
      duration: null,
      color: '#f6ad55',
      badge: '🏆'
    },
    {
      id: 3,
      type: 'breathing',
      icon: Clock,
      title: 'Respiração Consciente',
      description: 'Exercício de respiração 4-7-8',
      time: '2 dias atrás',
      duration: '5 min',
      color: '#48bb78',
      badge: '🫁'
    },
    {
      id: 4,
      type: 'reflection',
      icon: MessageCircle,
      title: 'Reflexão Diária',
      description: 'Anotação de gratidão adicionada',
      time: '2 dias atrás',
      duration: null,
      color: '#ed64a6',
      badge: '📝'
    },
    {
      id: 5,
      type: 'meditation',
      icon: Play,
      title: 'Meditação para Dormir',
      description: 'Relaxamento guiado noturno',
      time: '3 dias atrás',
      duration: '20 min',
      color: '#9f7aea',
      badge: '🌙'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Lembrete de Meditação',
      time: '18:00',
      description: 'Sua sessão diária de meditação',
      type: 'reminder',
      color: '#667eea'
    },
    {
      id: 2,
      title: 'Workshop Online',
      time: 'Amanhã 14:00',
      description: 'Técnicas avançadas de mindfulness',
      type: 'event',
      color: '#48bb78'
    },
    {
      id: 3,
      title: 'Revisão Semanal',
      time: 'Domingo',
      description: 'Analise seu progresso da semana',
      type: 'review',
      color: '#f6ad55'
    }
  ];

  return (
    <div className={styles.recentActivity}>
      {/* Atividades Recentes */}
      <motion.div
        className={styles.activitiesSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.sectionHeader}>
          <Clock size={20} />
          <h3>Atividades Recentes</h3>
          <button className={styles.viewAllButton}>Ver Todas</button>
        </div>
        
        <div className={styles.activitiesList}>
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className={styles.activityItem}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.activityIndicator}>
                <div 
                  className={styles.activityIcon}
                  style={{ backgroundColor: `${activity.color}20`, color: activity.color }}
                >
                  <activity.icon size={16} />
                </div>
                <div className={styles.activityBadge}>
                  {activity.badge}
                </div>
              </div>
              
              <div className={styles.activityContent}>
                <div className={styles.activityHeader}>
                  <h4>{activity.title}</h4>
                  {activity.duration && (
                    <span className={styles.duration}>{activity.duration}</span>
                  )}
                </div>
                <p className={styles.activityDescription}>{activity.description}</p>
                <span className={styles.activityTime}>{activity.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Próximos Eventos */}
      <motion.div
        className={styles.upcomingSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.sectionHeader}>
          <Calendar size={20} />
          <h3>Próximos</h3>
        </div>
        
        <div className={styles.upcomingList}>
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={styles.upcomingItem}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className={styles.upcomingIndicator}
                style={{ backgroundColor: event.color }}
              />
              
              <div className={styles.upcomingContent}>
                <div className={styles.upcomingHeader}>
                  <h4>{event.title}</h4>
                  <span className={styles.upcomingTime}>{event.time}</span>
                </div>
                <p className={styles.upcomingDescription}>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Estatísticas Rápidas */}
      <motion.div
        className={styles.quickStats}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🔥</div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>7</span>
            <span className={styles.statLabel}>Sequência</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>⏱️</div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>156</span>
            <span className={styles.statLabel}>Min. hoje</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIcon}>🎯</div>
          <div className={styles.statInfo}>
            <span className={styles.statNumber}>85%</span>
            <span className={styles.statLabel}>Meta semanal</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RecentActivity;
