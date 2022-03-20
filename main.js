// Importing CSS AND Windi
import 'virtual:windi.css'
import './style.css'
import './index.css'

import 'virtual:windi.css'

// Icons from Inconify
import "~icons/mdi/clock-time-five";
import "~icons/mdi/alarm";
import "~icons/mdi/format-list-numbered";
import "~icons/mdi/weather-lightning";
import "~icons/mdi/brightness-7";
import "~icons/mdi/check-bold";


// #####################################################################################
// ############                    Complete these tasks                     ############
// #####################################################################################

// ###########  Timer logic
// ###########  Use Time API to configure time and date
// ###########  Implement logic for timer
// ###########  Implement TODO Logic
// ###########  Implement the btns right top

// Global Variables
let clock = 1, timer = 2;
let activeScreen = clock;
let dots = document.querySelectorAll(".dot");

// ############ Global Functions
function setDotActive(n) {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    for (let i = 0; i < activeDotCount; i++) {
        dots[i].classList.add('active');
    }
};







// ###########  Timer logic

// Connecting time with API
let timeHero = document.querySelector("#time--hero");
let dateHero = document.querySelector("#date--hero");
console.log(dateHero);
let hours, mins, seconds, meridiem, activeDotCount, startFlag = false, btnCount = 0, intervalFunc;
let todayTime = new Date();
// Main logic
let timerTime = 1;
let timeInSec = timerTime * 60;
let remMin, remSec;

function getTime() {
    dateHero.textContent = `${todayTime.getDate()}/${todayTime.getMonth().toString().padStart(2, '0')}/${todayTime.getFullYear()}`;
    hours = todayTime.getHours();
    mins = todayTime.getMinutes();
    seconds = todayTime.getSeconds();
    if (hours > 12) {
        hours -= 12;
        meridiem = 'PM';
    }
    else meridiem = 'AM';
    timeHero.textContent = `${hours}:${mins} ${meridiem}`;
    activeDotCount = Math.trunc(seconds / 10);
    setDotActive(activeDotCount);
};
getTime();
let gettingTime = setInterval(getTime, 10000);


// Pomodoro - Timer
let timerContainer = document.querySelector('#time--container');
let timerHero = document.querySelector('#timer--hero');
console.log(timerHero);
timeHero.classList.add('hidden');
timerHero.classList.remove('hidden');
clearInterval(gettingTime);
setDotActive(0);
console.log(timerContainer);
// timerContainer.

let startBtn = document.querySelector('.right--box').querySelector('img');
let messageHero = document.querySelector('#message--hero');
let temp;
console.log(startBtn);
startBtn.addEventListener('click', function (e) {
    // Preventing the default action of the btn
    e.preventDefault();
    btnCount++;
    // Interchanging the play button with the pause button
    if (startFlag == false) {
        startFlag = true;
        temp = startBtn.src;
        startBtn.src = startBtn.dataset.src;
        startBtn.dataset.src = temp;
        intervalFunc = setInterval(() => {
            timeInSec--;
            if (timeInSec < 0) {
                messageHero.textContent = `Time up, Take a Break 😍`;
                intervalFunc.clearInterval();
            }
            remMin = Math.floor(timeInSec / 60).toString().padStart(2, '0');
            remSec = Math.floor(timeInSec % 60).toString().padStart(2, '0');
            timerHero.textContent = `${remMin}:${remSec}`;
        }, 1000);

    }
    else if (startFlag == true) {
        startFlag = false;
        temp = startBtn.src;
        startBtn.src = startBtn.dataset.src;
        startBtn.dataset.src = temp;
        if (timeInSec > 0) {
            intervalFunc.clearInterval();
        }
    }
});