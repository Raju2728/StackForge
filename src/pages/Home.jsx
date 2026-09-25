/**
 * Home.jsx
 * Landing/dashboard page with redesigned hero, roadmap, course cards,
 * workflow diagram, section visualizer, and learning flow.
 */
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import WorkflowDiagram from '../components/WorkflowDiagram/WorkflowDiagram';
import SectionVisualizer from '../components/SectionVisualizer/SectionVisualizer';
import LessonCard from '../components/LessonCard/LessonCard';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import './Home.css';

const roadmapLevels = [
  {
    level: 1,
    title: 'HTML Foundation',
    icon: '🧱',
    color: '#6366f1',
    description: 'Build the structural skeleton of every webpage',
    topics: ['HTML Introduction', 'HTML Structure', 'Elements', 'Attributes', 'Text Formatting', 'Links', 'Images', 'Tables', 'Forms'],
    link: '/learn/1',
  },
  {
    level: 2,
    title: 'CSS Styling',
    icon: '🎨',
    color: '#a855f7',
    description: 'Make your websites visually stunning',
    topics: ['CSS Introduction', 'Selectors', 'Colors', 'Box Model', 'Flexbox', 'Grid', 'Responsive Design', 'Animations'],
    link: '/css/learn/1',
  },
  {
    level: 3,
    title: 'JavaScript Programming',
    icon: '⚡',
    color: '#eab308',
    description: 'Add interactivity and dynamic behavior',
    topics: ['Variables', 'Data Types', 'Operators', 'Functions', 'Arrays', 'Objects', 'DOM Manipulation', 'Events', 'API Handling'],
    link: '/js/learn/1',
  },
  {
    level: 4,
    title: 'React Development',
    icon: '⚛️',
    color: '#06b6d4',
    description: 'Build modern single-page applications',
    topics: ['Components', 'JSX', 'Props', 'State', 'Hooks', 'Routing', 'API Integration'],
    link: null,
    comingSoon: true,
  },
  {
    level: 5,
    title: 'Real World Projects',
    icon: '🚀',
    color: '#10b981',
    description: 'Apply everything by building real projects',
    topics: ['Portfolio Website', 'Landing Page', 'E-commerce Website', 'Dashboard Application'],
    link: '/final-project',
    comingSoon: true,
  },
];

const learningFlow = [
  { icon: '📖', label: 'Learn Concepts', color: '#6366f1' },
  { icon: '💡', label: 'Real-Time Analogies', color: '#8b5cf6' },
  { icon: '💻', label: 'Practice Code', color: '#a855f7' },
  { icon: '🏆', label: 'Complete Challenges', color: '#eab308' },
  { icon: '📊', label: 'Track Progress', color: '#10b981' },
  { icon: '💼', label: 'Interview Prep', color: '#ef4444' },
  { icon: '🚀', label: 'Build Projects', color: '#06b6d4' },
];

export default function Home() {
  const navigate = useNavigate();
  const { htmlProgress, cssProgress, jsProgress } = useApp();

  return (
    <div>
      <SEO
        title="Stack Learner — Master Frontend Web Development from Scratch"
        description="Learn HTML, CSS, JavaScript, and React with intuitive explanations, real-world analogies, live code playground, quizzes, and interview preparation. 100% free."
        canonical="/"
        keywords="frontend developer, learn html, learn css, learn javascript, web development tutorial, react roadmap, coding playground, interview questions"
      />
      <div className="page-container">
        {/* Hero Section */}
        <section className="hero" id="hero">
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              🚀 Complete Frontend Learning Ecosystem
            </div>
            <h1 className="hero-title">
              Become a Frontend Developer{' '}
              <span className="hero-gradient-text">From Zero to Building Real Websites</span>
            </h1>
            <p className="hero-desc">
              Learn HTML, CSS, JavaScript and React with simple explanations,
              real-world analogies, interactive examples, and hands-on practice.
            </p>
            <div className="hero-actions">
              <button
                className="btn btn-primary btn-lg hero-btn-primary"
                onClick={() => navigate('/learn/1')}
              >
                <span>🎯</span> Start Learning
              </button>
              <button
                className="btn btn-outline btn-lg hero-btn-secondary"
                onClick={() => {
                  document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>🗺️</span> Explore Roadmap
              </button>
            </div>
            {/* Stats */}
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-num">155+</span>
                <span className="hero-stat-label">Lessons</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">3</span>
                <span className="hero-stat-label">Courses</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">30+</span>
                <span className="hero-stat-label">Quizzes</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-num">100%</span>
                <span className="hero-stat-label">Free</span>
              </div>
            </div>
          </div>
          {/* Floating code snippet decoration */}
          <div className="hero-code-float">
            <pre>{`<div class="developer">
  <h1>Hello World!</h1>
  <p>I build websites</p>
</div>`}</pre>
          </div>
        </section>

        {/* Learning Flow */}
        <section className="learning-flow-section">
          <h2 className="home-section-title">How You'll Learn</h2>
          <p className="home-section-subtitle">
            A structured path from understanding concepts to building real projects
          </p>
          <div className="learning-flow">
            {learningFlow.map((step, idx) => (
              <div key={step.label} className="learning-flow-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="learning-flow-icon" style={{ background: `${step.color}15`, color: step.color }}>
                  {step.icon}
                </div>
                <span className="learning-flow-label">{step.label}</span>
                {idx < learningFlow.length - 1 && <span className="learning-flow-arrow">→</span>}
              </div>
            ))}
          </div>
        </section>

        {/* Explore Courses */}
        <section>
          <h2 className="home-section-title">Explore Courses</h2>
          <p className="home-section-subtitle">Select a course to start your learning journey</p>
          <div className="quick-start-grid">
            <LessonCard
              icon="🧱"
              title="HTML Course"
              description="22 interactive modules with real-world analogies covering structural tags, forms, tables, and semantic HTML."
              to="/learn/1"
              badge="22 Modules"
              badgeClass="badge-primary"
            />
            <LessonCard
              icon="🎨"
              title="CSS Course"
              description="68 comprehensive topics covering selectors, Flexbox, Grid, animations, and responsive design with interior design analogies."
              to="/css/learn/1"
              badge="68 Modules"
              badgeClass="badge-warning"
            />
            <LessonCard
              icon="⚡"
              title="JavaScript Course"
              description="65 in-depth modules covering variables, DOM manipulation, ES6+, async/await, and APIs with website brain analogies."
              to="/js/learn/1"
              badge="65 Modules"
              badgeClass="badge-success"
            />
            <LessonCard
              icon="✏️"
              title="Practice Exercises"
              description="Guided coding activities to test your HTML, CSS, and JS skills with live feedback."
              to="/practice"
              badge="Practice Tasks"
              badgeClass="badge-primary"
            />
            <LessonCard
              icon="🎮"
              title="Multi-Lang Playground"
              description="Tabbed HTML, CSS, and JavaScript editor with live iframe preview and console error handling."
              to="/playground"
              badge="Live Editor"
              badgeClass="badge-warning"
            />
            <LessonCard
              icon="❓"
              title="Quizzes"
              description="Test your knowledge with MCQ quizzes for HTML, CSS, and JavaScript. See explanations and track your scores."
              to="/quiz"
              badge="30+ Questions"
              badgeClass="badge-success"
            />
          </div>
        </section>

        {/* Frontend Developer Roadmap */}
        <section className="roadmap-section" id="roadmap">
          <h2 className="home-section-title">Frontend Developer Journey</h2>
          <p className="home-section-subtitle">
            Follow this structured roadmap from beginner to job-ready frontend developer
          </p>
          <div className="roadmap-timeline">
            <div className="roadmap-line" />
            {roadmapLevels.map((level, idx) => (
              <div
                key={level.level}
                className={`roadmap-card ${level.comingSoon ? 'roadmap-card-coming' : ''}`}
                style={{ animationDelay: `${idx * 0.15}s` }}
                onClick={() => !level.comingSoon && level.link && navigate(level.link)}
                role={!level.comingSoon && level.link ? 'button' : undefined}
                tabIndex={!level.comingSoon && level.link ? 0 : undefined}
              >
                <div className="roadmap-level-marker" style={{ background: level.color }}>
                  <span>{level.icon}</span>
                </div>
                <div className="roadmap-card-body">
                  <div className="roadmap-card-header">
                    <span className="roadmap-level-badge" style={{ background: `${level.color}15`, color: level.color }}>
                      Level {level.level}
                    </span>
                    {level.comingSoon && <span className="badge badge-warning">Coming Soon</span>}
                    {!level.comingSoon && level.level === 1 && htmlProgress > 0 && (
                      <span className="badge badge-success">{htmlProgress}%</span>
                    )}
                    {!level.comingSoon && level.level === 2 && cssProgress > 0 && (
                      <span className="badge badge-success">{cssProgress}%</span>
                    )}
                    {!level.comingSoon && level.level === 3 && jsProgress > 0 && (
                      <span className="badge badge-success">{jsProgress}%</span>
                    )}
                  </div>
                  <h3 className="roadmap-card-title">{level.title}</h3>
                  <p className="roadmap-card-desc">{level.description}</p>
                  <div className="roadmap-topics">
                    {level.topics.map(topic => (
                      <span key={topic} className="roadmap-topic-chip">{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workflow Diagram */}
        <WorkflowDiagram />

        {/* Section Visualizer */}
        <SectionVisualizer />

        {/* Visual Learning Section */}
        <section className="visual-learning-section">
          <h2 className="home-section-title">How Web Technologies Work Together</h2>
          <p className="home-section-subtitle">
            Frontend is a visual field — understand how HTML, CSS, and JavaScript connect
          </p>
          <div className="visual-tech-grid">
            <div className="visual-tech-card">
              <div className="visual-tech-icon" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>🧱</div>
              <h3>HTML</h3>
              <p>Website Structure</p>
              <div className="visual-tech-example">
                Headings, Paragraphs, Images, Links, Forms
              </div>
            </div>
            <div className="visual-tech-arrow">→</div>
            <div className="visual-tech-card">
              <div className="visual-tech-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>🎨</div>
              <h3>CSS</h3>
              <p>Website Design</p>
              <div className="visual-tech-example">
                Colors, Layouts, Animations, Responsive
              </div>
            </div>
            <div className="visual-tech-arrow">→</div>
            <div className="visual-tech-card">
              <div className="visual-tech-icon" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>⚡</div>
              <h3>JavaScript</h3>
              <p>Website Interaction</p>
              <div className="visual-tech-example">
                Click Events, Data, API, Dynamic Content
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
