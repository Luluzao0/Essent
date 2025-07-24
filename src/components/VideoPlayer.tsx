import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  PlayIcon, 
  PauseIcon, 
  SpeakerLoudIcon, 
  SpeakerOffIcon,
  EnterFullScreenIcon
} from '@radix-ui/react-icons';

interface VideoPlayerProps {
  src: string;
  title: string;
  description?: string;
  thumbnail?: string;
}

const VideoPlayer = ({ src, title, description, thumbnail }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const handlePlayPause = () => {
    const video = document.getElementById(`video-${title}`) as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    const video = document.getElementById(`video-${title}`) as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    const video = document.getElementById(`video-${title}`) as HTMLVideoElement;
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '20px',
        padding: '1.5rem',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#000',
          aspectRatio: '16/9'
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          id={`video-${title}`}
          src={src}
          poster={thumbnail}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedData={() => {
            const video = document.getElementById(`video-${title}`) as HTMLVideoElement;
            setIsMuted(video.muted);
          }}
        />
        
        {/* Custom Controls Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
            padding: '2rem 1.5rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem'
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePlayPause}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            {isPlaying ? (
              <PauseIcon width={20} height={20} />
            ) : (
              <PlayIcon width={20} height={20} />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleMute}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            {isMuted ? (
              <SpeakerOffIcon width={16} height={16} />
            ) : (
              <SpeakerLoudIcon width={16} height={16} />
            )}
          </motion.button>

          <div style={{ flex: 1 }} />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleFullscreen}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'white'
            }}
          >
            <EnterFullScreenIcon width={16} height={16} />
          </motion.button>
        </motion.div>
      </div>

      <div style={{ padding: '1.5rem 0 0' }}>
        <h3 style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
          fontWeight: '700',
          color: 'var(--gray-900)',
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em'
        }}>
          {title}
        </h3>
        
        {description && (
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1rem)',
            color: 'var(--gray-600)',
            lineHeight: '1.6',
            margin: 0
          }}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default VideoPlayer;
