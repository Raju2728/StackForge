/**
 * TopicViewer.jsx
 * Displays a single HTML learning topic with all content sections.
 */
import { useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './TopicViewer.css';

export default function TopicViewer({ topic, totalTopics }) {
  const navigate = useNavigate();
  const {
    markTopicComplete,
    markTopicInProgress,
    getTopicStatus,
    showToast,
  } = useApp();

  const status = getTopicStatus(topic.id);
  const hasPrev = topic.id > 1;
  const hasNext = topic.id < totalTopics;

  const handleMarkComplete = () => {
    markTopicComplete(topic.id);
    showToast(`"${topic.title}" marked as completed!`, 'success');
  };

  const handlePrev = () => {
    navigate(`/learn/${topic.id - 1}`);
  };

  const handleNext = () => {
    markTopicInProgress(topic.id + 1);
    navigate(`/learn/${topic.id + 1}`);
  };

  return (
    <div className="topic-viewer">
      <div className="topic-viewer-header">
        <span className="topic-num-badge">
          📘 Module {topic.id} of {totalTopics}
        </span>
        <h1 className="topic-viewer-title">{topic.title}</h1>
        {status === 'completed' && (
          <span className="badge badge-success">✅ Completed</span>
        )}
        {status === 'in-progress' && (
          <span className="badge badge-warning">▶ In Progress</span>
        )}
      </div>

      {/* Explanation */}
      <div className="topic-section">
        <h2 className="topic-section-title">📖 Explanation</h2>
        <p className="topic-section-content">{topic.explanation}</p>
      </div>

      {/* Real-world Analogy */}
      <div className="topic-section">
        <h2 className="topic-section-title">🌍 Real-World Analogy</h2>
        <div className="topic-analogy">{topic.analogy}</div>
      </div>

      {/* Syntax */}
      {topic.syntax && (
        <div className="topic-section">
          <h2 className="topic-section-title">📝 Syntax</h2>
          <pre className="topic-syntax-block">{topic.syntax}</pre>
        </div>
      )}

      {/* Code Example */}
      <div className="topic-section">
        <h2 className="topic-section-title">💻 Code Example</h2>
        <pre className="topic-syntax-block">{topic.codeExample}</pre>
      </div>

      {/* Expected Output */}
      <div className="topic-section">
        <h2 className="topic-section-title">👁️ Expected Output</h2>
        <p className="topic-section-content">{topic.expectedOutput}</p>
      </div>

      {/* Important Notes */}
      {topic.notes && topic.notes.length > 0 && (
        <div className="topic-section">
          <h2 className="topic-section-title">📌 Important Notes</h2>
          <ul className="topic-notes-list">
            {topic.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes */}
      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <div className="topic-section">
          <h2 className="topic-section-title">⚠️ Common Mistakes</h2>
          <ul className="topic-mistakes-list">
            {topic.commonMistakes.map((mistake, i) => (
              <li key={i}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Practice Prompt */}
      {topic.practicePrompt && (
        <div className="topic-section">
          <h2 className="topic-section-title">✏️ Practice Activity</h2>
          <div className="topic-practice-prompt">
            <strong>Try This:</strong>
            {topic.practicePrompt}
          </div>
        </div>
      )}

      {/* Complete & Navigate */}
      {status !== 'completed' && (
        <div className="topic-complete-section">
          <button className="btn btn-success btn-lg" onClick={handleMarkComplete}>
            ✅ Mark as Completed
          </button>
        </div>
      )}

      <div className="topic-nav">
        <button
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={!hasPrev}
        >
          ← Previous
        </button>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {topic.id} / {totalTopics}
        </span>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!hasNext}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
