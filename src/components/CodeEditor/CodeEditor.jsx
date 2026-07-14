/**
 * CodeEditor.jsx
 * Interactive HTML code editor built with CodeMirror 6.
 * Features: syntax highlighting, line numbers, toolbar actions
 * (Run, Reset, Clear, Copy, Download).
 */
import { useEffect, useRef, useCallback } from 'react';
import { EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { html } from '@codemirror/lang-html';
import { oneDark } from '@codemirror/theme-one-dark';
import { defaultKeymap, indentWithTab, history, historyKeymap } from '@codemirror/commands';
import { syntaxHighlighting, defaultHighlightStyle, bracketMatching, indentOnInput } from '@codemirror/language';
import { useApp } from '../../context/AppContext';
import './CodeEditor.css';

export default function CodeEditor({
  code,
  onChange,
  onRun,
  defaultCode,
  height = '400px',
  showToolbar = true,
  readOnly = false,
}) {
  const editorRef = useRef(null);
  const viewRef = useRef(null);
  const { showToast } = useApp();

  // Initialize CodeMirror
  useEffect(() => {
    if (!editorRef.current) return;

    const updateListener = EditorView.updateListener.of(update => {
      if (update.docChanged) {
        const newCode = update.state.doc.toString();
        onChange?.(newCode);
      }
    });

    const state = EditorState.create({
      doc: code || '',
      extensions: [
        lineNumbers(),
        highlightActiveLine(),
        highlightActiveLineGutter(),
        bracketMatching(),
        indentOnInput(),
        history(),
        html(),
        oneDark,
        syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
        keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
        updateListener,
        EditorView.lineWrapping,
        EditorState.readOnly.of(readOnly),
        EditorView.theme({
          '&': { height, maxHeight: '600px' },
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
    // Only run on mount. We handle code updates separately below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readOnly]);

  // Sync external code changes into the editor
  useEffect(() => {
    if (!viewRef.current) return;
    const currentCode = viewRef.current.state.doc.toString();
    if (code !== currentCode) {
      viewRef.current.dispatch({
        changes: {
          from: 0,
          to: currentCode.length,
          insert: code,
        },
      });
    }
  }, [code]);

  const handleRun = useCallback(() => {
    onRun?.();
  }, [onRun]);

  const handleReset = useCallback(() => {
    if (defaultCode) {
      onChange?.(defaultCode);
    }
    showToast('Code reset to starter template.', 'success');
  }, [defaultCode, onChange, showToast]);

  const handleClear = useCallback(() => {
    onChange?.('');
    showToast('Editor cleared.', 'success');
  }, [onChange, showToast]);

  const handleCopy = useCallback(async () => {
    try {
      const currentCode = viewRef.current?.state.doc.toString() || code;
      await navigator.clipboard.writeText(currentCode);
      showToast('HTML code copied successfully.', 'success');
    } catch {
      showToast('Failed to copy code.', 'error');
    }
  }, [code, showToast]);

  const handleDownload = useCallback(() => {
    const currentCode = viewRef.current?.state.doc.toString() || code;
    const blob = new Blob([currentCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
    showToast('HTML file downloaded.', 'success');
  }, [code, showToast]);

  return (
    <div className="code-editor-container">
      {showToolbar && (
        <div className="code-editor-toolbar">
          <div className="code-editor-toolbar-dots">
            <span className="code-editor-toolbar-dot red" />
            <span className="code-editor-toolbar-dot yellow" />
            <span className="code-editor-toolbar-dot green" />
          </div>
          <span className="code-editor-toolbar-title">
            📝 index.html
          </span>
          <button className="editor-btn run-btn" onClick={handleRun} title="Run Code">
            ▶ Run
          </button>
          <button className="editor-btn" onClick={handleCopy} title="Copy Code">
            📋 Copy
          </button>
          <button className="editor-btn" onClick={handleReset} title="Reset Code">
            ↺ Reset
          </button>
          <button className="editor-btn" onClick={handleClear} title="Clear Editor">
            🗑 Clear
          </button>
          <button className="editor-btn" onClick={handleDownload} title="Download HTML File">
            ⬇ Download
          </button>
        </div>
      )}
      <div className="code-editor-body" ref={editorRef} />
    </div>
  );
}
