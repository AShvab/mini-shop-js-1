import { common } from './common';
import { createFavoriteMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { products } from './helpers/products';

const list = document.querySelector('.js-list');
const cart = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
createFavoriteMarkup(favorite, list);

list.addEventListener('click', onClick);
list.addEventListener('click', onDeleteClick);
list.addEventListener('click', addToCartFromFavorite);

function onClick(event) {
  event.preventDefault();
  const card = event.target.closest('.js-card');
  if (card && event.target.classList.contains('js-info')) {
    const { id } = card.dataset;
    const product = findProduct(Number(id));
    createModal(product);
  }
}

function onDeleteClick(event) {
  event.preventDefault();
  const card = event.target.closest('.js-card');
  if (card && event.target.classList.contains('js-delete')) {
    const { id } = card.dataset;
    const productId = Number(id);

    const index = favorite.findIndex(item => item.id === productId);

    if (index !== -1) {
      favorite.splice(index, 1);

      localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favorite));

      createFavoriteMarkup(favorite, list);
    }
  }
}

function findProduct(productId) {
  return products.find(({ id }) => id === productId);
}

function addToCartFromFavorite(event) {
  event.preventDefault();
  const card = event.target.closest('.js-card');
  if (card && event.target.classList.contains('js-cart')) {
    const { id } = card.dataset;
    const product = findProduct(Number(id));

    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity++;
      localStorage.setItem(common.KEY_CART, JSON.stringify(cart));
    } else {
      cart.push({ ...product, quantity: 1 });
      localStorage.setItem(common.KEY_CART, JSON.stringify(cart));
    }

    const indexInFavorite = favorite.findIndex(item => item.id === product.id);
    if (indexInFavorite !== -1) {
      favorite.splice(indexInFavorite, 1);
      localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favorite));
      createFavoriteMarkup(favorite, list);
    }
  }
}
