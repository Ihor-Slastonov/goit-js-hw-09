
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

let randomColorIntervalId = null;
stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onStartBtn() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    document.body.style.backgroundColor = getRandomHexColor();
    const randomColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        randomColorIntervalId = randomColor;
    }, 1000)
}

function onStopBtn() {
    clearInterval(randomColorIntervalId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}
