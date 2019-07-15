// STOPWATCH
let seconds = 0;
let minutes = 0;
let hours = 0;

let stopwatchInterval;
let stopped = true;

const startBtn = document.querySelector(".stopwatch-start");
const resetBtn = document.querySelector(".stopwatch-reset");
const stopwatchCounter = document.querySelector(".stopwatch-counter");

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }
  if (minutes / 60 === 1) {
    minutes = 0;
    hours++;
  }

  formatTime(seconds, minutes, hours);
}

function formatTime(seconds, minutes, hours) {
  stopwatchCounter.innerHTML = `${hours}h:${
    minutes < 10 ? "0" : ""
  }${minutes}m:${seconds < 10 ? "0" : ""}${seconds}s`;
}

function startStopWatch() {
  startBtn.innerHTML = stopped ? "stop" : "start";

  if (stopped === true) {
    stopwatchInterval = setInterval(stopWatch, 1000);
    stopped = false;
  } else if (stopped == false) {
    clearInterval(stopwatchInterval);
    stopped = true;
  }
}
startBtn.addEventListener("click", startStopWatch);

function resetCounter() {
  clearInterval(stopwatchInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  formatTime(seconds, minutes, hours);
  stopped = true;
}
resetBtn.addEventListener("click", resetCounter);
