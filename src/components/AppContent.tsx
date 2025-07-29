import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useFirstLogin } from '../hooks/useFirstLogin';
import Welcome from '../pages/Welcome';

interface AppContentProps {
  children: React.ReactNode;
}

const AppContent: React.FC<AppContentProps> = ({ children }) => {
  const { currentUser } = useAuth();
  const { isFirstLogin, isLoading } = useFirstLogin();
  const navigate = useNavigate();
  const location = useLocation();

  // Redirecionar usuário logado para dashboard (exceto se já estiver no dashboard ou welcome)
  useEffect(() => {
    if (currentUser && !isFirstLogin && !isLoading) {
      const currentPath = location.pathname;
      const publicPaths = ['/', '/quotes', '/videos', '/meditation', '/practices', '/resources', '/ai-tech'];
      
      // Se estiver em uma página pública e logado, redirecionar para dashboard
      if (publicPaths.includes(currentPath)) {
        navigate('/dashboard');
      }
    }
  }, [currentUser, isFirstLogin, isLoading, location.pathname, navigate]);

  // Mostrar loading enquanto verifica primeiro login
  if (isLoading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
      }}>
        <div style={{
          textAlign: 'center'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #e2e8f0',
            borderTop: '4px solid #7c3aed',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <p style={{
            color: '#64748b',
            fontSize: '1rem'
          }}>
            Carregando...
          </p>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Se usuário está logado e é primeiro login, mostrar welcome
  if (currentUser && isFirstLogin) {
    return <Welcome />;
  }

  // Caso contrário, mostrar conteúdo normal
  return <>{children}</>;
};

export default AppContent;
