import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Brain, Moon, Sparkles, ArrowRight } from 'lucide-react';
import styles from './QuickActions.module.css';

const QuickActions: React.FC = () => {
  const quickActions = [
    {
      icon: Play,
      title: 'Meditação Rápida',
      description: 'Sessão de 5 minutos',
      color: '#667eea',
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      action: () => console.log('Iniciar meditação rápida')
    },
    {
      icon: Heart,
      title: 'Respiração Consciente',
      description: 'Exercício de 3 minutos',
      color: '#f093fb',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
      action: () => console.log('Iniciar respiração consciente')
    },
    {
      icon: Brain,
      title: 'Foco Mental',
      description: 'Concentração guiada',
      color: '#4facfe',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      action: () => console.log('Iniciar foco mental')
    },
    {
      icon: Moon,
      title: 'Relaxamento',
      description: 'Para dormir melhor',
      color: '#a8edea',
      gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
      action: () => console.log('Iniciar relaxamento')
    }
  ];

  const dailyGoals = [
    { 
      title: 'Meditar 10 minutos', 
      completed: true, 
      progress: 100,
      icon: '🧘‍♀️'
    },
    { 
      title: 'Praticar gratidão', 
      completed: false, 
      progress: 0,
      icon: '🙏'
    },
    { 
      title: 'Exercitar-se', 
      completed: true, 
      progress: 100,
      icon: '🏃‍♂️'
    },
    { 
      title: 'Ler 15 páginas', 
      completed: false, 
      progress: 60,
      icon: '📚'
    }
  ];

  return (
    <div className={styles.quickActions}>
      {/* Ações Rápidas */}
      <motion.div
        className={styles.actionsSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.sectionHeader}>
          <Sparkles size={20} />
          <h3>Ações Rápidas</h3>
        </div>
        
        <div className={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <motion.div
              key={action.title}
              className={styles.actionCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={action.action}
            >
              <div 
                className={styles.actionIcon}
                style={{ background: action.gradient }}
              >
                <action.icon size={24} />
              </div>
              
              <div className={styles.actionContent}>
                <h4>{action.title}</h4>
                <p>{action.description}</p>
              </div>
              
              <div className={styles.actionArrow}>
                <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Metas Diárias */}
      <motion.div
        className={styles.goalsSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.goalIcon}>🎯</span>
          <h3>Metas Diárias</h3>
          <div className={styles.completionRate}>
            <span>2/4</span>
          </div>
        </div>
        
        <div className={styles.goalsList}>
          {dailyGoals.map((goal, index) => (
            <motion.div
              key={goal.title}
              className={`${styles.goalItem} ${goal.completed ? styles.completed : ''}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.goalCheck}>
                <input
                  type="checkbox"
                  checked={goal.completed}
                  onChange={() => console.log(`Toggle goal: ${goal.title}`)}
                  className={styles.checkbox}
                />
                <div className={styles.checkmark}>
                  {goal.completed && '✓'}
                </div>
              </div>
              
              <div className={styles.goalInfo}>
                <div className={styles.goalHeader}>
                  <span className={styles.goalEmoji}>{goal.icon}</span>
                  <span className={`${styles.goalTitle} ${goal.completed ? styles.completedText : ''}`}>
                    {goal.title}
                  </span>
                </div>
                
                {!goal.completed && goal.progress > 0 && (
                  <div className={styles.goalProgress}>
                    <div className={styles.progressBar}>
                      <motion.div
                        className={styles.progressFill}
                        initial={{ width: 0 }}
                        animate={{ width: `${goal.progress}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
                    </div>
                    <span className={styles.progressText}>{goal.progress}%</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.overallProgress}>
          <div className={styles.progressHeader}>
            <span>Progresso Geral</span>
            <span>50%</span>
          </div>
          <div className={styles.overallProgressBar}>
            <motion.div
              className={styles.overallProgressFill}
              initial={{ width: 0 }}
              animate={{ width: '50%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuickActions;
