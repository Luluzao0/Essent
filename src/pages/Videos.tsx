import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Star, Users } from 'lucide-react';
import EnhancedVideoSection from '../components/EnhancedVideoSection';

const Videos: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: 'anticipate' as const,
    duration: 0.5
  };

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
      opacity: 1
    }
  };

  const stats = [
    { icon: Play, label: 'Vídeos Disponíveis', value: '20+', color: 'var(--accent-500)' },
    { icon: Heart, label: 'Categorias', value: '4', color: 'var(--primary-500)' },
    { icon: Star, label: 'Qualidade HD', value: '100%', color: 'var(--secondary-500)' },
    { icon: Users, label: 'Idiomas', value: '2', color: 'var(--accent-600)' }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ 
        minHeight: '100vh',
        paddingTop: '80px'
      }}
    >
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary-50) 0%, var(--accent-50) 50%, var(--secondary-50) 100%)',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
          `,
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <motion.div
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'rgba(255, 255, 255, 0.9)',
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                marginBottom: '2rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
            >
              <Play size={24} color="var(--accent-600)" />
              <span style={{ 
                color: 'var(--text-primary)', 
                fontWeight: '600',
                fontSize: '1rem'
              }}>
                Biblioteca de Vídeos de Bem-Estar
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-gradient"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: '700',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}
            >
              Vídeos para o Seu Bem-Estar
            </motion.h1>

            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '3rem',
                maxWidth: '600px',
                margin: '0 auto 3rem auto'
              }}
            >
              Descubra nossa coleção de vídeos guiados para meditação, relaxamento, 
              técnicas de respiração e práticas de mindfulness. Conteúdo em português 
              e inglês para apoiar sua jornada de bem-estar.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1.5rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      padding: '1.5rem 1rem',
                      borderRadius: '20px',
                      textAlign: 'center',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{
                      background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                      width: '50px',
                      height: '50px',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem auto'
                    }}>
                      <IconComponent size={24} color={stat.color} />
                    </div>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {stat.value}
                    </div>
                    <div style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      fontWeight: '500'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Categories Overview */}
      <section style={{
        background: 'var(--bg-primary)',
        padding: '4rem 0'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginBottom: '3rem'
            }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Categorias Disponíveis
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Explore diferentes tipos de vídeos organizados por categoria para encontrar 
              exatamente o que você precisa.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}
          >
            {[
              {
                emoji: '🧘',
                title: 'Meditação',
                description: 'Sessões guiadas para meditação profunda e autoconhecimento',
                count: '8 vídeos',
                gradient: 'linear-gradient(135deg, var(--primary-500), var(--primary-600))'
              },
              {
                emoji: '💨',
                title: 'Respiração',
                description: 'Técnicas de respiração para relaxamento e controle emocional',
                count: '4 vídeos',
                gradient: 'linear-gradient(135deg, var(--secondary-500), var(--secondary-600))'
              },
              {
                emoji: '😌',
                title: 'Relaxamento',
                description: 'Práticas para alívio do estresse e relaxamento profundo',
                count: '5 vídeos',
                gradient: 'linear-gradient(135deg, var(--accent-500), var(--accent-600))'
              },
              {
                emoji: '🌸',
                title: 'Mindfulness',
                description: 'Exercícios de atenção plena para o cotidiano',
                count: '3 vídeos',
                gradient: 'linear-gradient(135deg, var(--primary-400), var(--accent-500))'
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -8 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '2rem',
                  borderRadius: '24px',
                  textAlign: 'center',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  background: category.gradient,
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto',
                  fontSize: '2rem'
                }}>
                  {category.emoji}
                </div>
                
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '0.75rem'
                }}>
                  {category.title}
                </h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem'
                }}>
                  {category.description}
                </p>
                
                <span style={{
                  background: category.gradient,
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  {category.count}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Video Section */}
      <EnhancedVideoSection />

      {/* Call to Action */}
      <section style={{
        background: 'linear-gradient(135deg, var(--accent-50) 0%, var(--primary-50) 100%)',
        padding: '4rem 0'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.9)',
              padding: '3rem 2rem',
              borderRadius: '30px',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-500), var(--primary-500))',
              width: '80px',
              height: '80px',
              borderRadius: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 2rem auto'
            }}>
              <Heart size={40} color="white" />
            </div>
            
            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Comece Sua Jornada de Bem-Estar
            </h3>
            
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem'
            }}>
              Escolha um vídeo e dedique alguns minutos do seu dia para cuidar da sua 
              saúde mental e bem-estar. Pequenos momentos fazem uma grande diferença.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                background: 'linear-gradient(135deg, var(--accent-500), var(--accent-600))',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                border: 'none',
                transition: 'all 0.3s ease',
                textDecoration: 'none'
              }}
              onClick={() => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play size={20} />
              Explorar Vídeos
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Videos;
