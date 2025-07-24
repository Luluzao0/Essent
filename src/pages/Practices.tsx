import { motion } from 'framer-motion';
import MeditationSection from '../components/MeditationSection';
import ImageGallery from '../components/ImageGallery';
import VideoPlayer from '../components/VideoPlayer';
import { SectionTransition } from '../components/PageTransition';
import { 
  TokensIcon, 
  ImageIcon, 
  VideoIcon 
} from '@radix-ui/react-icons';

const Practices = () => {
  // Dados de vídeos de bem-estar
  const wellnessVideos = [
    {
      id: 1,
      title: "Meditação Guiada para Ansiedade",
      description: "Uma sessão de 10 minutos para acalmar a mente e reduzir a ansiedade através de técnicas de respiração.",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
    },
    {
      id: 2,
      title: "Yoga para Iniciantes",
      description: "Sequência básica de yoga para flexibilidade e bem-estar, perfeita para começar sua jornada.",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop"
    },
    {
      id: 3,
      title: "Técnicas de Respiração",
      description: "Aprenda técnicas de respiração profunda para controle emocional e relaxamento.",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=450&fit=crop"
    },
    {
      id: 4,
      title: "Mindfulness no Cotidiano",
      description: "Como praticar mindfulness em atividades diárias para uma vida mais presente e consciente.",
      src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "https://images.unsplash.com/photo-1499728603263-13726abce5b1?w=800&h=450&fit=crop"
    }
  ];

  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 75%, #f0f9ff 100%)',
      minHeight: '100vh'
    }}>
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
              Descubra ferramentas práticas para meditação, mindfulness e crescimento pessoal através de conteúdo visual inspirador.
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

      {/* Gallery Section */}
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
              marginBottom: 'clamp(0.8rem, 2vw, 1rem)'
            }}>
              <ImageIcon width={32} height={32} color="var(--primary-600)" />
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--gray-900)',
                letterSpacing: '-0.03em',
                margin: 0
              }}>
                Galeria da Serenidade
              </h2>
            </div>
          </div>
          <ImageGallery />
        </section>
      </SectionTransition>

      {/* Videos Section */}
      <SectionTransition delay={3}>
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
              <VideoIcon width={32} height={32} color="var(--primary-600)" />
              <h2 style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: 'var(--gray-900)',
                letterSpacing: '-0.03em',
                margin: 0
              }}>
                Vídeos de Bem-Estar
              </h2>
            </div>
            
            <div className="grid" style={{
              display: 'grid',
              gap: 'clamp(1.5rem, 4vw, 2.5rem)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 50vw, 350px), 1fr))'
            }}>
              {wellnessVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <VideoPlayer
                    src={video.src}
                    title={video.title}
                    description={video.description}
                    thumbnail={video.thumbnail}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </SectionTransition>
    </div>
  );
};

export default Practices;
