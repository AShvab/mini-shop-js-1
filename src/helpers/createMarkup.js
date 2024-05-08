
function createMarkup(arr, list) {
    const markup = arr
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
    list.innerHTML = markup;
  }

  export { createMarkup}