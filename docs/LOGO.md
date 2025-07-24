# Logo Essent - Documentação

## 🎨 Conceito da Logo

A logo da **Essent** foi criada com elementos que representam os valores fundamentais da plataforma de bem-estar mental:

### Simbolismo

- **Círculo externo**: Representa a totalidade, completude e proteção
- **Símbolo central**: Dois losangos que simbolizam equilíbrio, harmonia e dualidade (mente-corpo, interno-externo)
- **Pontos cardinais**: Energia vital, direcionamento e conexão com o universo
- **Ondas sutis**: Fluxo de energia, movimento sutil da respiração e meditação

### Cores

- **Azul (#3b82f6)**: Confiança, calma, serenidade
- **Roxo (#8b5cf6)**: Espiritualidade, transformação, sabedoria
- **Rosa (#ec4899)**: Compaixão, amor próprio, cura emocional

## 🚀 Variações Disponíveis

### Componente React Logo

```tsx
import Logo from './components/Logo';

// Logo completa com ícone e texto
<Logo size={40} variant="full" color="gradient" />

// Apenas o ícone
<Logo size={32} variant="icon" color="primary" />

// Apenas o texto
<Logo size={40} variant="text" color="white" />
```

### Propriedades

- **size**: Tamanho em pixels (padrão: 40)
- **variant**: 'full' | 'icon' | 'text' (padrão: 'full')
- **color**: 'primary' | 'white' | 'gradient' (padrão: 'primary')
- **className**: Classes CSS adicionais

### Cores Disponíveis

#### Primary
- Azul sólido para uso geral

#### White
- Versão branca para fundos escuros

#### Gradient
- Gradiente multicolor para destaque especial

## 📱 Aplicações

### Header
- Logo completa com gradiente
- Tamanho: 32px
- Variante: full

### Footer
- Logo completa branca
- Tamanho: 40px
- Variante: full

### Favicon
- Ícone SVG otimizado
- Tamanho: 32x32px
- Cores gradiente

## 🎯 Diretrizes de Uso

### ✅ Faça
- Use a logo em fundos claros (versão primary/gradient)
- Use a versão branca em fundos escuros
- Mantenha proporções adequadas
- Preserve espaçamento ao redor da logo

### ❌ Não faça
- Não altere as proporções
- Não use cores diferentes das especificadas
- Não coloque sobre fundos com baixo contraste
- Não redimensione abaixo de 24px para legibilidade

## 🔧 Arquivos

- `/src/components/Logo.tsx` - Componente React principal
- `/public/favicon.svg` - Favicon otimizado
- `/src/utils/logoUtils.ts` - Utilitários para geração de ícones

## 🌟 Significado do Nome

**Essent** deriva de "essência" - representando o núcleo, o fundamental, aquilo que é verdadeiramente importante para o bem-estar mental e emocional. A logo visual reflete essa busca pela essência através de formas simples, harmoniosas e significativas.
