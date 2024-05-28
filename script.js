// script.js

const digitalClock = document.getElementById('digital-clock');

function updateDigitalClock() {
    const now = new Date();
    digitalClock.textContent = now.toLocaleTimeString();
}

setInterval(updateDigitalClock, 1000);

updateDigitalClock(); // initial call
