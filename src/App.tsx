import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import VideosSimple from './pages/VideosSimple';
import Meditation from './pages/Meditation';
import BreathingMeditation from './pages/meditation/BreathingMeditation';
import BodyScanMeditation from './pages/meditation/BodyScanMeditation';
import MindfulnessMeditation from './pages/meditation/MindfulnessMeditation';
import LovingKindnessMeditation from './pages/meditation/LovingKindnessMeditation';
import Practices from './pages/Practices';
import Resources from './pages/Resources';
import SEODashboard from './components/SEODashboard';
import SEOAutomationDemo from './components/SEOAutomationDemo';
import { PageTransition } from './components/PageTransition';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Home />
              </PageTransition>
            } />
            <Route path="/quotes" element={
              <PageTransition>
                <Quotes />
              </PageTransition>
            } />
            <Route path="/videos" element={
              <PageTransition>
                <VideosSimple />
              </PageTransition>
            } />
            <Route path="/meditation" element={
              <PageTransition>
                <Meditation />
              </PageTransition>
            } />
            <Route path="/meditation/breathing" element={
              <PageTransition>
                <BreathingMeditation />
              </PageTransition>
            } />
            <Route path="/meditation/body-scan" element={
              <PageTransition>
                <BodyScanMeditation />
              </PageTransition>
            } />
            <Route path="/meditation/mindfulness" element={
              <PageTransition>
                <MindfulnessMeditation />
              </PageTransition>
            } />
            <Route path="/meditation/loving-kindness" element={
              <PageTransition>
                <LovingKindnessMeditation />
              </PageTransition>
            } />
            <Route path="/practices" element={
              <PageTransition>
                <Practices />
              </PageTransition>
            } />
            <Route path="/resources" element={
              <PageTransition>
                <Resources />
              </PageTransition>
            } />
            <Route path="/seo-dashboard" element={
              <PageTransition>
                <SEODashboard />
              </PageTransition>
            } />
            <Route path="/content-generator" element={
              <PageTransition>
                <SEOAutomationDemo />
              </PageTransition>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
