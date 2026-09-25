/**
 * QuizPage.jsx
 * Dedicated quiz page with module selector (HTML / CSS / JS).
 */
import { useState } from 'react';
import QuizSystem from '../components/QuizSystem/QuizSystem';
import quizData from '../data/quizData';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import './QuizPage.css';

const modules = [
  { key: 'html', label: 'HTML', icon: '🧱', color: '#6366f1' },
  { key: 'css', label: 'CSS', icon: '🎨', color: '#a855f7' },
  { key: 'javascript', label: 'JavaScript', icon: '⚡', color: '#eab308' },
];

export default function QuizPage() {
  const [activeModule, setActiveModule] = useState(null);

  const activeQuiz = activeModule ? quizData[activeModule] : null;

  return (
    <div>
      <SEO
        title="Interactive Frontend Knowledge Quizzes — HTML, CSS & JavaScript"
        description="Test your web development expertise with MCQ quizzes for HTML5, CSS3, and JavaScript. Get instant score breakdowns and detailed concept explanations."
        canonical="/quiz"
        keywords="frontend quiz, html test, css mcq, javascript quiz, web development test"
      />
      <div className="page-container">
        <div className="quiz-page-header">
          <h1 className="quiz-page-title">❓ Knowledge Quizzes</h1>
          <p className="quiz-page-desc">
            Test your understanding of HTML, CSS, and JavaScript with interactive multiple-choice quizzes.
            Each quiz has 10 questions with detailed explanations.
          </p>
        </div>

        {/* Module Selector */}
        {!activeModule && (
          <div className="quiz-module-grid">
            {modules.map(mod => {
              const quiz = quizData[mod.key];
              return (
                <button
                  key={mod.key}
                  className="quiz-module-card"
                  onClick={() => setActiveModule(mod.key)}
                  style={{ '--card-accent': mod.color }}
                >
                  <div className="quiz-module-icon">{mod.icon}</div>
                  <h3 className="quiz-module-title">{quiz.title}</h3>
                  <p className="quiz-module-info">{quiz.questions.length} Questions</p>
                  <div className="quiz-module-difficulty">
                    {['Beginner', 'Intermediate', 'Mixed'].map((d, i) => (
                      <span key={d} className="quiz-diff-star" style={{ opacity: i < 2 ? 1 : 0.4 }}>⭐</span>
                    ))}
                  </div>
                  <span className="btn btn-primary btn-sm" style={{ background: mod.color }}>
                    Start Quiz →
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Active Quiz */}
        {activeModule && activeQuiz && (
          <div className="quiz-active-section">
            <button
              className="btn btn-ghost quiz-back-btn"
              onClick={() => setActiveModule(null)}
            >
              ← Back to Quizzes
            </button>
            <QuizSystem
              questions={activeQuiz.questions}
              title={activeQuiz.title}
              icon={activeQuiz.icon}
              color={activeQuiz.color}
            />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
