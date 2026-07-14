/**
 * LessonCard.jsx
 * Card linking to a specific lesson/feature on the home page.
 */
import { useNavigate } from 'react-router-dom';

export default function LessonCard({ icon, title, description, to, badge, badgeClass }) {
  const navigate = useNavigate();

  return (
    <div
      className="card card-interactive"
      onClick={() => navigate(to)}
      style={{ textAlign: 'center' }}
    >
      <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{icon}</div>
      <h3 style={{ marginBottom: '8px' }}>{title}</h3>
      <p style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>{description}</p>
      {badge && (
        <div style={{ marginTop: '12px' }}>
          <span className={`badge ${badgeClass || 'badge-primary'}`}>{badge}</span>
        </div>
      )}
    </div>
  );
}
