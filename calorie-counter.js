import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const $=document.getElementById("calorie-counter"),y=document.getElementById("budget"),o=document.getElementById("entry-dropdown"),v=document.getElementById("add-entry"),E=document.getElementById("clear"),l=document.getElementById("output");let s=!1;function h(t){const e=/[+\-\s]/g;return t.replace(e,"")}function S(t){const e=/\d+e\d+/i;return t.match(e)}function B(){const t=document.querySelector(`#${o.value} .input-container`),e=t.querySelectorAll('input[type="text"]').length+1,r=`
  <label for="${o.value}-${e}-name">Entry ${e} Name</label>
  <input type="text" placeholder="Name" id="${o.value}-${e}-name" />
  <label for="${o.value}-${e}-calories">Entry ${e} Calories</label>
  <input type="number" min="0" placeholder="Calories" id="${o.value}-${e}-calories" />
  `;t.insertAdjacentHTML("beforeend",r)}function L(t){t.preventDefault(),s=!1;const e=document.querySelectorAll("#breakfast input[type='number']"),r=document.querySelectorAll("#lunch input[type='number']"),u=document.querySelectorAll("#dinner input[type='number']"),c=document.querySelectorAll("#snacks input[type='number']"),b=document.querySelectorAll("#exercise input[type='number']"),f=n(e),C=n(r),I=n(u),g=n(c),a=n(b),i=n([y]);if(s)return;const d=f+C+I+g,p=i-d+a,m=p<0?"Surplus":"Deficit";l.innerHTML=`
    <span class="${m.toLowerCase()}">${Math.abs(p)} Calorie ${m}</span>
  <hr>
  <p>${i} Calories Budgeted</p>
  <p>${d} Calories Consumed</p>
  <p>${a} Calories Burned</p>
  `,l.classList.remove("hide")}function n(t){let e=0;for(const r of t){const u=h(r.value),c=S(u);if(c)return alert(`Invalid Input: ${c[0]}`),s=!0,null;e+=Number(u)}return e}function N(){const t=Array.from(document.querySelectorAll(".input-container"));for(const e of t)e.innerHTML="";y.value="",l.innerText="",l.classList.add("hide")}v.addEventListener("click",B);$.addEventListener("submit",L);E.addEventListener("click",N);
//# sourceMappingURL=calorie-counter.js.map
