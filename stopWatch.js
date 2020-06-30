let secondCount = 0;
let stopWatch;
let displayClock = document.querySelector('.clock');

// Function to calculate the current hours, minutes, and seconds, and display the count
function display(){
  let hours = Math.floor(secondCount/3600);
  let minutes = Math.floor((secondCount % 3600)/60);
  let seconds = Math.floor(secondCount % 60);

  let displayHours = (hours < 10) ? '0' + hours : hours;
  let displayMinutes = (minutes < 10)? '0' + minutes : minutes;
  let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;

  displayClock.textContent = displayHours + ':' + displayMinutes + ':' + displaySeconds;

  secondCount++;
}

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

start.addEventListener('click', () => {
  stopWatch = setInterval(display, 1000);
  start.disabled = true;
});

stop.addEventListener('click', () => {
  clearInterval(stopWatch);
  start.disabled = false;
});

reset.addEventListener('click', () => {
  start.disabled = false;
  secondCount = 0;
  display();
});

display();
