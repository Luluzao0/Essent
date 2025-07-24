import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HomeIcon,
  ChatBubbleIcon,
  MixIcon,
  HamburgerMenuIcon,
  Cross1Icon,
  MagicWandIcon
} from '@radix-ui/react-icons';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        padding: 'clamp(0.5rem, 2vw, 1rem) 0',
        minHeight: 'clamp(60px, 10vw, 80px)'
      }}
    >
      <nav style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Logo size={32} variant="full" color="gradient" />
        </Link>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          {/* Desktop Menu Items */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            '@media (max-width: 768px)': {
              display: 'none'
            }
          }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                color: '#374151',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
            >
              <HomeIcon width={18} height={18} />
              Início
            </Link>

            <Link
              to="/quotes"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                color: '#374151',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
            >
              <ChatBubbleIcon width={18} height={18} />
              Frases
            </Link>

            <Link
              to="/meditation"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                color: '#374151',
                fontWeight: '500',
                fontSize: '0.95rem',
                transition: 'color 0.2s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
            >
              <MagicWandIcon width={18} height={18} />
              Meditação
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              padding: 'clamp(0.375rem, 1.5vw, 0.5rem)',
              cursor: 'pointer',
              color: '#4b5563',
              '@media (max-width: 768px)': {
                display: 'flex'
              }
            }}
          >
            {isMenuOpen ? <Cross1Icon width={24} height={24} /> : <HamburgerMenuIcon width={24} height={24} />}
          </button>
        </div>
      </nav>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.98)',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
            padding: '1rem'
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: '#4b5563',
                fontWeight: '500',
                padding: '0.75rem',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <HomeIcon width={20} height={20} />
              Início
            </Link>

            <Link
              to="/quotes"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: '#4b5563',
                fontWeight: '500',
                padding: '0.75rem',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <ChatBubbleIcon width={20} height={20} />
              Frases
            </Link>

            <Link
              to="/meditation"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: '#4b5563',
                fontWeight: '500',
                padding: '0.75rem',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <MagicWandIcon width={20} height={20} />
              Meditação
            </Link>

            <Link
              to="/practices"
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textDecoration: 'none',
                color: '#4b5563',
                fontWeight: '500',
                padding: '0.75rem',
                borderRadius: '8px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <MixIcon width={20} height={20} />
              Práticas
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
