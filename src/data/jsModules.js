/**
 * jsModules.js
 * Content for all JavaScript learning modules.
 * Each module has: id, title, category, explanation, analogy, thanglishAnalogy,
 * analogyConnection, syntax, codeExample, expectedOutput, notes, commonMistakes,
 * practicePrompt, interviewQuestions, miniTask.
 */

const jsModules = [
  // ===================== JAVASCRIPT BASICS =====================
  {
    id: 1,
    title: 'What is JavaScript?',
    category: 'JavaScript Basics',
    explanation:
      'JavaScript is the programming language of the web. While HTML provides structure and CSS provides style, JavaScript adds interactivity, logic, and behavior to websites. It can respond to user actions (clicks, typing), manipulate the page content dynamically, validate forms, create animations, fetch data from servers, and much more. JavaScript runs in the browser and also on servers (Node.js).',
    analogy:
      'If HTML is the skeleton and CSS is the skin/clothes of a person, then JavaScript is the brain and muscles. It makes decisions (if/else), performs actions (functions), remembers things (variables), and responds to the environment (events).',
    thanglishAnalogy:
      'HTML body structure, CSS appearance, JavaScript brain and muscles. Brain decide pannum (conditions), muscles action pannum (functions), memory store pannum (variables). Button click pannuna page color maara venum — adhu JavaScript. Form fill pannuna validation check panna venum — adhu JavaScript. Website-oda intelligence dhaan JavaScript.',
    analogyConnection: 'Brain = Logic/Decisions | Muscles = Actions/Functions | Memory = Variables | Reactions = Event Handling',
    syntax:
`// JavaScript can be written in:
// 1. Inline: <button onclick="alert('Hi')">
// 2. Internal: <script> code </script>
// 3. External: <script src="script.js"></script>`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>What is JavaScript</title>
</head>
<body>
  <h1 id="title">Hello, JavaScript!</h1>
  <button onclick="changeTitle()">Click Me</button>

  <script>
    function changeTitle() {
      document.getElementById('title').textContent = 'JavaScript is Amazing! 🚀';
      document.getElementById('title').style.color = '#6366f1';
    }
  </script>
</body>
</html>`,
    expectedOutput: 'A heading and button. Clicking the button changes the heading text and color.',
    notes: [
      'JavaScript is the only programming language that runs natively in browsers.',
      'It was created in just 10 days by Brendan Eich in 1995.',
      'JavaScript is NOT Java — they are completely different languages.',
      'Modern JavaScript (ES6+) has powerful features like arrow functions, destructuring, and modules.',
    ],
    commonMistakes: [
      'Confusing JavaScript with Java — they are unrelated.',
      'Thinking JavaScript only works in browsers — Node.js runs it on servers.',
      'Not placing <script> tags correctly — put them before </body> or use defer.',
    ],
    practicePrompt: 'Create a button that changes the text of a paragraph when clicked.',
    interviewQuestions: [
      'What is JavaScript and why is it important?',
      'Is JavaScript a compiled or interpreted language?',
      'What is the difference between JavaScript and Java?',
    ],
    miniTask: 'Create a button that toggles a paragraph between visible and hidden.',
  },
  {
    id: 2,
    title: 'Role of JavaScript in Web Development',
    category: 'JavaScript Basics',
    explanation:
      'JavaScript plays three main roles in web development: (1) Client-side interactivity — handling user events, form validation, dynamic content updates. (2) DOM manipulation — changing HTML/CSS after the page loads. (3) Asynchronous operations — fetching data from APIs without reloading the page. Modern JavaScript frameworks like React, Vue, and Angular build entire applications in JavaScript.',
    analogy:
      'In a restaurant, HTML is the menu (structure), CSS is the interior design (appearance), and JavaScript is the waiter and kitchen staff (functionality). The waiter takes orders (events), passes them to the kitchen (processing), and brings back food (results) — all without you leaving your table (no page reload).',
    thanglishAnalogy:
      'Restaurant-la menu = HTML, interior design = CSS, waiter + kitchen = JavaScript. Waiter order yedupaaru (event listen), kitchen-la process aagum (logic), food table-la varum (DOM update) — neenga seat-la irundhae ellaam nadakkum (no page reload). AJAX, Fetch API use pannuna server-la irundhum data dynamic-a vaangalam.',
    analogyConnection: 'Waiter = Event listener | Kitchen = Processing logic | Serving food = DOM update | No leaving table = No page reload',
    syntax: null,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Role in Web Dev</title>
</head>
<body>
  <h1>JavaScript Roles Demo</h1>

  <!-- Role 1: Event Handling -->
  <button id="greetBtn">Say Hello</button>
  <p id="greeting"></p>

  <!-- Role 2: DOM Manipulation -->
  <div id="colorBox" style="width:100px;height:100px;background:#6366f1;border-radius:10px;margin:10px 0;"></div>

  <!-- Role 3: Dynamic Content -->
  <button id="timeBtn">Show Time</button>
  <p id="timeDisplay"></p>

  <script>
    // Role 1: Event handling
    document.getElementById('greetBtn').addEventListener('click', function() {
      document.getElementById('greeting').textContent = 'Hello, StackLearner! 👋';
    });

    // Role 2: DOM manipulation
    document.getElementById('colorBox').addEventListener('click', function() {
      const colors = ['#6366f1', '#e11d48', '#10b981', '#f59e0b'];
      this.style.background = colors[Math.floor(Math.random() * colors.length)];
    });

    // Role 3: Dynamic content
    document.getElementById('timeBtn').addEventListener('click', function() {
      document.getElementById('timeDisplay').textContent = 'Current time: ' + new Date().toLocaleTimeString();
    });
  </script>
</body>
</html>`,
    expectedOutput: 'Three interactive elements: a greeting button, a color-changing box, and a time display button.',
    notes: [
      'JavaScript makes static HTML pages interactive.',
      'Modern web apps are almost entirely built with JavaScript.',
      'JavaScript can run both in the browser (front-end) and server (back-end with Node.js).',
      'Single Page Applications (SPAs) use JavaScript to update content without page reloads.',
    ],
    commonMistakes: [
      'Trying to access DOM elements before they are loaded.',
      'Not understanding the difference between client-side and server-side JavaScript.',
      'Overcomplicating simple interactions that CSS can handle.',
    ],
    practicePrompt: 'Create a page with a button that fetches and displays the current date and time.',
    interviewQuestions: [
      'What are the main roles of JavaScript in web development?',
      'What is DOM manipulation?',
      'What is a Single Page Application?',
    ],
    miniTask: 'Create a counter that increases when a button is clicked and displays the count.',
  },
  {
    id: 3,
    title: 'JavaScript Syntax and Comments',
    category: 'JavaScript Basics',
    explanation:
      'JavaScript syntax includes statements (instructions that end with ;), variables (data containers), operators (+, -, *, /), functions (reusable code blocks), and control structures (if/else, loops). Comments are notes in code: single-line (//) and multi-line (/* */). JavaScript is case-sensitive — myVar and myvar are different.',
    analogy:
      'JavaScript syntax is like grammar rules in a language. Statements are sentences, semicolons are periods, variables are named boxes, and functions are recipes. Comments are sticky notes that the computer ignores.',
    thanglishAnalogy:
      'Language grammar madhiri JavaScript syntax. Statement = sentence, semicolon = full stop, variable = labeled box, function = recipe. // single-line comment, /* */ multi-line comment — sticky notes madhiri, computer ignore pannum aanaa developer-ku useful. JavaScript case-sensitive — "Name" and "name" veru veru!',
    analogyConnection: 'Sentences = Statements | Period = Semicolon | Named boxes = Variables | Recipe = Function | Sticky notes = Comments',
    syntax:
`// Single-line comment

/* Multi-line
   comment */

// Statement with semicolon
let name = "StackLearner";

// Function
function greet() {
  console.log("Hello!");
}

// Calling a function
greet();`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Syntax</title>
</head>
<body>
  <h1>JavaScript Syntax Demo</h1>
  <div id="output"></div>

  <script>
    // This is a single-line comment
    /* This is a
       multi-line comment */

    // Variables
    let courseName = "StackLearner";
    const version = 2.0;

    // Function
    function showInfo() {
      return courseName + " v" + version;
    }

    // Output to page
    document.getElementById('output').innerHTML =
      '<p><strong>Course:</strong> ' + showInfo() + '</p>' +
      '<p><strong>Type:</strong> Web Development</p>' +
      '<p><strong>Year:</strong> 2026</p>';
  </script>
</body>
</html>`,
    expectedOutput: 'A page showing course name, type, and year — generated dynamically by JavaScript.',
    notes: [
      'Semicolons are optional in JS but recommended for clarity.',
      'JavaScript is case-sensitive: myVar ≠ myvar.',
      'Use // for quick single-line comments.',
      'console.log() prints output to the browser console (F12).',
    ],
    commonMistakes: [
      'Forgetting that JavaScript is case-sensitive.',
      'Missing closing brackets or parentheses.',
      'Using = (assignment) instead of === (comparison).',
      'Not opening browser DevTools to see console.log output.',
    ],
    practicePrompt: 'Write a JavaScript program with variables, a function, and comments explaining each part.',
    interviewQuestions: [
      'Is JavaScript case-sensitive?',
      'What are the two types of comments in JavaScript?',
      'Is the semicolon mandatory in JavaScript?',
    ],
    miniTask: 'Create a script that stores your name and age in variables and displays them on the page.',
  },
  {
    id: 4,
    title: 'Variables: var, let, const',
    category: 'JavaScript Basics',
    explanation:
      'Variables are containers that store data values. JavaScript has three ways to declare variables: var (old way, function-scoped, can be re-declared), let (modern, block-scoped, can be reassigned), const (modern, block-scoped, cannot be reassigned). Use const by default, let when you need to reassign, and avoid var in modern code.',
    analogy:
      'Variables are like labeled storage boxes. const is a sealed box — once you put something in, you can\'t replace it. let is a reusable box — you can swap items. var is an old-style box that doesn\'t respect room boundaries (scope).',
    thanglishAnalogy:
      'Storage box madhiri variables. const = sealed box — oru item pottuutta, maaththa mudiyaadhu. let = reusable box — item maaththa mudiyum. var = old-style box — room boundaries (scope) respect pannaadhu, veettu enga venaalum access aagum. Modern code-la const and let mattum use pannunga, var avoid pannunga.',
    analogyConnection: 'const = Sealed box (fixed) | let = Reusable box (changeable) | var = Old box (no boundaries) | Label = Variable name',
    syntax:
`// const — cannot reassign
const PI = 3.14159;
const name = "StackLearner";

// let — can reassign
let score = 0;
score = 10;       // OK

// var — avoid in modern code
var oldWay = "legacy";

// Block scope demo
{
  let x = 10;     // Only exists inside this block
  const y = 20;   // Only exists inside this block
  var z = 30;     // Exists OUTSIDE this block too!
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Variables</title>
</head>
<body>
  <h1>Variables Demo</h1>
  <div id="output"></div>

  <script>
    // const - cannot change
    const appName = "StackLearner";
    const year = 2026;

    // let - can change
    let score = 0;
    score = 100;  // ✅ Allowed

    let greeting = "Hello";
    greeting = "Welcome";  // ✅ Allowed

    // const appName = "New Name"; // ❌ Error: already declared
    // appName = "New Name";      // ❌ Error: cannot reassign const

    // Display results
    const output = document.getElementById('output');
    output.innerHTML = \`
      <p><strong>App:</strong> \${appName}</p>
      <p><strong>Year:</strong> \${year}</p>
      <p><strong>Score:</strong> \${score}</p>
      <p><strong>Greeting:</strong> \${greeting}</p>
      <p><em>const = fixed, let = changeable</em></p>
    \`;
  </script>
</body>
</html>`,
    expectedOutput: 'A page showing variable values: app name (const), year (const), score (let, updated), and greeting (let, updated).',
    notes: [
      'Use const by default — only use let when you need to reassign.',
      'var is function-scoped; let and const are block-scoped.',
      'const prevents reassignment but does NOT make objects immutable.',
      'Variable names can contain letters, digits, underscores, and $ — but cannot start with a digit.',
    ],
    commonMistakes: [
      'Using var in modern code — use let or const instead.',
      'Trying to reassign a const variable.',
      'Thinking const makes objects/arrays immutable — it only prevents reassignment.',
      'Declaring variables without let/const — creates global variables accidentally.',
    ],
    practicePrompt: 'Create variables using const and let, then try reassigning each to see what happens.',
    interviewQuestions: [
      'What is the difference between var, let, and const?',
      'What is block scope vs function scope?',
      'Can you change a property of a const object?',
    ],
    miniTask: 'Create a shopping cart counter using let that increments on button click.',
  },
  {
    id: 5,
    title: 'Data Types: String, Number, Boolean',
    category: 'Data Types',
    explanation:
      'JavaScript has several data types. Primitive types: String (text in quotes), Number (integers and decimals), Boolean (true/false), Undefined (declared but no value), Null (intentionally empty). Reference types: Object (key-value pairs), Array (ordered list). typeof operator checks the type of a value.',
    analogy:
      'Data types are like different types of containers. String = a notebook (text). Number = a calculator (numbers). Boolean = a light switch (on/off). Undefined = an empty labeled box. Null = a box with a "nothing inside" sign.',
    thanglishAnalogy:
      'Different containers madhiri data types. String = notebook (text ezhuthuvom). Number = calculator (numbers). Boolean = light switch (ON/OFF, true/false). Undefined = empty box — label irukku aanaa ulle onnum illai. Null = box irukku, ulle intentionally onnum vekkala. typeof use pannuna type check pannalam.',
    analogyConnection: 'Notebook = String | Calculator = Number | Light switch = Boolean | Empty box = Undefined | Empty intentionally = Null',
    syntax:
`// String
let name = "StackLearner";
let greeting = 'Hello World';
let template = \`Hello \${name}\`;   // Template literal

// Number
let age = 25;
let price = 99.99;

// Boolean
let isLoggedIn = true;
let hasAccess = false;

// Undefined
let data;          // undefined

// Null
let result = null; // intentionally empty

// Check type
typeof name;       // "string"
typeof age;        // "number"
typeof isLoggedIn; // "boolean"`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Data Types</title>
</head>
<body>
  <h1>JavaScript Data Types</h1>
  <div id="output"></div>

  <script>
    const name = "StackLearner";       // String
    const version = 2.0;               // Number
    const isActive = true;             // Boolean
    let futureFeature;                 // Undefined
    const emptyValue = null;           // Null

    const output = document.getElementById('output');
    output.innerHTML = \`
      <p>"StackLearner" → <strong>\${typeof name}</strong></p>
      <p>2.0 → <strong>\${typeof version}</strong></p>
      <p>true → <strong>\${typeof isActive}</strong></p>
      <p>undefined → <strong>\${typeof futureFeature}</strong></p>
      <p>null → <strong>\${typeof emptyValue}</strong> (known JS quirk!)</p>
    \`;
  </script>
</body>
</html>`,
    expectedOutput: 'A page showing each value and its typeof result: string, number, boolean, undefined, object (null quirk).',
    notes: [
      'JavaScript has 7 primitive types and Object as reference type.',
      'typeof null returns "object" — this is a known JavaScript bug since 1995.',
      'Strings can use single quotes, double quotes, or backticks (template literals).',
      'JavaScript Numbers include both integers and floating-point — no separate int/float.',
    ],
    commonMistakes: [
      'Confusing undefined and null — undefined means "not assigned", null means "intentionally empty".',
      'Forgetting that typeof null is "object" (a JS quirk).',
      'Using == instead of === for type comparisons.',
    ],
    practicePrompt: 'Create variables of each data type and display their typeof results.',
    interviewQuestions: [
      'What are the primitive data types in JavaScript?',
      'What is the difference between undefined and null?',
      'What does typeof null return and why?',
    ],
    miniTask: 'Build a type checker that takes user input and displays its JavaScript data type.',
  },
  {
    id: 6,
    title: 'Data Types: Object and Array',
    category: 'Data Types',
    explanation:
      'Objects store data as key-value pairs (like a dictionary). Arrays store ordered lists of values (like a numbered list). Both are reference types — variables hold a reference (address), not the actual data. Objects use curly braces {}, arrays use square brackets []. They are the most-used data structures in JavaScript.',
    analogy:
      'An Object is like a student ID card — it has labeled fields (name, age, course). An Array is like a shopping list — items are in order and you access them by position number (index).',
    thanglishAnalogy:
      'Object = Student ID card — name, age, course nu labeled fields irukum. Array = Shopping list — items order-la irukum, position number (index) use pannna access pannalam. Object-la key use panni access (student.name), Array-la index use panni access (list[0]). Rendu-me romba important — JavaScript-la everywhere use aagum.',
    analogyConnection: 'Student ID = Object | Shopping list = Array | Field label = Key | Position number = Index',
    syntax:
`// Object
const student = {
  name: "Ravi",
  age: 20,
  course: "BCA"
};
student.name;          // "Ravi"
student["age"];        // 20

// Array
const fruits = ["Apple", "Banana", "Mango"];
fruits[0];             // "Apple"
fruits.length;         // 3
fruits.push("Grape");  // Add to end`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Objects and Arrays</title>
</head>
<body>
  <h1>Objects & Arrays</h1>
  <div id="output"></div>

  <script>
    // Object
    const student = {
      name: "Ravi Kumar",
      age: 20,
      course: "BCA",
      skills: ["HTML", "CSS", "JavaScript"]
    };

    // Array
    const topLanguages = ["JavaScript", "Python", "Java", "C++", "TypeScript"];

    const output = document.getElementById('output');
    output.innerHTML = \`
      <h3>Student Object:</h3>
      <p>Name: \${student.name}</p>
      <p>Age: \${student.age}</p>
      <p>Course: \${student.course}</p>
      <p>Skills: \${student.skills.join(", ")}</p>

      <h3>Top Languages Array:</h3>
      <ol>
        \${topLanguages.map(lang => '<li>' + lang + '</li>').join('')}
      </ol>
      <p>Total: \${topLanguages.length} languages</p>
    \`;
  </script>
</body>
</html>`,
    expectedOutput: 'Student details from an object and a numbered list of programming languages from an array.',
    notes: [
      'Objects use dot notation (obj.key) or bracket notation (obj["key"]).',
      'Array indices start at 0, not 1.',
      'Arrays have a .length property and methods like push(), pop(), map().',
      'Objects and arrays can be nested inside each other.',
    ],
    commonMistakes: [
      'Forgetting that array indices start at 0.',
      'Using = instead of : for object properties.',
      'Confusing array.length (property) with a method.',
      'Mutating const objects/arrays — const prevents reassignment but allows mutation.',
    ],
    practicePrompt: 'Create a student object with name, age, and an array of hobbies. Display them on the page.',
    interviewQuestions: [
      'What is the difference between an object and an array?',
      'How do you access object properties?',
      'What is the first index of an array?',
    ],
    miniTask: 'Create an array of 5 students (objects) and display them as a table.',
  },
  {
    id: 7,
    title: 'Operators',
    category: 'Operators',
    explanation:
      'Operators perform operations on values. Arithmetic: +, -, *, /, %, ** (power). Assignment: =, +=, -=, *=. Comparison: == (loose), === (strict), !=, !==, >, <, >=, <=. Logical: && (AND), || (OR), ! (NOT). Ternary: condition ? true : false. Always use === for comparison to avoid type coercion bugs.',
    analogy:
      'Operators are like tools in a toolbox. Arithmetic operators are calculators, comparison operators are scales (comparing weights), logical operators are decision gates (AND/OR), and the ternary operator is a fork in the road.',
    thanglishAnalogy:
      'Toolbox madhiri operators. Calculator = arithmetic (+, -, *, /). Weighing scale = comparison (===, >, <). Decision gate = logical (&&, ||, !). Fork in road = ternary (condition ? yes : no). === strict-a compare pannum (value + type), == loose-a compare pannum (value mattum) — always === use pannunga.',
    analogyConnection: 'Calculator = Arithmetic | Scale = Comparison | Gate = Logical | Fork = Ternary',
    syntax:
`// Arithmetic
5 + 3;     // 8
10 % 3;    // 1 (remainder)
2 ** 3;    // 8 (power)

// Comparison (ALWAYS use ===)
5 === 5;   // true (strict: value + type)
5 == "5";  // true (loose: type coercion!)
5 === "5"; // false (strict: different types)

// Logical
true && true;   // true (AND)
true || false;  // true (OR)
!true;          // false (NOT)

// Ternary
const status = age >= 18 ? "Adult" : "Minor";`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Operators</title>
</head>
<body>
  <h1>JavaScript Operators</h1>
  <div id="output"></div>

  <script>
    const a = 10, b = 3;

    // Arithmetic
    const sum = a + b;
    const remainder = a % b;
    const power = a ** 2;

    // Comparison
    const isEqual = (5 === 5);
    const looseEqual = (5 == "5");   // true (type coercion)
    const strictEqual = (5 === "5"); // false (strict)

    // Logical
    const age = 20;
    const hasID = true;
    const canEnter = (age >= 18) && hasID;

    // Ternary
    const status = age >= 18 ? "Adult ✅" : "Minor ❌";

    document.getElementById('output').innerHTML = \`
      <h3>Arithmetic:</h3>
      <p>\${a} + \${b} = \${sum}</p>
      <p>\${a} % \${b} = \${remainder}</p>
      <p>\${a}² = \${power}</p>
      <h3>Comparison:</h3>
      <p>5 === 5 → \${isEqual}</p>
      <p>5 == "5" → \${looseEqual} (loose!)</p>
      <p>5 === "5" → \${strictEqual} (strict)</p>
      <h3>Logical & Ternary:</h3>
      <p>Can enter? \${canEnter} (age >= 18 AND has ID)</p>
      <p>Status: \${status}</p>
    \`;
  </script>
</body>
</html>`,
    expectedOutput: 'Results of arithmetic, comparison, logical, and ternary operations displayed on the page.',
    notes: [
      'Always use === (strict equality) instead of == (loose equality).',
      '== performs type coercion: 5 == "5" is true, which is usually not what you want.',
      '&& returns the first falsy value or the last value.',
      '|| returns the first truthy value or the last value.',
    ],
    commonMistakes: [
      'Using == instead of === — causes subtle type coercion bugs.',
      'Confusing = (assignment) with === (comparison).',
      'Not understanding operator precedence — use parentheses to be explicit.',
      'Forgetting that + concatenates strings: "5" + 3 = "53" not 8.',
    ],
    practicePrompt: 'Create a simple calculator that performs all arithmetic operations on two numbers.',
    interviewQuestions: [
      'What is the difference between == and ===?',
      'What is the ternary operator?',
      'What does the && operator return?',
    ],
    miniTask: 'Build a form that takes two numbers and shows results of +, -, *, /, % operations.',
  },
  {
    id: 8,
    title: 'Control Statements: if, else if, else, switch',
    category: 'Control Statements',
    explanation:
      'Control statements make decisions in code. if checks a condition and runs code if true. else runs alternative code if the condition is false. else if checks additional conditions. switch compares a value against multiple cases — cleaner than many if/else chains. These are fundamental to programming logic.',
    analogy:
      'Control statements are like a traffic signal. Red = stop (condition false). Green = go (condition true). Yellow = check another condition (else if). A roundabout with signs = switch (multiple directions based on destination).',
    thanglishAnalogy:
      'Traffic signal madhiri control statements. Red light = condition false, stop (else block). Green light = condition true, go (if block). Yellow light = innum oru condition check pannu (else if). Roundabout signs = switch — destination-ku tha direction maarium. "Marks 90 mela iruntha A grade, 80 mela B grade" — idhu ellaam if-else-la ezhuthuvom.',
    analogyConnection: 'Green = if (true) | Red = else (false) | Yellow = else if (another check) | Roundabout = switch (multiple options)',
    syntax:
`// if-else
if (condition) {
  // runs if true
} else if (anotherCondition) {
  // runs if first is false, this is true
} else {
  // runs if all conditions are false
}

// switch
switch (value) {
  case "A": /* code */ break;
  case "B": /* code */ break;
  default:  /* fallback code */
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Control Statements</title>
</head>
<body>
  <h1>Grade Calculator</h1>
  <input type="number" id="marks" placeholder="Enter marks (0-100)" style="padding:10px;font-size:16px;">
  <button onclick="checkGrade()" style="padding:10px 20px;font-size:16px;">Check Grade</button>
  <p id="result" style="font-size:1.2rem;margin-top:16px;font-weight:bold;"></p>

  <script>
    function checkGrade() {
      const marks = parseInt(document.getElementById('marks').value);
      let grade, message;

      if (marks >= 90) {
        grade = "A+";
        message = "Outstanding! 🌟";
      } else if (marks >= 80) {
        grade = "A";
        message = "Excellent! 🎉";
      } else if (marks >= 70) {
        grade = "B";
        message = "Good job! 👍";
      } else if (marks >= 60) {
        grade = "C";
        message = "Keep improving! 📈";
      } else if (marks >= 50) {
        grade = "D";
        message = "Need more practice! 💪";
      } else {
        grade = "F";
        message = "Study harder! 📚";
      }

      document.getElementById('result').textContent =
        \`Marks: \${marks} → Grade: \${grade} — \${message}\`;
    }
  </script>
</body>
</html>`,
    expectedOutput: 'An input field and button. Entering marks shows the grade and a motivational message.',
    notes: [
      'if/else is the most fundamental control structure.',
      'switch is cleaner when comparing one value against many options.',
      'Always include a default case in switch statements.',
      'Don\'t forget the break in switch — without it, execution "falls through".',
    ],
    commonMistakes: [
      'Using = instead of === in conditions.',
      'Forgetting break in switch statements — causes fall-through.',
      'Writing too many nested if/else — use switch or early return instead.',
      'Not handling edge cases (NaN, negative numbers, etc.).',
    ],
    practicePrompt: 'Create a grade calculator using if/else that takes marks and returns a letter grade.',
    interviewQuestions: [
      'What is the difference between if-else and switch?',
      'What happens if you forget break in a switch?',
      'Can you use switch with ranges?',
    ],
    miniTask: 'Build a day-of-week checker using switch that shows if it\'s a weekday or weekend.',
  },
  {
    id: 9,
    title: 'Loops: for, while, do-while',
    category: 'Loops',
    explanation:
      'Loops repeat code multiple times. for loop runs a fixed number of times with counter. while loop runs while a condition is true. do-while runs at least once, then checks condition. for...of iterates over array values. for...in iterates over object keys. Choose the right loop for your use case.',
    analogy:
      'Loops are like daily routines. A for loop is like "brush teeth 2 minutes" (fixed duration). A while loop is like "eat until full" (condition-based). A do-while loop is like "try the food, then decide if you want more" (runs at least once).',
    thanglishAnalogy:
      'Daily routine madhiri loops. for loop = "2 minutes brush pannu" (fixed count). while loop = "vayiru full aagura varai saapidu" (condition check first). do-while = "mudhalla oru taste pannu, pidhichha innum saapidu" (at least once run aagum). for...of = "shopping list-la oru oru item-a check pannu" (array iterate).',
    analogyConnection: 'Fixed brushing time = for (known count) | Eating until full = while (condition) | Taste first = do-while (at least once)',
    syntax:
`// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do-while loop
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

// for...of (arrays)
for (const item of array) { }

// for...in (objects)
for (const key in object) { }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Loops</title>
</head>
<body>
  <h1>JavaScript Loops</h1>
  <div id="output"></div>

  <script>
    let html = '';

    // for loop — multiplication table
    html += '<h3>Multiplication Table (for loop):</h3>';
    html += '<p>';
    for (let i = 1; i <= 10; i++) {
      html += \`5 × \${i} = \${5 * i}<br>\`;
    }
    html += '</p>';

    // for...of — iterate array
    const fruits = ["🍎 Apple", "🍌 Banana", "🥭 Mango", "🍇 Grape"];
    html += '<h3>Fruit List (for...of):</h3><ul>';
    for (const fruit of fruits) {
      html += \`<li>\${fruit}</li>\`;
    }
    html += '</ul>';

    // for...in — iterate object
    const student = { name: "Ravi", age: 20, course: "BCA" };
    html += '<h3>Student Info (for...in):</h3>';
    for (const key in student) {
      html += \`<p><strong>\${key}:</strong> \${student[key]}</p>\`;
    }

    document.getElementById('output').innerHTML = html;
  </script>
</body>
</html>`,
    expectedOutput: 'A multiplication table, a fruit list, and student info — each generated with different loop types.',
    notes: [
      'for is best when you know how many times to iterate.',
      'while is best for condition-based iteration.',
      'for...of iterates values of arrays, strings, maps.',
      'for...in iterates keys/indices of objects (avoid on arrays).',
    ],
    commonMistakes: [
      'Creating infinite loops — forgetting to update the counter.',
      'Using for...in on arrays — it iterates indices as strings.',
      'Off-by-one errors — starting at 0 vs 1, using < vs <=.',
      'Modifying the array while iterating with for...of.',
    ],
    practicePrompt: 'Create a multiplication table for any number using a for loop.',
    interviewQuestions: [
      'What are the different types of loops in JavaScript?',
      'What is the difference between for...of and for...in?',
      'When would you use while vs for?',
    ],
    miniTask: 'Generate a numbered list of 1-20 and highlight even numbers using a loop.',
  },
  {
    id: 10,
    title: 'Functions',
    category: 'Functions',
    explanation:
      'Functions are reusable blocks of code. Function declaration uses the function keyword. Function expression assigns a function to a variable. Arrow functions (=>) are a concise modern syntax. Functions can accept parameters (inputs) and return values (outputs). Callback functions are functions passed as arguments to other functions.',
    analogy:
      'A function is like a coffee machine. You put in inputs (coffee beans, water = parameters), press the button (call the function), and get output (coffee = return value). You can use the same machine many times with different inputs.',
    thanglishAnalogy:
      'Coffee machine madhiri function. Coffee beans + water = parameters (input). Button press = function call. Coffee = return value (output). Oru machine set pannittaa, daily use pannalam — adhe madhiri function oru thadava ezhuthittaa, evalo thadava venum-na-lum call pannalam. Arrow function => modern short syntax — same coffee, different machine design.',
    analogyConnection: 'Coffee machine = Function | Beans + water = Parameters | Button = Function call | Coffee = Return value',
    syntax:
`// Function Declaration
function greet(name) {
  return "Hello, " + name;
}

// Function Expression
const greet = function(name) {
  return "Hello, " + name;
};

// Arrow Function
const greet = (name) => "Hello, " + name;

// Callback Function
function process(callback) {
  callback();
}`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Functions</title>
</head>
<body>
  <h1>JavaScript Functions</h1>
  <div id="output"></div>

  <script>
    // Function Declaration
    function add(a, b) {
      return a + b;
    }

    // Arrow Function
    const multiply = (a, b) => a * b;

    // Function with default parameter
    const greet = (name = "Student") => \`Welcome, \${name}! 👋\`;

    // Callback function
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(num => num * 2);

    // Higher-order function
    function calculate(a, b, operation) {
      return operation(a, b);
    }

    const result = calculate(10, 5, (a, b) => a - b);

    document.getElementById('output').innerHTML = \`
      <p>add(5, 3) = \${add(5, 3)}</p>
      <p>multiply(4, 7) = \${multiply(4, 7)}</p>
      <p>greet() = \${greet()}</p>
      <p>greet("Ravi") = \${greet("Ravi")}</p>
      <p>doubled = [\${doubled}]</p>
      <p>calculate(10, 5, subtract) = \${result}</p>
    \`;
  </script>
</body>
</html>`,
    expectedOutput: 'Results of different function types: add, multiply, greet, array doubling, and higher-order function.',
    notes: [
      'Function declarations are hoisted — can be called before they\'re defined.',
      'Arrow functions don\'t have their own "this" — important for callbacks.',
      'Default parameters provide fallback values.',
      'Callbacks and higher-order functions are fundamental to JavaScript.',
    ],
    commonMistakes: [
      'Forgetting to use return — function returns undefined by default.',
      'Confusing function declaration with function expression hoisting.',
      'Not understanding that arrow functions have no "this" binding.',
      'Creating functions that do too many things — keep them focused.',
    ],
    practicePrompt: 'Create three functions: one with declaration, one arrow, and one using callbacks.',
    interviewQuestions: [
      'What are the different ways to define functions in JavaScript?',
      'What is an arrow function and how is it different?',
      'What is a callback function?',
    ],
    miniTask: 'Build a mini calculator with functions for add, subtract, multiply, divide.',
  },
  {
    id: 11,
    title: 'Array Methods: map, filter, reduce, forEach',
    category: 'Arrays',
    explanation:
      'Array methods process arrays without manual loops. map() transforms each element and returns a new array. filter() returns elements that pass a test. reduce() accumulates values into a single result. forEach() runs a function on each element (no return). These are essential functional programming tools in JavaScript.',
    analogy:
      'Array methods are like assembly line workers. map = transformer (changes each item). filter = quality inspector (keeps only good items). reduce = packer (combines all items into one package). forEach = counter (counts/processes each item).',
    thanglishAnalogy:
      'Factory assembly line madhiri array methods. map = transformer worker — each item-a maatthuvaar (transform). filter = quality checker — nalla items mattum keep pannuvaar. reduce = packer — ella items-a combine panni oru package aakkuvaar. forEach = counter — oru oru item-a process pannuvaar, aanaa nothing return pannaadhu. Loop ezhudha vendaam — idhe methods use pannunga.',
    analogyConnection: 'Transformer = map | Quality checker = filter | Packer = reduce | Counter = forEach',
    syntax:
`// map — transform each element
const doubled = [1,2,3].map(n => n * 2);    // [2,4,6]

// filter — keep elements that pass test
const adults = people.filter(p => p.age >= 18);

// reduce — combine into single value
const sum = [1,2,3].reduce((acc, n) => acc + n, 0);  // 6

// forEach — run function on each (no return)
[1,2,3].forEach(n => console.log(n));`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Array Methods</title>
</head>
<body>
  <h1>Array Methods</h1>
  <div id="output"></div>

  <script>
    const students = [
      { name: "Ravi", marks: 85 },
      { name: "Priya", marks: 92 },
      { name: "Kumar", marks: 45 },
      { name: "Divya", marks: 78 },
      { name: "Arun", marks: 55 },
    ];

    // map — get all names
    const names = students.map(s => s.name);

    // filter — students who passed (>= 60)
    const passed = students.filter(s => s.marks >= 60);

    // reduce — average marks
    const totalMarks = students.reduce((sum, s) => sum + s.marks, 0);
    const average = totalMarks / students.length;

    // Chaining methods
    const topStudentNames = students
      .filter(s => s.marks >= 80)
      .map(s => s.name + " ⭐");

    document.getElementById('output').innerHTML = \`
      <h3>All Names (map):</h3>
      <p>\${names.join(", ")}</p>
      <h3>Passed Students (filter, marks >= 60):</h3>
      <ul>\${passed.map(s => '<li>' + s.name + ': ' + s.marks + '</li>').join('')}</ul>
      <h3>Average Marks (reduce):</h3>
      <p>\${average.toFixed(1)}</p>
      <h3>Top Students (filter + map chain):</h3>
      <p>\${topStudentNames.join(", ")}</p>
    \`;
  </script>
</body>
</html>`,
    expectedOutput: 'Lists of all names, passed students, average marks, and top students — using different array methods.',
    notes: [
      'map, filter, reduce return NEW arrays — they don\'t modify the original.',
      'forEach does NOT return a new array.',
      'Methods can be chained: array.filter().map().sort().',
      'reduce is the most powerful — it can do what map and filter do.',
    ],
    commonMistakes: [
      'Expecting forEach to return a new array — use map instead.',
      'Forgetting the initial value in reduce — can cause errors.',
      'Modifying the original array inside map/filter — always return new values.',
      'Not understanding that these methods create new arrays.',
    ],
    practicePrompt: 'Use map to transform, filter to select, and reduce to calculate on an array of objects.',
    interviewQuestions: [
      'What is the difference between map and forEach?',
      'How does reduce work?',
      'Can you chain array methods?',
    ],
    miniTask: 'Filter a product list by price, map to display names, and reduce to get total price.',
  },
  {
    id: 12,
    title: 'DOM Manipulation',
    category: 'DOM Manipulation',
    explanation:
      'The DOM (Document Object Model) is a tree representation of the HTML document that JavaScript can manipulate. You can select elements (getElementById, querySelector), change content (textContent, innerHTML), modify styles (element.style), create/remove elements (createElement, remove), and add event listeners. DOM manipulation is how JavaScript makes pages interactive.',
    analogy:
      'The DOM is like a puppet theater. HTML creates the puppets (elements), CSS dresses them (styles), and JavaScript is the puppeteer who moves them, changes their appearance, and makes them respond to the audience (events).',
    thanglishAnalogy:
      'Puppet theater madhiri DOM. HTML puppets create pannum, CSS dress pannum, JavaScript puppeteer — puppets-a move pannum, dress maathum, audience actions-ku respond pannum. document.querySelector() use panni puppet-a select pannu, .textContent use panni dialogue maathhu, .style use panni dress maathhu, .addEventListener() use panni audience reactions-ku respond pannu.',
    analogyConnection: 'Puppets = DOM elements | Puppeteer = JavaScript | Moving puppets = DOM manipulation | Audience = User events',
    syntax:
`// Select elements
document.getElementById("id");
document.querySelector(".class");
document.querySelectorAll("p");

// Change content
element.textContent = "New text";
element.innerHTML = "<strong>Bold</strong>";

// Change styles
element.style.color = "red";
element.classList.add("active");
element.classList.toggle("visible");

// Create/Remove elements
const div = document.createElement("div");
parent.appendChild(div);
element.remove();

// Events
element.addEventListener("click", function() { });`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Manipulation</title>
  <style>
    .card { background: #f1f5f9; padding: 16px; margin: 8px 0; border-radius: 8px;
            border: 1px solid #e2e8f0; }
    .highlight { background: #eef2ff; border-color: #6366f1; }
    .btn { padding: 8px 16px; margin: 4px; border: none; border-radius: 6px;
           cursor: pointer; font-size: 14px; }
    .btn-primary { background: #6366f1; color: white; }
    .btn-danger { background: #ef4444; color: white; }
    .btn-success { background: #10b981; color: white; }
  </style>
</head>
<body>
  <h1 id="title">DOM Manipulation Demo</h1>
  <div id="container">
    <div class="card" id="myCard">
      <p id="cardText">This is a card. Click the buttons below!</p>
    </div>
  </div>
  <button class="btn btn-primary" onclick="changeText()">Change Text</button>
  <button class="btn btn-success" onclick="toggleHighlight()">Toggle Style</button>
  <button class="btn btn-primary" onclick="addCard()">Add Card</button>
  <button class="btn btn-danger" onclick="removeLastCard()">Remove Last</button>

  <script>
    function changeText() {
      document.getElementById('cardText').textContent = 'Text changed by JavaScript! 🎉';
    }

    function toggleHighlight() {
      document.getElementById('myCard').classList.toggle('highlight');
    }

    let cardCount = 1;
    function addCard() {
      cardCount++;
      const card = document.createElement('div');
      card.className = 'card';
      card.textContent = 'New Card #' + cardCount + ' — created dynamically!';
      document.getElementById('container').appendChild(card);
    }

    function removeLastCard() {
      const cards = document.querySelectorAll('#container .card');
      if (cards.length > 1) {
        cards[cards.length - 1].remove();
        cardCount--;
      }
    }
  </script>
</body>
</html>`,
    expectedOutput: 'Interactive demo with buttons to change text, toggle styles, add cards, and remove cards dynamically.',
    notes: [
      'querySelector uses CSS selectors — very powerful.',
      'textContent is safer than innerHTML (no HTML injection).',
      'classList.add/remove/toggle is better than direct style manipulation.',
      'Always add event listeners instead of inline onclick when possible.',
    ],
    commonMistakes: [
      'Trying to access DOM before it loads — put script before </body> or use DOMContentLoaded.',
      'Using innerHTML with user input — XSS security risk.',
      'Confusing querySelector (first match) with querySelectorAll (all matches).',
      'Not understanding that querySelectorAll returns a NodeList, not an Array.',
    ],
    practicePrompt: 'Create a to-do list where you can add, complete, and remove items using DOM manipulation.',
    interviewQuestions: [
      'What is the DOM?',
      'What is the difference between textContent and innerHTML?',
      'How do you create and append elements?',
    ],
    miniTask: 'Build a simple to-do list with add and delete functionality using DOM methods.',
  },
  {
    id: 13,
    title: 'Events',
    category: 'DOM Manipulation',
    explanation:
      'Events are actions that happen in the browser — user clicks, types, moves mouse, submits a form, page loads, etc. JavaScript "listens" for events using addEventListener() and executes code when they occur. The event object contains information about what happened (e.g., which key was pressed, mouse position). Common events: click, input, submit, mouseover, keydown, load.',
    analogy:
      'Events are like a doorbell. When someone rings it (user action), you respond (event handler). addEventListener is like installing the doorbell, and the callback function is what you do when it rings.',
    thanglishAnalogy:
      'Doorbell madhiri events. Visitor bell press pannuvaar (user click), neenga door open pannuveenga (event handler). addEventListener = doorbell install pannura madhiri. Callback function = bell adichia enna pannanum nu decide pannura madhiri. Click, type, mouse move, form submit — ella user actions-kum events irukku.',
    analogyConnection: 'Doorbell = Event listener | Visitor pressing bell = User action | Opening door = Event handler | What you do = Callback function',
    syntax:
`// addEventListener (recommended)
element.addEventListener('click', function(event) {
  // handle click
});

// Common events
'click'      — mouse click
'input'      — input value changes
'submit'     — form submitted
'keydown'    — key pressed
'mouseover'  — mouse enters element
'mouseout'   — mouse leaves element
'change'     — select/checkbox changes
'load'       — page/image loaded

// Event object
element.addEventListener('click', (e) => {
  e.target;           // The clicked element
  e.preventDefault(); // Stop default behavior
});`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Events</title>
  <style>
    .box { width: 200px; height: 200px; background: #6366f1; color: white;
           display: flex; align-items: center; justify-content: center;
           border-radius: 12px; margin: 16px 0; font-weight: bold; cursor: pointer;
           transition: all 0.3s; font-size: 14px; text-align: center; }
    .box:hover { transform: scale(1.05); }
    input, button { padding: 10px; font-size: 16px; margin: 4px; border-radius: 6px; border: 1px solid #ccc; }
    button { background: #6366f1; color: white; border: none; cursor: pointer; }
    #log { background: #f1f5f9; padding: 12px; border-radius: 8px; min-height: 60px; font-size: 14px; }
  </style>
</head>
<body>
  <h1>JavaScript Events</h1>

  <div class="box" id="colorBox">Click me!<br>Double-click to reset</div>

  <input type="text" id="nameInput" placeholder="Type your name...">
  <p>Hello, <span id="nameDisplay">___</span>!</p>

  <h3>Event Log:</h3>
  <div id="log"></div>

  <script>
    const box = document.getElementById('colorBox');
    const log = document.getElementById('log');

    function addLog(msg) {
      log.innerHTML = msg + '<br>' + log.innerHTML;
    }

    // Click event
    box.addEventListener('click', () => {
      const colors = ['#e11d48', '#10b981', '#f59e0b', '#8b5cf6', '#6366f1'];
      box.style.background = colors[Math.floor(Math.random() * colors.length)];
      addLog('🖱️ Box clicked — color changed!');
    });

    // Double-click event
    box.addEventListener('dblclick', () => {
      box.style.background = '#6366f1';
      addLog('🖱️🖱️ Box double-clicked — color reset!');
    });

    // Input event (real-time typing)
    document.getElementById('nameInput').addEventListener('input', (e) => {
      document.getElementById('nameDisplay').textContent = e.target.value || '___';
      addLog('⌨️ Typing: ' + e.target.value);
    });

    // Mouseover
    box.addEventListener('mouseover', () => addLog('🐭 Mouse entered box'));
    box.addEventListener('mouseout', () => addLog('🐭 Mouse left box'));
  </script>
</body>
</html>`,
    expectedOutput: 'A color-changing clickable box, real-time name input display, and an event log showing all interactions.',
    notes: [
      'addEventListener is the modern, recommended way to handle events.',
      'The event object (e) contains useful info: e.target, e.key, e.preventDefault().',
      'e.preventDefault() stops default behavior (like form submission reload).',
      'Events bubble up the DOM tree — e.stopPropagation() stops this.',
    ],
    commonMistakes: [
      'Using onclick attribute instead of addEventListener.',
      'Forgetting e.preventDefault() on form submit — page reloads.',
      'Not understanding event bubbling and capturing.',
      'Adding event listeners inside loops without proper scoping.',
    ],
    practicePrompt: 'Create a form with real-time validation using input events.',
    interviewQuestions: [
      'What is event bubbling?',
      'What is the difference between onclick and addEventListener?',
      'What does e.preventDefault() do?',
    ],
    miniTask: 'Create a keyboard event listener that displays which key is pressed in real-time.',
  },
  {
    id: 14,
    title: 'ES6+ Features',
    category: 'Advanced JavaScript',
    explanation:
      'ES6 (ECMAScript 2015) introduced major improvements: template literals (backtick strings with ${} expressions), destructuring (extracting values from objects/arrays), spread/rest operators (...), default parameters, modules (import/export), enhanced object literals, and more. These features make JavaScript code cleaner, shorter, and more readable.',
    analogy:
      'ES6 is like upgrading from a basic phone to a smartphone. The phone still makes calls (same language), but now it has touchscreen, apps, camera, GPS — doing the same things much more efficiently and with new capabilities.',
    thanglishAnalogy:
      'Basic phone to smartphone upgrade madhiri ES6. Same language, aanaa templates (backticks), destructuring, spread operator ellaam advanced features. Template literal: "Hello " + name aaga, `Hello ${name}` nu short-a ezhuthalam. Destructuring: object-la irundhum values-a directly extract pannalam. Code short-a, clean-a, readable-a irukum.',
    analogyConnection: 'Basic phone = Old JS | Smartphone = ES6+ | Same calls = Same language | New features = New syntax',
    syntax:
`// Template Literals
const msg = \`Hello, \${name}! You are \${age} years old.\`;

// Destructuring
const { name, age } = student;
const [first, second] = array;

// Spread Operator
const newArr = [...oldArr, newItem];
const newObj = { ...oldObj, newProp: value };

// Rest Operator
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// Default Parameters
function greet(name = "Guest") { }`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ES6+ Features</title>
</head>
<body>
  <h1>ES6+ Features</h1>
  <div id="output"></div>

  <script>
    // Template Literals
    const name = "Ravi";
    const greeting = \`Welcome to StackLearner, \${name}! 🎓\`;

    // Destructuring Object
    const student = { sName: "Priya", age: 20, course: "BCA" };
    const { sName, age, course } = student;

    // Destructuring Array
    const colors = ["Red", "Green", "Blue"];
    const [primary, secondary] = colors;

    // Spread Operator
    const skills = ["HTML", "CSS"];
    const allSkills = [...skills, "JavaScript", "React"];

    // Rest Operator
    const sum = (...nums) => nums.reduce((a, b) => a + b, 0);

    // Default Parameters
    const greet = (person = "Guest") => \`Hello, \${person}!\`;

    document.getElementById('output').innerHTML = \`
      <p><strong>Template Literal:</strong> \${greeting}</p>
      <p><strong>Destructured:</strong> \${sName}, Age: \${age}, Course: \${course}</p>
      <p><strong>Array Destructure:</strong> Primary: \${primary}, Secondary: \${secondary}</p>
      <p><strong>Spread:</strong> [\${allSkills.join(", ")}]</p>
      <p><strong>Rest Sum:</strong> sum(1,2,3,4,5) = \${sum(1,2,3,4,5)}</p>
      <p><strong>Default:</strong> \${greet()} | \${greet("Ravi")}</p>
    \`;
  </script>
</body>
</html>`,
    expectedOutput: 'Results showing template literals, destructuring, spread/rest operators, and default parameters.',
    notes: [
      'Template literals use backticks (`) not regular quotes.',
      'Destructuring creates variables from object properties or array elements.',
      'Spread (...) copies/merges arrays and objects.',
      'Rest (...) collects remaining arguments into an array.',
    ],
    commonMistakes: [
      'Using regular quotes instead of backticks for template literals.',
      'Confusing spread (expands) with rest (collects) — same syntax, different usage.',
      'Destructuring with wrong variable names — must match object keys.',
      'Forgetting that spread creates shallow copies, not deep copies.',
    ],
    practicePrompt: 'Rewrite old-style JavaScript code using ES6+ features: template literals, destructuring, spread/rest.',
    interviewQuestions: [
      'What are template literals?',
      'What is destructuring in JavaScript?',
      'What is the difference between spread and rest operators?',
    ],
    miniTask: 'Create a profile card using destructuring from an object and template literals for the HTML.',
  },
  {
    id: 15,
    title: 'Error Handling and Local Storage',
    category: 'Advanced JavaScript',
    explanation:
      'Error handling with try/catch prevents your application from crashing when errors occur. try contains code that might fail, catch handles the error, finally runs regardless. localStorage stores data in the browser permanently (survives page reloads). It uses key-value pairs with setItem(), getItem(), removeItem().',
    analogy:
      'try/catch is like a safety net in a circus. The performer (code) tries dangerous tricks (try), and if they fall (error), the net catches them (catch) safely. localStorage is like a locker at a train station — you store items (data) and retrieve them later, even after you leave (page reload).',
    thanglishAnalogy:
      'Circus safety net madhiri try/catch. Performer trick try pannuvaar (try block), fall aana net catch pannum (catch block) — show stop aagaadhu. localStorage = train station locker — data store pannu, browser close pannaalum data irukum. User preferences, form data, game scores — ellaam localStorage-la save pannalam.',
    analogyConnection: 'Safety net = catch block | Performer = Code in try | Locker = localStorage | Store/retrieve = setItem/getItem',
    syntax:
`// Try-Catch
try {
  // Code that might throw an error
  const data = JSON.parse(badString);
} catch (error) {
  console.error("Error:", error.message);
} finally {
  // Always runs
}

// localStorage
localStorage.setItem("name", "Ravi");
const name = localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();  // Remove all`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Error Handling & LocalStorage</title>
  <style>
    input, button { padding: 10px; font-size: 14px; margin: 4px; border-radius: 6px; border: 1px solid #ccc; }
    button { background: #6366f1; color: white; border: none; cursor: pointer; }
    .error { color: #ef4444; background: #fee2e2; padding: 10px; border-radius: 8px; }
    .success { color: #10b981; background: #dcfce7; padding: 10px; border-radius: 8px; }
  </style>
</head>
<body>
  <h1>Error Handling & LocalStorage</h1>

  <h3>Try-Catch Demo:</h3>
  <div id="errorDemo"></div>

  <h3>LocalStorage Demo:</h3>
  <input type="text" id="nameInput" placeholder="Enter your name">
  <button onclick="saveName()">Save</button>
  <button onclick="loadName()">Load</button>
  <button onclick="clearName()">Clear</button>
  <p id="storageResult"></p>

  <script>
    // Try-Catch Demo
    const errorDiv = document.getElementById('errorDemo');
    try {
      const badJSON = '{ invalid json }';
      JSON.parse(badJSON);
    } catch (error) {
      errorDiv.innerHTML = \`<div class="error">⚠️ Caught error: \${error.message}</div>\`;
    }

    // Valid JSON
    try {
      const goodJSON = '{"name": "Ravi", "age": 20}';
      const data = JSON.parse(goodJSON);
      errorDiv.innerHTML += \`<div class="success" style="margin-top:8px">✅ Parsed: \${data.name}, Age: \${data.age}</div>\`;
    } catch (error) {
      errorDiv.innerHTML += '<div class="error">Error: ' + error.message + '</div>';
    }

    // LocalStorage Functions
    function saveName() {
      const name = document.getElementById('nameInput').value;
      if (name) {
        localStorage.setItem('stacklearner_name', name);
        document.getElementById('storageResult').textContent = '✅ Saved: ' + name;
      }
    }

    function loadName() {
      const name = localStorage.getItem('stacklearner_name');
      document.getElementById('storageResult').textContent = name
        ? '📦 Loaded: ' + name
        : '❌ No name saved yet!';
    }

    function clearName() {
      localStorage.removeItem('stacklearner_name');
      document.getElementById('storageResult').textContent = '🗑️ Name cleared!';
    }

    // Auto-load on page open
    loadName();
  </script>
</body>
</html>`,
    expectedOutput: 'Error handling demo showing caught/successful JSON parsing, and a name saver using localStorage.',
    notes: [
      'Always wrap risky operations (JSON.parse, API calls, DOM access) in try/catch.',
      'localStorage stores strings only — use JSON.stringify/parse for objects.',
      'localStorage persists until explicitly cleared — survives page refreshes.',
      'localStorage has a ~5MB limit per domain.',
    ],
    commonMistakes: [
      'Forgetting to JSON.stringify objects before storing in localStorage.',
      'Not wrapping JSON.parse in try/catch — invalid JSON crashes the app.',
      'Storing sensitive data in localStorage — it\'s not encrypted.',
      'Using try/catch for normal control flow — it\'s for exceptional errors only.',
    ],
    practicePrompt: 'Build a notes app that saves notes to localStorage and loads them on page refresh.',
    interviewQuestions: [
      'What is try-catch and when should you use it?',
      'What is localStorage and how does it differ from sessionStorage?',
      'What is the storage limit of localStorage?',
    ],
    miniTask: 'Create a theme preference saver that remembers the user\'s chosen theme using localStorage.',
  },
  {
    id: 16,
    title: 'Async JavaScript: Promises, Async/Await, Fetch API',
    category: 'Advanced JavaScript',
    explanation:
      'Asynchronous JavaScript handles operations that take time (API calls, file loading) without blocking the main thread. Promises represent future values — they resolve (success) or reject (failure). async/await is syntactic sugar over Promises, making async code look synchronous. The Fetch API makes HTTP requests to servers and APIs.',
    analogy:
      'Async is like ordering food online. You place the order (start async operation), get a tracking ID (Promise), and continue your work. When the food arrives (resolves), you eat it. If delivery fails (rejects), you get a refund (error handling). You don\'t stand at the door waiting (blocking).',
    thanglishAnalogy:
      'Online food order madhiri async JavaScript. Order place pannu (fetch call), tracking ID varum (Promise). Neenga veetu velai pannunga (non-blocking) — food vandha notification varum (resolve). Delivery fail aana refund varum (reject/catch). await use pannuna "food varum varai wait pannu, aanaa browser freeze aagaadhu" nu solra madhiri.',
    analogyConnection: 'Food order = API call | Tracking ID = Promise | Delivery = resolve | Failed delivery = reject | await = Wait without freezing',
    syntax:
`// Promise
const promise = new Promise((resolve, reject) => {
  // async operation
  resolve(data);   // success
  reject(error);   // failure
});

promise.then(data => { }).catch(err => { });

// Async/Await
async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Fetch API
fetch('https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));`,
    codeExample:
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Async JavaScript</title>
  <style>
    button { padding: 12px 24px; font-size: 16px; background: #6366f1;
             color: white; border: none; border-radius: 8px; cursor: pointer; margin: 8px; }
    .loading { color: #f59e0b; }
    .result { background: #f1f5f9; padding: 16px; border-radius: 10px; margin: 12px 0; }
    pre { white-space: pre-wrap; font-size: 13px; }
  </style>
</head>
<body>
  <h1>Async JavaScript</h1>

  <button onclick="fetchUser()">Fetch Random User</button>
  <button onclick="fetchJoke()">Fetch Random Joke</button>
  <div id="output"><p>Click a button to fetch data from an API! 🌐</p></div>

  <script>
    const output = document.getElementById('output');

    // Using async/await
    async function fetchUser() {
      output.innerHTML = '<p class="loading">⏳ Loading user...</p>';
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json();
        output.innerHTML = \`
          <div class="result">
            <h3>👤 \${user.name}</h3>
            <p>📧 \${user.email}</p>
            <p>🏢 \${user.company.name}</p>
            <p>🌐 \${user.website}</p>
          </div>
        \`;
      } catch (error) {
        output.innerHTML = '<p style="color:red">❌ Error: ' + error.message + '</p>';
      }
    }

    // Using Promise .then()
    function fetchJoke() {
      output.innerHTML = '<p class="loading">⏳ Loading joke...</p>';
      fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(joke => {
          output.innerHTML = \`
            <div class="result">
              <h3>😄 Random Joke</h3>
              <p><strong>\${joke.setup}</strong></p>
              <p>\${joke.punchline} 😂</p>
            </div>
          \`;
        })
        .catch(err => {
          output.innerHTML = '<p style="color:red">❌ Error: ' + err.message + '</p>';
        });
    }
  </script>
</body>
</html>`,
    expectedOutput: 'Buttons that fetch and display a random user profile and a random joke from real APIs.',
    notes: [
      'async functions always return a Promise.',
      'await pauses execution until the Promise resolves — but doesn\'t block the browser.',
      'Always use try/catch with async/await for error handling.',
      'fetch() returns a Response object — call .json() to get the data.',
    ],
    commonMistakes: [
      'Forgetting await — getting a Promise object instead of the data.',
      'Not handling errors — use try/catch or .catch().',
      'Forgetting that fetch doesn\'t reject on HTTP errors (404, 500) — check response.ok.',
      'Using async/await at the top level without wrapping in an async function.',
    ],
    practicePrompt: 'Fetch data from a public API and display it on the page using async/await.',
    interviewQuestions: [
      'What is a Promise?',
      'What is the difference between .then() and async/await?',
      'What does the Fetch API do?',
    ],
    miniTask: 'Build a weather app that fetches and displays weather data from a public API.',
  },
];

export default jsModules;
