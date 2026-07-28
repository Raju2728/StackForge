/**
 * cssModules.js
 * Content for all CSS learning modules.
 * Each module has: id, title, category, explanation, analogy, thanglishAnalogy,
 * analogyConnection, syntax, codeExample, expectedOutput, notes, commonMistakes,
 * practicePrompt, interviewQuestions, miniTask.
 */

const cssModules = [
  // ===================== CSS BASICS =====================
  {
    id: 1,
    title: 'What is CSS?',
    category: 'CSS Basics',
    explanation:
      'CSS stands for Cascading Style Sheets. It is the language used to style and design the visual appearance of HTML elements on a webpage. While HTML creates the structure (skeleton) of a page, CSS controls how it looks — colors, fonts, spacing, layout, and animations. Without CSS, every webpage would look like a plain text document.',
    analogy:
      'If HTML is the structure of a house (walls, rooms, doors), then CSS is the interior designer who decides the paint colors, furniture arrangement, curtain styles, and floor tiles. The house exists without the designer, but it would look bare and unappealing.',
    thanglishAnalogy:
      'Veedu kattuna appuram, interior designer varuthu room-ku color pottu, furniture arrange pannu, curtain maaththu — adha madhiri HTML structure-ku CSS style kodukum. HTML structure mattum iruntha website boring-a theriyum, CSS pottha udane attractive-a maaridum. CSS illama website patha, paint illadha veedu madhiri irukum.',
    analogyConnection: 'HTML = House structure | CSS = Interior designer\'s work | Selector = Which room to decorate | Property = What to change | Value = How to change it',
    syntax:
`selector {
  property: value;
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>What is CSS</title>
  <style>
    h1 {
      color: #6366f1;
      font-family: Arial, sans-serif;
    }
    p {
      color: #64748b;
      font-size: 18px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  <h1>Welcome to CSS</h1>
  <p>CSS makes this text styled and beautiful!</p>
</body>
</html>`,
    expectedOutput: 'A heading in indigo/purple color and a styled paragraph with custom font size and spacing.',
    notes: [
      'CSS stands for Cascading Style Sheets.',
      'CSS is not a programming language — it is a styling language.',
      'CSS works alongside HTML and JavaScript to create complete websites.',
      'Modern CSS can create animations, responsive layouts, and complex designs.',
    ],
    commonMistakes: [
      'Confusing CSS with a programming language — it describes appearance, not logic.',
      'Forgetting the semicolon (;) at the end of each property declaration.',
      'Not understanding the "Cascading" part — later styles override earlier ones.',
    ],
    practicePrompt: 'Create an HTML page and use CSS to change the heading color to blue and paragraph text to gray.',
    interviewQuestions: [
      'What does CSS stand for?',
      'What is the difference between HTML and CSS?',
      'Why do we need CSS when HTML can display content?',
    ],
    miniTask: 'Style a heading with a custom color, font-family, and text-align center using internal CSS.',
  },
  {
    id: 2,
    title: 'Why CSS is Used?',
    category: 'CSS Basics',
    explanation:
      'CSS is used to separate content (HTML) from presentation (styling). This separation makes code cleaner, easier to maintain, and allows you to change the look of an entire website by modifying a single CSS file. CSS enables responsive design, animations, consistent branding, and professional-looking websites. Without CSS, every element would use the browser\'s default plain styling.',
    analogy:
      'Imagine a school uniform system. Instead of each student deciding what to wear daily (messy, inconsistent), the school sets a uniform (CSS stylesheet). One change to the uniform policy changes everyone\'s appearance. Similarly, one CSS file controls the style of all pages.',
    thanglishAnalogy:
      'School la uniform irukku nu imagine pannunga. Uniform illana each student different dress poduvanga — website messy-a theriyum. Uniform set pannuna uniform change panna, ellaarum-oda look change aagum. Adhe madhiri oru CSS file change pannuna, website-oda ella page-um style maaridum. Separation of content and design — adhu dhan CSS-oda main power.',
    analogyConnection: 'School = Website | Uniform Policy = CSS file | Students = HTML elements | Changing uniform = Updating CSS',
    syntax: null,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Why CSS</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background-color: #f0f4ff;
      padding: 20px;
    }
    .card {
      background: white;
      padding: 24px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      max-width: 400px;
    }
    .card h2 {
      color: #6366f1;
    }
    .card p {
      color: #475569;
      line-height: 1.7;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>Styled Card</h2>
    <p>This card looks professional because of CSS styling — background, shadow, border-radius, and spacing.</p>
  </div>
</body>
</html>`,
    expectedOutput: 'A professional-looking card with rounded corners, shadow, and styled text on a light blue background.',
    notes: [
      'CSS separates content from presentation — a core web design principle.',
      'One CSS file can style thousands of HTML pages consistently.',
      'CSS enables responsive design for different screen sizes.',
      'Without CSS, the web would be plain text documents.',
    ],
    commonMistakes: [
      'Using inline styles for everything instead of a CSS file.',
      'Writing repetitive CSS instead of using classes.',
      'Not understanding the benefit of separating HTML and CSS.',
    ],
    practicePrompt: 'Create two cards with the same class that share the same CSS styling.',
    interviewQuestions: [
      'Why do we separate CSS from HTML?',
      'What are the advantages of using external CSS?',
      'What does "Cascading" mean in CSS?',
    ],
    miniTask: 'Create a styled card component with background, padding, border-radius, and box-shadow.',
  },
  {
    id: 3,
    title: 'Relationship Between HTML and CSS',
    category: 'CSS Basics',
    explanation:
      'HTML and CSS work together as a team. HTML provides the structure and content (text, images, links), while CSS provides the visual design (colors, layout, fonts, spacing). HTML elements are like building blocks, and CSS tells the browser how to display those blocks. You cannot have a styled webpage without both — HTML alone is plain, CSS alone has nothing to style.',
    analogy:
      'Think of a mannequin in a clothing store. The mannequin is HTML (the structure/body), and the clothes are CSS (the appearance). The mannequin gives shape, the clothes give style. Neither is useful alone — you need both for a complete display.',
    thanglishAnalogy:
      'Clothing shop-la mannequin irukum la. Mannequin body structure kodukum — adhu HTML. Dress, accessories ellaam pottu style pannuvom — adhu CSS. Mannequin mattum iruntha boring, dress mattum iruntha shape illama thoongum. Rendu combine aana dhaan complete look varum. Website-um apdi dhaan — HTML structure, CSS style, rendu serthu dhaan website ready aagum.',
    analogyConnection: 'Mannequin = HTML (structure) | Clothes & accessories = CSS (style) | Complete display = Styled webpage',
    syntax:
`<!-- HTML provides structure -->
<h1 class="title">Hello</h1>

/* CSS provides style */
.title {
  color: blue;
  font-size: 2rem;
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML + CSS Relationship</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: #6366f1;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      font-size: 1.2rem;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="box">HTML + CSS</div>
</body>
</html>`,
    expectedOutput: 'A purple rounded box with white centered text "HTML + CSS".',
    notes: [
      'HTML = Content and Structure | CSS = Design and Layout.',
      'CSS cannot work without HTML — it needs elements to style.',
      'HTML can work without CSS, but it will look plain and unstyled.',
      'Together they create the visual web experience.',
    ],
    commonMistakes: [
      'Trying to create visual designs using only HTML attributes.',
      'Using CSS without proper HTML structure.',
      'Not linking the CSS file correctly to the HTML document.',
    ],
    practicePrompt: 'Create an HTML div and style it with CSS to make a colored box with text inside.',
    interviewQuestions: [
      'Can HTML work without CSS?',
      'Can CSS work without HTML?',
      'How do HTML and CSS communicate with each other?',
    ],
    miniTask: 'Create a profile card using HTML structure and CSS styling with an avatar placeholder, name, and bio.',
  },
  {
    id: 4,
    title: 'CSS Syntax',
    category: 'CSS Basics',
    explanation:
      'CSS syntax consists of a selector and a declaration block. The selector targets which HTML elements to style. The declaration block (inside curly braces {}) contains one or more declarations. Each declaration has a property name and a value, separated by a colon (:), and ends with a semicolon (;). Multiple declarations can be written inside one block.',
    analogy:
      'CSS syntax is like giving instructions to a painter. First, you point at what to paint (selector: "Paint the bedroom"). Then you give specific instructions (declarations: "color: sky blue; finish: matte;"). The painter knows exactly what to do and where.',
    thanglishAnalogy:
      'Painter-kitta solra madhiri irukum CSS syntax. "Antha room-a paint pannu" — adhu selector. "Blue color use pannu, matte finish venum" — adhu property and value. Curly braces {} ku ulle ellaa instructions-um ezhuthanum. Semicolon (;) pottu each instruction separate pannanum — illana painter confuse aaiduvaaru.',
    analogyConnection: 'Selector = "Which room?" | Property = "What to change?" | Value = "How to change?" | Semicolon = End of each instruction',
    syntax:
`selector {
  property1: value1;    /* Declaration 1 */
  property2: value2;    /* Declaration 2 */
}

/* Example */
h1 {
  color: blue;
  font-size: 24px;
  text-align: center;
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Syntax</title>
  <style>
    /* Selector: h1 */
    h1 {
      color: #e11d48;          /* Property: color */
      text-align: center;      /* Property: text-align */
      font-family: Georgia;    /* Property: font-family */
    }

    /* Selector: .info */
    .info {
      background-color: #fef3c7;
      padding: 16px;
      border-left: 4px solid #f59e0b;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Learning CSS Syntax</h1>
  <p class="info">Each CSS rule has a selector, property, and value.</p>
</body>
</html>`,
    expectedOutput: 'A centered red heading and a styled info box with yellow background and orange left border.',
    notes: [
      'Selector targets the HTML element(s) to style.',
      'Properties are predefined CSS keywords (color, font-size, margin, etc.).',
      'Values define how the property should be applied.',
      'Every declaration must end with a semicolon (;).',
    ],
    commonMistakes: [
      'Forgetting the semicolon after a declaration.',
      'Using = instead of : between property and value.',
      'Not closing the curly braces }.',
      'Misspelling property names (e.g., colour instead of color).',
    ],
    practicePrompt: 'Write 3 different CSS rules targeting h1, p, and a div with class "box".',
    interviewQuestions: [
      'What are the three parts of a CSS rule?',
      'What happens if you forget a semicolon in CSS?',
      'What is the difference between a property and a value?',
    ],
    miniTask: 'Create a CSS rule that styles a paragraph with custom color, font-size, line-height, and background.',
  },
  {
    id: 5,
    title: 'CSS Comments',
    category: 'CSS Basics',
    explanation:
      'CSS comments are notes in your code that the browser ignores. They help you explain your code, organize sections, and temporarily disable styles. Comments start with /* and end with */. Everything between these markers is ignored by the browser. Unlike HTML comments (<!-- -->), CSS uses only the /* */ syntax.',
    analogy:
      'CSS comments are like sticky notes on a blueprint. The builder (browser) ignores them, but they help the architect (developer) remember why certain decisions were made. They are notes for humans, not for machines.',
    thanglishAnalogy:
      'Blueprint-la sticky notes otta madhiri dhaan CSS comments. Builder (browser) antha notes-a padikkaadhu, aanaa architect (developer) ku purpose puriyum. "Indha room-ku green color yaen potrukku" nu note pottu vechukkalam — adhe madhiri CSS-la comments ezhuthuna, naalaikku neenga-ve code paakum bodhu confuse aaga maateenga.',
    analogyConnection: 'Sticky notes on blueprint = CSS comments | Builder = Browser (ignores comments) | Architect = Developer (reads comments)',
    syntax:
`/* This is a single-line comment */

/*
  This is a
  multi-line comment
*/

/* Temporarily disable a style */
/* color: red; */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Comments</title>
  <style>
    /* === Header Styles === */
    h1 {
      color: #6366f1;
      /* font-size: 3rem; -- too big, using 2rem */
      font-size: 2rem;
    }

    /* === Paragraph Styles === */
    p {
      color: #475569;
      line-height: 1.8;
    }

    /*
      TODO: Add responsive styles
      for mobile screens later
    */
  </style>
</head>
<body>
  <h1>CSS Comments Demo</h1>
  <p>Comments help organize and explain your CSS code.</p>
</body>
</html>`,
    expectedOutput: 'A styled heading and paragraph. The comments are invisible in the browser output.',
    notes: [
      'CSS comments use /* */ syntax only — not // or <!-- -->.',
      'Comments can span multiple lines.',
      'Use comments to organize CSS into sections.',
      'Comments can temporarily disable CSS rules for debugging.',
    ],
    commonMistakes: [
      'Using // for CSS comments — this only works in JavaScript, not CSS.',
      'Using HTML comment syntax <!-- --> inside CSS.',
      'Forgetting to close a comment with */ — breaks all CSS below it.',
      'Nesting comments /* outer /* inner */ */ — not allowed.',
    ],
    practicePrompt: 'Add section comments to organize your CSS and use a comment to temporarily disable one style.',
    interviewQuestions: [
      'How do you write a comment in CSS?',
      'Can CSS comments be nested?',
      'What is the difference between HTML and CSS comment syntax?',
    ],
    miniTask: 'Create a CSS file with organized section comments for Header, Body, Footer styles.',
  },

  // ===================== WAYS TO ADD CSS =====================
  {
    id: 6,
    title: 'Inline CSS',
    category: 'Ways to Add CSS',
    explanation:
      'Inline CSS applies styles directly to a single HTML element using the style attribute. The CSS is written inside the opening tag itself. Inline CSS has the highest specificity (priority) among the three methods, meaning it overrides internal and external CSS. However, it is not recommended for large projects because it mixes content with presentation and is hard to maintain.',
    analogy:
      'Inline CSS is like painting one specific wall with a brush by hand. You are directly applying color to that one wall only. It works for small touch-ups but is impractical if you need to paint the entire house.',
    thanglishAnalogy:
      'Oru room-la oru wall-ku mattum neenga-ve direct-a paint pannura madhiri dhaan inline CSS. Quick fix-ku ok, aanaa full house-ku neenga-ve hand-la paint pannuna? Very tiresome! Adhuku professional painter (external CSS) use pannuvom. Inline CSS-a overa use panna code messy aaidum.',
    analogyConnection: 'Hand painting one wall = Inline CSS | Professional painter = External CSS | Quick fix = Small one-off styles',
    syntax:
`<element style="property: value; property: value;">
  Content
</element>

<!-- Example -->
<p style="color: red; font-size: 18px;">Styled text</p>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inline CSS</title>
</head>
<body>
  <h1 style="color: #6366f1; text-align: center;">Inline Styled Heading</h1>
  <p style="color: #475569; font-size: 18px; line-height: 1.8;">
    This paragraph is styled using inline CSS.
  </p>
  <p style="background-color: #fef3c7; padding: 12px; border-radius: 8px;">
    Inline CSS has the highest priority.
  </p>
</body>
</html>`,
    expectedOutput: 'A centered purple heading and two paragraphs with different inline styles.',
    notes: [
      'Inline CSS has the highest specificity — overrides internal and external CSS.',
      'Written inside the style attribute of an HTML element.',
      'Best for quick one-off styles or dynamic styles via JavaScript.',
      'Not recommended for large-scale styling — hard to maintain.',
    ],
    commonMistakes: [
      'Using inline CSS for everything — makes code messy and unmaintainable.',
      'Forgetting semicolons between multiple inline properties.',
      'Confusing the style attribute with the <style> tag.',
    ],
    practicePrompt: 'Apply inline CSS to style 3 different elements with different colors and font sizes.',
    interviewQuestions: [
      'What is inline CSS?',
      'What is the specificity of inline CSS?',
      'When should you use inline CSS?',
    ],
    miniTask: 'Create a button with inline CSS: background color, padding, border-radius, and cursor pointer.',
  },
  {
    id: 7,
    title: 'Internal CSS',
    category: 'Ways to Add CSS',
    explanation:
      'Internal CSS (also called embedded CSS) is written inside a <style> tag within the <head> section of an HTML document. It applies to only that single page. Internal CSS is better than inline CSS because it separates styles from content within the same file. It is good for single-page projects or page-specific styles.',
    analogy:
      'Internal CSS is like having a dedicated painter for one room only. The painter (style tag) stays inside that room (HTML file) and follows a list of instructions (CSS rules). The rules are organized, but they only apply to that one room.',
    thanglishAnalogy:
      'Oru room-ku special painter assign pannura madhiri dhaan internal CSS. <head> tag-ku ulle <style> tag-la CSS ezhuthuvom. Antha oru HTML page-ku mattum dhaan apply aagum. Inline CSS madhiri messy illai, aanaa multiple pages-ku reuse panna mudiyaadhu. Single page project-ku best choice.',
    analogyConnection: '<style> tag = Painter\'s instruction list | <head> = Where instructions are kept | Single page = One room only',
    syntax:
`<head>
  <style>
    selector {
      property: value;
    }
  </style>
</head>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Internal CSS</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f8fafc;
      padding: 24px;
    }
    h1 {
      color: #6366f1;
      border-bottom: 3px solid #6366f1;
      padding-bottom: 8px;
    }
    .highlight {
      background-color: #eef2ff;
      padding: 16px;
      border-radius: 10px;
      color: #4338ca;
    }
  </style>
</head>
<body>
  <h1>Internal CSS Demo</h1>
  <p class="highlight">This paragraph is styled using internal CSS inside the style tag.</p>
</body>
</html>`,
    expectedOutput: 'A page with light background, a purple heading with underline, and a highlighted paragraph.',
    notes: [
      'Internal CSS is written inside <style> tags in the <head> section.',
      'Applies only to the current HTML page.',
      'Better organization than inline CSS.',
      'Good for single-page or page-specific styles.',
    ],
    commonMistakes: [
      'Placing <style> tag inside <body> instead of <head>.',
      'Using internal CSS for multi-page projects — leads to code duplication.',
      'Forgetting to close the </style> tag.',
    ],
    practicePrompt: 'Create a page using only internal CSS with at least 4 different CSS rules.',
    interviewQuestions: [
      'Where do you place internal CSS?',
      'What is the difference between inline and internal CSS?',
      'When would you choose internal CSS over external?',
    ],
    miniTask: 'Build a simple profile card using only internal CSS with multiple styled elements.',
  },
  {
    id: 8,
    title: 'External CSS',
    category: 'Ways to Add CSS',
    explanation:
      'External CSS is the most recommended method. CSS rules are written in a separate .css file and linked to the HTML using the <link> tag. One CSS file can style multiple HTML pages, making it easy to maintain a consistent look across an entire website. Any change to the CSS file automatically updates all linked pages.',
    analogy:
      'External CSS is like a professional interior design company. They create a master design document (CSS file) that applies to all buildings (HTML pages) they work on. Change the document once, and every building gets updated — efficient and consistent.',
    thanglishAnalogy:
      'Interior design company oru master plan create pannuvanga. Antha plan-a follow pannuna, ella veedu-kum same style varum. Oru change pannuna, ella veedu-kum apply aagum. Adhe madhiri external CSS file oru separate file-la ezhuthuvom, ellaa HTML pages-kum link pannuvom. Oru change — complete website updated! Idhu dhaan professional approach.',
    analogyConnection: 'Design company plan = External CSS file | All buildings = All HTML pages | <link> tag = Contract connecting plan to building',
    syntax:
`<!-- In HTML file -->
<head>
  <link rel="stylesheet" href="style.css">
</head>

/* In style.css file */
selector {
  property: value;
}`,
    codeExample:
`<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>External CSS</title>
  <!-- Link to external CSS file -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>External CSS Demo</h1>
  <p class="description">This page is styled using an external CSS file.</p>
  <div class="info-box">
    External CSS is the best practice for multi-page websites.
  </div>
</body>
</html>

/* style.css */
body {
  font-family: 'Segoe UI', sans-serif;
  background: #f0fdf4;
  padding: 24px;
}
h1 {
  color: #16a34a;
}
.description {
  color: #475569;
  font-size: 18px;
}
.info-box {
  background: #dcfce7;
  padding: 20px;
  border-left: 4px solid #16a34a;
  border-radius: 8px;
  margin-top: 16px;
}`,
    expectedOutput: 'A green-themed page with heading, description, and info box — all styled from an external file.',
    notes: [
      'External CSS is the industry standard and best practice.',
      'One CSS file can style multiple HTML pages.',
      'Changes to the CSS file update all linked pages automatically.',
      'The <link> tag goes inside the <head> section.',
    ],
    commonMistakes: [
      'Wrong file path in the href attribute — CSS won\'t load.',
      'Using <style> tag syntax in an external CSS file (no <style> tags needed).',
      'Forgetting rel="stylesheet" in the <link> tag.',
      'Not saving the file with .css extension.',
    ],
    practicePrompt: 'Create separate HTML and CSS files. Link them and style the page with at least 5 CSS rules.',
    interviewQuestions: [
      'What is external CSS and why is it preferred?',
      'How do you link an external CSS file to HTML?',
      'What happens if the CSS file path is wrong?',
    ],
    miniTask: 'Create two HTML pages that share the same external CSS file for consistent styling.',
  },

  // ===================== CSS SELECTORS =====================
  {
    id: 9,
    title: 'Element Selector',
    category: 'CSS Selectors',
    explanation:
      'The element selector (also called type selector) targets all instances of a specific HTML element by its tag name. For example, p {} styles ALL paragraphs on the page, h1 {} styles ALL h1 headings. It is the simplest selector but has the lowest specificity. It\'s useful for setting base styles.',
    analogy:
      'Element selector is like saying "Paint ALL doors in the house blue." Every door, regardless of which room it\'s in, gets painted. It is a broad instruction — no specific targeting.',
    thanglishAnalogy:
      'Veedu-la "Ella door-kum blue color paint pannu" nu sonna, kitchen door, bedroom door, bathroom door — ellaam blue aaidum. Adhe madhiri h1 {} nu ezhuthuna, page-la irukura ELLAA h1 tags-kum style apply aagum. Broad selection — specific illai, aanaa base style-ku useful.',
    analogyConnection: 'Element name = "All doors" | CSS rule = "Paint them blue" | All matching elements = All doors in house',
    syntax:
`element {
  property: value;
}

/* Examples */
h1 { color: blue; }
p { font-size: 16px; }
div { margin: 10px; }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Element Selector</title>
  <style>
    h1 { color: #6366f1; }
    p {
      color: #475569;
      line-height: 1.8;
      font-size: 16px;
    }
    a {
      color: #e11d48;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h1>Element Selector</h1>
  <p>This paragraph is styled by the element selector.</p>
  <p>So is this one — ALL p tags get the same style.</p>
  <a href="#">This link is styled red without underline.</a>
</body>
</html>`,
    expectedOutput: 'Purple heading, two gray paragraphs with same style, and a red link without underline.',
    notes: [
      'Targets ALL elements of that tag type on the page.',
      'Has the lowest specificity — easily overridden by class/ID selectors.',
      'Great for setting base/default styles.',
      'Use more specific selectors when you need to target individual elements.',
    ],
    commonMistakes: [
      'Expecting element selector to target only one element — it targets ALL.',
      'Not realizing that element selectors have low specificity.',
      'Using element selectors when class selectors would be more appropriate.',
    ],
    practicePrompt: 'Style all headings, paragraphs, and links on a page using element selectors.',
    interviewQuestions: [
      'What is an element selector?',
      'Does the element selector target one or all matching elements?',
      'What is the specificity of an element selector?',
    ],
    miniTask: 'Create a page with h1, h2, p, and a elements — style each using element selectors only.',
  },
  {
    id: 10,
    title: 'Class Selector',
    category: 'CSS Selectors',
    explanation:
      'The class selector targets elements that have a specific class attribute. It is written with a dot (.) followed by the class name. Multiple elements can share the same class, and one element can have multiple classes. Class selectors are the most commonly used selectors in CSS because they are reusable and specific enough for most use cases.',
    analogy:
      'Class selector is like giving a group of employees the same uniform color. All employees in "Team Blue" wear blue, regardless of their role. Multiple people can be in Team Blue, and one person can belong to multiple teams.',
    thanglishAnalogy:
      'Office-la "Team Blue" nu oru group irukku. Team Blue-la irukura ella members-kum blue t-shirt kuduppanga. Oru person "Team Blue" and "Team Marketing" rendu group-la-yum irukkalam. Adhe madhiri HTML-la class="highlight" pottu, CSS-la .highlight {} nu ezhuthuna, antha class irukura ELLA elements-kum style varum.',
    analogyConnection: '.className = Team name | Elements with class = Team members | Multiple classes = Belonging to multiple teams',
    syntax:
`.className {
  property: value;
}

/* HTML: <p class="highlight">Text</p> */
/* Multiple classes: <p class="highlight large">Text</p> */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Class Selector</title>
  <style>
    .primary {
      color: #6366f1;
      font-weight: bold;
    }
    .highlight {
      background-color: #fef3c7;
      padding: 12px;
      border-radius: 8px;
    }
    .large {
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <h1 class="primary">Class Selector Demo</h1>
  <p class="highlight">This has the highlight class.</p>
  <p class="highlight large">This has BOTH highlight and large classes.</p>
  <p class="primary">This paragraph also uses the primary class.</p>
</body>
</html>`,
    expectedOutput: 'Purple bold heading, two highlighted paragraphs (one larger), and another purple paragraph.',
    notes: [
      'Class selectors start with a dot (.)',
      'Classes are reusable — multiple elements can share one class.',
      'One element can have multiple classes separated by spaces.',
      'Class selectors have medium specificity — higher than element selectors.',
    ],
    commonMistakes: [
      'Forgetting the dot (.) in the CSS selector.',
      'Using spaces within a class name — use hyphens or camelCase instead.',
      'Starting a class name with a number — not valid.',
      'Confusing class with id — class is reusable, id is unique.',
    ],
    practicePrompt: 'Create 3 elements sharing a class and 1 element with multiple classes.',
    interviewQuestions: [
      'What is the syntax of a class selector?',
      'Can multiple elements have the same class?',
      'Can one element have multiple classes?',
    ],
    miniTask: 'Build a set of notification boxes (success, warning, error) using different CSS classes.',
  },
  {
    id: 11,
    title: 'ID Selector',
    category: 'CSS Selectors',
    explanation:
      'The ID selector targets a single, unique element by its id attribute. It is written with a hash (#) followed by the ID name. Unlike classes, an ID must be unique on a page — only ONE element should have a specific ID. ID selectors have high specificity, meaning they override class and element selectors.',
    analogy:
      'An ID is like an Aadhaar number — unique to one person. No two people share the same Aadhaar number. Similarly, no two elements should share the same ID on a page.',
    thanglishAnalogy:
      'Aadhaar number madhiri irukum ID selector. Aadhaar number unique — oru person-ku mattum irukum. Adhe madhiri id="main-title" oru page-la oru element-ku mattum kodukanum. #main-title {} nu ezhuthuna, antha oru specific element-ku mattum style apply aagum. Class reusable, ID unique — idhu remember pannunga.',
    analogyConnection: 'ID = Aadhaar number | One element = One person | # symbol = "Unique identifier" | High specificity = High priority',
    syntax:
`#idName {
  property: value;
}

/* HTML: <div id="header">Content</div> */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ID Selector</title>
  <style>
    #main-heading {
      color: #e11d48;
      text-align: center;
      font-size: 2rem;
      border-bottom: 3px solid #e11d48;
      padding-bottom: 12px;
    }
    #intro {
      background: #fff1f2;
      padding: 20px;
      border-radius: 12px;
      color: #9f1239;
    }
  </style>
</head>
<body>
  <h1 id="main-heading">ID Selector Demo</h1>
  <p id="intro">This element has a unique ID and specific styling.</p>
</body>
</html>`,
    expectedOutput: 'A centered red heading with underline and a pink-background intro paragraph.',
    notes: [
      'ID selectors start with a hash (#).',
      'Each ID must be unique on a page — only one element per ID.',
      'ID selectors have higher specificity than class selectors.',
      'IDs are also used for JavaScript targeting and anchor links.',
    ],
    commonMistakes: [
      'Using the same ID on multiple elements — violates HTML rules.',
      'Forgetting the # symbol in the CSS selector.',
      'Overusing ID selectors — classes are more flexible and reusable.',
      'Using ID selectors for everything instead of classes.',
    ],
    practicePrompt: 'Create a page with unique ID selectors for the header, main content, and footer.',
    interviewQuestions: [
      'What is the difference between class and ID selectors?',
      'Can two elements have the same ID?',
      'Which has higher specificity — class or ID?',
    ],
    miniTask: 'Style a unique hero section using an ID selector with background gradient and centered text.',
  },
  {
    id: 12,
    title: 'Universal Selector',
    category: 'CSS Selectors',
    explanation:
      'The universal selector (*) targets ALL elements on a page. It is often used for CSS resets — removing default browser margins and paddings. While powerful, it should be used carefully because it affects every single element, which can have unintended side effects and performance implications on large pages.',
    analogy:
      'The universal selector is like a building manager announcing "Everyone must follow this rule!" — it applies to every single person (element) in the building, no exceptions.',
    thanglishAnalogy:
      'Building manager "Ellaarum shoes kazhattanum" nu announce pannuna, ella floor-la-yum, ella room-la-yum irukura ellaarum follow pannanum. Adhe madhiri * {} nu ezhuthuna, page-la irukura EVERY SINGLE ELEMENT-kum style apply aagum. CSS reset-ku use pannuvom — default margin, padding ellaam remove panna.',
    analogyConnection: '* = "Everyone" | All elements = All people in building | CSS reset = Building-wide rule',
    syntax:
`* {
  property: value;
}

/* Common use: CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Universal Selector</title>
  <style>
    /* CSS Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', sans-serif;
      padding: 24px;
      background: #f8fafc;
    }
    h1 {
      color: #6366f1;
      margin-bottom: 16px;
    }
    p {
      color: #475569;
      margin-bottom: 12px;
    }
  </style>
</head>
<body>
  <h1>Universal Selector Demo</h1>
  <p>The * selector removed all default margins and padding.</p>
  <p>Now we add our own spacing using specific selectors.</p>
</body>
</html>`,
    expectedOutput: 'A clean page with no default browser spacing — all margins and paddings are controlled manually.',
    notes: [
      'The * selector targets every element on the page.',
      'Commonly used for CSS resets (removing defaults).',
      'box-sizing: border-box is a popular universal reset.',
      'Use sparingly — it can slow down rendering on complex pages.',
    ],
    commonMistakes: [
      'Adding heavy styles to * — slows down page rendering.',
      'Expecting * to work like a class — it targets everything.',
      'Forgetting that * affects inputs, buttons, and other form elements too.',
    ],
    practicePrompt: 'Create a CSS reset using the universal selector, then add specific styles for elements.',
    interviewQuestions: [
      'What does the universal selector (*) do?',
      'What is a CSS reset?',
      'Why is box-sizing: border-box commonly used with *?',
    ],
    miniTask: 'Write a CSS reset and then build a clean layout on top of it.',
  },
  {
    id: 13,
    title: 'Group Selector',
    category: 'CSS Selectors',
    explanation:
      'The group selector allows you to apply the same CSS rules to multiple selectors at once by separating them with commas. Instead of writing the same styles for h1, h2, and h3 separately, you can group them: h1, h2, h3 { color: blue; }. This reduces code duplication and makes CSS more maintainable.',
    analogy:
      'Group selector is like telling three friends at once: "You, you, and you — all wear blue shirts." One instruction, multiple people.',
    thanglishAnalogy:
      'Three friends-kitta "Neenga moonu perum blue shirt podanum" nu oru vaarthai-la sollura madhiri dhaan group selector. h1, h2, h3 { color: blue; } nu ezhuthuna, moonu elements-kum same style apply aagum. Separate-a moonu rules ezhudha vendaam — code clean-a irukum.',
    analogyConnection: 'Comma-separated selectors = "You, you, and you" | Same rule = Same instruction for all',
    syntax:
`selector1, selector2, selector3 {
  property: value;
}

/* Example */
h1, h2, h3 {
  color: #6366f1;
  font-family: Georgia;
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Group Selector</title>
  <style>
    h1, h2, h3 {
      color: #6366f1;
      font-family: Georgia, serif;
    }
    .card, .alert, .badge {
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 12px;
    }
    .card { background: #eef2ff; }
    .alert { background: #fef3c7; }
    .badge { background: #dcfce7; }
  </style>
</head>
<body>
  <h1>Main Heading</h1>
  <h2>Sub Heading</h2>
  <h3>Minor Heading</h3>
  <div class="card">Card</div>
  <div class="alert">Alert</div>
  <div class="badge">Badge</div>
</body>
</html>`,
    expectedOutput: 'Three purple headings and three colored boxes with shared border-radius and padding.',
    notes: [
      'Selectors are separated by commas.',
      'Reduces code repetition — write once, apply to many.',
      'You can mix selector types: h1, .class, #id { }.',
      'If one selector in the group is invalid, others still work.',
    ],
    commonMistakes: [
      'Forgetting the comma between selectors.',
      'Confusing group selector (comma) with descendant selector (space).',
      'Writing too many selectors in one group — hard to read.',
    ],
    practicePrompt: 'Use a group selector to apply the same font, color, and margin to h1, h2, and p elements.',
    interviewQuestions: [
      'What is a group selector?',
      'How do you write a group selector?',
      'Can you mix different selector types in a group?',
    ],
    miniTask: 'Group-style all heading tags (h1-h6) with a common font-family and color.',
  },
  {
    id: 14,
    title: 'Attribute Selector',
    category: 'CSS Selectors',
    explanation:
      'Attribute selectors target elements based on their HTML attributes or attribute values. For example, [type="text"] targets all inputs with type="text". You can also use partial matching: [class^="btn"] (starts with), [href$=".pdf"] (ends with), [title*="hello"] (contains). They are powerful for styling form elements and links based on attributes.',
    analogy:
      'Attribute selector is like a security guard checking ID badges. "Only people with VIP badges (attribute) can enter this area." You target elements based on what attributes they carry.',
    thanglishAnalogy:
      'Security guard "VIP badge irukuravanga mattum ulle vaanga" nu solra madhiri attribute selector. Element-la type="text" iruntha mattum style apply aagum. [href$=".pdf"] nu ezhuthuna, .pdf link-ku mattum special style varum. Badge check pannura madhiri, CSS attribute check pannum.',
    analogyConnection: 'Attribute = ID badge | Selector = Security guard checking badge | Matching = Badge matches criteria',
    syntax:
`[attribute] { }              /* Has the attribute */
[attribute="value"] { }      /* Exact match */
[attribute^="value"] { }     /* Starts with */
[attribute$="value"] { }     /* Ends with */
[attribute*="value"] { }     /* Contains */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Attribute Selector</title>
  <style>
    input[type="text"] {
      border: 2px solid #6366f1;
      padding: 10px;
      border-radius: 8px;
      font-size: 16px;
    }
    input[type="email"] {
      border: 2px solid #10b981;
      padding: 10px;
      border-radius: 8px;
    }
    a[target="_blank"] {
      color: #e11d48;
    }
    a[href$=".pdf"]::after {
      content: " 📄";
    }
  </style>
</head>
<body>
  <input type="text" placeholder="Text input (purple border)"><br><br>
  <input type="email" placeholder="Email input (green border)"><br><br>
  <a href="https://example.com" target="_blank">External Link (red)</a><br>
  <a href="document.pdf">Download PDF</a>
</body>
</html>`,
    expectedOutput: 'Text input with purple border, email input with green border, red external link, and PDF link with icon.',
    notes: [
      'Attribute selectors are enclosed in square brackets [].',
      'Useful for styling form inputs by type.',
      'Can match exact values, prefixes, suffixes, and substrings.',
      'Specificity is same as a class selector.',
    ],
    commonMistakes: [
      'Forgetting the quotes around attribute values.',
      'Not understanding the difference between ^=, $=, and *=.',
      'Overusing attribute selectors when classes would be simpler.',
    ],
    practicePrompt: 'Style different input types (text, email, password) with different border colors.',
    interviewQuestions: [
      'What is an attribute selector?',
      'How do you target an input of type "email"?',
      'What does [href$=".pdf"] select?',
    ],
    miniTask: 'Create a form and style each input type differently using attribute selectors.',
  },
  {
    id: 15,
    title: 'Descendant Selector',
    category: 'CSS Selectors',
    explanation:
      'The descendant selector targets elements that are nested inside a specific parent element, at any depth. It is written by placing a space between two selectors: parent child {}. For example, div p {} targets all <p> elements inside any <div>, even if they are deeply nested.',
    analogy:
      'Descendant selector is like saying "All children, grandchildren, and great-grandchildren of this family must follow this rule." It goes to any depth of nesting.',
    thanglishAnalogy:
      'Family-la thatha oru rule pottar: "En family-la irukura ella generation-kum idhu apply aagum." Son, grandson, great-grandson — ellaarum follow pannanum. Adhe madhiri div p {} nu ezhuthuna, div-ku ulle irukura ELLA p tags-kum — direct child aanalum, nested grandchild aanalum — style varum.',
    analogyConnection: 'Parent selector = Thatha (grandfather) | Space = "Inside" | Child elements at any depth = All descendants',
    syntax:
`parent descendant {
  property: value;
}

/* Examples */
div p { color: gray; }        /* Any p inside any div */
.container .item { margin: 10px; }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Descendant Selector</title>
  <style>
    .container p {
      color: #6366f1;
      padding: 8px;
      border-left: 3px solid #6366f1;
      margin: 8px 0;
    }
    .container span {
      font-weight: bold;
      color: #e11d48;
    }
  </style>
</head>
<body>
  <div class="container">
    <p>Direct child paragraph - styled ✅</p>
    <div>
      <p>Nested grandchild paragraph - also styled ✅</p>
      <p>Another deeply nested <span>paragraph</span> ✅</p>
    </div>
  </div>
  <p>Outside paragraph - NOT styled ❌</p>
</body>
</html>`,
    expectedOutput: 'Three purple paragraphs inside the container (including nested ones). The outside paragraph is unstyled.',
    notes: [
      'Uses a space between selectors: parent child.',
      'Targets elements at ANY depth of nesting.',
      'Very commonly used in CSS.',
      'Can chain multiple levels: .nav ul li a { }.',
    ],
    commonMistakes: [
      'Confusing descendant (space) with child (>) selector.',
      'Using too many levels of descendant selectors — hard to maintain.',
      'Not understanding that it targets ALL nested elements, not just direct children.',
    ],
    practicePrompt: 'Create a nested structure and use descendant selectors to style only nested elements.',
    interviewQuestions: [
      'What is a descendant selector?',
      'Does it target only direct children?',
      'How is it different from the child selector?',
    ],
    miniTask: 'Build a navigation list inside a header and style only the links inside the nav using descendant selectors.',
  },
  {
    id: 16,
    title: 'Child Selector',
    category: 'CSS Selectors',
    explanation:
      'The child selector (>) targets only the direct children of a parent element — not grandchildren or deeper descendants. It is written as parent > child {}. Unlike the descendant selector (space), the child selector is more restrictive and precise, only affecting the immediately nested elements.',
    analogy:
      'Child selector is like a parent saying "Only MY direct children follow this rule — not grandchildren." It is a one-level-deep rule only.',
    thanglishAnalogy:
      'Appa sonna rule appa-oda direct children-ku mattum apply aagum — grandchildren-ku apply aagaadhu. div > p {} nu ezhuthuna, div-oda direct p children-ku mattum style varum. Nested div-ku ulle irukura p-ku varaadhu. "Direct children only" — adhu dhaan child selector.',
    analogyConnection: '> symbol = "Direct children only" | parent > child = One level deep | Not grandchildren = No deep nesting',
    syntax:
`parent > child {
  property: value;
}

/* Example */
ul > li { color: blue; }       /* Only direct li children of ul */
.nav > a { font-weight: bold; }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Child Selector</title>
  <style>
    .parent > p {
      color: #6366f1;
      font-weight: bold;
      border-left: 3px solid #6366f1;
      padding-left: 12px;
    }
  </style>
</head>
<body>
  <div class="parent">
    <p>Direct child - styled ✅</p>
    <p>Another direct child - styled ✅</p>
    <div>
      <p>Grandchild - NOT styled ❌</p>
    </div>
  </div>
</body>
</html>`,
    expectedOutput: 'Two purple bold paragraphs (direct children) and one unstyled paragraph (grandchild).',
    notes: [
      'Uses the > symbol between parent and child.',
      'Only targets DIRECT children — one level deep.',
      'More precise than the descendant selector.',
      'Useful when you want to avoid styling nested elements.',
    ],
    commonMistakes: [
      'Using > when you mean descendant (space) — missing nested elements.',
      'Expecting child selector to work at all depths.',
      'Forgetting the > symbol and accidentally using descendant selector.',
    ],
    practicePrompt: 'Create a nested structure and use child selector to style only direct children, showing the difference from descendant selector.',
    interviewQuestions: [
      'What is the child selector?',
      'What is the difference between > and space in CSS selectors?',
      'When would you use child selector over descendant selector?',
    ],
    miniTask: 'Create a list where only the direct li children of the ul are styled, not nested sub-list items.',
  },
  {
    id: 17,
    title: 'Adjacent Sibling Selector',
    category: 'CSS Selectors',
    explanation:
      'The adjacent sibling selector (+) targets an element that immediately follows another element at the same level (siblings). Both elements must share the same parent. For example, h1 + p {} styles the first <p> that comes directly after an <h1>.',
    analogy:
      'Adjacent sibling is like saying "The person sitting RIGHT NEXT to you gets a prize." Only the immediate neighbor, not anyone further away.',
    thanglishAnalogy:
      'Class-la bench-la utkaarukom la. "En pakkathula IMMEDIATE-a ukkandhrukuravangkku chocolate kudukken" nu teacher sonna, oru pakkam irukura ONE person-ku mattum varum. Adhe madhiri h1 + p {} nu ezhuthuna, h1-ku immediate-a next-la irukura FIRST p-ku mattum style varum.',
    analogyConnection: '+ symbol = "Immediately next to" | Sibling = Same parent level | Only one = Only immediate next',
    syntax:
`element1 + element2 {
  property: value;
}

/* Example: First p after h1 */
h1 + p { font-size: 1.2rem; }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Adjacent Sibling</title>
  <style>
    h2 + p {
      color: #6366f1;
      font-size: 1.1rem;
      font-weight: 500;
      border-left: 3px solid #6366f1;
      padding-left: 12px;
    }
  </style>
</head>
<body>
  <h2>Section Title</h2>
  <p>First paragraph after h2 - styled ✅</p>
  <p>Second paragraph - NOT styled ❌</p>
  <h2>Another Section</h2>
  <p>First paragraph after this h2 - styled ✅</p>
</body>
</html>`,
    expectedOutput: 'Only the paragraphs immediately after each h2 are styled purple; subsequent paragraphs are plain.',
    notes: [
      'Uses the + symbol between two selectors.',
      'Targets only the IMMEDIATELY following sibling.',
      'Both elements must share the same parent.',
      'Useful for styling the first paragraph after a heading.',
    ],
    commonMistakes: [
      'Expecting + to select all following siblings — it only selects one.',
      'Using + when elements are not at the same level.',
      'Confusing + (adjacent) with ~ (general sibling).',
    ],
    practicePrompt: 'Use the adjacent sibling selector to style the first paragraph after each heading differently.',
    interviewQuestions: [
      'What does the + selector do?',
      'Does it select all siblings or just one?',
      'What is the difference between + and ~ selectors?',
    ],
    miniTask: 'Style an intro paragraph (immediately after h1) differently from other paragraphs.',
  },
  {
    id: 18,
    title: 'General Sibling Selector',
    category: 'CSS Selectors',
    explanation:
      'The general sibling selector (~) targets ALL sibling elements that follow a specified element at the same level. Unlike + (adjacent sibling) which targets only the immediate next, ~ targets all subsequent siblings. For example, h1 ~ p {} styles ALL <p> elements that come after an <h1> at the same nesting level.',
    analogy:
      'General sibling is like saying "Everyone who entered the room AFTER me gets the same badge." Not just the next person — everyone who came after.',
    thanglishAnalogy:
      'Queue-la neenga ninna appuram, ungalukku pinna vantha ELLAARUKKUM token kuduppanga. "En pinna vantha ellaarukkum" — adhu general sibling selector. h1 ~ p {} nu ezhuthuna, h1-ku appuram irukura ELLA p siblings-kum style varum, immediate mattum illai.',
    analogyConnection: '~ symbol = "All after me" | All following siblings = Everyone who came after in the queue',
    syntax:
`element1 ~ element2 {
  property: value;
}

/* All p after h1 at same level */
h1 ~ p { color: gray; }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>General Sibling Selector</title>
  <style>
    h2 ~ p {
      color: #6366f1;
      padding-left: 12px;
      border-left: 2px solid #c7d2fe;
    }
  </style>
</head>
<body>
  <p>Before h2 - NOT styled ❌</p>
  <h2>Section Title</h2>
  <p>After h2 - styled ✅</p>
  <p>Also after h2 - styled ✅</p>
  <div>Not a p element</div>
  <p>Still after h2 - styled ✅</p>
</body>
</html>`,
    expectedOutput: 'The paragraph before h2 is plain. All three paragraphs after h2 are styled purple with left border.',
    notes: [
      'Uses the ~ symbol between two selectors.',
      'Targets ALL following siblings, not just the immediate next.',
      'Elements must share the same parent.',
      'The matched elements must come AFTER the first element.',
    ],
    commonMistakes: [
      'Confusing ~ with + — ~ selects all, + selects only one.',
      'Expecting ~ to select elements that come BEFORE.',
      'Using ~ with nested elements — it only works at the same level.',
    ],
    practicePrompt: 'Use ~ to style all paragraphs that appear after a heading element.',
    interviewQuestions: [
      'What is the general sibling selector?',
      'How is ~ different from +?',
      'Does ~ select elements before the reference element?',
    ],
    miniTask: 'Create a section where all content after a specific element gets a subtle background style.',
  },
  {
    id: 19,
    title: 'Pseudo Classes',
    category: 'CSS Selectors',
    explanation:
      'Pseudo-classes select elements based on their state or position, not their tag/class/ID. They are written with a colon (:) followed by the pseudo-class name. Common pseudo-classes include :hover (mouse over), :focus (input focused), :first-child, :last-child, :nth-child(), :active, :visited, and :not(). They add interactivity and dynamic styling without JavaScript.',
    analogy:
      'Pseudo-classes are like mood-based rules. "When you are happy (hover), wear yellow. When you are working (focus), wear blue." The style changes based on the element\'s current state.',
    thanglishAnalogy:
      'Mood-based dress code madhiri pseudo-classes. "Happy-a iruntha (hover) yellow shirt podu, serious-a iruntha (focus) blue shirt podu." Element-oda STATE maara style maarum. Mouse mela pona color change aagum, click panna different style varum — JavaScript illaama idhu ellaam CSS-layae possible.',
    analogyConnection: ':hover = Mouse over = Happy mood | :focus = Input active = Working mood | :first-child = First born child',
    syntax:
`:hover    – Mouse is over the element
:focus    – Element is focused (input/button)
:active   – Element is being clicked
:visited  – Link has been visited
:first-child  – First child of parent
:last-child   – Last child of parent
:nth-child(n) – nth child of parent
:not(selector) – Everything except`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pseudo Classes</title>
  <style>
    .btn {
      padding: 12px 24px;
      background: #6366f1;
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s;
    }
    .btn:hover {
      background: #4f46e5;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(99,102,241,0.4);
    }
    .btn:active {
      transform: translateY(0);
    }
    input:focus {
      outline: none;
      border: 2px solid #6366f1;
      box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
    }
    li:first-child { font-weight: bold; }
    li:last-child { color: #e11d48; }
    li:nth-child(even) { background: #f1f5f9; }
  </style>
</head>
<body>
  <button class="btn">Hover Me</button><br><br>
  <input type="text" placeholder="Click to focus" style="padding:10px;border:2px solid #ccc;border-radius:8px;"><br><br>
  <ul>
    <li>First item (bold)</li>
    <li>Second item (even bg)</li>
    <li>Third item</li>
    <li>Fourth item (even bg)</li>
    <li>Last item (red)</li>
  </ul>
</body>
</html>`,
    expectedOutput: 'A button that lifts on hover, an input with focus ring, and a list with alternating backgrounds, bold first, red last.',
    notes: [
      'Pseudo-classes use a single colon (:).',
      ':hover is the most commonly used pseudo-class.',
      ':nth-child() can use numbers, "even", "odd", or formulas like 2n+1.',
      'Pseudo-classes add interactivity without JavaScript.',
    ],
    commonMistakes: [
      'Using double colon (::) for pseudo-classes — :: is for pseudo-elements.',
      'Forgetting that :hover only works on devices with a mouse.',
      'Not understanding :nth-child counting (1-indexed, not 0-indexed).',
    ],
    practicePrompt: 'Create a button with hover/active effects and a list with alternating row colors using pseudo-classes.',
    interviewQuestions: [
      'What are pseudo-classes in CSS?',
      'What is the difference between :first-child and :first-of-type?',
      'Name 5 commonly used pseudo-classes.',
    ],
    miniTask: 'Build a navigation menu where links change color on hover, and the current page link is highlighted.',
  },
  {
    id: 20,
    title: 'Pseudo Elements',
    category: 'CSS Selectors',
    explanation:
      'Pseudo-elements create virtual elements that don\'t exist in the HTML but can be styled with CSS. They are written with double colons (::). The most common are ::before and ::after, which insert content before or after an element. Others include ::first-line, ::first-letter, ::placeholder, and ::selection. They require the content property.',
    analogy:
      'Pseudo-elements are like invisible helpers that add decorations. ::before is like placing a welcome mat before the door, and ::after is like hanging a sign behind it. The mat and sign don\'t exist in the blueprint (HTML) — they are added by the decorator (CSS).',
    thanglishAnalogy:
      'Veedu-oda blueprint-la illai, aanaa decorator welcome mat door munnaadi vechu, door pinthaadi oru sign maaththi — adhu ::before and ::after. HTML-la element illai, aanaa CSS-la oru virtual element create panni, content add pannalam. Stars, arrows, icons — ellaam pseudo-elements use pannalam.',
    analogyConnection: '::before = Welcome mat (before the door) | ::after = Sign behind the door | content property = What to put there',
    syntax:
`element::before {
  content: "text or empty";
  /* other styles */
}

element::after {
  content: "";
  /* other styles */
}

::first-letter { }
::first-line { }
::placeholder { }
::selection { }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pseudo Elements</title>
  <style>
    .quote {
      font-size: 1.2rem;
      color: #475569;
      padding: 20px;
      position: relative;
    }
    .quote::before {
      content: "❝";
      font-size: 3rem;
      color: #6366f1;
      position: absolute;
      top: -10px;
      left: 0;
    }
    .quote::after {
      content: " — StackLearner";
      font-style: italic;
      color: #94a3b8;
      font-size: 0.9rem;
    }
    p::first-letter {
      font-size: 2rem;
      font-weight: bold;
      color: #6366f1;
    }
    ::selection {
      background: #6366f1;
      color: white;
    }
  </style>
</head>
<body>
  <div class="quote">Learning CSS is like painting your imagination on the web.</div>
  <p>This paragraph has a styled first letter — try selecting this text to see custom selection colors!</p>
</body>
</html>`,
    expectedOutput: 'A quote with decorative quotation mark, attribution, a paragraph with large first letter, and custom text selection color.',
    notes: [
      'Pseudo-elements use double colons (::).',
      '::before and ::after REQUIRE the content property.',
      'Pseudo-elements do not exist in the DOM — they are CSS-only.',
      '::selection lets you style user-selected text.',
    ],
    commonMistakes: [
      'Forgetting the content property — ::before/::after won\'t show without it.',
      'Using single colon (:before) — works but :: is the correct modern syntax.',
      'Trying to select pseudo-elements with JavaScript — they don\'t exist in the DOM.',
    ],
    practicePrompt: 'Use ::before and ::after to add decorative elements to a blockquote.',
    interviewQuestions: [
      'What are pseudo-elements?',
      'What is the difference between pseudo-classes and pseudo-elements?',
      'Why is the content property required for ::before and ::after?',
    ],
    miniTask: 'Create a "Required" label using ::after on form labels, and style input placeholders.',
  },

  // ===================== CSS PROPERTIES =====================
  {
    id: 21,
    title: 'Colors',
    category: 'CSS Properties',
    explanation:
      'CSS provides multiple ways to define colors: named colors (red, blue), hexadecimal (#ff0000), RGB (rgb(255,0,0)), RGBA (with transparency), HSL (hue, saturation, lightness), and HSLA. Colors are used in properties like color (text), background-color, border-color, and box-shadow. Understanding color systems helps create harmonious, professional designs.',
    analogy:
      'Colors in CSS are like a paint shop. You can ask for paint by name ("red"), by code (#FF0000), by mixing (RGB), or by describing it (HSL: "a warm, bright, medium-dark red"). Different ways, same result.',
    thanglishAnalogy:
      'Paint kadai-la paint vaanga porrom. "Red kudungo" nu per solla (named), "Code #FF0000 kudungo" nu solla (hex), "Red full, Green zero, Blue zero mix pannunga" nu solla (RGB) — ellaam same color dhaan varum. HSL-la "warm tone, bright-a, medium dark" nu describe pannalam. CSS-la idhe madhiri different methods-la color set pannalam.',
    analogyConnection: 'Named = "Give me red" | Hex = Color code | RGB = Color mixing | HSL = Color description | RGBA/HSLA = With transparency',
    syntax:
`color: red;                    /* Named */
color: #ff0000;                /* Hex */
color: #f00;                   /* Hex shorthand */
color: rgb(255, 0, 0);         /* RGB */
color: rgba(255, 0, 0, 0.5);   /* RGBA (50% transparent) */
color: hsl(0, 100%, 50%);      /* HSL */
color: hsla(0, 100%, 50%, 0.5); /* HSLA */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Colors</title>
  <style>
    .named { color: tomato; }
    .hex { color: #6366f1; }
    .rgb { color: rgb(16, 185, 129); }
    .rgba { color: rgba(239, 68, 68, 0.7); }
    .hsl { color: hsl(262, 83%, 58%); }
    .gradient-box {
      background: linear-gradient(135deg, #6366f1, #ec4899);
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
    }
  </style>
</head>
<body>
  <p class="named">Named color: tomato</p>
  <p class="hex">Hex color: #6366f1</p>
  <p class="rgb">RGB color: rgb(16, 185, 129)</p>
  <p class="rgba">RGBA color: rgba(239, 68, 68, 0.7)</p>
  <p class="hsl">HSL color: hsl(262, 83%, 58%)</p>
  <div class="gradient-box">Gradient Background</div>
</body>
</html>`,
    expectedOutput: 'Five paragraphs in different colors (tomato, indigo, green, transparent red, purple) and a gradient box.',
    notes: [
      'Hex is the most commonly used format.',
      'RGBA adds an alpha (transparency) channel — 0 = invisible, 1 = fully visible.',
      'HSL is more human-readable: H = hue (0-360°), S = saturation (%), L = lightness (%).',
      'CSS has 140+ named colors.',
    ],
    commonMistakes: [
      'Forgetting the # before hex values.',
      'Mixing up RGB order — it is Red, Green, Blue.',
      'Not understanding alpha values in RGBA (0-1, not 0-255).',
    ],
    practicePrompt: 'Create a color palette showing 6 colors defined using 6 different color methods.',
    interviewQuestions: [
      'What are the different ways to define colors in CSS?',
      'What is the difference between RGB and RGBA?',
      'How does HSL work?',
    ],
    miniTask: 'Create a color palette of 5 harmonious colors using HSL with the same hue but different saturation/lightness.',
  },
  {
    id: 22,
    title: 'Background',
    category: 'CSS Properties',
    explanation:
      'CSS background properties control the background of elements. Key properties include: background-color (solid color), background-image (image or gradient), background-size (cover, contain), background-position (center, top), background-repeat (no-repeat, repeat), and background-attachment (fixed, scroll). The shorthand background property combines them all.',
    analogy:
      'Background is like wallpaper or paint on a room\'s walls. You can choose a solid color (paint), a pattern (wallpaper), or an image (mural). You control whether the pattern repeats, how it\'s positioned, and its size.',
    thanglishAnalogy:
      'Room-oda walls-ku paint podalam (background-color), wallpaper ottalam (background-image), or oru periya painting vekkalam (background-image with url). Wallpaper repeat aaganum-a vendaam-a (background-repeat), wall-oda center-la irukkanum-a corner-la irukkanum-a (background-position) — ellaam CSS-la control pannalam.',
    analogyConnection: 'Paint = background-color | Wallpaper = background-image repeat | Mural = background-image cover | Position = Where on the wall',
    syntax:
`background-color: #f0f4ff;
background-image: url('image.jpg');
background-size: cover;            /* cover | contain | px */
background-position: center;       /* center | top | bottom */
background-repeat: no-repeat;      /* repeat | no-repeat */
background-attachment: fixed;       /* fixed | scroll */

/* Shorthand */
background: #f0f4ff url('image.jpg') no-repeat center/cover;`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Background</title>
  <style>
    .solid-bg {
      background-color: #eef2ff;
      padding: 20px;
      border-radius: 10px;
      margin-bottom: 16px;
    }
    .gradient-bg {
      background: linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899);
      color: white;
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      margin-bottom: 16px;
    }
    .pattern-bg {
      background-color: #1e293b;
      background-image: radial-gradient(circle, #334155 1px, transparent 1px);
      background-size: 20px 20px;
      color: white;
      padding: 30px;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <div class="solid-bg">Solid Background Color</div>
  <div class="gradient-bg">Gradient Background</div>
  <div class="pattern-bg">Pattern Background (CSS only!)</div>
</body>
</html>`,
    expectedOutput: 'Three boxes: one with solid light blue, one with a colorful gradient, and one with a dotted pattern.',
    notes: [
      'background-size: cover fills the element, cropping if needed.',
      'background-size: contain fits the entire image without cropping.',
      'Gradients are created with linear-gradient() or radial-gradient().',
      'The shorthand background property is powerful but order matters.',
    ],
    commonMistakes: [
      'Forgetting quotes around image URLs in background-image.',
      'Confusing background-size cover vs contain.',
      'Not setting background-repeat: no-repeat for large images.',
    ],
    practicePrompt: 'Create three boxes with: 1) solid color, 2) gradient, and 3) an image background.',
    interviewQuestions: [
      'What is the difference between cover and contain?',
      'How do you create a gradient background?',
      'What does background-attachment: fixed do?',
    ],
    miniTask: 'Create a hero section with a gradient overlay on a background image.',
  },
  {
    id: 23,
    title: 'Borders',
    category: 'CSS Properties',
    explanation:
      'The CSS border property adds a visible border around an element. It has three components: border-width (thickness), border-style (solid, dashed, dotted, double, none), and border-color. You can set borders on all sides or individual sides (border-top, border-right, border-bottom, border-left). The shorthand border: width style color; combines all three.',
    analogy:
      'A border is like the fence around a property. You choose the fence height (width), type (wooden/metal/wire = solid/dashed/dotted), and color (paint).',
    thanglishAnalogy:
      'Veedu-ku suttru fence pottru madhiri border. Fence-oda height (border-width), type (wooden fence = solid, wire fence = dashed), color (paint) — ellaam set pannalam. Oru side-ku mattum fence podalaam (border-left), or ella side-kum same fence podalaam (border).',
    analogyConnection: 'Fence = Border | Height = Width | Type = Style | Paint = Color | One side = Individual border',
    syntax:
`border: width style color;      /* Shorthand */
border: 2px solid #6366f1;

border-width: 2px;
border-style: solid;             /* solid|dashed|dotted|double|none */
border-color: #6366f1;

/* Individual sides */
border-top: 3px solid red;
border-bottom: 1px dashed gray;`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Borders</title>
  <style>
    .solid { border: 2px solid #6366f1; padding: 16px; margin: 8px 0; }
    .dashed { border: 2px dashed #10b981; padding: 16px; margin: 8px 0; }
    .dotted { border: 3px dotted #f59e0b; padding: 16px; margin: 8px 0; }
    .mixed {
      border-top: 3px solid #e11d48;
      border-bottom: 3px solid #6366f1;
      border-left: 3px dashed #10b981;
      border-right: 3px dotted #f59e0b;
      padding: 16px;
      margin: 8px 0;
    }
  </style>
</head>
<body>
  <div class="solid">Solid border</div>
  <div class="dashed">Dashed border</div>
  <div class="dotted">Dotted border</div>
  <div class="mixed">Mixed borders (each side different!)</div>
</body>
</html>`,
    expectedOutput: 'Four boxes with different border styles: solid purple, dashed green, dotted yellow, and mixed sides.',
    notes: [
      'The shorthand border sets all sides at once.',
      'border-style must be set — without it, the border won\'t show.',
      'Common styles: solid, dashed, dotted, double, none.',
      'You can set different borders on each side.',
    ],
    commonMistakes: [
      'Setting border-width and border-color but forgetting border-style — nothing shows.',
      'Using border-style: none and wondering why the border disappeared.',
      'Not understanding that padding creates space inside the border.',
    ],
    practicePrompt: 'Create four boxes, each with a different border style, color, and width.',
    interviewQuestions: [
      'What are the three components of a CSS border?',
      'What happens if you don\'t set border-style?',
      'How do you set borders on individual sides?',
    ],
    miniTask: 'Create a card with only a left border (accent border) and no other visible borders.',
  },
  {
    id: 24,
    title: 'Border Radius',
    category: 'CSS Properties',
    explanation:
      'border-radius rounds the corners of an element. You can set a uniform radius (border-radius: 10px) or different radii for each corner. A value of 50% creates a circle (on a square element). border-radius is one of the most-used CSS properties for creating modern, soft-looking UI elements like cards, buttons, and avatars.',
    analogy:
      'Border radius is like sanding the sharp corners of a wooden table. The more you sand (higher value), the rounder the corners become. Sand enough and you get a circle.',
    thanglishAnalogy:
      'Wooden table-oda sharp corners-a sandpaper-la smooth pannura madhiri border-radius. Konjam sand pannuna corners round aagum (border-radius: 10px), romba sand pannuna circle aaidum (border-radius: 50%). Modern UI-la sharp corners avoid pannuvom — soft, rounded look kudukka border-radius use pannuvom.',
    analogyConnection: 'Sandpaper = border-radius | Sharp corners = 0px | Rounded corners = 10-20px | Full circle = 50%',
    syntax:
`border-radius: 10px;              /* All corners */
border-radius: 10px 20px;         /* top-left/bottom-right  top-right/bottom-left */
border-radius: 10px 20px 30px 40px; /* Each corner */
border-radius: 50%;               /* Circle */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Border Radius</title>
  <style>
    .box { width: 120px; height: 120px; background: #6366f1; color: white;
           display: flex; align-items: center; justify-content: center;
           margin: 10px; display: inline-flex; font-size: 0.8rem; text-align: center; }
    .rounded { border-radius: 16px; }
    .more-rounded { border-radius: 30px; }
    .circle { border-radius: 50%; }
    .pill { width: 200px; height: 50px; border-radius: 25px; }
    .custom { border-radius: 30px 0 30px 0; }
  </style>
</head>
<body>
  <div class="box rounded">16px</div>
  <div class="box more-rounded">30px</div>
  <div class="box circle">50%</div>
  <div class="box pill">Pill shape</div>
  <div class="box custom">Custom corners</div>
</body>
</html>`,
    expectedOutput: 'Five purple boxes with progressively rounder corners, including a circle, pill shape, and custom diagonal corners.',
    notes: [
      'border-radius: 50% on a square creates a perfect circle.',
      'Pill shapes use a border-radius equal to half the height.',
      'You can round individual corners separately.',
      'Works on any element — divs, images, buttons, etc.',
    ],
    commonMistakes: [
      'Expecting a circle from 50% on a rectangle — it creates an ellipse.',
      'Using px for circle instead of % — px requires matching the size.',
      'Not understanding the 4-value shorthand order.',
    ],
    practicePrompt: 'Create a square div and experiment with different border-radius values to make it round.',
    interviewQuestions: [
      'How do you create a circle with CSS?',
      'What does border-radius: 50% do on a rectangle?',
      'How do you round only specific corners?',
    ],
    miniTask: 'Create a circular avatar placeholder using border-radius.',
  },
  {
    id: 25,
    title: 'Margin',
    category: 'CSS Properties',
    explanation:
      'Margin creates space OUTSIDE an element, between the element and its neighbors. It pushes other elements away. Margin can be set on all sides (margin), individual sides (margin-top, margin-right, margin-bottom, margin-left), or using shorthand. margin: auto centers a block element horizontally. Margins can also be negative to overlap elements.',
    analogy:
      'Margin is the personal space around a person. Just like you maintain distance from others in a queue, margin keeps elements apart from each other.',
    thanglishAnalogy:
      'Queue-la nikarrom nu imagine pannunga. Ungalukku munnaadi-yum, pinnaadi-yum gap maintain pannuvom — adhu dhaan margin. Sofa vechi irukkrom room-la, sofa-ku surrounding-la konjam gap venum la, illana room crowded-a theriyum. Andha gap dhaan CSS-la margin. Element-ku veliye space create pannum.',
    analogyConnection: 'Personal space = Margin | Element = Person | Neighbors = Adjacent elements | margin: auto = Centering in queue',
    syntax:
`margin: 20px;                    /* All sides */
margin: 10px 20px;               /* Top/Bottom  Left/Right */
margin: 10px 20px 30px 40px;     /* Top Right Bottom Left */
margin-top: 10px;
margin: 0 auto;                  /* Center horizontally */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Margin</title>
  <style>
    .box {
      background: #6366f1;
      color: white;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
    }
    .box-1 { margin-bottom: 20px; }
    .box-2 { margin: 0 auto; max-width: 300px; margin-bottom: 20px; }
    .box-3 { margin-left: 50px; }
  </style>
</head>
<body style="padding: 20px; background: #f8fafc;">
  <div class="box box-1">Margin Bottom: 20px</div>
  <div class="box box-2">Centered with margin: 0 auto</div>
  <div class="box box-3">Margin Left: 50px</div>
</body>
</html>`,
    expectedOutput: 'Three purple boxes: first with bottom gap, second centered, third pushed right by left margin.',
    notes: [
      'Margin creates space OUTSIDE the element.',
      'margin: 0 auto centers a block element horizontally.',
      'Vertical margins can collapse (margin collapsing).',
      'Negative margins are allowed and pull elements closer.',
    ],
    commonMistakes: [
      'Confusing margin (outside) with padding (inside).',
      'Not understanding margin collapsing — adjacent vertical margins merge.',
      'Using margin: auto on inline elements — it only works on block elements.',
    ],
    practicePrompt: 'Create 3 boxes and use margin to space them out, center one, and push one to the right.',
    interviewQuestions: [
      'What is margin collapsing?',
      'How do you center an element with margin?',
      'What is the difference between margin and padding?',
    ],
    miniTask: 'Center a card on the page using margin: 0 auto with a max-width.',
  },
  {
    id: 26,
    title: 'Padding',
    category: 'CSS Properties',
    explanation:
      'Padding creates space INSIDE an element, between the content and the border. It makes the element\'s content area larger without affecting other elements. Like margin, padding can be set on all sides or individually. Unlike margin, padding cannot be negative and does not collapse.',
    analogy:
      'Padding is like the cushioning inside a box. When you ship a fragile item, you add foam padding inside the box to protect it. The foam creates space between the item (content) and the box walls (border).',
    thanglishAnalogy:
      'Online-la phone order pannuna, box-ku ulle foam padding vechirupaanga — phone-ku scratch aagaama. Adhe foam padding madhiri CSS padding, content-ku and border-ku nadhuva space create pannum. Margin veliye space, padding ulle space — idhu dhaan main difference.',
    analogyConnection: 'Box = Element | Foam inside = Padding | Phone = Content | Box walls = Border',
    syntax:
`padding: 20px;                   /* All sides */
padding: 10px 20px;              /* Top/Bottom  Left/Right */
padding: 10px 20px 30px 40px;    /* Top Right Bottom Left */
padding-top: 10px;
padding-left: 20px;`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Padding</title>
  <style>
    .no-padding {
      background: #fee2e2;
      border: 2px solid #ef4444;
      margin-bottom: 16px;
    }
    .with-padding {
      background: #dcfce7;
      border: 2px solid #10b981;
      padding: 24px;
      margin-bottom: 16px;
    }
    .custom-padding {
      background: #eef2ff;
      border: 2px solid #6366f1;
      padding: 10px 30px 10px 30px;
    }
  </style>
</head>
<body style="padding: 20px;">
  <div class="no-padding">No padding — text touches the border!</div>
  <div class="with-padding">24px padding — comfortable spacing inside.</div>
  <div class="custom-padding">Custom padding — more on sides, less on top/bottom.</div>
</body>
</html>`,
    expectedOutput: 'Three colored boxes showing the visual difference between no padding, uniform padding, and custom padding.',
    notes: [
      'Padding creates space INSIDE the element.',
      'Padding cannot be negative (unlike margin).',
      'Padding is included in the element\'s clickable area.',
      'With box-sizing: border-box, padding doesn\'t increase element size.',
    ],
    commonMistakes: [
      'Confusing padding (inside) with margin (outside).',
      'Not using box-sizing: border-box — padding increases total element size.',
      'Setting negative padding — not allowed in CSS.',
    ],
    practicePrompt: 'Create two boxes: one without padding and one with padding. Compare the visual difference.',
    interviewQuestions: [
      'What is the difference between padding and margin?',
      'Can padding be negative?',
      'How does padding interact with box-sizing?',
    ],
    miniTask: 'Create a card component with proper padding and demonstrate how it affects the content area.',
  },
  {
    id: 27,
    title: 'Height and Width',
    category: 'CSS Properties',
    explanation:
      'The width and height properties control the size of an element\'s content area. Values can be in pixels (px), percentages (%), viewport units (vw, vh), or auto. Related properties include min-width, max-width, min-height, and max-height which set constraints. By default, block elements are 100% width and auto height.',
    analogy:
      'Width and height are like specifying the dimensions of a room. "This room should be 4 meters wide and 3 meters tall." max-width is like saying "This room should never be wider than 5 meters, even if the house is bigger."',
    thanglishAnalogy:
      'Room dimensions fix pannura madhiri width and height. "Indha room 4 meter wide, 3 meter tall irukanum" — adhu width: 400px; height: 300px;. max-width: 500px; nu sonna "500px-ku mela pogaadhu, aanaa smaller screen-la shrink aagum" — responsive design-ku important.',
    analogyConnection: 'Room width = CSS width | Room height = CSS height | Maximum allowed = max-width/max-height',
    syntax:
`width: 300px;
height: 200px;
width: 100%;            /* Full parent width */
height: 100vh;          /* Full viewport height */
max-width: 800px;       /* Won't exceed 800px */
min-height: 300px;      /* At least 300px tall */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Height and Width</title>
  <style>
    .fixed { width: 300px; height: 150px; background: #6366f1; color: white;
             display: flex; align-items: center; justify-content: center;
             border-radius: 10px; margin: 10px 0; }
    .responsive { width: 80%; max-width: 500px; height: auto; padding: 20px;
                  background: #10b981; color: white; border-radius: 10px;
                  margin: 10px 0; }
    .full-width { width: 100%; padding: 20px; background: #f59e0b;
                  color: white; border-radius: 10px; margin: 10px 0; }
  </style>
</head>
<body style="padding: 20px;">
  <div class="fixed">Fixed: 300px × 150px</div>
  <div class="responsive">Responsive: 80% width, max 500px</div>
  <div class="full-width">Full Width: 100%</div>
</body>
</html>`,
    expectedOutput: 'Three colored boxes: fixed size, responsive with max-width, and full-width.',
    notes: [
      'Block elements default to 100% width and auto height.',
      'max-width is essential for responsive design.',
      'Height: auto lets the content determine the height.',
      '100vh = full viewport height, 100% = full parent height.',
    ],
    commonMistakes: [
      'Setting fixed widths that break on mobile screens.',
      'Confusing % (parent-relative) with vw/vh (viewport-relative).',
      'Forgetting that border and padding can add to total size (without box-sizing).',
    ],
    practicePrompt: 'Create three boxes: fixed size, percentage width, and responsive with max-width.',
    interviewQuestions: [
      'What is the difference between width and max-width?',
      'What does height: auto do?',
      'What is the difference between % and vw units?',
    ],
    miniTask: 'Create a centered container with max-width: 800px that shrinks on small screens.',
  },
  {
    id: 28,
    title: 'Box Model',
    category: 'CSS Properties',
    explanation:
      'Every HTML element is a rectangular box. The CSS Box Model defines how this box is structured with four layers (inside to outside): Content (the actual content), Padding (space inside the border), Border (the visible edge), and Margin (space outside the border). The total size of an element = content + padding + border + margin. box-sizing: border-box makes padding and border included in the width/height.',
    analogy:
      'The Box Model is like a framed photograph. The photo is the content. The matting around the photo is padding. The frame is the border. The wall space between frames is margin.',
    thanglishAnalogy:
      'Photo frame example: Photo = Content (ulle irukura picture). Matting (photo-ku frame-ku nadhuva white gap) = Padding. Frame itself = Border. Wall-la frame-ku frame-ku nadhuva gap = Margin. Ella element-um indha structure-la dhaan irukum. box-sizing: border-box use pannuna, width set panna, padding + border inclusive-a calculate aagum.',
    analogyConnection: 'Photo = Content | Matting = Padding | Frame = Border | Wall gap = Margin | Total size = All four combined',
    syntax:
`/* Box Model layers */
content  → width, height
padding  → padding
border   → border
margin   → margin

/* Include padding/border in width */
* { box-sizing: border-box; }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Box Model</title>
  <style>
    .box-demo {
      width: 300px;
      padding: 20px;
      border: 5px solid #6366f1;
      margin: 20px;
      background: #eef2ff;
      font-size: 14px;
      color: #475569;
    }
    .border-box {
      box-sizing: border-box;
      width: 300px;
      padding: 20px;
      border: 5px solid #10b981;
      margin: 20px;
      background: #dcfce7;
      font-size: 14px;
    }
  </style>
</head>
<body style="padding:20px;">
  <div class="box-demo">
    <strong>Content-box (default):</strong><br>
    Width: 300px + 40px padding + 10px border = 350px total
  </div>
  <div class="border-box">
    <strong>Border-box:</strong><br>
    Width: 300px total (padding and border included)
  </div>
</body>
</html>`,
    expectedOutput: 'Two boxes: the first is wider than 300px (default), the second is exactly 300px (border-box).',
    notes: [
      'Total element size (default) = width + padding + border + margin.',
      'box-sizing: border-box includes padding and border in the width.',
      'Almost all modern CSS frameworks use box-sizing: border-box globally.',
      'Use browser DevTools to visualize the box model.',
    ],
    commonMistakes: [
      'Not using box-sizing: border-box — layouts break when adding padding.',
      'Forgetting that margin is NOT included in the element\'s visible size.',
      'Not understanding margin collapsing between adjacent elements.',
    ],
    practicePrompt: 'Create two boxes with the same width but different box-sizing. Observe the size difference.',
    interviewQuestions: [
      'What are the four layers of the CSS Box Model?',
      'What is the difference between content-box and border-box?',
      'How do you calculate the total width of an element?',
    ],
    miniTask: 'Create a layout where all elements use border-box and demonstrate its effect on a grid of cards.',
  },
  {
    id: 29,
    title: 'Text Properties',
    category: 'CSS Properties',
    explanation:
      'CSS text properties control how text is displayed. Key properties: text-align (left/center/right/justify), text-decoration (underline/none/line-through), text-transform (uppercase/lowercase/capitalize), text-indent (first line indent), letter-spacing, word-spacing, line-height, white-space, and text-shadow. These properties help create readable, well-formatted text.',
    analogy:
      'Text properties are like formatting options in Microsoft Word — you can align text, underline it, make it uppercase, change line spacing, and add effects.',
    thanglishAnalogy:
      'Microsoft Word-la text format pannura madhiri CSS-la text properties irukku. Center align, underline, UPPERCASE, line spacing — ellaam CSS-la control pannalam. text-align: center nu sonna text page-oda center-la varum. text-transform: uppercase nu sonna ELLA LETTERS-UM CAPITAL aagum.',
    analogyConnection: 'Word formatting = CSS text properties | Bold/Italic = font properties | Alignment = text-align | Line spacing = line-height',
    syntax:
`text-align: center;           /* left|center|right|justify */
text-decoration: underline;   /* none|underline|line-through */
text-transform: uppercase;    /* uppercase|lowercase|capitalize */
letter-spacing: 2px;
line-height: 1.8;
text-shadow: 2px 2px 4px rgba(0,0,0,0.2);`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Text Properties</title>
  <style>
    .centered { text-align: center; }
    .uppercase { text-transform: uppercase; letter-spacing: 3px; color: #6366f1; }
    .line-through { text-decoration: line-through; color: #ef4444; }
    .shadowed { text-shadow: 2px 2px 4px rgba(99,102,241,0.3); font-size: 1.5rem; }
    .spaced { line-height: 2.0; word-spacing: 5px; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <h1 class="centered uppercase">centered uppercase heading</h1>
  <p class="line-through">This text has a line through it (strikethrough).</p>
  <p class="shadowed">This text has a beautiful shadow effect.</p>
  <p class="spaced">This paragraph has increased line height and word spacing for better readability and comfort.</p>
</body>
</html>`,
    expectedOutput: 'Centered uppercase heading, strikethrough text, shadowed text, and well-spaced paragraph.',
    notes: [
      'text-align works on block-level elements.',
      'text-decoration: none removes underlines from links.',
      'line-height should be 1.5-2.0 for body text for readability.',
      'text-shadow can create glow, emboss, and 3D effects.',
    ],
    commonMistakes: [
      'Using text-align on inline elements — it needs a block container.',
      'Confusing text-decoration with font-style.',
      'Setting line-height too small — makes text hard to read.',
    ],
    practicePrompt: 'Style a paragraph with: centered text, 1.8 line-height, 1px letter-spacing, and text-shadow.',
    interviewQuestions: [
      'How do you center text horizontally?',
      'How do you remove underlines from links?',
      'What does text-transform: capitalize do?',
    ],
    miniTask: 'Create a page title with uppercase text, letter-spacing, and a subtle text-shadow.',
  },
  {
    id: 30,
    title: 'Font Properties',
    category: 'CSS Properties',
    explanation:
      'CSS font properties control the typeface and appearance of text. Key properties: font-family (typeface), font-size (size), font-weight (bold/normal/100-900), font-style (normal/italic), and the font shorthand. You can use system fonts, web-safe fonts, or import custom fonts from Google Fonts.',
    analogy:
      'Font properties are like choosing handwriting style. font-family is the pen type (ballpoint vs calligraphy), font-size is how big you write, font-weight is how hard you press (thin/bold), and font-style is regular vs italic cursive.',
    thanglishAnalogy:
      'Notebook-la ezhuthum bodhu pen select pannuvom (font-family), ezhuthu size decide pannuvom (font-size), bold-a ezhuthanum-a light-a ezhuthanum-a decide pannuvom (font-weight). CSS-la-yum apdi dhaan — Google Fonts use pannuna, hundreds of beautiful fonts free-a use pannalam.',
    analogyConnection: 'Pen type = font-family | Writing size = font-size | Pressure = font-weight | Regular vs cursive = font-style',
    syntax:
`font-family: 'Inter', Arial, sans-serif;   /* Font stack */
font-size: 16px;                            /* Size in px, rem, em */
font-weight: bold;                          /* bold|normal|100-900 */
font-style: italic;                         /* normal|italic */

/* Shorthand */
font: italic bold 16px/1.5 'Inter', sans-serif;

/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Inter');`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Font Properties</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');

    .serif { font-family: 'Playfair Display', Georgia, serif;
             font-size: 2rem; font-weight: 700; color: #1e293b; }
    .sans { font-family: 'Inter', sans-serif;
            font-size: 1rem; font-weight: 400; color: #475569; line-height: 1.8; }
    .bold { font-weight: 600; }
    .italic { font-style: italic; }
    .light { font-weight: 300; color: #94a3b8; }
  </style>
</head>
<body style="padding:20px;">
  <h1 class="serif">Beautiful Serif Heading</h1>
  <p class="sans">This is a clean sans-serif paragraph with Inter font.</p>
  <p class="sans bold">This text is semi-bold (600 weight).</p>
  <p class="sans italic">This text is italic style.</p>
  <p class="sans light">This text has light font weight (300).</p>
</body>
</html>`,
    expectedOutput: 'An elegant serif heading, followed by sans-serif paragraphs with varying weights and styles.',
    notes: [
      'Always provide fallback fonts in the font-family stack.',
      'Use rem for font-size for better scalability.',
      'Font-weight values: 100 (thin) to 900 (black/heavy).',
      'Google Fonts is a free resource for custom web fonts.',
    ],
    commonMistakes: [
      'Not providing fallback fonts — if the main font fails, the browser uses defaults.',
      'Using px for all font sizes — rem/em are more responsive.',
      'Loading too many font weights — slows page load.',
    ],
    practicePrompt: 'Import a Google Font and use it with different weights and styles on a page.',
    interviewQuestions: [
      'What is a font stack?',
      'What is the difference between serif and sans-serif?',
      'How do you import and use Google Fonts?',
    ],
    miniTask: 'Create a typography demo page showing a Google Font at different sizes and weights.',
  },
  {
    id: 31,
    title: 'Display Properties',
    category: 'CSS Properties',
    explanation:
      'The display property controls how an element behaves in the layout flow. Key values: block (takes full width, starts new line), inline (only takes needed width, no new line), inline-block (inline but allows width/height), none (hidden), flex (flexible layout), grid (grid layout). Understanding display is fundamental to CSS layout.',
    analogy:
      'Display property is like how furniture is arranged. Block items are like bookshelves — each one takes the full wall width and stacks vertically. Inline items are like books on a shelf — they sit next to each other. Inline-block items are like framed photos — they sit next to each other but you can set their size.',
    thanglishAnalogy:
      'Bookshelf-a wall full-a occupy pannum (block) — next item keezhaye pogum. Books shelf-la pakkathula pakkathula vaikkalam (inline) — aanaa width/height set panna mudiyaadhu. Photo frames table-la pakkathula vekkalam AND size set pannalam (inline-block). display: none nu sonna element invisible aaidum — room-la irundhum yaarkum theriyaadhu.',
    analogyConnection: 'Bookshelf = block | Books on shelf = inline | Photo frames = inline-block | Hidden room = none',
    syntax:
`display: block;          /* Full width, new line */
display: inline;         /* Inline, no width/height */
display: inline-block;   /* Inline but with width/height */
display: none;           /* Completely hidden */
display: flex;           /* Flexbox layout */
display: grid;           /* Grid layout */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Display Properties</title>
  <style>
    .block-demo { display: block; background: #6366f1; color: white;
                  padding: 10px; margin: 5px 0; border-radius: 6px; }
    .inline-demo { display: inline; background: #10b981; color: white;
                   padding: 5px 10px; border-radius: 4px; }
    .inline-block-demo { display: inline-block; background: #f59e0b; color: white;
                         padding: 10px 20px; margin: 4px; border-radius: 6px;
                         width: 120px; text-align: center; }
    .none-demo { display: none; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <h3>Block (full width, stacks vertically):</h3>
  <div class="block-demo">Block 1</div>
  <div class="block-demo">Block 2</div>

  <h3>Inline (side by side, no width/height):</h3>
  <span class="inline-demo">Inline 1</span>
  <span class="inline-demo">Inline 2</span>
  <span class="inline-demo">Inline 3</span>

  <h3>Inline-block (side by side WITH width/height):</h3>
  <div class="inline-block-demo">Box 1</div>
  <div class="inline-block-demo">Box 2</div>
  <div class="inline-block-demo">Box 3</div>

  <div class="none-demo">This element is hidden!</div>
</body>
</html>`,
    expectedOutput: 'Block elements stacking vertically, inline elements side by side, inline-block boxes with fixed widths side by side.',
    notes: [
      'Block elements: div, p, h1-h6, section, header, footer.',
      'Inline elements: span, a, strong, em, img.',
      'display: none removes the element from layout entirely.',
      'visibility: hidden hides element but preserves its space.',
    ],
    commonMistakes: [
      'Setting width/height on inline elements — use inline-block instead.',
      'Confusing display: none with visibility: hidden.',
      'Not understanding that block elements take full width by default.',
    ],
    practicePrompt: 'Create examples showing the difference between block, inline, and inline-block display.',
    interviewQuestions: [
      'What is the difference between inline and block elements?',
      'What does display: inline-block do?',
      'What is the difference between display: none and visibility: hidden?',
    ],
    miniTask: 'Create a horizontal navigation menu using display: inline-block for the list items.',
  },

  // ===================== CSS LAYOUT CONCEPTS =====================
  {
    id: 32,
    title: 'Block, Inline, and Inline-Block',
    category: 'CSS Layout',
    explanation:
      'Understanding the difference between block, inline, and inline-block is crucial for CSS layout. Block elements take the full width and start on a new line. Inline elements only take as much width as their content and flow inline. Inline-block combines both — flows inline but accepts width and height settings. This concept is the foundation of CSS layout.',
    analogy:
      'Block = paragraphs in a document (each starts on a new line). Inline = words within a sentence (flow with the text). Inline-block = images within text (flow inline but have defined dimensions).',
    thanglishAnalogy:
      'Book-la paragraph madhiri block — oru paragraph mudinjha, next line-la start aagum. Words madhiri inline — oru sentence-la words pakkathula pakkathula varum. Images madhiri inline-block — text-oda kooda flow aagum, aanaa specific width/height irukum. Layout build panna indha difference therinjha easy.',
    analogyConnection: 'Paragraph = Block (new line) | Words = Inline (flow) | Images in text = Inline-block (flow + dimensions)',
    syntax:
`/* Block: full width, new line */
div, p, h1, section { display: block; }

/* Inline: content width, no new line */
span, a, strong { display: inline; }

/* Inline-block: inline + width/height */
.box { display: inline-block; width: 100px; }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Block vs Inline vs Inline-block</title>
  <style>
    .demo-section { margin-bottom: 24px; }
    .demo-label { font-weight: bold; color: #6366f1; margin-bottom: 8px; }
    .block { display: block; background: #dbeafe; padding: 8px; margin: 4px 0;
             border: 1px solid #93c5fd; border-radius: 4px; }
    .inline { display: inline; background: #dcfce7; padding: 4px 8px;
              border: 1px solid #86efac; border-radius: 4px; }
    .iblock { display: inline-block; background: #fef3c7; padding: 8px 16px;
              border: 1px solid #fcd34d; border-radius: 4px;
              width: 150px; height: 60px; text-align: center; margin: 4px;
              vertical-align: top; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <div class="demo-section">
    <p class="demo-label">Block Elements:</p>
    <div class="block">Block 1 (full width)</div>
    <div class="block">Block 2 (full width)</div>
  </div>
  <div class="demo-section">
    <p class="demo-label">Inline Elements:</p>
    <span class="inline">Inline 1</span>
    <span class="inline">Inline 2</span>
    <span class="inline">Inline 3</span>
  </div>
  <div class="demo-section">
    <p class="demo-label">Inline-Block Elements:</p>
    <div class="iblock">IBlock 1</div>
    <div class="iblock">IBlock 2</div>
    <div class="iblock">IBlock 3</div>
  </div>
</body>
</html>`,
    expectedOutput: 'Block elements stacking vertically, inline elements flowing horizontally, inline-block boxes with dimensions side by side.',
    notes: [
      'Block: width and height work, margin and padding work fully.',
      'Inline: width and height DO NOT work, vertical margin/padding limited.',
      'Inline-block: all properties work AND flows inline.',
      'Use display property to change any element\'s behavior.',
    ],
    commonMistakes: [
      'Setting width on an inline element and expecting it to work.',
      'Not understanding why vertical margin on inline elements is ignored.',
      'Forgetting that inline-block elements have a small gap between them.',
    ],
    practicePrompt: 'Create a demo showing all three display types with visual labels.',
    interviewQuestions: [
      'What properties don\'t work on inline elements?',
      'How is inline-block different from block?',
      'Name some default block and inline elements.',
    ],
    miniTask: 'Convert a vertical list of links into a horizontal navigation using inline-block.',
  },
  {
    id: 33,
    title: 'Overflow',
    category: 'CSS Layout',
    explanation:
      'The overflow property controls what happens when content exceeds an element\'s specified dimensions. Values: visible (default — content spills out), hidden (clips the overflow), scroll (always shows scrollbars), auto (shows scrollbars only when needed). overflow-x and overflow-y control horizontal and vertical overflow independently.',
    analogy:
      'Overflow is like a cup of water. If you pour too much water (content) into a cup (element), it overflows (visible), you can put a lid on (hidden), add a straw (scroll), or use a smart cup that only adds a straw when full (auto).',
    thanglishAnalogy:
      'Cup-la water over-a oothurom. Cup size fix, water jaasthi vandha overflow aagum (visible). Lid pottu water kaanama pannalam (hidden). Straw use pannu nu solla scrollbar varum (scroll). Smart cup — full aana mattum straw varum (auto). CSS overflow exact-a indha madhiri dhaan work aagum.',
    analogyConnection: 'Cup = Element with fixed size | Water = Content | Overflow = Content exceeding cup size',
    syntax:
`overflow: visible;    /* Default — spills out */
overflow: hidden;     /* Clips content */
overflow: scroll;     /* Always shows scrollbar */
overflow: auto;       /* Scrollbar only when needed */
overflow-x: hidden;   /* Horizontal only */
overflow-y: auto;     /* Vertical only */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Overflow</title>
  <style>
    .box { width: 200px; height: 100px; border: 2px solid #6366f1;
           padding: 10px; margin: 10px; display: inline-block;
           vertical-align: top; border-radius: 8px; font-size: 14px; }
    .visible { overflow: visible; }
    .hidden { overflow: hidden; }
    .scroll { overflow: scroll; }
    .auto { overflow: auto; }
    .label { font-weight: bold; color: #6366f1; font-size: 12px; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <div class="box visible">
    <span class="label">visible:</span><br>
    This content overflows and spills outside the box boundaries.
  </div>
  <div class="box hidden">
    <span class="label">hidden:</span><br>
    This content is clipped when it exceeds the box size.
  </div>
  <div class="box scroll">
    <span class="label">scroll:</span><br>
    This content has scrollbars to navigate through it.
  </div>
  <div class="box auto">
    <span class="label">auto:</span><br>
    Scrollbar appears only when content overflows the box size.
  </div>
</body>
</html>`,
    expectedOutput: 'Four boxes showing different overflow behaviors: spilling, clipped, scrollable, and auto.',
    notes: [
      'overflow: hidden is used to create clean card designs.',
      'overflow: auto is the most practical choice for scrollable containers.',
      'overflow: hidden can clip box-shadows and absolutely positioned children.',
      'To use overflow, the element must have a defined height or max-height.',
    ],
    commonMistakes: [
      'Expecting overflow to work without a fixed height — it needs size constraints.',
      'Using overflow: scroll when auto is more appropriate.',
      'Not understanding that overflow: hidden affects child elements too.',
    ],
    practicePrompt: 'Create a container with a fixed height and try all 4 overflow values with the same long content.',
    interviewQuestions: [
      'What are the values of the overflow property?',
      'What is the difference between scroll and auto?',
      'When is overflow: hidden useful?',
    ],
    miniTask: 'Create a scrollable content area with a fixed height and overflow: auto.',
  },
  {
    id: 34,
    title: 'Position',
    category: 'CSS Layout',
    explanation:
      'The CSS position property defines how an element is placed in the document. Values: static (default normal flow), relative (offset from normal position), absolute (positioned relative to nearest positioned ancestor), fixed (positioned relative to viewport, stays on scroll), sticky (toggles between relative and fixed based on scroll). Position works with top, right, bottom, left properties.',
    analogy:
      'Position is like placing furniture in a room. Static = furniture stays where the builder put it. Relative = move it slightly from its original spot. Absolute = place it anywhere in the room relative to the walls. Fixed = nail it to the window (always visible). Sticky = it sits normally until you scroll past, then sticks.',
    thanglishAnalogy:
      'Furniture placement madhiri position. Static — builder vechi itta idam-la irukum. Relative — original spot-la irundhum konjam shift pannalam. Absolute — room-oda walls-a reference-a vechi, yenga venum-nalum vekkalam. Fixed — window-la nail pannitom, scroll pannaalum aduthe idam-la irukum (like sticky header). Sticky — normal-a irundhum, scroll pannuna stick aaidum.',
    analogyConnection: 'Static = Default placement | Relative = Slight shift | Absolute = Free placement | Fixed = Nailed to window | Sticky = Sticks on scroll',
    syntax:
`position: static;     /* Default */
position: relative;   /* Offset from original */
position: absolute;   /* Relative to positioned ancestor */
position: fixed;      /* Relative to viewport */
position: sticky;     /* Sticks on scroll */

/* Used with: */
top: 10px; right: 10px; bottom: 10px; left: 10px;`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Position</title>
  <style>
    .container { position: relative; background: #f1f5f9; padding: 40px;
                 border: 2px dashed #94a3b8; border-radius: 12px;
                 min-height: 200px; margin: 20px 0; }
    .relative-box { position: relative; top: 20px; left: 30px;
                    background: #6366f1; color: white; padding: 12px;
                    border-radius: 8px; display: inline-block; }
    .absolute-box { position: absolute; top: 10px; right: 10px;
                    background: #e11d48; color: white; padding: 12px;
                    border-radius: 8px; }
    .fixed-box { position: fixed; bottom: 20px; right: 20px;
                 background: #10b981; color: white; padding: 12px 20px;
                 border-radius: 8px; font-weight: bold; z-index: 100;
                 box-shadow: 0 4px 12px rgba(0,0,0,0.2); }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <h2>CSS Position Demo</h2>
  <div class="container">
    <p>This container has position: relative (acts as reference for absolute children)</p>
    <div class="relative-box">Relative (shifted 20px down, 30px right)</div>
    <div class="absolute-box">Absolute (top-right corner)</div>
  </div>
  <div class="fixed-box">Fixed ↓</div>
</body>
</html>`,
    expectedOutput: 'A dashed container with a shifted purple box, a red box in the top-right corner, and a green fixed button in bottom-right.',
    notes: [
      'Absolute positioning needs a positioned parent (relative, absolute, or fixed).',
      'Fixed elements stay visible during scrolling — great for headers and floating buttons.',
      'Sticky elements need a threshold (e.g., top: 0) to know when to stick.',
      'z-index controls stacking order for positioned elements.',
    ],
    commonMistakes: [
      'Using absolute without a positioned parent — it positions relative to <html>.',
      'Forgetting that fixed elements are removed from normal document flow.',
      'Not setting top/right/bottom/left — positioned element stays in place.',
      'Using position for simple layouts when flexbox/grid is better.',
    ],
    practicePrompt: 'Create a container with relative position and place absolute and fixed child elements.',
    interviewQuestions: [
      'What are the five position values in CSS?',
      'What is the reference point for position: absolute?',
      'How does position: sticky work?',
    ],
    miniTask: 'Create a sticky navigation bar that stays at the top when scrolling.',
  },

  // ===================== FLEXBOX =====================
  {
    id: 35,
    title: 'Flex Container',
    category: 'Flexbox',
    explanation:
      'Flexbox is a CSS layout model designed for arranging items in one dimension (row or column). To use flexbox, set display: flex on the parent container. This makes all direct children become flex items. The container controls the layout direction, alignment, spacing, and wrapping of its children. Flexbox eliminates the need for floats and complex positioning for common layouts.',
    analogy:
      'Flexbox is like arranging books on a shelf. The shelf (flex container) decides how the books (flex items) are arranged — side by side, stacked, spaced evenly, or grouped. You tell the shelf how to organize, and it handles all the items automatically.',
    thanglishAnalogy:
      'Bookshelf-la books arrange pannura madhiri Flexbox. Shelf (container) decide pannum — books pakkathula pakkathula vaikkanum-a (row), mela keezhae vaikkanum-a (column), gap kudukanum-a, center-la align pannanum-a. display: flex pottu, container-kitta elaa instructions kudupom, books automatic-a arrange aaidum.',
    analogyConnection: 'Shelf = Flex container | Books = Flex items | Horizontal = Row | Vertical = Column | Spacing = Gap/justify',
    syntax:
`/* Make a flex container */
.container {
  display: flex;                /* Enable flexbox */
  flex-direction: row;          /* row | column */
  justify-content: center;      /* Main axis alignment */
  align-items: center;          /* Cross axis alignment */
  gap: 16px;                    /* Space between items */
  flex-wrap: wrap;              /* Allow wrapping */
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flex Container</title>
  <style>
    .flex-container {
      display: flex;
      gap: 16px;
      padding: 20px;
      background: #f1f5f9;
      border-radius: 12px;
      border: 2px dashed #94a3b8;
    }
    .flex-item {
      background: #6366f1;
      color: white;
      padding: 20px 30px;
      border-radius: 8px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <h2>Flex Container Demo</h2>
  <div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
    <div class="flex-item">Item 4</div>
  </div>
</body>
</html>`,
    expectedOutput: 'Four purple boxes arranged horizontally in a row with even spacing inside a dashed container.',
    notes: [
      'display: flex creates a flex container.',
      'Direct children automatically become flex items.',
      'Default direction is row (horizontal).',
      'Flexbox works in one dimension (row OR column).',
    ],
    commonMistakes: [
      'Forgetting display: flex — flex properties won\'t work without it.',
      'Applying flex properties to children instead of the container.',
      'Using flexbox for 2D layouts — CSS Grid is better for that.',
    ],
    practicePrompt: 'Create a flex container with 4 items and experiment with different gap values.',
    interviewQuestions: [
      'How do you create a flex container?',
      'What happens to children when display: flex is set?',
      'When would you use flexbox vs grid?',
    ],
    miniTask: 'Build a horizontal card layout using flexbox.',
  },
  {
    id: 36,
    title: 'Flex Direction',
    category: 'Flexbox',
    explanation:
      'flex-direction controls the direction in which flex items are arranged. Values: row (left to right, default), row-reverse (right to left), column (top to bottom), column-reverse (bottom to top). The direction also determines the "main axis" and "cross axis" which affect justify-content and align-items.',
    analogy:
      'Flex direction is like choosing how to read text — left-to-right (row), right-to-left (row-reverse), top-to-bottom (column), or bottom-to-top (column-reverse).',
    thanglishAnalogy:
      'Book padikura direction madhiri flex-direction. English book left-to-right (row), Arabic book right-to-left (row-reverse), Chinese book top-to-bottom (column). flex-direction: column nu sonna items mela-irundhum keezhae arrange aagum, row nu sonna left-to-right arrange aagum.',
    analogyConnection: 'row = Left to right reading | column = Top to bottom reading | reverse = Reading backwards',
    syntax:
`flex-direction: row;            /* Default: left to right */
flex-direction: row-reverse;    /* Right to left */
flex-direction: column;         /* Top to bottom */
flex-direction: column-reverse; /* Bottom to top */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flex Direction</title>
  <style>
    .demo { display: flex; gap: 10px; padding: 16px; margin: 12px 0;
            background: #f1f5f9; border-radius: 10px; border: 1px solid #e2e8f0; }
    .item { background: #6366f1; color: white; padding: 12px 20px;
            border-radius: 6px; font-weight: 600; font-size: 14px; }
    .row { flex-direction: row; }
    .row-reverse { flex-direction: row-reverse; }
    .column { flex-direction: column; }
    .column-reverse { flex-direction: column-reverse; }
    .label { font-weight: bold; color: #475569; font-size: 14px; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <p class="label">row (default):</p>
  <div class="demo row">
    <div class="item">1</div><div class="item">2</div><div class="item">3</div>
  </div>
  <p class="label">row-reverse:</p>
  <div class="demo row-reverse">
    <div class="item">1</div><div class="item">2</div><div class="item">3</div>
  </div>
  <p class="label">column:</p>
  <div class="demo column">
    <div class="item">1</div><div class="item">2</div><div class="item">3</div>
  </div>
</body>
</html>`,
    expectedOutput: 'Three sections showing flex items arranged in row, row-reverse, and column directions.',
    notes: [
      'row is the default flex-direction.',
      'Changing direction swaps the main axis and cross axis.',
      'row: main axis = horizontal, cross axis = vertical.',
      'column: main axis = vertical, cross axis = horizontal.',
    ],
    commonMistakes: [
      'Forgetting that flex-direction changes the main axis — justify-content behavior changes.',
      'Using column direction and expecting items to be side by side.',
      'Not understanding how reverse affects visual order vs DOM order.',
    ],
    practicePrompt: 'Create a layout that uses column direction on mobile and row direction on desktop.',
    interviewQuestions: [
      'What are the four flex-direction values?',
      'What is the default flex-direction?',
      'How does flex-direction affect the main axis?',
    ],
    miniTask: 'Create a sidebar layout using flex-direction: column for vertical stacking.',
  },
  {
    id: 37,
    title: 'Justify Content',
    category: 'Flexbox',
    explanation:
      'justify-content aligns flex items along the MAIN axis (horizontal for row, vertical for column). Values: flex-start (default, items at start), flex-end (items at end), center (items centered), space-between (equal space between items), space-around (equal space around items), space-evenly (equal space everywhere). This property is essential for distributing items within a container.',
    analogy:
      'justify-content is like arranging people in a queue. flex-start: everyone at the front. flex-end: everyone at the back. center: everyone in the middle. space-between: spread out evenly with no gaps at edges. space-evenly: equal gaps everywhere including edges.',
    thanglishAnalogy:
      'Queue-la nikaravanga-a arrange pannura madhiri justify-content. flex-start: ellaarum front-la nilpaanga. center: ellaarum middle-la nilpaanga. space-between: start-la oruthar, end-la oruthar, remaining-a equally space-a distribute aagum. space-evenly: ella gap-um equal — edges-la-yum, items nadhuva-la-yum.',
    analogyConnection: 'Queue = Flex container | People = Items | Front = flex-start | Middle = center | Spread out = space-between',
    syntax:
`justify-content: flex-start;      /* Default: items at start */
justify-content: flex-end;        /* Items at end */
justify-content: center;          /* Items centered */
justify-content: space-between;   /* Equal space between */
justify-content: space-around;    /* Equal space around */
justify-content: space-evenly;    /* Equal space everywhere */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Justify Content</title>
  <style>
    .demo { display: flex; padding: 12px; margin: 10px 0;
            background: #f1f5f9; border-radius: 10px; border: 1px solid #e2e8f0; }
    .item { background: #6366f1; color: white; padding: 10px 16px;
            border-radius: 6px; font-weight: 600; font-size: 13px; }
    .label { font-size: 13px; font-weight: bold; color: #475569; margin-top: 8px; }
    .start { justify-content: flex-start; }
    .end { justify-content: flex-end; }
    .center { justify-content: center; }
    .between { justify-content: space-between; }
    .evenly { justify-content: space-evenly; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <p class="label">flex-start:</p>
  <div class="demo start"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>
  <p class="label">flex-end:</p>
  <div class="demo end"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>
  <p class="label">center:</p>
  <div class="demo center"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>
  <p class="label">space-between:</p>
  <div class="demo between"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>
  <p class="label">space-evenly:</p>
  <div class="demo evenly"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>
</body>
</html>`,
    expectedOutput: 'Five rows showing items positioned at start, end, center, and with even spacing variations.',
    notes: [
      'justify-content works on the MAIN axis.',
      'For flex-direction: row, main axis is horizontal.',
      'space-between puts no space at edges.',
      'space-evenly puts equal space everywhere.',
    ],
    commonMistakes: [
      'Confusing justify-content (main axis) with align-items (cross axis).',
      'Using justify-content on individual flex items — it\'s a container property.',
      'Not understanding how flex-direction changes the main axis.',
    ],
    practicePrompt: 'Create a navigation bar with logo on the left and links on the right using space-between.',
    interviewQuestions: [
      'What does justify-content do?',
      'What axis does justify-content work on?',
      'What is the difference between space-between and space-evenly?',
    ],
    miniTask: 'Create a header with a logo on the left and buttons on the right using justify-content: space-between.',
  },
  {
    id: 38,
    title: 'Align Items',
    category: 'Flexbox',
    explanation:
      'align-items aligns flex items along the CROSS axis (perpendicular to the main axis). For row direction, the cross axis is vertical. Values: stretch (default, items stretch to fill container height), flex-start (top), flex-end (bottom), center (vertically centered), baseline (aligned by text baseline). align-items is essential for vertical centering.',
    analogy:
      'If justify-content arranges people left-to-right in a queue, align-items arranges them up-and-down. center means everyone stands at the same height. stretch means everyone stretches to fill the row height.',
    thanglishAnalogy:
      'justify-content horizontal-a arrange pannuna, align-items vertical-a arrange pannum. Items-oda height different irunthaalum, align-items: center nu sonna ellaam vertical center-la align aagum. Vertically center panna aana CSS property — idhu dhaan. "flex container + align-items: center + justify-content: center = perfect centering!"',
    analogyConnection: 'Cross axis alignment = Vertical positioning | center = Middle height | stretch = Fill full height',
    syntax:
`align-items: stretch;      /* Default: items fill height */
align-items: flex-start;   /* Items at top */
align-items: flex-end;     /* Items at bottom */
align-items: center;       /* Vertically centered */
align-items: baseline;     /* Aligned by text baseline */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Align Items</title>
  <style>
    .demo { display: flex; padding: 12px; margin: 10px 0; gap: 10px;
            background: #f1f5f9; border-radius: 10px; border: 1px solid #e2e8f0;
            height: 120px; }
    .item { background: #6366f1; color: white; padding: 10px 16px;
            border-radius: 6px; font-weight: 600; font-size: 13px; }
    .tall { padding: 30px 16px; }
    .label { font-size: 13px; font-weight: bold; color: #475569; margin-top: 8px; }
    .stretch { align-items: stretch; }
    .start { align-items: flex-start; }
    .center { align-items: center; }
    .end { align-items: flex-end; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <p class="label">stretch (default):</p>
  <div class="demo stretch"><div class="item">A</div><div class="item">B</div><div class="item">C</div></div>
  <p class="label">flex-start (top):</p>
  <div class="demo start"><div class="item">A</div><div class="item tall">B tall</div><div class="item">C</div></div>
  <p class="label">center:</p>
  <div class="demo center"><div class="item">A</div><div class="item tall">B tall</div><div class="item">C</div></div>
  <p class="label">flex-end (bottom):</p>
  <div class="demo end"><div class="item">A</div><div class="item tall">B tall</div><div class="item">C</div></div>
</body>
</html>`,
    expectedOutput: 'Four rows showing items aligned at stretch, top, center, and bottom within containers.',
    notes: [
      'align-items works on the CROSS axis.',
      'stretch is the default — items fill the container height.',
      'center is the most used value for vertical centering.',
      'For perfect centering: display: flex + justify-content: center + align-items: center.',
    ],
    commonMistakes: [
      'Confusing align-items (cross axis) with justify-content (main axis).',
      'Expecting align-items to work without a container height.',
      'Using align-items on flex items — use align-self instead.',
    ],
    practicePrompt: 'Create a vertically centered layout using display: flex and align-items: center.',
    interviewQuestions: [
      'What axis does align-items work on?',
      'How do you perfectly center an element with flexbox?',
      'What is the default value of align-items?',
    ],
    miniTask: 'Center a "Login" card both horizontally and vertically in the viewport using flexbox.',
  },
  {
    id: 39,
    title: 'Align Content',
    category: 'Flexbox',
    explanation:
      'align-content aligns the ROWS of flex items (not individual items) along the cross axis when there are multiple rows (flex-wrap: wrap). It only works when flex-wrap is enabled and there are multiple lines. Values are similar to justify-content: flex-start, flex-end, center, space-between, space-around, space-evenly, stretch.',
    analogy:
      'If align-items positions items within a row, align-content positions the rows themselves. Like arranging shelves on a wall — align-items arranges books on each shelf, align-content arranges the shelves vertically on the wall.',
    thanglishAnalogy:
      'align-items = oru shelf-la books arrange pannura madhiri. align-content = shelves-a wall-la yenga vekkanum nu decide pannura madhiri. Multiple rows iruntha dhaan align-content work aagum. flex-wrap: wrap pottu, rows-a center-la, space-between-la, or stretch pannalam.',
    analogyConnection: 'Shelves on wall = Rows of flex items | Wall = Container cross axis | align-content = Shelf positioning',
    syntax:
`align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: stretch;        /* Default */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Align Content</title>
  <style>
    .demo {
      display: flex; flex-wrap: wrap; gap: 10px; padding: 12px;
      background: #f1f5f9; border-radius: 10px; border: 1px solid #e2e8f0;
      height: 250px; width: 350px;
    }
    .item { background: #6366f1; color: white; padding: 8px 16px;
            border-radius: 6px; font-size: 13px; width: 80px; text-align: center; }
    .center { align-content: center; }
    .between { align-content: space-between; }
    .label { font-size: 13px; font-weight: bold; color: #475569; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <p class="label">align-content: center</p>
  <div class="demo center">
    <div class="item">1</div><div class="item">2</div><div class="item">3</div>
    <div class="item">4</div><div class="item">5</div><div class="item">6</div>
  </div>
  <p class="label">align-content: space-between</p>
  <div class="demo between">
    <div class="item">1</div><div class="item">2</div><div class="item">3</div>
    <div class="item">4</div><div class="item">5</div><div class="item">6</div>
  </div>
</body>
</html>`,
    expectedOutput: 'Two containers: one with rows centered vertically, another with rows spaced between top and bottom.',
    notes: [
      'Only works with flex-wrap: wrap (multiple lines).',
      'Aligns ROWS, not individual items.',
      'align-items aligns items within a row, align-content aligns the rows.',
      'Has no effect when there is only one line of items.',
    ],
    commonMistakes: [
      'Using align-content without flex-wrap — it won\'t work.',
      'Confusing align-content with align-items.',
      'Not giving the container a fixed height — no extra space to distribute.',
    ],
    practicePrompt: 'Create a wrapping flex container with enough items to form multiple rows, then test align-content values.',
    interviewQuestions: [
      'What is align-content?',
      'When does align-content work?',
      'What is the difference between align-items and align-content?',
    ],
    miniTask: 'Create a gallery grid using flexbox wrap with centered rows.',
  },
  {
    id: 40,
    title: 'Flex Wrap',
    category: 'Flexbox',
    explanation:
      'By default, flex items try to fit on one line. flex-wrap controls whether items wrap to new lines when they don\'t fit. Values: nowrap (default, single line), wrap (items wrap to next line), wrap-reverse (items wrap upward). Wrapping is essential for responsive designs where items need to flow onto multiple rows.',
    analogy:
      'flex-wrap is like a text editor word-wrap setting. nowrap = text goes off-screen in one long line. wrap = text breaks to the next line when it reaches the edge.',
    thanglishAnalogy:
      'Text editor-la word wrap ON panna, word fit aagala-na next line-ku pogum. OFF panna, oru long line-la pogum. Adhe madhiri flex-wrap: wrap nu sonna items fit aagala-na next row-ku pogum. nowrap nu sonna items shrink aaidum or overflow aagum.',
    analogyConnection: 'Word wrap ON = flex-wrap: wrap | Word wrap OFF = flex-wrap: nowrap | New line = New row',
    syntax:
`flex-wrap: nowrap;         /* Default: single line */
flex-wrap: wrap;           /* Items wrap to next line */
flex-wrap: wrap-reverse;   /* Items wrap upward */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flex Wrap</title>
  <style>
    .demo { display: flex; gap: 10px; padding: 12px; margin: 10px 0;
            background: #f1f5f9; border-radius: 10px; border: 1px solid #e2e8f0; }
    .item { background: #6366f1; color: white; padding: 12px 20px;
            border-radius: 6px; font-weight: 600; min-width: 100px; text-align: center; }
    .no-wrap { flex-wrap: nowrap; }
    .wrap { flex-wrap: wrap; }
    .label { font-size: 13px; font-weight: bold; color: #475569; margin-top: 8px; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;max-width:500px;">
  <p class="label">nowrap (items shrink or overflow):</p>
  <div class="demo no-wrap">
    <div class="item">Item 1</div><div class="item">Item 2</div>
    <div class="item">Item 3</div><div class="item">Item 4</div><div class="item">Item 5</div>
  </div>
  <p class="label">wrap (items flow to next row):</p>
  <div class="demo wrap">
    <div class="item">Item 1</div><div class="item">Item 2</div>
    <div class="item">Item 3</div><div class="item">Item 4</div><div class="item">Item 5</div>
  </div>
</body>
</html>`,
    expectedOutput: 'First row: items squeezed on one line. Second row: items wrapping naturally to multiple rows.',
    notes: [
      'nowrap is the default — items will shrink to fit.',
      'wrap is essential for responsive card grids.',
      'flex-wrap enables align-content to work.',
      'Combine with gap for consistent spacing between wrapped rows.',
    ],
    commonMistakes: [
      'Expecting items to wrap automatically without flex-wrap: wrap.',
      'Not understanding that nowrap can cause items to overflow.',
      'Forgetting gap applies to wrapped rows too.',
    ],
    practicePrompt: 'Create a container with 8 items and compare nowrap vs wrap behavior.',
    interviewQuestions: [
      'What is flex-wrap?',
      'What is the default value of flex-wrap?',
      'How does flex-wrap affect responsive design?',
    ],
    miniTask: 'Build a responsive tag/chip list that wraps items to new lines.',
  },
  {
    id: 41,
    title: 'Gap',
    category: 'Flexbox',
    explanation:
      'The gap property defines spacing between flex items (and grid items). It creates consistent spacing without using margins on individual items. gap is a shorthand for row-gap and column-gap. It works in both flexbox and grid layouts, making it the modern way to add spacing between items.',
    analogy:
      'Gap is like the spacing rule in a parking lot. Instead of each car deciding how far to park from the next, the lot defines a fixed gap between all parking spots. Clean, consistent, automatic.',
    thanglishAnalogy:
      'Parking lot-la cars-ku nadhuva fixed gap irukum. Each car separate-a gap decide pannadhu — lot design-la dhaan gap fix aagum. Adhe madhiri gap: 16px nu sonna, flex items nadhuva ellaam 16px space automatic-a varum. Margin use pannadhu — clean and easy.',
    analogyConnection: 'Parking spots = Flex items | Fixed gap = gap property | Lot design = Container',
    syntax:
`gap: 16px;                /* Both row and column gap */
gap: 16px 24px;           /* Row gap, Column gap */
row-gap: 16px;            /* Only between rows */
column-gap: 24px;         /* Only between columns */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flex Gap</title>
  <style>
    .no-gap { display: flex; flex-wrap: wrap; padding: 12px;
              background: #fee2e2; border-radius: 10px; margin: 10px 0; }
    .with-gap { display: flex; flex-wrap: wrap; gap: 16px; padding: 12px;
                background: #dcfce7; border-radius: 10px; margin: 10px 0; }
    .item { background: #6366f1; color: white; padding: 12px 20px;
            border-radius: 6px; font-weight: 600; }
    .label { font-size: 13px; font-weight: bold; color: #475569; margin-top: 8px; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <p class="label">Without gap (items touch):</p>
  <div class="no-gap">
    <div class="item">Item 1</div><div class="item">Item 2</div>
    <div class="item">Item 3</div><div class="item">Item 4</div>
  </div>
  <p class="label">With gap: 16px:</p>
  <div class="with-gap">
    <div class="item">Item 1</div><div class="item">Item 2</div>
    <div class="item">Item 3</div><div class="item">Item 4</div>
  </div>
</body>
</html>`,
    expectedOutput: 'First row: items touching each other. Second row: items with consistent 16px spacing.',
    notes: [
      'gap works in both flexbox and CSS Grid.',
      'gap is cleaner than using margins on individual items.',
      'Unlike margins, gap doesn\'t add space at the edges.',
      'gap is now supported in all modern browsers.',
    ],
    commonMistakes: [
      'Using margin instead of gap — creates extra space at edges.',
      'Forgetting that gap needs display: flex or display: grid.',
      'Not knowing that gap replaces the older grid-gap property.',
    ],
    practicePrompt: 'Create a flex layout and compare spacing with margins vs gap.',
    interviewQuestions: [
      'What is the gap property?',
      'Does gap work in both flexbox and grid?',
      'How is gap different from margin?',
    ],
    miniTask: 'Create a card grid with consistent 20px gap between all cards.',
  },
  {
    id: 42,
    title: 'Flex Grow, Shrink, and Basis',
    category: 'Flexbox',
    explanation:
      'flex-grow controls how much a flex item grows to fill available space. flex-shrink controls how much an item shrinks when space is tight. flex-basis sets the initial size before growing/shrinking. The shorthand flex: grow shrink basis; combines all three. flex: 1 means the item will grow to fill available space equally.',
    analogy:
      'Imagine dividing a pizza. flex-grow is how many extra slices each person wants. flex-shrink is who gives up slices when there\'s not enough. flex-basis is the initial serving size before adjustments.',
    thanglishAnalogy:
      'Pizza distribute pannura madhiri. flex-grow: 2 irukura person double-a extra slice vaanguvaar. flex-shrink: 0 irukura person sacrifice pannave maattaar — avar share kuraiyaadhu. flex-basis initial plate size — adjust aagura munnadhi evalo venum nu fix pannura value. flex: 1 nu sonna ella items-um EQUAL-a grow aagum.',
    analogyConnection: 'Extra slices = flex-grow | Giving up slices = flex-shrink | Initial serving = flex-basis | flex: 1 = Equal share',
    syntax:
`flex-grow: 1;           /* Grow to fill space (0 = don't grow) */
flex-shrink: 1;         /* Shrink when needed (0 = don't shrink) */
flex-basis: 200px;      /* Initial size */

/* Shorthand */
flex: 1;                /* grow:1 shrink:1 basis:0% */
flex: 0 0 200px;        /* Don't grow, don't shrink, fixed 200px */
flex: 2 1 auto;         /* Grow 2x, shrink 1x, auto basis */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flex Grow/Shrink/Basis</title>
  <style>
    .demo { display: flex; gap: 10px; padding: 12px; margin: 10px 0;
            background: #f1f5f9; border-radius: 10px; border: 1px solid #e2e8f0; }
    .item { background: #6366f1; color: white; padding: 12px;
            border-radius: 6px; font-weight: 600; text-align: center; font-size: 13px; }
    .label { font-size: 13px; font-weight: bold; color: #475569; margin-top: 8px; }
    .grow-1 { flex: 1; }
    .grow-2 { flex: 2; }
    .grow-3 { flex: 3; }
    .no-grow { flex: 0 0 100px; }
    .fixed { flex: 0 0 200px; background: #10b981; }
    .fluid { flex: 1; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <p class="label">Equal growth (flex: 1 each):</p>
  <div class="demo">
    <div class="item grow-1">flex: 1</div>
    <div class="item grow-1">flex: 1</div>
    <div class="item grow-1">flex: 1</div>
  </div>
  <p class="label">Proportional growth (1 : 2 : 3):</p>
  <div class="demo">
    <div class="item grow-1">flex: 1</div>
    <div class="item grow-2">flex: 2</div>
    <div class="item grow-3">flex: 3</div>
  </div>
  <p class="label">Fixed sidebar + fluid content:</p>
  <div class="demo">
    <div class="item fixed">Fixed 200px</div>
    <div class="item fluid">Fluid (fills remaining)</div>
  </div>
</body>
</html>`,
    expectedOutput: 'Three demos: equal-width items, proportional sizing (1:2:3), and fixed sidebar with fluid content.',
    notes: [
      'flex: 1 is the most common usage — items share space equally.',
      'flex: 0 0 auto — item doesn\'t grow or shrink, uses content size.',
      'flex-grow: 0 means the item won\'t take extra space.',
      'This is key for responsive layouts: fixed sidebar + fluid content.',
    ],
    commonMistakes: [
      'Confusing flex-grow ratio with exact pixel sizes.',
      'Not understanding that flex-basis overrides width in flexbox.',
      'Using flex-shrink: 0 and having items overflow the container.',
    ],
    practicePrompt: 'Create a layout with a fixed sidebar (250px) and a fluid content area using flex.',
    interviewQuestions: [
      'What does flex: 1 mean?',
      'What is the difference between flex-grow and flex-basis?',
      'How do you create a fixed-fluid layout with flexbox?',
    ],
    miniTask: 'Build a holy grail layout: fixed left sidebar, fluid center, fixed right sidebar.',
  },

  // ===================== CSS GRID =====================
  {
    id: 43,
    title: 'Grid Container',
    category: 'CSS Grid',
    explanation:
      'CSS Grid is a 2-dimensional layout system for rows AND columns simultaneously. Set display: grid on a container to create a grid. Define columns with grid-template-columns and rows with grid-template-rows. Grid is more powerful than flexbox for complex layouts because it works in both directions at once.',
    analogy:
      'CSS Grid is like a spreadsheet or an apartment building floor plan. You define how many rooms (cells) per floor (row) and how wide each room is (columns). Then you place content into specific cells.',
    thanglishAnalogy:
      'Apartment building plan madhiri CSS Grid. "Oru floor-la 3 rooms, each room 300px wide" — adhu grid-template-columns. "4 floors venum" — adhu grid-template-rows. Room-ku ulle furniture vekkura madhiri, grid cell-ku ulle content vekkuvom. Flexbox one-dimension, Grid two-dimension — complex layout-ku Grid best.',
    analogyConnection: 'Apartment building = Grid container | Floors = Rows | Rooms = Columns | Cell = Individual space',
    syntax:
`display: grid;
grid-template-columns: 200px 1fr 200px;    /* 3 columns */
grid-template-rows: auto 1fr auto;          /* 3 rows */
gap: 16px;                                  /* Spacing */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Grid Container</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 20px;
      background: #f1f5f9;
      border-radius: 12px;
    }
    .grid-item {
      background: #6366f1;
      color: white;
      padding: 24px;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
    }
    .grid-item:nth-child(even) { background: #8b5cf6; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <h2>CSS Grid — 3 Column Layout</h2>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>
</body>
</html>`,
    expectedOutput: 'A 3-column, 2-row grid of purple boxes with consistent spacing.',
    notes: [
      'display: grid creates a grid container.',
      'grid-template-columns defines column sizes.',
      '1fr = one fraction of available space.',
      'repeat(3, 1fr) = 3 equal columns.',
    ],
    commonMistakes: [
      'Forgetting display: grid — grid properties won\'t work.',
      'Confusing Grid with Flexbox — Grid is 2D, Flex is 1D.',
      'Not understanding the fr unit.',
    ],
    practicePrompt: 'Create a 3-column grid layout with 9 items and 20px gap.',
    interviewQuestions: [
      'What is CSS Grid?',
      'How is Grid different from Flexbox?',
      'What does the fr unit mean?',
    ],
    miniTask: 'Create a dashboard layout with a grid of 6 stat cards in 3 columns.',
  },
  {
    id: 44,
    title: 'Grid Rows and Columns',
    category: 'CSS Grid',
    explanation:
      'grid-template-columns and grid-template-rows define the explicit tracks (sizes) of the grid. Values can be fixed (px), flexible (fr), or mixed. repeat() creates multiple tracks with the same size. minmax() sets minimum and maximum sizes. auto-fit and auto-fill create responsive grids without media queries.',
    analogy:
      'Rows and columns are like defining the layout of a classroom. "3 rows of desks, 4 columns of desks, each desk 100cm wide" — you are defining the grid structure before placing students.',
    thanglishAnalogy:
      'Classroom-la desks arrange pannura madhiri. "3 rows, 4 columns, each desk 100cm wide" — desk structure fix. Adhe madhiri grid-template-columns: repeat(4, 1fr) nu sonna 4 equal columns varum. minmax(200px, 1fr) nu sonna minimum 200px, maximum flexible-a irukum — responsive-ku super useful.',
    analogyConnection: 'Desk rows = grid-template-rows | Desk columns = grid-template-columns | Desk size = fr or px | Flexible = auto-fit',
    syntax:
`grid-template-columns: 200px 1fr 200px;    /* Mixed sizes */
grid-template-columns: repeat(3, 1fr);      /* 3 equal columns */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive */
grid-template-rows: 100px auto 50px;        /* Row sizes */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grid Rows & Columns</title>
  <style>
    .grid-fixed { display: grid; grid-template-columns: 150px 1fr 150px;
                  gap: 12px; margin: 12px 0; }
    .grid-responsive { display: grid;
                       grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                       gap: 12px; margin: 12px 0; }
    .item { background: #6366f1; color: white; padding: 16px; border-radius: 8px;
            text-align: center; font-weight: 600; font-size: 14px; }
    .sidebar { background: #10b981; }
    .label { font-size: 13px; font-weight: bold; color: #475569; margin-top: 16px; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <p class="label">Fixed sidebar + fluid center:</p>
  <div class="grid-fixed">
    <div class="item sidebar">Left 150px</div>
    <div class="item">Center (fluid)</div>
    <div class="item sidebar">Right 150px</div>
  </div>
  <p class="label">Responsive auto-fit (resize window to see):</p>
  <div class="grid-responsive">
    <div class="item">Card 1</div><div class="item">Card 2</div>
    <div class="item">Card 3</div><div class="item">Card 4</div>
    <div class="item">Card 5</div><div class="item">Card 6</div>
  </div>
</body>
</html>`,
    expectedOutput: 'A 3-column fixed layout with sidebars, and a responsive auto-fitting grid of cards.',
    notes: [
      'fr distributes available space proportionally.',
      'repeat(auto-fit, minmax(250px, 1fr)) creates responsive grids.',
      'auto-fit collapses empty tracks, auto-fill keeps them.',
      'Mixing px and fr creates fixed + flexible layouts.',
    ],
    commonMistakes: [
      'Confusing auto-fit with auto-fill.',
      'Forgetting that fr divides only the REMAINING space.',
      'Not using minmax() for responsive grids.',
    ],
    practicePrompt: 'Create a responsive grid that shows 4 columns on wide screens and 1 on mobile — without media queries.',
    interviewQuestions: [
      'What is the difference between fr and %?',
      'What does repeat(auto-fit, minmax(250px, 1fr)) do?',
      'How do you create a responsive grid without media queries?',
    ],
    miniTask: 'Build a responsive photo gallery grid using auto-fit and minmax.',
  },
  {
    id: 45,
    title: 'Grid Gap and Template Areas',
    category: 'CSS Grid',
    explanation:
      'grid-gap (or gap) adds spacing between grid cells. grid-template-areas allows you to name grid areas and create layouts by drawing them with text. You assign names to cells and then reference those names in child elements with grid-area. This makes complex layouts easy to visualize and maintain.',
    analogy:
      'grid-template-areas is like drawing a floor plan on paper. You write room names in a grid format: "kitchen kitchen living" / "bedroom bathroom living" — and the rooms magically arrange themselves.',
    thanglishAnalogy:
      'Floor plan draw pannura madhiri grid-template-areas. Paper-la "kitchen kitchen living" / "bedroom bathroom living" nu ezhuthuna, rooms automatic-a arrange aagum. CSS-la-yum apdi dhaan — area names define pannu, elements assign pannu, complex layout easy-a varum. Reading the CSS itself shows you the layout!',
    analogyConnection: 'Floor plan drawing = grid-template-areas | Room names = Area names | Placing furniture = Assigning grid-area',
    syntax:
`grid-template-areas:
  "header header header"
  "sidebar main main"
  "footer footer footer";

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grid Template Areas</title>
  <style>
    .layout {
      display: grid;
      grid-template-columns: 200px 1fr;
      grid-template-rows: 60px 1fr 50px;
      grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
      gap: 12px;
      height: 400px;
    }
    .header { grid-area: header; background: #6366f1; color: white; padding: 16px;
              border-radius: 8px; font-weight: bold; display: flex; align-items: center; }
    .sidebar { grid-area: sidebar; background: #f1f5f9; padding: 16px; border-radius: 8px;
               border: 1px solid #e2e8f0; }
    .main { grid-area: main; background: #fafafa; padding: 16px; border-radius: 8px;
            border: 1px solid #e2e8f0; }
    .footer { grid-area: footer; background: #1e293b; color: #94a3b8; padding: 12px;
              border-radius: 8px; text-align: center; font-size: 14px;
              display: flex; align-items: center; justify-content: center; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <div class="layout">
    <div class="header">🎓 Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main">Main Content Area</div>
    <div class="footer">Footer © 2026</div>
  </div>
</body>
</html>`,
    expectedOutput: 'A full page layout with header spanning top, sidebar on left, main content on right, footer spanning bottom.',
    notes: [
      'Area names must be quoted strings in grid-template-areas.',
      'Use a period (.) for empty cells.',
      'Each row is a separate quoted string.',
      'grid-template-areas makes layouts self-documenting.',
    ],
    commonMistakes: [
      'Mismatching area names between template and grid-area.',
      'Creating non-rectangular areas — grid areas must be rectangles.',
      'Forgetting to match the number of columns in each row string.',
    ],
    practicePrompt: 'Create a full page layout using grid-template-areas with header, sidebar, main, and footer.',
    interviewQuestions: [
      'What is grid-template-areas?',
      'Can grid areas be non-rectangular?',
      'How do you create an empty cell in grid-template-areas?',
    ],
    miniTask: 'Build a dashboard layout with grid-template-areas: header, sidebar nav, main content, and footer.',
  },

  // ===================== RESPONSIVE DESIGN =====================
  {
    id: 46,
    title: 'Media Queries',
    category: 'Responsive Design',
    explanation:
      'Media queries allow you to apply CSS rules based on device characteristics like screen width, height, orientation, and resolution. They are the foundation of responsive design — making websites look good on all screen sizes. The most common pattern is @media (max-width: 768px) {} for targeting mobile screens.',
    analogy:
      'Media queries are like a wardrobe that changes based on weather. "If it\'s cold (small screen), wear a jacket (mobile styles). If it\'s hot (large screen), wear a t-shirt (desktop styles)." The clothing changes based on conditions.',
    thanglishAnalogy:
      'Weather-ku tha dress change pannura madhiri media queries. "Cold-a iruntha jacket podu (mobile styles), hot-a iruntha t-shirt podu (desktop styles)." @media (max-width: 768px) nu ezhuthuna, screen width 768px-ku keezhae iruntha andha styles apply aagum. Idhu dhaan responsive design-oda backbone.',
    analogyConnection: 'Weather = Screen size | Jacket = Mobile styles | T-shirt = Desktop styles | @media = "If condition"',
    syntax:
`/* Mobile first approach */
.container { width: 100%; }

@media (min-width: 768px) {
  .container { width: 750px; }
}
@media (min-width: 1024px) {
  .container { width: 960px; }
}

/* Desktop first approach */
@media (max-width: 768px) {
  /* Mobile styles */
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Queries</title>
  <style>
    .grid { display: grid; grid-template-columns: repeat(3, 1fr);
            gap: 16px; padding: 20px; }
    .card { background: #6366f1; color: white; padding: 24px;
            border-radius: 12px; text-align: center; font-weight: 600; }

    /* Tablet */
    @media (max-width: 768px) {
      .grid { grid-template-columns: repeat(2, 1fr); }
      .card { background: #8b5cf6; }
    }

    /* Mobile */
    @media (max-width: 480px) {
      .grid { grid-template-columns: 1fr; }
      .card { background: #a855f7; }
    }
  </style>
</head>
<body style="font-family:sans-serif;">
  <div class="grid">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
    <div class="card">Card 4</div>
    <div class="card">Card 5</div>
    <div class="card">Card 6</div>
  </div>
</body>
</html>`,
    expectedOutput: '3-column grid on desktop, 2-column on tablet, 1-column on mobile — with color changes.',
    notes: [
      'Always include the viewport meta tag for responsive design.',
      'Mobile-first uses min-width; desktop-first uses max-width.',
      'Common breakpoints: 480px (mobile), 768px (tablet), 1024px (desktop).',
      'Media queries don\'t increase specificity.',
    ],
    commonMistakes: [
      'Forgetting the viewport meta tag — mobile won\'t scale properly.',
      'Writing too many breakpoints — keep it simple.',
      'Not testing on actual devices — emulators may differ.',
    ],
    practicePrompt: 'Create a responsive layout that changes from 3 columns to 2 to 1 as screen gets smaller.',
    interviewQuestions: [
      'What are media queries?',
      'What is the difference between mobile-first and desktop-first?',
      'What are common breakpoints for responsive design?',
    ],
    miniTask: 'Make a navigation bar that is horizontal on desktop and vertical on mobile using media queries.',
  },
  {
    id: 47,
    title: 'Responsive Units',
    category: 'Responsive Design',
    explanation:
      'CSS units fall into two categories: absolute (fixed size like px) and relative (scales based on context like %, em, rem, vw, vh). Relative units are key for responsive design. % is relative to the parent. em is relative to the parent\'s font-size. rem is relative to the root (html) font-size. vw/vh are relative to the viewport width/height.',
    analogy:
      'Absolute units (px) are like measuring with a ruler — always the same size. Relative units are like percentages — "take 50% of the room width" changes based on room size. rem is like a standardized measurement based on one fixed reference.',
    thanglishAnalogy:
      'px = ruler-la measure pannura madhiri — always same. % = "room-oda 50% yedu" — room size-ku tha maarum. rem = "base size 16px, adhoda 1.5 times" — consistent scaling. vw/vh = "browser window-oda 50% width" — screen size-ku tha maarum. Responsive design-ku rem, %, vw/vh use pannuvom.',
    analogyConnection: 'Ruler = px (fixed) | Percentage of room = % | Base reference = rem | Window size = vw/vh',
    syntax:
`/* Absolute */
width: 300px;         /* Fixed 300 pixels */

/* Relative to parent */
width: 50%;           /* 50% of parent */

/* Relative to font-size */
font-size: 1.5em;     /* 1.5x parent font-size */
font-size: 1.5rem;    /* 1.5x root font-size (16px = 24px) */

/* Relative to viewport */
width: 50vw;          /* 50% of viewport width */
height: 100vh;        /* Full viewport height */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Units</title>
  <style>
    html { font-size: 16px; }
    .px-box { width: 300px; background: #ef4444; color: white; padding: 16px;
              border-radius: 8px; margin: 8px 0; }
    .percent-box { width: 50%; background: #6366f1; color: white; padding: 16px;
                   border-radius: 8px; margin: 8px 0; }
    .rem-text { font-size: 1.5rem; color: #10b981; margin: 8px 0; }
    .vw-box { width: 80vw; background: #f59e0b; color: white; padding: 16px;
              border-radius: 8px; margin: 8px 0; }
    .vh-box { height: 30vh; background: #8b5cf6; color: white; padding: 16px;
              border-radius: 8px; margin: 8px 0;
              display: flex; align-items: center; justify-content: center; }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <div class="px-box">width: 300px (fixed)</div>
  <div class="percent-box">width: 50% (half of parent)</div>
  <p class="rem-text">font-size: 1.5rem (24px = 16 × 1.5)</p>
  <div class="vw-box">width: 80vw (80% of viewport)</div>
  <div class="vh-box">height: 30vh (30% of viewport height)</div>
</body>
</html>`,
    expectedOutput: 'Five elements showing different unit types: fixed px, responsive %, rem text, vw width, and vh height.',
    notes: [
      'rem is the best unit for font sizes — scales consistently.',
      '% depends on the parent element\'s size.',
      'vw/vh are useful for full-screen sections.',
      '1rem = root font-size (usually 16px by default).',
    ],
    commonMistakes: [
      'Confusing em (parent-relative) with rem (root-relative).',
      'Using px for font-size — doesn\'t respect user preferences.',
      'Using vw for text — can be too small on mobile.',
    ],
    practicePrompt: 'Create a layout using only relative units (%, rem, vw) — no px.',
    interviewQuestions: [
      'What is the difference between em and rem?',
      'When would you use vw vs %?',
      'Why is rem preferred for font-size?',
    ],
    miniTask: 'Create a full-viewport hero section using vh and vw units with centered content.',
  },

  // ===================== ADVANCED CSS =====================
  {
    id: 48,
    title: 'CSS Variables',
    category: 'Advanced CSS',
    explanation:
      'CSS Custom Properties (variables) let you store values that can be reused throughout your CSS. They are defined with -- prefix and accessed with var(). Variables are scoped — defined on :root they\'re global, defined on a specific element they\'re local. They enable theming, make maintenance easy, and can be changed with JavaScript.',
    analogy:
      'CSS variables are like naming a paint color. Instead of writing "#6366f1" everywhere, you name it "--primary" and use that name throughout. If you want to change the primary color, you change it in ONE place.',
    thanglishAnalogy:
      'Paint kadai-la color-ku name kuduppom — "Royal Blue" nu. Enga venaalum "Royal Blue kudungo" nu solla podhum, exact hex code ninaivu vechi kooda vendaam. CSS variables-um apdi dhaan — --primary: #6366f1 nu define pannuna, var(--primary) nu enga venaalum use pannalam. Color change panna oru idam-la mattum maaththa podhum!',
    analogyConnection: 'Named paint = CSS variable | One place to change = Variable definition | Use everywhere = var()',
    syntax:
`:root {
  --primary: #6366f1;
  --text: #1e293b;
  --radius: 10px;
}

.button {
  background: var(--primary);
  color: var(--text);
  border-radius: var(--radius);
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Variables</title>
  <style>
    :root {
      --primary: #6366f1;
      --primary-light: #818cf8;
      --text: #1e293b;
      --bg: #f8fafc;
      --radius: 12px;
      --shadow: 0 4px 12px rgba(99,102,241,0.2);
    }
    body { background: var(--bg); padding: 20px; font-family: sans-serif; color: var(--text); }
    .card {
      background: white;
      border-radius: var(--radius);
      padding: 24px;
      box-shadow: var(--shadow);
      max-width: 400px;
    }
    .card h2 { color: var(--primary); }
    .btn {
      background: var(--primary);
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: var(--radius);
      cursor: pointer;
      font-size: 14px;
    }
    .btn:hover { background: var(--primary-light); }

    /* Theme switching example */
    .dark-theme {
      --primary: #818cf8;
      --text: #f1f5f9;
      --bg: #0f172a;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>CSS Variables Demo</h2>
    <p>This card uses CSS variables for consistent theming.</p>
    <button class="btn">Primary Button</button>
  </div>
</body>
</html>`,
    expectedOutput: 'A styled card with heading and button — all colors driven by CSS variables.',
    notes: [
      'CSS variables start with -- prefix.',
      'Access with var(--name) or var(--name, fallback).',
      ':root scope makes variables global.',
      'Variables can be changed with JavaScript: element.style.setProperty(\'--primary\', \'red\').',
    ],
    commonMistakes: [
      'Forgetting the -- prefix when defining variables.',
      'Forgetting var() when using variables.',
      'Not providing fallback values for unsupported browsers.',
    ],
    practicePrompt: 'Create a design system with CSS variables for colors, spacing, and border-radius.',
    interviewQuestions: [
      'What are CSS Custom Properties?',
      'What is the scope of :root variables?',
      'How can you change CSS variables with JavaScript?',
    ],
    miniTask: 'Create a light and dark theme using CSS variables that can be toggled.',
  },
  {
    id: 49,
    title: 'Transitions',
    category: 'Advanced CSS',
    explanation:
      'CSS transitions create smooth animations between property changes. Instead of instant changes (like color snapping from blue to red), transitions make the change gradual over time. Key properties: transition-property (what to animate), transition-duration (how long), transition-timing-function (acceleration curve), transition-delay (when to start). The shorthand: transition: property duration timing delay.',
    analogy:
      'Transitions are like dimmer switches for lights. Instead of flipping a light switch (instant on/off), a dimmer smoothly fades from dark to bright. CSS transitions add this smoothness to any style change.',
    thanglishAnalogy:
      'Light switch vs dimmer switch madhiri transition. Switch press pannuna light instant-a ON aagum — transition illama color change pannuna instant-a change aagum. Dimmer use pannuna slowly brightness increase aagum — transition: 0.3s nu sonna, color slowly 0.3 seconds-la change aagum. Smooth, elegant, professional feel varum.',
    analogyConnection: 'Light switch = Instant change | Dimmer = Transition | Brightness = Property value | Speed = Duration',
    syntax:
`transition: property duration timing-function delay;
transition: all 0.3s ease;
transition: background-color 0.3s ease, transform 0.2s ease;

/* Individual properties */
transition-property: background-color;
transition-duration: 0.3s;
transition-timing-function: ease;   /* ease|linear|ease-in|ease-out */
transition-delay: 0s;`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Transitions</title>
  <style>
    .btn {
      padding: 14px 28px;
      background: #6366f1;
      color: white;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .btn:hover {
      background: #4f46e5;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(99,102,241,0.4);
    }
    .card {
      width: 200px;
      height: 200px;
      background: #10b981;
      border-radius: 12px;
      margin: 20px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      transition: transform 0.4s ease, border-radius 0.4s ease;
    }
    .card:hover {
      transform: scale(1.1) rotate(5deg);
      border-radius: 50%;
    }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <button class="btn">Hover me — smooth transition!</button>
  <br><br>
  <div class="card">Hover!</div>
</body>
</html>`,
    expectedOutput: 'A button that smoothly lifts with shadow on hover, and a card that scales up and becomes circular.',
    notes: [
      'Transitions need a trigger (like :hover, :focus, or class change).',
      'Not all properties can be transitioned (e.g., display can\'t).',
      'ease is the default timing — starts slow, speeds up, ends slow.',
      'Use specific properties instead of "all" for better performance.',
    ],
    commonMistakes: [
      'Putting transition on the :hover state instead of the base state.',
      'Trying to transition display: none — use opacity instead.',
      'Using too-long durations — keep them under 0.5s for most interactions.',
    ],
    practicePrompt: 'Create a card that changes background color, shadow, and transform on hover with smooth transitions.',
    interviewQuestions: [
      'What is a CSS transition?',
      'What properties can be transitioned?',
      'Where should the transition property be declared?',
    ],
    miniTask: 'Create an interactive button with hover effects using transitions (color, shadow, transform).',
  },
  {
    id: 50,
    title: 'Transform',
    category: 'Advanced CSS',
    explanation:
      'CSS transform changes the visual appearance of an element without affecting the layout. Functions include: translate(x, y) moves the element, scale(x, y) resizes it, rotate(angle) rotates it, skew(x, y) tilts it. Multiple transforms can be combined. Transform is GPU-accelerated for smooth animations.',
    analogy:
      'Transform is like picking up a photo and manipulating it — moving it (translate), zooming in/out (scale), tilting it (rotate), or skewing it (skew). The photo\'s original spot on the wall doesn\'t change.',
    thanglishAnalogy:
      'Photo frame-a kai-la yedu — shift pannu (translate), zoom pannu (scale), thirumbu (rotate), or angle-la tilt pannu (skew). Aanaa wall-la original spot maraadhu. CSS transform-um apdi dhaan — element-oda visual-a maathum, aanaa layout-la space change aagaadhu. Animation-ku, hover effects-ku transform best.',
    analogyConnection: 'Move photo = translate | Zoom = scale | Tilt = rotate | Skew = perspective tilt | Original spot = Layout position unchanged',
    syntax:
`transform: translateX(50px);       /* Move right */
transform: translateY(-20px);      /* Move up */
transform: scale(1.5);             /* Scale 150% */
transform: rotate(45deg);          /* Rotate 45 degrees */
transform: skewX(10deg);           /* Skew horizontally */

/* Combine multiple transforms */
transform: translateY(-10px) scale(1.05) rotate(2deg);`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Transform</title>
  <style>
    .box { width: 100px; height: 100px; background: #6366f1; color: white;
           display: inline-flex; align-items: center; justify-content: center;
           margin: 20px; border-radius: 10px; font-weight: bold; font-size: 12px;
           transition: transform 0.3s ease; }
    .translate:hover { transform: translate(20px, -20px); }
    .scale:hover { transform: scale(1.3); }
    .rotate:hover { transform: rotate(45deg); }
    .skew:hover { transform: skewX(15deg); }
    .combined:hover { transform: scale(1.1) rotate(10deg) translateY(-10px); }
  </style>
</head>
<body style="padding:40px;font-family:sans-serif;">
  <h2>Hover each box:</h2>
  <div class="box translate">Translate</div>
  <div class="box scale">Scale</div>
  <div class="box rotate">Rotate</div>
  <div class="box skew">Skew</div>
  <div class="box combined" style="background:#e11d48">Combined</div>
</body>
</html>`,
    expectedOutput: 'Five boxes that move, scale, rotate, skew, and combine transforms on hover.',
    notes: [
      'Transform doesn\'t affect surrounding elements\' layout.',
      'Transforms are GPU-accelerated — great for performance.',
      'Multiple transforms are combined in one declaration.',
      'transform-origin changes the reference point for transforms.',
    ],
    commonMistakes: [
      'Separating multiple transforms into different lines — they override each other.',
      'Forgetting units for rotate (deg) and translate (px).',
      'Not understanding that transform doesn\'t change the element\'s flow position.',
    ],
    practicePrompt: 'Create a gallery of images that scale up and rotate slightly on hover.',
    interviewQuestions: [
      'What CSS transform functions do you know?',
      'Does transform affect the layout of other elements?',
      'What is transform-origin?',
    ],
    miniTask: 'Create a card flip animation using transform: rotateY(180deg).',
  },
  {
    id: 51,
    title: 'Animations',
    category: 'Advanced CSS',
    explanation:
      'CSS animations allow elements to change styles over time without user interaction. Define keyframes with @keyframes, then apply them with the animation property. Unlike transitions (which need a trigger), animations can run automatically, loop, alternate, and be paused. Properties: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction.',
    analogy:
      'Transitions are like opening a door (triggered action). Animations are like a clock ticking (continuous, automatic). The clock doesn\'t need you to do anything — it runs on its own, continuously.',
    thanglishAnalogy:
      'Transition = door open pannum bodhu smooth-a open aagum — trigger venum (hover, click). Animation = clock ticking — automatic-a run aagum, trigger vendaam. @keyframes-la "start-la idhu, middle-la idhu, end-la idhu" nu define pannuvom, animation property-la "evalo time, evalo repeat" nu solvom.',
    analogyConnection: 'Clock = Automatic animation | Door = Triggered transition | Keyframes = Steps of the animation',
    syntax:
`@keyframes animationName {
  0%   { /* start state */ }
  50%  { /* middle state */ }
  100% { /* end state */ }
}

.element {
  animation: animationName 2s ease infinite;
  /* name duration timing iteration */
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Animations</title>
  <style>
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }
    @keyframes slideIn {
      from { transform: translateX(-100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .pulse-box {
      width: 120px; height: 120px; background: #6366f1; color: white;
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-weight: bold; animation: pulse 2s ease infinite; margin: 20px;
    }
    .slide-card {
      background: white; padding: 20px; border-radius: 12px; max-width: 300px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1); animation: slideIn 0.6s ease;
      margin: 20px 0;
    }
    .gradient-bg {
      background: linear-gradient(270deg, #6366f1, #ec4899, #f59e0b, #10b981);
      background-size: 400% 400%;
      animation: gradient 6s ease infinite;
      color: white; padding: 30px; border-radius: 12px; text-align: center;
      font-size: 1.3rem; font-weight: bold;
    }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;background:#f8fafc;">
  <div class="pulse-box">Pulse</div>
  <div class="slide-card"><strong>Slide In Card</strong><br>This card slides in from the left on load.</div>
  <div class="gradient-bg">Animated Gradient Background ✨</div>
</body>
</html>`,
    expectedOutput: 'A pulsing circle, a card that slides in, and a box with animated gradient background.',
    notes: [
      '@keyframes defines the animation steps.',
      'animation-iteration-count: infinite makes it loop forever.',
      'animation-direction: alternate reverses each cycle.',
      'animation-fill-mode: forwards keeps the end state.',
    ],
    commonMistakes: [
      'Forgetting @keyframes — the animation won\'t run.',
      'Using transition when animation is needed (or vice versa).',
      'Making animations too fast or too slow — test carefully.',
      'Not using animation-fill-mode: forwards — element resets after animation.',
    ],
    practicePrompt: 'Create a loading spinner animation using @keyframes and border-radius.',
    interviewQuestions: [
      'What is the difference between CSS transitions and animations?',
      'How do @keyframes work?',
      'How do you make an animation loop?',
    ],
    miniTask: 'Create a loading spinner with a rotating border animation.',
  },
  {
    id: 52,
    title: 'Shadows',
    category: 'Advanced CSS',
    explanation:
      'CSS shadows add depth and dimension to elements. box-shadow adds shadow to the box itself (x-offset, y-offset, blur, spread, color). text-shadow adds shadow to text. Multiple shadows can be layered. Shadows are purely visual and don\'t affect layout. They are essential for creating depth, elevation, and modern "card" designs.',
    analogy:
      'Shadows in CSS are like shadows in real life. When you hold a card above a table, it casts a shadow. The higher you hold it (larger offset/blur), the larger and softer the shadow. CSS shadows simulate this elevation.',
    thanglishAnalogy:
      'Table mela oru card vechurukom. Card-ku keezhe shadow vizhum. Card-a uyara thookuna shadow perisu aagum, blur-um aagum. CSS box-shadow exact-a idhe simulate pannum. box-shadow: 0 4px 12px rgba(0,0,0,0.1) nu sonna card elevated madhiri theriyum — modern design-oda key technique.',
    analogyConnection: 'Card above table = Elevated element | Shadow below = box-shadow | Height = Offset + blur | Elevation = Depth perception',
    syntax:
`box-shadow: x-offset y-offset blur spread color;
box-shadow: 0 4px 12px rgba(0,0,0,0.15);     /* Subtle shadow */
box-shadow: 0 10px 30px rgba(0,0,0,0.2);     /* Deep shadow */

/* Multiple shadows */
box-shadow: 0 1px 3px rgba(0,0,0,0.1),
            0 10px 20px rgba(0,0,0,0.05);

/* Text shadow */
text-shadow: 2px 2px 4px rgba(0,0,0,0.3);

/* Inset shadow */
box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Shadows</title>
  <style>
    .card { background: white; padding: 24px; border-radius: 12px;
            margin: 16px; display: inline-block; width: 200px;
            text-align: center; vertical-align: top; }
    .subtle { box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .medium { box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
    .deep { box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
    .colored { box-shadow: 0 8px 24px rgba(99,102,241,0.3); }
    .text-glow {
      font-size: 2rem; font-weight: bold; color: #6366f1;
      text-shadow: 0 0 20px rgba(99,102,241,0.5);
      margin: 20px;
    }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;background:#f1f5f9;">
  <div class="card subtle">Subtle</div>
  <div class="card medium">Medium</div>
  <div class="card deep">Deep</div>
  <div class="card colored">Colored</div>
  <br>
  <div class="text-glow">Glowing Text ✨</div>
</body>
</html>`,
    expectedOutput: 'Four cards with increasing shadow depths, and glowing text with text-shadow.',
    notes: [
      'box-shadow doesn\'t affect layout — purely visual.',
      'Use rgba() for transparent shadow colors.',
      'Multiple shadows create realistic depth (layered shadows).',
      'inset keyword creates inner shadows.',
    ],
    commonMistakes: [
      'Using too dark/harsh shadows — use subtle, transparent colors.',
      'Forgetting that box-shadow doesn\'t change the element\'s size.',
      'Not layering shadows for realistic depth.',
    ],
    practicePrompt: 'Create a card hover effect that increases the shadow depth on hover.',
    interviewQuestions: [
      'What are the parameters of box-shadow?',
      'What does the inset keyword do?',
      'How do you create a glow effect with shadows?',
    ],
    miniTask: 'Create a card that lifts up with deeper shadow on hover (elevation effect).',
  },
  {
    id: 53,
    title: 'Gradients',
    category: 'Advanced CSS',
    explanation:
      'CSS gradients create smooth color transitions without images. linear-gradient() transitions along a straight line. radial-gradient() transitions from a center point outward. conic-gradient() transitions around a center point. Gradients can use multiple color stops and are great for backgrounds, buttons, and decorative elements.',
    analogy:
      'Gradients are like a sunset — colors blend smoothly from one to another. Linear gradient is a straight horizon sunset. Radial gradient is a spotlight fading outward. Conic gradient is a color wheel.',
    thanglishAnalogy:
      'Sunset-la sky color smoothly change aagum — orange to pink to purple. Adhe madhiri CSS gradient. linear-gradient = straight-a color change (left to right, top to bottom). radial-gradient = center-la irundhum veliye spread aagum (spotlight madhiri). Gradient use pannuna website premium-a theriyum — background, button, card borders-ku use pannalam.',
    analogyConnection: 'Sunset = Linear gradient | Spotlight = Radial gradient | Color wheel = Conic gradient',
    syntax:
`/* Linear */
background: linear-gradient(direction, color1, color2);
background: linear-gradient(135deg, #6366f1, #ec4899);
background: linear-gradient(to right, red, yellow, green);

/* Radial */
background: radial-gradient(circle, #6366f1, transparent);

/* Conic */
background: conic-gradient(from 0deg, red, yellow, green, blue, red);`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Gradients</title>
  <style>
    .box { width: 200px; height: 120px; border-radius: 12px; margin: 10px;
           display: inline-flex; align-items: center; justify-content: center;
           color: white; font-weight: bold; font-size: 14px; }
    .linear { background: linear-gradient(135deg, #6366f1, #ec4899); }
    .radial { background: radial-gradient(circle at center, #6366f1, #1e1b4b); }
    .multi { background: linear-gradient(90deg, #6366f1, #ec4899, #f59e0b, #10b981); }
    .gradient-btn {
      padding: 14px 32px; border: none; border-radius: 10px; cursor: pointer;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white; font-size: 16px; font-weight: 600; margin: 20px 0;
      transition: transform 0.3s, box-shadow 0.3s;
    }
    .gradient-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(99,102,241,0.4);
    }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <div class="box linear">Linear</div>
  <div class="box radial">Radial</div>
  <div class="box multi">Multi-stop</div>
  <br>
  <button class="gradient-btn">Gradient Button ✨</button>
</body>
</html>`,
    expectedOutput: 'Three gradient boxes (linear, radial, multi-color) and a hoverable gradient button.',
    notes: [
      'Gradients are backgrounds, not colors — use background, not background-color.',
      'You can add multiple color stops with percentages.',
      'Gradients can be layered with other backgrounds.',
      'Use gradient generators online for complex gradients.',
    ],
    commonMistakes: [
      'Using background-color instead of background for gradients.',
      'Not understanding gradient direction angles.',
      'Creating too many color stops — keeps it simple.',
    ],
    practicePrompt: 'Create three different gradient styles: diagonal, radial, and multi-stop.',
    interviewQuestions: [
      'What types of gradients does CSS support?',
      'How do you create a 45-degree gradient?',
      'What is the difference between linear and radial gradients?',
    ],
    miniTask: 'Create a hero section with an animated gradient background.',
  },
  {
    id: 54,
    title: 'Filters',
    category: 'Advanced CSS',
    explanation:
      'CSS filters apply visual effects to elements like blur, brightness, contrast, grayscale, and more. The filter property can combine multiple effects. Common uses: image effects, hover interactions, background overlays. backdrop-filter applies effects to the area behind an element (like glassmorphism).',
    analogy:
      'CSS filters are like Instagram filters for your webpage. You can make images black and white, blur them, adjust brightness, or add contrast — all with CSS, no image editing needed.',
    thanglishAnalogy:
      'Instagram filters madhiri CSS filters. Photo-ku black and white (grayscale), blur, brightness adjust — ellaam CSS-la possible. filter: blur(5px) nu sonna element blur aagum. backdrop-filter: blur(10px) nu sonna element-oda background blur aagum — glassmorphism effect varum!',
    analogyConnection: 'Instagram filter = CSS filter | B&W = grayscale | Blur = blur() | Glass effect = backdrop-filter',
    syntax:
`filter: blur(5px);
filter: brightness(1.2);
filter: contrast(1.5);
filter: grayscale(100%);
filter: saturate(2);
filter: sepia(100%);
filter: hue-rotate(90deg);
filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));

/* Combine multiple */
filter: brightness(1.1) contrast(1.2);

/* Background blur (glassmorphism) */
backdrop-filter: blur(10px);`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Filters</title>
  <style>
    .img-box { width: 150px; height: 100px; border-radius: 10px;
               display: inline-block; margin: 8px;
               background: linear-gradient(135deg, #6366f1, #ec4899, #f59e0b);
               position: relative; overflow: hidden; }
    .blur { filter: blur(3px); }
    .grayscale { filter: grayscale(100%); }
    .bright { filter: brightness(1.5); }
    .sepia { filter: sepia(100%); }
    .hover-effect { transition: filter 0.3s; }
    .hover-effect:hover { filter: brightness(1.2) contrast(1.1); }
    .glass-card {
      backdrop-filter: blur(10px);
      background: rgba(255,255,255,0.2);
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 16px;
      padding: 24px;
      color: white;
      max-width: 300px;
      margin-top: 20px;
    }
    .glass-bg {
      background: linear-gradient(135deg, #6366f1, #ec4899);
      padding: 40px;
      border-radius: 16px;
    }
  </style>
</head>
<body style="padding:20px;font-family:sans-serif;">
  <div class="img-box">Normal</div>
  <div class="img-box blur">Blur</div>
  <div class="img-box grayscale">Grayscale</div>
  <div class="img-box bright">Bright</div>
  <div class="img-box sepia">Sepia</div>
  <br><br>
  <div class="glass-bg">
    <div class="glass-card">
      <h3>Glassmorphism ✨</h3>
      <p>Using backdrop-filter: blur(10px)</p>
    </div>
  </div>
</body>
</html>`,
    expectedOutput: 'Five gradient boxes with different filters, and a glassmorphism card with blurred backdrop.',
    notes: [
      'Filters can be combined in one declaration.',
      'backdrop-filter creates the glassmorphism effect.',
      'filter affects the entire element including children.',
      'Performance: use sparingly on large/many elements.',
    ],
    commonMistakes: [
      'Confusing filter with backdrop-filter.',
      'Using filter on text elements — it blurs the text too.',
      'Not understanding that filter affects all children.',
    ],
    practicePrompt: 'Create an image gallery where images become colorful on hover (grayscale → normal).',
    interviewQuestions: [
      'What CSS filters do you know?',
      'How do you create a glassmorphism effect?',
      'What is the difference between filter and backdrop-filter?',
    ],
    miniTask: 'Create a glassmorphism card with backdrop-filter and semi-transparent background.',
  },
  {
    id: 55,
    title: 'CSS Best Practices',
    category: 'Advanced CSS',
    explanation:
      'Writing maintainable CSS requires following best practices: use a consistent naming convention (BEM), organize CSS logically, use CSS variables for theming, avoid !important, keep selectors simple, use shorthand properties, write mobile-first responsive styles, and separate concerns. These practices make CSS scalable and easy to work with in teams.',
    analogy:
      'CSS best practices are like kitchen organization rules. Label your containers (naming conventions), keep ingredients grouped (organize CSS), use standard measurements (variables), and clean as you cook (remove unused CSS). A well-organized kitchen makes cooking faster — well-organized CSS makes development faster.',
    thanglishAnalogy:
      'Kitchen organization madhiri CSS best practices. Containers-ku label podu (BEM naming), ingredients group pannu (CSS sections), standard measurements use pannu (CSS variables), unused items throw pannu (dead code remove). Well-organized kitchen-la cooking fast, well-organized CSS-la development fast. !important use panna — nuclear option madhiri — avoid pannunga.',
    analogyConnection: 'Kitchen = CSS codebase | Labels = Naming conventions | Standard cups = CSS variables | Cleanup = Remove unused CSS',
    syntax:
`/* BEM Naming Convention */
.block {}
.block__element {}
.block--modifier {}

/* Example */
.card {}
.card__title {}
.card__body {}
.card--featured {}

/* CSS Organization */
/* 1. Variables */
/* 2. Reset/Base */
/* 3. Layout */
/* 4. Components */
/* 5. Utilities */
/* 6. Media Queries */`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Best Practices</title>
  <style>
    /* 1. Variables */
    :root {
      --primary: #6366f1;
      --text: #1e293b;
      --bg: #f8fafc;
      --radius: 12px;
      --shadow: 0 4px 12px rgba(0,0,0,0.08);
    }

    /* 2. Base */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); padding: 24px; }

    /* 3. Components — BEM naming */
    .card { background: white; border-radius: var(--radius); box-shadow: var(--shadow); overflow: hidden; }
    .card__header { padding: 16px 20px; border-bottom: 1px solid #e2e8f0; }
    .card__title { font-size: 1.1rem; font-weight: 700; color: var(--primary); }
    .card__body { padding: 20px; }
    .card__body p { line-height: 1.7; color: #64748b; }
    .card--featured { border: 2px solid var(--primary); }

    /* 4. Utilities */
    .mt-4 { margin-top: 16px; }
  </style>
</head>
<body>
  <div class="card card--featured">
    <div class="card__header">
      <h2 class="card__title">Featured Card</h2>
    </div>
    <div class="card__body">
      <p>This card follows BEM naming, uses CSS variables, and is well-organized.</p>
    </div>
  </div>
  <div class="card mt-4">
    <div class="card__header">
      <h2 class="card__title">Regular Card</h2>
    </div>
    <div class="card__body">
      <p>Same component, different modifier — clean and maintainable.</p>
    </div>
  </div>
</body>
</html>`,
    expectedOutput: 'Two cards — one featured with purple border, one regular — both using BEM naming and CSS variables.',
    notes: [
      'BEM = Block__Element--Modifier — a popular naming convention.',
      'Avoid !important — it makes debugging very difficult.',
      'Use CSS variables for all repeated values.',
      'Keep selectors under 3 levels of nesting.',
    ],
    commonMistakes: [
      'Using !important as a first resort — it should be a last resort.',
      'Not organizing CSS — leads to spaghetti code.',
      'Inconsistent naming — makes teamwork difficult.',
      'Not using CSS variables — leads to hard-to-update values.',
    ],
    practicePrompt: 'Refactor a CSS file to use BEM naming, CSS variables, and organized sections.',
    interviewQuestions: [
      'What is BEM in CSS?',
      'Why should you avoid !important?',
      'How do you organize a large CSS codebase?',
    ],
    miniTask: 'Create a component library with 3 card variations using BEM naming and CSS variables.',
  },
];

export default cssModules;
