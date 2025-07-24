export const generateFavicon = () => {
  // Criar um canvas para gerar o favicon
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return null;
  
  canvas.width = 32;
  canvas.height = 32;
  
  // Fundo gradiente
  const gradient = ctx.createLinearGradient(0, 0, 32, 32);
  gradient.addColorStop(0, '#3b82f6');
  gradient.addColorStop(0.5, '#8b5cf6');
  gradient.addColorStop(1, '#ec4899');
  
  // Círculo de fundo
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(16, 16, 15, 0, 2 * Math.PI);
  ctx.fill();
  
  // Símbolo central - forma geométrica que representa equilíbrio
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.moveTo(16, 6);  // topo
  ctx.lineTo(22, 12); // direita
  ctx.lineTo(16, 18); // centro
  ctx.lineTo(10, 12); // esquerda
  ctx.closePath();
  ctx.fill();
  
  // Parte inferior do símbolo
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.beginPath();
  ctx.moveTo(16, 18); // centro
  ctx.lineTo(22, 24); // direita inferior
  ctx.lineTo(16, 30); // fundo
  ctx.lineTo(10, 24); // esquerda inferior
  ctx.closePath();
  ctx.fill();
  
  // Pontos de energia
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.beginPath();
  ctx.arc(16, 4, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(16, 28, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(4, 16, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(28, 16, 1.5, 0, 2 * Math.PI);
  ctx.fill();
  
  return canvas.toDataURL();
};

// Função para aplicar o favicon
export const applyFavicon = () => {
  const faviconData = generateFavicon();
  if (!faviconData) return;
  
  // Remove favicon existente
  const existingFavicon = document.querySelector('link[rel="icon"]');
  if (existingFavicon) {
    existingFavicon.remove();
  }
  
  // Adiciona novo favicon
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png';
  link.href = faviconData;
  document.head.appendChild(link);
};

// Função para gerar diferentes tamanhos de ícones
export const generateAppIcons = () => {
  const sizes = [16, 32, 48, 64, 128, 192, 512];
  const icons: { size: number; dataUrl: string }[] = [];
  
  sizes.forEach(size => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    canvas.width = size;
    canvas.height = size;
    
    const center = size / 2;
    const radius = (size - 4) / 2;
    
    // Fundo gradiente
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#3b82f6');
    gradient.addColorStop(0.5, '#8b5cf6');
    gradient.addColorStop(1, '#ec4899');
    
    // Círculo de fundo
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    // Símbolo central escalado
    const symbolSize = size * 0.6;
    const symbolCenter = center;
    
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(symbolCenter, symbolCenter - symbolSize * 0.3);
    ctx.lineTo(symbolCenter + symbolSize * 0.2, symbolCenter - symbolSize * 0.1);
    ctx.lineTo(symbolCenter, symbolCenter + symbolSize * 0.1);
    ctx.lineTo(symbolCenter - symbolSize * 0.2, symbolCenter - symbolSize * 0.1);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.moveTo(symbolCenter, symbolCenter + symbolSize * 0.1);
    ctx.lineTo(symbolCenter + symbolSize * 0.2, symbolCenter + symbolSize * 0.3);
    ctx.lineTo(symbolCenter, symbolCenter + symbolSize * 0.5);
    ctx.lineTo(symbolCenter - symbolSize * 0.2, symbolCenter + symbolSize * 0.3);
    ctx.closePath();
    ctx.fill();
    
    // Pontos de energia proporcionais
    const pointSize = Math.max(1, size * 0.04);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    
    // Pontos cardinais
    ctx.beginPath();
    ctx.arc(center, pointSize * 2, pointSize, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(center, size - pointSize * 2, pointSize, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(pointSize * 2, center, pointSize, 0, 2 * Math.PI);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(size - pointSize * 2, center, pointSize, 0, 2 * Math.PI);
    ctx.fill();
    
    icons.push({
      size,
      dataUrl: canvas.toDataURL()
    });
  });
  
  return icons;
};
