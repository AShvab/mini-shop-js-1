!function(){function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var o={id:t,exports:{}};return i[t]=o,e.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},e.parcelRequired7c6=o),o.register("7jJJd",(function(e,i){t(e.exports,"common",(function(){return n}));var n={KEY_FAVORITE:"favorite",KEY_CART:"cart"}})),o.register("l1rGz",(function(e,i){function n(t,e){var i;i=t.length?t.map((function(t){var e=t.id,i=t.img,n=t.name,o=t.price;return'\n  <li class="list-item js-card" data-id="'.concat(e,'">\n  <img class="list-img" src="').concat(i,'" alt="').concat(n,'" />\n  <h2 class="list-title">').concat(n,'</h2>\n  <p class="list-link">\n  <a href="#" class="js-info">More info</a>\n  </p>\n  <p >').concat(o,' грн.</p>\n  <div class="list-btn">\n  <button class="js-favorite">Add to favorite</button>\n  <button class="js-cart">Add to cart</button>\n  </div>\n  </li>\n  ')})).join(""):'<li >\n      <img class="list-img" src="https://im.indiatimes.in/media/content/2017/Dec/quickmeme_1514290406_725x725.jpg" alt="404" style="width: 400px; height: auto;"/>\n      </li>',e.innerHTML=i}function o(t,e){var i;i=t.length?t.map((function(t){var e=t.id,i=t.img,n=t.name,o=t.price;return'\n    <li class="list-item js-card" data-id="'.concat(e,'">\n    <img class="list-img" src="').concat(i,'" alt="').concat(n,'" />\n    <h2 class="list-title">').concat(n,'</h2>\n    <p class="list-link">\n    <a href="#" class="js-info">More info</a>\n    </p>\n    <p >').concat(o,' грн.</p>\n    <div class="list-btn">\n    <button class="js-delete">Delete</button>\n    <button class="js-cart">Add to cart</button>\n    </div>\n    </li>\n    ')})).join(""):'<li >\n        <img class="list-img" src="https://i.ytimg.com/vi/0epmoPKTP3g/maxresdefault.jpg" alt="404" style="width: 500px; height: auto;"/>\n        </li>',e.innerHTML=i}function r(t,e){var i;i=t.length?t.map((function(t){var e=t.id,i=t.name,n=t.price,o=t.quantity;return'\n      <li class="list-item js-card" data-id="'.concat(e,'">\n     \n      <h2 class="list-title">').concat(i,'</h2>\n      <div class="quantity-square">\n      <input type="number" class="quantity js-quantity " value="').concat(o,'" min="1">\n    </div>\n      <p class="js-price">').concat(n,' грн.</p>\n      <p class="js-total"></p>\n      <div class="list-btn">\n      <button class="js-delete">Delete</button>\n      <button class="js-cart">Buy now</button>\n      </div>\n      </li>\n      ')})).join(""):'<li >\n          <img class="list-img" src="https://www.gmuprinthub.com/content/images/empty-cart.png" alt="404" style="width: 500px; height: auto;"/>\n          </li>',e.innerHTML=i}t(e.exports,"createMarkup",(function(){return n})),t(e.exports,"createFavoriteMarkup",(function(){return o})),t(e.exports,"createCartMarkup",(function(){return r}))})),o.register("87LyB",(function(e,i){t(e.exports,"createModal",(function(){return r}));var n=o("dyT35");function r(t){n.create('\n    <div class="modal-item">\n    <img src="'.concat(t.img,'" alt="').concat(t.name,'" width="300" >\n    <h2 class="list-title">').concat(t.name,"</h2>\n    <h3>").concat(t.price,' грн.</h3>\n    <p class="list-text">').concat(t.description,'</p>\n    <div class="list-btn">\n      <button class="js-favorite">Add to favorite</button>\n      <button class="js-cart">Add to cart</button>\n    </div>\n  </div>\n'),{handler:null,onShow:function(t){this.handler=c.bind(t),document.addEventListener("keydown",this.handler)},onClose:function(){document.removeEventListener("keydown",this.handler)}}).show()}function c(t){"Escape"===t.code&&this.close()}})),o.register("dyT35",(function(t,e){t.exports=function t(e,i,n){function o(c,s){if(!i[c]){if(!e[c]){var a=void 0;if(!s&&a)return a(c,!0);if(r)return r(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var d=i[c]={exports:{}};e[c][0].call(d.exports,(function(t){return o(e[c][1][t]||t)}),d,d.exports,t,e,i,n)}return i[c].exports}for(var r=void 0,c=0;c<n.length;c++)o(n[c]);return o}({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.createElement("div");return i.innerHTML=t.trim(),!0===e?i.children:i.firstChild},o=function(t,e){var i=t.children;return 1===i.length&&i[0].tagName===e},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};i.visible=r,i.create=function(t,e){var i=function(t,e){var i=n('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=i.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var c=o(r,"IMG"),s=o(r,"VIDEO"),a=o(r,"IFRAME");return!0===c&&i.classList.add("basicLightbox--img"),!0===s&&i.classList.add("basicLightbox--video"),!0===a&&i.classList.add("basicLightbox--iframe"),i}(t=function(t){var e="string"==typeof t,i=t instanceof HTMLElement==1;if(!1===e&&!1===i)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(n(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),c=function(t){return!1!==e.onClose(s)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),e()}),410),!0}(i,(function(){if("function"==typeof t)return t(s)}))};!0===e.closable&&i.addEventListener("click",(function(t){t.target===i&&c()}));var s={element:function(){return i},visible:function(){return r(i)},show:function(t){return!1!==e.onShow(s)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(i,(function(){if("function"==typeof t)return t(s)}))},close:c};return s}},{}]},{},[1])(1)})),o.register("3gvGl",(function(e,i){t(e.exports,"products",(function(){return n}));var n=[{id:1,img:"https://via.placeholder.com/150",name:"test1",price:1e3,quantity:1,description:"Повний і збалансований склад, багатий на вітаміни та мінерали."},{id:2,img:"https://via.placeholder.com/150",name:"test2",price:1e3,quantity:1,description:"Смачний та корисний корм з найкращих рибних інгредієнтів."},{id:3,img:"https://via.placeholder.com/150",name:"test3",price:1e3,quantity:1,description:"Спеціально розроблений для підтримки здоров'я зубів гризунів."},{id:4,img:"https://via.placeholder.com/150",name:"test4",price:1e3,quantity:1,description:"test description"},{id:5,img:"https://via.placeholder.com/150",name:"test5",price:1e3,quantity:1,description:"test description"},{id:6,img:"https://via.placeholder.com/150",name:"test6",price:1e3,quantity:1,description:"test description"},{id:7,img:"https://via.placeholder.com/150",name:"test7",price:1e3,quantity:1,description:"test description"},{id:8,img:"https://via.placeholder.com/150",name:"test8",price:1e3,quantity:1,description:"test description"},{id:9,img:"https://via.placeholder.com/150",name:"test9",price:1e3,quantity:1,description:"test description"},{id:10,img:"https://via.placeholder.com/150",name:"test10",price:1e3,quantity:1,description:"test description"},{id:11,img:"https://via.placeholder.com/150",name:"test11",price:1e3,quantity:1,description:"test description"},{id:12,img:"https://via.placeholder.com/150",name:"test12",price:1e3,quantity:1,description:"test description"},{id:13,img:"https://via.placeholder.com/150",name:"test13",price:1e3,quantity:1,description:"test description"},{id:14,img:"https://via.placeholder.com/150",name:"test14",price:1e3,quantity:1,description:"test description"},{id:15,img:"https://via.placeholder.com/150",name:"test15",price:1e3,quantity:1,description:"test description"},{id:16,img:"https://via.placeholder.com/150",name:"test16",price:1e3,quantity:1,description:"test description"},{id:17,img:"https://via.placeholder.com/150",name:"test17",price:1e3,quantity:1,description:"test description"},{id:18,img:"https://via.placeholder.com/150",name:"test18",price:1e3,quantity:1,description:"test description"},{id:19,img:"https://via.placeholder.com/150",name:"test19",price:1e3,quantity:1,description:"test description"},{id:20,img:"https://via.placeholder.com/150",name:"test20",price:1e3,quantity:1,description:"test description"},{id:21,img:"https://via.placeholder.com/150",name:"test21",price:1e3,quantity:1,description:"test description"},{id:22,img:"https://via.placeholder.com/150",name:"test22",price:1e3,quantity:1,description:"test description"},{id:23,img:"https://via.placeholder.com/150",name:"test23",price:1e3,quantity:1,description:"test description"},{id:24,img:"https://via.placeholder.com/150",name:"test24",price:1e3,quantity:1,description:"test description"}]}))}();
//# sourceMappingURL=favorite.a054669d.js.map
