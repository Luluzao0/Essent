# Dashboard do Usuário - Essent

Este projeto contém a implementação completa de um sistema de dashboard para usuários logados na plataforma Essent.

## 🚀 Funcionalidades Implementadas

### 📊 Dashboard Principal (`/dashboard`)
- **Visão Geral**: Estatísticas de progresso, ações rápidas e atividades recentes
- **Perfil do Usuário**: Visualização e edição de informações pessoais
- **Configurações da Conta**: Controle de notificações, privacidade e preferências

### 🔐 Sistema de Autenticação
- **Login com Google**: Integração com Firebase Authentication
- **Proteção de Rotas**: Apenas usuários logados podem acessar o dashboard
- **Redirecionamento Automático**: Usuários logados são redirecionados para o dashboard

### 📱 Design Responsivo
- **Mobile First**: Interface otimizada para dispositivos móveis
- **Tablet e Desktop**: Layout adapta-se automaticamente a diferentes tamanhos de tela
- **Componentes Flexíveis**: Grids e layouts que se ajustam dinamicamente

## 🏗️ Arquitetura dos Componentes

### Páginas
- `src/pages/Dashboard.tsx` - Página principal do dashboard com navegação por abas
- `src/pages/Dashboard.module.css` - Estilos responsivos da página

### Componentes do Dashboard
- `src/components/dashboard/ProfileView.tsx` - Visualização e edição do perfil
- `src/components/dashboard/AccountSettings.tsx` - Configurações da conta
- `src/components/dashboard/ProgressStats.tsx` - Estatísticas e gráficos de progresso
- `src/components/dashboard/QuickActions.tsx` - Ações rápidas e metas diárias
- `src/components/dashboard/RecentActivity.tsx` - Atividades recentes e próximos eventos

### Proteção de Rotas
- `src/components/ProtectedRoute.tsx` - HOC para proteger rotas autenticadas

## 🎨 Recursos Visuais

### Animações
- **Framer Motion**: Transições suaves entre componentes
- **Micro-interações**: Hover effects e estados de loading
- **Progressões Animadas**: Barras de progresso e estatísticas

### Design System
- **Glassmorphism**: Efeitos de vidro com backdrop-filter
- **Gradientes**: Cores harmoniosas com gradientes lineares
- **Sombras**: Box-shadows suaves para profundidade
- **Tipografia**: Hierarquia visual clara e legível

## 📊 Funcionalidades do Dashboard

### Visão Geral
- **Estatísticas de Uso**: Sequências, tempo total, metas
- **Gráfico Semanal**: Visualização da atividade dos últimos 7 dias
- **Insights Personalizados**: Dicas baseadas no comportamento do usuário
- **Ações Rápidas**: Iniciar meditação, exercícios de respiração, etc.

### Perfil
- **Informações Pessoais**: Nome, email, telefone, localização
- **Avatar**: Upload e gerenciamento de foto de perfil
- **Biografia**: Descrição personalizada do usuário
- **Estatísticas**: Dias ativos, meditações, minutos praticados

### Configurações
- **Notificações**: Controle de lembretes e alertas
- **Privacidade**: Visibilidade do perfil e compartilhamento
- **Preferências**: Tema, idioma, durações padrão
- **Dados**: Exportação e gerenciamento de dados pessoais

## 🔧 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Firebase Authentication** para login com Google
- **React Router DOM** para navegação
- **Framer Motion** para animações
- **CSS Modules** para estilos isolados
- **Lucide React** para ícones
- **Radix UI Icons** para elementos de interface

## 📱 Responsividade

### Mobile (≤ 480px)
- Layout em coluna única
- Navegação por abas compacta (apenas ícones)
- Cards empilhados verticalmente
- Touch-friendly com botões maiores

### Tablet (481px - 768px)
- Layout híbrido adaptável
- Grids de 1-2 colunas conforme o conteúdo
- Navegação com labels reduzidas

### Desktop (> 768px)
- Layout completo com múltiplas colunas
- Todas as funcionalidades visíveis
- Hover effects e micro-interações avançadas

## 🚀 Como Usar

1. **Acesso**: Usuários devem fazer login com Google
2. **Redirecionamento**: Após login, são automaticamente direcionados para `/dashboard`
3. **Navegação**: Use as abas para alternar entre Visão Geral, Perfil e Configurações
4. **Personalização**: Configure suas preferências na aba Configurações
5. **Acompanhamento**: Monitore seu progresso na Visão Geral

## 🔒 Segurança

- **Rotas Protegidas**: Dashboard acessível apenas para usuários autenticados
- **Validação de Estado**: Verificação contínua do estado de autenticação
- **Redirecionamento Seguro**: Usuários não logados são redirecionados para a home

## 🎯 Próximos Passos

- [ ] Integração com backend para persistência de dados
- [ ] Notificações push para lembretes
- [ ] Gamificação com sistema de conquistas
- [ ] Compartilhamento social de progresso
- [ ] Relatórios detalhados de uso
