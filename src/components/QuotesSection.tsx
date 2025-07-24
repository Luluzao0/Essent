import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  QuoteIcon, 
  ShuffleIcon, 
  HeartIcon,
  StarIcon,
  RocketIcon,
  Component1Icon,
  PersonIcon,
  TokensIcon,
  SunIcon,
  LightningBoltIcon,
  EyeOpenIcon,
  GlobeIcon
} from '@radix-ui/react-icons';
import { useState } from 'react';
import { motivationalQuotes, getRandomQuote, getQuotesByCategory } from '../data/wellnessData';
import type { MotivationalQuote } from '../data/wellnessData';
import { CardTransition } from './PageTransition';

const QuotesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<MotivationalQuote['category'] | 'all'>('all');
  const [displayedQuotes, setDisplayedQuotes] = useState(motivationalQuotes.slice(0, 6));

  const categories = [
    { value: 'all', label: 'Todas', icon: StarIcon },
    { value: 'motivation', label: 'Motivação', icon: RocketIcon },
    { value: 'resilience', label: 'Resiliência', icon: LightningBoltIcon },
    { value: 'peace', label: 'Paz', icon: Component1Icon },
    { value: 'mindfulness', label: 'Mindfulness', icon: TokensIcon },
    { value: 'growth', label: 'Crescimento', icon: PersonIcon },
    { value: 'gratitude', label: 'Gratidão', icon: HeartIcon },
    { value: 'self-love', label: 'Amor Próprio', icon: SunIcon },
    { value: 'courage', label: 'Coragem', icon: LightningBoltIcon },
    { value: 'wisdom', label: 'Sabedoria', icon: EyeOpenIcon },
    { value: 'hope', label: 'Esperança', icon: GlobeIcon }
  ];

  const handleCategoryChange = (category: MotivationalQuote['category'] | 'all') => {
    setSelectedCategory(category);
    if (category === 'all') {
      setDisplayedQuotes(motivationalQuotes.slice(0, 6));
    } else {
      const filtered = getQuotesByCategory(category);
      setDisplayedQuotes(filtered);
    }
  };

  const handleRandomQuote = () => {
    const randomQuote = getRandomQuote();
    setDisplayedQuotes([randomQuote]);
    setSelectedCategory('all');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="quotes" style={{
      padding: '6rem 0',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 75%, #f0f9ff 100%)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem'
      }}>
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          style={{ 
            textAlign: 'center',
            marginBottom: 'clamp(2rem, 5vw, 4rem)'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem'
          }}>
            <QuoteIcon width={36} height={36} color="var(--primary-600)" />
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              fontWeight: '800',
              color: 'var(--gray-900)',
              letterSpacing: '-0.03em',
              margin: 0
            }}>
              Frases Inspiracionais
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(1.125rem, 3vw, 1.35rem)',
            color: 'var(--gray-600)',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '400',
            padding: '0 1rem'
          }}>
            Palavras que tocam a alma e trazem esperança para momentos difíceis
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(0.75rem, 2vw, 1rem)',
            justifyContent: 'center',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            padding: '0 1rem'
          }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.value}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryChange(category.value as MotivationalQuote['category'] | 'all')}
                style={{
                  background: selectedCategory === category.value 
                    ? 'linear-gradient(135deg, var(--primary-500), var(--primary-600))'
                    : 'rgba(255, 255, 255, 0.9)',
                  color: selectedCategory === category.value ? 'white' : 'var(--gray-700)',
                  border: selectedCategory === category.value ? 'none' : '1px solid rgba(255, 255, 255, 0.8)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '14px',
                  fontSize: '0.925rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: selectedCategory === category.value 
                    ? '0 4px 20px rgba(14, 165, 233, 0.25)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.06)',
                  letterSpacing: '-0.01em'
                }}
              >
                <IconComponent width={16} height={16} />
                {category.label}
              </motion.button>
            );
          })}
          
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleRandomQuote}
            style={{
              background: 'linear-gradient(135deg, var(--accent-500), var(--accent-600))',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '14px',
              fontSize: '0.925rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 20px rgba(168, 85, 247, 0.25)',
              letterSpacing: '-0.01em'
            }}
          >
            <ShuffleIcon width={16} height={16} />
            Aleatória
          </motion.button>
        </motion.div>

        {/* Quotes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '0 1rem'
          }}
        >
          {displayedQuotes.map((quote, index) => (
            <CardTransition key={`${quote.id}-${index}`} index={index}>
              <div
                className="card"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%'
                }}
              >
              {/* Category Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: `var(--${getCategoryColor(quote.category)}-100)`,
                color: `var(--${getCategoryColor(quote.category)}-700)`,
                padding: '0.25rem 0.75rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: '600',
                textTransform: 'uppercase'
              }}>
                {getCategoryEmoji(quote.category)} {quote.category}
              </div>

              <div style={{ marginTop: '2rem' }}>
                <QuoteIcon width={24} height={24} color="var(--primary-400)" style={{ marginBottom: '1rem' }} />
                
                <blockquote style={{
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                  minHeight: '3rem'
                }}>
                  "{quote.text}"
                </blockquote>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}>
                  <HeartIcon width={16} height={16} color="var(--accent-500)" />
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {quote.author}
                  </p>
                </div>
              </div>
              </div>
            </CardTransition>
          ))}
        </motion.div>

        {selectedCategory === 'all' && displayedQuotes.length === 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center"
            style={{ marginTop: '2rem' }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDisplayedQuotes(motivationalQuotes)}
              style={{
                background: 'linear-gradient(135deg, var(--secondary-500) 0%, var(--secondary-600) 100%)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Ver Todas as Frases
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Helper functions
const getCategoryColor = (category: MotivationalQuote['category']) => {
  const colors = {
    motivation: 'primary',
    peace: 'secondary',
    growth: 'accent',
    resilience: 'primary',
    mindfulness: 'secondary',
    gratitude: 'accent',
    'self-love': 'primary',
    courage: 'secondary',
    wisdom: 'accent',
    hope: 'primary'
  };
  return colors[category] || 'primary';
};

const getCategoryEmoji = (category: MotivationalQuote['category']) => {
  const emojis = {
    motivation: '🚀',
    peace: '🕊️',
    growth: '🌱',
    resilience: '💪',
    mindfulness: '🧘',
    gratitude: '🙏',
    'self-love': '💖',
    courage: '⚡',
    wisdom: '🦉',
    hope: '🌟'
  };
  return emojis[category] || '✨';
};

export default QuotesSection;
