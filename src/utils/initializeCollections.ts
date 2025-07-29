import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

// Função para criar as coleções vazias no Firestore
export const initializeFirestoreCollections = async () => {
  try {
    console.log('🏗️ Criando estrutura de coleções no Firestore...');

    // Criar documento placeholder em cada coleção para inicializá-las
    const collections = [
      { name: 'quotes', placeholderDoc: 'placeholder' },
      { name: 'videos', placeholderDoc: 'placeholder' },
      { name: 'images', placeholderDoc: 'placeholder' },
      { name: 'userProgress', placeholderDoc: 'placeholder' },
      { name: 'userFavorites', placeholderDoc: 'placeholder' },
      { name: 'meditationSessions', placeholderDoc: 'placeholder' },
      { name: 'wellnessGoals', placeholderDoc: 'placeholder' }
    ];

    for (const col of collections) {
      const colRef = collection(db, col.name);
      const docRef = doc(colRef, col.placeholderDoc);
      
      await setDoc(docRef, {
        _placeholder: true,
        createdAt: new Date(),
        description: `Documento placeholder para inicializar a coleção ${col.name}`
      });
      
      console.log(`✅ Coleção '${col.name}' criada`);
    }

    console.log('🎉 Todas as coleções foram criadas com sucesso!');
    console.log('📋 Agora você pode popular os dados usando o seeder.');
    
    return true;
  } catch (error) {
    console.error('❌ Erro ao criar coleções:', error);
    return false;
  }
};

// Função para remover documentos placeholder após popular dados reais
export const removePlaceholders = async () => {
  try {
    console.log('🧹 Removendo documentos placeholder...');
    
    const collections = ['quotes', 'videos', 'images', 'userProgress', 'userFavorites', 'meditationSessions', 'wellnessGoals'];
    
    for (const colName of collections) {
      const docRef = doc(db, colName, 'placeholder');
      try {
        await setDoc(docRef, {}, { merge: false }); // Remove o documento
        console.log(`🗑️ Placeholder removido de '${colName}'`);
      } catch (err) {
        console.log(`ℹ️ Placeholder não encontrado em '${colName}' (ok)`);
      }
    }
    
    console.log('✨ Cleanup concluído!');
    return true;
  } catch (error) {
    console.error('❌ Erro ao remover placeholders:', error);
    return false;
  }
};
