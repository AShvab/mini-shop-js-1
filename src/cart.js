import { common } from './common';
import { createCartMarkup } from './helpers/createMarkup';

const list = document.querySelector('.js-list');
const totalElement = document.querySelector('.js-total');
const buyButton = document.querySelector('.js-buy');

const cart = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];
createCartMarkup(cart, list);
updateTotalPrice();

list.addEventListener('click', onDeleteClick);
list.addEventListener('input', onQuantityChange);
buyButton.addEventListener('click', onBuyNowClick);

function onDeleteClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-delete')) {
    const { id } = event.target.closest('.js-card').dataset;
    const productId = Number(id);

    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
      cart.splice(index, 1);

      localStorage.setItem(common.KEY_CART, JSON.stringify(cart));

      createCartMarkup(cart, list);
      updateTotalPrice();
    }
  }
}

function onQuantityChange(event) {
  if (event.target.classList.contains('js-quantity')) {
    const { id } = event.target.closest('.js-card').dataset;
    const productId = Number(id);
    const productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex !== -1) {
      const newQuantity = parseInt(event.target.value);
      cart[productIndex].quantity = newQuantity;
      const totalPriceElement = event.target
        .closest('.js-card')
        .querySelector('.js-total');
      const totalPrice = newQuantity * cart[productIndex].price;
      totalPriceElement.textContent = `price: ${totalPrice} грн.`;

      localStorage.setItem(common.KEY_CART, JSON.stringify(cart));
      updateTotalPrice();
    }
  }
}

function updateTotalPrice() {
  const totalPrice = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  totalElement.textContent = `Total: ${totalPrice} грн.`;
}

function onBuyNowClick(event) {
  event.preventDefault();
  cart.length = 0;
  localStorage.setItem(common.KEY_CART, JSON.stringify(cart));
  createCartMarkup(cart, list);
  updateTotalPrice();
}
