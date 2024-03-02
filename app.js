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
    one : {
        question: "Inside which HTML element do we put the JavaScript?",
        optionA : "<scripting",
        optionB : "<js>",
        optionC : "script",
        optionD : "<javascript>"
    },

    two : {
        question: "Inside which HTML element do we put the JavaScript?",
        optionA : "<scripting",
        optionB : "<js>",
        optionC : "script",
        optionD : "<javascript>"
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
  loginPage.style.display = "block";
}

function fillFields() {
  loginName.value = "";
  loginPass.value = "";

  loginName.value = "Abdul Haseeb";
  loginPass.value = "23354";
}

function openDashboard() {
  if (loginName.value === "Abdul Haseeb" && loginPass.value === "23354") {
    mainPage.style.display = "none";
    loginPage.style.display = "none";
    version.style.display = "none";
    clientName.style.display = "block";
    courseSection.style.display = "block";
  } else {
    loginName.style.backgroundColor = "pink";
    loginPass.style.backgroundColor = "pink";
  }
}
