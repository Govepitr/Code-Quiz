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


var score = 0;
var currentQuestion = -1;
var timer;
var time = 0;
var generateBtn = document.querySelector("#start");


//Countdown Timer

function start() {

  time = ":",75;
  document.getElementById("time").innerHTML = time;

  timer = setInterval(1000); {
    time--;
    document.getElementById("time").innerHTML = time;
  //The endGame function will begin at any point that the timer has reached 0
    if(time <= 0) {
        clearInterval(timer);
        endGame();
    }
  } 

  next();

}

// Timer has been stopped, so the game has ended
function endGame() {
  clearInterval(timer);

  var questions = `
  <h2>Game Over, sorry!</h2>
  <h3>You scored a ` + score + ` /100!</h3>
  <h3>That means you totally nailed ` + score/20 + ` questions like a digital boss!</h3>
  <input type="text" maxlength="3" id="initials" placeholder="Please enter your initials">
  <button onclick="savescore()">Save Score!</button>`;
  
  document.getElementById("start-quiz").innerHTML = questions;
}

//Locallly store the player's high score
function savescore() {
  localStorage.setItem("highscore", score);
  localStorage.setItem("highscoreinitials", document.getElementById('initials').value);
  getScore();
}

function getScore() {
  var questions = `
  <h2>` + localStorage.getItem("highscoreinitials") + ` is truly "The One" with a score of:</h2>
  <h1>` + localStorage.getItem("highscore") + `<h1><br>
  
  <button onclick="clearScore()">Clear Score</button><button onclick="resetGame()">Play Again?</button>`;

  document.getElementById("start-quiz").innerHTML = questions;
}

// Wipe the score board clean removing the names, scores, everything as long as they click 'clear score'
function clearScore() {
  localStorage.setItem("highscore", "");
  localStorage.setItem("highscoreinitials", "");

  resetGame();
}

//reset the game
function resetGame() {
  clearInterval(timer);
  score = 0;
  currentQuestion = -1;
  time = 0;
  timer = null;

  document.getElementById("time").innerHTML = time;

  var questions = `
  <h1>
    Coding Quiz Challenge
  </h1>
  <button>
    Start Quiz
  </button>
  <button onclick="start()">Start Quiz</button>`;

  document.getElementById("start-quiz").innerHTML = questions;

}

//Lose 10 seconds from their time if they select the incorrect answer
function incorrect() {
  time -= 10;
  document.getElementById("key").style.borderTop = "1px solid #a19f9fca";
  next();
}




// function next() {
//   currentQuestion++;

//   if (currentQuestion > questions.length - 1) {
//       endGame();
//       return;
//   }

  var questions = "<quiz-questions>" + questions[currentQuestion].title + "</quiz-questions>"

  for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].answers.length; buttonLoop++) {
      var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
      buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].answers[buttonLoop]);
      if (questions[currentQuestion].answers[buttonLoop] == questions[currentQuestion].answer) {
          buttonCode = buttonCode.replace("[ANS]", "correct()");
      } else {
          buttonCode = buttonCode.replace("[ANS]","I'm Sorry, that's incorrect!()");
      }
      questions += buttonCode
  }


  // document.getElementById("quizBody").innerHTML = questions;



//function to validate the correct answer on click

//end quiz function(if time runs outerHeight, hide the questions, show the end screenfollowed by the high score)

// save high score

///quiz end function (restart options display highscore)

generateBtn.addEventListener("click", start);