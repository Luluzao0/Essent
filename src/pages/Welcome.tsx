import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import SEO from '../components/SEO';

const Welcome: React.FC = () => {
  const { currentUser } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const firstName = currentUser?.displayName?.split(' ')[0] || 'Usuário';

  const welcomeSteps = [
    {
      icon: "👋",
      title: `Olá, ${firstName}!`,
      subtitle: "Bem-vindo ao Essent",
      description: "Sua jornada de bem-estar e saúde mental começa aqui"
    },
    {
      icon: "🧘‍♀️",
      title: "Meditação & Mindfulness",
      subtitle: "Encontre sua paz interior",
      description: "Acesse meditações guiadas, exercícios de respiração e práticas de mindfulness"
    },
    {
      icon: "🤖",
      title: "Inteligência Artificial",
      subtitle: "Tecnologia a seu favor",
      description: "IA para análise emocional, recomendações personalizadas e suporte terapêutico"
    },
    {
      icon: "💭",
      title: "Conteúdo Inspiracional",
      subtitle: "Motivação diária",
      description: "Frases motivacionais, vídeos inspiradores e recursos para seu crescimento pessoal"
    },
    {
      icon: "🌟",
      title: "Pronto para começar?",
      subtitle: "Sua jornada de transformação",
      description: "Explore todos os recursos e descubra o poder do autoconhecimento"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < welcomeSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [welcomeSteps.length]);

  const handleSkip = () => {
    setIsVisible(false);
    // Redirecionar para home após animação
    setTimeout(() => {
      window.location.href = '/';
    }, 500);
  };

  const handleContinue = () => {
    if (currentStep < welcomeSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSkip();
    }
  };

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      />
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <SEO 
        title="Bem-vindo ao Essent - Sua Jornada de Bem-Estar"
        description="Comece sua jornada de autoconhecimento e bem-estar mental com o Essent"
        keywords="bem-vindo, essent, bem-estar, saúde mental, meditação"
        url="http://essentpsi.vercel.app/welcome"
      />

      {/* Efeitos de fundo */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        animation: 'float 6s ease-in-out infinite'
      }} />

      {/* Container principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          padding: 'clamp(2rem, 5vw, 4rem)',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* Botão Skip */}
        <button
          onClick={handleSkip}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            color: '#64748b',
            fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: '8px',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          Pular
        </button>

        {/* Avatar do usuário */}
        {currentUser?.photoURL && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginBottom: '1.5rem'
            }}
          >
            <img
              src={currentUser.photoURL}
              alt="Avatar"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '4px solid white',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
              }}
            />
          </motion.div>
        )}

        {/* Conteúdo do step atual */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            fontSize: 'clamp(3rem, 8vw, 4rem)',
            marginBottom: '1rem'
          }}>
            {welcomeSteps[currentStep].icon}
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
            fontWeight: '800',
            color: '#1e293b',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            {welcomeSteps[currentStep].title}
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
            fontWeight: '600',
            color: '#7c3aed',
            marginBottom: '1rem'
          }}>
            {welcomeSteps[currentStep].subtitle}
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
            color: '#64748b',
            lineHeight: '1.6',
            marginBottom: '2rem',
            maxWidth: '400px',
            margin: '0 auto 2rem'
          }}>
            {welcomeSteps[currentStep].description}
          </p>
        </motion.div>

        {/* Indicadores de progresso */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '2rem'
        }}>
          {welcomeSteps.map((_, index) => (
            <motion.div
              key={index}
              style={{
                width: index === currentStep ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: index === currentStep ? '#7c3aed' : '#e2e8f0',
                transition: 'all 0.3s ease'
              }}
              whileHover={{ backgroundColor: '#7c3aed' }}
            />
          ))}
        </div>

        {/* Botões de ação */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          {currentStep > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setCurrentStep(currentStep - 1)}
              style={{
                padding: '12px 24px',
                border: '2px solid #7c3aed',
                background: 'transparent',
                color: '#7c3aed',
                borderRadius: '12px',
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '120px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#7c3aed';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#7c3aed';
              }}
            >
              Anterior
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContinue}
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
              border: 'none',
              color: 'white',
              borderRadius: '12px',
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(124, 58, 237, 0.3)',
              minWidth: '120px'
            }}
          >
            {currentStep === welcomeSteps.length - 1 ? 'Começar' : 'Próximo'}
          </motion.button>
        </div>

        {/* Timer visual */}
        <div style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60px',
          height: '4px',
          backgroundColor: '#e2e8f0',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <motion.div
            key={currentStep}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 3, ease: 'linear' }}
            style={{
              height: '100%',
              backgroundColor: '#7c3aed',
              borderRadius: '2px'
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
