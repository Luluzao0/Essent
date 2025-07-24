import React from 'react';
import { motion } from 'framer-motion';
import LoadingLogo from '../components/LoadingLogo';

interface LoadingPageProps {
  message?: string;
  className?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ 
  message = "Carregando...", 
  className = "" 
}) => {
  return (
    <motion.div
      className={`loading-page ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
        gap: '2rem'
      }}
    >
      <LoadingLogo size={80} color="white" />
      
      <motion.div
        style={{
          textAlign: 'center',
          maxWidth: '400px',
          padding: '0 1rem'
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '600',
            marginBottom: '0.5rem',
            letterSpacing: '0.025em'
          }}
          animate={{
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {message}
        </motion.h2>
        
        <p style={{
          fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
          opacity: 0.8,
          lineHeight: '1.5',
          margin: 0
        }}>
          Preparando sua experiência de bem-estar
        </p>
      </motion.div>
      
      {/* Pontos de progresso animados */}
      <motion.div
        style={{
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.6)'
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingPage;
