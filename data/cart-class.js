class Cart{

  cartItems;

  #localStorageKey;


  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }
 
  #loadFromStorage () {
   this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
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
 }
 
 saveLocalStorage(){
   localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
 }
 
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
   }
 
 
   removeFromCart(productId){
     let modifiedCart = [];
     this.cartItems.forEach((cartItem) => {
       if(cartItem.productId !== productId){
         modifiedCart.push(cartItem);
       }
     });
    
     this.cartItems = modifiedCart;
     this.saveLocalStorage();
    }
 
    
 updateCart(productId , updateValue){
   let matchingProduct;
   this.cartItems.forEach((cartItem) => {
     if(productId === cartItem.productId){
      matchingProduct = cartItem;
     }
   });
   matchingProduct.quantity += updateValue;
   this.saveLocalStorage();
   
 
 }
   
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


const oldCart = new Cart('old-cart');

const newCart = new Cart('new-cart');



oldCart.addToCart('dd82ca78-a18b-4e2a-9250-31e67412f98d');

console.log(oldCart);

console.log(newCart);