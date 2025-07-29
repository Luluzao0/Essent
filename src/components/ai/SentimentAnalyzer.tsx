import React, { useState } from 'react';
import { cohereService } from '../../utils/cohereService';

interface AnalysisResult {
  sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
  confidence: number;
  explanation: string;
}

const SentimentAnalyzer: React.FC = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const analysis = await cohereService.analyzeSentiment(text);
      setResult(analysis);
    } catch (err) {
      setError('Erro ao analisar o sentimento. Tente novamente.');
      console.error('Sentiment analysis error:', err);
    } finally {
      setLoading(false);
    }
  };

  const getSentimentEmoji = (sentiment: string) => {
    switch (sentiment) {
      case 'POSITIVE': return '😊';
      case 'NEGATIVE': return '😞';
      default: return '😐';
    }
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'POSITIVE': return '#10b981';
      case 'NEGATIVE': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)', 
      borderRadius: 16, 
      padding: 24, 
      maxWidth: 450, 
      margin: '0 auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ 
        marginBottom: 16, 
        color: '#1e293b',
        fontSize: '1.2rem',
        fontWeight: 600
      }}>
        🤖 Análise de Sentimento com Cohere AI
      </h3>
      
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Digite um texto para analisar o sentimento usando IA..."
        rows={4}
        style={{ 
          width: '100%', 
          borderRadius: 8, 
          padding: 12, 
          marginBottom: 16,
          border: '2px solid #e2e8f0',
          fontSize: '14px',
          fontFamily: 'inherit',
          resize: 'vertical'
        }}
      />
      
      <button 
        onClick={handleAnalyze} 
        disabled={loading || !text.trim()} 
        style={{ 
          padding: '10px 20px', 
          borderRadius: 8,
          background: loading ? '#94a3b8' : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
          color: 'white',
          border: 'none',
          fontWeight: 500,
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s'
        }}
      >
        {loading ? '🔄 Analisando com IA...' : '🔍 Analisar Sentimento'}
      </button>
      
      {error && (
        <div style={{ 
          marginTop: 16, 
          padding: 12,
          background: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: 8,
          color: '#dc2626'
        }}>
          {error}
        </div>
      )}
      
      {result && (
        <div style={{ 
          marginTop: 16, 
          padding: 16,
          background: 'white',
          borderRadius: 12,
          border: `2px solid ${getSentimentColor(result.sentiment)}20`
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: 8 
          }}>
            <span style={{ fontSize: '1.5rem', marginRight: 8 }}>
              {getSentimentEmoji(result.sentiment)}
            </span>
            <strong style={{ 
              color: getSentimentColor(result.sentiment),
              textTransform: 'capitalize'
            }}>
              {result.sentiment.toLowerCase()}
            </strong>
            <span style={{ 
              marginLeft: 8, 
              fontSize: '0.9rem', 
              color: '#6b7280' 
            }}>
              ({(result.confidence * 100).toFixed(1)}% confiança)
            </span>
          </div>
          <p style={{ 
            margin: 0, 
            fontSize: '0.9rem', 
            color: '#4b5563',
            fontStyle: 'italic'
          }}>
            {result.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

export default SentimentAnalyzer;
