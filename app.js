const htmlQuiz = [
  {
    question: "Who is making the Web standards?    ",
    optionA: "GOOGLE",
    optionB: "MICROSOFT",
    optionC: "MOZILLA",
    optionD: "WORLD WIDE WEB",
    correctAnswer: "WORLD WIDE WEB",
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

// * Variables -------

const questionCount = 0;
const score = 0;

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

const renderQuestion = () => {
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

const deSelect = () => {
  for (let i = 0; i < allOptions.length; i++) {
    allOptions[i].checked = false;
  }
};

function next() {
  var checkedAns = false;
  for (var i = 0; i < allOptions.length; i++) {
    // console.log("Length of allOptions: ", allOptions.length);
    if (allOptions[i].checked) {
      checkedAns = true;
      console.log("The 1st if");

      console.log("Selected Option: ", allOptions[i].value);

      if (allOptions[i].value === htmlQuiz[questionCount].correctAnswer) {
        score++;
      }
    }
  }

  if (!checkedAns) {
    alert("Please Make a selection!");
  } else {
    if (questionCount < htmlQuiz.length - 1) {
      questionCount++;
      deSelect();
      renderQuestion();
      console.log("Score", score);
    } else {
      resultSection.style.display = "flex";
      resultSection.style.alignItems = "center";
      resultSection.style.justifyContent = "center";
      quizMainWindow.style.display = "none";
      showResult();
    }
  }
}

const noOfQuestions = document.getElementById("numberOfQuestion");
const correctQuestion = document.getElementById("correctQuest");
const message = document.getElementById("message");

function showResult() {
  noOfQuestions.innerText = htmlQuiz.length;
  correctQuestion.innerHTML = score;
  if (score < 5) {
    message.innerHTML = "Sorry, You have failed!";
    message.style.color = "red";
  } else {
    message.innerHTML = "Congratulations! You have passed!";
    message.style.color = "green";
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

const openRegistrationForm = () => {
  loginUI.style.display = "none";
  registerUI.style.display = "flex";
};

// Function to display Login form

const openLoginForm = () => {
  loginUI.style.display = "flex";
  registerUI.style.display = "none";
};

function openForm() {
  mainPage.style.display = "none";
  loginPage.style.display = "flex";
}

// **** Register in localStorage ****

const registerImg = document.querySelector(".registerImg"),
  registerNameInputField = document.querySelector(".registerNameInput"),
  emailInputField = document.querySelector(".registerEmailInput"),
  passwordInputField = document.querySelector(".registerPasswordInput"),
  successRegisterContainer = document.querySelector(
    ".successRegisterContainer"
  );

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

// function openDashboard() {
//   quizQuestion.style.display = "none";
//   if (loginName.value === "Abdul Bari" && loginPass.value === "23354") {
//     mainPage.style.display = "none";
//     loginPage.style.display = "none";
//     version.style.display = "none";
//     clientName.style.display = "block";
//     courseSection.style.display = "block";
//   } else {
//     loginName.style.borderColor = "red";
//     loginPass.style.borderColor = "red";
//   }
// }

var navbar = document.getElementById("mainNavbar");
var timer = document.getElementById("quizTimer");
var quizQuestion = document.getElementById("quizQuestion");
quizQuestion.style.display = "none";

function startQuiz() {
  const startingMinute = 1;
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
    }
  }, 1000);

  courseSection.style.display = "none";
  quizQuestion.style.display = "block";
}
