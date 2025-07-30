import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ActivityLogIcon,
  BarChartIcon,
  ClockIcon,
  ArrowUpIcon,
  EyeOpenIcon,
  LightningBoltIcon,
  TargetIcon
} from '@radix-ui/react-icons';
import LoggedHeader from '../components/LoggedHeader';
import styles from './BehaviorAnalysis.module.css';

interface BehaviorPattern {
  id: string;
  pattern: string;
  frequency: number;
  trend: 'increasing' | 'decreasing' | 'stable';
  impact: 'positive' | 'negative' | 'neutral';
  description: string;
}

interface AnalysisMetric {
  label: string;
  value: number;
  unit: string;
  change: number;
  icon: React.ComponentType<{ width?: number; height?: number; className?: string }>;
}

const BehaviorAnalysis: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>('30d');

  // Simulação de dados de padrões comportamentais
  const [patterns] = useState<BehaviorPattern[]>([
    {
      id: '1',
      pattern: 'Meditação Matinal',
      frequency: 85,
      trend: 'increasing',
      impact: 'positive',
      description: 'Prática consistente de meditação nas primeiras horas do dia'
    },
    {
      id: '2',
      pattern: 'Ansiedade Noturna',
      frequency: 65,
      trend: 'decreasing',
      impact: 'negative',
      description: 'Episódios de ansiedade antes de dormir'
    },
    {
      id: '3',
      pattern: 'Exercícios de Respiração',
      frequency: 78,
      trend: 'stable',
      impact: 'positive',
      description: 'Técnicas de respiração durante momentos de estresse'
    },
    {
      id: '4',
      pattern: 'Procrastinação',
      frequency: 42,
      trend: 'decreasing',
      impact: 'negative',
      description: 'Adiamento de tarefas importantes'
    }
  ]);

  const metrics: AnalysisMetric[] = [
    {
      label: 'Bem-estar Geral',
      value: 78,
      unit: '%',
      change: +12,
      icon: ArrowUpIcon
    },
    {
      label: 'Consistência',
      value: 82,
      unit: '%',
      change: +8,
      icon: TargetIcon
    },
    {
      label: 'Tempo de Foco',
      value: 156,
      unit: 'min',
      change: +23,
      icon: ClockIcon
    },
    {
      label: 'Atividades Positivas',
      value: 12,
      unit: 'por dia',
      change: +3,
      icon: LightningBoltIcon
    }
  ];

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getPeriodLabel = (period: string) => {
    switch(period) {
      case '7d': return 'Últimos 7 dias';
      case '30d': return 'Últimos 30 dias';
      case '90d': return 'Últimos 90 dias';
      default: return 'Últimos 30 dias';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'increasing' ? '📈' : trend === 'decreasing' ? '📉' : '➡️';
  };

  const getImpactColor = (impact: string) => {
    switch(impact) {
      case 'positive': return styles.positive;
      case 'negative': return styles.negative;
      default: return styles.neutral;
    }
  };

  return (
    <div className={styles.behaviorAnalysisPage}>
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
              <ActivityLogIcon width={32} height={32} className={styles.titleIcon} />
              <div>
                <h1>Análise Comportamental</h1>
                <p>Insights baseados em Machine Learning sobre seus padrões</p>
              </div>
            </div>
            
            <div className={styles.periodSelector}>
              {(['7d', '30d', '90d'] as const).map(period => (
                <button
                  key={period}
                  className={`${styles.periodButton} ${selectedPeriod === period ? styles.active : ''}`}
                  onClick={() => setSelectedPeriod(period)}
                >
                  {getPeriodLabel(period)}
                </button>
              ))}
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
              <EyeOpenIcon width={32} height={32} />
            </motion.div>
            <p>Analisando seus padrões comportamentais...</p>
          </div>
        ) : (
          <>
            {/* Métricas principais */}
            <motion.div
              className={styles.metricsGrid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className={styles.metricCard}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className={styles.metricHeader}>
                    <metric.icon width={24} height={24} className={styles.metricIcon} />
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                  
                  <div className={styles.metricValue}>
                    {metric.value}{metric.unit}
                  </div>
                  
                  <div className={`${styles.metricChange} ${metric.change > 0 ? styles.positive : styles.negative}`}>
                    {metric.change > 0 ? '+' : ''}{metric.change}{metric.unit}
                    <span className={styles.changeLabel}>vs período anterior</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Padrões identificados */}
            <motion.div
              className={styles.patternsSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.sectionHeader}>
                <BarChartIcon width={24} height={24} />
                <h2>Padrões Identificados pela IA</h2>
              </div>

              <div className={styles.patternsGrid}>
                {patterns.map((pattern, index) => (
                  <motion.div
                    key={pattern.id}
                    className={`${styles.patternCard} ${getImpactColor(pattern.impact)}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={styles.patternHeader}>
                      <h3>{pattern.pattern}</h3>
                      <div className={styles.patternMeta}>
                        <span className={styles.frequency}>{pattern.frequency}%</span>
                        <span className={styles.trend}>{getTrendIcon(pattern.trend)}</span>
                      </div>
                    </div>
                    
                    <p className={styles.patternDescription}>{pattern.description}</p>
                    
                    <div className={styles.patternFooter}>
                      <div className={styles.frequencyBar}>
                        <div 
                          className={styles.frequencyFill}
                          style={{ width: `${pattern.frequency}%` }}
                        />
                      </div>
                      <span className={styles.impactLabel}>
                        Impacto: {pattern.impact === 'positive' ? 'Positivo' : pattern.impact === 'negative' ? 'Negativo' : 'Neutro'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Insights da IA */}
            <motion.div
              className={styles.insightsSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={styles.sectionHeader}>
                <LightningBoltIcon width={24} height={24} />
                <h2>Insights da Inteligência Artificial</h2>
              </div>

              <div className={styles.insightsContainer}>
                <div className={styles.insightCard}>
                  <h4>🎯 Recomendação Principal</h4>
                  <p>
                    Seus padrões mostram excelente consistência na meditação matinal (+15% no último mês). 
                    Continue focando neste hábito para maximizar o bem-estar.
                  </p>
                </div>

                <div className={styles.insightCard}>
                  <h4>⚠️ Área de Atenção</h4>
                  <p>
                    A ansiedade noturna tem diminuído (-23%), mas ainda merece atenção. 
                    Considere técnicas de relaxamento antes de dormir.
                  </p>
                </div>

                <div className={styles.insightCard}>
                  <h4>📈 Tendência Positiva</h4>
                  <p>
                    Seus exercícios de respiração estão mais frequentes quando você identifica estresse. 
                    Isso mostra maior autoconhecimento.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default BehaviorAnalysis;
