/**
 * Header.jsx
 * Main application header with navigation, theme toggle, and mobile drawer.
 */
import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useState } from 'react';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme, sidebarOpen, setSidebarOpen } = useApp();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/learn/1', label: 'HTML', icon: '🧱' },
    { to: '/css/learn/1', label: 'CSS', icon: '🎨' },
    { to: '/js/learn/1', label: 'JavaScript', icon: '⚡' },
    { to: '/practice', label: 'Practice', icon: '✏️' },
    { to: '/playground', label: 'Playground', icon: '🎮' },
    { to: '/progress', label: 'Progress', icon: '📊' },
  ];

  const isLearningPage =
    location.pathname.startsWith('/learn') ||
    location.pathname.startsWith('/css/learn') ||
    location.pathname.startsWith('/js/learn');

  return (
    <header className="header">
      <div className="header-left">
        {/* Sidebar toggle for learning pages */}
        {isLearningPage && (
          <button
            className="hamburger-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
            style={{ display: 'flex' }}
          >
            ☰
          </button>
        )}

        {/* Mobile menu toggle */}
        {!isLearningPage && (
          <button
            className="hamburger-btn"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        )}

        <span className="header-logo">🎓</span>
        <NavLink to="/" className="header-brand" style={{ textDecoration: 'none' }}>
          StackLearner
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <nav className="header-nav">
        {navLinks.map(link => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `header-nav-link ${isActive ? 'active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="header-actions">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="profile-icon" title="Student Profile">
          S
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileNavOpen && (
        <>
          <div
            className="mobile-nav-overlay"
            onClick={() => setMobileNavOpen(false)}
          />
          <nav className="mobile-nav">
            <div className="mobile-nav-header">
              <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                🎓 StackLearner
              </span>
              <button
                className="mobile-nav-close"
                onClick={() => setMobileNavOpen(false)}
                aria-label="Close navigation"
              >
                ✕
              </button>
            </div>
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'active' : ''}`
                }
                onClick={() => setMobileNavOpen(false)}
              >
                {link.icon} {link.label}
              </NavLink>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}
