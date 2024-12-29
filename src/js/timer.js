const timerForm = document.querySelector('.timer-form');
const timer = document.querySelector('.timer');
const message = document.querySelector('.message');
const resetBtn = document.querySelector('.reset-btn');
const muteBtn = document.querySelector('.mute-btn');
const progressTimer = document.querySelector('.timer-progress');

let countDown;
let daysInput;
let hoursInput;
let minutesInput;
let secondsInput;
let submitBtn;
const alarm = new Audio('.src/sounds/clock-ticking.mp3');

const calculateTotalSeconds = (days, hours, minutes, seconds) => {
  return days * 86400 + hours * 3600 + minutes * 60 + seconds;
};

const showTime = totalSeconds => {
  const days = String(Math.floor(totalSeconds / 86400)).padStart(2, '0');
  const hours = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(
    2,
    '0'
  );
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    '0'
  );
  const seconds = String(Math.floor(totalSeconds % 60)).padStart(2, '0');

  return `${days}:${hours}:${minutes}:${seconds}`;
};

const onClickSubmitBtn = e => {
  e.preventDefault();

  muteBtn.disabled = true;

  daysInput = e.target.elements.days;
  hoursInput = e.target.elements.hours;
  minutesInput = e.target.elements.minutes;
  secondsInput = e.target.elements.seconds;
  submitBtn = timerForm.querySelector('.timer-btn');

  let userInputSeconds = +e.target.elements.seconds.value;
  let userInputMinutes = +e.target.elements.minutes.value;
  let userInputHours = +e.target.elements.hours.value;
  let userInputDays = +e.target.elements.days.value;

  let totalSeconds = calculateTotalSeconds(
    userInputDays,
    userInputHours,
    userInputMinutes,
    userInputSeconds
  );

  if (totalSeconds <= 0) {
    message.style.display = 'block';
    message.textContent = 'Please enter a valid time!';
    return;
  }

  clearInterval(countDown);
  progressTimer.style.animation = 'none';

  setTimeout(() => {
    progressTimer.style.animation = `reduce-width ${
      totalSeconds + 1
    }s linear forwards`;
  }, 0);

  countDown = setInterval(() => {
    timer.textContent = showTime(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(countDown);
      timer.textContent = 'Time is up!';
      muteBtn.disabled = false;
      alarm.load();
      alarm.play();
      daysInput.disabled = false;
      hoursInput.disabled = false;
      minutesInput.disabled = false;
      secondsInput.disabled = false;
      submitBtn.disabled = false;
    }

    totalSeconds--;
  }, 1000);

  daysInput.disabled = true;
  hoursInput.disabled = true;
  minutesInput.disabled = true;
  secondsInput.disabled = true;
  submitBtn.disabled = true;

  timerForm.reset();
};

const onClickResetBtn = () => {
  clearInterval(countDown);
  daysInput.disabled = false;
  hoursInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
  submitBtn.disabled = false;
  timer.textContent = '00:00:00:00';
  progressTimer.style.animation = 'none';
};

const onClickMuteBtn = () => {
  alarm.pause();
  alarm.currentTime = 0;
  muteBtn.disabled = true;
};

timerForm.addEventListener('submit', onClickSubmitBtn);
resetBtn.addEventListener('click', onClickResetBtn);
muteBtn.addEventListener('click', onClickMuteBtn);
