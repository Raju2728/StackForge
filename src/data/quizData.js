/**
 * quizData.js
 * Quiz questions organized by module (HTML, CSS, JS).
 * Each question: question text, 4 options, correct answer index, explanation.
 */

const quizData = {
  html: {
    title: 'HTML Fundamentals Quiz',
    icon: '🧱',
    color: '#6366f1',
    questions: [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Trainer Marking Language', 'HyperText Markup Language', 'HyperText Marketing Language', 'High Text Markup Language'],
        correct: 1,
        explanation: 'HTML stands for HyperText Markup Language. It is the standard markup language used to create web pages.',
      },
      {
        question: 'Which tag is used to create hyperlinks?',
        options: ['<link>', '<href>', '<a>', '<url>'],
        correct: 2,
        explanation: 'The <a> (anchor) tag is used to create hyperlinks in HTML. The href attribute specifies the URL destination.',
      },
      {
        question: 'What is the correct HTML element for the largest heading?',
        options: ['<heading>', '<h6>', '<head>', '<h1>'],
        correct: 3,
        explanation: '<h1> is the largest heading element. HTML headings range from <h1> (largest) to <h6> (smallest).',
      },
      {
        question: 'Which HTML attribute specifies an alternate text for an image?',
        options: ['title', 'src', 'alt', 'longdesc'],
        correct: 2,
        explanation: 'The alt attribute provides alternative text for an image, which is important for accessibility and when images fail to load.',
      },
      {
        question: 'What is the purpose of the <!DOCTYPE html> declaration?',
        options: ['It links a CSS file', 'It defines the document type and HTML version', 'It creates a heading', 'It imports JavaScript'],
        correct: 1,
        explanation: '<!DOCTYPE html> tells the browser which version of HTML the page is using. It ensures the browser renders in Standards Mode.',
      },
      {
        question: 'Which element is used to define the body of an HTML document?',
        options: ['<head>', '<body>', '<main>', '<section>'],
        correct: 1,
        explanation: 'The <body> element contains all visible content on the webpage — text, images, links, tables, forms, etc.',
      },
      {
        question: 'Which tag creates a line break in HTML?',
        options: ['<break>', '<lb>', '<br>', '<newline>'],
        correct: 2,
        explanation: '<br> is a self-closing tag that creates a single line break. It does not need a closing tag.',
      },
      {
        question: 'What is the difference between <div> and <section>?',
        options: ['They are exactly the same', '<div> is semantic, <section> is not', '<section> is semantic, <div> is not', '<div> is deprecated'],
        correct: 2,
        explanation: '<section> is a semantic element for grouping thematic content. <div> is a generic non-semantic container used for styling.',
      },
      {
        question: 'Which input type creates a checkbox?',
        options: ['<input type="check">', '<input type="checkbox">', '<input type="tick">', '<checkbox>'],
        correct: 1,
        explanation: '<input type="checkbox"> creates a checkbox input that allows users to select one or more options.',
      },
      {
        question: 'How many <h1> tags should ideally be on a single page?',
        options: ['As many as needed', 'Exactly one', 'At least three', 'None'],
        correct: 1,
        explanation: 'Best practice is to use exactly one <h1> per page. It represents the main topic and is important for SEO and accessibility.',
      },
    ],
  },
  css: {
    title: 'CSS Styling Quiz',
    icon: '🎨',
    color: '#a855f7',
    questions: [
      {
        question: 'What does CSS stand for?',
        options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'],
        correct: 1,
        explanation: 'CSS stands for Cascading Style Sheets. "Cascading" refers to the priority system CSS uses to resolve conflicting styles.',
      },
      {
        question: 'Which property is used to change text color?',
        options: ['text-color', 'font-color', 'color', 'foreground-color'],
        correct: 2,
        explanation: 'The "color" property sets the text color. Despite its simple name, it specifically controls foreground text color.',
      },
      {
        question: 'What is the default position value of an HTML element?',
        options: ['relative', 'absolute', 'static', 'fixed'],
        correct: 2,
        explanation: 'The default position value is "static". Elements flow in normal document order unless positioned differently.',
      },
      {
        question: 'Which CSS property creates space between an element\'s border and content?',
        options: ['margin', 'spacing', 'padding', 'gap'],
        correct: 2,
        explanation: 'Padding creates space between the content and the border (inside). Margin creates space outside the border.',
      },
      {
        question: 'Which display value makes an element a flex container?',
        options: ['display: block', 'display: flex', 'display: grid', 'display: flexbox'],
        correct: 1,
        explanation: 'display: flex makes an element a flex container. Its direct children become flex items that can be aligned and distributed.',
      },
      {
        question: 'What does z-index control?',
        options: ['Horizontal position', 'Vertical position', 'Stacking order', 'Zoom level'],
        correct: 2,
        explanation: 'z-index controls the stacking order of positioned elements. Higher z-index values appear in front of lower ones.',
      },
      {
        question: 'Which CSS selector has the highest specificity?',
        options: ['Element selector', 'Class selector', 'ID selector', 'Inline style'],
        correct: 3,
        explanation: 'Inline styles have the highest specificity (1000), followed by ID selectors (100), class selectors (10), and element selectors (1).',
      },
      {
        question: 'What does "box-sizing: border-box" do?',
        options: ['Adds borders to all elements', 'Includes padding and border in the element\'s total width/height', 'Creates a box shadow', 'Removes the box model'],
        correct: 1,
        explanation: 'border-box includes padding and border in the element\'s specified width and height, making sizing more predictable.',
      },
      {
        question: 'Which property is used for responsive design media queries?',
        options: ['@media', '@responsive', '@screen', '@device'],
        correct: 0,
        explanation: '@media queries allow you to apply CSS rules based on device characteristics like screen width, enabling responsive design.',
      },
      {
        question: 'What is the difference between Flexbox and Grid?',
        options: ['They are the same', 'Flexbox is 1D (row or column), Grid is 2D (rows and columns)', 'Grid is older than Flexbox', 'Flexbox is deprecated'],
        correct: 1,
        explanation: 'Flexbox is one-dimensional (lays out items in a row OR column). Grid is two-dimensional (handles rows AND columns simultaneously).',
      },
    ],
  },
  javascript: {
    title: 'JavaScript Programming Quiz',
    icon: '⚡',
    color: '#eab308',
    questions: [
      {
        question: 'What is the difference between let and var?',
        options: ['They are identical', 'let is block-scoped, var is function-scoped', 'var is block-scoped, let is function-scoped', 'let is slower than var'],
        correct: 1,
        explanation: 'let is block-scoped (limited to nearest {}) while var is function-scoped. let also cannot be redeclared in the same scope.',
      },
      {
        question: 'What does typeof null return?',
        options: ['"null"', '"undefined"', '"object"', '"boolean"'],
        correct: 2,
        explanation: 'typeof null returns "object". This is a historical bug in JavaScript from its first implementation that remains for backward compatibility.',
      },
      {
        question: 'Which method converts a JSON string to a JavaScript object?',
        options: ['JSON.stringify()', 'JSON.parse()', 'JSON.toObject()', 'JSON.convert()'],
        correct: 1,
        explanation: 'JSON.parse() converts a JSON string into a JavaScript object. JSON.stringify() does the reverse.',
      },
      {
        question: 'What is the difference between == and ===?',
        options: ['No difference', '== checks type, === does not', '=== checks both value and type, == only checks value', '== is deprecated'],
        correct: 2,
        explanation: '=== (strict equality) compares both value AND type without coercion. == (loose equality) converts types before comparing.',
      },
      {
        question: 'Which array method adds an element to the end?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correct: 0,
        explanation: 'push() adds elements to the end of an array. pop() removes from end, unshift() adds to start, shift() removes from start.',
      },
      {
        question: 'What is a closure in JavaScript?',
        options: ['A way to close the browser', 'A function that has access to its outer scope even after the outer function returns', 'A method to end a loop', 'A type of error'],
        correct: 1,
        explanation: 'A closure is a function that remembers and can access variables from its outer (enclosing) scope, even after that outer function has finished executing.',
      },
      {
        question: 'What does the DOM stand for?',
        options: ['Document Object Model', 'Data Object Management', 'Digital Ordinance Map', 'Document Order Method'],
        correct: 0,
        explanation: 'DOM stands for Document Object Model. It represents the HTML document as a tree of objects that JavaScript can manipulate.',
      },
      {
        question: 'Which keyword prevents variable reassignment?',
        options: ['var', 'let', 'const', 'fixed'],
        correct: 2,
        explanation: 'const prevents reassignment of the variable binding. However, properties of const objects and elements of const arrays can still be modified.',
      },
      {
        question: 'What does fetch() return?',
        options: ['A string', 'An HTML element', 'A Promise', 'An array'],
        correct: 2,
        explanation: 'fetch() returns a Promise that resolves to a Response object. You use .then() or await to handle the response.',
      },
      {
        question: 'What is event bubbling?',
        options: ['Creating animated bubbles', 'Events propagate from target element up to the root', 'Events propagate from root down to target', 'A CSS animation technique'],
        correct: 1,
        explanation: 'Event bubbling means when an event occurs on an element, it first runs handlers on that element, then on its parent, and all the way up the DOM tree.',
      },
    ],
  },
};

export default quizData;
