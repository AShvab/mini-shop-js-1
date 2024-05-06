import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const products = [
  {
    id: 1,
    img: 'https://via.placeholder.com/150',
    name: 'test1',
    price: 1000,
    description:
      'Повний і збалансований склад, багатий на вітаміни та мінерали.',
  },
  {
    id: 2,
    img: 'https://via.placeholder.com/150',
    name: 'test2',
    price: 1000,
    description: 'Смачний та корисний корм з найкращих рибних інгредієнтів.',
  },
  {
    id: 3,
    img: 'https://via.placeholder.com/150',
    name: 'test3',
    price: 1000,
    description:
      "Спеціально розроблений для підтримки здоров'я зубів гризунів.",
  },
  {
    id: 4,
    img: 'https://via.placeholder.com/150',
    name: 'test4',
    price: 1000,
    description: 'test description',
  },
  {
    id: 5,
    img: 'https://via.placeholder.com/150',
    name: 'test5',
    price: 1000,
    description: 'test description',
  },
  {
    id: 6,
    img: 'https://via.placeholder.com/150',
    name: 'test6',
    price: 1000,
    description: 'test description',
  },
  {
    id: 7,
    img: 'https://via.placeholder.com/150',
    name: 'test7',
    price: 1000,
    description: 'test description',
  },
  {
    id: 8,
    img: 'https://via.placeholder.com/150',
    name: 'test8',
    price: 1000,
    description: 'test description',
  },
  {
    id: 9,
    img: 'https://via.placeholder.com/150',
    name: 'test9',
    price: 1000,
    description: 'test description',
  },
  {
    id: 10,
    img: 'https://via.placeholder.com/150',
    name: 'test10',
    price: 1000,
    description: 'test description',
  },
  {
    id: 11,
    img: 'https://via.placeholder.com/150',
    name: 'test11',
    price: 1000,
    description: 'test description',
  },
  {
    id: 12,
    img: 'https://via.placeholder.com/150',
    name: 'test12',
    price: 1000,
    description: 'test description',
  },
  {
    id: 13,
    img: 'https://via.placeholder.com/150',
    name: 'test13',
    price: 1000,
    description: 'test description',
  },
  {
    id: 14,
    img: 'https://via.placeholder.com/150',
    name: 'test14',
    price: 1000,
    description: 'test description',
  },
  {
    id: 15,
    img: 'https://via.placeholder.com/150',
    name: 'test15',
    price: 1000,
    description: 'test description',
  },
  {
    id: 16,
    img: 'https://via.placeholder.com/150',
    name: 'test16',
    price: 1000,
    description: 'test description',
  },
  {
    id: 17,
    img: 'https://via.placeholder.com/150',
    name: 'test17',
    price: 1000,
    description: 'test description',
  },
  {
    id: 18,
    img: 'https://via.placeholder.com/150',
    name: 'test18',
    price: 1000,
    description: 'test description',
  },
  {
    id: 19,
    img: 'https://via.placeholder.com/150',
    name: 'test19',
    price: 1000,
    description: 'test description',
  },
  {
    id: 20,
    img: 'https://via.placeholder.com/150',
    name: 'test20',
    price: 1000,
    description: 'test description',
  },
  {
    id: 21,
    img: 'https://via.placeholder.com/150',
    name: 'test21',
    price: 1000,
    description: 'test description',
  },
  {
    id: 22,
    img: 'https://via.placeholder.com/150',
    name: 'test22',
    price: 1000,
    description: 'test description',
  },
  {
    id: 23,
    img: 'https://via.placeholder.com/150',
    name: 'test23',
    price: 1000,
    description: 'test description',
  },
  {
    id: 24,
    img: 'https://via.placeholder.com/150',
    name: 'test24',
    price: 1000,
    description: 'test description',
  },
];

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

function createMarkup(arr) {
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
createMarkup(products);

list.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('js-info')) {
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
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
  if (event.target.classList.contains('js-cart')) {
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
  }
  if (event.target.classList.contains('js-favorite')) {
    const { id } = event.target.closest('.js-card').dataset;
    const product = findProduct(Number(id));
  }
}

function findProduct(productId) {
  return products.find(({ id }) => id === productId);
}
