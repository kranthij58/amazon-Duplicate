 import { cart } from "../../data/cart.js";
 export function renderCheckoutHeader(){
  let totalCartItems = 0;

  cart.forEach((item) => {
    totalCartItems +=item.quantity;
  });
  document.querySelector('.total-cart-checkout').innerHTML = `${totalCartItems} items`;
}