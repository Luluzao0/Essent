import React from 'react';
import { motion } from 'framer-motion';

interface LoadingLogoProps {
  size?: number;
  color?: 'primary' | 'white' | 'gradient';
}

const LoadingLogo: React.FC<LoadingLogoProps> = ({ 
  size = 60, 
  color = 'gradient' 
}) => {
  const getColors = () => {
    switch (color) {
      case 'white':
        return {
          primary: '#ffffff',
          secondary: '#f8fafc',
          accent: '#e2e8f0'
        };
      case 'gradient':
        return {
          primary: 'url(#loadingGradient)',
          secondary: 'url(#loadingGradient2)',
          accent: 'url(#loadingAccent)'
        };
      default:
        return {
          primary: '#3b82f6',
          secondary: '#1e40af',
          accent: '#8b5cf6'
        };
    }
  };

  const colors = getColors();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size
    }}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {color === 'gradient' && (
          <defs>
            <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="loadingGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="loadingAccent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        )}
        
        {/* Círculo externo animado */}
        <motion.circle
          cx="30"
          cy="30"
          r="25"
          stroke={colors.primary}
          strokeWidth="2"
          fill="none"
          opacity="0.6"
          strokeDasharray="20 10"
          animate={{
            strokeDashoffset: [0, -30]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Círculo interno */}
        <circle
          cx="30"
          cy="30"
          r="18"
          fill={colors.primary}
          opacity="0.1"
        />
        
        {/* Símbolo central animado */}
        <motion.g
          animate={{
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path
            d="M30 15 L36 21 L30 27 L24 21 Z"
            fill={colors.secondary}
            opacity="0.9"
          />
          
          <path
            d="M30 27 L36 33 L30 39 L24 33 Z"
            fill={colors.accent}
            opacity="0.7"
          />
        </motion.g>
        
        {/* Pontos de energia animados */}
        <motion.circle 
          cx="30" 
          cy="8" 
          r="3" 
          fill={colors.primary}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
        />
        <motion.circle 
          cx="30" 
          cy="52" 
          r="3" 
          fill={colors.primary}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        <motion.circle 
          cx="8" 
          cy="30" 
          r="3" 
          fill={colors.accent}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
        <motion.circle 
          cx="52" 
          cy="30" 
          r="3" 
          fill={colors.accent}
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.9
          }}
        />
        
        {/* Ondas de energia */}
        <motion.path
          d="M15 30 Q22.5 24 30 30 Q37.5 36 45 30"
          stroke={colors.primary}
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
          animate={{
            pathLength: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M18 30 Q24 27 30 30 Q36 33 42 30"
          stroke={colors.accent}
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
          animate={{
            pathLength: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.svg>
    </div>
  );
};

export default LoadingLogo;
