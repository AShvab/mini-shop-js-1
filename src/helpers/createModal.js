import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';

function createModal (product){
    const instance = basicLightbox.create(`
    <div class="modal-item">
    <img src="${product.img}" alt="${product.name}" width="300" >
    <h2 class="list-title">${product.name}</h2>
    <h3>${product.price} грн.</h3>
    <p class="list-text">${product.description}</p>
    <div class="list-btn">
      <button class="js-favorite">Add to favorite</button>
      <button class="js-cart">Add to cart</button>
    </div>
  </div>
`);
    instance.show();
}

export {createModal}