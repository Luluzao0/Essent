import React, { useEffect, useMemo } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';
import LoggedHeader from './LoggedHeader';

const ConditionalHeader: React.FC = () => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Rotas que requerem autenticação
  const protectedRoutes = useMemo(() => ['/dashboard', '/therapy-chat'], []);
  
  useEffect(() => {
    // Se não está carregando, não há usuário e está em rota protegida
    if (!loading && !currentUser && protectedRoutes.includes(location.pathname)) {
      navigate('/', { replace: true });
    }
  }, [currentUser, loading, location.pathname, navigate, protectedRoutes]);
  
  // Enquanto carrega, não renderiza nada para evitar flash
  if (loading) {
    return null;
  }
  
  return currentUser ? <LoggedHeader /> : <Header />;
};

export default ConditionalHeader;
