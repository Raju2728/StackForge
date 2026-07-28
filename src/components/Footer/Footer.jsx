/**
 * Footer.jsx
 * Application footer with branding and course links.
 */
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span style={{ fontSize: '1.3rem' }}>🎓</span>
          <div>
            <div className="footer-brand-name">StackLearner</div>
            <div className="footer-brand-desc">Learn HTML, CSS & JavaScript Step by Step</div>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/learn/1" className="footer-link">HTML Course</Link>
          <Link to="/css/learn/1" className="footer-link">CSS Course</Link>
          <Link to="/js/learn/1" className="footer-link">JS Course</Link>
          <Link to="/practice" className="footer-link">Practice</Link>
          <Link to="/playground" className="footer-link">Playground</Link>
          <Link to="/progress" className="footer-link">Progress</Link>
        </div>

        <div className="footer-copyright">
          © 2026 StackLearner. Built for students who love learning. ❤️
        </div>
      </div>
    </footer>
  );
}
