/**
 * Sidebar.jsx
 * Collapsible sidebar with HTML module list and progress indicator.
 */
import { NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import htmlModules from '../../data/htmlModules';
import './Sidebar.css';

export default function Sidebar() {
  const {
    sidebarOpen,
    setSidebarOpen,
    completedTopics,
    htmlProgress,
    getTopicStatus,
    TOTAL_TOPICS,
  } = useApp();

  const statusIcons = {
    completed: '✅',
    'in-progress': '▶️',
    'not-started': '',
  };

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
          <div className="sidebar-title">HTML Course</div>
          <div className="sidebar-progress-info">
            <span className="sidebar-progress-text">
              {completedTopics.length} / {TOTAL_TOPICS} topics
            </span>
            <span className="sidebar-progress-pct">{htmlProgress}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${htmlProgress}%` }}
            />
          </div>
        </div>

        <ul className="sidebar-modules">
          {htmlModules.map(mod => {
            const status = getTopicStatus(mod.id);
            return (
              <li key={mod.id}>
                <NavLink
                  to={`/learn/${mod.id}`}
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
      </aside>
    </>
  );
}
