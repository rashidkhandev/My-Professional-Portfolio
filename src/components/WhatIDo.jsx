import React from 'react';

export default function WhatIDo() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        
        <div className="section-center-head">
          <h2 className="section-heading">
            <span className="text-white">What</span> <span className="text-orange">I Do</span>
          </h2>
          <p className="section-subtitle">
            Transforming ideas into high-performance web applications with a focus on quality, scalability, and clean engineering.
          </p>
        </div>

        {/* 3 Feature Cards Grid (Exact layout from Image 4) */}
        <div className="what-i-do-grid">
          
          {/* Card 1: Frontend Development */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="feature-title">Frontend development</h3>
            <p className="feature-desc">
              I build performant & responsive interfaces with modern frameworks. My focus is on pixel-perfect designs & highly interactive user experiences.
            </p>
            <div className="feature-tags">
              <span className="feat-tag">HTML5</span>
              <span className="feat-tag">CSS3</span>
              <span className="feat-tag">JAVASCRIPT</span>
              <span className="feat-tag">REACT.JS</span>
              <span className="feat-tag">RESPONSIVE DESIGN</span>
              <span className="feat-tag">CONTEXT API</span>
            </div>
          </div>

          {/* Card 2: Backend Architecture */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
            </div>
            <h3 className="feature-title">Backend architecture</h3>
            <p className="feature-desc">
              Designing robust APIs & microservices. I build reliable backends that scale seamlessly with your project's growing demands.
            </p>
            <div className="feature-tags">
              <span className="feat-tag">NODE.JS</span>
              <span className="feat-tag">EXPRESS.JS</span>
              <span className="feat-tag">MONGODB</span>
              <span className="feat-tag">REST APIS</span>
              <span className="feat-tag">MONGOOSE</span>
              <span className="feat-tag">JWT CONCEPTS</span>
            </div>
          </div>

          {/* Card 3: Tools & DevOps */}
          <div className="feature-card">
            <div className="feature-icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 className="feature-title">Tools & DevOps</h3>
            <p className="feature-desc">
              Optimizing development workflows & ensuring smooth deployments using industry-standard tools and professional practices.
            </p>
            <div className="feature-tags">
              <span className="feat-tag">GIT / GITHUB</span>
              <span className="feat-tag">VS CODE</span>
              <span className="feat-tag">POSTMAN</span>
              <span className="feat-tag">NPM</span>
              <span className="feat-tag">VITE</span>
              <span className="feat-tag">ELECTRON</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
