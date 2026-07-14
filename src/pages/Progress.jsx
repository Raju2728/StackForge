/**
 * Progress.jsx
 * Student progress dashboard.
 */
import ProgressCard from '../components/ProgressCard/ProgressCard';
import { useApp } from '../context/AppContext';
import htmlModules from '../data/htmlModules';
import './Progress.css';

export default function Progress() {
  const {
    completedTopics,
    completedPractice,
    htmlProgress,
    practiceProgress,
    finalProjectSubmitted,
    isHtmlComplete,
    TOTAL_TOPICS,
    TOTAL_PRACTICE,
    getTopicStatus,
  } = useApp();

  const remainingTopics = TOTAL_TOPICS - completedTopics.length;
  const overallProgress = Math.round(
    ((completedTopics.length + completedPractice.length + (finalProjectSubmitted ? 1 : 0)) /
    (TOTAL_TOPICS + TOTAL_PRACTICE + 1)) * 100
  );

  return (
    <div className="progress-page">
      <div className="progress-page-header">
        <h1 className="progress-page-title">📊 Your Progress</h1>
        <p className="progress-page-desc">
          Track your HTML learning journey. Complete all topics, practice tasks, and the final project to unlock CSS.
        </p>
      </div>

      {/* Big overview */}
      <div className="progress-overview">
        <div className="progress-overview-pct">{overallProgress}%</div>
        <div className="progress-overview-label">Overall HTML Completion</div>
        <div className="progress-bar" style={{ maxWidth: '400px', margin: '0 auto', height: '12px' }}>
          <div className="progress-bar-fill" style={{ width: `${overallProgress}%` }} />
        </div>
      </div>

      {/* Stats grid */}
      <div className="progress-stats-grid">
        <ProgressCard
          icon="📖"
          label="Topics Completed"
          value={`${completedTopics.length}/${TOTAL_TOPICS}`}
          sub={`${htmlProgress}% complete`}
          color="var(--primary-bg)"
        />
        <ProgressCard
          icon="✏️"
          label="Practice Tasks"
          value={`${completedPractice.length}/${TOTAL_PRACTICE}`}
          sub={`${practiceProgress}% complete`}
          color="var(--success-bg)"
        />
        <ProgressCard
          icon="📋"
          label="Remaining Topics"
          value={remainingTopics}
          sub={remainingTopics === 0 ? 'All done! 🎉' : 'Keep going!'}
          color="var(--warning-bg)"
        />
        <ProgressCard
          icon="🏆"
          label="Final Project"
          value={finalProjectSubmitted ? 'Submitted' : 'Pending'}
          sub={finalProjectSubmitted ? 'Great work! ✅' : 'Complete all topics first'}
          color={finalProjectSubmitted ? 'var(--success-bg)' : 'var(--error-bg)'}
        />
      </div>

      {/* Module status */}
      <div className="progress-module-status">
        <h2 className="progress-module-status-title">Module Status</h2>
        <div className="progress-module-list">
          <div className="progress-module-item">
            <span style={{ fontSize: '1.5rem' }}>🧱</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>HTML</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {isHtmlComplete ? 'Completed' : 'In Progress'}
              </div>
            </div>
            <span className={`badge ${isHtmlComplete ? 'badge-success' : 'badge-primary'}`}>
              {htmlProgress}%
            </span>
          </div>
          <div className="progress-module-item" style={{ opacity: 0.6 }}>
            <span style={{ fontSize: '1.5rem' }}>🎨</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>CSS</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {isHtmlComplete ? 'Ready to Unlock' : 'Locked'}
              </div>
            </div>
            <span className="badge badge-warning">Coming Soon</span>
          </div>
          <div className="progress-module-item" style={{ opacity: 0.6 }}>
            <span style={{ fontSize: '1.5rem' }}>⚡</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600 }}>JavaScript</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {isHtmlComplete ? 'Ready to Unlock' : 'Locked'}
              </div>
            </div>
            <span className="badge badge-warning">Coming Soon</span>
          </div>
        </div>
      </div>

      {/* Topic-by-topic status */}
      <div className="progress-module-status" style={{ marginTop: '32px' }}>
        <h2 className="progress-module-status-title">Topic Details</h2>
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
    </div>
  );
}
