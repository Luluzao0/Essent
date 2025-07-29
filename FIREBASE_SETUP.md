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

## 4. Atualizar arquivo de configuração
Abra o arquivo `src/config/firebase.ts` e substitua as configurações:

```typescript
const firebaseConfig = {
  apiKey: "sua-api-key-aqui",
  authDomain: "seu-project-id.firebaseapp.com", 
  projectId: "seu-project-id",
  storageBucket: "seu-project-id.appspot.com",
  messagingSenderId: "seu-sender-id",
  appId: "seu-app-id"
};
```

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
