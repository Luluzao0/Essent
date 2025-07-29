import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Trash2, Users, Quote, Video, Image } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { 
  initializeFirestoreData, 
  populateQuotes, 
  populateVideos, 
  populateImages,
  createSampleUserData 
} from '../../services/firestoreSeeder';
import { initializeFirestoreCollections } from '../../utils/initializeCollections';
import styles from './FirestoreAdmin.module.css';

const FirestoreAdmin: React.FC = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev.slice(-9), `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const handleInitializeCollections = async () => {
    setLoading('collections');
    addLog('Criando estrutura de coleções...');
    try {
      await initializeFirestoreCollections();
      addLog('✅ Coleções criadas! Agora você pode popular os dados.');
    } catch (error) {
      addLog(`❌ Erro ao criar coleções: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(null);
    }
  };

  const handleInitializeAll = async () => {
    setLoading('all');
    addLog('Iniciando população completa do Firestore...');
    try {
      await initializeFirestoreData();
      addLog('✅ Firestore populado com sucesso!');
    } catch (error) {
      addLog(`❌ Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(null);
    }
  };

  const handlePopulateQuotes = async () => {
    setLoading('quotes');
    addLog('Populando quotes...');
    try {
      await populateQuotes();
      addLog('✅ Quotes populadas!');
    } catch (error) {
      addLog(`❌ Erro nas quotes: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(null);
    }
  };

  const handlePopulateVideos = async () => {
    setLoading('videos');
    addLog('Populando vídeos...');
    try {
      await populateVideos();
      addLog('✅ Vídeos populados!');
    } catch (error) {
      addLog(`❌ Erro nos vídeos: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(null);
    }
  };

  const handlePopulateImages = async () => {
    setLoading('images');
    addLog('Populando imagens...');
    try {
      await populateImages();
      addLog('✅ Imagens populadas!');
    } catch (error) {
      addLog(`❌ Erro nas imagens: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(null);
    }
  };

  const handleCreateUserData = async () => {
    if (!currentUser) {
      addLog('❌ Usuário não logado!');
      return;
    }

    setLoading('userdata');
    addLog('Criando dados de exemplo para usuário...');
    try {
      await createSampleUserData(currentUser.uid);
      addLog('✅ Dados de usuário criados!');
    } catch (error) {
      addLog(`❌ Erro nos dados do usuário: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setLoading(null);
    }
  };

  const adminActions = [
    {
      id: 'collections',
      title: 'Criar Coleções',
      description: 'Inicializa estrutura do DB',
      icon: Database,
      color: 'info',
      action: handleInitializeCollections
    },
    {
      id: 'all',
      title: 'Inicializar Tudo',
      description: 'Popula todas as collections',
      icon: Database,
      color: 'primary',
      action: handleInitializeAll
    },
    {
      id: 'quotes',
      title: 'Popular Quotes',
      description: 'Adiciona quotes motivacionais',
      icon: Quote,
      color: 'secondary',
      action: handlePopulateQuotes
    },
    {
      id: 'videos',
      title: 'Popular Vídeos',
      description: 'Adiciona vídeos de bem-estar',
      icon: Video,
      color: 'accent',
      action: handlePopulateVideos
    },
    {
      id: 'images',
      title: 'Popular Imagens',
      description: 'Adiciona imagens inspiradoras',
      icon: Image,
      color: 'success',
      action: handlePopulateImages
    },
    {
      id: 'userdata',
      title: 'Dados do Usuário',
      description: 'Cria dados de exemplo',
      icon: Users,
      color: 'warning',
      action: handleCreateUserData,
      disabled: !currentUser
    }
  ];

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Database size={24} />
          Administração do Firestore
        </h2>
        <p className={styles.subtitle}>
          Ferramentas para popular e gerenciar dados do banco
        </p>
      </div>

      <div className={styles.actionsGrid}>
        {adminActions.map((action, index) => (
          <motion.button
            key={action.id}
            className={`${styles.actionCard} ${styles[action.color]} ${
              action.disabled ? styles.disabled : ''
            }`}
            onClick={action.action}
            disabled={loading !== null || action.disabled}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={!action.disabled && loading === null ? { y: -4, scale: 1.02 } : {}}
            whileTap={!action.disabled && loading === null ? { scale: 0.98 } : {}}
          >
            <div className={styles.actionIcon}>
              {loading === action.id ? (
                <div className={styles.spinner} />
              ) : (
                <action.icon size={24} />
              )}
            </div>
            <div className={styles.actionInfo}>
              <h3 className={styles.actionTitle}>{action.title}</h3>
              <p className={styles.actionDescription}>{action.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      {logs.length > 0 && (
        <motion.div
          className={styles.logsSection}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <h3 className={styles.logsTitle}>Logs de Atividade</h3>
          <div className={styles.logsContainer}>
            {logs.map((log, index) => (
              <motion.div
                key={index}
                className={styles.logEntry}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                {log}
              </motion.div>
            ))}
          </div>
          <button 
            className={styles.clearLogsBtn}
            onClick={() => setLogs([])}
          >
            <Trash2 size={16} />
            Limpar Logs
          </button>
        </motion.div>
      )}

      <div className={styles.infoSection}>
        <h3 className={styles.infoTitle}>ℹ️ Informações Importantes</h3>
        <ul className={styles.infoList}>
          <li>Use estas ferramentas apenas em desenvolvimento</li>
          <li>A população dos dados pode levar alguns minutos</li>
          <li>Dados duplicados podem ser criados se executado múltiplas vezes</li>
          <li>Para criar dados de usuário, faça login primeiro</li>
          <li>Em produção, use migrações adequadas para popular dados</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default FirestoreAdmin;
