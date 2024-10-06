import { cart } from "../../data/cart.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { getProduct } from "../../data/products.js";
import formatCurrency from "../utils/money.js";
export function renderPaymentSummary(){
 let totalPriceCents = 0;
 let shippingCostCents = 0;
 let totalItems = 0;
  cart.forEach((cartItem) => {
    const matchingProduct = getProduct(cartItem.productId);
    totalPriceCents += matchingProduct.priceCents * cartItem.quantity;
    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    shippingCostCents += deliveryOption.priceCents ;
    totalItems += cartItem.quantity;
    

  });
  let totalBeforeTaxCents = totalPriceCents + shippingCostCents;
  let tax = totalBeforeTaxCents * 0.1;
  let totalAfterTaxCents = totalBeforeTaxCents + tax;

  let paymentSummartyHTMl = '';
    paymentSummartyHTMl = `
         <div class="payment-summary-title">
            Order Summary
          </div>
          <div class="payment-summary-row">
            <div>Items (${totalItems}):</div>
            <div class="payment-summary-money">$${formatCurrency(totalPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(shippingCostCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(tax)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalAfterTaxCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>`;
   
  document.querySelector('.payment-summary').innerHTML = paymentSummartyHTMl;
}