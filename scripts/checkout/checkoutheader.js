 //import { cart } from "../../data/cart.js";
 import {cart} from '../../data/cart-class.js';
 export function renderCheckoutHeader(){
  let totalCartItems = 0;

  cart.cartItems.forEach((item) => {
    totalCartItems +=item.quantity;
  });
  document.querySelector('.total-cart-checkout').innerHTML = `${totalCartItems} items`;
}