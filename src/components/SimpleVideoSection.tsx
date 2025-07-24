import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, X } from 'lucide-react';
import { wellnessVideos } from '../data/wellnessDataClean';
import type { WellnessVideo } from '../data/wellnessDataClean';
import styles from './VideoSectionNew.module.css';

// Função para extrair ID do YouTube
const extractVideoId = (url: string): string => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : '';
};

// Função para detectar o tipo de plataforma
const getVideoPlatform = (url: string): 'youtube' | 'vimeo' | 'dailymotion' | 'archive' | 'other' => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('vimeo.com')) return 'vimeo';
  if (url.includes('dailymotion.com')) return 'dailymotion';
  if (url.includes('archive.org')) return 'archive';
  return 'other';
};

// Função para gerar URL da thumbnail baseada na plataforma
const getVideoThumbnail = (url: string): string => {
  const platform = getVideoPlatform(url);
  
  switch (platform) {
    case 'youtube': {
      const videoId = extractVideoId(url);
      return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
    }
    case 'vimeo': {
      const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
      if (vimeoMatch) {
        return `https://vumbnail.com/${vimeoMatch[1]}.jpg`;
      }
      return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop';
    }
    case 'dailymotion': {
      return 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop';
    }
    case 'archive': {
      return 'https://images.unsplash.com/photo-1481026469463-66327c86e544?w=400&h=300&fit=crop';
    }
    default:
      return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop';
  }
};

// Função para gerar URL embed baseada na plataforma
const getEmbedUrl = (url: string): string => {
  const platform = getVideoPlatform(url);
  
  switch (platform) {
    case 'youtube': {
      const videoId = extractVideoId(url);
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url;
    }
    case 'vimeo': {
      const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
      if (vimeoMatch) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`;
      }
      return url;
    }
    case 'dailymotion': {
      const dailymotionMatch = url.match(/dailymotion\.com\/video\/([^_]+)/);
      if (dailymotionMatch) {
        return `https://www.dailymotion.com/embed/video/${dailymotionMatch[1]}?autoplay=1`;
      }
      return url;
    }
    case 'archive': {
      return url;
    }
    default:
      return url;
  }
};

const SimpleVideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<WellnessVideo | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleVideoSelect = (video: WellnessVideo) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Vídeos Inspiradores</h2>
          <p className={styles.subtitle}>
            Descubra mensagens poderosas de transformação e esperança
          </p>
        </motion.div>

        <div className={styles.videoGrid}>
          {wellnessVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className={`${styles.videoCard} ${
                hoveredIndex === index ? styles.cardHovered : ''
              }`}
              style={{
                zIndex: hoveredIndex === index ? 1000 : 999 - index,
                transform: hoveredIndex === index ? 'scale(1.05) translateY(-10px)' : 'scale(1)',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleVideoSelect(video)}
            >
              <div className={styles.thumbnailContainer}>
                <img
                  src={getVideoThumbnail(video.url)}
                  alt={video.title}
                  className={styles.thumbnail}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop';
                  }}
                />
                <div className={styles.playOverlay}>
                  <Play size={32} fill="white" />
                </div>
                <div className={styles.duration}>
                  <Clock size={12} />
                  <span>{video.duration}</span>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <p className={styles.videoDescription}>{video.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={styles.category}>{video.category}</span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: '500' }}>
                    📺 YouTube
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal para reprodução do vídeo */}
        {selectedVideo && (
          <motion.div
            className={styles.videoPlayerModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.playerWrapper}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                <X size={24} />
              </button>
              
              <div className={styles.videoPlayer}>
                <iframe
                  width="100%"
                  height="100%"
                  src={getEmbedUrl(selectedVideo.url)}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className={styles.videoInfo}>
                <h3>{selectedVideo.title}</h3>
                <p>{selectedVideo.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default SimpleVideoSection;
