/**
 * htmlModules.js
 * Content for all 22 HTML learning modules.
 * Each module has: id, title, explanation, analogy, thanglishAnalogy,
 * analogyConnection, internalWorking, syntax, codeExample, expectedOutput,
 * notes, commonMistakes, practicePrompt, interviewQuestions, miniTask.
 */

const htmlModules = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    category: 'HTML Basics',
    explanation:
      'Web development is the process of building websites and web applications that people can access through a browser like Chrome, Firefox, or Edge. Every website you visit — Google, YouTube, Wikipedia — is built using web technologies. The three core technologies are HTML (structure), CSS (appearance), and JavaScript (behaviour). In this course, we start with HTML, the foundation of every webpage.',
    analogy:
      'Think of building a house. HTML is like the bricks, walls, and rooms — it creates the structure. CSS is the paint, curtains, and decorations — it makes things look good. JavaScript is the electricity, plumbing, and smart devices — it adds functionality and interactivity.',
    thanglishAnalogy:
      'Veedu kattum bodhu bricks and walls dhane HTML. Interior design & paint CSS. Electricity, plumbing, smart gadgets JavaScript. Bricks illama room kooda kattamudiyaadhu, adhumadhiri HTML illama website-e illai! Front-end oda basic foundation-e HTML dhaan.',
    analogyConnection: 'HTML = House Skeleton/Bricks | CSS = Paint & Interior | JavaScript = Electricity & Plumbing',
    internalWorking: 'When you open a .html file, the browser\'s HTML parser reads the text tags top-to-bottom and constructs a DOM (Document Object Model) tree in RAM.',
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
    interviewQuestions: [
      'What does HTML stand for?',
      'What are the 3 main pillars of Web Development?',
      'Is HTML a programming language or markup language?',
    ],
    miniTask: 'Create an HTML file with your name in an <h1> tag and a short bio in a <p> tag.',
  },
  {
    id: 2,
    title: 'How a Website Works',
    category: 'HTML Basics',
    explanation:
      'When you type a website address (URL) in your browser and press Enter, several things happen behind the scenes. Your browser sends a request to a server (a powerful computer that stores website files). The server finds the requested files (HTML, CSS, JS, images) and sends them back. Your browser then reads these files and displays the webpage. This entire process happens in milliseconds!',
    analogy:
      'Imagine ordering food from a restaurant. You (the browser) place an order (type a URL). The waiter (the internet) carries your order to the kitchen (the server). The chef prepares the food (finds the files) and the waiter brings it back to you. Your browser then "serves" the webpage on your screen.',
    thanglishAnalogy:
      'Hotel-la food order panra madhiri! Browser (user) order podum (URL enter), Waiter (Internet) kitchen-kku pogum (Server), Chef samachu tharuvaaru (HTML/CSS files), Waiter thirumba kondu vandhu kudupparu (Display in browser). Microseconds-la indha process mudinjidum.',
    analogyConnection: 'Customer = Browser | Order = HTTP Request | Kitchen = Server | Dish = HTML/CSS Files',
    internalWorking: 'The browser resolves the domain name to an IP address using DNS, opens a TCP/IP socket connection (port 80 or 443), and issues an HTTP GET request.',
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
    interviewQuestions: [
      'What happens step-by-step when you type a URL in browser?',
      'What is HTTP/HTTPS?',
      'What is the difference between a Client and a Server?',
    ],
    miniTask: 'Write a short summary of how Client-Server architecture works inside a <p> tag.',
  },
  {
    id: 3,
    title: 'Browser and Server Workflow',
    category: 'HTML Basics',
    explanation:
      'The communication between a browser and server follows a specific workflow: (1) User enters a URL, (2) Browser sends an HTTP request to the server, (3) Server processes the request, (4) Server sends back HTML, CSS, JS files as an HTTP response, (5) Browser parses HTML to build the page structure (DOM), (6) Browser applies CSS styles, (7) Browser executes JavaScript, (8) User sees the complete webpage.',
    analogy:
      'Think of mailing a letter. You write the address (URL), put it in the mailbox (send request), the postal service delivers it (internet), the recipient reads it and writes back (server processes), and the reply comes back to you (response). The browser is like a translator that converts the server\'s reply into something visual.',
    thanglishAnalogy:
      'Postal letter anuppura madhiri: neenga address ezhudhi letter poduveenga (Request), post office deliver pannum (Server process), thirumba reply letter varum (Response HTML code), browser adha padichu visual-ah screen-la kaatum.',
    analogyConnection: 'Letter Address = URL | Post Office = Internet | Recipient = Server | Reply = HTML Response',
    internalWorking: 'Rendering engine (e.g. Blink in Chrome) builds the DOM Tree and CSSOM Tree, combines them into a Render Tree, performs Layout, and Paints pixels.',
    syntax: null,
    codeExample:
`<!DOCTYPE html>
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
    interviewQuestions: [
      'What is DOM tree parsing?',
      'What is rendering engine in browser?',
      'What is status code 200 vs 404?',
    ],
    miniTask: 'List the 4 rendering stages (Parse -> Render Tree -> Layout -> Paint) using an <ol> tag.',
  },
  {
    id: 4,
    title: 'HTML Document Structure',
    category: 'HTML Basics',
    explanation:
      'Every HTML document follows a standard structure. It starts with <!DOCTYPE html> which tells the browser this is an HTML5 document. Then comes the <html> tag which wraps everything. Inside it, there are two main sections: <head> (contains metadata like title, character set, and links to stylesheets) and <body> (contains everything visible on the page).',
    analogy:
      'Think of an HTML document as a book. The <!DOCTYPE> is the book\'s cover type (hardcover/paperback). The <html> tag is the book itself. The <head> is the title page and table of contents (information about the book). The <body> is all the chapters and content you actually read.',
    thanglishAnalogy:
      'Oru book-oda structure madhiri: <!DOCTYPE> book type solla, <html> full book, <head> index/title page (invisible metadata like author, title), <body> padikkira main content pages (visible components).',
    analogyConnection: '<!DOCTYPE> = Cover Type | <html> = Complete Book | <head> = Book Details | <body> = Story Pages',
    internalWorking: 'The browser parser looks for <!DOCTYPE html> to activate standards mode instead of quirks mode, then parses <head> resources before rendering <body>.',
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
    interviewQuestions: [
      'Why do we need <!DOCTYPE html>?',
      'What goes in <head> vs <body>?',
      'What is Quirks Mode?',
    ],
    miniTask: 'Set up a boiler-plate HTML document with meta viewport and custom title.',
  },
  {
    id: 5,
    title: 'HTML Tags and Elements',
    category: 'HTML Basics',
    explanation:
      'HTML uses "tags" to define elements on a page. A tag is written in angle brackets like <tagname>. Most tags come in pairs: an opening tag <p> and a closing tag </p>. The content between them is the "element." Some tags are self-closing, like <br> and <img>. Tags can also have "attributes" like <a href="url">.',
    analogy:
      'Tags are like containers or boxes. The opening tag <p> opens a box, you put content inside, and the closing tag </p> closes the box. Self-closing tags are like stickers — they don\'t need a separate closing because they contain no content.',
    thanglishAnalogy:
      'Tag oru container box madhiri! Opening tag <p> box open pannum, content ulle poduveenga, closing tag </p> box moodum. Self closing tags <br> sticker madhiri — single stamp dhaan, close panna zaroorath illai.',
    analogyConnection: '<p> = Box Open | </p> = Box Close | Content = Box Items | Self-closing = Sticker/Stamp',
    internalWorking: 'Elements are converted to DOM nodes (Element Nodes, Text Nodes, Attribute Nodes) which form the DOM Tree hierarchy.',
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
      'Misspelling tag names like <headin> instead of <h1>.',
      'Nesting tags incorrectly: <b><i>text</b></i> vs <b><i>text</i></b>.',
    ],
    practicePrompt: 'Create an HTML page that uses at least 5 different tags: h1, p, a, br, and img.',
    interviewQuestions: [
      'What is the difference between an HTML Tag and an HTML Element?',
      'Name 3 self-closing (void) elements in HTML.',
      'What are attributes in HTML?',
    ],
    miniTask: 'Write a paragraph element containing a link with an href attribute.',
  },
  {
    id: 6,
    title: 'Headings and Paragraphs',
    category: 'Content Structure',
    explanation:
      'Headings and paragraphs are the most basic building blocks of content on a webpage. HTML provides six levels of headings: <h1> (largest, most important) through <h6> (smallest). The <p> tag creates paragraphs of text. Headings create a hierarchy — like a book has chapters (h1), sections (h2), and sub-sections (h3).',
    analogy:
      'Think of a newspaper. The biggest, boldest headline at the top is <h1>. Section headers are <h2>. Sub-headings within sections are <h3>, and so on. The regular body text between headings is <p> paragraphs.',
    thanglishAnalogy:
      'Newspaper headline madhiri! Front-page main title <h1> (perusa irukum), Sub-headings <h2> and <h3>, normal news content <p> paragraph. <h1> to <h6> heading sizes and hierarchy control pannum.',
    analogyConnection: '<h1> = Main Headline | <h2> = Section Title | <h3> = Sub-title | <p> = News Article Text',
    internalWorking: 'Headings are block-level elements by default, rendered with decreasing font-sizes and distinct top/bottom margins specified in user-agent stylesheets.',
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
</body>
</html>`,
    expectedOutput: 'A structured page with a main heading, chapter heading, sub-heading, and paragraphs.',
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
    ],
    practicePrompt: 'Create a page with an h1, two h2 sections, each with an h3 sub-section and paragraphs.',
    interviewQuestions: [
      'Why is heading hierarchy important for SEO?',
      'How many <h1> tags should be used per webpage?',
      'What is the default display property of headings?',
    ],
    miniTask: 'Create an article structure with <h1>, <h2>, and 3 paragraphs.',
  },
  {
    id: 7,
    title: 'Text Formatting',
    category: 'Content Structure',
    explanation:
      'HTML provides several tags to format text and give it meaning. <b> or <strong> makes text bold (strong uses semantic meaning — "important"). <i> or <em> makes text italic (em means "emphasized"). Other tags: <u> (underline), <s> (strikethrough), <mark> (highlight), <small> (small text), <sub> (subscript), <sup> (superscript), <blockquote> (quotes).',
    analogy:
      'Text formatting in HTML is like using a highlighter, bold pen, or underline in your notebook. Each tool serves a purpose — bold for important points, italics for emphasis, highlights for key concepts.',
    thanglishAnalogy:
      'Notebook-la highlighter, bold pen, underline use panra madhiri dhaan! Important word-kku <strong> (bold), emphasis-kku <em> (italics), highlight panna <mark> (yellow shade), formula H2O-kku <sub>, math E=mc2-kku <sup>.',
    analogyConnection: '<strong> = Dark Marker | <em> = Slanted Pen | <mark> = Highlighter | <sub>/<sup> = Math Formula Index',
    internalWorking: 'Inline formatting tags do not break the line flow; they alter inline layout formatting and voice synthesis cues in screen readers.',
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
  <blockquote>"The only way to learn programming is by programming." — Dennis Ritchie</blockquote>
</body>
</html>`,
    expectedOutput: 'A page demonstrating bold, italic, subscript, superscript, highlighted text, and a blockquote.',
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
    ],
    practicePrompt: 'Create a page that demonstrates at least 6 different text formatting tags with example text.',
    interviewQuestions: [
      'What is the difference between <b> and <strong>?',
      'What is the difference between <i> and <em>?',
      'How do you write subscript and superscript in HTML?',
    ],
    miniTask: 'Write a chemistry formula (H2O) and a math power (X2) using <sub> and <sup>.',
  },
  {
    id: 8,
    title: 'Links',
    category: 'Navigation',
    explanation:
      'Links (hyperlinks) connect one page to another. They are created using the <a> (anchor) tag with the href attribute specifying the destination URL. Links can point to external websites, internal pages, sections on the same page (#id), email addresses (mailto:), or phone numbers (tel:).',
    analogy:
      'Links are like doors in a building. Each door (link) takes you to a different room (page). Some doors lead to rooms in the same building (internal links), while others lead outside to different buildings (external links).',
    thanglishAnalogy:
      'Building-la kathavu (door) madhiri: oru kathavu thanduna vera room-kku povom. Internal link = namma veettukulle adjacent room-kku poga, External link = pakkathu kattidathuku poga target="_blank" dharaama pudhu tab-la thirakkum.',
    analogyConnection: '<a> = Door Frame | href = Destination Room | target="_blank" = Open New Portal',
    internalWorking: 'Clicking an <a> tag instructs the browser location object to trigger a window navigation event to the destination URI.',
    syntax:
`<a href="url">Link Text</a>                    → Basic link
<a href="url" target="_blank">New Tab</a>       → Opens in new tab
<a href="#section-id">Jump to Section</a>        → Anchor link
<a href="mailto:email@example.com">Email</a>    → Email link`,
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
  <h2>Email Link</h2>
  <p><a href="mailto:student@example.com">Send Email</a></p>
</body>
</html>`,
    expectedOutput: 'A page with clickable external and email links.',
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
    ],
    practicePrompt: 'Create a page with 3 links: one external link, one anchor link, and one email link.',
    interviewQuestions: [
      'What does target="_blank" do?',
      'Why should you use rel="noopener noreferrer" with target="_blank"?',
      'How do you create an email or phone call link in HTML?',
    ],
    miniTask: 'Create an <a> tag linking to Wikipedia in a new tab.',
  },
  {
    id: 9,
    title: 'Images',
    category: 'Media',
    explanation:
      'Images make webpages visual and engaging. The <img> tag is self-closing and requires two important attributes: src (the image source/path) and alt (alternative text for accessibility). The alt text is read by screen readers and shown if the image fails to load.',
    analogy:
      'The <img> tag is like putting a photo in a picture frame on your wall. The src tells the browser where to find the photo (photo shop address). The alt text is like a caption underneath describing the photo for someone who can\'t see it.',
    thanglishAnalogy:
      'Frame-la photo maattura madhiri! src = photo enga irukku (image path/URL), alt = image load aagalana text ah kaattum (blind people-kku screen reader padichu sollum).',
    analogyConnection: '<img> = Photo Frame | src = Photo Path | alt = Caption for Visually Impaired',
    internalWorking: 'The browser issues a separate asynchronous HTTP GET request for the image asset URL and decodes the image stream into bitmap pixels.',
    syntax:
`<img src="image-url" alt="Description">              → Basic image
<img src="photo.jpg" alt="Description"
     width="300" height="200">                        → With dimensions`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Images</title>
</head>
<body>
  <h1>Working with Images</h1>
  <img src="https://via.placeholder.com/400x200" 
       alt="A placeholder image"
       width="400" height="200">
</body>
</html>`,
    expectedOutput: 'A page displaying a placeholder image with specified dimensions.',
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
    ],
    practicePrompt: 'Create an HTML page that displays 2 images with proper alt text and different sizes.',
    interviewQuestions: [
      'Why is the alt attribute mandatory for accessibility?',
      'What are the advantages of WebP image format over JPG/PNG?',
      'What happens when image src path is wrong?',
    ],
    miniTask: 'Add an <img> tag with a placeholder URL and descriptive alt text.',
  },
  {
    id: 10,
    title: 'Lists',
    category: 'Content Structure',
    explanation:
      'HTML provides three types of lists: Ordered lists <ol> (numbered), Unordered lists <ul> (bulleted), and Description lists <dl> (term-definition pairs). Each list item is wrapped in <li> (list item). Lists can be nested.',
    analogy:
      'Think of making a shopping list (unordered — no specific order needed) vs. writing step-by-step cooking instructions (ordered — sequence matters). Description lists are like a glossary in a textbook.',
    thanglishAnalogy:
      'Shopping list (<ul> - Bullet points, order mukkiyam illai) vs Tea podura step-by-step recipe (<ol> - 1,2,3 order mukkiyam!). Glossary dictionary dhane <dl> (<dt> term, <dd> explanation).',
    analogyConnection: '<ul> = Bulleted Grocery List | <ol> = Step 1,2,3 Recipe | <dl> = Dictionary Term/Definition',
    internalWorking: 'List tags inject counter increments (for ol) or list-style glyphs (for ul) into pseudo-element boxes (::marker) rendered before each <li>.',
    syntax:
`<ul><li>Bulleted Item</li></ul>
<ol><li>Numbered Step</li></ol>
<dl><dt>Term</dt><dd>Definition</dd></dl>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Lists</title>
</head>
<body>
  <h2>Shopping List (Unordered)</h2>
  <ul>
    <li>Milk</li>
    <li>Bread</li>
  </ul>
  <h2>Recipe Steps (Ordered)</h2>
  <ol>
    <li>Preheat the oven</li>
    <li>Bake for 30 minutes</li>
  </ol>
</body>
</html>`,
    expectedOutput: 'A page with an unordered bullet list and an ordered numbered list.',
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
    ],
    practicePrompt: 'Create a page with an unordered list of 5 fruits and an ordered list of 5 steps to make tea.',
    interviewQuestions: [
      'What is the difference between <ul> and <ol>?',
      'What is a description list <dl>?',
      'Can you nest a <ul> inside an <ol>?',
    ],
    miniTask: 'Create an ordered list <ol> with 3 daily routine tasks.',
  },
  {
    id: 11,
    title: 'Tables',
    category: 'Data Presentation',
    explanation:
      'Tables display data in rows and columns. The <table> tag creates a table. Inside it, <tr> creates a row, <th> creates a header cell (bold and centered), and <td> creates a regular data cell. You can add <thead>, <tbody>, and <tfoot> to organize table sections.',
    analogy:
      'An HTML table is like a spreadsheet (Excel/Google Sheets). Each row (<tr>) is a row in the sheet. Each cell (<td>) is a cell in the sheet. Header cells (<th>) are like column headers at the top of the spreadsheet.',
    thanglishAnalogy:
      'Excel sheet dhaan HTML Table! <table> Excel file, <tr> each Row, <th> Header column title (bold-ah irukum), <td> Data box cell. Progress card, Timetable ellam table la dhaan poduvom.',
    analogyConnection: '<table> = Excel Sheet | <tr> = Horizontal Row | <th> = Bold Header | <td> = Grid Cell',
    internalWorking: 'Browser engine computes table layout geometry by analyzing cell widths, borders, spans (colspan/rowspan) across all rows.',
    syntax:
`<table>
  <thead>
    <tr><th>Header</th></tr>
  </thead>
  <tbody>
    <tr><td>Data</td></tr>
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
  <table border="1" cellpadding="8">
    <thead>
      <tr>
        <th>Name</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice</td>
        <td>A</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
    expectedOutput: 'A structured table with a header row (Name, Grade) and student data.',
    notes: [
      'Use tables only for tabular data — not for page layouts.',
      '<th> is automatically bold and centered by browsers.',
      'Use colspan and rowspan to merge cells.',
    ],
    commonMistakes: [
      'Using tables for page layout instead of CSS Grid or Flexbox.',
      'Forgetting <tr> and putting <td> directly inside <table>.',
      'Inconsistent number of cells across rows.',
    ],
    practicePrompt: 'Create a table showing a class timetable with 5 days and 4 time slots.',
    interviewQuestions: [
      'What are <thead>, <tbody>, and <tfoot> used for?',
      'How do you merge cells in HTML tables (colspan/rowspan)?',
      'Why should you not use tables for page layout?',
    ],
    miniTask: 'Build a simple 2x2 table with <th> headers and <td> data.',
  },
  {
    id: 12,
    title: 'Forms',
    category: 'User Input',
    explanation:
      'Forms allow users to input and submit data to a website. The <form> tag wraps form elements. Common form elements include: <input> (text, email, password, number, checkbox, radio), <textarea> (multi-line text), <select> (dropdown), <button> (submit/reset), and <label> (describes an input).',
    analogy:
      'A form is like a paper application form you fill out. Each field (name, email, password) is an <input>. The "Submit" button at the bottom sends the form. Labels next to each field tell you what to write.',
    thanglishAnalogy:
      'College application form madhiri! <form> paper sheet, <label> field name ("Name:"), <input> blank fill-in box, <button> submission signature. Login, Signup, Feedback form ellam idhula dhaan senjuvanga.',
    analogyConnection: '<form> = Application Form Sheet | <label> = Question Label | <input> = Fill-in Box | <button> = Submit Action',
    internalWorking: 'Form elements form a FormData object upon submission which is encoded (URL-encoded or multipart) and sent via HTTP request body/query.',
    syntax:
`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
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
    <button type="submit">Register</button>
  </form>
</body>
</html>`,
    expectedOutput: 'A functional registration form with name and email inputs.',
    notes: [
      'Always use <label> with the for attribute matching the input\'s id.',
      'The required attribute makes a field mandatory.',
      'type="email" provides built-in email validation.',
    ],
    commonMistakes: [
      'Not linking <label> to <input> with for/id.',
      'Forgetting the name attribute — form data won\'t be sent.',
      'Using the same name for different radio button groups.',
    ],
    practicePrompt: 'Create a contact form with fields for name, email, message (textarea), and a submit button.',
    interviewQuestions: [
      'What is the difference between GET and POST methods in forms?',
      'Why is the <label> tag important for web accessibility?',
      'What does the required attribute do?',
    ],
    miniTask: 'Create an input with type="password" and a submit button inside a <form>.',
  },
  {
    id: 13,
    title: 'Semantic HTML',
    category: 'Semantic Architecture',
    explanation:
      'Semantic HTML uses tags that clearly describe the meaning of the content, not just how it looks. Tags like <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer> tell the browser (and search engines) what each part of the page represents.',
    analogy:
      'Imagine labelling boxes when moving. A box labelled "Kitchen Items" (semantic) is much more helpful than one labelled "Box #7" (non-semantic). Semantic HTML labels your content so everyone understands what\'s inside.',
    thanglishAnalogy:
      'Shift aagum bodhu boxes label panra madhiri! "Kitchen items" nu dharalaama label panna (Semantic HTML: <header>, <main>, <footer>), easy-ah puriyum. "Box #7" nu sonna (Non-semantic <div><div><div>) edhuvu puriyadhu.',
    analogyConnection: '<header> = Top Box Label | <main> = Core Content Label | <footer> = Bottom Label | <div> = Unlabelled Generic Box',
    internalWorking: 'Accessibility APIs map HTML5 semantic tags directly to ARIA landmarks, allowing screen readers to jump directly to specific structural regions.',
    syntax:
`<header>Header Content</header>
<nav>Navigation Links</nav>
<main><section>Main Content</section></main>
<footer>Footer Content</footer>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic HTML</title>
</head>
<body>
  <header>
    <h1>My Website</h1>
    <nav><a href="#home">Home</a></nav>
  </header>
  <main>
    <article>
      <h2>Article Title</h2>
      <p>Content goes here...</p>
    </article>
  </main>
  <footer><p>&copy; 2026</p></footer>
</body>
</html>`,
    expectedOutput: 'A clean webpage structured with semantic header, main, article, and footer sections.',
    notes: [
      'Semantic HTML is an HTML5 feature — all modern browsers support it.',
      'Use <main> only once per page.',
      'Semantic tags improve SEO ranking significantly.',
    ],
    commonMistakes: [
      'Using <div> for everything instead of semantic tags.',
      'Having multiple <main> elements on one page.',
      'Confusing <section> with <div>.',
    ],
    practicePrompt: 'Rewrite a page using semantic HTML tags: header, nav, main, section, article, aside, and footer.',
    interviewQuestions: [
      'What is Semantic HTML and why is it important for SEO and Accessibility?',
      'What is the difference between <section> and <article>?',
      'What is the difference between <div> and <section>?',
    ],
    miniTask: 'Wrap a blog post in an <article> tag with a <header> and <p> content.',
  },
  {
    id: 14,
    title: 'Header Section',
    category: 'Semantic Architecture',
    explanation:
      'The <header> element represents the introductory content at the top of a webpage or a section. It typically contains the website logo, site title, and sometimes a navigation bar or a tagline.',
    analogy:
      'The header is like the front entrance of a building. It has the building name (logo), a welcome sign (title), and a directory board (navigation). It tells visitors where they are.',
    thanglishAnalogy:
      'Office front entrance reception desk dhane <header>! Company logo, Welcome board, Title ellaam anga irukkum. Page kku top-la yaaru vandhalum dharalaama intro kudukkum.',
    analogyConnection: '<header> = Reception Gate | Logo = Nameplate | Title = Welcome Sign',
    internalWorking: 'The browser marks <header> as landmark banner in accessibility tree unless nested inside an article or section.',
    syntax:
`<header>
  <img src="logo.png" alt="Logo">
  <h1>Website Name</h1>
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
</body>
</html>`,
    expectedOutput: 'A clear website header with brand title and tagline.',
    notes: [
      '<header> is semantic — it tells browsers this is introductory content.',
      'Keep the header clean and simple.',
      'The header usually stays consistent across all pages.',
    ],
    commonMistakes: [
      'Confusing <header> with <head> — <head> is invisible metadata, <header> is visual layout.',
      'Putting main page content inside <header>.',
    ],
    practicePrompt: 'Create a header section with a website name, a tagline, and a simple logo.',
    interviewQuestions: [
      'What is the difference between <head> and <header>?',
      'Can you have multiple <header> elements on a single page?',
      'What elements belong inside a <header>?',
    ],
    miniTask: 'Build a <header> section containing an <h1> logo and a subtitle.',
  },
  {
    id: 15,
    title: 'Navigation Section',
    category: 'Semantic Architecture',
    explanation:
      'The <nav> element contains the main navigation links for a website. It helps users move between pages or sections. Navigation typically includes links to Home, About, Services, Contact, etc.',
    analogy:
      'Navigation is like a table of contents in a book or a directory in a shopping mall. It lists all the places you can go and lets you jump directly to any destination.',
    thanglishAnalogy:
      'Mall-la irukkira Direction Board dhane <nav>! Home, About, Contact nu enge poga venumo antha room-kku vazhi kaattum.',
    analogyConnection: '<nav> = Direction Board | Links = Floor Arrows | Target = Destination Room',
    internalWorking: 'Assigned navigation role in ARIA landmark hierarchy, accessible via screen reader landmark shortcuts (N key).',
    syntax:
`<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
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
      <a href="#contact">Contact</a>
    </nav>
  </header>
</body>
</html>`,
    expectedOutput: 'A header with a responsive navigation bar.',
    notes: [
      'Use <nav> only for main navigation — not for every group of links.',
      'Navigation links should use <a> tags with descriptive text.',
      'Using <ul> with <li> inside <nav> is a best practice.',
    ],
    commonMistakes: [
      'Not using the <nav> element for navigation links.',
      'Creating navigation with <div> instead of <nav>.',
    ],
    practicePrompt: 'Create a navigation section with a list of 5 links: Home, About, Courses, Blog, Contact.',
    interviewQuestions: [
      'Why is <nav> preferred over a <div> for navigation links?',
      'Should all links on a webpage be placed inside <nav>?',
      'How to structure a accessible navbar?',
    ],
    miniTask: 'Create a <nav> element with 3 list items linking to section anchors.',
  },
  {
    id: 16,
    title: 'Hero Section',
    category: 'Page Components',
    explanation:
      'The hero section is the large, prominent area at the top of a webpage (below the header/nav). It\'s the first content users see and should immediately communicate what the website is about.',
    analogy:
      'The hero section is like a movie poster or a billboard. It\'s big, bold, and instantly tells you what the movie (website) is about.',
    thanglishAnalogy:
      'Cinema poster/billboard dhane Hero Section! Periya bold title, attractive punch line, thirumba "Book Tickets" call-to-action button.',
    analogyConnection: 'Hero Banner = Movie Poster | Heading = Movie Title | Button = Book Tickets Action',
    internalWorking: 'Rendered as the primary visual focus box in top-level layout viewport.',
    syntax:
`<section class="hero">
  <h1>Main Headline</h1>
  <p>Supporting text</p>
  <a href="#cta">Call To Action</a>
</section>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hero Section</title>
</head>
<body>
  <section id="hero">
    <h1>Learn Web Development the Easy Way</h1>
    <p>Master HTML, CSS, and JavaScript with interactive lessons.</p>
    <a href="#courses">Start Learning</a>
  </section>
</body>
</html>`,
    expectedOutput: 'A prominent hero banner with headline and CTA button.',
    notes: [
      'The hero section sets the first impression of your website.',
      'Include 1-2 call-to-action buttons maximum.',
    ],
    commonMistakes: [
      'Making the hero section too text-heavy.',
      'Having no clear call-to-action.',
    ],
    practicePrompt: 'Create a hero section with a catchy heading, a short description, and a "Get Started" button.',
    interviewQuestions: [
      'What is a Hero Section in web design?',
      'What key elements make a hero section effective?',
    ],
    miniTask: 'Write a <section> with a main heading, a paragraph, and a call-to-action <a> button.',
  },
  {
    id: 17,
    title: 'Main Content Section',
    category: 'Page Components',
    explanation:
      'The <main> element wraps the primary content of your webpage — the content that is unique to this page and not repeated across other pages (like header and footer). There should be only one <main> element per page.',
    analogy:
      'If a webpage is a newspaper, the <main> element is the actual news articles — the core content. The header is the newspaper\'s logo and date, the footer is the fine print.',
    thanglishAnalogy:
      'Newspaper-la main news stories dhane <main> tag! Header & footer ellaa page-layum irukkum, aanaa <main> la dhane indha specific page-oda actual kathai irukkum.',
    analogyConnection: '<main> = Main News Article | Header = Newspaper Logo | Footer = Publisher Details',
    internalWorking: 'Marks main ARIA landmark region in document tree.',
    syntax:
`<main>
  <section>Content 1</section>
  <section>Content 2</section>
</main>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Main Content</title>
</head>
<body>
  <main>
    <section>
      <h2>Latest Lessons</h2>
      <p>HTML Basics - Learn the building blocks of the web.</p>
    </section>
  </main>
</body>
</html>`,
    expectedOutput: 'Main content container holding page sections.',
    notes: [
      'Only one <main> element per page.',
      '<main> should not include header, footer, or nav.',
    ],
    commonMistakes: [
      'Having multiple <main> elements.',
      'Including header or footer inside <main>.',
    ],
    practicePrompt: 'Create a page with a <main> element containing 3 different sections with headings and content.',
    interviewQuestions: [
      'Why can there be only one <main> tag per page?',
      'Can <main> be nested inside <article>?',
    ],
    miniTask: 'Wrap two <section> tags inside a single <main> tag.',
  },
  {
    id: 18,
    title: 'About Section',
    category: 'Page Components',
    explanation:
      'The About section tells visitors about the website, organization, or person behind it. It typically includes a brief introduction, mission statement, team information, or company history.',
    analogy:
      'The About section is like the "About the Author" page in a book. It tells readers who created this, why they created it, and what their mission is.',
    thanglishAnalogy:
      'Book-la "About the Author" page dhane About Section! Naanga yaaru, namma goal enna, enna senjutrukkom nu urimaiya sollura place.',
    analogyConnection: 'About Section = Author Profile Page | Mission = Author Goal | Features = Achievements',
    internalWorking: 'Structural section container identified by id="about" for hash navigation.',
    syntax:
`<section id="about">
  <h2>About Us</h2>
  <p>Introduction text...</p>
</section>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Section</title>
</head>
<body>
  <section id="about">
    <h2>About Us</h2>
    <p>StackLearner is an interactive web development learning platform.</p>
  </section>
</body>
</html>`,
    expectedOutput: 'An About Us section introducing the platform.',
    notes: [
      'Keep the About section concise and authentic.',
      'Use lists to highlight key features or values.',
    ],
    commonMistakes: [
      'Making the About section too long and boring.',
      'Forgetting to add an id for navigation links to work.',
    ],
    practicePrompt: 'Create an About section for a fictional coding school with a description, mission, and list of courses.',
    interviewQuestions: [
      'How does section id help in single page navigation?',
    ],
    miniTask: 'Create a <section id="about"> with an <h2> and 2 paragraphs.',
  },
  {
    id: 19,
    title: 'Services Section',
    category: 'Page Components',
    explanation:
      'The Services (or Features) section showcases what you offer. It typically displays services, products, or features in a structured, easy-to-scan layout.',
    analogy:
      'The Services section is like a restaurant menu. Each dish (service) has a name (title), a brief description (what it includes), and sometimes a photo (icon).',
    thanglishAnalogy:
      'Restaurant Menu Card dhane Services Section! Dish Name (Service Title), Details (Description), Price/Icon (Features).',
    analogyConnection: 'Services = Menu List | Service Item = Menu Dish | Description = Ingredients',
    internalWorking: 'Container grouping service feature blocks, styled via CSS flex/grid.',
    syntax:
`<section id="services">
  <h2>Services</h2>
  <div><h3>Web Dev</h3><p>Build websites</p></div>
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
  </section>
</body>
</html>`,
    expectedOutput: 'Services showcase with icons and descriptions.',
    notes: [
      'Keep service descriptions short and benefit-focused.',
      'Icons help users quickly identify services.',
    ],
    commonMistakes: [
      'Writing too much text for each service.',
    ],
    practicePrompt: 'Create a Services section with 4 services for a web development company.',
    interviewQuestions: [
      'How to structure feature cards in HTML?',
    ],
    miniTask: 'Build a Services section with 3 <div> cards.',
  },
  {
    id: 20,
    title: 'Contact Section',
    category: 'Page Components',
    explanation:
      'The Contact section provides ways for users to reach you. It typically includes a contact form, email address, phone number, physical address, and links to social media.',
    analogy:
      'The Contact section is like a reception desk in an office. It has a phone (phone number), a mailbox (email), a feedback form (contact form), and directions (address).',
    thanglishAnalogy:
      'Office Reception Desk dhane Contact Section! Feedback form, Phone number, Email address, Location map ellam anga dhaan irukkum.',
    analogyConnection: 'Form = Inquiry Form | Phone/Email = Desk Contacts | Address = Office Map',
    internalWorking: 'Interactive section capturing user feedback via form submit controls.',
    syntax:
`<section id="contact">
  <h2>Contact Us</h2>
  <form><input type="email"><textarea></textarea><button>Send</button></form>
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
    <h2>Contact Us</h2>
    <form>
      <input type="email" placeholder="Your Email" required><br><br>
      <textarea placeholder="Your Message" required></textarea><br><br>
      <button type="submit">Send</button>
    </form>
  </section>
</body>
</html>`,
    expectedOutput: 'Contact section with an email field, message box, and submit button.',
    notes: [
      'Always use labels with form inputs for accessibility.',
      'The required attribute ensures fields are filled before submission.',
    ],
    commonMistakes: [
      'Not providing alternative contact methods.',
    ],
    practicePrompt: 'Create a contact section with a form (name, email, message) and contact information below.',
    interviewQuestions: [
      'What elements are essential in a Contact Section?',
    ],
    miniTask: 'Create a contact form section with email and message inputs.',
  },
  {
    id: 21,
    title: 'Footer Section',
    category: 'Page Components',
    explanation:
      'The <footer> element appears at the bottom of a webpage. It typically contains copyright information, links to privacy policy and terms of service, social media links, a brief site map, and contact information.',
    analogy:
      'The footer is like the back cover of a book — it has the publisher info (copyright), fine print (legal links), and contact details.',
    thanglishAnalogy:
      'Book Back Cover dhane <footer>! Copyright details ©, Legal terms, Publisher address, Social media links ellam bottom-la veppom.',
    analogyConnection: '<footer> = Book Back Cover | Copyright = Publisher Signature | Links = Fine Print Terms',
    internalWorking: 'Document bottom ARIA landmark content region.',
    syntax:
`<footer>
  <p>&copy; 2026 StackLearner. All rights reserved.</p>
</footer>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Footer Section</title>
</head>
<body>
  <footer>
    <p>&copy; 2026 StackLearner. All rights reserved.</p>
  </footer>
</body>
</html>`,
    expectedOutput: 'A clean footer with copyright notice.',
    notes: [
      'Use &copy; for the copyright symbol ©.',
      'Keep the footer organized with clear sections.',
    ],
    commonMistakes: [
      'Forgetting copyright information.',
    ],
    practicePrompt: 'Create a footer with copyright info, 4 quick links, and social media links.',
    interviewQuestions: [
      'What usually goes into an HTML5 <footer> tag?',
    ],
    miniTask: 'Write a <footer> tag with copyright symbol &copy; and current year.',
  },
  {
    id: 22,
    title: 'Complete HTML Webpage Project',
    category: 'Projects',
    explanation:
      'Now it\'s time to combine everything you\'ve learned! A complete HTML webpage includes all the sections working together: DOCTYPE declaration, html, head, body, header, navigation, hero section, main content with multiple sections, and a footer.',
    analogy:
      'Building a complete webpage is like building a complete house. You\'ve learned about each room individually. Now you assemble all the rooms together to create a complete, functional house.',
    thanglishAnalogy:
      'Full veedu kattiyachu! Hall (Hero), Rooms (Sections), Entrance (Header), Backyard (Footer) ellam serthu complete webpage ready!',
    analogyConnection: 'Complete HTML = Full House Assembly | Sections = Rooms | Layout = Blueprint Plan',
    internalWorking: 'Full DOM tree constructed and rendered as a complete Web Document.',
    syntax:
`<!DOCTYPE html>
<html>
<head><title>Title</title></head>
<body>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</body>
</html>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Complete Webpage</title>
</head>
<body>
  <header>
    <h1>🎓 TechLearn Academy</h1>
  </header>
  <main>
    <section>
      <h2>Welcome</h2>
      <p>Start your Web Dev journey today!</p>
    </section>
  </main>
  <footer>
    <p>&copy; 2026 TechLearn Academy.</p>
  </footer>
</body>
</html>`,
    expectedOutput: 'A fully structured single-page HTML document.',
    notes: [
      'This is the standard structure used by professional websites.',
      'Each section should have a unique id for navigation.',
    ],
    commonMistakes: [
      'Not wrapping content sections inside <main>.',
    ],
    practicePrompt: 'Build a complete HTML webpage for a fictional business with all sections.',
    interviewQuestions: [
      'What are the core semantic sections of a complete webpage layout?',
    ],
    miniTask: 'Assemble a complete HTML page with <header>, <main>, <section>, and <footer>.',
  },
];

export default htmlModules;
