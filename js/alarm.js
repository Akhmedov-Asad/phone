const display = document.getElementById('clock');
const audio = new Audio('alarm.mp3');
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
  const date = new Date();

  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  display.innerText=`${hour} : ${minute} : ${second}`
}

function formatTime(time) {
    if(time < 10){
        return '0' + time;
    }
    return time;
}

function setAlarmTime(value){
    alarmTime = value;
}

function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);
        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();
            alarmTimeout = setTimeout(() => audio.play(), timeout);
            alert('Budilnik qoyildi')  
        }
    }
}

function clearAlarm() {
    audio.pause();
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Budilnik ochirildi');
    }
}

setInterval(updateTime, 1000)