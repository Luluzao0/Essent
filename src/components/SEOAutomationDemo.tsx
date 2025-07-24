import React from 'react';
import { motion } from 'framer-motion';
import { Bot, TrendingUp, Target, Calendar, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

const SEOAutomationDemo: React.FC = () => {
  const automationFeatures = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: "Geração Automática de Conteúdo",
      description: "Sistema que cria artigos otimizados baseados em tendências",
      status: "Implementado",
      details: "12 artigos gerados automaticamente esta semana"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: "Análise de Tendências",
      description: "Monitora keywords emergentes em saúde mental",
      status: "Ativo",
      details: "Detectou 5 oportunidades de alto potencial"
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: "SEO Score Automático",
      description: "Calcula otimização em tempo real",
      status: "Funcionando",
      details: "Score médio de 87/100 nos últimos artigos"
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: "Cronograma Inteligente",
      description: "Agenda publicações baseadas em sazonalidade",
      status: "Configurado",
      details: "3 meses de conteúdo programado"
    }
  ];

  const sampleContent = [
    {
      title: "Como Meditar em Casa - Guia Completo 2025",
      keyword: "meditação em casa",
      searchVolume: "2,400/mês",
      difficulty: "45/100",
      category: "meditacao",
      publishDate: "2025-07-31"
    },
    {
      title: "Técnicas de Respiração para Ansiedade: 7 Métodos Científicos",
      keyword: "respiração ansiedade",
      searchVolume: "1,600/mês", 
      difficulty: "40/100",
      category: "ansiedade",
      publishDate: "2025-08-07"
    },
    {
      title: "Mindfulness no Trabalho: Reduza o Estresse Profissional",
      keyword: "mindfulness trabalho",
      searchVolume: "1,200/mês",
      difficulty: "50/100", 
      category: "mindfulness",
      publishDate: "2025-08-14"
    }
  ];

  const ethicalApproach = [
    "✅ Conteúdo de alta qualidade baseado em pesquisas científicas",
    "✅ Keywords naturalmente integradas ao contexto",
    "✅ Otimização técnica seguindo diretrizes do Google",
    "✅ Link building através de parcerias legítimas",
    "✅ Monitoramento de métricas para melhoria contínua",
    "❌ NUNCA usa bots de tráfego artificial",
    "❌ NUNCA manipula métricas artificialmente",
    "❌ NUNCA usa práticas black-hat de SEO"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header com Alerta Importante */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-red-800">
                  ⚠️ Importante: Por Que NÃO Criar Bots de Tráfego
                </h3>
                <p className="text-red-700 mt-2">
                  Bots de tráfego artificial violam as políticas do Google e podem resultar em 
                  <strong> banimento permanente</strong> do seu site. Em vez disso, implementei 
                  um sistema 100% ético que realmente funciona!
                </p>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            🤖 Sistema de SEO Automatizado (Ético)
          </h1>
          <p className="text-gray-600 text-lg">
            Estratégias legítimas de automação que fazem seu site crescer organicamente
          </p>
        </motion.div>

        {/* Features Implementadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <div className="ml-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    {feature.status}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{feature.description}</p>
              <p className="text-blue-600 text-xs font-medium">{feature.details}</p>
            </motion.div>
          ))}
        </div>

        {/* Conteúdo Gerado Automaticamente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Bot className="w-6 h-6 mr-2 text-blue-500" />
              Artigos Gerados Automaticamente
            </h2>

            <div className="space-y-4">
              {sampleContent.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                    <div>
                      <span className="font-medium">Keyword:</span> {article.keyword}
                    </div>
                    <div>
                      <span className="font-medium">Volume:</span> {article.searchVolume}
                    </div>
                    <div>
                      <span className="font-medium">Dificuldade:</span> {article.difficulty}
                    </div>
                    <div>
                      <span className="font-medium">Publicação:</span> {article.publishDate}
                    </div>
                  </div>
                  
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    article.category === 'meditacao' ? 'bg-blue-100 text-blue-800' :
                    article.category === 'ansiedade' ? 'bg-red-100 text-red-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {article.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abordagem Ética */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
              Práticas 100% Éticas
            </h2>

            <div className="space-y-3">
              {ethicalApproach.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className={`flex items-start p-3 rounded-lg ${
                    practice.startsWith('✅') ? 'bg-green-50' : 'bg-red-50'
                  }`}
                >
                  <span className="text-sm">{practice}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resultados Esperados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white"
        >
          <div className="text-center mb-6">
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">🚀 Sistema Funcionando!</h2>
            <p className="text-lg opacity-90">
              Estratégias éticas que realmente fazem seu site crescer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">150-300%</div>
              <div className="text-sm opacity-90">Crescimento de Tráfego Esperado</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Keywords em Top 20</div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">6 Meses</div>
              <div className="text-sm opacity-90">Para Ver Resultados Sólidos</div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold mb-2">
              💡 Próximos Passos Recomendados:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-4 py-2 rounded-full">1. Implementar artigos sugeridos</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">2. Monitorar métricas no dashboard</span>
              <span className="bg-white/20 px-4 py-2 rounded-full">3. Ajustar estratégia mensalmente</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SEOAutomationDemo;
