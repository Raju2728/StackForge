/**
 * SectionVisualizer.jsx
 * Interactive webpage structure visualizer.
 * Click a section to see its purpose, tags, and sample code.
 */
import { useState } from 'react';
import sectionData from '../../data/sectionData';
import './SectionVisualizer.css';

export default function SectionVisualizer() {
  const [activeSection, setActiveSection] = useState(null);

  const active = sectionData.find(s => s.id === activeSection);

  return (
    <section className="section-visualizer">
      <h2 className="section-viz-title">Webpage Structure Visualizer</h2>
      <p className="section-viz-subtitle">
        Click on any section to learn its purpose, common tags, and see sample HTML code.
      </p>

      <div className="section-viz-layout">
        {/* Left: stacked sections */}
        <div className="section-viz-webpage">
          {sectionData.map(sec => (
            <div
              key={sec.id}
              className={`section-viz-block ${activeSection === sec.id ? 'active' : ''}`}
              style={{ borderLeftColor: sec.color }}
              onClick={() =>
                setActiveSection(prev => (prev === sec.id ? null : sec.id))
              }
            >
              <span className="section-viz-block-icon">{sec.icon}</span>
              <span className="section-viz-block-label">{sec.label}</span>
              <span className="section-viz-block-arrow">→</span>
            </div>
          ))}
        </div>

        {/* Right: info panel */}
        <div className="section-viz-info">
          {active ? (
            <>
              <div
                className="section-viz-info-title"
                style={{ color: active.color }}
              >
                {active.icon} {active.label}
              </div>

              <div className="section-viz-info-section">
                <div className="section-viz-info-label">Purpose</div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {active.purpose}
                </p>
              </div>

              <div className="section-viz-info-section">
                <div className="section-viz-info-label">Common HTML Tags</div>
                <div className="section-viz-tags">
                  {active.commonTags.map(tag => (
                    <span key={tag} className="section-viz-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="section-viz-info-section">
                <div className="section-viz-info-label">Sample Code</div>
                <pre className="section-viz-code">{active.sampleCode}</pre>
              </div>

              <div className="section-viz-info-section">
                <div className="section-viz-info-label">Expected Result</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  {active.expectedResult}
                </p>
              </div>
            </>
          ) : (
            <div className="section-viz-info-empty">
              <div className="section-viz-info-empty-icon">👆</div>
              <p>Click a section on the left to explore it</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
