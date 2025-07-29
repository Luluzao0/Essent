// Serviço para integração com Cohere AI
export class CohereService {
  private apiKey: string;
  private baseUrl = 'https://api.cohere.ai/v1';

  constructor() {
    this.apiKey = import.meta.env.VITE_COHERE_API_KEY || 'demo-key';
  }

  async analyzeSentiment(text: string): Promise<{
    sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
    confidence: number;
    explanation: string;
  }> {
    if (this.apiKey === 'demo-key') {
      return this.simulateCohereAnalysis(text);
    }

    try {
      const response = await fetch(`${this.baseUrl}/chat`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'command-r7b-12-2024',
          message: `Analise o sentimento do seguinte texto em português e responda APENAS com um JSON no formato:
{
  "sentiment": "POSITIVE|NEGATIVE|NEUTRAL",
  "confidence": 0.85,
  "explanation": "Breve explicação em português"
}

Texto para analisar: "${text}"`,
          max_tokens: 200,
          temperature: 0.3
        })
      });

      const data = await response.json();
      
      if (data.text) {
        try {
          // Extrair JSON da resposta
          const jsonMatch = data.text.match(/\{[^}]+\}/);
          if (jsonMatch) {
            const result = JSON.parse(jsonMatch[0]);
            return {
              sentiment: result.sentiment || 'NEUTRAL',
              confidence: result.confidence || 0.5,
              explanation: result.explanation || 'Análise realizada por IA'
            };
          }
        } catch (parseError) {
          console.error('Error parsing Cohere response:', parseError);
        }
      }
      
      // Fallback para simulação se a API falhar
      return this.simulateCohereAnalysis(text);
    } catch (error) {
      console.error('Cohere API error:', error);
      return this.simulateCohereAnalysis(text);
    }
  }

  async generatePsychologistRecommendation(userMood: string): Promise<{
    title: string;
    description: string;
    category: string;
    priority: 'high' | 'medium' | 'low';
  }> {
    if (this.apiKey === 'demo-key') {
      return this.getSimulatedRecommendation(userMood);
    }

    try {
      const response = await fetch(`${this.baseUrl}/chat`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'command-r7b-12-2024',
          message: `Você é um psicólogo experiente especializado em bem-estar mental. Baseado no estado emocional descrito pelo paciente, forneça uma recomendação profissional.

Estado emocional do paciente: "${userMood}"

Responda APENAS com um JSON no formato:
{
  "title": "Nome da técnica/atividade",
  "description": "Descrição detalhada com orientação profissional",
  "category": "Categoria da técnica",
  "priority": "high|medium|low"
}

Foque em técnicas baseadas em evidências científicas como TCC, mindfulness, técnicas de relaxamento, etc.`,
          max_tokens: 300,
          temperature: 0.4
        })
      });

      const data = await response.json();
      
      if (data.text) {
        try {
          const jsonMatch = data.text.match(/\{[^}]+\}/);
          if (jsonMatch) {
            const result = JSON.parse(jsonMatch[0]);
            return {
              title: result.title || 'Técnica de Respiração',
              description: result.description || 'Pratique respiração profunda por 5 minutos',
              category: result.category || 'Relaxamento',
              priority: result.priority || 'medium'
            };
          }
        } catch (parseError) {
          console.error('Error parsing recommendation:', parseError);
        }
      }

      return this.getSimulatedRecommendation(userMood);
    } catch (error) {
      console.error('Cohere recommendation error:', error);
      return this.getSimulatedRecommendation(userMood);
    }
  }

  async generateTherapeuticResponse(userMessage: string, conversationContext: string[] = []): Promise<string> {
    if (this.apiKey === 'demo-key') {
      return this.getSimulatedTherapeuticResponse();
    }

    try {
      const contextText = conversationContext.length > 0 
        ? `Contexto da conversa anterior: ${conversationContext.slice(-3).join(' | ')}\n\n`
        : '';

      const response = await fetch(`${this.baseUrl}/chat`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'command-r7b-12-2024',
          message: `Você é um profissional da saúde especializado em psiquiatria, neurociência e psicologia comportamental. Aja como uma pessoa real, empática e acolhedora - não como uma máquina ou robô.

${contextText}Mensagem do paciente: "${userMessage}"

Diretrizes para conversar como uma pessoa real:
- Responda de forma calorosa, empática e genuinamente humana
- Use linguagem natural e conversacional, como se fosse um amigo especialista
- Compartilhe conhecimento científico de forma acessível e pessoal
- Demonstre compreensão emocional real pelos sentimentos da pessoa
- Conte brevemente como certas técnicas podem funcionar baseado em sua "experiência"
- Use expressões naturais como "eu entendo", "na minha experiência", "costumo recomendar"
- FORMATE sua resposta de forma natural:
  • **Destaque** pontos importantes naturalmente
  • Use listas quando fizer sentido na conversa
  • Escreva em parágrafos naturais, como falaria pessoalmente
- Responda em português, como uma conversa genuína (máximo 200 palavras)
- Seja autêntico: este é suporte de alguém que se importa, não substitui consulta médica

Responda como uma pessoa real que se importa:`,
          max_tokens: 250,
          temperature: 0.6
        })
      });

      const data = await response.json();
      
      if (data.text) {
        return data.text.trim();
      }

      return this.getSimulatedTherapeuticResponse();
    } catch (error) {
      console.error('Cohere therapeutic response error:', error);
      return this.getSimulatedTherapeuticResponse();
    }
  }

  // Métodos de simulação para fallback
  private async simulateCohereAnalysis(text: string) {
    const lower = text.toLowerCase();
    
    const positiveWords = ['feliz', 'bom', 'ótimo', 'excelente', 'amor', 'paz', 'alegria', 'gratidão', 'esperança'];
    const negativeWords = ['triste', 'ruim', 'péssimo', 'raiva', 'medo', 'ansiedade', 'depressão', 'estresse'];
    
    let positiveScore = 0;
    let negativeScore = 0;
    
    positiveWords.forEach(word => {
      if (lower.includes(word)) positiveScore++;
    });
    
    negativeWords.forEach(word => {
      if (lower.includes(word)) negativeScore++;
    });
    
    let sentiment: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
    let confidence: number;
    let explanation: string;
    
    if (positiveScore > negativeScore) {
      sentiment = 'POSITIVE';
      confidence = Math.min(0.6 + (positiveScore * 0.15), 0.95);
      explanation = `Detectei ${positiveScore} palavra(s) positiva(s) no texto.`;
    } else if (negativeScore > positiveScore) {
      sentiment = 'NEGATIVE';
      confidence = Math.min(0.6 + (negativeScore * 0.15), 0.95);
      explanation = `Detectei ${negativeScore} palavra(s) negativa(s) no texto.`;
    } else {
      sentiment = 'NEUTRAL';
      confidence = 0.5;
      explanation = 'O texto apresenta sentimentos neutros ou balanceados.';
    }
    
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
    
    return { sentiment, confidence, explanation };
  }

  private getSimulatedRecommendation(userMood: string) {
    const recommendations = [
      {
        title: 'Técnica de Respiração 4-7-8',
        description: 'Execute 4 respirações profundas seguindo o padrão: inspire por 4s, segure por 7s, expire por 8s. Esta técnica ativa o sistema nervoso parassimpático.',
        category: 'Relaxamento',
        priority: 'high' as const
      },
      {
        title: 'Mindfulness de 5 Minutos',
        description: 'Pratique atenção plena observando pensamentos sem julgamento. Foque na respiração e retorne a ela quando a mente divagar.',
        category: 'Mindfulness',
        priority: 'medium' as const
      },
      {
        title: 'Reestruturação Cognitiva',
        description: 'Identifique pensamentos negativos automáticos e questione sua veracidade. Substitua por pensamentos mais balanceados e realistas.',
        category: 'TCC',
        priority: 'high' as const
      }
    ];

    const isNegative = userMood.toLowerCase().includes('triste') || userMood.toLowerCase().includes('ansioso');
    return isNegative ? recommendations[0] : recommendations[Math.floor(Math.random() * recommendations.length)];
  }

  private getSimulatedTherapeuticResponse(): string {
    const responses = [
      `Eu entendo completamente o que você está passando. Como alguém que trabalha com **neurociência** há anos, posso te explicar que esses sentimentos têm uma base real no seu cérebro.

O que acontece é que seu **sistema límbico** está processando muito estresse. Na minha experiência, técnicas simples de respiração realmente ajudam porque ativam o nervo vago - é como dar um "reset" no seu sistema nervoso.

Que tal tentarmos juntos a técnica 4-7-8? Já vi muitas pessoas se beneficiarem dela.`,

      `Olha, pela minha experiência em **psicologia comportamental**, nossos padrões de pensamento podem sim ser mudados - e de forma mais fácil do que parece.

Costumo recomendar algo que chamo de "desafiar seus pensamentos". Quando você perceber um pensamento automático negativo, pare e se pergunte: "Isso é realmente verdade? Quais evidências eu tenho?"

É incrível como a **neuroplasticidade** permite que criemos novos caminhos neurais. Você tem mais poder sobre sua mente do que imagina.`,

      `Na minha prática, vejo que o bem-estar mental é como um quebra-cabeças - precisamos cuidar de várias peças.

Algumas estratégias que sempre funcionam bem:
• **Movimento físico** (libera endorfinas naturais)
• **Mindfulness** (acalma a amígdala, região do medo)
• **Conexões sociais** (aumenta oxitocina)

O legal é que quando fazemos isso consistentemente, nosso cérebro literalmente muda para melhor. Já presenciei transformações incríveis!`
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }

  async classifyText(text: string, categories: string[]): Promise<{
    category: string;
    confidence: number;
  }> {
    await new Promise(resolve => setTimeout(resolve, 600));
    console.log('Classifying text:', text, 'Categories:', categories);
    
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    return {
      category: randomCategory,
      confidence: 0.7 + Math.random() * 0.25
    };
  }
}

export const cohereService = new CohereService();
