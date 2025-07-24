// Implementação básica de tracking de eventos
// Adicione este script no console do navegador para testar

// Rastrear visualização de página de meditação
function trackMeditationPageView() {
  if (window.gtag) {
    gtag('event', 'page_view', {
      page_title: 'Meditação',
      page_location: window.location.href,
      content_group1: 'Meditação'
    });
  }
}

// Rastrear início de prática de meditação
function trackMeditationStart(type) {
  if (window.gtag) {
    gtag('event', 'meditation_start', {
      meditation_type: type,
      event_category: 'engagement',
      event_label: type + '_started'
    });
  }
}

// Rastrear tempo gasto na página
function trackTimeOnPage() {
  let startTime = Date.now();
  
  window.addEventListener('beforeunload', function() {
    let timeSpent = Math.round((Date.now() - startTime) / 1000);
    
    if (window.gtag && timeSpent > 10) {
      gtag('event', 'page_engagement', {
        time_spent: timeSpent,
        event_category: 'engagement',
        value: timeSpent
      });
    }
  });
}

// Rastrear cliques em links importantes
function trackImportantClicks() {
  document.addEventListener('click', function(e) {
    const target = e.target.closest('a');
    if (!target) return;
    
    const href = target.getAttribute('href');
    
    // Rastrear cliques para meditação
    if (href && href.includes('/meditation')) {
      gtag('event', 'click', {
        event_category: 'navigation',
        event_label: 'meditation_link',
        link_url: href
      });
    }
    
    // Rastrear cliques para práticas
    if (href && href.includes('/practices')) {
      gtag('event', 'click', {
        event_category: 'navigation', 
        event_label: 'practices_link',
        link_url: href
      });
    }
    
    // Rastrear cliques para recursos
    if (href && href.includes('/resources')) {
      gtag('event', 'click', {
        event_category: 'navigation',
        event_label: 'resources_link', 
        link_url: href
      });
    }
  });
}

// Inicializar tracking quando página carregar
document.addEventListener('DOMContentLoaded', function() {
  trackTimeOnPage();
  trackImportantClicks();
  
  // Se estiver na página de meditação
  if (window.location.pathname.includes('/meditation')) {
    trackMeditationPageView();
  }
});

// Função para testar eventos manualmente
function testAnalytics() {
  console.log('🧪 Testando Google Analytics...');
  
  // Testar evento de meditação
  trackMeditationStart('breathing');
  console.log('✅ Evento meditation_start enviado');
  
  // Testar evento personalizado
  gtag('event', 'test_event', {
    event_category: 'test',
    event_label: 'manual_test',
    value: 1
  });
  console.log('✅ Evento test_event enviado');
  
  console.log('📊 Verifique os eventos em Tempo Real no Google Analytics');
}

// Para testar, execute no console:
// testAnalytics();
