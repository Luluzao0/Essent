import { motion } from 'framer-motion';
import { Heart, Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, var(--neutral-800) 0%, var(--neutral-900) 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        left: '-50px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%)',
        opacity: 0.1,
        filter: 'blur(30px)'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '-30px',
        right: '-30px',
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--accent-500) 0%, var(--accent-600) 100%)',
        opacity: 0.1,
        filter: 'blur(25px)'
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Main Footer Content */}
        <div style={{
          padding: '3rem 0 2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}>
            {/* Brand Section */}
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  cursor: 'pointer'
                }}
                onClick={scrollToTop}
              >
                <Logo size={40} variant="full" color="white" />
              </motion.div>
              
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1rem',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                maxWidth: '300px'
              }}>
                Um espaço dedicado ao seu bem-estar mental e espiritual. 
                Encontre paz, inspiração e ferramentas para momentos difíceis.
              </p>

              {/* Social Links */}
              <div style={{
                display: 'flex',
                gap: '1rem'
              }}>
                {[
                  { icon: Mail, href: 'mailto:devluisao@gmail.com', label: 'Email' },
                  { icon: Github, href: 'https://github.com/luluzao0', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/1lgl/', label: 'LinkedIn' }
                ].map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: '0.75rem',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(10px)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      }}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Navegação Rápida
              </h4>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  { name: 'Início', href: 'home' },
                  { name: 'Frases Inspiracionais', href: 'quotes' },
                  { name: 'Práticas de Meditação', href: 'meditation' },
                  { name: 'Galeria de Equilíbrio', href: 'practices' },
                  { name: 'Vídeos de Bem-Estar', href: 'practices' }
                ].map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                    }}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Recursos de Bem-Estar
              </h4>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {[
                  'Frases motivacionais diárias',
                  'Exercícios de respiração',
                  'Meditações guiadas',
                  'Imagens inspiradoras',
                  'Vídeos de relaxamento'
                ].map((resource, index) => (
                  <div
                    key={index}
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--primary-400)'
                    }} />
                    {resource}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          padding: '1.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '0.9rem'
          }}>
            <span>© {currentYear} Essent. Feito com</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
            <Heart size={16} color="var(--accent-400)" fill="var(--accent-400)" />
          </motion.div>
          <span>para o seu bem-estar.</span>
          <span><strong>In memoriam L.</strong></span>
        </div>          {/* Back to Top Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            style={{
              background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%)',
              color: 'white',
              border: 'none',
              padding: '0.75rem',
              borderRadius: '12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.9rem',
              fontWeight: '500',
              transition: 'all 0.3s ease'
            }}
          >
            <ArrowUp size={16} />
            Voltar ao Topo
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
