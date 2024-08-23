import { cart , removeFromCart} from "../data/cart.js";
import { products } from "../data/products.js";
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.total-cart-checkout').innerHTML = `${updateQunatityCheckout()} items`;
});
function updateQunatityCheckout(){
  let totalCartQuantity = 0;
    cart.forEach((item) => {
      totalCartQuantity += item.quantity;
    });
    return totalCartQuantity;
}
let checkoutHTML = '';
cart.forEach((cartitem) => {
  let matchingItem;
  products.forEach((product) => {
    if (product.id === cartitem.productId) {
      matchingItem = product;
    }
  });
  checkoutHTML += `<div class="cart-item-container js-item-container-${matchingItem.id}">
    <div class="delivery-date">
        Delivery date: Tuesday, June 21
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingItem.image}">

        <div class="cart-item-details">
          <div class="product-name">
          ${matchingItem.name}
          </div>
          <div class="product-price">
            $${(matchingItem.priceCents /100 ).toFixed(2)}
          </div>
          <div class="product-quantity ">
            <span>
              Quantity: <span class="quantity-label">2</span>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity-link update-link-${matchingItem.id}" data-product-id = '${matchingItem.id}'>Update</span>
            <input class = "update-quantity-input js-input-${matchingItem.id}"  >
            <span class="confirm-update-link link-primary " data-product-id = "${matchingItem.id}" >Save</span>
            
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id ="${matchingItem.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input "
              name="delivery-option-${cartitem.productId}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${cartitem.productId}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${cartitem.productId}">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
});

document.querySelector('.js-order-summary').innerHTML = checkoutHTML;

document.querySelectorAll('.js-delete-link')
.forEach((link) => {

link.addEventListener('click' , () => {
  let productId = link.dataset.productId;
  
  removeFromCart(productId);
  document.querySelector(`.js-item-container-${productId}`).remove();
  document.querySelector('.total-cart-checkout').innerHTML = `${updateQunatityCheckout()} items`;
});
});
document.querySelectorAll('.js-update-quantity-link').forEach((link) => {
  link.addEventListener('click',() => {
    let productId = link.dataset.productId;
    console.log(productId);
    document.querySelector(`.js-item-container-${productId}`).classList.add('is-editing-quantity');
    
  });
 
  
});
document.querySelectorAll('.confirm-update-link').forEach((saveLink) => {
  saveLink.addEventListener('click', () => {
    let productId = saveLink.dataset.productId;
    console.log(productId);
    document.querySelector(`.js-item-container-${productId}`).classList.remove('is-editing-quantity');
  });
  // need to update the cart quantiy form the input elemt and add to cart
});
