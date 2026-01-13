import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple scroll spy logic could go here, but for simplicity
  // we will handle navigation via ID anchors in the components.
  
  return (
    <div className="min-h-screen bg-dark-900 text-gray-100 font-sans selection:bg-gold-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;