import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Wind, Sun, Moon, Play, Pause } from 'lucide-react';
import { useState, useEffect } from 'react';

const MeditationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentExercise, setCurrentExercise] = useState<string | null>(null);
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const exercises = [
    {
      id: 'breathing',
      title: 'Respiração 4-7-8',
      description: 'Técnica calmante para reduzir ansiedade',
      icon: Wind,
      color: 'primary',
      duration: '5 min',
      instructions: [
        'Expire completamente pela boca',
        'Inspire pelo nariz contando até 4',
        'Segure a respiração contando até 7',
        'Expire pela boca contando até 8',
        'Repita o ciclo 4 vezes'
      ]
    },
    {
      id: 'gratitude',
      title: 'Meditação da Gratidão',
      description: 'Cultive sentimentos de apreciação',
      icon: Heart,
      color: 'accent',
      duration: '10 min',
      instructions: [
        'Sente-se confortavelmente e feche os olhos',
        'Respire profundamente algumas vezes',
        'Pense em 3 coisas pelas quais você é grato',
        'Sinta genuinamente a gratidão em seu coração',
        'Expanda esse sentimento por todo seu corpo'
      ]
    },
    {
      id: 'morning',
      title: 'Despertar Consciente',
      description: 'Comece o dia com intenção positiva',
      icon: Sun,
      color: 'secondary',
      duration: '8 min',
      instructions: [
        'Ao acordar, permaneça na cama por alguns minutos',
        'Respire profundamente e sinta seu corpo',
        'Defina uma intenção positiva para o dia',
        'Visualize como quer se sentir durante o dia',
        'Levante-se devagar e com propósito'
      ]
    },
    {
      id: 'evening',
      title: 'Relaxamento Noturno',
      description: 'Prepare mente e corpo para o descanso',
      icon: Moon,
      color: 'accent',
      duration: '12 min',
      instructions: [
        'Deite-se confortavelmente na cama',
        'Faça algumas respirações profundas',
        'Relaxe cada parte do corpo, começando pelos pés',
        'Solte as tensões e preocupações do dia',
        'Permita-se dormir em paz'
      ]
    }
  ];

  // Timer effect
  useEffect(() => {
    let interval: number;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsActive(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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

  const cardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    }
  };

  const getCSSColor = (color: string) => {
    return `var(--${color}-500)`;
  };

  return (
    <section id="meditation" className="section-padding" style={{
      background: 'linear-gradient(135deg, var(--accent-50) 0%, var(--primary-50) 100%)',
      position: 'relative'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--primary-200) 0%, var(--primary-300) 100%)',
        opacity: 0.3,
        filter: 'blur(20px)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '10%',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--accent-200) 0%, var(--accent-300) 100%)',
        opacity: 0.3,
        filter: 'blur(15px)'
      }} />

      <div className="container">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
          style={{ marginBottom: '3rem' }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '1rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, var(--accent-500) 0%, var(--accent-600) 100%)',
              padding: '0.75rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Heart size={28} color="white" />
            </div>
            <h2 className="text-gradient">Práticas de Meditação</h2>
          </div>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Exercícios guiados para acalmar a mente e nutrir o espírito
          </p>
        </motion.div>

        {/* Exercises Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}
        >
          {exercises.map((exercise) => {
            const IconComponent = exercise.icon;
            const isSelected = currentExercise === exercise.id;
            
            return (
              <motion.div
                key={exercise.id}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card"
                style={{
                  background: isSelected 
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)'
                    : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: isSelected ? `2px solid ${getCSSColor(exercise.color)}` : '1px solid var(--border-light)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => {
                  setCurrentExercise(exercise.id);
                  resetTimer();
                }}
              >
                {/* Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    background: `linear-gradient(135deg, ${getCSSColor(exercise.color)} 0%, var(--${exercise.color}-600) 100%)`,
                    padding: '0.75rem',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={24} color="white" />
                  </div>
                  
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      marginBottom: '0.25rem',
                      color: 'var(--text-primary)'
                    }}>
                      {exercise.title}
                    </h3>
                    <p style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      margin: 0,
                      fontWeight: '500'
                    }}>
                      {exercise.duration}
                    </p>
                  </div>
                </div>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  marginBottom: '1rem'
                }}>
                  {exercise.description}
                </p>

                {/* Instructions - only show if selected */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: 'var(--bg-secondary)',
                      padding: '1rem',
                      borderRadius: '12px',
                      marginBottom: '1rem'
                    }}
                  >
                    <h4 style={{
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      marginBottom: '0.75rem',
                      color: 'var(--text-primary)'
                    }}>
                      Instruções:
                    </h4>
                    <ol style={{
                      margin: 0,
                      paddingLeft: '1.2rem',
                      color: 'var(--text-secondary)',
                      fontSize: '0.85rem',
                      lineHeight: '1.6'
                    }}>
                      {exercise.instructions.map((instruction, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>
                          {instruction}
                        </li>
                      ))}
                    </ol>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: isSelected 
                      ? `linear-gradient(135deg, ${getCSSColor(exercise.color)} 0%, var(--${exercise.color}-600) 100%)`
                      : 'var(--neutral-100)',
                    color: isSelected ? 'white' : 'var(--text-primary)',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isSelected ? 'Selecionado' : 'Selecionar'}
                </motion.button>

                {/* Selection indicator */}
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: getCSSColor(exercise.color),
                      color: 'white',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem'
                    }}
                  >
                    ✓
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Timer Section */}
        {currentExercise && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="card text-center"
            style={{
              maxWidth: '400px',
              margin: '0 auto',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <h3 style={{
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
              fontSize: '1.3rem'
            }}>
              Timer de Meditação
            </h3>

            <div style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: 'var(--primary-600)',
              marginBottom: '2rem',
              fontFamily: 'monospace'
            }}>
              {formatTime(timer)}
            </div>

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center'
            }}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={isActive ? pauseTimer : startTimer}
                style={{
                  background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {isActive ? <Pause size={18} /> : <Play size={18} />}
                {isActive ? 'Pausar' : 'Iniciar'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetTimer}
                className="secondary"
                style={{
                  background: 'var(--neutral-100)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-light)',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '50px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Reiniciar
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default MeditationSection;
