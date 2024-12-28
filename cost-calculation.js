import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const u=document.querySelector(".budget-form"),s=document.querySelector(".your-budget"),l=document.querySelector(".costs-form"),d=document.querySelector(".costs-table");let t;const r=e=>e%10===1&&e%100!==11?"гривня":[2,3,4].includes(e%10)&&![12,13,14].includes(e%100)?"гривні":"гривень",a=e=>{e.preventDefault(),t=Number(e.target.elements.budget.value),localStorage.setItem("userBudget",t),s.style.display="block",s.textContent=`Your budget is ${t} ${r(t)}.`,u.reset()},g=e=>{e.preventDefault();const n=e.target.elements.title.value,o=Number(e.target.elements.price.value);t=t-o,localStorage.setItem("userBudget",t),s.textContent=`Your budget is ${t} ${r(t)}.`;const c=`
    <tr class="costs-table-row">
      <td class="costs-table-text">${n}</td>
      <td class="costs-table-text">${o}</td>
    </tr>
  `;d.insertAdjacentHTML("beforeend",c),e.target.elements.title.focus(),t<=0&&(s.textContent="Over budget! You've spent all your money."),l.reset()};u.addEventListener("submit",a);l.addEventListener("submit",g);localStorage.getItem("userBudget")!==null&&(t=Number(localStorage.getItem("userBudget")),s.style.display="block",s.textContent=`Your budget is ${t} ${r(t)}.`);
//# sourceMappingURL=cost-calculation.js.map
