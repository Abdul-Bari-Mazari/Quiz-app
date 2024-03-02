// var cards = {
//   Python: {
//     qName: "Python Quiz#01",
//     TQues: 10,
//     tTime: "40 mins",
//     pass: 70,
//   },
//   WebandAppCrashCourse: {
//     qName: "HTML Quiz",
//     TQues: 10,
//     tTime: "30 mins",
//     pass: 70,
//   },
// };

var questions = {
  one: {
    question: "Inside which HTML element do we put the JavaScript?",
    optionA: "&lt;scripting&gt;",
    optionB: "&lt;js&gt;",
    optionC: "&lt;script&gt;",
    optionD: "&lt;javascript&gt;",
  },

  two: {
    question: "Where is the correct place to insert a JavaScript?",
    optionA: "The &lt;head&gt; section",
    optionB: "The &lt;body&gt; section",
    optionC: "Both of the above",
    optionD: "None of the aboce",
  },

  three: {
    question:
      'What is the correct syntax for referring to an external script called "app.js?',
    optionA: '&lt;script name="app.js&gt;',
    optionB: '&lt;script src="app.js"',
    optionC: '&lt;script href="app.js"',
    optionD: '&lt;link href="xxx.js"',
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

const quizEl = document.getElementById("quiz");
const resultsEl = document.getElementById("results");
const submitBtn = document.getElementById("submit");
let currentIndex = 0;

function displayQuestions() {
  const obj = questions[Object.keys(questions)[currentIndex]];
  quizEl.innerHTML = `<div>
                       <h4 class="fw-bold">
                         ${obj.question}
                       </h4>

                       <div
                         class="d-flex align-items-center justify-content-start mt-3 mx-4"
                       >
                         <h5 class="fw-bold">
                           <input
                             class="radio-btn"
                             type="radio"
                             name="options"
                             value="${obj.optionA}"
                           />${obj.optionA}
                         </h5>
                       </div>

                       <div
                         class="d-flex align-items-center justify-content-start mt-3 mx-4"
                       >
                         <h5 class="fw-bold">
                           <input
                             class="radio-btn"
                             type="radio"
                             name="options"
                             value="${obj.optionB}"
                           />${obj.optionB}
                         </h5>
                       </div>

                       <div
                         class="d-flex align-items-center justify-content-start mt-3 mx-4"
                       >
                         <h5 class="fw-bold">
                           <input
                             class="radio-btn"
                             type="radio"
                             name="options"
                             value="${obj.optionC}"
                           />${obj.optionC}
                         </h5>
                       </div>

                       <div
                         class="d-flex align-items-center justify-content-start mt-3 mx-4"
                       >
                         <h5 class="fw-bold">
                           <input
                             class="radio-btn"
                             type="radio"
                             name="options"
                             value="${obj.optionD}"
                           />${obj.optionD}
                         </h5>
                       </div>
                     </div>`;
}

function checkAnswer() {
  const radios = quizEl.querySelectorAll("input[type='radio']");
  let answer = null;
  for (const radio of radios) {
    if (radio.checked) {
      answer = radio.value;
      break;
    }
  }

  if (!answer) {
    alert("Please make a selection.");
    return;
  }

  //   const obj = questions[Object.keys(questions)[currentIndex]];
  //   const message = `You answered "${answer}". Correct answer: "${obj[Object.values(obj)[0]]}".`;
  //   resultsEl.innerHTML += `<p>${message}</p>`;

  currentIndex++;
  if (currentIndex >= Object.keys(questions).length) {
    submitBtn.disabled = true;
    resultsEl.innerHTML += "<p>Quiz complete!</p>";
    resultsEl.style.fontSize = "30px";
    resultsEl.style.fontWeight = "bold";
    resultsEl.style.color = "green";
    return;
  }

  displayQuestions();
}

submitBtn.addEventListener("click", checkAnswer);

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
  loginPage.style.display = "block";
}

function fillFields() {
  loginName.value = "";
  loginPass.value = "";

  loginName.value = "Abdul Haseeb";
  loginPass.value = "23354";
}

function openDashboard() {
    quizQuestion.style.display = "none";
  if (loginName.value === "Abdul Haseeb" && loginPass.value === "23354") {
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

var timer = document.getElementById("quizTimer");

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

var quizQuestion = document.getElementById("quizQuestion");
quizQuestion.style.display = "none";

function startQuiz() {
  courseSection.style.display = "none";
  quizQuestion.style.display = "block";
}
