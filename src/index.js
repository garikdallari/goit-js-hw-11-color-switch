import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]')
};

const DELAY = 1000;
let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {

    timerId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length - 1);
        document.body.style.backgroundColor = colors[randomColor];
        refs.startBtn.disabled = true

    }, DELAY);
}

function onStopBtnClick() {
    clearInterval(timerId);
    refs.startBtn.disabled = false
}

