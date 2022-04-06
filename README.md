# Code-Quiz

## **Deployed Link**

Please click on the following link to view the coding quiz: https://luccaloopz.github.io/Code-Quiz/

## **Description**

The purpose of this project was to create a timed quiz in which users could save their scores to a highscores list upon completion of the quiz which persists across sessions. The list may be cleared by the press of a button. Users have 90 seconds to answer 5 coding-related questions. If users answer a question incorrectly the timer is decreased by 20 seconds and they are prompted with the next question. If they answer correctly, they are simply prompted with the next question. Users may also view their highscores list from the 'main page' if they so choose. 

## **Languages Used**

* HTML
* CSS
* JavaScript

## **Important Code Snippets**

A crucial part of the JavaScript code was the following function. The goal of this function was to first run a separate function that clears the current question from the user's screen if they select an answer choice. Next, the if/else conditionals states that as long as there are more questions in the question bank array to display, display the next question. Otherwise, clear the timer and bring the user to the highscores form where they will be displayed with their score and allowed to save their initials to this score.

```JavaScript
function nextQuestionUp() {
    resetQuestions();
    if (currentQuestion < questions.length) {
        grabQuestion(questions[currentQuestion])
    } else {
        clearInterval(timerInterval);
        myScore = secondsLeft;
        score.textContent = myScore;
        highscoresForm.setAttribute("class", "visible");
        questionContainer.setAttribute("class", "hide");
    };
};
```
