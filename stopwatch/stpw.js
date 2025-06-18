let timer;
let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let running = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  display.textContent =
    String(hours).padStart(2, '0') + ':' +
    String(minutes).padStart(2, '0') + ':' +
    String(seconds).padStart(2, '0') + '.' +
    String(milliseconds).padStart(2, '0');
}

function tick() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  updateDisplay();
}

startBtn.onclick = function() {
  if (!running) {
    timer = setInterval(tick, 10); // 10ms for hundredths of a second
    running = true;
  }
};

stopBtn.onclick = function() {
  clearInterval(timer);
  running = false;
};

resetBtn.onclick = function() {
  clearInterval(timer);
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  running = false;
  updateDisplay();
}