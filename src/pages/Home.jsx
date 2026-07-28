/**
 * Home.jsx
 * Landing/dashboard page with hero, workflow diagram, section visualizer,
 * quick-start cards for HTML, CSS, and JS, and future features.
 */
import { useNavigate } from 'react-router-dom';
import WorkflowDiagram from '../components/WorkflowDiagram/WorkflowDiagram';
import SectionVisualizer from '../components/SectionVisualizer/SectionVisualizer';
import LessonCard from '../components/LessonCard/LessonCard';
import Footer from '../components/Footer/Footer';
import './Home.css';

const futureFeatures = [
  { icon: '📝', name: 'Student Tasks', status: 'Coming Soon' },
  { icon: '👨‍🏫', name: 'Faculty Dashboard', status: 'Coming Soon' },
  { icon: '❓', name: 'Quiz Module', status: 'Coming Soon' },
  { icon: '🎓', name: 'Certificate', status: 'Coming Soon' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-container">
        {/* Hero Section */}
        <div className="home-hero">
          <div className="home-hero-badge">🚀 Complete Web Development Ecosystem</div>
          <h1 className="home-hero-title">
            Learn Web Development <span>with HTML, CSS & JS</span>
          </h1>
          <p className="home-hero-desc">
            Master full-stack frontend development with interactive lessons, Thanglish real-world analogies, hands-on practice, and an advanced multi-language code playground. Perfect for students and beginners!
          </p>
          <div className="home-hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/learn/1')}
            >
              🧱 Learn HTML
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => navigate('/css/learn/1')}
              style={{ background: '#a855f7', color: 'white', borderColor: '#a855f7' }}
            >
              🎨 Learn CSS
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => navigate('/js/learn/1')}
              style={{ background: '#eab308', color: 'black', borderColor: '#eab308' }}
            >
              ⚡ Learn JS
            </button>
            <button
              className="btn btn-outline btn-lg"
              onClick={() => navigate('/playground')}
            >
              🎮 Try Playground
            </button>
          </div>
        </div>

        {/* Quick Start Cards */}
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
        </div>

        {/* Workflow Diagram */}
        <WorkflowDiagram />

        {/* Section Visualizer */}
        <SectionVisualizer />

        {/* Future Features */}
        <section className="future-features">
          <h2 className="home-section-title">Upcoming Features</h2>
          <p className="home-section-subtitle">
            Exciting enhancements coming soon to StackLearner
          </p>
          <div className="future-features-grid">
            {futureFeatures.map(feature => (
              <div key={feature.name} className="future-feature-card">
                <div className="future-feature-icon">{feature.icon}</div>
                <div className="future-feature-name">{feature.name}</div>
                <span className="badge badge-warning">{feature.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
