var startButton = document.querySelector("#start");
var welcomeContainer = document.querySelector("#welcome-container");
var questionContainer = document.querySelector("#question-container");
var highscores = document.querySelector("#highscores");
var highscoresForm = document.querySelector("#highscores-form");
var highscoresList = document.querySelector("#highscores-list");
var goBack = document.querySelector("#go-back");
var clearHighscores = document.querySelector("#clear-highscores");

startButton.addEventListener("click", startTheGame);

function startTheGame() {
    console.log("The game has started");
    welcomeContainer.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "visible");
}

highscores.addEventListener("click", showHighscores);

function showHighscores() {
    welcomeContainer.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "hide");
    highscoresForm.setAttribute("class", "hide"); //may not need this im not sure yet...
    highscoresList.setAttribute("class", "visible");
}

goBack.addEventListener("click", goBackToMainPage);

function goBackToMainPage() {
    welcomeContainer.setAttribute("class", "visible");
    questionContainer.setAttribute("class", "hide");
    highscoresForm.setAttribute("class", "hide"); //may not need this im not sure yet...
    highscoresList.setAttribute("class", "hide");
}

clearHighscores.addEventListener("click", clearAllTheHighscores);

function clearAllTheHighscores() {
    console.log("highscores are cleared");
}

function nextQuestionUp() {

}

const questions = [
    {
        question: "What does HTML stand for?",
        answer: {
            a: "HyperText Markup Language",
            b: "Hyper Mark Language",
            c: "Higher Markup Language",
            d: "None of the above",
        },
        correctAnswer: "a"
    },
    {
        question: "What does CSS stand for?",
        answer: {
            a: "Column Style Sheets",
            b: "Cascading Style Sheets",
            c: "Capture Style Sheets",
            d: "None of the above",
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following HTML tags creates a line-break on the page?",
        answer: {
            a: "<br>",
            b: "<img>",
            c: "<a>",
            d: "<p>",
        },
        correctAnswer: "a"
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answer: {
            a: "_2names",
            b: "_first_and_last_names",
            c: "FirstAndLast",
            d: "None of the above",
        },
        correctAnswer: "a"
    },
    {
        question: "Inside which of the following HTML elements do we put/link the JavaScript?",
        answer: {
            a: "<js>",
            b: "<scripting>",
            c: "<script>",
            d: "<javascript>",
        },
        correctAnswer: "c"
    },
]
