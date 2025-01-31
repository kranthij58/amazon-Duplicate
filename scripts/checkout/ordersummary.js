//import {cart, removeFromCart, saveLocalStorage,updateDeliveryOption, updateCart} from '../../data/cart.js';
import {cart } from '../../data/cart-class.js';
import {products, getProduct} from '../../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import {deliveryOptions,getDeliveryOption , calculateDeliveryDate} from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummarty.js';
import {renderCheckoutHeader} from './checkoutheader.js';


export function renderOrderSummary() {
  let cartSummaryHTML = '';

  cart.cartItems.forEach((cartItem) => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    const dateString = calculateDeliveryDate(deliveryOption)

    cartSummaryHTML += `
      <div class="cart-item-container
      js-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
          Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
          <img class="product-image"
            src="${matchingProduct.image}">

          <div class="cart-item-details">
            <div class="product-name js-product-name-${matchingProduct.id}">
              ${matchingProduct.name}
            </div>
            <div class="product-price js-price-${matchingProduct.id}">
              ${matchingProduct.getPrice()}
            </div>
            <div class="product-quantity">
              <span>
                Quantity: <span class="quantity-label quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
              </span>
              <span class="update-quantity-link link-primary js-update-${matchingProduct.id} "  data-product-id = "${matchingProduct.id}">
                Update
              </span>
              <input class = "update-quantity-input update-quantity-link-${matchingProduct.id}">
              <span class = "link-primary js-save-link save-link "   data-product-id = "${matchingProduct.id}">
              Save
              </span>
              <span class="delete-quantity-link link-primary js-delete-link 
              js-delete-link-${matchingProduct.id}
              " data-product-id="${matchingProduct.id}">
                Delete
              </span>
            </div>
          </div>

          <div class="delivery-options">
            <div class="delivery-options-title">
              Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct, cartItem) {
    let html = '';

    deliveryOptions.forEach((deliveryOption) => {
     const dateString = calculateDeliveryDate(deliveryOption);

      const priceString = deliveryOption.priceCents === 0
        ? 'FREE'
        : `$${(Math.round(deliveryOption.priceCents) / 100).toFixed(2)} -`;

      

      html += `
        <div class="delivery-option js-delivery-option"
          data-product-id="${matchingProduct.id}"
          data-delivery-option-id="${deliveryOption.id}">
          <input type="radio"
            
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}"
            
             ${deliveryOption.id === cartItem.deliveryOptionId ? "checked" : ""}

            >
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>
      `
    });

    return html;
  }

  document.querySelector('.js-order-summary')
    .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        cart.removeFromCart(productId);

        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.remove();
        cart.saveLocalStorage();
        renderCheckoutHeader();
        renderPaymentSummary();

        
      });
    });

  document.querySelectorAll('.js-delivery-option')
    .forEach((element) => {
      element.addEventListener('click', () => {
        const {productId, deliveryOptionId} = element.dataset;
        cart.updateDeliveryOption(productId, deliveryOptionId);
        renderOrderSummary();
        renderPaymentSummary();
      
      });
    });

  
  renderCheckoutHeader();



document.querySelectorAll('.update-quantity-link').forEach((link) => {
  link.addEventListener('click' ,() => {
    const productId = link.dataset.productId;
    document.querySelector(`.js-cart-item-container-${productId}`).classList.add('is-editing-quantity');
    

  });
});
  

document.querySelectorAll('.save-link').forEach((link) => {
  link.addEventListener('click' ,() => {
    const productId = link.dataset.productId;
    document.querySelector(`.js-cart-item-container-${productId}`).classList.remove('is-editing-quantity');
    let updateValue = document.querySelector(`.update-quantity-link-${productId}`).value;
    updateValue = Number(updateValue);
    
    cart.updateCart(productId , updateValue);
    renderOrderSummary();
    renderCheckoutHeader();
    renderPaymentSummary();

  });
});

}
