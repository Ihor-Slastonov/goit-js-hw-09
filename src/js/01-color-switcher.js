const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);

let currentColorId = null;
stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onStartBtn() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    const randomColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        currentColorId = randomColor;
    }, 1000)
}

function onStopBtn() {
    clearInterval(currentColorId);
    stopBtn.disabled = true;
    startBtn.disabled = false;
}




















// const buttons = document.querySelector('.buttons');
// const startBtn = buttons.firstElementChild;
// const stopBtn = buttons.lastElementChild;

// buttons.addEventListener('click', onButtonsClick);



// let randomColorId = null;

// function onButtonsClick(e) {
//     if (e.target === startBtn) {
//         startBtn.disabled = true;
//         const randomColors = setInterval(() => {
//             body.style.backgroundColor = getRandomHexColor();
//             return randomColorId = randomColors;
//         }, 1000);
//     }
//     if (e.target === stopBtn) {
//         clearInterval(randomColorId);
//         startBtn.disabled = false;
//     }
// };
