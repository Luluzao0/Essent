import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SectionTransition } from '../../components/PageTransition';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

// Componente visual 3D para body scan
const BodyScanVisualizer3D: React.FC<{ color: string }> = ({ color }) => {
  const [scanPosition, setScanPosition] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [currentBodyPart, setCurrentBodyPart] = useState('Preparando...');
  const [cycle, setCycle] = useState(0);

  const bodyParts = useMemo(() => [
    { name: 'Dedos dos pés', position: 85 },
    { name: 'Pés', position: 75 },
    { name: 'Panturrilhas', position: 65 },
    { name: 'Joelhos', position: 55 },
    { name: 'Coxas', position: 45 },
    { name: 'Quadris', position: 40 },
    { name: 'Abdomen', position: 35 },
    { name: 'Peito', position: 25 },
    { name: 'Ombros', position: 20 },
    { name: 'Braços', position: 15 },
    { name: 'Pescoço', position: 10 },
    { name: 'Cabeça', position: 5 }
  ], []);

  useEffect(() => {    
    if (isScanning) {
      let currentIndex = 0;
      
      const scanStep = () => {
        if (currentIndex < bodyParts.length) {
          const bodyPart = bodyParts[currentIndex];
          setScanPosition(bodyPart.position);
          setCurrentBodyPart(`Focando nos: ${bodyPart.name}`);
          currentIndex++;
          setTimeout(scanStep, 3000); // 3 segundos por parte do corpo
        } else {
          setCurrentBodyPart('Escaneamento completo');
          setCycle(prev => prev + 1);
          setTimeout(() => {
            if (cycle < 2) {
              currentIndex = 0;
              scanStep();
            } else {
              stopScan();
            }
          }, 2000);
        }
      };
      
      scanStep();
    }
  }, [isScanning, cycle, bodyParts]);

  const startScan = () => {
    if (isScanning) {
      stopScan();
      return;
    }

    setIsScanning(true);
    setCycle(0);
    setScanPosition(85);
    setCurrentBodyPart('Iniciando escaneamento...');
  };

  const stopScan = () => {
    setIsScanning(false);
    setScanPosition(0);
    setCurrentBodyPart('Clique para começar');
    setCycle(0);
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
      {/* Energy waves */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: '50%',
            top: `${scanPosition}%`,
            width: `${100 + i * 50}px`,
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
            borderRadius: '1px',
            transform: 'translateX(-50%)',
            opacity: isScanning ? 0.8 - i * 0.2 : 0,
            transition: 'all 0.3s ease',
            animation: isScanning ? `wave-${i} 2s ease-in-out infinite` : 'none'
          }}
        />
      ))}

      {/* Human silhouette */}
      <div
        onClick={startScan}
        style={{
          width: 'clamp(120px, 20vw, 150px)',
          height: 'clamp(240px, 40vw, 300px)',
          margin: '0 auto 2rem',
          position: 'relative',
          cursor: 'pointer',
          transform: 'scale(1.2)',
          filter: `drop-shadow(0 0 20px ${color}40)`
        }}
      >
        {/* Body outline */}
        <svg width="100%" height="100%" viewBox="0 0 150 300" style={{ overflow: 'visible' }}>
          {/* Head */}
          <ellipse cx="75" cy="30" rx="25" ry="30" 
            fill={scanPosition <= 10 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="2" />
          
          {/* Neck */}
          <rect x="70" y="55" width="10" height="15" 
            fill={scanPosition <= 15 && scanPosition > 10 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
          
          {/* Torso */}
          <ellipse cx="75" cy="120" rx="35" ry="50" 
            fill={scanPosition <= 35 && scanPosition > 15 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="2" />
          
          {/* Arms */}
          <ellipse cx="45" cy="100" rx="8" ry="30" 
            fill={scanPosition <= 20 && scanPosition > 15 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
          <ellipse cx="105" cy="100" rx="8" ry="30" 
            fill={scanPosition <= 20 && scanPosition > 15 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
          
          {/* Hips */}
          <ellipse cx="75" cy="170" rx="30" ry="15" 
            fill={scanPosition <= 45 && scanPosition > 35 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="2" />
          
          {/* Thighs */}
          <ellipse cx="65" cy="210" rx="12" ry="25" 
            fill={scanPosition <= 55 && scanPosition > 45 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
          <ellipse cx="85" cy="210" rx="12" ry="25" 
            fill={scanPosition <= 55 && scanPosition > 45 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
          
          {/* Calves */}
          <ellipse cx="65" cy="250" rx="10" ry="20" 
            fill={scanPosition <= 75 && scanPosition > 55 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
          <ellipse cx="85" cy="250" rx="10" ry="20" 
            fill={scanPosition <= 75 && scanPosition > 55 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
          
          {/* Feet */}
          <ellipse cx="65" cy="285" rx="15" ry="8" 
            fill={scanPosition <= 85 && scanPosition > 75 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
          <ellipse cx="85" cy="285" rx="15" ry="8" 
            fill={scanPosition <= 85 && scanPosition > 75 && isScanning ? `${color}60` : `${color}20`}
            stroke={color} strokeWidth="1" />
        </svg>

        {/* Scanning line */}
        {isScanning && (
          <div style={{
            position: 'absolute',
            left: '-50px',
            right: '-50px',
            top: `${scanPosition}%`,
            height: '3px',
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            borderRadius: '2px',
            boxShadow: `0 0 10px ${color}60`,
            animation: 'scan-glow 1s ease-in-out infinite alternate'
          }} />
        )}
      </div>

      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h3 style={{
          color: color,
          fontWeight: '700',
          fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
          marginBottom: '1rem'
        }}>
          {currentBodyPart}
        </h3>
        <p style={{ 
          color: '#64748b', 
          fontSize: 'clamp(1rem, 3vw, 1.2rem)',
          padding: '0 1rem'
        }}>
          {isScanning ? `Ciclo ${cycle + 1} de 3` : 'Clique na silhueta para começar'}
        </p>
      </div>

      {/* Progress indicator */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 'clamp(0.3rem, 1vw, 0.5rem)',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        padding: '0 1rem'
      }}>
        {bodyParts.map((_, index) => (
          <div key={index} style={{
            width: 'clamp(6px, 1.5vw, 8px)',
            height: 'clamp(6px, 1.5vw, 8px)',
            borderRadius: '50%',
            background: bodyParts.findIndex(part => part.position === scanPosition) >= index ? color : `${color}30`,
            transition: 'all 0.3s ease'
          }} />
        ))}
      </div>

      <style>{`
        @keyframes scan-glow {
          0% { opacity: 0.6; transform: scaleY(1); }
          100% { opacity: 1; transform: scaleY(1.5); }
        }
        
        ${[...Array(4)].map((_, i) => `
        @keyframes wave-${i} {
          0%, 100% { transform: translateX(-50%) scaleX(1); opacity: ${0.8 - i * 0.2}; }
          50% { transform: translateX(-50%) scaleX(1.2); opacity: ${0.4 - i * 0.1}; }
        }
        `).join('')}
      `}</style>
    </div>
  );
};

const BodyScanMeditation = () => {
  const technique = {
    title: 'Body Scan',
    description: 'Escaneamento corporal para consciência e relaxamento',
    color: '#8b5cf6',
    icon: '🧘‍♀️',
    steps: [
      'Deite-se confortavelmente de costas',
      'Feche os olhos e respire naturalmente',
      'Comece pelos dedos dos pés',
      'Mova sua atenção lentamente pelo corpo',
      'Note tensões sem tentar mudá-las',
      'Termine no topo da cabeça'
    ],
    benefits: [
      'Reduz a tensão muscular',
      'Aumenta a consciência corporal',
      'Melhora a qualidade do sono',
      'Diminui dores crônicas',
      'Promove relaxamento profundo',
      'Desenvolve mindfulness'
    ],
    tips: [
      'Use um ambiente silencioso',
      'Pratique deitado confortavelmente',
      'Não julgue as sensações',
      'Vá devagar, sem pressa',
      'Pratique regularmente',
      'Use áudio guiado no início'
    ]
  };

  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)', 
      minHeight: '100vh', 
      background: `linear-gradient(135deg, ${technique.color}05 0%, #faf5ff 100%)` 
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
              <BodyScanVisualizer3D color={technique.color} />
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

export default BodyScanMeditation;
