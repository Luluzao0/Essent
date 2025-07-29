import { motion } from 'framer-motion';
import { SectionTransition } from '../components/PageTransition';
import SEO from '../components/SEO';
import SentimentAnalyzer from '../components/ai/SentimentAnalyzer';
import IntelligentRecommendations from '../components/ai/IntelligentRecommendations';
import ImmersiveMeditation from '../components/ar/ImmersiveMeditation';
import TherapeuticChatbot from '../components/ai/TherapeuticChatbot';
import BreathingVisualization3D from '../components/ar/BreathingVisualization3D';

const AITech = () => {
  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 75%, #f0f9ff 100%)',
      minHeight: '100vh'
    }}>
      <SEO 
        title="IA & Tecnologias Emergentes - Bem-Estar com Inteligência Artificial | Essent"
        description="Explore o futuro do bem-estar mental com IA, análise de sentimento, chatbots terapêuticos, realidade virtual e tecnologias emergentes para saúde mental."
        keywords="inteligência artificial, IA bem-estar, chatbot terapêutico, análise sentimento, realidade virtual, tecnologias emergentes, saúde mental, cohere ai"
        url="http://essentpsi.vercel.app/ai-tech"
      />
      
      {/* Page Header */}
      <SectionTransition delay={0}>
        <section style={{ 
          padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 1.5rem)',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '800',
              color: 'var(--gray-900)',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              letterSpacing: '-0.04em'
            }}>
              🤖 IA & Tecnologias Emergentes
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
              color: 'var(--gray-600)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              O futuro do bem-estar mental: Inteligência Artificial, análise de sentimento, chatbots terapêuticos e realidade virtual para transformar sua jornada de autoconhecimento.
            </p>
          </motion.div>
        </section>
      </SectionTransition>

      {/* Tecnologias Emergentes */}
      <SectionTransition delay={0.2}>
        <section style={{
          padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 1.5rem)',
          maxWidth: '1200px',
          margin: '0 auto',
          marginTop: 40,
          marginBottom: 40
        }}>
          
          {/* IA e Machine Learning Section */}
          <div style={{
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
            borderRadius: 18,
            boxShadow: '0 2px 16px #64748b22',
            padding: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: 40
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{
                fontSize: 'clamp(1.7rem, 4vw, 2.5rem)',
                fontWeight: 700,
                color: '#334155',
                marginBottom: 12,
                textAlign: 'center'
              }}
            >
              🧠 IA e Machine Learning
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ 
                textAlign: 'center', 
                marginBottom: 32,
                color: '#475569',
                fontSize: '1.1rem'
              }}>
                <p>Powered by <strong>Essent Software</strong> para análise emocional e suporte terapêutico</p>
              </div>
              
              {/* Análise de Sentimento Box */}
              <div style={{
                background: 'white',
                borderRadius: 16,
                padding: 24,
                marginBottom: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#334155',
                  marginBottom: 16,
                  textAlign: 'center'
                }}>
                  📊 Análise de Sentimento
                </h3>
                <SentimentAnalyzer />
              </div>

              {/* Recomendações Inteligentes Box */}
              <div style={{
                background: 'white',
                borderRadius: 16,
                padding: 24,
                marginBottom: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#334155',
                  marginBottom: 16,
                  textAlign: 'center'
                }}>
                  🎯 Recomendações Inteligentes
                </h3>
                <IntelligentRecommendations />
              </div>

              {/* Assistente Terapêutico Box */}
              <div style={{
                background: 'white',
                borderRadius: 16,
                padding: 24,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                border: '1px solid #e2e8f0'
              }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#334155',
                  marginBottom: 16,
                  textAlign: 'center'
                }}>
                  🩺 Assistente Terapêutico IA
                </h3>
                <TherapeuticChatbot />
              </div>
            </motion.div>
          </div>

          {/* VR/AR Section */}
          <div style={{
            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
            borderRadius: 18,
            boxShadow: '0 2px 16px #16a34a22',
            padding: 'clamp(2rem, 4vw, 3rem)'
          }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontSize: 'clamp(1.7rem, 4vw, 2.5rem)',
                fontWeight: 700,
                color: '#166534',
                marginBottom: 12,
                textAlign: 'center'
              }}
            >
              🥽 Realidade Virtual & AR
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div style={{ 
                textAlign: 'center', 
                marginBottom: 32,
                color: '#166534',
                fontSize: '1.1rem'
              }}>
                <p>Experiências imersivas para meditação, exercícios de respiração e ambientes relaxantes</p>
              </div>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
                gap: 32 
              }}>
                <ImmersiveMeditation />
                <BreathingVisualization3D />
              </div>
            </motion.div>
          </div>

        </section>
      </SectionTransition>

      {/* Future Features */}
      <SectionTransition delay={0.6}>
        <section style={{
          padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 3vw, 1.5rem)',
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            borderRadius: 16,
            padding: 24,
            border: '2px solid #f59e0b20'
          }}>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 600, 
              color: '#92400e', 
              marginBottom: 16 
            }}>
              🚀 Próximas Funcionalidades
            </h3>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              color: '#92400e',
              fontSize: '1rem',
              lineHeight: 1.8
            }}>
              <li>🔬 Análise de padrões comportamentais com ML</li>
              <li>📊 Dashboard de saúde mental personalizado</li>
              <li>🎯 Recomendações baseadas em histórico</li>
              <li>👁️ Detecção de emoções por câmera</li>
              <li>🌐 Integração WebXR para VR/AR real</li>
              <li>🧘 Meditações guiadas em ambientes virtuais</li>
            </ul>
          </div>
        </section>
      </SectionTransition>
    </div>
  );
};

export default AITech;
