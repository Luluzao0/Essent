import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useEnhancedAuth } from '../hooks/useEnhancedAuth';
import styles from './LoginModal.module.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const { 
    handleLogin, 
    isLoginLoading, 
    loginError, 
    loginSuccess,
    clearError 
  } = useEnhancedAuth();

  const handleGoogleLogin = async () => {
    await handleLogin();
    if (!loginError) {
      setTimeout(() => onClose(), 1000); // Fechar após sucesso
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleCloseWithClearError = () => {
    clearError();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && handleCloseWithClearError()}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Botão de fechar */}
        <button
          className={styles.closeButton}
          onClick={handleCloseWithClearError}
          aria-label="Fechar modal"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className={styles.header}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 id="login-title" className={styles.title}>
              🌟 Bem-vindo ao Essent
            </h2>
            <p className={styles.subtitle}>
              Entre com sua conta Google para acessar todos os recursos de bem-estar e saúde mental
            </p>
          </motion.div>
        </div>

        {/* Mensagem de erro */}
        {loginError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
              color: '#dc2626',
              padding: '12px 16px',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              textAlign: 'center',
              border: '1px solid #fca5a5'
            }}
          >
            {loginError}
          </motion.div>
        )}

        {/* Mensagem de sucesso */}
        {loginSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
              color: '#16a34a',
              padding: '12px 16px',
              borderRadius: '12px',
              marginBottom: '1.5rem',
              fontSize: '0.9rem',
              textAlign: 'center',
              border: '1px solid #86efac',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
          >
            <CheckCircle size={18} />
            Login realizado com sucesso!
          </motion.div>
        )}

        {/* Google Login Button */}
        <motion.button
          className={styles.loginButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={handleGoogleLogin}
          disabled={isLoginLoading || loginSuccess}
          aria-label={isLoginLoading ? "Fazendo login..." : "Entrar com Google"}
        >
          {isLoginLoading ? (
            <>
              <div className={styles.loadingSpinner} />
              <span className={styles.loadingText}>Conectando...</span>
            </>
          ) : loginSuccess ? (
            <>
              <CheckCircle size={22} />
              Conectado!
            </>
          ) : (
            <>
              <svg className={styles.googleIcon} width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="white"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="white"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="white"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="white"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuar com Google
            </>
          )}
        </motion.button>

        {/* Termos e condições */}
        <motion.p
          className={styles.terms}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Ao continuar, você concorda com nossos{' '}
          <a href="#" className={styles.termsLink}>termos de uso</a>{' '}
          e <a href="#" className={styles.termsLink}>política de privacidade</a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
