import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const p=document.querySelector(".timer-form"),f=document.querySelector(".timer"),g=document.querySelector(".message"),S=document.querySelector(".reset-btn"),c=document.querySelector(".mute-btn"),y=document.querySelector(".timer-progress");let a,l,o,d,i,u;const m=new Audio("https://res.cloudinary.com/dquehaxrj/video/upload/v1735482053/675681__nightcustard__smiths-dash-mounted-car-clock-1930s-ticks_sntf79.mp3"),h=(e,t,s,n)=>e*86400+t*3600+s*60+n,v=e=>{const t=String(Math.floor(e/86400)).padStart(2,"0"),s=String(Math.floor(e%86400/3600)).padStart(2,"0"),n=String(Math.floor(e%3600/60)).padStart(2,"0"),b=String(Math.floor(e%60)).padStart(2,"0");return`${t}:${s}:${n}:${b}`},I=e=>{e.preventDefault(),c.disabled=!0,l=e.target.elements.days,o=e.target.elements.hours,d=e.target.elements.minutes,i=e.target.elements.seconds,u=p.querySelector(".timer-btn");let t=+e.target.elements.seconds.value,s=+e.target.elements.minutes.value,n=+e.target.elements.hours.value,b=+e.target.elements.days.value,r=h(b,n,s,t);if(r<=0){g.style.display="block",g.textContent="Please enter a valid time!";return}clearInterval(a),y.style.animation="none",y.style.animation=`reduce-width ${r+1}s linear forwards`,a=setInterval(()=>{f.textContent=v(r),r<=0&&(clearInterval(a),f.textContent="Time is up!",c.disabled=!1,m.load(),m.play(),l.disabled=!1,o.disabled=!1,d.disabled=!1,i.disabled=!1,u.disabled=!1),r--},1e3),l.disabled=!0,o.disabled=!0,d.disabled=!0,i.disabled=!0,u.disabled=!0,p.reset()},k=()=>{clearInterval(a),l.disabled=!1,o.disabled=!1,d.disabled=!1,i.disabled=!1,u.disabled=!1,f.textContent="00:00:00:00",y.style.animation="none"},q=()=>{m.pause(),m.currentTime=0,c.disabled=!0};p.addEventListener("submit",I);S.addEventListener("click",k);c.addEventListener("click",q);
//# sourceMappingURL=timer.js.map
