import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type React from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// Transição principal da página - mais limpa e suave
const pageVariants = {
  initial: {
    opacity: 0,
    y: 24
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -24
  }
};

const pageTransition = {
  type: "tween" as const,
  ease: "easeOut" as const,
  duration: 0.4
};

export const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
      style={{
        width: '100%',
        minHeight: '100vh'
      }}
    >
      {children}
    </motion.div>
  );
};

// Transição para seções individuais - mais sutil
interface SectionTransitionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const SectionTransition = ({ 
  children, 
  delay = 0, 
  className = "" 
}: SectionTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Transição para cards - limpa e elegante
interface CardTransitionProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

export const CardTransition = ({ 
  children, 
  index = 0, 
  className = "" 
}: CardTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Transição para elementos flutuantes - mais sutil
interface FloatingTransitionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FloatingTransition = ({ children, className = "", style }: FloatingTransitionProps) => {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
        rotate: [-0.5, 0.5, -0.5]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};
