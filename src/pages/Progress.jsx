/**
 * Progress.jsx
 * Student progress dashboard for HTML, CSS, and JavaScript courses.
 */
import { Link } from 'react-router-dom';
import ProgressCard from '../components/ProgressCard/ProgressCard';
import { useApp } from '../context/AppContext';
import htmlModules from '../data/htmlModules';
import cssModules from '../data/cssModules';
import jsModules from '../data/jsModules';
import './Progress.css';

export default function Progress() {
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
  } = useApp();

  return (
    <div className="progress-page">
      <div className="progress-page-header">
        <h1 className="progress-page-title">📊 Your Learning Progress</h1>
        <p className="progress-page-desc">
          Track your complete Web Development journey across HTML, CSS, and JavaScript courses.
        </p>
      </div>

      {/* Big overall overview */}
      <div className="progress-overview">
        <div className="progress-overview-pct">{overallPlatformProgress}%</div>
        <div className="progress-overview-label">Overall Platform Completion</div>
        <div className="progress-bar" style={{ maxWidth: '400px', margin: '0 auto', height: '12px' }}>
          <div className="progress-bar-fill" style={{ width: `${overallPlatformProgress}%` }} />
        </div>
      </div>

      {/* Course stats grid */}
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

      {/* Course Status List */}
      <div className="progress-module-status">
        <h2 className="progress-module-status-title">Course Modules</h2>
        <div className="progress-module-list">
          {/* HTML */}
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

          {/* CSS */}
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

          {/* JavaScript */}
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
  );
}
