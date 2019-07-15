// CLOCK
const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

const outClock = document.querySelector(".out-clock");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const middayFormat = now.toLocaleTimeString();

  formatDate(seconds, minutes, hours, middayFormat);
}

function formatDate(seconds, minutes, hours, middayFormat) {
  outClock.textContent = `
  ${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${
    seconds < 10 ? 0 : ""
  }${seconds} ${middayFormat.indexOf("AM") !== -1 ? "a.m." : "p.m."}`;
}

setInterval(setDate, 1000);
