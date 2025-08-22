import { useState, useCallback } from 'react';
import { useAuth } from './useAuth';

interface LoginState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const useEnhancedAuth = () => {
  const { login, logout, currentUser, loading } = useAuth();
  const [loginState, setLoginState] = useState<LoginState>({
    isLoading: false,
    error: null,
    success: false
  });

  const handleLogin = useCallback(async () => {
    setLoginState({ isLoading: true, error: null, success: false });
    
    try {
      await login();
      setLoginState({ isLoading: false, error: null, success: true });
      
      // Resetar sucesso após 2 segundos
      setTimeout(() => {
        setLoginState(prev => ({ ...prev, success: false }));
      }, 2000);
      
    } catch (error) {
      let errorMessage = 'Erro desconhecido ao fazer login';
      
      if (error instanceof Error) {
        if (error.message.includes('popup-closed-by-user')) {
          errorMessage = 'Login cancelado pelo usuário';
        } else if (error.message.includes('popup-blocked')) {
          errorMessage = 'Pop-up bloqueado. Permita pop-ups para este site';
        } else if (error.message.includes('network-request-failed')) {
          errorMessage = 'Erro de conexão. Verifique sua internet';
        } else {
          errorMessage = 'Erro ao conectar com o Google';
        }
      }
      
      setLoginState({ isLoading: false, error: errorMessage, success: false });
      
      // Limpar erro após 5 segundos
      setTimeout(() => {
        setLoginState(prev => ({ ...prev, error: null }));
      }, 5000);
    }
  }, [login]);

  const handleLogout = useCallback(async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  }, [logout]);

  const clearError = useCallback(() => {
    setLoginState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    // Estados
    currentUser,
    loading,
    isLoginLoading: loginState.isLoading,
    loginError: loginState.error,
    loginSuccess: loginState.success,
    
    // Ações
    handleLogin,
    handleLogout,
    clearError,
    
    // Helpers
    isAuthenticated: !!currentUser && !loading,
    userDisplayName: currentUser?.displayName || 'Usuário',
    userEmail: currentUser?.email || '',
    userPhoto: currentUser?.photoURL || null,
  };
};
