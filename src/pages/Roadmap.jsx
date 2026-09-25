/**
 * Roadmap.jsx
 * Full-page Frontend Developer Roadmap with 5 levels, visual timeline,
 * topic lists, and progress indicators.
 */
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import './Roadmap.css';

const roadmapLevels = [
  {
    level: 1,
    title: 'HTML Foundation',
    icon: '🧱',
    color: '#6366f1',
    description: 'Master the structural skeleton of every webpage. HTML is the foundation — without it, no website exists.',
    topics: [
      'Introduction to Web Development',
      'HTML Document Structure',
      'Elements & Tags',
      'Attributes',
      'Text Formatting',
      'Links & Anchor Tags',
      'Images & Media',
      'Lists',
      'Tables',
      'Forms & Inputs',
      'Semantic HTML',
    ],
    link: '/learn/1',
    progressKey: 'html',
  },
  {
    level: 2,
    title: 'CSS Styling',
    icon: '🎨',
    color: '#a855f7',
    description: 'Make your websites visually stunning with colors, layouts, animations, and responsive design.',
    topics: [
      'CSS Introduction & Syntax',
      'Selectors & Specificity',
      'Colors & Backgrounds',
      'Box Model',
      'Typography',
      'Flexbox Layout',
      'CSS Grid',
      'Positioning',
      'Transitions & Animations',
      'Responsive Design & Media Queries',
    ],
    link: '/css/learn/1',
    progressKey: 'css',
  },
  {
    level: 3,
    title: 'JavaScript Programming',
    icon: '⚡',
    color: '#eab308',
    description: 'Add interactivity, logic, and dynamic behavior to your websites with JavaScript.',
    topics: [
      'Variables & Data Types',
      'Operators',
      'Conditionals',
      'Loops',
      'Functions',
      'Arrays & Objects',
      'DOM Manipulation',
      'Events & Event Handling',
      'Async/Await & Promises',
      'API Handling (fetch)',
    ],
    link: '/js/learn/1',
    progressKey: 'js',
  },
  {
    level: 4,
    title: 'React Development',
    icon: '⚛️',
    color: '#06b6d4',
    description: 'Build modern, component-based single-page applications with React.',
    topics: [
      'Components & JSX',
      'Props & State',
      'Event Handling',
      'useState & useEffect Hooks',
      'Conditional Rendering',
      'Lists & Keys',
      'React Router',
      'API Integration',
    ],
    link: null,
    comingSoon: true,
  },
  {
    level: 5,
    title: 'Real World Projects',
    icon: '🚀',
    color: '#10b981',
    description: 'Apply everything you\'ve learned by building real-world portfolio projects.',
    topics: [
      'Personal Portfolio Website',
      'Responsive Landing Page',
      'E-commerce Product Page',
      'Dashboard Application',
    ],
    link: '/final-project',
    comingSoon: true,
  },
];

export default function Roadmap() {
  const navigate = useNavigate();
  const { htmlProgress, cssProgress, jsProgress } = useApp();

  const getProgress = (key) => {
    if (key === 'html') return htmlProgress;
    if (key === 'css') return cssProgress;
    if (key === 'js') return jsProgress;
    return 0;
  };

  return (
    <div>
      <SEO
        title="Frontend Developer Roadmap 2026 — Step-by-Step Learning Path"
        description="Follow this complete 5-level structured roadmap from beginner to job-ready frontend developer. Master HTML, CSS, JavaScript, React, and real-world projects."
        canonical="/roadmap"
        keywords="frontend developer roadmap 2026, web development roadmap, learn frontend step by step, html css js path"
      />
      <div className="page-container">
        <div className="roadmap-page-header">
          <div className="roadmap-page-badge">🗺️ Learning Path</div>
          <h1 className="roadmap-page-title">Frontend Developer Journey</h1>
          <p className="roadmap-page-desc">
            Follow this structured roadmap from complete beginner to job-ready frontend developer.
            Each level builds on the previous one.
          </p>
        </div>

        <div className="roadmap-full-timeline">
          <div className="roadmap-full-line" />
          {roadmapLevels.map((level, idx) => {
            const progress = level.progressKey ? getProgress(level.progressKey) : 0;
            return (
              <div
                key={level.level}
                className={`roadmap-full-card ${level.comingSoon ? 'roadmap-full-card-coming' : ''}`}
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                {/* Level marker */}
                <div className="roadmap-full-marker" style={{ background: level.color, boxShadow: `0 4px 20px ${level.color}40` }}>
                  <span className="roadmap-full-marker-icon">{level.icon}</span>
                </div>

                {/* Card */}
                <div
                  className="roadmap-full-card-body"
                  onClick={() => !level.comingSoon && level.link && navigate(level.link)}
                  role={!level.comingSoon && level.link ? 'button' : undefined}
                  tabIndex={!level.comingSoon && level.link ? 0 : undefined}
                >
                  <div className="roadmap-full-card-top">
                    <span className="roadmap-full-level" style={{ background: `${level.color}12`, color: level.color }}>
                      Level {level.level}
                    </span>
                    {level.comingSoon && <span className="badge badge-warning">Coming Soon</span>}
                    {!level.comingSoon && progress > 0 && (
                      <span className="badge badge-success">{progress}% Complete</span>
                    )}
                  </div>

                  <h2 className="roadmap-full-card-title">{level.title}</h2>
                  <p className="roadmap-full-card-desc">{level.description}</p>

                  {/* Progress bar */}
                  {!level.comingSoon && (
                    <div className="roadmap-full-progress">
                      <div className="progress-bar" style={{ height: '8px' }}>
                        <div className="progress-bar-fill" style={{ width: `${progress}%`, background: level.color }} />
                      </div>
                    </div>
                  )}

                  {/* Topics */}
                  <div className="roadmap-full-topics">
                    {level.topics.map((topic, tIdx) => (
                      <span key={tIdx} className="roadmap-full-topic">{topic}</span>
                    ))}
                  </div>

                  {!level.comingSoon && level.link && (
                    <div className="roadmap-full-action">
                      <span className="btn btn-primary btn-sm" style={{ background: level.color }}>
                        {progress > 0 ? 'Continue Learning →' : 'Start Learning →'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
