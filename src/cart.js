import { common } from './common';
import { createCartMarkup } from './helpers/createMarkup';

import { products } from './helpers/products';

const list = document.querySelector('.js-list');
const quantityInput = document.querySelector('.js-quantity');

const cart = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];
createCartMarkup(cart, list); 


list.addEventListener('click', onDeleteClick);
list.addEventListener('input', onQuantityChange);

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
        return cart
      }
    }
  }
  
  function findProduct(productId) {
    return products.find(({ id }) => id === productId);
  }
 

  function onQuantityChange(event) {
    if (event.target.classList.contains('js-quantity')) {
      const { id } = event.target.closest('.js-card').dataset;
      const productId = Number(id);
      const productIndex = cart.findIndex(item => item.id === productId);
  
      if (productIndex !== -1) {
        const newQuantity = parseInt(event.target.value);
        cart[productIndex].quantity = newQuantity;
        const totalPriceElement = event.target.closest('.js-card').querySelector('.js-total');
        const totalPrice = newQuantity * cart[productIndex].price;
        totalPriceElement.textContent = `price: ${totalPrice} грн.`;
  
        localStorage.setItem(common.KEY_CART, JSON.stringify(cart));
      }
    }
  }
  
