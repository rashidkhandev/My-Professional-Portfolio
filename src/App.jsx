import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GitHubOverview from './components/GitHubOverview';
import SelectedProjects from './components/SelectedProjects';
import TechStack from './components/TechStack';
import WhatIDo from './components/WhatIDo';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    // ScrollSpy active link detection
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      const scrollPos = window.pageYOffset + 140;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Background Ambient Glows */}
      <div className="glow-bg glow-top"></div>
      <div className="glow-bg glow-middle"></div>

      <Navbar />

      <main>
        <Hero />
        <GitHubOverview />
        <SelectedProjects />
        <TechStack />
        <WhatIDo />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}
