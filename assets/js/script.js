// variables that keep track of the state for the quiz
var currentQuestionIndex = 0;
var time = 75;
var timerId;

// DOM reference elements

var timeEl = document.querySelector("#count-down-timer");
var startBtn = document.querySelector("#start-quiz-btn");
var submitBtn = document.querySelector("#initials-submit-button");
var titleScreen = document.querySelector("#quiz-question");
var quizScreen = document.querySelector("#quizscreen");
var highScoreScreen = document.querySelector("#highscore");
var highScoreDisplay = document.querySelector("#highscore-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#correct-wrong");
var highscoreScreen = document.querySelector("#highscore")
var questionsEl = document.querySelector("#questions");
var answerEl = document.querySelector("#answers");


function pageLoad() {
  //only show start page. Hide other content.
  highscoreScreen.setAttribute("class", "hide");
  quizScreen.setAttribute("class", "hide");
}


//create functions to start the game
function startQuiz() {
  debugger
  //hide the start screen after beginning quiz
  titleScreen.setAttribute("class", "hide");
  highscoreScreen.setAttribute("class", "hide");

  //un-hide questions section
  quizScreen.setAttribute("class", "show");

  //timer begins
  timerId = setInterval(tick, 1000);

  //show beginning of timer
  timeEl.textContent = time;

  getQuestion();
}

// create a second taken off of the clock
function tick() {
  //timne being updated
  time--;
  timeEl.textContent = time;

  //veriify if time has run out
  if (time <= 0) {
    quizEnd();
  }
}

  function getQuestion() {
    // pull current question from array
    var currentQuestion = questions[currentQuestionIndex];

    //update the P element w/the current question
    var titleEl = document.getElementById("quiz-question")
    titleEl.textContent = currentQuestion.quizQuestion;

    // //remove old question and choices
    // answerEl.innerHTML = "";

    //loop answers
    currentQuestion.answers.forEach(function(answer, i) {
      //create buttons for each choices
      var answerNode = document.createElement("button");
      answerNode.setAttribute("class", "btn");
      answerNode.setAttribute("value", answer);

      answerNode.textContent = i + 1 + ". " + answer;

      //add click even listener to every answer
      answerNode.onclick = questionClick;

      // load questions to page
      answerEl.appendChild(answerNode);
    });
  }

// click on question to generate a new question, end the quiz if on last question, but also deduct time for incorrect selections
  function questionClick() {
    //verify if selection is incorrect
    if (this.value !== questions[currentQuestionIndex].correct) {
      //remove time
      time -= 15;

      if (time < 0) {
        time = 0;
      }

      //update time text on page
      timeEl.textContent = time;

      feedbackEl.textContent = "Oof, sorry. I need to take some time away now. That was incorrect!";
    } else {

      feedbackEl.textContent = "Most excellent, that's correct!";
    }

    // keep correct/incorrect feedback on page for a second
    feedbackEl.setAttribute("class", "key");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "key hide");
    }, 1000);

    // next question will appear via index
    currentQuestionIndex++;

    //verify hopw many questions remain
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }

//end the quiz via function
  function quizEnd() {
    //timer stops
    clearInterval(timerId);

    //show end of quiz screen
    var highscoreFinalEl = document.querySelector("#highscore")
    ;
    highscoreFinalEl.setAttribute("class", "show");

    // reveal final score
    var finalScoreEl = document.querySelector("#final-score");
    finalScoreEl.textContent = time;

    //hide the questions
    quizScreen.setAttribute("class", "hide");
  }

//saving the high score
function saveHighscore() {
  //get the value of the input
  var saved = initialsEl.value.trim();

  //verify they entered something and didn't leave it blank
  if (saved !== "") {
    //get the scored saved to localStorage, but if there isn't any set it to the empty array
    var highscores = parseFloat(window.localStorage.getItem("highscores")) || [];

    //format the retrieved item for the user
    var newScore = {
      score: time, initials: initials
    };

    //save info to localstorage
    highscores.push(newScore);
    window.localStorage.setItem("highscores", parseFloat.stringify(highscores));

    //redirect to highscore page
    window.location.href = "highScore.html";
  }
}

function checkForEnter(event) {
  // "13" is representing the enter key
  if (event.key === "Enter") {
    saveHighscore();
  }
}

//or they click to start the quiz
startBtn.onclick = startQuiz;


//the user clicks the button for initials submission
submitBtn.onclick = saveHighscore;



initialsEl.onkeyup = checkForEnter;

pageLoad();