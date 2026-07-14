/**
 * Practice.jsx
 * Guided practice activities page.
 */
import { useState } from 'react';
import PracticeTask from '../components/PracticeTask/PracticeTask';
import practiceActivities from '../data/practiceActivities';
import { useApp } from '../context/AppContext';
import './Practice.css';

export default function Practice() {
  const [activeTask, setActiveTask] = useState(null);
  const { completedPractice, markPracticeComplete } = useApp();

  const selectedTask = practiceActivities.find(t => t.id === activeTask);

  return (
    <div className="practice-page">
      <div className="practice-page-header">
        <h1 className="practice-page-title">✏️ Practice Activities</h1>
        <p className="practice-page-desc">
          Complete these guided exercises to strengthen your HTML skills.
          Each task gives you starter code, hints, and instant feedback.
        </p>
        <div style={{ marginTop: '12px' }}>
          <span className="badge badge-primary">
            {completedPractice.length} / {practiceActivities.length} Completed
          </span>
        </div>
      </div>

      {/* Task list */}
      <div className="practice-list">
        {practiceActivities.map(task => {
          const isCompleted = completedPractice.includes(task.id);
          return (
            <div
              key={task.id}
              className={`practice-list-item ${
                activeTask === task.id ? 'active' : ''
              } ${isCompleted ? 'completed-item' : ''}`}
              onClick={() =>
                setActiveTask(prev => (prev === task.id ? null : task.id))
              }
            >
              <div className="practice-list-num">
                {isCompleted ? '✓' : task.id}
              </div>
              <div className="practice-list-info">
                <div className="practice-list-title">{task.title}</div>
                <span className={`badge practice-list-difficulty ${
                  task.difficulty === 'Easy' ? 'badge-success' :
                  task.difficulty === 'Medium' ? 'badge-warning' : 'badge-error'
                }`}>
                  {task.difficulty}
                </span>
              </div>
              {isCompleted && (
                <span className="badge badge-success">Done</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected task */}
      {selectedTask && (
        <div className="practice-task-container">
          <PracticeTask
            key={selectedTask.id}
            task={selectedTask}
            onComplete={markPracticeComplete}
          />
        </div>
      )}

      {!selectedTask && (
        <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--text-muted)' }}>
          <div style={{ fontSize: '3rem', marginBottom: '12px', opacity: 0.5 }}>👆</div>
          <p>Select a practice task above to get started</p>
        </div>
      )}
    </div>
  );
}
