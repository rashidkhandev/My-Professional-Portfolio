import React from 'react';

export default function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        
        <div className="section-center-head">
          <span className="section-tag">EDUCATION & CREDENTIALS</span>
          <h2 className="section-heading">
            <span className="text-white">Certificates &</span> <span className="text-orange">Journey</span>
          </h2>
          <p className="section-subtitle">
            Consistent learning from fundamental web standards to production-level MERN stack engineering.
          </p>
        </div>

        {/* Learning Path Pipeline Visualizer */}
        <div className="learning-journey-bar">
          <div className="journey-step"><span className="step-num">01</span> HTML5</div>
          <div className="journey-arrow">→</div>
          <div className="journey-step"><span className="step-num">02</span> CSS3</div>
          <div className="journey-arrow">→</div>
          <div className="journey-step"><span className="step-num">03</span> JavaScript</div>
          <div className="journey-arrow">→</div>
          <div className="journey-step"><span className="step-num">04</span> React.js</div>
          <div className="journey-arrow">→</div>
          <div className="journey-step"><span className="step-num">05</span> Node & Express</div>
          <div className="journey-arrow">→</div>
          <div className="journey-step highlight-step"><span className="step-num">06</span> MERN Stack</div>
        </div>

        {/* Certificate Cards */}
        <div className="certificates-grid">
          
          <div className="cert-card">
            <div className="cert-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2">
                <path d="M12 15l-2 5l9-13l-4 4l3 9z"></path>
                <circle cx="12" cy="8" r="7"></circle>
              </svg>
            </div>
            <div className="cert-info">
              <span className="cert-badge">Professional Training</span>
              <h3 className="cert-title">Web & Mobile Application Development</h3>
              <div className="cert-issuer">Saylani Mass IT Training (SMIT) • Karachi</div>
              <p className="cert-desc">
                Comprehensive practical training in modern Web Development: HTML, CSS, JavaScript (ES6+), React.js, Node.js, Express.js, and MongoDB with English language communication skills.
              </p>
            </div>
          </div>

          <div className="cert-card">
            <div className="cert-icon-wrap">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="cert-info">
              <span className="cert-badge">Academic Qualification</span>
              <h3 className="cert-title">Intermediate (F.Sc Pre-Engineering)</h3>
              <div className="cert-issuer">Higher Secondary Education Board</div>
              <p className="cert-desc">
                Rigorous training in mathematics, physics, computing logic, and problem-solving disciplines forming the backbone of software design.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
