import React from 'react';
import { personalInfo, githubStats } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        <div className="hero-greeting">HELLO, I'M</div>
        
        <h1 className="hero-name">
          <span className="text-white">{personalInfo.firstName}</span>{' '}
          <span className="text-orange">{personalInfo.lastName}</span>
        </h1>
        
        <h2 className="hero-title">{personalInfo.title}</h2>
        
        <div className="orange-accent-bar"></div>
        
        <p className="hero-bio">
          {personalInfo.bio}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-secondary">Download Resume</a>
        </div>

        {/* GitHub Summary Pill (Matches bottom of Image 1) */}
        <div className="github-stat-pill">
          <a 
            href={personalInfo.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="pill-username"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>@{personalInfo.githubUsername}</span>
          </a>
          <div className="pill-divider"></div>
          <div className="pill-stats">
            <span className="pill-stat-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <strong>{githubStats.repos}</strong> repos
            </span>
            <span className="pill-stat-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff9800">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <strong>{githubStats.stars}</strong> stars
            </span>
            <span className="pill-stat-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/>
                <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><path d="M12 12v3"/>
              </svg>
              <strong>{githubStats.forks}</strong> forks
            </span>
            <span className="pill-stat-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <strong>{githubStats.followers}</strong> followers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
