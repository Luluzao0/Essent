import HeroSection from '../components/HeroSection';
import { SectionTransition } from '../components/PageTransition';

const Home = () => {
  return (
    <main>
      <SectionTransition delay={0}>
        <HeroSection />
      </SectionTransition>
    </main>
  );
};

export default Home;
