// Switch theme

const themeToggle = document.getElementById("themeToggle"),
  themeToggle__responsive = document.getElementById("themeToggle__responsive"),
  body = document.body;

const applyTheme = (theme) => {
  body.setAttribute("data-theme", theme);
};

const syncSwitches = (isDarkMode) => {
  themeToggle.checked = isDarkMode;
  themeToggle__responsive.checked = isDarkMode;
};

const toggleTheme = (event) => {
  const isDarkMode = event.target.checked;

  if (isDarkMode) {
    applyTheme("dark");
  } else {
    applyTheme("light");
  }

  syncSwitches(isDarkMode);
};

themeToggle.addEventListener("click", (event) => toggleTheme(event));
themeToggle__responsive.addEventListener("click", (event) =>
  toggleTheme(event)
);

// Password eye function to peek

let passwordEye = document.querySelector(".passwordEye");
let passwordEye__register = document.querySelector(".passwordEye__register");

const showLoginPassword = () => {
  let loginPasswordInput = document.querySelector(".loginPasswordInput");

  if (loginPasswordInput) {
    if (loginPasswordInput.type === "password") {
      loginPasswordInput.type = "text";
    } else {
      loginPasswordInput.type = "password";
    }
  }
};

const showRegisterPassword = () => {
  let registerPasswordInput = document.querySelector(".registerPasswordInput");

  if (registerPasswordInput) {
    if (registerPasswordInput.type === "password") {
      registerPasswordInput.type = "text";
    } else {
      registerPasswordInput.type = "password";
    }
  }
};

passwordEye.addEventListener("click", showLoginPassword);
passwordEye__register.addEventListener("click", showRegisterPassword);

// if (loginPasswordInput && loginPasswordInput.type === "password") {
//   loginPasswordInput.type = "text";
// } else {
//   loginPasswordInput.type = "password";
// }

// if (registerPasswordInput && registerPasswordInput.type === "password") {
//   registerPasswordInput.type = "text";
// } else {
//   registerPasswordInput.type = "password";
// }
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

// Skip button event

const skip = () => {
  if (questionCount < htmlQuiz.length - 1) {
    questionCount++;
    deSelect();
    renderQuestion();
  } else {
    resultSection.style.display = "flex";
    resultSection.style.alignItems = "center";
    resultSection.style.justifyContent = "center";
    quizMainWindow.style.display = "none";
    showResult();
  }
};

// Next button event

const next = () => {
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
      questionCount = 0;
      quizMainWindow.style.display = "none";
      resultSection.style.display = "flex";
      resultSection.style.alignItems = "center";
      resultSection.style.justifyContent = "center";
      showResult();
    }
  }
};

const noOfQuestions = document.getElementById("numberOfQuestion");
const correctQuestion = document.getElementById("correctQuest");
const message = document.querySelector(".message");
var first50Bar = document.getElementById("first50-bar");
var valueBar = document.getElementById("valueBar");
let progressBar = document.getElementById("progressBar");

// Display result function
const showResult = () => {
  noOfQuestions.innerText = htmlQuiz.length;
  correctQuestion.innerHTML = score;
  let totalMCQs = 10;
  let result = (score / totalMCQs) * 100;

  // ****************

  console.log(currentEmail);

  storage = localStorage.getItem("Registered Users");
  arr = JSON.parse(storage);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].register_email === currentEmail) {
      arr[i].user_score = score;
    }
  }
  localStorage.setItem("Registered Users", JSON.stringify(arr));

  // ****************

  progressBar.style.width = result + "%";
  progressBar.textContent = result.toFixed(0) + "%";
  if (result < 69) {
    message.style.color = "red";
    message.innerText = "Sorry, You have failed!";
    progressBar.style.backgroundColor = "red";
  } else {
    message.style.color = "green";
    message.innerText = "Congratulations, You have passed!";
    progressBar.style.backgroundColor = "#4CAF50";
  }
};

const loginPage = document.getElementById("login-page");
const mainPage = document.getElementById("main-page");
const courseSection = document.getElementById("courseSection");
const loginName = document.getElementById("loginName");
const loginPass = document.getElementById("loginPassword");
const version = document.getElementById("version");
const clientName = document.getElementById("clientName");

courseSection.style.display = "none";

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
  // Empty login fields
  loginEmailInput.value = "";
  loginPasswordInput.value = "";

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

const openDashboard = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "flex";
};

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

// Function to prevent name input less than two alphabets

const nameInputSize = (str) => {
  if (str.length <= 2) {
    return true;
  }
  return false;
};

// Function to validate email

const validateEmail = (str) => {
  return str
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
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
  } else if (!validateEmail(emailInputField.value)) {
    alert("Invalid or incorrect email!");
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
      user_score: 0,
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

// Function to capitalize the first letter of name on dashboard

const capitalizeFirstLetter = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

// Login

const loginEmailInput = document.querySelector(".loginEmailInput"),
  loginPasswordInput = document.querySelector(".loginPasswordInput"),
  loggedIn__user = document.querySelector(".loggedIn__user");

let currentEmail;

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
      currentEmail = arr[i].register_email;
      alert("Login successful!");
      loginEmailInput.value = "";
      loginPasswordInput.value = "";
      flag2 = true;
      loginPage.style.display = "none";
      version.style.display = "none";
      courseSection.style.display = "block";
      loggedIn__user.innerHTML = `${capitalizeFirstLetter(
        arr[i].register_name
      )}`;
    }
  }
  if (!flag2) {
    alert("Incorrect credentials!");
  }
};

let navbar = document.getElementById("mainNavbar");
let footer = document.querySelector("footer");
let timer = document.getElementById("quizTimer");

// Show the Quiz section; start the timer

let interval;

const startQuiz = () => {
  clearInterval(interval);

  const startingMinute = 3;
  let time = startingMinute * 60;

  const updateTimerDisplay = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.innerHTML = `${minutes} : ${seconds}`;
  };

  updateTimerDisplay();

  interval = setInterval(() => {
    time--;

    updateTimerDisplay();

    if (time < 10) {
      timer.style.color = "red";
    }
    if (time <= 0) {
      timer.innerHTML = "Time is up!";
      quizMainWindow.style.display = "none";
      resultSection.style.display = "flex";
      resultSection.style.alignItems = "center";
      resultSection.style.justifyContent = "center";
      showResult();
    }
  }, 1000);

  courseSection.style.display = "none";
  navbar.style.display = "none";
  footer.style.display = "none";
  quizMainWindow.style.display = "block";
};

let logoutBtn = document.getElementById("logoutBtn");

const logout = () => {
  window.location.reload();
};

logoutBtn.addEventListener("click", logout);

let restartBtn = document.getElementById("restartBtn");

const restartQuiz = () => {
  score = 0;
  questionCount = 0;
  renderQuestion();
  deSelect();
  startQuiz();
  // navbar.style.display = "flex";
  // courseSection.style.display = "block";
  // footer.style.display = "flex";
};

restartBtn.addEventListener("click", restartQuiz);

// To show current year in footer

let footerYear = document.getElementById("footerYear");

const date = new Date();
let currentYear = date.getFullYear();

footerYear.innerText = currentYear;

// Admin Panel

let adminBtn = document.getElementById("adminBtn");


adminBtn.addEventListener(
  "click", function() { window.location.href = "./adminPanel.html"});
