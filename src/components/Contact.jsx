import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        <h2 className="contact-heading-main">CONTACT</h2>

        <div className="contact-layout">
          
          {/* Column 1: Info (Email & Education & WhatsApp & Location) */}
          <div className="contact-info-col-exact">
            <div className="contact-field-group">
              <div className="contact-field-label">Email</div>
              <a href={`mailto:${personalInfo.email}`} className="contact-field-val">
                {personalInfo.email}
              </a>
            </div>

            <div className="contact-field-group">
              <div className="contact-field-label">WhatsApp / Phone</div>
              <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-field-val">
                {personalInfo.phone}
              </a>
            </div>

            <div className="contact-field-group">
              <div className="contact-field-label">Education</div>
              <div className="contact-field-val">{personalInfo.education}</div>
              <div className="contact-field-sub">{personalInfo.saylaniStatus}</div>
            </div>

            <div className="contact-field-group">
              <div className="contact-field-label">Location</div>
              <div className="contact-field-val">
                {personalInfo.location} <span className="origin-tag">({personalInfo.origin})</span>
              </div>
            </div>
          </div>

          {/* Column 2: Social Links (Matches Image 7 with underlines & arrows ↗) */}
          <div className="contact-social-col-exact">
            <div className="contact-field-label social-top-label">Social</div>
            
            <div className="social-arrow-links">
              <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="contact-arrow-link">
                <span>Github</span>
                <span className="arrow">↗</span>
              </a>
              
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-arrow-link">
                <span>Linkedin</span>
                <span className="arrow">↗</span>
              </a>
              
              <a href={personalInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-arrow-link">
                <span>Whatsapp</span>
                <span className="arrow">↗</span>
              </a>
              
              <a href={`mailto:${personalInfo.email}`} className="contact-arrow-link">
                <span>Email</span>
                <span className="arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Column 3: Credits (Matches Image 7 Right side) */}
          <div className="contact-credits-col-exact">
            <div className="credit-block">
              <p className="credit-designed">Designed and Developed</p>
              <p className="credit-author">
                by <span className="text-orange">{personalInfo.name}</span>
              </p>
              <p className="credit-year">© 2026</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
