// переменные
let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let mins = document.querySelector('#mins');
let sec = document.querySelector('#sec');

// перевод в UTC+0

// функция получения чисел
function newYearTimer() {
    let currentDate = new Date();
    let newYear = Date.UTC(2026, 0, 1);
    let difference = newYear - currentDate;

    getDays = Math.floor(difference / (1000*60*60*24));
    getHours = Math.floor(difference % ((1000*60*60*24))/(1000*60*60));
    getMins = Math.floor(difference % ((1000*60*60))/(1000*60));
    getSec = Math.floor(difference % ((1000*60))/1000);

    days.textContent = getDays;
    hours.textContent = getHours;
    mins.textContent = getMins;
    sec.textContent = getSec;
}


newYearTimer();
setInterval(newYearTimer, 1000);
