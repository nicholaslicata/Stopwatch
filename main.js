// Global Variables
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const timer = document.querySelector('.timer');

let mins = 0;
let secs = 0;
let milli = 0;
let interval;

// Event Listeners
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function displayTimer() {
   milli += 10;

   // Determine when to increment next value
   if (milli === 1000) {
       secs++;
       milli = 0;
       if (secs === 60) {
        mins ++;
        secs = 0;
       }
   }

   timer.textContent = `${addZero(mins)}:${addZero(secs)}:${milli}`;

}

function startTimer() {
    interval = setInterval(displayTimer, 10);
}
 

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval)
    timer.textContent = '00:00:00';
    milli = 0;
    secs = 0;
    minutes = 0;
    hours = 0;
}

function addZero(n) {
    return n.toString().padStart(2, '0');
}