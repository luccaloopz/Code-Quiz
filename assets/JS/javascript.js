var startButton = document.querySelector("#start");
var welcomeContainer = document.querySelector("#welcome-container");
var questionContainer = document.querySelector("#question-container");
var highscores = document.querySelector("#highscores");
var highscoresForm = document.querySelector("#highscores-form");
var highscoresList = document.querySelector("#highscores-list");
var goBack = document.querySelector("#go-back");
var clearHighscores = document.querySelector("#clear-highscores")

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