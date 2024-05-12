import { common } from './common';
import { createFavoriteMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { products } from './helpers/products';



const list = document.querySelector('.js-list');

const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
createFavoriteMarkup(favorite, list);

list.addEventListener('click', onClick);
list.addEventListener('click', onDeleteClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-info')) {
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
    createModal(product);
  }
}

function onDeleteClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-delete')) {
    const { id } = event.target.closest('.js-card').dataset;
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


