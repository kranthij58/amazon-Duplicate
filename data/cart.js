

export let cart;
export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart) {
    cart = [{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6" ,
    quantity: 2,
    deliveryOptionId : '1',
  },
  {
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d" ,
    quantity: 1,
    deliveryOptionId : '2' ,
  }];
  }
}
loadFromStorage();

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
        deliveryOptionId : '1',
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

 
export function updateCart(productId , updateValue){
  let matchingProduct;
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
     matchingProduct = cartItem;
    }
  });
  matchingProduct.quantity += updateValue;
  saveLocalStorage();
 

}
  
 export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
 if(matchingItem){
  matchingItem.deliveryOptionId = deliveryOptionId;

  saveLocalStorage();
 }
  
}