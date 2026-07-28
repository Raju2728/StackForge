/**
 * Playground.jsx
 * Advanced Multi-Language Web Development Playground.
 * Features:
 * - Tabbed Code Mirror editors for HTML, CSS, and JavaScript with syntax highlighting
 * - Combined document compilation into a live sandboxed iframe
 * - Console output capture (logs & errors)
 * - Reset, Clear, Copy, Download, and Responsive controls
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { defaultKeymap, indentWithTab, history, historyKeymap } from '@codemirror/commands';
import { syntaxHighlighting, defaultHighlightStyle, bracketMatching, indentOnInput } from '@codemirror/language';
import { useApp } from '../context/AppContext';
import LivePreview from '../components/LivePreview/LivePreview';
import './Playground.css';

const DEFAULT_HTML = `<header>
  <h1>🎮 Web Playground</h1>
  <p>Modify HTML, CSS, and JavaScript in the tabs above!</p>
</header>

<main>
  <button id="colorBtn">Click to Change Color</button>
  <button id="countBtn">Count: <span id="count">0</span></button>
  <div id="outputCard" class="card">
    Interactive Card Output
  </div>
</main>`;

const DEFAULT_CSS = `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8fafc;
  color: #1e293b;
  padding: 24px;
  margin: 0;
}

header h1 {
  color: #6366f1;
  margin-bottom: 4px;
}

button {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 0.95rem;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 8px;
  transition: transform 0.1s, background 0.2s;
}

button:hover {
  background: #4f46e5;
  transform: translateY(-1px);
}

.card {
  margin-top: 20px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  border-left: 4px solid #6366f1;
}`;

const DEFAULT_JS = `// JavaScript interactive logic
let counter = 0;

document.getElementById('countBtn').addEventListener('click', () => {
  counter++;
  document.getElementById('count').textContent = counter;
  console.log('Counter updated:', counter);
});

document.getElementById('colorBtn').addEventListener('click', () => {
  const colors = ['#6366f1', '#e11d48', '#10b981', '#f59e0b', '#8b5cf6'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const card = document.getElementById('outputCard');
  card.style.borderLeftColor = randomColor;
  console.log('Card border color changed to:', randomColor);
});

console.log('Playground loaded successfully! 🚀');`;

export default function Playground() {
  const { showToast } = useApp();
  const [activeTab, setActiveTab] = useState('html'); // 'html' | 'css' | 'js'

  const [htmlCode, setHtmlCode] = useState(DEFAULT_HTML);
  const [cssCode, setCssCode] = useState(DEFAULT_CSS);
  const [jsCode, setJsCode] = useState(DEFAULT_JS);

  const [previewHtml, setPreviewHtml] = useState('');
  const [consoleLogs, setConsoleLogs] = useState([]);

  const editorRef = useRef(null);
  const viewRef = useRef(null);

  // Helper to compile final HTML document
  const compileCode = useCallback((h, c, j) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>${c}</style>
</head>
<body>
  ${h}
  <script>
    (function() {
      // Intercept console.log and errors
      const origLog = console.log;
      console.log = function(...args) {
        origLog.apply(console, args);
        window.parent.postMessage({
          type: 'console-log',
          text: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
        }, '*');
      };

      window.onerror = function(msg, url, line) {
        window.parent.postMessage({
          type: 'console-error',
          text: 'Error: ' + msg + ' (Line ' + line + ')'
        }, '*');
        return false;
      };
    })();
    ${j}
  </script>
</body>
</html>`;
  }, []);

  const handleRun = useCallback(() => {
    setConsoleLogs([]);
    const compiled = compileCode(htmlCode, cssCode, jsCode);
    setPreviewHtml(compiled);
  }, [compileCode, htmlCode, cssCode, jsCode]);

  // Initial compilation on mount
  useEffect(() => {
    handleRun();
  }, []);

  // Listen for iframe postMessage logs
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && (event.data.type === 'console-log' || event.data.type === 'console-error')) {
        setConsoleLogs(prev => [
          ...prev,
          {
            type: event.data.type === 'console-error' ? 'error' : 'log',
            text: event.data.text,
            time: new Date().toLocaleTimeString(),
          }
        ]);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Get current code & setter by active tab
  const getActiveCode = useCallback(() => {
    if (activeTab === 'html') return htmlCode;
    if (activeTab === 'css') return cssCode;
    return jsCode;
  }, [activeTab, htmlCode, cssCode, jsCode]);

  const updateActiveCode = useCallback((newCode) => {
    if (activeTab === 'html') setHtmlCode(newCode);
    else if (activeTab === 'css') setCssCode(newCode);
    else setJsCode(newCode);
  }, [activeTab]);

  // Get language extension for active tab
  const getLanguageExtension = useCallback(() => {
    if (activeTab === 'html') return html();
    if (activeTab === 'css') return css();
    return javascript();
  }, [activeTab]);

  // Initialize and recreate CodeMirror instance when activeTab changes
  useEffect(() => {
    if (!editorRef.current) return;

    const currentText = getActiveCode();

    const updateListener = EditorView.updateListener.of(update => {
      if (update.docChanged) {
        const val = update.state.doc.toString();
        updateActiveCode(val);
      }
    });

    const state = EditorState.create({
      doc: currentText,
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        bracketMatching(),
        indentOnInput(),
        history(),
        getLanguageExtension(),
        oneDark,
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        updateListener,
        EditorView.lineWrapping,
        EditorView.theme({
          '&': { height: '100%', maxHeight: '100%' },
          '.cm-scroller': { overflow: 'auto' },
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
      viewRef.current = null;
    };
  }, [activeTab]); // Re-create view when activeTab changes

  const handleReset = () => {
    if (activeTab === 'html') setHtmlCode(DEFAULT_HTML);
    else if (activeTab === 'css') setCssCode(DEFAULT_CSS);
    else setJsCode(DEFAULT_JS);
    showToast(`Reset ${activeTab.toUpperCase()} to starter code.`, 'success');
  };

  const handleClear = () => {
    updateActiveCode('');
    showToast(`Cleared ${activeTab.toUpperCase()} editor.`, 'success');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getActiveCode());
      showToast(`Copied ${activeTab.toUpperCase()} code.`, 'success');
    } catch {
      showToast('Failed to copy code.', 'error');
    }
  };

  const handleDownloadAll = () => {
    const compiled = compileCode(htmlCode, cssCode, jsCode);
    const blob = new Blob([compiled], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'playground_project.html';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Downloaded combined HTML file!', 'success');
  };

  return (
    <div className="playground-page">
      <div className="playground-header">
        <div className="playground-title-area">
          <h1 className="playground-title">🎮 Web Development Playground</h1>
          <span className="badge badge-primary">HTML + CSS + JavaScript</span>
        </div>
        <div className="playground-top-actions">
          <button className="btn btn-success" onClick={handleRun} title="Run combined code">
            ▶ Run Code
          </button>
          <button className="btn btn-outline" onClick={handleDownloadAll} title="Download HTML project">
            ⬇ Download HTML
          </button>
        </div>
      </div>

      <div className="playground-workspace">
        {/* Editor Side */}
        <div className="playground-editor-section">
          {/* Tabs */}
          <div className="playground-tabs">
            <button
              className={`playground-tab ${activeTab === 'html' ? 'active' : ''}`}
              onClick={() => setActiveTab('html')}
            >
              🧱 HTML
            </button>
            <button
              className={`playground-tab ${activeTab === 'css' ? 'active' : ''}`}
              onClick={() => setActiveTab('css')}
            >
              🎨 CSS
            </button>
            <button
              className={`playground-tab ${activeTab === 'js' ? 'active' : ''}`}
              onClick={() => setActiveTab('js')}
            >
              ⚡ JavaScript
            </button>
            <div className="playground-tab-actions">
              <button className="editor-mini-btn" onClick={handleCopy} title="Copy current code">📋 Copy</button>
              <button className="editor-mini-btn" onClick={handleReset} title="Reset current tab">↺ Reset</button>
              <button className="editor-mini-btn" onClick={handleClear} title="Clear current tab">🗑 Clear</button>
            </div>
          </div>

          {/* CodeMirror container */}
          <div className="playground-codemirror-wrapper" ref={editorRef} />

          {/* Console panel */}
          <div className="playground-console-panel">
            <div className="console-header">
              <span>🖥️ Console Output ({consoleLogs.length})</span>
              {consoleLogs.length > 0 && (
                <button className="console-clear-btn" onClick={() => setConsoleLogs([])}>
                  Clear Console
                </button>
              )}
            </div>
            <div className="console-body">
              {consoleLogs.length === 0 ? (
                <div className="console-empty">Console logs and errors will appear here...</div>
              ) : (
                consoleLogs.map((log, idx) => (
                  <div key={idx} className={`console-line console-${log.type}`}>
                    <span className="console-time">[{log.time}]</span> {log.text}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Live Preview Side */}
        <div className="playground-preview-section">
          <LivePreview html={previewHtml} height="100%" />
        </div>
      </div>
    </div>
  );
}
