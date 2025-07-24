import { motion } from 'framer-motion';
import { Download, BookOpen, Calculator, PenTool, Brain, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import { SectionTransition } from '../components/PageTransition';

const Resources = () => {
  const resources = [
    {
      category: "Testes e Avaliações",
      icon: Calculator,
      color: "from-blue-500 to-blue-600",
      items: [
        {
          title: "Teste de Ansiedade GAD-7",
          description: "Avalie seus níveis de ansiedade com o questionário científico GAD-7",
          type: "Teste Online",
          downloadUrl: "#"
        },
        {
          title: "Escala de Depressão PHQ-9",
          description: "Questionário validado para identificar sinais de depressão",
          type: "Avaliação",
          downloadUrl: "#"
        },
        {
          title: "Teste de Estresse Percebido",
          description: "Descubra como o estresse está afetando sua vida",
          type: "Teste Online",
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Guias e E-books",
      icon: BookOpen,
      color: "from-green-500 to-green-600",
      items: [
        {
          title: "Guia Completo de Mindfulness",
          description: "Manual prático com 30 exercícios de atenção plena",
          type: "E-book PDF",
          downloadUrl: "#"
        },
        {
          title: "21 Dias de Meditação",
          description: "Programa estruturado para formar o hábito da meditação",
          type: "Programa",
          downloadUrl: "#"
        },
        {
          title: "Técnicas de Respiração Anti-Ansiedade",
          description: "10 técnicas cientificamente comprovadas para acalmar a mente",
          type: "Guia Prático",
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Worksheets e Exercícios",
      icon: PenTool,
      color: "from-purple-500 to-purple-600",
      items: [
        {
          title: "Diário de Gratidão",
          description: "Template para praticar gratidão diariamente",
          type: "Worksheet",
          downloadUrl: "#"
        },
        {
          title: "Planejador de Autocuidado",
          description: "Organize suas práticas de bem-estar semanais",
          type: "Planner",
          downloadUrl: "#"
        },
        {
          title: "Exercícios de Reestruturação Cognitiva",
          description: "Técnicas da TCC para transformar pensamentos negativos",
          type: "Exercícios",
          downloadUrl: "#"
        }
      ]
    },
    {
      category: "Recursos Científicos",
      icon: Brain,
      color: "from-indigo-500 to-indigo-600",
      items: [
        {
          title: "Pesquisas sobre Meditação e Cérebro",
          description: "Compilação de estudos sobre neuroplasticidade e meditação",
          type: "Artigo Científico",
          downloadUrl: "#"
        },
        {
          title: "Benefícios do Mindfulness: Meta-análise",
          description: "Revisão de 200+ estudos sobre os efeitos do mindfulness",
          type: "Pesquisa",
          downloadUrl: "#"
        },
        {
          title: "TCC vs. Meditação: Comparativo",
          description: "Análise da eficácia de diferentes abordagens terapêuticas",
          type: "Comparativo",
          downloadUrl: "#"
        }
      ]
    }
  ];

  const tools = [
    {
      title: "Calculadora de Estresse",
      description: "Avalie seus níveis de estresse baseado em fatores da vida",
      icon: Calculator,
      color: "bg-red-500",
      link: "#"
    },
    {
      title: "Gerador de Afirmações",
      description: "Receba afirmações personalizadas para seu momento atual",
      icon: Heart,
      color: "bg-pink-500",
      link: "#"
    },
    {
      title: "Quiz: Seu Perfil de Meditação",
      description: "Descubra qual tipo de meditação é ideal para você",
      icon: Brain,
      color: "bg-purple-500",
      link: "#"
    }
  ];

  return (
    <div style={{ 
      paddingTop: 'clamp(60px, 10vw, 80px)',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #f1f5f9 75%, #f0f9ff 100%)',
      minHeight: '100vh'
    }}>
      <SEO 
        title="Recursos Gratuitos de Saúde Mental e Bem-Estar | Essent"
        description="Acesse testes de ansiedade, guias de meditação, worksheets de autocuidado e pesquisas científicas sobre saúde mental. Recursos validados por psicólogos."
        keywords="recursos saúde mental, teste ansiedade online, guias meditação grátis, worksheets autocuidado, pesquisas científicas psicologia, material psicológico gratuito"
        url="https://essentpsi.vercel.app/resources"
      />

      <SectionTransition delay={0}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Recursos Gratuitos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Acesse nossa biblioteca completa de recursos científicos para saúde mental: 
              testes validados, guias práticos, exercícios e pesquisas atualizadas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                ✓ Cientificamente Validados
              </span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                ✓ 100% Gratuitos
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                ✓ Recomendados por Psicólogos
              </span>
            </div>
          </motion.div>

          {/* Interactive Tools */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Ferramentas Interativas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className={`w-14 h-14 ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <tool.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Usar Ferramenta</span>
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Resource Categories */}
          {resources.map((category, categoryIndex) => (
            <motion.section
              key={category.category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{category.category}</h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-800 flex-1">{item.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full ml-2">
                        {item.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <button className="flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-sm font-medium">
                      <Download className="w-4 h-4 mr-2" />
                      Download Gratuito
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Newsletter CTA */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Receba Novos Recursos Semanalmente
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Cadastre-se e seja o primeiro a acessar nossos novos materiais científicos
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Cadastrar
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              100% gratuito • Sem spam • Cancele quando quiser
            </p>
          </motion.section>

        </div>
      </SectionTransition>
    </div>
  );
};

export default Resources;
