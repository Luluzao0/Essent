import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import {
  quotesService,
  videosService,
  userProgressService,
  favoritesService,
  meditationService,
  goalsService,
  type FirestoreQuote,
  type FirestoreVideo,
  type UserProgress,
  type UserFavorite,
  type MeditationSession,
  type WellnessGoal
} from '../services/firestoreService';

// Hook para quotes
export const useQuotes = (category?: string) => {
  const [quotes, setQuotes] = useState<FirestoreQuote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true);
        const data = category 
          ? await quotesService.getByCategory(category)
          : await quotesService.getAll();
        setQuotes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar quotes');
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
  }, [category]);

  const likeQuote = async (quoteId: string) => {
    try {
      await quotesService.updateLikes(quoteId);
      // Atualizar estado local
      setQuotes(prev => prev.map(quote => 
        quote.id === quoteId 
          ? { ...quote, likes: quote.likes + 1 }
          : quote
      ));
    } catch (err) {
      console.error('Erro ao curtir quote:', err);
    }
  };

  const getRandomQuote = async (): Promise<FirestoreQuote | null> => {
    try {
      return await quotesService.getRandom();
    } catch (err) {
      console.error('Erro ao buscar quote aleatória:', err);
      return null;
    }
  };

  return { quotes, loading, error, likeQuote, getRandomQuote };
};

// Hook para vídeos
export const useVideos = (category?: string) => {
  const [videos, setVideos] = useState<FirestoreVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const data = category 
          ? await videosService.getByCategory(category)
          : await videosService.getAll();
        setVideos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar vídeos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [category]);

  const watchVideo = async (videoId: string) => {
    try {
      await videosService.incrementViews(videoId);
      // Atualizar estado local
      setVideos(prev => prev.map(video => 
        video.id === videoId 
          ? { ...video, views: video.views + 1 }
          : video
      ));
    } catch (err) {
      console.error('Erro ao registrar visualização:', err);
    }
  };

  const getPopularVideos = async (limit?: number): Promise<FirestoreVideo[]> => {
    try {
      return await videosService.getPopular(limit);
    } catch (err) {
      console.error('Erro ao buscar vídeos populares:', err);
      return [];
    }
  };

  return { videos, loading, error, watchVideo, getPopularVideos };
};

// Hook para progresso do usuário
export const useUserProgress = () => {
  const { currentUser } = useAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) {
      setProgress(null);
      setLoading(false);
      return;
    }

    const fetchProgress = async () => {
      try {
        setLoading(true);
        let userProgress = await userProgressService.get(currentUser.uid);
        
        // Se não existe progresso, criar um novo
        if (!userProgress) {
          await userProgressService.create(currentUser.uid);
          userProgress = await userProgressService.get(currentUser.uid);
        }
        
        setProgress(userProgress);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar progresso');
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [currentUser]);

  const updateMeditationStats = async (minutes: number) => {
    if (!currentUser) return;
    
    try {
      await userProgressService.updateMeditationStats(currentUser.uid, minutes);
      // Recarregar progresso
      const updatedProgress = await userProgressService.get(currentUser.uid);
      setProgress(updatedProgress);
    } catch (err) {
      console.error('Erro ao atualizar estatísticas:', err);
    }
  };

  const updateStreak = async () => {
    if (!currentUser) return;
    
    try {
      await userProgressService.updateStreak(currentUser.uid);
      // Recarregar progresso
      const updatedProgress = await userProgressService.get(currentUser.uid);
      setProgress(updatedProgress);
    } catch (err) {
      console.error('Erro ao atualizar streak:', err);
    }
  };

  return { 
    progress, 
    loading, 
    error, 
    updateMeditationStats, 
    updateStreak 
  };
};

// Hook para favoritos
export const useFavorites = (itemType?: UserFavorite['itemType']) => {
  const { currentUser } = useAuth();
  const [favorites, setFavorites] = useState<UserFavorite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) {
      setFavorites([]);
      setLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const data = await favoritesService.getUserFavorites(currentUser.uid, itemType);
        setFavorites(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar favoritos');
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [currentUser, itemType]);

  const addFavorite = async (itemId: string, type: UserFavorite['itemType']) => {
    if (!currentUser) return;
    
    try {
      await favoritesService.add(currentUser.uid, itemId, type);
      // Recarregar favoritos
      const data = await favoritesService.getUserFavorites(currentUser.uid, itemType);
      setFavorites(data);
    } catch (err) {
      console.error('Erro ao adicionar favorito:', err);
    }
  };

  const removeFavorite = async (itemId: string) => {
    if (!currentUser) return;
    
    try {
      await favoritesService.remove(currentUser.uid, itemId);
      // Atualizar estado local
      setFavorites(prev => prev.filter(fav => fav.itemId !== itemId));
    } catch (err) {
      console.error('Erro ao remover favorito:', err);
    }
  };

  const isFavorite = async (itemId: string): Promise<boolean> => {
    if (!currentUser) return false;
    
    try {
      return await favoritesService.isFavorite(currentUser.uid, itemId);
    } catch (err) {
      console.error('Erro ao verificar favorito:', err);
      return false;
    }
  };

  return { 
    favorites, 
    loading, 
    error, 
    addFavorite, 
    removeFavorite, 
    isFavorite 
  };
};

// Hook para sessões de meditação
export const useMeditationSessions = () => {
  const { currentUser } = useAuth();
  const [sessions, setSessions] = useState<MeditationSession[]>([]);
  const [stats, setStats] = useState<{
    totalSessions: number;
    totalMinutes: number;
    avgMoodImprovement: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) {
      setSessions([]);
      setStats(null);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const [sessionsData, statsData] = await Promise.all([
          meditationService.getUserSessions(currentUser.uid),
          meditationService.getSessionStats(currentUser.uid)
        ]);
        setSessions(sessionsData);
        setStats(statsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar sessões');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);

  const recordSession = async (sessionData: Omit<MeditationSession, 'userId' | 'completedAt'>) => {
    if (!currentUser) return;
    
    try {
      await meditationService.recordSession({
        ...sessionData,
        userId: currentUser.uid
      });
      
      // Recarregar dados
      const [sessionsData, statsData] = await Promise.all([
        meditationService.getUserSessions(currentUser.uid),
        meditationService.getSessionStats(currentUser.uid)
      ]);
      setSessions(sessionsData);
      setStats(statsData);
    } catch (err) {
      console.error('Erro ao registrar sessão:', err);
    }
  };

  return { 
    sessions, 
    stats, 
    loading, 
    error, 
    recordSession 
  };
};

// Hook para metas
export const useWellnessGoals = (includeCompleted: boolean = false) => {
  const { currentUser } = useAuth();
  const [goals, setGoals] = useState<WellnessGoal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) {
      setGoals([]);
      setLoading(false);
      return;
    }

    const fetchGoals = async () => {
      try {
        setLoading(true);
        const data = await goalsService.getUserGoals(currentUser.uid, includeCompleted);
        setGoals(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar metas');
      } finally {
        setLoading(false);
      }
    };

    fetchGoals();
  }, [currentUser, includeCompleted]);

  const createGoal = async (goalData: Omit<WellnessGoal, 'userId' | 'createdAt' | 'isCompleted'>) => {
    if (!currentUser) return;
    
    try {
      await goalsService.create({
        ...goalData,
        userId: currentUser.uid
      });
      
      // Recarregar metas
      const data = await goalsService.getUserGoals(currentUser.uid, includeCompleted);
      setGoals(data);
    } catch (err) {
      console.error('Erro ao criar meta:', err);
    }
  };

  const updateGoalProgress = async (goalId: string, newValue: number) => {
    try {
      await goalsService.updateProgress(goalId, newValue);
      
      // Atualizar estado local
      setGoals(prev => prev.map(goal => 
        goal.id === goalId 
          ? { 
              ...goal, 
              currentValue: newValue,
              isCompleted: newValue >= goal.targetValue
            }
          : goal
      ));
    } catch (err) {
      console.error('Erro ao atualizar progresso da meta:', err);
    }
  };

  const deleteGoal = async (goalId: string) => {
    try {
      await goalsService.delete(goalId);
      
      // Atualizar estado local
      setGoals(prev => prev.filter(goal => goal.id !== goalId));
    } catch (err) {
      console.error('Erro ao deletar meta:', err);
    }
  };

  return { 
    goals, 
    loading, 
    error, 
    createGoal, 
    updateGoalProgress, 
    deleteGoal 
  };
};
