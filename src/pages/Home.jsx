/**
 * Home.jsx
 * Landing/dashboard page with hero, workflow diagram, section visualizer,
 * quick-start cards, and future features.
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
  { icon: '🎨', name: 'CSS Course', status: 'Coming Soon' },
  { icon: '⚡', name: 'JavaScript Course', status: 'Coming Soon' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="page-container">
        {/* Hero Section */}
        <div className="home-hero">
          <div className="home-hero-badge">🚀 Start your web development journey</div>
          <h1 className="home-hero-title">
            Learn to Build Webpages <span>with HTML</span>
          </h1>
          <p className="home-hero-desc">
            Master HTML from scratch with interactive lessons, hands-on practice, and a live code editor. 
            No prior coding experience required — perfect for college students and absolute beginners.
          </p>
          <div className="home-hero-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate('/learn/1')}
            >
              🚀 Start Learning HTML
            </button>
            <button
              className="btn btn-outline btn-lg"
              onClick={() => navigate('/playground')}
            >
              🎮 Try the Playground
            </button>
          </div>
        </div>

        {/* Quick Start Cards */}
        <h2 className="home-section-title">Quick Start</h2>
        <p className="home-section-subtitle">Choose where you want to begin</p>
        <div className="quick-start-grid">
          <LessonCard
            icon="📖"
            title="HTML Lessons"
            description="22 interactive modules covering everything from basic tags to building complete webpages."
            to="/learn/1"
            badge="22 Modules"
            badgeClass="badge-primary"
          />
          <LessonCard
            icon="✏️"
            title="Practice Exercises"
            description="10 guided activities to test your skills — from creating headings to building full pages."
            to="/practice"
            badge="10 Tasks"
            badgeClass="badge-success"
          />
          <LessonCard
            icon="🎮"
            title="Code Playground"
            description="Write, run, and preview HTML code instantly with our built-in editor and live preview."
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
          <h2 className="home-section-title">Coming Soon</h2>
          <p className="home-section-subtitle">
            Exciting features planned for future versions of StackLearner
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
