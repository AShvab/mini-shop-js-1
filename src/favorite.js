import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { products } from './helpers/products';

const list = document.querySelector('.js-list');

const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
createMarkup(favorite, list)

list.addEventListener('click', onClick)

function onClick (event) {
    event.preventDefault();
    if (event.target.classList.contains('js-info')) {
      const { id } = event.target.closest('.js-card').dataset;
      const product = findProduct(Number(id));
  createModal(product)
}
}

function findProduct(productId) {
    return products.find(({ id }) => id === productId);
  }
