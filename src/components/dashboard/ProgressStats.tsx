import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Target, Award, Calendar, Flame } from 'lucide-react';
import styles from './ProgressStats.module.css';

const ProgressStats: React.FC = () => {
  const stats = [
    {
      icon: Flame,
      title: 'Sequência Atual',
      value: '7',
      unit: 'dias',
      color: '#f56500',
      progress: 70,
      description: 'Mantenha o ritmo!'
    },
    {
      icon: Clock,
      title: 'Tempo Total',
      value: '156',
      unit: 'minutos',
      color: '#667eea',
      progress: 85,
      description: 'Esta semana'
    },
    {
      icon: Target,
      title: 'Meta Semanal',
      value: '5/7',
      unit: 'sessões',
      color: '#48bb78',
      progress: 71,
      description: 'Quase lá!'
    },
    {
      icon: Award,
      title: 'Conquistas',
      value: '12',
      unit: 'badges',
      color: '#ed8936',
      progress: 100,
      description: 'Parabéns!'
    }
  ];

  const weeklyData = [
    { day: 'Seg', completed: true, duration: 15 },
    { day: 'Ter', completed: true, duration: 20 },
    { day: 'Qua', completed: true, duration: 10 },
    { day: 'Qui', completed: true, duration: 25 },
    { day: 'Sex', completed: true, duration: 15 },
    { day: 'Sáb', completed: false, duration: 0 },
    { day: 'Dom', completed: false, duration: 0 },
  ];

  return (
    <div className={styles.progressStats}>
      {/* Cards de Estatísticas */}
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.statHeader}>
              <div 
                className={styles.statIcon}
                style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
              >
                <stat.icon size={24} />
              </div>
              <div className={styles.statInfo}>
                <h4>{stat.title}</h4>
                <div className={styles.statValue}>
                  <span className={styles.value}>{stat.value}</span>
                  <span className={styles.unit}>{stat.unit}</span>
                </div>
              </div>
            </div>
            
            <div className={styles.progressContainer}>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  style={{ backgroundColor: stat.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${stat.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
              <span className={styles.progressText}>{stat.progress}%</span>
            </div>
            
            <p className={styles.statDescription}>{stat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Gráfico Semanal */}
      <motion.div
        className={styles.weeklyChart}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className={styles.chartHeader}>
          <div className={styles.chartTitle}>
            <Calendar size={20} />
            <h3>Atividade Semanal</h3>
          </div>
          <div className={styles.chartLegend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.completed}`}></div>
              <span>Concluído</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.pending}`}></div>
              <span>Pendente</span>
            </div>
          </div>
        </div>

        <div className={styles.chartContent}>
          {weeklyData.map((day, index) => (
            <motion.div
              key={day.day}
              className={styles.dayColumn}
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.dayLabel}>{day.day}</div>
              <div className={styles.dayBar}>
                <motion.div
                  className={`${styles.barFill} ${day.completed ? styles.completed : styles.pending}`}
                  initial={{ height: 0 }}
                  animate={{ height: day.completed ? `${Math.max(day.duration * 2, 20)}px` : '10px' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
              <div className={styles.dayDuration}>
                {day.completed ? `${day.duration}min` : '-'}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Insights e Motivação */}
      <motion.div
        className={styles.insightsCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className={styles.insightHeader}>
          <TrendingUp size={20} />
          <h3>Seus Insights</h3>
        </div>
        
        <div className={styles.insights}>
          <div className={styles.insight}>
            <div className={styles.insightIcon}>🎯</div>
            <div className={styles.insightText}>
              <strong>Excelente consistência!</strong> Você manteve sua prática por 7 dias consecutivos.
            </div>
          </div>
          
          <div className={styles.insight}>
            <div className={styles.insightIcon}>⏰</div>
            <div className={styles.insightText}>
              <strong>Melhor horário:</strong> Suas sessões das 9h têm sido mais eficazes.
            </div>
          </div>
          
          <div className={styles.insight}>
            <div className={styles.insightIcon}>📈</div>
            <div className={styles.insightText}>
              <strong>Progresso notável:</strong> Sua duração média aumentou 40% este mês.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgressStats;
