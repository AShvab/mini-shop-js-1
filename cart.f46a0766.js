const t={KEY_FAVORITE:"favorite",KEY_CART:"cart"};function e(t,e){let n;n=t.length?t.map((({id:t,name:e,price:n,quantity:s})=>`\n      <li class="list-item js-card" data-id="${t}">\n        <h2 class="list-title">${e}</h2>\n        <div class="quantity-square">\n          <input type="number" class="quantity js-quantity" value="${s}" min="1">\n        </div>\n        <p class="js-total">price: ${n*s} грн.</p>\n        <div class="list-btn">\n          <button class="js-delete">Delete</button>\n        </div>\n      </li>\n      `)).join(""):'\n      <li>\n        <img class="list-img" src="https://www.gmuprinthub.com/content/images/empty-cart.png" alt="404" style="width: 500px; height: auto;"/>\n      </li>\n    ',e.innerHTML=n}const n=document.querySelector(".js-list"),s=document.querySelector(".js-total"),i=document.querySelector(".js-buy"),a=JSON.parse(localStorage.getItem(t.KEY_CART))??[];function c(){const t=a.reduce(((t,e)=>t+e.price*e.quantity),0);s.textContent=`Total: ${t} грн.`}e(a,n),c(),n.addEventListener("click",(function(s){if(s.preventDefault(),s.target.classList.contains("js-delete")){const{id:i}=s.target.closest(".js-card").dataset,l=Number(i),r=a.findIndex((t=>t.id===l));-1!==r&&(a.splice(r,1),localStorage.setItem(t.KEY_CART,JSON.stringify(a)),e(a,n),c())}})),n.addEventListener("input",(function(e){if(e.target.classList.contains("js-quantity")){const{id:n}=e.target.closest(".js-card").dataset,s=Number(n),i=a.findIndex((t=>t.id===s));if(-1!==i){const n=parseInt(e.target.value);a[i].quantity=n;const s=e.target.closest(".js-card").querySelector(".js-total"),l=n*a[i].price;s.textContent=`price: ${l} грн.`,localStorage.setItem(t.KEY_CART,JSON.stringify(a)),c()}}})),i.addEventListener("click",(function(s){s.preventDefault(),a.length=0,localStorage.setItem(t.KEY_CART,JSON.stringify(a)),e(a,n),c()}));
//# sourceMappingURL=cart.f46a0766.js.map