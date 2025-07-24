import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SplashTransitionProps {
  children: ReactNode;
  onComplete?: () => void;
}

export const SplashTransition = ({ children, onComplete }: SplashTransitionProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)"
      }}
      animate={{ 
        opacity: 1,
        scale: 1,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        onComplete
      }}
      style={{
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {children}
    </motion.div>
  );
};
