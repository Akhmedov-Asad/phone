const timerClick = document.querySelector('.list1');

timerClick.addEventListener('click', () => {
    location.href = 'timer.html'
})

const clockClick = document.querySelector('.list2');

clockClick.addEventListener('click', () => {
    location.href = 'clock.html'
})
const alarmClick = document.querySelector('.list3');

alarmClick.addEventListener('click', () => {
    location.href = 'alarm.html'
})
const translateClick = document.querySelector('.list4');

translateClick.addEventListener('click', () => {
    location.href = 'translate.html'
})



const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});