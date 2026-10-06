import React, { useMemo } from 'react';
import { personalInfo, githubStats, topRepositories } from '../data/portfolioData';

export default function GitHubOverview() {
  // Generate 52 weeks x 7 days heatmap cells
  const heatmapCells = useMemo(() => {
    const totalDays = 52 * 7;
    const cells = [];
    
    // Seeded random pattern for realistic activity
    for (let i = 0; i < totalDays; i++) {
      const rand = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const normalized = Math.abs(rand - Math.floor(rand));
      let level = 0;
      let count = 0;

      if (normalized > 0.85) {
        level = 4;
        count = Math.floor(normalized * 10) + 7;
      } else if (normalized > 0.65) {
        level = 3;
        count = Math.floor(normalized * 6) + 4;
      } else if (normalized > 0.45) {
        level = 2;
        count = Math.floor(normalized * 3) + 2;
      } else if (normalized > 0.28) {
        level = 1;
        count = 1;
      }

      cells.push({ id: i, level, count });
    }
    return cells;
  }, []);

  return (
    <section className="github-section" id="github">
      <div className="container">
        {/* Section Header */}
        <div className="github-header">
          <div className="github-header-left">
            <span className="section-tag">OPEN SOURCE & ACTIVITY</span>
            <div className="github-title-wrapper">
              <svg className="github-title-icon" width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <div>
                <h2 className="section-heading">
                  <span className="text-white">GitHub</span> <span className="text-orange">Overview</span>
                </h2>
                <div className="github-handle">@{personalInfo.githubUsername}</div>
              </div>
            </div>
          </div>
          <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-profile">
            View Profile ↗
          </a>
        </div>

        {/* 4 Stat Metric Cards */}
        <div className="metrics-grid">
          <div className="metric-card">
            <div className="metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <div className="metric-value">{githubStats.repos}</div>
            <div className="metric-label">REPOSITORIES</div>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff9800">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
            </div>
            <div className="metric-value">{githubStats.stars}</div>
            <div className="metric-label">TOTAL STARS</div>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/>
                <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><path d="M12 12v3"/>
              </svg>
            </div>
            <div className="metric-value">{githubStats.forks}</div>
            <div className="metric-label">TOTAL FORKS</div>
          </div>

          <div className="metric-card">
            <div className="metric-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="metric-value">{githubStats.followers}</div>
            <div className="metric-label">FOLLOWERS</div>
          </div>
        </div>

        {/* Streak & Graph Two Column Grid */}
        <div className="activity-grid">
          {/* Col 1: Contribution Streak */}
          <div className="activity-card streak-card">
            <div className="card-tag">CONTRIBUTION STREAK</div>
            <div className="streak-metrics">
              <div className="streak-sub">
                <div className="streak-val">{githubStats.totalContributions}</div>
                <div className="streak-name">Total Contributions</div>
                <div className="streak-subdate">2024 — Present</div>
              </div>

              <div className="streak-sub streak-current">
                <div className="flame-circle">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#ff9800">
                    <path d="M12 23c4.97 0 9-4.03 9-9 0-3.32-2.02-6.52-4.5-8.5-.47-.38-1.17-.06-1.17.55 0 1.25-.43 2.45-1.2 3.39-.77.94-1.9 1.56-3.13 1.56-1.38 0-2.5-.9-2.5-2.25 0-.58.2-1.13.56-1.57.34-.41.22-1.04-.26-1.28C7.14 5.09 5 7.79 5 11c0 2.21.89 4.21 2.34 5.66A8.93 8.93 0 0012 23z"/>
                  </svg>
                </div>
                <div className="streak-val-badge">{githubStats.currentStreak}</div>
                <div className="streak-name current-text">Current Streak</div>
                <div className="streak-subdate">Active Today</div>
              </div>

              <div className="streak-sub">
                <div className="streak-val">{githubStats.longestStreak}</div>
                <div className="streak-name">Longest Streak</div>
                <div className="streak-subdate">Days Active</div>
              </div>
            </div>
          </div>

          {/* Col 2: Contribution Heatmap Graph */}
          <div className="activity-card graph-card">
            <div className="card-tag">CONTRIBUTION GRAPH</div>
            <div className="calendar-wrapper">
              <div className="calendar-months">
                <span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span>
              </div>
              <div className="calendar-heatmap">
                {heatmapCells.map(c => (
                  <div 
                    key={c.id} 
                    className={`calendar-cell lvl-${c.level}`}
                    title={`${c.count} contributions`}
                  />
                ))}
              </div>
              <div className="heatmap-legend">
                <span>Less</span>
                <span className="legend-box lvl-0"></span>
                <span className="legend-box lvl-1"></span>
                <span className="legend-box lvl-2"></span>
                <span className="legend-box lvl-3"></span>
                <span className="legend-box lvl-4"></span>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Repositories (Matches Top of Image 3) */}
        <div className="top-repos-section">
          <h3 className="top-repos-heading">Top Repositories</h3>
          <div className="repos-grid">
            {topRepositories.map((repo, idx) => (
              <a 
                key={idx}
                href={repo.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="repo-card"
              >
                <div className="repo-card-header">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff9800" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                  <span className="repo-name">{repo.name}</span>
                </div>
                <p className="repo-desc">{repo.desc}</p>
                <div className="repo-meta">
                  <span className="lang-tag">
                    <span className="lang-dot" style={{ backgroundColor: repo.langColor }}></span> {repo.lang}
                  </span>
                  <span className="meta-item">★ {repo.stars}</span>
                  <span className="meta-item">🍴 {repo.forks}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
