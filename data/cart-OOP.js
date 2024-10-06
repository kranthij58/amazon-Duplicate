
function Cart(localStorageKey) {
  const cart = {
    cartItems : undefined,
 
 
    loadFromStorage () {
   this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
   if(!this.cartItems) {
     this.cartItems = [{
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
 },
 
 saveLocalStorage(){
   localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
 },
 
 addToCart(productId,selectedQuantity){
   let matchingItem;
     this.cartItems.forEach((item) => {
       if (productId === item.productId) {
         matchingItem = item;
       }
     });
     if (matchingItem) {
       matchingItem.quantity += selectedQuantity;
     } else {
       this.cartItems.push({
         productId: productId,
         quantity: selectedQuantity,
         deliveryOptionId : '1',
       });
     }
    this.saveLocalStorage();
   },
 
 
   removeFromCart(productId){
     let modifiedCart = [];
     this.cartItems.forEach((cartItem) => {
       if(cartItem.productId !== productId){
         modifiedCart.push(cartItem);
       }
     });
    
     this.cartItems = modifiedCart;
     this.saveLocalStorage();
    },
 
    
 updateCart(productId , updateValue){
   let matchingProduct;
   this.cartItems.forEach((cartItem) => {
     if(productId === cartItem.productId){
      matchingProduct = cartItem;
     }
   });
   matchingProduct.quantity += updateValue;
   this.saveLocalStorage();
   
 
 },
   
    updateDeliveryOption(productId, deliveryOptionId) {
     let matchingItem;
   
     this.cartItems.forEach((cartItem) => {
       if (productId === cartItem.productId) {
         matchingItem = cartItem;
       }
     });
    if(matchingItem){
     matchingItem.deliveryOptionId = deliveryOptionId;
   
     this.saveLocalStorage();
    }
     
   }
 
 
 }

 return cart;
}

const oldCart = Cart('old-cart');
const newCart = Cart('new-cart');


oldCart.loadFromStorage();

newCart.loadFromStorage();

oldCart.removeFromCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');



console.log(oldCart);

console.log(newCart);