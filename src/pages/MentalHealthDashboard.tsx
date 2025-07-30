import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  BarChartIcon,
  CalendarIcon,
  StarIcon,
  ActivityLogIcon,
  LightningBoltIcon,
  SunIcon,
  MoonIcon,
  CheckIcon
} from '@radix-ui/react-icons';
import LoggedHeader from '../components/LoggedHeader';
import styles from './MentalHealthDashboard.module.css';

interface MoodEntry {
  date: string;
  mood: number; // 1-5
  energy: number; // 1-5
  stress: number; // 1-5
  notes?: string;
}

interface Goal {
  id: string;
  title: string;
  category: 'mindfulness' | 'exercise' | 'sleep' | 'social';
  progress: number;
  target: number;
  unit: string;
  completed: boolean;
}

interface WellnessScore {
  overall: number;
  mood: number;
  energy: number;
  stress: number;
  sleep: number;
}

const MentalHealthDashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [isLoading, setIsLoading] = useState(true);

  // Dados simulados
  const [moodHistory] = useState<MoodEntry[]>([
    { date: '2025-01-25', mood: 4, energy: 3, stress: 2 },
    { date: '2025-01-26', mood: 3, energy: 4, stress: 3 },
    { date: '2025-01-27', mood: 5, energy: 4, stress: 1 },
    { date: '2025-01-28', mood: 4, energy: 3, stress: 2 },
    { date: '2025-01-29', mood: 4, energy: 5, stress: 2 },
  ]);

  const [goals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Meditação diária',
      category: 'mindfulness',
      progress: 12,
      target: 15,
      unit: 'min',
      completed: false
    },
    {
      id: '2',
      title: 'Exercícios físicos',
      category: 'exercise',
      progress: 3,
      target: 4,
      unit: 'vezes/semana',
      completed: false
    },
    {
      id: '3',
      title: 'Dormir 8 horas',
      category: 'sleep',
      progress: 7.5,
      target: 8,
      unit: 'horas',
      completed: false
    },
    {
      id: '4',
      title: 'Contato social',
      category: 'social',
      progress: 5,
      target: 5,
      unit: 'interações',
      completed: true
    }
  ]);

  const [wellnessScore] = useState<WellnessScore>({
    overall: 78,
    mood: 82,
    energy: 75,
    stress: 68,
    sleep: 85
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const getCurrentMoodEntry = () => {
    return moodHistory.find(entry => entry.date === selectedDate) || {
      date: selectedDate,
      mood: 3,
      energy: 3,
      stress: 3
    };
  };

  const getMoodEmoji = (mood: number) => {
    const emojis = ['😢', '😕', '😐', '😊', '😁'];
    return emojis[mood - 1] || '😐';
  };

  const getEnergyIcon = (energy: number) => {
    return energy >= 4 ? SunIcon : energy >= 3 ? LightningBoltIcon : MoonIcon;
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'mindfulness': return HeartIcon;
      case 'exercise': return ActivityLogIcon;
      case 'sleep': return MoonIcon;
      case 'social': return StarIcon;
      default: return CheckIcon;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'mindfulness': return '#8b5cf6';
      case 'exercise': return '#059669';
      case 'sleep': return '#3b82f6';
      case 'social': return '#f59e0b';
      default: return '#64748b';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#059669';
    if (score >= 60) return '#f59e0b';
    return '#dc2626';
  };

  return (
    <div className={styles.mentalHealthPage}>
      <LoggedHeader />
      
      <div className={styles.container}>
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.headerContent}>
            <div className={styles.titleSection}>
              <HeartIcon width={32} height={32} className={styles.titleIcon} />
              <div>
                <h1>Dashboard de Saúde Mental</h1>
                <p>Acompanhe seu bem-estar de forma personalizada</p>
              </div>
            </div>
            
            <div className={styles.dateSelector}>
              <CalendarIcon width={20} height={20} />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className={styles.dateInput}
              />
            </div>
          </div>
        </motion.div>

        {isLoading ? (
          <div className={styles.loadingContainer}>
            <motion.div
              className={styles.loadingSpinner}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <HeartIcon width={32} height={32} />
            </motion.div>
            <p>Carregando seu dashboard personalizado...</p>
          </div>
        ) : (
          <>
            {/* Score de bem-estar geral */}
            <motion.div
              className={styles.wellnessOverview}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.overallScore}>
                <div className={styles.scoreCircle}>
                  <motion.div
                    className={styles.scoreProgress}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ 
                      background: `conic-gradient(${getScoreColor(wellnessScore.overall)} ${wellnessScore.overall * 3.6}deg, rgba(59, 130, 246, 0.1) 0deg)`
                    }}
                  >
                    <div className={styles.scoreInner}>
                      <span className={styles.scoreValue}>{wellnessScore.overall}</span>
                      <span className={styles.scoreLabel}>Bem-estar</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className={styles.scoreBreakdown}>
                {Object.entries(wellnessScore).filter(([key]) => key !== 'overall').map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className={styles.scoreItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  >
                    <div className={styles.scoreItemHeader}>
                      <span className={styles.scoreItemLabel}>
                        {key === 'mood' ? 'Humor' : key === 'energy' ? 'Energia' : key === 'stress' ? 'Estresse' : 'Sono'}
                      </span>
                      <span className={styles.scoreItemValue} style={{ color: getScoreColor(value) }}>
                        {value}%
                      </span>
                    </div>
                    <div className={styles.scoreBar}>
                      <motion.div
                        className={styles.scoreBarFill}
                        initial={{ width: 0 }}
                        animate={{ width: `${value}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        style={{ backgroundColor: getScoreColor(value) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Estado atual do dia */}
            <motion.div
              className={styles.currentState}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2>Estado de Hoje</h2>
              <div className={styles.stateGrid}>
                {(() => {
                  const currentEntry = getCurrentMoodEntry();
                  const EnergyIcon = getEnergyIcon(currentEntry.energy);
                  
                  return (
                    <>
                      <div className={styles.stateCard}>
                        <div className={styles.stateIcon}>
                          {getMoodEmoji(currentEntry.mood)}
                        </div>
                        <div className={styles.stateInfo}>
                          <h4>Humor</h4>
                          <div className={styles.stateValue}>
                            {['Muito baixo', 'Baixo', 'Neutro', 'Bom', 'Excelente'][currentEntry.mood - 1]}
                          </div>
                        </div>
                      </div>

                      <div className={styles.stateCard}>
                        <div className={styles.stateIcon}>
                          <EnergyIcon width={24} height={24} />
                        </div>
                        <div className={styles.stateInfo}>
                          <h4>Energia</h4>
                          <div className={styles.stateValue}>
                            {['Muito baixa', 'Baixa', 'Média', 'Alta', 'Muito alta'][currentEntry.energy - 1]}
                          </div>
                        </div>
                      </div>

                      <div className={styles.stateCard}>
                        <div className={styles.stateIcon}>
                          ⚡
                        </div>
                        <div className={styles.stateInfo}>
                          <h4>Estresse</h4>
                          <div className={styles.stateValue}>
                            {['Muito baixo', 'Baixo', 'Médio', 'Alto', 'Muito alto'][currentEntry.stress - 1]}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </motion.div>

            {/* Metas diárias */}
            <motion.div
              className={styles.goalsSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={styles.sectionHeader}>
                <BarChartIcon width={24} height={24} />
                <h2>Metas de Bem-estar</h2>
              </div>

              <div className={styles.goalsGrid}>
                {goals.map((goal, index) => {
                  const IconComponent = getCategoryIcon(goal.category);
                  const progressPercentage = Math.min((goal.progress / goal.target) * 100, 100);
                  
                  return (
                    <motion.div
                      key={goal.id}
                      className={`${styles.goalCard} ${goal.completed ? styles.completed : ''}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                    >
                      <div className={styles.goalHeader}>
                        <div 
                          className={styles.goalIcon}
                          style={{ backgroundColor: `${getCategoryColor(goal.category)}20`, color: getCategoryColor(goal.category) }}
                        >
                          <IconComponent width={20} height={20} />
                        </div>
                        <h4>{goal.title}</h4>
                        {goal.completed && (
                          <CheckIcon width={20} height={20} className={styles.completedIcon} />
                        )}
                      </div>

                      <div className={styles.goalProgress}>
                        <div className={styles.goalNumbers}>
                          <span>{goal.progress}</span>
                          <span className={styles.goalTarget}>/ {goal.target} {goal.unit}</span>
                        </div>
                        <div className={styles.goalBar}>
                          <motion.div
                            className={styles.goalBarFill}
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercentage}%` }}
                            transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                            style={{ backgroundColor: getCategoryColor(goal.category) }}
                          />
                        </div>
                        <div className={styles.goalPercentage}>{Math.round(progressPercentage)}%</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Insights rápidos */}
            <motion.div
              className={styles.insightsSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className={styles.sectionHeader}>
                <LightningBoltIcon width={24} height={24} />
                <h2>Insights Personalizados</h2>
              </div>

              <div className={styles.insightsGrid}>
                <div className={styles.insightCard}>
                  <h4>🌟 Parabéns!</h4>
                  <p>Você atingiu sua meta de contato social hoje. Conexões sociais são fundamentais para o bem-estar!</p>
                </div>

                <div className={styles.insightCard}>
                  <h4>💤 Dica de Sono</h4>
                  <p>Você está quase atingindo 8 horas de sono. Tente dormir 30 minutos mais cedo para otimizar seu descanso.</p>
                </div>

                <div className={styles.insightCard}>
                  <h4>🧘 Mindfulness</h4>
                  <p>Faltam apenas 3 minutos para completar sua meta de meditação. Que tal um exercício de respiração?</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default MentalHealthDashboard;
