/**
 * LivePreview.jsx
 * Renders HTML code in a sandboxed iframe with browser-style chrome.
 * Supports responsive preview (desktop/tablet/mobile), refresh,
 * fullscreen, and open-in-new-tab.
 */
import { useState, useRef, useCallback } from 'react';
import './LivePreview.css';

const PREVIEW_SIZES = {
  desktop: '100%',
  tablet: '768px',
  mobile: '375px',
};

export default function LivePreview({ html, height = '400px' }) {
  const [viewMode, setViewMode] = useState('desktop');
  const [key, setKey] = useState(0);
  const iframeRef = useRef(null);

  const handleRefresh = useCallback(() => {
    setKey(prev => prev + 1);
  }, []);

  const handleFullscreen = useCallback(() => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  }, []);

  const handleNewTab = useCallback(() => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      newWindow.document.open();
      newWindow.document.write(html || '');
      newWindow.document.close();
    }
  }, [html]);

  return (
    <div className="live-preview-container">
      <div className="live-preview-toolbar">
        <span className="preview-toolbar-title">
          🌐 Preview
        </span>
        <span className="preview-url-bar">localhost:5173/preview</span>

        {/* Responsive toggles */}
        <div className="preview-responsive-group">
          <button
            className={`preview-btn ${viewMode === 'desktop' ? 'active' : ''}`}
            onClick={() => setViewMode('desktop')}
            title="Desktop view"
          >
            🖥
          </button>
          <button
            className={`preview-btn ${viewMode === 'tablet' ? 'active' : ''}`}
            onClick={() => setViewMode('tablet')}
            title="Tablet view"
          >
            📱
          </button>
          <button
            className={`preview-btn ${viewMode === 'mobile' ? 'active' : ''}`}
            onClick={() => setViewMode('mobile')}
            title="Mobile view"
          >
            📲
          </button>
        </div>

        <button className="preview-btn" onClick={handleRefresh} title="Refresh">
          🔄
        </button>
        <button className="preview-btn" onClick={handleFullscreen} title="Fullscreen">
          ⛶
        </button>
        <button className="preview-btn" onClick={handleNewTab} title="Open in new tab">
          ↗
        </button>
      </div>

      <div className="live-preview-body" style={{ height }}>
        {html ? (
          <iframe
            key={key}
            ref={iframeRef}
            className="preview-iframe"
            srcDoc={html}
            title="HTML Preview"
            sandbox="allow-scripts"
            style={{
              width: PREVIEW_SIZES[viewMode],
              maxWidth: '100%',
            }}
          />
        ) : (
          <div className="preview-empty">
            <span className="preview-empty-icon">👁️</span>
            <span>Click <strong>Run</strong> to see the preview</span>
          </div>
        )}
      </div>
    </div>
  );
}
