/**
 * QuizSystem.jsx
 * Reusable quiz component with MCQ, scoring, explanations, and animations.
 */
import { useState, useCallback } from 'react';
import './QuizSystem.css';

export default function QuizSystem({ questions, title, icon, color, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState([]);

  const current = questions[currentIndex];
  const totalQuestions = questions.length;
  const progress = Math.round(((currentIndex + (answered ? 1 : 0)) / totalQuestions) * 100);

  const handleSelect = useCallback((optionIndex) => {
    if (answered) return;
    setSelectedOption(optionIndex);
    setAnswered(true);
    const isCorrect = optionIndex === current.correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setAnswers(prev => [...prev, { question: current.question, selected: optionIndex, correct: current.correct, isCorrect }]);
  }, [answered, current]);

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setFinished(true);
      if (onComplete) onComplete(score + (selectedOption === current.correct ? 0 : 0));
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setAnswered(false);
    }
  }, [currentIndex, totalQuestions, onComplete, score, selectedOption, current]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswered(false);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  }, []);

  const getGrade = () => {
    const pct = Math.round((score / totalQuestions) * 100);
    if (pct >= 90) return { label: 'Excellent! 🌟', color: '#10b981' };
    if (pct >= 70) return { label: 'Great Job! 👏', color: '#6366f1' };
    if (pct >= 50) return { label: 'Good Effort! 💪', color: '#eab308' };
    return { label: 'Keep Practicing! 📚', color: '#ef4444' };
  };

  // Finished screen
  if (finished) {
    const grade = getGrade();
    const pct = Math.round((score / totalQuestions) * 100);
    return (
      <div className="quiz-container">
        <div className="quiz-finished">
          <div className="quiz-score-ring" style={{ '--pct': pct, '--ring-color': grade.color }}>
            <span className="quiz-score-pct">{pct}%</span>
          </div>
          <h2 className="quiz-finished-title">{grade.label}</h2>
          <p className="quiz-finished-sub">
            You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>
          </p>

          <div className="quiz-review">
            {answers.map((a, i) => (
              <div key={i} className={`quiz-review-item ${a.isCorrect ? 'correct' : 'wrong'}`}>
                <span className="quiz-review-num">{i + 1}</span>
                <span className="quiz-review-text">{a.question}</span>
                <span className="quiz-review-status">{a.isCorrect ? '✓' : '✗'}</span>
              </div>
            ))}
          </div>

          <div className="quiz-finished-actions">
            <button className="btn btn-primary btn-lg" onClick={handleRestart}>
              🔄 Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {/* Header */}
      <div className="quiz-header">
        <div className="quiz-header-left">
          <span className="quiz-module-badge" style={{ background: `${color}15`, color }}>
            {icon} {title}
          </span>
        </div>
        <div className="quiz-header-right">
          <span className="quiz-counter">
            Question {currentIndex + 1} / {totalQuestions}
          </span>
          <span className="quiz-score-badge">
            Score: {score}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${progress}%`, background: color }}
        />
      </div>

      {/* Question */}
      <div className="quiz-question-card" key={currentIndex}>
        <h3 className="quiz-question-text">{current.question}</h3>

        <div className="quiz-options">
          {current.options.map((option, i) => {
            let optionClass = 'quiz-option';
            if (answered) {
              if (i === current.correct) optionClass += ' quiz-option-correct';
              else if (i === selectedOption) optionClass += ' quiz-option-wrong';
            }
            if (i === selectedOption && !answered) optionClass += ' quiz-option-selected';

            return (
              <button
                key={i}
                className={optionClass}
                onClick={() => handleSelect(i)}
                disabled={answered}
              >
                <span className="quiz-option-letter">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="quiz-option-text">{option}</span>
                {answered && i === current.correct && <span className="quiz-option-icon">✓</span>}
                {answered && i === selectedOption && i !== current.correct && <span className="quiz-option-icon">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answered && (
          <div className={`quiz-explanation ${selectedOption === current.correct ? 'quiz-explanation-correct' : 'quiz-explanation-wrong'}`}>
            <strong>{selectedOption === current.correct ? '✅ Correct!' : '❌ Incorrect'}</strong>
            <p>{current.explanation}</p>
          </div>
        )}

        {/* Next button */}
        {answered && (
          <div className="quiz-next-section">
            <button className="btn btn-primary btn-lg" onClick={handleNext} style={{ background: color }}>
              {currentIndex + 1 >= totalQuestions ? '📊 View Results' : 'Next Question →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
