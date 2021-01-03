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


// Function for truthy statetments in quiz


// Function for falsey statements in quiz


// Function for entering intials for high score

// Funtion 


var timer = setInterval(countdown, 1000)