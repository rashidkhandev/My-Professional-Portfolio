import React from 'react';

export default function TechStack() {
  return (
    <section className="techstack-section" id="techstack">
      <div className="container">
        
        <div className="techstack-header">
          <h2 className="techstack-title">MY TECHSTACK</h2>
        </div>

        {/* Tech Cards (Exact layout from Image 6) */}
        <div className="tech-grid">
          
          {/* Card 1: React */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-react"></div>
              <svg viewBox="-11.5 -10.23174 23 20.46348" width="46" height="46">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
            </div>
            <span className="tech-label">React</span>
          </div>

          {/* Card 2: JavaScript */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-js"></div>
              <svg width="44" height="44" viewBox="0 0 32 32">
                <rect width="32" height="32" rx="4" fill="#f7df1e"/>
                <path d="M19.5 24.2c1.3.8 2.6 1.4 4.1 1.4 2.2 0 3.6-1.1 3.6-2.8 0-1.8-1.4-2.5-3.3-3.3-2.6-1.1-4.2-2.3-4.2-4.8 0-2.6 2-4.5 5.1-4.5 1.5 0 2.8.4 3.7.9l-1 2.8c-.8-.5-1.7-.8-2.7-.8-1.5 0-2.4.8-2.4 1.9 0 1.5 1.1 2.1 3 2.9 2.8 1.2 4.6 2.4 4.6 5.1 0 2.9-2.2 4.8-6.1 4.8-1.9 0-3.6-.6-4.7-1.3l1.2-3.2zm-12.7.3c1 .6 2.1 1.1 3.4 1.1 2.2 0 3.3-1.1 3.3-3.6v-11.4h3.6v11.5c0 4.4-2.5 6.3-6.5 6.3-2.1 0-3.7-.5-4.7-1.1l.9-2.8z" fill="#000"/>
              </svg>
            </div>
            <span className="tech-label">JavaScript</span>
          </div>

          {/* Card 3: Node.js */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-node"></div>
              <svg width="46" height="46" viewBox="0 0 32 32" fill="none">
                <path d="M16 2.5L3.5 9.7V24.2L16 31.5L28.5 24.2V9.7L16 2.5Z" fill="#539e43"/>
                <path d="M16 5.5L6.5 11.2V22.8L16 28.5L25.5 22.8V11.2L16 5.5Z" fill="#68a063"/>
                <path d="M16 11.5L21.5 14.7V21L16 24.2L10.5 21V14.7L16 11.5Z" fill="#333333"/>
              </svg>
            </div>
            <span className="tech-label">Node.js</span>
          </div>

          {/* Card 4: Express */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-express"></div>
              <svg width="46" height="46" viewBox="0 0 48 48" fill="none">
                <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="28" fill="#d1d5db" letterSpacing="-1">ex</text>
              </svg>
            </div>
            <span className="tech-label">Express</span>
          </div>

          {/* Card 5: MongoDB */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-mongo"></div>
              <svg width="34" height="48" viewBox="0 0 32 44" fill="none">
                <path d="M15.8 43.5c-.3-.3-1.6-1.5-2.2-2.1-4.2-4.1-8.9-10.4-8.9-18.4 0-10.4 7.6-18.8 10.6-21.6.4-.4.8-.4 1.1 0 3.1 2.8 10.6 11.2 10.6 21.6 0 8-4.7 14.3-8.9 18.4-.7.6-2 1.8-2.3 2.1z" fill="#47a248"/>
                <path d="M16 43.5v-42c.4-.3.8-.3 1.1 0 3.1 2.8 10.6 11.2 10.6 21.6 0 8-4.7 14.3-8.9 18.4-.7.6-2 1.8-2.3 2.1-.2 0-.4 0-.5-.1z" fill="#499d4a"/>
                <path d="M16 35.8c-.3 0-6.1-5.3-6.1-13.8 0-6.2 3.8-12 6.1-14.8V35.8z" fill="#ffffff" opacity="0.3"/>
              </svg>
            </div>
            <span className="tech-label">MongoDB</span>
          </div>

          {/* Card 6: HTML5 */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-html"></div>
              <svg width="42" height="46" viewBox="0 0 32 36" fill="none">
                <path d="M3 0h26l-2.4 27-10.6 3-10.6-3L3 0z" fill="#e34f26"/>
                <path d="M16 27.6l8.3-2.3 2-22.3H16v24.6z" fill="#ef652a"/>
                <path d="M16 7.7h-7l.4 4.5h6.6V7.7zm0 8.2h-3.4l-.2-2.7h-3.4l.5 6.3h6.5v-3.6zm0 7.8l-4.1-1.1-.3-3.2H8.3l.5 5.5 7.2 2v-3.2z" fill="#ffffff"/>
                <path d="M16 7.7v4.5h6.8l-.5 4.5H16v3.6h6.1l-.6 6.7-5.5 1.5v3.2l7.2-2 1-11.8.3-3.2.7-7H16z" fill="#ebebeb"/>
              </svg>
            </div>
            <span className="tech-label">HTML5</span>
          </div>

          {/* Card 7: CSS3 */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-css"></div>
              <svg width="42" height="46" viewBox="0 0 32 36" fill="none">
                <path d="M3 0h26l-2.4 27-10.6 3-10.6-3L3 0z" fill="#1572b6"/>
                <path d="M16 27.6l8.3-2.3 2-22.3H16v24.6z" fill="#33a9dc"/>
                <path d="M16 7.7h-7l.4 4.5h6.6V7.7zm0 8.2h-6.7l.4 4.5h6.3v-4.5zm0 8.2l-4.1-1.1-.3-3.2H8.3l.5 5.5 7.2 2v-3.2z" fill="#ffffff"/>
                <path d="M16 7.7v4.5h6.8l-.5 4.5H16v4.5h3.3l-.3 3.6-3 0.8v3.2l5.7-1.5.7-7.8.3-3.2.7-7.2H16z" fill="#ebebeb"/>
              </svg>
            </div>
            <span className="tech-label">CSS3</span>
          </div>

          {/* Card 8: Git */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-git"></div>
              <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
                <path d="M30.6 14.1L17.9 1.4c-.8-.8-2.1-.8-2.8 0l-3.3 3.3 4.2 4.2c.9-.3 2 .1 2.7.8.7.7 1.1 1.7.8 2.6l4.1 4.1c.9-.3 2 .1 2.7.8 1.1 1.1 1.1 2.9 0 4s-2.9 1.1-4 0c-.8-.8-1.1-1.9-.8-2.9l-3.8-3.8v7.8c.2.3.4.6.4 1 0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7c0-.9.4-1.7 1.1-2.2v-8.1c-.7-.5-1.1-1.3-1.1-2.2 0-.8.4-1.6 1-2.1L9.6 4.7 1.4 12.9c-.8.8-.8 2.1 0 2.8l12.7 12.7c.8.8 2.1.8 2.8 0l13.7-13.7c.8-.8.8-2 0-2.8z" fill="#f05032"/>
              </svg>
            </div>
            <span className="tech-label">Git</span>
          </div>

          {/* Card 9: GitHub */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-github"></div>
              <svg width="44" height="44" viewBox="0 0 24 24" fill="#ffffff">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </div>
            <span className="tech-label">GitHub</span>
          </div>

          {/* Card 10: VS Code */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-vscode"></div>
              <svg width="42" height="42" viewBox="0 0 32 32" fill="none">
                <path d="M23.5 2.1L8.3 14.1 2.9 9.8c-.8-.6-1.9-.3-2.3.5-.2.4-.2.8 0 1.2l4.8 7.3-4.8 7.3c-.5.8-.3 1.9.5 2.3.4.2.8.2 1.2 0l5.5-4.3 15.7 12c1 .8 2.5.4 3-0.7.3-.6.3-1.3 0-1.9V3.5c0-1.2-.9-2.2-2.1-2.2-.4 0-.8.3-.9.8z" fill="#007acc"/>
                <path d="M23.5 2.1L8.3 14.1 23.5 26.1V2.1z" fill="#1f9cf0"/>
              </svg>
            </div>
            <span className="tech-label">VS Code</span>
          </div>

          {/* Card 11: Postman */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-postman"></div>
              <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#ff6c37"/>
                <path d="M22 11c-1.5 0-2.8.8-3.5 2H10v3h2v4h3v-4h2.5c.7 1.2 2 2 3.5 2 2.2 0 4-1.8 4-4s-1.8-3-4-3zm0 4.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#ffffff"/>
              </svg>
            </div>
            <span className="tech-label">Postman</span>
          </div>

          {/* Card 12: Vite */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-vite"></div>
              <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
                <path d="M29.5 5.5L16.8 28.5c-.4.7-1.4.7-1.8 0L2.5 5.5c-.4-.8.2-1.7 1.1-1.6l12.4 2.1L28.4 3.9c.9-.1 1.5.8 1.1 1.6z" fill="url(#viteGradient)"/>
                <path d="M19.7 3.5L9.5 17h6l-3.5 9 12-14h-6.2l1.9-8.5z" fill="#ffdf00"/>
                <defs>
                  <linearGradient id="viteGradient" x1="2" y1="4" x2="30" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#41d1ff"/>
                    <stop offset="1" stopColor="#bd34fe"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="tech-label">Vite</span>
          </div>

          {/* Card 13: Electron */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-electron"></div>
              <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="3" fill="#9feaf9"/>
                <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#9feaf9" strokeWidth="1.2" transform="rotate(30 16 16)"/>
                <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#9feaf9" strokeWidth="1.2" transform="rotate(90 16 16)"/>
                <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#9feaf9" strokeWidth="1.2" transform="rotate(150 16 16)"/>
              </svg>
            </div>
            <span className="tech-label">Electron</span>
          </div>

          {/* Card 14: Mongoose */}
          <div className="tech-card">
            <div className="tech-icon-wrap">
              <div className="tech-icon-glow glow-mongoose"></div>
              <svg width="44" height="44" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#880000"/>
                <text x="50%" y="62%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="900" fontSize="14" fill="#ffffff" letterSpacing="-0.5">MG</text>
              </svg>
            </div>
            <span className="tech-label">Mongoose</span>
          </div>

        </div>

      </div>
    </section>
  );
}
