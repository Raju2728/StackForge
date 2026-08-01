/**
 * SearchOverlay.jsx
 * Full-screen search overlay that searches across HTML, CSS, and JS topics.
 * Supports Ctrl+K keyboard shortcut and ESC to close.
 */
import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import htmlModules from '../../data/htmlModules';
import cssModules from '../../data/cssModules';
import jsModules from '../../data/jsModules';
import './SearchOverlay.css';

const allTopics = [
  ...htmlModules.map(m => ({ ...m, course: 'HTML', courseIcon: '🧱', basePath: '/learn' })),
  ...cssModules.map(m => ({ ...m, course: 'CSS', courseIcon: '🎨', basePath: '/css/learn' })),
  ...jsModules.map(m => ({ ...m, course: 'JavaScript', courseIcon: '⚡', basePath: '/js/learn' })),
];

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Close on ESC
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Filtered results
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allTopics
      .filter(
        t =>
          t.title.toLowerCase().includes(q) ||
          (t.explanation && t.explanation.toLowerCase().includes(q)) ||
          (t.category && t.category.toLowerCase().includes(q))
      )
      .slice(0, 12);
  }, [query]);

  const handleSelect = (topic) => {
    navigate(`${topic.basePath}/${topic.id}`);
    onClose();
  };

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            placeholder="Search topics, concepts, tutorials..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <button className="search-close-btn" onClick={onClose}>
            ESC
          </button>
        </div>

        <div className="search-results">
          {query.trim() && results.length === 0 && (
            <div className="search-empty">
              <span className="search-empty-icon">🔍</span>
              <p>No topics found for "{query}"</p>
              <p className="search-empty-hint">Try searching for "flexbox", "anchor", or "variables"</p>
            </div>
          )}

          {!query.trim() && (
            <div className="search-empty">
              <span className="search-empty-icon">💡</span>
              <p>Start typing to search across all courses</p>
              <p className="search-empty-hint">155+ topics across HTML, CSS, and JavaScript</p>
            </div>
          )}

          {results.map((topic) => (
            <button
              key={`${topic.course}-${topic.id}`}
              className="search-result-item"
              onClick={() => handleSelect(topic)}
            >
              <span className="search-result-icon">{topic.courseIcon}</span>
              <div className="search-result-info">
                <div className="search-result-title">{topic.title}</div>
                {topic.category && (
                  <span className="search-result-category">{topic.category}</span>
                )}
              </div>
              <span className="search-result-badge">{topic.course}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
