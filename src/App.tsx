import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <Header />
      <main>
        <Hero />
        <Summary />
        <Education />
        <Skills />
        <Achievements />
        <Certifications />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;