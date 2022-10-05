const body = document.querySelector('body');
const buttons = document.querySelector('.buttons');
const startBtn = buttons.firstElementChild;
const stopBtn = buttons.lastElementChild;

buttons.addEventListener('click', onButtonsClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let randomColorId = null;

function onButtonsClick(e) {
    if (e.target === startBtn) {
        startBtn.disabled = true;
        const randomColors = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor();
            return randomColorId = randomColors;
        }, 1000);
    }
    if (e.target === stopBtn) {
        clearInterval(randomColorId);
        startBtn.disabled = false;
    }
};
