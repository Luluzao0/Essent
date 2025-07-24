import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Essent - Saúde Mental, Meditação e Bem-Estar | Psicologia Online",
  description = "Plataforma completa de saúde mental com técnicas de meditação, mindfulness, relaxamento e autoajuda. Práticas recomendadas por psicólogos para ansiedade, depressão e equilíbrio emocional.",
  keywords = "saúde mental, meditação, mindfulness, ansiedade, depressão, autoajuda, psicologia, bem-estar, relaxamento, equilíbrio emocional",
  image = "https://essent-wellness.vercel.app/og-image.jpg",
  url = "https://essent-wellness.vercel.app/",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateOrCreateMeta = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('keywords', keywords);
    
    // Open Graph tags
    updateOrCreateMeta('og:title', title, true);
    updateOrCreateMeta('og:description', description, true);
    updateOrCreateMeta('og:image', image, true);
    updateOrCreateMeta('og:url', url, true);
    updateOrCreateMeta('og:type', type, true);
    
    // Twitter tags
    updateOrCreateMeta('twitter:title', title, true);
    updateOrCreateMeta('twitter:description', description, true);
    updateOrCreateMeta('twitter:image', image, true);
    updateOrCreateMeta('twitter:card', 'summary_large_image', true);
    
    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;
