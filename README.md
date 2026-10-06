# Muhammad Rashid - MERN Stack Developer Portfolio (React + Vite)

A modern, high-performance **React** portfolio website built with **Vite** for **Muhammad Rashid**, matching all reference screenshots pixel-for-pixel.

---

## 🛠️ Tech Stack
- **Framework**: React 18
- **Bundler / Dev Server**: Vite
- **Styling**: Modern CSS3 (Custom Design System with dark obsidian tones, orange highlights, and responsive layouts)
- **Icons**: Scalable, high-fidelity SVGs with glowing backdrops

---

## 🌟 Sections & Features
1. **Navbar** (`src/components/Navbar.jsx`):
   - Brand logo `MR`.
   - Desktop and mobile navigation with smooth-scrolling links.
   - Header social links: GitHub, LinkedIn, WhatsApp, and Email.
2. **Hero** (`src/components/Hero.jsx`):
   - `HELLO, I'M` badge.
   - Big headline: `Muhammad` (White) `Rashid` (Orange).
   - Subtitle: `MERN STACK DEVELOPER` with accent bar.
   - `View Projects` and `Download Resume` buttons.
   - GitHub summary pill with `@rashidkhandevlink` and repository metrics.
3. **GitHub Overview** (`src/components/GitHubOverview.jsx`):
   - 4 metric cards: Repositories (24), Total Stars (12), Total Forks (6), Followers (32).
   - Contribution Streak card: Total contributions, glowing flame badge, longest streak.
   - Dynamic Heatmap Calendar Matrix.
   - Top Repositories grid: *Rashid-Store*, *Smart-Livestock-System*, *Furniture-Shop-Manager*, *Healthcare-Hospital-Portal*.
4. **Selected Projects** (`src/components/SelectedProjects.jsx`):
   - State-driven category filter pills: `All (6)`, `Full Stack (3)`, `Frontend (2)`, `Desktop / App (1)`.
   - 2-column cards featuring real-world projects with tech tags and direct action links.
5. **My Techstack** (`src/components/TechStack.jsx`):
   - Exact layout from screenshot with 14 cards and colored glowing backdrops: React, JavaScript, Node.js, Express, MongoDB, HTML5, CSS3, Git, GitHub, VS Code, Postman, Vite, Electron, Mongoose.
6. **What I Do** (`src/components/WhatIDo.jsx`):
   - 3 feature cards: *Frontend development*, *Backend architecture*, *Tools & DevOps*.
7. **Career & Experience** (`src/components/Experience.jsx`):
   - Vertical timeline with glowing orange connector and node dots.
8. **Certificates & Journey** (`src/components/Certificates.jsx`):
   - Learning roadmap: `HTML5 → CSS3 → JavaScript → React.js → Node & Express → MERN Stack`.
   - Saylani Mass IT Training (SMIT) & Academic credentials.
9. **Contact & Footer** (`src/components/Contact.jsx`):
   - Exact 3-column layout:
     - Left: Email, WhatsApp, Education, Location.
     - Middle: Underlined text links with arrows (`↗`) for GitHub, LinkedIn, WhatsApp, Email.
     - Right: `Designed and Developed by Muhammad Rashid © 2026`.

---

## 🚀 How to Run Locally

### 1. Start the Development Server
Open PowerShell or Terminal in this folder and run:
```bash
npm run dev
```
Then open your browser at **`http://localhost:3000`** (or the port shown in your terminal).

### 2. Build for Production
To create a fast, optimized production build:
```bash
npm run build
```
The compiled assets will be in the `dist/` directory, ready to deploy to Vercel, Netlify, or GitHub Pages.

### 3. Preview Production Build
```bash
npm run preview
```
