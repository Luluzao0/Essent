import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  StarIcon, 
  HeartIcon, 
  Component1Icon 
} from '@radix-ui/react-icons';
import { getTodaysRecommendation } from '../data/wellnessData';
import { FloatingTransition } from './PageTransition';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const todaysRecommendation = getTodaysRecommendation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 75%, #f0f9ff 100%)',
      paddingTop: '80px'
    }}>
      {/* Floating Background Elements */}
      <FloatingTransition
        style={{
          position: 'absolute',
          top: '15%',
          left: '8%',
          opacity: 0.15
        }}
      >
        <StarIcon width={32} height={32} color="var(--primary-300)" />
      </FloatingTransition>
      
      <FloatingTransition
        style={{
          position: 'absolute',
          top: '25%',
          right: '12%',
          opacity: 0.12
        }}
      >
        <HeartIcon width={28} height={28} color="var(--primary-400)" />
      </FloatingTransition>
      
      <FloatingTransition
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          opacity: 0.1
        }}
      >
        <Component1Icon width={30} height={30} color="var(--primary-300)" />
      </FloatingTransition>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 1rem'
      }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            padding: '2rem 0'
          }}
        >
          <motion.div variants={itemVariants}>
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: '800',
              marginBottom: '2rem',
              color: 'var(--gray-900)',
              lineHeight: '1.1',
              letterSpacing: '-0.04em'
            }}>
              Encontre seu equilíbrio
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p style={{
              fontSize: 'clamp(1.125rem, 3vw, 1.35rem)',
              color: 'var(--gray-600)',
              marginBottom: '2.5rem',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.6',
              fontWeight: '400',
              padding: '0 1rem'
            }}>
              Uma jornada de autodescoberta, bem-estar mental e crescimento pessoal com ferramentas científicas e conteúdo inspirador.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div style={{
              display: 'flex',
              gap: 'clamp(0.75rem, 2vw, 1rem)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2.5rem',
              padding: '0 1rem'
            }}>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('quotes')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
                  color: 'white',
                  border: 'none',
                  padding: 'clamp(1rem, 2vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)',
                  borderRadius: '16px',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(14, 165, 233, 0.25)',
                  transition: 'all 0.2s ease',
                  letterSpacing: '-0.01em',
                  minWidth: '140px'
                }}
              >
                Explorar Frases
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('meditation')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: 'var(--gray-700)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  padding: 'clamp(1rem, 2vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)',
                  borderRadius: '16px',
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.2s ease',
                  letterSpacing: '-0.01em',
                  minWidth: '140px'
                }}
              >
                Meditar Agora
              </motion.button>
            </div>
          </motion.div>

          {/* Today's Recommendation Card */}
          <motion.div variants={itemVariants}>
            <div style={{
              maxWidth: 'clamp(600px, 90vw, 700px)',
              margin: '0 auto',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
            }}>
              <h3 style={{
                color: 'var(--primary-600)',
                marginBottom: '1.5rem',
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: '700',
                letterSpacing: '-0.02em'
              }}>
                ✨ Recomendação do Dia
              </h3>
              
              <blockquote style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                fontStyle: 'italic',
                color: 'var(--gray-700)',
                marginBottom: '1rem',
                lineHeight: '1.7',
                fontWeight: '400'
              }}>
                "{todaysRecommendation.quote.text}"
              </blockquote>
              
              <cite style={{
                fontSize: 'clamp(0.95rem, 2vw, 1rem)',
                color: 'var(--gray-500)',
                fontStyle: 'normal',
                fontWeight: '500'
              }}>
                — {todaysRecommendation.quote.author}
              </cite>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
