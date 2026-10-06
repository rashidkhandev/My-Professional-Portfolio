import React from 'react';
import { experienceItems } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        
        <div className="section-center-head">
          <h2 className="section-heading">
            <span className="text-white">My career &</span> <span className="text-orange">experience</span>
          </h2>
        </div>

        {/* Vertical Timeline (Exact design from Image 5) */}
        <div className="timeline-container">
          {experienceItems.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-left">
                <h3 className="timeline-role">{item.role}</h3>
                <div className="timeline-org text-orange">{item.organization}</div>
              </div>

              <div className="timeline-center">
                <div 
                  className="timeline-dates" 
                  dangerouslySetInnerHTML={{ __html: item.period.replace(' — ', ' —<br/>') }}
                />
                <div className={`timeline-line ${index === experienceItems.length - 1 ? 'last-line' : ''}`}></div>
                <div className={`timeline-dot ${index === experienceItems.length - 1 ? 'active-dot' : ''}`}></div>
              </div>

              <div className="timeline-right">
                <p className="timeline-desc">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
