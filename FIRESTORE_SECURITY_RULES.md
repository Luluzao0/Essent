# Configuração das Regras de Segurança do Firestore

## Problema Identificado
Os erros no console indicam "Missing or insufficient permissions" ao tentar escrever dados no Firestore. Isso acontece porque as regras de segurança padrão do Firestore impedem escritas não autenticadas.

## Solução: Configurar Regras de Segurança

### 1. Acesse o Console do Firebase
1. Vá para https://console.firebase.google.com
2. Selecione seu projeto "essent-8689b"
3. No menu lateral, clique em "Firestore Database"
4. Clique na aba "Regras"

### 2. Regras de Desenvolvimento (Temporárias)
Para permitir leitura e escrita durante o desenvolvimento, use estas regras:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permite leitura e escrita para usuários autenticados
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 3. Regras de Produção (Recomendadas)
Para um ambiente mais seguro, use regras específicas por coleção:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Quotes - apenas leitura para todos, escrita para admins
    match /quotes/{quoteId} {
      allow read: if true;
      allow write: if request.auth != null && 
                     request.auth.token.admin == true;
    }
    
    // Videos - apenas leitura para todos, escrita para admins
    match /videos/{videoId} {
      allow read: if true;
      allow write: if request.auth != null && 
                     request.auth.token.admin == true;
    }
    
    // Images - apenas leitura para todos, escrita para admins
    match /images/{imageId} {
      allow read: if true;
      allow write: if request.auth != null && 
                     request.auth.token.admin == true;
    }
    
    // User Progress - apenas para o próprio usuário
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && 
                           request.auth.uid == userId;
    }
    
    // User Favorites - apenas para o próprio usuário
    match /userFavorites/{userId} {
      match /items/{itemId} {
        allow read, write: if request.auth != null && 
                             request.auth.uid == userId;
      }
    }
    
    // Meditation Sessions - apenas para o próprio usuário
    match /meditationSessions/{userId} {
      match /sessions/{sessionId} {
        allow read, write: if request.auth != null && 
                             request.auth.uid == userId;
      }
    }
    
    // Wellness Goals - apenas para o próprio usuário
    match /wellnessGoals/{userId} {
      match /goals/{goalId} {
        allow read, write: if request.auth != null && 
                             request.auth.uid == userId;
      }
    }
  }
}
```

### 4. Configuração de Custom Claims (Para Admins)
Para dar permissões de admin a usuários específicos, use o Firebase Admin SDK:

```javascript
// No backend/servidor
const admin = require('firebase-admin');

// Dar permissão de admin a um usuário
admin.auth().setCustomUserClaims(uid, { admin: true });
```

### 5. Regras Temporárias para Desenvolvimento
Se você quiser permitir tudo temporariamente (APENAS PARA DESENVOLVIMENTO):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **ATENÇÃO**: Nunca use esta regra em produção!

## Como Aplicar as Regras

1. Copie uma das regras acima
2. No Console do Firebase > Firestore > Regras
3. Cole o código no editor
4. Clique em "Publicar"
5. Aguarde alguns minutos para as regras serem aplicadas

## Recomendação Atual

Para resolver rapidamente o problema e permitir que o seeder funcione:

1. Use as **Regras de Desenvolvimento** primeiro
2. Execute o seeder para popular os dados
3. Depois mude para as **Regras de Produção** para maior segurança

## Verificação
Após aplicar as regras, teste novamente o seeder do Firestore. Os erros de permissão devem desaparecer.
