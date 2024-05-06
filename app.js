var htmlQuiz = [
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

var questionCount = 0;
var score = 0;

// ! Elements --------

var quizWindow = document.getElementById("quizWindow");
var quizMainWindow = document.getElementById("quizQuestion");

var question = document.getElementById("question");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");

var label1 = document.getElementById("val1");
var label2 = document.getElementById("val2");
var label3 = document.getElementById("val3");
var label4 = document.getElementById("val4");

var allOptions = document.getElementsByClassName("allOptions");

var resultSection = document.getElementById("resultSection");

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

var noOfQuestions = document.getElementById("numberOfQuestion");
var correctQuestion = document.getElementById("correctQuest");
var message = document.getElementById("message");

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

var loginPage = document.getElementById("login-page");
var mainPage = document.getElementById("main-page");
var courseSection = document.getElementById("courseSection");
var loginName = document.getElementById("loginName");
var loginPass = document.getElementById("loginPassword");
var version = document.getElementById("version");
var clientName = document.getElementById("clientName");

courseSection.style.display = "none";
clientName.style.display = "none";

function openForm() {
  mainPage.style.display = "none";
  loginPage.style.display = "flex";
}

function fillFields() {
  loginName.value = "";
  loginPass.value = "";

  loginName.value = "Abdul Bari";
  loginPass.value = "23354";
}

function openDashboard() {
  quizQuestion.style.display = "none";
  if (loginName.value === "Abdul Bari" && loginPass.value === "23354") {
    mainPage.style.display = "none";
    loginPage.style.display = "none";
    version.style.display = "none";
    clientName.style.display = "block";
    courseSection.style.display = "block";
  } else {
    loginName.style.borderColor = "red";
    loginPass.style.borderColor = "red";
  }
}

var navbar = document.getElementById("mainNavbar");
var timer = document.getElementById("quizTimer");
var quizQuestion = document.getElementById("quizQuestion");
quizQuestion.style.display = "none";

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
    }
  }, 1000);

  courseSection.style.display = "none";
  quizQuestion.style.display = "block";
}
