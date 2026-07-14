/**
 * FinalProject.jsx
 * "Build Your First Complete Webpage" — final project with checklist,
 * code editor, live preview, and submission.
 */
import { useState, useCallback } from 'react';
import CodeEditor from '../components/CodeEditor/CodeEditor';
import LivePreview from '../components/LivePreview/LivePreview';
import CompletionModal from '../components/CompletionModal/CompletionModal';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import './FinalProject.css';

const PROJECT_STARTER = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Complete Webpage</title>
</head>
<body>

    <!-- 1. Header Section -->
    <header>
        <h1>My Awesome Website</h1>
    </header>

    <!-- 2. Navigation Bar -->
    <nav>
        <!-- Add navigation links here -->
    </nav>

    <!-- 3. Hero Section -->
    <section id="hero">
        <!-- Add a hero heading and description here -->
    </section>

    <main>
        <!-- 4. About Section -->
        <section id="about">
            <!-- Add about content here -->
        </section>

        <!-- 5. Services Section -->
        <section id="services">
            <!-- Add services here -->
        </section>

        <!-- 6. Contact Section with Form -->
        <section id="contact">
            <!-- Add a contact form here -->
        </section>
    </main>

    <!-- 7. Footer Section -->
    <footer>
        <!-- Add footer content here -->
    </footer>

</body>
</html>`;

const REQUIREMENTS = [
  { id: 'header', label: 'Header with website name', check: code => /<header>[\s\S]*<h1>[\s\S]*<\/h1>[\s\S]*<\/header>/i.test(code) },
  { id: 'nav', label: 'Navigation with links', check: code => /<nav>[\s\S]*<a[\s\S]*<\/a>[\s\S]*<\/nav>/i.test(code) },
  { id: 'hero', label: 'Hero section with heading', check: code => /id=["']hero["'][\s\S]*<h[12]>[\s\S]*<\/h[12]>/i.test(code) },
  { id: 'about', label: 'About section', check: code => /id=["']about["'][\s\S]*<h[23]>[\s\S]*<\/h[23]>/i.test(code) },
  { id: 'services', label: 'Services section (3+ items)', check: code => /id=["']services["']/i.test(code) },
  { id: 'contact-form', label: 'Contact form with inputs', check: code => /<form>[\s\S]*<input[\s\S]*<\/form>/i.test(code) },
  { id: 'footer', label: 'Footer with copyright', check: code => /<footer>[\s\S]*<\/footer>/i.test(code) },
];

export default function FinalProject() {
  const [code, setCode] = useState(PROJECT_STARTER);
  const [previewHtml, setPreviewHtml] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { finalProjectSubmitted, submitFinalProject, showToast } = useApp();
  const navigate = useNavigate();

  const handleRun = useCallback(() => {
    setPreviewHtml(code);
  }, [code]);

  const checkedRequirements = REQUIREMENTS.map(req => ({
    ...req,
    passed: req.check(code),
  }));

  const allPassed = checkedRequirements.every(r => r.passed);

  const handleSubmit = () => {
    if (!allPassed) {
      showToast('Please complete all requirements before submitting.', 'error');
      return;
    }
    submitFinalProject();
    setShowModal(true);
    showToast('Final project submitted successfully! 🎉', 'success');
  };

  return (
    <div className="final-project-page">
      <div className="final-project-header">
        <h1 className="final-project-title">🏆 Build Your First Complete Webpage</h1>
        <p className="final-project-desc">
          This is your final HTML project. Build a complete webpage that includes all the sections
          you've learned about. Follow the requirements checklist below.
        </p>
        {finalProjectSubmitted && (
          <div style={{ marginTop: '12px' }}>
            <span className="badge badge-success" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>
              ✅ Project Submitted Successfully
            </span>
          </div>
        )}
      </div>

      {/* Requirements checklist */}
      <div className="final-project-requirements">
        <h3>📋 Required Elements Checklist</h3>
        <ul className="requirements-checklist">
          {checkedRequirements.map(req => (
            <li key={req.id}>
              <span className={`check-icon ${req.passed ? 'checked' : ''}`}>
                {req.passed ? '✓' : ''}
              </span>
              <span style={{ color: req.passed ? 'var(--success)' : 'var(--text-secondary)' }}>
                {req.label}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {checkedRequirements.filter(r => r.passed).length} / {REQUIREMENTS.length} requirements met
        </div>
      </div>

      {/* Editor + Preview */}
      <div className="final-project-editor">
        <CodeEditor
          code={code}
          onChange={setCode}
          onRun={handleRun}
          defaultCode={PROJECT_STARTER}
          height="450px"
        />
        <LivePreview html={previewHtml} height="450px" />
      </div>

      {/* Actions */}
      <div className="final-project-actions">
        <button className="btn btn-primary btn-lg" onClick={handleRun}>
          ▶ Run Code
        </button>
        <button
          className="btn btn-success btn-lg"
          onClick={handleSubmit}
          disabled={finalProjectSubmitted}
        >
          {finalProjectSubmitted ? '✅ Submitted' : '🚀 Submit Project'}
        </button>
      </div>

      {/* Completion Modal */}
      {showModal && (
        <CompletionModal
          title="Congratulations! 🎉"
          description="You've completed the final HTML project! You've built your first complete webpage with all the essential sections. You're ready to take the next step in your web development journey."
          onClose={() => setShowModal(false)}
          actions={
            <>
              <button className="btn btn-primary btn-lg" onClick={() => navigate('/progress')}>
                📊 View Progress
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => setShowModal(false)}>
                Close
              </button>
            </>
          }
        />
      )}
    </div>
  );
}
