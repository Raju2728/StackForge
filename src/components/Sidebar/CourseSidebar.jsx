/**
 * CourseSidebar.jsx
 * Generic reusable sidebar for any course (CSS, JS, etc.).
 * Accepts modules, course metadata, and progress tracking functions.
 */
import { NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import './Sidebar.css';

export default function CourseSidebar({
  modules,
  courseTitle,
  courseIcon = '📘',
  basePath,
  completedTopics,
  totalTopics,
  progress,
  getTopicStatus,
  accentColor,
}) {
  const { sidebarOpen, setSidebarOpen } = useApp();

  const statusIcons = {
    completed: '✅',
    'in-progress': '▶️',
    'not-started': '',
  };

  // Group modules by category
  const categories = [];
  const categoryMap = new Map();
  modules.forEach(mod => {
    const cat = mod.category || 'General';
    if (!categoryMap.has(cat)) {
      categoryMap.set(cat, []);
      categories.push(cat);
    }
    categoryMap.get(cat).push(mod);
  });

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button
          className="sidebar-close-btn"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          ✕
        </button>

        <div className="sidebar-header">
          <div className="sidebar-title">{courseIcon} {courseTitle}</div>
          <div className="sidebar-progress-info">
            <span className="sidebar-progress-text">
              {completedTopics.length} / {totalTopics} topics
            </span>
            <span className="sidebar-progress-pct" style={accentColor ? { color: accentColor } : undefined}>
              {progress}%
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{
                width: `${progress}%`,
                ...(accentColor ? { background: accentColor } : {}),
              }}
            />
          </div>
        </div>

        <ul className="sidebar-modules">
          {categories.map(category => (
            <li key={category} className="sidebar-category-group">
              <div className="sidebar-category-label">{category}</div>
              <ul className="sidebar-category-items">
                {categoryMap.get(category).map(mod => {
                  const status = getTopicStatus(mod.id);
                  return (
                    <li key={mod.id}>
                      <NavLink
                        to={`${basePath}/${mod.id}`}
                        className={({ isActive }) =>
                          `sidebar-module-item ${status} ${isActive ? 'active' : ''}`
                        }
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sidebar-module-num" style={accentColor && status === 'not-started' ? {} : undefined}>{mod.id}</span>
                        <span className="sidebar-module-title-text">{mod.title}</span>
                        <span className="sidebar-module-status">
                          {statusIcons[status]}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
