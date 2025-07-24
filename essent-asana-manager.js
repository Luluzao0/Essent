// 🚀 Sistema de Integração Asana para Projeto Essent
// Configuração completa usando a API REST da Asana

/**
 * Dados do Projeto Essent na Asana
 */
const ESSENT_PROJECT = {
  projectId: '1210883144442153',
  workspaceId: '1210883386782130', 
  boardId: '1210883405455170',
  projectUrl: 'https://app.asana.com/1/1210883386782130/project/1210883144442153/board/1210883405455170'
};

/**
 * Classe para gerenciar integração com Asana
 */
class EssentAsanaManager {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.baseURL = 'https://app.asana.com/api/1.0';
    this.headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };
  }

  /**
   * Criar as tarefas prioritárias do projeto Essent
   */
  async createEssentTasks() {
    const tasks = [
      {
        name: "🔍 Monitorar ranking 'essent' no Google",
        notes: `Implementar tracking automático de posições no Google Search Console.
        
Objetivos:
- Essent aparecer no top 3 para "essent psicologia"
- Monitoramento diário automatizado
- Alertas de mudanças de posição

Ferramentas:
- Google Search Console API
- Script de automação
- Dashboard de métricas`,
        due_on: "2025-07-30",
        assignee: "me"
      },
      {
        name: "📊 Implementar Schema.org avançado",
        notes: `Adicionar marcação estruturada para melhorar SEO.

Páginas prioritárias:
- /meditation/* (Organization, MedicalWebPage)
- /practices (Course, HowTo)
- / (WebSite, Organization)

Schemas a implementar:
- Organization (Essent)
- Course (meditações)
- Review/Rating
- FAQ (se necessário)`,
        due_on: "2025-07-31",
        assignee: "me"
      },
      {
        name: "📱 Otimizar performance mobile < 3s",
        notes: `Melhorar Core Web Vitals para mobile.

Current scores:
- Mobile Performance: 78/100
- LCP: Precisa melhorar
- CLS: OK
- FID: OK

Tarefas:
- Lazy loading para imagens
- Code splitting por rota
- Preload critical resources
- Otimizar bundle size`,
        due_on: "2025-08-02",
        assignee: "me"
      },
      {
        name: "🎨 Sistema de progresso do usuário",
        notes: `Criar tracking de meditações completadas.

Features:
- Contador de práticas
- Badges de conquistas
- Streak de dias consecutivos
- Dashboard pessoal
- LocalStorage persistence

UI Components:
- Progress rings
- Achievement cards
- Stats overview`,
        due_on: "2025-08-05",
        assignee: "me"
      },
      {
        name: "🌙 Implementar modo escuro",
        notes: `Theme switcher com persistência.

Features:
- Toggle dark/light
- Sistema de cores
- LocalStorage persistence
- Smooth transitions
- Respect system preference

Colors:
- Dark primary: #1a1a2e
- Dark secondary: #16213e
- Dark accent: #0f3460`,
        due_on: "2025-08-07",
        assignee: "me"
      },
      {
        name: "📈 Google Analytics 4 eventos customizados",
        notes: `Implementar tracking avançado de interactions.

Eventos a trackear:
- meditation_start (tipo, duração)
- meditation_complete (tempo_total)
- page_scroll_depth (25%, 50%, 75%, 100%)
- video_play/pause/complete
- resource_download
- cta_click

Dashboard GA4:
- Funil de conversão
- Heatmaps de engagement
- Relatórios customizados`,
        due_on: "2025-08-03",
        assignee: "me"
      },
      {
        name: "🎯 Configurar automações Asana",
        notes: `Criar automações para workflow de desenvolvimento.

Automações:
- Deploy notifications
- Bug tracking
- Feature requests pipeline
- SEO monitoring alerts
- Weekly retrospectives

Integrações:
- GitHub webhooks
- Vercel deploys
- Google Analytics reports
- Search Console data`,
        due_on: "2025-08-01",
        assignee: "me"
      }
    ];

    const createdTasks = [];

    for (const taskData of tasks) {
      try {
        console.log(`Creating task: ${taskData.name}`);
        
        const response = await fetch(`${this.baseURL}/tasks`, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            data: {
              ...taskData,
              projects: [ESSENT_PROJECT.projectId]
            }
          })
        });

        if (response.ok) {
          const task = await response.json();
          console.log(`✅ Created: ${task.data.name}`);
          createdTasks.push(task.data);
        } else {
          const error = await response.json();
          console.error(`❌ Error creating task: ${taskData.name}`, error);
        }
      } catch (error) {
        console.error(`❌ Network error for task: ${taskData.name}`, error);
      }
    }

    return createdTasks;
  }

  /**
   * Criar seções de organização no projeto
   */
  async createProjectSections() {
    const sections = [
      { name: "🔥 Sprint Atual - Prioridade ALTA" },
      { name: "🟡 Próximo Sprint - Prioridade MÉDIA" }, 
      { name: "🔮 Backlog - Prioridade BAIXA" },
      { name: "🐛 Bugs & Issues" },
      { name: "✅ Concluídas" }
    ];

    const createdSections = [];

    for (const sectionData of sections) {
      try {
        const response = await fetch(`${this.baseURL}/sections`, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            data: {
              name: sectionData.name,
              project: ESSENT_PROJECT.projectId
            }
          })
        });

        if (response.ok) {
          const section = await response.json();
          console.log(`📋 Created section: ${section.data.name}`);
          createdSections.push(section.data);
        }
      } catch (error) {
        console.error(`❌ Error creating section: ${sectionData.name}`, error);
      }
    }

    return createdSections;
  }

  /**
   * Listar tarefas do projeto
   */
  async getProjectTasks() {
    try {
      const response = await fetch(
        `${this.baseURL}/tasks?project=${ESSENT_PROJECT.projectId}&opt_fields=name,completed,due_on,assignee.name,notes`,
        { headers: this.headers }
      );

      if (response.ok) {
        const data = await response.json();
        return data.data;
      }
    } catch (error) {
      console.error('❌ Error fetching tasks:', error);
    }
    return [];
  }

  /**
   * Atualizar status de uma tarefa
   */
  async updateTaskStatus(taskId, completed = true) {
    try {
      const response = await fetch(`${this.baseURL}/tasks/${taskId}`, {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify({
          data: { completed }
        })
      });

      if (response.ok) {
        const task = await response.json();
        console.log(`✅ Task updated: ${task.data.name}`);
        return task.data;
      }
    } catch (error) {
      console.error('❌ Error updating task:', error);
    }
  }

  /**
   * Adicionar comentário a uma tarefa
   */
  async addTaskComment(taskId, comment) {
    try {
      const response = await fetch(`${this.baseURL}/stories`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          data: {
            text: comment,
            target: taskId
          }
        })
      });

      if (response.ok) {
        const story = await response.json();
        console.log(`💬 Comment added to task`);
        return story.data;
      }
    } catch (error) {
      console.error('❌ Error adding comment:', error);
    }
  }

  /**
   * Setup completo do projeto
   */
  async setupEssentWorkflow() {
    console.log('🚀 Iniciando setup completo do workflow Essent...\n');

    // 1. Criar seções organizacionais
    console.log('📋 Criando seções...');
    const sections = await this.createProjectSections();
    
    // 2. Criar tarefas prioritárias
    console.log('\n📝 Criando tarefas...');
    const tasks = await this.createEssentTasks();

    // 3. Resumo
    console.log(`\n🎉 Setup completo!`);
    console.log(`📊 Seções criadas: ${sections.length}`);
    console.log(`📋 Tarefas criadas: ${tasks.length}`);
    console.log(`🔗 Projeto: ${ESSENT_PROJECT.projectUrl}`);

    return { sections, tasks };
  }

  /**
   * Relatório de progresso
   */
  async generateProgressReport() {
    const tasks = await this.getProjectTasks();
    const completed = tasks.filter(t => t.completed).length;
    const total = tasks.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    const report = `
🎯 RELATÓRIO DE PROGRESSO - PROJETO ESSENT

📊 Estatísticas:
- Total de tarefas: ${total}
- Concluídas: ${completed}
- Em andamento: ${total - completed}
- Progresso: ${percentage}%

📅 Tarefas por prazo:
${tasks.filter(t => !t.completed && t.due_on).map(t => 
  `- ${t.name} (${t.due_on})`
).join('\n')}

🔗 Acessar projeto: ${ESSENT_PROJECT.projectUrl}
`;

    console.log(report);
    return { completed, total, percentage, tasks };
  }
}

/**
 * Funções para usar no console
 */

// Substitua pelo seu token real
const ASANA_TOKEN = 'SEU_TOKEN_AQUI';

// Instância global
let essentAsana;

function initAsana(token = ASANA_TOKEN) {
  if (token === 'SEU_TOKEN_AQUI') {
    console.log('⚠️  Configure seu token primeiro!');
    console.log('📖 Use: initAsana("seu_token_real_aqui")');
    return;
  }
  
  essentAsana = new EssentAsanaManager(token);
  console.log('✅ Asana manager inicializado!');
  console.log('🚀 Use: setupProject() para começar');
}

async function setupProject() {
  if (!essentAsana) {
    console.log('❌ Execute initAsana() primeiro!');
    return;
  }
  
  return await essentAsana.setupEssentWorkflow();
}

async function getTasks() {
  if (!essentAsana) {
    console.log('❌ Execute initAsana() primeiro!');
    return;
  }
  
  return await essentAsana.getProjectTasks();
}

async function getProgress() {
  if (!essentAsana) {
    console.log('❌ Execute initAsana() primeiro!');
    return;
  }
  
  return await essentAsana.generateProgressReport();
}

// Exportar para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    EssentAsanaManager, 
    ESSENT_PROJECT,
    initAsana,
    setupProject,
    getTasks,
    getProgress
  };
}

console.log('🔧 Essent Asana Manager carregado!');
console.log('📚 Para usar:');
console.log('1. initAsana("seu_token")');
console.log('2. setupProject()');
console.log('3. getProgress()');
