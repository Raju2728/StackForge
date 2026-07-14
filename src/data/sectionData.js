/**
 * sectionData.js
 * Data for the interactive webpage section visualizer.
 * Each section describes a part of a webpage with purpose, tags, and sample code.
 */

const sectionData = [
  {
    id: 'header',
    label: 'Header',
    color: '#6366f1',
    icon: '🏠',
    purpose:
      'The header is the topmost section of a webpage. It contains the website logo, site title, and sometimes a tagline. It establishes the brand identity and is the first thing users see.',
    commonTags: ['<header>', '<h1>', '<img>', '<a>'],
    sampleCode:
`<header>
  <h1>🎓 StackLearner</h1>
  <p>Learn Web Development Step by Step</p>
</header>`,
    expectedResult: 'A section at the top with the website name and tagline.',
  },
  {
    id: 'nav',
    label: 'Navigation Bar',
    color: '#8b5cf6',
    icon: '🧭',
    purpose:
      'The navigation bar contains links that help users move between different pages or sections. It is the roadmap of your website, making it easy for visitors to find what they need.',
    commonTags: ['<nav>', '<ul>', '<li>', '<a>'],
    sampleCode:
`<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
</nav>`,
    expectedResult: 'A horizontal bar with clickable navigation links.',
  },
  {
    id: 'hero',
    label: 'Hero Section',
    color: '#ec4899',
    icon: '🌟',
    purpose:
      'The hero section is a large, prominent banner area below the navigation. It grabs attention with a bold headline, short description, and a call-to-action button. It communicates the main message of the website.',
    commonTags: ['<section>', '<h1>', '<h2>', '<p>', '<a>', '<button>'],
    sampleCode:
`<section id="hero">
  <h1>Learn to Code Today</h1>
  <p>Start your journey with interactive HTML lessons.</p>
  <a href="#start">Get Started</a>
</section>`,
    expectedResult: 'A visually prominent section with a heading, text, and a call-to-action button.',
  },
  {
    id: 'main',
    label: 'Main Content',
    color: '#f59e0b',
    icon: '📄',
    purpose:
      'The main content area holds the primary, unique content of the page. It wraps sections like About, Services, and Contact. There should be only one <main> element per page, and it should not include the header, nav, or footer.',
    commonTags: ['<main>', '<section>', '<article>', '<div>'],
    sampleCode:
`<main>
  <section id="about">
    <h2>About Us</h2>
    <p>We help beginners learn web development.</p>
  </section>
</main>`,
    expectedResult: 'The central area of the page containing the core information.',
  },
  {
    id: 'about',
    label: 'About Section',
    color: '#10b981',
    icon: '💡',
    purpose:
      'The About section tells visitors who you are, what you do, and your mission. It builds trust and provides context. It typically includes a brief introduction and key highlights.',
    commonTags: ['<section>', '<h2>', '<p>', '<ul>', '<li>'],
    sampleCode:
`<section id="about">
  <h2>About Us</h2>
  <p>We are a team of educators passionate about making coding accessible to everyone.</p>
  <ul>
    <li>Interactive lessons</li>
    <li>Hands-on projects</li>
    <li>Supportive community</li>
  </ul>
</section>`,
    expectedResult: 'A section with a heading, description, and a list of key points.',
  },
  {
    id: 'services',
    label: 'Services Section',
    color: '#3b82f6',
    icon: '⚙️',
    purpose:
      'The Services or Features section showcases what you offer. Each service typically has a title and brief description. This section helps users quickly understand your value proposition.',
    commonTags: ['<section>', '<h2>', '<h3>', '<div>', '<p>'],
    sampleCode:
`<section id="services">
  <h2>Our Services</h2>
  <div>
    <h3>Web Development</h3>
    <p>Build modern websites.</p>
  </div>
  <div>
    <h3>App Development</h3>
    <p>Create mobile applications.</p>
  </div>
</section>`,
    expectedResult: 'A section listing multiple services or features in a structured layout.',
  },
  {
    id: 'contact',
    label: 'Contact Section',
    color: '#f97316',
    icon: '📬',
    purpose:
      'The Contact section provides ways to reach you — typically through a form, email, phone, or address. It\'s essential for user engagement and building connections.',
    commonTags: ['<section>', '<h2>', '<form>', '<input>', '<textarea>', '<button>', '<label>'],
    sampleCode:
`<section id="contact">
  <h2>Contact Us</h2>
  <form>
    <label for="email">Email:</label>
    <input type="email" id="email" placeholder="Your email">
    <label for="message">Message:</label>
    <textarea id="message" rows="4"></textarea>
    <button type="submit">Send</button>
  </form>
</section>`,
    expectedResult: 'A section with a contact form and possibly additional contact information.',
  },
  {
    id: 'footer',
    label: 'Footer',
    color: '#64748b',
    icon: '📋',
    purpose:
      'The footer is the bottom section of the page. It contains copyright information, legal links, social media links, and sometimes a mini site map. It wraps up the page professionally.',
    commonTags: ['<footer>', '<p>', '<a>', '<nav>', '<small>'],
    sampleCode:
`<footer>
  <p>&copy; 2026 StackLearner. All rights reserved.</p>
  <nav>
    <a href="#">Privacy Policy</a> |
    <a href="#">Terms of Service</a>
  </nav>
</footer>`,
    expectedResult: 'A section at the bottom with copyright, links, and legal information.',
  },
];

export default sectionData;
