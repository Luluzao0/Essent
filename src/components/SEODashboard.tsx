import React, { useState, useEffect } from 'react';
import { TrendingUp, Search, Target, BarChart3, Calendar, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface DashboardMetric {
  label: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

const SEODashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetric[]>([]);
  const [opportunityReport, setOpportunityReport] = useState<string>('');
  const [seoReport, setSeoReport] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // Simula dados reais que viriam do Google Analytics/Search Console
        const dashboardMetrics: DashboardMetric[] = [
          {
            label: 'Posição Média',
            value: 18.5,
            change: -2.3, // Melhorou (número menor é melhor)
            icon: <Target className="w-6 h-6" />,
            color: 'text-green-600'
          },
          {
            label: 'Clicks Orgânicos',
            value: 324,
            change: +28.5,
            icon: <BarChart3 className="w-6 h-6" />,
            color: 'text-blue-600'
          },
          {
            label: 'Impressões',
            value: '8.2K',
            change: +15.7,
            icon: <Search className="w-6 h-6" />,
            color: 'text-purple-600'
          },
          {
            label: 'CTR Médio',
            value: '3.95%',
            change: +0.8,
            icon: <TrendingUp className="w-6 h-6" />,
            color: 'text-emerald-600'
          }
        ];

        setMetrics(dashboardMetrics);
        
        // Simula relatórios para demonstração
        const oppReport = `
🎯 RELATÓRIO DE OPORTUNIDADES SEO

📈 TENDÊNCIAS EMERGENTES (5 identificadas):
• burnout sintomas - Volume: 14,800/mês (+45%)
• saúde mental no trabalho - Volume: 8,100/mês (+38%)
• meditação para crianças - Volume: 3,600/mês (+52%)
• ansiedade pós covid - Volume: 2,900/mês (+28%)
• mindfulness trabalho - Volume: 1,200/mês (+35%)

🔑 KEYWORDS PRIORITÁRIAS:
• como meditar em casa (Score: 85) - Baixa competição, Long-tail keyword
• técnicas respiração ansiedade (Score: 82) - Intenção de busca clara
• mindfulness para iniciantes (Score: 78) - Long-tail keyword, Baixa competição
• exercícios contra depressão (Score: 75) - Intenção de busca clara
• autoajuda para ansiedade (Score: 72) - Baixa competição

📅 OPORTUNIDADES SAZONAIS ESTE MÊS:
• Setembro Amarelo - Prevenção ao Suicídio
• Volta às aulas - Ansiedade escolar
• Mudança de estação - Renovação pessoal

📝 PRÓXIMOS CONTEÚDOS SUGERIDOS:
• Como Lidar com Burnout: Guia Completo 2025 (31/07)
• Meditação para Crianças: Técnicas Lúdicas (07/08) 
• Saúde Mental no Trabalho: 10 Estratégias (14/08)
• Ansiedade Pós-COVID: Como Superar (21/08)

🚀 AÇÕES RECOMENDADAS:
1. Criar conteúdo sobre as 3 tendências principais
2. Otimizar páginas existentes com keywords prioritárias  
3. Aproveitar eventos sazonais para conteúdo relevante
4. Monitorar competitors nessas palavras-chave
`;

        const seoRep = `
📊 RELATÓRIO SEO - ${new Date().toLocaleDateString('pt-BR')}

🎯 PALAVRAS-CHAVE PRINCIPAIS:
• "meditação para ansiedade"
  Posição: 15 | Clicks: 45 | CTR: 3.75%
  Volume: 2,400 buscas/mês

• "como meditar"
  Posição: 23 | Clicks: 23 | CTR: 2.7%
  Volume: 8,100 buscas/mês

• "técnicas de respiração"
  Posição: 18 | Clicks: 38 | CTR: 4.2%
  Volume: 1,600 buscas/mês

🚀 OPORTUNIDADES DE MELHORIA:
• "meditação para ansiedade" está na posição 15 - pode chegar à primeira página
• "como meditar" tem CTR baixo (2.7%) - otimizar title/description
• "técnicas de respiração" tem muitas impressões mas poucos clicks - melhorar snippet

📈 MÉTRICAS CONSOLIDADAS:
• Total de keywords rastreadas: 24
• Média de posição: 18.5
• Total de clicks: 324
• CTR médio: 3.95%

💡 PRÓXIMAS AÇÕES RECOMENDADAS:
1. Otimizar títulos das páginas com CTR baixo
2. Criar conteúdo para keywords em posição 11-20
3. Melhorar internal linking entre páginas relacionadas
4. Atualizar meta descriptions para aumentar CTR
`;
        
        setOpportunityReport(oppReport);
        setSeoReport(seoRep);
        
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar dados do dashboard:', error);
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Dashboard SEO - Essent
          </h1>
          <p className="text-gray-600">
            Monitoramento em tempo real das métricas de SEO e oportunidades de crescimento
          </p>
        </motion.div>

        {/* Métricas Principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gray-50 ${metric.color}`}>
                  {metric.icon}
                </div>
                <span className={`text-sm font-medium ${
                  metric.change > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{metric.label}</h3>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Relatórios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Relatório de Oportunidades */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <AlertCircle className="w-6 h-6 text-orange-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Oportunidades de Crescimento</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 max-h-96 overflow-y-auto whitespace-pre-line">
              {opportunityReport}
            </div>
          </motion.div>

          {/* Relatório SEO Detalhado */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <BarChart3 className="w-6 h-6 text-blue-500 mr-3" />
              <h2 className="text-xl font-bold text-gray-900">Análise Detalhada</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm text-gray-700 max-h-96 overflow-y-auto whitespace-pre-line">
              {seoReport}
            </div>
          </motion.div>
        </div>

        {/* Ações Recomendadas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white"
        >
          <div className="flex items-center mb-4">
            <Calendar className="w-6 h-6 mr-3" />
            <h2 className="text-xl font-bold">Próximas Ações - Esta Semana</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">📝 Criar Conteúdo</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Artigo "Burnout sintomas" (alta prioridade)</li>
                <li>• Guia "Meditação para crianças"</li>
                <li>• Post "Saúde mental no trabalho"</li>
              </ul>
            </div>
            
            <div className="bg-white/10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">🔧 Otimizações</h3>
              <ul className="text-sm space-y-1 opacity-90">
                <li>• Melhorar CTR da página /meditation</li>
                <li>• Adicionar internal links em /practices</li>
                <li>• Atualizar meta descriptions</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Footer com Instruções */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6"
        >
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-800 mb-2">
                ⚠️ Importante: Estratégias Éticas de SEO
              </h3>
              <p className="text-amber-700 text-sm mb-3">
                Este dashboard mostra estratégias 100% éticas e sustentáveis para melhorar seu ranking organicamente:
              </p>
              <ul className="text-amber-700 text-sm space-y-1 ml-4">
                <li>• ✅ Criação de conteúdo de qualidade baseado em dados reais</li>
                <li>• ✅ Otimização técnica seguindo diretrizes do Google</li>
                <li>• ✅ Link building natural através de parcerias legítimas</li>
                <li>• ✅ Monitoramento de métricas para melhoria contínua</li>
                <li>• ❌ Nunca usar bots de tráfego artificial ou práticas black-hat</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SEODashboard;
