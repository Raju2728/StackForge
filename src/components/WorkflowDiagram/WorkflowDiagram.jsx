/**
 * WorkflowDiagram.jsx
 * Visual diagram showing how a webpage is created:
 * 5-step workflow + HTML/CSS/JS role cards.
 */
import './WorkflowDiagram.css';

const steps = [
  { icon: '✍️', title: 'Write HTML Code', num: 1 },
  { icon: '🌐', title: 'Browser Reads Code', num: 2 },
  { icon: '🔍', title: 'Identifies Tags', num: 3 },
  { icon: '🏗️', title: 'Creates Structure', num: 4 },
  { icon: '🖥️', title: 'Displays Webpage', num: 5 },
];

const techRoles = [
  {
    icon: '🧱',
    name: 'HTML',
    desc: 'Creates the structure and content of the webpage — headings, paragraphs, images, forms.',
    active: true,
    badge: 'Learning Now',
    badgeClass: 'badge-success',
  },
  {
    icon: '🎨',
    name: 'CSS',
    desc: 'Controls the appearance — colours, fonts, spacing, layout, and animations.',
    active: false,
    badge: 'Coming Soon',
    badgeClass: 'badge-warning',
  },
  {
    icon: '⚡',
    name: 'JavaScript',
    desc: 'Adds behaviour and interactivity — click events, form validation, dynamic content.',
    active: false,
    badge: 'Coming Soon',
    badgeClass: 'badge-warning',
  },
];

export default function WorkflowDiagram() {
  return (
    <section className="workflow-section">
      <h2 className="workflow-section-title">How a Webpage is Created</h2>
      <p className="workflow-section-subtitle">
        Understanding the journey from code to a visible webpage in your browser.
      </p>

      {/* 5-step workflow */}
      <div className="workflow-steps">
        {steps.map((step, index) => (
          <div key={step.num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className="workflow-step">
              <div className="workflow-step-icon">{step.icon}</div>
              <div>
                <div className="workflow-step-num">{step.num}</div>
                <div className="workflow-step-title">{step.title}</div>
              </div>
            </div>
            {index < steps.length - 1 && (
              <span className="workflow-arrow">→</span>
            )}
          </div>
        ))}
      </div>

      {/* Technology roles */}
      <h3 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem', fontWeight: 700 }}>
        The Three Pillars of Web Development
      </h3>
      <div className="tech-roles">
        {techRoles.map(role => (
          <div
            key={role.name}
            className={`tech-role-card ${role.active ? 'active' : 'locked'}`}
          >
            <div className="tech-role-icon">{role.icon}</div>
            <div className="tech-role-name">{role.name}</div>
            <div className="tech-role-desc">{role.desc}</div>
            <div className="tech-role-badge">
              <span className={`badge ${role.badgeClass}`}>{role.badge}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
