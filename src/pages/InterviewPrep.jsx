/**
 * InterviewPrep.jsx
 * Dedicated frontend interview preparation page with expandable Q&A organized by technology.
 */
import { useState } from 'react';
import interviewData from '../data/interviewData';
import Footer from '../components/Footer/Footer';
import './InterviewPrep.css';

export default function InterviewPrep() {
  const [activeTech, setActiveTech] = useState('html');

  const currentTech = interviewData.find(t => t.id === activeTech);

  return (
    <div>
      <div className="page-container">
        <div className="interview-page-header">
          <h1 className="interview-page-title">💼 Frontend Interview Preparation</h1>
          <p className="interview-page-desc">
            Prepare for frontend developer interviews with categorized questions and detailed answers
            covering HTML, CSS, JavaScript, and React fundamentals.
          </p>
        </div>

        {/* Tech Tabs */}
        <div className="interview-tabs">
          {interviewData.map(tech => (
            <button
              key={tech.id}
              className={`interview-tab ${activeTech === tech.id ? 'active' : ''} ${tech.comingSoon ? 'coming-soon' : ''}`}
              onClick={() => !tech.comingSoon && setActiveTech(tech.id)}
              style={activeTech === tech.id ? { '--tab-color': tech.color, borderColor: tech.color, color: tech.color } : { '--tab-color': tech.color }}
              disabled={tech.comingSoon}
            >
              <span className="interview-tab-icon">{tech.icon}</span>
              <span>{tech.id.toUpperCase()}</span>
              {tech.comingSoon && <span className="badge badge-warning" style={{ fontSize: '0.6rem', padding: '2px 6px' }}>Soon</span>}
            </button>
          ))}
        </div>

        {/* Content */}
        {currentTech && (
          <div className="interview-content" key={currentTech.id}>
            <div className="interview-tech-header">
              <span className="interview-tech-icon" style={{ background: `${currentTech.color}15`, color: currentTech.color }}>
                {currentTech.icon}
              </span>
              <h2>{currentTech.title}</h2>
              <span className="badge" style={{ background: `${currentTech.color}15`, color: currentTech.color }}>
                {currentTech.categories.reduce((sum, c) => sum + c.questions.length, 0)} Questions
              </span>
            </div>

            {currentTech.categories.map((category, catIdx) => (
              <div key={catIdx} className="interview-category">
                <h3 className="interview-category-title">
                  <span className="interview-category-num">{catIdx + 1}</span>
                  {category.name}
                </h3>
                <div className="interview-questions">
                  {category.questions.map((item, qIdx) => (
                    <details key={qIdx} className="interview-qa-item">
                      <summary className="interview-qa-summary">
                        <span className="interview-q-badge" style={{ background: `${currentTech.color}15`, color: currentTech.color }}>
                          Q{qIdx + 1}
                        </span>
                        <span className="interview-q-text">{item.q}</span>
                        <span className="interview-qa-arrow">▼</span>
                      </summary>
                      <div className="interview-qa-answer">
                        <div className="interview-answer-label" style={{ color: currentTech.color }}>
                          💡 Answer
                        </div>
                        <p>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
