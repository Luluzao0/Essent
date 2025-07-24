import React from 'react';

interface LogoProps {
  size?: number;
  variant?: 'full' | 'icon' | 'text';
  color?: 'primary' | 'white' | 'gradient';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 40, 
  variant = 'full', 
  color = 'primary',
  className = '' 
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
          primary: 'url(#logoGradient)',
          secondary: 'url(#logoGradient2)',
          accent: 'url(#logoAccent)'
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
  const iconSize = size;
  const textWidth = size * 2.5;

  const LogoIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {color === 'gradient' && (
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="logoAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      )}
      
      {/* Círculo externo - representa totalidade */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke={colors.primary}
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      
      {/* Círculo interno - representa o centro/essência */}
      <circle
        cx="20"
        cy="20"
        r="12"
        fill={colors.primary}
        opacity="0.1"
      />
      
      {/* Símbolo central - representa equilíbrio e harmonia */}
      <path
        d="M20 8 L26 14 L20 20 L14 14 Z"
        fill={colors.secondary}
        opacity="0.9"
      />
      
      <path
        d="M20 20 L26 26 L20 32 L14 26 Z"
        fill={colors.accent}
        opacity="0.7"
      />
      
      {/* Pontos de energia - representam vitalidade */}
      <circle cx="20" cy="6" r="2" fill={colors.primary} opacity="0.6" />
      <circle cx="20" cy="34" r="2" fill={colors.primary} opacity="0.6" />
      <circle cx="6" cy="20" r="2" fill={colors.accent} opacity="0.6" />
      <circle cx="34" cy="20" r="2" fill={colors.accent} opacity="0.6" />
      
      {/* Ondas de energia sutis */}
      <path
        d="M10 20 Q15 16 20 20 Q25 24 30 20"
        stroke={colors.primary}
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      
      <path
        d="M12 20 Q16 17 20 20 Q24 23 28 20"
        stroke={colors.accent}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );

  const LogoText = () => (
    <svg
      width={textWidth}
      height={iconSize * 0.8}
      viewBox="0 0 100 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="24"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill={colors.primary}
        letterSpacing="-0.5px"
      >
        Essent
      </text>
    </svg>
  );

  if (variant === 'icon') {
    return <LogoIcon />;
  }

  if (variant === 'text') {
    return <LogoText />;
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoIcon />
      <LogoText />
    </div>
  );
};

export default Logo;
