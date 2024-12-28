const generateBtn = document.querySelector('.generate-btn');
const submitForm = document.querySelector('.submit-form');
const userInputNumber = document.querySelector('.input-number');
const submitBtn = document.querySelector('.submit-btn');
const messageInfo = document.querySelector('.info');
const messageError = document.querySelector('.error');
const messageSuccess = document.querySelector('.success');
const welcomeTitle = document.querySelector('.welcome-title');
const selectLevel = document.querySelector('#difficulty');
const lavelTitle = document.querySelector('.input-number-label');

let randomNumber;
let userInputValue;
let count = 0;
let level;
let userSelectLevel;

selectLevel.addEventListener('change', e => {
  userSelectLevel = e.target.value;

  if (userSelectLevel === 'easy') {
    messageError.style.display = 'none';
    lavelTitle.style.display = 'block';
    welcomeTitle.textContent = 'Hello Player!';
    lavelTitle.textContent = 'Enter a number from 0 to 50!';
    level = 51;
  } else if (userSelectLevel === 'medium') {
    messageError.style.display = 'none';
    lavelTitle.style.display = 'block';
    welcomeTitle.textContent = 'Hello Player!';
    lavelTitle.textContent = 'Enter a number from 0 to 100!';
    level = 101;
  } else if (userSelectLevel === 'hard') {
    messageError.style.display = 'none';
    lavelTitle.style.display = 'block';
    welcomeTitle.textContent = 'Hello Player!';
    lavelTitle.textContent = 'Enter a number from 0 to 500!';
    level = 501;
  }
});

const getAttemptWord = count => {
  return count === 1 ? 'attempt' : 'attempts';
};

const getRamdomNumber = e => {
  randomNumber = Math.floor(Math.random() * level);

  generateBtn.disabled = true;
  userInputNumber.disabled = false;
  submitBtn.disabled = false;

  welcomeTitle.textContent = 'Hello Player!';

  messageError.style.display = 'none';
  messageSuccess.style.display = 'none';
  messageInfo.style.display = 'block';
  messageInfo.textContent = `The random number is generated in the range from 0 to ${
    level - 1
  }!`;
  selectLevel.disabled = true;

  if (userSelectLevel === undefined) {
    messageError.style.display = 'block';
    messageSuccess.style.display = 'none';
    messageInfo.style.display = 'none';
    messageError.textContent =
      `Haaalo, and what level of difficulty should I choose? 😱 !`;

    generateBtn.disabled = false;
    userInputNumber.disabled = true;
    submitBtn.disabled = true;
    selectLevel.disabled = false;
  }
};

const clickGuessNumber = e => {
  e.preventDefault();
  count += 1;

  userInputValue = Number(userInputNumber.value);

  if (count >= 10) {
    messageError.style.display = 'block';
    messageSuccess.style.display = 'none';
    messageInfo.style.display = 'none';
    messageError.textContent =
      `The game is over. You failed to guess the number in 10 attempts. You are a definite loser 😔. But don't give up and try again, you will definitely succeed!`;

    welcomeTitle.textContent = 'Luuuuzeeer!';
    generateBtn.disabled = false;
    userInputNumber.disabled = true;
    submitBtn.disabled = true;
    selectLevel.disabled = false;

    submitForm.reset();

    count = 0;
  } else if (
    userInputValue < randomNumber &&
    userInputValue >= 0 &&
    userInputValue <= level - 1
  ) {
    messageError.style.display = 'none';
    messageSuccess.style.display = 'none';
    messageInfo.style.display = 'block';
    messageInfo.textContent = 'Try more ⬆️';
  } else if (
    userInputValue > randomNumber &&
    userInputValue >= 0 &&
    userInputValue <= level - 1
  ) {
    messageError.style.display = 'none';
    messageSuccess.style.display = 'none';
    messageInfo.style.display = 'block';
    messageInfo.textContent = 'Try less ⬇️';
  } else if (
    userInputValue === randomNumber &&
    userInputValue >= 0 &&
    userInputValue <= level - 1
  ) {
    messageError.style.display = 'none';
    messageSuccess.style.display = 'block';
    messageInfo.style.display = 'none';
    messageSuccess.textContent = `Congratulations, you guessed the number in ${count} ${getAttemptWord(
      count
    )} and proved that you are not a loser! 💪`;

    welcomeTitle.textContent = 'Congratulations Champion!';

    generateBtn.disabled = false;
    userInputNumber.disabled = true;
    submitBtn.disabled = true;
    selectLevel.disabled = false;
    count = 0;
  } else {
    messageError.style.display = 'block';
    messageSuccess.style.display = 'none';
    messageInfo.style.display = 'none';
    messageError.textContent = `Haaalo! It's written from 0 to ${
      level - 1
    }!🤦‍♂️`;
  }

  submitForm.reset();
};

generateBtn.addEventListener('click', getRamdomNumber);

submitForm.addEventListener('submit', clickGuessNumber);
