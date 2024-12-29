import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const i=document.querySelector(".budget-form"),r=document.querySelector(".your-budget"),m=document.querySelector(".costs-form"),a=document.querySelector(".costs-table"),u=document.querySelector(".total-price"),n=document.querySelector(".message");let s,l=0;const c=[];document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("userBudget")!==null&&(s=Number(localStorage.getItem("userBudget")),r.style.display="block",r.textContent=`Your budget is ${s} $.`);const t=JSON.parse(localStorage.getItem("user-products"))||[],o=t.map(e=>`
        <tr class="costs-table-row">
          <td class="costs-table-text">${e.name}</td>
          <td class="costs-table-text">${e.price}</td>
        </tr>
    `).join("");a.insertAdjacentHTML("beforeend",o),u.textContent=`${t[t.length-1].total}`});const g=t=>{t.preventDefault(),s=Number(t.target.elements.budget.value),localStorage.setItem("userBudget",s),r.style.display="block",r.textContent=`Your budget is ${s} $`,t.target.reset()},b=t=>{t.preventDefault(),n.style.display="none";const o=t.target.elements.title.value.trim(),e=Number(t.target.elements.price.value);if(!o||isNaN(e)||e<=0){n.style.display="block",n.textContent="Please enter valid product name and price!";return}l+=e,u.textContent=`${l}`,c.push({name:o,price:e,total:l}),localStorage.setItem("user-products",JSON.stringify(c)),s-=e,localStorage.setItem("userBudget",s),r.textContent=`Your budget is ${s} $.`,n.style.display="block",n.textContent=`Product ${o} has added`;const d=`
    <tr class="costs-table-row">
      <td class="costs-table-text">${o}</td>
      <td class="costs-table-text">${e}</td>
    </tr>
  `;a.insertAdjacentHTML("beforeend",d),t.target.elements.title.focus(),s<=0&&(r.textContent="Over budget! You've spent all your money."),t.target.reset()};i.addEventListener("submit",g);m.addEventListener("submit",b);
//# sourceMappingURL=cost-calculation.js.map
