/**
 * LockedModuleCard.jsx
 * Displays a locked module (CSS/JS) with progress toward unlocking.
 */
import { useApp } from '../../context/AppContext';
import './LockedModuleCard.css';

export default function LockedModuleCard({ moduleName, icon }) {
  const { htmlProgress, completedTopics, completedPractice, TOTAL_TOPICS, TOTAL_PRACTICE } = useApp();

  return (
    <div className="locked-module-card">
      <div className="locked-module-icon">{icon}</div>
      <h2 className="locked-module-title">🔒 {moduleName} — Coming Soon</h2>
      <p className="locked-module-desc">
        Complete the HTML learning path to unlock this module.
      </p>
      <span className="badge badge-warning" style={{ fontSize: '0.85rem', padding: '6px 16px' }}>
        Coming Soon
      </span>

      <div className="locked-module-progress-info">
        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text)' }}>
          HTML Progress: {htmlProgress}%
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${htmlProgress}%` }} />
        </div>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          Topics: {completedTopics.length}/{TOTAL_TOPICS} · Practice: {completedPractice.length}/{TOTAL_PRACTICE}
        </div>
      </div>
    </div>
  );
}
