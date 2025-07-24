import { motion } from 'framer-motion';
import MeditationSection from '../components/MeditationSection';
import { SectionTransition } from '../components/PageTransition';
import SEO from '../components/SEO';
import { 
  TokensIcon,
  HeartIcon,
  SunIcon,
  PersonIcon
} from '@radix-ui/react-icons';

const Practices = () => {
  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 75%, #f0f9ff 100%)',
      minHeight: '100vh'
    }}>
      <SEO 
        title="Práticas de Bem-Estar e Autoajuda - Técnicas Psicológicas | Essent"
        description="Descubra práticas de bem-estar recomendadas por psicólogos: técnicas cognitivo-comportamentais, exercícios espirituais, autoconhecimento e cuidados pessoais para saúde mental."
        keywords="práticas bem-estar, autoajuda, técnicas psicológicas, terapia cognitivo-comportamental, exercícios espirituais, autoconhecimento, cuidados pessoais, saúde mental"
        url="http://essentpsi.vercel.app/practices"
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
              Práticas de Bem-Estar
            </h1>
            <p style={{
              fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
              color: 'var(--gray-600)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Explore diferentes técnicas de meditação e mindfulness para transformar sua jornada de bem-estar pessoal.
            </p>
          </motion.div>
        </section>
      </SectionTransition>

      {/* Meditation Section */}
      <SectionTransition delay={1}>
        <section style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 clamp(1rem, 3vw, 1.5rem)',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              marginBottom: 'clamp(0.8rem, 2vw, 1rem)'
            }}>
              <TokensIcon width={32} height={32} color="var(--primary-600)" />
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--gray-900)',
                letterSpacing: '-0.03em',
                margin: 0
              }}>
                Práticas de Meditação
              </h2>
            </div>
          </div>
          <MeditationSection />
        </section>
      </SectionTransition>

      {/* Práticas Psicológicas */}
      <SectionTransition delay={2}>
        <section style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 clamp(1rem, 3vw, 1.5rem)',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)'
            }}>
              <HeartIcon width={32} height={32} color="var(--primary-600)" />
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--gray-900)',
                letterSpacing: '-0.03em',
                margin: 0
              }}>
                Técnicas Psicológicas
              </h2>
            </div>

            {/* Grid de práticas psicológicas */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 350px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)'
            }}>
              
              {/* Técnica de Respiração 4-7-8 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #3b82f6'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🫁</div>
                  <h3 style={{
                    color: '#3b82f6',
                    fontWeight: '700',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    Respiração 4-7-8
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: 0
                  }}>
                    Técnica recomendada por psicólogos para ansiedade
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#374151', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '1rem' }}>Como praticar:</h4>
                  <ol style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                    <li>Inspire pelo nariz por 4 segundos</li>
                    <li>Segure a respiração por 7 segundos</li>
                    <li>Expire pela boca por 8 segundos</li>
                    <li>Repita 3-4 ciclos</li>
                  </ol>
                </div>
                <div style={{
                  background: '#3b82f610',
                  padding: 'clamp(0.8rem, 2vw, 1rem)',
                  borderRadius: '12px',
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  color: '#3b82f6'
                }}>
                  💡 Eficaz para reduzir ansiedade em 2-3 minutos
                </div>
              </motion.div>

              {/* Técnica 5-4-3-2-1 (Grounding) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #10b981'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌱</div>
                  <h3 style={{
                    color: '#10b981',
                    fontWeight: '700',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    Técnica 5-4-3-2-1
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: 0
                  }}>
                    Grounding para crises de ansiedade
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#374151', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '1rem' }}>Identifique:</h4>
                  <ul style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                    <li>5 coisas que você vê</li>
                    <li>4 coisas que você toca</li>
                    <li>3 coisas que você ouve</li>
                    <li>2 coisas que você cheira</li>
                    <li>1 coisa que você saboreia</li>
                  </ul>
                </div>
                <div style={{
                  background: '#10b98110',
                  padding: 'clamp(0.8rem, 2vw, 1rem)',
                  borderRadius: '12px',
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  color: '#10b981'
                }}>
                  🎯 Reconecta você com o presente
                </div>
              </motion.div>

              {/* Journaling Terapêutico */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #8b5cf6'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📝</div>
                  <h3 style={{
                    color: '#8b5cf6',
                    fontWeight: '700',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    Journaling Terapêutico
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: 0
                  }}>
                    Escrita reflexiva para autoconhecimento
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#374151', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '1rem' }}>Perguntas guia:</h4>
                  <ul style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                    <li>Como me sinto hoje?</li>
                    <li>O que estou grato hoje?</li>
                    <li>Que desafio enfrentei?</li>
                    <li>O que aprendi sobre mim?</li>
                  </ul>
                </div>
                <div style={{
                  background: '#8b5cf610',
                  padding: 'clamp(0.8rem, 2vw, 1rem)',
                  borderRadius: '12px',
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  color: '#8b5cf6'
                }}>
                  ✨ Melhora autoestima e clareza mental
                </div>
              </motion.div>

              {/* Relaxamento Muscular Progressivo */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #f59e0b'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💪</div>
                  <h3 style={{
                    color: '#f59e0b',
                    fontWeight: '700',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    Relaxamento Muscular
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: 0
                  }}>
                    Técnica de Jacobson para tensão física
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#374151', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '1rem' }}>Sequência:</h4>
                  <ol style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                    <li>Contraia um grupo muscular por 5s</li>
                    <li>Relaxe completamente por 10s</li>
                    <li>Note a diferença entre tensão/relaxamento</li>
                    <li>Repita com todos os grupos musculares</li>
                  </ol>
                </div>
                <div style={{
                  background: '#f59e0b10',
                  padding: 'clamp(0.8rem, 2vw, 1rem)',
                  borderRadius: '12px',
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  color: '#f59e0b'
                }}>
                  🧘 Reduz tensão física e mental
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Práticas Espirituais */}
      <SectionTransition delay={3}>
        <section style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 clamp(1rem, 3vw, 1.5rem)',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)'
            }}>
              <SunIcon width={32} height={32} color="var(--primary-600)" />
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--gray-900)',
                letterSpacing: '-0.03em',
                margin: 0
              }}>
                Práticas Espirituais
              </h2>
            </div>

            {/* Grid de práticas espirituais */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 350px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2rem)'
            }}>
              
              {/* Oração Contemplativa */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #6366f1'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🙏</div>
                  <h3 style={{
                    color: '#6366f1',
                    fontWeight: '700',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    Oração Contemplativa
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: 0
                  }}>
                    Conexão espiritual profunda
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#374151', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '1rem' }}>Prática:</h4>
                  <ul style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                    <li>Sente-se em silêncio</li>
                    <li>Escolha uma palavra sagrada</li>
                    <li>Repita mentalmente com calma</li>
                    <li>Permaneça aberto ao divino</li>
                  </ul>
                </div>
                <div style={{
                  background: '#6366f110',
                  padding: 'clamp(0.8rem, 2vw, 1rem)',
                  borderRadius: '12px',
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  color: '#6366f1'
                }}>
                  ☮️ Promove paz interior profunda
                </div>
              </motion.div>

              {/* Gratidão Diária */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #ec4899'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🌸</div>
                  <h3 style={{
                    color: '#ec4899',
                    fontWeight: '700',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    Gratidão Diária
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: 0
                  }}>
                    Transformação através do reconhecimento
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#374151', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '1rem' }}>Ritual:</h4>
                  <ul style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                    <li>Ao acordar, liste 3 gratidões</li>
                    <li>Durante o dia, observe bênçãos</li>
                    <li>À noite, reflita sobre o dia</li>
                    <li>Agradeça mesmo pelas dificuldades</li>
                  </ul>
                </div>
                <div style={{
                  background: '#ec489910',
                  padding: 'clamp(0.8rem, 2vw, 1rem)',
                  borderRadius: '12px',
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  color: '#ec4899'
                }}>
                  💖 Aumenta felicidade e satisfação
                </div>
              </motion.div>

              {/* Caminhada Meditativa */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  borderLeft: '4px solid #059669'
                }}
              >
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🚶‍♀️</div>
                  <h3 style={{
                    color: '#059669',
                    fontWeight: '700',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    Caminhada Meditativa
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    margin: 0
                  }}>
                    Movimento consciente na natureza
                  </p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ color: '#374151', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', marginBottom: '1rem' }}>Prática:</h4>
                  <ul style={{ color: '#64748b', fontSize: 'clamp(0.9rem, 2.2vw, 1rem)', paddingLeft: '1.2rem', lineHeight: '1.6' }}>
                    <li>Caminhe lentamente</li>
                    <li>Sinta cada passo</li>
                    <li>Observe a natureza ao redor</li>
                    <li>Respire profundamente</li>
                  </ul>
                </div>
                <div style={{
                  background: '#05966910',
                  padding: 'clamp(0.8rem, 2vw, 1rem)',
                  borderRadius: '12px',
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  color: '#059669'
                }}>
                  🌿 Conecta corpo, mente e espírito
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Práticas de Autocuidado */}
      <SectionTransition delay={4}>
        <section style={{ marginBottom: 'clamp(2rem, 5vw, 4rem)' }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 clamp(1rem, 3vw, 1.5rem)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(0.5rem, 2vw, 0.75rem)',
              marginBottom: 'clamp(2rem, 4vw, 3rem)'
            }}>
              <PersonIcon width={32} height={32} color="var(--primary-600)" />
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--gray-900)',
                letterSpacing: '-0.03em',
                margin: 0
              }}>
                Autocuidado Integral
              </h2>
            </div>

            {/* Lista de práticas de autocuidado */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 40vw, 300px), 1fr))',
              gap: 'clamp(1rem, 2.5vw, 1.5rem)'
            }}>
              
              {[
                { emoji: '🛁', title: 'Banho Relaxante', desc: 'Com sais ou óleos essenciais', color: '#3b82f6' },
                { emoji: '🎵', title: 'Musicoterapia', desc: 'Sons que acalmam a alma', color: '#8b5cf6' },
                { emoji: '🌙', title: 'Higiene do Sono', desc: 'Ritual para dormir melhor', color: '#1e40af' },
                { emoji: '🍃', title: 'Aromaterapia', desc: 'Óleos essenciais para bem-estar', color: '#059669' },
                { emoji: '🎨', title: 'Arte Terapia', desc: 'Expressão criativa curativa', color: '#dc2626' },
                { emoji: '📚', title: 'Leitura Inspiradora', desc: 'Livros que nutrem a alma', color: '#7c3aed' }
              ].map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    padding: 'clamp(1.2rem, 3vw, 1.5rem)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                    borderLeft: `3px solid ${practice.color}`,
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.8rem' }}>
                    {practice.emoji}
                  </div>
                  <h4 style={{
                    color: practice.color,
                    fontWeight: '600',
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {practice.title}
                  </h4>
                  <p style={{
                    color: '#64748b',
                    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    {practice.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Dica especial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: 'clamp(2rem, 5vw, 2.5rem)',
                textAlign: 'center',
                color: 'white',
                marginTop: 'clamp(2rem, 4vw, 3rem)'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
              <h3 style={{
                fontSize: 'clamp(1.3rem, 3.5vw, 1.6rem)',
                fontWeight: '700',
                margin: '0 0 1rem 0'
              }}>
                Lembrete Importante
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 2.8vw, 1.2rem)',
                lineHeight: '1.6',
                margin: 0,
                opacity: 0.95
              }}>
                Essas práticas são complementares e não substituem acompanhamento profissional. 
                Se você está enfrentando dificuldades, busque ajuda de um psicólogo ou psiquiatra.
              </p>
            </motion.div>
          </div>
        </section>
      </SectionTransition>
    </div>
  );
};

export default Practices;
