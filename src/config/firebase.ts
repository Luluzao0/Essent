import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Configuração do Firebase
// IMPORTANTE: Substitua com suas próprias configurações do Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCKD4Mq_X6NGo-LGaNM2ZEp9p3jO8b1zjg",
  authDomain: "essent-8689b.firebaseapp.com",
  projectId: "essent-8689b",
  storageBucket: "essent-8689b.firebasestorage.app",
  messagingSenderId: "763662394966",
  appId: "1:763662394966:web:ad4b93cb12de2f16193df7",
  measurementId: "G-BBGCJG5M64"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Configurar autenticação
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Configurar provedor do Google
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app;
