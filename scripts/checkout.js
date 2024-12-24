import { renderOrderSummary } from "./checkout/ordersummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummarty.js";
import {renderCheckoutHeader}  from "./checkout/checkoutheader.js";
import { loadProducts } from "../data/products.js";
//import '../data/cart-class.js';
//import '../data/Practice-OOPs.js';
//import '../data/backend-practice.js';
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
  renderCheckoutHeader();
});
