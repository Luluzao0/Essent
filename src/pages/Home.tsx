import HeroSection from '../components/HeroSection';
import { SectionTransition } from '../components/PageTransition';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <main>
      <SEO 
        title="Essent - Saúde Mental, Meditação e Bem-Estar | Transforme sua Vida"
        description="Plataforma online de saúde mental com meditação guiada, mindfulness e técnicas de relaxamento. Combata ansiedade e depressão com práticas científicas validadas por psicólogos."
        keywords="saúde mental, meditação online, mindfulness, ansiedade, depressão, autoajuda, psicologia, bem-estar mental, relaxamento, equilíbrio emocional, meditação guiada"
        url="https://essent-wellness.vercel.app/"
      />
      <SectionTransition delay={0}>
        <HeroSection />
      </SectionTransition>
    </main>
  );
};

export default Home;
