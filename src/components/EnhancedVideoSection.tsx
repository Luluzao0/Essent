import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import ReactPlayer from 'react-player';
import { wellnessVideos, type WellnessVideo } from '../data/wellnessData';
import styles from './VideoSection.module.css';

// Helper function to extract YouTube video ID
const extractVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

const EnhancedVideoSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const videos = wellnessVideos.slice(0, 20); // Show 20 videos

  const handleVideoClick = (index: number) => {
    console.log('Video clicked:', index, videos[index]);
    if (selectedVideo === index) {
      // If already selected, play the video
      setPlayingVideo(index);
    } else {
      // Bring to front
      setSelectedVideo(index);
    }
  };

  const categoryColors = [
    '#4F46E5', '#10B981', '#8B5CF6', '#06B6D4', '#F59E0B',
    '#EF4444', '#8B5A2B', '#EC4899', '#6366F1', '#14B8A6',
    '#A855F7', '#F97316', '#84CC16', '#22D3EE', '#FB7185',
    '#4ADE80', '#FBBF24', '#A78BFA', '#34D399', '#60A5FA'
  ];

  return (
    <section className={styles.videoSection}>
      <div className={styles.videoContainer}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Biblioteca de Vídeos</h2>
          <p className={styles.sectionDescription}>
            Explore nossa coleção de vídeos especializados em bem-estar e meditação
          </p>
        </motion.div>

        <div className={styles.videoGrid}>
          {videos.map((video: WellnessVideo, index: number) => (
            <motion.div
              key={video.id}
              className={`${styles.videoCard} ${selectedVideo === index ? styles.selected : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              onClick={() => handleVideoClick(index)}
              style={{
                '--category-color': categoryColors[index % categoryColors.length],
                zIndex: selectedVideo === index ? 200 : index
              } as React.CSSProperties}
            >
              <img 
                src={video.thumbnail || `https://img.youtube.com/vi/${extractVideoId(video.url)}/maxresdefault.jpg`}
                alt={video.title}
                className={styles.videoThumbnail}
                loading="lazy"
                onError={(e) => {
                  // Fallback para thumbnail de menor qualidade se maxres falhar
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('maxresdefault')) {
                    target.src = `https://img.youtube.com/vi/${extractVideoId(video.url)}/hqdefault.jpg`;
                  }
                }}
              />
              
              <div className={styles.videoColorOverlay} />
              
              <div className={styles.categoryIndicator} />
              
              <button className={styles.playIndicator}>
                <Play size={24} fill="currentColor" />
              </button>

              <div className={styles.videoContent}>
                <h3 className={styles.layeredTitle}>{video.title}</h3>
                <p className={styles.layeredDescription}>{video.description}</p>
                <div className={styles.layeredMeta}>
                  <span className={`${styles.layeredBadge} ${styles.categoryBadge}`}>
                    {video.category}
                  </span>
                  <span className={`${styles.layeredBadge} ${styles.durationBadge}`}>
                    <Clock size={12} />
                    {video.duration}
                  </span>
                  <span className={`${styles.layeredBadge} ${styles.languageBadge}`}>
                    🎬 Vídeo
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {playingVideo !== null && (
          <motion.div
            className={styles.videoPlayerModal}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.videoPlayerContainer}>
              <button 
                className={styles.closeButton}
                onClick={() => {
                  setPlayingVideo(null);
                  setSelectedVideo(null);
                }}
              >
                ×
              </button>
              <div className={styles.playerWrapper}>
                <ReactPlayer
                  url={videos[playingVideo].url}
                  playing={true}
                  controls={true}
                  width="100%"
                  height="100%"
                  onError={(error) => {
                    console.error('Video player error:', error);
                    console.log('Trying to play:', videos[playingVideo].url);
                  }}
                  onReady={() => {
                    console.log('Video player ready:', videos[playingVideo].url);
                  }}
                />
              </div>
              <div className={styles.videoPlayerInfo}>
                <h3>{videos[playingVideo].title}</h3>
                <p>{videos[playingVideo].description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EnhancedVideoSection;
