const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('minutes');
const secondsNewE1 = document.getElementById('seconds');


const newYears="22 Aug 2021";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const seconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600)%24;
    const minutes = Math.floor(seconds/60)%60;
    const secondsNew = Math.floor(seconds)%60;



  daysE1.innerHTML = days;
  hoursE1.innerHTML = formatTime(hours);
  minutesE1.innerHTML = formatTime(minutes);
  secondsNewE1.innerHTML = formatTime(secondsNew);
}

  function formatTime(time){
      return time < 10 ? '0${time}' : time;
  
}
//initial call
countdown();

setInterval(countdown,1000);
//call every second
