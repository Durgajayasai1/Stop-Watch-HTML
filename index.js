let timeElapsed = 0;
let interval = null;

const time = document.getElementById("time");

// btns
let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");

function padStrt(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = timeElapsed;
  time.innerHTML = `${padStrt(minutes)} : ${padStrt(seconds)}`;
}

function timer() {
  timeElapsed++;
  setTime();
}

startBtn.onclick = () => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(timer, 1000);
};

pauseBtn.onclick = () => {
  clearInterval(interval);
};

function resetClock() {
  clearInterval(interval);
  timeElapsed = 0;
  setTime();
}
