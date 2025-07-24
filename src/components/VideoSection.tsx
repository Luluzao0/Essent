import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Clock, Filter } from 'lucide-react';
import { useState } from 'react';
import { wellnessVideos, getVideosByCategory } from '../data/wellnessData';
import type { WellnessVideo } from '../data/wellnessData';
import styles from './VideoSection.module.css';

const VideoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState<WellnessVideo['category'] | 'all'>('all');
  const [displayedVideos, setDisplayedVideos] = useState(wellnessVideos);
  const [selectedVideo, setSelectedVideo] = useState<WellnessVideo | null>(null);

  const categories = [
    { value: 'all', label: 'Todos', emoji: '🎬' },
    { value: 'meditation', label: 'Meditação', emoji: '🧘' },
    { value: 'breathing', label: 'Respiração', emoji: '💨' },
    { value: 'relaxation', label: 'Relaxamento', emoji: '😌' },
    { value: 'mindfulness', label: 'Mindfulness', emoji: '🌸' }
  ];

  const handleCategoryChange = (category: WellnessVideo['category'] | 'all') => {
    setSelectedCategory(category);
    if (category === 'all') {
      setDisplayedVideos(wellnessVideos);
    } else {
      const filtered = getVideosByCategory(category);
      setDisplayedVideos(filtered);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <section id="videos" className="section-padding" style={{
      background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--accent-50) 100%)'
    }}>
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
            <Play size={32} color="var(--accent-600)" />
            <h2 className="text-gradient">Vídeos de Bem-Estar</h2>
          </div>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Sessões guiadas para relaxamento, meditação e práticas de mindfulness
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginRight: '1rem'
          }}>
            <Filter size={20} color="var(--text-muted)" />
            <span style={{ 
              color: 'var(--text-muted)', 
              fontSize: '0.9rem',
              fontWeight: '500' 
            }}>
              Filtrar:
            </span>
          </div>
          
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryChange(category.value as WellnessVideo['category'] | 'all')}
              style={{
                background: selectedCategory === category.value 
                  ? 'linear-gradient(135deg, var(--accent-500) 0%, var(--accent-600) 100%)'
                  : 'rgba(255, 255, 255, 0.8)',
                color: selectedCategory === category.value ? 'white' : 'var(--text-primary)',
                border: selectedCategory === category.value ? 'none' : '1px solid var(--border-light)',
                padding: '0.5rem 1rem',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>{category.emoji}</span>
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className={styles.videoGrid}
        >
          {displayedVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`card ${styles.videoCard}`}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div style={{ 
                position: 'relative', 
                overflow: 'hidden',
                background: 'linear-gradient(135deg, var(--primary-100) 0%, var(--accent-100) 100%)',
                borderRadius: '20px 20px 0 0'
              }}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={styles.videoThumbnail}
                />
                
                {/* Play Button Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }}
                className="play-overlay"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    style={{
                      background: 'rgba(255, 255, 255, 0.95)',
                      borderRadius: '50%',
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <Play size={24} color="var(--accent-600)" />
                  </motion.div>
                </div>

                {/* Duration Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '0.75rem',
                  background: 'rgba(0, 0, 0, 0.85)',
                  color: 'white',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  <Clock size={12} />
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  background: `linear-gradient(135deg, var(--${getCategoryColor(video.category)}-500) 0%, var(--${getCategoryColor(video.category)}-600) 100%)`,
                  color: 'white',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  {getCategoryEmoji(video.category)} {getCategoryLabel(video.category)}
                </div>

                {/* Language Indicator */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: 'var(--text-primary)',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '12px',
                  fontSize: '0.65rem',
                  fontWeight: '600',
                  backdropFilter: 'blur(10px)'
                }}>
                  {getLanguageFlag(video.title)}
                </div>
              </div>
              
              {/* Content */}
              <div className={styles.videoContent}>
                <h3 className={styles.videoTitle}>
                  {video.title}
                </h3>
                
                <p className={styles.videoDescription}>
                  {video.description}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.playButton}
                >
                  <Play size={16} />
                  Assistir Agora
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem'
            }}
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              style={{
                maxWidth: '95vw',
                maxHeight: '95vh',
                width: '900px',
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'white',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}
              >
                ×
              </button>

              {/* Video Player */}
              <div style={{ 
                position: 'relative', 
                paddingBottom: '56.25%', 
                height: 0,
                background: '#000'
              }}>
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo.url) + '?autoplay=1&rel=0&modestbranding=1'}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
              
              {/* Video Info */}
              <div style={{ padding: '2rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <h3 style={{ 
                    margin: 0,
                    color: 'var(--text-primary)',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    lineHeight: '1.3'
                  }}>
                    {selectedVideo.title}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1.2rem'
                  }}>
                    {getLanguageFlag(selectedVideo.title)}
                  </div>
                </div>
                
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {selectedVideo.description}
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  padding: '1rem',
                  background: 'var(--bg-secondary)',
                  borderRadius: '15px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    <Clock size={16} />
                    <span>Duração: {selectedVideo.duration}</span>
                  </div>
                  
                  <div style={{
                    background: `linear-gradient(135deg, var(--${getCategoryColor(selectedVideo.category)}-500) 0%, var(--${getCategoryColor(selectedVideo.category)}-600) 100%)`,
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '25px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {getCategoryEmoji(selectedVideo.category)} {getCategoryLabel(selectedVideo.category)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// Helper functions
const getCategoryColor = (category: WellnessVideo['category']) => {
  const colors = {
    meditation: 'primary',
    breathing: 'secondary',
    relaxation: 'accent',
    mindfulness: 'primary'
  };
  return colors[category] || 'accent';
};

const getCategoryEmoji = (category: WellnessVideo['category']) => {
  const emojis = {
    meditation: '🧘',
    breathing: '💨',
    relaxation: '😌',
    mindfulness: '🌸'
  };
  return emojis[category] || '🎬';
};

const getCategoryLabel = (category: WellnessVideo['category']) => {
  const labels = {
    meditation: 'Meditação',
    breathing: 'Respiração',
    relaxation: 'Relaxamento',
    mindfulness: 'Mindfulness'
  };
  return labels[category] || category;
};

const getLanguageFlag = (title: string) => {
  // Detecta se o título está em inglês ou português
  const englishPattern = /^[a-zA-Z\s\-:()0-9]+$/;
  const isEnglish = englishPattern.test(title) && !title.includes('ção') && !title.includes('ão');
  return isEnglish ? '🇺🇸' : '🇧🇷';
};

export default VideoSection;
