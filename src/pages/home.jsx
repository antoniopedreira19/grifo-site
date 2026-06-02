// GRIFO Engenharia — Home

import { createRoot } from 'react-dom/client';
import {
  HeroFullbleed,
  HeroMetrics,
  Position,
  Sectors,
  Showcase,
  Manifesto,
  CTABand,
  Footer,
} from '../components/sections';
import '../styles/global.css';

function App() {
  return (
    <>
      <HeroFullbleed />
      <HeroMetrics />
      <Position />
      <Sectors />
      <Showcase />
      <Manifesto />
      <CTABand />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
