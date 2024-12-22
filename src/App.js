// Starter Portfolio Template - React.js (One Page)

import React, { useEffect } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) =>
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      })
    );
  }, []);
  
  const details = {
    name: 'Otunba',
    title: 'Software Engineer',
    description: 'I am a passionate and dedicated software engineer with a profound understanding of programming languages and their applications. I am skilled in JavaScript, React.js, and Node.js development.',
    image: 'profile.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/your-username/',
      github: 'https://github.com/Code-Canter/',
      x: 'https://x.com/tunzkid3',
      email: 'otunbaodubanjo@gmail.com',
      whatsapp: '',
      phone: '+234 811 504 6415'
    },
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Hero details={details} />
        <About />
        <Skills />
        <Projects />
        <Contact details={details} />
      </main>
      <Footer details={details} />
    </div>
  );
}

export default App;
