!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return i[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},e.parcelRequired7c6=r),r.register("hKHmD",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,i){e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i;return t}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable})))),n.forEach((function(e){s.default(t,e,i[e])}))}return t};var c,s=(c=r("hKHmD"))&&c.__esModule?c:{default:c};var a={KEY_FAVORITE:"favorite",KEY_CART:"cart"};function l(t,e){var i;i=t.length?t.map((function(t){var e=t.id,i=t.img,n=t.name,r=t.price;return'\n    <li class="list-item js-card" data-id="'.concat(e,'">\n    <img class="list-img" src="').concat(i,'" alt="').concat(n,'" />\n    <h2 class="list-title">').concat(n,'</h2>\n    <p class="list-link">\n    <a href="#" class="js-info">More info</a>\n    </p>\n    <p>price: ').concat(r,' грн.</p>\n    <div class="list-btn">\n    <button class="js-delete">Delete</button>\n    <button class="js-cart">Add to cart</button>\n    </div>\n    </li>\n    ')})).join(""):'<li >\n        <img class="list-img" src="https://i.ytimg.com/vi/0epmoPKTP3g/maxresdefault.jpg" alt="404" style="width: 500px; height: auto;"/>\n        </li>',e.innerHTML=i}var d={};function u(t){d.create('\n    <div class="modal-item">\n    <img src="'.concat(t.img,'" alt="').concat(t.name,'" width="300" >\n    <h2 class="list-title">').concat(t.name,"</h2>\n    <h3>").concat(t.price,' грн.</h3>\n    <p class="list-text">').concat(t.description,'</p>\n    <div class="list-btn">\n      <button class="js-favorite">Add to favorite</button>\n      <button class="js-cart">Add to cart</button>\n    </div>\n  </div>\n'),{handler:null,onShow:function(t){this.handler=p.bind(t),document.addEventListener("keydown",this.handler)},onClose:function(){document.removeEventListener("keydown",this.handler)}}).show()}function p(t){"Escape"===t.code&&this.close()}d=function t(e,i,n){function r(c,s){if(!i[c]){if(!e[c]){var a=void 0;if(!s&&a)return a(c,!0);if(o)return o(c,!0);var l=new Error("Cannot find module '"+c+"'");throw l.code="MODULE_NOT_FOUND",l}var d=i[c]={exports:{}};e[c][0].call(d.exports,(function(t){return r(e[c][1][t]||t)}),d,d.exports,t,e,i,n)}return i[c].exports}for(var o=void 0,c=0;c<n.length;c++)r(n[c]);return r}({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.createElement("div");return i.innerHTML=t.trim(),!0===e?i.children:i.firstChild},r=function(t,e){var i=t.children;return 1===i.length&&i[0].tagName===e},o=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};i.visible=o,i.create=function(t,e){var i=function(t,e){var i=n('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=i.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return o.appendChild(t)}));var c=r(o,"IMG"),s=r(o,"VIDEO"),a=r(o,"IFRAME");return!0===c&&i.classList.add("basicLightbox--img"),!0===s&&i.classList.add("basicLightbox--video"),!0===a&&i.classList.add("basicLightbox--iframe"),i}(t=function(t){var e="string"==typeof t,i=t instanceof HTMLElement==1;if(!1===e&&!1===i)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(n(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),c=function(t){return!1!==e.onClose(s)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(t)||t.parentElement.removeChild(t),e()}),410),!0}(i,(function(){if("function"==typeof t)return t(s)}))};!0===e.closable&&i.addEventListener("click",(function(t){t.target===i&&c()}));var s={element:function(){return i},visible:function(){return o(i)},show:function(t){return!1!==e.onShow(s)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(i,(function(){if("function"==typeof t)return t(s)}))},close:c};return s}},{}]},{},[1])(1);var m,f,h=[{id:1,img:"https://via.placeholder.com/150",name:"test1",price:1e3,quantity:1,description:"Повний і збалансований склад, багатий на вітаміни та мінерали."},{id:2,img:"https://via.placeholder.com/150",name:"test2",price:1e3,quantity:1,description:"Смачний та корисний корм з найкращих рибних інгредієнтів."},{id:3,img:"https://via.placeholder.com/150",name:"test3",price:1e3,quantity:1,description:"Спеціально розроблений для підтримки здоров'я зубів гризунів."},{id:4,img:"https://via.placeholder.com/150",name:"test4",price:1e3,quantity:1,description:"test description"},{id:5,img:"https://via.placeholder.com/150",name:"test5",price:1e3,quantity:1,description:"test description"},{id:6,img:"https://via.placeholder.com/150",name:"test6",price:1e3,quantity:1,description:"test description"},{id:7,img:"https://via.placeholder.com/150",name:"test7",price:1e3,quantity:1,description:"test description"},{id:8,img:"https://via.placeholder.com/150",name:"test8",price:1e3,quantity:1,description:"test description"},{id:9,img:"https://via.placeholder.com/150",name:"test9",price:1e3,quantity:1,description:"test description"},{id:10,img:"https://via.placeholder.com/150",name:"test10",price:1e3,quantity:1,description:"test description"},{id:11,img:"https://via.placeholder.com/150",name:"test11",price:1e3,quantity:1,description:"test description"},{id:12,img:"https://via.placeholder.com/150",name:"test12",price:1e3,quantity:1,description:"test description"},{id:13,img:"https://via.placeholder.com/150",name:"test13",price:1e3,quantity:1,description:"test description"},{id:14,img:"https://via.placeholder.com/150",name:"test14",price:1e3,quantity:1,description:"test description"},{id:15,img:"https://via.placeholder.com/150",name:"test15",price:1e3,quantity:1,description:"test description"},{id:16,img:"https://via.placeholder.com/150",name:"test16",price:1e3,quantity:1,description:"test description"},{id:17,img:"https://via.placeholder.com/150",name:"test17",price:1e3,quantity:1,description:"test description"},{id:18,img:"https://via.placeholder.com/150",name:"test18",price:1e3,quantity:1,description:"test description"},{id:19,img:"https://via.placeholder.com/150",name:"test19",price:1e3,quantity:1,description:"test description"},{id:20,img:"https://via.placeholder.com/150",name:"test20",price:1e3,quantity:1,description:"test description"},{id:21,img:"https://via.placeholder.com/150",name:"test21",price:1e3,quantity:1,description:"test description"},{id:22,img:"https://via.placeholder.com/150",name:"test22",price:1e3,quantity:1,description:"test description"},{id:23,img:"https://via.placeholder.com/150",name:"test23",price:1e3,quantity:1,description:"test description"},{id:24,img:"https://via.placeholder.com/150",name:"test24",price:1e3,quantity:1,description:"test description"}],v=document.querySelector(".js-list"),g=null!==(m=JSON.parse(localStorage.getItem(a.KEY_CART)))&&void 0!==m?m:[],b=null!==(f=JSON.parse(localStorage.getItem(a.KEY_FAVORITE)))&&void 0!==f?f:[];function y(t){return h.find((function(e){return e.id===t}))}l(b,v),v.addEventListener("click",(function(t){if(t.preventDefault(),t.target.classList.contains("js-info")){var e=t.target.closest(".js-card").dataset.id;u(y(Number(e)))}})),v.addEventListener("click",(function(t){if(t.preventDefault(),t.target.classList.contains("js-delete")){var e=t.target.closest(".js-card").dataset.id,i=Number(e),n=b.findIndex((function(t){return t.id===i}));-1!==n&&(b.splice(n,1),localStorage.setItem(a.KEY_FAVORITE,JSON.stringify(b)),l(b,v))}})),v.addEventListener("click",(function(e){e.preventDefault();var i=e.target.closest(".js-card").dataset.id,n=y(Number(i)),r=g.findIndex((function(t){return t.id===n.id}));-1!==r?(g[r].quantity++,localStorage.setItem(a.KEY_CART,JSON.stringify(g))):(g.push(t(o)({},n,{quantity:1})),localStorage.setItem(a.KEY_CART,JSON.stringify(g)));var c=b.findIndex((function(t){return t.id===n.id}));-1!==c&&(b.splice(c,1),localStorage.setItem(a.KEY_FAVORITE,JSON.stringify(b)),l(b,v))}))}();
//# sourceMappingURL=favorite.37c110db.js.map
