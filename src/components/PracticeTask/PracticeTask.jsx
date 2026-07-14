/**
 * PracticeTask.jsx
 * A guided practice exercise with editor, preview, hints, and answer checking.
 */
import { useState, useCallback } from 'react';
import CodeEditor from '../CodeEditor/CodeEditor';
import LivePreview from '../LivePreview/LivePreview';
import { useApp } from '../../context/AppContext';
import './PracticeTask.css';

export default function PracticeTask({ task, onComplete }) {
  const [code, setCode] = useState(task.starterCode);
  const [previewHtml, setPreviewHtml] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const { showToast, completedPractice } = useApp();

  const isCompleted = completedPractice.includes(task.id);

  const handleRun = useCallback(() => {
    setPreviewHtml(code);
  }, [code]);

  const handleCheckAnswer = useCallback(() => {
    // Validate by checking if all required keywords are present
    const normalizedCode = code.toLowerCase().replace(/\s+/g, ' ');
    const allPresent = task.validationKeywords.every(keyword =>
      normalizedCode.includes(keyword.toLowerCase())
    );

    if (allPresent) {
      setFeedback('correct');
      onComplete?.(task.id);
      showToast(`Practice "${task.title}" completed! 🎉`, 'success');
    } else {
      setFeedback('incorrect');
      showToast('Not quite right. Check the hints and try again.', 'error');
    }
  }, [code, task, onComplete, showToast]);

  const handleReset = useCallback(() => {
    setCode(task.starterCode);
    setPreviewHtml('');
    setFeedback(null);
  }, [task.starterCode]);

  return (
    <div className="practice-task">
      <div className="practice-task-header">
        <h2 className="practice-task-title">{task.title}</h2>
        <div className="practice-task-meta">
          <span className={`badge ${
            task.difficulty === 'Easy' ? 'badge-success' :
            task.difficulty === 'Medium' ? 'badge-warning' : 'badge-error'
          }`}>
            {task.difficulty}
          </span>
          {isCompleted && (
            <span className="badge badge-success">✅ Completed</span>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="practice-task-instructions">
        <p>{task.instructions}</p>

        {/* Hints */}
        <div className="practice-task-hints">
          <button
            className="practice-task-hints-toggle"
            onClick={() => setShowHints(!showHints)}
          >
            {showHints ? '🔽 Hide Hints' : '💡 Show Hints'}
          </button>
          {showHints && (
            <ol className="practice-task-hints-list">
              {task.hints.map((hint, i) => (
                <li key={i}>{hint}</li>
              ))}
            </ol>
          )}
        </div>
      </div>

      {/* Editor + Preview */}
      <div className="practice-task-editor-area">
        <CodeEditor
          code={code}
          onChange={setCode}
          onRun={handleRun}
          defaultCode={task.starterCode}
          height="300px"
        />
        <LivePreview html={previewHtml} height="300px" />
      </div>

      {/* Actions */}
      <div className="practice-task-actions">
        <button className="btn btn-primary" onClick={handleRun}>
          ▶ Run Code
        </button>
        <button className="btn btn-success" onClick={handleCheckAnswer}>
          ✅ Check Answer
        </button>
        <button className="btn btn-secondary" onClick={handleReset}>
          ↺ Reset
        </button>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className={`practice-task-feedback ${feedback}`}>
          {feedback === 'correct' ? (
            <>✅ Correct! Great job — you've completed this exercise.</>
          ) : (
            <>❌ Not quite right. Check the hints and make sure you've included all required elements.</>
          )}
        </div>
      )}
    </div>
  );
}
