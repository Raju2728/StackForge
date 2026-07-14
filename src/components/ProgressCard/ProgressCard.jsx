/**
 * ProgressCard.jsx
 * Reusable stat card for the progress dashboard.
 */
import './ProgressCard.css';

export default function ProgressCard({ icon, label, value, sub, color = 'var(--primary-bg)' }) {
  return (
    <div className="progress-card">
      <div className="progress-card-icon" style={{ background: color }}>
        {icon}
      </div>
      <div className="progress-card-label">{label}</div>
      <div className="progress-card-value">{value}</div>
      {sub && <div className="progress-card-sub">{sub}</div>}
    </div>
  );
}
