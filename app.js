const  daysel = document.getElementById('days');
const  hoursel = document.getElementById('hours');
const  minsel = document.getElementById('mins');
const  secel = document.getElementById('secs');

const newYear = "12 may 2022";


function countdown(){
    const newYeardate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYeardate - currentDate) / 1000;
    const days =Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const mins = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds % 60)
    

   
   daysel.innerHTML =days;
   hoursel.innerHTML = hours;
   minsel.innerHTML = mins;
   secel.innerHTML = seconds;
    
}
// function formatTime(time){
//     return time < 10 ? `0${time}` : time;
// }

//inistial call
countdown()


setInterval(countdown, 1000);