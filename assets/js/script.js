var timerCountdown = document.querySelector("#time");
var timer;
var seconds = 75;
console.log(timerCountdown);

//Countdown Timer

var countdown = function() {
  timerCountdown.textContent = "Time:" + seconds;
  seconds--;
    if(seconds === -1){
    clearInterval(timer);
    timerCountdown.textContent = "Time is up!"
  };
};


//function to start the quiz

//function to get the question

//function to validate the correct answer on click

//end quiz function(if time runs outerHeight, hide the questions, show the end screenfollowed by the high score)

// save high score

///quiz end function (restart options display highscore)

var timer = setInterval(countdown, 1000)