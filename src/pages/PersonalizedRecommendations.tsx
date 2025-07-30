import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  StarIcon,
  LightningBoltIcon,
  HeartIcon,
  ClockIcon,
  BookmarkIcon,
  PlayIcon,
  ReaderIcon,
  MagicWandIcon,
  ActivityLogIcon,
  CheckCircledIcon
} from '@radix-ui/react-icons';
import LoggedHeader from '../components/LoggedHeader';
import styles from './PersonalizedRecommendations.module.css';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: 'meditation' | 'exercise' | 'reading' | 'breathing' | 'mindfulness';
  type: 'activity' | 'content' | 'technique';
  duration: number; // em minutos
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  matchScore: number; // 0-100
  reasons: string[];
  completed?: boolean;
  bookmarked?: boolean;
}

interface CategoryFilter {
  id: string;
  label: string;
  icon: React.ComponentType<{ width?: number; height?: number; className?: string }>;
  count: number;
}

const PersonalizedRecommendations: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const categories: CategoryFilter[] = [
    { id: 'all', label: 'Todas', icon: StarIcon, count: 6 },
    { id: 'meditation', label: 'Meditação', icon: HeartIcon, count: 1 },
    { id: 'breathing', label: 'Respiração', icon: LightningBoltIcon, count: 1 },
    { id: 'exercise', label: 'Exercício', icon: ActivityLogIcon, count: 2 },
    { id: 'reading', label: 'Leitura', icon: ReaderIcon, count: 1 },
    { id: 'mindfulness', label: 'Mindfulness', icon: MagicWandIcon, count: 1 }
  ];

  useEffect(() => {
    // Dados simulados de recomendações
    const initialRecommendations: Recommendation[] = [
      {
        id: '1',
        title: 'Meditação da Manhã Energizante',
        description: 'Uma prática de 10 minutos para começar o dia com energia e foco. Ideal para quem tem pouco tempo mas quer resultados efetivos.',
        category: 'meditation',
        type: 'activity',
        duration: 10,
        difficulty: 'beginner',
        matchScore: 95,
        reasons: ['Você prefere atividades matinais', 'Histórico mostra eficácia em meditações curtas', 'Padrão de baixa energia matinal'],
        bookmarked: true
      },
      {
        id: '2',
        title: 'Exercício de Respiração 4-7-8',
        description: 'Técnica comprovada para reduzir ansiedade e melhorar o sono. Perfeita para momentos de estresse.',
        category: 'breathing',
        type: 'technique',
        duration: 5,
        difficulty: 'beginner',
        matchScore: 92,
        reasons: ['Eficaz contra ansiedade noturna identificada', 'Você respondeu bem a exercícios de respiração', 'Rápido e prático'],
        completed: true
      },
      {
        id: '3',
        title: 'Caminhada Mindful no Parque',
        description: 'Combine exercício físico com mindfulness. Uma atividade ao ar livre que conecta corpo e mente.',
        category: 'exercise',
        type: 'activity',
        duration: 30,
        difficulty: 'intermediate',
        matchScore: 88,
        reasons: ['Você aprecia atividades ao ar livre', 'Combina dois dos seus objetivos: exercício e mindfulness', 'Duração ideal baseada no seu histórico']
      },
      {
        id: '4',
        title: 'Leitura: "O Poder do Agora"',
        description: 'Capítulo sobre presença consciente. Leitura recomendada baseada no seu interesse em mindfulness.',
        category: 'reading',
        type: 'content',
        duration: 20,
        difficulty: 'intermediate',
        matchScore: 85,
        reasons: ['Alinhado com seus interesses em crescimento pessoal', 'Tempo de leitura compatível com sua rotina', 'Complementa suas práticas atuais']
      },
      {
        id: '5',
        title: 'Body Scan Avançado',
        description: 'Técnica profunda de relaxamento progressivo. Ideal para sessões mais longas de autocuidado.',
        category: 'mindfulness',
        type: 'activity',
        duration: 45,
        difficulty: 'advanced',
        matchScore: 78,
        reasons: ['Você tem experiência com práticas de mindfulness', 'Busca técnicas mais desafiadoras', 'Momentos livres mais longos nos fins de semana']
      },
      {
        id: '6',
        title: 'Yoga Restaurativo',
        description: 'Sequência suave de posturas para relaxamento profundo. Perfeita para o final do dia.',
        category: 'exercise',
        type: 'activity',
        duration: 25,
        difficulty: 'beginner',
        matchScore: 82,
        reasons: ['Histórico positivo com atividades relaxantes', 'Hora ideal para sua rotina noturna', 'Baixo impacto físico']
      }
    ];

    const timer = setTimeout(() => {
      setRecommendations(initialRecommendations);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredRecommendations = recommendations.filter(rec => {
    const categoryMatch = selectedCategory === 'all' || rec.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || rec.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const toggleBookmark = (id: string) => {
    setRecommendations(prev => 
      prev.map(rec => 
        rec.id === id ? { ...rec, bookmarked: !rec.bookmarked } : rec
      )
    );
  };

  const markAsCompleted = (id: string) => {
    setRecommendations(prev => 
      prev.map(rec => 
        rec.id === id ? { ...rec, completed: true } : rec
      )
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return '#10b981';
      case 'intermediate': return '#f59e0b';
      case 'advanced': return '#dc2626';
      default: return '#64748b';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'Iniciante';
      case 'intermediate': return 'Intermediário';
      case 'advanced': return 'Avançado';
      default: return 'N/A';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'meditation': return HeartIcon;
      case 'breathing': return LightningBoltIcon;
      case 'exercise': return ActivityLogIcon;
      case 'reading': return ReaderIcon;
      case 'mindfulness': return MagicWandIcon;
      default: return StarIcon;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'meditation': return '#ec4899';
      case 'breathing': return '#3b82f6';
      case 'exercise': return '#10b981';
      case 'reading': return '#f59e0b';
      case 'mindfulness': return '#8b5cf6';
      default: return '#64748b';
    }
  };

  return (
    <div className={styles.recommendationsPage}>
      <LoggedHeader />
      
      <div className={styles.container}>
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.titleSection}>
            <StarIcon width={32} height={32} className={styles.titleIcon} />
            <div>
              <h1>Recomendações Personalizadas</h1>
              <p>Sugestões inteligentes baseadas no seu histórico e preferências</p>
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
              <MagicWandIcon width={32} height={32} />
            </motion.div>
            <p>Analisando seu histórico para gerar recomendações...</p>
          </div>
        ) : (
          <>
            {/* Filtros */}
            <motion.div
              className={styles.filtersSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.filterGroup}>
                <h3>Categorias</h3>
                <div className={styles.categoryFilters}>
                  {categories.map(category => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <IconComponent width={18} height={18} />
                        {category.label}
                        <span className={styles.categoryCount}>{category.count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={styles.filterGroup}>
                <h3>Dificuldade</h3>
                <div className={styles.difficultyFilters}>
                  {['all', 'beginner', 'intermediate', 'advanced'].map(difficulty => (
                    <button
                      key={difficulty}
                      className={`${styles.difficultyButton} ${selectedDifficulty === difficulty ? styles.active : ''}`}
                      onClick={() => setSelectedDifficulty(difficulty)}
                    >
                      {difficulty === 'all' ? 'Todas' : getDifficultyLabel(difficulty)}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Lista de recomendações */}
            <motion.div
              className={styles.recommendationsSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={styles.sectionHeader}>
                <h2>
                  {filteredRecommendations.length} recomendação{filteredRecommendations.length !== 1 ? 'ões' : ''} 
                  {selectedCategory !== 'all' && ` em ${categories.find(c => c.id === selectedCategory)?.label}`}
                </h2>
              </div>

              <AnimatePresence>
                <div className={styles.recommendationsGrid}>
                  {filteredRecommendations.map((rec, index) => {
                    const CategoryIcon = getCategoryIcon(rec.category);
                    
                    return (
                      <motion.div
                        key={rec.id}
                        className={`${styles.recommendationCard} ${rec.completed ? styles.completed : ''}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        layout
                      >
                        <div className={styles.cardHeader}>
                          <div className={styles.cardMeta}>
                            <div 
                              className={styles.categoryIcon}
                              style={{ 
                                backgroundColor: `${getCategoryColor(rec.category)}20`, 
                                color: getCategoryColor(rec.category) 
                              }}
                            >
                              <CategoryIcon width={20} height={20} />
                            </div>
                            <div className={styles.matchScore}>
                              {rec.matchScore}% match
                            </div>
                          </div>

                          <div className={styles.cardActions}>
                            <button
                              className={`${styles.bookmarkButton} ${rec.bookmarked ? styles.bookmarked : ''}`}
                              onClick={() => toggleBookmark(rec.id)}
                            >
                              <BookmarkIcon width={16} height={16} />
                            </button>
                          </div>
                        </div>

                        <div className={styles.cardContent}>
                          <h3>{rec.title}</h3>
                          <p>{rec.description}</p>

                          <div className={styles.cardDetails}>
                            <div className={styles.duration}>
                              <ClockIcon width={16} height={16} />
                              {rec.duration} min
                            </div>
                            <div 
                              className={styles.difficulty}
                              style={{ color: getDifficultyColor(rec.difficulty) }}
                            >
                              {getDifficultyLabel(rec.difficulty)}
                            </div>
                          </div>

                          <div className={styles.reasons}>
                            <h4>Por que recomendamos:</h4>
                            <ul>
                              {rec.reasons.map((reason, idx) => (
                                <li key={idx}>{reason}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className={styles.cardFooter}>
                          {rec.completed ? (
                            <div className={styles.completedBadge}>
                              <CheckCircledIcon width={18} height={18} />
                              Concluído
                            </div>
                          ) : (
                            <button
                              className={styles.startButton}
                              onClick={() => markAsCompleted(rec.id)}
                            >
                              <PlayIcon width={16} height={16} />
                              Começar
                            </button>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatePresence>

              {filteredRecommendations.length === 0 && (
                <div className={styles.emptyState}>
                  <MagicWandIcon width={48} height={48} />
                  <h3>Nenhuma recomendação encontrada</h3>
                  <p>Tente ajustar os filtros para ver mais sugestões personalizadas.</p>
                </div>
              )}
            </motion.div>

            {/* Estatísticas */}
            <motion.div
              className={styles.statsSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statValue}>
                    {recommendations.filter(r => r.completed).length}
                  </div>
                  <div className={styles.statLabel}>Atividades Concluídas</div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statValue}>
                    {recommendations.filter(r => r.bookmarked).length}
                  </div>
                  <div className={styles.statLabel}>Salvos para Depois</div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statValue}>
                    {Math.round(recommendations.reduce((acc, rec) => acc + rec.matchScore, 0) / recommendations.length)}%
                  </div>
                  <div className={styles.statLabel}>Match Médio</div>
                </div>

                <div className={styles.statCard}>
                  <div className={styles.statValue}>
                    {Math.round(recommendations.reduce((acc, rec) => acc + rec.duration, 0) / recommendations.length)}
                  </div>
                  <div className={styles.statLabel}>Duração Média (min)</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalizedRecommendations;
