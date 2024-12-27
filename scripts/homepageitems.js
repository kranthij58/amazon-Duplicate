import {products , loadProducts} from '../data/products.js';
//import {cart , addToCart} from '../data/cart.js';
import { cart } from '../data/cart-class.js';
//import formatCurrency from './utils/money.js';
loadProducts(renderHomePage);
function renderHomePage(){
let productsGridHtml = "";
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.cart-quantity').innerHTML = `${updateQunatity()}`;
});
products.forEach((product) => {
  productsGridHtml += ` <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.getStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class = 'js-selected-quantity-${product.id}' >
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          ${product.extraInfoHtml()}

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button js-add-to-cart button-primary" data-product-id = ${
            product.id
          }>
            Add to Cart
          </button>
        </div>`;
});

   function updateQunatity(){
    let totalCartQuantity = 0;
    cart.cartItems.forEach((item) => {
      totalCartQuantity += item.quantity;
    });
    return totalCartQuantity;
  }
document.querySelector(".products-grid").innerHTML = productsGridHtml;
document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    let selectedQuantity;
    let TimeoutId;
   
    //getting the quantity from user

    selectedQuantity = document.querySelector(`.js-selected-quantity-${productId}`).value;
    selectedQuantity = Number(selectedQuantity);
    
    // calling the addToCart function from cart.js

    cart.addToCart(productId,selectedQuantity);
    
   
   // displaying added message

   let addedElem =  document.querySelector(`.js-added-${productId}`);
   addedElem.classList.add('added-button');
    if(TimeoutId !== undefined){
      clearTimeout(TimeoutId);
    }
    TimeoutId = setTimeout(() => {
     addedElem.classList.remove('added-button');
    } , 3000);

  // adding elements to cart 

    document.querySelector('.cart-quantity').innerHTML = `${updateQunatity()}`;
   
  });
});


}