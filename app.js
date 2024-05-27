const htmlQuiz = [
  {
    question: "Who is making the Web standards?",
    optionA: "GOOGLE",
    optionB: "MICROSOFT",
    optionC: "MOZILLA",
    optionD: "WORLD WIDE WEB",
    correctAnswer: "WORLD WIDE WEB",
  },

  {
    question: "Who is the founder of JavaScript?",
    optionA: "Abdul Bari",
    optionB: "Abdul Haseeb",
    optionC: "Dr Shafique",
    optionD: "Brenden Eich",
    correctAnswer: "Brenden Eich",
  },

  {
    question: "JavaScript is a ___ language?",
    optionA: "Object Oriented",
    optionB: "Object Based",
    optionC: "Procedural",
    optionD: "None of the above",
    correctAnswer: "Object Oriented",
  },

  {
    question: "How to write a comment in JavaScript",
    optionA: "/* */",
    optionB: "//",
    optionC: "#",
    optionD: "$$",
    correctAnswer: "//",
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    optionA: "The &lt;head&gt; section",
    optionB: "The &lt;body&gt; section",
    optionC: "Both head and body",
    optionD: "None of the above",
    correctAnswer: "Both head and body",
  },

  {
    question:
      'What is the correct syntax for referring to an external script called "app.js?"',
    optionA: '&lt;script name="app.js&gt;',
    optionB: '&lt;script src="app.js"&gt;',
    optionC: '&lt;script href="app.js"&gt;',
    optionD: '&lt;link href="xxx.js"&gt;',
    correctAnswer: '&lt;script src="app.js"&gt;',
  },

  {
    question: 'How do you write "Hello World" in an alert box?',
    optionA: 'msg("Hello World")',
    optionB: 'alertBox("Hello World")',
    optionC: 'alert("Hello World")',
    optionD: 'msgBox("Hello World")',
    correctAnswer: 'alert("Hello World")',
  },

  {
    question: "How do you create a function in JavaScript?",
    optionA: "function:myFuction()",
    optionB: "function myFunction()",
    optionC: "function = myFunction()",
    optionD: "myFunctiom function()",
    correctAnswer: "function myFunction()",
  },

  {
    question: 'How do you call a function named "myFunction"?',
    optionA: "call function myFunction()",
    optionB: "call myFunction()",
    optionC: "myFunction()",
    optionD: "function myFunction()",
    correctAnswer: "myFunction()",
  },

  {
    question: "How to write an IF statement in JavaScript?",
    optionA: "if i == 5 then",
    optionB: "if i = 5 then",
    optionC: "if (i == 5)",
    optionD: "if i = 5",
    correctAnswer: "if (i == 5)",
  },
];

const themeToggle = document.getElementById("themeToggle");
const body = document.body;

const myFunction = () => {
  if (themeToggle.checked) {
    body.setAttribute("data-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
  }
};

// * Variables -------

let questionCount = 0;
let score = 0;

// ! Elements --------

const quizWindow = document.getElementById("quizWindow");
const quizMainWindow = document.getElementById("quizQuestion");

const question = document.getElementById("question");

const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const label1 = document.getElementById("val1");
const label2 = document.getElementById("val2");
const label3 = document.getElementById("val3");
const label4 = document.getElementById("val4");

const allOptions = document.getElementsByClassName("allOptions");

const resultSection = document.getElementById("resultSection");

// ^ Functions -------

// Function to render the MCQs

const renderQuestion = () => {
  let mcqCount = document.getElementById("mcqCount");
  mcqCount.innerHTML = `${questionCount + 1}) `;

  question.innerHTML = htmlQuiz[questionCount].question;

  option1.value = htmlQuiz[questionCount].optionA;
  option2.value = htmlQuiz[questionCount].optionB;
  option3.value = htmlQuiz[questionCount].optionC;
  option4.value = htmlQuiz[questionCount].optionD;

  label1.innerHTML = htmlQuiz[questionCount].optionA;
  label2.innerHTML = htmlQuiz[questionCount].optionB;
  label3.innerHTML = htmlQuiz[questionCount].optionC;
  label4.innerHTML = htmlQuiz[questionCount].optionD;
};

renderQuestion();

// Function to 'de-select' all option on next MCQ

const deSelect = () => {
  for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].checked = false;
  }
};

// Next button event

function next() {
  let checkedAns = false;
  for (var i = 0; i < allOptions.length; i++) {
    if (allOptions[i].checked) {
      checkedAns = true;
      if (allOptions[i].value === htmlQuiz[questionCount].correctAnswer) {
        score++;
      }
    }
  }

  // The below code does the following:
  // 1) Checks whether a choice is made or not. Shows the prompt if nothing selected
  // 2) Increments the questionCount to check if there are MCQs remaining
  // 3) If question are remaining the renders a new MCQ
  // 4) If there are no MCQs remaining then show the result.

  if (!checkedAns) {
    alert("Please Make a selection!");
  } else {
    if (questionCount < htmlQuiz.length - 1) {
      questionCount++;
      deSelect();
      renderQuestion();
    } else {
      resultSection.style.display = "flex";
      resultSection.style.alignItems = "center";
      resultSection.style.justifyContent = "center";
      quizQuestion.style.display = "none";
      showResult();
    }
  }
}

const noOfQuestions = document.getElementById("numberOfQuestion");
const correctQuestion = document.getElementById("correctQuest");
const message = document.getElementById("message");
var first50Bar = document.getElementById('first50-bar');
var resultPercentage = document.getElementById('resultPercentage');
var valueBar = document.getElementById('valueBar');
let progressBar = document.getElementById('progressBar');

// Display result function
function showResult() {
  noOfQuestions.innerText = htmlQuiz.length;
  correctQuestion.innerHTML = score;
  let totalMCQs = 10;
  let result = score/(totalMCQs) * 100; 

  if (result < 69) {
    resultPercentage.innerText = `${result}%`;
    first50Bar.style.backgroundColor = "red";
    valueBar.style.border ="0.45em solid red";
  }
  else {
    resultPercentage.innerText = `${result}%`;
    first50Bar.style.backgroundColor = "green";
    valueBar.style.border ="0.45em solid green";
  } 
}


const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const courseSection = document.getElementById("courseSection");
const loginName = document.getElementById("loginName");
const loginPass = document.getElementById("loginPassword");
const version = document.getElementById("version");
const clientName = document.getElementById("clientName");

courseSection.style.display = "none";
clientName.style.display = "none";

// Function to display registration form
const loginUI = document.querySelector(".login-wrapper");
const registerUI = document.querySelector(".register-wrapper");

const registerImg = document.querySelector(".registerImg"),
  registerNameInputField = document.querySelector(".registerNameInput"),
  emailInputField = document.querySelector(".registerEmailInput"),
  passwordInputField = document.querySelector(".registerPasswordInput"),
  successRegisterContainer = document.querySelector(
    ".successRegisterContainer"
  );

const openRegistrationForm = () => {
  // Empty the registration fields
  registerNameInputField.value = "";
  emailInputField.value = "";
  passwordInputField.value = "";

  // Hide the login page and show the reg page
  loginUI.style.display = "none";
  registerUI.style.display = "flex";
};

// Function to display Login form

const openLoginForm = () => {
  loginEmailInput.value = "";
  loginPasswordInput.value = "";

  loginUI.style.display = "flex";
  registerUI.style.display = "none";
};

function openDashboard() {
  mainPage.style.display = "none";
  loginPage.style.display = "flex";
}

// **** Register in localStorage ****

// Function to avoid empty fields

const isEmpty = (str) => {
  return !str || !str.trim().length;
};

// Function to avoid numbers in name

const noNumbersInName = (str) => {
  for (let i = 0; i < registerNameInputField.value.length; i++) {
    if (str[i].trim() >= "0" && str[i].trim() <= "9") {
      return true;
    }
  }
  return false;
};

// Function to prevent name input <=2

const nameInputSize = (str) => {
  if (str.length <= 2) {
    return true;
  }
  return false;
};

// Function to avoid the first character of an email to be number

const emailFirstCharacter = (str) => {
  if (str[0] >= "0" && str[0] <= "9") {
    return true;
  }
  return false;
};

// Function to check password length

const passwordLength = (str) => {
  if (str.length <= 5) {
    return true;
  }
  return false;
};

let storage, arr, registeredUsers;

// Function to check if the user is already registered
const alreadyRegistered = () => {
  storage = localStorage.getItem("Registered Users");
  arr = JSON.parse(storage);
  if (!arr || arr.length === 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i] &&
        registerNameInputField.value.toLowerCase() === arr[i].register_name) ||
      emailInputField.value.toLowerCase() === arr[i].register_email
    ) {
      return true;
    }
  }
  return false;
};

const register = () => {
  if (noNumbersInName(registerNameInputField.value)) {
    alert("Name shouldn't contain numbers!");
  } else if (emailFirstCharacter(emailInputField.value)) {
    alert("Email can't start with a number!");
  } else if (
    isEmpty(registerNameInputField.value) &&
    isEmpty(emailInputField.value) &&
    isEmpty(passwordInputField.value)
  ) {
    alert("Please fill the fields!");
  } else if (isEmpty(registerNameInputField.value)) {
    alert("Name can't be empty!");
  } else if (nameInputSize(registerNameInputField.value)) {
    alert("Name should contain more than 2 characters!");
  } else if (isEmpty(emailInputField.value)) {
    alert("Email can't be empty!");
  } else if (isEmpty(passwordInputField.value)) {
    alert("Password can't be empty!");
  } else if (passwordLength(passwordInputField.value)) {
    alert("Password should contain atleast 6 characters!");
  } else if (alreadyRegistered()) {
    alert("The name or email already exists. Go to the Login Page.");
  } else {
    storage = localStorage.getItem("Registered Users");
    arr = JSON.parse(storage) || [];
    registeredUsers = {
      register_name: registerNameInputField.value.toLowerCase(),
      register_email: emailInputField.value.toLowerCase(),
      register_password: passwordInputField.value,
    };

    arr.push(registeredUsers);
    localStorage.setItem("Registered Users", JSON.stringify(arr));

    successRegisterContainer.style.cssText = "display:flex !important";
    registerImg.style.cssText = "height:528px !important";
  }
};

const goToLogin = () => {
  // Empty the registration fields before shwoing login page
  registerNameInputField.value = "";
  emailInputField.value = "";
  passwordInputField.value = "";

  // Hide the successful container div
  successRegisterContainer.style.display = "none";

  // Change the size of registration img to normal
  registerImg.style.cssText = "height:489px !important";

  // Hide the registration page and show login page
  loginUI.style.display = "flex";
  registerUI.style.display = "none";
};

// Login

const loginEmailInput = document.querySelector(".loginEmailInput"),
  loginPasswordInput = document.querySelector(".loginPasswordInput");

const login = () => {
  storage = localStorage.getItem("Registered Users");
  arr = JSON.parse(storage);
  let flag2 = false;

  if (!arr || arr.length === 0) {
    arr = [];
  }
  for (let i = 0; i < arr.length; i++) {
    if (
      loginEmailInput.value.toLowerCase() === arr[i].register_email &&
      loginPasswordInput.value === arr[i].register_password
    ) {
      alert("Login successful!");
      flag2 = true;
      loginPage.style.display = "none";
      version.style.display = "none";
      courseSection.style.display = "block";
    }
  }
  if (!flag2) {
    alert("Incorrect credentials!");
  }
};

let navbar = document.getElementById("mainNavbar");
let footer = document.querySelector("footer");
let timer = document.getElementById("quizTimer");
let quizQuestion = document.getElementById("quizQuestion");
quizQuestion.style.display = "none";

// Show the Quiz section; start the timer
function startQuiz() {
  const startingMinute = 3;
  let time = startingMinute * 60;

  setInterval(function () {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.innerHTML = `${minutes} : ${seconds}`;
    time--;

    if (time < 10) {
      timer.style.color = "red";
    }
    if (time <= 0) {
      timer.innerHTML = "Time is up!";
      quizMainWindow.style.display = "none";
      quizQuestion.style.display = "none";
      resultSection.style.display = "flex";
      resultSection.style.alignItems = "center";
      resultSection.style.justifyContent = "center";
      showResult();
    }
  }, 1000);

  courseSection.style.display = "none";
  navbar.style.display = "none";
  footer.style.display = "none";
  quizQuestion.style.display = "block";
}

// To show current year in footer

let footerYear = document.getElementById("footerYear");

const date = new Date();
let currentYear = date.getFullYear();

footerYear.innerText = currentYear;
