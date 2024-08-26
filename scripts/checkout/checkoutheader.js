 import { cart } from "../../data/cart.js";
 export function renderCheckoutHeader(){
  let totalCartItems = 0;

  cart.forEach((item) => {
    totalCartItems += 1;
  });
  document.querySelector('.total-cart-checkout').innerHTML = `${totalCartItems} items`;
}