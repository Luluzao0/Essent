// Configuração e testes da API Asana
// Use este script para testar a conexão após obter o token

class AsanaIntegration {
  constructor(accessToken) {
    this.accessToken = accessToken;
    this.baseURL = 'https://app.asana.com/api/1.0';
    this.headers = {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    };
  }

  // Testar conexão básica
  async testConnection() {
    try {
      const response = await fetch(`${this.baseURL}/users/me`, {
        headers: this.headers
      });
      
      if (response.ok) {
        const user = await response.json();
        console.log('✅ Conexão estabelecida com sucesso!');
        console.log(`👤 Usuário: ${user.data.name}`);
        console.log(`📧 Email: ${user.data.email}`);
        return user.data;
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error('❌ Erro na conexão:', error.message);
      return null;
    }
  }

  // Listar workspaces
  async getWorkspaces() {
    try {
      const response = await fetch(`${this.baseURL}/workspaces`, {
        headers: this.headers
      });
      
      const data = await response.json();
      console.log('📋 Workspaces disponíveis:');
      data.data.forEach((workspace, index) => {
        console.log(`${index + 1}. ${workspace.name} (ID: ${workspace.gid})`);
      });
      
      return data.data;
    } catch (error) {
      console.error('❌ Erro ao buscar workspaces:', error.message);
      return [];
    }
  }

  // Criar projeto para Essent
  async createEssentProject(workspaceId) {
    const projectData = {
      data: {
        name: "🧘 Projeto Essent - Saúde Mental",
        notes: "Aplicação web para autoajuda e bem-estar mental com React + TypeScript",
        workspace: workspaceId,  // Corrigido: usar 'workspace' em vez de 'team'
        privacy_setting: "private",
        color: "light-blue",
        layout: "list"
      }
    };

    try {
      const response = await fetch(`${this.baseURL}/projects`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(projectData)
      });

      if (response.ok) {
        const project = await response.json();
        console.log('🎯 Projeto Essent criado com sucesso!');
        console.log(`📌 ID do Projeto: ${project.data.gid}`);
        return project.data;
      } else {
        throw new Error(`Erro ao criar projeto: ${response.statusText}`);
      }
    } catch (error) {
      console.error('❌ Erro ao criar projeto:', error.message);
      return null;
    }
  }

  // Criar tarefas iniciais do backlog
  async createInitialTasks(projectId) {
    const tasks = [
      {
        name: "🔍 Monitorar ranking 'essent' daily",
        notes: "Implementar tracking automático de posições no Google Search Console",
        assignee: "me",
        due_on: "2025-07-30",
        priority: "alta"
      },
      {
        name: "📊 Implementar rich snippets avançados", 
        notes: "Adicionar Schema.org estruturado para páginas de meditação",
        assignee: "me",
        due_on: "2025-07-31",
        priority: "alta"
      },
      {
        name: "📱 Otimizar carregamento mobile < 3s",
        notes: "Implementar lazy loading, code splitting e otimização de assets",
        assignee: "me", 
        due_on: "2025-08-02",
        priority: "media"
      },
      {
        name: "🎨 Sistema de progresso do usuário",
        notes: "Criar tracking de meditações completadas e badges",
        assignee: "me",
        due_on: "2025-08-05", 
        priority: "media"
      },
      {
        name: "🌙 Implementar modo escuro",
        notes: "Theme switcher com persistência no localStorage",
        assignee: "me",
        due_on: "2025-08-07",
        priority: "baixa"
      }
    ];

    const createdTasks = [];

    for (const taskData of tasks) {
      try {
        const response = await fetch(`${this.baseURL}/tasks`, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            data: {
              ...taskData,
              projects: [projectId]
            }
          })
        });

        if (response.ok) {
          const task = await response.json();
          console.log(`✅ Tarefa criada: ${task.data.name}`);
          createdTasks.push(task.data);
        } else {
          console.error(`❌ Erro ao criar tarefa: ${taskData.name}`);
        }
      } catch (error) {
        console.error(`❌ Erro na tarefa ${taskData.name}:`, error.message);
      }
    }

    return createdTasks;
  }

  // Setup completo do projeto
  async setupEssentProject() {
    console.log('🚀 Iniciando setup do projeto Essent na Asana...\n');

    // 1. Testar conexão
    const user = await this.testConnection();
    if (!user) {
      console.log('❌ Falha na conexão. Verifique seu token.');
      return;
    }

    // 2. Buscar workspaces
    const workspaces = await this.getWorkspaces();
    if (workspaces.length === 0) {
      console.log('❌ Nenhum workspace encontrado.');
      return;
    }

    // 3. Usar primeiro workspace (ou perguntar qual usar)
    const workspace = workspaces[0];
    console.log(`\n🎯 Usando workspace: ${workspace.name}\n`);

    // 4. Criar projeto Essent
    const project = await this.createEssentProject(workspace.gid);
    if (!project) {
      console.log('❌ Falha ao criar projeto.');
      return;
    }

    // 5. Criar tarefas iniciais
    console.log('\n📋 Criando tarefas iniciais...\n');
    const tasks = await this.createInitialTasks(project.gid);

    console.log(`\n🎉 Setup completo! Projeto criado com ${tasks.length} tarefas.`);
    console.log(`🔗 Acesse: https://app.asana.com/0/${project.gid}`);
  }
}

// Função para usar após obter o token
async function setupAsana() {
  // SUBSTITUA pelo seu token real da Asana
  const accessToken = '2/1210884780389391/1210884934140946:b3007747f098ce22cec46fa22a4f2441';
  
  if (accessToken === 'SEU_TOKEN_AQUI') {
    console.log('⚠️  Configure seu token de acesso da Asana primeiro!');
    console.log('📖 Siga as instruções em ASANA_INTEGRATION_GUIDE.md');
    return;
  }

  const asana = new AsanaIntegration(accessToken);
  await asana.setupEssentProject();
}

// Para testar apenas a conexão
async function testAsanaConnection() {
  const accessToken = '2/1210884780389391/1210884934140946:b3007747f098ce22cec46fa22a4f2441';
  
  if (accessToken === 'SEU_TOKEN_AQUI') {
    console.log('⚠️  Configure seu token de acesso da Asana primeiro!');
    return;
  }

  const asana = new AsanaIntegration(accessToken);
  await asana.testConnection();
}

// Exports para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AsanaIntegration, setupAsana, testAsanaConnection };
}

// Para executar no browser console:
// 1. Cole este código no console
// 2. Configure seu token 
// 3. Execute: setupAsana()

console.log('🔧 Asana Integration Script carregado!');
console.log('📚 Para usar: setupAsana() ou testAsanaConnection()');
