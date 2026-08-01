/**
 * Progress.jsx
 * Enhanced student progress dashboard with visual ring chart, badges,
 * course details, and completion tracking for HTML, CSS, and JavaScript.
 */
import { Link } from 'react-router-dom';
import ProgressCard from '../components/ProgressCard/ProgressCard';
import { useApp } from '../context/AppContext';
import htmlModules from '../data/htmlModules';
import cssModules from '../data/cssModules';
import jsModules from '../data/jsModules';
import Footer from '../components/Footer/Footer';
import './Progress.css';

const badges = [
  { id: 'html-starter', label: 'HTML Starter', icon: '🧱', requirement: 'Complete 5 HTML topics', check: (ctx) => ctx.completedTopics.length >= 5 },
  { id: 'html-master', label: 'HTML Master', icon: '🏆', requirement: 'Complete all HTML topics', check: (ctx) => ctx.completedTopics.length >= ctx.TOTAL_HTML_TOPICS },
  { id: 'css-starter', label: 'CSS Explorer', icon: '🎨', requirement: 'Complete 10 CSS topics', check: (ctx) => ctx.completedCssTopics.length >= 10 },
  { id: 'css-master', label: 'CSS Master', icon: '👑', requirement: 'Complete all CSS topics', check: (ctx) => ctx.completedCssTopics.length >= ctx.TOTAL_CSS_TOPICS },
  { id: 'js-starter', label: 'JS Beginner', icon: '⚡', requirement: 'Complete 5 JS topics', check: (ctx) => ctx.completedJsTopics.length >= 5 },
  { id: 'js-master', label: 'JS Master', icon: '💎', requirement: 'Complete all JS topics', check: (ctx) => ctx.completedJsTopics.length >= ctx.TOTAL_JS_TOPICS },
  { id: 'practice-hero', label: 'Practice Hero', icon: '✏️', requirement: 'Complete all practice tasks', check: (ctx) => ctx.completedPractice.length >= ctx.TOTAL_PRACTICE },
  { id: 'full-stack', label: 'Frontend Champion', icon: '🚀', requirement: '100% platform completion', check: (ctx) => ctx.overallPlatformProgress === 100 },
];

export default function Progress() {
  const ctx = useApp();
  const {
    completedTopics,
    completedCssTopics,
    completedJsTopics,
    completedPractice,
    htmlProgress,
    cssProgress,
    jsProgress,
    practiceProgress,
    finalProjectSubmitted,
    TOTAL_HTML_TOPICS,
    TOTAL_CSS_TOPICS,
    TOTAL_JS_TOPICS,
    TOTAL_PRACTICE,
    overallPlatformProgress,
    getTopicStatus,
    getCssTopicStatus,
    getJsTopicStatus,
  } = ctx;

  const earnedBadges = badges.filter(b => b.check(ctx));
  const lockedBadges = badges.filter(b => !b.check(ctx));

  return (
    <div>
      <div className="progress-page">
        <div className="progress-page-header">
          <h1 className="progress-page-title">📊 Your Learning Progress</h1>
          <p className="progress-page-desc">
            Track your complete Web Development journey across HTML, CSS, and JavaScript courses.
          </p>
        </div>

        {/* Overall progress ring */}
        <div className="progress-overview">
          <div className="progress-ring" style={{ '--pct': overallPlatformProgress, '--ring-color': overallPlatformProgress === 100 ? '#10b981' : '#6366f1' }}>
            <span className="progress-ring-pct">{overallPlatformProgress}%</span>
          </div>
          <div className="progress-overview-label">Overall Platform Completion</div>
          <div className="progress-bar" style={{ maxWidth: '400px', margin: '12px auto 0', height: '10px' }}>
            <div className="progress-bar-fill" style={{ width: `${overallPlatformProgress}%` }} />
          </div>
        </div>

        {/* Badges */}
        <div className="progress-badges-section">
          <h2 className="progress-section-heading">🏅 Achievement Badges</h2>
          <div className="progress-badges-grid">
            {earnedBadges.map(b => (
              <div key={b.id} className="progress-badge earned">
                <span className="progress-badge-icon">{b.icon}</span>
                <span className="progress-badge-label">{b.label}</span>
                <span className="progress-badge-check">✓</span>
              </div>
            ))}
            {lockedBadges.map(b => (
              <div key={b.id} className="progress-badge locked" title={b.requirement}>
                <span className="progress-badge-icon">{b.icon}</span>
                <span className="progress-badge-label">{b.label}</span>
                <span className="progress-badge-lock">🔒</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course stats */}
        <div className="progress-stats-grid">
          <ProgressCard
            icon="🧱"
            label="HTML Course"
            value={`${completedTopics.length}/${TOTAL_HTML_TOPICS}`}
            sub={`${htmlProgress}% complete`}
            color="var(--primary-bg)"
          />
          <ProgressCard
            icon="🎨"
            label="CSS Course"
            value={`${completedCssTopics.length}/${TOTAL_CSS_TOPICS}`}
            sub={`${cssProgress}% complete`}
            color="rgba(168, 85, 247, 0.15)"
          />
          <ProgressCard
            icon="⚡"
            label="JavaScript Course"
            value={`${completedJsTopics.length}/${TOTAL_JS_TOPICS}`}
            sub={`${jsProgress}% complete`}
            color="rgba(234, 179, 8, 0.15)"
          />
          <ProgressCard
            icon="✏️"
            label="Practice Tasks"
            value={`${completedPractice.length}/${TOTAL_PRACTICE}`}
            sub={`${practiceProgress}% complete`}
            color="var(--success-bg)"
          />
        </div>

        {/* Course module links */}
        <div className="progress-module-status">
          <h2 className="progress-module-status-title">Course Modules</h2>
          <div className="progress-module-list">
            <Link to="/learn/1" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="progress-module-item">
                <span style={{ fontSize: '1.8rem' }}>🧱</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>HTML Course</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {completedTopics.length} / {TOTAL_HTML_TOPICS} Topics Completed
                  </div>
                </div>
                <span className={`badge ${htmlProgress === 100 ? 'badge-success' : 'badge-primary'}`}>
                  {htmlProgress}%
                </span>
              </div>
            </Link>

            <Link to="/css/learn/1" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="progress-module-item">
                <span style={{ fontSize: '1.8rem' }}>🎨</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>CSS Course</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {completedCssTopics.length} / {TOTAL_CSS_TOPICS} Topics Completed
                  </div>
                </div>
                <span className={`badge ${cssProgress === 100 ? 'badge-success' : 'badge-primary'}`} style={{ background: '#a855f7', color: 'white' }}>
                  {cssProgress}%
                </span>
              </div>
            </Link>

            <Link to="/js/learn/1" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="progress-module-item">
                <span style={{ fontSize: '1.8rem' }}>⚡</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>JavaScript Course</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {completedJsTopics.length} / {TOTAL_JS_TOPICS} Topics Completed
                  </div>
                </div>
                <span className={`badge ${jsProgress === 100 ? 'badge-success' : 'badge-primary'}`} style={{ background: '#eab308', color: 'black' }}>
                  {jsProgress}%
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Topic-by-topic breakdown */}
        <div className="progress-module-status" style={{ marginTop: '32px' }}>
          <h2 className="progress-module-status-title">🧱 HTML Topic Details</h2>
          <div className="progress-topic-grid">
            {htmlModules.map(mod => {
              const status = getTopicStatus(mod.id);
              return (
                <div key={mod.id} className="progress-topic-item">
                  <span className={`status-dot status-${status === 'in-progress' ? 'in-progress' : status === 'completed' ? 'completed' : 'not-started'}`} />
                  <span style={{ flex: 1, fontWeight: 500 }}>
                    {mod.id}. {mod.title}
                  </span>
                  {status === 'completed' && <span style={{ color: 'var(--success)' }}>✅</span>}
                  {status === 'in-progress' && <span style={{ color: 'var(--warning)' }}>▶️</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="progress-module-status" style={{ marginTop: '32px' }}>
          <h2 className="progress-module-status-title">🎨 CSS Topic Details</h2>
          <div className="progress-topic-grid">
            {cssModules.map(mod => {
              const status = getCssTopicStatus(mod.id);
              return (
                <div key={mod.id} className="progress-topic-item">
                  <span className={`status-dot status-${status === 'in-progress' ? 'in-progress' : status === 'completed' ? 'completed' : 'not-started'}`} />
                  <span style={{ flex: 1, fontWeight: 500 }}>
                    {mod.id}. {mod.title}
                  </span>
                  {status === 'completed' && <span style={{ color: 'var(--success)' }}>✅</span>}
                  {status === 'in-progress' && <span style={{ color: 'var(--warning)' }}>▶️</span>}
                </div>
              );
            })}
          </div>
        </div>

        <div className="progress-module-status" style={{ marginTop: '32px' }}>
          <h2 className="progress-module-status-title">⚡ JavaScript Topic Details</h2>
          <div className="progress-topic-grid">
            {jsModules.map(mod => {
              const status = getJsTopicStatus(mod.id);
              return (
                <div key={mod.id} className="progress-topic-item">
                  <span className={`status-dot status-${status === 'in-progress' ? 'in-progress' : status === 'completed' ? 'completed' : 'not-started'}`} />
                  <span style={{ flex: 1, fontWeight: 500 }}>
                    {mod.id}. {mod.title}
                  </span>
                  {status === 'completed' && <span style={{ color: 'var(--success)' }}>✅</span>}
                  {status === 'in-progress' && <span style={{ color: 'var(--warning)' }}>▶️</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
