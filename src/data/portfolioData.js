// Muhammad Rashid - Portfolio Data Store

export const personalInfo = {
  name: "Muhammad Rashid",
  firstName: "Muhammad",
  lastName: "Rashid",
  title: "MERN STACK DEVELOPER",
  location: "Karachi, Pakistan",
  origin: "South Waziristan, Pakistan",
  education: "F.Sc Pre-Engineering",
  saylaniStatus: "Student at Saylani (Web & Mobile Application Development)",
  careerGoal: "Professional MERN Stack Developer",
  email: "rashidwazir093@gmail.com",
  phone: "+92 334 7784456",
  whatsappNumber: "923347784456",
  githubUsername: "rashidkhandevlink",
  githubUrl: "https://github.com/rashidkhandevlink",
  linkedinUrl: "https://www.linkedin.com/in/rashid-wazir-272a06420/",
  whatsappUrl: "https://wa.me/923347784456",
  bio: "Passionate MERN Stack Developer skilled in React.js, Node.js, Express.js & MongoDB. Dedicated to building responsive, high-performance web applications, clean REST APIs, and scalable real-world digital solutions."
};

export const githubStats = {
  repos: 24,
  stars: 12,
  forks: 6,
  followers: 32,
  totalContributions: "1,280+",
  currentStreak: 12,
  longestStreak: 84
};

export const topRepositories = [
  {
    name: "Rashid-Store",
    desc: "E-Commerce Web Application | React, Context API & REST APIs",
    lang: "JavaScript",
    langColor: "#f7df1e",
    stars: 4,
    forks: 2,
    url: "https://github.com/rashidkhandevlink"
  },
  {
    name: "Smart-Livestock-System",
    desc: "Farm Management & Marketplace | React, Node.js & Multi-language",
    lang: "React",
    langColor: "#61dafb",
    stars: 5,
    forks: 3,
    url: "https://github.com/rashidkhandevlink"
  },
  {
    name: "Furniture-Shop-Manager",
    desc: "Desktop Management App | React, Vite, Electron & Local Storage",
    lang: "Electron",
    langColor: "#47848f",
    stars: 3,
    forks: 1,
    url: "https://github.com/rashidkhandevlink"
  },
  {
    name: "Healthcare-Hospital-Portal",
    desc: "Hospital Website & Patient Care | HTML5, Modern CSS3 & JavaScript",
    lang: "HTML/CSS",
    langColor: "#e34f26",
    stars: 3,
    forks: 1,
    url: "https://github.com/rashidkhandevlink"
  }
];

export const selectedProjects = [
  {
    id: 1,
    title: "Rashid Store (E-Commerce Platform)",
    category: "fullstack",
    badges: ["Full Stack", "E-Commerce"],
    featured: true,
    bullets: [
      "Built a high-performance modern e-commerce storefront with cart workflows, category browsing, and responsive UX.",
      "Engineered state management with Context API and connected backend REST APIs for product catalog and checkout."
    ],
    tech: ["React.js", "JavaScript", "Context API", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://github.com/rashidkhandevlink",
    githubUrl: "https://github.com/rashidkhandevlink",
    actionType: "live"
  },
  {
    id: 2,
    title: "Smart Livestock — Farm Management & Portal",
    category: "fullstack",
    badges: ["Full Stack", "Marketplace"],
    featured: true,
    bullets: [
      "Comprehensive farm management and livestock trading portal featuring Urdu, English, and Pashto localization.",
      "Implemented secure REST APIs for inventory records, animal health tracking, and buyer-seller trade communication."
    ],
    tech: ["React.js", "REST APIs", "Node.js", "Express", "MongoDB", "Multi-Lingual"],
    liveUrl: "https://github.com/rashidkhandevlink",
    githubUrl: "https://github.com/rashidkhandevlink",
    actionType: "live"
  },
  {
    id: 3,
    title: "Hospital Website — Healthcare & Patient Portal",
    category: "frontend",
    badges: ["Frontend", "Healthcare Platform"],
    featured: true,
    bullets: [
      "Modern healthcare website featuring specialist doctor directories, department showcases, and online appointment booking.",
      "Clean, accessible layout with 100% mobile responsiveness, fluid navigation, and zero-dependency performance."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM"],
    liveUrl: "https://github.com/rashidkhandevlink",
    githubUrl: "https://github.com/rashidkhandevlink",
    actionType: "live"
  },
  {
    id: 4,
    title: "Furniture Shop Management System",
    category: "desktop",
    badges: ["Desktop App", "Business ERP"],
    featured: true,
    bullets: [
      "Complete cross-platform desktop management application built with React, Vite, and Electron.",
      "Manages furniture inventory, customer orders, offline receipts, stock alerts, and financial tracking without cloud lag."
    ],
    tech: ["React.js", "Vite", "Electron", "JavaScript", "Local Storage"],
    githubUrl: "https://github.com/rashidkhandevlink",
    actionType: "desktop"
  },
  {
    id: 5,
    title: "Waziristan Shop Manager — Retail POS",
    category: "fullstack",
    badges: ["Full Stack", "Offline-First"],
    featured: false,
    bullets: [
      "Custom retail Point of Sale solution designed specifically for local shops and merchants in South Waziristan.",
      "Instant barcode-style search, ledger accounting, invoice generation, and robust local persistence for unreliable internet."
    ],
    tech: ["React.js", "JavaScript", "Node.js", "Express", "Offline Storage"],
    githubUrl: "https://github.com/rashidkhandevlink",
    actionType: "internal"
  },
  {
    id: 6,
    title: "Salman Carlift Dubai — Transport Portal",
    category: "frontend",
    badges: ["Client Work", "Commercial Transport"],
    featured: false,
    bullets: [
      "Commercial passenger carlift portal tailored for daily commuters and travelers across Dubai and Sharjah.",
      "Direct WhatsApp quote system, interactive route schedule viewer, booking form, and lightning-fast mobile optimization."
    ],
    tech: ["Web Technologies", "JavaScript", "Responsive Design", "WhatsApp API"],
    liveUrl: "https://wa.me/923347784456",
    githubUrl: "https://github.com/rashidkhandevlink",
    actionType: "whatsapp"
  }
];

export const techStackItems = [
  { name: "React", glowClass: "glow-react", type: "react" },
  { name: "JavaScript", glowClass: "glow-js", type: "js" },
  { name: "Node.js", glowClass: "glow-node", type: "node" },
  { name: "Express", glowClass: "glow-express", type: "express" },
  { name: "MongoDB", glowClass: "glow-mongo", type: "mongo" },
  { name: "HTML5", glowClass: "glow-html", type: "html" },
  { name: "CSS3", glowClass: "glow-css", type: "css" },
  { name: "Git", glowClass: "glow-git", type: "git" },
  { name: "GitHub", glowClass: "glow-github", type: "github" },
  { name: "VS Code", glowClass: "glow-vscode", type: "vscode" },
  { name: "Postman", glowClass: "glow-postman", type: "postman" },
  { name: "Vite", glowClass: "glow-vite", type: "vite" },
  { name: "Electron", glowClass: "glow-electron", type: "electron" },
  { name: "Mongoose", glowClass: "glow-mongoose", type: "mongoose" }
];

export const experienceItems = [
  {
    role: "Full Stack Developer",
    organization: "Freelance & Real-World Projects",
    period: "2025 — PRESENT",
    desc: "Developed and delivered full-stack web solutions for multiple clients using MERN stack and React.js. Collaborated with clients to gather requirements and deliver scalable, production-ready solutions."
  },
  {
    role: "Web Development Trainee",
    organization: "Saylani Mass IT Training (SMIT)",
    period: "2024 — PRESENT",
    desc: "Actively involved in frontend and backend development using modern JavaScript frameworks. Contributed to system architecture design, API structure, and application scalability. Deployed and optimized applications for performance."
  },
  {
    role: "F.Sc Pre-Engineering",
    organization: "Higher Secondary Education",
    period: "COMPLETED",
    desc: "Built a solid analytical and problem-solving foundation in mathematics, logical thinking, and engineering science. Successfully transitioning analytical principles into high-quality software architecture."
  }
];
