import React, { useState } from 'react';
import { cohereService } from '../../utils/cohereService';

interface Recommendation {
  title: string;
  description: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

const mockRecommendations: Recommendation[] = [
  {
    title: 'Meditação Mindfulness',
    description: 'Pratique 10 minutos de atenção plena para reduzir o estresse',
    category: 'Meditação',
    priority: 'high'
  },
  {
    title: 'Exercício de Respiração',
    description: 'Técnica 4-7-8 para acalmar a mente e regular as emoções',
    category: 'Respiração',
    priority: 'high'
  },
  {
    title: 'Diário de Gratidão',
    description: 'Escreva 3 coisas pelas quais você é grato hoje',
    category: 'Autoconhecimento',
    priority: 'medium'
  },
  {
    title: 'Caminhada Consciente',
    description: 'Uma caminhada de 15 minutos prestando atenção aos sons e sensações',
    category: 'Movimento',
    priority: 'medium'
  },
  {
    title: 'Visualização Positiva',
    description: 'Imagine um lugar calmo e relaxante por 5 minutos',
    category: 'Visualização',
    priority: 'low'
  }
];

const IntelligentRecommendations: React.FC = () => {
  const [selected, setSelected] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [userMood, setUserMood] = useState('');

  const handleRecommend = async () => {
    setLoading(true);
    
    try {
      let recommendation: Recommendation;
      
      if (userMood.trim()) {
        // Usa Cohere AI para recomendação como psicólogo
        recommendation = await cohereService.generatePsychologistRecommendation(userMood);
      } else {
        // Recomendação baseada em bem-estar geral
        const randomIndex = Math.floor(Math.random() * mockRecommendations.length);
        recommendation = mockRecommendations[randomIndex];
      }
      
      setSelected(recommendation);
    } catch (error) {
      console.error('Error getting recommendation:', error);
      // Fallback para recomendação aleatória
      const randomIndex = Math.floor(Math.random() * mockRecommendations.length);
      setSelected(mockRecommendations[randomIndex]);
    } finally {
      setLoading(false);
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      default: return '#10b981';
    }
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', 
      borderRadius: 16, 
      padding: 24, 
      maxWidth: 450, 
      margin: '0 auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ 
        marginBottom: 16, 
        color: '#0f172a',
        fontSize: '1.2rem',
        fontWeight: 600
      }}>
        🧠 Recomendações de Psicólogo IA
      </h3>
      
      <textarea
        value={userMood}
        onChange={e => setUserMood(e.target.value)}
        placeholder="Descreva como você está se sentindo (opcional para recomendação personalizada)..."
        rows={2}
        style={{ 
          width: '100%', 
          borderRadius: 8, 
          padding: 12, 
          marginBottom: 16,
          border: '2px solid #e0f2fe',
          fontSize: '14px',
          fontFamily: 'inherit',
          resize: 'vertical'
        }}
      />
      
      <button 
        onClick={handleRecommend} 
        disabled={loading} 
        style={{ 
          padding: '10px 20px', 
          borderRadius: 8,
          background: loading ? '#94a3b8' : 'linear-gradient(135deg, #0ea5e9, #0284c7)',
          color: 'white',
          border: 'none',
          fontWeight: 500,
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s'
        }}
      >
        {loading ? '🤖 IA Processando...' : '✨ Obter Recomendação IA'}
      </button>
      
      {selected && (
        <div style={{ 
          marginTop: 16, 
          padding: 16,
          background: 'white',
          borderRadius: 12,
          border: `2px solid ${getPriorityColor(selected.priority)}20`
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: 8 
          }}>
            <h4 style={{ 
              margin: 0, 
              color: '#1e293b',
              fontSize: '1rem',
              fontWeight: 600
            }}>
              {selected.title}
            </h4>
            <span style={{ 
              fontSize: '0.75rem', 
              color: getPriorityColor(selected.priority),
              background: `${getPriorityColor(selected.priority)}15`,
              padding: '2px 8px',
              borderRadius: 12,
              fontWeight: 500,
              textTransform: 'uppercase'
            }}>
              {selected.priority}
            </span>
          </div>
          
          <p style={{ 
            margin: '8px 0', 
            fontSize: '0.9rem', 
            color: '#4b5563',
            lineHeight: 1.5
          }}>
            {selected.description}
          </p>
          
          <div style={{ 
            fontSize: '0.8rem', 
            color: '#6b7280',
            fontWeight: 500,
            marginTop: 8
          }}>
            📂 Categoria: {selected.category}
          </div>
        </div>
      )}
    </div>
  );
};

export default IntelligentRecommendations;
