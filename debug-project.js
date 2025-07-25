// Debug criação de projeto
const ACCESS_TOKEN = '2/1210884780389391/1210884934140946:b3007747f098ce22cec46fa22a4f2441';

async function debugProjectCreation() {
  console.log('🔍 Debug da criação de projeto\n');
  
  // Primeiro, obter workspace
  const workspacesResponse = await fetch('https://app.asana.com/api/1.0/workspaces', {
    headers: {
      'Authorization': `Bearer ${ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  
  const workspacesData = await workspacesResponse.json();
  const workspace = workspacesData.data[0];
  console.log('📋 Workspace:', workspace.name, 'ID:', workspace.gid);
  
  // Tentar criar projeto com dados simplificados
  const projectData = {
    data: {
      name: "Projeto Essent - Saude Mental",
      notes: "Aplicação web para autoajuda e bem-estar mental",
      workspace: workspace.gid,  // Usar workspace em vez de team
      privacy_setting: "private",
      layout: "list"
    }
  };
  
  console.log('📤 Enviando dados:', JSON.stringify(projectData, null, 2));
  
  try {
    const response = await fetch('https://app.asana.com/api/1.0/projects', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(projectData)
    });
    
    console.log('📊 Status:', response.status);
    const responseText = await response.text();
    console.log('📄 Resposta:', responseText);
    
    if (response.ok) {
      const project = JSON.parse(responseText);
      console.log('✅ Projeto criado:', project.data.name);
      console.log('🔗 Link:', `https://app.asana.com/0/${project.data.gid}`);
    }
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  }
}

debugProjectCreation();
