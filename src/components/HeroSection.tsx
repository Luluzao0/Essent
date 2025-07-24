import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <FloatingTransition>
      <section 
        ref={ref}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--primary-100) 100%)',
          padding: 'clamp(2rem, 8vw, 4rem) 1rem',
          paddingTop: 'clamp(5rem, 12vw, 8rem)', // Compensa a altura do header fixo
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background decorative elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, var(--primary-200), var(--primary-300))',
          borderRadius: '50%',
          opacity: 0.3,
          filter: 'blur(40px)',
          zIndex: 0
        }} />
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          width: '150px',
          height: '150px',
          background: 'linear-gradient(45deg, var(--primary-300), var(--primary-400))',
          borderRadius: '50%',
          opacity: 0.3,
          filter: 'blur(30px)',
          zIndex: 0
        }} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            zIndex: 1,
            position: 'relative'
          }}
        >
          {/* Main heading */}
          <motion.div variants={itemVariants}>
            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, var(--primary-600), var(--primary-700))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              letterSpacing: '-0.04em'
            }}>
              Encontre seu equilíbrio
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              color: 'var(--gray-600)',
              marginBottom: '3rem',
              lineHeight: '1.6',
              fontWeight: '400',
              maxWidth: '600px',
              margin: '0 auto 3rem auto'
            }}>
              Sua jornada para o bem-estar mental começa aqui. Descubra ferramentas de autoajuda, 
              práticas de mindfulness e conteúdo inspirador para equilibrar corpo e mente.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants}>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '4rem',
              flexWrap: 'wrap'
            }}>
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="quotes"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
                  color: 'white',
                  textDecoration: 'none',
                  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                  borderRadius: '12px',
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.2s ease',
                  letterSpacing: '-0.01em',
                  minWidth: '140px',
                  textAlign: 'center'
                }}
              >
                Explorar Frases
              </motion.a>

              <Link
                to="/meditation"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'transparent',
                    color: 'var(--primary-600)',
                    border: '2px solid var(--primary-200)',
                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                    borderRadius: '12px',
                    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '-0.01em',
                    minWidth: '140px',
                    textAlign: 'center'
                  }}
                >
                  Meditação
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Today's Recommendation */}
          <motion.div variants={itemVariants}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9))',
              backdropFilter: 'blur(20px)',
              borderRadius: '20px',
              padding: 'clamp(2rem, 5vw, 2.5rem)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(14, 165, 233, 0.1)',
              maxWidth: '550px',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background decoration */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, var(--primary-200), var(--primary-300))',
                borderRadius: '50%',
                opacity: 0.3,
                filter: 'blur(20px)',
                zIndex: 0
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <StarIcon style={{ color: 'white', width: '16px', height: '16px' }} />
                  </div>
                  <h3 style={{
                    fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                    fontWeight: '700',
                    color: 'var(--primary-700)',
                    margin: 0,
                    letterSpacing: '-0.02em'
                  }}>
                    Recomendação do Dia
                  </h3>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))',
                    borderRadius: '50%',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <StarIcon style={{ color: 'white', width: '16px', height: '16px' }} />
                  </div>
                </div>
                
                <div style={{
                  background: 'rgba(14, 165, 233, 0.05)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  marginBottom: '1.5rem',
                  border: '1px solid rgba(14, 165, 233, 0.1)'
                }}>
                  <p style={{
                    fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                    color: 'var(--primary-800)',
                    lineHeight: '1.6',
                    margin: 0,
                    fontStyle: 'italic',
                    fontWeight: '500',
                    textAlign: 'center'
                  }}>
                    "{todaysRecommendation.quote.text}"
                  </p>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'rgba(168, 85, 247, 0.05)',
                  borderRadius: '12px',
                  padding: '1rem',
                  border: '1px solid rgba(168, 85, 247, 0.1)'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, var(--accent-400), var(--accent-500))',
                    borderRadius: '50%',
                    padding: '0.4rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <HeartIcon style={{ color: 'white', width: '14px', height: '14px' }} />
                  </div>
                  <span style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    color: 'var(--accent-700)',
                    fontWeight: '600',
                    letterSpacing: '-0.01em'
                  }}>
                    {todaysRecommendation.activity}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            style={{
              position: 'absolute',
              bottom: '-2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--primary-200)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Component1Icon style={{ color: 'var(--primary-600)', width: '12px', height: '12px' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </FloatingTransition>
  );
};

export default HeroSection;
