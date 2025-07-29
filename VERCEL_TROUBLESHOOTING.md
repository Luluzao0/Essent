# 🚨 Troubleshooting: Firebase no Vercel

## ❌ Erro: `Firebase: Error (auth/invalid-api-key)`

Este erro acontece quando as variáveis de ambiente do Firebase **não estão configuradas no Vercel**.

## ✅ Solução Passo-a-Passo

### 1. **Verificar Variáveis Localmente**
Execute localmente para confirmar que está funcionando:
```bash
npm run dev
```
Se funciona local, o problema é no Vercel.

### 2. **Configurar Variáveis no Vercel**

1. **Acesse [vercel.com](https://vercel.com)**
2. **Clique no seu projeto**
3. **Settings** → **Environment Variables**
4. **Adicione TODAS estas variáveis**:

```
Name: VITE_FIREBASE_API_KEY
Value: AIzaSyCKD4Mq_X6NGo-LGaNM2ZEp9p3jO8b1zjg
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: VITE_FIREBASE_AUTH_DOMAIN
Value: essent-8689b.firebaseapp.com
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: VITE_FIREBASE_PROJECT_ID
Value: essent-8689b
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: VITE_FIREBASE_STORAGE_BUCKET
Value: essent-8689b.firebasestorage.app
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: VITE_FIREBASE_MESSAGING_SENDER_ID
Value: 763662394966
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: VITE_FIREBASE_APP_ID
Value: 1:763662394966:web:ad4b93cb12de2f16193df7
Environments: ✅ Production ✅ Preview ✅ Development
```

```
Name: VITE_FIREBASE_MEASUREMENT_ID
Value: G-BBGCJG5M64
Environments: ✅ Production ✅ Preview ✅ Development
```

### 3. **Fazer Redeploy**
⚠️ **IMPORTANTE**: Depois de adicionar as variáveis, você DEVE fazer redeploy!

1. Vá na aba **Deployments**
2. Clique nos **3 pontos (...)** no último deployment
3. Clique em **"Redeploy"**
4. Aguarde o build completar

### 4. **Verificar Debug**
O projeto agora tem um componente de debug que mostra se as variáveis estão carregadas.
Após o redeploy, você verá no canto superior direito (em desenvolvimento) se as variáveis estão configuradas.

## 🔍 Checklist de Verificação

- [ ] ✅ Todas as 7 variáveis foram adicionadas no Vercel
- [ ] ✅ Cada variável tem **Production**, **Preview** e **Development** marcados
- [ ] ✅ Foi feito **Redeploy** após adicionar as variáveis
- [ ] ✅ Domínio do Vercel foi adicionado no Firebase Console (Authorized domains)

## 📱 Screenshot do Vercel

Suas variáveis no Vercel devem ficar assim:

```
Environment Variables (7)
├── VITE_FIREBASE_API_KEY          [Production, Preview, Development]
├── VITE_FIREBASE_AUTH_DOMAIN       [Production, Preview, Development]  
├── VITE_FIREBASE_PROJECT_ID        [Production, Preview, Development]
├── VITE_FIREBASE_STORAGE_BUCKET    [Production, Preview, Development]
├── VITE_FIREBASE_MESSAGING_SENDER_ID [Production, Preview, Development]
├── VITE_FIREBASE_APP_ID            [Production, Preview, Development]
└── VITE_FIREBASE_MEASUREMENT_ID    [Production, Preview, Development]
```

## 🆘 Se Ainda Não Funcionar

1. **Verifique o Console do Navegador**: Abra F12 e veja se há outros erros
2. **Teste em Modo Incógnito**: Às vezes cache causa problemas
3. **Aguarde Propagação**: Pode levar 2-3 minutos após redeploy
4. **Verifique Autorized Domains**: No Firebase Console, certifique-se que seu domínio `.vercel.app` está na lista

## 💡 Dica Pro

Se você quiser verificar se as variáveis estão carregadas, adicione este código temporário em qualquer componente:

```javascript
console.log('API Key:', import.meta.env.VITE_FIREBASE_API_KEY);
```

Se retornar `undefined`, as variáveis não estão configuradas no Vercel.

---

## 🎯 Resumo: Problema Comum = Solução Simples

**Problema**: Firebase não funciona no Vercel  
**Causa**: Variáveis de ambiente não configuradas  
**Solução**: Adicionar variáveis no painel do Vercel + Redeploy  

🚀 **Após seguir estes passos, seu login com Google funcionará perfeitamente no Vercel!**
