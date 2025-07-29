import React, { useState, useEffect } from 'react';

const BreathingVisualization3D: React.FC = () => {
  const [isBreathing, setIsBreathing] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [cycleCount, setCycleCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const breathingPattern = {
    inhale: 4,
    hold: 7,
    exhale: 8
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isBreathing && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
    } else if (isBreathing && timeRemaining === 0) {
      // Próxima fase
      if (phase === 'inhale') {
        setPhase('hold');
        setTimeRemaining(breathingPattern.hold);
      } else if (phase === 'hold') {
        setPhase('exhale');
        setTimeRemaining(breathingPattern.exhale);
      } else {
        setPhase('inhale');
        setTimeRemaining(breathingPattern.inhale);
        setCycleCount(prev => prev + 1);
      }
    }

    return () => clearInterval(interval);
  }, [isBreathing, timeRemaining, phase, breathingPattern.hold, breathingPattern.exhale, breathingPattern.inhale]);

  const startBreathing = () => {
    setIsBreathing(true);
    setPhase('inhale');
    setTimeRemaining(breathingPattern.inhale);
    setCycleCount(0);
  };

  const stopBreathing = () => {
    setIsBreathing(false);
    setTimeRemaining(0);
  };

  const getCircleScale = () => {
    switch (phase) {
      case 'inhale': return 1.5;
      case 'hold': return 1.5;
      case 'exhale': return 0.8;
      default: return 1;
    }
  };

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Inspire';
      case 'hold': return 'Segure';
      case 'exhale': return 'Expire';
      default: return 'Pronto';
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale': return '#10b981';
      case 'hold': return '#f59e0b';
      case 'exhale': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
      borderRadius: 16,
      padding: 24,
      maxWidth: 450,
      margin: '0 auto',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h3 style={{
        marginBottom: 16,
        color: '#166534',
        fontSize: '1.2rem',
        fontWeight: 600
      }}>
        🫁 Visualização 3D de Respiração
      </h3>

      {/* Círculo de Respiração 3D Simulado */}
      <div style={{
        width: 200,
        height: 200,
        margin: '20px auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${getPhaseColor()}40, ${getPhaseColor()}80)`,
            transform: `scale(${getCircleScale()})`,
            transition: 'transform 1s ease-in-out, background 0.5s ease',
            boxShadow: `0 0 30px ${getPhaseColor()}60`,
            border: `3px solid ${getPhaseColor()}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative'
          }}
        >
          {/* Efeito 3D interno */}
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: `linear-gradient(45deg, ${getPhaseColor()}60, ${getPhaseColor()}20)`,
              transform: `scale(${getCircleScale() * 0.7})`,
              transition: 'transform 1s ease-in-out'
            }}
          />
        </div>

        {/* Contador no centro */}
        {isBreathing && (
          <div style={{
            position: 'absolute',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: getPhaseColor(),
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {timeRemaining}
          </div>
        )}
      </div>

      {/* Instruções */}
      <div style={{ marginBottom: 20 }}>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: getPhaseColor(),
          marginBottom: 8
        }}>
          {isBreathing ? getPhaseText() : 'Técnica 4-7-8'}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#6b7280'
        }}>
          {isBreathing 
            ? `Ciclo ${cycleCount + 1} • ${getPhaseText()}`
            : 'Inspire 4s • Segure 7s • Expire 8s'
          }
        </div>
      </div>

      {/* Controles */}
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button
          onClick={startBreathing}
          disabled={isBreathing}
          style={{
            padding: '10px 20px',
            borderRadius: 8,
            background: isBreathing 
              ? '#94a3b8' 
              : 'linear-gradient(135deg, #10b981, #059669)',
            color: 'white',
            border: 'none',
            fontWeight: 500,
            cursor: isBreathing ? 'not-allowed' : 'pointer'
          }}
        >
          {isBreathing ? '🔄 Em andamento' : '▶️ Iniciar'}
        </button>
        
        <button
          onClick={stopBreathing}
          disabled={!isBreathing}
          style={{
            padding: '10px 20px',
            borderRadius: 8,
            background: !isBreathing 
              ? '#94a3b8' 
              : 'linear-gradient(135deg, #ef4444, #dc2626)',
            color: 'white',
            border: 'none',
            fontWeight: 500,
            cursor: !isBreathing ? 'not-allowed' : 'pointer'
          }}
        >
          ⏹️ Parar
        </button>
      </div>

      <p style={{
        marginTop: 16,
        fontSize: '0.8rem',
        color: '#6b7280',
        fontStyle: 'italic'
      }}>
        💡 Futuro: Integração com câmera para detecção real da respiração
      </p>
    </div>
  );
};

export default BreathingVisualization3D;
