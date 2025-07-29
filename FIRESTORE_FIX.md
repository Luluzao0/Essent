# 🔧 Como Resolver o Problema do Firestore

## ⚠️ Problema Atual
O erro "Missing or insufficient permissions" acontece porque o Firestore precisa de regras de segurança configuradas ANTES de popular dados.

## ✅ Solução Rápida (5 minutos)

### Passo 1: Acesse o Console do Firebase
1. Abra https://console.firebase.google.com
2. Selecione seu projeto **essent-8689b**
3. No menu lateral esquerdo, clique em **"Firestore Database"**
4. Clique na aba **"Regras"** (Rules)

### Passo 2: Configure Regras Temporárias
Cole este código no editor de regras:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Passo 3: Publique as Regras
1. Clique no botão **"Publicar"** (Publish)
2. Aguarde alguns segundos para aplicar

### Passo 4: Use o Dashboard
1. Volte para seu dashboard
2. Vá na aba **"Admin DB"**
3. Clique em **"Criar Coleções"** PRIMEIRO
4. Depois clique em **"Inicializar Tudo"**

## 🎉 Resultado
Agora o seeder funcionará sem erros de permissão!

## 🔒 Importante
Essas regras permitem acesso para usuários logados. Para produção, você pode usar regras mais restritivas depois.

---

**Qualquer dúvida, me chame! 😊**
