const timerForm = document.querySelector('.timer-form');
const timer = document.querySelector('.timer');
const message = document.querySelector('.message');
const resetBtn = document.querySelector('.reset-btn');
const progressTimer = document.querySelector('.timer-progress');

let countDown;
let timeInput;
let submitBtn;
const alarm = new Audio('../sounds/alarm-clock.mp3');

const onClickSubmitBtn = e => {
  e.preventDefault();

  progressTimer.style.animation = `reduce-width ${100}% linear forwards`;

  timeInput = e.target.elements.userTime;
  submitBtn = timerForm.querySelector('.timer-btn');
  let userInputTime = +e.target.elements.userTime.value;

  message.style.display = 'none';

  if (userInputTime <= 0) {
    message.style.display = 'block';
    message.textContent = 'Please enter the correct number of seconds!';

    return;
  }

  clearInterval(countDown);

  countDown = setInterval(() => {
    const minutes = Math.floor(userInputTime / 60);
    const seconds = userInputTime % 60;

    timer.textContent = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;

    if (userInputTime <= 0) {
      clearInterval(countDown);
      timer.textContent = 'Time is up!';
      alarm.play();
      timeInput.disabled = false;
      submitBtn.disabled = false;
    }

    progressTimer.style.animation = `reduce-width ${
      seconds * 2
    }s linear forwards`;
    userInputTime--;
  }, 1000);

  timeInput.disabled = true;
  submitBtn.disabled = true;

  timerForm.reset();
};

const onClickResetBtn = () => {
  clearInterval(countDown);
  timeInput.disabled = false;
  submitBtn.disabled = false;
  timer.textContent = '00:00';
  alarm.pause();
  alarm.currentTime = 0;
};

timerForm.addEventListener('submit', onClickSubmitBtn);
resetBtn.addEventListener('click', onClickResetBtn);
