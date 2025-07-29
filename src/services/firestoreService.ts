import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  Timestamp,
  writeBatch,
  setDoc
} from 'firebase/firestore';
import { db } from '../config/firebase';
import type { MotivationalQuote, WellnessImage, WellnessVideo } from '../data/wellnessData';

// Coleções do Firestore
export const COLLECTIONS = {
  QUOTES: 'motivationalQuotes',
  IMAGES: 'wellnessImages',
  VIDEOS: 'wellnessVideos',
  RECOMMENDATIONS: 'dailyRecommendations',
  USER_PROGRESS: 'userProgress',
  USER_FAVORITES: 'userFavorites',
  MEDITATION_SESSIONS: 'meditationSessions',
  WELLNESS_GOALS: 'wellnessGoals'
} as const;

// Interfaces estendidas para Firestore
export interface FirestoreQuote extends Omit<MotivationalQuote, 'id'> {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likes: number;
  shares: number;
}

export interface FirestoreImage extends Omit<WellnessImage, 'id'> {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  views: number;
  tags: string[];
}

export interface FirestoreVideo extends Omit<WellnessVideo, 'id'> {
  id: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  views: number;
  likes: number;
  instructor?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface UserProgress {
  id?: string;
  userId: string;
  meditationMinutes: number;
  sessionsCompleted: number;
  currentStreak: number;
  longestStreak: number;
  level: number;
  experience: number;
  badges: string[];
  joinDate: Timestamp;
  lastActivity: Timestamp;
  preferences: {
    favoriteCategories: string[];
    reminderTime?: string;
    language: string;
  };
}

export interface UserFavorite {
  id?: string;
  userId: string;
  itemId: string;
  itemType: 'quote' | 'image' | 'video' | 'meditation';
  addedAt: Timestamp;
}

export interface MeditationSession {
  id?: string;
  userId: string;
  sessionId: string;
  duration: number; // em minutos
  category: string;
  completedAt: Timestamp;
  mood: {
    before: number; // 1-10
    after: number; // 1-10
  };
  notes?: string;
}

export interface WellnessGoal {
  id?: string;
  userId: string;
  title: string;
  description: string;
  type: 'meditation' | 'mindfulness' | 'exercise' | 'sleep' | 'custom';
  targetValue: number;
  currentValue: number;
  unit: string;
  deadline: Timestamp;
  createdAt: Timestamp;
  isCompleted: boolean;
}

// === SERVIÇOS DE QUOTES ===
export const quotesService = {
  // Buscar todas as quotes
  async getAll(): Promise<FirestoreQuote[]> {
    const snapshot = await getDocs(collection(db, COLLECTIONS.QUOTES));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as FirestoreQuote));
  },

  // Buscar quotes por categoria
  async getByCategory(category: string): Promise<FirestoreQuote[]> {
    const q = query(
      collection(db, COLLECTIONS.QUOTES),
      where('category', '==', category),
      orderBy('likes', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as FirestoreQuote));
  },

  // Buscar quote aleatória
  async getRandom(): Promise<FirestoreQuote | null> {
    const quotes = await this.getAll();
    if (quotes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  },

  // Adicionar nova quote
  async add(quote: Omit<FirestoreQuote, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
    const now = Timestamp.now();
    const docRef = await addDoc(collection(db, COLLECTIONS.QUOTES), {
      ...quote,
      createdAt: now,
      updatedAt: now
    });
    return docRef.id;
  },

  // Atualizar likes de uma quote
  async updateLikes(quoteId: string, increment: number = 1): Promise<void> {
    const docRef = doc(db, COLLECTIONS.QUOTES, quoteId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const currentLikes = docSnap.data().likes || 0;
      await updateDoc(docRef, {
        likes: currentLikes + increment,
        updatedAt: Timestamp.now()
      });
    }
  }
};

// === SERVIÇOS DE VÍDEOS ===
export const videosService = {
  async getAll(): Promise<FirestoreVideo[]> {
    const snapshot = await getDocs(collection(db, COLLECTIONS.VIDEOS));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as FirestoreVideo));
  },

  async getByCategory(category: string): Promise<FirestoreVideo[]> {
    const q = query(
      collection(db, COLLECTIONS.VIDEOS),
      where('category', '==', category),
      orderBy('views', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as FirestoreVideo));
  },

  async getPopular(limitCount: number = 10): Promise<FirestoreVideo[]> {
    const q = query(
      collection(db, COLLECTIONS.VIDEOS),
      orderBy('views', 'desc'),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as FirestoreVideo));
  },

  async incrementViews(videoId: string): Promise<void> {
    const docRef = doc(db, COLLECTIONS.VIDEOS, videoId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const currentViews = docSnap.data().views || 0;
      await updateDoc(docRef, {
        views: currentViews + 1,
        updatedAt: Timestamp.now()
      });
    }
  }
};

// === SERVIÇOS DE PROGRESSO DO USUÁRIO ===
export const userProgressService = {
  async get(userId: string): Promise<UserProgress | null> {
    const docRef = doc(db, COLLECTIONS.USER_PROGRESS, userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() as UserProgress : null;
  },

  async create(userId: string, initialData?: Partial<UserProgress>): Promise<void> {
    const now = Timestamp.now();
    const defaultProgress: UserProgress = {
      userId,
      meditationMinutes: 0,
      sessionsCompleted: 0,
      currentStreak: 0,
      longestStreak: 0,
      level: 1,
      experience: 0,
      badges: [],
      joinDate: now,
      lastActivity: now,
      preferences: {
        favoriteCategories: [],
        language: 'pt-BR'
      },
      ...initialData
    };
    
    await setDoc(doc(db, COLLECTIONS.USER_PROGRESS, userId), defaultProgress);
  },

  async updateMeditationStats(userId: string, minutesCompleted: number): Promise<void> {
    const userProgress = await this.get(userId);
    if (!userProgress) return;

    const newMinutes = userProgress.meditationMinutes + minutesCompleted;
    const newSessions = userProgress.sessionsCompleted + 1;
    const newExp = userProgress.experience + (minutesCompleted * 10);
    const newLevel = Math.floor(newExp / 1000) + 1;

    await updateDoc(doc(db, COLLECTIONS.USER_PROGRESS, userId), {
      meditationMinutes: newMinutes,
      sessionsCompleted: newSessions,
      experience: newExp,
      level: newLevel,
      lastActivity: Timestamp.now()
    });
  },

  async updateStreak(userId: string): Promise<void> {
    const userProgress = await this.get(userId);
    if (!userProgress) return;

    const lastActivity = userProgress.lastActivity.toDate();
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - lastActivity.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let newStreak = userProgress.currentStreak;
    if (diffDays === 1) {
      newStreak += 1;
    } else if (diffDays > 1) {
      newStreak = 1;
    }

    const longestStreak = Math.max(userProgress.longestStreak, newStreak);

    await updateDoc(doc(db, COLLECTIONS.USER_PROGRESS, userId), {
      currentStreak: newStreak,
      longestStreak,
      lastActivity: Timestamp.now()
    });
  }
};

// === SERVIÇOS DE FAVORITOS ===
export const favoritesService = {
  async add(userId: string, itemId: string, itemType: UserFavorite['itemType']): Promise<void> {
    await addDoc(collection(db, COLLECTIONS.USER_FAVORITES), {
      userId,
      itemId,
      itemType,
      addedAt: Timestamp.now()
    });
  },

  async remove(userId: string, itemId: string): Promise<void> {
    const q = query(
      collection(db, COLLECTIONS.USER_FAVORITES),
      where('userId', '==', userId),
      where('itemId', '==', itemId)
    );
    const snapshot = await getDocs(q);
    const batch = writeBatch(db);
    snapshot.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();
  },

  async getUserFavorites(userId: string, itemType?: UserFavorite['itemType']): Promise<UserFavorite[]> {
    let q = query(
      collection(db, COLLECTIONS.USER_FAVORITES),
      where('userId', '==', userId),
      orderBy('addedAt', 'desc')
    );

    if (itemType) {
      q = query(q, where('itemType', '==', itemType));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as UserFavorite));
  },

  async isFavorite(userId: string, itemId: string): Promise<boolean> {
    const q = query(
      collection(db, COLLECTIONS.USER_FAVORITES),
      where('userId', '==', userId),
      where('itemId', '==', itemId)
    );
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  }
};

// === SERVIÇOS DE SESSÕES DE MEDITAÇÃO ===
export const meditationService = {
  async recordSession(session: Omit<MeditationSession, 'completedAt'>): Promise<void> {
    await addDoc(collection(db, COLLECTIONS.MEDITATION_SESSIONS), {
      ...session,
      completedAt: Timestamp.now()
    });

    // Atualizar progresso do usuário
    await userProgressService.updateMeditationStats(session.userId, session.duration);
    await userProgressService.updateStreak(session.userId);
  },

  async getUserSessions(userId: string, limitCount: number = 50): Promise<MeditationSession[]> {
    const q = query(
      collection(db, COLLECTIONS.MEDITATION_SESSIONS),
      where('userId', '==', userId),
      orderBy('completedAt', 'desc'),
      limit(limitCount)
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => doc.data() as MeditationSession);
  },

  async getSessionStats(userId: string, days: number = 30): Promise<{
    totalSessions: number;
    totalMinutes: number;
    avgMoodImprovement: number;
  }> {
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - days);
    
    const q = query(
      collection(db, COLLECTIONS.MEDITATION_SESSIONS),
      where('userId', '==', userId),
      where('completedAt', '>=', Timestamp.fromDate(daysAgo))
    );
    
    const snapshot = await getDocs(q);
    const sessions = snapshot.docs.map(doc => doc.data() as MeditationSession);
    
    const totalSessions = sessions.length;
    const totalMinutes = sessions.reduce((sum, session) => sum + session.duration, 0);
    const avgMoodImprovement = sessions.reduce((sum, session) => {
      return sum + (session.mood.after - session.mood.before);
    }, 0) / totalSessions || 0;

    return { totalSessions, totalMinutes, avgMoodImprovement };
  }
};

// === SERVIÇOS DE METAS ===
export const goalsService = {
  async create(goal: Omit<WellnessGoal, 'createdAt' | 'isCompleted'>): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTIONS.WELLNESS_GOALS), {
      ...goal,
      createdAt: Timestamp.now(),
      isCompleted: false
    });
    return docRef.id;
  },

  async getUserGoals(userId: string, includeCompleted: boolean = false): Promise<WellnessGoal[]> {
    let q = query(
      collection(db, COLLECTIONS.WELLNESS_GOALS),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );

    if (!includeCompleted) {
      q = query(q, where('isCompleted', '==', false));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as WellnessGoal));
  },

  async updateProgress(goalId: string, newValue: number): Promise<void> {
    const docRef = doc(db, COLLECTIONS.WELLNESS_GOALS, goalId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const goal = docSnap.data() as WellnessGoal;
      const isCompleted = newValue >= goal.targetValue;
      
      await updateDoc(docRef, {
        currentValue: newValue,
        isCompleted
      });
    }
  },

  async delete(goalId: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTIONS.WELLNESS_GOALS, goalId));
  }
};

// === FUNÇÃO PARA INICIALIZAR DADOS PADRÃO ===
export const initializeDefaultData = async (): Promise<void> => {
  // Esta função pode ser usada para popular o Firestore com dados iniciais
  // Você pode importar dados do wellnessData.ts e adicionar ao Firestore
  console.log('Inicializando dados padrão no Firestore...');
  // Implementar conforme necessário
};
