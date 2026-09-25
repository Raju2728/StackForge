# 🚀 StackForge — Master Frontend Web Development

<div align="center">
  <img src="public/favicon.svg" alt="StackForge Logo" width="96" height="96" />
  <h3>From Zero to Building Real Websites</h3>
  <p>An interactive, comprehensive frontend development learning ecosystem designed for college students and beginners.</p>

  <p>
    <a href="https://stack-forge-bice.vercel.app/"><img src="https://img.shields.io/badge/Live%20Demo-stack--forge--bice.vercel.app-blueviolet?style=for-the-badge&logo=vercel" alt="Live Demo" /></a>
    <a href="https://github.com/Raju2728/StackForge/stargazers"><img src="https://img.shields.io/github/stars/Raju2728/StackForge?style=for-the-badge&color=6366f1" alt="Stars Badge" /></a>
    <a href="https://github.com/Raju2728/StackForge/network/members"><img src="https://img.shields.io/github/forks/Raju2728/StackForge?style=for-the-badge&color=8b5cf6" alt="Forks Badge" /></a>
    <a href="https://github.com/Raju2728/StackForge/issues"><img src="https://img.shields.io/github/issues/Raju2728/StackForge?style=for-the-badge&color=10b981" alt="Issues Badge" /></a>
    <img src="https://img.shields.io/badge/SEO-Optimized-success?style=for-the-badge&logo=google&color=059669" alt="SEO Optimized Badge" />
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License Badge" />
  </p>
  <p>
    <strong>🔗 Live Application:</strong> <a href="https://stack-forge-bice.vercel.app/" target="_blank" rel="noopener noreferrer">https://stack-forge-bice.vercel.app/</a>
  </p>
</div>

---

## 🌟 Overview

**StackForge** is a modern frontend learning platform built from the ground up to make web development intuitive and enjoyable. Instead of dry theoretical documentation, it combines **real-world analogies**, **bilingual/Thanglish intuitive explanations**, **interactive CodeMirror sandboxes**, **automated live preview rendering**, **MCQ knowledge quizzes**, and **curated interview prep**.

---

## ✨ Features

- 🧱 **HTML Foundation Course (22 Modules)**: Document structure, semantic elements, forms, tables, media, accessibility, and SEO foundations.
- 🎨 **Modern CSS Course (55 Modules)**: Selectors, Box Model, Flexbox, Grid, keyframe animations, positioning, and responsive design.
- ⚡ **JavaScript Mastery (16 Modules)**: Variables, closures, DOM manipulation, event handling, ES6+ syntax, Promises, and `async/await` fetch operations.
- 🎮 **Multi-Language Web Playground**: Interactive tabbed code editor (HTML, CSS, JS) with live iframe preview, responsive viewport testing, and real-time console log/error capture.
- 🗺️ **Frontend Developer Roadmap**: 5-tier visual progression path taking learners from fundamentals through component architecture and full portfolio projects.
- 💼 **Curated Interview Prep**: 100+ categorized questions with detailed answers, technical explanations, and Schema.org `FAQPage` metadata.
- ❓ **Interactive Quizzes**: Multiple-choice assessment engine with score calculations, review summaries, and in-depth explanations.
- 📊 **Progress & Achievement System**: Real-time progress calculation, unlocked visual badges, and completion certificates.
- 🔍 **Global Quick Search (Cmd+K / Ctrl+K)**: Instant fuzzy search across every module, topic, and practice exercise.
- 🌓 **Dark / Light Theme Toggle**: Seamless persistent theme toggling with smooth transitions.

---

## 🔍 SEO & Web Discoverability Features

StackForge is thoroughly optimized for search engines, web crawlers, and social media sharing:

- **Semantic HTML5 Hierarchy**: Proper, validated single `<h1>` per page, hierarchical `<h2>`–`<h6>` structure, and landmark tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Dynamic SPA Metadata**: Native `SEO` component updating `document.title`, `meta[name="description"]`, `meta[name="keywords"]`, and `link[rel="canonical"]` on client-side route transitions.
- **Rich Social Sharing Cards**:
  - Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`)
  - Twitter Cards (`summary_large_image`)
  - High-resolution branded SVG social share preview banner (1200×630).
- **Schema.org Structured Data (JSON-LD)**:
  - `WebSite` & `EducationalOrganization` schemas
  - `Course` schemas for HTML, CSS, and JavaScript
  - `FAQPage` schema on Interview Prep for Google Rich Results
  - `TechArticle` schema on individual topic learning pages
- **Crawler Assets**:
  - Validated `robots.txt` allowing search engines to index courses and roadmaps while restricting private state.
  - Complete `sitemap.xml` mapping every route and lesson module with update frequencies and priorities.
  - `site.webmanifest` for mobile home screen installability and PWA discoverability.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [React Router v7](https://reactrouter.com/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Code Editor**: [CodeMirror 6](https://codemirror.net/) (`@codemirror/view`, `@codemirror/state`, `@codemirror/lang-html`, `@codemirror/lang-css`, `@codemirror/lang-javascript`, `@codemirror/theme-one-dark`)
- **Linter**: [Oxlint](https://oxc.rs/)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties, Glassmorphism, and responsive media queries.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Raju2728/StackForge.git

# Navigate into the project directory
cd StackForge

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

```bash
# Compile and bundle assets
npm run build

# Preview production build locally
npm run preview
```

### Code Quality Check

```bash
# Run Oxlint
npm run lint
```

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.svg          # Vector favicon
│   ├── og-image.svg         # 1200x630 Social preview banner
│   ├── robots.txt           # Search engine directives
│   ├── site.webmanifest     # PWA manifest
│   └── sitemap.xml          # Search engine sitemap
├── src/
│   ├── components/
│   │   ├── CodeEditor/      # CodeMirror editor wrapper
│   │   ├── CourseSidebar/   # Navigation sidebar for courses
│   │   ├── Footer/          # Semantic responsive footer
│   │   ├── Header/          # Global header with search & theme toggle
│   │   ├── LivePreview/     # Sandboxed iframe preview
│   │   ├── SEO/             # Dynamic SEO & JSON-LD manager
│   │   └── ...
│   ├── context/
│   │   └── AppContext.jsx   # State & progress management
│   ├── data/
│   │   ├── htmlModules.js   # 22 HTML modules
│   │   ├── cssModules.js    # 55 CSS modules
│   │   ├── jsModules.js     # 16 JavaScript modules
│   │   ├── quizData.js      # Assessment question sets
│   │   └── interviewData.js # Interview Q&A
│   ├── pages/               # Page components (Home, Roadmap, Playground, etc.)
│   ├── App.jsx              # Main router definition
│   └── main.jsx             # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 👨‍💻 Author

Created and developed by **[Raju](https://github.com/Raju2728)**.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
