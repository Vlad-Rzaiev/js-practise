const budgetForm = document.querySelector('.budget-form');
const yourBudget = document.querySelector('.your-budget');
const costsForm = document.querySelector('.costs-form');
const costsTable = document.querySelector('.costs-table');
const totalPrice = document.querySelector('.total-price');
const message = document.querySelector('.message');

let userInputBudget;
let totalUserPrice = 0;
const userCosts = [];

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('userBudget') !== null) {
    userInputBudget = Number(localStorage.getItem('userBudget'));

    yourBudget.style.display = 'block';
    yourBudget.textContent = `Your budget is ${userInputBudget} $.`;
  }

  const userDataFromLS =
    JSON.parse(localStorage.getItem('user-products')) || [];

  const productsFromLS = userDataFromLS
    .map(
      product => `
        <tr class="costs-table-row">
          <td class="costs-table-text">${product.name}</td>
          <td class="costs-table-text">${product.price}</td>
        </tr>
    `
    )
    .join('');
  costsTable.insertAdjacentHTML('beforeend', productsFromLS);

  totalPrice.textContent = `${userDataFromLS[userDataFromLS.length - 1].total}`;
});

const onClickBudgetSubmitBtn = e => {
  e.preventDefault();

  userInputBudget = Number(e.target.elements.budget.value);
  localStorage.setItem('userBudget', userInputBudget);
  yourBudget.style.display = 'block';
  yourBudget.textContent = `Your budget is ${userInputBudget} $`;

  e.target.reset();
};

const onClickCostsSubmitBtn = e => {
  e.preventDefault();
  message.style.display = 'none';

  const userInputProduct = e.target.elements.title.value.trim();
  const userInputPrice = Number(e.target.elements.price.value);

  if (!userInputProduct || isNaN(userInputPrice) || userInputPrice <= 0) {
    message.style.display = 'block';
    message.textContent = 'Please enter valid product name and price!';
    return;
  }

  totalUserPrice += userInputPrice;
  totalPrice.textContent = `${totalUserPrice}`;

  userCosts.push({
    name: userInputProduct,
    price: userInputPrice,
    total: totalUserPrice,
  });

  localStorage.setItem('user-products', JSON.stringify(userCosts));

  userInputBudget -= userInputPrice;
  localStorage.setItem('userBudget', userInputBudget);

  yourBudget.textContent = `Your budget is ${userInputBudget} $.`;
  message.style.display = 'block';
  message.textContent = `Product ${userInputProduct} has added`;

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

  e.target.reset();
};

budgetForm.addEventListener('submit', onClickBudgetSubmitBtn);

costsForm.addEventListener('submit', onClickCostsSubmitBtn);
