// Tipos para os dados
export interface WellnessVideo {
  id: number;
  title: string;
  url: string;
  thumbnail?: string;
  duration: string;
  category: string;
  description: string;
}

// Lista de vídeos cristãos motivacionais - URLs reais fornecidas pelo usuário
export const wellnessVideos: WellnessVideo[] = [
  {
    id: 1,
    title: "Vídeo Motivacional Cristão",
    url: "https://www.youtube.com/watch?v=NuEVoj04dbg",
    duration: "15:30",
    category: "motivação",
    description: "Uma mensagem poderosa de fé e esperança."
  },
  {
    id: 2,
    title: "Pregação Inspiradora",
    url: "https://www.youtube.com/watch?v=5RLO5G23R2k",
    duration: "22:45",
    category: "fé",
    description: "Palavra de encorajamento e crescimento espiritual."
  },
  {
    id: 3,
    title: "Mensagem de Esperança",
    url: "https://www.youtube.com/watch?v=eh3AkxDP264",
    duration: "18:20",
    category: "esperança",
    description: "Encontre esperança em tempos difíceis."
  },
  {
    id: 4,
    title: "Louvor e Adoração",
    url: "https://www.youtube.com/watch?v=XH9cJ3vqtIc",
    duration: "25:15",
    category: "louvor",
    description: "Momento de adoração e comunhão com Deus."
  },
  {
    id: 5,
    title: "Palavra de Vida",
    url: "https://www.youtube.com/watch?v=XX3dmVrSRA4",
    duration: "28:30",
    category: "vida",
    description: "Ensinamentos que transformam vidas."
  },
  {
    id: 6,
    title: "Testemunho de Fé",
    url: "https://www.youtube.com/watch?v=C6qCnkna5DU",
    duration: "32:10",
    category: "testemunho",
    description: "Histórias reais de transformação através da fé."
  },
  {
    id: 7,
    title: "Sobre Deus",
    url: "https://www.youtube.com/watch?v=egz9nmSonBc",
    duration: "20:45",
    category: "deus",
    description: "Conhecendo mais sobre o amor de Deus."
  },
  {
    id: 8,
    title: "Reflexão Espiritual",
    url: "https://www.youtube.com/watch?v=dtsok-FM_7c",
    duration: "16:25",
    category: "reflexão",
    description: "Momentos de reflexão e meditação espiritual."
  },
  {
    id: 9,
    title: "Música Cristã Inspiradora",
    url: "https://www.youtube.com/watch?v=H4PHfGtsk38",
    duration: "24:50",
    category: "música",
    description: "Música que toca o coração e eleva a alma."
  },
  {
    id: 10,
    title: "Ensinamento Bíblico",
    url: "https://www.youtube.com/watch?v=LVgwyjOn9Xc",
    duration: "35:20",
    category: "ensino",
    description: "Estudo profundo da palavra de Deus."
  }
];

// Outras interfaces (mantidas para compatibilidade)
export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
  language: 'pt' | 'en';
  tags: string[];
}

export interface DailyRecommendation {
  id: number;
  date: string;
  quote: Quote;
  activity: string;
  meditation: string;
}

// Array vazio para as frases (serão carregadas de outro lugar se necessário)
export const motivationalQuotes: Quote[] = [];

// Array vazio para recomendações diárias
export const dailyRecommendations: DailyRecommendation[] = [];
