var hiScore = document.getElementById("hi-hiScore");
var questions = document.getElementById("questions").innerHTML = "/assets/js/questions.js";
var timer = document.getElementById("count-down-timer");
var startQuiz = document.getElementById("start");
var timerId;
var time = 75;
var questionArray = 0;


var questions = [{

  quizQuestion: "Arrays in JavaScript can be used to store _____.",
  answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
  correct:"4. all of the above"
},
{
  quizQuestion: "String Values must be enclosed within ____ when being assigned to variables.",
  answers: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
  correct:"3. quotes"
},
{
  quizQuestion: "The condition in an if/else statement is enclosed with ____.",
  answers: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
  correct:"2. curly brackets"
},
{
  quizQuestion: "Commonly used data types DO NOT include:",
  answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  correct:"3. alerts"
},
{
  quizQuestion: "A very useful tool for users during development and debugging for printing content to the debugger is:",
  answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console log"],
  correct:"4. console log"
}
]





//Page loads up timer values defined above
function loadQuiz() {
  timerId = setInterval("count-down-timer", 1000);
  timer.textContent = time;
  startQuestions();
}

// This function starts to pull the questions 1 at a time
function startQuestions(questions) {
  var currentQuestion = questions[questionArray];
    const questionTextArea = document.getElementById("quiz-title");
    questionTextArea.textContent = currentQuestion.quizQuestions;
    const answersEl = document.getElemenId("questions");
    answersEl.innerHTML = "";
    currentQuestion.answers.forEach(function (answer) {
  var answerNode = document.createElement("button");
      answerNode.setAttribute("class", "answer button");
      answerNode.setAttribute("value", answer);
      answerNode.textContent = answer;
      answerNode.onclick = questionClick;
      answersEl.appendChild(answerNode);
  });
}

function questionClick(event) {
  var correct = event.target.textContent;
  var correct = questions(currrentQuestionIndex).correct;
  if (correct === answer) {
    var correct = "Most excellent, that's correct!";
    document.getElementById("quiz-content").innerHTML = window.correct
    document.getElementById("key").style.borderTop = "1px solid #a19f9fca";
  } else {
    time -= 10;
    result.textContent = "Oof, sorry. I need to take some time away now. That was incorrect!";
    document.getElementById("key").style.borderTop = "1px solid #a19f9fca";
  }
  questionArray++;
  if (time <= 0) {
    endQuiz();
  } else {
    startQuestions();

  }
}

function countDown() {
  time== "";
  timer.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
  console.log(countDown);
}

function endQuiz() {
  clearInterval(timerId);

  // replace the id="quiz-title" content w/a times up message & button to view score

  var questions = `
  <h2>Game Over, sorry!</h2>
  <h3>You scored a ` + hiScore + ` /100!</h3>
  <h3>That means you totally nailed ` + hiScore/20 + ` questions like a digital boss!</h3>
  <input type="text" maxlength="3" id="initials" placeholder="Please enter your initials">
  <button onclick="savescore()">Save Score!</button>`;
  
  document.getElementById("start-quiz").innerHTML = questions;
}

//Locallly store the player's high hiScore
function savescore() {
  localStorage.setItem("highscore", hiScore);
  localStorage.setItem("highscoreinitials", document.getElementById('initials').value);
  getScore();
}

function getScore() {
  var questions = `
  <h2>` + localStorage.getItem("highscoreinitials") + ` is truly "The One" with a hiScore of:</h2>
  <h1>` + localStorage.getItem("highscore") + `<h1><br>
  
  <button onclick="clearScore()">Clear Score</button><button onclick="resetGame()">Play Again?</button>`;

  document.getElementById("start-quiz").innerHTML = questions;
}

// Wipe the hiScore board clean removing the names, scores, everything as long as they click 'clear hiScore'
function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreinitials", "");

  resetGame();
}

//reset the game




// generateBtn.addEventListener("click", start);;
loadQuiz();