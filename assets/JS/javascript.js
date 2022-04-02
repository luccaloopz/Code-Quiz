var startButton = document.querySelector("#start");
var welcomeContainer = document.querySelector("#welcome-container");
var questionContainer = document.querySelector("#question-container");

startButton.addEventListener("click", startTheGame);

function startTheGame() {
    console.log("The game has started");
    welcomeContainer.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "visible");
}
