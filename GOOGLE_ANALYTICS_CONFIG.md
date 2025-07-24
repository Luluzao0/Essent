# Configuração Google Analytics 4 - Essent

## ✅ Status Atual
- **ID do Analytics**: G-TPCY0QD3W0
- **Tags implementadas**: ✅ Ativo no site
- **Coleta de dados**: 🟢 Funcionando

## 📊 Eventos Personalizados Configurados

### 1. Eventos de Meditação
- `meditation_start` - Quando usuário inicia uma meditação
- `meditation_complete` - Quando usuário completa uma meditação
- **Parâmetros**: tipo de meditação, duração

### 2. Eventos de Conversão
- `resource_download` - Download de recursos gratuitos
- `newsletter_signup` - Inscrição na newsletter
- **Parâmetros**: nome do recurso, tipo, fonte

### 3. Eventos de Engajamento
- `tool_usage` - Uso de ferramentas interativas
- `page_engagement` - Tempo gasto em páginas específicas
- **Parâmetros**: nome da ferramenta, tempo gasto

### 4. Eventos de Busca
- `search` - Busca interna no site
- **Parâmetros**: termo de busca, número de resultados

### 5. Eventos Sociais
- `share` - Compartilhamento nas redes sociais
- **Parâmetros**: plataforma, tipo de conteúdo

## 🎯 Configurações Recomendadas no Painel GA4

### 1. Objetivos de Conversão
Configure estes eventos como conversões:
- ✅ `meditation_complete`
- ✅ `resource_download`
- ✅ `newsletter_signup`

### 2. Audiências Personalizadas

#### Usuários Engajados
- Condição: `meditation_start` > 3 vezes nos últimos 30 dias
- **Uso**: Retargeting, análise de comportamento

#### Usuários Interessados em Recursos
- Condição: Visitaram `/resources` ou fizeram download
- **Uso**: Campanhas de upsell, conteúdo premium

#### Usuários de Longa Permanência
- Condição: `page_engagement` > 300 segundos
- **Uso**: Identificar conteúdo mais valioso

### 3. Relatórios Personalizados

#### Relatório de Meditação
```
Dimensão: meditation_type
Métricas: 
- Número de sessões iniciadas
- Número de sessões completadas
- Taxa de conclusão
- Tempo médio de sessão
```

#### Relatório de Recursos
```
Dimensão: resource_name
Métricas:
- Número de downloads
- Taxa de conversão
- Origem do tráfego
```

## 📈 KPIs Principais para Acompanhar

### Métricas de Engajamento
- **Taxa de conclusão de meditação**: meta >60%
- **Tempo médio na página**: meta >3 minutos
- **Páginas por sessão**: meta >2,5
- **Taxa de rejeição**: meta <50%

### Métricas de Conversão
- **Downloads de recursos**: meta 100/mês
- **Inscrições newsletter**: meta 50/mês
- **Taxa de conversão geral**: meta >3%

### Métricas de Tráfego
- **Usuários orgânicos**: meta 1.000/mês
- **Sessões de meditação**: meta 500/mês
- **Retorno de usuários**: meta >30%

## 🔧 Como Verificar se Está Funcionando

### 1. Tempo Real
- Acesse Google Analytics > Tempo Real
- Navegue pelo site em outra aba
- Verifique se aparece tráfego ativo

### 2. Eventos
- Acesse Eventos > Todos os eventos
- Procure por eventos personalizados como `meditation_start`
- Teste fazendo ações no site

### 3. Depuração
- Use Google Tag Assistant (extensão Chrome)
- Verifique se tags estão disparando corretamente
- Monitore console do navegador para erros

## 📋 Próximos Passos

### Semana 1
- [ ] Configurar objetivos de conversão
- [ ] Criar audiências personalizadas
- [ ] Configurar alertas para métricas principais

### Semana 2
- [ ] Implementar Enhanced Ecommerce (se aplicável)
- [ ] Configurar integrações com Google Search Console
- [ ] Criar dashboard personalizado

### Semana 3
- [ ] Análise de dados da primeira semana
- [ ] Otimização baseada em insights
- [ ] Configuração de relatórios automáticos

## 🎯 Palavras-chave para Monitorar no Search Console

Conecte o Google Analytics com Search Console para monitorar:

### Primárias
- saúde mental
- meditação guiada
- ansiedade
- depressão
- mindfulness

### Secundárias
- bem-estar mental
- relaxamento
- autoajuda
- técnicas respiração
- body scan

### Long-tail
- como fazer meditação para ansiedade
- técnicas de respiração para estresse
- meditação mindfulness iniciantes
- recursos gratuitos saúde mental

## 📊 Relatórios Automáticos Sugeridos

### Relatório Semanal
- Usuários ativos
- Sessões de meditação
- Downloads de recursos
- Principais páginas

### Relatório Mensal
- Crescimento orgânico
- Performance por palavra-chave
- Funil de conversão
- Análise de audiência

---

## ⚡ Comandos Úteis para Teste

Para testar se o tracking está funcionando, abra o console do navegador e execute:

```javascript
// Testar evento de meditação
gtag('event', 'meditation_start', {
  meditation_type: 'breathing',
  duration_minutes: 5
});

// Testar evento de download
gtag('event', 'resource_download', {
  resource_name: 'Guia Mindfulness',
  resource_type: 'PDF'
});
```

**Status**: 🟢 Google Analytics G-TPCY0QD3W0 ativo e coletando dados!
