!function(){var t,n,a,i=document.querySelector(".js-list"),s=null!==(t=JSON.parse(localStorage.getItem("favorite")))&&void 0!==t?t:[];n=i,a=s.map((function(t){var n=t.id,a=t.img,i=t.name,s=t.price;return'\n  <li class="list-item js-card" data-id="'.concat(n,'">\n  <img class="list-img" src="').concat(a,'" alt="').concat(i,'" />\n  <h2 class="list-title">').concat(i,'</h2>\n  <p class="list-link">\n  <a href="#" class="js-info">More info</a>\n  </p>\n  <p >').concat(s,' грн.</p>\n  <div class="list-btn">\n  <button class="js-favorite">Add to favorite</button>\n  <button class="js-cart">Add to cart</button>\n  </div>\n  </li>\n  ')})).join(""),n.innerHTML=a}();
//# sourceMappingURL=favorite.3a28d1e4.js.map
