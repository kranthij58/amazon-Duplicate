import { cart , removeFromCart} from "../data/cart.js";
import { products } from "../data/products.js";
import { saveLocalStorage } from "../data/cart.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { deliveyOptions } from "../data/deliveryOptions.js";



document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.total-cart-checkout').innerHTML = `${updateQunatityCheckout()} items`;
  cart.forEach((cartitem) => {
    document.querySelector(`.js-quantity-label-${cartitem.productId}`).innerHTML = `${cartitem.quantity}`;

  });

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
  
  let MatchingDeliveryOption;
  deliveyOptions.forEach((option) => {
    if(option.id === cartitem.deliveryOptionsId){
      MatchingDeliveryOption = option;
    }
  });

  const dateToday = dayjs();
  const deliveryDate = dateToday.add(MatchingDeliveryOption.deliveryDays , 'days');
  const dateHTML = deliveryDate.format('dddd , MMMM DD ');
 

  checkoutHTML += `<div class="cart-item-container js-item-container-${matchingItem.id}">
    <div class="delivery-date">
        Delivery date: ${dateHTML}
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
              Quantity: <span class="quantity-label js-quantity-label-${cartitem.productId}"></span>
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
          
          ${generateDeliveryOptions(cartitem)}
         
        </div>
      </div>
    </div>`;
});
  
// generating deliveryOptions

function generateDeliveryOptions(cartitem){
  let deliveryOptionsHTML = '';
  deliveyOptions.forEach((option) => {
   
    const dateToday = dayjs();
    const deliveryDate = dateToday.add(option.deliveryDays , 'days');
    const dateHTML = deliveryDate.format('dddd , MMMM DD ');

   
    
    let  priceHTML;
    priceHTML = option.priceCents === 0 ? 'FREE' : `$${(option.priceCents /100).toFixed(2)}`;

    deliveryOptionsHTML += `<div class="delivery-option">
            <input type="radio" ${
              cartitem.deliveryOptionsId === option.id ? 'checked' : ''
            }
              class="delivery-option-input "
              name="delivery-option-${cartitem.productId}">
            <div>
              <div class="delivery-option-date">
                ${dateHTML}
              </div>
              <div class="delivery-option-price">
               ${priceHTML} - Shipping
              </div>
            </div>
          </div>`;
  });
  return deliveryOptionsHTML;
}


document.querySelector('.js-order-summary').innerHTML = checkoutHTML;

document.querySelectorAll('.js-delete-link')
.forEach((link) => {

link.addEventListener('click' , () => {
  let productId = link.dataset.productId;
  
  removeFromCart(productId);
  document.querySelector(`.js-item-container-${productId}`).remove();
  document.querySelector('.total-cart-checkout').innerHTML = `${updateQunatityCheckout()} items`;
  saveLocalStorage();
});
});
document.querySelectorAll('.js-update-quantity-link').forEach((link) => {
  link.addEventListener('click',() => {
    let productId = link.dataset.productId;
   
    document.querySelector(`.js-item-container-${productId}`).classList.add('is-editing-quantity');
    
    
  });
 
  
});
function updateCart(productId,updateValue){
  cart.forEach((cartitem) => {
    if(cartitem.productId === productId){
      
      cartitem.quantity += updateValue;
     
      document.querySelector(`.js-quantity-label-${productId}`).innerHTML = `${cartitem.quantity}`;
      document.querySelector('.total-cart-checkout').innerHTML = `${updateQunatityCheckout()} items`;
     saveLocalStorage(); 
    }
  });
}
document.querySelectorAll('.confirm-update-link').forEach((saveLink) => {
  saveLink.addEventListener('click', () => {
    let productId = saveLink.dataset.productId;
   
    document.querySelector(`.js-item-container-${productId}`).classList.remove('is-editing-quantity');
    let updateValue = document.querySelector(`.js-input-${productId}`).value;
    updateValue = Number(updateValue);
    
    updateCart(productId,updateValue);
  });
  
});
