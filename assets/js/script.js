var timerCountdown = document.querySelector("#time");
var timer;
var seconds = 60;
console.log(timerCountdown);






var countdown = function() {
  console.log("hello");
  seconds--
  timerCountdown.textContent = "Time:" + seconds
};

timer = setInterval(countdown, 1000)