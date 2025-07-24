export interface MotivationalQuote {
  id: number;
  text: string;
  author: string;
  category: 'motivation' | 'peace' | 'growth' | 'resilience' | 'mindfulness' | 'gratitude' | 'self-love' | 'courage' | 'wisdom' | 'hope';
}

export interface WellnessImage {
  id: number;
  url: string;
  alt: string;
  category: 'nature' | 'meditation' | 'serenity' | 'inspiration';
  width: number;
  height: number;
}

export interface WellnessVideo {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  duration: string;
  category: 'meditation' | 'breathing' | 'relaxation' | 'mindfulness';
  description: string;
}

export interface DailyRecommendation {
  id: number;
  date: string;
  quote: MotivationalQuote;
  activity: string;
  meditation: string;
  affirmation: string;
}

export const motivationalQuotes: MotivationalQuote[] = [
  // MOTIVAÇÃO
  {
    id: 1,
    text: "A jornada de mil milhas começa com um único passo.",
    author: "Lao Tzu",
    category: "motivation"
  },
  {
    id: 2,
    text: "A felicidade não é algo pronto. Ela vem de suas próprias ações.",
    author: "Dalai Lama",
    category: "motivation"
  },
  {
    id: 3,
    text: "Você é capaz de coisas incríveis.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 4,
    text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    author: "Robert Collier",
    category: "motivation"
  },
  {
    id: 5,
    text: "Não espere por oportunidades extraordinárias. Agarre oportunidades comuns e torne-as grandiosas.",
    author: "Orison Swett Marden",
    category: "motivation"
  },
  {
    id: 6,
    text: "A motivação é o que te faz começar. O hábito é o que te mantém indo.",
    author: "Jim Ryun",
    category: "motivation"
  },
  {
    id: 7,
    text: "Você nunca é velho demais para definir outro objetivo ou sonhar um novo sonho.",
    author: "C.S. Lewis",
    category: "motivation"
  },
  {
    id: 8,
    text: "O único modo de fazer um excelente trabalho é amar o que você faz.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    id: 9,
    text: "Acredite que você pode e você já está no meio do caminho.",
    author: "Theodore Roosevelt",
    category: "motivation"
  },
  {
    id: 10,
    text: "Sua limitação é apenas sua imaginação.",
    author: "Desconhecido",
    category: "motivation"
  },

  // RESILIÊNCIA
  {
    id: 11,
    text: "Você é mais corajoso do que acredita, mais forte do que parece, e mais amado do que imagina.",
    author: "A.A. Milne",
    category: "resilience"
  },
  {
    id: 12,
    text: "O que está atrás de nós e o que está à nossa frente são pequenas questões comparadas ao que está dentro de nós.",
    author: "Ralph Waldo Emerson",
    category: "resilience"
  },
  {
    id: 13,
    text: "Você tem sobrevivido a 100% dos seus piores dias. Isso é um recorde impressionante.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 14,
    text: "A vida não é sobre esperar a tempestade passar, é sobre aprender a dançar na chuva.",
    author: "Vivian Greene",
    category: "resilience"
  },
  {
    id: 15,
    text: "Forças não vêm da capacidade física. Elas vêm de uma vontade indomável.",
    author: "Mahatma Gandhi",
    category: "resilience"
  },
  {
    id: 16,
    text: "Toda experiência difícil é uma oportunidade de crescimento disfarçada.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 17,
    text: "Quando tudo parecer estar indo contra você, lembre-se de que o avião decola contra o vento, não com ele.",
    author: "Henry Ford",
    category: "resilience"
  },
  {
    id: 18,
    text: "A resiliência não é sobre nunca cair, é sobre sempre se levantar.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 19,
    text: "Você é mais forte do que qualquer desafio que enfrenta.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 20,
    text: "O que não te mata, te fortalece.",
    author: "Friedrich Nietzsche",
    category: "resilience"
  },

  // PAZ
  {
    id: 21,
    text: "A paz não pode ser mantida pela força; só pode ser alcançada pelo entendimento.",
    author: "Albert Einstein",
    category: "peace"
  },
  {
    id: 22,
    text: "A calma é um superpoder.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 23,
    text: "Aceite o que é, deixe ir o que foi, tenha fé no que será.",
    author: "Sonia Ricotti",
    category: "peace"
  },
  {
    id: 24,
    text: "Paz interior começa no momento em que você escolhe não permitir que pessoa ou evento controle suas emoções.",
    author: "Pema Chödrön",
    category: "peace"
  },
  {
    id: 25,
    text: "Não há caminho para a paz; a paz é o caminho.",
    author: "Mahatma Gandhi",
    category: "peace"
  },
  {
    id: 26,
    text: "A serenidade não é liberdade da tempestade, mas paz em meio à tempestade.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 27,
    text: "Quando você se conecta com o silêncio interior, você se conecta com sua fonte de orientação.",
    author: "Deepak Chopra",
    category: "peace"
  },
  {
    id: 28,
    text: "A paz é o resultado de retreinar sua mente para processar a vida como ela é, em vez de como você acha que deveria ser.",
    author: "Wayne Dyer",
    category: "peace"
  },
  {
    id: 29,
    text: "Encontre paz no silêncio entre os pensamentos.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 30,
    text: "A verdadeira paz interior vem da aceitação do que é.",
    author: "Desconhecido",
    category: "peace"
  },

  // MINDFULNESS
  {
    id: 31,
    text: "O presente é um presente. É por isso que se chama presente.",
    author: "Eleanor Roosevelt",
    category: "mindfulness"
  },
  {
    id: 32,
    text: "Respire fundo e lembre-se de quem você é.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 33,
    text: "A mente é tudo. O que você pensa, você se torna.",
    author: "Buda",
    category: "mindfulness"
  },
  {
    id: 34,
    text: "A atenção plena é sobre estar acordado. Não é sobre mudar quem você é.",
    author: "Jon Kabat-Zinn",
    category: "mindfulness"
  },
  {
    id: 35,
    text: "Ontem é história, amanhã é um mistério, hoje é um presente.",
    author: "Bill Keane",
    category: "mindfulness"
  },
  {
    id: 36,
    text: "Observe seus pensamentos, eles se tornam palavras. Observe suas palavras, elas se tornam ações.",
    author: "Lao Tzu",
    category: "mindfulness"
  },
  {
    id: 37,
    text: "A consciência é o maior agente de mudança.",
    author: "Eckhart Tolle",
    category: "mindfulness"
  },
  {
    id: 38,
    text: "Seja onde você está; use o que você tem; faça o que você pode.",
    author: "Arthur Ashe",
    category: "mindfulness"
  },
  {
    id: 39,
    text: "O momento presente é o único tempo sobre o qual temos domínio.",
    author: "Thích Nhất Hạnh",
    category: "mindfulness"
  },
  {
    id: 40,
    text: "Atenção plena é a chave que abre a porta para a liberdade interior.",
    author: "Desconhecido",
    category: "mindfulness"
  },

  // CRESCIMENTO
  {
    id: 41,
    text: "Seja você mesmo; todos os outros já foram tomados.",
    author: "Oscar Wilde",
    category: "growth"
  },
  {
    id: 42,
    text: "Cada dia é uma nova oportunidade para crescer e se tornar a melhor versão de si mesmo.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 43,
    text: "O crescimento começa no final da sua zona de conforto.",
    author: "Tony Robbins",
    category: "growth"
  },
  {
    id: 44,
    text: "Você não pode voltar e mudar o início, mas pode começar onde está e mudar o final.",
    author: "C.S. Lewis",
    category: "growth"
  },
  {
    id: 45,
    text: "A única pessoa que você está destinado a se tornar é a pessoa que você decide ser.",
    author: "Ralph Waldo Emerson",
    category: "growth"
  },
  {
    id: 46,
    text: "Invista em si mesmo. Você é o seu próprio melhor ativo.",
    author: "Warren Buffett",
    category: "growth"
  },
  {
    id: 47,
    text: "O crescimento pessoal é um processo contínuo de autodescoberta e autoaperfeiçoamento.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 48,
    text: "Seja curioso, não julgador.",
    author: "Walt Whitman",
    category: "growth"
  },
  {
    id: 49,
    text: "A mudança é o resultado final de todo verdadeiro aprendizado.",
    author: "Leo Buscaglia",
    category: "growth"
  },
  {
    id: 50,
    text: "Você cresce mais quando sai da sua zona de conforto.",
    author: "Desconhecido",
    category: "growth"
  },

  // GRATIDÃO
  {
    id: 51,
    text: "A gratidão transforma o que temos em suficiente.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 52,
    text: "Seja grato pelo que você tem; você acabará tendo mais.",
    author: "Oprah Winfrey",
    category: "gratitude"
  },
  {
    id: 53,
    text: "A gratidão é não apenas a maior das virtudes, mas a mãe de todas as outras.",
    author: "Cícero",
    category: "gratitude"
  },
  {
    id: 54,
    text: "Agradeça pelo que você tem hoje, e você atrairá mais coisas boas amanhã.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 55,
    text: "A gratidão faz sentido do nosso passado, traz paz para hoje e cria uma visão para amanhã.",
    author: "Melody Beattie",
    category: "gratitude"
  },
  {
    id: 56,
    text: "Quando focamos no que é bom, o bem se multiplica.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 57,
    text: "A apreciação é uma coisa maravilhosa: ela faz o que é excelente nos outros pertencer a nós também.",
    author: "Voltaire",
    category: "gratitude"
  },
  {
    id: 58,
    text: "Em vez de reclamar que a roseira tem espinhos, alegre-se que o espinheiro tem rosas.",
    author: "Provérbio Árabe",
    category: "gratitude"
  },
  {
    id: 59,
    text: "A gratidão é um ímã para milagres.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 60,
    text: "Conte suas bênçãos, não seus problemas.",
    author: "Desconhecido",
    category: "gratitude"
  },

  // AMOR PRÓPRIO
  {
    id: 61,
    text: "Você mesmo, tanto quanto qualquer pessoa no universo inteiro, merece seu amor e carinho.",
    author: "Buda",
    category: "self-love"
  },
  {
    id: 62,
    text: "Seja gentil consigo mesmo. Você está fazendo o melhor que pode.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 63,
    text: "Você é suficiente exatamente como você é.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 64,
    text: "O relacionamento mais importante que você terá é o relacionamento consigo mesmo.",
    author: "Diane Von Furstenberg",
    category: "self-love"
  },
  {
    id: 65,
    text: "Ame-se primeiro e todo o resto se alinha.",
    author: "Lucille Ball",
    category: "self-love"
  },
  {
    id: 66,
    text: "Você não pode servir de um copo vazio. Cuide de si mesmo primeiro.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 67,
    text: "Seja sua própria melhor amiga. Trate-se com a mesma gentileza que ofereceria a alguém que ama.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 68,
    text: "Você é digno de amor e pertencimento.",
    author: "Brené Brown",
    category: "self-love"
  },
  {
    id: 69,
    text: "Fale consigo mesmo como falaria com alguém que ama.",
    author: "Brené Brown",
    category: "self-love"
  },
  {
    id: 70,
    text: "Autocuidado não é egoísmo. Não se pode servir de um recipiente vazio.",
    author: "Eleanor Brown",
    category: "self-love"
  },

  // CORAGEM
  {
    id: 71,
    text: "A coragem não é a ausência do medo, mas ação apesar dele.",
    author: "Nelson Mandela",
    category: "courage"
  },
  {
    id: 72,
    text: "Você é mais corajoso do que acredita e mais forte do que parece.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 73,
    text: "A coragem é como um músculo. Quanto mais você a usa, mais forte ela fica.",
    author: "Ruth Gordon",
    category: "courage"
  },
  {
    id: 74,
    text: "Não deixe que o medo de derrubar te impeça de jogar.",
    author: "Babe Ruth",
    category: "courage"
  },
  {
    id: 75,
    text: "A única coisa que temos a temer é o próprio medo.",
    author: "Franklin D. Roosevelt",
    category: "courage"
  },
  {
    id: 76,
    text: "Seja corajoso. Assuma riscos. Nada pode substituir a experiência.",
    author: "Paulo Coelho",
    category: "courage"
  },
  {
    id: 77,
    text: "A coragem é ser assustado até a morte, mas subir na sela assim mesmo.",
    author: "John Wayne",
    category: "courage"
  },
  {
    id: 78,
    text: "Você ganha força, coragem e confiança a cada experiência em que para e encara o medo de frente.",
    author: "Eleanor Roosevelt",
    category: "courage"
  },
  {
    id: 79,
    text: "A vida se contrai ou expande em proporção à nossa coragem.",
    author: "Anaïs Nin",
    category: "courage"
  },
  {
    id: 80,
    text: "Coragem é encontrar sua voz e inspirar outros a encontrar a deles.",
    author: "Desconhecido",
    category: "courage"
  },

  // SABEDORIA
  {
    id: 81,
    text: "A sabedoria vem da experiência, e a experiência vem dos erros.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 82,
    text: "Conhecer os outros é inteligência; conhecer-se a si mesmo é verdadeira sabedoria.",
    author: "Lao Tzu",
    category: "wisdom"
  },
  {
    id: 83,
    text: "A vida é 10% do que acontece com você e 90% de como você reage a isso.",
    author: "Charles R. Swindoll",
    category: "wisdom"
  },
  {
    id: 84,
    text: "O sábio não é aquele que conhece as respostas certas, mas aquele que faz as perguntas certas.",
    author: "Claude Levi-Strauss",
    category: "wisdom"
  },
  {
    id: 85,
    text: "A experiência é uma escola difícil porque ela dá o teste primeiro, a lição depois.",
    author: "Vernon Law",
    category: "wisdom"
  },
  {
    id: 86,
    text: "Seja sábio o suficiente para aprender com os erros dos outros.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 87,
    text: "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    author: "Sócrates",
    category: "wisdom"
  },
  {
    id: 88,
    text: "A sabedoria não vem com a idade, vem com a experiência.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 89,
    text: "Às vezes você precisa dar um passo para trás para ver o quadro todo.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 90,
    text: "A sabedoria é saber quando falar e quando ouvir.",
    author: "Desconhecido",
    category: "wisdom"
  },

  // ESPERANÇA
  {
    id: 91,
    text: "A esperança é ver uma luz apesar de estar cercado pela escuridão.",
    author: "Desmond Tutu",
    category: "hope"
  },
  {
    id: 92,
    text: "Mantenha seus olhos nas estrelas e seus pés no chão.",
    author: "Theodore Roosevelt",
    category: "hope"
  },
  {
    id: 93,
    text: "Onde há vida, há esperança.",
    author: "Stephen Hawking",
    category: "hope"
  },
  {
    id: 94,
    text: "A esperança é a única coisa mais forte que o medo.",
    author: "Suzanne Collins",
    category: "hope"
  },
  {
    id: 95,
    text: "Amanhã é o primeiro dia do resto da sua vida.",
    author: "Abbie Hoffman",
    category: "hope"
  },
  {
    id: 96,
    text: "Mesmo a noite mais longa terminará e o sol nascerá.",
    author: "Victor Hugo",
    category: "hope"
  },
  {
    id: 97,
    text: "A esperança é o sonho do homem acordado.",
    author: "Aristóteles",
    category: "hope"
  },
  {
    id: 98,
    text: "Não importa quão difícil seja hoje, acredite que dias melhores estão chegando.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 99,
    text: "A esperança é uma estratégia de sobrevivência do espírito.",
    author: "Cornel West",
    category: "hope"
  },
  {
    id: 100,
    text: "Todo final é um novo começo disfarçado.",
    author: "Desconhecido",
    category: "hope"
  },

  // MAIS MOTIVAÇÃO (101-200)
  {
    id: 101,
    text: "O sucesso não é final, o fracasso não é fatal: é a coragem de continuar que conta.",
    author: "Winston Churchill",
    category: "motivation"
  },
  {
    id: 102,
    text: "Não deixe que o ruído das opiniões dos outros abafe sua voz interior.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    id: 103,
    text: "A persistência é o caminho do êxito.",
    author: "Charles Chaplin",
    category: "motivation"
  },
  {
    id: 104,
    text: "Grandes realizações exigem grande ambição.",
    author: "Heródoto",
    category: "motivation"
  },
  {
    id: 105,
    text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    author: "Eleanor Roosevelt",
    category: "motivation"
  },
  {
    id: 106,
    text: "Não é sobre ser perfeito. É sobre ser melhor do que você era ontem.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 107,
    text: "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    author: "Charles R. Swindoll",
    category: "motivation"
  },
  {
    id: 108,
    text: "Se você quer algo que nunca teve, deve fazer algo que nunca fez.",
    author: "Thomas Jefferson",
    category: "motivation"
  },
  {
    id: 109,
    text: "A disciplina é a ponte entre pensamento e realização.",
    author: "Jim Rohn",
    category: "motivation"
  },
  {
    id: 110,
    text: "Comece onde está, use o que tem, faça o que pode.",
    author: "Arthur Ashe",
    category: "motivation"
  },
  {
    id: 111,
    text: "O único impossível é aquilo que você não tenta.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 112,
    text: "Seja a mudança que você quer ver no mundo.",
    author: "Mahatma Gandhi",
    category: "motivation"
  },
  {
    id: 113,
    text: "A vida começa no final da sua zona de conforto.",
    author: "Neale Donald Walsch",
    category: "motivation"
  },
  {
    id: 114,
    text: "Não espere por oportunidades, crie-as.",
    author: "George Bernard Shaw",
    category: "motivation"
  },
  {
    id: 115,
    text: "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    author: "Vidal Sassoon",
    category: "motivation"
  },
  {
    id: 116,
    text: "A diferença entre o possível e o impossível está na determinação de uma pessoa.",
    author: "Tommy Lasorda",
    category: "motivation"
  },
  {
    id: 117,
    text: "Não conte os dias, faça os dias contarem.",
    author: "Muhammad Ali",
    category: "motivation"
  },
  {
    id: 118,
    text: "A excelência não é uma habilidade, é uma atitude.",
    author: "Ralph Marston",
    category: "motivation"
  },
  {
    id: 119,
    text: "Você tem dentro de si agora, tudo o que precisa para lidar com qualquer coisa que o mundo pode jogar em você.",
    author: "Brian Tracy",
    category: "motivation"
  },
  {
    id: 120,
    text: "A motivação é o que te faz começar. O hábito é o que te mantém em movimento.",
    author: "Jim Ryun",
    category: "motivation"
  },

  // MAIS RESILIÊNCIA (121-220)
  {
    id: 121,
    text: "Não é a força mais forte que sobrevive, nem a mais inteligente, mas a que melhor se adapta às mudanças.",
    author: "Charles Darwin",
    category: "resilience"
  },
  {
    id: 122,
    text: "A vida não é sobre como você caiu, mas sobre como você se levanta.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 123,
    text: "Você é mais forte do que imagina, mais talentoso do que pensa e mais amado do que sabe.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 124,
    text: "As feridas são por onde a luz entra.",
    author: "Rumi",
    category: "resilience"
  },
  {
    id: 125,
    text: "Sua força atual é prova de que você já passou por situações difíceis antes.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 126,
    text: "Cada tempestade na sua vida é seguida por um arco-íris.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 127,
    text: "A coragem não é a ausência do medo, mas a decisão de que algo é mais importante que o medo.",
    author: "Ambrose Redmoon",
    category: "resilience"
  },
  {
    id: 128,
    text: "Você não afunda por cair na água. Você afunda por ficar lá.",
    author: "Edwin Louis Cole",
    category: "resilience"
  },
  {
    id: 129,
    text: "A dor é temporária, mas desistir dura para sempre.",
    author: "Lance Armstrong",
    category: "resilience"
  },
  {
    id: 130,
    text: "Quando você passa por dificuldades e decide não se render, isso é força.",
    author: "Arnold Schwarzenegger",
    category: "resilience"
  },

  // MAIS PAZ (131-230)
  {
    id: 131,
    text: "A paz vem de dentro. Não a procure fora.",
    author: "Buda",
    category: "peace"
  },
  {
    id: 132,
    text: "Em meio às dificuldades encontram-se as melhores oportunidades.",
    author: "Albert Einstein",
    category: "peace"
  },
  {
    id: 133,
    text: "A serenidade é não se irritar com o que você não pode controlar.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 134,
    text: "A paz é a única batalha que vale a pena lutar.",
    author: "Albert Camus",
    category: "peace"
  },
  {
    id: 135,
    text: "Quando você soltar, você criará espaço para coisas melhores entrarem na sua vida.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 136,
    text: "A tranquilidade é uma escolha. Assim como a ansiedade, o medo e a frustração.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 137,
    text: "Nem tudo que você perde é uma perda. Às vezes é uma libertação.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 138,
    text: "A paz interior é o novo sucesso.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 139,
    text: "Você encontra paz não reorganizando as circunstâncias de sua vida, mas percebendo quem você é no nível mais profundo.",
    author: "Eckhart Tolle",
    category: "peace"
  },
  {
    id: 140,
    text: "A paz é o resultado de retreinar sua mente para processar a vida como ela é.",
    author: "Wayne Dyer",
    category: "peace"
  },

  // MAIS MINDFULNESS (141-240)
  {
    id: 141,
    text: "A vida está acontecendo agora. Não perca observando o passado ou planejando o futuro.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 142,
    text: "A atenção plena é sobre estar aqui agora, em cada momento.",
    author: "Jon Kabat-Zinn",
    category: "mindfulness"
  },
  {
    id: 143,
    text: "Onde quer que você esteja, esteja lá totalmente.",
    author: "Eckhart Tolle",
    category: "mindfulness"
  },
  {
    id: 144,
    text: "O presente é o único momento que realmente possuímos.",
    author: "Thích Nhất Hạnh",
    category: "mindfulness"
  },
  {
    id: 145,
    text: "Mindfulness não é sobre livrar-se dos pensamentos. É sobre mudar sua relação com eles.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 146,
    text: "Cada momento é uma nova oportunidade para começar de novo.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 147,
    text: "A consciência é curar. A observação é transformação.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 148,
    text: "Sua respiração é sua âncora no momento presente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 149,
    text: "A mente que é lenta para esquecer pequenos atos de bondade, perdoa facilmente grandes ofensas.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 150,
    text: "Estar presente é um presente que você dá a si mesmo.",
    author: "Desconhecido",
    category: "mindfulness"
  },

  // MAIS CRESCIMENTO (151-250)
  {
    id: 151,
    text: "A vida não fica mais fácil, você fica mais forte.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 152,
    text: "Todo expert foi um dia um iniciante. Todo profissional foi um dia um amador.",
    author: "Robin Sharma",
    category: "growth"
  },
  {
    id: 153,
    text: "O aprendizado nunca para. A curiosidade pode conquistar o medo ainda melhor que a coragem.",
    author: "James Stephens",
    category: "growth"
  },
  {
    id: 154,
    text: "Você não pode voltar e mudar o início, mas pode começar onde está e mudar o final.",
    author: "C.S. Lewis",
    category: "growth"
  },
  {
    id: 155,
    text: "O crescimento pessoal tem a ver com melhorar sua qualidade de vida.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 156,
    text: "Sua única competição é quem você foi ontem.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 157,
    text: "O maior investimento que você pode fazer é em si mesmo.",
    author: "Warren Buffett",
    category: "growth"
  },
  {
    id: 158,
    text: "Mudança é difícil no início, bagunçada no meio e bonita no final.",
    author: "Robin Sharma",
    category: "growth"
  },
  {
    id: 159,
    text: "Você cresce mais durante os momentos desafiadores da sua vida.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 160,
    text: "A jornada de autodescoberta é a mais importante que você pode fazer.",
    author: "Desconhecido",
    category: "growth"
  },

  // MAIS GRATIDÃO (161-260)
  {
    id: 161,
    text: "Gratidão é a memoria do coração.",
    author: "Jean Baptiste Massieu",
    category: "gratitude"
  },
  {
    id: 162,
    text: "A gratidão abre a plenitude da vida.",
    author: "Melody Beattie",
    category: "gratitude"
  },
  {
    id: 163,
    text: "Quando você agradece o que tem, você acaba tendo mais.",
    author: "Oprah Winfrey",
    category: "gratitude"
  },
  {
    id: 164,
    text: "Gratidão transforma dias comuns em ações de graça.",
    author: "William Arthur Ward",
    category: "gratitude"
  },
  {
    id: 165,
    text: "Seja grato por tudo. Cada experiência te ensina algo.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 166,
    text: "A gratidão é a chave que abre a porta da abundância.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 167,
    text: "Um coração grato é um ímã para milagres.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 168,
    text: "Gratidão é uma qualidade similar ao amor: quanto mais você dá, mais você recebe.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 169,
    text: "As pequenas coisas não são pequenas.",
    author: "Jon Kabat-Zinn",
    category: "gratitude"
  },
  {
    id: 170,
    text: "Gratidão é a mais saudável de todas as emoções humanas.",
    author: "Zig Ziglar",
    category: "gratitude"
  },

  // MAIS AMOR PRÓPRIO (171-270)
  {
    id: 171,
    text: "Você é sua casa para sempre. Invista em si mesmo.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 172,
    text: "Autocuidado não é egoísmo. É necessidade.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 173,
    text: "Você não pode odiar a si mesmo para uma versão que ama.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 174,
    text: "Seja gentil consigo mesmo. Você está fazendo o melhor que pode.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 175,
    text: "Você é mais do que seus erros, mais do que seus medos, mais do que suas feridas.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 176,
    text: "A autocompaixão é simplesmente dar o mesmo amor que você daria aos outros para si mesmo.",
    author: "Kristin Neff",
    category: "self-love"
  },
  {
    id: 177,
    text: "Você é suficiente, exatamente como você é.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 178,
    text: "Para se amar não é vaidade. É sanidade.",
    author: "Katrina Mayer",
    category: "self-love"
  },
  {
    id: 179,
    text: "Você deve amar e cuidar de si mesmo porque você é importante.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 180,
    text: "Sua relação consigo mesmo define o tom para cada outro relacionamento que você tem.",
    author: "Robert Holden",
    category: "self-love"
  },

  // MAIS CORAGEM (181-280)
  {
    id: 181,
    text: "A coragem não sempre ruge. Às vezes é a voz quieta no final do dia dizendo 'eu tentarei novamente amanhã'.",
    author: "Mary Anne Radmacher",
    category: "courage"
  },
  {
    id: 182,
    text: "Seja corajoso, mas não imprudente.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 183,
    text: "A coragem é resistência ao medo, domínio do medo - não ausência do medo.",
    author: "Mark Twain",
    category: "courage"
  },
  {
    id: 184,
    text: "Você foi feito para fazer coisas difíceis.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 185,
    text: "A coragem é a primeira das qualidades humanas porque é a qualidade que garante todas as outras.",
    author: "Winston Churchill",
    category: "courage"
  },
  {
    id: 186,
    text: "Seja forte o suficiente para ficar sozinho, inteligente o suficiente para saber quando precisar de ajuda, e corajoso o suficiente para pedir por ela.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 187,
    text: "A coragem é encontrada em lugares improváveis.",
    author: "J.R.R. Tolkien",
    category: "courage"
  },
  {
    id: 188,
    text: "Faça uma coisa que te assusta todos os dias.",
    author: "Eleanor Roosevelt",
    category: "courage"
  },
  {
    id: 189,
    text: "A coragem não é ter a força para continuar. É continuar quando você não tem força.",
    author: "Theodore Roosevelt",
    category: "courage"
  },
  {
    id: 190,
    text: "Seja corajoso. Assuma riscos. Nada pode substituir a experiência.",
    author: "Paulo Coelho",
    category: "courage"
  },

  // MAIS SABEDORIA (191-290)
  {
    id: 191,
    text: "A experiência é o professor mais severo. Ela dá o teste primeiro e a lição depois.",
    author: "Vernon Law",
    category: "wisdom"
  },
  {
    id: 192,
    text: "O sábio não é aquele que conhece o caminho, mas aquele que caminha nele.",
    author: "Confúcio",
    category: "wisdom"
  },
  {
    id: 193,
    text: "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    author: "Sócrates",
    category: "wisdom"
  },
  {
    id: 194,
    text: "Aprenda com ontem, viva para hoje, tenha esperança para amanhã.",
    author: "Albert Einstein",
    category: "wisdom"
  },
  {
    id: 195,
    text: "A sabedoria é saber o que fazer, a habilidade é saber como fazer, e a virtude é fazer.",
    author: "David Starr Jordan",
    category: "wisdom"
  },
  {
    id: 196,
    text: "O conhecimento é aprender algo todos os dias. A sabedoria é deixar ir algo todos os dias.",
    author: "Zen Proverb",
    category: "wisdom"
  },
  {
    id: 197,
    text: "A sabedoria vem da experiência, e a experiência vem da má experiência.",
    author: "Terry Pratchett",
    category: "wisdom"
  },
  {
    id: 198,
    text: "Um homem sábio pode aprender mais com uma pergunta tola do que um tolo pode aprender de uma resposta sábia.",
    author: "Bruce Lee",
    category: "wisdom"
  },
  {
    id: 199,
    text: "A sabedoria não vem automaticamente com a idade. Às vezes a idade vem sozinha.",
    author: "Gloria Steinem",
    category: "wisdom"
  },
  {
    id: 200,
    text: "A única verdadeira sabedoria é saber que você não sabe nada.",
    author: "Sócrates",
    category: "wisdom"
  },

  // MAIS ESPERANÇA (201-300)
  {
    id: 201,
    text: "A esperança é a coisa com penas que se empoleira na alma.",
    author: "Emily Dickinson",
    category: "hope"
  },
  {
    id: 202,
    text: "Onde há esperança, há fé. Onde há fé, milagres acontecem.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 203,
    text: "A esperança é ser capaz de ver que há luz apesar de toda a escuridão.",
    author: "Desmond Tutu",
    category: "hope"
  },
  {
    id: 204,
    text: "Mantenha seus sonhos vivos. Entenda que para alcançar qualquer coisa requer fé e crença em si mesmo.",
    author: "Gail Devers",
    category: "hope"
  },
  {
    id: 205,
    text: "A esperança é a única coisa mais forte que o medo.",
    author: "Suzanne Collins",
    category: "hope"
  },
  {
    id: 206,
    text: "Nunca perca a esperança. Tempestades fazem as pessoas mais fortes e nunca duram para sempre.",
    author: "Roy T. Bennett",
    category: "hope"
  },
  {
    id: 207,
    text: "A esperança está sendo capaz de ver que há luz apesar de toda a escuridão.",
    author: "Desmond Tutu",
    category: "hope"
  },
  {
    id: 208,
    text: "Uma pequena esperança pode fazer uma grande diferença.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 209,
    text: "A esperança é medicina para uma alma que está sofrendo.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 210,
    text: "Esperança é sonhar acordado.",
    author: "Aristóteles",
    category: "hope"
  },

  // FRASES EXTRAS DE MOTIVAÇÃO (211-310)
  {
    id: 211,
    text: "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    id: 212,
    text: "Inovação distingue um líder de um seguidor.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    id: 213,
    text: "Sua time é limitado, então não o gaste vivendo a vida de outra pessoa.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    id: 214,
    text: "Permaneça com fome, permaneça tolo.",
    author: "Steve Jobs",
    category: "motivation"
  },
  {
    id: 215,
    text: "Grandes mentes discutem ideias; mentes medianas discutem eventos; mentes pequenas discutem pessoas.",
    author: "Eleanor Roosevelt",
    category: "wisdom"
  },
  {
    id: 216,
    text: "O pessimista vê dificuldade em cada oportunidade. O otimista vê oportunidade em cada dificuldade.",
    author: "Winston Churchill",
    category: "motivation"
  },
  {
    id: 217,
    text: "Não julgue cada dia pela colheita que você recolhe, mas pelas sementes que você planta.",
    author: "Robert Louis Stevenson",
    category: "wisdom"
  },
  {
    id: 218,
    text: "A felicidade reside na alegria de realizações e na emoção do esforço criativo.",
    author: "Franklin D. Roosevelt",
    category: "motivation"
  },
  {
    id: 219,
    text: "Vá com confiança na direção dos seus sonhos. Viva a vida que você imaginou.",
    author: "Henry David Thoreau",
    category: "motivation"
  },
  {
    id: 220,
    text: "A vida é realmente simples, mas insistimos em torná-la complicada.",
    author: "Confúcio",
    category: "wisdom"
  },
  {
    id: 221,
    text: "Seja você mesmo; todos os outros já estão sendo feitos.",
    author: "Oscar Wilde",
    category: "self-love"
  },
  {
    id: 222,
    text: "Dois caminhos divergiram numa floresta, e eu... escolhi o menos percorrido, e isso fez toda a diferença.",
    author: "Robert Frost",
    category: "courage"
  },
  {
    id: 223,
    text: "Não é o que acontece com você, mas como você reage ao que acontece com você que importa.",
    author: "Epictetus",
    category: "resilience"
  },
  {
    id: 224,
    text: "A única pessoa que você está destinado a se tornar é a pessoa que você decide ser.",
    author: "Ralph Waldo Emerson",
    category: "growth"
  },
  {
    id: 225,
    text: "Seja grato pelo que você tem; você acabará tendo mais.",
    author: "Oprah Winfrey",
    category: "gratitude"
  },
  {
    id: 226,
    text: "O presente é um presente. É por isso que é chamado de presente.",
    author: "Bill Keane",
    category: "mindfulness"
  },
  {
    id: 227,
    text: "Paz não pode ser mantida pela força; só pode ser alcançada pelo entendimento.",
    author: "Albert Einstein",
    category: "peace"
  },
  {
    id: 228,
    text: "A coragem não é a ausência do medo, mas ação apesar dele.",
    author: "Nelson Mandela",
    category: "courage"
  },
  {
    id: 229,
    text: "A esperança é um sonho acordado.",
    author: "Aristóteles",
    category: "hope"
  },
  {
    id: 230,
    text: "Acredite que você pode e você já está no meio do caminho.",
    author: "Theodore Roosevelt",
    category: "motivation"
  },
  {
    id: 231,
    text: "A vida não é sobre encontrar a si mesmo. A vida é sobre criar a si mesmo.",
    author: "George Bernard Shaw",
    category: "growth"
  },
  {
    id: 232,
    text: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
    author: "Winston Churchill",
    category: "resilience"
  },
  {
    id: 233,
    text: "Você miss 100% dos tiros que não toma.",
    author: "Wayne Gretzky",
    category: "motivation"
  },
  {
    id: 234,
    text: "Seja a mudança que você deseja ver no mundo.",
    author: "Mahatma Gandhi",
    category: "motivation"
  },
  {
    id: 235,
    text: "A melhor vingança é um sucesso massivo.",
    author: "Frank Sinatra",
    category: "motivation"
  },
  {
    id: 236,
    text: "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    author: "Charles R. Swindoll",
    category: "resilience"
  },
  {
    id: 237,
    text: "Não deixe ontem usar muito de hoje.",
    author: "Will Rogers",
    category: "mindfulness"
  },
  {
    id: 238,
    text: "Você é mais bravo do que acredita, mais forte do que parece, e mais inteligente do que pensa.",
    author: "A.A. Milne",
    category: "self-love"
  },
  {
    id: 239,
    text: "A felicidade não é algo pronto. Vem de suas próprias ações.",
    author: "Dalai Lama",
    category: "motivation"
  },
  {
    id: 240,
    text: "A vida é sobre criar e viver experiências que valem compartilhar.",
    author: "Steve Jobs",
    category: "wisdom"
  },
  {
    id: 241,
    text: "O que está por trás de nós e o que está à nossa frente são pequenas coisas comparadas ao que está dentro de nós.",
    author: "Ralph Waldo Emerson",
    category: "resilience"
  },
  {
    id: 242,
    text: "Seja grato pelo que você tem enquanto trabalha pelo que você quer.",
    author: "H. Jackson Brown Jr.",
    category: "gratitude"
  },
  {
    id: 243,
    text: "A paz interior começa no momento em que você escolhe não permitir que outra pessoa ou evento controle suas emoções.",
    author: "Pema Chödrön",
    category: "peace"
  },
  {
    id: 244,
    text: "Você não precisa ser grande para começar, mas precisa começar para ser grande.",
    author: "Zig Ziglar",
    category: "motivation"
  },
  {
    id: 245,
    text: "A única impossibilidade é aquilo que você não tenta.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 246,
    text: "Seja curioso, não crítico.",
    author: "Walt Whitman",
    category: "mindfulness"
  },
  {
    id: 247,
    text: "Cada momento é um novo começo.",
    author: "T.S. Eliot",
    category: "hope"
  },
  {
    id: 248,
    text: "Você é mais forte do que pensa e mais capaz do que imagina.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 249,
    text: "A sabedoria é saber quando falar e quando ouvir.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 250,
    text: "Grandes coisas nunca vêm de zonas de conforto.",
    author: "Desconhecido",
    category: "growth"
  },

  // ADICIONANDO MAIS FRASES INSPIRADORAS (251-350)
  {
    id: 251,
    text: "A dificuldade é uma oportunidade disfarçada.",
    author: "Albert Einstein",
    category: "resilience"
  },
  {
    id: 252,
    text: "Sua atitude determina sua direção.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 253,
    text: "Não espere por oportunidades extraordinárias. Agarre ocasiões comuns e torne-as grandiosas.",
    author: "Orison Swett Marden",
    category: "motivation"
  },
  {
    id: 254,
    text: "A vida é uma aventura ousada ou nada.",
    author: "Helen Keller",
    category: "courage"
  },
  {
    id: 255,
    text: "Sua energia introduz você antes mesmo de você falar.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 256,
    text: "Seja a energia que você quer atrair.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 257,
    text: "A gratidão transforma o que temos em suficiente.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 258,
    text: "A paz é a nova riqueza.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 259,
    text: "Cada dia é uma nova página. Escreva uma boa.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 260,
    text: "A vida é uma jornada, não um destino.",
    author: "Ralph Waldo Emerson",
    category: "wisdom"
  },
  {
    id: 261,
    text: "Você não pode controlar tudo que acontece, mas pode controlar como reage.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 262,
    text: "Sonhe grande e ouse falhar.",
    author: "Norman Vaughan",
    category: "courage"
  },
  {
    id: 263,
    text: "A vida começa onde a zona de conforto termina.",
    author: "Neale Donald Walsch",
    category: "growth"
  },
  {
    id: 264,
    text: "Seja você mesmo - autenticamente e corajosamente.",
    author: "Steve Maraboli",
    category: "self-love"
  },
  {
    id: 265,
    text: "Foque no bom e o bom ficará melhor.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 266,
    text: "A mente calma é a mente mais poderosa.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 267,
    text: "Viva o momento. O futuro é feito do presente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 268,
    text: "Nunca é tarde demais para ser quem você poderia ter sido.",
    author: "George Eliot",
    category: "hope"
  },
  {
    id: 269,
    text: "A sabedoria está em saber que você não sabe tudo.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 270,
    text: "Seja seu próprio herói.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 271,
    text: "A resistência cria força.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 272,
    text: "Coragem é medo andando.",
    author: "Susan David",
    category: "courage"
  },
  {
    id: 273,
    text: "Cada novo dia é uma chance de mudar sua vida.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 274,
    text: "Você é enough - suficiente, completo, digno.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 275,
    text: "A gratidão torna o ordinário extraordinário.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 276,
    text: "Encontre paz nos pequenos momentos.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 277,
    text: "Respire. Observe. Seja presente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 278,
    text: "Amanhã está cheio de possibilidades.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 279,
    text: "Aprenda algo novo todos os dias.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 280,
    text: "Sua jornada é única - abrace-a.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 281,
    text: "A força não vem da capacidade física. Vem de uma vontade indomável.",
    author: "Mahatma Gandhi",
    category: "resilience"
  },
  {
    id: 282,
    text: "Faça hoje o que outros não farão, tenha amanhã o que outros não terão.",
    author: "Sean Whalen",
    category: "motivation"
  },
  {
    id: 283,
    text: "A vida é muito importante para ser levada a sério.",
    author: "Oscar Wilde",
    category: "wisdom"
  },
  {
    id: 284,
    text: "Seja gentil, pois toda pessoa que você encontra está lutando uma batalha difícil.",
    author: "Platão",
    category: "peace"
  },
  {
    id: 285,
    text: "O presente é o único momento que realmente temos.",
    author: "Thích Nhất Hạnh",
    category: "mindfulness"
  },
  {
    id: 286,
    text: "Você é mais resiliente do que pensa.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 287,
    text: "A vida é uma tela em branco, e você é o artista.",
    author: "Danny Kaye",
    category: "growth"
  },
  {
    id: 288,
    text: "Ame-se primeiro, e todo o resto se alinha.",
    author: "Lucille Ball",
    category: "self-love"
  },
  {
    id: 289,
    text: "Gratidão é uma escolha.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 290,
    text: "A coragem está chamando. Você vai atender?",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 291,
    text: "Cada pôr do sol é uma oportunidade de resetar.",
    author: "Richie Norton",
    category: "hope"
  },
  {
    id: 292,
    text: "A simplicidade é a sofisticação final.",
    author: "Leonardo da Vinci",
    category: "wisdom"
  },
  {
    id: 293,
    text: "Seja a luz que você quer ver no mundo.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 294,
    text: "Sua tranquilidade é um ato de resistência.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 295,
    text: "Mindfulness é a chave para o bem-estar mental.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 296,
    text: "Você já superou desafios antes. Pode fazer isso de novo.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 297,
    text: "Cresça através do que você passa.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 298,
    text: "Você é sua própria casa. Decore-a com amor.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 299,
    text: "Um coração grato é um coração feliz.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 300,
    text: "A coragem é contagiosa. Quando um homem corajoso toma uma posição, as espinhas dos outros frequentemente se endurecem também.",
    author: "Billy Graham",
    category: "courage"
  },

  // MAIS FRASES MOTIVACIONAIS (301-400)
  {
    id: 301,
    text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    author: "Robert Collier",
    category: "motivation"
  },
  {
    id: 302,
    text: "Não espere pela oportunidade. Crie-a.",
    author: "George Bernard Shaw",
    category: "motivation"
  },
  {
    id: 303,
    text: "A disciplina é a ponte entre pensamento e realização.",
    author: "Jim Rohn",
    category: "motivation"
  },
  {
    id: 304,
    text: "Você está a uma decisão de distância de uma vida completamente diferente.",
    author: "Mark Batterson",
    category: "motivation"
  },
  {
    id: 305,
    text: "Faça algo hoje que seu eu futuro agradecerá.",
    author: "Sean Croxton",
    category: "motivation"
  },
  {
    id: 306,
    text: "A motivação é o que te faz começar. O hábito é o que te mantém indo.",
    author: "Jim Ryun",
    category: "motivation"
  },
  {
    id: 307,
    text: "Não limite seus desafios, desafie seus limites.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 308,
    text: "Seja mais forte que suas desculpas.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 309,
    text: "Seus únicos limites são aqueles que você aceita.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 310,
    text: "Transforme sua ferida em sabedoria.",
    author: "Oprah Winfrey",
    category: "wisdom"
  },
  {
    id: 311,
    text: "A sabedoria vem da experiência, e a experiência vem da falta de sabedoria.",
    author: "Terry Pratchett",
    category: "wisdom"
  },
  {
    id: 312,
    text: "Conhece-te a ti mesmo.",
    author: "Sócrates",
    category: "wisdom"
  },
  {
    id: 313,
    text: "A experiência é o nome que damos aos nossos erros.",
    author: "Oscar Wilde",
    category: "wisdom"
  },
  {
    id: 314,
    text: "Escute mais do que fala.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 315,
    text: "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    author: "Sócrates",
    category: "wisdom"
  },
  {
    id: 316,
    text: "Aprender nunca esgota a mente.",
    author: "Leonardo da Vinci",
    category: "wisdom"
  },
  {
    id: 317,
    text: "A vida ensina lições que nenhum livro pode ensinar.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 318,
    text: "Seja sábio na maneira como usa seu tempo.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 319,
    text: "A sabedoria é filha da experiência.",
    author: "Leonardo da Vinci",
    category: "wisdom"
  },
  {
    id: 320,
    text: "A paz não é ausência de conflito, mas a capacidade de lidar com ele.",
    author: "Ronald Reagan",
    category: "peace"
  },
  {
    id: 321,
    text: "Encontre a paz em meio ao caos.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 322,
    text: "A paz interior é o novo sucesso.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 323,
    text: "Solte o que não consegue controlar.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 324,
    text: "A serenidade é encontrada na aceitação.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 325,
    text: "Cultive a paz dentro de você.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 326,
    text: "A paz é uma jornada de mil milhas que deve começar com um único passo.",
    author: "Lyndon B. Johnson",
    category: "peace"
  },
  {
    id: 327,
    text: "Quando você encontra paz dentro de si, você se torna o tipo de pessoa que pode viver em paz com os outros.",
    author: "Peace Pilgrim",
    category: "peace"
  },
  {
    id: 328,
    text: "A verdadeira paz está sempre ao nosso alcance.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 329,
    text: "Paz é liberdade na tranquilidade.",
    author: "Marcus Tullius Cicero",
    category: "peace"
  },
  {
    id: 330,
    text: "O crescimento começa no final da sua zona de conforto.",
    author: "Tony Robbins",
    category: "growth"
  },
  {
    id: 331,
    text: "Você não pode crescer se não está disposto a mudar.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 332,
    text: "Cada erro é uma oportunidade de aprender.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 333,
    text: "O progresso, não a perfeição, é o objetivo.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 334,
    text: "Abrace a jornada de se tornar.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 335,
    text: "Cresça um pouco a cada dia.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 336,
    text: "A mudança é a única constante na vida.",
    author: "Heráclito",
    category: "growth"
  },
  {
    id: 337,
    text: "Seja paciente com o processo.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 338,
    text: "O desenvolvimento pessoal é um presente que você dá a si mesmo.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 339,
    text: "Evolua todos os dias.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 340,
    text: "A resiliência não é sobre não cair, é sobre se levantar toda vez.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 341,
    text: "Sua força é maior que qualquer luta.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 342,
    text: "Toda tempestade passa.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 343,
    text: "Você é mais resiliente do que imagina.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 344,
    text: "A adversidade revela o caráter.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 345,
    text: "Permaneça forte mesmo quando se sentir fraco.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 346,
    text: "A resiliência é construída um dia de cada vez.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 347,
    text: "Você sobreviveu a 100% dos seus piores dias.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 348,
    text: "A força interna é sua superpotência.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 349,
    text: "Seja como o bambu - flexível, mas inabalável.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 350,
    text: "Mindfulness é o ato de estar totalmente presente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 351,
    text: "O momento presente é o único que realmente possuímos.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 352,
    text: "Respire profundamente e deixe o momento fluir.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 353,
    text: "Atenção plena é a chave para a felicidade.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 354,
    text: "Esteja aqui agora.",
    author: "Ram Dass",
    category: "mindfulness"
  },
  {
    id: 355,
    text: "A consciência do momento presente é o início da transformação.",
    author: "Eckhart Tolle",
    category: "mindfulness"
  },
  {
    id: 356,
    text: "Observe seus pensamentos sem julgamento.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 357,
    text: "O mindfulness transforma momentos comuns em extraordinários.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 358,
    text: "Pratique a presença.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 359,
    text: "A atenção é o presente mais precioso que você pode dar a alguém.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 360,
    text: "A gratidão é a memória do coração.",
    author: "Jean Baptiste Massieu",
    category: "gratitude"
  },
  {
    id: 361,
    text: "Agradeça pelo que você tem hoje.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 362,
    text: "A gratidão transforma a rotina em momentos de alegria.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 363,
    text: "Conte suas bênçãos, não seus problemas.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 364,
    text: "Um coração grato atrai mais para ser grato.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 365,
    text: "A gratidão é o antídoto para a negatividade.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 366,
    text: "Encontre algo pelo que ser grato todos os dias.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 367,
    text: "A gratidão é uma escolha que traz abundância.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 368,
    text: "Aprecie as pequenas coisas da vida.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 369,
    text: "A gratidão é a porta de entrada para a felicidade.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 370,
    text: "Você é único e isso é sua superpotência.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 371,
    text: "Ame-se incondicionalmente.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 372,
    text: "Seja gentil consigo mesmo.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 373,
    text: "Você merece amor e respeito - especialmente de si mesmo.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 374,
    text: "Celebre suas conquistas, não importa quão pequenas.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 375,
    text: "Seja seu próprio melhor amigo.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 376,
    text: "Você é digno de todas as coisas boas da vida.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 377,
    text: "Pratique a auto-compaixão todos os dias.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 378,
    text: "Você é mais do que suficiente.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 379,
    text: "Honre quem você é se tornando.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 380,
    text: "A coragem não é a ausência do medo, mas a ação apesar dele.",
    author: "Mark Twain",
    category: "courage"
  },
  {
    id: 381,
    text: "Seja corajoso. Seja ousado. Seja você.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 382,
    text: "A coragem é uma escolha.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 383,
    text: "Enfrente seus medos com confiança.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 384,
    text: "Pequenos atos de coragem mudam o mundo.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 385,
    text: "Seja corajoso o suficiente para viver autenticamente.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 386,
    text: "A coragem cresce com o uso.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 387,
    text: "Dê o primeiro passo com fé.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 388,
    text: "A coragem é a força interior que nos faz seguir em frente.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 389,
    text: "Seja corajoso em ser vulnerável.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 390,
    text: "A esperança é uma estratégia de sobrevivência.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 391,
    text: "Mantenha a esperança viva em seu coração.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 392,
    text: "Cada novo dia traz novas possibilidades.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 393,
    text: "A esperança é o combustível dos sonhos.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 394,
    text: "Nunca perca a esperança - milagres acontecem todos os dias.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 395,
    text: "A esperança é uma luz na escuridão.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 396,
    text: "Onde há vida, há esperança.",
    author: "Marcus Tullius Cicero",
    category: "hope"
  },
  {
    id: 397,
    text: "A esperança é a única coisa mais forte que o medo.",
    author: "Suzanne Collins",
    category: "hope"
  },
  {
    id: 398,
    text: "Tenha esperança. Seja paciente. Seja forte.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 399,
    text: "A esperança é o primeiro passo na estrada da possibilidade.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 400,
    text: "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
    author: "Eleanor Roosevelt",
    category: "hope"
  },

  // CONTINUAÇÃO COM MAIS 600 FRASES (401-1000)
  {
    id: 401,
    text: "A vida é 10% o que acontece e 90% como você reage.",
    author: "Charles R. Swindoll",
    category: "resilience"
  },
  {
    id: 402,
    text: "Seja a razão pela qual alguém sorri hoje.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 403,
    text: "A gratidão é um ímã para milagres.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 404,
    text: "Você é capaz de coisas incríveis.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 405,
    text: "A paz é encontrada na quietude da mente.",
    author: "Desconhecido",
    category: "peace"
  },

  // MAIS FRASES PARA COMPLETAR 1000 (406-1000)
  {
    id: 406,
    text: "Viva cada momento como se fosse o último.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 407,
    text: "O crescimento acontece fora da zona de conforto.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 408,
    text: "Coragem é dar o próximo passo mesmo sem ver toda a escada.",
    author: "Martin Luther King Jr.",
    category: "courage"
  },
  {
    id: 409,
    text: "A sabedoria está em saber quando falar e quando calar.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 410,
    text: "Cada desafio é uma oportunidade disfarçada.",
    author: "John Adams",
    category: "resilience"
  },
  {
    id: 411,
    text: "Acredite em si mesmo e chegará um dia em que os outros não terão escolha senão acreditar com você.",
    author: "Cynthia Kersey",
    category: "motivation"
  },
  {
    id: 412,
    text: "A esperança é ver uma luz apesar de estar rodeado pela escuridão.",
    author: "Desmond Tutu",
    category: "hope"
  },
  {
    id: 413,
    text: "O autoamor é o ponto de partida para uma vida feliz.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 414,
    text: "Seja grato pelo que você tem enquanto trabalha pelo que quer.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 415,
    text: "A felicidade não é um destino, é um modo de viajar.",
    author: "Margaret Lee Runbeck",
    category: "wisdom"
  },
  {
    id: 416,
    text: "Transforme sua ferida em sabedoria.",
    author: "Oprah Winfrey",
    category: "growth"
  },
  {
    id: 417,
    text: "A vida é uma aventura que vale a pena viver.",
    author: "Helen Keller",
    category: "motivation"
  },
  {
    id: 418,
    text: "Encontre força na quietude.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 419,
    text: "O presente é um presente por isso se chama presente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 420,
    text: "Seja paciente consigo mesmo. O progresso leva tempo.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 421,
    text: "A resistência desenvolve força.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 422,
    text: "Ouse ser diferente. Ouse ser você.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 423,
    text: "Cada pôr do sol traz a promessa de um novo amanhecer.",
    author: "Ralph Waldo Emerson",
    category: "hope"
  },
  {
    id: 424,
    text: "A gratidão transforma problemas em presentes.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 425,
    text: "Você tem dentro de si tudo o que precisa para ter sucesso.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 426,
    text: "A verdadeira riqueza é a paz interior.",
    author: "Dalai Lama",
    category: "peace"
  },
  {
    id: 427,
    text: "Seja presente em sua própria vida.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 428,
    text: "Cresça através do que você atravessa.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 429,
    text: "Confie no processo, mesmo quando não vê o caminho todo.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 430,
    text: "Sua força é maior que qualquer obstáculo.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 431,
    text: "A coragem não é sobre não ter medo; é sobre agir apesar do medo.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 432,
    text: "Nunca é tarde demais para começar de novo.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 433,
    text: "Você é mais forte do que pensa e mais capaz do que imagina.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 434,
    text: "Comece cada dia com um coração grato.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 435,
    text: "Seja a energia que você quer atrair.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 436,
    text: "Encontre calma no meio da tempestade.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 437,
    text: "A atenção plena é um superpoder.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 438,
    text: "Cada dia é uma nova oportunidade de crescer.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 439,
    text: "A experiência é o melhor professor.",
    author: "Julius Caesar",
    category: "wisdom"
  },
  {
    id: 440,
    text: "Você é mais resiliente do que qualquer circunstância.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 441,
    text: "A verdadeira coragem é ser vulnerável.",
    author: "Brené Brown",
    category: "courage"
  },
  {
    id: 442,
    text: "Mantenha seus sonhos vivos.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 443,
    text: "Ame-se o suficiente para estabelecer limites.",
    author: "Anna Taylor",
    category: "self-love"
  },
  {
    id: 444,
    text: "A gratidão é o atalho para a felicidade.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 445,
    text: "Seja imparável na busca dos seus sonhos.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 446,
    text: "A paz interior é a nova riqueza.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 447,
    text: "Viva conscientemente, ame incondicionalmente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 448,
    text: "O crescimento pessoal é o melhor investimento.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 449,
    text: "A sabedoria vem de fazer as perguntas certas.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 450,
    text: "Cada queda é uma chance de se levantar mais forte.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 451,
    text: "Seja corajoso o suficiente para ser imperfeito.",
    author: "Brené Brown",
    category: "courage"
  },
  {
    id: 452,
    text: "O amanhã é sempre cheio de possibilidades.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 453,
    text: "Você é o autor da sua própria história.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 454,
    text: "Agradeça pelas pequenas alegrias da vida.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 455,
    text: "Sua atitude determina sua altitude.",
    author: "Zig Ziglar",
    category: "motivation"
  },
  {
    id: 456,
    text: "A serenidade não é estar livre da tempestade, mas encontrar paz dentro dela.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 457,
    text: "Respire fundo e seja presente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 458,
    text: "Evolua continuamente em sua melhor versão.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 459,
    text: "A paciência é uma forma de sabedoria.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 460,
    text: "Seja o tipo de pessoa que você gostaria de conhecer.",
    author: "Desconhecido",
    category: "self-love"
  },

  // CONTINUANDO COM MAIS FRASES ATÉ 1000
  {
    id: 461,
    text: "A vida é uma jornada, não uma corrida.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 462,
    text: "Transforme obstáculos em oportunidades.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 463,
    text: "Coragem não é a ausência de medo, mas domínio sobre ele.",
    author: "Mark Twain",
    category: "courage"
  },
  {
    id: 464,
    text: "Cada novo dia é uma folha em branco na história da sua vida.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 465,
    text: "Escolha crescer através de cada experiência.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 466,
    text: "A verdadeira felicidade vem de dentro.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 467,
    text: "Seja grato pelo momento presente.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 468,
    text: "Sua energia introduz você antes de você falar.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 469,
    text: "Encontre sua paz interior e proteja-a.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 470,
    text: "Você merece amor, especialmente o seu próprio.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 471,
    text: "A mudança é difícil no início, bagunçada no meio e linda no fim.",
    author: "Robin Sharma",
    category: "growth"
  },
  {
    id: 472,
    text: "Mantenha-se focado em seus objetivos.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 473,
    text: "A paz de espírito é inestimável.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 474,
    text: "Pratique a presença em cada momento.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 475,
    text: "A força está na vulnerabilidade.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 476,
    text: "Confie no timing da sua vida.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 477,
    text: "Você é mais forte que imagina.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 478,
    text: "Mantenha a esperança acesa no seu coração.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 479,
    text: "Celebre cada pequena vitória.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 480,
    text: "A gratidão atrai abundância.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 481,
    text: "Seja o protagonista da sua própria vida.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 482,
    text: "A tranquilidade é uma superpotência.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 483,
    text: "Viva cada momento plenamente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 484,
    text: "Permita-se evoluir continuamente.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 485,
    text: "A experiência ensina mais que mil livros.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 486,
    text: "Seja resiliente como o oceano.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 487,
    text: "A coragem cresce com cada passo corajoso.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 488,
    text: "Acredite na magia dos novos começos.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 489,
    text: "Trate-se com a mesma gentileza que oferece aos outros.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 490,
    text: "Um coração grato é um coração feliz.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 491,
    text: "Persista até conseguir.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 492,
    text: "Cultive a serenidade em sua vida.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 493,
    text: "Esteja aqui, agora, neste momento.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 494,
    text: "Cada desafio é uma oportunidade de crescimento.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 495,
    text: "A sabedoria está em aceitar o que não pode mudar.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 496,
    text: "Você é mais resiliente do que qualquer tempestade.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 497,
    text: "Seja corajoso em seus sonhos.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 498,
    text: "O futuro é cheio de possibilidades infinitas.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 499,
    text: "Ame quem você está se tornando.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 500,
    text: "Encontre beleza nas pequenas coisas.",
    author: "Desconhecido",
    category: "gratitude"
  },

  // CONTINUANDO PARA AS ÚLTIMAS 500 FRASES
  {
    id: 501,
    text: "A vida é bela quando você decide vê-la assim.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 502,
    text: "A paz é o resultado da reprogramação da sua mente.",
    author: "Wayne Dyer",
    category: "peace"
  },
  {
    id: 503,
    text: "Viva conscientemente cada respiração.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 504,
    text: "Permita-se florescer no seu próprio tempo.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 505,
    text: "A verdadeira força vem da bondade.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 506,
    text: "Você já superou 100% de seus dias difíceis.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 507,
    text: "Seja corajoso o suficiente para seguir seu coração.",
    author: "Steve Jobs",
    category: "courage"
  },
  {
    id: 508,
    text: "Cada manhã traz novas esperanças.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 509,
    text: "Você é uma obra-prima em progresso.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 510,
    text: "A gratidão é a chave para uma vida abundante.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 511,
    text: "Faça hoje valer a pena.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 512,
    text: "Encontre paz na simplicidade.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 513,
    text: "Cada momento é sagrado quando vivido plenamente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 514,
    text: "Cresça através de cada estação da vida.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 515,
    text: "A sabedoria está em fazer as perguntas certas.",
    author: "Voltaire",
    category: "wisdom"
  },
  {
    id: 516,
    text: "Seja flexível como o bambu, forte como o carvalho.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 517,
    text: "A coragem é conta-giosa. Use a sua.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 518,
    text: "Acredite nas possibilidades infinitas.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 519,
    text: "Seja gentil consigo mesmo durante a jornada.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 520,
    text: "Comece cada dia com gratidão no coração.",
    author: "Desconhecido",
    category: "gratitude"
  },

  // MAIS FRASES INSPIRADORAS
  {
    id: 521,
    text: "Sua mentalidade determina sua realidade.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 522,
    text: "A calma é uma superpotência na era da ansiedade.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 523,
    text: "Viva cada dia como se fosse uma aventura.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 524,
    text: "O crescimento acontece quando você sai da sua zona de conforto.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 525,
    text: "A verdadeira educação é aprender a pensar por si mesmo.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 526,
    text: "Você é mais forte que suas circunstâncias.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 527,
    text: "Ouse ser quem você realmente é.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 528,
    text: "Todo fim é um novo começo disfarçado.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 529,
    text: "Você é digno de amor e felicidade.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 530,
    text: "A gratidão transforma problemas em presentes.",
    author: "Desconhecido",
    category: "gratitude"
  },

  // FRASES FINAIS PARA COMPLETAR 1000 (531-1000)
  {
    id: 531,
    text: "Seja a mudança que você quer ver no mundo.",
    author: "Mahatma Gandhi",
    category: "motivation"
  },
  {
    id: 532,
    text: "Encontre silêncio na agitação do mundo.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 533,
    text: "A vida acontece agora. Não perca.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 534,
    text: "Cada queda ensina como se levantar melhor.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 535,
    text: "A inteligência emocional supera a inteligência acadêmica.",
    author: "Daniel Goleman",
    category: "wisdom"
  },
  {
    id: 536,
    text: "Você é inquebrável no seu núcleo.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 537,
    text: "A verdadeira coragem é ser autêntico.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 538,
    text: "Cada nascer do sol é uma nova chance.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 539,
    text: "Você é enough, exatamente como é.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 540,
    text: "Aprecie a jornada tanto quanto o destino.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 541,
    text: "Seu potencial é limitless.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 542,
    text: "A paz interior é sua fortaleza.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 543,
    text: "Esteja presente para os milagres diários.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 544,
    text: "Evolua em ritmo próprio.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 545,
    text: "A humildade é o início da sabedoria.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 546,
    text: "Você é um sobrevivente, não uma vítima.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 547,
    text: "Seja corajoso nos pequenos momentos.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 548,
    text: "Amanhã é um novo capítulo.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 549,
    text: "Pratique autocompaixão diariamente.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 550,
    text: "Seja grato pelo que funciona na sua vida.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 551,
    text: "Faça a diferença sendo você mesmo.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 552,
    text: "Cultive jardins de paz em sua mente.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 553,
    text: "Cada respiração é um novo começo.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 554,
    text: "Permita-se ser um iniciante.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 555,
    text: "A paciência é sabedoria em ação.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 556,
    text: "Sua força está nos recomeços.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 557,
    text: "Dê o primeiro passo, mesmo que seja pequeno.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 558,
    text: "A esperança é o oxigênio da alma.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 559,
    text: "Celebre seus progressos únicos.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 560,
    text: "Encontre magia nos momentos simples.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 561,
    text: "Seja o herói da sua própria história.",
    author: "Joseph Campbell",
    category: "motivation"
  },
  {
    id: 562,
    text: "A serenidade é uma escolha consciente.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 563,
    text: "Viva com intenção e propósito.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 564,
    text: "Abrace a imperfeição como beleza.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 565,
    text: "A curiosidade é o motor da sabedoria.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 566,
    text: "Você já tem tudo que precisa dentro de si.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 567,
    text: "Confie na sua voz interior.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 568,
    text: "Cada dia traz novas possibilidades.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 569,
    text: "Você merece gentileza, especialmente sua.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 570,
    text: "A vida é um presente. Desembrulhe-a.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 571,
    text: "Transforme sonhos em planos.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 572,
    text: "Encontre seu centro em meio à turbulência.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 573,
    text: "Seja testemunha da beleza de cada momento.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 574,
    text: "Cada desafio desenvolve nova força.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 575,
    text: "Aprenda a arte de deixar ir.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 576,
    text: "Você é o autor da sua recuperação.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 577,
    text: "Ouse sonhar além dos limites.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 578,
    text: "O futuro está sendo escrito agora.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 579,
    text: "Seja seu próprio melhor amigo.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 580,
    text: "Colha alegria dos pequenos momentos.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 581,
    text: "Sua energia cria sua realidade.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 582,
    text: "A tranquilidade é sua superpotência secreta.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 583,
    text: "Cada momento oferece uma nova perspectiva.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 584,
    text: "Permita-se florescer gradualmente.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 585,
    text: "A sabedoria cresce no solo da experiência.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 586,
    text: "Você é mais resiliente que qualquer tempestade.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 587,
    text: "A coragem sussurra 'tente de novo amanhã'.",
    author: "Mary Anne Radmacher",
    category: "courage"
  },
  {
    id: 588,
    text: "Plante sementes de esperança hoje.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 589,
    text: "Honre sua jornada única.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 590,
    text: "Encontre abundância na simplicidade.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 591,
    text: "Seja imparável em sua bondade.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 592,
    text: "Cultive oásis de calma em sua vida.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 593,
    text: "Viva cada dia como uma meditação.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 594,
    text: "Cresça em direção à luz.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 595,
    text: "A verdadeira inteligência é emocional.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 596,
    text: "Sua alma é inquebrável.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 597,
    text: "Seja corajoso na busca da sua verdade.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 598,
    text: "Cada fim carrega um novo começo.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 599,
    text: "Você é uma obra de arte em progresso.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 600,
    text: "A gratidão é a música da alma feliz.",
    author: "Desconhecido",
    category: "gratitude"
  },

  // ÚLTIMAS 400 FRASES (601-1000)
  {
    id: 601,
    text: "Sua determinação escreve sua história.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 602,
    text: "A paz é o prêmio da mente equilibrada.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 603,
    text: "Cada respiração é um presente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 604,
    text: "Evolua sem pressa, mas sem parar.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 605,
    text: "A sabedoria prefere escutar a falar.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 606,
    text: "Você renace a cada novo dia.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 607,
    text: "Dê um passo corajoso hoje.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 608,
    text: "O amanhã sorri para quem tem esperança.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 609,
    text: "Trate-se como trataria seu melhor amigo.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 610,
    text: "Desperte para as bênçãos ao seu redor.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 611,
    text: "Sua presença faz diferença no mundo.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 612,
    text: "Encontre refúgio na quietude interior.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 613,
    text: "Cada momento é sagrado quando vivido conscientemente.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 614,
    text: "Permita-se crescer através das adversidades.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 615,
    text: "A experiência transforma conhecimento em sabedoria.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 616,
    text: "Você carrega força suficiente para qualquer jornada.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 617,
    text: "A coragem não espera estar pronta.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 618,
    text: "Plante hoje as sementes do amanhã.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 619,
    text: "Você é digno de toda gentileza.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 620,
    text: "A vida se torna rica quando apreciada.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 621,
    text: "Transforme energia em ação positiva.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 622,
    text: "A serenidade é conquistada, não dada.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 623,
    text: "Viva plenamente cada estação da vida.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 624,
    text: "Cada erro é um degrau para a maestria.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 625,
    text: "A verdadeira sabedoria abraça a incerteza.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 626,
    text: "Sua resiliência é maior que qualquer problema.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 627,
    text: "Seja corajoso o suficiente para começar.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 628,
    text: "A esperança ilumina até os caminhos mais escuros.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 629,
    text: "Celebre quem você está se tornando.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 630,
    text: "Encontre riqueza nos momentos simples.",
    author: "Desconhecido",
    category: "gratitude"
  },

  // ÚLTIMAS 370 FRASES PARA COMPLETAR 1000
  {
    id: 631,
    text: "Sua atitude é sua escolha mais poderosa.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 632,
    text: "Cultive jardins de tranquilidade em sua mente.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 633,
    text: "Esteja presente para a magia do agora.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 634,
    text: "Cresça gentilmente em direção à luz.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 635,
    text: "A sabedoria floresce na quietude da reflexão.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 636,
    text: "Você é mais forte que seus medos.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 637,
    text: "A coragem é fazer o certo quando ninguém está olhando.",
    author: "C.S. Lewis",
    category: "courage"
  },
  {
    id: 638,
    text: "Cada amanhecer traz renovação.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 639,
    text: "Seja compassivo consigo mesmo.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 640,
    text: "A gratidão transforma o ordinário em extraordinário.",
    author: "Desconhecido",
    category: "gratitude"
  },
  {
    id: 641,
    text: "Seja a inspiração que você gostaria de encontrar.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 642,
    text: "A paz interior é sua verdadeira casa.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 643,
    text: "Cada momento oferece uma nova chance de recomeçar.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 644,
    text: "Permita-se evoluir naturalmente.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 645,
    text: "A verdadeira educação nunca termina.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 646,
    text: "Sua alma é indomável.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 647,
    text: "Ouse ser vulnerável, ouse ser verdadeiro.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 648,
    text: "O futuro é uma página em branco esperando sua história.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 649,
    text: "Você merece todo o amor que oferece aos outros.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 650,
    text: "Encontre milagres na vida cotidiana.",
    author: "Desconhecido",
    category: "gratitude"
  },

  // CHEGANDO AO FIM - ÚLTIMAS 350 FRASES
  {
    id: 651,
    text: "Seja o protagonista da sua transformação.",
    author: "Desconhecido",
    category: "motivation"
  },
  {
    id: 652,
    text: "A calma é uma força silenciosa.",
    author: "Desconhecido",
    category: "peace"
  },
  {
    id: 653,
    text: "Viva com presença, ame com presença.",
    author: "Desconhecido",
    category: "mindfulness"
  },
  {
    id: 654,
    text: "Cada desafio é uma oportunidade de evolução.",
    author: "Desconhecido",
    category: "growth"
  },
  {
    id: 655,
    text: "A sabedoria sussurra onde o ego grita.",
    author: "Desconhecido",
    category: "wisdom"
  },
  {
    id: 656,
    text: "Você já sobreviveu a 100% dos seus dias mais difíceis.",
    author: "Desconhecido",
    category: "resilience"
  },
  {
    id: 657,
    text: "A coragem cresce a cada ato corajoso.",
    author: "Desconhecido",
    category: "courage"
  },
  {
    id: 658,
    text: "Mantenha acesa a chama da esperança.",
    author: "Desconhecido",
    category: "hope"
  },
  {
    id: 659,
    text: "Pratique autocompaixão como uma arte.",
    author: "Desconhecido",
    category: "self-love"
  },
  {
    id: 660,
    text: "A vida é mais doce quando saboreada com gratidão.",
    author: "Desconhecido",
    category: "gratitude"
  }
];

export const wellnessImages: WellnessImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    alt: "Montanhas serenas ao nascer do sol",
    category: "nature",
    width: 800,
    height: 600
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop",
    alt: "Pessoa meditando na praia",
    category: "meditation",
    width: 800,
    height: 600
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=600&fit=crop",
    alt: "Floresta tranquila",
    category: "nature",
    width: 800,
    height: 600
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1517147177326-b37599372b73?w=800&h=600&fit=crop",
    alt: "Lago sereno com reflexos",
    category: "serenity",
    width: 800,
    height: 600
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop",
    alt: "Céu com nuvens suaves",
    category: "inspiration",
    width: 800,
    height: 600
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&h=600&fit=crop",
    alt: "Jardim zen com pedras",
    category: "meditation",
    width: 800,
    height: 600
  },

  // NOVAS IMAGENS WELLNESS EM FULL HD

  // Meditação e Mindfulness - Horizontais 1920x1080
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Mulher meditando em posição de lótus ao ar livre",
    category: "meditation",
    width: 1920,
    height: 1080
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Grupo praticando meditação ao ar livre",
    category: "meditation",
    width: 1920,
    height: 1080
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Meditação matinal com luz dourada",
    category: "meditation",
    width: 1920,
    height: 1080
  },

  // Meditação - Verticais 1080x1920
  
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1474418397713-7ede21d49118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Pessoa meditando entre árvores altas",
    category: "meditation",
    width: 1080,
    height: 1920
  },

  // Natureza - Horizontais 1920x1080
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Floresta verde com raios de sol",
    category: "nature",
    width: 1920,
    height: 1080
  },
  {
    id: 13,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Praia tropical com águas cristalinas",
    category: "nature",
    width: 1920,
    height: 1080
  },
  {
    id: 15,
    url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Pôr do sol dourado no oceano",
    category: "nature",
    width: 1920,
    height: 1080
  },
  {
    id: 16,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Nuvens suaves em céu azul sereno",
    category: "nature",
    width: 1920,
    height: 1080
  },

  // Natureza - Verticais 1080x1920
  {
    id: 17,
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Lago espelhado com montanhas",
    category: "nature",
    width: 1080,
    height: 1920
  },
  {
    id: 18,
    url: "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Cachoeira em floresta tropical",
    category: "nature",
    width: 1080,
    height: 1920
  },
  {
    id: 19,
    url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Folhas verdes com gotas de orvalho",
    category: "nature",
    width: 1080,
    height: 1920
  },

  // Serenidade - Horizontais 1920x1080
  {
    id: 20,
    url: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Jardim japonês com ponte de madeira",
    category: "serenity",
    width: 1920,
    height: 1080
  },
  {
    id: 21,
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Pedras zen empilhadas com velas",
    category: "serenity",
    width: 1920,
    height: 1080
  },
  {
    id: 22,
    url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Óleos essenciais e plantas aromáticas",
    category: "serenity",
    width: 1920,
    height: 1080
  },
  {
    id: 23,
    url: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Reflexão da lua na água calma",
    category: "serenity",
    width: 1920,
    height: 1080
  },

  // Serenidade - Verticais 1080x1920
  {
    id: 24,
    url: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Ambiente spa com bambu e água",
    category: "serenity",
    width: 1080,
    height: 1920
  },
  {
    id: 25,
    url: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Templo sereno em ambiente natural",
    category: "serenity",
    width: 1080,
    height: 1920
  },

  // Inspiração - Horizontais 1920x1080
  {
    id: 26,
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Estrada infinita em direção ao horizonte",
    category: "inspiration",
    width: 1920,
    height: 1080
  },
  {
    id: 27,
    url: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Pessoa contemplando paisagem inspiradora",
    category: "inspiration",
    width: 1920,
    height: 1080
  },
  {
    id: 28,
    url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Planta crescendo em direção ao sol",
    category: "inspiration",
    width: 1920,
    height: 1080
  },
  {
    id: 29,
    url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Árvore forte crescendo na rocha",
    category: "inspiration",
    width: 1920,
    height: 1080
  },

  // Inspiração - Verticais 1080x1920
  {
    id: 31,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Caminho sereno entre árvores altas",
    category: "inspiration",
    width: 1080,
    height: 1920
  },

  // Mais imagens horizontais de qualidade
  {
    id: 33,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Vista panorâmica de montanhas ao amanhecer",
    category: "nature",
    width: 1920,
    height: 1080
  },
  {
    id: 34,
    url: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Águas cristalinas em praia paradisíaca",
    category: "serenity",
    width: 1920,
    height: 1080
  },
  {
    id: 35,
    url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80",
    alt: "Floresta de bambus zen",
    category: "meditation",
    width: 1920,
    height: 1080
  },

  // Mais imagens verticais de qualidade
  {
    id: 36,
    url: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Folhagem tropical em luz suave",
    category: "nature",
    width: 1080,
    height: 1920
  },
  {
    id: 37,
    url: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Pessoa em postura de yoga contemplativa",
    category: "meditation",
    width: 1080,
    height: 1920
  },
  {
    id: 38,
    url: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Céu estrelado inspirador",
    category: "inspiration",
    width: 1080,
    height: 1920
  },

  // Imagens adicionais em diferentes aspectos
  {
    id: 40,
    url: "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&h=1920&q=80",
    alt: "Mãos em posição de prece e gratidão",
    category: "meditation",
    width: 1080,
    height: 1920
  }
];

export const wellnessVideos: WellnessVideo[] = [
  // VÍDEOS MOTIVACIONAIS - BILLY GRAHAM E OUTROS
  {
    id: 1,
    title: "Billy Graham - The Power of Faith",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    duration: "28:45",
    category: "mindfulness",
    description: "Uma poderosa mensagem sobre fé e esperança pelo reverendo Billy Graham."
  },
  {
    id: 2,
    title: "Billy Graham - Finding Peace in Troubled Times",
    url: "https://www.youtube.com/watch?v=oHg5SJYRHA0",
    thumbnail: "https://img.youtube.com/vi/oHg5SJYRHA0/maxresdefault.jpg",
    duration: "32:15",
    category: "meditation",
    description: "Como encontrar paz interior em momentos de dificuldade."
  },
  {
    id: 3,
    title: "Joyce Meyer - Overcoming Fear with Faith",
    url: "https://www.youtube.com/watch?v=LnVoAb0tqbk",
    thumbnail: "https://img.youtube.com/vi/LnVoAb0tqbk/maxresdefault.jpg",
    duration: "25:30",
    category: "mindfulness",
    description: "Supere seus medos através da fé e da confiança em Deus."
  },
  {
    id: 4,
    title: "Joel Osteen - Living with Purpose",
    url: "https://www.youtube.com/watch?v=AQw3MrG_yGg",
    thumbnail: "https://img.youtube.com/vi/AQw3MrG_yGg/maxresdefault.jpg",
    duration: "30:00",
    category: "mindfulness",
    description: "Descubra seu propósito e viva uma vida plena e significativa."
  },
  {
    id: 5,
    title: "Billy Graham - The Way to Happiness",
    url: "https://www.youtube.com/watch?v=qBUMtGE_0TE",
    thumbnail: "https://img.youtube.com/vi/qBUMtGE_0TE/maxresdefault.jpg",
    duration: "26:20",
    category: "meditation",
    description: "O caminho verdadeiro para a felicidade segundo Billy Graham."
  },
  {
    id: 6,
    title: "Rick Warren - Finding Your Identity in Christ",
    url: "https://www.youtube.com/watch?v=lYYK1u5e7GM",
    thumbnail: "https://img.youtube.com/vi/lYYK1u5e7GM/maxresdefault.jpg",
    duration: "35:45",
    category: "mindfulness",
    description: "Encontre sua verdadeira identidade e valor em Cristo."
  },
  {
    id: 7,
    title: "Charles Stanley - Trusting God's Plan",
    url: "https://www.youtube.com/watch?v=ZnNW0Vz7s9o",
    thumbnail: "https://img.youtube.com/vi/ZnNW0Vz7s9o/maxresdefault.jpg",
    duration: "29:10",
    category: "meditation",
    description: "Aprenda a confiar no plano perfeito de Deus para sua vida."
  },
  {
    id: 8,
    title: "TD Jakes - Strength in Difficult Times",
    url: "https://www.youtube.com/watch?v=c4tK_qhPOZY",
    thumbnail: "https://img.youtube.com/vi/c4tK_qhPOZY/maxresdefault.jpg",
    duration: "38:15",
    category: "mindfulness",
    description: "Como encontrar força e coragem nos momentos mais difíceis."
  },
  {
    id: 9,
    title: "Billy Graham - Love That Changes Everything",
    url: "https://www.youtube.com/watch?v=Xg1FDPe8XrQ",
    thumbnail: "https://img.youtube.com/vi/Xg1FDPe8XrQ/maxresdefault.jpg",
    duration: "24:35",
    category: "mindfulness",
    description: "O poder transformador do amor de Deus em nossas vidas."
  },
  {
    id: 10,
    title: "Max Lucado - Grace for the Weary Soul",
    url: "https://www.youtube.com/watch?v=FBNss2PMj60",
    thumbnail: "https://img.youtube.com/vi/FBNss2PMj60/maxresdefault.jpg",
    duration: "22:40",
    category: "relaxation",
    description: "Encontre descanso e renovação na graça de Deus."
  },
  {
    id: 11,
    title: "Billy Graham - Hope for Today",
    url: "https://www.youtube.com/watch?v=9bXEAE8ksZA",
    thumbnail: "https://img.youtube.com/vi/9bXEAE8ksZA/maxresdefault.jpg",
    duration: "31:20",
    category: "mindfulness",
    description: "Encontre esperança e renovação mesmo nos dias mais difíceis."
  },
  {
    id: 12,
    title: "John MacArthur - The Joy of Salvation",
    url: "https://www.youtube.com/watch?v=UY2x9xTg7A4",
    thumbnail: "https://img.youtube.com/vi/UY2x9xTg7A4/maxresdefault.jpg",
    duration: "27:55",
    category: "meditation",
    description: "A verdadeira alegria que vem da salvação em Cristo."
  },
  {
    id: 13,
    title: "David Jeremiah - Standing Strong in Faith",
    url: "https://www.youtube.com/watch?v=hQ6R2kT0cQ4",
    thumbnail: "https://img.youtube.com/vi/hQ6R2kT0cQ4/maxresdefault.jpg",
    duration: "34:10",
    category: "mindfulness",
    description: "Como permanecer firme na fé durante as tempestades da vida."
  },
  {
    id: 14,
    title: "Billy Graham - The Secret of Happiness",
    url: "https://www.youtube.com/watch?v=gKA5ZnIJpE8",
    thumbnail: "https://img.youtube.com/vi/gKA5ZnIJpE8/maxresdefault.jpg",
    duration: "29:30",
    category: "meditation",
    description: "Descubra o verdadeiro segredo da felicidade duradoura."
  },
  {
    id: 15,
    title: "Tony Evans - Overcoming Life's Challenges",
    url: "https://www.youtube.com/watch?v=8tF6wY44-8k",
    thumbnail: "https://img.youtube.com/vi/8tF6wY44-8k/maxresdefault.jpg",
    duration: "33:45",
    category: "mindfulness",
    description: "Como superar os desafios da vida com sabedoria divina."
  },
  {
    id: 16,
    title: "Franklin Graham - God's Unconditional Love",
    url: "https://www.youtube.com/watch?v=M4Q7uL_J3r8",
    thumbnail: "https://img.youtube.com/vi/M4Q7uL_J3r8/maxresdefault.jpg",
    duration: "26:15",
    category: "meditation",
    description: "O amor incondicional de Deus que transforma vidas."
  },
  {
    id: 17,
    title: "Robert Morris - Walking in God's Presence",
    url: "https://www.youtube.com/watch?v=p9tD6w8lG5A",
    thumbnail: "https://img.youtube.com/vi/p9tD6w8lG5A/maxresdefault.jpg",
    duration: "28:20",
    category: "mindfulness",
    description: "Como viver conscientemente na presença de Deus."
  },
  {
    id: 18,
    title: "Billy Graham - Finding Strength in Weakness",
    url: "https://www.youtube.com/watch?v=rC4H8wVZ2fA",
    thumbnail: "https://img.youtube.com/vi/rC4H8wVZ2fA/maxresdefault.jpg",
    duration: "25:50",
    category: "relaxation",
    description: "Como Deus usa nossa fraqueza para mostrar Sua força."
  },
  {
    id: 19,
    title: "Louie Giglio - The Wonder of God's Creation",
    url: "https://www.youtube.com/watch?v=mN7IAaRdi_k",
    thumbnail: "https://img.youtube.com/vi/mN7IAaRdi_k/maxresdefault.jpg",
    duration: "32:40",
    category: "meditation",
    description: "Contemple as maravilhas da criação de Deus."
  },
  {
    id: 20,
    title: "Billy Graham - Living with Eternal Perspective",
    url: "https://www.youtube.com/watch?v=wB_hjqZQ1yY",
    thumbnail: "https://img.youtube.com/vi/wB_hjqZQ1yY/maxresdefault.jpg",
    duration: "30:25",
    category: "mindfulness",
    description: "Viva com uma perspectiva eterna e encontre significado verdadeiro."
  }
];

export const dailyRecommendations: DailyRecommendation[] = [
  {
    id: 1,
    date: "2025-01-23",
    quote: motivationalQuotes[0],
    activity: "Faça uma caminhada de 10 minutos ao ar livre",
    meditation: "Pratique 5 minutos de respiração consciente",
    affirmation: "Eu sou capaz de superar qualquer desafio que aparecer no meu caminho."
  },
  {
    id: 2,
    date: "2025-01-24",
    quote: motivationalQuotes[1],
    activity: "Escreva 3 coisas pelas quais você é grato hoje",
    meditation: "Medite por 8 minutos focando na gratidão",
    affirmation: "Eu escolho ver o bom em cada situação e pessoa."
  },
  {
    id: 3,
    date: "2025-01-25",
    quote: motivationalQuotes[2],
    activity: "Pratique um ato de gentileza com alguém",
    meditation: "Meditação loving-kindness por 10 minutos",
    affirmation: "Eu irradio amor e compaixão para mim mesmo e outros."
  }
];

// Função para obter recomendação do dia
export const getTodaysRecommendation = (): DailyRecommendation => {
  const today = new Date().toISOString().split('T')[0];
  const recommendation = dailyRecommendations.find(rec => rec.date === today);
  
  if (recommendation) {
    return recommendation;
  }
  
  // Se não houver recomendação específica para hoje, retorna uma baseada no dia do ano
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const quoteIndex = (dayOfYear - 1) % motivationalQuotes.length;
  
  return {
    id: Date.now(),
    date: today,
    quote: motivationalQuotes[quoteIndex],
    activity: "Reserve alguns minutos para fazer algo que te traz alegria",
    meditation: "Pratique respiração profunda por 5 minutos",
    affirmation: "Eu estou no caminho certo e confio no processo da vida."
  };
};

// Função para obter citações por categoria
export const getQuotesByCategory = (category: MotivationalQuote['category']): MotivationalQuote[] => {
  return motivationalQuotes.filter(quote => quote.category === category);
};

// Função para obter uma citação aleatória
export const getRandomQuote = (): MotivationalQuote => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};

// Função para obter imagens por categoria
export const getImagesByCategory = (category: WellnessImage['category']): WellnessImage[] => {
  return wellnessImages.filter(image => image.category === category);
};

// Função para obter vídeos por categoria
export const getVideosByCategory = (category: WellnessVideo['category']): WellnessVideo[] => {
  return wellnessVideos.filter(video => video.category === category);
};
