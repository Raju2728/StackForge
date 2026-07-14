/**
 * htmlModules.js
 * Content for all 22 HTML learning modules.
 * Each module has: id, title, explanation, analogy, syntax, codeExample,
 * expectedOutput, notes, commonMistakes, practicePrompt.
 */

const htmlModules = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    explanation:
      'Web development is the process of building websites and web applications that people can access through a browser like Chrome, Firefox, or Edge. Every website you visit — Google, YouTube, Wikipedia — is built using web technologies. The three core technologies are HTML (structure), CSS (appearance), and JavaScript (behaviour). In this course, we start with HTML, the foundation of every webpage.',
    analogy:
      'Think of building a house. HTML is like the bricks, walls, and rooms — it creates the structure. CSS is the paint, curtains, and decorations — it makes things look good. JavaScript is the electricity, plumbing, and smart devices — it adds functionality and interactivity.',
    syntax: null,
    codeExample:
`<!-- This is a simple HTML page -->
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to web development.</p>
</body>
</html>`,
    expectedOutput: 'A webpage showing a heading "Hello, World!" and a paragraph "Welcome to web development."',
    notes: [
      'HTML stands for HyperText Markup Language.',
      'Every website uses HTML as its foundation.',
      'You only need a text editor and a browser to start coding HTML.',
      'HTML files use the .html file extension.',
    ],
    commonMistakes: [
      'Thinking HTML is a programming language — it is a markup language.',
      'Trying to add styles or behaviour using only HTML.',
      'Not saving files with the .html extension.',
    ],
    practicePrompt: 'Create a simple HTML page with a heading that says "My First Webpage" and a paragraph below it.',
  },
  {
    id: 2,
    title: 'How a Website Works',
    explanation:
      'When you type a website address (URL) in your browser and press Enter, several things happen behind the scenes. Your browser sends a request to a server (a powerful computer that stores website files). The server finds the requested files (HTML, CSS, JS, images) and sends them back. Your browser then reads these files and displays the webpage. This entire process happens in milliseconds!',
    analogy:
      'Imagine ordering food from a restaurant. You (the browser) place an order (type a URL). The waiter (the internet) carries your order to the kitchen (the server). The chef prepares the food (finds the files) and the waiter brings it back to you. Your browser then "serves" the webpage on your screen.',
    syntax: null,
    codeExample:
`<!-- The browser reads this file from the server -->
<!DOCTYPE html>
<html>
<head>
  <title>How Websites Work</title>
</head>
<body>
  <h1>Welcome!</h1>
  <p>This file was sent from a server to your browser.</p>
</body>
</html>`,
    expectedOutput: 'A heading saying "Welcome!" and a paragraph explaining the server-browser connection.',
    notes: [
      'URL stands for Uniform Resource Locator — it\'s the address of a webpage.',
      'HTTP/HTTPS is the protocol used to transfer web files.',
      'The server stores the website files and sends them when requested.',
      'The browser renders (displays) the HTML code as a visual webpage.',
    ],
    commonMistakes: [
      'Confusing a browser with a search engine — Chrome is a browser, Google is a search engine.',
      'Thinking websites are stored on your computer — they are on servers.',
      'Not understanding that the browser must download files before displaying them.',
    ],
    practicePrompt: 'Write an HTML page that explains in your own words how a website works, using headings and paragraphs.',
  },
  {
    id: 3,
    title: 'Browser and Server Workflow',
    explanation:
      'The communication between a browser and server follows a specific workflow: (1) User enters a URL, (2) Browser sends an HTTP request to the server, (3) Server processes the request, (4) Server sends back HTML, CSS, JS files as an HTTP response, (5) Browser parses HTML to build the page structure (DOM), (6) Browser applies CSS styles, (7) Browser executes JavaScript, (8) User sees the complete webpage. Understanding this workflow helps you know where your HTML code fits in the bigger picture.',
    analogy:
      'Think of mailing a letter. You write the address (URL), put it in the mailbox (send request), the postal service delivers it (internet), the recipient reads it and writes back (server processes), and the reply comes back to you (response). The browser is like a translator that converts the server\'s reply into something visual.',
    syntax: null,
    codeExample:
`<!-- Step 5: Browser parses this HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Browser Workflow</title>
</head>
<body>
  <h1>Browser-Server Workflow</h1>
  <ol>
    <li>User types URL</li>
    <li>Browser sends request</li>
    <li>Server sends response</li>
    <li>Browser renders the page</li>
  </ol>
</body>
</html>`,
    expectedOutput: 'A heading and a numbered list showing the browser-server workflow steps.',
    notes: [
      'DOM stands for Document Object Model — it\'s how the browser organizes HTML.',
      'The browser reads HTML from top to bottom.',
      'Each HTTP request-response cycle takes milliseconds.',
      'You can see network requests in browser DevTools (F12 > Network tab).',
    ],
    commonMistakes: [
      'Thinking the browser stores websites permanently — it only caches them temporarily.',
      'Ignoring the order of HTML parsing — it matters for page structure.',
      'Not knowing about browser Developer Tools for debugging.',
    ],
    practicePrompt: 'Create an HTML page with an ordered list describing the 4 main steps of how a browser loads a webpage.',
  },
  {
    id: 4,
    title: 'HTML Document Structure',
    explanation:
      'Every HTML document follows a standard structure. It starts with <!DOCTYPE html> which tells the browser this is an HTML5 document. Then comes the <html> tag which wraps everything. Inside it, there are two main sections: <head> (contains metadata like title, character set, and links to stylesheets) and <body> (contains everything visible on the page). This structure is like a blueprint that every webpage must follow.',
    analogy:
      'Think of an HTML document as a book. The <!DOCTYPE> is the book\'s cover type (hardcover/paperback). The <html> tag is the book itself. The <head> is the title page and table of contents (information about the book). The <body> is all the chapters and content you actually read.',
    syntax:
`<!DOCTYPE html>        → Declares HTML5 document type
<html lang="en">       → Root element, sets language
  <head>               → Metadata container
    <meta charset="">  → Character encoding
    <title>            → Page title (shown in browser tab)
  </head>
  <body>               → Visible content container
  </body>
</html>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Webpage</title>
</head>
<body>
  <h1>Hello, HTML!</h1>
  <p>This is a properly structured HTML document.</p>
</body>
</html>`,
    expectedOutput: 'A webpage with the title "My Webpage" in the browser tab, showing a heading and a paragraph.',
    notes: [
      '<!DOCTYPE html> must be the very first line — no spaces or text before it.',
      'The <html> tag should always include the lang attribute.',
      'The <meta viewport> tag is essential for mobile responsiveness.',
      'The <title> tag content appears in the browser tab, not on the page.',
    ],
    commonMistakes: [
      'Forgetting <!DOCTYPE html> — the page may render in quirks mode.',
      'Putting visible content inside <head> instead of <body>.',
      'Forgetting to close the </html> tag.',
      'Mixing up <title> (tab title) with <h1> (page heading).',
    ],
    practicePrompt: 'Create a complete HTML document structure with a title "My Learning Page" and an h1 heading inside the body.',
  },
  {
    id: 5,
    title: 'HTML Tags and Elements',
    explanation:
      'HTML uses "tags" to define elements on a page. A tag is written in angle brackets like <tagname>. Most tags come in pairs: an opening tag <p> and a closing tag </p>. The content between them is the "element." Some tags are self-closing, like <br> (line break) and <img> (image). Tags can also have "attributes" that provide extra information, like <a href="url"> where href is an attribute. Understanding tags is the key to writing HTML.',
    analogy:
      'Tags are like containers or boxes. The opening tag <p> opens a box, you put content inside (text, images), and the closing tag </p> closes the box. The box label tells the browser what kind of content is inside. Self-closing tags are like stickers — they don\'t need a separate closing because they contain no content.',
    syntax:
`<tagname>Content</tagname>     → Paired tag (opening + closing)
<tagname attribute="value">    → Tag with attribute
<tagname />                    → Self-closing tag
<!-- Comment -->                → HTML comment (not displayed)`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tags and Elements</title>
</head>
<body>
  <!-- This is a comment -->
  <h1>Understanding Tags</h1>
  <p>This is a paragraph element.</p>
  <a href="https://example.com">This is a link</a>
  <br>
  <img src="https://via.placeholder.com/200" alt="A placeholder image">
</body>
</html>`,
    expectedOutput: 'A page with a heading, paragraph, clickable link, line break, and an image.',
    notes: [
      'Tag names are case-insensitive but lowercase is the standard convention.',
      'Always close paired tags — unclosed tags can cause layout issues.',
      'Attributes provide additional information about elements.',
      'Comments are invisible to users but help developers understand code.',
    ],
    commonMistakes: [
      'Forgetting the closing tag </p> — causes content to merge.',
      'Misspelling tag names like <headin> instead of <heading>.',
      'Using wrong attribute names.',
      'Nesting tags incorrectly: <b><i>text</b></i> (wrong) vs <b><i>text</i></b> (correct).',
    ],
    practicePrompt: 'Create an HTML page that uses at least 5 different tags: h1, p, a, br, and img.',
  },
  {
    id: 6,
    title: 'Headings and Paragraphs',
    explanation:
      'Headings and paragraphs are the most basic building blocks of content on a webpage. HTML provides six levels of headings: <h1> (largest, most important) through <h6> (smallest, least important). The <p> tag creates paragraphs of text. Headings create a hierarchy — like a book has chapters (h1), sections (h2), and sub-sections (h3). Every page should have exactly one <h1>, which describes the main topic.',
    analogy:
      'Think of a newspaper. The biggest, boldest headline at the top is <h1>. Section headers are <h2>. Sub-headings within sections are <h3>, and so on. The regular body text between headings is <p> paragraphs.',
    syntax:
`<h1>Main Heading</h1>        → Largest, most important
<h2>Sub Heading</h2>          → Section heading
<h3>Sub-Sub Heading</h3>      → Sub-section heading
<h4>...</h4> to <h6>...</h6>  → Smaller headings
<p>Paragraph text</p>          → Regular text content`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Headings and Paragraphs</title>
</head>
<body>
  <h1>Web Development Guide</h1>
  <p>Learn how to build websites from scratch.</p>

  <h2>Chapter 1: HTML Basics</h2>
  <p>HTML is the foundation of every webpage.</p>

  <h3>What is a Tag?</h3>
  <p>A tag is a special keyword surrounded by angle brackets.</p>

  <h2>Chapter 2: CSS Styling</h2>
  <p>CSS makes your webpage look beautiful.</p>
</body>
</html>`,
    expectedOutput: 'A structured page with a main heading, two chapter headings, a sub-heading, and paragraphs.',
    notes: [
      'Use only one <h1> per page for better SEO and accessibility.',
      'Don\'t skip heading levels — go from h1 to h2, not h1 to h3.',
      'Browsers add default margins around headings and paragraphs.',
      'Headings are important for screen readers and search engines.',
    ],
    commonMistakes: [
      'Using headings just for making text big — use CSS for that instead.',
      'Having multiple <h1> tags on one page.',
      'Skipping heading levels (h1 then h4).',
      'Not using paragraphs for body text.',
    ],
    practicePrompt: 'Create a page with an h1, two h2 sections, each with an h3 sub-section and paragraphs.',
  },
  {
    id: 7,
    title: 'Text Formatting',
    explanation:
      'HTML provides several tags to format text and give it meaning. <b> or <strong> makes text bold (strong uses semantic meaning — "important"). <i> or <em> makes text italic (em means "emphasized"). Other useful tags include: <u> for underline, <s> for strikethrough, <mark> for highlighted text, <small> for smaller text, <sub> for subscript, <sup> for superscript, and <blockquote> for quotations. These tags help add emphasis and structure to your content.',
    analogy:
      'Text formatting in HTML is like using a highlighter, bold pen, or underline in your notebook. Each tool serves a purpose — bold for important points, italics for emphasis, highlights for key concepts.',
    syntax:
`<strong>Bold (important)</strong>
<em>Italic (emphasis)</em>
<u>Underlined</u>
<s>Strikethrough</s>
<mark>Highlighted</mark>
<small>Small text</small>
<sub>Subscript</sub>
<sup>Superscript</sup>
<blockquote>Quote</blockquote>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Text Formatting</title>
</head>
<body>
  <h1>Text Formatting in HTML</h1>
  <p><strong>This text is bold</strong> and <em>this is italic</em>.</p>
  <p>Water formula: H<sub>2</sub>O</p>
  <p>Einstein's equation: E = mc<sup>2</sup></p>
  <p><mark>This text is highlighted</mark></p>
  <p><s>This text is crossed out</s></p>
  <blockquote>"The only way to learn programming is by programming." — Dennis Ritchie</blockquote>
  <p><small>This is small print text.</small></p>
</body>
</html>`,
    expectedOutput: 'A page demonstrating bold, italic, subscript, superscript, highlighted, strikethrough, quote, and small text.',
    notes: [
      'Prefer <strong> over <b> and <em> over <i> for better accessibility.',
      '<mark> adds a yellow highlight background by default.',
      '<blockquote> is for longer quotations and is displayed indented.',
      'These tags add meaning (semantics) — screen readers use them.',
    ],
    commonMistakes: [
      'Using <b> when <strong> is more appropriate semantically.',
      'Overusing text formatting — it reduces readability.',
      'Using <u> for non-link text (users might confuse it with a link).',
      'Forgetting closing tags for formatting elements.',
    ],
    practicePrompt: 'Create a page that demonstrates at least 6 different text formatting tags with example text.',
  },
  {
    id: 8,
    title: 'Links',
    explanation:
      'Links (hyperlinks) connect one page to another. They are created using the <a> (anchor) tag with the href attribute specifying the destination URL. Links can point to other websites (external), other pages on your site (internal), sections on the same page (anchors with #id), email addresses (mailto:), or phone numbers (tel:). The target="_blank" attribute opens links in a new tab.',
    analogy:
      'Links are like doors in a building. Each door (link) takes you to a different room (page). Some doors lead to rooms in the same building (internal links), while others lead outside to different buildings (external links). An anchor link is like an elevator that takes you to a specific floor within the same building.',
    syntax:
`<a href="url">Link Text</a>                    → Basic link
<a href="url" target="_blank">New Tab</a>       → Opens in new tab
<a href="#section-id">Jump to Section</a>        → Anchor link
<a href="mailto:email@example.com">Email</a>    → Email link
<a href="page.html">Internal Page</a>           → Internal link`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Links</title>
</head>
<body>
  <h1>Understanding Links</h1>
  
  <h2>External Links</h2>
  <p><a href="https://www.google.com" target="_blank">Visit Google</a></p>
  
  <h2>Anchor Links</h2>
  <p><a href="#contact">Jump to Contact Section</a></p>
  
  <h2>Email Link</h2>
  <p><a href="mailto:student@example.com">Send Email</a></p>
  
  <br><br><br><br><br><br><br><br><br><br>
  
  <h2 id="contact">Contact Section</h2>
  <p>You jumped here using an anchor link!</p>
</body>
</html>`,
    expectedOutput: 'A page with clickable external, anchor, and email links.',
    notes: [
      'Always use descriptive link text — avoid "click here."',
      'Use target="_blank" with rel="noopener noreferrer" for security.',
      'Anchor links require matching id attributes on target elements.',
      'Links are blue and underlined by default in most browsers.',
    ],
    commonMistakes: [
      'Forgetting the href attribute — the link won\'t work.',
      'Using # alone as href — it scrolls to the top of the page.',
      'Not matching the anchor id correctly (case-sensitive).',
      'Using non-descriptive text like "click here" for links.',
    ],
    practicePrompt: 'Create a page with 3 links: one external link, one anchor link, and one email link.',
  },
  {
    id: 9,
    title: 'Images',
    explanation:
      'Images make webpages visual and engaging. The <img> tag is self-closing and requires two important attributes: src (the image source/path) and alt (alternative text for accessibility). The src can be a URL or a local file path. The alt text is read by screen readers and shown if the image fails to load. You can also set width and height attributes to control image size.',
    analogy:
      'The <img> tag is like putting a photo in a picture frame on your wall. The src tells the browser where to find the photo (like the address of the photo shop). The alt text is like a caption underneath describing the photo for someone who can\'t see it.',
    syntax:
`<img src="image-url" alt="Description">              → Basic image
<img src="photo.jpg" alt="Description"
     width="300" height="200">                        → With dimensions
<img src="images/logo.png" alt="Logo">                → Local file path`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Images</title>
</head>
<body>
  <h1>Working with Images</h1>
  
  <h2>Image from URL</h2>
  <img src="https://via.placeholder.com/400x200" 
       alt="A placeholder image"
       width="400" height="200">
  
  <h2>Small Image</h2>
  <img src="https://via.placeholder.com/150" 
       alt="A small square placeholder">
  
  <p>Images make webpages more interesting!</p>
</body>
</html>`,
    expectedOutput: 'A page with two placeholder images of different sizes and descriptive headings.',
    notes: [
      'Always include the alt attribute — it\'s essential for accessibility.',
      'Common image formats: JPG, PNG, GIF, SVG, WebP.',
      'Use relative paths for images in your project folder.',
      'Large images slow down page loading — optimize them.',
    ],
    commonMistakes: [
      'Forgetting the alt attribute — bad for accessibility and SEO.',
      'Wrong file path in src — image won\'t display.',
      'Not specifying width/height — can cause layout shifts.',
      'Using very large image files — slows page loading.',
    ],
    practicePrompt: 'Create an HTML page that displays 2 images with proper alt text and different sizes.',
  },
  {
    id: 10,
    title: 'Lists',
    explanation:
      'HTML provides three types of lists: Ordered lists <ol> (numbered), Unordered lists <ul> (bulleted), and Description lists <dl> (term-definition pairs). Each list item is wrapped in <li> (list item). Lists can be nested — you can put a list inside another list. Lists are perfect for navigation menus, step-by-step instructions, feature lists, and more.',
    analogy:
      'Think of making a shopping list (unordered — no specific order needed) vs. writing step-by-step cooking instructions (ordered — sequence matters). Description lists are like a glossary in a textbook — each term has its definition.',
    syntax:
`<ul>                    → Unordered (bulleted) list
  <li>Item</li>
</ul>

<ol>                    → Ordered (numbered) list
  <li>Step 1</li>
</ol>

<dl>                    → Description list
  <dt>Term</dt>
  <dd>Definition</dd>
</dl>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Lists</title>
</head>
<body>
  <h1>Types of Lists</h1>
  
  <h2>Shopping List (Unordered)</h2>
  <ul>
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
  </ul>
  
  <h2>Recipe Steps (Ordered)</h2>
  <ol>
    <li>Preheat the oven</li>
    <li>Mix the ingredients</li>
    <li>Bake for 30 minutes</li>
  </ol>
  
  <h2>Web Technologies (Description)</h2>
  <dl>
    <dt>HTML</dt>
    <dd>Creates the structure of a webpage</dd>
    <dt>CSS</dt>
    <dd>Styles the appearance of a webpage</dd>
  </dl>
</body>
</html>`,
    expectedOutput: 'A page with three types of lists: bulleted, numbered, and description list.',
    notes: [
      'Lists can be nested to create sub-items.',
      '<ul> uses bullets; <ol> uses numbers by default.',
      'Lists are commonly used for navigation menus.',
      'You can change the list style using CSS.',
    ],
    commonMistakes: [
      'Putting content directly in <ul> or <ol> without <li> tags.',
      'Forgetting to close <li> tags.',
      'Not nesting lists properly.',
      'Using <br> tags instead of list items for lists.',
    ],
    practicePrompt: 'Create a page with an unordered list of 5 fruits and an ordered list of 5 steps to make tea.',
  },
  {
    id: 11,
    title: 'Tables',
    explanation:
      'Tables display data in rows and columns. The <table> tag creates a table. Inside it, <tr> creates a row, <th> creates a header cell (bold and centered), and <td> creates a regular data cell. You can add <thead>, <tbody>, and <tfoot> to organize table sections. The <caption> tag adds a title above the table. Tables should be used for tabular data — not for page layout.',
    analogy:
      'An HTML table is like a spreadsheet (Excel/Google Sheets). Each row (<tr>) is a row in the sheet. Each cell (<td>) is a cell in the sheet. Header cells (<th>) are like column headers at the top of the spreadsheet.',
    syntax:
`<table>
  <caption>Table Title</caption>
  <thead>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Tables</title>
</head>
<body>
  <h1>Student Grades</h1>
  <table border="1" cellpadding="10" cellspacing="0">
    <caption>Semester Results</caption>
    <thead>
      <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice</td>
        <td>Mathematics</td>
        <td>A</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>Science</td>
        <td>B+</td>
      </tr>
      <tr>
        <td>Charlie</td>
        <td>English</td>
        <td>A-</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
    expectedOutput: 'A table with a caption "Semester Results" showing 3 students with their subjects and grades.',
    notes: [
      'Use tables only for tabular data — not for page layouts.',
      '<th> is automatically bold and centered by browsers.',
      'Use colspan and rowspan to merge cells.',
      'The border attribute is used here for simplicity; use CSS in real projects.',
    ],
    commonMistakes: [
      'Using tables for page layout instead of CSS Grid or Flexbox.',
      'Forgetting <tr> and putting <td> directly inside <table>.',
      'Not using <th> for header cells.',
      'Inconsistent number of cells across rows.',
    ],
    practicePrompt: 'Create a table showing a class timetable with 5 days and 4 time slots.',
  },
  {
    id: 12,
    title: 'Forms',
    explanation:
      'Forms allow users to input and submit data to a website. The <form> tag wraps form elements. Common form elements include: <input> (text, email, password, number, checkbox, radio), <textarea> (multi-line text), <select> (dropdown), <button> (submit/reset), and <label> (describes an input). The type attribute on <input> changes its behaviour. Forms are essential for login pages, registration, contact forms, and search bars.',
    analogy:
      'A form is like a paper application form you fill out. Each field (name, email, password) is an <input>. The "Submit" button at the bottom sends the form. Labels next to each field tell you what to write.',
    syntax:
`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Forms</title>
</head>
<body>
  <h1>Registration Form</h1>
  <form>
    <p>
      <label for="fullname">Full Name:</label><br>
      <input type="text" id="fullname" name="fullname" placeholder="Enter your name" required>
    </p>
    <p>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" placeholder="Enter your email" required>
    </p>
    <p>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" placeholder="Create a password" required>
    </p>
    <p>
      <label>Gender:</label><br>
      <input type="radio" name="gender" value="male" id="male">
      <label for="male">Male</label>
      <input type="radio" name="gender" value="female" id="female">
      <label for="female">Female</label>
    </p>
    <p>
      <label for="course">Course:</label><br>
      <select id="course" name="course">
        <option value="">Select Course</option>
        <option value="bca">BCA</option>
        <option value="bsc">B.Sc IT</option>
        <option value="mca">MCA</option>
      </select>
    </p>
    <p>
      <input type="checkbox" id="agree" name="agree">
      <label for="agree">I agree to the terms</label>
    </p>
    <p>
      <button type="submit">Register</button>
      <button type="reset">Reset</button>
    </p>
  </form>
</body>
</html>`,
    expectedOutput: 'A registration form with fields for name, email, password, gender, course dropdown, checkbox, and buttons.',
    notes: [
      'Always use <label> with the for attribute matching the input\'s id.',
      'The required attribute makes a field mandatory.',
      'type="email" provides built-in email validation.',
      'Radio buttons with the same name are grouped together.',
    ],
    commonMistakes: [
      'Not linking <label> to <input> with for/id.',
      'Forgetting the name attribute — form data won\'t be sent.',
      'Using the same name for different radio button groups.',
      'Not using placeholder text to guide users.',
    ],
    practicePrompt: 'Create a contact form with fields for name, email, message (textarea), and a submit button.',
  },
  {
    id: 13,
    title: 'Semantic HTML',
    explanation:
      'Semantic HTML uses tags that clearly describe the meaning of the content, not just how it looks. Tags like <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer> tell the browser (and search engines) what each part of the page represents. This improves accessibility (screen readers understand the structure), SEO (search engines rank content better), and code readability. Compare this to using only <div> tags — which tell nothing about the content\'s purpose.',
    analogy:
      'Imagine labelling boxes when moving. A box labelled "Kitchen Items" (semantic) is much more helpful than one labelled "Box #7" (non-semantic). Semantic HTML labels your content so everyone — browsers, search engines, and assistive technologies — understands what\'s inside.',
    syntax:
`<header>   → Page or section header
<nav>      → Navigation links
<main>     → Main content of the page (only one per page)
<section>  → Thematic grouping of content
<article>  → Self-contained content (blog post, news article)
<aside>    → Side content (sidebar, related links)
<footer>   → Page or section footer
<figure>   → Image with caption
<figcaption> → Caption for figure`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML</title>
</head>
<body>
  <header>
    <h1>My Blog</h1>
    <nav>
      <a href="#home">Home</a> |
      <a href="#about">About</a> |
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <article>
      <h2>Understanding Semantic HTML</h2>
      <p>Semantic tags describe the purpose of content.</p>
    </article>

    <aside>
      <h3>Related Topics</h3>
      <ul>
        <li>HTML5 Features</li>
        <li>Accessibility</li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 My Blog. All rights reserved.</p>
  </footer>
</body>
</html>`,
    expectedOutput: 'A structured blog page with a header, navigation, main article, sidebar, and footer.',
    notes: [
      'Semantic HTML is an HTML5 feature — all modern browsers support it.',
      'Use <main> only once per page.',
      'Semantic tags improve SEO ranking significantly.',
      'Screen readers use semantic tags to navigate the page.',
    ],
    commonMistakes: [
      'Using <div> for everything instead of semantic tags.',
      'Using <section> without a heading inside it.',
      'Having multiple <main> elements on one page.',
      'Confusing <section> with <div> — section groups related content.',
    ],
    practicePrompt: 'Rewrite a page using semantic HTML tags: header, nav, main, section, article, aside, and footer.',
  },
  {
    id: 14,
    title: 'Header Section',
    explanation:
      'The <header> element represents the introductory content at the top of a webpage or a section. It typically contains the website logo, site title, and sometimes a navigation bar or a tagline. The header is the first thing users see, so it should clearly identify the website. A page can have multiple <header> elements — one for the page and one for each section — but the main page header appears at the top.',
    analogy:
      'The header is like the front entrance of a building. It has the building name (logo), a welcome sign (title), and a directory board (navigation). It tells visitors where they are and where they can go.',
    syntax:
`<header>
  <img src="logo.png" alt="Logo">  → Website logo
  <h1>Website Name</h1>             → Site title
  <p>Tagline or description</p>     → Optional tagline
</header>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Header Section</title>
</head>
<body>
  <header>
    <h1>🎓 StackLearner</h1>
    <p>Learn Web Development Step by Step</p>
  </header>

  <main>
    <p>The header above identifies the website. It contains the logo and tagline.</p>
    <p>Headers set the tone and identity of your website.</p>
  </main>
</body>
</html>`,
    expectedOutput: 'A page with a header containing a title and tagline, followed by main content.',
    notes: [
      '<header> is semantic — it tells browsers this is introductory content.',
      'Keep the header clean and simple — don\'t overload it.',
      'The header usually stays consistent across all pages.',
      'Mobile headers should be compact and responsive.',
    ],
    commonMistakes: [
      'Confusing <header> with <head> — they are completely different.',
      'Putting too much content in the header.',
      'Not making the header responsive for mobile screens.',
      'Forgetting the alt attribute on the logo image.',
    ],
    practicePrompt: 'Create a header section with a website name, a tagline, and a simple logo (use an emoji or text).',
  },
  {
    id: 15,
    title: 'Navigation Section',
    explanation:
      'The <nav> element contains the main navigation links for a website. It helps users move between pages or sections. Navigation typically includes links to Home, About, Services, Contact, etc. The nav element can be placed inside the header or as a standalone element. Good navigation is crucial for user experience — users should always know where they are and where they can go.',
    analogy:
      'Navigation is like a table of contents in a book or a directory in a shopping mall. It lists all the places you can go and lets you jump directly to any destination.',
    syntax:
`<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Navigation Section</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <a href="#home">Home</a> |
      <a href="#about">About</a> |
      <a href="#services">Services</a> |
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="home">
      <h2>Home</h2>
      <p>Welcome to our website.</p>
    </section>
    <section id="about">
      <h2>About</h2>
      <p>We are a learning platform.</p>
    </section>
    <section id="services">
      <h2>Services</h2>
      <p>We offer web development courses.</p>
    </section>
    <section id="contact">
      <h2>Contact</h2>
      <p>Email us at hello@example.com</p>
    </section>
  </main>
</body>
</html>`,
    expectedOutput: 'A page with a navigation bar containing 4 links that jump to different sections.',
    notes: [
      'Use <nav> only for main navigation — not for every group of links.',
      'Navigation links should use <a> tags with descriptive text.',
      'Using <ul> with <li> inside <nav> is a best practice.',
      'Active page link should be visually highlighted (done with CSS).',
    ],
    commonMistakes: [
      'Not using the <nav> element for navigation links.',
      'Creating navigation with <div> instead of <nav>.',
      'Having broken or empty href attributes.',
      'Not making navigation accessible to keyboard users.',
    ],
    practicePrompt: 'Create a navigation section with a list of 5 links: Home, About, Courses, Blog, Contact.',
  },
  {
    id: 16,
    title: 'Hero Section',
    explanation:
      'The hero section is the large, prominent area at the top of a webpage (below the header/nav). It\'s the first content users see and should immediately communicate what the website is about. A hero section typically contains a large heading, a short description, and a call-to-action button. It\'s designed to grab attention and encourage users to explore further. In HTML, it\'s usually built with a <section> or <div> element.',
    analogy:
      'The hero section is like a movie poster or a billboard. It\'s big, bold, and instantly tells you what the movie (website) is about. The call-to-action button is like the "Book Tickets" button — it encourages you to take the next step.',
    syntax:
`<section class="hero">
  <h1>Main Headline</h1>
  <p>Supporting description text</p>
  <a href="#start">Get Started</a>    → Call-to-action
</section>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hero Section</title>
</head>
<body>
  <header>
    <h2>StackLearner</h2>
  </header>

  <section id="hero">
    <h1>Learn Web Development the Easy Way</h1>
    <p>Master HTML, CSS, and JavaScript with interactive lessons and hands-on projects. Start your coding journey today!</p>
    <a href="#courses">Start Learning</a>
    <a href="#about">Learn More</a>
  </section>

  <section id="courses">
    <h2>Our Courses</h2>
    <p>HTML, CSS, JavaScript and more...</p>
  </section>
</body>
</html>`,
    expectedOutput: 'A page with a prominent hero section containing a headline, description, and two call-to-action links.',
    notes: [
      'The hero section should be visually impactful (CSS will help with that).',
      'Keep the heading short and clear.',
      'Include 1-2 call-to-action buttons maximum.',
      'The hero section sets the first impression of your website.',
    ],
    commonMistakes: [
      'Making the hero section too text-heavy.',
      'Having no clear call-to-action.',
      'Using vague headings like "Welcome" without context.',
      'Not making the hero section responsive for mobile.',
    ],
    practicePrompt: 'Create a hero section with a catchy heading, a short description, and a "Get Started" button.',
  },
  {
    id: 17,
    title: 'Main Content Section',
    explanation:
      'The <main> element wraps the primary content of your webpage — the content that is unique to this page and not repeated across other pages (like header and footer). There should be only one <main> element per page. Inside <main>, you can use <section>, <article>, and other elements to organize content. The main content is what users come to your page for.',
    analogy:
      'If a webpage is a newspaper, the <main> element is the actual news articles — the core content. The header is the newspaper\'s logo and date, the footer is the fine print. But the main section is the actual stories you came to read.',
    syntax:
`<main>
  <section>
    <h2>Section Title</h2>
    <p>Section content...</p>
  </section>
  <section>
    <h2>Another Section</h2>
    <p>More content...</p>
  </section>
</main>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Main Content</title>
</head>
<body>
  <header>
    <h1>Learning Platform</h1>
  </header>

  <main>
    <section>
      <h2>Latest Lessons</h2>
      <p>HTML Basics - Learn the building blocks of the web.</p>
      <p>CSS Styling - Make your websites beautiful.</p>
    </section>

    <section>
      <h2>Featured Projects</h2>
      <p>Portfolio Website - Build your first portfolio.</p>
      <p>Blog Template - Create a simple blog layout.</p>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Learning Platform</p>
  </footer>
</body>
</html>`,
    expectedOutput: 'A page with a header, two main content sections (lessons and projects), and a footer.',
    notes: [
      'Only one <main> element per page.',
      '<main> should not include header, footer, or nav.',
      'The content inside <main> should be unique to this page.',
      'Screen readers use <main> to skip directly to content.',
    ],
    commonMistakes: [
      'Having multiple <main> elements.',
      'Including the header or footer inside <main>.',
      'Not using <main> at all — affects accessibility.',
      'Putting sidebar content inside <main> (use <aside> instead).',
    ],
    practicePrompt: 'Create a page with a <main> element containing 3 different sections with headings and content.',
  },
  {
    id: 18,
    title: 'About Section',
    explanation:
      'The About section tells visitors about the website, organization, or person behind it. It typically includes a brief introduction, mission statement, team information, or company history. In HTML, it\'s created using a <section> with an id of "about". This section builds trust and helps users understand the purpose of the website.',
    analogy:
      'The About section is like the "About the Author" page in a book. It tells readers who created this, why they created it, and what their mission is. It builds a personal connection with the audience.',
    syntax:
`<section id="about">
  <h2>About Us</h2>
  <p>Description of who you are.</p>
  <p>Your mission and values.</p>
</section>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Section</title>
</head>
<body>
  <header>
    <h1>CodeCraft Academy</h1>
    <nav>
      <a href="#home">Home</a> |
      <a href="#about">About</a> |
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Us</h2>
      <p>CodeCraft Academy is an online learning platform dedicated to teaching web development to absolute beginners.</p>
      <p>Our mission is to make coding accessible, fun, and practical for everyone.</p>
      <h3>What We Offer</h3>
      <ul>
        <li>Interactive HTML lessons</li>
        <li>Hands-on coding exercises</li>
        <li>Real-world projects</li>
        <li>Supportive learning community</li>
      </ul>
    </section>
  </main>
</body>
</html>`,
    expectedOutput: 'A page with an About section containing a description, mission statement, and a list of offerings.',
    notes: [
      'Keep the About section concise and authentic.',
      'Use lists to highlight key features or values.',
      'Include team information if applicable.',
      'The About section improves SEO when it includes relevant keywords.',
    ],
    commonMistakes: [
      'Making the About section too long and boring.',
      'Not having an About section at all.',
      'Using generic filler text instead of real content.',
      'Forgetting to add an id for navigation links to work.',
    ],
    practicePrompt: 'Create an About section for a fictional coding school with a description, mission, and list of courses.',
  },
  {
    id: 19,
    title: 'Services Section',
    explanation:
      'The Services (or Features) section showcases what you offer. It typically displays services, products, or features in a structured, easy-to-scan layout. Each service usually has a title, brief description, and sometimes an icon or image. This section helps users quickly understand the value your website provides. In HTML, it\'s built using a <section> with service items organized in a list or grid.',
    analogy:
      'The Services section is like a restaurant menu. Each dish (service) has a name (title), a brief description (what it includes), and sometimes a photo (icon). Customers scan the menu to find what they want.',
    syntax:
`<section id="services">
  <h2>Our Services</h2>
  <div>
    <h3>Service Title</h3>
    <p>Service description</p>
  </div>
  <!-- More services... -->
</section>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Services Section</title>
</head>
<body>
  <section id="services">
    <h2>Our Services</h2>
    
    <div>
      <h3>🌐 Web Development</h3>
      <p>Build modern, responsive websites using HTML, CSS, and JavaScript.</p>
    </div>
    
    <div>
      <h3>📱 Mobile App Development</h3>
      <p>Create cross-platform mobile applications for iOS and Android.</p>
    </div>
    
    <div>
      <h3>🎨 UI/UX Design</h3>
      <p>Design beautiful, user-friendly interfaces that people love to use.</p>
    </div>
    
    <div>
      <h3>☁️ Cloud Solutions</h3>
      <p>Deploy and manage your applications on cloud platforms.</p>
    </div>
  </section>
</body>
</html>`,
    expectedOutput: 'A services section with 4 services, each with an emoji icon, title, and description.',
    notes: [
      'Keep service descriptions short and benefit-focused.',
      'Use consistent formatting for all service items.',
      'Emojis or icons help users quickly identify services.',
      'CSS Grid or Flexbox is used to create multi-column layouts.',
    ],
    commonMistakes: [
      'Writing too much text for each service.',
      'Inconsistent formatting across service items.',
      'Not highlighting the key benefit of each service.',
      'Using too many or too few services (3-6 is ideal).',
    ],
    practicePrompt: 'Create a Services section with 4 services for a web development company.',
  },
  {
    id: 20,
    title: 'Contact Section',
    explanation:
      'The Contact section provides ways for users to reach you. It typically includes a contact form, email address, phone number, physical address, and links to social media. A contact form collects user inquiries directly on the website. This section is essential for businesses, portfolios, and service websites — it\'s how potential clients or users communicate with you.',
    analogy:
      'The Contact section is like a reception desk in an office. It has a phone (phone number), a mailbox (email), a feedback form (contact form), and directions (address). Everything a visitor needs to get in touch.',
    syntax:
`<section id="contact">
  <h2>Contact Us</h2>
  <form>
    <input type="text" placeholder="Name">
    <input type="email" placeholder="Email">
    <textarea placeholder="Message"></textarea>
    <button type="submit">Send</button>
  </form>
  <p>Email: contact@example.com</p>
</section>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Contact Section</title>
</head>
<body>
  <section id="contact">
    <h2>Get in Touch</h2>
    <p>Have questions? Fill out the form below or reach us directly.</p>
    
    <form>
      <p>
        <label for="name">Your Name:</label><br>
        <input type="text" id="name" name="name" placeholder="John Doe" required>
      </p>
      <p>
        <label for="email">Your Email:</label><br>
        <input type="email" id="email" name="email" placeholder="john@example.com" required>
      </p>
      <p>
        <label for="subject">Subject:</label><br>
        <input type="text" id="subject" name="subject" placeholder="How can we help?">
      </p>
      <p>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
      </p>
      <button type="submit">Send Message</button>
    </form>

    <h3>Other Ways to Reach Us</h3>
    <p>📧 Email: hello@stacklearner.com</p>
    <p>📞 Phone: +91 98765 43210</p>
    <p>📍 Address: 123 Learning Street, Tech City</p>
  </section>
</body>
</html>`,
    expectedOutput: 'A contact section with a form (name, email, subject, message) and contact information.',
    notes: [
      'Always use labels with form inputs for accessibility.',
      'The required attribute ensures fields are filled before submission.',
      'Placeholder text guides users on what to enter.',
      'In a real project, you\'d need server-side code to process form submissions.',
    ],
    commonMistakes: [
      'Not providing alternative contact methods (just a form).',
      'Missing labels on form inputs.',
      'Not using type="email" for email fields.',
      'Forgetting the required attribute on important fields.',
    ],
    practicePrompt: 'Create a contact section with a form (name, email, message) and contact information below.',
  },
  {
    id: 21,
    title: 'Footer Section',
    explanation:
      'The <footer> element appears at the bottom of a webpage. It typically contains copyright information, links to privacy policy and terms of service, social media links, a brief site map, and contact information. The footer is consistent across all pages and helps users find important links and legal information. It\'s the "closing" of your webpage.',
    analogy:
      'The footer is like the back cover of a book — it has the publisher info (copyright), fine print (legal links), and contact details. It wraps up the page and provides essential background information.',
    syntax:
`<footer>
  <p>&copy; 2026 Company Name. All rights reserved.</p>
  <nav>
    <a href="privacy.html">Privacy Policy</a>
    <a href="terms.html">Terms of Service</a>
  </nav>
</footer>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Footer Section</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
  </header>

  <main>
    <p>Main content goes here.</p>
  </main>

  <footer>
    <h3>Quick Links</h3>
    <nav>
      <a href="#home">Home</a> |
      <a href="#about">About</a> |
      <a href="#services">Services</a> |
      <a href="#contact">Contact</a>
    </nav>

    <h3>Follow Us</h3>
    <p>
      <a href="#">Facebook</a> |
      <a href="#">Twitter</a> |
      <a href="#">Instagram</a> |
      <a href="#">LinkedIn</a>
    </p>

    <p>&copy; 2026 StackLearner. All rights reserved.</p>
    <p>
      <a href="#">Privacy Policy</a> |
      <a href="#">Terms of Service</a>
    </p>
  </footer>
</body>
</html>`,
    expectedOutput: 'A page with a footer containing quick links, social media links, copyright, and legal links.',
    notes: [
      'A page can have multiple footers — one for the page and one for sections.',
      'Use &copy; for the copyright symbol ©.',
      'Footer links help with SEO (internal linking).',
      'Keep the footer organized with clear sections.',
    ],
    commonMistakes: [
      'Putting too much content in the footer.',
      'Not including copyright information.',
      'Forgetting to update the year in the copyright.',
      'Using images in the footer that are too large.',
    ],
    practicePrompt: 'Create a footer with copyright info, 4 quick links, and social media links.',
  },
  {
    id: 22,
    title: 'Complete HTML Webpage Project',
    explanation:
      'Now it\'s time to combine everything you\'ve learned! A complete HTML webpage includes all the sections working together: DOCTYPE declaration, html, head, body, header, navigation, hero section, main content with multiple sections (about, services, contact), and a footer. This is how real websites are structured. Every professional website follows this general layout pattern.',
    analogy:
      'Building a complete webpage is like building a complete house. You\'ve learned about each room individually (header = entrance, nav = hallway, hero = living room, etc.). Now you assemble all the rooms together to create a complete, functional house that people can live in.',
    syntax:
`<!DOCTYPE html>
<html lang="en">
<head>...</head>
<body>
  <header>...</header>
  <nav>...</nav>
  <section id="hero">...</section>
  <main>
    <section id="about">...</section>
    <section id="services">...</section>
    <section id="contact">...</section>
  </main>
  <footer>...</footer>
</body>
</html>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Complete Webpage</title>
</head>
<body>
  <header>
    <h1>🎓 TechLearn Academy</h1>
  </header>

  <nav>
    <a href="#home">Home</a> |
    <a href="#about">About</a> |
    <a href="#services">Services</a> |
    <a href="#contact">Contact</a>
  </nav>

  <section id="home">
    <h2>Welcome to TechLearn Academy</h2>
    <p>Your journey to becoming a web developer starts here.</p>
    <a href="#services">Explore Courses</a>
  </section>

  <main>
    <section id="about">
      <h2>About Us</h2>
      <p>TechLearn Academy is dedicated to making web development accessible to everyone.</p>
    </section>

    <section id="services">
      <h2>Our Courses</h2>
      <div>
        <h3>HTML Basics</h3>
        <p>Learn the structure of web pages.</p>
      </div>
      <div>
        <h3>CSS Styling</h3>
        <p>Make your websites beautiful.</p>
      </div>
      <div>
        <h3>JavaScript</h3>
        <p>Add interactivity to your projects.</p>
      </div>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <p>
          <label for="name">Name:</label><br>
          <input type="text" id="name" placeholder="Your name">
        </p>
        <p>
          <label for="email">Email:</label><br>
          <input type="email" id="email" placeholder="Your email">
        </p>
        <p>
          <label for="msg">Message:</label><br>
          <textarea id="msg" rows="4" placeholder="Your message"></textarea>
        </p>
        <button type="submit">Send</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 TechLearn Academy. All rights reserved.</p>
  </footer>
</body>
</html>`,
    expectedOutput: 'A complete webpage with header, navigation, hero section, about, services, contact form, and footer.',
    notes: [
      'This is the standard structure used by professional websites.',
      'Each section should have a unique id for navigation.',
      'The <main> element wraps the core content sections.',
      'CSS will be used later to style and position these sections beautifully.',
    ],
    commonMistakes: [
      'Not wrapping content sections inside <main>.',
      'Forgetting the viewport meta tag for mobile responsiveness.',
      'Having duplicate id attributes.',
      'Not following the proper nesting hierarchy.',
    ],
    practicePrompt: 'Build a complete HTML webpage for a fictional business with all sections: header, nav, hero, about, services, contact, and footer.',
  },
];

export default htmlModules;
