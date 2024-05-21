function createMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) =>
          `
  <li class="list-item js-card" data-id="${id}">
  <img class="list-img" src="${img}" alt="${name}" />
  <h2 class="list-title">${name}</h2>
  <p class="list-link">
  <a href="#" class="js-info">More info</a>
  </p>
  <p >${price} грн.</p>
  <div class="list-btn">
  <button class="js-favorite">Add to favorite</button>
  <button class="js-cart">Add to cart</button>
  </div>
  </li>
  `
      )
      .join('');
  } else {
    markup = `<li >
      <img class="list-img" src="https://im.indiatimes.in/media/content/2017/Dec/quickmeme_1514290406_725x725.jpg" alt="404" style="width: 400px; height: auto;"/>
      </li>`;
  }
  list.innerHTML = markup;
}

function createFavoriteMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, img, name, price }) =>
          `
    <li class="list-item js-card" data-id="${id}">
    <img class="list-img" src="${img}" alt="${name}" />
    <h2 class="list-title">${name}</h2>
    <p class="list-link">
    <a href="#" class="js-info">More info</a>
    </p>
    <p>price: ${price} грн.</p>
    <div class="list-btn">
    <button class="js-delete">Delete</button>
    <button class="js-cart">Add to cart</button>
    </div>
    </li>
    `
      )
      .join('');
  } else {
    markup = `<li >
        
        <p>Empty</p>
        </li>`;
  }
  list.innerHTML = markup;
}


function createCartMarkup(arr, list) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({ id, name, price, quantity }) =>
          `
      <li class="list-item js-card" data-id="${id}">
        <h2 class="list-title">${name}</h2>
        <div class="quantity-square">
          <input type="number" class="quantity js-quantity" value="${quantity}" min="1">
        </div>
        <p class="js-total">price: ${price * quantity} грн.</p>
        <div class="list-btn">
          <button class="js-delete">Delete</button>
        </div>
      </li>
      `
      )
      .join('');
  } else {
    markup = `
      <li>
        <img class="list-img" src="https://www.gmuprinthub.com/content/images/empty-cart.png" alt="404" style="width: 500px; height: auto;"/>
      </li>
    `;
  }
  list.innerHTML = markup;
}

export { createMarkup, createFavoriteMarkup, createCartMarkup };
