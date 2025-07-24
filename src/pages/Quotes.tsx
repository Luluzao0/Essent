import QuotesSection from '../components/QuotesSection';
import { SectionTransition } from '../components/PageTransition';

const Quotes = () => {
  return (
    <main style={{ paddingTop: 'clamp(60px, 10vw, 80px)' }}>
      <SectionTransition delay={0}>
        <QuotesSection />
      </SectionTransition>
    </main>
  );
};

export default Quotes;
