import { Link } from 'react-router-dom';
import { SectionTransition } from '../components/PageTransition';
import SEO from '../components/SEO';

const Meditation = () => {
  const techniques = [
    {
      id: 'breathing',
      title: 'Respiração 4-7-8',
      description: 'Técnica de respiração para relaxamento profundo e redução da ansiedade',
      color: '#60a5fa',
      icon: '🫁',
      path: '/meditation/breathing'
    },
    {
      id: 'bodyScan',
      title: 'Body Scan',
      description: 'Escaneamento corporal para consciência plena e relaxamento muscular',
      color: '#8b5cf6',
      icon: '🧘‍♀️',
      path: '/meditation/body-scan'
    },
    {
      id: 'mindfulness',
      title: 'Mindfulness',
      description: 'Meditação da atenção plena para desenvolvimento da consciência presente',
      color: '#10b981',
      icon: '🧠',
      path: '/meditation/mindfulness'
    },
    {
      id: 'lovingKindness',
      title: 'Loving Kindness',
      description: 'Meditação da bondade amorosa para cultivo da compaixão e empatia',
      color: '#ec4899',
      icon: '💖',
      path: '/meditation/loving-kindness'
    }
  ];

  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' 
    }}>
      <SEO 
        title="Meditação Guiada Online - Técnicas para Ansiedade e Depressão | Essent"
        description="Descubra meditações guiadas científicas: respiração consciente, body scan, mindfulness e loving kindness. Reduza ansiedade, depressão e estresse com práticas validadas."
        keywords="meditação guiada, respiração consciente, body scan, mindfulness, loving kindness, ansiedade, depressão, estresse, relaxamento, meditação online"
        url="http://essentpsi.vercel.app/meditation"
      />
      <SectionTransition delay={0}>
        <div style={{ padding: 'clamp(1rem, 4vw, 2rem) clamp(1rem, 4vw, 1rem)' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vw, 4rem)' }}>
              <div style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                marginBottom: 'clamp(0.5rem, 2vw, 1rem)'
              }}>
                🧘‍♀️
              </div>
              <h1 style={{
                fontSize: 'clamp(2rem, 8vw, 4rem)',
                fontWeight: '700',
                color: '#1e40af',
                marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                lineHeight: '1.1',
                padding: '0 0.5rem'
              }}>
                Técnicas de Meditação
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 3vw, 1.3rem)',
                color: '#64748b',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                padding: '0 1rem'
              }}>
                Descubra práticas meditativas para acalmar a mente, reduzir o estresse e desenvolver bem-estar emocional
              </p>
            </div>

            {/* Grid de Técnicas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'clamp(1rem, 3vw, 1.5rem)',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              padding: '0 0.5rem'
            }}>
              {techniques.map((technique) => (
                <SectionTransition key={technique.id} delay={0}>
                  <Link 
                    to={technique.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div
                      style={{
                        background: 'white',
                        borderRadius: 'clamp(15px, 4vw, 25px)',
                        padding: 'clamp(1.5rem, 5vw, 2rem)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                        border: `3px solid ${technique.color}20`,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        height: '100%',
                        minHeight: 'clamp(280px, 40vw, 350px)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = `0 20px 50px ${technique.color}30`;
                        e.currentTarget.style.borderColor = `${technique.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
                        e.currentTarget.style.borderColor = `${technique.color}20`;
                      }}
                    >
                      {/* Background decoration */}
                      <div style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '-50px',
                        width: 'clamp(100px, 20vw, 150px)',
                        height: 'clamp(100px, 20vw, 150px)',
                        background: `linear-gradient(135deg, ${technique.color}15, ${technique.color}05)`,
                        borderRadius: '50%',
                        zIndex: 0
                      }} />

                      <div style={{ position: 'relative', zIndex: 1 }}>
                        {/* Icon */}
                        <div style={{
                          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                          marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                          textAlign: 'center'
                        }}>
                          {technique.icon}
                        </div>

                        {/* Title */}
                        <h3 style={{
                          fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
                          fontWeight: '700',
                          color: technique.color,
                          marginBottom: 'clamp(0.5rem, 2vw, 1rem)',
                          textAlign: 'center',
                          lineHeight: '1.2'
                        }}>
                          {technique.title}
                        </h3>

                        {/* Description */}
                        <p style={{
                          color: '#64748b',
                          lineHeight: '1.6',
                          textAlign: 'center',
                          fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                          marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                          padding: '0 0.5rem'
                        }}>
                          {technique.description}
                        </p>

                        {/* CTA Button */}
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center'
                        }}>
                          <div style={{
                            padding: 'clamp(0.8rem, 2.5vw, 1rem) clamp(1.2rem, 4vw, 2rem)',
                            background: `linear-gradient(135deg, ${technique.color}, ${technique.color}90)`,
                            color: 'white',
                            borderRadius: 'clamp(15px, 4vw, 25px)',
                            fontWeight: '600',
                            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                            transition: 'all 0.3s ease',
                            boxShadow: `0 4px 15px ${technique.color}40`
                          }}>
                            Praticar Agora
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SectionTransition>
              ))}
            </div>

            {/* Info adicional */}
            <div style={{
              background: 'white',
              borderRadius: 'clamp(15px, 4vw, 25px)',
              padding: 'clamp(2rem, 6vw, 3rem) clamp(1rem, 4vw, 2rem)',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              border: '2px solid #e0f2fe'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                fontWeight: '700',
                color: '#1e40af',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)'
              }}>
                Benefícios da Meditação
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'clamp(1rem, 3vw, 2rem)',
                marginTop: 'clamp(1rem, 3vw, 2rem)'
              }}>
                <div style={{
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  background: '#f0f9ff',
                  borderRadius: 'clamp(10px, 3vw, 15px)',
                  border: '2px solid #60a5fa20'
                }}>
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>🧘‍♀️</div>
                  <h3 style={{ 
                    color: '#1e40af', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)'
                  }}>
                    Reduz Estresse
                  </h3>
                  <p style={{ 
                    color: '#64748b', 
                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                    lineHeight: '1.5'
                  }}>
                    Diminui os níveis de cortisol e promove relaxamento profundo
                  </p>
                </div>

                <div style={{
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  background: '#f0fdf4',
                  borderRadius: 'clamp(10px, 3vw, 15px)',
                  border: '2px solid #10b98120'
                }}>
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>🧠</div>
                  <h3 style={{ 
                    color: '#059669', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)'
                  }}>
                    Melhora Foco
                  </h3>
                  <p style={{ 
                    color: '#64748b', 
                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                    lineHeight: '1.5'
                  }}>
                    Aumenta a concentração e a capacidade de atenção plena
                  </p>
                </div>

                <div style={{
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  background: '#fdf2f8',
                  borderRadius: 'clamp(10px, 3vw, 15px)',
                  border: '2px solid #ec489920'
                }}>
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>💖</div>
                  <h3 style={{ 
                    color: '#be185d', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)'
                  }}>
                    Bem-estar Emocional
                  </h3>
                  <p style={{ 
                    color: '#64748b', 
                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                    lineHeight: '1.5'
                  }}>
                    Desenvolve compaixão e inteligência emocional
                  </p>
                </div>

                <div style={{
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  background: '#faf5ff',
                  borderRadius: 'clamp(10px, 3vw, 15px)',
                  border: '2px solid #8b5cf620'
                }}>
                  <div style={{ fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: 'clamp(0.5rem, 2vw, 1rem)' }}>😴</div>
                  <h3 style={{ 
                    color: '#7c3aed', 
                    marginBottom: '0.5rem', 
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 3vw, 1.2rem)'
                  }}>
                    Melhora o Sono
                  </h3>
                  <p style={{ 
                    color: '#64748b', 
                    fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                    lineHeight: '1.5'
                  }}>
                    Promove relaxamento e facilita um sono reparador
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </SectionTransition>
    </div>
  );
};

export default Meditation;
