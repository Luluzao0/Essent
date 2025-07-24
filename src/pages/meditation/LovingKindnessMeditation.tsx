import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SectionTransition } from '../../components/PageTransition';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

// Componente visual para Loving Kindness
const LovingKindnessVisualizer: React.FC<{ color: string }> = ({ color }) => {
  const [compassionLevel, setCompassionLevel] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<'self' | 'loved' | 'neutral' | 'difficult' | 'all'>('self');
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);
  const [cycle, setCycle] = useState(0);

  const phases = useMemo(() => [
    { key: 'self', name: 'Para si mesmo', color: '#ec4899', duration: 8000 },
    { key: 'loved', name: 'Para entes queridos', color: '#ef4444', duration: 8000 },
    { key: 'neutral', name: 'Para pessoas neutras', color: '#f59e0b', duration: 8000 },
    { key: 'difficult', name: 'Para pessoas difíceis', color: '#8b5cf6', duration: 8000 },
    { key: 'all', name: 'Para todos os seres', color: '#10b981', duration: 10000 }
  ], []);

  useEffect(() => {
    let heartInterval: number;
    let phaseTimeout: number;
    
    if (isActive) {
      let currentPhaseIndex = 0;
      
      const runPhase = () => {
        if (currentPhaseIndex < phases.length) {
          const phase = phases[currentPhaseIndex];
          setCurrentPhase(phase.key as 'self' | 'loved' | 'neutral' | 'difficult' | 'all');
          setCompassionLevel((currentPhaseIndex + 1) * 20);
          
          // Generate hearts for this phase
          heartInterval = setInterval(() => {
            const newHeart = {
              id: Date.now() + Math.random(),
              x: Math.random() * 300,
              y: Math.random() * 200,
              size: 0.5 + Math.random() * 1.5,
              opacity: 0.8
            };
            
            setHearts(prev => [...prev.slice(-15), newHeart]); // Keep only last 15 hearts
          }, 300);
          
          phaseTimeout = setTimeout(() => {
            clearInterval(heartInterval);
            currentPhaseIndex++;
            runPhase();
          }, phase.duration);
        } else {
          // Complete cycle
          setCycle(prev => prev + 1);
          setCompassionLevel(100);
          
          setTimeout(() => {
            if (cycle < 2) {
              currentPhaseIndex = 0;
              runPhase();
            } else {
              stopPractice();
            }
          }, 3000);
        }
      };
      
      runPhase();
    }

    return () => {
      clearInterval(heartInterval);
      clearTimeout(phaseTimeout);
    };
  }, [isActive, cycle, phases]);

  const startPractice = () => {
    if (isActive) {
      stopPractice();
      return;
    }

    setIsActive(true);
    setCycle(0);
    setHearts([]);
  };

  const stopPractice = () => {
    setIsActive(false);
    setCurrentPhase('self');
    setCompassionLevel(0);
    setHearts([]);
    setCycle(0);
  };

  const getCurrentPhaseData = () => {
    return phases.find(p => p.key === currentPhase) || phases[0];
  };

  const getPhaseMessage = () => {
    if (!isActive) return 'Clique para começar a prática';
    return `Enviando amor e compaixão: ${getCurrentPhaseData().name}`;
  };

  return (
    <div style={{
      marginTop: '2rem',
      padding: '3rem 2rem',
      background: `linear-gradient(135deg, ${color}05, ${color}15)`,
      borderRadius: '20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: isActive 
          ? `radial-gradient(circle at 50% 50%, ${getCurrentPhaseData().color}20, transparent 70%)`
          : 'none',
        borderRadius: '20px',
        animation: isActive ? 'compassion-glow 3s ease-in-out infinite' : 'none'
      }} />

      {/* Hearts container */}
      <div
        onClick={startPractice}
        style={{
          width: '350px',
          height: '250px',
          margin: '0 auto 2rem',
          position: 'relative',
          cursor: 'pointer',
          border: `2px solid ${getCurrentPhaseData().color}`,
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.1)',
          overflow: 'hidden'
        }}
      >
        {/* Center heart */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          fontSize: '3rem',
          transform: 'translate(-50%, -50%)',
          animation: isActive ? 'center-heart-beat 2s ease-in-out infinite' : 'none',
          filter: `drop-shadow(0 0 20px ${getCurrentPhaseData().color}60)`
        }}>
          ❤️
        </div>

        {/* Floating hearts */}
        {hearts.map((heart) => (
          <div
            key={heart.id}
            style={{
              position: 'absolute',
              left: `${heart.x}px`,
              top: `${heart.y}px`,
              fontSize: `${heart.size}rem`,
              opacity: heart.opacity,
              transform: 'translate(-50%, -50%)',
              transition: 'all 3s cubic-bezier(0.4, 0, 0.2, 1)',
              animation: `float-heart-${heart.id % 3} 4s ease-in-out infinite`,
              filter: `hue-rotate(${phases.findIndex(p => p.key === currentPhase) * 30}deg)`
            }}
          >
            💖
          </div>
        ))}

        {/* Ripple effect */}
        {isActive && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '100px',
            height: '100px',
            border: `2px solid ${getCurrentPhaseData().color}40`,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'compassion-ripple 3s ease-out infinite'
          }} />
        )}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{
          color: getCurrentPhaseData().color,
          fontWeight: '700',
          fontSize: '1.8rem',
          marginBottom: '1rem',
          transition: 'color 0.5s ease'
        }}>
          {getPhaseMessage()}
        </h3>
        <p style={{ color: '#64748b', fontSize: '1.2rem' }}>
          {isActive ? `Ciclo ${cycle + 1} de 3` : 'Clique no coração para começar'}
        </p>
      </div>

      {/* Compassion level bar */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{
          width: '100%',
          height: '12px',
          background: '#f1f5f9',
          borderRadius: '6px',
          overflow: 'hidden',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            height: '100%',
            width: `${compassionLevel}%`,
            background: `linear-gradient(90deg, ${getCurrentPhaseData().color}, ${color})`,
            borderRadius: '6px',
            transition: 'all 1s ease',
            boxShadow: `0 0 10px ${getCurrentPhaseData().color}60`
          }} />
        </div>
        <p style={{
          marginTop: '0.5rem',
          color: '#64748b',
          fontSize: '0.9rem'
        }}>
          Nível de Compaixão: {compassionLevel}%
        </p>
      </div>

      {/* Phases indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginBottom: '2rem'
      }}>
        {phases.map((phase) => (
          <div key={phase.key} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
            padding: '0.5rem 0.8rem',
            borderRadius: '15px',
            background: currentPhase === phase.key ? `${phase.color}20` : 'rgba(255,255,255,0.1)',
            border: `1px solid ${currentPhase === phase.key ? phase.color : '#e5e7eb'}`,
            transition: 'all 0.3s ease',
            fontSize: '0.8rem'
          }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: currentPhase === phase.key ? phase.color : '#d1d5db'
            }} />
            <span style={{
              color: currentPhase === phase.key ? phase.color : '#64748b',
              fontWeight: '600'
            }}>
              {phase.name.replace('Para ', '')}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes compassion-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes center-heart-beat {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        
        @keyframes compassion-ripple {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }
        
        @keyframes float-heart-0 {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) translateY(0px); }
          50% { transform: translate(-50%, -50%) rotate(5deg) translateY(-10px); }
        }
        
        @keyframes float-heart-1 {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.1) rotate(-3deg); }
        }
        
        @keyframes float-heart-2 {
          0%, 100% { transform: translate(-50%, -50%) translateX(0px); }
          50% { transform: translate(-50%, -50%) translateX(5px); }
        }
      `}</style>
    </div>
  );
};

const LovingKindnessMeditation = () => {
  const technique = {
    title: 'Loving Kindness',
    description: 'Meditação da bondade amorosa e compaixão universal',
    color: '#ec4899',
    icon: '💖',
    steps: [
      'Sente-se confortavelmente e feche os olhos',
      'Comece enviando amor para si mesmo',
      'Estenda o amor para pessoas queridas',
      'Inclua pessoas neutras em sua vida',
      'Pratique com pessoas difíceis',
      'Finalize enviando amor para todos os seres'
    ],
    benefits: [
      'Aumenta a autocompaixão',
      'Melhora relacionamentos',
      'Reduz raiva e ressentimento',
      'Desenvolve empatia',
      'Diminui julgamentos',
      'Promove bem-estar emocional'
    ],
    tips: [
      'Use frases como "Que eu seja feliz"',
      'Visualize as pessoas mentalmente',
      'Seja paciente com resistências',
      'Comece com pessoas fáceis de amar',
      'Pratique regularmente',
      'Adapte as frases ao seu estilo'
    ]
  };

  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)', 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, ${technique.color}05 0%, #fdf2f8 100%)` 
    }}>
      <SectionTransition delay={0}>
        <div style={{ padding: '2rem 1rem' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Header com botão voltar */}
            <div style={{ marginBottom: '3rem' }}>
              <Link
                to="/meditation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: technique.color,
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '2rem',
                  padding: '0.8rem 1.5rem',
                  background: `${technique.color}10`,
                  borderRadius: '25px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${technique.color}20`;
                  e.currentTarget.style.transform = 'translateX(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `${technique.color}10`;
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <ArrowLeftIcon style={{ width: '1.2rem', height: '1.2rem' }} />
                Voltar às Técnicas
              </Link>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '4rem',
                  marginBottom: '1rem'
                }}>
                  {technique.icon}
                </div>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  fontWeight: '700',
                  color: technique.color,
                  marginBottom: '1rem'
                }}>
                  {technique.title}
                </h1>
                <p style={{
                  fontSize: '1.3rem',
                  color: '#64748b',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6'
                }}>
                  {technique.description}
                </p>
              </div>
            </div>

            {/* Demonstração Visual Principal */}
            <div style={{
              background: 'white',
              borderRadius: '25px',
              padding: '2rem',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              marginBottom: '3rem'
            }}>
              <LovingKindnessVisualizer color={technique.color} />
            </div>

            {/* Grid de Informações */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              
              {/* Como Praticar */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `4px solid ${technique.color}`
              }}>
                <h3 style={{
                  color: technique.color,
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  📝 Como Praticar
                </h3>
                <ol style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  {technique.steps.map((step, index) => (
                    <li key={index} style={{
                      color: '#374151',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                      fontSize: '1.1rem'
                    }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefícios */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `4px solid #10b981`
              }}>
                <h3 style={{
                  color: '#10b981',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ✨ Benefícios
                </h3>
                <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                  {technique.benefits.map((benefit, index) => (
                    <li key={index} style={{
                      color: '#374151',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                      fontSize: '1.1rem'
                    }}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dicas Importantes */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `4px solid #f59e0b`,
                gridColumn: 'span 2'
              }}>
                <h3 style={{
                  color: '#f59e0b',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  💡 Dicas Importantes
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {technique.tips.map((tip, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '1rem',
                      background: '#f59e0b10',
                      borderRadius: '12px'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#f59e0b',
                        flexShrink: 0
                      }} />
                      <span style={{
                        color: '#374151',
                        fontSize: '1rem',
                        lineHeight: '1.5'
                      }}>
                        {tip}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </SectionTransition>
    </div>
  );
};

export default LovingKindnessMeditation;
