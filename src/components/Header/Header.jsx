/**
 * Header.jsx
 * Main application header with navigation, theme toggle, search, and mobile drawer.
 */
import { NavLink, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useState, useEffect } from 'react';
import SearchOverlay from '../SearchOverlay/SearchOverlay';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme, sidebarOpen, setSidebarOpen } = useApp();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  // Listen for Ctrl+K or Cmd+K globally to open/toggle search overlay
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home', icon: '🏠' },
    { to: '/learn/1', label: 'HTML', icon: '🧱' },
    { to: '/css/learn/1', label: 'CSS', icon: '🎨' },
    { to: '/js/learn/1', label: 'JavaScript', icon: '⚡' },
    { to: '/quiz', label: 'Quiz', icon: '❓' },
    { to: '/playground', label: 'Playground', icon: '🎮' },
    { to: '/interview-prep', label: 'Interview', icon: '💼' },
    { to: '/progress', label: 'Progress', icon: '📊' },
  ];

  const isLearningPage =
    location.pathname.startsWith('/learn') ||
    location.pathname.startsWith('/css/learn') ||
    location.pathname.startsWith('/js/learn');

  return (
    <>
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

          <img src="/favicon.svg" alt="StackForge Logo" className="header-logo-img" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
          <NavLink to="/" className="header-brand" style={{ textDecoration: 'none' }}>
            StackForge
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
          {/* Search Button */}
          <button
            className="header-search-btn"
            onClick={() => setSearchOpen(true)}
            aria-label="Search topics"
            title="Search topics (Ctrl+K)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="header-search-shortcut">⌘K</span>
          </button>

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
                  🎓 StackForge
                </span>
                <button
                  className="mobile-nav-close"
                  onClick={() => setMobileNavOpen(false)}
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Search */}
              <button
                className="mobile-search-btn"
                onClick={() => {
                  setMobileNavOpen(false);
                  setSearchOpen(true);
                }}
              >
                🔍 Search Topics...
              </button>

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

      {/* Search Overlay */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
