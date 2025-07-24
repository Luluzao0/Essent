# Deploy Instructions

Este documento contém instruções para fazer deploy do projeto em diferentes plataformas.

## 📦 Build de Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 🚀 Opções de Deploy

### 1. Vercel (Recomendado)

A Vercel é ideal para projetos React/Vite:

1. **Via GitHub:**
   - Conecte seu repositório GitHub à Vercel
   - Deploy automático a cada push

2. **Via CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Configuração:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 2. Netlify

1. **Via GitHub:**
   - Conecte repositório no Netlify
   - Configure build settings

2. **Via CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **Configuração:**
   - Build command: `npm run build`
   - Publish directory: `dist`

### 3. GitHub Pages

1. **Configure no package.json:**
   ```json
   {
     "homepage": "https://seu-usuario.github.io/essent-wellness"
   }
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Adicione scripts:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

### 4. Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize:**
   ```bash
   firebase init hosting
   ```

3. **Configure firebase.json:**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Configurações Específicas

### Variáveis de Ambiente

Se usar variáveis de ambiente, configure na plataforma:

- `VITE_API_URL`: URL da API (se houver)
- `VITE_SITE_URL`: URL do site

### SPA Routing

Para React Router funcionar corretamente:

**Vercel** - `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Netlify** - `_redirects` na pasta `public`:
```
/*    /index.html   200
```

## 📊 Performance

Após deploy, teste:

- Lighthouse Score
- Core Web Vitals
- Speed Index
- Time to Interactive

## 🔍 Monitoramento

Configure analytics se necessário:
- Google Analytics
- Vercel Analytics
- Hotjar para UX

## 🚨 Troubleshooting

**Erro de roteamento:**
- Verifique configuração de SPA
- Confirme rewrites/redirects

**Assets não carregando:**
- Verifique caminhos relativos
- Configure base URL no Vite se necessário

**Build falhando:**
- Verifique versão do Node.js
- Confirme todas as dependências
