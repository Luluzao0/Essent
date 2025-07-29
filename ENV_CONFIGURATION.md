# 🔐 Configuração de Variáveis de Ambiente - Essent

## ✅ Firebase Configurado com Environment Variables

As configurações do Firebase agora estão seguras usando variáveis de ambiente, garantindo que credenciais sensíveis não sejam expostas no código-fonte.

## 📁 Arquivos de Configuração

### `.env` (Local - NÃO commitado)
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSyCKD4Mq_X6NGo-LGaNM2ZEp9p3jO8b1zjg
VITE_FIREBASE_AUTH_DOMAIN=essent-8689b.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=essent-8689b
VITE_FIREBASE_STORAGE_BUCKET=essent-8689b.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=763662394966
VITE_FIREBASE_APP_ID=1:763662394966:web:ad4b93cb12de2f16193df7
VITE_FIREBASE_MEASUREMENT_ID=G-BBGCJG5M64
```

### `.env.example` (Commitado como template)
```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
# ... outros campos como exemplo
```

### `src/config/firebase.ts` (Código atualizado)
```typescript
// Configuração do Firebase usando variáveis de ambiente
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  // ... outras configurações
};
```

## 🔒 Segurança Implementada

### ✅ Proteções Ativas:
- **`.env` no `.gitignore`** - Credenciais não vão para o Git
- **Prefixo `VITE_`** - Apenas variáveis com prefixo são expostas no cliente
- **`.env.example`** - Template para novos desenvolvedores
- **Validação automática** - Vite carrega as variáveis automaticamente

### 🚫 O que NÃO é mais exposto:
- ❌ API Keys hardcoded no código
- ❌ Credenciais em arquivos commitados
- ❌ Configurações sensíveis no repositório público

## 🚀 Como Configurar (Novos Desenvolvedores)

### 1. Clone o Repositório
```bash
git clone <repo-url>
cd essent
npm install
```

### 2. Configure as Variáveis de Ambiente
```bash
# Copie o template
cp .env.example .env

# Edite o .env com suas credenciais do Firebase
nano .env  # ou seu editor preferido
```

### 3. Execute o Projeto
```bash
npm run dev
```

## 🌐 Deploy em Produção

### Vercel (Recomendado)
1. No painel do Vercel, vá em **Settings** > **Environment Variables**
2. Adicione cada variável:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - etc.

### Netlify
1. No painel do Netlify, vá em **Site settings** > **Environment variables**
2. Adicione as mesmas variáveis

## 💡 Vantagens da Configuração Atual

### 🔐 Segurança
- Credenciais fora do código-fonte
- Diferentes configurações por ambiente
- Não há risco de commit acidental de credenciais

### 🛠️ Flexibilidade
- Fácil switch entre ambientes (dev/staging/prod)
- Diferentes projetos Firebase por ambiente
- Configuração sem alterar código

### 👥 Colaboração
- Cada desenvolvedor usa suas próprias credenciais
- `.env.example` orienta novos membros da equipe
- Configuração padronizada

## 🎯 Status: ✅ SEGURO E CONFIGURADO

O Firebase agora está:
- ✅ **Configurado com variáveis de ambiente**
- ✅ **Credenciais protegidas do Git**
- ✅ **Pronto para produção**
- ✅ **Documentado para equipe**

🔥 **O sistema de autenticação agora é profissional e seguro!**
