var questions = {
  one: {
    question: "Inside which HTML element do we put the JavaScript?",
    optionA: "&lt;scripting&gt;",
    optionB: "&lt;js&gt;",
    optionC: "&lt;script&gt;",
    optionD: "&lt;javascript&gt;",
    correctAnswer: "&lt;script&gt;",
  },

  two: {
    question: "Where is the correct place to insert a JavaScript?",
    optionA: "The &lt;head&gt; section",
    optionB: "The &lt;body&gt; section",
    optionC: "Both head and body",
    optionD: "None of the above",
    correctAnswer: "Both head and body",
  },

  three: {
    question:
      'What is the correct syntax for referring to an external script called "app.js?"',
    optionA: '&lt;script name="app.js&gt;',
    optionB: '&lt;script src="app.js"&gt;',
    optionC: '&lt;script href="app.js"&gt;',
    optionD: '&lt;link href="xxx.js"&gt;',
    correctAnswer: '&lt;script src="app.js"&gt;',
  },

  four: {
    question: 'How do you write "Hello World" in an alert box?',
    optionA: 'msg("Hello World")',
    optionB: 'alertBox("Hello World")',
    optionC: 'alert("Hello World")',
    optionD: 'msgBox("Hello World")',
    correctAnswer: 'alert("Hello World")',
  },

  five: {
    question: "How do you create a function in JavaScript?",
    optionA: "function:myFuction()",
    optionB: "function myFunction()",
    optionC: "function = myFunction()",
    optionD: "myFunctiom function()",
    correctAnswer: "function myFunction()",
  },

  six: {
    question: 'How do you call a function named "myFunction"?',
    optionA: "call function myFunction()",
    optionB: "call myFunction()",
    optionC: "myFunction()",
    optionD: "function myFunction()",
    correctAnswer: "myFunction()",
  },

  seven: {
    question: "How to write an IF statement in JavaScript?",
    optionA: "if i == 5 then",
    optionB: "if i = 5 then",
    optionC: "if (i == 5)",
    optionD: "if i = 5",
    correctAnswer: "if (i == 5)",
  },
};

var mcqContainer = document.getElementById("mcqContainer");

// for (var key in questions) {
//   var obj = questions[key];
//   mcqContainer.innerHTML += `<div>
//     <h4 class="fw-bold">
//      ${obj.question}
//     </h4>

//     <div
//       class="d-flex align-items-center justify-content-start mt-3 mx-4"
//     >
//       <h5 class="fw-bold">
//         <input
//           class="radio-btn"
//           type="radio"
//         />${obj.optionA}
//       </h5>
//     </div>

//     <div
//       class="d-flex align-items-center justify-content-start mt-3 mx-4"
//     >
//       <h5 class="fw-bold">
//         <input
//           class="radio-btn"
//           type="radio"
//         />${obj.optionB}
//       </h5>
//     </div>

//     <div
//       class="d-flex align-items-center justify-content-start mt-3 mx-4"
//     >
//       <h5 class="fw-bold">
//         <input
//           class="radio-btn"
//           type="radio"
//         />${obj.optionC}
//       </h5>
//     </div>

//     <div
//       class="d-flex align-items-center justify-content-start mt-3 mx-4"
//     >
//       <h5 class="fw-bold">
//         <input
//           class="radio-btn"
//           type="radio"
//         />${obj.optionD}
//       </h5>
//     </div>

// </div>
// `;
// }

const mcq = document.getElementById("quiz");
const result = document.getElementById("results");
const submitBtn = document.getElementById("submit");

// let currentIndex = Math.floor(Math.random() * Object.keys(questions).length);
let counter = 1;
let score = 0;
var mcqAnswer;
let displayedQuestions = [];

function displayQuestions() {
  // if (displayQuestions.length === Object.keys(questions).length) {
  //   // console.log(score);
  //   return;
  // }

  let remainingQuestions = Object.keys(questions).filter(
    (key) => !displayedQuestions.includes(key)
  );

  if (remainingQuestions.length === 0) {
    return;
  }

  let randomIndex = Math.floor(Math.random() * remainingQuestions.length);
  let currentQuestionKey = remainingQuestions[randomIndex];
  let currentQuestion = questions[currentQuestionKey];

  // console.log("Length of Object", Object.keys(questions).length);
  // var obj = questions[Object.keys(questions)[currentIndex]];
  mcq.innerHTML = `<div>
                       <h4 class="fw-bold">
                         ${counter++ + ")"} ${currentQuestion.question}
                       </h4>

                       <div
                         class="d-flex align-items-center justify-content-start mt-3 mx-4"
                       >
                         <h5 class="fw-bold">
                           <input
                           id="radioBtn"
                             class="radio-btn"
                             type="radio"
                             name="options"
                             value="${currentQuestion.optionA}"
                           />${currentQuestion.optionA}
                         </h5>
                       </div>

                       <div
                         class="d-flex align-items-center justify-content-start mt-3 mx-4"
                       >
                         <h5 class="fw-bold">
                           <input
                           id="radioBtn"
                             class="radio-btn"
                             type="radio"
                             name="options"
                             value="${currentQuestion.optionB}"
                           />${currentQuestion.optionB}
                         </h5>
                       </div>

                       <div
                         class="d-flex align-items-center justify-content-start mt-3 mx-4"
                       >
                         <h5 class="fw-bold">
                           <input
                           id="radioBtn"
                             class="radio-btn"
                             type="radio"
                             name="options"
                             value="${currentQuestion.optionC}"
                           />${currentQuestion.optionC}
                         </h5>
                       </div>

                       <div
                         class="d-flex align-items-center justify-content-start mt-3 mx-4"
                       >
                         <h5 class="fw-bold">
                           <input
                           id="radioBtn"
                             class="radio-btn"
                             type="radio"
                             name="options"
                             value="${currentQuestion.optionD}"
                           />${currentQuestion.optionD} 
                         </h5>
                       </div>
                     </div>`;
  displayedQuestions.push(currentQuestionKey);
  // delete questions[Object.keys(questions)[currentIndex]];
}

// var radios = mcq.querySelectorAll("input[type='radio']");

function nextMCQ() {
  let selectedRadio = mcq.querySelector("input[type='radio']:checked");

  // console.log("MCQ ANSWER",obj.correctAnswer);
  // console.log("Selected Radio", selectedRadio);
  // var answer = null;
  if (!selectedRadio) {
    alert("Please make a selection.");
    return;
  }

  let answer = selectedRadio.value;
  let currentQuestionKey = displayedQuestions[displayedQuestions.length - 1];
  let currentQuestion = questions[currentQuestionKey];

  if (answer === currentQuestion.correctAnswer) {
    score++;
  }

  console.log("Score", score);

  // console.log("Answer", answer);
  // if (typeof answer === null) {
  //   alert("Please make a selection.");
  //   return;
  // }

  // const obj = questions[Object.keys(questions)[currentIndex]];
  // const message = `You answered "${answer}". Correct answer: "${
  //   obj[Object.values(obj)[answer]]
  // }".`;
  // result.innerHTML += `<p>${message}</p>`;

  // currentIndex = Math.floor(Math.random() * 2);
  // var obj = questions[Object.keys(questions)[currentIndex]];
  // if (currentIndex > Object.keys(questions).length) {
  //   submitBtn.disabled = true;
  //   result.innerHTML += "<p>Quiz complete!</p>";
  //   result.style.fontSize = "30px";
  //   result.style.fontWeight = "bold";
  //   result.style.color = "green";
  //   // console.log(score);
  //   return;
  // }

  if (displayedQuestions.length === Object.keys(questions).length) {
    submitBtn.disabled = true;
    result.innerHTML += "<p>Quiz complete!</p>";
    result.style.fontSize = "30px";
    result.style.fontWeight = "bold";
    result.style.color = "green";
    result.innerHTML += `<p>Your final score is: ${score} out of ${
      Object.keys(questions).length
    }</p>`;
    submitBtn.disabled = true;
  } else {
    displayQuestions();
  }
}

displayQuestions();

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
