import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { products } from './helpers/products';

import 'basiclightbox/dist/basicLightbox.min.css';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const cartArr = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];

createMarkup(products, list);

list.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-info')) {
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    createModal(product);
  }
  if (event.target.classList.contains('js-cart')) {
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));

    const existingProductIndex = cartArr.findIndex(
      item => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      cartArr[existingProductIndex].quantity++;
      localStorage.setItem(common.KEY_CART, JSON.stringify(cartArr));
    } else {
      cartArr.push({ ...product, quantity: 1 });
      localStorage.setItem(common.KEY_CART, JSON.stringify(cartArr));
    }
  }
  if (event.target.classList.contains('js-favorite')) {
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

function findProduct(productId) {
  return products.find(({ id }) => id === productId);
}
