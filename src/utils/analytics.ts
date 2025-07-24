// Google Analytics 4 Enhanced Tracking
// Este arquivo contém funções para rastrear eventos personalizados

// Função para rastrear início de meditação
export const trackMeditationStart = (meditationType: string, duration?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'meditation_start', {
      meditation_type: meditationType,
      duration_minutes: duration,
      event_category: 'engagement',
      event_label: meditationType
    });
  }
};

// Função para rastrear conclusão de meditação
export const trackMeditationComplete = (meditationType: string, duration: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'meditation_complete', {
      meditation_type: meditationType,
      duration_minutes: duration,
      event_category: 'engagement',
      event_label: `${meditationType}_completed`
    });
  }
};

// Função para rastrear downloads de recursos
export const trackResourceDownload = (resourceName: string, resourceType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'resource_download', {
      resource_name: resourceName,
      resource_type: resourceType,
      event_category: 'conversion',
      event_label: resourceName
    });
  }
};

// Função para rastrear inscrições na newsletter
export const trackNewsletterSignup = (source: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'newsletter_signup', {
      source: source,
      event_category: 'conversion',
      event_label: 'newsletter_subscription'
    });
  }
};

// Função para rastrear uso de ferramentas
export const trackToolUsage = (toolName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'tool_usage', {
      tool_name: toolName,
      event_category: 'engagement',
      event_label: toolName
    });
  }
};

// Função para rastrear tempo gasto em páginas específicas
export const trackPageEngagement = (pageName: string, timeSpent: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_engagement', {
      page_name: pageName,
      time_spent_seconds: timeSpent,
      event_category: 'engagement',
      event_label: `${pageName}_${timeSpent}s`
    });
  }
};

// Função para rastrear busca interna (quando implementarmos)
export const trackInternalSearch = (searchTerm: string, resultsCount: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm,
      results_count: resultsCount,
      event_category: 'search',
      event_label: searchTerm
    });
  }
};

// Função para rastrear compartilhamento social
export const trackSocialShare = (platform: string, contentType: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      method: platform,
      content_type: contentType,
      event_category: 'social',
      event_label: `${platform}_${contentType}`
    });
  }
};

// Função para rastrear erros ou problemas
export const trackError = (errorType: string, errorMessage: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: errorMessage,
      fatal: false,
      error_type: errorType,
      event_category: 'error'
    });
  }
};

// Função para configurar propriedades de usuário (para segmentação)
export const setUserProperties = (properties: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-TPCY0QD3W0', {
      user_properties: properties
    });
  }
};

// Declara o tipo para window.gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
