const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newyears = "1 jan 2024"

function countdown(){
    const newyearsDate =  new Date (newyears);
    const currentDate = new Date();

    const totalseconds = (newyearsDate - currentDate) / 1000;

    console.log(totalseconds);

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) %24;
    const mins = Math.floor(totalseconds / 3600) %60;
    const seconds =  Math.floor(totalseconds) % 60;


    daysEl.innerHTML= days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = mins;
    secondsEl.innerHTML = seconds;

}
countdown();

setInterval(countdown, 1000)