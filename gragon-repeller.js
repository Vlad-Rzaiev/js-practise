import"./assets/modulepreload-polyfill-B5Qt9EMX.js";let x=0,o=100,n=50,l=0,r,d,u=["Stick"];const p=document.querySelector("#button1"),g=document.querySelector("#button2"),w=document.querySelector("#button3"),e=document.querySelector("#text"),k=document.querySelector("#xpText"),b=document.querySelector("#healthText"),f=document.querySelector("#goldText"),S=document.querySelector("#monsterStats"),E=document.querySelector("#monsterName"),v=document.querySelector("#monsterHealth"),T=[{name:"Stick",power:5},{name:"Dagger",power:30},{name:"Claw Hammer",power:50},{name:"Sword",power:100}],h=[{name:"Slime",level:2,health:15},{name:"Fanged Beast",level:8,health:60},{name:"DRAGON",level:20,health:300}],i=[{name:"town square","button text":["Go to store","Go to cave","Fight dragon"],"button functions":[q,M,H],text:'You are in the town square. You see a sign that says "Store".'},{name:"store","button text":["Buy 10 health (10 gold)","Buy weapon (30 gold)","Go to town square"],"button functions":[L,R,c],text:"You enter the store."},{name:"cave","button text":["Fight Slime","Fight Fanged Beast","Go to town square"],"button functions":[P,W,c],text:"You enter the cave. You see some monsters."},{name:"fight","button text":["Attack","Dodge","Run"],"button functions":[B,N,c],text:"You are fighting a monster."},{name:"kill monster","button text":["Go to town square","Go to town square","Go to town square"],"button functions":[c,c,U],text:'The monster screams "Arg!" as it dies. You gain experience points and find gold.'},{name:"lose","button text":["REPLAY?","REPLAY?","REPLAY?"],"button functions":[m,m,m],text:"You die. &#x2620;"},{name:"win","button text":["REPLAY?","REPLAY?","REPLAY?"],"button functions":[m,m,m],text:"You defeat the dragon! YOU WIN THE GAME! &#x1F389;"},{name:"easter egg","button text":["2","8","Go to town square?"],"button functions":[V,j,c],text:"You find a secret game. Pick a number above. Ten numbers will be randomly chosen between 0 and 10. If the number you choose matches one of the random numbers, you win!"}];p.onclick=q;g.onclick=M;w.onclick=H;function a(t){S.style.display="none",p.innerHTML=t["button text"][0],g.innerHTML=t["button text"][1],w.innerHTML=t["button text"][2],p.onclick=t["button functions"][0],g.onclick=t["button functions"][1],w.onclick=t["button functions"][2],e.innerHTML=t.text}function c(){a(i[0])}function q(){a(i[1])}function M(){a(i[2])}function L(){n>=10?(n-=10,o+=10,f.innerText=n,b.innerText=o):e.innerText="You do not have enough gold to buy health."}function R(){if(l<T.length-1)if(n>=30){n-=30,l++,f.innerText=n;let t=T[l].name;e.innerText="You now have a "+t+".",u.push(t),e.innerText+=" In your inventory you have: "+u}else e.innerText="You do not have enough gold to buy a weapon.",g.innerText="Sell weapon for 15 gold",g.onclick=F();else e.innerText="You already have the most powerful weapon!"}function F(){if(u.length>1){n+=15,f.innerText=n;let t=u.shift();e.innerText="You sold a "+t+".",e.innerText+=" In your inventory you have: "+u+"."}else e.innerText="Don't sell your only weapon!"}function P(){r=0,Y()}function W(){r=1,Y()}function H(){r=2,Y()}function Y(){a(i[3]),d=h[r].health,S.style.display="block",E.innerText=h[r].name,v.innerText=d}function B(){e.innerText="The "+h[r].name+" attacks.",e.innerText+=" You attack it with your "+T[l].name+".",o-=D(h[r].level),b.innerText=o,v.innerText=d,I()?d-=T[l].power+Math.floor(Math.random()*x)+1:e.innerText+=" You miss.",o<=0?A():d<=0&&(r===2?O():C()),Math.random()<=.1&&u.length!==1&&(e.innerText+=" Your "+u.pop()+" breaks.",l--)}function D(t){const s=t*5-Math.floor(Math.random()*x);return s>0?s:0}function I(){return Math.random()>.2||o<20}function N(){e.innerText="You dodge the attack from the "+h[r].name+"."}function C(){n+=Math.floor(h[r].level*6.7),x+=h[r].level,f.innerText=n,k.innerText=x,a(i[4])}function A(){a(i[5])}function O(){a(i[6])}function m(){x=0,o=100,n=50,l=0,u=["stick"],f.innerText=n,b.innerText=o,k.innerText=x,c()}function U(){a(i[7])}function V(){G(2)}function j(){G(8)}function G(t){const s=[];for(;s.length<10;)s.push(Math.floor(Math.random()*11));e.innerText="You picked "+t+`. Here are the random numbers:
`;for(let y=0;y<10;y++)e.innerText+=s[y]+`
`;s.includes(t)?(e.innerText+="Right! You win 20 gold!",n+=20,f.innerText=n):(e.innerText+="Wrong! You lose 10 health!",o-=10,b.innerText=o,o<=0&&A())}
//# sourceMappingURL=gragon-repeller.js.map
