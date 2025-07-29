// Respostas empáticas e motivacionais para o chatbot terapêutico

const greetings = [
  'Olá! Como posso te ajudar hoje?',
  'Oi! Estou aqui para te ouvir. Como você está se sentindo?',
  'Bem-vindo! Quer compartilhar como está seu dia?',
  'Oi! Lembre-se: você não está sozinho. Como posso apoiar você agora?'
];

const encouragements = [
  'Lembre-se: cada passo, por menor que seja, é importante.',
  'Você está indo muito bem. Permita-se sentir e acolher suas emoções.',
  'Respire fundo. Você merece cuidado e atenção.',
  'Se quiser, posso sugerir uma meditação ou frase motivacional.'
];

const followUps = [
  'Quer conversar mais sobre isso?',
  'Se quiser, posso te ajudar a refletir sobre esse sentimento.',
  'Estou aqui para te ouvir, sem julgamentos.',
  'Você gostaria de tentar uma técnica de respiração agora?'
];

export function getBotGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export function getBotEncouragement() {
  return encouragements[Math.floor(Math.random() * encouragements.length)];
}

export function getBotFollowUp() {
  return followUps[Math.floor(Math.random() * followUps.length)];
}

export function getBotResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  if (lower.includes('ansioso') || lower.includes('ansiedade')) {
    return 'Ansiedade é algo comum. Que tal fazermos um exercício de respiração juntos?';
  }
  if (lower.includes('triste') || lower.includes('tristeza')) {
    return 'Sinto muito que esteja se sentindo assim. Quer conversar mais sobre isso?';
  }
  if (lower.includes('feliz') || lower.includes('alegre')) {
    return 'Que ótimo saber disso! Compartilhe o que te deixou feliz hoje.';
  }
  if (lower.includes('medo')) {
    return 'O medo faz parte da vida, mas você é mais forte do que imagina.';
  }
  if (lower.includes('cansado') || lower.includes('exausto')) {
    return 'Respeite seu tempo de descanso. Você merece cuidar de si.';
  }
  // fallback
  return getBotEncouragement();
}

export function formatTherapistMessage(text: string): string {
  // Remove quebras de linha excessivas
  let formatted = text.replace(/\n{3,}/g, '\n\n');
  
  // Converte **negrito** para <strong>
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Converte quebras duplas em parágrafos
  formatted = formatted.replace(/\n\n/g, '</p><p>');
  
  // Converte quebras simples em <br>
  formatted = formatted.replace(/\n/g, '<br>');
  
  // Adiciona tags de parágrafo no início e fim
  if (!formatted.startsWith('<p>')) {
    formatted = '<p>' + formatted;
  }
  if (!formatted.endsWith('</p>')) {
    formatted = formatted + '</p>';
  }
  
  // Limita o tamanho da mensagem se estiver muito longa
  if (formatted.length > 1000) {
    formatted = formatted.substring(0, 950) + '...</p>';
  }
  
  return formatted;
}
