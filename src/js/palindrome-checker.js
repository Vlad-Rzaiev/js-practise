const refs = {
  palindromeForm: document.querySelector('.palindrome-form-js'),
  resultContainer: document.querySelector('.result'),
  result: document.querySelector('.result-text'),
};

const isPalindrome = str => {
  const reversed = str.split('').reverse().join('');
  return reversed;
};

const onClickSubmitBtn = e => {
  e.preventDefault();

  refs.resultContainer.style.display = 'none';

  const userInputValue = e.target.elements['text-input'].value.trim();
  const cleanedStr = userInputValue.toLowerCase().replace(/[^a-z0-9]/g, '');

  if (userInputValue === '') {
    alert('Please input a value');
    return;
  }

  if (isPalindrome(cleanedStr) === cleanedStr) {
    refs.resultContainer.style.display = 'block';
    refs.result.textContent = `${userInputValue} is a palindrome.`;
  } else {
    refs.resultContainer.style.display = 'block';
    refs.result.textContent = `${userInputValue} is not a palindrome.`;
  }

  refs.palindromeForm.reset();
};

refs.palindromeForm.addEventListener('submit', onClickSubmitBtn);
