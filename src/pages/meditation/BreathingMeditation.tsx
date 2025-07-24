import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionTransition } from '../../components/PageTransition';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

// Componente visual 3D para técnica de respiração
const BreathingVisualizer3D: React.FC<{ color: string }> = ({ color }) => {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 'pause'>('pause');
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    let interval: number;
    
    if (isActive && phase !== 'pause') {
      interval = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const startBreathing = () => {
    if (isActive) {
      setIsActive(false);
      setPhase('pause');
      setCount(0);
      setCycle(0);
      return;
    }

    setIsActive(true);
    setCycle(0);
    
    const runCycle = () => {
      // Inspire (4s)
      setPhase('inhale');
      setCount(0);
      setTimeout(() => {
        // Segure (7s)
        setPhase('hold');
        setCount(0);
        setTimeout(() => {
          // Expire (8s)
          setPhase('exhale');
          setCount(0);
          setTimeout(() => {
            setCycle(prev => prev + 1);
            if (cycle < 3) {
              runCycle();
            } else {
              setPhase('pause');
              setIsActive(false);
              setCount(0);
              setCycle(0);
            }
          }, 8000);
        }, 7000);
      }, 4000);
    };
    
    runCycle();
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return `Inspire (${4 - count}s)`;
      case 'hold': return `Segure (${7 - count}s)`;
      case 'exhale': return `Expire (${8 - count}s)`;
      default: return 'Clique para começar';
    }
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'inhale': return 1.5;
      case 'hold': return 1.5;
      case 'exhale': return 0.8;
      default: return 1;
    }
  };

  const getGradientRotation = () => {
    switch (phase) {
      case 'inhale': return '0deg';
      case 'hold': return '120deg';
      case 'exhale': return '240deg';
      default: return '0deg';
    }
  };

  return (
    <div style={{
      marginTop: 'clamp(1rem, 3vw, 2rem)',
      padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem)',
      background: `linear-gradient(135deg, ${color}05, ${color}15)`,
      borderRadius: 'clamp(15px, 4vw, 20px)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 'clamp(3px, 1vw, 4px)',
            height: 'clamp(3px, 1vw, 4px)',
            background: color,
            borderRadius: '50%',
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
            opacity: isActive ? 0.6 : 0.2,
            transform: `translateY(${isActive ? -10 : 0}px)`,
            transition: 'all 2s ease-in-out',
            animation: isActive ? `float-${i} 4s ease-in-out infinite` : 'none'
          }}
        />
      ))}

      {/* Main breathing circle */}
      <div
        onClick={startBreathing}
        style={{
          width: 'clamp(150px, 40vw, 200px)',
          height: 'clamp(150px, 40vw, 200px)',
          borderRadius: '50%',
          background: `conic-gradient(from ${getGradientRotation()}, ${color}20, ${color}60, ${color}20)`,
          margin: '0 auto clamp(1rem, 3vw, 2rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transform: `scale(${getCircleScale()})`,
          transition: 'all 2s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: `0 0 40px ${color}30`,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Inner glow */}
        <div style={{
          position: 'absolute',
          inset: 'clamp(8px, 2vw, 10px)',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color}40, transparent 70%)`,
          animation: isActive ? 'pulse 2s ease-in-out infinite' : 'none'
        }} />
        
        {/* Center icon */}
        <div style={{
          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          zIndex: 2,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
        }}>
          🫁
        </div>
      </div>

      <div style={{ marginBottom: 'clamp(1rem, 3vw, 2rem)' }}>
        <h3 style={{
          color: color,
          fontWeight: '700',
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
          marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
          lineHeight: '1.2'
        }}>
          {getPhaseText()}
        </h3>
        <p style={{ 
          color: '#64748b', 
          fontSize: 'clamp(1rem, 3vw, 1.2rem)'
        }}>
          Ciclo {cycle + 1} de 4
        </p>
      </div>

      {/* Progress bar */}
      <div style={{
        width: '100%',
        height: 'clamp(6px, 2vw, 8px)',
        background: `${color}20`,
        borderRadius: 'clamp(3px, 1vw, 4px)',
        overflow: 'hidden',
        marginBottom: 'clamp(1rem, 3vw, 2rem)'
      }}>
        <div style={{
          height: '100%',
          background: `linear-gradient(90deg, ${color}, ${color}80)`,
          width: `${(cycle / 4) * 100}%`,
          transition: 'width 0.5s ease',
          borderRadius: 'clamp(3px, 1vw, 4px)'
        }} />
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        
        ${[...Array(6)].map((_, i) => `
        @keyframes float-${i} {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        `).join('')}
      `}</style>
    </div>
  );
};

const BreathingMeditation = () => {
  const technique = {
    title: 'Respiração 4-7-8',
    description: 'Técnica de respiração para relaxamento profundo',
    color: '#60a5fa',
    icon: '🫁',
    steps: [
      'Inspire pelo nariz contando até 4',
      'Segure a respiração contando até 7', 
      'Expire pela boca contando até 8',
      'Repita o ciclo 4 vezes'
    ],
    benefits: [
      'Reduz a ansiedade e o estresse',
      'Melhora a qualidade do sono',
      'Diminui a pressão arterial',
      'Aumenta a concentração',
      'Promove relaxamento profundo'
    ],
    tips: [
      'Pratique em ambiente silencioso',
      'Mantenha as costas retas',
      'Não force a respiração',
      'Faça movimentos suaves',
      'Pratique regularmente'
    ]
  };

  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)', 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, ${technique.color}05 0%, #f0f9ff 100%)` 
    }}>
      <SectionTransition delay={0}>
        <div style={{ padding: 'clamp(1rem, 4vw, 2rem) clamp(1rem, 4vw, 1rem)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Header com botão voltar */}
            <div style={{ marginBottom: 'clamp(2rem, 5vw, 3rem)' }}>
              <Link
                to="/meditation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: technique.color,
                  textDecoration: 'none',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  fontWeight: '600',
                  marginBottom: 'clamp(1rem, 3vw, 2rem)',
                  padding: 'clamp(0.6rem, 2vw, 0.8rem) clamp(1rem, 3vw, 1.5rem)',
                  background: `${technique.color}10`,
                  borderRadius: 'clamp(15px, 4vw, 25px)',
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
                <ArrowLeftIcon style={{ width: 'clamp(16px, 4vw, 20px)', height: 'clamp(16px, 4vw, 20px)' }} />
                Voltar às Técnicas
              </Link>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                  marginBottom: 'clamp(0.5rem, 2vw, 1rem)'
                }}>
                  {technique.icon}
                </div>
                <h1 style={{
                  fontSize: 'clamp(2rem, 7vw, 4rem)',
                  fontWeight: '700',
                  color: technique.color,
                  marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                  lineHeight: '1.1'
                }}>
                  {technique.title}
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem, 3vw, 1.3rem)',
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
              borderRadius: 'clamp(15px, 4vw, 25px)',
              padding: 'clamp(1.5rem, 4vw, 2rem)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
              marginBottom: 'clamp(2rem, 5vw, 3rem)'
            }}>
              <BreathingVisualizer3D color={technique.color} />
            </div>

            {/* Grid de Informações */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1rem, 3vw, 2rem)',
              marginBottom: 'clamp(2rem, 5vw, 3rem)'
            }}>
              
              {/* Como Praticar */}
              <div style={{
                background: 'white',
                borderRadius: 'clamp(15px, 4vw, 20px)',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `clamp(3px, 1vw, 4px) solid ${technique.color}`
              }}>
                <h3 style={{
                  color: technique.color,
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}/>
                <h3 style={{
                  color: technique.color,
                  fontWeight: '700',
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
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
                      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                      lineHeight: '1.6',
                      fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
                    }}>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefícios */}
              <div style={{
                background: 'white',
                borderRadius: 'clamp(15px, 4vw, 20px)',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `clamp(3px, 1vw, 4px) solid #10b981`
              }}>
                <h3 style={{
                  color: '#10b981',
                  fontWeight: '700',
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
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
                      marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                      lineHeight: '1.6',
                      fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
                    }}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dicas Importantes */}
              <div style={{
                background: 'white',
                borderRadius: 'clamp(15px, 4vw, 20px)',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                borderLeft: `clamp(3px, 1vw, 4px) solid #f59e0b`,
                gridColumn: window.innerWidth > 768 ? 'span 2' : 'span 1'
              }}>
                <h3 style={{
                  color: '#f59e0b',
                  fontWeight: '700',
                  fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                  marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  💡 Dicas Importantes
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: 'clamp(0.5rem, 2vw, 1rem)'
                }}>
                  {technique.tips.map((tip, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(0.5rem, 2vw, 0.8rem)',
                      padding: 'clamp(0.8rem, 2.5vw, 1rem)',
                      background: '#f59e0b10',
                      borderRadius: 'clamp(8px, 2vw, 12px)'
                    }}>
                      <div style={{
                        width: 'clamp(6px, 2vw, 8px)',
                        height: 'clamp(6px, 2vw, 8px)',
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

            {/* Call to Action Final */}
            <div style={{
              background: `linear-gradient(135deg, ${technique.color}, ${technique.color}90)`,
              borderRadius: 'clamp(15px, 4vw, 25px)',
              padding: 'clamp(2rem, 6vw, 3rem) clamp(1rem, 4vw, 2rem)',
              textAlign: 'center',
              color: 'white',
              boxShadow: `0 20px 50px ${technique.color}40`
            }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                fontWeight: '700',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                lineHeight: '1.2'
              }}>
                Pronto para Começar? 🌟
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                opacity: 0.9,
                maxWidth: '500px',
                margin: '0 auto clamp(1.5rem, 4vw, 2rem)',
                lineHeight: '1.6'
              }}>
                Pratique regularmente para obter os melhores resultados. Apenas alguns minutos por dia podem fazer uma grande diferença!
              </p>
              <Link
                to="/meditation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: technique.color,
                  backgroundColor: 'white',
                  textDecoration: 'none',
                  padding: 'clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                  borderRadius: 'clamp(10px, 3vw, 15px)',
                  fontWeight: '600',
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}
              >
                <ArrowLeftIcon style={{ width: 'clamp(16px, 4vw, 20px)', height: 'clamp(16px, 4vw, 20px)' }} />
                Outras Técnicas
              </Link>
            </div>

          </div>
        </div>
      </SectionTransition>
    </div>
  );
};

export default BreathingMeditation;
