import {cart , addToCart ,updateDeliveryOption, removeFromCart, saveLocalStorage ,loadFromStorage} from '../../data/cart.js';
describe('Test suite : Testing add to cart functionality .' , () => {
  beforeEach(() => {
    spyOn(localStorage , 'setItem');
  });
  it('Test case 1 : Already existing product' , () => {
    
    spyOn(localStorage , 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6" ,
        quantity: 2,
        deliveryOptionId : '1',
    }]);
    });
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(cart[0].quantity).toEqual(NaN);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    

  });
  it ('Test case 2 : Adding new producct to the cart ' , () => {
   
    spyOn(localStorage , 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(cart[0].quantity).toEqual(undefined);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
   
  });
});



describe('Test suite : remove form cart' , ()=> {
  
it('removing a product' , () => {

spyOn(localStorage , 'setItem');
spyOn(localStorage , 'getItem').and.callFake(() => {

  return JSON.stringify([{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6" ,
    quantity: 2,
    deliveryOptionId : '1',
    
},
{
  productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d" ,
  quantity: 1,
  deliveryOptionId : '2' ,
}
]);
});
loadFromStorage();
expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
removeFromCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
expect(localStorage.setItem).toHaveBeenCalledTimes(1);
expect(cart.length).toEqual(1);
removeFromCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
expect(cart[0].productId).toEqual('15b6fc6f-327a-4ec4-896f-486349e85a3d');

expect(localStorage.setItem).toHaveBeenCalledTimes(2);
});



});

describe('test suite : for updating delivery option ' , () => {

  it('test case 1 ' , () => {
    spyOn(localStorage , 'setItem');
    spyOn(localStorage , 'getItem').and.callFake(() => {
    
      return JSON.stringify([{
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6" ,
        quantity: 2,
        deliveryOptionId : '1',
        
    },
    {
      productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d" ,
      quantity: 1,
      deliveryOptionId : '2' ,
    }
    ]);
    });
    loadFromStorage();
    expect(cart[1].deliveryOptionId).toEqual('2');
    updateDeliveryOption( '15b6fc6f-327a-4ec4-896f-486349e85a3d' , '1');
   
    expect(cart[1].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    updateDeliveryOption( '896f-486349e85a3d' , '1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);

  });
});