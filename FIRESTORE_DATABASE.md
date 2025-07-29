# 🔥 Firestore Database - Estrutura Completa do Essent

## 📊 Visão Geral

O Essent utiliza o Cloud Firestore como banco de dados principal, organizando todas as informações de bem-estar em coleções dinâmicas e escaláveis.

## 🗂️ Estrutura das Coleções

### 1. **motivationalQuotes** - Frases Motivacionais
```typescript
interface FirestoreQuote {
  id: string;
  text: string;
  author: string;
  category: 'motivation' | 'peace' | 'growth' | 'resilience' | 'mindfulness' | 'gratitude' | 'self-love' | 'courage' | 'wisdom' | 'hope';
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likes: number;
  shares: number;
}
```

### 2. **wellnessVideos** - Vídeos de Bem-estar
```typescript
interface FirestoreVideo {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  duration: string;
  category: 'meditation' | 'breathing' | 'relaxation' | 'mindfulness';
  description: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  views: number;
  likes: number;
  instructor?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
```

### 3. **wellnessImages** - Imagens Inspiradoras
```typescript
interface FirestoreImage {
  id: string;
  url: string;
  alt: string;
  category: 'nature' | 'meditation' | 'serenity' | 'inspiration';
  width: number;
  height: number;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  views: number;
  tags: string[];
}
```

### 4. **userProgress** - Progresso do Usuário
```typescript
interface UserProgress {
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
```

### 5. **userFavorites** - Favoritos do Usuário
```typescript
interface UserFavorite {
  id?: string;
  userId: string;
  itemId: string;
  itemType: 'quote' | 'image' | 'video' | 'meditation';
  addedAt: Timestamp;
}
```

### 6. **meditationSessions** - Sessões de Meditação
```typescript
interface MeditationSession {
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
```

### 7. **wellnessGoals** - Metas de Bem-estar
```typescript
interface WellnessGoal {
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
```

## 🛠️ Serviços Disponíveis

### **quotesService**
- `getAll()` - Buscar todas as quotes
- `getByCategory(category)` - Buscar por categoria
- `getRandom()` - Quote aleatória
- `add(quote)` - Adicionar nova quote
- `updateLikes(quoteId)` - Curtir quote

### **videosService**
- `getAll()` - Todos os vídeos
- `getByCategory(category)` - Por categoria
- `getPopular(limit)` - Vídeos populares
- `incrementViews(videoId)` - Registrar visualização

### **userProgressService**
- `get(userId)` - Progresso do usuário
- `create(userId, initialData)` - Criar progresso
- `updateMeditationStats(userId, minutes)` - Atualizar estatísticas
- `updateStreak(userId)` - Atualizar sequência

### **favoritesService**
- `add(userId, itemId, itemType)` - Adicionar favorito
- `remove(userId, itemId)` - Remover favorito
- `getUserFavorites(userId, itemType?)` - Listar favoritos
- `isFavorite(userId, itemId)` - Verificar se é favorito

### **meditationService**
- `recordSession(session)` - Registrar sessão
- `getUserSessions(userId, limit)` - Sessões do usuário
- `getSessionStats(userId, days)` - Estatísticas de sessões

### **goalsService**
- `create(goal)` - Criar meta
- `getUserGoals(userId, includeCompleted)` - Metas do usuário
- `updateProgress(goalId, newValue)` - Atualizar progresso
- `delete(goalId)` - Deletar meta

## 🎣 Hooks Personalizados

### **useQuotes(category?)**
```typescript
const { quotes, loading, error, likeQuote, getRandomQuote } = useQuotes('motivation');
```

### **useVideos(category?)**
```typescript
const { videos, loading, error, watchVideo, getPopularVideos } = useVideos('meditation');
```

### **useUserProgress()**
```typescript
const { progress, loading, error, updateMeditationStats, updateStreak } = useUserProgress();
```

### **useFavorites(itemType?)**
```typescript
const { favorites, loading, error, addFavorite, removeFavorite, isFavorite } = useFavorites('quote');
```

### **useMeditationSessions()**
```typescript
const { sessions, stats, loading, error, recordSession } = useMeditationSessions();
```

### **useWellnessGoals(includeCompleted?)**
```typescript
const { goals, loading, error, createGoal, updateGoalProgress, deleteGoal } = useWellnessGoals();
```

## 🚀 Como Usar

### 1. **Configuração Inicial**
```typescript
import { initializeFirestoreData } from '../services/firestoreSeeder';

// Popular dados iniciais (apenas em desenvolvimento)
await initializeFirestoreData();
```

### 2. **Usando os Hooks**
```typescript
import { useQuotes, useUserProgress } from '../hooks/useFirestore';

function MyComponent() {
  const { quotes, likeQuote } = useQuotes('motivation');
  const { progress, updateMeditationStats } = useUserProgress();

  const handleLikeQuote = (quoteId: string) => {
    likeQuote(quoteId);
  };

  const handleCompleteSession = (minutes: number) => {
    updateMeditationStats(minutes);
  };

  return (
    // Seu componente aqui
  );
}
```

### 3. **Registrando uma Sessão de Meditação**
```typescript
import { useMeditationSessions } from '../hooks/useFirestore';

const { recordSession } = useMeditationSessions();

const handleSessionComplete = async () => {
  await recordSession({
    sessionId: `session_${Date.now()}`,
    duration: 15,
    category: 'mindfulness',
    mood: {
      before: 6,
      after: 8
    },
    notes: 'Sessão muito relaxante!'
  });
};
```

### 4. **Criando uma Meta**
```typescript
import { useWellnessGoals } from '../hooks/useFirestore';

const { createGoal } = useWellnessGoals();

const handleCreateGoal = async () => {
  await createGoal({
    title: 'Meditar 30 minutos por dia',
    description: 'Estabelecer uma rotina diária de meditação',
    type: 'meditation',
    targetValue: 30,
    currentValue: 0,
    unit: 'minutos',
    deadline: Timestamp.fromDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000))
  });
};
```

## 🎨 Interface de Administração

O painel de administração está disponível em **Dashboard > Admin DB** e permite:

- ✅ Popular todas as coleções com dados de exemplo
- ✅ Popular quotes motivacionais
- ✅ Popular vídeos de bem-estar
- ✅ Popular imagens inspiradoras
- ✅ Criar dados de exemplo para usuário logado
- ✅ Visualizar logs de atividade em tempo real

## 🔐 Segurança e Regras

### Regras do Firestore (exemplo)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Quotes públicas (leitura livre)
    match /motivationalQuotes/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Dados do usuário (acesso restrito)
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /userFavorites/{document} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
    
    match /meditationSessions/{document} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
    
    match /wellnessGoals/{document} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

## 📈 Principais Funcionalidades

### **Sistema de Progresso**
- ✅ Níveis baseados em experiência
- ✅ Sistema de sequências (streaks)
- ✅ Badges e conquistas
- ✅ Estatísticas detalhadas

### **Sistema de Favoritos**
- ✅ Favoritar quotes, vídeos, imagens
- ✅ Listas personalizadas
- ✅ Sincronização em tempo real

### **Sistema de Metas**
- ✅ Metas personalizáveis
- ✅ Acompanhamento de progresso
- ✅ Diferentes tipos de metas

### **Analytics de Humor**
- ✅ Registro antes/depois das sessões
- ✅ Análise de melhoria do humor
- ✅ Relatórios de bem-estar

## 🔄 Fluxo de Dados

1. **Login do Usuário** → Criação automática do progresso inicial
2. **Sessão de Meditação** → Atualização de estatísticas + progresso
3. **Interações** → Curtidas, favoritos, visualizações
4. **Metas** → Criação, atualização e conclusão
5. **Dashboard** → Visualização em tempo real de todos os dados

## 🎯 Próximos Passos

- [ ] Implementar notificações push
- [ ] Sistema de recomendações IA
- [ ] Análise de padrões de uso
- [ ] Integração com wearables
- [ ] Compartilhamento social
- [ ] Modo offline

---

## ⚡ Status: ✅ FIRESTORE COMPLETAMENTE CONFIGURADO

O banco de dados está **100% funcional** com:
- 🔥 7 coleções principais
- 🛠️ Serviços completos
- 🎣 Hooks personalizados
- 🎨 Interface de administração
- 🔐 Estrutura de segurança
- 📊 Sistema de analytics

**🚀 O Essent agora tem um banco de dados robusto e escalável!**
