const budgetForm = document.querySelector('.budget-form');
const yourBudget = document.querySelector('.your-budget');
const costsForm = document.querySelector('.costs-form');
const costsTable = document.querySelector('.costs-table');
const totalPrice = document.querySelector('.total-price');
const message = document.querySelector('.message');
const removeBtn = document.querySelector('.remove-list-btn');

let userInputBudget;
let totalUserPrice = 0;

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('userBudget') !== null) {
    userInputBudget = Number(localStorage.getItem('userBudget'));

    yourBudget.style.display = 'block';
    yourBudget.textContent = `Your budget is ${userInputBudget} $.`;
  }

  const userDataFromLS = dataFromLS();

  const productsFromLS = userDataFromLS
    .map(
      product => `
        <tr class="costs-table-row user-row">
          <td class="costs-table-text border-right">${product.name}</td>
          <td class="costs-table-text">${product.price}</td>
        </tr>
    `
    )
    .join('');
  costsTable.insertAdjacentHTML('beforeend', productsFromLS);

  totalPrice.textContent = `${totalPriceFromLS()}`;
});

const dataFromLS = () => {
  return JSON.parse(localStorage.getItem('user-products')) || [];
};

const totalPriceFromLS = () => {
  return parseFloat(localStorage.getItem('total-price')) || 0;
};

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
  console.log(userInputPrice);

  if (!userInputProduct || isNaN(userInputPrice) || userInputPrice <= 0) {
    message.style.display = 'block';
    message.textContent = 'Please enter valid product name and price!';
    return;
  }

  totalUserPrice = parseFloat((userInputPrice + totalPriceFromLS()).toFixed(2));
  totalPrice.textContent = `${totalUserPrice}`;
  localStorage.setItem('total-price', String(totalUserPrice));

  const userCosts = dataFromLS();

  userCosts.push({
    name: userInputProduct,
    price: userInputPrice,
  });

  localStorage.setItem('user-products', JSON.stringify(userCosts));

  userInputBudget = parseFloat((userInputBudget - userInputPrice).toFixed(2));
  localStorage.setItem('userBudget', userInputBudget);

  yourBudget.textContent = `Your budget is ${userInputBudget} $.`;
  message.style.display = 'block';
  message.textContent = `Product ${userInputProduct} has added to list`;

  const costsTableRow = `
    <tr class="costs-table-row user-row">
      <td class="costs-table-text border-right">${userInputProduct}</td>
      <td class="costs-table-text">${userInputPrice}</td>
    </tr>
  `;

  costsTable.insertAdjacentHTML('beforeend', costsTableRow);

  e.target.elements.title.focus();

  if (userInputBudget < 0) {
    yourBudget.textContent = `Over budget! You've spent all your money.`;
  }

  e.target.reset();
};

const onClickRemoveBtn = () => {
  const userRows = document.querySelectorAll('.user-row');

  localStorage.removeItem('user-products');
  localStorage.removeItem('total-price');

  userRows.forEach(row => row.remove());
  totalPrice.textContent = '0';
};

budgetForm.addEventListener('submit', onClickBudgetSubmitBtn);

costsForm.addEventListener('submit', onClickCostsSubmitBtn);

removeBtn.addEventListener('click', onClickRemoveBtn);
