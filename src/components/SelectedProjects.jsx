import React, { useState } from 'react';
import { selectedProjects } from '../data/portfolioData';

export default function SelectedProjects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = selectedProjects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const counts = {
    all: selectedProjects.length,
    fullstack: selectedProjects.filter(p => p.category === 'fullstack').length,
    frontend: selectedProjects.filter(p => p.category === 'frontend').length,
    desktop: selectedProjects.filter(p => p.category === 'desktop').length
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        
        <div className="projects-header-block">
          <h2 className="section-heading">
            <span className="text-white">Selected</span> <span className="text-orange">Projects</span>
          </h2>
          
          {/* Category Filter Pills (Image 3) */}
          <div className="filter-pills">
            <button 
              className={`filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All <span className="pill-count">{counts.all}</span>
            </button>
            <button 
              className={`filter-pill ${activeFilter === 'fullstack' ? 'active' : ''}`}
              onClick={() => setActiveFilter('fullstack')}
            >
              Full Stack <span className="pill-count">{counts.fullstack}</span>
            </button>
            <button 
              className={`filter-pill ${activeFilter === 'frontend' ? 'active' : ''}`}
              onClick={() => setActiveFilter('frontend')}
            >
              Frontend <span className="pill-count">{counts.frontend}</span>
            </button>
            <button 
              className={`filter-pill ${activeFilter === 'desktop' ? 'active' : ''}`}
              onClick={() => setActiveFilter('desktop')}
            >
              Desktop / App <span className="pill-count">{counts.desktop}</span>
            </button>
          </div>
        </div>

        {/* Projects Grid (2 Columns like Image 3) */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-card-top">
                <div className="card-badges-left">
                  {project.badges.map((b, i) => (
                    <span key={i} className={`badge ${i === 0 ? 'badge-subtle' : 'badge-accent'}`}>
                      {b}
                    </span>
                  ))}
                </div>
                {project.featured && (
                  <span className="badge badge-featured">Featured</span>
                )}
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <ul className="project-bullets">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>

              <div className="tech-pills-row">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.actionType === 'live' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-action-primary">
                    Visit Live ↗
                  </a>
                )}
                {project.actionType === 'whatsapp' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-action-primary">
                    WhatsApp Booking ↗
                  </a>
                )}
                {project.actionType === 'desktop' && (
                  <span className="btn btn-pill-dark">Desktop App</span>
                )}
                {project.actionType === 'internal' && (
                  <span className="btn btn-pill-dark">Internal App</span>
                )}

                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-action-secondary">
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
