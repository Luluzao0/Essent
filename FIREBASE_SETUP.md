# Configuração do Firebase

Para configurar o Firebase no seu projeto Essent, siga estes passos:

## 1. Firebase Console
1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Clique em "Adicionar projeto" ou selecione seu projeto existente
3. Dê um nome ao projeto (ex: "essent-wellness")

## 2. Configurar Authentication
1. No painel do Firebase, vá em "Authentication"
2. Clique em "Começar"
3. Na aba "Sign-in method", habilite "Google"
4. Configure o Google Sign-in:
   - Adicione um nome para o projeto público
   - Defina seu email de suporte
   - Clique em "Salvar"

## 3. Obter Configurações
1. No painel do Firebase, clique no ícone de engrenagem (⚙️) e vá em "Configurações do projeto"
2. Role para baixo até "Seus apps"
3. Clique em "Adicionar app" e selecione o ícone web (</>) 
4. Registre seu app com um apelido (ex: "essent-web")
5. Copie o objeto de configuração `firebaseConfig`

## 4. Configurar Variáveis de Ambiente
1. No projeto, você encontrará o arquivo `.env.example`
2. Copie o arquivo `.env.example` para `.env` (se ainda não existir)
3. Substitua os valores do Firebase no arquivo `.env`:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=sua-api-key-aqui
VITE_FIREBASE_AUTH_DOMAIN=seu-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-project-id
VITE_FIREBASE_STORAGE_BUCKET=seu-project-id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=seu-sender-id
VITE_FIREBASE_APP_ID=seu-app-id
VITE_FIREBASE_MEASUREMENT_ID=seu-measurement-id
```

**⚠️ IMPORTANTE**: O arquivo `.env` já está no `.gitignore`, então suas credenciais não serão enviadas para o repositório.

## 5. Configurar domínio autorizado (Para produção)
1. Na seção "Authentication" > "Settings" > "Authorized domains"
2. Adicione seu domínio de produção (ex: `essentpsi.vercel.app`)

## 6. Teste
Após configurar, teste o login:
1. Execute `npm run dev`
2. Clique no botão "Entrar" no header
3. Teste o login com Google

## Estrutura de Arquivos Criados:
```
src/
├── config/
│   └── firebase.ts          # Configuração do Firebase
├── context/
│   └── AuthContext.tsx      # Context de autenticação
├── hooks/
│   └── useFirstLogin.ts     # Hook para primeiro login
├── components/
│   ├── LoginModal.tsx       # Modal de login
│   └── AppContent.tsx       # Wrapper de conteúdo
└── pages/
    └── Welcome.tsx          # Tela de boas-vindas
```

## Funcionalidades Implementadas:
✅ Login com Google  
✅ Logout  
✅ Botão de login no header (desktop e mobile)  
✅ Tela de boas-vindas no primeiro login  
✅ Design responsivo  
✅ Animações suaves  
✅ Persistência do estado de login  

O sistema está totalmente configurado e funcionando. Só falta você adicionar suas configurações do Firebase!
