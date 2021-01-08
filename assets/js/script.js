// variables that keep track of the state for the quiz
var currrentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// DOM reference elements

var timeEl = document.querySelector("#count-down-timer");
var startBtn = document.querySelector("#start-quiz-btn");
var submitBtn = document.querySelector("#initials-submit-button");
var titleScreen = document.querySelector("#quiz-question");
var quizScreen = document.querySelector("#answer");
var highScoreScreen = document.querySelector("#highscore");
var highScoreDisplay = document.querySelector("#highscore-section");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#correct-wrong");

var questionsEl = document.querySelector("#questions");
var choicesEl = document.querySelector("#answers");

//create functions to start the game
function startQuiz() {
  //hide the start screen after beginning quiz
  titleScreen.setAttribute("class", "hide");

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
    var currentQuestion = questions[currrentQuestionIndex];

    //update the title w/the current question
    var titleEl = document.getElementById("questions")
    titleEl.textContent = currentQuestion.title;

    //remove old question and choices
    choicesEl.innerHTML = "";

    //loop choices
    currentQuestion.choices.forEach(function(choice, I) {
      //create buttons for each choices
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "choice");
      choiceNode.setAttribute("value", choice);

      choiceNode.textContent = i + 1 + ". " + choice;

      //add click even listener to every choice
      choiceNode.onClick = questionClick;

      // load questions to page
      choices.appendChild(choiceNode);
    });
  }

// click on question to generate a new question, end the quiz if on last question, but also deduct time for incorrect selections
  function questionClick() {
    //verify if selection is incorrect
    if (this.value !== questions[currrentQuestionIndex].answer) {
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
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // next question will appear via index
    currrentQuestionIndex++;

    //verify hopw many questions remain
    if (currrentQuestionIndex === questions.length) {
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

//the user clicks the button for initials submission
submitBtn.onclick() = saveHighscore;

//or they click to start the quiz
startBtn.onClick() = startQuiz;

initialsEl.onkeyup() = checkForEnter;