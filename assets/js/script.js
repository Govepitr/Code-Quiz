var score = 0;
var currentQuestion = -1;
var timer;
var timeLeft = 0;


//Countdown Timer

function start() {

  timeLeft = 75;
  document.getElementById("timeLeft").innerHTML = timeLeft;

  timer = setInterval(function) {
    timeLeft--;
    document.getElementById("timeLeft").innerHTML = timeLeft;
  //The endGame function will begin at any point that the timer has reached 0
    if(timeLeft <= 0) {
        clearInterval(timer);
        endGame(;)
    }
  } var timer = setInterval(countdown, 1000);

  next();

}

// Timer has been stopped, so the game has ended
function endGame() {
  clearInterval(timer);

  



}



// var countdown = function() {
//   timerCountdown.textContent = "Time:" + seconds;
//   seconds--;
//     if(seconds === -1){
//     clearInterval(timer);
//     timerCountdown.textContent = "Time is up!"
//   };
// };


//function to start the quiz

//function to get the question

//function to validate the correct answer on click

//end quiz function(if time runs outerHeight, hide the questions, show the end screenfollowed by the high score)

// save high score

///quiz end function (restart options display highscore)

