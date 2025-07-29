import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SectionTransition } from '../../components/PageTransition';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

// Componente visual para Mindfulness
const MindfulnessVisualizer: React.FC<{ color: string }> = ({ color }) => {
  const [mindState, setMindState] = useState<'scattered' | 'focusing' | 'mindful'>('scattered');
  const [isActive, setIsActive] = useState(false);
  const [thoughts, setThoughts] = useState<Array<{ id: number; x: number; y: number; text: string; opacity: number }>>([]);
  const [cycle, setCycle] = useState(0);

  const thoughtTexts = useMemo(() => [
    '💭', '🤔', '😰', '📱', '⏰', '💼', '🏠', '😴', '🍕', '🎵', '📺', '💰'
  ], []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isActive) {
      // Fase 1: Mente dispersa (0-10s)
      setMindState('scattered');
      const scatteredThoughts = thoughtTexts.map((text, i) => ({
        id: i,
        x: Math.random() * 300,
        y: Math.random() * 200,
        text,
        opacity: 1
      }));
      setThoughts(scatteredThoughts);

      // Animação de pensamentos dispersos
      interval = setInterval(() => {
        setThoughts(prev => prev.map(thought => ({
          ...thought,
          x: Math.random() * 300,
          y: Math.random() * 200
        })));
      }, 500);

      setTimeout(() => {
        clearInterval(interval);
        
        // Fase 2: Focando (10-20s)
        setMindState('focusing');
        setThoughts(prev => prev.map(thought => ({
          ...thought,
          opacity: 0.3
        })));

        // Movendo pensamentos para o centro
        setTimeout(() => {
          setThoughts(prev => prev.map(thought => ({
            ...thought,
            x: 150 + (Math.random() - 0.5) * 50,
            y: 100 + (Math.random() - 0.5) * 50,
            opacity: 0.1
          })));

          setTimeout(() => {
            // Fase 3: Mindful (20-30s)
            setMindState('mindful');
            setThoughts([{
              id: 0,
              x: 150,
              y: 100,
              text: '🧘‍♀️',
              opacity: 1
            }]);

            setTimeout(() => {
              setCycle(prev => prev + 1);
              if (cycle < 2) {
                // Reiniciar ciclo
                setTimeout(() => {
                  if (isActive) {
                    setMindState('scattered');
                    const newThoughts = thoughtTexts.map((text, i) => ({
                      id: i,
                      x: Math.random() * 300,
                      y: Math.random() * 200,
                      text: text,
                      opacity: 1
                    }));
                    setThoughts(newThoughts);
                  }
                }, 1000);
              } else {
                stopPractice();
              }
            }, 10000);
          }, 5000);
        }, 5000);
      }, 10000);
    }

    return () => clearInterval(interval);
  }, [isActive, cycle, thoughtTexts]);

  const startPractice = () => {
    if (isActive) {
      stopPractice();
      return;
    }

    setIsActive(true);
    setCycle(0);
  };

  const stopPractice = () => {
    setIsActive(false);
    setMindState('scattered');
    setThoughts([]);
    setCycle(0);
  };

  const getStateMessage = () => {
    switch (mindState) {
      case 'scattered': return 'Observando pensamentos dispersos';
      case 'focusing': return 'Focando e acalmando a mente';
      case 'mindful': return 'Estado de mindfulness alcançado';
      default: return 'Clique para começar';
    }
  };

  const getStateColor = () => {
    switch (mindState) {
      case 'scattered': return '#ef4444';
      case 'focusing': return '#f59e0b';
      case 'mindful': return color;
      default: return '#64748b';
    }
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
      {/* Background waves */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: mindState === 'mindful' 
          ? `radial-gradient(circle at 50% 50%, ${color}20, transparent 60%)`
          : 'none',
        borderRadius: '20px',
        animation: mindState === 'mindful' ? 'peaceful-pulse 3s ease-in-out infinite' : 'none'
      }} />

      {/* Thoughts container */}
      <div
        onClick={startPractice}
        style={{
          width: 'clamp(280px, 60vw, 350px)',
          height: 'clamp(200px, 40vw, 250px)',
          margin: '0 auto 2rem',
          position: 'relative',
          cursor: 'pointer',
          border: `2px solid ${getStateColor()}`,
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.1)',
          overflow: 'hidden'
        }}
      >
        {thoughts.map((thought) => (
          <div
            key={thought.id}
            style={{
              position: 'absolute',
              left: `${(thought.x / 350) * 100}%`,
              top: `${(thought.y / 250) * 100}%`,
              fontSize: 'clamp(1.2rem, 4vw, 2rem)',
              opacity: thought.opacity,
              transform: 'translate(-50%, -50%)',
              transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: mindState === 'mindful' ? `drop-shadow(0 0 10px ${color}60)` : 'none',
              animation: mindState === 'scattered' ? `float-thought-${thought.id % 3} 2s ease-in-out infinite` : 'none'
            }}
          >
            {thought.text}
          </div>
        ))}

        {/* Center focus point */}
        {mindState !== 'scattered' && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 'clamp(3px, 1vw, 4px)',
            height: 'clamp(3px, 1vw, 4px)',
            background: getStateColor(),
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 20px ${getStateColor()}`,
            animation: 'center-pulse 2s ease-in-out infinite'
          }} />
        )}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{
          color: getStateColor(),
          fontWeight: '700',
          fontSize: '1.8rem',
          marginBottom: '1rem',
          transition: 'color 0.5s ease'
        }}>
          {getStateMessage()}
        </h3>
        <p style={{ color: '#64748b', fontSize: '1.2rem' }}>
          {isActive ? `Ciclo ${cycle + 1} de 3` : 'Clique na caixa para começar'}
        </p>
      </div>

      {/* Estado da mente indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(0.5rem, 2vw, 1rem)',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        padding: '0 1rem'
      }}>
        {['scattered', 'focusing', 'mindful'].map((state) => (
          <div key={state} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: 'clamp(0.4rem, 1.5vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)',
            borderRadius: '20px',
            background: mindState === state ? `${getStateColor()}20` : 'rgba(255,255,255,0.1)',
            border: `2px solid ${mindState === state ? getStateColor() : '#e5e7eb'}`,
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              width: 'clamp(6px, 1.5vw, 8px)',
              height: 'clamp(6px, 1.5vw, 8px)',
              borderRadius: '50%',
              background: mindState === state ? getStateColor() : '#d1d5db'
            }} />
            <span style={{
              color: mindState === state ? getStateColor() : '#64748b',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              fontWeight: '600'
            }}>
              {state === 'scattered' ? 'Disperso' : state === 'focusing' ? 'Focando' : 'Mindful'}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes peaceful-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        
        @keyframes center-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(2); opacity: 0.4; }
        }
        
        @keyframes float-thought-0 {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          50% { transform: translate(-50%, -50%) rotate(10deg); }
        }
        
        @keyframes float-thought-1 {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(-5deg) scale(1.1); }
        }
        
        @keyframes float-thought-2 {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-5px); }
        }
      `}</style>
    </div>
  );
};

const MindfulnessMeditation = () => {
  const technique = {
    title: 'Mindfulness',
    description: 'Meditação da atenção plena no momento presente',
    color: '#10b981',
    icon: '🧠',
    steps: [
      'Sente-se confortavelmente com as costas retas',
      'Feche os olhos suavemente',
      'Observe sua respiração natural',
      'Note quando sua mente divagar',
      'Gentilmente traga a atenção de volta',
      'Continue observando sem julgamento'
    ],
    benefits: [
      'Reduz ansiedade e depressão',
      'Melhora a concentração',
      'Aumenta a consciência emocional',
      'Desenvolve autocompaixão',
      'Reduz o estresse',
      'Melhora a qualidade de vida'
    ],
    tips: [
      'Comece com sessões curtas (5-10 min)',
      'Seja gentil consigo mesmo',
      'Não lute contra os pensamentos',
      'Pratique regularmente',
      'Use um timer silencioso',
      'Mantenha uma postura confortável'
    ]
  };

  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)', 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, ${technique.color}05 0%, #f0fdf4 100%)` 
    }}>
      <SectionTransition delay={0}>
        <div style={{ padding: 'clamp(1rem, 4vw, 2rem) clamp(0.5rem, 2vw, 1rem)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Header com botão voltar */}
            <div style={{ marginBottom: 'clamp(1.5rem, 4vw, 3rem)' }}>
              <Link
                to="/meditation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: technique.color,
                  textDecoration: 'none',
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  fontWeight: '600',
                  marginBottom: '2rem',
                  padding: 'clamp(0.6rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem)',
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
                <ArrowLeftIcon style={{ width: 'clamp(1rem, 2.5vw, 1.2rem)', height: 'clamp(1rem, 2.5vw, 1.2rem)' }} />
                Voltar às Técnicas
              </Link>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                  marginBottom: '1rem'
                }}>
                  {technique.icon}
                </div>
                <h1 style={{
                  fontSize: 'clamp(2rem, 6vw, 4rem)',
                  fontWeight: '700',
                  color: technique.color,
                  marginBottom: '1rem'
                }}>
                  {technique.title}
                </h1>
                <p style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                  color: '#64748b',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.6',
                  padding: '0 1rem'
                }}>
                  {technique.description}
                </p>
              </div>
            </div>

            {/* Demonstração Visual Principal */}
            <div style={{
              background: 'white',
              borderRadius: '25px',
              padding: 'clamp(1rem, 4vw, 2rem)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              marginBottom: '3rem'
            }}>
              <MindfulnessVisualizer color={technique.color} />
            </div>

            {/* Grid de Informações */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1rem, 3vw, 2rem)',
              marginBottom: '3rem'
            }}>
              
              {/* Como Praticar */}
              <div style={{
                background: 'white',
                borderRadius: '20px',
                padding: 'clamp(1.2rem, 4vw, 2rem)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `4px solid ${technique.color}`
              }}>
                <h3 style={{
                  color: technique.color,
                  fontWeight: '700',
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  📝 Como Praticar
                </h3>
                <ol style={{ margin: 0, paddingLeft: 'clamp(1rem, 2vw, 1.2rem)' }}>
                  {technique.steps.map((step, index) => (
                    <li key={index} style={{
                      color: '#374151',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                      fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)'
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
                padding: 'clamp(1.2rem, 4vw, 2rem)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `4px solid #10b981`
              }}>
                <h3 style={{
                  color: '#10b981',
                  fontWeight: '700',
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  ✨ Benefícios
                </h3>
                <ul style={{ margin: 0, paddingLeft: 'clamp(1rem, 2vw, 1.2rem)' }}>
                  {technique.benefits.map((benefit, index) => (
                    <li key={index} style={{
                      color: '#374151',
                      marginBottom: '1rem',
                      lineHeight: '1.6',
                      fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)'
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
                padding: 'clamp(1.2rem, 4vw, 2rem)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `4px solid #f59e0b`,
                gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1'
              }}>
                <h3 style={{
                  color: '#f59e0b',
                  fontWeight: '700',
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  💡 Dicas Importantes
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 'clamp(0.8rem, 2vw, 1rem)'
                }}>
                  {technique.tips.map((tip, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: 'clamp(0.8rem, 2vw, 1rem)',
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
                        fontSize: 'clamp(0.9rem, 2.2vw, 1rem)',
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

export default MindfulnessMeditation;
