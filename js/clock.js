function timeShower() {
    let giveTime = new Date();

    document.querySelector('.hours').textContent = giveTime.getHours();
    document.querySelector('.minutes').textContent = giveTime.getMinutes();
    document.querySelector('.seconds').textContent = giveTime.getSeconds();
}
timeShower();
setInterval(function () {
    timeShower();
}, 1000);
