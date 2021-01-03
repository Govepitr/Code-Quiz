var timerCountdown = document.querySelector("#time");
var timer;
var seconds = 75;
console.log(timerCountdown);

//Countdown Timer

var countdown = function() {
  timerCountdown.textContent = "Time:" + seconds;
  console.log("seconds");
  seconds--;
    if(seconds === -1){
    console.log("timeisup");
    clearInterval(timer);
  };
};

var timer = setInterval(countdown, 1000)