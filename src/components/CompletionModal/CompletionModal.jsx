/**
 * CompletionModal.jsx
 * Celebration modal shown when a milestone is achieved.
 */
import './CompletionModal.css';

export default function CompletionModal({ title, description, onClose, actions }) {
  return (
    <div className="completion-modal-overlay" onClick={onClose}>
      <div className="completion-modal" onClick={e => e.stopPropagation()}>
        <div className="completion-modal-icon">🎉</div>
        <h2 className="completion-modal-title">{title}</h2>
        <p className="completion-modal-desc">{description}</p>
        <div className="completion-modal-actions">
          {actions || (
            <button className="btn btn-primary btn-lg" onClick={onClose}>
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
