/**
 * TopicViewerEnhanced.jsx
 * Enhanced topic viewer for HTML, CSS, and JS courses with Thanglish analogies,
 * interview questions dropdown accordion with answers, mini tasks, and analogy-code connections.
 */
import { useNavigate } from 'react-router-dom';
import '../TopicViewer/TopicViewer.css';
import './TopicViewerEnhanced.css';

// Helper function to resolve comprehensive answers for interview questions
function getAnswerForQuestion(question, topic) {
  if (typeof question === 'object' && question.answer) {
    return question.answer;
  }
  const qStr = typeof question === 'string' ? question : question?.question || '';

  const knownAnswers = {
    // HTML Questions
    "What does HTML stand for?": "HTML stands for HyperText Markup Language. It is the standard markup language used to structure web pages.",
    "What are the 3 main pillars of Web Development?": "The 3 main pillars are HTML (Structure), CSS (Style & Presentation), and JavaScript (Interactivity & Logic).",
    "Is HTML a programming language or markup language?": "HTML is a markup language, not a programming language. It uses tags to format text, structure, and media on web pages rather than processing algorithmic logic.",
    "What happens step-by-step when you type a URL in browser?": "1. DNS resolution finds the server IP address. 2. Browser establishes TCP/HTTPS connection. 3. Browser sends HTTP GET request. 4. Server returns HTTP response with HTML/CSS/JS files. 5. Browser parses HTML/CSS to render the visual page.",
    "What is HTTP/HTTPS?": "HTTP (HyperText Transfer Protocol) is the protocol for transferring web files. HTTPS is the secure version encrypted with SSL/TLS for privacy and safety.",
    "What is the difference between a Client and a Server?": "A Client (browser) requests web pages and displays them to users. A Server is a remote computer that stores web files and responds to client requests.",
    "What is DOM tree parsing?": "DOM (Document Object Model) tree parsing is the browser's process of reading HTML tags line-by-line and transforming them into a structured tree of object nodes in memory.",
    "What is rendering engine in browser?": "A rendering engine (e.g., Blink in Chrome, Gecko in Firefox) takes HTML, CSS, images, and converts them into the visual pixels painted on your screen.",
    "What is status code 200 vs 404?": "Status code 200 OK means the request succeeded and server sent requested files. 404 Not Found means the requested file URL does not exist on the server.",
    "Why do we need <!DOCTYPE html>?": "It informs the web browser which version of HTML is being used (HTML5). It ensures the browser renders the page in Standards Mode instead of Quirks Mode.",
    "What goes in <head> vs <body>?": "The <head> contains metadata, page title, character encoding, and stylesheet links (invisible to users). The <body> contains all visible elements like text, images, buttons, and sections.",
    "What is Quirks Mode?": "Quirks Mode is a backwards-compatibility mode in browsers triggered when <!DOCTYPE> is missing, causing browsers to emulate legacy bugs from old browsers.",
    "What is the difference between an HTML Tag and an HTML Element?": "An HTML Tag is the opening or closing syntax (e.g., <p> or </p>). An HTML Element includes the opening tag, content, and closing tag together (<p>Content</p>).",
    "Name 3 self-closing (void) elements in HTML.": "Three common self-closing void elements are <img> (image), <br> (line break), and <input> (input box). They do not require closing tags.",
    "What are attributes in HTML?": "Attributes are special keywords inside opening tags that provide additional configuration or metadata to elements, such as href, src, id, class, and alt.",
    "Why is heading hierarchy important for SEO?": "Heading hierarchy (h1 -> h2 -> h3) helps search engine crawlers and screen readers understand the main topic and structure of your content.",
    "How many <h1> tags should be used per webpage?": "Best practice is to use exactly one <h1> tag per webpage to represent the main page title.",
    "What is the default display property of headings?": "Headings are block-level elements by default, taking up the full available width of their container.",
    "What is the difference between <b> and <strong>?": "<b> simply bolds text visually. <strong> indicates that the text is of strong importance or urgency, which screen readers emphasize.",
    "What is the difference between <i> and em?": "<i> styles text in italics visually. <em> indicates semantic emphasis, altering verbal stress in screen readers.",
    "How do you write subscript and superscript in HTML?": "Use <sub> for subscript (e.g., H₂O) and <sup> for superscript (e.g., E = mc²).",
    "What does target=\"_blank\" do?": "It opens the linked document in a new browser tab or window.",
    "Why should you use rel=\"noopener noreferrer\" with target=\"_blank\"?": "It prevents security vulnerabilities (tabnabbing) by preventing the new page from accessing the opening window's window.opener object.",
    "How do you create an email or phone call link in HTML?": "Use href=\"mailto:email@example.com\" for email links and href=\"tel:+1234567890\" for phone call links.",
    "Why is the alt attribute mandatory for accessibility?": "The alt attribute provides text descriptions for visually impaired users using screen readers and displays fallback text if the image fails to load.",
    "What are the advantages of WebP image format over JPG/PNG?": "WebP provides superior lossless and lossy compression, resulting in significantly smaller file sizes with high visual quality.",
    "What happens when image src path is wrong?": "The browser fails to load the image and displays a broken image icon along with the alt text if provided.",
    "What is the difference between <ul> and <ol>?": "<ul> creates an unordered bulleted list. <ol> creates an ordered numbered list.",
    "What is a description list <dl>?": "<dl> defines a description list consisting of term names (<dt>) and term descriptions (<dd>).",
    "Can you nest a <ul> inside an <ol>?": "Yes, lists can be nested inside <li> elements of another list to create multi-level navigation or sub-lists.",
    "What are <thead>, <tbody>, and <tfoot> used for?": "They group table rows into header, body, and footer sections for clean semantic structure and sticky header styling.",
    "How do you merge cells in HTML tables (colspan/rowspan)?": "Use the colspan attribute to merge columns horizontally and rowspan attribute to merge rows vertically.",
    "Why should you not use tables for page layout?": "Tables make layouts rigid, inaccessible for screen readers, difficult to maintain, and non-responsive compared to CSS Flexbox or Grid.",
    "What is the difference between GET and POST methods in forms?": "GET appends form data to the URL query string (visible and cached). POST sends data inside the HTTP request body (secure and suitable for sensitive data).",
    "Why is the <label> tag important for web accessibility?": "It pairs descriptive text with input controls, allowing screen readers to announce field names and expanding the clickable target area.",
    "What does the required attribute do?": "It prevents form submission if the input field is empty, displaying a native browser validation message.",
    "What is Semantic HTML and why is it important for SEO and Accessibility?": "Semantic HTML uses meaningful tags (<header>, <article>, <footer>) that clearly describe content structure to search engines and screen readers.",
    "What is the difference between <section> and <article>?": "<article> is for self-contained independent content (blog post, news item). <section> is for grouping thematic content within a page or article.",
    "What is the difference between <div> and <section>?": "<div> is a non-semantic container used purely for styling. <section> is a semantic element representing a thematic grouping of content.",
    "What is the difference between <head> and <header>?": "<head> contains invisible document metadata and assets. <header> is a visible semantic section for page titles, logos, and navigation.",
    "Can you have multiple <header> elements on a single page?": "Yes! You can have one main page <header> and additional <header> elements inside <article> or <section> elements.",
    "What elements belong inside a <header>?": "Logos, brand names (h1-h6), navigation links (<nav>), search forms, and site taglines.",
    "Why is <nav> preferred over a <div> for navigation links?": "<nav> identifies the navigation region as an ARIA landmark so screen readers can jump directly to navigation.",
    "Should all links on a webpage be placed inside <nav>?": "No, only major navigation block links should be in <nav>. Footer links or minor body links do not need <nav>.",
    "How to structure a accessible navbar?": "Wrap a <ul> list of <li> link items inside a <nav> tag.",
    "What is a Hero Section in web design?": "A prominent banner area at the top of a web page containing a main headline, brief tagline, and Call-To-Action (CTA) button.",
    "What key elements make a hero section effective?": "Clear value proposition headline, concise description, prominent Call-To-Action button, and engaging visual background.",
    "Why can there be only one <main> tag per page?": "<main> represents the primary unique content of the document. Having more than one violates HTML5 specs and confuses assistive tools.",
    "Can <main> be nested inside <article>?": "No, <main> cannot be a child of <article>, <aside>, <footer-------------",
    "How does section id help in single page navigation?": "An id allows anchor links (<a href=\"#about\">) to jump directly to that specific element on the page.",
    "How to structure feature cards in HTML?": "Group title (h3), icon/image, and paragraph inside a <div class=\"card\"> or <article> container.",
    "What elements are essential in a Contact Section?": "Contact form (inputs + submit button), direct email link, phone number, and location address.",
    "What usually goes into an HTML5 <footer> tag?": "Copyright notice (&copy;), legal links (Privacy Policy, Terms), social media links, and sitemap links.",
    "What are the core semantic sections of a complete webpage layout?": "<header>, <nav>, <main> (with <section> and <article>), <aside>, and <footer>.",

    // CSS Questions
    "What does CSS stand for?": "CSS stands for Cascading Style Sheets. It is used to format, lay out, and design HTML elements on web pages.",
    "What is the difference between HTML and CSS?": "HTML creates the structural skeleton of a web page (text, headings, forms), whereas CSS styles the visual layout (colors, fonts, spacing, responsive grids).",
    "Why do we need CSS when HTML can display content?": "HTML content alone looks plain and unstyled. CSS separates design from content, allowing consistent site-wide styling, responsive mobile layouts, and modern visual effects.",
    "Why do we separate CSS from HTML?": "Separating CSS into external files promotes maintainability, reusability across multiple pages, faster browser caching, and cleaner code structure.",
    "What are the advantages of using external CSS?": "1. Single file updates style for thousands of pages. 2. Browsers cache external CSS for faster page loads. 3. Keeps HTML files clean and focused purely on content structure.",
    "What does \"Cascading\" mean in CSS?": "Cascading refers to the priority order CSS uses to resolve conflicting styles based on Specificity, Importance (!important), and Source Order (later styles override earlier ones).",
    "What is inline CSS?": "Inline CSS applies styling directly to a single HTML element using the style attribute, e.g., <p style=\"color:red;\">. It has high specificity but is hard to maintain.",
    "What is the specificity of inline CSS?": "Inline CSS has a specificity score of 1000, overriding internal and external CSS rules unless the external rule uses !important.",
    "When should you use inline CSS?": "Inline CSS should only be used for quick one-off testing, dynamic styles applied via JavaScript, or HTML email templates.",
    "What are the three parts of a CSS rule?": "A CSS rule consists of: 1. Selector (targets element), 2. Property (what to style, e.g., color), and 3. Value (how to style, e.g., blue).",
    "What happens if you forget a semicolon in CSS?": "Forgetting a semicolon can cause the browser to fail to parse subsequent property declarations in that rule block, breaking the styling.",
    "What is the difference between a property and a value?": "A property is the style attribute you want to change (e.g., font-size), while a value is the specific setting you assign to that property (e.g., 16px).",
    "How do you write a comment in CSS?": "CSS comments are written using /* comment here */ syntax. They can span single or multiple lines.",
    "Can CSS comments be nested?": "No, CSS comments cannot be nested. Closing */ inside a comment will terminate the comment block prematurely.",
    "What is the difference between HTML and CSS comment syntax?": "HTML comments use <!-- comment --> whereas CSS comments use /* comment */.",
    "What is an element selector?": "An element selector (type selector) targets all HTML elements of a specific tag name, e.g., p { color: gray; } styles all <p> elements.",
    "Does the element selector target one or all matching elements?": "The element selector targets ALL matching elements of that tag type on the page.",
    "What is the specificity of an element selector?": "The element selector has the lowest specificity score (0,0,0,1).",
    "What is the syntax of a class selector?": "A class selector starts with a dot (.) followed by the class name, e.g., .card { padding: 16px; }.",
    "Can multiple elements have the same class?": "Yes! Classes are designed to be reusable across as many elements on the page as needed.",
    "Can one element have multiple classes?": "Yes, an element can have multiple space-separated classes, e.g., <div class=\"card highlight active\">.",
    "What is the difference between class and ID selectors?": "A Class (.class) can be reused across multiple elements. An ID (#id) must be unique to a single element on a page and has higher specificity.",
    "Can two elements have the same ID?": "No. HTML standards require IDs to be unique within a single document.",
    "Which has higher specificity — class or ID?": "An ID selector (0,1,0,0) has much higher specificity than a Class selector (0,0,1,0).",

    // JS Questions
    "What is JavaScript and what is it used for?": "JavaScript is the client-side programming language of the web used to add interactivity, handle events, manipulate the DOM, validate forms, and build dynamic applications.",
    "Is JavaScript the same as Java?": "No! JavaScript and Java are completely different languages with different syntax, execution environments, and use cases.",
    "Where does JavaScript code run?": "JavaScript runs inside web browser engines (V8, SpiderMonkey) and server environments like Node.js.",
    "Is JavaScript a compiled or interpreted language?": "JavaScript is traditionally an interpreted language, but modern engines use Just-In-Time (JIT) compilation to compile code to machine code at runtime for high performance.",
    "What is the difference between var, let, and const?": "var is function-scoped and hoisted. let is block-scoped and reassignable. const is block-scoped and cannot be reassigned after declaration.",
    "What is block scope vs function scope?": "Block scope limits variable availability to the nearest curly braces {}, whereas function scope limits variable availability to the enclosing function.",
    "Can you change a property of a const object?": "Yes! const prevents reassignment of the variable binding, but object properties and array elements can still be mutated.",
    "What are the primitive data types in JavaScript?": "The primitive types are: String, Number, BigInt, Boolean, Undefined, Null, and Symbol.",
    "What is the difference between undefined and null?": "undefined means a variable has been declared but not assigned a value. null is an intentional assignment representing 'no value'.",
    "What does typeof null return and why?": "typeof null returns 'object'. This is a historical bug in JavaScript since its creation in 1995 that remains for backward compatibility.",
    "What is the difference between an object and an array?": "An Object stores data as key-value pairs accessed by property names. An Array stores an ordered list of items accessed by numeric indices.",
    "How do you access object properties?": "You access properties using Dot notation (obj.name) or Bracket notation (obj['name']).",
    "What is the first index of an array?": "The first index of a JavaScript array is always 0.",
    "What is the difference between == and ===?": "== (loose equality) compares values after type coercion. === (strict equality) compares both value AND data type without coercion.",
    "What is the ternary operator?": "The ternary operator is a shorthand for if-else: condition ? expressionIfTrue : expressionIfFalse.",
    "What does the && operator return?": "The && operator returns the first falsy value it encounters, or the last value if all operands are truthy.",
    "What is the difference between if-else and switch?": "if-else is best for range checks and boolean conditions. switch is cleaner when matching a single expression against fixed discrete values.",
    "What happens if you forget break in a switch?": "Execution 'falls through' to subsequent cases regardless of whether their case conditions match.",
    "What are the different types of loops in JavaScript?": "Common loops include for, while, do-while, for...of (iterates array values), and for...in (iterates object keys).",
    "What is the difference between for...of and for...in?": "for...of iterates over the VALUES of an iterable object (arrays/strings). for...in iterates over the KEYS/property names of an object.",
    "What is a callback function?": "A callback is a function passed as an argument to another function, intended to be executed later when an operation finishes.",
    "What is async/await?": "async/await is modern syntactic sugar built on Promises, allowing asynchronous code to be written and read sequentially like synchronous code.",
    "What does fetch() return?": "fetch() returns a Promise that resolves to a Response object representing the HTTP response.",
    "What is DOM manipulation?": "DOM manipulation is using JavaScript to dynamically select, create, modify, or delete HTML elements and styles on a live web page."
  };

  if (knownAnswers[qStr]) {
    return knownAnswers[qStr];
  }

  if (topic && topic.explanation) {
    return `In ${topic.title}, ${topic.explanation.split('.')[0]}. ${topic.notes ? topic.notes[0] : ''}`;
  }

  return `In web development, ${qStr.toLowerCase().replace('?', '')} is an important concept in ${topic?.category || topic?.title || 'this module'}. Refer to the explanation and code examples above for complete details.`;
}

export default function TopicViewerEnhanced({
  topic,
  totalTopics,
  basePath,
  courseIcon = '📘',
  courseName,
  courseLabel,
  accentColor,
  markComplete,
  markInProgress,
  getStatus,
  showToast,
}) {
  const navigate = useNavigate();

  const status = getStatus(topic.id);
  const hasPrev = topic.id > 1;
  const hasNext = topic.id < totalTopics;

  const handleMarkComplete = () => {
    markComplete(topic.id);
    showToast(`"${topic.title}" marked as completed!`, 'success');
  };

  const handlePrev = () => {
    navigate(`${basePath}/${topic.id - 1}`);
  };

  const handleNext = () => {
    markInProgress(topic.id + 1);
    navigate(`${basePath}/${topic.id + 1}`);
  };

  const label = courseName || courseLabel || 'Course';

  return (
    <div className="topic-viewer">
      <div className="topic-viewer-header">
        <span className="topic-num-badge" style={accentColor ? { background: `${accentColor}18`, color: accentColor } : undefined}>
          {courseIcon} {label} Module {topic.id} of {totalTopics}
        </span>
        {topic.category && (
          <span className="topic-category-badge">{topic.category}</span>
        )}
        <h1 className="topic-viewer-title">{topic.title}</h1>
        {status === 'completed' && (
          <span className="badge badge-success">✅ Completed</span>
        )}
        {status === 'in-progress' && (
          <span className="badge badge-warning">▶ In Progress</span>
        )}
      </div>

      {/* Explanation */}
      <div className="topic-section">
        <h2 className="topic-section-title">📖 Explanation</h2>
        <p className="topic-section-content">{topic.explanation}</p>
      </div>

      {/* Real-world Analogy */}
      {topic.analogy && (
        <div className="topic-section">
          <h2 className="topic-section-title">🌍 Real-World Analogy</h2>
          <div className="topic-analogy">{topic.analogy}</div>
        </div>
      )}

      {/* Thanglish Analogy */}
      {topic.thanglishAnalogy && (
        <div className="topic-section">
          <h2 className="topic-section-title">🗣️ Thanglish Analogy</h2>
          <div className="topic-thanglish-analogy">
            <span className="thanglish-quote-mark">"</span>
            <p>{topic.thanglishAnalogy}</p>
            <span className="thanglish-quote-mark thanglish-quote-end">"</span>
          </div>
        </div>
      )}

      {/* Analogy-Code Connection */}
      {topic.analogyConnection && (
        <div className="topic-section">
          <h2 className="topic-section-title">🔗 Analogy ↔ Code Connection</h2>
          <div className="topic-connection">
            {topic.analogyConnection.split('|').map((item, i) => (
              <span key={i} className="connection-item">
                {item.trim()}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* How It Works Internally */}
      {topic.internalWorking && (
        <div className="topic-section">
          <h2 className="topic-section-title">⚙️ How It Works Internally</h2>
          <div className="topic-internal-working">
            <p className="topic-section-content">{topic.internalWorking}</p>
          </div>
        </div>
      )}

      {/* Syntax */}
      {topic.syntax && (
        <div className="topic-section">
          <h2 className="topic-section-title">📝 Syntax</h2>
          <pre className="topic-syntax-block">{topic.syntax}</pre>
        </div>
      )}

      {/* Code Example */}
      <div className="topic-section">
        <h2 className="topic-section-title">💻 Code Example</h2>
        <pre className="topic-syntax-block">{topic.codeExample}</pre>
      </div>

      {/* Expected Output */}
      <div className="topic-section">
        <h2 className="topic-section-title">👁️ Expected Output</h2>
        <p className="topic-section-content">{topic.expectedOutput}</p>
      </div>

      {/* Important Notes */}
      {topic.notes && topic.notes.length > 0 && (
        <div className="topic-section">
          <h2 className="topic-section-title">📌 Important Notes</h2>
          <ul className="topic-notes-list">
            {topic.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes */}
      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <div className="topic-section">
          <h2 className="topic-section-title">⚠️ Common Mistakes</h2>
          <ul className="topic-mistakes-list">
            {topic.commonMistakes.map((mistake, i) => (
              <li key={i}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Practice Prompt */}
      {topic.practicePrompt && (
        <div className="topic-section">
          <h2 className="topic-section-title">✏️ Practice Activity</h2>
          <div className="topic-practice-prompt">
            <strong>Try This:</strong>
            {topic.practicePrompt}
          </div>
        </div>
      )}

      {/* Mini Task */}
      {topic.miniTask && (
        <div className="topic-section">
          <h2 className="topic-section-title">🎯 Mini Task</h2>
          <div className="topic-mini-task">
            <strong>Challenge:</strong>
            <p>{topic.miniTask}</p>
          </div>
        </div>
      )}

      {/* Interview Questions Dropdown Accordion */}
      {topic.interviewQuestions && topic.interviewQuestions.length > 0 && (
        <div className="topic-section">
          <h2 className="topic-section-title">💼 Interview Questions & Answers</h2>
          <div className="topic-interview-accordion">
            {topic.interviewQuestions.map((qItem, i) => {
              const questionText = typeof qItem === 'string' ? qItem : qItem.question;
              const answerText = getAnswerForQuestion(qItem, topic);
              return (
                <details key={i} className="interview-details-item">
                  <summary className="interview-summary">
                    <span className="interview-q-badge" style={accentColor ? { background: `${accentColor}18`, color: accentColor } : undefined}>
                      Q{i + 1}
                    </span>
                    <span className="interview-q-text">{questionText}</span>
                    <span className="interview-arrow">▼</span>
                  </summary>
                  <div className="interview-answer-content">
                    <div className="interview-answer-badge" style={accentColor ? { color: accentColor } : undefined}>
                      💡 Answer:
                    </div>
                    <p className="interview-answer-text">{answerText}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      )}

      {/* Complete & Navigate */}
      {status !== 'completed' && (
        <div className="topic-complete-section">
          <button
            className="btn btn-success btn-lg"
            onClick={handleMarkComplete}
            style={accentColor ? { background: accentColor, borderColor: accentColor } : undefined}
          >
            ✅ Mark as Completed
          </button>
        </div>
      )}

      <div className="topic-nav">
        <button
          className="btn btn-secondary"
          onClick={handlePrev}
          disabled={!hasPrev}
        >
          ← Previous
        </button>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {topic.id} / {totalTopics}
        </span>
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!hasNext}
          style={accentColor ? { background: accentColor, borderColor: accentColor } : undefined}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
