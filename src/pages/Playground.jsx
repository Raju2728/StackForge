/**
 * Playground.jsx
 * Standalone code editor + live preview page.
 */
import { useState, useCallback } from 'react';
import CodeEditor from '../components/CodeEditor/CodeEditor';
import LivePreview from '../components/LivePreview/LivePreview';
import './Playground.css';

const STARTER_CODE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>

    <header>
        <h1>Welcome to My Webpage</h1>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section of the webpage.</p>
        </section>

        <section id="about">
            <h2>About Section</h2>
            <p>This section contains information about the webpage.</p>
        </section>

        <section id="contact">
            <h2>Contact Section</h2>
            <p>This section contains contact information.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 My First Webpage</p>
    </footer>

</body>
</html>`;

export default function Playground() {
  const [code, setCode] = useState(STARTER_CODE);
  const [previewHtml, setPreviewHtml] = useState(STARTER_CODE);

  const handleRun = useCallback(() => {
    setPreviewHtml(code);
  }, [code]);

  return (
    <div className="playground-page">
      <div className="playground-header">
        <h1 className="playground-title">
          🎮 HTML Playground
        </h1>
        <span className="badge badge-primary">Write → Run → See the Result</span>
      </div>
      <div className="playground-editor-area">
        <CodeEditor
          code={code}
          onChange={setCode}
          onRun={handleRun}
          defaultCode={STARTER_CODE}
          height="100%"
        />
        <LivePreview html={previewHtml} height="100%" />
      </div>
    </div>
  );
}
