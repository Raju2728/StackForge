/**
 * Footer.jsx
 * Professional footer with creator branding, GitHub link, course links, and copyright.
 */
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/favicon.svg" alt="Stack Learner Logo" style={{ width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0 }} />
            <div>
              <div className="footer-brand-name">Stack Learner</div>
              <p className="footer-brand-desc">
                Learn Frontend Development with simple explanations,
                real-time analogies, and hands-on coding practice.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-group">
            <h4 className="footer-links-title">Courses</h4>
            <div className="footer-links">
              <Link to="/learn/1" className="footer-link">🧱 HTML</Link>
              <Link to="/css/learn/1" className="footer-link">🎨 CSS</Link>
              <Link to="/js/learn/1" className="footer-link">⚡ JavaScript</Link>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Features</h4>
            <div className="footer-links">
              <Link to="/practice" className="footer-link">✏️ Practice</Link>
              <Link to="/playground" className="footer-link">🎮 Playground</Link>
              <Link to="/quiz" className="footer-link">❓ Quizzes</Link>
              <Link to="/progress" className="footer-link">📊 Progress</Link>
              <Link to="/interview-prep" className="footer-link">💼 Interview Prep</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-creator">
            Created and Developed by{' '}
            <strong>Raju</strong>
          </div>

          <a
            href="https://github.com/Raju2728"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-github"
            aria-label="Visit Raju's GitHub profile"
            title="GitHub Profile"
          >
            <svg
              className="footer-github-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <div className="footer-copyright">
            © 2026 Stack Learner. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
