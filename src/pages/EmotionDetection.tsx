import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CameraIcon, 
  StopIcon,
  EyeOpenIcon,
  HeartIcon,
  FaceIcon,
  BarChartIcon,
  PlayIcon
} from '@radix-ui/react-icons';
import LoggedHeader from '../components/LoggedHeader';
import styles from './EmotionDetection.module.css';

interface EmotionData {
  emotion: string;
  confidence: number;
  timestamp: Date;
  suggestions: string[];
}

interface FaceMetrics {
  eyeOpenness: number;
  mouthCurvature: number;
  eyebrowPosition: number;
  headTilt: number;
}

const EmotionDetection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDetecting, setIsDetecting] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState<EmotionData | null>(null);
  const [emotionHistory, setEmotionHistory] = useState<EmotionData[]>([]);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [faceMetrics, setFaceMetrics] = useState<FaceMetrics>({
    eyeOpenness: 0.8,
    mouthCurvature: 0.5,
    eyebrowPosition: 0.5,
    headTilt: 0
  });
  const [isCalibrating, setIsCalibrating] = useState(false);

  // Simulação de detecção de emoções (em produção, usaria TensorFlow.js ou similar)
  const detectEmotion = (): EmotionData => {
    const emotions = [
      { 
        emotion: 'Feliz', 
        confidence: Math.random() * 0.4 + 0.6,
        suggestions: ['Continue assim! Você está radiante', 'Que tal compartilhar essa energia positiva?', 'Momento perfeito para gratidão']
      },
      { 
        emotion: 'Calmo', 
        confidence: Math.random() * 0.3 + 0.7,
        suggestions: ['Estado mental equilibrado', 'Ótimo momento para meditação', 'Sua tranquilidade é inspiradora']
      },
      { 
        emotion: 'Pensativo', 
        confidence: Math.random() * 0.4 + 0.5,
        suggestions: ['Que tal fazer um diário reflexivo?', 'Momento ideal para autoconhecimento', 'Explore seus pensamentos profundos']
      },
      { 
        emotion: 'Cansado', 
        confidence: Math.random() * 0.3 + 0.6,
        suggestions: ['Que tal uma pausa?', 'Exercícios de respiração podem ajudar', 'Considere um momento de descanso']
      },
      { 
        emotion: 'Ansioso', 
        confidence: Math.random() * 0.4 + 0.4,
        suggestions: ['Técnicas de respiração profunda', 'Exercícios de grounding', 'Meditação mindfulness']
      }
    ];

    return {
      ...emotions[Math.floor(Math.random() * emotions.length)],
      timestamp: new Date()
    };
  };

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { 
          width: 640, 
          height: 480,
          facingMode: 'user'
        },
        audio: false
      });
      
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      
      setIsCalibrating(true);
      setTimeout(() => {
        setIsCalibrating(false);
        setIsDetecting(true);
      }, 3000);

    } catch (error) {
      console.error('Erro ao acessar câmera:', error);
      alert('Não foi possível acessar a câmera. Verifique as permissões.');
    }
  };

  const stopDetection = () => {
    setIsDetecting(false);
    setIsCalibrating(false);
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  // Simulação de análise em tempo real
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isDetecting) {
      interval = setInterval(() => {
        const emotion = detectEmotion();
        setCurrentEmotion(emotion);
        setEmotionHistory(prev => [...prev.slice(-9), emotion]);
        
        // Simular métricas faciais
        setFaceMetrics({
          eyeOpenness: Math.random() * 0.4 + 0.6,
          mouthCurvature: emotion.emotion === 'Feliz' ? Math.random() * 0.3 + 0.7 : Math.random() * 0.6 + 0.2,
          eyebrowPosition: emotion.emotion === 'Ansioso' ? Math.random() * 0.3 + 0.6 : Math.random() * 0.4 + 0.3,
          headTilt: (Math.random() - 0.5) * 20
        });
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDetecting]);

  const getEmotionColor = (emotion: string) => {
    const colors: { [key: string]: string } = {
      'Feliz': '#22c55e',
      'Calmo': '#3b82f6',
      'Pensativo': '#8b5cf6',
      'Cansado': '#f59e0b',
      'Ansioso': '#ef4444'
    };
    return colors[emotion] || '#6b7280';
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <div className={styles.emotionDetectionPage}>
      <LoggedHeader />
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>🎭 Detecção de Emoções</h1>
          <p>Analise suas emoções em tempo real através da câmera</p>
        </motion.div>

        <div className={styles.mainContent}>
          {/* Área do vídeo */}
          <div className={styles.videoSection}>
            <div className={styles.videoContainer}>
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className={styles.videoElement}
              />
              <canvas
                ref={canvasRef}
                className={styles.analysisOverlay}
              />
              
              {isCalibrating && (
                <motion.div
                  className={styles.calibrationOverlay}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className={styles.calibrationContent}>
                    <div className={styles.calibrationSpinner} />
                    <h3>Calibrando...</h3>
                    <p>Olhe diretamente para a câmera</p>
                  </div>
                </motion.div>
              )}

              {!stream && (
                <div className={styles.cameraPlaceholder}>
                  <CameraIcon width={48} height={48} />
                  <h3>Câmera Desligada</h3>
                  <p>Clique para iniciar a detecção</p>
                </div>
              )}
            </div>

            <div className={styles.controls}>
              {!isDetecting ? (
                <motion.button
                  className={styles.startButton}
                  onClick={startCamera}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PlayIcon width={20} height={20} />
                  Iniciar Detecção
                </motion.button>
              ) : (
                <motion.button
                  className={styles.stopButton}
                  onClick={stopDetection}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <StopIcon width={20} height={20} />
                  Parar Detecção
                </motion.button>
              )}
            </div>
          </div>

          {/* Painel de resultados */}
          <div className={styles.resultsPanel}>
            {/* Emoção atual */}
            {currentEmotion && (
              <motion.div
                className={styles.currentEmotion}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                key={currentEmotion.timestamp.getTime()}
              >
                <div className={styles.emotionHeader}>
                  <FaceIcon width={24} height={24} />
                  <h3>Emoção Detectada</h3>
                </div>
                
                <div 
                  className={styles.emotionLabel}
                  style={{ color: getEmotionColor(currentEmotion.emotion) }}
                >
                  {currentEmotion.emotion}
                </div>
                
                <div className={styles.confidenceBar}>
                  <div className={styles.confidenceLabel}>
                    Confiança: {Math.round(currentEmotion.confidence * 100)}%
                  </div>
                  <div className={styles.confidenceTrack}>
                    <motion.div
                      className={styles.confidenceFill}
                      style={{ backgroundColor: getEmotionColor(currentEmotion.emotion) }}
                      initial={{ width: 0 }}
                      animate={{ width: `${currentEmotion.confidence * 100}%` }}
                    />
                  </div>
                </div>

                <div className={styles.suggestions}>
                  <h4>💡 Sugestões</h4>
                  {currentEmotion.suggestions.map((suggestion, index) => (
                    <motion.div
                      key={index}
                      className={styles.suggestion}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {suggestion}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Métricas faciais */}
            {isDetecting && (
              <motion.div
                className={styles.faceMetrics}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={styles.metricsHeader}>
                  <EyeOpenIcon width={20} height={20} />
                  <h4>Métricas Faciais</h4>
                </div>

                <div className={styles.metricsList}>
                  <div className={styles.metric}>
                    <span>Abertura dos Olhos</span>
                    <div className={styles.metricBar}>
                      <motion.div
                        className={styles.metricFill}
                        animate={{ width: `${faceMetrics.eyeOpenness * 100}%` }}
                      />
                    </div>
                    <span>{Math.round(faceMetrics.eyeOpenness * 100)}%</span>
                  </div>

                  <div className={styles.metric}>
                    <span>Curvatura da Boca</span>
                    <div className={styles.metricBar}>
                      <motion.div
                        className={styles.metricFill}
                        animate={{ width: `${faceMetrics.mouthCurvature * 100}%` }}
                      />
                    </div>
                    <span>{Math.round(faceMetrics.mouthCurvature * 100)}%</span>
                  </div>

                  <div className={styles.metric}>
                    <span>Posição das Sobrancelhas</span>
                    <div className={styles.metricBar}>
                      <motion.div
                        className={styles.metricFill}
                        animate={{ width: `${faceMetrics.eyebrowPosition * 100}%` }}
                      />
                    </div>
                    <span>{Math.round(faceMetrics.eyebrowPosition * 100)}%</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Histórico de emoções */}
            {emotionHistory.length > 0 && (
              <motion.div
                className={styles.emotionHistory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={styles.historyHeader}>
                  <BarChartIcon width={20} height={20} />
                  <h4>Histórico Recente</h4>
                </div>

                <div className={styles.historyList}>
                  <AnimatePresence>
                    {emotionHistory.slice(-5).reverse().map((emotion, index) => (
                      <motion.div
                        key={emotion.timestamp.getTime()}
                        className={styles.historyItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <div 
                          className={styles.historyDot}
                          style={{ backgroundColor: getEmotionColor(emotion.emotion) }}
                        />
                        <div className={styles.historyContent}>
                          <span className={styles.historyEmotion}>{emotion.emotion}</span>
                          <span className={styles.historyTime}>{formatTime(emotion.timestamp)}</span>
                        </div>
                        <div className={styles.historyConfidence}>
                          {Math.round(emotion.confidence * 100)}%
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Informações sobre privacidade */}
        <motion.div
          className={styles.privacyInfo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.privacyContent}>
            <HeartIcon width={16} height={16} />
            <span>Sua privacidade é protegida - todas as análises são feitas localmente em seu dispositivo</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmotionDetection;
