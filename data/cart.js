export let cart = JSON.parse(localStorage.getItem('cart'));
if(!cart) {
  cart = [{
  productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6" ,
  quantity: 2,
  deliveryOptionsId : 1,
},
{
  productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d" ,
  quantity: 1,
  deliveryOptionsId : 2 ,
}];
}

 export function saveLocalStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId,selectedQuantity){
  let matchingItem;
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });
    if (matchingItem) {
      matchingItem.quantity += selectedQuantity;
    } else {
      cart.push({
        productId: productId,
        quantity: selectedQuantity,
        deliveryOptionsId : 1,
      });
    }
   saveLocalStorage();
  }

 export function removeFromCart(productId){
  let modifiedCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      modifiedCart.push(cartItem);
    }
  });
  console.log('removed');
  cart = modifiedCart;
  saveLocalStorage();
 }