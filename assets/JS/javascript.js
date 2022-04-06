var startButton = document.querySelector("#start");
var welcomeContainer = document.querySelector("#welcome-container");
var questionContainer = document.querySelector("#question-container");
var highscores = document.querySelector("#highscores");
var highscoresForm = document.querySelector("#highscores-form");
var highscoresList = document.querySelector("#highscores-list");
var goBack = document.querySelector("#go-back");
var clearHighscores = document.querySelector("#clear-highscores");
var answerBtns = document.querySelector(".answers");
var displayedQuestion = document.querySelector("#question");
var timer = document.querySelector(".timer");

var currentQuestion;

var secondsLeft = 120;

startButton.addEventListener("click", startTheGame);

function startTheGame() {
    welcomeContainer.setAttribute("class", "hide");
    questionContainer.setAttribute("class", "visible");
    currentQuestion = 0;
    nextQuestionUp();
    setTime();
}

highscores.addEventListener("click", showHighscores); // **this will need to be a button instead

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
    //**this will need to clear highscores
}

function nextQuestionUp() {
    // for (var i = 0; i < questions.length; i++) {
    //     grabQuestion(questions[i]);
    //     console.log("test");
    // }
    // grabQuestion(questions[0]); //grabs the question bank array at the current index (initially set to 0)
    // if (document.querySelector("button").clicked === true) {
    //     console.log("test")
    // }
    resetQuestions()
    if (currentQuestion < questions.length) {
        grabQuestion(questions[currentQuestion])
    } else {
        highscoresForm.setAttribute("class", "visible")
        questionContainer.setAttribute("class", "hide");
    }
}

function grabQuestion(question) {
    // this will run a for loop to show the current question and available answers to the user 
    displayedQuestion.textContent = question.question;
    question.answers.forEach(element => {
        var button = document.createElement("button")
        button.innerText = element.written
        button.setAttribute("class", "button")
        if (element.correctness) {
            button.dataset.correctness = element.correctness;
        }
        answerBtns.appendChild(button)
        button.addEventListener("click", function(){
            evaluateAnswer(element.correctness);
        });
    }); 

    //** If user answers question correctly, they are moved on to a new problem. If they answer wrong, timer gets deducted and they move onto new problem */
}

function resetQuestions() {
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild)
    }
}
 
// button.addEventListener("click", chosenAnswer)
// function chosenAnswer(event) {
// //     //if chosen answer is wrong, decrease timer by 20 seconds(secondsLeft var?. in other words 'secondsLeft=secondsLeft -20'?) 
// //     //* We might only need to log the ending time to localStorage so that highscores can pull the data */
//     var chosenAnswer = event.target
//     var correct = chosenAnswer.dataset.correctness
//     if (correct) {
//         currentQuestion++
//         grabQuestion()
//     } else {
//         secondsLeft = secondsLeft -20
//     }
// }

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--
        timer.textContent = "Seconds left: "  + secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            welcomeContainer.setAttribute("class", "visible");
            questionContainer.setAttribute("class", "hide");
            return secondsLeft;
        }
    }, 1000)
}

function evaluateAnswer(correctness) {
    console.log(correctness)
    currentQuestion++
    if (!correctness) {
        secondsLeft -= 20
    }
    nextQuestionUp()
}

const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {written: "HyperText Markup Language", correctness: true},
            {written: "Hyper Mark Language", correctness: false},
            {written: "Higher Markup Language", correctness: false},
            {written: "None of the above", correctness: false}
        ],
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {written: "Column Style Sheets", correctness: false},
            {written: "Cascading Style Sheets", correctness: true},
            {written: "Capture Style Sheets", correctness: false},
            {written: "None of the above", correctness: false},
        ],
    },
    {
        question: "Which of the following HTML tags creates a line-break on the page?",
        answers: [
            {written: "<br>", correctness: true},
            {written: "<img>", correctness: false},
            {written: "<a>", correctness: false},
            {written: "<p>", correctness: false},
        ],
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answers: [
            {written: "_2names", correctness: true},
            {written: "_first_and_last_names", correctness: false},
            {written: "FirstAndLast", correctness: false},
            {written: "None of the above", correctness: false},
        ],
    },
    {
        question: "Inside which of the following HTML elements do we put/link the JavaScript?",
        answers: [
            {written: "<js>", correctness: false},
            {written: "<scripting>", correctness: false},
            {written: "<script>", correctness: true},
            {written: "<javascript>", correctness: false},
        ],
    },
]
