/**
 * CourseSidebar.jsx
 * Generic course sidebar that works for CSS and JavaScript sections.
 * Follows the same design pattern as the existing HTML Sidebar.
 */
import { NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import '../Sidebar/Sidebar.css';

export default function CourseSidebar({
  modules,
  courseTitle,
  basePath,
  completedTopics,
  totalTopics,
  progress,
  getTopicStatus,
}) {
  const { sidebarOpen, setSidebarOpen } = useApp();

  const statusIcons = {
    completed: '✅',
    'in-progress': '▶️',
    'not-started': '',
  };

  // Group modules by category
  const categories = [];
  const seen = new Set();
  for (const mod of modules) {
    const cat = mod.category || 'General';
    if (!seen.has(cat)) {
      seen.add(cat);
      categories.push(cat);
    }
  }

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
          <div className="sidebar-title">{courseTitle}</div>
          <div className="sidebar-progress-info">
            <span className="sidebar-progress-text">
              {completedTopics.length} / {totalTopics} topics
            </span>
            <span className="sidebar-progress-pct">{progress}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <ul className="sidebar-modules">
          {categories.map(cat => (
            <li key={cat} className="sidebar-category-group">
              <div className="sidebar-category-label">{cat}</div>
              <ul className="sidebar-category-items">
                {modules
                  .filter(m => (m.category || 'General') === cat)
                  .map(mod => {
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
                          <span className="sidebar-module-num">{mod.id}</span>
                          <span>{mod.title}</span>
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
