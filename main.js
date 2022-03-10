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
let hours, mins, seconds, meridiem, activeDotCount;

function getTime() {
    let todayTime = new Date();
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