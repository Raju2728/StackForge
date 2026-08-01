/**
 * interviewData.js
 * Curated interview questions organized by technology with detailed answers.
 */

const interviewData = [
  {
    id: 'html',
    title: 'HTML Interview Questions',
    icon: '🧱',
    color: '#6366f1',
    categories: [
      {
        name: 'Semantic vs Non-Semantic Tags',
        questions: [
          {
            q: 'What is Semantic HTML?',
            a: 'Semantic HTML uses meaningful tags (<header>, <nav>, <article>, <section>, <footer>) that clearly describe their content and purpose to both browsers and developers, improving accessibility and SEO.',
          },
          {
            q: 'Give examples of semantic and non-semantic elements.',
            a: 'Semantic: <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>. Non-semantic: <div>, <span> — they tell nothing about their content.',
          },
          {
            q: 'Why should we prefer semantic tags over <div>?',
            a: 'Semantic tags improve accessibility (screen readers understand structure), boost SEO (search engines understand content hierarchy), and make code more readable and maintainable.',
          },
        ],
      },
      {
        name: 'Div vs Section vs Article',
        questions: [
          {
            q: 'What is the difference between <div> and <section>?',
            a: '<div> is a non-semantic container used for styling/layout purposes. <section> is a semantic element that represents a thematic grouping of content with a heading.',
          },
          {
            q: 'When should you use <article> instead of <section>?',
            a: 'Use <article> for self-contained content that can stand independently and be syndicated (e.g. blog post, product card, news story). Use <section> to group related thematic content inside a page or article.',
          },
          {
            q: 'When should you use <div> vs <section>?',
            a: 'Use <section> when the content forms a logical section with a heading (like "About Us"). Use <div> when you need a container purely for CSS styling without semantic meaning.',
          },
        ],
      },
      {
        name: 'Block vs Inline Elements',
        questions: [
          {
            q: 'What is the difference between block and inline elements?',
            a: 'Block elements (<div>, <p>, <h1>) take full width and start on a new line. Inline elements (<span>, <a>, <strong>) only take up as much width as needed and flow within text.',
          },
          {
            q: 'Can you change an inline element to block?',
            a: 'Yes, using CSS: display: block or display: inline-block. inline-block allows setting width/height while staying in the flow.',
          },
          {
            q: 'Name 5 block and 5 inline elements.',
            a: 'Block: <div>, <p>, <h1>-<h6>, <ul>, <section>. Inline: <span>, <a>, <strong>, <em>, <img>.',
          },
        ],
      },
      {
        name: 'Forms & Inputs',
        questions: [
          {
            q: 'What is the difference between GET and POST form methods?',
            a: 'GET appends data to the URL (visible, limited, cached). POST sends data in the request body (hidden, unlimited size, not cached). Use POST for sensitive data.',
          },
          {
            q: 'Why is the <label> tag important?',
            a: 'It pairs text with input controls for accessibility. Screen readers announce field names, and clicking the label focuses the input, expanding the clickable area.',
          },
          {
            q: 'What is the purpose of form validation attributes like required, minlength, and pattern?',
            a: 'They perform client-side HTML5 validation before submission, preventing invalid data from reaching the server without needing custom JavaScript.',
          },
        ],
      },
      {
        name: 'DOM & Script Execution',
        questions: [
          {
            q: 'What is the difference between <script>, <script async>, and <script defer>?',
            a: 'Regular <script> blocks HTML parsing while downloading and executing. <script async> downloads in parallel and executes immediately when ready (un-ordered). <script defer> downloads in parallel and executes ONLY after HTML parsing is complete (in order).',
          },
          {
            q: 'What is the purpose of the <!DOCTYPE html> declaration?',
            a: 'It informs the browser about the HTML version being used (HTML5). It ensures the browser renders the page in Standards Mode rather than Quirks Mode.',
          },
          {
            q: 'What is the difference between SVG and Canvas in HTML5?',
            a: 'SVG is vector-based (scalable without quality loss, DOM-accessible elements). Canvas is pixel/raster-based (rendered via JS context, ideal for high-performance games and heavy graphics).',
          },
        ],
      },
      {
        name: 'SEO & Storage',
        questions: [
          {
            q: 'What is the difference between localStorage, sessionStorage, and Cookies?',
            a: 'localStorage persists until manually cleared (5-10MB). sessionStorage lasts only while the tab is open (5MB). Cookies persist based on expiration date (4KB) and are sent with every HTTP request to the server.',
          },
          {
            q: 'What are HTML5 data-* attributes?',
            a: 'They allow storing custom private data directly on HTML elements (e.g. data-user-id="123"). They can be accessed in CSS via attr() or JS via element.dataset.',
          },
          {
            q: 'How does the alt attribute impact accessibility and SEO?',
            a: 'alt provides descriptive text for screen readers (accessibility) and image search crawlers (SEO), and displays as fallback text if the image fails to load.',
          },
        ],
      },
    ],
  },
  {
    id: 'css',
    title: 'CSS Interview Questions',
    icon: '🎨',
    color: '#a855f7',
    categories: [
      {
        name: 'Flexbox vs Grid',
        questions: [
          {
            q: 'What is the difference between Flexbox and Grid?',
            a: 'Flexbox is one-dimensional — it handles layout in a single axis (row OR column). Grid is two-dimensional — it handles both rows AND columns simultaneously. Use Flexbox for simple alignments, Grid for complex layouts.',
          },
          {
            q: 'When should you use Flexbox?',
            a: 'Use Flexbox for: navigation bars, centering content, card rows, aligning items in a single direction, distributing space evenly.',
          },
          {
            q: 'When should you use Grid?',
            a: 'Use Grid for: page layouts, image galleries, dashboard grids, any layout needing precise row AND column control.',
          },
          {
            q: 'How do justify-content and align-items work in Flexbox?',
            a: 'justify-content aligns items along the main axis (horizontal by default). align-items aligns items along the cross axis (vertical by default).',
          },
        ],
      },
      {
        name: 'Position Properties',
        questions: [
          {
            q: 'Explain all CSS position values.',
            a: 'static: default, normal flow. relative: offset from normal position, still in flow. absolute: removed from flow, positioned relative to nearest positioned ancestor. fixed: positioned relative to viewport, stays on scroll. sticky: hybrid of relative and fixed — sticks when scrolled to threshold.',
          },
          {
            q: 'What is the difference between absolute and fixed?',
            a: 'absolute positions relative to the nearest positioned ancestor element. fixed positions relative to the browser viewport and stays in place during scrolling.',
          },
          {
            q: 'How does z-index work and what is a stacking context?',
            a: 'z-index controls vertical stacking order. A stacking context is formed by elements with specific properties (e.g. position with z-index, opacity < 1, transform). Child z-indexes are scoped inside their parent stacking context.',
          },
        ],
      },
      {
        name: 'Box Model & Display',
        questions: [
          {
            q: 'Explain the CSS Box Model.',
            a: 'Every element is a box with 4 layers: Content (actual content) → Padding (space between content and border) → Border (the border) → Margin (space outside the border). By default, width/height only set the content area.',
          },
          {
            q: 'What does box-sizing: border-box do?',
            a: 'It includes padding and border in the element\'s specified width/height. Without it (content-box), padding and border are added on top of the width, making elements larger than expected.',
          },
          {
            q: 'What is margin collapse?',
            a: 'When two vertical margins touch, they collapse into one — the larger margin wins. This only happens vertically, not horizontally. It doesn\'t happen with flexbox/grid items or floated elements.',
          },
          {
            q: 'What is the difference between display: none, visibility: hidden, and opacity: 0?',
            a: 'display: none removes the element completely from document flow. visibility: hidden hides it but reserves its space. opacity: 0 makes it transparent while still reserving space and remaining interactive.',
          },
        ],
      },
      {
        name: 'Units & Responsive Design',
        questions: [
          {
            q: 'What is the difference between px, em, rem, vw, and vh?',
            a: 'px is absolute. em is relative to the parent font size. rem is relative to the root (<html>) font size. vw/vh are relative to 1% of viewport width/height.',
          },
          {
            q: 'How do clamp(), min(), and max() work in CSS?',
            a: 'clamp(min, preferred, max) sets a responsive value that stays between min and max boundaries. min(a, b) selects the smaller value. max(a, b) selects the larger value.',
          },
          {
            q: 'How do you perfectly center a div horizontally and vertically?',
            a: 'Option 1: Flexbox — display: flex; justify-content: center; align-items: center;. Option 2: Grid — display: grid; place-items: center;. Option 3: Absolute — position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%).',
          },
        ],
      },
      {
        name: 'Specificity & Animations',
        questions: [
          {
            q: 'How does CSS specificity work?',
            a: 'Specificity determines which CSS rule wins when multiple rules target the same element. Scoring: Inline styles (1000) > ID selectors (100) > Class/attribute selectors (10) > Element selectors (1). Higher score wins.',
          },
          {
            q: 'What does !important do?',
            a: '!important overrides all other specificity rules. It should be used sparingly as it makes CSS harder to debug and maintain. Multiple !important rules are resolved by specificity.',
          },
          {
            q: 'What is the difference between CSS Transitions and CSS Keyframe Animations?',
            a: 'Transitions trigger smoothly between two states (e.g. hover). Keyframe animations (@keyframes) allow complex multi-step state changes that run automatically or loop indefinitely.',
          },
        ],
      },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript Interview Questions',
    icon: '⚡',
    color: '#eab308',
    categories: [
      {
        name: 'var vs let vs const & Scope',
        questions: [
          {
            q: 'What is the difference between var, let, and const?',
            a: 'var: function-scoped, hoisted, can be redeclared. let: block-scoped, not hoisted to usable state, can be reassigned. const: block-scoped, not hoisted to usable state, cannot be reassigned (but object properties can be mutated).',
          },
          {
            q: 'What is hoisting?',
            a: 'Hoisting moves variable and function declarations to the top of their scope during compilation. var is hoisted and initialized as undefined. let/const are hoisted but remain in a "temporal dead zone" until declared.',
          },
          {
            q: 'Can you modify properties of a const object?',
            a: 'Yes! const prevents reassignment of the variable binding, but the object itself is mutable. To make an object truly immutable, use Object.freeze().',
          },
          {
            q: 'What is Temporal Dead Zone (TDZ)?',
            a: 'TDZ is the period between entering a scope and the point where a let or const variable is declared. Accessing the variable during TDZ throws a ReferenceError.',
          },
        ],
      },
      {
        name: 'Functions & "this" Keyword',
        questions: [
          {
            q: 'How does the "this" keyword work in JavaScript?',
            a: 'The value of "this" depends on how a function is called: in a regular function, it refers to global/window (or undefined in strict mode); in a method, it refers to the object; in an arrow function, it lexically inherits "this" from its outer scope.',
          },
          {
            q: 'What is the difference between regular functions and arrow functions?',
            a: '1. Arrow functions do not have their own "this" binding. 2. Arrow functions cannot be used as constructors (no "new"). 3. Arrow functions do not have an "arguments" object.',
          },
          {
            q: 'What is the difference between call(), apply(), and bind()?',
            a: 'call() invokes the function immediately with explicit "this" and comma-separated arguments. apply() invokes it immediately with arguments as an array. bind() returns a new function with bound "this" to be executed later.',
          },
        ],
      },
      {
        name: 'Event Bubbling & Propagation',
        questions: [
          {
            q: 'What is event bubbling?',
            a: 'When an event occurs on an element, it first runs handlers on that element, then bubbles up to its parent, grandparent, and so on up to the document root. This is the default event propagation.',
          },
          {
            q: 'What is event capturing?',
            a: 'Capturing is the opposite of bubbling — events propagate from the root down to the target. You can listen in capture phase by passing { capture: true } as the third argument to addEventListener.',
          },
          {
            q: 'How do you stop event propagation?',
            a: 'Use event.stopPropagation() to prevent the event from bubbling up. Use event.preventDefault() to prevent the default browser action (like form submission or link navigation).',
          },
          {
            q: 'What is Event Delegation?',
            a: 'Event delegation is a pattern where a single event listener is attached to a parent element to manage events for all of its child elements (present and future), leveraging event bubbling.',
          },
        ],
      },
      {
        name: 'Closures & Scope',
        questions: [
          {
            q: 'What is a closure?',
            a: 'A closure is a function that has access to variables from its outer (enclosing) scope even after the outer function has returned. The inner function "closes over" the outer variables.',
          },
          {
            q: 'Give a practical example of closure.',
            a: 'A counter function: function makeCounter() { let count = 0; return function() { return ++count; }; } — the returned function remembers and accesses "count" even after makeCounter finishes.',
          },
          {
            q: 'Why are closures useful?',
            a: 'Closures enable data privacy (encapsulation), factory functions, callbacks that remember state, and module patterns. They are fundamental to JavaScript\'s function-scoped architecture.',
          },
        ],
      },
      {
        name: 'Async JavaScript & Event Loop',
        questions: [
          {
            q: 'What are Promises?',
            a: 'A Promise represents the eventual completion (or failure) of an asynchronous operation. It has three states: pending, fulfilled, and rejected. You chain .then() for success and .catch() for errors.',
          },
          {
            q: 'What is async/await?',
            a: 'async/await is syntactic sugar over Promises. An async function returns a Promise. await pauses execution until the Promise resolves, making async code read like synchronous code.',
          },
          {
            q: 'What is the event loop?',
            a: 'The event loop continuously checks the call stack and message queue. When the stack is empty, it picks the next task from the queue and pushes it onto the stack. This enables JavaScript\'s non-blocking, single-threaded concurrency.',
          },
          {
            q: 'What is the difference between Microtasks and Macrotasks?',
            a: 'Microtasks (Promises, process.nextTick, queueMicrotask) have higher priority and execute immediately after the current script finishes before rendering. Macrotasks (setTimeout, setInterval, I/O) execute in subsequent iterations of the event loop.',
          },
        ],
      },
      {
        name: 'ES6+ Features & Objects',
        questions: [
          {
            q: 'What is the difference between shallow copy and deep copy?',
            a: 'A shallow copy (Object.assign, spread operator) copies top-level properties but copies references for nested objects. A deep copy (structuredClone, JSON.parse(JSON.stringify)) recursively copies all nested objects.',
          },
          {
            q: 'What is the difference between Spread and Rest operators (...)?',
            a: 'Spread expands an array or object into individual elements/properties. Rest collects multiple arguments or remaining properties into a single array/object parameter.',
          },
          {
            q: 'What is optional chaining (?.) and nullish coalescing (??)?',
            a: 'Optional chaining (a?.b) safely reads nested properties without throwing error if a reference is nullish (null/undefined). Nullish coalescing (a ?? b) returns b only if a is null or undefined (unlike || which checks all falsy values).',
          },
          {
            q: 'What is Debouncing vs Throttling?',
            a: 'Debouncing delays function execution until a specified time has elapsed since the last call (e.g. search input). Throttling limits function execution to once per specified time interval (e.g. scroll event).',
          },
        ],
      },
    ],
  },
  {
    id: 'react',
    title: 'React Interview Questions',
    icon: '⚛️',
    color: '#06b6d4',
    comingSoon: true,
    categories: [
      {
        name: 'Props vs State',
        questions: [
          {
            q: 'What is the difference between Props and State?',
            a: 'Props are passed from parent to child (read-only, cannot be modified by child). State is internal to a component (managed and updated within the component using useState). Props flow down, events flow up.',
          },
          {
            q: 'When should you use props vs state?',
            a: 'Use props for configuration and data passed from parents. Use state for data that changes over time within a component (form inputs, toggles, API responses).',
          },
        ],
      },
      {
        name: 'Virtual DOM',
        questions: [
          {
            q: 'What is the Virtual DOM?',
            a: 'The Virtual DOM is a lightweight JavaScript representation of the real DOM. React creates a virtual copy, compares it with the previous version (diffing), and only updates the changed parts in the real DOM (reconciliation).',
          },
          {
            q: 'Why is the Virtual DOM faster?',
            a: 'Direct DOM manipulation is slow. The Virtual DOM batches changes and minimizes actual DOM updates through efficient diffing algorithms, resulting in better performance.',
          },
        ],
      },
      {
        name: 'Hooks',
        questions: [
          {
            q: 'What are React Hooks?',
            a: 'Hooks are functions that let you use state and lifecycle features in functional components. Common hooks: useState (state), useEffect (side effects), useContext (context), useRef (DOM refs), useMemo (memoization).',
          },
          {
            q: 'What are the Rules of Hooks?',
            a: '1. Only call Hooks at the top level (not inside loops, conditions, or nested functions). 2. Only call Hooks from React functional components or custom Hooks.',
          },
        ],
      },
    ],
  },
];

export default interviewData;
