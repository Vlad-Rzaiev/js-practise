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

selectLevel.addEventListener('change', e => {
  const userSelectLevel = e.target.value;

  if (userSelectLevel === 'easy') {
    lavelTitle.style.display = 'block';
    lavelTitle.textContent = 'Введіть число від 0 до 50!';
    level = 51;
  } else if (userSelectLevel === 'medium') {
    lavelTitle.style.display = 'block';
    lavelTitle.textContent = 'Введіть число від 0 до 100!';
    level = 101;
  } else if (userSelectLevel === 'hard') {
    lavelTitle.style.display = 'block';
    lavelTitle.textContent = 'Введіть число від 0 до 500!';
    level = 501;
  }
});

const getAttemptWord = count => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return 'спробу';
  } else if (
    [2, 3, 4].includes(count % 10) &&
    ![12, 13, 14].includes(count % 100)
  ) {
    return 'спроби';
  } else {
    return 'спроб';
  }
};

const getRamdomNumber = e => {
  randomNumber = Math.floor(Math.random() * level);

  generateBtn.disabled = true;
  userInputNumber.disabled = false;
  submitBtn.disabled = false;

  welcomeTitle.textContent = 'Hello Кукуруза!';

  messageError.style.display = 'none';
  messageSuccess.style.display = 'none';
  messageInfo.style.display = 'block';
  messageInfo.textContent = 'Випадкове число згенеровано!';
  selectLevel.disabled = true;
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
      'Гру завершено. Вам не вдалося відгадати число за 10 спроб. Ви конкретна кукуруза 😔';

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
    messageInfo.textContent = 'Спробуйте більше ⬆️';
  } else if (
    userInputValue > randomNumber &&
    userInputValue >= 0 &&
    userInputValue <= level - 1
  ) {
    messageError.style.display = 'none';
    messageSuccess.style.display = 'none';
    messageInfo.style.display = 'block';
    messageInfo.textContent = 'Спробуйте менше ⬇️';
  } else if (
    userInputValue === randomNumber &&
    userInputValue >= 0 &&
    userInputValue <= level - 1
  ) {
    messageError.style.display = 'none';
    messageSuccess.style.display = 'block';
    messageInfo.style.display = 'none';
    messageSuccess.textContent = `Вітаємо, Ви вгадали число за ${count} ${getAttemptWord(
      count
    )} і довели що Ви не кукуруза! 💪`;

    welcomeTitle.textContent = 'Вітаннячко Чемпіоне!';

    generateBtn.disabled = false;
    userInputNumber.disabled = true;
    submitBtn.disabled = true;
    selectLevel.disabled = false;
    count = 0;
  } else {
    messageError.style.display = 'block';
    messageSuccess.style.display = 'none';
    messageInfo.style.display = 'none';
    messageError.textContent = `Альо, кукуруза чи шо! Написано ж від 0 до ${
      level - 1
    }!🤦‍♂️`;
  }

  submitForm.reset();
};

generateBtn.addEventListener('click', getRamdomNumber);

submitForm.addEventListener('submit', clickGuessNumber);
