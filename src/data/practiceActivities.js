/**
 * practiceActivities.js
 * 10 guided practice tasks for HTML learning.
 * Each task has instructions, starter code, hints, solution, and validation.
 */

const practiceActivities = [
  {
    id: 1,
    title: 'Create a Heading',
    difficulty: 'Easy',
    instructions:
      'Create an HTML page with a main heading (h1) that says "My First Heading" and a subheading (h2) that says "Learning HTML is Fun".',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Heading Practice</title>
</head>
<body>
  <!-- Add your headings below -->
  
</body>
</html>`,
    hints: [
      'Use the <h1> tag for the main heading.',
      'Use the <h2> tag for the subheading.',
      'Make sure to close each tag with </h1> and </h2>.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Heading Practice</title>
</head>
<body>
  <h1>My First Heading</h1>
  <h2>Learning HTML is Fun</h2>
</body>
</html>`,
    validationKeywords: ['<h1>', 'My First Heading', '</h1>', '<h2>', 'Learning HTML is Fun', '</h2>'],
  },
  {
    id: 2,
    title: 'Add a Paragraph',
    difficulty: 'Easy',
    instructions:
      'Add a heading "About Me" and two paragraphs below it. The first paragraph should introduce yourself. The second paragraph should describe your hobby.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Paragraph Practice</title>
</head>
<body>
  <!-- Add your heading and paragraphs below -->
  
</body>
</html>`,
    hints: [
      'Use <h1> for the "About Me" heading.',
      'Use <p> tags for paragraphs.',
      'Write any content you like inside the paragraphs.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Paragraph Practice</title>
</head>
<body>
  <h1>About Me</h1>
  <p>My name is Alex and I am learning web development.</p>
  <p>I enjoy reading books and playing cricket in my free time.</p>
</body>
</html>`,
    validationKeywords: ['<h1>', 'About Me', '</h1>', '<p>', '</p>'],
  },
  {
    id: 3,
    title: 'Insert an Image',
    difficulty: 'Easy',
    instructions:
      'Add a heading "My Favourite Image" and insert an image below it. Use any placeholder image URL (like https://via.placeholder.com/300). Make sure to add proper alt text.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Practice</title>
</head>
<body>
  <h1>My Favourite Image</h1>
  <!-- Add your image below -->
  
</body>
</html>`,
    hints: [
      'Use the <img> tag — it is self-closing.',
      'Add src attribute with the image URL.',
      'Always include an alt attribute.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Practice</title>
</head>
<body>
  <h1>My Favourite Image</h1>
  <img src="https://via.placeholder.com/300" alt="A placeholder image">
</body>
</html>`,
    validationKeywords: ['<img', 'src=', 'alt='],
  },
  {
    id: 4,
    title: 'Create a Navigation Link',
    difficulty: 'Easy',
    instructions:
      'Create a navigation bar with 4 links: Home, About, Services, and Contact. Each link should point to a section id on the same page (use #home, #about, #services, #contact). Then create those 4 sections with headings.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Navigation Practice</title>
</head>
<body>
  <!-- Add your navigation links below -->
  <nav>
    
  </nav>

  <!-- Add your sections below -->
  
</body>
</html>`,
    hints: [
      'Use <a href="#sectionid"> for anchor links.',
      'Create <section id="sectionid"> for each target.',
      'Put navigation links inside the <nav> element.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Navigation Practice</title>
</head>
<body>
  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="home"><h2>Home</h2><p>Welcome!</p></section>
  <section id="about"><h2>About</h2><p>About us.</p></section>
  <section id="services"><h2>Services</h2><p>Our services.</p></section>
  <section id="contact"><h2>Contact</h2><p>Contact us.</p></section>
</body>
</html>`,
    validationKeywords: ['<nav>', '<a', 'href="#home"', 'href="#about"', 'href="#services"', 'href="#contact"', '</nav>'],
  },
  {
    id: 5,
    title: 'Build a List',
    difficulty: 'Medium',
    instructions:
      'Create two lists: (1) An unordered list of your 5 favourite foods, (2) An ordered list of 5 steps to make a cup of tea.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>List Practice</title>
</head>
<body>
  <h1>Lists Practice</h1>
  
  <!-- Add unordered list of foods -->
  <h2>My Favourite Foods</h2>
  
  
  <!-- Add ordered list of tea-making steps -->
  <h2>How to Make Tea</h2>
  
  
</body>
</html>`,
    hints: [
      'Use <ul> for unordered list and <ol> for ordered list.',
      'Each item should be inside <li> tags.',
      'Close all tags properly.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>List Practice</title>
</head>
<body>
  <h1>Lists Practice</h1>
  
  <h2>My Favourite Foods</h2>
  <ul>
    <li>Pizza</li>
    <li>Biryani</li>
    <li>Pasta</li>
    <li>Ice Cream</li>
    <li>Dosa</li>
  </ul>

  <h2>How to Make Tea</h2>
  <ol>
    <li>Boil water in a pot</li>
    <li>Add tea leaves</li>
    <li>Add milk and sugar</li>
    <li>Let it simmer for 2 minutes</li>
    <li>Strain into a cup and serve</li>
  </ol>
</body>
</html>`,
    validationKeywords: ['<ul>', '<li>', '</li>', '</ul>', '<ol>', '</ol>'],
  },
  {
    id: 6,
    title: 'Create a Table',
    difficulty: 'Medium',
    instructions:
      'Create a table showing a student timetable. It should have 3 columns: Time, Subject, and Teacher. Add at least 4 rows of data. Include table headers using <th> tags.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Table Practice</title>
</head>
<body>
  <h1>My Class Timetable</h1>
  <!-- Create your table below -->
  <table border="1" cellpadding="8" cellspacing="0">
    
  </table>
</body>
</html>`,
    hints: [
      'Use <thead> for the header row and <tbody> for data rows.',
      'Use <th> for header cells and <td> for data cells.',
      'Each row needs a <tr> tag.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Table Practice</title>
</head>
<body>
  <h1>My Class Timetable</h1>
  <table border="1" cellpadding="8" cellspacing="0">
    <thead>
      <tr>
        <th>Time</th>
        <th>Subject</th>
        <th>Teacher</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>9:00 AM</td>
        <td>Mathematics</td>
        <td>Mr. Sharma</td>
      </tr>
      <tr>
        <td>10:00 AM</td>
        <td>English</td>
        <td>Ms. Patel</td>
      </tr>
      <tr>
        <td>11:00 AM</td>
        <td>Science</td>
        <td>Dr. Gupta</td>
      </tr>
      <tr>
        <td>12:00 PM</td>
        <td>Computer Science</td>
        <td>Mr. Verma</td>
      </tr>
    </tbody>
  </table>
</body>
</html>`,
    validationKeywords: ['<table', '<thead>', '<th>', '</th>', '<tbody>', '<tr>', '<td>', '</td>', '</tr>', '</tbody>', '</table>'],
  },
  {
    id: 7,
    title: 'Build a Registration Form',
    difficulty: 'Medium',
    instructions:
      'Create a registration form with the following fields: Full Name (text), Email (email), Password (password), Gender (radio buttons: Male/Female), Course (dropdown: BCA, BBA, B.Sc), and a Submit button.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Practice</title>
</head>
<body>
  <h1>Student Registration</h1>
  <form>
    <!-- Add your form fields below -->
    
  </form>
</body>
</html>`,
    hints: [
      'Use <label> and <input> pairs for each field.',
      'Use type="radio" with the same name attribute for gender.',
      'Use <select> and <option> for the course dropdown.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Practice</title>
</head>
<body>
  <h1>Student Registration</h1>
  <form>
    <p>
      <label for="name">Full Name:</label><br>
      <input type="text" id="name" name="name" required>
    </p>
    <p>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required>
    </p>
    <p>
      <label for="password">Password:</label><br>
      <input type="password" id="password" name="password" required>
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
        <option value="bca">BCA</option>
        <option value="bba">BBA</option>
        <option value="bsc">B.Sc</option>
      </select>
    </p>
    <p>
      <button type="submit">Register</button>
    </p>
  </form>
</body>
</html>`,
    validationKeywords: ['<form>', '<input', 'type="text"', 'type="email"', 'type="password"', 'type="radio"', '<select', '<option', '<button', '</form>'],
  },
  {
    id: 8,
    title: 'Create a Header Section',
    difficulty: 'Medium',
    instructions:
      'Create a semantic header section for a website called "LearnCode". The header should contain the website name in an h1 tag and a navigation bar with links: Home, Courses, About, Contact.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Header Practice</title>
</head>
<body>
  <!-- Create your header with nav below -->
  
  
  <main>
    <p>Main content area.</p>
  </main>
</body>
</html>`,
    hints: [
      'Wrap everything in a <header> tag.',
      'Put navigation links inside <nav>.',
      'Use <a> tags with href attributes for links.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Header Practice</title>
</head>
<body>
  <header>
    <h1>LearnCode</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#courses">Courses</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <p>Main content area.</p>
  </main>
</body>
</html>`,
    validationKeywords: ['<header>', '<h1>', 'LearnCode', '</h1>', '<nav>', '<a', 'Home', 'Courses', 'About', 'Contact', '</nav>', '</header>'],
  },
  {
    id: 9,
    title: 'Create a Footer Section',
    difficulty: 'Medium',
    instructions:
      'Create a footer section that includes: (1) Copyright text with the year 2026, (2) Quick links: Privacy Policy, Terms of Service, (3) Social media links: Facebook, Twitter, LinkedIn.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Footer Practice</title>
</head>
<body>
  <main>
    <h1>My Website</h1>
    <p>Main content here.</p>
  </main>

  <!-- Create your footer below -->
  
</body>
</html>`,
    hints: [
      'Use the <footer> tag.',
      'Use &copy; for the copyright symbol.',
      'Group links logically with headings or paragraphs.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Footer Practice</title>
</head>
<body>
  <main>
    <h1>My Website</h1>
    <p>Main content here.</p>
  </main>

  <footer>
    <p>&copy; 2026 My Website. All rights reserved.</p>
    <p>
      <a href="#">Privacy Policy</a> |
      <a href="#">Terms of Service</a>
    </p>
    <p>
      <a href="#">Facebook</a> |
      <a href="#">Twitter</a> |
      <a href="#">LinkedIn</a>
    </p>
  </footer>
</body>
</html>`,
    validationKeywords: ['<footer>', '&copy;', '2026', 'Privacy Policy', 'Terms of Service', 'Facebook', 'Twitter', 'LinkedIn', '</footer>'],
  },
  {
    id: 10,
    title: 'Build a Complete Semantic HTML Webpage',
    difficulty: 'Hard',
    instructions:
      'Build a complete semantic HTML webpage for a fictional company called "WebWizard". Include: header with company name and nav (Home, About, Services, Contact), a hero section with a heading and description, about section, services section with at least 3 services, contact section with a simple form, and a footer with copyright.',
    starterCode:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebWizard</title>
</head>
<body>
  <!-- Build your complete webpage below -->
  
</body>
</html>`,
    hints: [
      'Start with <header> and <nav>.',
      'Use <section> with unique ids for each part.',
      'Wrap main content in <main>.',
      'End with <footer>.',
    ],
    solution:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebWizard</title>
</head>
<body>
  <header>
    <h1>WebWizard</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="home">
    <h2>Welcome to WebWizard</h2>
    <p>We create magical web experiences for your business.</p>
  </section>

  <main>
    <section id="about">
      <h2>About Us</h2>
      <p>WebWizard is a web development agency specializing in modern, responsive websites.</p>
    </section>

    <section id="services">
      <h2>Our Services</h2>
      <div>
        <h3>Web Design</h3>
        <p>Beautiful, user-friendly website designs.</p>
      </div>
      <div>
        <h3>Development</h3>
        <p>Clean, efficient code for fast websites.</p>
      </div>
      <div>
        <h3>SEO</h3>
        <p>Optimize your site for search engines.</p>
      </div>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <form>
        <p>
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name" required>
        </p>
        <p>
          <label for="email">Email:</label><br>
          <input type="email" id="email" name="email" required>
        </p>
        <p>
          <label for="message">Message:</label><br>
          <textarea id="message" name="message" rows="4" required></textarea>
        </p>
        <button type="submit">Send</button>
      </form>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 WebWizard. All rights reserved.</p>
  </footer>
</body>
</html>`,
    validationKeywords: ['<header>', '<nav>', '<main>', '<section', 'id="about"', 'id="services"', 'id="contact"', '<form>', '<footer>', '&copy;'],
  },
];

export default practiceActivities;
