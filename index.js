const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  let interval;
  let time;

  const formatNumber = (num) => {
    return num.length >=2 ? num : '0' + num;
  }

  const updateTimer = () => {
    const hours = '' + ~~(time / 3600);
    const minutes = '' + ~~((time / 60) % 60);
    const seconds =  '' + time % 60;


    timerEl.innerHTML = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;

    if (!time) {
      setTimeout(() => alert('Time'), 0);
      clearInterval(interval);
    }
    time -= 1;
  }

  return (seconds) => {
    clearInterval(interval);

    time = seconds;
    interval = setInterval(updateTimer, 1000);4

    updateTimer();
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
  inputEl.value = e.target.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value) || 0;

  animateTimer(seconds);

  inputEl.value = '';
});
