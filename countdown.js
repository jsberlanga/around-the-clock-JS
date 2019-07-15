// COUNTDOWN
let countdownInterval;

const fiveMinButton = document.querySelector(".countdown-5min");
const fifteenMinButton = document.querySelector(".countdown-15min");

const countdownCounter = document.querySelector(".countdown-counter");
const countdownRemainder = document.querySelector(".countdown-remainder");

function startCountdown(mins) {
  clearInterval(countdownInterval);
  const now = Date.now();
  const then = now + mins * 60 * 1000;

  countdownInterval = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      countdownCounter.innerHTML = "Your break has finished!";
      return clearInterval(countdownInterval);
    }

    displayTimer(secondsLeft);
  }, 1000);

  displayRemainder(new Date(then));
}

function displayTimer(secondsLeft) {
  let mins = Math.floor(secondsLeft / 60);
  let secs = secondsLeft % 60;

  countdownCounter.innerHTML = `${mins > 1 ? `${mins}m:` : ""}${
    secs < 10 && mins > 1 ? "0" : ""
  }${secs}s`;
}

function displayRemainder(then) {
  const minutes = then.getMinutes();
  const hours = then.getHours();
  countdownRemainder.innerHTML = `Be back at ${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

fiveMinButton.addEventListener("click", () => {
  startCountdown(5);
});
fifteenMinButton.addEventListener("click", () => {
  startCountdown(15);
});
