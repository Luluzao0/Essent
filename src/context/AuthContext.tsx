import React, { useEffect, useState } from 'react';
import { type User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';
import { AuthContext, type AuthContextType } from './AuthContextDefinition';
import { userProgressService } from '../services/firestoreService';

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Verificar se é o primeiro login e criar progresso se necessário
      if (user) {
        try {
          const existingProgress = await userProgressService.get(user.uid);
          if (!existingProgress) {
            await userProgressService.create(user.uid);
            console.log('✅ Progresso inicial criado para novo usuário');
          }
        } catch (error) {
          console.error('Erro ao criar progresso inicial do usuário:', error);
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: AuthContextType = {
    currentUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
