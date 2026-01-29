import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import FeatureGrid from './sections/FeatureGrid';
import News from './sections/News';
import Reggio from './sections/Reggio';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Intro />
      <FeatureGrid />
      <News />
      <Reggio />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
