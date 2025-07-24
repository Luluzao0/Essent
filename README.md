# Essent - Wellness & Mental Health Platform

Uma aplicação web moderna para auto-ajuda e bem-estar mental com foco cristão e motivacional, construída com React, TypeScript e Vite.

## 🌟 Características

- **Design Responsivo**: Interface otimizada para dispositivos móveis, tablets e desktops
- **Animações Suaves**: Transições elegantes usando Framer Motion
- **Conteúdo Motivacional**: Frases inspiradoras e vídeos cristãos motivacionais
- **Seção de Meditação**: Técnicas e práticas para bem-estar mental
- **Galeria de Imagens**: Imagens em alta qualidade para inspiração
- **Navegação Intuitiva**: Interface limpa e minimalista

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápido e moderno
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **CSS Modules** - Estilização componetizada
- **React Router** - Roteamento de páginas

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Passos para executar localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/luisgustavo-dev/essent-wellness.git
   cd essent-wellness
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── QuoteSection.tsx
│   ├── ImageGallery.tsx
│   ├── SimpleVideoSection.tsx
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Meditation.tsx
│   ├── VideosSimple.tsx
│   └── ...
├── data/               # Dados estáticos
│   ├── wellnessDataClean.ts
│   ├── quotes.ts
│   └── images.ts
├── styles/             # Estilos globais
└── hooks/              # Hooks customizados
```

## 🎨 Design e UX

- **Cores Suaves**: Paleta com azuis pastel, verdes claros e roxos suaves
- **Tipografia Legível**: Hierarquia visual clara e fontes acessíveis
- **Layout Minimalista**: Interface limpa focada na experiência do usuário
- **Animações Calmas**: Transições que transmitem tranquilidade

## 🌐 Funcionalidades

### 📱 Responsividade
- Layout adaptativo para todas as resoluções
- Menu mobile otimizado
- Componentes que se ajustam automaticamente

### 🎥 Seção de Vídeos
- Player de vídeos integrado
- Thumbnails automáticas do YouTube
- Interface estilo Netflix com sobreposição
- Categorização por temas

### 🖼️ Galeria de Imagens
- Imagens em Full HD do Unsplash
- Carregamento otimizado
- Efeitos visuais suaves

### 💭 Frases Motivacionais
- Coleção de frases inspiradoras
- Categorização por temas
- Sistema de rotação automática

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza build de produção
- `npm run lint` - Executa linting do código

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### 📱 **Design Responsivo e Moderno**
- Efeitos glass morphism com fundos translúcidos
- Cores suaves e harmoniosas para tranquilidade
- Animações fluidas e transições suaves
- Layout totalmente responsivo com clamp() CSS
- Backdrop blur effects para profundidade visual
- **Responsividade Mobile**: Otimizado para dispositivos móveis com tipografia fluida

### 🧘 **Tema: "Encontre seu equilíbrio"**
- Foco no equilíbrio mental e emocional
- Conteúdo curado para bem-estar psicológico
- Abordagem holística para saúde mental
- Recursos para autoconhecimento e crescimento pessoal

### 💭 **Seção de Frases Motivacionais**
- Biblioteca com frases inspiradoras categorizadas
- Filtros por categoria (Motivação, Força, Paz, Autoestima, Gratidão)
- Gerador de frases aleatórias
- Animações de entrada e hover effects

### 🧘 **Seção de Meditação - Mobile Optimized**
- **Página Principal**: Grid responsivo com cards de técnicas
- **Respiração Guiada**: Visualizador 3D responsivo com animações
- Timer integrado para sessões personalizadas
- **Mobile**: Interface otimizada para toque com tipografia fluida
- Controles adaptáveis para diferentes tamanhos de tela

### 🖼️ **Galeria de Imagens Inspiradoras**
- Galeria interativa com imagens de alta qualidade do Unsplash
- Visualização em modal de tela cheia
- Categorização por temas (Natureza, Serenidade, Esperança, etc.)
- Layout masonry responsivo

### 🎥 **Biblioteca de Vídeos**
- Coleção de vídeos motivacionais e relaxantes
- Integração com YouTube
- Player modal integrado
- Organização por categorias

### 🎯 **Recomendações Diárias**
- Sistema inteligente de recomendações baseado no dia
- Conteúdo rotativo e sempre atualizado
- Cards informativos com dicas de bem-estar

## 🛠️ Tecnologias Utilizadas

### **Frontend Framework**
- **React 18** - Biblioteca JavaScript para interfaces de usuário
### 🎨 **Componentes Visuais Especializados**

#### LoadingLogo Component
- **Animações Múltiplas**: Rotação, pulsação e ondas de energia
- **Variações de Cor**: Gradiente, branco, cores primárias
- **Framer Motion**: Animações fluidas e performáticas
- **Uso**: Estados de loading e feedback visual

#### LoadingPage Component
- **Tela de Carregamento Completa**: Layout centralizado com gradientes
- **Indicadores de Progresso**: Pontos animados sincronizados
- **Responsivo**: Tipografia fluida com clamp()
- **Customizável**: Mensagens e estilos personalizáveis

## 🛠️ Tecnologias Utilizadas

### **Core Framework**
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Ferramenta de build rápida e moderna

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Luis Guilherme**
- GitHub: [@luluzao0](https://github.com/luluzao0)

## 🙏 Agradecimentos

- Unsplash pelas imagens de alta qualidade
- Lucide pela biblioteca de ícones
- Framer Motion pelas animações suaves
- Comunidade React pelo ecossistema incrível

---

Feito com ❤️ para promover bem-estar e paz mental.

### **Estilização e Responsividade**
- **CSS Modules** - Estilização modular
- **CSS Custom Properties** - Sistema de cores e variáveis
- **Clamp() Functions** - Tipografia e espaçamento fluidos
- **Flexbox & Grid** - Layout responsivo moderno
- **Glass Morphism** - Efeitos translúcidos modernos

### **Arquitetura de Dados**
- **TypeScript Interfaces** - Tipagem robusta para dados
- **In-Memory Database** - Sistema de dados local otimizado
- **Modular Data Management** - Organização eficiente do conteúdo

## 🚀 Como Executar o Projeto

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- npm ou yarn

### **Instalação**
```bash
# Clone o repositório
git clone [seu-repositorio]

# Navegue até o diretório
cd Projeto

# Instale as dependências
npm install
```

### **Desenvolvimento**
```bash
# Inicie o servidor de desenvolvimento
npm run dev

# A aplicação estará disponível em http://localhost:5174
```

### **Build para Produção**
```bash
# Gere a build otimizada
npm run build

# Visualize a build
npm run preview
```

## 🎨 **Novas Funcionalidades Implementadas**

### ✨ **Ícones do shadcn/ui (Radix UI)**
- **@radix-ui/react-icons**: Biblioteca de ícones consistente e elegante
- **Ícones temáticos**: Cada seção com ícones apropriados
- **Design system**: Ícones padronizados em toda aplicação
- **Acessibilidade**: Ícones otimizados para leitores de tela

### 🎬 **Transições Avançadas de Página**
- **PageTransition**: Transições suaves entre seções
- **SectionTransition**: Animações baseadas em scroll
- **CardTransition**: Efeitos elegantes para cards individuais
- **FloatingTransition**: Elementos flutuantes com movimento orgânico
- **Easing customizado**: Curvas de animação sofisticadas

### 🎯 **Sistema de Transições**
- **Entrada escalonada**: Seções aparecem em sequência elegante
- **Scroll animations**: Elementos animam ao entrar na viewport
- **Hover effects**: Micro-interações refinadas
- **Performance otimizada**: Transições GPU-aceleradas

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React reutilizáveis
│   ├── Header.tsx       # Cabeçalho com navegação
│   ├── HeroSection.tsx  # Seção principal com recomendações diárias
│   ├── QuotesSection.tsx # Galeria de frases motivacionais
│   ├── MeditationSection.tsx # Práticas de meditação com timer
│   ├── ImageGallery.tsx # Galeria de imagens inspiradoras
│   ├── VideoSection.tsx # Biblioteca de vídeos
│   └── Footer.tsx       # Rodapé com links e informações
├── data/
│   └── wellnessData.ts  # Base de dados em memória
├── styles/
│   └── index.css        # Estilos globais e variáveis CSS
├── App.tsx              # Componente principal da aplicação
└── main.tsx            # Ponto de entrada da aplicação
```

## 🎨 Sistema de Design

### **Paleta de Cores**
- **Primárias**: Tons de azul suave (#667eea, #764ba2)
- **Secundárias**: Verde menta e rosa suave
- **Acentos**: Dourado e coral
- **Neutros**: Cinzas suaves para contraste

### **Tipografia**
- **Fonte Principal**: System fonts otimizadas
- **Hierarquia**: Escalas consistentes para títulos e textos
- **Legibilidade**: Alto contraste e espaçamento adequado

### **Animações**
- **Transições**: 0.3s ease-in-out padrão
- **Efeitos de Hover**: Elevação e mudança de cor sutil
- **Scroll Animations**: Fade-in e slide-up baseados em interseção

## 📊 Conteúdo da Base de Dados

### **Frases Motivacionais** (15 frases)
Categorizadas em: Motivação, Força, Paz, Autoestima, Gratidão

### **Imagens Inspiradoras** (12 imagens)
Temas: Natureza, Serenidade, Esperança, Crescimento

### **Vídeos Motivacionais** (8 vídeos)
Categorias: Motivação, Relaxamento, Meditação, Autoajuda

### **Práticas de Meditação** (6 práticas)
- Respiração Consciente
- Mindfulness
- Relaxamento Muscular
- Visualização
- Meditação Caminhada
- Gratidão

## 🔧 Recursos Técnicos Avançados

- **Lazy Loading**: Carregamento otimizado de imagens
- **Error Boundaries**: Tratamento robusto de erros
- **TypeScript Strict Mode**: Tipagem rigorosa
- **Performance Optimizations**: Memorização e otimizações React
- **Accessibility**: Suporte completo a leitores de tela
- **SEO Friendly**: Meta tags e estrutura semântica

## 🌐 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: Sistema flexível de pontos de quebra
- **Touch Friendly**: Elementos otimizados para toque
- **Cross-Browser**: Compatibilidade com principais navegadores

## 📱 PWA Ready

Preparado para ser convertido em Progressive Web App com:
- Service Worker para cache offline
- Manifest para instalação
- Ícones otimizados para diferentes dispositivos

## 🔄 Atualizações Futuras

- [ ] Integração com APIs externas para mais conteúdo
- [ ] Sistema de usuários e preferências personalizadas
- [ ] Notificações push para lembretes de bem-estar
- [ ] Modo escuro/claro
- [ ] Internacionalização (i18n)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests
- Melhorar a documentação

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para promover o bem-estar e a saúde mental**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
