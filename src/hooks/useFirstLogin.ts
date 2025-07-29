import { useEffect, useState } from 'react';
import { useAuth } from './useAuth';

export const useFirstLogin = () => {
  const { currentUser } = useAuth();
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      const hasVisitedKey = `essent_visited_${currentUser.uid}`;
      const hasVisited = localStorage.getItem(hasVisitedKey);
      
      if (!hasVisited) {
        setIsFirstLogin(true);
        localStorage.setItem(hasVisitedKey, 'true');
      }
    }
    setIsLoading(false);
  }, [currentUser]);

  return { isFirstLogin, isLoading, setIsFirstLogin };
};
