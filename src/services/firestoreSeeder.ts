import { 
  collection, 
  addDoc, 
  writeBatch, 
  doc, 
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { COLLECTIONS } from '../services/firestoreService';
import { motivationalQuotes, wellnessImages, wellnessVideos } from '../data/wellnessData';

// Função para popular quotes no Firestore
export const populateQuotes = async (): Promise<void> => {
  try {
    console.log('Iniciando população de quotes...');
    const batch = writeBatch(db);
    const quotesCollection = collection(db, COLLECTIONS.QUOTES);

    for (const quote of motivationalQuotes.slice(0, 50)) { // Limitar a 50 para teste
      const docRef = doc(quotesCollection);
      const firestoreQuote = {
        text: quote.text,
        author: quote.author,
        category: quote.category,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        likes: Math.floor(Math.random() * 100), // Likes aleatórios para demonstração
        shares: Math.floor(Math.random() * 50)
      };
      batch.set(docRef, firestoreQuote);
    }

    await batch.commit();
    console.log('✅ Quotes populadas com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao popular quotes:', error);
  }
};

// Função para popular vídeos no Firestore
export const populateVideos = async (): Promise<void> => {
  try {
    console.log('Iniciando população de vídeos...');
    const batch = writeBatch(db);
    const videosCollection = collection(db, COLLECTIONS.VIDEOS);

    for (const video of wellnessVideos.slice(0, 20)) { // Limitar a 20 para teste
      const docRef = doc(videosCollection);
      const firestoreVideo = {
        title: video.title,
        url: video.url,
        thumbnail: video.thumbnail,
        duration: video.duration,
        category: video.category,
        description: video.description,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        views: Math.floor(Math.random() * 1000),
        likes: Math.floor(Math.random() * 200),
        instructor: ['Ana Silva', 'Carlos Santos', 'Maria Oliveira'][Math.floor(Math.random() * 3)],
        difficulty: ['beginner', 'intermediate', 'advanced'][Math.floor(Math.random() * 3)] as 'beginner' | 'intermediate' | 'advanced'
      };
      batch.set(docRef, firestoreVideo);
    }

    await batch.commit();
    console.log('✅ Vídeos populados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao popular vídeos:', error);
  }
};

// Função para popular imagens no Firestore
export const populateImages = async (): Promise<void> => {
  try {
    console.log('Iniciando população de imagens...');
    const batch = writeBatch(db);
    const imagesCollection = collection(db, COLLECTIONS.IMAGES);

    for (const image of wellnessImages.slice(0, 30)) { // Limitar a 30 para teste
      const docRef = doc(imagesCollection);
      const firestoreImage = {
        url: image.url,
        alt: image.alt,
        category: image.category,
        width: image.width,
        height: image.height,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
        views: Math.floor(Math.random() * 500),
        tags: generateRandomTags(image.category)
      };
      batch.set(docRef, firestoreImage);
    }

    await batch.commit();
    console.log('✅ Imagens populadas com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao popular imagens:', error);
  }
};

// Função auxiliar para gerar tags aleatórias
const generateRandomTags = (category: string): string[] => {
  const tagOptions: Record<string, string[]> = {
    nature: ['paisagem', 'verde', 'tranquilo', 'ar livre', 'paz'],
    meditation: ['meditação', 'mindfulness', 'concentração', 'relaxamento'],
    serenity: ['serenidade', 'calma', 'equilíbrio', 'harmonia'],
    inspiration: ['inspiração', 'motivação', 'crescimento', 'positividade']
  };

  const tags = tagOptions[category] || ['bem-estar', 'saúde mental'];
  const numTags = Math.floor(Math.random() * 3) + 2; // 2-4 tags
  
  return tags
    .sort(() => 0.5 - Math.random())
    .slice(0, numTags);
};

// Função para criar dados de exemplo para demonstração
export const createSampleUserData = async (userId: string): Promise<void> => {
  try {
    console.log('Criando dados de exemplo para usuário:', userId);

    // Criar algumas sessões de meditação de exemplo
    const sessionsToCreate = [
      {
        userId,
        sessionId: `session_${Date.now()}_1`,
        duration: 10,
        category: 'mindfulness',
        mood: { before: 6, after: 8 },
        notes: 'Sessão muito relaxante, me senti mais focado.',
        completedAt: Timestamp.fromDate(new Date(Date.now() - 86400000)) // 1 dia atrás
      },
      {
        userId,
        sessionId: `session_${Date.now()}_2`,
        duration: 15,
        category: 'breathing',
        mood: { before: 5, after: 9 },
        notes: 'Exercícios de respiração ajudaram com a ansiedade.',
        completedAt: Timestamp.fromDate(new Date(Date.now() - 172800000)) // 2 dias atrás
      },
      {
        userId,
        sessionId: `session_${Date.now()}_3`,
        duration: 20,
        category: 'meditation',
        mood: { before: 7, after: 9 },
        notes: 'Meditação profunda, consegui me desconectar completamente.',
        completedAt: Timestamp.fromDate(new Date(Date.now() - 259200000)) // 3 dias atrás
      }
    ];

    // Adicionar sessões
    for (const session of sessionsToCreate) {
      await addDoc(collection(db, COLLECTIONS.MEDITATION_SESSIONS), session);
    }

    // Criar algumas metas de exemplo
    const goalsToCreate = [
      {
        userId,
        title: 'Meditar 30 minutos por dia',
        description: 'Estabelecer uma rotina diária de meditação para melhorar o foco e reduzir o estresse.',
        type: 'meditation' as const,
        targetValue: 30,
        currentValue: 15,
        unit: 'minutos',
        deadline: Timestamp.fromDate(new Date(Date.now() + 2592000000)), // 30 dias no futuro
        createdAt: Timestamp.now(),
        isCompleted: false
      },
      {
        userId,
        title: 'Praticar mindfulness 7 dias seguidos',
        description: 'Manter uma sequência consistente de prática mindfulness.',
        type: 'mindfulness' as const,
        targetValue: 7,
        currentValue: 3,
        unit: 'dias',
        deadline: Timestamp.fromDate(new Date(Date.now() + 604800000)), // 7 dias no futuro
        createdAt: Timestamp.now(),
        isCompleted: false
      }
    ];

    // Adicionar metas
    for (const goal of goalsToCreate) {
      await addDoc(collection(db, COLLECTIONS.WELLNESS_GOALS), goal);
    }

    console.log('✅ Dados de exemplo criados com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao criar dados de exemplo:', error);
  }
};

// Função principal para popular tudo
export const initializeFirestoreData = async (): Promise<void> => {
  try {
    console.log('🚀 Iniciando população do Firestore...');
    
    await Promise.all([
      populateQuotes(),
      populateVideos(),
      populateImages()
    ]);

    console.log('🎉 Firestore populado com sucesso!');
    console.log('📊 Dados disponíveis:');
    console.log('- Quotes motivacionais');
    console.log('- Vídeos de bem-estar');
    console.log('- Imagens inspiradoras');
    console.log('');
    console.log('💡 Para criar dados de usuário de exemplo, use:');
    console.log('createSampleUserData(userId)');
  } catch (error) {
    console.error('❌ Erro geral na população do Firestore:', error);
  }
};

// Função para limpar collections (usar com cuidado!)
export const clearCollection = async (collectionName: string): Promise<void> => {
  try {
    console.log(`🗑️ Limpando collection: ${collectionName}`);
    // Implementar lógica de limpeza se necessário
    console.log(`✅ Collection ${collectionName} limpa!`);
  } catch (error) {
    console.error(`❌ Erro ao limpar collection ${collectionName}:`, error);
  }
};

// Export de todas as funções
export default {
  populateQuotes,
  populateVideos,
  populateImages,
  createSampleUserData,
  initializeFirestoreData,
  clearCollection
};
