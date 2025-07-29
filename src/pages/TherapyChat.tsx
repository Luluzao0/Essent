import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PaperPlaneIcon, 
  ReloadIcon, 
  TrashIcon, 
  PersonIcon,
  ChatBubbleIcon,
  ClockIcon,
  HeartIcon,
  StarIcon
} from '@radix-ui/react-icons';
import { useAuth } from '../hooks/useAuth';
import LoggedHeader from '../components/LoggedHeader';
import styles from './TherapyChat.module.css';
import { getBotGreeting, formatTherapistMessage } from '../utils/therapyBotResponses';
import { cohereService } from '../utils/cohereService';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'therapist';
  timestamp: Date;
  emotion?: 'positive' | 'neutral' | 'negative';
}

interface ChatSession {
  id: string;
  title: string;
  date: Date;
  messages: ChatMessage[];
  summary?: string;
}

const TherapyChat: React.FC = () => {
  const { currentUser } = useAuth();
  const [currentMessage, setCurrentMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializar sessão de exemplo
  useEffect(() => {
    if (sessions.length === 0) {
      const exampleMessages: ChatMessage[] = [
        {
          id: '1',
          content: getBotGreeting(),
          sender: 'therapist',
          timestamp: new Date(),
          emotion: 'positive'
        }
      ];

      const exampleSession: ChatSession = {
        id: 'session-1',
        title: 'Primeira conversa',
        date: new Date(),
        messages: exampleMessages,
        summary: 'Sessão inicial de boas-vindas'
      };
      setSessions([exampleSession]);
      setActiveSessionId('session-1');
    }
  }, [sessions.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [sessions]);

  const getCurrentSession = () => {
    return sessions.find(session => session.id === activeSessionId);
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim() || isLoading) return;

    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      content: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };

    // Adicionar mensagem do usuário
    setSessions(prev => prev.map(session => {
      if (session.id === activeSessionId) {
        return {
          ...session,
          messages: [...session.messages, newMessage]
        };
      }
      return session;
    }));

    setCurrentMessage('');
    setIsLoading(true);

    // Resposta real da Cohere
    try {
      const session = sessions.find(s => s.id === activeSessionId);
      const conversationHistory = session ? session.messages.map(m => m.content) : [];
      const botReply = await cohereService.generateTherapeuticResponse(currentMessage, conversationHistory);
      const response: ChatMessage = {
        id: `therapist-${Date.now()}`,
        content: botReply,
        sender: 'therapist',
        timestamp: new Date(),
        emotion: 'positive'
      };
      setSessions(prev => prev.map(session => {
        if (session.id === activeSessionId) {
          return {
            ...session,
            messages: [...session.messages, response]
          };
        }
        return session;
      }));
    } catch {
      const response: ChatMessage = {
        id: `therapist-${Date.now()}`,
        content: 'Desculpe, não consegui responder agora. Tente novamente em instantes.',
        sender: 'therapist',
        timestamp: new Date(),
        emotion: 'neutral'
      };
      setSessions(prev => prev.map(session => {
        if (session.id === activeSessionId) {
          return {
            ...session,
            messages: [...session.messages, response]
          };
        }
        return session;
      }));
    }
    setIsLoading(false);
  };

  const createNewSession = () => {
    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      title: `Conversa ${sessions.length + 1}`,
      date: new Date(),
      messages: [{
        id: `welcome-${Date.now()}`,
        content: getBotGreeting(),
        sender: 'therapist',
        timestamp: new Date(),
        emotion: 'positive'
      }]
    };

    setSessions(prev => [...prev, newSession]);
    setActiveSessionId(newSession.id);
    setShowHistory(false);
  };

  const deleteSession = (sessionId: string) => {
    setSessions(prev => prev.filter(session => session.id !== sessionId));
    if (activeSessionId === sessionId) {
      const remainingSessions = sessions.filter(session => session.id !== sessionId);
      setActiveSessionId(remainingSessions.length > 0 ? remainingSessions[0].id : null);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className={styles.therapyChatPage}>
      <LoggedHeader />
      
      <div className={styles.container}>
        {/* Sidebar com histórico */}
        <div className={`${styles.sidebar} ${showHistory ? styles.sidebarOpen : ''}`}>
          <div className={styles.sidebarHeader}>
            <h3>Conversas Anteriores</h3>
            <button 
              className={styles.newChatButton}
              onClick={createNewSession}
            >
              Nova Conversa
            </button>
          </div>

          <div className={styles.sessionsList}>
            {sessions.map(session => (
              <motion.div
                key={session.id}
                className={`${styles.sessionItem} ${activeSessionId === session.id ? styles.activeSession : ''}`}
                onClick={() => setActiveSessionId(session.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={styles.sessionInfo}>
                  <h4>{session.title}</h4>
                  <p>{formatDate(session.date)}</p>
                  <span>{session.messages.length} mensagens</span>
                </div>
                <button
                  className={styles.deleteSessionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteSession(session.id);
                  }}
                >
                  <TrashIcon width={16} height={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chat principal */}
        <div className={styles.chatMain}>
          <div className={styles.chatHeader}>
            <button
              className={styles.historyToggle}
              onClick={() => setShowHistory(!showHistory)}
            >
              <ClockIcon width={20} height={20} />
              Histórico
            </button>

            <div className={styles.therapistInfo}>
              <div className={styles.therapistAvatar}>
                <ChatBubbleIcon width={24} height={24} />
              </div>
              <div>
                <h3>Assistente Terapêutica</h3>
                <p>Online • Sempre disponível para você</p>
              </div>
            </div>

            <div className={styles.sessionActions}>
              <button
                className={styles.actionButton}
                onClick={createNewSession}
                title="Nova conversa"
              >
                <ReloadIcon width={18} height={18} />
              </button>
            </div>
          </div>

          <div className={styles.messagesContainer}>
            <AnimatePresence>
              {getCurrentSession()?.messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className={`${styles.messageWrapper} ${styles[message.sender]}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={styles.messageAvatar}>
                    {message.sender === 'user' ? (
                      currentUser?.photoURL ? (
                        <img src={currentUser.photoURL} alt="Você" />
                      ) : (
                        <PersonIcon width={20} height={20} />
                      )
                    ) : (
                      <ChatBubbleIcon width={20} height={20} />
                    )}
                  </div>

                  <div className={styles.messageContent}>
                    <div 
                      className={styles.messageText}
                      dangerouslySetInnerHTML={{
                        __html: message.sender === 'therapist' 
                          ? formatTherapistMessage(message.content)
                          : message.content
                      }}
                    />
                    <div className={styles.messageTime}>
                      {formatTime(message.timestamp)}
                      {message.emotion && (
                        <span className={`${styles.emotionIndicator} ${styles[message.emotion]}`}>
                          {message.emotion === 'positive' && <HeartIcon width={12} height={12} />}
                          {message.emotion === 'neutral' && <StarIcon width={12} height={12} />}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && (
              <motion.div
                className={`${styles.messageWrapper} ${styles.therapist}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={styles.messageAvatar}>
                  <ChatBubbleIcon width={20} height={20} />
                </div>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea}>
            <div className={styles.inputContainer}>
              <textarea
                className={styles.messageInput}
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Compartilhe seus sentimentos e pensamentos..."
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
                rows={1}
              />
              <button
                className={styles.sendButton}
                onClick={handleSendMessage}
                disabled={!currentMessage.trim() || isLoading}
              >
                <PaperPlaneIcon width={20} height={20} />
              </button>
            </div>
            
            <div className={styles.inputHint}>
              <p>Esta é uma simulação educativa. Para apoio profissional real, procure um psicólogo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapyChat;
