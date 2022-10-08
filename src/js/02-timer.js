import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputeDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

startBtn.disabled = true;
let diferense = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onClose(selectedDates) {
        console.log(selectedDates[0]);

        const currentTime = options.defaultDate.getTime();
        const selectedTime = selectedDates[0].getTime();

        if (selectedTime < currentTime) {
            startBtn.disabled = true;
            Notify.init({
                position: 'center-top',
            });
            Notify.failure('Please choose a date in the future');
        } else {
            diferense = selectedTime - currentTime;
            startBtn.disabled = false;
        }
    },
};

flatpickr(inputeDate, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

const timer = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}

startBtn.addEventListener('click', onBtnClick);

let goTimerId = null;

function onBtnClick() {
    inputeDate.disabled = true;
    startBtn.disabled = true;
    const date = convertMs(diferense);

    const goTimer = setInterval(() => {
        goTimerId = goTimer;
        date.seconds -= 1;

        if (date.seconds === 0 && date.minutes != 0) {
            date.seconds = 59;
            date.minutes -= 1;
        }
        if (date.minutes === 0 && date.hours != 0) {
            date.minutes = 59;
            date.hours -= 1;
        }
        if (date.hours === 0 && date.days != 0) {
            date.hours = 23;
            date.days -= 1;
        }
        if (
            date.days === 0 &&
            date.hours === 0 &&
            date.minutes === 0 &&
            date.seconds === 0
        ) {
            clearInterval(goTimerId);
        }
        timer.days.textContent = addLeadingZero(date.days);
        timer.hours.textContent = addLeadingZero(date.hours);
        timer.minutes.textContent = addLeadingZero(date.minutes);
        timer.seconds.textContent = addLeadingZero(date.seconds);
    }, 1000);
}
