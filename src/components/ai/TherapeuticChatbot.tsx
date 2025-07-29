import React, { useState, useRef, useEffect } from 'react';
import { cohereService } from '../../utils/cohereService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const TherapeuticChatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Oi! Que bom te encontrar aqui! 😊 Sou especialista em saúde mental e adoro conversar sobre bem-estar. Trabalho com psiquiatria, neurociência e psicologia há alguns anos, e sempre fico feliz em ajudar pessoas a se sentirem melhor. Como você está hoje? O que te trouxe até aqui?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [conversationHistory, setConversationHistory] = useState<string[]>([]);

  const formatBotMessage = (text: string) => {
    // Limpa e normaliza o texto
    const cleanText = text.trim();
    
    // Divide em parágrafos por quebras duplas ou simples
    const paragraphs = cleanText.split(/\n\n|\n/).filter(p => p.trim());
    
    return (
      <div>
        {paragraphs.map((paragraph, index) => {
          const trimmedParagraph = paragraph.trim();
          
          // Pula parágrafos vazios
          if (!trimmedParagraph) return null;
          
          // Detecta listas com bullets (•, -, *)
          if (/^[•\-*]\s/.test(trimmedParagraph)) {
            return (
              <div key={index} style={{ marginBottom: '8px' }}>
                {trimmedParagraph.split(/(?=^[•\-*]\s)/gm).filter(item => item.trim()).map((item, itemIndex) => (
                  <div key={itemIndex} style={{ 
                    marginBottom: '4px',
                    paddingLeft: '16px',
                    position: 'relative'
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: '0', 
                      color: '#7c3aed',
                      fontWeight: 'bold'
                    }}>•</span>
                    <span dangerouslySetInnerHTML={{ 
                      __html: item.replace(/^[•\-*]\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong style="color: #7c3aed;">$1</strong>')
                    }} />
                  </div>
                ))}
              </div>
            );
          }
          
          // Detecta listas numeradas (1., 2., etc.)
          if (/^\d+\.\s/.test(trimmedParagraph)) {
            return (
              <div key={index} style={{ marginBottom: '8px' }}>
                {trimmedParagraph.split(/(?=^\d+\.\s)/gm).filter(item => item.trim()).map((item, itemIndex) => (
                  <div key={itemIndex} style={{ 
                    marginBottom: '4px',
                    paddingLeft: '20px',
                    position: 'relative'
                  }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: '0', 
                      color: '#7c3aed',
                      fontWeight: 'bold'
                    }}>{item.match(/^\d+\./)?.[0]}</span>
                    <span dangerouslySetInnerHTML={{ 
                      __html: item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong style="color: #7c3aed;">$1</strong>')
                    }} />
                  </div>
                ))}
              </div>
            );
          }
          
          // Parágrafo normal com formatação de texto em negrito
          return (
            <p key={index} style={{ 
              margin: '8px 0',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}>
              <span dangerouslySetInnerHTML={{ 
                __html: trimmedParagraph.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #7c3aed; font-weight: 600;">$1</strong>')
              }} />
            </p>
          );
        })}
      </div>
    );
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    try {
      // Usa o método terapêutico profissional da Cohere AI
      const response = await cohereService.generateTherapeuticResponse(userMessage, conversationHistory);
      
      // Atualiza o histórico da conversa
      setConversationHistory(prev => [...prev.slice(-4), userMessage, response]);
      
      return response;
    } catch (error) {
      console.error('Error generating bot response:', error);
      return 'Desculpe, tive um probleminha técnico. Pode tentar novamente? Estou aqui para ajudá-lo. 🤖';
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simula delay de digitação do bot
    setTimeout(async () => {
      const botResponse = await generateBotResponse(inputText);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #fef7ff 0%, #f3e8ff 100%)',
      borderRadius: 16,
      padding: 24,
      maxWidth: '100%',
      margin: '0 auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      height: 500,
      display: 'flex',
      flexDirection: 'column'
    }}>

      {/* Messages Container */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        marginBottom: 16,
        padding: '0 8px'
      }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
              marginBottom: 12
            }}
          >
            <div
              style={{
                maxWidth: '85%',
                padding: '12px 16px',
                borderRadius: 16,
                background: message.sender === 'user' 
                  ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
                  : 'white',
                color: message.sender === 'user' ? 'white' : '#374151',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: message.sender === 'bot' ? '1px solid #e2e8f0' : 'none'
              }}
            >
              {message.sender === 'bot' ? formatBotMessage(message.text) : message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 12 }}>
            <div style={{
              padding: '8px 12px',
              borderRadius: 16,
              background: 'white',
              color: '#6b7280',
              fontSize: '0.9rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
            }}>
              Digitando... 💭
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Container */}
      <div style={{ display: 'flex', gap: 8 }}>
        <textarea
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
          rows={2}
          style={{
            flex: 1,
            borderRadius: 12,
            padding: 12,
            border: '2px solid #e5e7eb',
            fontSize: '14px',
            fontFamily: 'inherit',
            resize: 'none'
          }}
        />
        <button
          onClick={handleSendMessage}
          disabled={!inputText.trim() || isTyping}
          style={{
            padding: '8px 16px',
            borderRadius: 12,
            background: !inputText.trim() || isTyping 
              ? '#94a3b8' 
              : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            color: 'white',
            border: 'none',
            fontWeight: 500,
            cursor: !inputText.trim() || isTyping ? 'not-allowed' : 'pointer',
            fontSize: '1.2rem'
          }}
        >
          📤
        </button>
      </div>
    </div>
  );
};

export default TherapeuticChatbot;
