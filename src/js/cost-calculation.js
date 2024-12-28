const budgetForm = document.querySelector('.budget-form');
const yourBudget = document.querySelector('.your-budget');
const costsForm = document.querySelector('.costs-form');
const costsTable = document.querySelector('.costs-table');

let userInputBudget;
const userCosts = [];

const getCurrencyWord = amount => {
  if (amount % 10 === 1 && amount % 100 !== 11) {
    return 'гривня';
  } else if (
    [2, 3, 4].includes(amount % 10) &&
    ![12, 13, 14].includes(amount % 100)
  ) {
    return 'гривні';
  } else {
    return 'гривень';
  }
};

const onClickBudgetSubmitBtn = e => {
  e.preventDefault();

  userInputBudget = Number(e.target.elements.budget.value);
  localStorage.setItem('userBudget', userInputBudget);
  yourBudget.style.display = 'block';
  yourBudget.textContent = `Your budget is ${userInputBudget} ${getCurrencyWord(
    userInputBudget
  )}.`;

  budgetForm.reset();
};

const onClickCostsSubmitBtn = e => {
  e.preventDefault();

  const userInputProduct = e.target.elements.title.value;
  const userInputPrice = Number(e.target.elements.price.value);

  userInputBudget = userInputBudget - userInputPrice;
  localStorage.setItem('userBudget', userInputBudget);

  yourBudget.textContent = `Your budget is ${userInputBudget} ${getCurrencyWord(
    userInputBudget
  )}.`;

  const costsTableRow = `
    <tr class="costs-table-row">
      <td class="costs-table-text">${userInputProduct}</td>
      <td class="costs-table-text">${userInputPrice}</td>
    </tr>
  `;

  costsTable.insertAdjacentHTML('beforeend', costsTableRow);

  e.target.elements.title.focus();

  if (userInputBudget <= 0) {
    yourBudget.textContent = `Over budget! You've spent all your money.`;
  }
  costsForm.reset();
};

budgetForm.addEventListener('submit', onClickBudgetSubmitBtn);

costsForm.addEventListener('submit', onClickCostsSubmitBtn);

if (localStorage.getItem('userBudget') !== null) {
  userInputBudget = Number(localStorage.getItem('userBudget'));

  yourBudget.style.display = 'block';
  yourBudget.textContent = `Your budget is ${userInputBudget} ${getCurrencyWord(
    userInputBudget
  )}.`;
}
